const TINYSLIDE_GLOBALS = {
	index:0,
}

export class Tinyslide {
	constructor(domElement) {
		this.states = {
			ID:TINYSLIDE_GLOBALS.index++,
			domElement:domElement,
		}
	}
	getId() {
		return this.states.ID;
	}
	init() {
		//console.log('init',this.states)
	}
	redraw() {
		//console.log('redraw',this.states)
	}
}

export default Tinyslide

/*




	.each(function(){
		tinyslide_init($(this))
	});
	$(window).on('resize',function(){
		$('.tinyslide').each(function(){
			tinyslide_redraw($(this));
		});
	})

	function tinyslide_init(tinyslide) {
		var items = [];
		tinyslide.children().each(function(){
			var item = $(this).clone()
			// pas de lazy loading sur les tinyslide (sinon c'est pas joli à voir ^^)
			item.find('[data-background-image]').each(function(){
				$(this).css({backgroundImage:"url('"+$(this).data('backgroundImage')+"')"});
				$(this).removeAttr('data-background-image')
			})
			if(item.data('backgroundImage'))
			{
				item.css({backgroundImage:"url('"+item.data('backgroundImage')+"')"});
				item.removeAttr('data-background-image')
			}
			items.push(item);
		})
		tinyslide.addClass('tinyslide-init');
		tinyslide.data('tinyslide-items',items);
		tinyslide.wrap('<div class="tinyslide-wrapper"></div>');

		var control = $('<div class="tinyslide-control"></div>');
	  
		var ctrl_prev = $('<button class="tinyslide-ctrl-prev"><span>⟨</span></button>');
		ctrl_prev.data('tinyslide',tinyslide);
		ctrl_prev.on('click',function(){ tinyslide_prev($(this).data('tinyslide'))})

		var ctrl_next = $('<button class="tinyslide-ctrl-next"><span>⟩</span></button>');
		ctrl_next.data('tinyslide',tinyslide);
		ctrl_next.on('click',function(){ tinyslide_next($(this).data('tinyslide'))})

		control.append(ctrl_prev).append(ctrl_next);

		tinyslide.parent().append(control);
		tinyslide.data('tinyslide-index',0);
		tinyslide_redraw(tinyslide);
	  
	  tinyslide.on('mousemove',tinyslide_stop_autoplay.bind(null,tinyslide))
	  tinyslide.on('mouseout',tinyslide_start_autoplay.bind(null,tinyslide))
	  control.on('mousemove',tinyslide_stop_autoplay.bind(null,tinyslide))
	  control.on('mouseout',tinyslide_start_autoplay.bind(null,tinyslide))
	}

	function tinyslide_getCssProperty(tinyslide, propertyName, type=null)
	{
	  var value =  getComputedStyle(tinyslide[0]).getPropertyValue('--'+propertyName);
	  if(type=="timing")
	  {
	    value = 
	      value.match(/[0-9.]+s$/) ? 1000 * value.replace(/[^0-9.]/,'') // s
	      : value.replace(/[^0-9.]/,''); // ms
	  }
	  return value;
	}

	function tinyslide_redraw(tinyslide) {
		var w = $(window).width();
	  var current_size = tinyslide_getCssProperty(tinyslide, 'tinyslide-size');
		var index = tinyslide.data('tinyslide-index');
		var items = tinyslide.data('tinyslide-items');

		//console.log(items.length,current_size)

		if(items.length<=current_size)
		{
			tinyslide.addClass('hide-out-items');
			index = 0;
			current_size = items.length;
	    tinyslide[0].style.setProperty('--tinyslide-size', current_size);
		}
		else
		{
			tinyslide.removeClass('hide-out-items');
		}

		tinyslide.empty();
		for(var i=0; i<(current_size)*3; i++)
		{
			var _i = (index+i-current_size)%items.length;
			_i = _i>=0 ? _i : _i + items.length;
			_i = _i % items.length;

			var item = items[_i].clone();
			if(i<current_size || i>current_size*2 - 1)
			{
				item.addClass('out')
			}
			else
			{
				item.addClass('in')
			}

			if(i==current_size-1)
			{
				item.addClass('out-before')
			}
			if(i==current_size)
			{
				item.addClass('in-first')
			}

			if(i==current_size*2)
			{
				item.addClass('out-after')
			}
			if(i==current_size*2 -1 )
			{
				item.addClass('in-last')
			}

			tinyslide.append(item);
		}
	  tinyslide_autoplay(tinyslide);  
	}

	function tinyslide_autoplay(tinyslide)
	{
	  if(tinyslide.hasClass('anim-prev') || tinyslide.hasClass('anim-next'))
	    return ;

	  var current_autoplay = tinyslide_getCssProperty(tinyslide, 'tinyslide-autoplay', 'timing')
	  var no_autoplay = tinyslide[0].dataset.tinyslide_no_autoplay==0;
	  if(current_autoplay>0 && no_autoplay)
	  {
	    clearTimeout(tinyslide[0].dataset.tinyslide_timeout);
	    tinyslide[0].dataset.tinyslide_timeout = setTimeout(function(){
	     tinyslide_next(tinyslide);
	    }.bind(null,tinyslide),current_autoplay);
	  }
	}
	function tinyslide_clear_autoplay(tinyslide)
	{
	  clearTimeout(tinyslide[0].dataset.tinyslide_timeout);
	}
	function tinyslide_stop_autoplay(tinyslide)
	{
	  tinyslide_clear_autoplay(tinyslide);
	  tinyslide[0].dataset.tinyslide_no_autoplay = 1
	}
	function tinyslide_start_autoplay(tinyslide)
	{
	  tinyslide_clear_autoplay(tinyslide);
	  tinyslide[0].dataset.tinyslide_no_autoplay = 0
	  tinyslide_autoplay(tinyslide)
	}

	function tinyslide_next(tinyslide)
	{
		if(!tinyslide.hasClass('anim-next'))
		{
	    tinyslide_clear_autoplay(tinyslide)
			tinyslide.addClass('anim-next');
			setTimeout(function(tinyslide){
				var index = tinyslide.data('tinyslide-index');
				tinyslide.data('tinyslide-index',index+1);
				tinyslide.removeClass('anim-next');
				tinyslide_redraw(tinyslide);
			}.bind(null,tinyslide),tinyslide_getCssProperty(tinyslide, 'tinyslide-speed', 'timing'))
		}
		
	}
	function tinyslide_prev(tinyslide)
	{
		if(!tinyslide.hasClass('anim-prev'))
		{
	    tinyslide_clear_autoplay(tinyslide)
			tinyslide.addClass('anim-prev');
			setTimeout(function(tinyslide){
				var index = tinyslide.data('tinyslide-index');
				tinyslide.data('tinyslide-index',index-1);
				tinyslide.removeClass('anim-prev');
				tinyslide_redraw(tinyslide);
			}.bind(null,tinyslide),tinyslide_getCssProperty(tinyslide, 'tinyslide-speed', 'timing'))
		}
	}
	//*********************************
})()

*/