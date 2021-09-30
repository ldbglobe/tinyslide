require('./tinyslide.scss')

const TINYSLIDE_GLOBALS = {
	index:0,
	instances:{},
	nextQueue:[],
	prevQueue:[],
}
window.TINYSLIDE_GLOBALS = TINYSLIDE_GLOBALS;

function BuildTinyslideOnLoad() {
	function domReady(fn) {
		// If late; I mean on time.
		if (document.readyState === "interactive" || document.readyState === "complete" )
			fn();
		// If we're early to the party
		document.addEventListener("DOMContentLoaded", fn);
	}
	domReady(function() {
		//******************************************************************
		// TINYSLIDE AUTOMATIC INSTANCIER 😎
		//******************************************************************
		const domElements = document.querySelectorAll('.tinyslide')
		domElements.forEach(function(domElement){
			Tinyslide.Build(domElement)
		})

		window.addEventListener('resize', function(){
			Tinyslide.GetInstances().forEach(function([id,tinyslide]){
				tinyslide.redraw();
			});
		});
	});
}


export class Tinyslide {

	static AutomaticBuild() {
		BuildTinyslideOnLoad();
	}

	static GetInstances() {
		return Object.entries(TINYSLIDE_GLOBALS.instances);
	}
	static GetInstance(id) {
		return TINYSLIDE_GLOBALS.instances[id] || undefined;
	}
	static Build(domSource,options) {
		if(typeof domSource==='string')
		{
			return Object.entries(document.querySelectorAll(domSource)).map(([key,node]) => {
				Tinyslide.Build(node,options)
			});
		}

		const ts = new Tinyslide(domSource,options);
		//console.log(domSource,ts);
		ts.init();
		return ts;
	}

	// -------------------------------------------------

	constructor(domSource,options) {
		if(domSource.dataset.tinyslideID>0)
		{
			return Tinyslide.GetInstance(domSource.dataset.tinyslideID);
		}
		else
		{
			let ID = ++TINYSLIDE_GLOBALS.index;
			domSource.dataset.tinyslideID = ID;
			this.state = {
				ID:ID,
				init:false,
				index:0,
				animation: {
					mode:null,
					timeout:null,
				},
				autoplay: {
					mode:true,
					timeout:null,
				},
				domSource:domSource,
				domWrapper:null,
				domSlider:null,
				domControls:null,
				domControlPrev:null,
				domControlNext:null,
				domItems:[],
				style:options?.style || {},
				itemDecorator:options?.itemDecorator || null
			}
		}
	}
	getId() {
		return this.state.ID;
	}
	init() {
		if(TINYSLIDE_GLOBALS.instances[this.getId()] === undefined)
			TINYSLIDE_GLOBALS.instances[this.getId()] = this;

		if(!this.state.init)
		{
			this.state.init=true
			this.__init_clone_original_item();
			this.__init_build_dom();
			this.__init_apply_style();
		}
		this.redraw();
	}
	destroy() {
		clearTimeout(this.state.animation.timeout);
		clearTimeout(this.state.autoplay.timeout);
		this.state.domSource.innerHTML = '';
		this.state.domSource.classList.remove('tinyslide-ready');
		this.state.domItems.forEach((node) => this.state.domSource.appendChild(node))
		delete TINYSLIDE_GLOBALS.instances[this.getId()];
		delete this;
	}
	redraw() {
		if(document.body.contains(this.state.domSource))
		{
			var current_size = parseInt(this.getCssProperty('size'));

			if(this.state.domItems.length <= current_size)
			{
				this.autoplay(false);
				this.state.index = 0;
				current_size = this.state.domItems.length;
				this.state.domSource.classList.add('hide-out-items');
				this.state.domSource.style.setProperty('--tinyslide-size', current_size);
			}
			else
			{
				this.state.domSource.classList.remove('hide-out-items');
			}

			let flexItemExtra = 2;
			let flexItemCount = Math.max(current_size*3+flexItemExtra,this.state.domItems.length);
			this.state.domSource.style.setProperty('--tinyslide-private-flex-item-extra',flexItemExtra)
			this.state.domSource.style.setProperty('--tinyslide-private-flex-item-count',flexItemCount)

			this.state.domSlider.innerHTML = '';
			for(var i=0; i<flexItemCount; i++)
			{
				var _i = (this.state.index + i - flexItemExtra) % this.state.domItems.length;
				_i = _i >= 0 ? _i : _i + this.state.domItems.length;
				_i = _i % this.state.domItems.length;

				var item = this.state.domItems[_i].cloneNode(true);
				if(i < flexItemExtra || i > current_size + flexItemExtra-1)
				{
					item.classList.add('out')
				}
				else
				{
					item.classList.add('in')
				}

				if(i==flexItemExtra-1)
				{
					item.classList.add('out-before')
				}
				if(i==flexItemExtra)
				{
					item.classList.add('in-first')
				}

				if(i==current_size + (flexItemExtra))
				{
					item.classList.add('out-after')
				}

				if(i==current_size + (flexItemExtra-1))
				{
					item.classList.add('in-last')
				}

				this.state.domSlider.appendChild(item);
			}
		}
		this.play();
	}
	play()
	{
		if(this.state.animation.mode!==null)
			return ;
		var current_autoplay = this.getCssProperty('autoplay', 'timing');
		if(current_autoplay>0 && this.state.autoplay.mode===true)
		{
			clearTimeout(this.state.autoplay.timeout);
			this.state.autoplay.timeout = setTimeout(() => {
				this.next();
			},current_autoplay);
		}
	}

