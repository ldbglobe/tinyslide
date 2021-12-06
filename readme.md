Demonstration https://codepen.io/ldbglobe/full/mdmwpoK

## Usage

CDN: https://cdn.jsdelivr.net/npm/tinyslide@latest/dist/index.js

NPM/YARN:
```bash
yarn add -D tinyslide
import Tinyslide from 'Tinyslide';
```
"window."" prefix is not needed for NPM module usage

- automatic instanciation based on .tinyslide class
```js
window.Tinyslide.AutomaticBuild();
```

- or custom building with options injection
```js
window.Tinyslide.Build(domNodeOrCssSelector,{style:{
    "size": 1,
    "speed": "1s",
    "autoplay": "3s",
    "btn-width": "0",
}});
```

Note :
- domNode => return the tinyslide instance
- cssSelector => return an array of tinyslide instances

to dismount an instance simply call the .destroy() method
ex : 
```js
var mySlide = Tinyslide.Build(domNode);
mySlide.destroy();

var mySlides = Tinyslide.Build('.mySlides');
mySlides.forEach((slide) => slide.destroy());
```
