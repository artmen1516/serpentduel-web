/* start module: pyjsdl.pyjsobj */
$pyjs['loaded_modules']['pyjsdl.pyjsobj'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.pyjsobj']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.pyjsobj'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.pyjsobj'];
	$m['__repr__'] = function() { return '<module: pyjsdl.pyjsobj>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.pyjsobj';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['pyjsobj'] = $pyjs['loaded_modules']['pyjsdl.pyjsobj'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjsdl', null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjsdl', null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', 'pyjsdl', null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.FocusPanel.SimplePanel', 'pyjsdl', null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjsdl', null, false);
	$m['Color'] = $p['___import___']('pyjamas.Canvas.Color.Color', 'pyjsdl', null, false);
	$m['loadImages'] = $p['___import___']('pyjamas.Canvas.ImageLoader.loadImages', 'pyjsdl', null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', 'pyjsdl', null, false);
	$m['TextArea'] = $p['___import___']('pyjamas.ui.TextArea.TextArea', 'pyjsdl', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjsdl', null, false);
	$m['_HTML5Canvas'] = $p['___import___']('pyjamas.Canvas.HTML5Canvas.HTML5Canvas', 'pyjsdl', null, false);
	$m['Audio'] = $p['___import___']('pyjamas.media.Audio.Audio', 'pyjsdl', null, false);
	$m['MouseWheelHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsobj';
		$cls_definition['_listener'] = $p['dict']([]);
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool2,$bool1,element;
			element = self['getElement']();
			if ((($bool1=$p['hasattr'](element, 'onwheel')) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
					false :
					(typeof $bool1=='object'?
						(typeof $bool1['__nonzero__']=='function'?
							$bool1['__nonzero__']() :
							(typeof $bool1['__len__']=='function'?
								($bool1['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['_mousewheel'] = 'wheel';
			}
			else if ((($bool2=$p['hasattr'](element, 'onmousewheel')) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
					false :
					(typeof $bool2=='object'?
						(typeof $bool2['__nonzero__']=='function'?
							$bool2['__nonzero__']() :
							(typeof $bool2['__len__']=='function'?
								($bool2['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['_mousewheel'] = 'mousewheel';
			}
			else {
				self['_mousewheel'] = 'DOMMouseScroll';
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addMouseWheelListener', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda1,$attr1,$attr2,$attr4,element,listener,$attr3;
			element = self['getElement']();
			var 			$lambda1 = function(event) {

				return self['onMouseWheel'](event);
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = [null,null,['event']];
			listener = $lambda1;
			self['_listener']['__setitem__'](self, listener);
			element['addEventListener'](self['_mousewheel'], listener);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['addMouseWheelListener'] = $method;
		$method = $pyjs__bind_method2('removeMouseWheelListener', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr8,$attr5,$attr7,$attr6,listener,element,$2,$attr10,$1;
			element = self['getElement']();
			listener = (typeof ($1=self['_listener'])['__array'] != 'undefined'?
				((typeof $1['__array'][$2=self]) != 'undefined'?$1['__array'][$2]:
					$1['__getitem__']($2)):
					$1['__getitem__'](self));
			self['_listener']['__delitem__'](self);
			element['removeEventListener'](self['_mousewheel'], listener);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['removeMouseWheelListener'] = $method;
		$method = $pyjs__bind_method2('onMouseWheel', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onMouseWheel'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('MouseWheelHandler', $p['tuple']($bases), $data);
	})();
	$m['HTML5Canvas'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsobj';
		$method = $pyjs__bind_method2('__init__', function(coordX, coordY) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				coordX = arguments[1];
				coordY = arguments[2];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

				var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof coordY != 'undefined') {
					if (coordY !== null && typeof coordY['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = coordY;
						coordY = arguments[3];
					}
				} else 				if (typeof coordX != 'undefined') {
					if (coordX !== null && typeof coordX['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = coordX;
						coordX = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}

			$pyjs_kwargs_call($m['_HTML5Canvas'], '__init__', args, kwargs, [{}, self, coordX, coordY]);
			$m['MouseWheelHandler']['__init__'](self);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['coordX'],['coordY']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addMouseListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			$m['_HTML5Canvas']['addMouseListener'](self, listener);
			self['addMouseWheelListener']();
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addMouseListener'] = $method;
		$method = $pyjs__bind_method2('addKeyEventListener', function(obj) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}
			var listener,$lambda2,element;
			element = obj['getElement']();
			element['setAttribute']('tabindex', '0');
			var 			$lambda2 = function(event) {

				return self['onKeyEvent'](event);
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = [null,null,['event']];
			listener = $lambda2;
			(typeof _listener == "undefined"?$m['_listener']:_listener)['__setitem__'](self, listener);
			element['addEventListener']('keydown', listener);
			return null;
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['addKeyEventListener'] = $method;
		$method = $pyjs__bind_method2('removeKeyEventListener', function(obj) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}
			var element,listener,$4,$3;
			element = obj['getElement']();
			listener = (typeof ($3=(typeof _listener == "undefined"?$m['_listener']:_listener))['__array'] != 'undefined'?
				((typeof $3['__array'][$4=self]) != 'undefined'?$3['__array'][$4]:
					$3['__getitem__']($4)):
					$3['__getitem__'](self));
			(typeof _listener == "undefined"?$m['_listener']:_listener)['__delitem__'](self);
			element['removeEventListener']('keydown', listener);
			return null;
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['removeKeyEventListener'] = $method;
		var $bases = new Array($m['_HTML5Canvas'],$m['MouseWheelHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('HTML5Canvas', $p['tuple']($bases), $data);
	})();
	$m['_listener'] = $p['dict']([]);
	$m['requestAnimationFrameInit'] = function() {

		(typeof requestAnimationFramePolyfill == "undefined"?$m['requestAnimationFramePolyfill']:requestAnimationFramePolyfill)();
		return $wnd;
	};
	$m['requestAnimationFrameInit']['__name__'] = 'requestAnimationFrameInit';

	$m['requestAnimationFrameInit']['__bind_type__'] = 0;
	$m['requestAnimationFrameInit']['__args__'] = [null,null];
	$m['performanceNowInit'] = function() {

		(typeof performanceNowPolyfill == "undefined"?$m['performanceNowPolyfill']:performanceNowPolyfill)();
		return $wnd;
	};
	$m['performanceNowInit']['__name__'] = 'performanceNowInit';

	$m['performanceNowInit']['__bind_type__'] = 0;
	$m['performanceNowInit']['__args__'] = [null,null];
	$m['requestAnimationFramePolyfill'] = function() {


// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

	};
	$m['requestAnimationFramePolyfill']['__name__'] = 'requestAnimationFramePolyfill';

	$m['requestAnimationFramePolyfill']['__bind_type__'] = 0;
	$m['requestAnimationFramePolyfill']['__args__'] = [null,null];
	$m['performanceNowPolyfill'] = function() {


// @license http://opensource.org/licenses/MIT
// copyright Paul Irish 2015


// Date.now() is supported everywhere except IE8. For IE8 we use the Date.now polyfill
//   github.com/Financial-Times/polyfill-service/blob/master/polyfills/Date.now/polyfill.js
// as Safari 6 doesn't have support for NavigationTiming, we use a Date.now() timestamp for relative values

// if you want values similar to what you'd get with real perf.now, place this towards the head of the page
// but in reality, you're just getting the delta between now() calls, so it's not terribly important where it's placed


(function(){

  if ("performance" in window == false) {
      window.performance = {};
  }
  
  Date.now = (Date.now || function () {  // thanks IE8
	  return new Date().getTime();
  });

  if ("now" in window.performance == false){
    
    var nowOffset = Date.now();
    
    if (performance.timing && performance.timing.navigationStart){
      nowOffset = performance.timing.navigationStart
    }

    window.performance.now = function now(){
      return Date.now() - nowOffset;
    }
  }

})();

	};
	$m['performanceNowPolyfill']['__name__'] = 'performanceNowPolyfill';

	$m['performanceNowPolyfill']['__bind_type__'] = 0;
	$m['performanceNowPolyfill']['__args__'] = [null,null];
	return this;
}; /* end pyjsdl.pyjsobj */


/* end module: pyjsdl.pyjsobj */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Window', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.FocusPanel.SimplePanel', 'pyjamas.ui.FocusPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.Canvas.Color.Color', 'pyjamas.Canvas', 'pyjamas.Canvas.Color', 'pyjamas.Canvas.ImageLoader.loadImages', 'pyjamas.Canvas.ImageLoader', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.TextArea.TextArea', 'pyjamas.ui.TextArea', 'pyjamas.ui.Event', 'pyjamas.Canvas.HTML5Canvas.HTML5Canvas', 'pyjamas.Canvas.HTML5Canvas', 'pyjamas.media.Audio.Audio', 'pyjamas.media', 'pyjamas.media.Audio']
*/
