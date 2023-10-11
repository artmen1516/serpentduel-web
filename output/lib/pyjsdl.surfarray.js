/* start module: pyjsdl.surfarray */
$pyjs['loaded_modules']['pyjsdl.surfarray'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.surfarray']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.surfarray'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.surfarray'];
	$m['__repr__'] = function() { return '<module: pyjsdl.surfarray>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.surfarray';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['surfarray'] = $pyjs['loaded_modules']['pyjsdl.surfarray'];
	var $lambda1,$attr1,$attr2,$bool1,$cmp1,$cmp2;

	$m['Surface'] = $p['___import___']('pyjsdl.surface.Surface', 'pyjsdl', null, false);
	$m['Ndarray'] = $p['___import___']('pyjsdl.pyjsarray.Ndarray', 'pyjsdl', null, false);
	$m['Uint8ClampedArray'] = $p['___import___']('pyjsdl.pyjsarray.Uint8ClampedArray', 'pyjsdl', null, false);
	$m['Uint8Array'] = $p['___import___']('pyjsdl.pyjsarray.Uint8Array', 'pyjsdl', null, false);
	$m['Uint32Array'] = $p['___import___']('pyjsdl.pyjsarray.Uint32Array', 'pyjsdl', null, false);
	$m['ImageData'] = $p['___import___']('pyjsdl.pyjsarray.ImageData', 'pyjsdl', null, false);
	$m['ImageMatrix'] = $p['___import___']('pyjsdl.pyjsarray.ImageMatrix', 'pyjsdl', null, false);
	$m['sys'] = $p['___import___']('sys', 'pyjsdl');
	if ((($bool1=((($cmp1=$m['sys']['version_info'])===($cmp2=$p['tuple']([3]))?0:
		(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
			($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
			$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
		$m['range'] = $p['___import___']('pyjsdl.util._range', 'pyjsdl', null, false);
	}
	$m['__docformat__'] = 'restructuredtext';
	$m['__doc__'] = 'Surface pixel manipulation';
	$m['array'] = function(surface) {
		var imagedata,$attr3,$attr5,$attr4,$attr6;
		imagedata = surface['impl']['getImageData'](0, 0, surface['width'], surface['height']);
		return $m['ImageMatrix'](imagedata);
	};
	$m['array']['__name__'] = 'array';

	$m['array']['__bind_type__'] = 0;
	$m['array']['__args__'] = [null,null,['surface']];
	$m['array2d'] = function(surface, copydata) {
		if (typeof copydata == 'undefined') copydata=arguments['callee']['__args__'][3][1];
		var $attr9,$attr8,imagedata,$attr7,$bool2,$bool3,$attr10;
		imagedata = surface['impl']['getImageData'](0, 0, surface['width'], surface['height']);
		if ((($bool3=!(($bool2=copydata) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
			false :
			(typeof $bool2=='object'?
				(typeof $bool2['__nonzero__']=='function'?
					$bool2['__nonzero__']() :
					(typeof $bool2['__len__']=='function'?
						($bool2['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
				false :
				(typeof $bool3=='object'?
					(typeof $bool3['__nonzero__']=='function'?
						$bool3['__nonzero__']() :
						(typeof $bool3['__len__']=='function'?
							($bool3['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return (typeof ImageMatrixInteger == "undefined"?$m['ImageMatrixInteger']:ImageMatrixInteger)(imagedata);
		}
		else {
			return (typeof ImageInteger == "undefined"?$m['ImageInteger']:ImageInteger)(imagedata);
		}
		return null;
	};
	$m['array2d']['__name__'] = 'array2d';

	$m['array2d']['__bind_type__'] = 0;
	$m['array2d']['__args__'] = [null,null,['surface'],['copydata', false]];
	$m['array3d'] = function(surface, copydata) {
		if (typeof copydata == 'undefined') copydata=arguments['callee']['__args__'][3][1];
		var imagedata,$bool5,$bool4,$attr14,$attr11,$attr13,$attr12;
		imagedata = surface['impl']['getImageData'](0, 0, surface['width'], surface['height']);
		if ((($bool5=!(($bool4=copydata) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
			false :
			(typeof $bool4=='object'?
				(typeof $bool4['__nonzero__']=='function'?
					$bool4['__nonzero__']() :
					(typeof $bool4['__len__']=='function'?
						($bool4['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
			return (typeof ImageMatrixRGB == "undefined"?$m['ImageMatrixRGB']:ImageMatrixRGB)(imagedata);
		}
		else {
			return (typeof ImageRGB == "undefined"?$m['ImageRGB']:ImageRGB)(imagedata);
		}
		return null;
	};
	$m['array3d']['__name__'] = 'array3d';

	$m['array3d']['__bind_type__'] = 0;
	$m['array3d']['__args__'] = [null,null,['surface'],['copydata', false]];
	$m['array_alpha'] = function(surface, copydata) {
		if (typeof copydata == 'undefined') copydata=arguments['callee']['__args__'][3][1];
		var imagedata,$bool6,$attr18,$attr15,$attr17,$attr16,$bool7;
		imagedata = surface['impl']['getImageData'](0, 0, surface['width'], surface['height']);
		if ((($bool7=!(($bool6=copydata) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
			false :
			(typeof $bool6=='object'?
				(typeof $bool6['__nonzero__']=='function'?
					$bool6['__nonzero__']() :
					(typeof $bool6['__len__']=='function'?
						($bool6['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
				false :
				(typeof $bool7=='object'?
					(typeof $bool7['__nonzero__']=='function'?
						$bool7['__nonzero__']() :
						(typeof $bool7['__len__']=='function'?
							($bool7['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return (typeof ImageMatrixAlpha == "undefined"?$m['ImageMatrixAlpha']:ImageMatrixAlpha)(imagedata);
		}
		else {
			return (typeof ImageAlpha == "undefined"?$m['ImageAlpha']:ImageAlpha)(imagedata);
		}
		return null;
	};
	$m['array_alpha']['__name__'] = 'array_alpha';

	$m['array_alpha']['__bind_type__'] = 0;
	$m['array_alpha']['__args__'] = [null,null,['surface'],['copydata', false]];
	$m['make_surface'] = function(array) {
		var surface,$attr20,$attr21,$attr22,$attr19;
		surface = $m['Surface']($p['tuple']([array['_imagedata']['width'], array['_imagedata']['height']]));
		(typeof blit_array == "undefined"?$m['blit_array']:blit_array)(surface, array);
		return surface;
	};
	$m['make_surface']['__name__'] = 'make_surface';

	$m['make_surface']['__bind_type__'] = 0;
	$m['make_surface']['__args__'] = [null,null,['array']];
	$m['blit_array'] = function(surface, array) {
		var $attr29,$iter1_iter,$attr23,$attr24,$attr25,$attr26,$attr27,$attr28,$iter2_type,$iter2_iter,array2d,$pyjs_try_err,$iter1_array,$iter1_nextval,$eq2,$eq1,$attr32,$iter2_idx,$attr30,$bool8,$2,$1,$iter2_nextval,$iter1_type,imagedata,$attr31,value,$iter1_idx,$len1,y,x,$iter2_array;
		try {
			imagedata = array['getImageData']();
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
				imagedata = surface['impl']['getImageData'](0, 0, surface['width'], surface['height']);
				if ((($bool8=(($eq1=(($len1=array['_shape']) === null?0:
					(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'?$len1['length']:
								$p['len']($len1))))))===($eq2=2)&&$eq1===null?true:
					($eq1===null?false:($eq2===null?false:
						((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1['__cmp__']=='function'?$eq1['__cmp__']($eq2) === 0:
							((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2['__cmp__']=='function'?$eq2['__cmp__']($eq1) === 0:
								$eq1==$eq2)))))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					array2d = $m['ImageMatrix'](imagedata);
					$iter1_iter = $m['range'](array2d['getHeight']());
					if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
						$iter1_type = 0;
					} else {
						$iter1_iter = $iter1_iter['__iter__']();
						$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter1_idx = 0;
					while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
						y = $iter1_nextval;
						$iter2_iter = $m['range'](array2d['getWidth']());
						if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
							$iter2_type = 0;
						} else {
							$iter2_iter = $iter2_iter['__iter__']();
							$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter2_idx = 0;
						while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
							x = $iter2_nextval;
							value = (typeof ($1=array)['__array'] != 'undefined'?
								((typeof $1['__array'][$2=$p['tuple']([x, y])]) != 'undefined'?$1['__array'][$2]:
									$1['__getitem__']($2)):
									$1['__getitem__']($p['tuple']([x, y])));
							array2d['__setitem__']($p['tuple']([y, x]), $p['tuple']([((value)>>(16))&(255), ((value)>>(8))&(255), (value)&(255), 255]));
						}
					}
					imagedata = array2d['getImageData']();
				}
				else {
					imagedata['data']['set'](array['getArray']());
				}
			} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
		}
		surface['impl']['putImageData'](imagedata, 0, 0, 0, 0, surface['width'], surface['height']);
		return null;
	};
	$m['blit_array']['__name__'] = 'blit_array';

	$m['blit_array']['__bind_type__'] = 0;
	$m['blit_array']['__args__'] = [null,null,['surface'],['array']];
	var 	$lambda1 = function() {
		var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


		return null;
	};
	$lambda1['__name__'] = '$lambda1';

	$lambda1['__bind_type__'] = 0;
	$lambda1['__args__'] = ['arg',null];
	$m['use_arraytype'] = $lambda1;
	$m['ImageMatrixRGB'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.surfarray';
		$cls_definition['shape'] = $m['ImageMatrix']['shape'];
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $6,$4,$5,$3;
			index = $p['list'](index);
			var $tupleassign1 = $p['__ass_unpack']($p['tuple']([(typeof ($3=index)['__array'] != 'undefined'?
				((typeof $3['__array'][$4=1]) != 'undefined'?$3['__array'][$4]:
					$3['__getitem__']($4)):
					$3['__getitem__'](1)), (typeof ($5=index)['__array'] != 'undefined'?
				((typeof $5['__array'][$6=0]) != 'undefined'?$5['__array'][$6]:
					$5['__getitem__']($6)):
					$5['__getitem__'](0))]), 2, null);
			index['__setitem__'](0, $tupleassign1[0]);
			index['__setitem__'](1, $tupleassign1[1]);
			index = $p['tuple'](index);
			return $m['ImageMatrix']['__getitem__'](self, index);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			var $10,$8,$9,$7;
			index = $p['list'](index);
			var $tupleassign2 = $p['__ass_unpack']($p['tuple']([(typeof ($7=index)['__array'] != 'undefined'?
				((typeof $7['__array'][$8=1]) != 'undefined'?$7['__array'][$8]:
					$7['__getitem__']($8)):
					$7['__getitem__'](1)), (typeof ($9=index)['__array'] != 'undefined'?
				((typeof $9['__array'][$10=0]) != 'undefined'?$9['__array'][$10]:
					$9['__getitem__']($10)):
					$9['__getitem__'](0))]), 2, null);
			index['__setitem__'](0, $tupleassign2[0]);
			index['__setitem__'](1, $tupleassign2[1]);
			index = $p['tuple'](index);
			$m['ImageMatrix']['__setitem__'](self, index, value);
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__str__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		var $bases = new Array($m['ImageMatrix']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ImageMatrixRGB', $p['tuple']($bases), $data);
	})();
	$m['ImageRGB'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.surfarray';
		$method = $pyjs__bind_method2('__init__', function(imagedata) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imagedata = arguments[1];
			}
			var $iter5_nextval,$iter4_type,$iter5_array,$iter3_array,$attr46,$attr47,$attr44,$attr45,$attr42,$attr43,$attr40,$attr41,$iter5_type,array,$iter4_iter,$attr48,$attr49,$12,index,$iter3_idx,$iter3_nextval,$pyjs_try_err,$iter3_iter,$iter5_idx,y,$attr37,$attr36,$attr35,$iter3_type,$attr39,$attr38,data,$11,$attr51,$attr50,$attr53,$attr52,$attr55,$attr54,$attr56,$iter4_idx,i,$iter5_iter,$iter4_nextval,$iter4_array,x;
			self['_imagedata'] = $m['ImageData'](imagedata);
			array = $m['Ndarray'](self['_imagedata']['data']);
			array['setshape'](self['_imagedata']['height'], self['_imagedata']['width'], 4);
			try {
				data = $m['Uint8ClampedArray'](((self['_imagedata']['height'])*(self['_imagedata']['width']))*(3));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['NotImplementedError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['NotImplementedError'])) {
					data = $m['Uint8Array'](((self['_imagedata']['height'])*(self['_imagedata']['width']))*(3));
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			index = 0;
			$iter3_iter = $m['range'](self['_imagedata']['width']);
			if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter['__iter__']();
				$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				x = $iter3_nextval;
				$iter4_iter = $m['range'](self['_imagedata']['height']);
				if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter['__iter__']();
					$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					y = $iter4_nextval;
					$iter5_iter = $m['range'](3);
					if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
						$iter5_type = 0;
					} else {
						$iter5_iter = $iter5_iter['__iter__']();
						$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter5_idx = 0;
					while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
						i = $iter5_nextval;
						data['__setitem__'](index, (typeof ($11=array)['__array'] != 'undefined'?
							((typeof $11['__array'][$12=$p['tuple']([y, x, i])]) != 'undefined'?$11['__array'][$12]:
								$11['__getitem__']($12)):
								$11['__getitem__']($p['tuple']([y, x, i]))));
						index += 1;
					}
				}
			}
			try {
				$m['Ndarray']['__init__'](self, data, 'uint8c');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['NotImplementedError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['NotImplementedError'])) {
					$m['Ndarray']['__init__'](self, data, 'uint8');
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			self['setshape'](self['_imagedata']['width'], self['_imagedata']['height'], 3);
			return null;
		}
	, 1, [null,null,['self'],['imagedata']]);
		$cls_definition['__init__'] = $method;
		$cls_definition['shape'] = $m['Ndarray']['shape'];
		$method = $pyjs__bind_method2('getImageData', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter6_type,$iter8_iter,$iter6_iter,$iter6_nextval,index,$attr64,$attr60,$attr61,$attr62,$attr63,$iter7_type,$14,$iter8_idx,$iter6_idx,$iter7_iter,$iter8_type,$iter6_array,$iter8_nextval,$iter7_idx,$attr59,$iter7_nextval,$13,i,$iter7_array,$iter8_array,y,x;
			index = 0;
			$iter6_iter = $m['range'](self['_imagedata']['height']);
			if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter['__iter__']();
				$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				x = $iter6_nextval;
				$iter7_iter = $m['range'](self['_imagedata']['width']);
				if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter['__iter__']();
					$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					y = $iter7_nextval;
					$iter8_iter = $m['range'](3);
					if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
						$iter8_type = 0;
					} else {
						$iter8_iter = $iter8_iter['__iter__']();
						$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter8_idx = 0;
					while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
						i = $iter8_nextval;
						self['_imagedata']['data']['__setitem__']((index)+(i), (typeof ($13=self)['__array'] != 'undefined'?
							((typeof $13['__array'][$14=$p['tuple']([y, x, i])]) != 'undefined'?$13['__array'][$14]:
								$13['__getitem__']($14)):
								$13['__getitem__']($p['tuple']([y, x, i]))));
					}
					index += 4;
				}
			}
			return self['_imagedata']['getImageData']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getImageData'] = $method;
		var $bases = new Array($m['Ndarray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ImageRGB', $p['tuple']($bases), $data);
	})();
	$m['ImageMatrixAlpha'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.surfarray';
		$cls_definition['shape'] = $m['ImageMatrix']['shape'];
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $16,$17,$15,$18;
			return $m['ImageMatrix']['__getitem__'](self, $p['tuple']([(typeof ($15=index)['__array'] != 'undefined'?
				((typeof $15['__array'][$16=1]) != 'undefined'?$15['__array'][$16]:
					$15['__getitem__']($16)):
					$15['__getitem__'](1)), (typeof ($17=index)['__array'] != 'undefined'?
				((typeof $17['__array'][$18=0]) != 'undefined'?$17['__array'][$18]:
					$17['__getitem__']($18)):
					$17['__getitem__'](0)), 3]));
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			var $21,$20,$22,$19;
			$m['ImageMatrix']['__setitem__'](self, $p['tuple']([(typeof ($19=index)['__array'] != 'undefined'?
				((typeof $19['__array'][$20=1]) != 'undefined'?$19['__array'][$20]:
					$19['__getitem__']($20)):
					$19['__getitem__'](1)), (typeof ($21=index)['__array'] != 'undefined'?
				((typeof $21['__array'][$22=0]) != 'undefined'?$21['__array'][$22]:
					$21['__getitem__']($22)):
					$21['__getitem__'](0)), 3]), value);
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__str__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		var $bases = new Array($m['ImageMatrix']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ImageMatrixAlpha', $p['tuple']($bases), $data);
	})();
	$m['ImageAlpha'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.surfarray';
		$method = $pyjs__bind_method2('__init__', function(imagedata) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imagedata = arguments[1];
			}
			var $iter10_nextval,$24,$attr88,$iter10_array,array,$iter10_iter,$attr82,index,$attr80,$attr81,$attr68,$attr69,$attr84,$iter9_iter,$attr67,$iter9_nextval,$iter9_idx,$pyjs_try_err,$attr85,$iter9_type,$attr83,$iter10_idx,y,$attr86,$attr87,data,$23,$attr79,$attr78,$attr77,$attr76,$attr75,$attr74,$attr73,$attr72,$attr71,$attr70,$iter10_type,x,$iter9_array;
			self['_imagedata'] = $m['ImageData'](imagedata);
			array = $m['Ndarray'](self['_imagedata']['data']);
			array['setshape'](self['_imagedata']['height'], self['_imagedata']['width'], 4);
			try {
				data = $m['Uint8ClampedArray']((self['_imagedata']['height'])*(self['_imagedata']['width']));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['NotImplementedError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['NotImplementedError'])) {
					data = $m['Uint8Array']((self['_imagedata']['height'])*(self['_imagedata']['width']));
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			index = 0;
			$iter9_iter = $m['range'](self['_imagedata']['width']);
			if (typeof ($iter9_array = $iter9_iter['__array']) != 'undefined') {
				$iter9_type = 0;
			} else {
				$iter9_iter = $iter9_iter['__iter__']();
				$iter9_type = typeof ($iter9_array = $iter9_iter['__array']) != 'undefined'? 0 : (typeof $iter9_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter9_idx = 0;
			while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
				x = $iter9_nextval;
				$iter10_iter = $m['range'](self['_imagedata']['height']);
				if (typeof ($iter10_array = $iter10_iter['__array']) != 'undefined') {
					$iter10_type = 0;
				} else {
					$iter10_iter = $iter10_iter['__iter__']();
					$iter10_type = typeof ($iter10_array = $iter10_iter['__array']) != 'undefined'? 0 : (typeof $iter10_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter10_idx = 0;
				while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
					y = $iter10_nextval;
					data['__setitem__'](index, (typeof ($23=array)['__array'] != 'undefined'?
						((typeof $23['__array'][$24=$p['tuple']([y, x, 3])]) != 'undefined'?$23['__array'][$24]:
							$23['__getitem__']($24)):
							$23['__getitem__']($p['tuple']([y, x, 3]))));
					index += 1;
				}
			}
			try {
				$m['Ndarray']['__init__'](self, data, 'uint8c');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['NotImplementedError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['NotImplementedError'])) {
					$m['Ndarray']['__init__'](self, data, 'uint8');
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			self['setshape'](self['_imagedata']['width'], self['_imagedata']['height']);
			return null;
		}
	, 1, [null,null,['self'],['imagedata']]);
		$cls_definition['__init__'] = $method;
		$cls_definition['shape'] = $m['Ndarray']['shape'];
		$method = $pyjs__bind_method2('getImageData', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var index,$25,$26,$iter11_idx,$iter11_iter,$iter12_array,$iter11_array,$iter11_nextval,$attr95,$attr94,$attr96,$attr91,$attr93,$attr92,$iter12_type,$iter11_type,$iter12_iter,y,x,$iter12_idx,$iter12_nextval;
			index = 0;
			$iter11_iter = $m['range'](self['_imagedata']['height']);
			if (typeof ($iter11_array = $iter11_iter['__array']) != 'undefined') {
				$iter11_type = 0;
			} else {
				$iter11_iter = $iter11_iter['__iter__']();
				$iter11_type = typeof ($iter11_array = $iter11_iter['__array']) != 'undefined'? 0 : (typeof $iter11_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter11_idx = 0;
			while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
				x = $iter11_nextval;
				$iter12_iter = $m['range'](self['_imagedata']['width']);
				if (typeof ($iter12_array = $iter12_iter['__array']) != 'undefined') {
					$iter12_type = 0;
				} else {
					$iter12_iter = $iter12_iter['__iter__']();
					$iter12_type = typeof ($iter12_array = $iter12_iter['__array']) != 'undefined'? 0 : (typeof $iter12_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter12_idx = 0;
				while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
					y = $iter12_nextval;
					self['_imagedata']['data']['__setitem__']((index)+(3), (typeof ($25=self)['__array'] != 'undefined'?
						((typeof $25['__array'][$26=$p['tuple']([y, x])]) != 'undefined'?$25['__array'][$26]:
							$25['__getitem__']($26)):
							$25['__getitem__']($p['tuple']([y, x]))));
					index += 4;
				}
			}
			return self['_imagedata']['getImageData']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getImageData'] = $method;
		var $bases = new Array($m['Ndarray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ImageAlpha', $p['tuple']($bases), $data);
	})();
	$m['ImageMatrixInteger'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.surfarray';
		$cls_definition['shape'] = $m['ImageMatrix']['shape'];
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $29,$38,$28,$36,$37,$35,$32,$33,$30,$31,$27,value,$34;
			value = $m['ImageMatrix']['__getitem__'](self, $p['tuple']([(typeof ($27=index)['__array'] != 'undefined'?
				((typeof $27['__array'][$28=1]) != 'undefined'?$27['__array'][$28]:
					$27['__getitem__']($28)):
					$27['__getitem__'](1)), (typeof ($29=index)['__array'] != 'undefined'?
				((typeof $29['__array'][$30=0]) != 'undefined'?$29['__array'][$30]:
					$29['__getitem__']($30)):
					$29['__getitem__'](0))]));
			return (((typeof ($31=value)['__array'] != 'undefined'?
				((typeof $31['__array'][$32=0]) != 'undefined'?$31['__array'][$32]:
					$31['__getitem__']($32)):
					$31['__getitem__'](0)))<<(16))|(((typeof ($33=value)['__array'] != 'undefined'?
				((typeof $33['__array'][$34=1]) != 'undefined'?$33['__array'][$34]:
					$33['__getitem__']($34)):
					$33['__getitem__'](1)))<<(8))|((typeof ($35=value)['__array'] != 'undefined'?
				((typeof $35['__array'][$36=2]) != 'undefined'?$35['__array'][$36]:
					$35['__getitem__']($36)):
					$35['__getitem__'](2)))|(((typeof ($37=value)['__array'] != 'undefined'?
				((typeof $37['__array'][$38=3]) != 'undefined'?$37['__array'][$38]:
					$37['__getitem__']($38)):
					$37['__getitem__'](3)))<<(24));
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			var $39,$42,$41,$40;
			$m['ImageMatrix']['__setitem__'](self, $p['tuple']([(typeof ($39=index)['__array'] != 'undefined'?
				((typeof $39['__array'][$40=1]) != 'undefined'?$39['__array'][$40]:
					$39['__getitem__']($40)):
					$39['__getitem__'](1)), (typeof ($41=index)['__array'] != 'undefined'?
				((typeof $41['__array'][$42=0]) != 'undefined'?$41['__array'][$42]:
					$41['__getitem__']($42)):
					$41['__getitem__'](0))]), $p['tuple']([((value)>>(16))&(255), ((value)>>(8))&(255), (value)&(255), ((value)>>(24))&(255)]));
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__str__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		var $bases = new Array($m['ImageMatrix']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ImageMatrixInteger', $p['tuple']($bases), $data);
	})();
	$m['ImageInteger'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.surfarray';
		$method = $pyjs__bind_method2('__init__', function(imagedata) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imagedata = arguments[1];
			}
			var $48,$attr115,$iter13_idx,array,$attr116,index,$46,$attr106,$attr107,$attr104,$attr105,$attr102,$attr103,$attr100,$attr101,$43,$47,$iter13_array,$attr108,$attr109,$iter14_array,$iter14_type,$50,$iter14_iter,data,$iter14_idx,$iter14_nextval,$49,$iter13_nextval,$iter13_iter,$attr111,$attr110,$attr113,$attr112,$attr99,$attr114,$iter13_type,$45,y,x,$44;
			self['_imagedata'] = $m['ImageData'](imagedata);
			array = $m['Ndarray'](self['_imagedata']['data']);
			array['setshape'](self['_imagedata']['height'], self['_imagedata']['width'], 4);
			data = $m['Uint32Array']((self['_imagedata']['height'])*(self['_imagedata']['width']));
			index = 0;
			$iter13_iter = $m['range'](self['_imagedata']['width']);
			if (typeof ($iter13_array = $iter13_iter['__array']) != 'undefined') {
				$iter13_type = 0;
			} else {
				$iter13_iter = $iter13_iter['__iter__']();
				$iter13_type = typeof ($iter13_array = $iter13_iter['__array']) != 'undefined'? 0 : (typeof $iter13_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter13_idx = 0;
			while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
				x = $iter13_nextval;
				$iter14_iter = $m['range'](self['_imagedata']['height']);
				if (typeof ($iter14_array = $iter14_iter['__array']) != 'undefined') {
					$iter14_type = 0;
				} else {
					$iter14_iter = $iter14_iter['__iter__']();
					$iter14_type = typeof ($iter14_array = $iter14_iter['__array']) != 'undefined'? 0 : (typeof $iter14_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter14_idx = 0;
				while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
					y = $iter14_nextval;
					data['__setitem__'](index, (((typeof ($43=array)['__array'] != 'undefined'?
						((typeof $43['__array'][$44=$p['tuple']([y, x, 0])]) != 'undefined'?$43['__array'][$44]:
							$43['__getitem__']($44)):
							$43['__getitem__']($p['tuple']([y, x, 0]))))<<(16))|(((typeof ($45=array)['__array'] != 'undefined'?
						((typeof $45['__array'][$46=$p['tuple']([y, x, 1])]) != 'undefined'?$45['__array'][$46]:
							$45['__getitem__']($46)):
							$45['__getitem__']($p['tuple']([y, x, 1]))))<<(8))|((typeof ($47=array)['__array'] != 'undefined'?
						((typeof $47['__array'][$48=$p['tuple']([y, x, 2])]) != 'undefined'?$47['__array'][$48]:
							$47['__getitem__']($48)):
							$47['__getitem__']($p['tuple']([y, x, 2]))))|(((typeof ($49=array)['__array'] != 'undefined'?
						((typeof $49['__array'][$50=$p['tuple']([y, x, 3])]) != 'undefined'?$49['__array'][$50]:
							$49['__getitem__']($50)):
							$49['__getitem__']($p['tuple']([y, x, 3]))))<<(24)));
					index += 1;
				}
			}
			$m['Ndarray']['__init__'](self, data, 'uint32');
			self['setshape'](self['_imagedata']['width'], self['_imagedata']['height']);
			return null;
		}
	, 1, [null,null,['self'],['imagedata']]);
		$cls_definition['__init__'] = $method;
		$cls_definition['shape'] = $m['Ndarray']['shape'];
		$method = $pyjs__bind_method2('getImageData', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter16_idx,$iter16_iter,index,$iter15_iter,$iter16_type,$attr120,$attr121,$attr122,$attr123,$attr124,$attr125,$attr126,$attr127,$attr128,$iter16_nextval,$iter16_array,$attr129,$iter15_array,dat,x,$attr119,$iter15_idx,$attr130,$iter15_nextval,$iter15_type,y,$51,$52;
			index = 0;
			$iter15_iter = $m['range'](self['_imagedata']['height']);
			if (typeof ($iter15_array = $iter15_iter['__array']) != 'undefined') {
				$iter15_type = 0;
			} else {
				$iter15_iter = $iter15_iter['__iter__']();
				$iter15_type = typeof ($iter15_array = $iter15_iter['__array']) != 'undefined'? 0 : (typeof $iter15_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter15_idx = 0;
			while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
				x = $iter15_nextval;
				$iter16_iter = $m['range'](self['_imagedata']['width']);
				if (typeof ($iter16_array = $iter16_iter['__array']) != 'undefined') {
					$iter16_type = 0;
				} else {
					$iter16_iter = $iter16_iter['__iter__']();
					$iter16_type = typeof ($iter16_array = $iter16_iter['__array']) != 'undefined'? 0 : (typeof $iter16_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter16_idx = 0;
				while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
					y = $iter16_nextval;
					dat = (typeof ($51=self)['__array'] != 'undefined'?
						((typeof $51['__array'][$52=$p['tuple']([y, x])]) != 'undefined'?$51['__array'][$52]:
							$51['__getitem__']($52)):
							$51['__getitem__']($p['tuple']([y, x])));
					self['_imagedata']['data']['__setitem__'](index, ((dat)>>(16))&(255));
					self['_imagedata']['data']['__setitem__']((index)+(1), ((dat)>>(8))&(255));
					self['_imagedata']['data']['__setitem__']((index)+(2), (dat)&(255));
					self['_imagedata']['data']['__setitem__']((index)+(3), ((dat)>>(24))&(255));
					index += 4;
				}
			}
			return self['_imagedata']['getImageData']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getImageData'] = $method;
		var $bases = new Array($m['Ndarray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ImageInteger', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.surfarray */


/* end module: pyjsdl.surfarray */


/*
PYJS_DEPS: ['pyjsdl.surface.Surface', 'pyjsdl', 'pyjsdl.surface', 'pyjsdl.pyjsarray.Ndarray', 'pyjsdl.pyjsarray', 'pyjsdl.pyjsarray.Uint8ClampedArray', 'pyjsdl.pyjsarray.Uint8Array', 'pyjsdl.pyjsarray.Uint32Array', 'pyjsdl.pyjsarray.ImageData', 'pyjsdl.pyjsarray.ImageMatrix', 'sys', 'pyjsdl.util._range', 'pyjsdl.util']
*/
