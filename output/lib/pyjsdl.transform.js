/* start module: pyjsdl.transform */
$pyjs['loaded_modules']['pyjsdl.transform'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.transform']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.transform'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.transform'];
	$m['__repr__'] = function() { return '<module: pyjsdl.transform>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.transform';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['transform'] = $pyjs['loaded_modules']['pyjsdl.transform'];


	$m['_pi'] = $p['___import___']('math.pi', 'pyjsdl', null, false);
	$m['_fabs'] = $p['___import___']('math.fabs', 'pyjsdl', null, false);
	$m['_sin'] = $p['___import___']('math.sin', 'pyjsdl', null, false);
	$m['_cos'] = $p['___import___']('math.cos', 'pyjsdl', null, false);
	$m['_ceil'] = $p['___import___']('math.ceil', 'pyjsdl', null, false);
	$m['Surface'] = $p['___import___']('pyjsdl.surface.Surface', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['__doc__'] = 'Surface transformation';
	$m['_deg_rad'] = ($m['_pi'])/(180.0);
	$m['rotate'] = function(surface, angle) {
		var surf,cos_theta,height_f,width_i,width_f,$attr2,height_i,$bool2,$attr1,sin_theta,$bool1,theta;
		if ((($bool2=!(($bool1=angle) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
			false :
			(typeof $bool1=='object'?
				(typeof $bool1['__nonzero__']=='function'?
					$bool1['__nonzero__']() :
					(typeof $bool1['__len__']=='function'?
						($bool1['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
			return surface['copy']();
		}
		theta = (angle)*($m['_deg_rad']);
		width_i = surface['get_width']();
		height_i = surface['get_height']();
		cos_theta = $m['_fabs']($m['_cos'](theta));
		sin_theta = $m['_fabs']($m['_sin'](theta));
		width_f = $p['float_int'](((width_i)*(cos_theta))+((height_i)*(sin_theta)));
		height_f = $p['float_int'](((width_i)*(sin_theta))+((height_i)*(cos_theta)));
		surf = $m['Surface']($p['tuple']([width_f, height_f]));
		surf['saveContext']();
		surf['translate']((width_f)/(2.0), (height_f)/(2.0));
		surf['rotate'](-(theta));
		surf['drawImage'](surface['canvas'], (-(width_i))/(2), (-(height_i))/(2));
		surf['restoreContext']();
		return surf;
	};
	$m['rotate']['__name__'] = 'rotate';

	$m['rotate']['__bind_type__'] = 0;
	$m['rotate']['__args__'] = [null,null,['surface'],['angle']];
	$m['rotozoom'] = function(surface, angle, size) {
		var cos_theta,height,$mod4,$mod1,$mod3,$mod2,width,sin_theta,theta,surf,$attr3,$attr4,$bool3,$bool6,$bool4,$bool5,height_f,width_i,width_f,height_i;
		if ((($bool4=!(($bool3=angle) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
			false :
			(typeof $bool3=='object'?
				(typeof $bool3['__nonzero__']=='function'?
					$bool3['__nonzero__']() :
					(typeof $bool3['__len__']=='function'?
						($bool3['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
				false :
				(typeof $bool4=='object'?
					(typeof $bool4['__nonzero__']=='function'?
						$bool4['__nonzero__']() :
						(typeof $bool4['__len__']=='function'?
							($bool4['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			width = $p['float_int']((surface['get_width']())*(size));
			height = $p['float_int']((surface['get_height']())*(size));
			return (typeof scale == "undefined"?$m['scale']:scale)(surface, $p['tuple']([width, height]));
		}
		theta = (angle)*($m['_deg_rad']);
		width_i = $p['float_int']((surface['get_width']())*(size));
		height_i = $p['float_int']((surface['get_height']())*(size));
		cos_theta = $m['_fabs']($m['_cos'](theta));
		sin_theta = $m['_fabs']($m['_sin'](theta));
		width_f = $p['float_int']($m['_ceil'](((width_i)*(cos_theta))+((height_i)*(sin_theta))));
		if ((($bool5=(($mod1=width_f)!=null && ($mod2=2)!=null && typeof $mod1=='string'?
			$p['sprintf']($mod1,$mod2):
			(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
				false :
				(typeof $bool5=='object'?
					(typeof $bool5['__nonzero__']=='function'?
						$bool5['__nonzero__']() :
						(typeof $bool5['__len__']=='function'?
							($bool5['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			width_f += 1;
		}
		height_f = $p['float_int']($m['_ceil'](((width_i)*(sin_theta))+((height_i)*(cos_theta))));
		if ((($bool6=(($mod3=height_f)!=null && ($mod4=2)!=null && typeof $mod3=='string'?
			$p['sprintf']($mod3,$mod4):
			(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3))) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
				false :
				(typeof $bool6=='object'?
					(typeof $bool6['__nonzero__']=='function'?
						$bool6['__nonzero__']() :
						(typeof $bool6['__len__']=='function'?
							($bool6['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			height_f += 1;
		}
		surf = $m['Surface']($p['tuple']([width_f, height_f]));
		surf['saveContext']();
		surf['translate']((width_f)/(2.0), (height_f)/(2.0));
		surf['rotate'](-(theta));
		surf['drawImage'](surface['canvas'], 0, 0, surface['get_width'](), surface['get_height'](), (-(width_i))/(2), (-(height_i))/(2), width_i, height_i);
		surf['restoreContext']();
		return surf;
	};
	$m['rotozoom']['__name__'] = 'rotozoom';

	$m['rotozoom']['__bind_type__'] = 0;
	$m['rotozoom']['__args__'] = [null,null,['surface'],['angle'],['size']];
	$m['scale'] = function(surface, size, dest) {
		if (typeof dest == 'undefined') dest=arguments['callee']['__args__'][4][1];
		var surf,$attr5,$attr6,$bool7,$4,$bool8,$1,$2,$3;
		if ((($bool8=!(($bool7=dest) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
			false :
			(typeof $bool7=='object'?
				(typeof $bool7['__nonzero__']=='function'?
					$bool7['__nonzero__']() :
					(typeof $bool7['__len__']=='function'?
						($bool7['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
				false :
				(typeof $bool8=='object'?
					(typeof $bool8['__nonzero__']=='function'?
						$bool8['__nonzero__']() :
						(typeof $bool8['__len__']=='function'?
							($bool8['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			surf = $m['Surface'](size);
		}
		else {
			surf = dest;
		}
		surf['drawImage'](surface['canvas'], 0, 0, surface['get_width'](), surface['get_height'](), 0, 0, (typeof ($1=size)['__array'] != 'undefined'?
			((typeof $1['__array'][$2=0]) != 'undefined'?$1['__array'][$2]:
				$1['__getitem__']($2)):
				$1['__getitem__'](0)), (typeof ($3=size)['__array'] != 'undefined'?
			((typeof $3['__array'][$4=1]) != 'undefined'?$3['__array'][$4]:
				$3['__getitem__']($4)):
				$3['__getitem__'](1)));
		return surf;
	};
	$m['scale']['__name__'] = 'scale';

	$m['scale']['__bind_type__'] = 0;
	$m['scale']['__args__'] = [null,null,['surface'],['size'],['dest', null]];
	$m['smoothscale'] = function(surface, size) {

		return $m['scale'](surface, size);
	};
	$m['smoothscale']['__name__'] = 'smoothscale';

	$m['smoothscale']['__bind_type__'] = 0;
	$m['smoothscale']['__args__'] = [null,null,['surface'],['size']];
	$m['scale2x'] = function(surface, dest) {
		if (typeof dest == 'undefined') dest=arguments['callee']['__args__'][3][1];

		return $m['scale'](surface, $p['tuple']([(surface['get_width']())*(2), (surface['get_height']())*(2)]), dest);
	};
	$m['scale2x']['__name__'] = 'scale2x';

	$m['scale2x']['__bind_type__'] = 0;
	$m['scale2x']['__args__'] = [null,null,['surface'],['dest', null]];
	$m['flip'] = function(surface, xbool, ybool) {
		if (typeof xbool == 'undefined') xbool=arguments['callee']['__args__'][3][1];
		if (typeof ybool == 'undefined') ybool=arguments['callee']['__args__'][4][1];
		var surf,$attr8,$bool10,$and1,$and2,$bool12,$attr7,$bool11,$bool9;
		surf = $m['Surface']($p['tuple']([surface['get_width'](), surface['get_height']()]));
		surf['saveContext']();
		if ((($bool10=((($bool9=$and1=xbool) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
			false :
			(typeof $bool9=='object'?
				(typeof $bool9['__nonzero__']=='function'?
					$bool9['__nonzero__']() :
					(typeof $bool9['__len__']=='function'?
						($bool9['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?ybool:$and1)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
				false :
				(typeof $bool10=='object'?
					(typeof $bool10['__nonzero__']=='function'?
						$bool10['__nonzero__']() :
						(typeof $bool10['__len__']=='function'?
							($bool10['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			surf['translate'](surface['get_width'](), surface['get_height']());
			surf['scale'](-(1), -(1));
		}
		else if ((($bool11=xbool) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
				false :
				(typeof $bool11=='object'?
					(typeof $bool11['__nonzero__']=='function'?
						$bool11['__nonzero__']() :
						(typeof $bool11['__len__']=='function'?
							($bool11['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			surf['translate'](surface['get_width'](), 0);
			surf['scale'](-(1), 1);
		}
		else if ((($bool12=ybool) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
				false :
				(typeof $bool12=='object'?
					(typeof $bool12['__nonzero__']=='function'?
						$bool12['__nonzero__']() :
						(typeof $bool12['__len__']=='function'?
							($bool12['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			surf['translate'](0, surface['get_height']());
			surf['scale'](1, -(1));
		}
		surf['drawImage'](surface['canvas'], 0, 0);
		surf['restoreContext']();
		return surf;
	};
	$m['flip']['__name__'] = 'flip';

	$m['flip']['__bind_type__'] = 0;
	$m['flip']['__args__'] = [null,null,['surface'],['xbool', true],['ybool', false]];
	return this;
}; /* end pyjsdl.transform */


/* end module: pyjsdl.transform */


/*
PYJS_DEPS: ['math.pi', 'math', 'math.fabs', 'math.sin', 'math.cos', 'math.ceil', 'pyjsdl.surface.Surface', 'pyjsdl', 'pyjsdl.surface']
*/