	autoplay(v)
	{
		clearTimeout(this.state.autoplay.timeout);
		if(v!=='clear')
		{
			this.state.autoplay.mode = v ? true:false;
		}
		if(this.state.autoplay.mode)
		{
			this.play();
		}
	}

	anim_reset()
	{
		this.autoplay('clear');
		clearTimeout(this.state.animation.timeout);
		this.state.domSource.classList.remove('anim-prev');
		this.state.domSource.classList.remove('anim-next');
		this.state.animation.mode = null;
	}

	next()
	{
		this.__helper_removeFromQueue()
		TINYSLIDE_GLOBALS.nextQueue.push(this.getId());
	}
	doNext()
	{
		if(this.state.animation.mode!=='next')
		{
			this.anim_reset();
			this.state.animation.mode = 'next';
			this.state.domSource.classList.add('anim-next');
			this.state.animation.timeout = setTimeout(() => {
				this.state.index++;
				this.anim_reset();
				this.redraw();
			},this.getCssProperty('speed', 'timing'))
		}
	}

	prev()
	{
		this.__helper_removeFromQueue()
		TINYSLIDE_GLOBALS.prevQueue.push(this.getId());
	}
	doPrev()
	{
		if(this.state.animation.mode!=='prev')
		{
			this.anim_reset();
			this.state.animation.mode = 'prev';
			this.state.domSource.classList.add('anim-prev');
			this.state.animation.timeout = setTimeout(() => {
				this.state.index--;
				this.anim_reset();
				this.redraw();
			},this.getCssProperty('speed', 'timing'))
		}
	}

	getCssProperty(propertyName, type=null)
	{
		let value =  getComputedStyle(this.state.domSource).getPropertyValue('--tinyslide-'+propertyName);
		if(type=="timing")
		{
			value =
				value.match(/^[0-9.]+s$/) ? 1000 * value.replaceAll(/[^0-9.]/g,'') // s
				: value.replaceAll(/[^0-9.]/g,''); // ms

			let timingChunk = 500;
			value = value ? (value<timingChunk ? timingChunk : Math.round(value/timingChunk)*timingChunk) : 0;
		}
		return value;
	}

	__init_clone_original_item() {
		window.test = this.state.domSource
		this.state.domItems = Object.entries(this.state.domSource.children).map(function([index,domItem]){
			return domItem.cloneNode(true);
		});
	}

	__init_build_dom() {
		this.state.domSource.innerHTML = '';

		// build a wrapper in the source root
		this.state.domWrapper = document.createElement('div');
		this.state.domWrapper.classList.add('tinyslide-wrapper');
		// add mouseevent to the global wrapper
		this.state.domWrapper.addEventListener('mousemove',() => this.autoplay(false), true);
		this.state.domWrapper.addEventListener('mouseout',() => this.autoplay(true), true);

		this.state.domSlider = document.createElement('div');
		this.state.domSlider.classList.add('tinyslide-slider');
		// add slider container to the main wrapper
		this.state.domWrapper.appendChild(this.state.domSlider);

		this.state.domControls = document.createElement('div');
		this.state.domControls.classList.add('tinyslide-control');

		this.state.domControlPrev = document.createElement('div');
		this.state.domControlPrev.classList.add('tinyslide-ctrl-prev');
		this.state.domControlPrev.innerHTML = '<span>◄</span>';
		this.state.domControlPrev.addEventListener('click', ()=>this.doPrev(), true);
		this.state.domControls.appendChild(this.state.domControlPrev);

		this.state.domControlNext = document.createElement('div');
		this.state.domControlNext.classList.add('tinyslide-ctrl-next');
		this.state.domControlNext.innerHTML = '<span>►</span>';
		this.state.domControlNext.addEventListener('click', ()=>this.doNext(), true);
		this.state.domControls.appendChild(this.state.domControlNext);

		// add control container to the main wrapper
		this.state.domWrapper.appendChild(this.state.domControls);

		// mark original element as "Init" and inject dom content
		this.state.domSource.appendChild(this.state.domWrapper);
		this.state.domSource.classList.add('tinyslide-ready');
	}

	__init_apply_style() {
		Object.entries(this.state.style).forEach(([key,value]) => {
			this.state.domSource.style.setProperty('--tinyslide-'+key, value);
		});
	}

	__helper_wrap(el, wrapper) {
		el.parentNode.insertBefore(wrapper, el);
		wrapper.appendChild(el);
		return wrapper;
	}

	__helper_removeFromQueue()
	{
		var index = TINYSLIDE_GLOBALS.nextQueue.indexOf(this.getId());
		if(index>-1)
			delete TINYSLIDE_GLOBALS.nextQueue[index]

		var index = TINYSLIDE_GLOBALS.prevQueue.indexOf(this.getId());
		if(index>-1)
			delete TINYSLIDE_GLOBALS.prevQueue[index]
	}
}

setInterval(() => {
	if(TINYSLIDE_GLOBALS.nextQueue.length>0)
	{
		//console.log(TINYSLIDE_GLOBALS.nextQueue)
		TINYSLIDE_GLOBALS.nextQueue.forEach((id) => { if(id) Tinyslide.GetInstance(id)?.doNext(); })
		TINYSLIDE_GLOBALS.nextQueue=[];
	}
	if(TINYSLIDE_GLOBALS.prevQueue.length>0)
	{
		//console.log(TINYSLIDE_GLOBALS.prevQueue)
		TINYSLIDE_GLOBALS.prevQueue.forEach((id) => { if(id) Tinyslide.GetInstance(id)?.doPrev(); })
		TINYSLIDE_GLOBALS.prevQueue=[];
	}
},500)

export default Tinyslide