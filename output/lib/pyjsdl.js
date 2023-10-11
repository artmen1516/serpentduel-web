/* start module: pyjsdl */
$pyjs['loaded_modules']['pyjsdl'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl'];
	var $m = $pyjs['loaded_modules']['pyjsdl'];
	$m['__repr__'] = function() { return '<module: pyjsdl>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl';
	$m['__name__'] = __mod_name__;


	$m['env'] = $p['___import___']('pyjsdl.env', 'pyjsdl', null, false);
	$m['util'] = $p['___import___']('pyjsdl.util', 'pyjsdl', null, false);
	$m['Display'] = $p['___import___']('pyjsdl.display.Display', 'pyjsdl', null, false);
	$m['Surface'] = $p['___import___']('pyjsdl.surface.Surface', 'pyjsdl', null, false);
	$m['Rect'] = $p['___import___']('pyjsdl.rect.Rect', 'pyjsdl', null, false);
	$m['Image'] = $p['___import___']('pyjsdl.image.Image', 'pyjsdl', null, false);
	$m['Event'] = $p['___import___']('pyjsdl.event.Event', 'pyjsdl', null, false);
	$m['Key'] = $p['___import___']('pyjsdl.key.Key', 'pyjsdl', null, false);
	$m['Mouse'] = $p['___import___']('pyjsdl.mouse.Mouse', 'pyjsdl', null, false);
	$m['Color'] = $p['___import___']('pyjsdl.color.Color', 'pyjsdl', null, false);
	$m['Mixer'] = $p['___import___']('pyjsdl.mixer.Mixer', 'pyjsdl', null, false);
	$m['Time'] = $p['___import___']('pyjsdl.time.Time', 'pyjsdl', null, false);
	$m['Vector2'] = $p['___import___']('pyjsdl.vector.Vector2', 'pyjsdl', null, false);
	$m['draw'] = $p['___import___']('pyjsdl.draw', 'pyjsdl', null, false);
	$m['transform'] = $p['___import___']('pyjsdl.transform', 'pyjsdl', null, false);
	$m['surface'] = $p['___import___']('pyjsdl.surface', 'pyjsdl', null, false);
	$m['surfarray'] = $p['___import___']('pyjsdl.surfarray', 'pyjsdl', null, false);
	$m['mask'] = $p['___import___']('pyjsdl.mask', 'pyjsdl', null, false);
	$m['font'] = $p['___import___']('pyjsdl.font', 'pyjsdl', null, false);
	$m['sprite'] = $p['___import___']('pyjsdl.sprite', 'pyjsdl', null, false);
	$m['cursors'] = $p['___import___']('pyjsdl.cursors', 'pyjsdl', null, false);
	$p['__import_all__']('pyjsdl.constants', 'pyjsdl', $m, null, false);
	$m['_initialized'] = false;
	$m['init'] = function() {
		var $bool1;
		if ((($bool1=$m['_initialized']) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
			return null;
		}
		else {
			$m['_initialized'] = true;
		}
		$m['event'] = $m['Event']();
		$m['env']['set_env']('event', $m['event']);
		$m['time'] = $m['Time']();
		$m['display'] = $m['Display']();
		$m['image'] = $m['Image']();
		$m['mixer'] = $m['Mixer']();
		$m['mouse'] = $m['Mouse']();
		$m['key'] = $m['Key']();
		return null;
	};
	$m['init']['__name__'] = 'init';

	$m['init']['__bind_type__'] = 0;
	$m['init']['__args__'] = [null,null];
	$m['init']();
	$m['setup'] = function(callback, images) {
		if (typeof images == 'undefined') images=arguments['callee']['__args__'][3][1];

		$m['display']['setup'](callback, images);
		return null;
	};
	$m['setup']['__name__'] = 'setup';

	$m['setup']['__bind_type__'] = 0;
	$m['setup']['__args__'] = [null,null,['callback'],['images', null]];
	$m['set_callback'] = function(callback) {

		$m['display']['set_callback'](callback);
		return null;
	};
	$m['set_callback']['__name__'] = 'set_callback';

	$m['set_callback']['__bind_type__'] = 0;
	$m['set_callback']['__args__'] = [null,null,['callback']];
	$m['setup_images'] = function(images) {

		$m['display']['set_images'](images);
		return null;
	};
	$m['setup_images']['__name__'] = 'setup_images';

	$m['setup_images']['__bind_type__'] = 0;
	$m['setup_images']['__args__'] = [null,null,['images']];
	$m['quit'] = function() {
		var canvas;
		canvas = $m['display']['get_canvas']();
		canvas['stop']();
		$m['mixer']['quit']();
		$m['time']['_stop_timers']();
		return null;
	};
	$m['quit']['__name__'] = 'quit';

	$m['quit']['__bind_type__'] = 0;
	$m['quit']['__args__'] = [null,null];
	$m['error'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl';
		var $bases = new Array($p['RuntimeError']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('error', $p['tuple']($bases), $data);
	})();
	$m['bounding_rect_return'] = function(setting) {

		$m['surface']['bounding_rect_return'](setting);
		$m['draw']['bounding_rect_return'](setting);
		return null;
	};
	$m['bounding_rect_return']['__name__'] = 'bounding_rect_return';

	$m['bounding_rect_return']['__bind_type__'] = 0;
	$m['bounding_rect_return']['__args__'] = [null,null,['setting']];
	return this;
}; /* end pyjsdl */


/* end module: pyjsdl */


/*
PYJS_DEPS: ['pyjsdl.env', 'pyjsdl', 'pyjsdl.util', 'pyjsdl.display.Display', 'pyjsdl.display', 'pyjsdl.surface.Surface', 'pyjsdl.surface', 'pyjsdl.rect.Rect', 'pyjsdl.rect', 'pyjsdl.image.Image', 'pyjsdl.image', 'pyjsdl.event.Event', 'pyjsdl.event', 'pyjsdl.key.Key', 'pyjsdl.key', 'pyjsdl.mouse.Mouse', 'pyjsdl.mouse', 'pyjsdl.color.Color', 'pyjsdl.color', 'pyjsdl.mixer.Mixer', 'pyjsdl.mixer', 'pyjsdl.time.Time', 'pyjsdl.time', 'pyjsdl.vector.Vector2', 'pyjsdl.vector', 'pyjsdl.draw', 'pyjsdl.transform', 'pyjsdl.surfarray', 'pyjsdl.mask', 'pyjsdl.font', 'pyjsdl.sprite', 'pyjsdl.cursors', 'pyjsdl.constants']
*/
