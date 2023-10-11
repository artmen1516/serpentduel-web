/* start module: pyjsdl.env */
$pyjs['loaded_modules']['pyjsdl.env'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.env']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.env'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.env'];
	$m['__repr__'] = function() { return '<module: pyjsdl.env>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.env';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['env'] = $pyjs['loaded_modules']['pyjsdl.env'];
	var $eq1,$attr1,$attr2,$eq2,$bool1;

	$m['os'] = $p['___import___']('os', 'pyjsdl');
	$m['sys'] = $p['___import___']('sys', 'pyjsdl');
	if ((($bool1=!(($eq1=$m['os']['$$name'])===($eq2='pyjs')&&$eq1===null?true:
		($eq1===null?false:($eq2===null?false:
			((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1['__cmp__']=='function'?$eq1['__cmp__']($eq2) === 0:
				((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2['__cmp__']=='function'?$eq2['__cmp__']($eq1) === 0:
					$eq1==$eq2)))))) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
		$m['sys']['exit']();
	}
	$m['canvas'] = null;
	$m['frame'] = null;
	$m['pyjs_mode'] = null;
	$m['event'] = null;
	$m['get_canvas'] = function() {

		return $m['canvas'];
	};
	$m['get_canvas']['__name__'] = 'get_canvas';

	$m['get_canvas']['__bind_type__'] = 0;
	$m['get_canvas']['__args__'] = [null,null];
	$m['get_frame'] = function() {

		return $m['frame'];
	};
	$m['get_frame']['__name__'] = 'get_frame';

	$m['get_frame']['__bind_type__'] = 0;
	$m['get_frame']['__args__'] = [null,null];
	$m['get_pyjsmode'] = function() {

		return $m['pyjs_mode'];
	};
	$m['get_pyjsmode']['__name__'] = 'get_pyjsmode';

	$m['get_pyjsmode']['__bind_type__'] = 0;
	$m['get_pyjsmode']['__args__'] = [null,null];
	$m['set_env'] = function(key, val) {
		var $attr3,$attr4,$2,$1;
		$p['setattr']((typeof ($1=$m['sys']['modules'])['__array'] != 'undefined'?
			((typeof $1['__array'][$2=(typeof __name__ == "undefined"?$m['__name__']:__name__)]) != 'undefined'?$1['__array'][$2]:
				$1['__getitem__']($2)):
				$1['__getitem__']((typeof __name__ == "undefined"?$m['__name__']:__name__))), key, val);
		return null;
	};
	$m['set_env']['__name__'] = 'set_env';

	$m['set_env']['__bind_type__'] = 0;
	$m['set_env']['__args__'] = [null,null,['key'],['val']];
	return this;
}; /* end pyjsdl.env */


/* end module: pyjsdl.env */


/*
PYJS_DEPS: ['os', 'sys']
*/
