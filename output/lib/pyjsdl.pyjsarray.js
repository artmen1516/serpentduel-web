/* start module: pyjsdl.pyjsarray */
$pyjs['loaded_modules']['pyjsdl.pyjsarray'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.pyjsarray']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.pyjsarray'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.pyjsarray'];
	$m['__repr__'] = function() { return '<module: pyjsdl.pyjsarray>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.pyjsarray';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['pyjsarray'] = $pyjs['loaded_modules']['pyjsdl.pyjsarray'];
	var $attr1,$attr2,$bool1,$cmp1,$cmp2;

	$m['_ceil'] = $p['___import___']('math.ceil', 'pyjsdl', null, false);
	$m['sys'] = $p['___import___']('sys', 'pyjsdl');
	$m['_compat'] = function() {

		$p['range'] = $p['xrange'];
		return null;
	};
	$m['_compat']['__name__'] = '_compat';

	$m['_compat']['__bind_type__'] = 0;
	$m['_compat']['__args__'] = [null,null];
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
		$m['_compat']();
	}
	$m['TypedArray'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$cls_definition['__obj'] = $p['dict']([['Uint8ClampedArray', (typeof Uint8ClampedArray == "undefined"?$m['Uint8ClampedArray']:Uint8ClampedArray)], ['Uint8Array', (typeof Uint8Array == "undefined"?$m['Uint8Array']:Uint8Array)], ['Uint16Array', (typeof Uint16Array == "undefined"?$m['Uint16Array']:Uint16Array)], ['Uint32Array', (typeof Uint32Array == "undefined"?$m['Uint32Array']:Uint32Array)], ['Int8Array', (typeof Int8Array == "undefined"?$m['Int8Array']:Int8Array)], ['Int16Array', (typeof Int16Array == "undefined"?$m['Int16Array']:Int16Array)], ['Int32Array', (typeof Int32Array == "undefined"?$m['Int32Array']:Int32Array)], ['Float32Array', (typeof Float32Array == "undefined"?$m['Float32Array']:Float32Array)], ['Float64Array', (typeof Float64Array == "undefined"?$m['Float64Array']:Float64Array)]]);
		$method = $pyjs__bind_method2('__init__', function(data, offset, length, typedarray) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
				typedarray = arguments[4];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			if (typeof typedarray == 'undefined') typedarray=arguments['callee']['__args__'][6][1];
			var $bool11,$and2,$bool10,$and1,$bool5,$attr5,$attr4,$attr6,$bool2,$bool3,$bool6,$bool7,$bool4,$bool8,$bool9,$attr3;
			if ((($bool2=data) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				if ((($bool3=$p['isinstance'](data, $p['float_int'])) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					if ((($bool4=$m['pyjs_mode']['optimized']) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
						self['_data'] = new typedarray(data);
					}
					else {
						self['_data'] = new typedarray(data['valueOf']());
					}
				}
				else if ((($bool5=$p['isinstance'](data, $p['tuple']([$p['list'], $p['tuple']]))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					if ((($bool6=$m['pyjs_mode']['optimized']) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
						self['_data'] = new typedarray(data['getArray']());
					}
					else {
						data = function(){
							var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,dat,$iter1_idx,$iter1_array;
	$collcomp1 = $p['list']();
						$iter1_iter = data;
						if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
							$iter1_type = 0;
						} else {
							$iter1_iter = $iter1_iter['__iter__']();
							$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter1_idx = 0;
						while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
							dat = $iter1_nextval;
							$collcomp1['append'](dat['valueOf']());
						}

	return $collcomp1;}();
						self['_data'] = new typedarray(data['getArray']());
					}
				}
				else if ((($bool7=$p['isinstance'](data, $m['TypedArray'])) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					self['_data'] = new typedarray(data['_data']);
				}
				else {
					if ((($bool9=((($bool8=$and1=(offset === null)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
						false :
						(typeof $bool8=='object'?
							(typeof $bool8['__nonzero__']=='function'?
								$bool8['__nonzero__']() :
								(typeof $bool8['__len__']=='function'?
									($bool8['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(length === null):$and1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
							false :
							(typeof $bool9=='object'?
								(typeof $bool9['__nonzero__']=='function'?
									$bool9['__nonzero__']() :
									(typeof $bool9['__len__']=='function'?
										($bool9['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['_data'] = new typedarray(data);
					}
					else {
						if ((($bool10=(offset === null)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
							offset = 0;
						}
						if ((($bool11=(length === null)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
							self['_data'] = new typedarray(data, offset);
						}
						else {
							self['_data'] = new typedarray(data, offset, length);
						}
					}
				}
			}
			else {
				self['_data'] = null;
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null],['typedarray', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_array', function(array) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				array = arguments[1];
			}
			var typedarray;
			typedarray = self['__class__']();
			typedarray['_data'] = array;
			return typedarray;
		}
	, 1, [null,null,['self'],['array']]);
		$cls_definition['_array'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['_data']['toString']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,index,$cmp6,$cmp5,$cmp3,$cmp4,$bool13,$4,$attr7,$attr10,$attr8,$3,$2,$bool12,$1;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					index = 0;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state['splice'](1, $generator_state['length']-1);
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0)||((($bool13=((($cmp5=index)===($cmp6=self['_data']['length'])?0:
						(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
							($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
							$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
							false :
							(typeof $bool13=='object'?
								(typeof $bool13['__nonzero__']=='function'?
									$bool13['__nonzero__']() :
									(typeof $bool13['__len__']=='function'?
										($bool13['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) ));$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							$yield_value = (typeof ($3=self)['__array'] != 'undefined'?
								((typeof $3['__array'][$4=index]) != 'undefined'?$3['__array'][$4]:
									$3['__getitem__']($4)):
									$3['__getitem__'](index));
							$yielding = true;
							$generator_state[1] = 1;
							return $yield_value;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[1] = -1;
								throw $exc;
							}
							index += 1;
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

				return;
			};
			return $generator;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return $p['float_int'](self['_data'][index]);;
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
			var $bool14,$attr11,$attr12;
			if ((($bool14=$m['pyjs_mode']['optimized']) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
					false :
					(typeof $bool14=='object'?
						(typeof $bool14['__nonzero__']=='function'?
							$bool14['__nonzero__']() :
							(typeof $bool14['__len__']=='function'?
								($bool14['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
self['_data'][index]=value;
			}
			else {
				value = value['valueOf']();
self['_data'][index]=value;
			}
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr14,$attr13;
			return self['_data']['length'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('filter', function(func) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				func = arguments[1];
			}

			return self['_array'](self['_data']['filter'](func));
		}
	, 1, [null,null,['self'],['func']]);
		$cls_definition['filter'] = $method;
		$method = $pyjs__bind_method2('map', function(func) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				func = arguments[1];
			}

			return self['_array'](self['_data']['map'](func));
		}
	, 1, [null,null,['self'],['func']]);
		$cls_definition['map'] = $method;
		$method = $pyjs__bind_method2('reduce', function(func) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				func = arguments[1];
			}

			return self['_array'](self['_data']['reduce'](func));
		}
	, 1, [null,null,['self'],['func']]);
		$cls_definition['reduce'] = $method;
		$method = $pyjs__bind_method2('slice', function(i, j) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				i = arguments[1];
				j = arguments[2];
			}

			return self['_array'](self['_data']['slice'](i, j));
		}
	, 1, [null,null,['self'],['i'],['j']]);
		$cls_definition['slice'] = $method;
		$method = $pyjs__bind_method2('set', function(data, offset) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
			}
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			var $bool15,$bool16,$bool17,$attr18,$attr15,$attr17,$attr16;
			if ((($bool15=$p['isinstance'](data, $p['tuple']([$p['list'], $p['tuple']]))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
					false :
					(typeof $bool15=='object'?
						(typeof $bool15['__nonzero__']=='function'?
							$bool15['__nonzero__']() :
							(typeof $bool15['__len__']=='function'?
								($bool15['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool16=$m['pyjs_mode']['optimized']) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
						false :
						(typeof $bool16=='object'?
							(typeof $bool16['__nonzero__']=='function'?
								$bool16['__nonzero__']() :
								(typeof $bool16['__len__']=='function'?
									($bool16['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['_data']['set'](data['getArray'](), offset);
				}
				else {
					data = function(){
						var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp2,dat,$iter2_idx,$iter2_array;
	$collcomp2 = $p['list']();
					$iter2_iter = data;
					if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter['__iter__']();
						$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						dat = $iter2_nextval;
						$collcomp2['append'](dat['valueOf']());
					}

	return $collcomp2;}();
					self['_data']['set'](data['getArray'](), offset);
				}
			}
			else if ((($bool17=$p['isinstance'](data, $m['TypedArray'])) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
					false :
					(typeof $bool17=='object'?
						(typeof $bool17['__nonzero__']=='function'?
							$bool17['__nonzero__']() :
							(typeof $bool17['__len__']=='function'?
								($bool17['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['_data']['set'](data['_data'], offset);
			}
			return null;
		}
	, 1, [null,null,['self'],['data'],['offset', 0]]);
		$cls_definition['set'] = $method;
		$method = $pyjs__bind_method2('subarray', function(begin, end) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				begin = arguments[1];
				end = arguments[2];
			}
			if (typeof begin == 'undefined') begin=arguments['callee']['__args__'][3][1];
			if (typeof end == 'undefined') end=arguments['callee']['__args__'][4][1];
			var $bool18,$attr20,$attr19,typedarray,array;
			if ((($bool18=(end === null)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
					false :
					(typeof $bool18=='object'?
						(typeof $bool18['__nonzero__']=='function'?
							$bool18['__nonzero__']() :
							(typeof $bool18['__len__']=='function'?
								($bool18['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				end = self['_data']['length'];
			}
			array = self['_data']['subarray'](begin, end);
			typedarray = self['__class__']();
			typedarray['_data'] = array;
			return typedarray;
		}
	, 1, [null,null,['self'],['begin', 0],['end', null]]);
		$cls_definition['subarray'] = $method;
		$method = $pyjs__bind_method2('getLength', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr21,$attr22;
			return self['_data']['length'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getLength'] = $method;
		$method = $pyjs__bind_method2('getByteLength', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr23,$attr24;
			return self['_data']['byteLength'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getByteLength'] = $method;
		$method = $pyjs__bind_method2('getBuffer', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr25,$attr26;
			return self['_data']['buffer'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getBuffer'] = $method;
		$method = $pyjs__bind_method2('getByteOffset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr28,$attr27;
			return self['_data']['byteOffset'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getByteOffset'] = $method;
		$method = $pyjs__bind_method2('getBytesPerElement', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr29,$attr30;
			return self['_data']['BYTES_PER_ELEMENT'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getBytesPerElement'] = $method;
		$method = $pyjs__bind_method2('getArray', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr32,$attr31;
			return self['_data'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getArray'] = $method;
		$method = $pyjs__bind_method2('setArray', function(array) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				array = arguments[1];
			}

			self['_data'] = array;
			return null;
		}
	, 1, [null,null,['self'],['array']]);
		$cls_definition['setArray'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TypedArray', $p['tuple']($bases), $data);
	})();
	$m['Uint8ClampedArray'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $bool19,$attr33,$pyjs_try_err,$attr34,$6,typedarray,$5;
			try {
				typedarray = (typeof ($5=$m['TypedArray']['__obj'])['__array'] != 'undefined'?
					((typeof $5['__array'][$6='Uint8ClampedArray']) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__']('Uint8ClampedArray'));
				$m['TypedArray']['__init__'](self, data, offset, length, typedarray);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ((($bool19=$p['isUndefined'](typedarray)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
							false :
							(typeof $bool19=='object'?
								(typeof $bool19['__nonzero__']=='function'?
									$bool19['__nonzero__']() :
									(typeof $bool19['__len__']=='function'?
										($bool19['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['TypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Uint8ClampedArray', $p['tuple']($bases), $data);
	})();
	$m['Uint8Array'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $8,$pyjs_try_err,typedarray,$attr36,$attr35,$7,$bool20;
			try {
				typedarray = (typeof ($7=$m['TypedArray']['__obj'])['__array'] != 'undefined'?
					((typeof $7['__array'][$8='Uint8Array']) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__']('Uint8Array'));
				$m['TypedArray']['__init__'](self, data, offset, length, typedarray);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ((($bool20=$p['isUndefined'](typedarray)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
							false :
							(typeof $bool20=='object'?
								(typeof $bool20['__nonzero__']=='function'?
									$bool20['__nonzero__']() :
									(typeof $bool20['__len__']=='function'?
										($bool20['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['TypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Uint8Array', $p['tuple']($bases), $data);
	})();
	$m['Uint16Array'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $10,$9,$pyjs_try_err,$attr37,$bool21,typedarray,$attr38;
			try {
				typedarray = (typeof ($9=$m['TypedArray']['__obj'])['__array'] != 'undefined'?
					((typeof $9['__array'][$10='Uint16Array']) != 'undefined'?$9['__array'][$10]:
						$9['__getitem__']($10)):
						$9['__getitem__']('Uint16Array'));
				$m['TypedArray']['__init__'](self, data, offset, length, typedarray);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ((($bool21=$p['isUndefined'](typedarray)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
							false :
							(typeof $bool21=='object'?
								(typeof $bool21['__nonzero__']=='function'?
									$bool21['__nonzero__']() :
									(typeof $bool21['__len__']=='function'?
										($bool21['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['TypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Uint16Array', $p['tuple']($bases), $data);
	})();
	$m['Uint32Array'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $11,$12,$bool22,$pyjs_try_err,$attr40,typedarray,$attr39;
			try {
				typedarray = (typeof ($11=$m['TypedArray']['__obj'])['__array'] != 'undefined'?
					((typeof $11['__array'][$12='Uint32Array']) != 'undefined'?$11['__array'][$12]:
						$11['__getitem__']($12)):
						$11['__getitem__']('Uint32Array'));
				$m['TypedArray']['__init__'](self, data, offset, length, typedarray);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ((($bool22=$p['isUndefined'](typedarray)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
							false :
							(typeof $bool22=='object'?
								(typeof $bool22['__nonzero__']=='function'?
									$bool22['__nonzero__']() :
									(typeof $bool22['__len__']=='function'?
										($bool22['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['TypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Uint32Array', $p['tuple']($bases), $data);
	})();
	$m['Int8Array'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $14,$13,$pyjs_try_err,$attr42,$bool23,$attr41,typedarray;
			try {
				typedarray = (typeof ($13=$m['TypedArray']['__obj'])['__array'] != 'undefined'?
					((typeof $13['__array'][$14='Int8Array']) != 'undefined'?$13['__array'][$14]:
						$13['__getitem__']($14)):
						$13['__getitem__']('Int8Array'));
				$m['TypedArray']['__init__'](self, data, offset, length, typedarray);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ((($bool23=$p['isUndefined'](typedarray)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
							false :
							(typeof $bool23=='object'?
								(typeof $bool23['__nonzero__']=='function'?
									$bool23['__nonzero__']() :
									(typeof $bool23['__len__']=='function'?
										($bool23['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['TypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Int8Array', $p['tuple']($bases), $data);
	})();
	$m['Int16Array'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $15,$16,$attr44,$bool24,$pyjs_try_err,$attr43,typedarray;
			try {
				typedarray = (typeof ($15=$m['TypedArray']['__obj'])['__array'] != 'undefined'?
					((typeof $15['__array'][$16='Int16Array']) != 'undefined'?$15['__array'][$16]:
						$15['__getitem__']($16)):
						$15['__getitem__']('Int16Array'));
				$m['TypedArray']['__init__'](self, data, offset, length, typedarray);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ((($bool24=$p['isUndefined'](typedarray)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
							false :
							(typeof $bool24=='object'?
								(typeof $bool24['__nonzero__']=='function'?
									$bool24['__nonzero__']() :
									(typeof $bool24['__len__']=='function'?
										($bool24['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['TypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Int16Array', $p['tuple']($bases), $data);
	})();
	$m['Int32Array'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $bool25,$17,$18,$pyjs_try_err,$attr46,$attr45,typedarray;
			try {
				typedarray = (typeof ($17=$m['TypedArray']['__obj'])['__array'] != 'undefined'?
					((typeof $17['__array'][$18='Int32Array']) != 'undefined'?$17['__array'][$18]:
						$17['__getitem__']($18)):
						$17['__getitem__']('Int32Array'));
				$m['TypedArray']['__init__'](self, data, offset, length, typedarray);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ((($bool25=$p['isUndefined'](typedarray)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
							false :
							(typeof $bool25=='object'?
								(typeof $bool25['__nonzero__']=='function'?
									$bool25['__nonzero__']() :
									(typeof $bool25['__len__']=='function'?
										($bool25['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['TypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Int32Array', $p['tuple']($bases), $data);
	})();
	$m['Float32Array'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $20,$19,$attr47,$pyjs_try_err,$bool26,typedarray,$attr48;
			try {
				typedarray = (typeof ($19=$m['TypedArray']['__obj'])['__array'] != 'undefined'?
					((typeof $19['__array'][$20='Float32Array']) != 'undefined'?$19['__array'][$20]:
						$19['__getitem__']($20)):
						$19['__getitem__']('Float32Array'));
				$m['TypedArray']['__init__'](self, data, offset, length, typedarray);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ((($bool26=$p['isUndefined'](typedarray)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
							false :
							(typeof $bool26=='object'?
								(typeof $bool26['__nonzero__']=='function'?
									$bool26['__nonzero__']() :
									(typeof $bool26['__len__']=='function'?
										($bool26['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return self['_data'][index];;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		var $bases = new Array($m['TypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Float32Array', $p['tuple']($bases), $data);
	})();
	$m['Float64Array'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];
			var $21,$attr50,$22,$bool27,$pyjs_try_err,typedarray,$attr49;
			try {
				typedarray = (typeof ($21=$m['TypedArray']['__obj'])['__array'] != 'undefined'?
					((typeof $21['__array'][$22='Float64Array']) != 'undefined'?$21['__array'][$22]:
						$21['__getitem__']($22)):
						$21['__getitem__']('Float64Array'));
				$m['TypedArray']['__init__'](self, data, offset, length, typedarray);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					if ((($bool27=$p['isUndefined'](typedarray)) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
							false :
							(typeof $bool27=='object'?
								(typeof $bool27['__nonzero__']=='function'?
									$bool27['__nonzero__']() :
									(typeof $bool27['__len__']=='function'?
										($bool27['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						throw ($p['NotImplementedError']('TypedArray data type not implemented'));
					}
					else {
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return self['_data'][index];;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		var $bases = new Array($m['TypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Float64Array', $p['tuple']($bases), $data);
	})();
	$m['CanvasPixelArray'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(data, offset, length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
				length = arguments[3];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			if (typeof length == 'undefined') length=arguments['callee']['__args__'][5][1];

			$m['TypedArray']['__init__'](self, data, offset, length);
			self['_superArray'] = null;
			self['_superIndex'] = $p['tuple']([0, 0]);
			return null;
		}
	, 1, [null,null,['self'],['data', null],['offset', null],['length', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $34,$31,$attr60,$cmp9,$cmp8,$attr61,$attr62,$attr63,$29,index,$attr64,$attr65,$25,$24,$27,$26,$attr66,$bool29,$bool28,$28,$33,$32,$cmp10,$attr59,$attr58,$cmp7,$attr51,$30,$attr53,$attr52,$attr55,$attr54,$attr57,$attr56,$bool32,$bool33,$bool30,$bool31,$23;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$generator_state[2] = 0;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					if(($generator_state[1]==1)||($generator_state[1]<1&&((($bool32=!(($bool31=self['_superArray']) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
						false :
						(typeof $bool31=='object'?
							(typeof $bool31['__nonzero__']=='function'?
								$bool31['__nonzero__']() :
								(typeof $bool31['__len__']=='function'?
									($bool31['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
							false :
							(typeof $bool32=='object'?
								(typeof $bool32['__nonzero__']=='function'?
									$bool32['__nonzero__']() :
									(typeof $bool32['__len__']=='function'?
										($bool32['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )))) {
						$generator_state[1]=1;
						if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
							for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
							$m['TypedArray']['__iter__'](self);
							$generator_state[2]=1;
						}
						if ($generator_state[2] == 1) {
						}
					}
					else if ($generator_state[1]==0||$generator_state[1]==2) {
						$generator_state[1]=2;
						if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
							for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
							index = (typeof ($29=self['_superIndex'])['__array'] != 'undefined'?
								((typeof $29['__array'][$30=0]) != 'undefined'?$29['__array'][$30]:
									$29['__getitem__']($30)):
									$29['__getitem__'](0));
							$generator_state[2]=1;
						}
						if ($generator_state[2] == 1) {
							$generator_state['splice'](3, $generator_state['length']-3);
							$generator_state[2]=2;
						}
						if ($generator_state[2] == 2) {
							for (;($generator_state[3] > 0)||((($bool33=((($cmp9=index)===($cmp10=(typeof ($31=self['_superIndex'])['__array'] != 'undefined'?
								((typeof $31['__array'][$32=1]) != 'undefined'?$31['__array'][$32]:
									$31['__getitem__']($32)):
									$31['__getitem__'](1)))?0:
								(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
									($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
									$p['cmp']($cmp9, $cmp10))) == -1)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
									false :
									(typeof $bool33=='object'?
										(typeof $bool33['__nonzero__']=='function'?
											$bool33['__nonzero__']() :
											(typeof $bool33['__len__']=='function'?
												($bool33['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) ));$generator_state[3] = 0) {
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
									$yield_value = (typeof ($33=self['_superArray'])['__array'] != 'undefined'?
										((typeof $33['__array'][$34=index]) != 'undefined'?$33['__array'][$34]:
											$33['__getitem__']($34)):
											$33['__getitem__'](index));
									$yielding = true;
									$generator_state[3] = 1;
									return $yield_value;
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[3] = -1;
										throw $exc;
									}
									index += 1;
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
								}
							}
							$generator_state[2]=3;
						}
						if ($generator_state[2] == 3) {
							$generator_state[2]=4;
						}
						if ($generator_state[2] == 4) {
						}
					}
					$generator_state[1]=0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
				}

				return;
			};
			return $generator;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $35,$attr68,$attr69,$36,$attr67,$attr70,$bool34,$bool35;
			if ((($bool35=!(($bool34=self['_superArray']) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
				false :
				(typeof $bool34=='object'?
					(typeof $bool34['__nonzero__']=='function'?
						$bool34['__nonzero__']() :
						(typeof $bool34['__len__']=='function'?
							($bool34['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
					false :
					(typeof $bool35=='object'?
						(typeof $bool35['__nonzero__']=='function'?
							$bool35['__nonzero__']() :
							(typeof $bool35['__len__']=='function'?
								($bool35['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $m['TypedArray']['__getitem__'](self, index);
			}
			else {
				return self['_superArray']['__getitem__']((index)+((typeof ($35=self['_superIndex'])['__array'] != 'undefined'?
					((typeof $35['__array'][$36=0]) != 'undefined'?$35['__array'][$36]:
						$35['__getitem__']($36)):
						$35['__getitem__'](0))));
			}
			return null;
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
			var $38,$37,$attr74,$attr73,$attr72,$attr71,$bool36,$bool37;
			if ((($bool37=!(($bool36=self['_superArray']) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
				false :
				(typeof $bool36=='object'?
					(typeof $bool36['__nonzero__']=='function'?
						$bool36['__nonzero__']() :
						(typeof $bool36['__len__']=='function'?
							($bool36['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
					false :
					(typeof $bool37=='object'?
						(typeof $bool37['__nonzero__']=='function'?
							$bool37['__nonzero__']() :
							(typeof $bool37['__len__']=='function'?
								($bool37['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['TypedArray']['__setitem__'](self, index, value);
			}
			else {
				self['_superArray']['__setitem__']((index)+((typeof ($37=self['_superIndex'])['__array'] != 'undefined'?
					((typeof $37['__array'][$38=0]) != 'undefined'?$37['__array'][$38]:
						$37['__getitem__']($38)):
						$37['__getitem__'](0))), value);
			}
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('set', function(data, offset) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				offset = arguments[2];
			}
			if (typeof offset == 'undefined') offset=arguments['callee']['__args__'][4][1];
			var index,$iter3_nextval,$iter3_array,$len1,$attr77,$attr76,$iter3_type,$attr78,$40,$iter3_idx,$iter3_iter,$41,$42,$bool38,$bool39,$attr75,$39;
			if ((($bool39=!(($bool38=self['_superArray']) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
				false :
				(typeof $bool38=='object'?
					(typeof $bool38['__nonzero__']=='function'?
						$bool38['__nonzero__']() :
						(typeof $bool38['__len__']=='function'?
							($bool38['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
					false :
					(typeof $bool39=='object'?
						(typeof $bool39['__nonzero__']=='function'?
							$bool39['__nonzero__']() :
							(typeof $bool39['__len__']=='function'?
								($bool39['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter3_iter = $p['range']((($len1=data) === null?0:
					(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'?$len1['length']:
								$p['len']($len1))))));
				if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter['__iter__']();
					$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					index = $iter3_nextval;
					self['__setitem__']((index)+(offset), (typeof ($39=data)['__array'] != 'undefined'?
						((typeof $39['__array'][$40=index]) != 'undefined'?$39['__array'][$40]:
							$39['__getitem__']($40)):
							$39['__getitem__'](index)));
				}
			}
			else {
				self['_superArray']['set'](data, (offset)+((typeof ($41=self['_superIndex'])['__array'] != 'undefined'?
					((typeof $41['__array'][$42=0]) != 'undefined'?$41['__array'][$42]:
						$41['__getitem__']($42)):
						$41['__getitem__'](0))));
			}
			return null;
		}
	, 1, [null,null,['self'],['data'],['offset', 0]]);
		$cls_definition['set'] = $method;
		$method = $pyjs__bind_method2('subarray', function(begin, end) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				begin = arguments[1];
				end = arguments[2];
			}
			if (typeof begin == 'undefined') begin=arguments['callee']['__args__'][3][1];
			if (typeof end == 'undefined') end=arguments['callee']['__args__'][4][1];
			var $attr82,$attr80,$attr81,$attr79,$bool40,array;
			if ((($bool40=(end === null)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
					false :
					(typeof $bool40=='object'?
						(typeof $bool40['__nonzero__']=='function'?
							$bool40['__nonzero__']() :
							(typeof $bool40['__len__']=='function'?
								($bool40['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				end = self['_data']['length'];
			}
			array = self['__class__']();
			array['_data'] = self['_data'];
			array['_superArray'] = self;
			array['_superIndex'] = $p['tuple']([begin, end]);
			return array;
		}
	, 1, [null,null,['self'],['begin', 0],['end', null]]);
		$cls_definition['subarray'] = $method;
		var $bases = new Array($m['TypedArray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('CanvasPixelArray', $p['tuple']($bases), $data);
	})();
	$m['Ndarray'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$cls_definition['__typedarray'] = $p['dict']([['uint8c', $m['Uint8ClampedArray']], ['int8', $m['Int8Array']], ['uint8', $m['Uint8Array']], ['int16', $m['Int16Array']], ['uint16', $m['Uint16Array']], ['int32', $m['Int32Array']], ['uint32', $m['Uint32Array']], ['float32', $m['Float32Array']], ['float64', $m['Float64Array']]]);
		$cls_definition['__dtypes'] = $p['dict']([['uint8c', 'uint8c'], ['x', 'uint8c'], [0, 'uint8c'], ['int8', 'int8'], ['b', 'int8'], [4, 'int8'], ['uint8', 'uint8'], ['B', 'uint8'], [1, 'uint8'], ['int16', 'int16'], ['h', 'int16'], [5, 'int16'], ['uint16', 'uint16'], ['H', 'uint16'], [2, 'uint16'], ['int32', 'int32'], ['i', 'int32'], [6, 'int32'], ['uint32', 'uint32'], ['I', 'uint32'], [3, 'uint32'], ['float32', 'float32'], ['f', 'float32'], [7, 'float32'], ['float64', 'float64'], ['d', 'float64'], [8, 'float64']]);
		$method = $pyjs__bind_method2('__init__', function(dim, dtype) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				dim = arguments[1];
				dtype = arguments[2];
			}
			if (typeof dtype == 'undefined') dtype=arguments['callee']['__args__'][4][1];
			var $iter5_nextval,$53,$iter5_iter,$iter4_type,$iter5_type,$iter4_iter,size,$attr83,$attr86,$attr87,$attr84,$attr85,$50,$attr89,$49,$48,$iter5_array,$43,$47,$46,$45,$44,$bool46,$bool45,$bool44,$iter5_idx,$bool42,$bool41,$51,$and3,$and4,indices,$cmp11,$cmp12,$attr91,$attr95,$attr96,$bool43,$attr90,$attr93,$attr92,i,$iter4_nextval,_dat,_dim,$iter4_idx,$len4,$attr94,$len2,$len3,$iter4_array,typedarray,$52,$len5,$54,$attr88;
			self['_dtype'] = (typeof ($43=self['__dtypes'])['__array'] != 'undefined'?
				((typeof $43['__array'][$44=dtype]) != 'undefined'?$43['__array'][$44]:
					$43['__getitem__']($44)):
					$43['__getitem__'](dtype));
			typedarray = (typeof ($45=self['__typedarray'])['__array'] != 'undefined'?
				((typeof $45['__array'][$46=self['_dtype']]) != 'undefined'?$45['__array'][$46]:
					$45['__getitem__']($46)):
					$45['__getitem__'](self['_dtype']));
			if ((($bool41=$p['isinstance'](dim, $p['tuple'])) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
					false :
					(typeof $bool41=='object'?
						(typeof $bool41['__nonzero__']=='function'?
							$bool41['__nonzero__']() :
							(typeof $bool41['__len__']=='function'?
								($bool41['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				size = 1;
				$iter4_iter = dim;
				if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter['__iter__']();
					$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					i = $iter4_nextval;
					size *= i;
				}
				self['_data'] = typedarray(size);
				self['_shape'] = dim;
				indices = $p['list']([]);
				$iter5_iter = self['_shape'];
				if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter['__iter__']();
					$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					i = $iter5_nextval;
					size /= i;
					indices['append'](size);
				}
				self['_indices'] = $p['tuple'](indices);
			}
			else if ((($bool42=$p['isinstance'](dim, $p['float_int'])) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
					false :
					(typeof $bool42=='object'?
						(typeof $bool42['__nonzero__']=='function'?
							$bool42['__nonzero__']() :
							(typeof $bool42['__len__']=='function'?
								($bool42['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['_data'] = typedarray(dim);
				self['_shape'] = $p['tuple']([dim]);
				self['_indices'] = $p['tuple']([(typeof ($47=self['_shape'])['__array'] != 'undefined'?
					((typeof $47['__array'][$48=0]) != 'undefined'?$47['__array'][$48]:
						$47['__getitem__']($48)):
						$47['__getitem__'](0))]);
			}
			else if ((($bool43=$p['isinstance'](dim, $p['list'])) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
					false :
					(typeof $bool43=='object'?
						(typeof $bool43['__nonzero__']=='function'?
							$bool43['__nonzero__']() :
							(typeof $bool43['__len__']=='function'?
								($bool43['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool46=!(($bool45=((($bool44=$and3=((($cmp11=(($len2=dim) === null?0:
					(typeof $len2['__array'] != 'undefined' ? $len2['__array']['length']:
						(typeof $len2['__len__'] == 'function'?$len2['__len__']():
							(typeof $len2['length'] != 'undefined'?$len2['length']:
								$p['len']($len2))))))===($cmp12=0)?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))) == 1)) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
					false :
					(typeof $bool44=='object'?
						(typeof $bool44['__nonzero__']=='function'?
							$bool44['__nonzero__']() :
							(typeof $bool44['__len__']=='function'?
								($bool44['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$p['isinstance']((typeof ($49=dim)['__array'] != 'undefined'?
					((typeof $49['__array'][$50=0]) != 'undefined'?$49['__array'][$50]:
						$49['__getitem__']($50)):
						$49['__getitem__'](0)), $p['list']):$and3)) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
					false :
					(typeof $bool45=='object'?
						(typeof $bool45['__nonzero__']=='function'?
							$bool45['__nonzero__']() :
							(typeof $bool45['__len__']=='function'?
								($bool45['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
						false :
						(typeof $bool46=='object'?
							(typeof $bool46['__nonzero__']=='function'?
								$bool46['__nonzero__']() :
								(typeof $bool46['__len__']=='function'?
									($bool46['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['_data'] = typedarray(dim);
					self['_shape'] = $p['tuple']([(($len3=dim) === null?0:
						(typeof $len3['__array'] != 'undefined' ? $len3['__array']['length']:
							(typeof $len3['__len__'] == 'function'?$len3['__len__']():
								(typeof $len3['length'] != 'undefined'?$len3['length']:
									$p['len']($len3)))))]);
					self['_indices'] = $p['tuple']([(typeof ($51=self['_shape'])['__array'] != 'undefined'?
						((typeof $51['__array'][$52=0]) != 'undefined'?$51['__array'][$52]:
							$51['__getitem__']($52)):
							$51['__getitem__'](0))]);
				}
				else {
					_dat = self['_lflatten'](dim);
					_dim = self['_lshape'](dim);
					self['_data'] = typedarray($p['list'](_dat));
					self['_shape'] = $p['tuple']([(($len4=self['_data']) === null?0:
						(typeof $len4['__array'] != 'undefined' ? $len4['__array']['length']:
							(typeof $len4['__len__'] == 'function'?$len4['__len__']():
								(typeof $len4['length'] != 'undefined'?$len4['length']:
									$p['len']($len4)))))]);
					self['setshape']($p['tuple'](_dim));
				}
			}
			else {
				self['_data'] = dim;
				self['_shape'] = $p['tuple']([(($len5=dim) === null?0:
					(typeof $len5['__array'] != 'undefined' ? $len5['__array']['length']:
						(typeof $len5['__len__'] == 'function'?$len5['__len__']():
							(typeof $len5['length'] != 'undefined'?$len5['length']:
								$p['len']($len5)))))]);
				self['_indices'] = $p['tuple']([(typeof ($53=self['_shape'])['__array'] != 'undefined'?
					((typeof $53['__array'][$54=0]) != 'undefined'?$53['__array'][$54]:
						$53['__getitem__']($54)):
						$53['__getitem__'](0))]);
			}
			return null;
		}
	, 1, [null,null,['self'],['dim'],['dtype', 'float64']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getshape', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr97,$attr98;
			return self['_shape'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getshape'] = $method;
		$method = $pyjs__bind_method2('setshape', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var dim = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var dim = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var size,$iter6_type,$iter8_iter,$iter6_iter,$iter6_nextval,$iter7_type,$bool47,$iter8_idx,$iter6_idx,$eq2,$iter7_iter,$iter8_type,$eq1,$bool48,$iter6_array,$iter8_nextval,$iter7_idx,$iter7_nextval,array_size,i,$iter7_array,$iter8_array,$58,indices,$55,$56,$57;
			if ((($bool47=$p['isinstance']((typeof ($55=dim)['__array'] != 'undefined'?
				((typeof $55['__array'][$56=0]) != 'undefined'?$55['__array'][$56]:
					$55['__getitem__']($56)):
					$55['__getitem__'](0)), $p['tuple'])) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
					false :
					(typeof $bool47=='object'?
						(typeof $bool47['__nonzero__']=='function'?
							$bool47['__nonzero__']() :
							(typeof $bool47['__len__']=='function'?
								($bool47['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				dim = (typeof ($57=dim)['__array'] != 'undefined'?
					((typeof $57['__array'][$58=0]) != 'undefined'?$57['__array'][$58]:
						$57['__getitem__']($58)):
						$57['__getitem__'](0));
			}
			size = 1;
			$iter6_iter = dim;
			if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter['__iter__']();
				$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				i = $iter6_nextval;
				size *= i;
			}
			array_size = 1;
			$iter7_iter = self['_shape'];
			if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter['__iter__']();
				$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				i = $iter7_nextval;
				array_size *= i;
			}
			if ((($bool48=!(($eq1=size)===($eq2=array_size)&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1['__cmp__']=='function'?$eq1['__cmp__']($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2['__cmp__']=='function'?$eq2['__cmp__']($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
					false :
					(typeof $bool48=='object'?
						(typeof $bool48['__nonzero__']=='function'?
							$bool48['__nonzero__']() :
							(typeof $bool48['__len__']=='function'?
								($bool48['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($p['TypeError']('array size cannot change'));
			}
			self['_shape'] = dim;
			indices = $p['list']([]);
			$iter8_iter = self['_shape'];
			if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
				$iter8_type = 0;
			} else {
				$iter8_iter = $iter8_iter['__iter__']();
				$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter8_idx = 0;
			while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
				i = $iter8_nextval;
				size /= i;
				indices['append'](size);
			}
			self['_indices'] = $p['tuple'](indices);
			return null;
		}
	, 1, ['dim',null,['self']]);
		$cls_definition['setshape'] = $method;
		$cls_definition['shape'] = $p['property']($p['staticmethod']($cls_definition['getshape']), $p['staticmethod']($cls_definition['setshape']));
		$method = $pyjs__bind_method2('_lflatten', function(l) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				l = arguments[1];
			}
			var el,$iter10_nextval,$bool50,$iter12_nextval,$iter10_iter,$iter9_iter,$iter9_nextval,$iter9_idx,_l,$iter11_idx,$iter9_type,$iter11_iter,$iter12_array,$bool49,$iter11_array,$iter11_nextval,$iter12_type,$iter11_type,$iter10_array,$iter9_array,$iter12_iter,$iter10_type,$iter12_idx,$iter10_idx;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$iter11_iter = l;
					if (typeof ($iter11_array = $iter11_iter['__array']) != 'undefined') {
						$iter11_type = 0;
					} else {
						$iter11_iter = $iter11_iter['__iter__']();
						$iter11_type = typeof ($iter11_array = $iter11_iter['__array']) != 'undefined'? 0 : (typeof $iter11_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter11_idx = 0;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							el = $iter11_nextval;
							$generator_state[3] = 0;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if(($generator_state[2]==1)||($generator_state[2]<1&&((($bool50=$p['isinstance'](el, $p['list'])) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
									false :
									(typeof $bool50=='object'?
										(typeof $bool50['__nonzero__']=='function'?
											$bool50['__nonzero__']() :
											(typeof $bool50['__len__']=='function'?
												($bool50['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) )))) {
								$generator_state[2]=1;
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
									$iter12_iter = self['_lflatten'](el);
									if (typeof ($iter12_array = $iter12_iter['__array']) != 'undefined') {
										$iter12_type = 0;
									} else {
										$iter12_iter = $iter12_iter['__iter__']();
										$iter12_type = typeof ($iter12_array = $iter12_iter['__array']) != 'undefined'? 0 : (typeof $iter12_iter['$genfunc'] == 'function'? 1 : -1);
									}
									$iter12_idx = 0;
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									$generator_state[4] = 0;
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
									for (;($generator_state[4] > 0 || typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined');$generator_state[4] = 0) {
										if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
											for (var $i = 4 ; $i < ($generator_state['length']<6?6:$generator_state['length']); $i++) $generator_state[$i]=0;
											_l = $iter12_nextval;
											$yield_value = _l;
											$yielding = true;
											$generator_state[4] = 1;
											return $yield_value;
											$generator_state[4]=1;
										}
										if ($generator_state[4] == 1) {
											if (typeof $exc != 'undefined' && $exc !== null) {
												$yielding = null;
												$generator_state[4] = -1;
												throw $exc;
											}
											$generator_state[4]=2;
										}
										if ($generator_state[4] == 2) {
										}
									}
									$generator_state[3]=3;
								}
								if ($generator_state[3] == 3) {
									$generator_state[3]=4;
								}
								if ($generator_state[3] == 4) {
								}
							}
							else if ($generator_state[2]==0||$generator_state[2]==2) {
								$generator_state[2]=2;
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
									$yield_value = el;
									$yielding = true;
									$generator_state[3] = 1;
									return $yield_value;
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[3] = -1;
										throw $exc;
									}
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
								}
							}
							$generator_state[2]=0;
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

				return;
			};
			return $generator;
		}
	, 1, [null,null,['self'],['l']]);
		$cls_definition['_lflatten'] = $method;
		$method = $pyjs__bind_method2('_lshape', function(l) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				l = arguments[1];
			}
			var $bool51,$bool52,$len7,$len6,$59,_l,$61,$60,$62;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					_l = l;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state['splice'](1, $generator_state['length']-1);
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0)||((($bool52=$p['isinstance'](_l, $p['list'])) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
							false :
							(typeof $bool52=='object'?
								(typeof $bool52['__nonzero__']=='function'?
									$bool52['__nonzero__']() :
									(typeof $bool52['__len__']=='function'?
										($bool52['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) ));$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							$yield_value = (($len7=_l) === null?0:
								(typeof $len7['__array'] != 'undefined' ? $len7['__array']['length']:
									(typeof $len7['__len__'] == 'function'?$len7['__len__']():
										(typeof $len7['length'] != 'undefined'?$len7['length']:
											$p['len']($len7)))));
							$yielding = true;
							$generator_state[1] = 1;
							return $yield_value;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[1] = -1;
								throw $exc;
							}
							_l = (typeof ($61=_l)['__array'] != 'undefined'?
								((typeof $61['__array'][$62=0]) != 'undefined'?$61['__array'][$62]:
									$61['__getitem__']($62)):
									$61['__getitem__'](0));
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

				return;
			};
			return $generator;
		}
	, 1, [null,null,['self'],['l']]);
		$cls_definition['_lshape'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $bool54,$bool55,$79,$bool53,indexLn,array,end,$attr121,$attr124,$attr120,$attr107,$attr122,$attr123,$attr102,$68,$attr100,$attr101,$attr128,subarray,$67,$attr108,$attr109,begin,$attr126,$attr118,$eq3,$attr127,$eq6,$eq4,$eq5,$attr125,$80,$attr119,$73,$76,$77,$74,$75,$attr111,$attr110,$attr113,$attr112,$attr99,$attr114,$attr117,$attr116,$attr115,shapeLn,$78,$len8,$len9;
			if ((($bool53=$p['hasattr'](index, '__len__')) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
					false :
					(typeof $bool53=='object'?
						(typeof $bool53['__nonzero__']=='function'?
							$bool53['__nonzero__']() :
							(typeof $bool53['__len__']=='function'?
								($bool53['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				var $tupleassign1 = $p['__ass_unpack']($p['tuple']([index['__len__'](), (($len8=self['_shape']) === null?0:
					(typeof $len8['__array'] != 'undefined' ? $len8['__array']['length']:
						(typeof $len8['__len__'] == 'function'?$len8['__len__']():
							(typeof $len8['length'] != 'undefined'?$len8['length']:
								$p['len']($len8)))))]), 2, null);
				indexLn = $tupleassign1[0];
				shapeLn = $tupleassign1[1];
				if ((($bool54=(($eq3=indexLn)===($eq4=shapeLn)&&$eq3===null?true:
					($eq3===null?false:($eq4===null?false:
						((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3['__cmp__']=='function'?$eq3['__cmp__']($eq4) === 0:
							((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4['__cmp__']=='function'?$eq4['__cmp__']($eq3) === 0:
								$eq3==$eq4)))))) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
						false :
						(typeof $bool54=='object'?
							(typeof $bool54['__nonzero__']=='function'?
								$bool54['__nonzero__']() :
								(typeof $bool54['__len__']=='function'?
									($bool54['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return (typeof ($67=self['_data'])['__array'] != 'undefined'?
						((typeof $67['__array'][$68=$p['sum'](function(){
						var $iter13_nextval,$iter13_iter,i,$collcomp3,$iter13_type,$attr104,$iter13_idx,$65,$64,$66,$iter13_array,$63,$attr103;
	$collcomp3 = $p['list']();
					$iter13_iter = $p['range'](indexLn);
					if (typeof ($iter13_array = $iter13_iter['__array']) != 'undefined') {
						$iter13_type = 0;
					} else {
						$iter13_iter = $iter13_iter['__iter__']();
						$iter13_type = typeof ($iter13_array = $iter13_iter['__array']) != 'undefined'? 0 : (typeof $iter13_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter13_idx = 0;
					while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
						i = $iter13_nextval;
						$collcomp3['append'](((typeof ($63=index)['__array'] != 'undefined'?
							((typeof $63['__array'][$64=i]) != 'undefined'?$63['__array'][$64]:
								$63['__getitem__']($64)):
								$63['__getitem__'](i)))*((typeof ($65=self['_indices'])['__array'] != 'undefined'?
							((typeof $65['__array'][$66=i]) != 'undefined'?$65['__array'][$66]:
								$65['__getitem__']($66)):
								$65['__getitem__'](i))));
					}

	return $collcomp3;}())]) != 'undefined'?$67['__array'][$68]:
							$67['__getitem__']($68)):
							$67['__getitem__']($p['sum'](function(){
						var $iter13_nextval,$iter13_iter,i,$collcomp3,$iter13_type,$attr104,$iter13_idx,$65,$64,$66,$iter13_array,$63,$attr103;
	$collcomp3 = $p['list']();
					$iter13_iter = $p['range'](indexLn);
					if (typeof ($iter13_array = $iter13_iter['__array']) != 'undefined') {
						$iter13_type = 0;
					} else {
						$iter13_iter = $iter13_iter['__iter__']();
						$iter13_type = typeof ($iter13_array = $iter13_iter['__array']) != 'undefined'? 0 : (typeof $iter13_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter13_idx = 0;
					while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
						i = $iter13_nextval;
						$collcomp3['append'](((typeof ($63=index)['__array'] != 'undefined'?
							((typeof $63['__array'][$64=i]) != 'undefined'?$63['__array'][$64]:
								$63['__getitem__']($64)):
								$63['__getitem__'](i)))*((typeof ($65=self['_indices'])['__array'] != 'undefined'?
							((typeof $65['__array'][$66=i]) != 'undefined'?$65['__array'][$66]:
								$65['__getitem__']($66)):
								$65['__getitem__'](i))));
					}

	return $collcomp3;}())));
				}
				else {
					begin = $p['sum'](function(){
						var $72,$iter14_array,$71,$iter14_type,i,$collcomp4,$70,$attr106,$attr105,$69,$iter14_iter,$iter14_idx,$iter14_nextval;
	$collcomp4 = $p['list']();
					$iter14_iter = $p['range'](indexLn);
					if (typeof ($iter14_array = $iter14_iter['__array']) != 'undefined') {
						$iter14_type = 0;
					} else {
						$iter14_iter = $iter14_iter['__iter__']();
						$iter14_type = typeof ($iter14_array = $iter14_iter['__array']) != 'undefined'? 0 : (typeof $iter14_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter14_idx = 0;
					while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
						i = $iter14_nextval;
						$collcomp4['append'](((typeof ($69=index)['__array'] != 'undefined'?
							((typeof $69['__array'][$70=i]) != 'undefined'?$69['__array'][$70]:
								$69['__getitem__']($70)):
								$69['__getitem__'](i)))*((typeof ($71=self['_indices'])['__array'] != 'undefined'?
							((typeof $71['__array'][$72=i]) != 'undefined'?$71['__array'][$72]:
								$71['__getitem__']($72)):
								$71['__getitem__'](i))));
					}

	return $collcomp4;}());
					end = (begin)+((typeof ($73=self['_indices'])['__array'] != 'undefined'?
						((typeof $73['__array'][$74=(indexLn)-(1)]) != 'undefined'?$73['__array'][$74]:
							$73['__getitem__']($74)):
							$73['__getitem__']((indexLn)-(1))));
					subarray = self['_data']['subarray'](begin, end);
					array = $m['Ndarray'](subarray, self['_dtype']);
					array['_shape'] = $p['__getslice'](self['_shape'], indexLn, null);
					array['_indices'] = $p['__getslice'](self['_indices'], indexLn, null);
					return array;
				}
			}
			else {
				if ((($bool55=(($eq5=(($len9=self['_shape']) === null?0:
					(typeof $len9['__array'] != 'undefined' ? $len9['__array']['length']:
						(typeof $len9['__len__'] == 'function'?$len9['__len__']():
							(typeof $len9['length'] != 'undefined'?$len9['length']:
								$p['len']($len9))))))===($eq6=1)&&$eq5===null?true:
					($eq5===null?false:($eq6===null?false:
						((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5['__cmp__']=='function'?$eq5['__cmp__']($eq6) === 0:
							((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6['__cmp__']=='function'?$eq6['__cmp__']($eq5) === 0:
								$eq5==$eq6)))))) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
						false :
						(typeof $bool55=='object'?
							(typeof $bool55['__nonzero__']=='function'?
								$bool55['__nonzero__']() :
								(typeof $bool55['__len__']=='function'?
									($bool55['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return (typeof ($75=self['_data'])['__array'] != 'undefined'?
						((typeof $75['__array'][$76=index]) != 'undefined'?$75['__array'][$76]:
							$75['__getitem__']($76)):
							$75['__getitem__'](index));
				}
				else {
					begin = (index)*((typeof ($77=self['_indices'])['__array'] != 'undefined'?
						((typeof $77['__array'][$78=0]) != 'undefined'?$77['__array'][$78]:
							$77['__getitem__']($78)):
							$77['__getitem__'](0)));
					end = (begin)+((typeof ($79=self['_indices'])['__array'] != 'undefined'?
						((typeof $79['__array'][$80=0]) != 'undefined'?$79['__array'][$80]:
							$79['__getitem__']($80)):
							$79['__getitem__'](0)));
					subarray = self['_data']['subarray'](begin, end);
					array = $m['Ndarray'](subarray, self['_dtype']);
					array['_shape'] = $p['__getslice'](self['_shape'], 1, null);
					array['_indices'] = $p['__getslice'](self['_indices'], 1, null);
					return array;
				}
			}
			return null;
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
			var $98,$94,indexLn,$96,$97,$bool58,begin,$92,$93,$bool62,$eq10,$attr142,$attr140,$attr141,end,$attr147,$attr144,$attr145,$attr149,$attr131,$95,subarray,$bool61,$bool60,$eq8,$eq9,$bool64,$89,$attr143,$90,$bool63,$eq7,$bool59,$91,$attr129,$attr146,unpack,$len10,$len11,$attr150,$attr132,shapeLn,$attr130,$attr137,$attr139,$attr138,$attr148;
			unpack = function(obj, lst) {
				if (typeof lst == 'undefined') lst=arguments['callee']['__args__'][3][1];
				var $bool56,$bool57,$iter15_iter,$iter15_array,$iter15_idx,$iter15_nextval,$iter15_type,element;
				if ((($bool56=(lst === null)) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
						false :
						(typeof $bool56=='object'?
							(typeof $bool56['__nonzero__']=='function'?
								$bool56['__nonzero__']() :
								(typeof $bool56['__len__']=='function'?
									($bool56['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					lst = $p['list']([]);
				}
				$iter15_iter = obj;
				if (typeof ($iter15_array = $iter15_iter['__array']) != 'undefined') {
					$iter15_type = 0;
				} else {
					$iter15_iter = $iter15_iter['__iter__']();
					$iter15_type = typeof ($iter15_array = $iter15_iter['__array']) != 'undefined'? 0 : (typeof $iter15_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter15_idx = 0;
				while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
					element = $iter15_nextval;
					if ((($bool57=$p['isinstance'](element, $p['tuple']([$p['list'], $p['tuple']]))) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
							false :
							(typeof $bool57=='object'?
								(typeof $bool57['__nonzero__']=='function'?
									$bool57['__nonzero__']() :
									(typeof $bool57['__len__']=='function'?
										($bool57['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						unpack(element, lst);
					}
					else {
						lst['append'](element);
					}
				}
				return lst;
			};
			unpack['__name__'] = 'unpack';

			unpack['__bind_type__'] = 0;
			unpack['__args__'] = [null,null,['obj'],['lst', null]];
			if ((($bool58=$p['hasattr'](index, '__len__')) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
					false :
					(typeof $bool58=='object'?
						(typeof $bool58['__nonzero__']=='function'?
							$bool58['__nonzero__']() :
							(typeof $bool58['__len__']=='function'?
								($bool58['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				var $tupleassign2 = $p['__ass_unpack']($p['tuple']([index['__len__'](), (($len10=self['_shape']) === null?0:
					(typeof $len10['__array'] != 'undefined' ? $len10['__array']['length']:
						(typeof $len10['__len__'] == 'function'?$len10['__len__']():
							(typeof $len10['length'] != 'undefined'?$len10['length']:
								$p['len']($len10)))))]), 2, null);
				indexLn = $tupleassign2[0];
				shapeLn = $tupleassign2[1];
				if ((($bool59=(($eq7=indexLn)===($eq8=shapeLn)&&$eq7===null?true:
					($eq7===null?false:($eq8===null?false:
						((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7['__cmp__']=='function'?$eq7['__cmp__']($eq8) === 0:
							((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8['__cmp__']=='function'?$eq8['__cmp__']($eq7) === 0:
								$eq7==$eq8)))))) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
						false :
						(typeof $bool59=='object'?
							(typeof $bool59['__nonzero__']=='function'?
								$bool59['__nonzero__']() :
								(typeof $bool59['__len__']=='function'?
									($bool59['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['_data']['__setitem__']($p['sum'](function(){
						var $iter16_array,$attr133,$iter16_type,i,$collcomp5,$84,$83,$82,$81,$iter16_idx,$attr134,$iter16_nextval,$iter16_iter;
	$collcomp5 = $p['list']();
					$iter16_iter = $p['range'](indexLn);
					if (typeof ($iter16_array = $iter16_iter['__array']) != 'undefined') {
						$iter16_type = 0;
					} else {
						$iter16_iter = $iter16_iter['__iter__']();
						$iter16_type = typeof ($iter16_array = $iter16_iter['__array']) != 'undefined'? 0 : (typeof $iter16_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter16_idx = 0;
					while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
						i = $iter16_nextval;
						$collcomp5['append'](((typeof ($81=index)['__array'] != 'undefined'?
							((typeof $81['__array'][$82=i]) != 'undefined'?$81['__array'][$82]:
								$81['__getitem__']($82)):
								$81['__getitem__'](i)))*((typeof ($83=self['_indices'])['__array'] != 'undefined'?
							((typeof $83['__array'][$84=i]) != 'undefined'?$83['__array'][$84]:
								$83['__getitem__']($84)):
								$83['__getitem__'](i))));
					}

	return $collcomp5;}()), value);
				}
				else {
					begin = $p['sum'](function(){
						var $iter17_nextval,$iter17_iter,$86,i,$collcomp6,$85,$88,$87,$iter17_array,$attr136,$attr135,$iter17_type,$iter17_idx;
	$collcomp6 = $p['list']();
					$iter17_iter = $p['range'](indexLn);
					if (typeof ($iter17_array = $iter17_iter['__array']) != 'undefined') {
						$iter17_type = 0;
					} else {
						$iter17_iter = $iter17_iter['__iter__']();
						$iter17_type = typeof ($iter17_array = $iter17_iter['__array']) != 'undefined'? 0 : (typeof $iter17_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter17_idx = 0;
					while (typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined') {
						i = $iter17_nextval;
						$collcomp6['append'](((typeof ($85=index)['__array'] != 'undefined'?
							((typeof $85['__array'][$86=i]) != 'undefined'?$85['__array'][$86]:
								$85['__getitem__']($86)):
								$85['__getitem__'](i)))*((typeof ($87=self['_indices'])['__array'] != 'undefined'?
							((typeof $87['__array'][$88=i]) != 'undefined'?$87['__array'][$88]:
								$87['__getitem__']($88)):
								$87['__getitem__'](i))));
					}

	return $collcomp6;}());
					end = (begin)+((typeof ($89=self['_indices'])['__array'] != 'undefined'?
						((typeof $89['__array'][$90=(indexLn)-(1)]) != 'undefined'?$89['__array'][$90]:
							$89['__getitem__']($90)):
							$89['__getitem__']((indexLn)-(1))));
					subarray = self['_data']['subarray'](begin, end);
					if ((($bool60=$p['isinstance'](value, $m['Ndarray'])) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
							false :
							(typeof $bool60=='object'?
								(typeof $bool60['__nonzero__']=='function'?
									$bool60['__nonzero__']() :
									(typeof $bool60['__len__']=='function'?
										($bool60['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						value = value['_data'];
					}
					else {
						if ((($bool61=$p['isinstance']((typeof ($91=value)['__array'] != 'undefined'?
							((typeof $91['__array'][$92=0]) != 'undefined'?$91['__array'][$92]:
								$91['__getitem__']($92)):
								$91['__getitem__'](0)), $p['tuple']([$p['list'], $p['tuple']]))) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
								false :
								(typeof $bool61=='object'?
									(typeof $bool61['__nonzero__']=='function'?
										$bool61['__nonzero__']() :
										(typeof $bool61['__len__']=='function'?
											($bool61['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							value = unpack(value);
						}
					}
					subarray['set'](value);
				}
			}
			else {
				if ((($bool62=(($eq9=(($len11=self['_shape']) === null?0:
					(typeof $len11['__array'] != 'undefined' ? $len11['__array']['length']:
						(typeof $len11['__len__'] == 'function'?$len11['__len__']():
							(typeof $len11['length'] != 'undefined'?$len11['length']:
								$p['len']($len11))))))===($eq10=1)&&$eq9===null?true:
					($eq9===null?false:($eq10===null?false:
						((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9['__cmp__']=='function'?$eq9['__cmp__']($eq10) === 0:
							((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10['__cmp__']=='function'?$eq10['__cmp__']($eq9) === 0:
								$eq9==$eq10)))))) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
						false :
						(typeof $bool62=='object'?
							(typeof $bool62['__nonzero__']=='function'?
								$bool62['__nonzero__']() :
								(typeof $bool62['__len__']=='function'?
									($bool62['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['_data']['__setitem__'](index, value);
				}
				else {
					begin = (index)*((typeof ($93=self['_indices'])['__array'] != 'undefined'?
						((typeof $93['__array'][$94=0]) != 'undefined'?$93['__array'][$94]:
							$93['__getitem__']($94)):
							$93['__getitem__'](0)));
					end = (begin)+((typeof ($95=self['_indices'])['__array'] != 'undefined'?
						((typeof $95['__array'][$96=0]) != 'undefined'?$95['__array'][$96]:
							$95['__getitem__']($96)):
							$95['__getitem__'](0)));
					subarray = self['_data']['subarray'](begin, end);
					if ((($bool63=$p['isinstance'](value, $m['Ndarray'])) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
							false :
							(typeof $bool63=='object'?
								(typeof $bool63['__nonzero__']=='function'?
									$bool63['__nonzero__']() :
									(typeof $bool63['__len__']=='function'?
										($bool63['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						value = value['_data'];
					}
					else {
						if ((($bool64=$p['isinstance']((typeof ($97=value)['__array'] != 'undefined'?
							((typeof $97['__array'][$98=0]) != 'undefined'?$97['__array'][$98]:
								$97['__getitem__']($98)):
								$97['__getitem__'](0)), $p['tuple']([$p['list'], $p['tuple']]))) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
								false :
								(typeof $bool64=='object'?
									(typeof $bool64['__nonzero__']=='function'?
										$bool64['__nonzero__']() :
										(typeof $bool64['__len__']=='function'?
											($bool64['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							value = unpack(value);
						}
					}
					subarray['set'](value);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__getslice__', function(lower, upper) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
			}
			var $attr151,$attr152,subarray;
			subarray = self['_data']['subarray'](lower, upper);
			return $m['Ndarray'](subarray, self['_dtype']);
		}
	, 1, [null,null,['self'],['lower'],['upper']]);
		$cls_definition['__getslice__'] = $method;
		$method = $pyjs__bind_method2('__setslice__', function(lower, upper, data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
				data = arguments[3];
			}
			var subarray;
			subarray = self['_data']['subarray'](lower, upper);
			subarray['set'](data);
			return null;
		}
	, 1, [null,null,['self'],['lower'],['upper'],['data']]);
		$cls_definition['__setslice__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $116,$117,$114,$115,$112,$99,$110,$111,$107,$attr173,$103,$bool70,$attr172,$cmp20,$cmp21,$cmp22,$cmp23,$attr186,$len13,$105,array,$113,$attr183,index,end,$attr169,$106,$attr164,$attr165,$attr167,$attr160,$attr161,$attr162,$attr163,$bool69,$attr187,$bool68,subarray,$101,$100,begin,$102,$bool65,$104,$bool67,$bool66,$109,$108,$attr184,$attr185,$attr182,$attr157,$attr180,$attr181,$cmp15,$cmp14,$cmp17,$cmp16,$118,$cmp13,$attr188,$attr168,$cmp19,$cmp18,$attr155,$attr154,$len12,$attr156,$attr179,$attr153,$attr178,$attr177,$attr176,$attr175,$attr174,$attr159,$attr158,$attr171,$attr170,$cmp24,$attr166;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$generator_state[2] = 0;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					if(($generator_state[1]==1)||($generator_state[1]<1&&((($bool68=((($cmp19=(($len13=self['_shape']) === null?0:
						(typeof $len13['__array'] != 'undefined' ? $len13['__array']['length']:
							(typeof $len13['__len__'] == 'function'?$len13['__len__']():
								(typeof $len13['length'] != 'undefined'?$len13['length']:
									$p['len']($len13))))))===($cmp20=1)?0:
						(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
							($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
							$p['cmp']($cmp19, $cmp20))) == 1)) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
							false :
							(typeof $bool68=='object'?
								(typeof $bool68['__nonzero__']=='function'?
									$bool68['__nonzero__']() :
									(typeof $bool68['__len__']=='function'?
										($bool68['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )))) {
						$generator_state[1]=1;
						if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
							for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
							index = 0;
							$generator_state[2]=1;
						}
						if ($generator_state[2] == 1) {
							$generator_state['splice'](3, $generator_state['length']-3);
							$generator_state[2]=2;
						}
						if ($generator_state[2] == 2) {
							for (;($generator_state[3] > 0)||((($bool69=((($cmp21=index)===($cmp22=(typeof ($109=self['_shape'])['__array'] != 'undefined'?
								((typeof $109['__array'][$110=0]) != 'undefined'?$109['__array'][$110]:
									$109['__getitem__']($110)):
									$109['__getitem__'](0)))?0:
								(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
									($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
									$p['cmp']($cmp21, $cmp22))) == -1)) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
									false :
									(typeof $bool69=='object'?
										(typeof $bool69['__nonzero__']=='function'?
											$bool69['__nonzero__']() :
											(typeof $bool69['__len__']=='function'?
												($bool69['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) ));$generator_state[3] = 0) {
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
									begin = (index)*((typeof ($111=self['_indices'])['__array'] != 'undefined'?
										((typeof $111['__array'][$112=0]) != 'undefined'?$111['__array'][$112]:
											$111['__getitem__']($112)):
											$111['__getitem__'](0)));
									end = (begin)+((typeof ($113=self['_indices'])['__array'] != 'undefined'?
										((typeof $113['__array'][$114=0]) != 'undefined'?$113['__array'][$114]:
											$113['__getitem__']($114)):
											$113['__getitem__'](0)));
									subarray = self['_data']['subarray'](begin, end);
									array = $m['Ndarray'](subarray, self['_dtype']);
									array['_shape'] = $p['__getslice'](self['_shape'], 1, null);
									array['_indices'] = $p['__getslice'](self['_indices'], 1, null);
									$yield_value = array;
									$yielding = true;
									$generator_state[3] = 1;
									return $yield_value;
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[3] = -1;
										throw $exc;
									}
									index += 1;
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
								}
							}
							$generator_state[2]=3;
						}
						if ($generator_state[2] == 3) {
							$generator_state[2]=4;
						}
						if ($generator_state[2] == 4) {
						}
					}
					else if ($generator_state[1]==0||$generator_state[1]==2) {
						$generator_state[1]=2;
						if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
							for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
							index = 0;
							$generator_state[2]=1;
						}
						if ($generator_state[2] == 1) {
							$generator_state['splice'](3, $generator_state['length']-3);
							$generator_state[2]=2;
						}
						if ($generator_state[2] == 2) {
							for (;($generator_state[3] > 0)||((($bool70=((($cmp23=index)===($cmp24=(typeof ($115=self['_shape'])['__array'] != 'undefined'?
								((typeof $115['__array'][$116=0]) != 'undefined'?$115['__array'][$116]:
									$115['__getitem__']($116)):
									$115['__getitem__'](0)))?0:
								(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
									($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
									$p['cmp']($cmp23, $cmp24))) == -1)) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
									false :
									(typeof $bool70=='object'?
										(typeof $bool70['__nonzero__']=='function'?
											$bool70['__nonzero__']() :
											(typeof $bool70['__len__']=='function'?
												($bool70['__len__']()>0 ?
													true :
													false) :
												true ) ) :
										 true ) ));$generator_state[3] = 0) {
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
									$yield_value = (typeof ($117=self['_data'])['__array'] != 'undefined'?
										((typeof $117['__array'][$118=index]) != 'undefined'?$117['__array'][$118]:
											$117['__getitem__']($118)):
											$117['__getitem__'](index));
									$yielding = true;
									$generator_state[3] = 1;
									return $yield_value;
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[3] = -1;
										throw $exc;
									}
									index += 1;
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
								}
							}
							$generator_state[2]=3;
						}
						if ($generator_state[2] == 3) {
							$generator_state[2]=4;
						}
						if ($generator_state[2] == 4) {
						}
					}
					$generator_state[1]=0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
				}

				return;
			};
			return $generator;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('_array_dim', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr191,$attr190,$attr193,$attr192,$len14,$attr194,vmin,$attr189,vlen,$bool71,vfmt,$cmp25,$cmp26,vmax,$120,$119,$len15;
			if ((($bool71=self['_dtype']['__contains__']('int')) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
					false :
					(typeof $bool71=='object'?
						(typeof $bool71['__nonzero__']=='function'?
							$bool71['__nonzero__']() :
							(typeof $bool71['__len__']=='function'?
								($bool71['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				vmax = (($len14=$p['str']($p['max'](self['_data']))) === null?0:
					(typeof $len14['__array'] != 'undefined' ? $len14['__array']['length']:
						(typeof $len14['__len__'] == 'function'?$len14['__len__']():
							(typeof $len14['length'] != 'undefined'?$len14['length']:
								$p['len']($len14)))));
				vmin = (($len15=$p['str']($p['min'](self['_data']))) === null?0:
					(typeof $len15['__array'] != 'undefined' ? $len15['__array']['length']:
						(typeof $len15['__len__'] == 'function'?$len15['__len__']():
							(typeof $len15['length'] != 'undefined'?$len15['length']:
								$p['len']($len15)))));
				vlen = (typeof ($119=$p['dict']([[true, vmax], [false, vmin]]))['__array'] != 'undefined'?
					((typeof $119['__array'][$120=((($cmp25=vmax)===($cmp26=vmin)?0:
					(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
						($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
						$p['cmp']($cmp25, $cmp26))) == 1)]) != 'undefined'?$119['__array'][$120]:
						$119['__getitem__']($120)):
						$119['__getitem__'](((($cmp25=vmax)===($cmp26=vmin)?0:
					(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
						($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
						$p['cmp']($cmp25, $cmp26))) == 1)));
				vfmt = '%*d';
			}
			else {
				vlen = $p['max'](function(){
					var $iter18_type,$iter18_iter,$len16,$iter18_array,$collcomp7,$iter18_idx,v,$iter18_nextval;
	$collcomp7 = $p['list']();
				$iter18_iter = self['_data'];
				if (typeof ($iter18_array = $iter18_iter['__array']) != 'undefined') {
					$iter18_type = 0;
				} else {
					$iter18_iter = $iter18_iter['__iter__']();
					$iter18_type = typeof ($iter18_array = $iter18_iter['__array']) != 'undefined'? 0 : (typeof $iter18_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter18_idx = 0;
				while (typeof ($iter18_nextval=($iter18_type?($iter18_type > 0?$iter18_iter.next(true,false):$p['wrapped_next']($iter18_iter)):$iter18_array[$iter18_idx++])) != 'undefined') {
					v = $iter18_nextval;
					$collcomp7['append']((($len16=$p['sprintf']('%0.4f', v)) === null?0:
						(typeof $len16['__array'] != 'undefined' ? $len16['__array']['length']:
							(typeof $len16['__len__'] == 'function'?$len16['__len__']():
								(typeof $len16['length'] != 'undefined'?$len16['length']:
									$p['len']($len16))))));
				}

	return $collcomp7;}());
				vfmt = '%*.4f';
			}
			return $p['tuple']([vlen, vfmt]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['_array_dim'] = $method;
		$method = $pyjs__bind_method2('_array_str', function(array, vlen, vfmt, vstr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				array = arguments[1];
				vlen = arguments[2];
				vfmt = arguments[3];
				vstr = arguments[4];
			}
			var $iter20_nextval,$attr195,$attr197,$attr196,$attr199,$attr198,$bool74,$bool75,$bool72,$bool73,$eq18,$cmp27,$cmp28,$eq11,$eq13,$eq14,$eq12,$eq16,$iter20_array,$len20,$eq15,$bool76,$attr204,$eq17,$attr201,$attr200,$attr203,$attr202,$iter20_iter,$122,$121,a,$iter20_type,$len17,i,$len19,$len18,s,$iter20_idx;
			if ((($bool72=(($eq11=(($len17=array['_shape']) === null?0:
				(typeof $len17['__array'] != 'undefined' ? $len17['__array']['length']:
					(typeof $len17['__len__'] == 'function'?$len17['__len__']():
						(typeof $len17['length'] != 'undefined'?$len17['length']:
							$p['len']($len17))))))===($eq12=1)&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11['__cmp__']=='function'?$eq11['__cmp__']($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12['__cmp__']=='function'?$eq12['__cmp__']($eq11) === 0:
							$eq11==$eq12)))))) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
					false :
					(typeof $bool72=='object'?
						(typeof $bool72['__nonzero__']=='function'?
							$bool72['__nonzero__']() :
							(typeof $bool72['__len__']=='function'?
								($bool72['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				s = function(){
					var $iter19_idx,val,$collcomp8,$iter19_array,$iter19_iter,$iter19_nextval,$iter19_type,$mod1,$mod2;
	$collcomp8 = $p['list']();
				$iter19_iter = array;
				if (typeof ($iter19_array = $iter19_iter['__array']) != 'undefined') {
					$iter19_type = 0;
				} else {
					$iter19_iter = $iter19_iter['__iter__']();
					$iter19_type = typeof ($iter19_array = $iter19_iter['__array']) != 'undefined'? 0 : (typeof $iter19_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter19_idx = 0;
				while (typeof ($iter19_nextval=($iter19_type?($iter19_type > 0?$iter19_iter.next(true,false):$p['wrapped_next']($iter19_iter)):$iter19_array[$iter19_idx++])) != 'undefined') {
					val = $iter19_nextval;
					$collcomp8['append']((($mod1=vfmt)!=null && ($mod2=$p['tuple']([vlen, val]))!=null && typeof $mod1=='string'?
						$p['sprintf']($mod1,$mod2):
						(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1)));
				}

	return $collcomp8;}();
				vstr['append']($p['sprintf']('[%s]', ' '['join'](s)));
			}
			else {
				$iter20_iter = $p['enumerate'](array);
				if (typeof ($iter20_array = $iter20_iter['__array']) != 'undefined') {
					$iter20_type = 0;
				} else {
					$iter20_iter = $iter20_iter['__iter__']();
					$iter20_type = typeof ($iter20_array = $iter20_iter['__array']) != 'undefined'? 0 : (typeof $iter20_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter20_idx = 0;
				while (typeof ($iter20_nextval=($iter20_type?($iter20_type > 0?$iter20_iter.next(true,false):$p['wrapped_next']($iter20_iter)):$iter20_array[$iter20_idx++])) != 'undefined') {
					var $tupleassign3 = $p['__ass_unpack']($iter20_nextval, 2, null);
					i = $tupleassign3[0];
					a = $tupleassign3[1];
					if ((($bool73=(($eq13=i)===($eq14=0)&&$eq13===null?true:
						($eq13===null?false:($eq14===null?false:
							((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13['__cmp__']=='function'?$eq13['__cmp__']($eq14) === 0:
								((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14['__cmp__']=='function'?$eq14['__cmp__']($eq13) === 0:
									$eq13==$eq14)))))) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
							false :
							(typeof $bool73=='object'?
								(typeof $bool73['__nonzero__']=='function'?
									$bool73['__nonzero__']() :
									(typeof $bool73['__len__']=='function'?
										($bool73['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						vstr['append']('[');
					}
					else {
						vstr['append']((' ')*(((($len18=self['_shape']) === null?0:
							(typeof $len18['__array'] != 'undefined' ? $len18['__array']['length']:
								(typeof $len18['__len__'] == 'function'?$len18['__len__']():
									(typeof $len18['length'] != 'undefined'?$len18['length']:
										$p['len']($len18))))))-((($len19=a['_shape']) === null?0:
							(typeof $len19['__array'] != 'undefined' ? $len19['__array']['length']:
								(typeof $len19['__len__'] == 'function'?$len19['__len__']():
									(typeof $len19['length'] != 'undefined'?$len19['length']:
										$p['len']($len19))))))));
					}
					self['_array_str'](a, vlen, vfmt, vstr);
					if ((($bool74=((($cmp27=i)===($cmp28=((($len20=array) === null?0:
						(typeof $len20['__array'] != 'undefined' ? $len20['__array']['length']:
							(typeof $len20['__len__'] == 'function'?$len20['__len__']():
								(typeof $len20['length'] != 'undefined'?$len20['length']:
									$p['len']($len20))))))-(1))?0:
						(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
							($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
							$p['cmp']($cmp27, $cmp28))) == -1)) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
							false :
							(typeof $bool74=='object'?
								(typeof $bool74['__nonzero__']=='function'?
									$bool74['__nonzero__']() :
									(typeof $bool74['__len__']=='function'?
										($bool74['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						vstr['append']('\n');
					}
					else {
						if ((($bool75=(($eq15=(typeof ($121=vstr)['__array'] != 'undefined'?
							((typeof $121['__array'][$122=-(1)]) != 'undefined'?$121['__array'][$122]:
								$121['__getitem__']($122)):
								$121['__getitem__'](-(1))))===($eq16=']\n')&&$eq15===null?true:
							($eq15===null?false:($eq16===null?false:
								((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15['__cmp__']=='function'?$eq15['__cmp__']($eq16) === 0:
									((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16['__cmp__']=='function'?$eq16['__cmp__']($eq15) === 0:
										$eq15==$eq16)))))) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
								false :
								(typeof $bool75=='object'?
									(typeof $bool75['__nonzero__']=='function'?
										$bool75['__nonzero__']() :
										(typeof $bool75['__len__']=='function'?
											($bool75['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							vstr['__setitem__'](-(1), ']');
						}
						if ((($bool76=!(($eq17=array['_shape'])===($eq18=self['_shape'])&&$eq17===null?true:
							($eq17===null?false:($eq18===null?false:
								((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17['__cmp__']=='function'?$eq17['__cmp__']($eq18) === 0:
									((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18['__cmp__']=='function'?$eq18['__cmp__']($eq17) === 0:
										$eq17==$eq18)))))) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
								false :
								(typeof $bool76=='object'?
									(typeof $bool76['__nonzero__']=='function'?
										$bool76['__nonzero__']() :
										(typeof $bool76['__len__']=='function'?
											($bool76['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							vstr['append'](']\n');
						}
						else {
							vstr['append'](']');
						}
					}
				}
			}
			return vstr;
		}
	, 1, [null,null,['self'],['array'],['vlen'],['vfmt'],['vstr']]);
		$cls_definition['_array_str'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var vstr,vfmt,vlen;
			var $tupleassign4 = $p['__ass_unpack'](self['_array_dim'](), 2, null);
			vlen = $tupleassign4[0];
			vfmt = $tupleassign4[1];
			vstr = self['_array_str'](self, vlen, vfmt, $p['list']([]));
			return ''['join'](vstr);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter21_idx,$len21,d,$iter21_nextval,$iter21_iter,$iter21_type,s,$attr208,$iter21_array,sl,$attr205,$attr207,$attr206;
			s = $p['str'](self['tolist']());
			sl = (($len21=self['_shape']) === null?0:
				(typeof $len21['__array'] != 'undefined' ? $len21['__array']['length']:
					(typeof $len21['__len__'] == 'function'?$len21['__len__']():
						(typeof $len21['length'] != 'undefined'?$len21['length']:
							$p['len']($len21)))));
			$iter21_iter = $p['range'](1, sl);
			if (typeof ($iter21_array = $iter21_iter['__array']) != 'undefined') {
				$iter21_type = 0;
			} else {
				$iter21_iter = $iter21_iter['__iter__']();
				$iter21_type = typeof ($iter21_array = $iter21_iter['__array']) != 'undefined'? 0 : (typeof $iter21_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter21_idx = 0;
			while (typeof ($iter21_nextval=($iter21_type?($iter21_type > 0?$iter21_iter.next(true,false):$p['wrapped_next']($iter21_iter)):$iter21_array[$iter21_idx++])) != 'undefined') {
				d = $iter21_nextval;
				s = s['$$replace']((' ')+(('[')*(d)), (('\n')+((' ')*(((sl)+(8))-(d))))+(('[')*(d)));
			}
			return $p['sprintf']('Ndarray(%s, dtype=%s)', $p['tuple']([s, $p['repr'](self['_dtype'])]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $123,$attr209,$attr210,$124;
			return (typeof ($123=self['_shape'])['__array'] != 'undefined'?
				((typeof $123['__array'][$124=0]) != 'undefined'?$123['__array'][$124]:
					$123['__getitem__']($124)):
					$123['__getitem__'](0));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__lt__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var ndarray_data,$iter23_type,$iter22_array,$bool78,$bool77,$iter23_idx,$iter22_type,$130,$cmp29,$cmp31,other_data,$len24,$len23,$len22,$iter23_iter,$127,$cmp32,$125,$iter22_iter,$attr220,$iter22_nextval,$129,$128,$iter23_array,data,$126,ndarray,$cmp30,$iter23_nextval,i,$iter22_idx,$attr218,$attr219,$attr212,$attr213,$attr211,$attr216,$attr217,$attr214,$attr215;
			ndarray = $m['Ndarray']((($len22=self['_data']) === null?0:
				(typeof $len22['__array'] != 'undefined' ? $len22['__array']['length']:
					(typeof $len22['__len__'] == 'function'?$len22['__len__']():
						(typeof $len22['length'] != 'undefined'?$len22['length']:
							$p['len']($len22))))), 'uint8');
			ndarray['_shape'] = self['_shape'];
			ndarray['_indices'] = self['_indices'];
			ndarray_data = ndarray['_data'];
			data = self['_data'];
			if ((($bool78=!(($bool77=$p['hasattr'](other, '__iter__')) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
				false :
				(typeof $bool77=='object'?
					(typeof $bool77['__nonzero__']=='function'?
						$bool77['__nonzero__']() :
						(typeof $bool77['__len__']=='function'?
							($bool77['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool78 === false || $bool78 === 0 || $bool78 === '' ?
					false :
					(typeof $bool78=='object'?
						(typeof $bool78['__nonzero__']=='function'?
							$bool78['__nonzero__']() :
							(typeof $bool78['__len__']=='function'?
								($bool78['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter22_iter = $p['range']((($len23=data) === null?0:
					(typeof $len23['__array'] != 'undefined' ? $len23['__array']['length']:
						(typeof $len23['__len__'] == 'function'?$len23['__len__']():
							(typeof $len23['length'] != 'undefined'?$len23['length']:
								$p['len']($len23))))));
				if (typeof ($iter22_array = $iter22_iter['__array']) != 'undefined') {
					$iter22_type = 0;
				} else {
					$iter22_iter = $iter22_iter['__iter__']();
					$iter22_type = typeof ($iter22_array = $iter22_iter['__array']) != 'undefined'? 0 : (typeof $iter22_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter22_idx = 0;
				while (typeof ($iter22_nextval=($iter22_type?($iter22_type > 0?$iter22_iter.next(true,false):$p['wrapped_next']($iter22_iter)):$iter22_array[$iter22_idx++])) != 'undefined') {
					i = $iter22_nextval;
					ndarray_data['__setitem__'](i, ((($cmp29=(typeof ($125=data)['__array'] != 'undefined'?
						((typeof $125['__array'][$126=i]) != 'undefined'?$125['__array'][$126]:
							$125['__getitem__']($126)):
							$125['__getitem__'](i)))===($cmp30=other)?0:
						(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
							($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
							$p['cmp']($cmp29, $cmp30))) == -1));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter23_iter = $p['range']((($len24=data) === null?0:
					(typeof $len24['__array'] != 'undefined' ? $len24['__array']['length']:
						(typeof $len24['__len__'] == 'function'?$len24['__len__']():
							(typeof $len24['length'] != 'undefined'?$len24['length']:
								$p['len']($len24))))));
				if (typeof ($iter23_array = $iter23_iter['__array']) != 'undefined') {
					$iter23_type = 0;
				} else {
					$iter23_iter = $iter23_iter['__iter__']();
					$iter23_type = typeof ($iter23_array = $iter23_iter['__array']) != 'undefined'? 0 : (typeof $iter23_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter23_idx = 0;
				while (typeof ($iter23_nextval=($iter23_type?($iter23_type > 0?$iter23_iter.next(true,false):$p['wrapped_next']($iter23_iter)):$iter23_array[$iter23_idx++])) != 'undefined') {
					i = $iter23_nextval;
					ndarray_data['__setitem__'](i, ((($cmp31=(typeof ($127=data)['__array'] != 'undefined'?
						((typeof $127['__array'][$128=i]) != 'undefined'?$127['__array'][$128]:
							$127['__getitem__']($128)):
							$127['__getitem__'](i)))===($cmp32=(typeof ($129=other_data)['__array'] != 'undefined'?
						((typeof $129['__array'][$130=i]) != 'undefined'?$129['__array'][$130]:
							$129['__getitem__']($130)):
							$129['__getitem__'](i)))?0:
						(typeof $cmp31==typeof $cmp32 && ((typeof $cmp31 == 'number')||(typeof $cmp31 == 'string')||(typeof $cmp31 == 'boolean'))?
							($cmp31 == $cmp32 ? 0 : ($cmp31 < $cmp32 ? -1 : 1)):
							$p['cmp']($cmp31, $cmp32))) == -1));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__lt__'] = $method;
		$method = $pyjs__bind_method2('__le__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var ndarray_data,$attr230,$bool79,$iter25_array,$131,$132,$133,$134,$135,$136,other_data,$len25,$bool80,$cmp33,$iter25_nextval,$iter24_type,$iter24_iter,$iter24_nextval,$attr227,$attr226,$attr225,$attr224,$attr223,$attr222,$attr221,$attr229,$attr228,$len26,$cmp36,$cmp35,$cmp34,data,ndarray,$iter24_idx,i,$iter25_iter,$iter24_array,$iter25_idx,$iter25_type;
			ndarray = $m['Ndarray'](self['_shape'], 'uint8');
			ndarray['_shape'] = self['_shape'];
			ndarray['_indices'] = self['_indices'];
			ndarray_data = ndarray['_data'];
			data = self['_data'];
			if ((($bool80=!(($bool79=$p['hasattr'](other, '__iter__')) === null || $bool79 === false || $bool79 === 0 || $bool79 === '' ?
				false :
				(typeof $bool79=='object'?
					(typeof $bool79['__nonzero__']=='function'?
						$bool79['__nonzero__']() :
						(typeof $bool79['__len__']=='function'?
							($bool79['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool80 === false || $bool80 === 0 || $bool80 === '' ?
					false :
					(typeof $bool80=='object'?
						(typeof $bool80['__nonzero__']=='function'?
							$bool80['__nonzero__']() :
							(typeof $bool80['__len__']=='function'?
								($bool80['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter24_iter = $p['range']((($len25=data) === null?0:
					(typeof $len25['__array'] != 'undefined' ? $len25['__array']['length']:
						(typeof $len25['__len__'] == 'function'?$len25['__len__']():
							(typeof $len25['length'] != 'undefined'?$len25['length']:
								$p['len']($len25))))));
				if (typeof ($iter24_array = $iter24_iter['__array']) != 'undefined') {
					$iter24_type = 0;
				} else {
					$iter24_iter = $iter24_iter['__iter__']();
					$iter24_type = typeof ($iter24_array = $iter24_iter['__array']) != 'undefined'? 0 : (typeof $iter24_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter24_idx = 0;
				while (typeof ($iter24_nextval=($iter24_type?($iter24_type > 0?$iter24_iter.next(true,false):$p['wrapped_next']($iter24_iter)):$iter24_array[$iter24_idx++])) != 'undefined') {
					i = $iter24_nextval;
					ndarray_data['__setitem__'](i, ((($cmp33=(typeof ($131=data)['__array'] != 'undefined'?
						((typeof $131['__array'][$132=i]) != 'undefined'?$131['__array'][$132]:
							$131['__getitem__']($132)):
							$131['__getitem__'](i)))===($cmp34=other)?0:
						(typeof $cmp33==typeof $cmp34 && ((typeof $cmp33 == 'number')||(typeof $cmp33 == 'string')||(typeof $cmp33 == 'boolean'))?
							($cmp33 == $cmp34 ? 0 : ($cmp33 < $cmp34 ? -1 : 1)):
							$p['cmp']($cmp33, $cmp34))) < 1));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter25_iter = $p['range']((($len26=data) === null?0:
					(typeof $len26['__array'] != 'undefined' ? $len26['__array']['length']:
						(typeof $len26['__len__'] == 'function'?$len26['__len__']():
							(typeof $len26['length'] != 'undefined'?$len26['length']:
								$p['len']($len26))))));
				if (typeof ($iter25_array = $iter25_iter['__array']) != 'undefined') {
					$iter25_type = 0;
				} else {
					$iter25_iter = $iter25_iter['__iter__']();
					$iter25_type = typeof ($iter25_array = $iter25_iter['__array']) != 'undefined'? 0 : (typeof $iter25_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter25_idx = 0;
				while (typeof ($iter25_nextval=($iter25_type?($iter25_type > 0?$iter25_iter.next(true,false):$p['wrapped_next']($iter25_iter)):$iter25_array[$iter25_idx++])) != 'undefined') {
					i = $iter25_nextval;
					ndarray_data['__setitem__'](i, ((($cmp35=(typeof ($133=data)['__array'] != 'undefined'?
						((typeof $133['__array'][$134=i]) != 'undefined'?$133['__array'][$134]:
							$133['__getitem__']($134)):
							$133['__getitem__'](i)))===($cmp36=(typeof ($135=other_data)['__array'] != 'undefined'?
						((typeof $135['__array'][$136=i]) != 'undefined'?$135['__array'][$136]:
							$135['__getitem__']($136)):
							$135['__getitem__'](i)))?0:
						(typeof $cmp35==typeof $cmp36 && ((typeof $cmp35 == 'number')||(typeof $cmp35 == 'string')||(typeof $cmp35 == 'boolean'))?
							($cmp35 == $cmp36 ? 0 : ($cmp35 < $cmp36 ? -1 : 1)):
							$p['cmp']($cmp35, $cmp36))) < 1));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__le__'] = $method;
		$method = $pyjs__bind_method2('__eq__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr234,$attr235,$attr236,$attr237,$attr231,$attr232,$attr233,$iter26_nextval,$attr238,$attr239,$138,$iter26_idx,$iter26_array,$139,$137,$bool82,$bool81,$iter27_array,$141,other_data,$len28,$iter26_type,$iter27_iter,ndarray_data,$iter26_iter,$iter27_type,$attr240,$iter27_nextval,$len27,$eq21,$eq20,$eq22,data,$140,ndarray,$142,$eq19,i,$iter27_idx;
			ndarray = $m['Ndarray'](self['_shape'], 'uint8');
			ndarray['_shape'] = self['_shape'];
			ndarray['_indices'] = self['_indices'];
			ndarray_data = ndarray['_data'];
			data = self['_data'];
			if ((($bool82=!(($bool81=$p['hasattr'](other, '__iter__')) === null || $bool81 === false || $bool81 === 0 || $bool81 === '' ?
				false :
				(typeof $bool81=='object'?
					(typeof $bool81['__nonzero__']=='function'?
						$bool81['__nonzero__']() :
						(typeof $bool81['__len__']=='function'?
							($bool81['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool82 === false || $bool82 === 0 || $bool82 === '' ?
					false :
					(typeof $bool82=='object'?
						(typeof $bool82['__nonzero__']=='function'?
							$bool82['__nonzero__']() :
							(typeof $bool82['__len__']=='function'?
								($bool82['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter26_iter = $p['range']((($len27=data) === null?0:
					(typeof $len27['__array'] != 'undefined' ? $len27['__array']['length']:
						(typeof $len27['__len__'] == 'function'?$len27['__len__']():
							(typeof $len27['length'] != 'undefined'?$len27['length']:
								$p['len']($len27))))));
				if (typeof ($iter26_array = $iter26_iter['__array']) != 'undefined') {
					$iter26_type = 0;
				} else {
					$iter26_iter = $iter26_iter['__iter__']();
					$iter26_type = typeof ($iter26_array = $iter26_iter['__array']) != 'undefined'? 0 : (typeof $iter26_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter26_idx = 0;
				while (typeof ($iter26_nextval=($iter26_type?($iter26_type > 0?$iter26_iter.next(true,false):$p['wrapped_next']($iter26_iter)):$iter26_array[$iter26_idx++])) != 'undefined') {
					i = $iter26_nextval;
					ndarray_data['__setitem__'](i, (($eq19=(typeof ($137=data)['__array'] != 'undefined'?
						((typeof $137['__array'][$138=i]) != 'undefined'?$137['__array'][$138]:
							$137['__getitem__']($138)):
							$137['__getitem__'](i)))===($eq20=other)&&$eq19===null?true:
						($eq19===null?false:($eq20===null?false:
							((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19['__cmp__']=='function'?$eq19['__cmp__']($eq20) === 0:
								((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20['__cmp__']=='function'?$eq20['__cmp__']($eq19) === 0:
									$eq19==$eq20))))));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter27_iter = $p['range']((($len28=data) === null?0:
					(typeof $len28['__array'] != 'undefined' ? $len28['__array']['length']:
						(typeof $len28['__len__'] == 'function'?$len28['__len__']():
							(typeof $len28['length'] != 'undefined'?$len28['length']:
								$p['len']($len28))))));
				if (typeof ($iter27_array = $iter27_iter['__array']) != 'undefined') {
					$iter27_type = 0;
				} else {
					$iter27_iter = $iter27_iter['__iter__']();
					$iter27_type = typeof ($iter27_array = $iter27_iter['__array']) != 'undefined'? 0 : (typeof $iter27_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter27_idx = 0;
				while (typeof ($iter27_nextval=($iter27_type?($iter27_type > 0?$iter27_iter.next(true,false):$p['wrapped_next']($iter27_iter)):$iter27_array[$iter27_idx++])) != 'undefined') {
					i = $iter27_nextval;
					ndarray_data['__setitem__'](i, (($eq21=(typeof ($139=data)['__array'] != 'undefined'?
						((typeof $139['__array'][$140=i]) != 'undefined'?$139['__array'][$140]:
							$139['__getitem__']($140)):
							$139['__getitem__'](i)))===($eq22=(typeof ($141=other_data)['__array'] != 'undefined'?
						((typeof $141['__array'][$142=i]) != 'undefined'?$141['__array'][$142]:
							$141['__getitem__']($142)):
							$141['__getitem__'](i)))&&$eq21===null?true:
						($eq21===null?false:($eq22===null?false:
							((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21['__cmp__']=='function'?$eq21['__cmp__']($eq22) === 0:
								((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22['__cmp__']=='function'?$eq22['__cmp__']($eq21) === 0:
									$eq21==$eq22))))));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__eq__'] = $method;
		$method = $pyjs__bind_method2('__ne__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var ndarray_data,$iter28_idx,$attr250,$144,other_data,$bool83,$146,$bool84,$iter29_type,$len29,$143,$iter29_array,$attr241,$attr243,$attr242,$attr245,$attr244,$attr247,$attr246,$attr249,$attr248,$eq23,$iter29_nextval,$eq25,$eq24,$eq26,$145,$iter28_iter,$147,$iter28_type,data,ndarray,$len30,$iter28_array,i,$iter28_nextval,$iter29_idx,$iter29_iter,$148;
			ndarray = $m['Ndarray'](self['_shape'], 'uint8');
			ndarray['_shape'] = self['_shape'];
			ndarray['_indices'] = self['_indices'];
			ndarray_data = ndarray['_data'];
			data = self['_data'];
			if ((($bool84=!(($bool83=$p['hasattr'](other, '__iter__')) === null || $bool83 === false || $bool83 === 0 || $bool83 === '' ?
				false :
				(typeof $bool83=='object'?
					(typeof $bool83['__nonzero__']=='function'?
						$bool83['__nonzero__']() :
						(typeof $bool83['__len__']=='function'?
							($bool83['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool84 === false || $bool84 === 0 || $bool84 === '' ?
					false :
					(typeof $bool84=='object'?
						(typeof $bool84['__nonzero__']=='function'?
							$bool84['__nonzero__']() :
							(typeof $bool84['__len__']=='function'?
								($bool84['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter28_iter = $p['range']((($len29=data) === null?0:
					(typeof $len29['__array'] != 'undefined' ? $len29['__array']['length']:
						(typeof $len29['__len__'] == 'function'?$len29['__len__']():
							(typeof $len29['length'] != 'undefined'?$len29['length']:
								$p['len']($len29))))));
				if (typeof ($iter28_array = $iter28_iter['__array']) != 'undefined') {
					$iter28_type = 0;
				} else {
					$iter28_iter = $iter28_iter['__iter__']();
					$iter28_type = typeof ($iter28_array = $iter28_iter['__array']) != 'undefined'? 0 : (typeof $iter28_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter28_idx = 0;
				while (typeof ($iter28_nextval=($iter28_type?($iter28_type > 0?$iter28_iter.next(true,false):$p['wrapped_next']($iter28_iter)):$iter28_array[$iter28_idx++])) != 'undefined') {
					i = $iter28_nextval;
					ndarray_data['__setitem__'](i, !(($eq23=(typeof ($143=data)['__array'] != 'undefined'?
						((typeof $143['__array'][$144=i]) != 'undefined'?$143['__array'][$144]:
							$143['__getitem__']($144)):
							$143['__getitem__'](i)))===($eq24=other)&&$eq23===null?true:
						($eq23===null?false:($eq24===null?false:
							((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23['__cmp__']=='function'?$eq23['__cmp__']($eq24) === 0:
								((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24['__cmp__']=='function'?$eq24['__cmp__']($eq23) === 0:
									$eq23==$eq24))))));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter29_iter = $p['range']((($len30=data) === null?0:
					(typeof $len30['__array'] != 'undefined' ? $len30['__array']['length']:
						(typeof $len30['__len__'] == 'function'?$len30['__len__']():
							(typeof $len30['length'] != 'undefined'?$len30['length']:
								$p['len']($len30))))));
				if (typeof ($iter29_array = $iter29_iter['__array']) != 'undefined') {
					$iter29_type = 0;
				} else {
					$iter29_iter = $iter29_iter['__iter__']();
					$iter29_type = typeof ($iter29_array = $iter29_iter['__array']) != 'undefined'? 0 : (typeof $iter29_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter29_idx = 0;
				while (typeof ($iter29_nextval=($iter29_type?($iter29_type > 0?$iter29_iter.next(true,false):$p['wrapped_next']($iter29_iter)):$iter29_array[$iter29_idx++])) != 'undefined') {
					i = $iter29_nextval;
					ndarray_data['__setitem__'](i, !(($eq25=(typeof ($145=data)['__array'] != 'undefined'?
						((typeof $145['__array'][$146=i]) != 'undefined'?$145['__array'][$146]:
							$145['__getitem__']($146)):
							$145['__getitem__'](i)))===($eq26=(typeof ($147=other_data)['__array'] != 'undefined'?
						((typeof $147['__array'][$148=i]) != 'undefined'?$147['__array'][$148]:
							$147['__getitem__']($148)):
							$147['__getitem__'](i)))&&$eq25===null?true:
						($eq25===null?false:($eq26===null?false:
							((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25['__cmp__']=='function'?$eq25['__cmp__']($eq26) === 0:
								((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26['__cmp__']=='function'?$eq26['__cmp__']($eq25) === 0:
									$eq25==$eq26))))));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__ne__'] = $method;
		$method = $pyjs__bind_method2('__gt__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var ndarray_data,$attr258,$attr259,$attr256,$attr257,$attr254,$attr255,$attr252,$attr253,$attr251,$152,$153,$150,$151,$iter30_array,$154,$cmp40,other_data,$iter30_nextval,$bool85,$iter31_idx,$iter30_type,$iter31_array,$iter31_nextval,$attr260,$iter30_idx,$iter31_type,$cmp39,$cmp38,$cmp37,data,ndarray,$bool86,$len32,$len31,$iter30_iter,i,$149,$iter31_iter;
			ndarray = $m['Ndarray'](self['_shape'], 'uint8');
			ndarray['_shape'] = self['_shape'];
			ndarray['_indices'] = self['_indices'];
			ndarray_data = ndarray['_data'];
			data = self['_data'];
			if ((($bool86=!(($bool85=$p['hasattr'](other, '__iter__')) === null || $bool85 === false || $bool85 === 0 || $bool85 === '' ?
				false :
				(typeof $bool85=='object'?
					(typeof $bool85['__nonzero__']=='function'?
						$bool85['__nonzero__']() :
						(typeof $bool85['__len__']=='function'?
							($bool85['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool86 === false || $bool86 === 0 || $bool86 === '' ?
					false :
					(typeof $bool86=='object'?
						(typeof $bool86['__nonzero__']=='function'?
							$bool86['__nonzero__']() :
							(typeof $bool86['__len__']=='function'?
								($bool86['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter30_iter = $p['range']((($len31=data) === null?0:
					(typeof $len31['__array'] != 'undefined' ? $len31['__array']['length']:
						(typeof $len31['__len__'] == 'function'?$len31['__len__']():
							(typeof $len31['length'] != 'undefined'?$len31['length']:
								$p['len']($len31))))));
				if (typeof ($iter30_array = $iter30_iter['__array']) != 'undefined') {
					$iter30_type = 0;
				} else {
					$iter30_iter = $iter30_iter['__iter__']();
					$iter30_type = typeof ($iter30_array = $iter30_iter['__array']) != 'undefined'? 0 : (typeof $iter30_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter30_idx = 0;
				while (typeof ($iter30_nextval=($iter30_type?($iter30_type > 0?$iter30_iter.next(true,false):$p['wrapped_next']($iter30_iter)):$iter30_array[$iter30_idx++])) != 'undefined') {
					i = $iter30_nextval;
					ndarray_data['__setitem__'](i, ((($cmp37=(typeof ($149=data)['__array'] != 'undefined'?
						((typeof $149['__array'][$150=i]) != 'undefined'?$149['__array'][$150]:
							$149['__getitem__']($150)):
							$149['__getitem__'](i)))===($cmp38=other)?0:
						(typeof $cmp37==typeof $cmp38 && ((typeof $cmp37 == 'number')||(typeof $cmp37 == 'string')||(typeof $cmp37 == 'boolean'))?
							($cmp37 == $cmp38 ? 0 : ($cmp37 < $cmp38 ? -1 : 1)):
							$p['cmp']($cmp37, $cmp38))) == 1));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter31_iter = $p['range']((($len32=data) === null?0:
					(typeof $len32['__array'] != 'undefined' ? $len32['__array']['length']:
						(typeof $len32['__len__'] == 'function'?$len32['__len__']():
							(typeof $len32['length'] != 'undefined'?$len32['length']:
								$p['len']($len32))))));
				if (typeof ($iter31_array = $iter31_iter['__array']) != 'undefined') {
					$iter31_type = 0;
				} else {
					$iter31_iter = $iter31_iter['__iter__']();
					$iter31_type = typeof ($iter31_array = $iter31_iter['__array']) != 'undefined'? 0 : (typeof $iter31_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter31_idx = 0;
				while (typeof ($iter31_nextval=($iter31_type?($iter31_type > 0?$iter31_iter.next(true,false):$p['wrapped_next']($iter31_iter)):$iter31_array[$iter31_idx++])) != 'undefined') {
					i = $iter31_nextval;
					ndarray_data['__setitem__'](i, ((($cmp39=(typeof ($151=data)['__array'] != 'undefined'?
						((typeof $151['__array'][$152=i]) != 'undefined'?$151['__array'][$152]:
							$151['__getitem__']($152)):
							$151['__getitem__'](i)))===($cmp40=(typeof ($153=other_data)['__array'] != 'undefined'?
						((typeof $153['__array'][$154=i]) != 'undefined'?$153['__array'][$154]:
							$153['__getitem__']($154)):
							$153['__getitem__'](i)))?0:
						(typeof $cmp39==typeof $cmp40 && ((typeof $cmp39 == 'number')||(typeof $cmp39 == 'string')||(typeof $cmp39 == 'boolean'))?
							($cmp39 == $cmp40 ? 0 : ($cmp39 < $cmp40 ? -1 : 1)):
							$p['cmp']($cmp39, $cmp40))) == 1));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__gt__'] = $method;
		$method = $pyjs__bind_method2('__ge__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var ndarray_data,$iter33_iter,$iter32_idx,$attr270,$iter32_nextval,$iter33_nextval,$iter32_iter,$156,$157,$155,$cmp42,$cmp43,$158,$cmp41,$cmp44,other_data,$iter33_type,$bool87,$bool88,$iter32_type,$iter32_array,$159,$attr269,$attr268,$attr263,$attr262,$attr261,$attr267,$attr266,$attr265,$attr264,$160,data,$iter33_idx,ndarray,$iter33_array,$len34,$len33,i;
			ndarray = $m['Ndarray'](self['_shape'], 'uint8');
			ndarray['_shape'] = self['_shape'];
			ndarray['_indices'] = self['_indices'];
			ndarray_data = ndarray['_data'];
			data = self['_data'];
			if ((($bool88=!(($bool87=$p['hasattr'](other, '__iter__')) === null || $bool87 === false || $bool87 === 0 || $bool87 === '' ?
				false :
				(typeof $bool87=='object'?
					(typeof $bool87['__nonzero__']=='function'?
						$bool87['__nonzero__']() :
						(typeof $bool87['__len__']=='function'?
							($bool87['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool88 === false || $bool88 === 0 || $bool88 === '' ?
					false :
					(typeof $bool88=='object'?
						(typeof $bool88['__nonzero__']=='function'?
							$bool88['__nonzero__']() :
							(typeof $bool88['__len__']=='function'?
								($bool88['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter32_iter = $p['range']((($len33=data) === null?0:
					(typeof $len33['__array'] != 'undefined' ? $len33['__array']['length']:
						(typeof $len33['__len__'] == 'function'?$len33['__len__']():
							(typeof $len33['length'] != 'undefined'?$len33['length']:
								$p['len']($len33))))));
				if (typeof ($iter32_array = $iter32_iter['__array']) != 'undefined') {
					$iter32_type = 0;
				} else {
					$iter32_iter = $iter32_iter['__iter__']();
					$iter32_type = typeof ($iter32_array = $iter32_iter['__array']) != 'undefined'? 0 : (typeof $iter32_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter32_idx = 0;
				while (typeof ($iter32_nextval=($iter32_type?($iter32_type > 0?$iter32_iter.next(true,false):$p['wrapped_next']($iter32_iter)):$iter32_array[$iter32_idx++])) != 'undefined') {
					i = $iter32_nextval;
					ndarray_data['__setitem__'](i, ((((($cmp41=(typeof ($155=data)['__array'] != 'undefined'?
						((typeof $155['__array'][$156=i]) != 'undefined'?$155['__array'][$156]:
							$155['__getitem__']($156)):
							$155['__getitem__'](i)))===($cmp42=other)?0:
						(typeof $cmp41==typeof $cmp42 && ((typeof $cmp41 == 'number')||(typeof $cmp41 == 'string')||(typeof $cmp41 == 'boolean'))?
							($cmp41 == $cmp42 ? 0 : ($cmp41 < $cmp42 ? -1 : 1)):
							$p['cmp']($cmp41, $cmp42))))|1) == 1));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter33_iter = $p['range']((($len34=data) === null?0:
					(typeof $len34['__array'] != 'undefined' ? $len34['__array']['length']:
						(typeof $len34['__len__'] == 'function'?$len34['__len__']():
							(typeof $len34['length'] != 'undefined'?$len34['length']:
								$p['len']($len34))))));
				if (typeof ($iter33_array = $iter33_iter['__array']) != 'undefined') {
					$iter33_type = 0;
				} else {
					$iter33_iter = $iter33_iter['__iter__']();
					$iter33_type = typeof ($iter33_array = $iter33_iter['__array']) != 'undefined'? 0 : (typeof $iter33_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter33_idx = 0;
				while (typeof ($iter33_nextval=($iter33_type?($iter33_type > 0?$iter33_iter.next(true,false):$p['wrapped_next']($iter33_iter)):$iter33_array[$iter33_idx++])) != 'undefined') {
					i = $iter33_nextval;
					ndarray_data['__setitem__'](i, ((((($cmp43=(typeof ($157=data)['__array'] != 'undefined'?
						((typeof $157['__array'][$158=i]) != 'undefined'?$157['__array'][$158]:
							$157['__getitem__']($158)):
							$157['__getitem__'](i)))===($cmp44=(typeof ($159=other_data)['__array'] != 'undefined'?
						((typeof $159['__array'][$160=i]) != 'undefined'?$159['__array'][$160]:
							$159['__getitem__']($160)):
							$159['__getitem__'](i)))?0:
						(typeof $cmp43==typeof $cmp44 && ((typeof $cmp43 == 'number')||(typeof $cmp43 == 'string')||(typeof $cmp43 == 'boolean'))?
							($cmp43 == $cmp44 ? 0 : ($cmp43 < $cmp44 ? -1 : 1)):
							$p['cmp']($cmp43, $cmp44))))|1) == 1));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__ge__'] = $method;
		$method = $pyjs__bind_method2('__add__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var ndarray_data,$attr271,$attr272,$attr273,$attr274,$iter35_array,other_data,$iter35_type,$len36,$iter35_nextval,$iter35_idx,$165,$164,$163,$162,$161,$iter34_idx,data,ndarray,$bool90,$iter34_nextval,$len35,$166,i,$iter34_array,$iter34_iter,$iter35_iter,$bool89,$iter34_type;
			ndarray = self['empty']();
			ndarray_data = ndarray['_data'];
			data = self['_data'];
			if ((($bool90=!(($bool89=$p['hasattr'](other, '__iter__')) === null || $bool89 === false || $bool89 === 0 || $bool89 === '' ?
				false :
				(typeof $bool89=='object'?
					(typeof $bool89['__nonzero__']=='function'?
						$bool89['__nonzero__']() :
						(typeof $bool89['__len__']=='function'?
							($bool89['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool90 === false || $bool90 === 0 || $bool90 === '' ?
					false :
					(typeof $bool90=='object'?
						(typeof $bool90['__nonzero__']=='function'?
							$bool90['__nonzero__']() :
							(typeof $bool90['__len__']=='function'?
								($bool90['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter34_iter = $p['range']((($len35=data) === null?0:
					(typeof $len35['__array'] != 'undefined' ? $len35['__array']['length']:
						(typeof $len35['__len__'] == 'function'?$len35['__len__']():
							(typeof $len35['length'] != 'undefined'?$len35['length']:
								$p['len']($len35))))));
				if (typeof ($iter34_array = $iter34_iter['__array']) != 'undefined') {
					$iter34_type = 0;
				} else {
					$iter34_iter = $iter34_iter['__iter__']();
					$iter34_type = typeof ($iter34_array = $iter34_iter['__array']) != 'undefined'? 0 : (typeof $iter34_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter34_idx = 0;
				while (typeof ($iter34_nextval=($iter34_type?($iter34_type > 0?$iter34_iter.next(true,false):$p['wrapped_next']($iter34_iter)):$iter34_array[$iter34_idx++])) != 'undefined') {
					i = $iter34_nextval;
					ndarray_data['__setitem__'](i, ((typeof ($161=data)['__array'] != 'undefined'?
						((typeof $161['__array'][$162=i]) != 'undefined'?$161['__array'][$162]:
							$161['__getitem__']($162)):
							$161['__getitem__'](i)))+(other));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter35_iter = $p['range']((($len36=data) === null?0:
					(typeof $len36['__array'] != 'undefined' ? $len36['__array']['length']:
						(typeof $len36['__len__'] == 'function'?$len36['__len__']():
							(typeof $len36['length'] != 'undefined'?$len36['length']:
								$p['len']($len36))))));
				if (typeof ($iter35_array = $iter35_iter['__array']) != 'undefined') {
					$iter35_type = 0;
				} else {
					$iter35_iter = $iter35_iter['__iter__']();
					$iter35_type = typeof ($iter35_array = $iter35_iter['__array']) != 'undefined'? 0 : (typeof $iter35_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter35_idx = 0;
				while (typeof ($iter35_nextval=($iter35_type?($iter35_type > 0?$iter35_iter.next(true,false):$p['wrapped_next']($iter35_iter)):$iter35_array[$iter35_idx++])) != 'undefined') {
					i = $iter35_nextval;
					ndarray_data['__setitem__'](i, ((typeof ($163=data)['__array'] != 'undefined'?
						((typeof $163['__array'][$164=i]) != 'undefined'?$163['__array'][$164]:
							$163['__getitem__']($164)):
							$163['__getitem__'](i)))+((typeof ($165=other_data)['__array'] != 'undefined'?
						((typeof $165['__array'][$166=i]) != 'undefined'?$165['__array'][$166]:
							$165['__getitem__']($166)):
							$165['__getitem__'](i))));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__add__'] = $method;
		$method = $pyjs__bind_method2('__sub__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var ndarray_data,$attr278,$iter37_array,$attr275,$attr276,$attr277,$170,$171,$172,$iter36_type,other_data,$iter37_idx,$iter36_iter,$169,$iter36_idx,$len37,$iter36_nextval,$iter36_array,$167,data,ndarray,$168,$bool91,$bool92,i,$len38,$iter37_type,$iter37_iter,$iter37_nextval;
			ndarray = self['empty']();
			ndarray_data = ndarray['_data'];
			data = self['_data'];
			if ((($bool92=!(($bool91=$p['hasattr'](other, '__iter__')) === null || $bool91 === false || $bool91 === 0 || $bool91 === '' ?
				false :
				(typeof $bool91=='object'?
					(typeof $bool91['__nonzero__']=='function'?
						$bool91['__nonzero__']() :
						(typeof $bool91['__len__']=='function'?
							($bool91['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool92 === false || $bool92 === 0 || $bool92 === '' ?
					false :
					(typeof $bool92=='object'?
						(typeof $bool92['__nonzero__']=='function'?
							$bool92['__nonzero__']() :
							(typeof $bool92['__len__']=='function'?
								($bool92['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter36_iter = $p['range']((($len37=data) === null?0:
					(typeof $len37['__array'] != 'undefined' ? $len37['__array']['length']:
						(typeof $len37['__len__'] == 'function'?$len37['__len__']():
							(typeof $len37['length'] != 'undefined'?$len37['length']:
								$p['len']($len37))))));
				if (typeof ($iter36_array = $iter36_iter['__array']) != 'undefined') {
					$iter36_type = 0;
				} else {
					$iter36_iter = $iter36_iter['__iter__']();
					$iter36_type = typeof ($iter36_array = $iter36_iter['__array']) != 'undefined'? 0 : (typeof $iter36_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter36_idx = 0;
				while (typeof ($iter36_nextval=($iter36_type?($iter36_type > 0?$iter36_iter.next(true,false):$p['wrapped_next']($iter36_iter)):$iter36_array[$iter36_idx++])) != 'undefined') {
					i = $iter36_nextval;
					ndarray_data['__setitem__'](i, ((typeof ($167=data)['__array'] != 'undefined'?
						((typeof $167['__array'][$168=i]) != 'undefined'?$167['__array'][$168]:
							$167['__getitem__']($168)):
							$167['__getitem__'](i)))-(other));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter37_iter = $p['range']((($len38=data) === null?0:
					(typeof $len38['__array'] != 'undefined' ? $len38['__array']['length']:
						(typeof $len38['__len__'] == 'function'?$len38['__len__']():
							(typeof $len38['length'] != 'undefined'?$len38['length']:
								$p['len']($len38))))));
				if (typeof ($iter37_array = $iter37_iter['__array']) != 'undefined') {
					$iter37_type = 0;
				} else {
					$iter37_iter = $iter37_iter['__iter__']();
					$iter37_type = typeof ($iter37_array = $iter37_iter['__array']) != 'undefined'? 0 : (typeof $iter37_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter37_idx = 0;
				while (typeof ($iter37_nextval=($iter37_type?($iter37_type > 0?$iter37_iter.next(true,false):$p['wrapped_next']($iter37_iter)):$iter37_array[$iter37_idx++])) != 'undefined') {
					i = $iter37_nextval;
					ndarray_data['__setitem__'](i, ((typeof ($169=data)['__array'] != 'undefined'?
						((typeof $169['__array'][$170=i]) != 'undefined'?$169['__array'][$170]:
							$169['__getitem__']($170)):
							$169['__getitem__'](i)))-((typeof ($171=other_data)['__array'] != 'undefined'?
						((typeof $171['__array'][$172=i]) != 'undefined'?$171['__array'][$172]:
							$171['__getitem__']($172)):
							$171['__getitem__'](i))));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__sub__'] = $method;
		$method = $pyjs__bind_method2('__mul__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var ndarray_data,$attr279,$iter38_idx,$iter38_nextval,$174,$175,$176,$len40,$173,$iter38_type,$178,other_data,$attr281,$attr280,$attr282,data,$iter39_type,$iter38_iter,$iter39_nextval,$iter39_array,$iter38_array,ndarray,$iter39_idx,$bool93,$bool94,i,$len39,$177,$iter39_iter;
			ndarray = self['empty']();
			ndarray_data = ndarray['_data'];
			data = self['_data'];
			if ((($bool94=!(($bool93=$p['hasattr'](other, '__iter__')) === null || $bool93 === false || $bool93 === 0 || $bool93 === '' ?
				false :
				(typeof $bool93=='object'?
					(typeof $bool93['__nonzero__']=='function'?
						$bool93['__nonzero__']() :
						(typeof $bool93['__len__']=='function'?
							($bool93['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool94 === false || $bool94 === 0 || $bool94 === '' ?
					false :
					(typeof $bool94=='object'?
						(typeof $bool94['__nonzero__']=='function'?
							$bool94['__nonzero__']() :
							(typeof $bool94['__len__']=='function'?
								($bool94['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter38_iter = $p['range']((($len39=data) === null?0:
					(typeof $len39['__array'] != 'undefined' ? $len39['__array']['length']:
						(typeof $len39['__len__'] == 'function'?$len39['__len__']():
							(typeof $len39['length'] != 'undefined'?$len39['length']:
								$p['len']($len39))))));
				if (typeof ($iter38_array = $iter38_iter['__array']) != 'undefined') {
					$iter38_type = 0;
				} else {
					$iter38_iter = $iter38_iter['__iter__']();
					$iter38_type = typeof ($iter38_array = $iter38_iter['__array']) != 'undefined'? 0 : (typeof $iter38_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter38_idx = 0;
				while (typeof ($iter38_nextval=($iter38_type?($iter38_type > 0?$iter38_iter.next(true,false):$p['wrapped_next']($iter38_iter)):$iter38_array[$iter38_idx++])) != 'undefined') {
					i = $iter38_nextval;
					ndarray_data['__setitem__'](i, ((typeof ($173=data)['__array'] != 'undefined'?
						((typeof $173['__array'][$174=i]) != 'undefined'?$173['__array'][$174]:
							$173['__getitem__']($174)):
							$173['__getitem__'](i)))*(other));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter39_iter = $p['range']((($len40=data) === null?0:
					(typeof $len40['__array'] != 'undefined' ? $len40['__array']['length']:
						(typeof $len40['__len__'] == 'function'?$len40['__len__']():
							(typeof $len40['length'] != 'undefined'?$len40['length']:
								$p['len']($len40))))));
				if (typeof ($iter39_array = $iter39_iter['__array']) != 'undefined') {
					$iter39_type = 0;
				} else {
					$iter39_iter = $iter39_iter['__iter__']();
					$iter39_type = typeof ($iter39_array = $iter39_iter['__array']) != 'undefined'? 0 : (typeof $iter39_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter39_idx = 0;
				while (typeof ($iter39_nextval=($iter39_type?($iter39_type > 0?$iter39_iter.next(true,false):$p['wrapped_next']($iter39_iter)):$iter39_array[$iter39_idx++])) != 'undefined') {
					i = $iter39_nextval;
					ndarray_data['__setitem__'](i, ((typeof ($175=data)['__array'] != 'undefined'?
						((typeof $175['__array'][$176=i]) != 'undefined'?$175['__array'][$176]:
							$175['__getitem__']($176)):
							$175['__getitem__'](i)))*((typeof ($177=other_data)['__array'] != 'undefined'?
						((typeof $177['__array'][$178=i]) != 'undefined'?$177['__array'][$178]:
							$177['__getitem__']($178)):
							$177['__getitem__'](i))));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__mul__'] = $method;
		$method = $pyjs__bind_method2('__div__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			return self['__truediv__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__div__'] = $method;
		$method = $pyjs__bind_method2('__truediv__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var ndarray_data,$iter41_idx,$len42,$len41,$iter41_nextval,$iter41_iter,$179,other_data,$attr285,$attr284,$attr286,$iter40_type,$attr283,$iter40_array,$181,$180,$183,$182,$iter40_nextval,$184,$iter41_array,data,$iter40_idx,ndarray,$bool95,$bool96,i,$iter41_type,$iter40_iter;
			ndarray = self['empty']();
			ndarray_data = ndarray['_data'];
			data = self['_data'];
			if ((($bool96=!(($bool95=$p['hasattr'](other, '__iter__')) === null || $bool95 === false || $bool95 === 0 || $bool95 === '' ?
				false :
				(typeof $bool95=='object'?
					(typeof $bool95['__nonzero__']=='function'?
						$bool95['__nonzero__']() :
						(typeof $bool95['__len__']=='function'?
							($bool95['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool96 === false || $bool96 === 0 || $bool96 === '' ?
					false :
					(typeof $bool96=='object'?
						(typeof $bool96['__nonzero__']=='function'?
							$bool96['__nonzero__']() :
							(typeof $bool96['__len__']=='function'?
								($bool96['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter40_iter = $p['range']((($len41=data) === null?0:
					(typeof $len41['__array'] != 'undefined' ? $len41['__array']['length']:
						(typeof $len41['__len__'] == 'function'?$len41['__len__']():
							(typeof $len41['length'] != 'undefined'?$len41['length']:
								$p['len']($len41))))));
				if (typeof ($iter40_array = $iter40_iter['__array']) != 'undefined') {
					$iter40_type = 0;
				} else {
					$iter40_iter = $iter40_iter['__iter__']();
					$iter40_type = typeof ($iter40_array = $iter40_iter['__array']) != 'undefined'? 0 : (typeof $iter40_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter40_idx = 0;
				while (typeof ($iter40_nextval=($iter40_type?($iter40_type > 0?$iter40_iter.next(true,false):$p['wrapped_next']($iter40_iter)):$iter40_array[$iter40_idx++])) != 'undefined') {
					i = $iter40_nextval;
					ndarray_data['__setitem__'](i, ((typeof ($179=data)['__array'] != 'undefined'?
						((typeof $179['__array'][$180=i]) != 'undefined'?$179['__array'][$180]:
							$179['__getitem__']($180)):
							$179['__getitem__'](i)))/(other));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter41_iter = $p['range']((($len42=data) === null?0:
					(typeof $len42['__array'] != 'undefined' ? $len42['__array']['length']:
						(typeof $len42['__len__'] == 'function'?$len42['__len__']():
							(typeof $len42['length'] != 'undefined'?$len42['length']:
								$p['len']($len42))))));
				if (typeof ($iter41_array = $iter41_iter['__array']) != 'undefined') {
					$iter41_type = 0;
				} else {
					$iter41_iter = $iter41_iter['__iter__']();
					$iter41_type = typeof ($iter41_array = $iter41_iter['__array']) != 'undefined'? 0 : (typeof $iter41_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter41_idx = 0;
				while (typeof ($iter41_nextval=($iter41_type?($iter41_type > 0?$iter41_iter.next(true,false):$p['wrapped_next']($iter41_iter)):$iter41_array[$iter41_idx++])) != 'undefined') {
					i = $iter41_nextval;
					ndarray_data['__setitem__'](i, ((typeof ($181=data)['__array'] != 'undefined'?
						((typeof $181['__array'][$182=i]) != 'undefined'?$181['__array'][$182]:
							$181['__getitem__']($182)):
							$181['__getitem__'](i)))/((typeof ($183=other_data)['__array'] != 'undefined'?
						((typeof $183['__array'][$184=i]) != 'undefined'?$183['__array'][$184]:
							$183['__getitem__']($184)):
							$183['__getitem__'](i))));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__truediv__'] = $method;
		$method = $pyjs__bind_method2('__floordiv__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var ndarray_data,$iter43_type,$iter43_iter,$iter42_type,$iter42_array,$len43,$iter43_idx,$len44,other_data,$attr287,$iter42_idx,$iter43_array,$iter42_iter,$attr289,$attr288,$189,$188,$185,$187,$186,data,ndarray,$attr290,$bool97,$bool98,i,$iter42_nextval,$iter43_nextval,$190;
			ndarray = self['empty']();
			ndarray_data = ndarray['_data'];
			data = self['_data'];
			if ((($bool98=!(($bool97=$p['hasattr'](other, '__iter__')) === null || $bool97 === false || $bool97 === 0 || $bool97 === '' ?
				false :
				(typeof $bool97=='object'?
					(typeof $bool97['__nonzero__']=='function'?
						$bool97['__nonzero__']() :
						(typeof $bool97['__len__']=='function'?
							($bool97['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool98 === false || $bool98 === 0 || $bool98 === '' ?
					false :
					(typeof $bool98=='object'?
						(typeof $bool98['__nonzero__']=='function'?
							$bool98['__nonzero__']() :
							(typeof $bool98['__len__']=='function'?
								($bool98['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter42_iter = $p['range']((($len43=data) === null?0:
					(typeof $len43['__array'] != 'undefined' ? $len43['__array']['length']:
						(typeof $len43['__len__'] == 'function'?$len43['__len__']():
							(typeof $len43['length'] != 'undefined'?$len43['length']:
								$p['len']($len43))))));
				if (typeof ($iter42_array = $iter42_iter['__array']) != 'undefined') {
					$iter42_type = 0;
				} else {
					$iter42_iter = $iter42_iter['__iter__']();
					$iter42_type = typeof ($iter42_array = $iter42_iter['__array']) != 'undefined'? 0 : (typeof $iter42_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter42_idx = 0;
				while (typeof ($iter42_nextval=($iter42_type?($iter42_type > 0?$iter42_iter.next(true,false):$p['wrapped_next']($iter42_iter)):$iter42_array[$iter42_idx++])) != 'undefined') {
					i = $iter42_nextval;
					ndarray_data['__setitem__'](i, Math['floor']((typeof ($185=data)['__array'] != 'undefined'?
						((typeof $185['__array'][$186=i]) != 'undefined'?$185['__array'][$186]:
							$185['__getitem__']($186)):
							$185['__getitem__'](i))/other));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter43_iter = $p['range']((($len44=data) === null?0:
					(typeof $len44['__array'] != 'undefined' ? $len44['__array']['length']:
						(typeof $len44['__len__'] == 'function'?$len44['__len__']():
							(typeof $len44['length'] != 'undefined'?$len44['length']:
								$p['len']($len44))))));
				if (typeof ($iter43_array = $iter43_iter['__array']) != 'undefined') {
					$iter43_type = 0;
				} else {
					$iter43_iter = $iter43_iter['__iter__']();
					$iter43_type = typeof ($iter43_array = $iter43_iter['__array']) != 'undefined'? 0 : (typeof $iter43_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter43_idx = 0;
				while (typeof ($iter43_nextval=($iter43_type?($iter43_type > 0?$iter43_iter.next(true,false):$p['wrapped_next']($iter43_iter)):$iter43_array[$iter43_idx++])) != 'undefined') {
					i = $iter43_nextval;
					ndarray_data['__setitem__'](i, Math['floor']((typeof ($187=data)['__array'] != 'undefined'?
						((typeof $187['__array'][$188=i]) != 'undefined'?$187['__array'][$188]:
							$187['__getitem__']($188)):
							$187['__getitem__'](i))/(typeof ($189=other_data)['__array'] != 'undefined'?
						((typeof $189['__array'][$190=i]) != 'undefined'?$189['__array'][$190]:
							$189['__getitem__']($190)):
							$189['__getitem__'](i))));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__floordiv__'] = $method;
		$method = $pyjs__bind_method2('__divmod__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			return $p['tuple']([self['__floordiv__'](other), self['__mod__'](other)]);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__divmod__'] = $method;
		$method = $pyjs__bind_method2('__mod__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var ndarray_data,$iter44_type,$len45,$iter44_array,$iter45_type,$mod5,$mod4,$mod6,$len46,$mod3,$iter45_idx,other_data,$iter44_iter,$iter44_idx,$iter45_nextval,$bool100,$iter45_array,data,ndarray,$attr292,$attr293,$attr291,$iter45_iter,$196,$attr294,i,$bool99,$iter44_nextval,$194,$195,$192,$193,$191;
			ndarray = self['empty']();
			ndarray_data = ndarray['_data'];
			data = self['_data'];
			if ((($bool100=!(($bool99=$p['hasattr'](other, '__iter__')) === null || $bool99 === false || $bool99 === 0 || $bool99 === '' ?
				false :
				(typeof $bool99=='object'?
					(typeof $bool99['__nonzero__']=='function'?
						$bool99['__nonzero__']() :
						(typeof $bool99['__len__']=='function'?
							($bool99['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool100 === false || $bool100 === 0 || $bool100 === '' ?
					false :
					(typeof $bool100=='object'?
						(typeof $bool100['__nonzero__']=='function'?
							$bool100['__nonzero__']() :
							(typeof $bool100['__len__']=='function'?
								($bool100['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter44_iter = $p['range']((($len45=data) === null?0:
					(typeof $len45['__array'] != 'undefined' ? $len45['__array']['length']:
						(typeof $len45['__len__'] == 'function'?$len45['__len__']():
							(typeof $len45['length'] != 'undefined'?$len45['length']:
								$p['len']($len45))))));
				if (typeof ($iter44_array = $iter44_iter['__array']) != 'undefined') {
					$iter44_type = 0;
				} else {
					$iter44_iter = $iter44_iter['__iter__']();
					$iter44_type = typeof ($iter44_array = $iter44_iter['__array']) != 'undefined'? 0 : (typeof $iter44_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter44_idx = 0;
				while (typeof ($iter44_nextval=($iter44_type?($iter44_type > 0?$iter44_iter.next(true,false):$p['wrapped_next']($iter44_iter)):$iter44_array[$iter44_idx++])) != 'undefined') {
					i = $iter44_nextval;
					ndarray_data['__setitem__'](i, (($mod3=(typeof ($191=data)['__array'] != 'undefined'?
						((typeof $191['__array'][$192=i]) != 'undefined'?$191['__array'][$192]:
							$191['__getitem__']($192)):
							$191['__getitem__'](i)))!=null && ($mod4=other)!=null && typeof $mod3=='string'?
						$p['sprintf']($mod3,$mod4):
						(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3)));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter45_iter = $p['range']((($len46=data) === null?0:
					(typeof $len46['__array'] != 'undefined' ? $len46['__array']['length']:
						(typeof $len46['__len__'] == 'function'?$len46['__len__']():
							(typeof $len46['length'] != 'undefined'?$len46['length']:
								$p['len']($len46))))));
				if (typeof ($iter45_array = $iter45_iter['__array']) != 'undefined') {
					$iter45_type = 0;
				} else {
					$iter45_iter = $iter45_iter['__iter__']();
					$iter45_type = typeof ($iter45_array = $iter45_iter['__array']) != 'undefined'? 0 : (typeof $iter45_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter45_idx = 0;
				while (typeof ($iter45_nextval=($iter45_type?($iter45_type > 0?$iter45_iter.next(true,false):$p['wrapped_next']($iter45_iter)):$iter45_array[$iter45_idx++])) != 'undefined') {
					i = $iter45_nextval;
					ndarray_data['__setitem__'](i, (($mod5=(typeof ($193=data)['__array'] != 'undefined'?
						((typeof $193['__array'][$194=i]) != 'undefined'?$193['__array'][$194]:
							$193['__getitem__']($194)):
							$193['__getitem__'](i)))!=null && ($mod6=(typeof ($195=other_data)['__array'] != 'undefined'?
						((typeof $195['__array'][$196=i]) != 'undefined'?$195['__array'][$196]:
							$195['__getitem__']($196)):
							$195['__getitem__'](i)))!=null && typeof $mod5=='string'?
						$p['sprintf']($mod5,$mod6):
						(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5)));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__mod__'] = $method;
		$method = $pyjs__bind_method2('__pow__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var ndarray_data,$len47,$iter46_idx,$len48,$iter47_iter,other_data,$iter47_type,$iter47_array,$iter46_type,$201,$202,$200,$199,$bool101,$bool102,data,ndarray,$iter46_array,$attr296,$attr297,$iter47_idx,$attr295,i,$attr298,$iter46_iter,$iter46_nextval,$198,$iter47_nextval,$197;
			ndarray = self['empty']();
			ndarray_data = ndarray['_data'];
			data = self['_data'];
			if ((($bool102=!(($bool101=$p['hasattr'](other, '__iter__')) === null || $bool101 === false || $bool101 === 0 || $bool101 === '' ?
				false :
				(typeof $bool101=='object'?
					(typeof $bool101['__nonzero__']=='function'?
						$bool101['__nonzero__']() :
						(typeof $bool101['__len__']=='function'?
							($bool101['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool102 === false || $bool102 === 0 || $bool102 === '' ?
					false :
					(typeof $bool102=='object'?
						(typeof $bool102['__nonzero__']=='function'?
							$bool102['__nonzero__']() :
							(typeof $bool102['__len__']=='function'?
								($bool102['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter46_iter = $p['range']((($len47=data) === null?0:
					(typeof $len47['__array'] != 'undefined' ? $len47['__array']['length']:
						(typeof $len47['__len__'] == 'function'?$len47['__len__']():
							(typeof $len47['length'] != 'undefined'?$len47['length']:
								$p['len']($len47))))));
				if (typeof ($iter46_array = $iter46_iter['__array']) != 'undefined') {
					$iter46_type = 0;
				} else {
					$iter46_iter = $iter46_iter['__iter__']();
					$iter46_type = typeof ($iter46_array = $iter46_iter['__array']) != 'undefined'? 0 : (typeof $iter46_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter46_idx = 0;
				while (typeof ($iter46_nextval=($iter46_type?($iter46_type > 0?$iter46_iter.next(true,false):$p['wrapped_next']($iter46_iter)):$iter46_array[$iter46_idx++])) != 'undefined') {
					i = $iter46_nextval;
					ndarray_data['__setitem__'](i, Math['pow']((typeof ($197=data)['__array'] != 'undefined'?
						((typeof $197['__array'][$198=i]) != 'undefined'?$197['__array'][$198]:
							$197['__getitem__']($198)):
							$197['__getitem__'](i)),other));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter47_iter = $p['range']((($len48=data) === null?0:
					(typeof $len48['__array'] != 'undefined' ? $len48['__array']['length']:
						(typeof $len48['__len__'] == 'function'?$len48['__len__']():
							(typeof $len48['length'] != 'undefined'?$len48['length']:
								$p['len']($len48))))));
				if (typeof ($iter47_array = $iter47_iter['__array']) != 'undefined') {
					$iter47_type = 0;
				} else {
					$iter47_iter = $iter47_iter['__iter__']();
					$iter47_type = typeof ($iter47_array = $iter47_iter['__array']) != 'undefined'? 0 : (typeof $iter47_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter47_idx = 0;
				while (typeof ($iter47_nextval=($iter47_type?($iter47_type > 0?$iter47_iter.next(true,false):$p['wrapped_next']($iter47_iter)):$iter47_array[$iter47_idx++])) != 'undefined') {
					i = $iter47_nextval;
					ndarray_data['__setitem__'](i, Math['pow']((typeof ($199=data)['__array'] != 'undefined'?
						((typeof $199['__array'][$200=i]) != 'undefined'?$199['__array'][$200]:
							$199['__getitem__']($200)):
							$199['__getitem__'](i)),(typeof ($201=other_data)['__array'] != 'undefined'?
						((typeof $201['__array'][$202=i]) != 'undefined'?$201['__array'][$202]:
							$201['__getitem__']($202)):
							$201['__getitem__'](i))));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__pow__'] = $method;
		$method = $pyjs__bind_method2('__neg__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var ndarray_data,$attr300,$attr301,$attr302,$iter48_iter,i,$203,$attr299,$204,$iter48_array,$iter48_idx,$iter48_nextval,$len49,data,$iter48_type,ndarray;
			ndarray = self['empty']();
			ndarray_data = ndarray['_data'];
			data = self['_data'];
			$iter48_iter = $p['range']((($len49=data) === null?0:
				(typeof $len49['__array'] != 'undefined' ? $len49['__array']['length']:
					(typeof $len49['__len__'] == 'function'?$len49['__len__']():
						(typeof $len49['length'] != 'undefined'?$len49['length']:
							$p['len']($len49))))));
			if (typeof ($iter48_array = $iter48_iter['__array']) != 'undefined') {
				$iter48_type = 0;
			} else {
				$iter48_iter = $iter48_iter['__iter__']();
				$iter48_type = typeof ($iter48_array = $iter48_iter['__array']) != 'undefined'? 0 : (typeof $iter48_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter48_idx = 0;
			while (typeof ($iter48_nextval=($iter48_type?($iter48_type > 0?$iter48_iter.next(true,false):$p['wrapped_next']($iter48_iter)):$iter48_array[$iter48_idx++])) != 'undefined') {
				i = $iter48_nextval;
				ndarray_data['__setitem__'](i, -((typeof ($203=data)['__array'] != 'undefined'?
					((typeof $203['__array'][$204=i]) != 'undefined'?$203['__array'][$204]:
						$203['__getitem__']($204)):
						$203['__getitem__'](i))));
			}
			return ndarray;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__neg__'] = $method;
		$method = $pyjs__bind_method2('__pos__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var ndarray;
			ndarray = self['copy']();
			return ndarray;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__pos__'] = $method;
		$method = $pyjs__bind_method2('__abs__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var ndarray_data,$iter49_array,$208,$cmp46,$cmp45,$iter49_iter,$iter49_idx,$iter49_nextval,$attr304,$attr305,$attr306,$attr303,$206,$207,$205,$len50,$bool103,data,ndarray,i,$iter49_type;
			ndarray = self['empty']();
			ndarray_data = ndarray['_data'];
			data = self['_data'];
			$iter49_iter = $p['range']((($len50=data) === null?0:
				(typeof $len50['__array'] != 'undefined' ? $len50['__array']['length']:
					(typeof $len50['__len__'] == 'function'?$len50['__len__']():
						(typeof $len50['length'] != 'undefined'?$len50['length']:
							$p['len']($len50))))));
			if (typeof ($iter49_array = $iter49_iter['__array']) != 'undefined') {
				$iter49_type = 0;
			} else {
				$iter49_iter = $iter49_iter['__iter__']();
				$iter49_type = typeof ($iter49_array = $iter49_iter['__array']) != 'undefined'? 0 : (typeof $iter49_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter49_idx = 0;
			while (typeof ($iter49_nextval=($iter49_type?($iter49_type > 0?$iter49_iter.next(true,false):$p['wrapped_next']($iter49_iter)):$iter49_array[$iter49_idx++])) != 'undefined') {
				i = $iter49_nextval;
				if ((($bool103=((($cmp45=(typeof ($205=data)['__array'] != 'undefined'?
					((typeof $205['__array'][$206=i]) != 'undefined'?$205['__array'][$206]:
						$205['__getitem__']($206)):
						$205['__getitem__'](i)))===($cmp46=0)?0:
					(typeof $cmp45==typeof $cmp46 && ((typeof $cmp45 == 'number')||(typeof $cmp45 == 'string')||(typeof $cmp45 == 'boolean'))?
						($cmp45 == $cmp46 ? 0 : ($cmp45 < $cmp46 ? -1 : 1)):
						$p['cmp']($cmp45, $cmp46))) == -1)) === null || $bool103 === false || $bool103 === 0 || $bool103 === '' ?
						false :
						(typeof $bool103=='object'?
							(typeof $bool103['__nonzero__']=='function'?
								$bool103['__nonzero__']() :
								(typeof $bool103['__len__']=='function'?
									($bool103['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					ndarray_data['__setitem__'](i, -((typeof ($207=data)['__array'] != 'undefined'?
						((typeof $207['__array'][$208=i]) != 'undefined'?$207['__array'][$208]:
							$207['__getitem__']($208)):
							$207['__getitem__'](i))));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__abs__'] = $method;
		$method = $pyjs__bind_method2('__matmul__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter61_type,$iter60_array,$iter61_iter,_other,$attr331,d_len,$iter63_array,$iter51_array,_y,_x,$260,$attr329,_y_data,$iter60_type,_x_data,$eq27,$eq29,$eq28,d,$iter50_type,p,$iter51_type,$iter62_nextval,$eq32,$eq33,$eq30,$eq31,$eq36,result,$eq34,$eq35,$eq38,$eq39,$iter61_idx,other_data,$225,$iter62_idx,_array,$attr307,$224,$attr308,$226,$220,$221,$222,$attr309,$223,$iter63_iter,$iter50_array,$iter63_idx,xshape,k,y_dim,$259,$258,$257,$attr317,$attr316,$attr315,$attr314,$attr313,$attr312,$attr311,$attr310,$len53,$attr319,$attr318,$iter62_array,array,$bool109,$iter51_iter,$iter51_nextval,$iter60_nextval,$iter50_nextval,_array_data,$209,$iter62_type,$iter50_iter,arrays,j,n,v,yshape,$eq37,$iter61_array,$bool110,$bool111,x_dim,$iter61_nextval,$iter50_idx,$iter60_idx,$attr328,$attr322,$attr323,$attr320,$attr321,$attr326,$attr327,$attr324,$attr325,$bool105,$bool104,$bool107,$bool106,$len51,$len52,$iter51_idx,_data,data,$bool108,$iter62_iter,$iter60_iter,$iter63_type,i,$eq42,$eq41,$eq40,m,$attr330,$215,$214,$217,$216,$211,$210,$213,$212,$iter63_nextval,$219,$218,$attr332;
			_other = self['_get_array'](other);
			x_dim = (($len51=self['_shape']) === null?0:
				(typeof $len51['__array'] != 'undefined' ? $len51['__array']['length']:
					(typeof $len51['__len__'] == 'function'?$len51['__len__']():
						(typeof $len51['length'] != 'undefined'?$len51['length']:
							$p['len']($len51)))));
			y_dim = (($len52=_other['_shape']) === null?0:
				(typeof $len52['__array'] != 'undefined' ? $len52['__array']['length']:
					(typeof $len52['__len__'] == 'function'?$len52['__len__']():
						(typeof $len52['length'] != 'undefined'?$len52['length']:
							$p['len']($len52)))));
			if ((($bool104=!(($eq27=x_dim)===($eq28=y_dim)&&$eq27===null?true:
				($eq27===null?false:($eq28===null?false:
					((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27['__cmp__']=='function'?$eq27['__cmp__']($eq28) === 0:
						((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28['__cmp__']=='function'?$eq28['__cmp__']($eq27) === 0:
							$eq27==$eq28)))))) === null || $bool104 === false || $bool104 === 0 || $bool104 === '' ?
					false :
					(typeof $bool104=='object'?
						(typeof $bool104['__nonzero__']=='function'?
							$bool104['__nonzero__']() :
							(typeof $bool104['__len__']=='function'?
								($bool104['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($p['ValueError']('incompatible array shapes for matmul'));
			}
			if ((($bool105=(($eq29=x_dim)===($eq30=1)&&$eq29===null?true:
				($eq29===null?false:($eq30===null?false:
					((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29['__cmp__']=='function'?$eq29['__cmp__']($eq30) === 0:
						((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30['__cmp__']=='function'?$eq30['__cmp__']($eq29) === 0:
							$eq29==$eq30)))))) === null || $bool105 === false || $bool105 === 0 || $bool105 === '' ?
					false :
					(typeof $bool105=='object'?
						(typeof $bool105['__nonzero__']=='function'?
							$bool105['__nonzero__']() :
							(typeof $bool105['__len__']=='function'?
								($bool105['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool106=(($eq31=(typeof ($209=self['_shape'])['__array'] != 'undefined'?
					((typeof $209['__array'][$210=0]) != 'undefined'?$209['__array'][$210]:
						$209['__getitem__']($210)):
						$209['__getitem__'](0)))===($eq32=(typeof ($211=_other['_shape'])['__array'] != 'undefined'?
					((typeof $211['__array'][$212=0]) != 'undefined'?$211['__array'][$212]:
						$211['__getitem__']($212)):
						$211['__getitem__'](0)))&&$eq31===null?true:
					($eq31===null?false:($eq32===null?false:
						((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31['__cmp__']=='function'?$eq31['__cmp__']($eq32) === 0:
							((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32['__cmp__']=='function'?$eq32['__cmp__']($eq31) === 0:
								$eq31==$eq32)))))) === null || $bool106 === false || $bool106 === 0 || $bool106 === '' ?
						false :
						(typeof $bool106=='object'?
							(typeof $bool106['__nonzero__']=='function'?
								$bool106['__nonzero__']() :
								(typeof $bool106['__len__']=='function'?
									($bool106['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					data = self['_data'];
					other_data = _other['_data'];
					result = 0;
					$iter50_iter = $p['range']((($len53=data) === null?0:
						(typeof $len53['__array'] != 'undefined' ? $len53['__array']['length']:
							(typeof $len53['__len__'] == 'function'?$len53['__len__']():
								(typeof $len53['length'] != 'undefined'?$len53['length']:
									$p['len']($len53))))));
					if (typeof ($iter50_array = $iter50_iter['__array']) != 'undefined') {
						$iter50_type = 0;
					} else {
						$iter50_iter = $iter50_iter['__iter__']();
						$iter50_type = typeof ($iter50_array = $iter50_iter['__array']) != 'undefined'? 0 : (typeof $iter50_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter50_idx = 0;
					while (typeof ($iter50_nextval=($iter50_type?($iter50_type > 0?$iter50_iter.next(true,false):$p['wrapped_next']($iter50_iter)):$iter50_array[$iter50_idx++])) != 'undefined') {
						i = $iter50_nextval;
						result += ((typeof ($213=data)['__array'] != 'undefined'?
							((typeof $213['__array'][$214=i]) != 'undefined'?$213['__array'][$214]:
								$213['__getitem__']($214)):
								$213['__getitem__'](i)))*((typeof ($215=other_data)['__array'] != 'undefined'?
							((typeof $215['__array'][$216=i]) != 'undefined'?$215['__array'][$216]:
								$215['__getitem__']($216)):
								$215['__getitem__'](i)));
					}
					return result;
				}
				else {
					throw ($p['ValueError']('incompatible array shapes for matmul'));
				}
			}
			xshape = $p['__getslice'](self['_shape'], -(2), null);
			yshape = $p['__getslice'](_other['_shape'], -(2), null);
			if ((($bool107=(($eq33=(typeof ($217=xshape)['__array'] != 'undefined'?
				((typeof $217['__array'][$218=1]) != 'undefined'?$217['__array'][$218]:
					$217['__getitem__']($218)):
					$217['__getitem__'](1)))===($eq34=(typeof ($219=yshape)['__array'] != 'undefined'?
				((typeof $219['__array'][$220=0]) != 'undefined'?$219['__array'][$220]:
					$219['__getitem__']($220)):
					$219['__getitem__'](0)))&&$eq33===null?true:
				($eq33===null?false:($eq34===null?false:
					((typeof $eq33=='object'||typeof $eq33=='function')&&typeof $eq33['__cmp__']=='function'?$eq33['__cmp__']($eq34) === 0:
						((typeof $eq34=='object'||typeof $eq34=='function')&&typeof $eq34['__cmp__']=='function'?$eq34['__cmp__']($eq33) === 0:
							$eq33==$eq34)))))) === null || $bool107 === false || $bool107 === 0 || $bool107 === '' ?
					false :
					(typeof $bool107=='object'?
						(typeof $bool107['__nonzero__']=='function'?
							$bool107['__nonzero__']() :
							(typeof $bool107['__len__']=='function'?
								($bool107['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				m = (typeof ($221=xshape)['__array'] != 'undefined'?
					((typeof $221['__array'][$222=1]) != 'undefined'?$221['__array'][$222]:
						$221['__getitem__']($222)):
						$221['__getitem__'](1));
				n = (typeof ($223=xshape)['__array'] != 'undefined'?
					((typeof $223['__array'][$224=0]) != 'undefined'?$223['__array'][$224]:
						$223['__getitem__']($224)):
						$223['__getitem__'](0));
				p = (typeof ($225=yshape)['__array'] != 'undefined'?
					((typeof $225['__array'][$226=1]) != 'undefined'?$225['__array'][$226]:
						$225['__getitem__']($226)):
						$225['__getitem__'](1));
				d = $p['__getslice'](self['_shape'], 0, -(2));
				d_len = 1;
				$iter51_iter = d;
				if (typeof ($iter51_array = $iter51_iter['__array']) != 'undefined') {
					$iter51_type = 0;
				} else {
					$iter51_iter = $iter51_iter['__iter__']();
					$iter51_type = typeof ($iter51_array = $iter51_iter['__array']) != 'undefined'? 0 : (typeof $iter51_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter51_idx = 0;
				while (typeof ($iter51_nextval=($iter51_type?($iter51_type > 0?$iter51_iter.next(true,false):$p['wrapped_next']($iter51_iter)):$iter51_array[$iter51_idx++])) != 'undefined') {
					v = $iter51_nextval;
					d_len *= v;
				}
			}
			else {
				throw ($p['ValueError']('incompatible array shapes for matmul'));
			}
			_data = self['_data']['__class__'](((d_len)*(n))*(p));
			array = $m['Ndarray'](_data, self['_dtype']);
			array['setshape']((d)+($p['tuple']([n, p])));
			if ((($bool108=(($eq35=x_dim)===($eq36=2)&&$eq35===null?true:
				($eq35===null?false:($eq36===null?false:
					((typeof $eq35=='object'||typeof $eq35=='function')&&typeof $eq35['__cmp__']=='function'?$eq35['__cmp__']($eq36) === 0:
						((typeof $eq36=='object'||typeof $eq36=='function')&&typeof $eq36['__cmp__']=='function'?$eq36['__cmp__']($eq35) === 0:
							$eq35==$eq36)))))) === null || $bool108 === false || $bool108 === 0 || $bool108 === '' ?
					false :
					(typeof $bool108=='object'?
						(typeof $bool108['__nonzero__']=='function'?
							$bool108['__nonzero__']() :
							(typeof $bool108['__len__']=='function'?
								($bool108['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				arrays = $p['list']([$p['tuple']([self, _other, array])]);
			}
			else if ((($bool109=(($eq37=x_dim)===($eq38=3)&&$eq37===null?true:
				($eq37===null?false:($eq38===null?false:
					((typeof $eq37=='object'||typeof $eq37=='function')&&typeof $eq37['__cmp__']=='function'?$eq37['__cmp__']($eq38) === 0:
						((typeof $eq38=='object'||typeof $eq38=='function')&&typeof $eq38['__cmp__']=='function'?$eq38['__cmp__']($eq37) === 0:
							$eq37==$eq38)))))) === null || $bool109 === false || $bool109 === 0 || $bool109 === '' ?
					false :
					(typeof $bool109=='object'?
						(typeof $bool109['__nonzero__']=='function'?
							$bool109['__nonzero__']() :
							(typeof $bool109['__len__']=='function'?
								($bool109['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				arrays = function(){
					var $234,$iter52_iter,$229,$collcomp9,i,$233,$227,$iter52_idx,$232,$iter52_type,$230,$iter52_nextval,$231,$iter52_array,$228;
	$collcomp9 = $p['list']();
				$iter52_iter = $p['range']((typeof ($227=d)['__array'] != 'undefined'?
					((typeof $227['__array'][$228=0]) != 'undefined'?$227['__array'][$228]:
						$227['__getitem__']($228)):
						$227['__getitem__'](0)));
				if (typeof ($iter52_array = $iter52_iter['__array']) != 'undefined') {
					$iter52_type = 0;
				} else {
					$iter52_iter = $iter52_iter['__iter__']();
					$iter52_type = typeof ($iter52_array = $iter52_iter['__array']) != 'undefined'? 0 : (typeof $iter52_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter52_idx = 0;
				while (typeof ($iter52_nextval=($iter52_type?($iter52_type > 0?$iter52_iter.next(true,false):$p['wrapped_next']($iter52_iter)):$iter52_array[$iter52_idx++])) != 'undefined') {
					i = $iter52_nextval;
					$collcomp9['append']($p['tuple']([(typeof ($229=self)['__array'] != 'undefined'?
						((typeof $229['__array'][$230=i]) != 'undefined'?$229['__array'][$230]:
							$229['__getitem__']($230)):
							$229['__getitem__'](i)), (typeof ($231=_other)['__array'] != 'undefined'?
						((typeof $231['__array'][$232=i]) != 'undefined'?$231['__array'][$232]:
							$231['__getitem__']($232)):
							$231['__getitem__'](i)), (typeof ($233=array)['__array'] != 'undefined'?
						((typeof $233['__array'][$234=i]) != 'undefined'?$233['__array'][$234]:
							$233['__getitem__']($234)):
							$233['__getitem__'](i))]));
				}

	return $collcomp9;}();
			}
			else if ((($bool110=(($eq39=x_dim)===($eq40=4)&&$eq39===null?true:
				($eq39===null?false:($eq40===null?false:
					((typeof $eq39=='object'||typeof $eq39=='function')&&typeof $eq39['__cmp__']=='function'?$eq39['__cmp__']($eq40) === 0:
						((typeof $eq40=='object'||typeof $eq40=='function')&&typeof $eq40['__cmp__']=='function'?$eq40['__cmp__']($eq39) === 0:
							$eq39==$eq40)))))) === null || $bool110 === false || $bool110 === 0 || $bool110 === '' ?
					false :
					(typeof $bool110=='object'?
						(typeof $bool110['__nonzero__']=='function'?
							$bool110['__nonzero__']() :
							(typeof $bool110['__len__']=='function'?
								($bool110['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				arrays = function(){
					var $iter53_type,j,$239,$iter53_idx,i,$iter53_array,$iter53_iter,$collcomp10,$iter53_nextval,$244,$242,$243,$240,$241;
	$collcomp10 = $p['list']();
				$iter53_iter = function(){
					var $iter54_type,$iter54_iter,$iter55_idx,$iter54_array,$238,i,$236,$235,j,$iter55_nextval,$iter55_array,$iter55_iter,$iter54_idx,$iter55_type,$collcomp11,$iter54_nextval,$237;
	$collcomp11 = $p['list']();
				$iter54_iter = $p['range']((typeof ($235=d)['__array'] != 'undefined'?
					((typeof $235['__array'][$236=0]) != 'undefined'?$235['__array'][$236]:
						$235['__getitem__']($236)):
						$235['__getitem__'](0)));
				if (typeof ($iter54_array = $iter54_iter['__array']) != 'undefined') {
					$iter54_type = 0;
				} else {
					$iter54_iter = $iter54_iter['__iter__']();
					$iter54_type = typeof ($iter54_array = $iter54_iter['__array']) != 'undefined'? 0 : (typeof $iter54_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter54_idx = 0;
				while (typeof ($iter54_nextval=($iter54_type?($iter54_type > 0?$iter54_iter.next(true,false):$p['wrapped_next']($iter54_iter)):$iter54_array[$iter54_idx++])) != 'undefined') {
					i = $iter54_nextval;
					$iter55_iter = $p['range']((typeof ($237=d)['__array'] != 'undefined'?
						((typeof $237['__array'][$238=1]) != 'undefined'?$237['__array'][$238]:
							$237['__getitem__']($238)):
							$237['__getitem__'](1)));
					if (typeof ($iter55_array = $iter55_iter['__array']) != 'undefined') {
						$iter55_type = 0;
					} else {
						$iter55_iter = $iter55_iter['__iter__']();
						$iter55_type = typeof ($iter55_array = $iter55_iter['__array']) != 'undefined'? 0 : (typeof $iter55_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter55_idx = 0;
					while (typeof ($iter55_nextval=($iter55_type?($iter55_type > 0?$iter55_iter.next(true,false):$p['wrapped_next']($iter55_iter)):$iter55_array[$iter55_idx++])) != 'undefined') {
						j = $iter55_nextval;
						$collcomp11['append']($p['tuple']([i, j]));
					}
				}

	return $collcomp11;}();
				if (typeof ($iter53_array = $iter53_iter['__array']) != 'undefined') {
					$iter53_type = 0;
				} else {
					$iter53_iter = $iter53_iter['__iter__']();
					$iter53_type = typeof ($iter53_array = $iter53_iter['__array']) != 'undefined'? 0 : (typeof $iter53_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter53_idx = 0;
				while (typeof ($iter53_nextval=($iter53_type?($iter53_type > 0?$iter53_iter.next(true,false):$p['wrapped_next']($iter53_iter)):$iter53_array[$iter53_idx++])) != 'undefined') {
					var $tupleassign5 = $p['__ass_unpack']($iter53_nextval, 2, null);
					i = $tupleassign5[0];
					j = $tupleassign5[1];
					$collcomp10['append']($p['tuple']([(typeof ($239=self)['__array'] != 'undefined'?
						((typeof $239['__array'][$240=$p['tuple']([i, j])]) != 'undefined'?$239['__array'][$240]:
							$239['__getitem__']($240)):
							$239['__getitem__']($p['tuple']([i, j]))), (typeof ($241=_other)['__array'] != 'undefined'?
						((typeof $241['__array'][$242=$p['tuple']([i, j])]) != 'undefined'?$241['__array'][$242]:
							$241['__getitem__']($242)):
							$241['__getitem__']($p['tuple']([i, j]))), (typeof ($243=array)['__array'] != 'undefined'?
						((typeof $243['__array'][$244=$p['tuple']([i, j])]) != 'undefined'?$243['__array'][$244]:
							$243['__getitem__']($244)):
							$243['__getitem__']($p['tuple']([i, j])))]));
				}

	return $collcomp10;}();
			}
			else if ((($bool111=(($eq41=x_dim)===($eq42=5)&&$eq41===null?true:
				($eq41===null?false:($eq42===null?false:
					((typeof $eq41=='object'||typeof $eq41=='function')&&typeof $eq41['__cmp__']=='function'?$eq41['__cmp__']($eq42) === 0:
						((typeof $eq42=='object'||typeof $eq42=='function')&&typeof $eq42['__cmp__']=='function'?$eq42['__cmp__']($eq41) === 0:
							$eq41==$eq42)))))) === null || $bool111 === false || $bool111 === 0 || $bool111 === '' ?
					false :
					(typeof $bool111=='object'?
						(typeof $bool111['__nonzero__']=='function'?
							$bool111['__nonzero__']() :
							(typeof $bool111['__len__']=='function'?
								($bool111['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				arrays = function(){
					var $iter56_idx,i,k,j,$256,$251,$iter56_type,$collcomp12,$iter56_iter,$iter56_array,$253,$252,$255,$254,$iter56_nextval;
	$collcomp12 = $p['list']();
				$iter56_iter = function(){
					var $iter57_idx,$iter59_iter,$iter57_iter,$collcomp13,$248,$249,$246,$247,$245,$iter58_array,$iter58_type,$iter59_array,$iter58_iter,$iter58_idx,$iter58_nextval,$iter57_type,i,k,j,$iter59_idx,$iter57_array,$iter59_nextval,$iter59_type,$250,$iter57_nextval;
	$collcomp13 = $p['list']();
				$iter57_iter = $p['range']((typeof ($245=d)['__array'] != 'undefined'?
					((typeof $245['__array'][$246=0]) != 'undefined'?$245['__array'][$246]:
						$245['__getitem__']($246)):
						$245['__getitem__'](0)));
				if (typeof ($iter57_array = $iter57_iter['__array']) != 'undefined') {
					$iter57_type = 0;
				} else {
					$iter57_iter = $iter57_iter['__iter__']();
					$iter57_type = typeof ($iter57_array = $iter57_iter['__array']) != 'undefined'? 0 : (typeof $iter57_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter57_idx = 0;
				while (typeof ($iter57_nextval=($iter57_type?($iter57_type > 0?$iter57_iter.next(true,false):$p['wrapped_next']($iter57_iter)):$iter57_array[$iter57_idx++])) != 'undefined') {
					i = $iter57_nextval;
					$iter58_iter = $p['range']((typeof ($247=d)['__array'] != 'undefined'?
						((typeof $247['__array'][$248=1]) != 'undefined'?$247['__array'][$248]:
							$247['__getitem__']($248)):
							$247['__getitem__'](1)));
					if (typeof ($iter58_array = $iter58_iter['__array']) != 'undefined') {
						$iter58_type = 0;
					} else {
						$iter58_iter = $iter58_iter['__iter__']();
						$iter58_type = typeof ($iter58_array = $iter58_iter['__array']) != 'undefined'? 0 : (typeof $iter58_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter58_idx = 0;
					while (typeof ($iter58_nextval=($iter58_type?($iter58_type > 0?$iter58_iter.next(true,false):$p['wrapped_next']($iter58_iter)):$iter58_array[$iter58_idx++])) != 'undefined') {
						j = $iter58_nextval;
						$iter59_iter = $p['range']((typeof ($249=d)['__array'] != 'undefined'?
							((typeof $249['__array'][$250=2]) != 'undefined'?$249['__array'][$250]:
								$249['__getitem__']($250)):
								$249['__getitem__'](2)));
						if (typeof ($iter59_array = $iter59_iter['__array']) != 'undefined') {
							$iter59_type = 0;
						} else {
							$iter59_iter = $iter59_iter['__iter__']();
							$iter59_type = typeof ($iter59_array = $iter59_iter['__array']) != 'undefined'? 0 : (typeof $iter59_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter59_idx = 0;
						while (typeof ($iter59_nextval=($iter59_type?($iter59_type > 0?$iter59_iter.next(true,false):$p['wrapped_next']($iter59_iter)):$iter59_array[$iter59_idx++])) != 'undefined') {
							k = $iter59_nextval;
							$collcomp13['append']($p['tuple']([i, j, k]));
						}
					}
				}

	return $collcomp13;}();
				if (typeof ($iter56_array = $iter56_iter['__array']) != 'undefined') {
					$iter56_type = 0;
				} else {
					$iter56_iter = $iter56_iter['__iter__']();
					$iter56_type = typeof ($iter56_array = $iter56_iter['__array']) != 'undefined'? 0 : (typeof $iter56_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter56_idx = 0;
				while (typeof ($iter56_nextval=($iter56_type?($iter56_type > 0?$iter56_iter.next(true,false):$p['wrapped_next']($iter56_iter)):$iter56_array[$iter56_idx++])) != 'undefined') {
					var $tupleassign6 = $p['__ass_unpack']($iter56_nextval, 3, null);
					i = $tupleassign6[0];
					j = $tupleassign6[1];
					k = $tupleassign6[2];
					$collcomp12['append']($p['tuple']([(typeof ($251=self)['__array'] != 'undefined'?
						((typeof $251['__array'][$252=$p['tuple']([i, j, k])]) != 'undefined'?$251['__array'][$252]:
							$251['__getitem__']($252)):
							$251['__getitem__']($p['tuple']([i, j, k]))), (typeof ($253=_other)['__array'] != 'undefined'?
						((typeof $253['__array'][$254=$p['tuple']([i, j, k])]) != 'undefined'?$253['__array'][$254]:
							$253['__getitem__']($254)):
							$253['__getitem__']($p['tuple']([i, j, k]))), (typeof ($255=array)['__array'] != 'undefined'?
						((typeof $255['__array'][$256=$p['tuple']([i, j, k])]) != 'undefined'?$255['__array'][$256]:
							$255['__getitem__']($256)):
							$255['__getitem__']($p['tuple']([i, j, k])))]));
				}

	return $collcomp12;}();
			}
			else {
				throw ($p['ValueError']('incompatible array shapes for matmul'));
			}
			$iter60_iter = arrays;
			if (typeof ($iter60_array = $iter60_iter['__array']) != 'undefined') {
				$iter60_type = 0;
			} else {
				$iter60_iter = $iter60_iter['__iter__']();
				$iter60_type = typeof ($iter60_array = $iter60_iter['__array']) != 'undefined'? 0 : (typeof $iter60_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter60_idx = 0;
			while (typeof ($iter60_nextval=($iter60_type?($iter60_type > 0?$iter60_iter.next(true,false):$p['wrapped_next']($iter60_iter)):$iter60_array[$iter60_idx++])) != 'undefined') {
				var $tupleassign7 = $p['__ass_unpack']($iter60_nextval, 3, null);
				_x = $tupleassign7[0];
				_y = $tupleassign7[1];
				_array = $tupleassign7[2];
				_x_data = _x['_data'];
				_y_data = _y['_data'];
				_array_data = _array['_data'];
				$iter61_iter = $p['range'](n);
				if (typeof ($iter61_array = $iter61_iter['__array']) != 'undefined') {
					$iter61_type = 0;
				} else {
					$iter61_iter = $iter61_iter['__iter__']();
					$iter61_type = typeof ($iter61_array = $iter61_iter['__array']) != 'undefined'? 0 : (typeof $iter61_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter61_idx = 0;
				while (typeof ($iter61_nextval=($iter61_type?($iter61_type > 0?$iter61_iter.next(true,false):$p['wrapped_next']($iter61_iter)):$iter61_array[$iter61_idx++])) != 'undefined') {
					i = $iter61_nextval;
					$iter62_iter = $p['range'](p);
					if (typeof ($iter62_array = $iter62_iter['__array']) != 'undefined') {
						$iter62_type = 0;
					} else {
						$iter62_iter = $iter62_iter['__iter__']();
						$iter62_type = typeof ($iter62_array = $iter62_iter['__array']) != 'undefined'? 0 : (typeof $iter62_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter62_idx = 0;
					while (typeof ($iter62_nextval=($iter62_type?($iter62_type > 0?$iter62_iter.next(true,false):$p['wrapped_next']($iter62_iter)):$iter62_array[$iter62_idx++])) != 'undefined') {
						j = $iter62_nextval;
						result = 0;
						$iter63_iter = $p['range'](m);
						if (typeof ($iter63_array = $iter63_iter['__array']) != 'undefined') {
							$iter63_type = 0;
						} else {
							$iter63_iter = $iter63_iter['__iter__']();
							$iter63_type = typeof ($iter63_array = $iter63_iter['__array']) != 'undefined'? 0 : (typeof $iter63_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter63_idx = 0;
						while (typeof ($iter63_nextval=($iter63_type?($iter63_type > 0?$iter63_iter.next(true,false):$p['wrapped_next']($iter63_iter)):$iter63_array[$iter63_idx++])) != 'undefined') {
							k = $iter63_nextval;
							result += ((typeof ($257=_x_data)['__array'] != 'undefined'?
								((typeof $257['__array'][$258=((i)*(m))+(k)]) != 'undefined'?$257['__array'][$258]:
									$257['__getitem__']($258)):
									$257['__getitem__'](((i)*(m))+(k))))*((typeof ($259=_y_data)['__array'] != 'undefined'?
								((typeof $259['__array'][$260=((k)*(p))+(j)]) != 'undefined'?$259['__array'][$260]:
									$259['__getitem__']($260)):
									$259['__getitem__'](((k)*(p))+(j))));
						}
						_array_data['__setitem__'](((i)*(p))+(j), result);
					}
				}
			}
			return array;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__matmul__'] = $method;
		$method = $pyjs__bind_method2('__iadd__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter64_iter,$bool112,$bool113,$iter64_array,$iter64_nextval,other_data,$iter64_type,$iter65_array,$261,$262,$264,$265,$266,$iter65_type,$iter65_nextval,$len54,$len55,$iter65_iter,data,$263,i,$iter65_idx,$attr334,$iter64_idx,$attr333;
			data = self['_data'];
			if ((($bool113=!(($bool112=$p['hasattr'](other, '__iter__')) === null || $bool112 === false || $bool112 === 0 || $bool112 === '' ?
				false :
				(typeof $bool112=='object'?
					(typeof $bool112['__nonzero__']=='function'?
						$bool112['__nonzero__']() :
						(typeof $bool112['__len__']=='function'?
							($bool112['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool113 === false || $bool113 === 0 || $bool113 === '' ?
					false :
					(typeof $bool113=='object'?
						(typeof $bool113['__nonzero__']=='function'?
							$bool113['__nonzero__']() :
							(typeof $bool113['__len__']=='function'?
								($bool113['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter64_iter = $p['range']((($len54=data) === null?0:
					(typeof $len54['__array'] != 'undefined' ? $len54['__array']['length']:
						(typeof $len54['__len__'] == 'function'?$len54['__len__']():
							(typeof $len54['length'] != 'undefined'?$len54['length']:
								$p['len']($len54))))));
				if (typeof ($iter64_array = $iter64_iter['__array']) != 'undefined') {
					$iter64_type = 0;
				} else {
					$iter64_iter = $iter64_iter['__iter__']();
					$iter64_type = typeof ($iter64_array = $iter64_iter['__array']) != 'undefined'? 0 : (typeof $iter64_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter64_idx = 0;
				while (typeof ($iter64_nextval=($iter64_type?($iter64_type > 0?$iter64_iter.next(true,false):$p['wrapped_next']($iter64_iter)):$iter64_array[$iter64_idx++])) != 'undefined') {
					i = $iter64_nextval;
					data['__setitem__'](i, ((typeof ($261=data)['__array'] != 'undefined'?
						((typeof $261['__array'][$262=i]) != 'undefined'?$261['__array'][$262]:
							$261['__getitem__']($262)):
							$261['__getitem__'](i)))+(other));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter65_iter = $p['range']((($len55=data) === null?0:
					(typeof $len55['__array'] != 'undefined' ? $len55['__array']['length']:
						(typeof $len55['__len__'] == 'function'?$len55['__len__']():
							(typeof $len55['length'] != 'undefined'?$len55['length']:
								$p['len']($len55))))));
				if (typeof ($iter65_array = $iter65_iter['__array']) != 'undefined') {
					$iter65_type = 0;
				} else {
					$iter65_iter = $iter65_iter['__iter__']();
					$iter65_type = typeof ($iter65_array = $iter65_iter['__array']) != 'undefined'? 0 : (typeof $iter65_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter65_idx = 0;
				while (typeof ($iter65_nextval=($iter65_type?($iter65_type > 0?$iter65_iter.next(true,false):$p['wrapped_next']($iter65_iter)):$iter65_array[$iter65_idx++])) != 'undefined') {
					i = $iter65_nextval;
					data['__setitem__'](i, ((typeof ($263=data)['__array'] != 'undefined'?
						((typeof $263['__array'][$264=i]) != 'undefined'?$263['__array'][$264]:
							$263['__getitem__']($264)):
							$263['__getitem__'](i)))+((typeof ($265=other_data)['__array'] != 'undefined'?
						((typeof $265['__array'][$266=i]) != 'undefined'?$265['__array'][$266]:
							$265['__getitem__']($266)):
							$265['__getitem__'](i))));
				}
			}
			return self;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__iadd__'] = $method;
		$method = $pyjs__bind_method2('__isub__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter67_array,$bool114,$bool115,$iter66_type,$iter66_nextval,$iter66_iter,$iter67_type,$iter67_iter,$267,$268,$269,other_data,$iter67_idx,$iter67_nextval,$len56,$len57,$iter66_idx,data,i,$iter66_array,$272,$271,$270,$attr335,$attr336;
			data = self['_data'];
			if ((($bool115=!(($bool114=$p['hasattr'](other, '__iter__')) === null || $bool114 === false || $bool114 === 0 || $bool114 === '' ?
				false :
				(typeof $bool114=='object'?
					(typeof $bool114['__nonzero__']=='function'?
						$bool114['__nonzero__']() :
						(typeof $bool114['__len__']=='function'?
							($bool114['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool115 === false || $bool115 === 0 || $bool115 === '' ?
					false :
					(typeof $bool115=='object'?
						(typeof $bool115['__nonzero__']=='function'?
							$bool115['__nonzero__']() :
							(typeof $bool115['__len__']=='function'?
								($bool115['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter66_iter = $p['range']((($len56=data) === null?0:
					(typeof $len56['__array'] != 'undefined' ? $len56['__array']['length']:
						(typeof $len56['__len__'] == 'function'?$len56['__len__']():
							(typeof $len56['length'] != 'undefined'?$len56['length']:
								$p['len']($len56))))));
				if (typeof ($iter66_array = $iter66_iter['__array']) != 'undefined') {
					$iter66_type = 0;
				} else {
					$iter66_iter = $iter66_iter['__iter__']();
					$iter66_type = typeof ($iter66_array = $iter66_iter['__array']) != 'undefined'? 0 : (typeof $iter66_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter66_idx = 0;
				while (typeof ($iter66_nextval=($iter66_type?($iter66_type > 0?$iter66_iter.next(true,false):$p['wrapped_next']($iter66_iter)):$iter66_array[$iter66_idx++])) != 'undefined') {
					i = $iter66_nextval;
					data['__setitem__'](i, ((typeof ($267=data)['__array'] != 'undefined'?
						((typeof $267['__array'][$268=i]) != 'undefined'?$267['__array'][$268]:
							$267['__getitem__']($268)):
							$267['__getitem__'](i)))-(other));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter67_iter = $p['range']((($len57=data) === null?0:
					(typeof $len57['__array'] != 'undefined' ? $len57['__array']['length']:
						(typeof $len57['__len__'] == 'function'?$len57['__len__']():
							(typeof $len57['length'] != 'undefined'?$len57['length']:
								$p['len']($len57))))));
				if (typeof ($iter67_array = $iter67_iter['__array']) != 'undefined') {
					$iter67_type = 0;
				} else {
					$iter67_iter = $iter67_iter['__iter__']();
					$iter67_type = typeof ($iter67_array = $iter67_iter['__array']) != 'undefined'? 0 : (typeof $iter67_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter67_idx = 0;
				while (typeof ($iter67_nextval=($iter67_type?($iter67_type > 0?$iter67_iter.next(true,false):$p['wrapped_next']($iter67_iter)):$iter67_array[$iter67_idx++])) != 'undefined') {
					i = $iter67_nextval;
					data['__setitem__'](i, ((typeof ($269=data)['__array'] != 'undefined'?
						((typeof $269['__array'][$270=i]) != 'undefined'?$269['__array'][$270]:
							$269['__getitem__']($270)):
							$269['__getitem__'](i)))-((typeof ($271=other_data)['__array'] != 'undefined'?
						((typeof $271['__array'][$272=i]) != 'undefined'?$271['__array'][$272]:
							$271['__getitem__']($272)):
							$271['__getitem__'](i))));
				}
			}
			return self;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__isub__'] = $method;
		$method = $pyjs__bind_method2('__imul__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool116,$bool117,$iter68_idx,$iter69_iter,other_data,data,$iter69_type,$276,$iter69_array,$iter68_type,$274,$len58,$len59,$iter68_array,$iter69_idx,i,$iter68_iter,$iter68_nextval,$273,$277,$attr338,$275,$iter69_nextval,$attr337,$278;
			data = self['_data'];
			if ((($bool117=!(($bool116=$p['hasattr'](other, '__iter__')) === null || $bool116 === false || $bool116 === 0 || $bool116 === '' ?
				false :
				(typeof $bool116=='object'?
					(typeof $bool116['__nonzero__']=='function'?
						$bool116['__nonzero__']() :
						(typeof $bool116['__len__']=='function'?
							($bool116['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool117 === false || $bool117 === 0 || $bool117 === '' ?
					false :
					(typeof $bool117=='object'?
						(typeof $bool117['__nonzero__']=='function'?
							$bool117['__nonzero__']() :
							(typeof $bool117['__len__']=='function'?
								($bool117['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter68_iter = $p['range']((($len58=data) === null?0:
					(typeof $len58['__array'] != 'undefined' ? $len58['__array']['length']:
						(typeof $len58['__len__'] == 'function'?$len58['__len__']():
							(typeof $len58['length'] != 'undefined'?$len58['length']:
								$p['len']($len58))))));
				if (typeof ($iter68_array = $iter68_iter['__array']) != 'undefined') {
					$iter68_type = 0;
				} else {
					$iter68_iter = $iter68_iter['__iter__']();
					$iter68_type = typeof ($iter68_array = $iter68_iter['__array']) != 'undefined'? 0 : (typeof $iter68_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter68_idx = 0;
				while (typeof ($iter68_nextval=($iter68_type?($iter68_type > 0?$iter68_iter.next(true,false):$p['wrapped_next']($iter68_iter)):$iter68_array[$iter68_idx++])) != 'undefined') {
					i = $iter68_nextval;
					data['__setitem__'](i, ((typeof ($273=data)['__array'] != 'undefined'?
						((typeof $273['__array'][$274=i]) != 'undefined'?$273['__array'][$274]:
							$273['__getitem__']($274)):
							$273['__getitem__'](i)))*(other));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter69_iter = $p['range']((($len59=data) === null?0:
					(typeof $len59['__array'] != 'undefined' ? $len59['__array']['length']:
						(typeof $len59['__len__'] == 'function'?$len59['__len__']():
							(typeof $len59['length'] != 'undefined'?$len59['length']:
								$p['len']($len59))))));
				if (typeof ($iter69_array = $iter69_iter['__array']) != 'undefined') {
					$iter69_type = 0;
				} else {
					$iter69_iter = $iter69_iter['__iter__']();
					$iter69_type = typeof ($iter69_array = $iter69_iter['__array']) != 'undefined'? 0 : (typeof $iter69_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter69_idx = 0;
				while (typeof ($iter69_nextval=($iter69_type?($iter69_type > 0?$iter69_iter.next(true,false):$p['wrapped_next']($iter69_iter)):$iter69_array[$iter69_idx++])) != 'undefined') {
					i = $iter69_nextval;
					data['__setitem__'](i, ((typeof ($275=data)['__array'] != 'undefined'?
						((typeof $275['__array'][$276=i]) != 'undefined'?$275['__array'][$276]:
							$275['__getitem__']($276)):
							$275['__getitem__'](i)))*((typeof ($277=other_data)['__array'] != 'undefined'?
						((typeof $277['__array'][$278=i]) != 'undefined'?$277['__array'][$278]:
							$277['__getitem__']($278)):
							$277['__getitem__'](i))));
				}
			}
			return self;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__imul__'] = $method;
		$method = $pyjs__bind_method2('__idiv__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			return self['__itruediv__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__idiv__'] = $method;
		$method = $pyjs__bind_method2('__itruediv__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter70_idx,$iter71_type,$bool118,$bool119,$iter70_iter,other_data,$iter71_iter,$iter70_type,$len61,$len60,$iter70_nextval,$iter71_nextval,$attr340,$282,$iter71_array,$280,$281,$284,data,$iter70_array,$283,i,$attr339,$iter71_idx,$279;
			data = self['_data'];
			if ((($bool119=!(($bool118=$p['hasattr'](other, '__iter__')) === null || $bool118 === false || $bool118 === 0 || $bool118 === '' ?
				false :
				(typeof $bool118=='object'?
					(typeof $bool118['__nonzero__']=='function'?
						$bool118['__nonzero__']() :
						(typeof $bool118['__len__']=='function'?
							($bool118['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool119 === false || $bool119 === 0 || $bool119 === '' ?
					false :
					(typeof $bool119=='object'?
						(typeof $bool119['__nonzero__']=='function'?
							$bool119['__nonzero__']() :
							(typeof $bool119['__len__']=='function'?
								($bool119['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter70_iter = $p['range']((($len60=data) === null?0:
					(typeof $len60['__array'] != 'undefined' ? $len60['__array']['length']:
						(typeof $len60['__len__'] == 'function'?$len60['__len__']():
							(typeof $len60['length'] != 'undefined'?$len60['length']:
								$p['len']($len60))))));
				if (typeof ($iter70_array = $iter70_iter['__array']) != 'undefined') {
					$iter70_type = 0;
				} else {
					$iter70_iter = $iter70_iter['__iter__']();
					$iter70_type = typeof ($iter70_array = $iter70_iter['__array']) != 'undefined'? 0 : (typeof $iter70_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter70_idx = 0;
				while (typeof ($iter70_nextval=($iter70_type?($iter70_type > 0?$iter70_iter.next(true,false):$p['wrapped_next']($iter70_iter)):$iter70_array[$iter70_idx++])) != 'undefined') {
					i = $iter70_nextval;
					data['__setitem__'](i, ((typeof ($279=data)['__array'] != 'undefined'?
						((typeof $279['__array'][$280=i]) != 'undefined'?$279['__array'][$280]:
							$279['__getitem__']($280)):
							$279['__getitem__'](i)))/(other));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter71_iter = $p['range']((($len61=data) === null?0:
					(typeof $len61['__array'] != 'undefined' ? $len61['__array']['length']:
						(typeof $len61['__len__'] == 'function'?$len61['__len__']():
							(typeof $len61['length'] != 'undefined'?$len61['length']:
								$p['len']($len61))))));
				if (typeof ($iter71_array = $iter71_iter['__array']) != 'undefined') {
					$iter71_type = 0;
				} else {
					$iter71_iter = $iter71_iter['__iter__']();
					$iter71_type = typeof ($iter71_array = $iter71_iter['__array']) != 'undefined'? 0 : (typeof $iter71_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter71_idx = 0;
				while (typeof ($iter71_nextval=($iter71_type?($iter71_type > 0?$iter71_iter.next(true,false):$p['wrapped_next']($iter71_iter)):$iter71_array[$iter71_idx++])) != 'undefined') {
					i = $iter71_nextval;
					data['__setitem__'](i, ((typeof ($281=data)['__array'] != 'undefined'?
						((typeof $281['__array'][$282=i]) != 'undefined'?$281['__array'][$282]:
							$281['__getitem__']($282)):
							$281['__getitem__'](i)))/((typeof ($283=other_data)['__array'] != 'undefined'?
						((typeof $283['__array'][$284=i]) != 'undefined'?$283['__array'][$284]:
							$283['__getitem__']($284)):
							$283['__getitem__'](i))));
				}
			}
			return self;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__itruediv__'] = $method;
		$method = $pyjs__bind_method2('__ifloordiv__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $290,other_data,$iter73_iter,$len62,$bool121,$bool120,$iter72_array,$iter72_type,$attr341,$attr342,$iter73_array,$286,$287,$iter72_iter,$285,$288,$289,data,$iter72_idx,$iter72_nextval,i,$iter73_idx,$iter73_nextval,$iter73_type,$len63;
			data = self['_data'];
			if ((($bool121=!(($bool120=$p['hasattr'](other, '__iter__')) === null || $bool120 === false || $bool120 === 0 || $bool120 === '' ?
				false :
				(typeof $bool120=='object'?
					(typeof $bool120['__nonzero__']=='function'?
						$bool120['__nonzero__']() :
						(typeof $bool120['__len__']=='function'?
							($bool120['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool121 === false || $bool121 === 0 || $bool121 === '' ?
					false :
					(typeof $bool121=='object'?
						(typeof $bool121['__nonzero__']=='function'?
							$bool121['__nonzero__']() :
							(typeof $bool121['__len__']=='function'?
								($bool121['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter72_iter = $p['range']((($len62=data) === null?0:
					(typeof $len62['__array'] != 'undefined' ? $len62['__array']['length']:
						(typeof $len62['__len__'] == 'function'?$len62['__len__']():
							(typeof $len62['length'] != 'undefined'?$len62['length']:
								$p['len']($len62))))));
				if (typeof ($iter72_array = $iter72_iter['__array']) != 'undefined') {
					$iter72_type = 0;
				} else {
					$iter72_iter = $iter72_iter['__iter__']();
					$iter72_type = typeof ($iter72_array = $iter72_iter['__array']) != 'undefined'? 0 : (typeof $iter72_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter72_idx = 0;
				while (typeof ($iter72_nextval=($iter72_type?($iter72_type > 0?$iter72_iter.next(true,false):$p['wrapped_next']($iter72_iter)):$iter72_array[$iter72_idx++])) != 'undefined') {
					i = $iter72_nextval;
					data['__setitem__'](i, Math['floor']((typeof ($285=data)['__array'] != 'undefined'?
						((typeof $285['__array'][$286=i]) != 'undefined'?$285['__array'][$286]:
							$285['__getitem__']($286)):
							$285['__getitem__'](i))/other));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter73_iter = $p['range']((($len63=data) === null?0:
					(typeof $len63['__array'] != 'undefined' ? $len63['__array']['length']:
						(typeof $len63['__len__'] == 'function'?$len63['__len__']():
							(typeof $len63['length'] != 'undefined'?$len63['length']:
								$p['len']($len63))))));
				if (typeof ($iter73_array = $iter73_iter['__array']) != 'undefined') {
					$iter73_type = 0;
				} else {
					$iter73_iter = $iter73_iter['__iter__']();
					$iter73_type = typeof ($iter73_array = $iter73_iter['__array']) != 'undefined'? 0 : (typeof $iter73_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter73_idx = 0;
				while (typeof ($iter73_nextval=($iter73_type?($iter73_type > 0?$iter73_iter.next(true,false):$p['wrapped_next']($iter73_iter)):$iter73_array[$iter73_idx++])) != 'undefined') {
					i = $iter73_nextval;
					data['__setitem__'](i, Math['floor']((typeof ($287=data)['__array'] != 'undefined'?
						((typeof $287['__array'][$288=i]) != 'undefined'?$287['__array'][$288]:
							$287['__getitem__']($288)):
							$287['__getitem__'](i))/(typeof ($289=other_data)['__array'] != 'undefined'?
						((typeof $289['__array'][$290=i]) != 'undefined'?$289['__array'][$290]:
							$289['__getitem__']($290)):
							$289['__getitem__'](i))));
				}
			}
			return self;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__ifloordiv__'] = $method;
		$method = $pyjs__bind_method2('__imod__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $mod9,$mod7,$iter75_idx,$295,$294,$296,$291,$mod8,$293,other_data,data,$len65,$len64,$292,$iter75_type,$mod10,$iter74_array,$attr343,$attr344,$bool123,$bool122,$iter75_nextval,$iter75_iter,i,$iter74_type,$iter75_array,$iter74_iter,$iter74_idx,$iter74_nextval;
			data = self['_data'];
			if ((($bool123=!(($bool122=$p['hasattr'](other, '__iter__')) === null || $bool122 === false || $bool122 === 0 || $bool122 === '' ?
				false :
				(typeof $bool122=='object'?
					(typeof $bool122['__nonzero__']=='function'?
						$bool122['__nonzero__']() :
						(typeof $bool122['__len__']=='function'?
							($bool122['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool123 === false || $bool123 === 0 || $bool123 === '' ?
					false :
					(typeof $bool123=='object'?
						(typeof $bool123['__nonzero__']=='function'?
							$bool123['__nonzero__']() :
							(typeof $bool123['__len__']=='function'?
								($bool123['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter74_iter = $p['range']((($len64=data) === null?0:
					(typeof $len64['__array'] != 'undefined' ? $len64['__array']['length']:
						(typeof $len64['__len__'] == 'function'?$len64['__len__']():
							(typeof $len64['length'] != 'undefined'?$len64['length']:
								$p['len']($len64))))));
				if (typeof ($iter74_array = $iter74_iter['__array']) != 'undefined') {
					$iter74_type = 0;
				} else {
					$iter74_iter = $iter74_iter['__iter__']();
					$iter74_type = typeof ($iter74_array = $iter74_iter['__array']) != 'undefined'? 0 : (typeof $iter74_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter74_idx = 0;
				while (typeof ($iter74_nextval=($iter74_type?($iter74_type > 0?$iter74_iter.next(true,false):$p['wrapped_next']($iter74_iter)):$iter74_array[$iter74_idx++])) != 'undefined') {
					i = $iter74_nextval;
					data['__setitem__'](i, (($mod7=(typeof ($291=data)['__array'] != 'undefined'?
						((typeof $291['__array'][$292=i]) != 'undefined'?$291['__array'][$292]:
							$291['__getitem__']($292)):
							$291['__getitem__'](i)))!=null && ($mod8=other)!=null && typeof $mod7=='string'?
						$p['sprintf']($mod7,$mod8):
						(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7)));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter75_iter = $p['range']((($len65=data) === null?0:
					(typeof $len65['__array'] != 'undefined' ? $len65['__array']['length']:
						(typeof $len65['__len__'] == 'function'?$len65['__len__']():
							(typeof $len65['length'] != 'undefined'?$len65['length']:
								$p['len']($len65))))));
				if (typeof ($iter75_array = $iter75_iter['__array']) != 'undefined') {
					$iter75_type = 0;
				} else {
					$iter75_iter = $iter75_iter['__iter__']();
					$iter75_type = typeof ($iter75_array = $iter75_iter['__array']) != 'undefined'? 0 : (typeof $iter75_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter75_idx = 0;
				while (typeof ($iter75_nextval=($iter75_type?($iter75_type > 0?$iter75_iter.next(true,false):$p['wrapped_next']($iter75_iter)):$iter75_array[$iter75_idx++])) != 'undefined') {
					i = $iter75_nextval;
					data['__setitem__'](i, (($mod9=(typeof ($293=data)['__array'] != 'undefined'?
						((typeof $293['__array'][$294=i]) != 'undefined'?$293['__array'][$294]:
							$293['__getitem__']($294)):
							$293['__getitem__'](i)))!=null && ($mod10=(typeof ($295=other_data)['__array'] != 'undefined'?
						((typeof $295['__array'][$296=i]) != 'undefined'?$295['__array'][$296]:
							$295['__getitem__']($296)):
							$295['__getitem__'](i)))!=null && typeof $mod9=='string'?
						$p['sprintf']($mod9,$mod10):
						(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9)));
				}
			}
			return self;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__imod__'] = $method;
		$method = $pyjs__bind_method2('__ipow__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter76_nextval,$299,$298,$297,$bool125,other_data,$300,$len67,$len66,$302,$301,$iter77_idx,$iter76_iter,$iter77_iter,$attr345,$attr346,$iter77_array,$iter77_nextval,$bool124,data,i,$iter77_type,$iter76_array,$iter76_type,$iter76_idx;
			data = self['_data'];
			if ((($bool125=!(($bool124=$p['hasattr'](other, '__iter__')) === null || $bool124 === false || $bool124 === 0 || $bool124 === '' ?
				false :
				(typeof $bool124=='object'?
					(typeof $bool124['__nonzero__']=='function'?
						$bool124['__nonzero__']() :
						(typeof $bool124['__len__']=='function'?
							($bool124['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool125 === false || $bool125 === 0 || $bool125 === '' ?
					false :
					(typeof $bool125=='object'?
						(typeof $bool125['__nonzero__']=='function'?
							$bool125['__nonzero__']() :
							(typeof $bool125['__len__']=='function'?
								($bool125['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter76_iter = $p['range']((($len66=data) === null?0:
					(typeof $len66['__array'] != 'undefined' ? $len66['__array']['length']:
						(typeof $len66['__len__'] == 'function'?$len66['__len__']():
							(typeof $len66['length'] != 'undefined'?$len66['length']:
								$p['len']($len66))))));
				if (typeof ($iter76_array = $iter76_iter['__array']) != 'undefined') {
					$iter76_type = 0;
				} else {
					$iter76_iter = $iter76_iter['__iter__']();
					$iter76_type = typeof ($iter76_array = $iter76_iter['__array']) != 'undefined'? 0 : (typeof $iter76_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter76_idx = 0;
				while (typeof ($iter76_nextval=($iter76_type?($iter76_type > 0?$iter76_iter.next(true,false):$p['wrapped_next']($iter76_iter)):$iter76_array[$iter76_idx++])) != 'undefined') {
					i = $iter76_nextval;
					data['__setitem__'](i, Math['pow']((typeof ($297=data)['__array'] != 'undefined'?
						((typeof $297['__array'][$298=i]) != 'undefined'?$297['__array'][$298]:
							$297['__getitem__']($298)):
							$297['__getitem__'](i)),other));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter77_iter = $p['range']((($len67=data) === null?0:
					(typeof $len67['__array'] != 'undefined' ? $len67['__array']['length']:
						(typeof $len67['__len__'] == 'function'?$len67['__len__']():
							(typeof $len67['length'] != 'undefined'?$len67['length']:
								$p['len']($len67))))));
				if (typeof ($iter77_array = $iter77_iter['__array']) != 'undefined') {
					$iter77_type = 0;
				} else {
					$iter77_iter = $iter77_iter['__iter__']();
					$iter77_type = typeof ($iter77_array = $iter77_iter['__array']) != 'undefined'? 0 : (typeof $iter77_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter77_idx = 0;
				while (typeof ($iter77_nextval=($iter77_type?($iter77_type > 0?$iter77_iter.next(true,false):$p['wrapped_next']($iter77_iter)):$iter77_array[$iter77_idx++])) != 'undefined') {
					i = $iter77_nextval;
					data['__setitem__'](i, Math['pow']((typeof ($299=data)['__array'] != 'undefined'?
						((typeof $299['__array'][$300=i]) != 'undefined'?$299['__array'][$300]:
							$299['__getitem__']($300)):
							$299['__getitem__'](i)),(typeof ($301=other_data)['__array'] != 'undefined'?
						((typeof $301['__array'][$302=i]) != 'undefined'?$301['__array'][$302]:
							$301['__getitem__']($302)):
							$301['__getitem__'](i))));
				}
			}
			return self;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__ipow__'] = $method;
		$method = $pyjs__bind_method2('__lshift__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var ndarray_data,$iter79_idx,$iter79_type,$attr350,$iter78_nextval,$iter78_array,other_data,$len69,$len68,$iter78_iter,$303,$307,$306,$305,$304,$iter79_nextval,$308,$attr348,$attr349,$iter79_array,$bool127,$iter78_type,$attr347,$iter78_idx,$bool126,data,ndarray,i,$iter79_iter;
			ndarray = self['empty']();
			ndarray_data = ndarray['_data'];
			data = self['_data'];
			if ((($bool127=!(($bool126=$p['hasattr'](other, '__iter__')) === null || $bool126 === false || $bool126 === 0 || $bool126 === '' ?
				false :
				(typeof $bool126=='object'?
					(typeof $bool126['__nonzero__']=='function'?
						$bool126['__nonzero__']() :
						(typeof $bool126['__len__']=='function'?
							($bool126['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool127 === false || $bool127 === 0 || $bool127 === '' ?
					false :
					(typeof $bool127=='object'?
						(typeof $bool127['__nonzero__']=='function'?
							$bool127['__nonzero__']() :
							(typeof $bool127['__len__']=='function'?
								($bool127['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter78_iter = $p['range']((($len68=data) === null?0:
					(typeof $len68['__array'] != 'undefined' ? $len68['__array']['length']:
						(typeof $len68['__len__'] == 'function'?$len68['__len__']():
							(typeof $len68['length'] != 'undefined'?$len68['length']:
								$p['len']($len68))))));
				if (typeof ($iter78_array = $iter78_iter['__array']) != 'undefined') {
					$iter78_type = 0;
				} else {
					$iter78_iter = $iter78_iter['__iter__']();
					$iter78_type = typeof ($iter78_array = $iter78_iter['__array']) != 'undefined'? 0 : (typeof $iter78_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter78_idx = 0;
				while (typeof ($iter78_nextval=($iter78_type?($iter78_type > 0?$iter78_iter.next(true,false):$p['wrapped_next']($iter78_iter)):$iter78_array[$iter78_idx++])) != 'undefined') {
					i = $iter78_nextval;
					ndarray_data['__setitem__'](i, ((typeof ($303=data)['__array'] != 'undefined'?
						((typeof $303['__array'][$304=i]) != 'undefined'?$303['__array'][$304]:
							$303['__getitem__']($304)):
							$303['__getitem__'](i)))<<(other));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter79_iter = $p['range']((($len69=data) === null?0:
					(typeof $len69['__array'] != 'undefined' ? $len69['__array']['length']:
						(typeof $len69['__len__'] == 'function'?$len69['__len__']():
							(typeof $len69['length'] != 'undefined'?$len69['length']:
								$p['len']($len69))))));
				if (typeof ($iter79_array = $iter79_iter['__array']) != 'undefined') {
					$iter79_type = 0;
				} else {
					$iter79_iter = $iter79_iter['__iter__']();
					$iter79_type = typeof ($iter79_array = $iter79_iter['__array']) != 'undefined'? 0 : (typeof $iter79_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter79_idx = 0;
				while (typeof ($iter79_nextval=($iter79_type?($iter79_type > 0?$iter79_iter.next(true,false):$p['wrapped_next']($iter79_iter)):$iter79_array[$iter79_idx++])) != 'undefined') {
					i = $iter79_nextval;
					ndarray_data['__setitem__'](i, ((typeof ($305=data)['__array'] != 'undefined'?
						((typeof $305['__array'][$306=i]) != 'undefined'?$305['__array'][$306]:
							$305['__getitem__']($306)):
							$305['__getitem__'](i)))<<((typeof ($307=other_data)['__array'] != 'undefined'?
						((typeof $307['__array'][$308=i]) != 'undefined'?$307['__array'][$308]:
							$307['__getitem__']($308)):
							$307['__getitem__'](i))));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__lshift__'] = $method;
		$method = $pyjs__bind_method2('__rshift__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var ndarray_data,$iter81_array,$attr353,$attr352,$attr351,$attr354,$iter80_idx,other_data,$311,$iter81_idx,$iter80_type,$309,$iter81_iter,$iter80_iter,$iter81_type,$bool129,$bool128,$iter81_nextval,data,ndarray,$iter80_nextval,i,$len70,$len71,$310,$iter80_array,$312,$313,$314;
			ndarray = self['empty']();
			ndarray_data = ndarray['_data'];
			data = self['_data'];
			if ((($bool129=!(($bool128=$p['hasattr'](other, '__iter__')) === null || $bool128 === false || $bool128 === 0 || $bool128 === '' ?
				false :
				(typeof $bool128=='object'?
					(typeof $bool128['__nonzero__']=='function'?
						$bool128['__nonzero__']() :
						(typeof $bool128['__len__']=='function'?
							($bool128['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool129 === false || $bool129 === 0 || $bool129 === '' ?
					false :
					(typeof $bool129=='object'?
						(typeof $bool129['__nonzero__']=='function'?
							$bool129['__nonzero__']() :
							(typeof $bool129['__len__']=='function'?
								($bool129['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter80_iter = $p['range']((($len70=data) === null?0:
					(typeof $len70['__array'] != 'undefined' ? $len70['__array']['length']:
						(typeof $len70['__len__'] == 'function'?$len70['__len__']():
							(typeof $len70['length'] != 'undefined'?$len70['length']:
								$p['len']($len70))))));
				if (typeof ($iter80_array = $iter80_iter['__array']) != 'undefined') {
					$iter80_type = 0;
				} else {
					$iter80_iter = $iter80_iter['__iter__']();
					$iter80_type = typeof ($iter80_array = $iter80_iter['__array']) != 'undefined'? 0 : (typeof $iter80_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter80_idx = 0;
				while (typeof ($iter80_nextval=($iter80_type?($iter80_type > 0?$iter80_iter.next(true,false):$p['wrapped_next']($iter80_iter)):$iter80_array[$iter80_idx++])) != 'undefined') {
					i = $iter80_nextval;
					ndarray_data['__setitem__'](i, ((typeof ($309=data)['__array'] != 'undefined'?
						((typeof $309['__array'][$310=i]) != 'undefined'?$309['__array'][$310]:
							$309['__getitem__']($310)):
							$309['__getitem__'](i)))>>(other));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter81_iter = $p['range']((($len71=data) === null?0:
					(typeof $len71['__array'] != 'undefined' ? $len71['__array']['length']:
						(typeof $len71['__len__'] == 'function'?$len71['__len__']():
							(typeof $len71['length'] != 'undefined'?$len71['length']:
								$p['len']($len71))))));
				if (typeof ($iter81_array = $iter81_iter['__array']) != 'undefined') {
					$iter81_type = 0;
				} else {
					$iter81_iter = $iter81_iter['__iter__']();
					$iter81_type = typeof ($iter81_array = $iter81_iter['__array']) != 'undefined'? 0 : (typeof $iter81_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter81_idx = 0;
				while (typeof ($iter81_nextval=($iter81_type?($iter81_type > 0?$iter81_iter.next(true,false):$p['wrapped_next']($iter81_iter)):$iter81_array[$iter81_idx++])) != 'undefined') {
					i = $iter81_nextval;
					ndarray_data['__setitem__'](i, ((typeof ($311=data)['__array'] != 'undefined'?
						((typeof $311['__array'][$312=i]) != 'undefined'?$311['__array'][$312]:
							$311['__getitem__']($312)):
							$311['__getitem__'](i)))>>((typeof ($313=other_data)['__array'] != 'undefined'?
						((typeof $313['__array'][$314=i]) != 'undefined'?$313['__array'][$314]:
							$313['__getitem__']($314)):
							$313['__getitem__'](i))));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__rshift__'] = $method;
		$method = $pyjs__bind_method2('__and__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var ndarray_data,$attr358,$attr357,$attr356,$attr355,$iter82_idx,$iter82_nextval,$iter82_type,$bool130,$bool131,other_data,$320,$iter82_iter,data,ndarray,$iter83_array,$iter83_type,$iter83_iter,i,$len73,$iter82_array,$len72,$315,$316,$317,$318,$319,$iter83_idx,$iter83_nextval;
			ndarray = self['empty']();
			ndarray_data = ndarray['_data'];
			data = self['_data'];
			if ((($bool131=!(($bool130=$p['hasattr'](other, '__iter__')) === null || $bool130 === false || $bool130 === 0 || $bool130 === '' ?
				false :
				(typeof $bool130=='object'?
					(typeof $bool130['__nonzero__']=='function'?
						$bool130['__nonzero__']() :
						(typeof $bool130['__len__']=='function'?
							($bool130['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool131 === false || $bool131 === 0 || $bool131 === '' ?
					false :
					(typeof $bool131=='object'?
						(typeof $bool131['__nonzero__']=='function'?
							$bool131['__nonzero__']() :
							(typeof $bool131['__len__']=='function'?
								($bool131['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter82_iter = $p['range']((($len72=data) === null?0:
					(typeof $len72['__array'] != 'undefined' ? $len72['__array']['length']:
						(typeof $len72['__len__'] == 'function'?$len72['__len__']():
							(typeof $len72['length'] != 'undefined'?$len72['length']:
								$p['len']($len72))))));
				if (typeof ($iter82_array = $iter82_iter['__array']) != 'undefined') {
					$iter82_type = 0;
				} else {
					$iter82_iter = $iter82_iter['__iter__']();
					$iter82_type = typeof ($iter82_array = $iter82_iter['__array']) != 'undefined'? 0 : (typeof $iter82_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter82_idx = 0;
				while (typeof ($iter82_nextval=($iter82_type?($iter82_type > 0?$iter82_iter.next(true,false):$p['wrapped_next']($iter82_iter)):$iter82_array[$iter82_idx++])) != 'undefined') {
					i = $iter82_nextval;
					ndarray_data['__setitem__'](i, ((typeof ($315=data)['__array'] != 'undefined'?
						((typeof $315['__array'][$316=i]) != 'undefined'?$315['__array'][$316]:
							$315['__getitem__']($316)):
							$315['__getitem__'](i)))&(other));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter83_iter = $p['range']((($len73=data) === null?0:
					(typeof $len73['__array'] != 'undefined' ? $len73['__array']['length']:
						(typeof $len73['__len__'] == 'function'?$len73['__len__']():
							(typeof $len73['length'] != 'undefined'?$len73['length']:
								$p['len']($len73))))));
				if (typeof ($iter83_array = $iter83_iter['__array']) != 'undefined') {
					$iter83_type = 0;
				} else {
					$iter83_iter = $iter83_iter['__iter__']();
					$iter83_type = typeof ($iter83_array = $iter83_iter['__array']) != 'undefined'? 0 : (typeof $iter83_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter83_idx = 0;
				while (typeof ($iter83_nextval=($iter83_type?($iter83_type > 0?$iter83_iter.next(true,false):$p['wrapped_next']($iter83_iter)):$iter83_array[$iter83_idx++])) != 'undefined') {
					i = $iter83_nextval;
					ndarray_data['__setitem__'](i, ((typeof ($317=data)['__array'] != 'undefined'?
						((typeof $317['__array'][$318=i]) != 'undefined'?$317['__array'][$318]:
							$317['__getitem__']($318)):
							$317['__getitem__'](i)))&((typeof ($319=other_data)['__array'] != 'undefined'?
						((typeof $319['__array'][$320=i]) != 'undefined'?$319['__array'][$320]:
							$319['__getitem__']($320)):
							$319['__getitem__'](i))));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__and__'] = $method;
		$method = $pyjs__bind_method2('__or__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var ndarray_data,$attr359,$iter84_nextval,$iter84_iter,$iter85_type,$iter85_iter,$iter85_idx,$iter85_nextval,$bool132,other_data,$iter84_type,$iter84_idx,$321,$323,$322,$325,$324,$326,$bool133,$attr362,$attr360,$attr361,data,$iter84_array,ndarray,i,$iter85_array,$len74,$len75;
			ndarray = self['empty']();
			ndarray_data = ndarray['_data'];
			data = self['_data'];
			if ((($bool133=!(($bool132=$p['hasattr'](other, '__iter__')) === null || $bool132 === false || $bool132 === 0 || $bool132 === '' ?
				false :
				(typeof $bool132=='object'?
					(typeof $bool132['__nonzero__']=='function'?
						$bool132['__nonzero__']() :
						(typeof $bool132['__len__']=='function'?
							($bool132['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool133 === false || $bool133 === 0 || $bool133 === '' ?
					false :
					(typeof $bool133=='object'?
						(typeof $bool133['__nonzero__']=='function'?
							$bool133['__nonzero__']() :
							(typeof $bool133['__len__']=='function'?
								($bool133['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter84_iter = $p['range']((($len74=data) === null?0:
					(typeof $len74['__array'] != 'undefined' ? $len74['__array']['length']:
						(typeof $len74['__len__'] == 'function'?$len74['__len__']():
							(typeof $len74['length'] != 'undefined'?$len74['length']:
								$p['len']($len74))))));
				if (typeof ($iter84_array = $iter84_iter['__array']) != 'undefined') {
					$iter84_type = 0;
				} else {
					$iter84_iter = $iter84_iter['__iter__']();
					$iter84_type = typeof ($iter84_array = $iter84_iter['__array']) != 'undefined'? 0 : (typeof $iter84_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter84_idx = 0;
				while (typeof ($iter84_nextval=($iter84_type?($iter84_type > 0?$iter84_iter.next(true,false):$p['wrapped_next']($iter84_iter)):$iter84_array[$iter84_idx++])) != 'undefined') {
					i = $iter84_nextval;
					ndarray_data['__setitem__'](i, ((typeof ($321=data)['__array'] != 'undefined'?
						((typeof $321['__array'][$322=i]) != 'undefined'?$321['__array'][$322]:
							$321['__getitem__']($322)):
							$321['__getitem__'](i)))|(other));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter85_iter = $p['range']((($len75=data) === null?0:
					(typeof $len75['__array'] != 'undefined' ? $len75['__array']['length']:
						(typeof $len75['__len__'] == 'function'?$len75['__len__']():
							(typeof $len75['length'] != 'undefined'?$len75['length']:
								$p['len']($len75))))));
				if (typeof ($iter85_array = $iter85_iter['__array']) != 'undefined') {
					$iter85_type = 0;
				} else {
					$iter85_iter = $iter85_iter['__iter__']();
					$iter85_type = typeof ($iter85_array = $iter85_iter['__array']) != 'undefined'? 0 : (typeof $iter85_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter85_idx = 0;
				while (typeof ($iter85_nextval=($iter85_type?($iter85_type > 0?$iter85_iter.next(true,false):$p['wrapped_next']($iter85_iter)):$iter85_array[$iter85_idx++])) != 'undefined') {
					i = $iter85_nextval;
					ndarray_data['__setitem__'](i, ((typeof ($323=data)['__array'] != 'undefined'?
						((typeof $323['__array'][$324=i]) != 'undefined'?$323['__array'][$324]:
							$323['__getitem__']($324)):
							$323['__getitem__'](i)))|((typeof ($325=other_data)['__array'] != 'undefined'?
						((typeof $325['__array'][$326=i]) != 'undefined'?$325['__array'][$326]:
							$325['__getitem__']($326)):
							$325['__getitem__'](i))));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__or__'] = $method;
		$method = $pyjs__bind_method2('__xor__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var ndarray_data,$iter86_type,$iter87_array,$iter87_type,$bool134,$bool135,other_data,$iter87_nextval,$329,$328,$iter87_iter,$iter87_idx,$327,$attr366,$attr364,$attr365,$attr363,$iter86_idx,data,ndarray,i,$iter86_iter,$len76,$len77,$iter86_array,$iter86_nextval,$332,$330,$331;
			ndarray = self['empty']();
			ndarray_data = ndarray['_data'];
			data = self['_data'];
			if ((($bool135=!(($bool134=$p['hasattr'](other, '__iter__')) === null || $bool134 === false || $bool134 === 0 || $bool134 === '' ?
				false :
				(typeof $bool134=='object'?
					(typeof $bool134['__nonzero__']=='function'?
						$bool134['__nonzero__']() :
						(typeof $bool134['__len__']=='function'?
							($bool134['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool135 === false || $bool135 === 0 || $bool135 === '' ?
					false :
					(typeof $bool135=='object'?
						(typeof $bool135['__nonzero__']=='function'?
							$bool135['__nonzero__']() :
							(typeof $bool135['__len__']=='function'?
								($bool135['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter86_iter = $p['range']((($len76=data) === null?0:
					(typeof $len76['__array'] != 'undefined' ? $len76['__array']['length']:
						(typeof $len76['__len__'] == 'function'?$len76['__len__']():
							(typeof $len76['length'] != 'undefined'?$len76['length']:
								$p['len']($len76))))));
				if (typeof ($iter86_array = $iter86_iter['__array']) != 'undefined') {
					$iter86_type = 0;
				} else {
					$iter86_iter = $iter86_iter['__iter__']();
					$iter86_type = typeof ($iter86_array = $iter86_iter['__array']) != 'undefined'? 0 : (typeof $iter86_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter86_idx = 0;
				while (typeof ($iter86_nextval=($iter86_type?($iter86_type > 0?$iter86_iter.next(true,false):$p['wrapped_next']($iter86_iter)):$iter86_array[$iter86_idx++])) != 'undefined') {
					i = $iter86_nextval;
					ndarray_data['__setitem__'](i, ((typeof ($327=data)['__array'] != 'undefined'?
						((typeof $327['__array'][$328=i]) != 'undefined'?$327['__array'][$328]:
							$327['__getitem__']($328)):
							$327['__getitem__'](i)))^(other));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter87_iter = $p['range']((($len77=data) === null?0:
					(typeof $len77['__array'] != 'undefined' ? $len77['__array']['length']:
						(typeof $len77['__len__'] == 'function'?$len77['__len__']():
							(typeof $len77['length'] != 'undefined'?$len77['length']:
								$p['len']($len77))))));
				if (typeof ($iter87_array = $iter87_iter['__array']) != 'undefined') {
					$iter87_type = 0;
				} else {
					$iter87_iter = $iter87_iter['__iter__']();
					$iter87_type = typeof ($iter87_array = $iter87_iter['__array']) != 'undefined'? 0 : (typeof $iter87_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter87_idx = 0;
				while (typeof ($iter87_nextval=($iter87_type?($iter87_type > 0?$iter87_iter.next(true,false):$p['wrapped_next']($iter87_iter)):$iter87_array[$iter87_idx++])) != 'undefined') {
					i = $iter87_nextval;
					ndarray_data['__setitem__'](i, ((typeof ($329=data)['__array'] != 'undefined'?
						((typeof $329['__array'][$330=i]) != 'undefined'?$329['__array'][$330]:
							$329['__getitem__']($330)):
							$329['__getitem__'](i)))^((typeof ($331=other_data)['__array'] != 'undefined'?
						((typeof $331['__array'][$332=i]) != 'undefined'?$331['__array'][$332]:
							$331['__getitem__']($332)):
							$331['__getitem__'](i))));
				}
			}
			return ndarray;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__xor__'] = $method;
		$method = $pyjs__bind_method2('__ilshift__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $iter88_iter,$bool136,$bool137,other_data,$iter88_idx,$iter89_nextval,$iter89_array,$iter89_iter,$attr368,$attr367,$336,$iter88_nextval,data,$iter88_type,$len78,$len79,i,$iter88_array,$iter89_type,$338,$iter89_idx,$337,$334,$335,$333;
			data = self['_data'];
			if ((($bool137=!(($bool136=$p['hasattr'](other, '__iter__')) === null || $bool136 === false || $bool136 === 0 || $bool136 === '' ?
				false :
				(typeof $bool136=='object'?
					(typeof $bool136['__nonzero__']=='function'?
						$bool136['__nonzero__']() :
						(typeof $bool136['__len__']=='function'?
							($bool136['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool137 === false || $bool137 === 0 || $bool137 === '' ?
					false :
					(typeof $bool137=='object'?
						(typeof $bool137['__nonzero__']=='function'?
							$bool137['__nonzero__']() :
							(typeof $bool137['__len__']=='function'?
								($bool137['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter88_iter = $p['range']((($len78=data) === null?0:
					(typeof $len78['__array'] != 'undefined' ? $len78['__array']['length']:
						(typeof $len78['__len__'] == 'function'?$len78['__len__']():
							(typeof $len78['length'] != 'undefined'?$len78['length']:
								$p['len']($len78))))));
				if (typeof ($iter88_array = $iter88_iter['__array']) != 'undefined') {
					$iter88_type = 0;
				} else {
					$iter88_iter = $iter88_iter['__iter__']();
					$iter88_type = typeof ($iter88_array = $iter88_iter['__array']) != 'undefined'? 0 : (typeof $iter88_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter88_idx = 0;
				while (typeof ($iter88_nextval=($iter88_type?($iter88_type > 0?$iter88_iter.next(true,false):$p['wrapped_next']($iter88_iter)):$iter88_array[$iter88_idx++])) != 'undefined') {
					i = $iter88_nextval;
					data['__setitem__'](i, ((typeof ($333=data)['__array'] != 'undefined'?
						((typeof $333['__array'][$334=i]) != 'undefined'?$333['__array'][$334]:
							$333['__getitem__']($334)):
							$333['__getitem__'](i)))<<(other));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter89_iter = $p['range']((($len79=data) === null?0:
					(typeof $len79['__array'] != 'undefined' ? $len79['__array']['length']:
						(typeof $len79['__len__'] == 'function'?$len79['__len__']():
							(typeof $len79['length'] != 'undefined'?$len79['length']:
								$p['len']($len79))))));
				if (typeof ($iter89_array = $iter89_iter['__array']) != 'undefined') {
					$iter89_type = 0;
				} else {
					$iter89_iter = $iter89_iter['__iter__']();
					$iter89_type = typeof ($iter89_array = $iter89_iter['__array']) != 'undefined'? 0 : (typeof $iter89_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter89_idx = 0;
				while (typeof ($iter89_nextval=($iter89_type?($iter89_type > 0?$iter89_iter.next(true,false):$p['wrapped_next']($iter89_iter)):$iter89_array[$iter89_idx++])) != 'undefined') {
					i = $iter89_nextval;
					data['__setitem__'](i, ((typeof ($335=data)['__array'] != 'undefined'?
						((typeof $335['__array'][$336=i]) != 'undefined'?$335['__array'][$336]:
							$335['__getitem__']($336)):
							$335['__getitem__'](i)))<<((typeof ($337=other_data)['__array'] != 'undefined'?
						((typeof $337['__array'][$338=i]) != 'undefined'?$337['__array'][$338]:
							$337['__getitem__']($338)):
							$337['__getitem__'](i))));
				}
			}
			return self;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__ilshift__'] = $method;
		$method = $pyjs__bind_method2('__irshift__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr370,$len81,$len80,$iter91_iter,$iter91_nextval,$bool138,$bool139,$iter90_nextval,other_data,$iter90_type,$iter90_iter,$iter91_array,$iter91_idx,$iter90_array,$attr369,$344,$343,$342,$341,$340,$iter91_type,data,i,$iter90_idx,$339;
			data = self['_data'];
			if ((($bool139=!(($bool138=$p['hasattr'](other, '__iter__')) === null || $bool138 === false || $bool138 === 0 || $bool138 === '' ?
				false :
				(typeof $bool138=='object'?
					(typeof $bool138['__nonzero__']=='function'?
						$bool138['__nonzero__']() :
						(typeof $bool138['__len__']=='function'?
							($bool138['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool139 === false || $bool139 === 0 || $bool139 === '' ?
					false :
					(typeof $bool139=='object'?
						(typeof $bool139['__nonzero__']=='function'?
							$bool139['__nonzero__']() :
							(typeof $bool139['__len__']=='function'?
								($bool139['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter90_iter = $p['range']((($len80=data) === null?0:
					(typeof $len80['__array'] != 'undefined' ? $len80['__array']['length']:
						(typeof $len80['__len__'] == 'function'?$len80['__len__']():
							(typeof $len80['length'] != 'undefined'?$len80['length']:
								$p['len']($len80))))));
				if (typeof ($iter90_array = $iter90_iter['__array']) != 'undefined') {
					$iter90_type = 0;
				} else {
					$iter90_iter = $iter90_iter['__iter__']();
					$iter90_type = typeof ($iter90_array = $iter90_iter['__array']) != 'undefined'? 0 : (typeof $iter90_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter90_idx = 0;
				while (typeof ($iter90_nextval=($iter90_type?($iter90_type > 0?$iter90_iter.next(true,false):$p['wrapped_next']($iter90_iter)):$iter90_array[$iter90_idx++])) != 'undefined') {
					i = $iter90_nextval;
					data['__setitem__'](i, ((typeof ($339=data)['__array'] != 'undefined'?
						((typeof $339['__array'][$340=i]) != 'undefined'?$339['__array'][$340]:
							$339['__getitem__']($340)):
							$339['__getitem__'](i)))>>(other));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter91_iter = $p['range']((($len81=data) === null?0:
					(typeof $len81['__array'] != 'undefined' ? $len81['__array']['length']:
						(typeof $len81['__len__'] == 'function'?$len81['__len__']():
							(typeof $len81['length'] != 'undefined'?$len81['length']:
								$p['len']($len81))))));
				if (typeof ($iter91_array = $iter91_iter['__array']) != 'undefined') {
					$iter91_type = 0;
				} else {
					$iter91_iter = $iter91_iter['__iter__']();
					$iter91_type = typeof ($iter91_array = $iter91_iter['__array']) != 'undefined'? 0 : (typeof $iter91_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter91_idx = 0;
				while (typeof ($iter91_nextval=($iter91_type?($iter91_type > 0?$iter91_iter.next(true,false):$p['wrapped_next']($iter91_iter)):$iter91_array[$iter91_idx++])) != 'undefined') {
					i = $iter91_nextval;
					data['__setitem__'](i, ((typeof ($341=data)['__array'] != 'undefined'?
						((typeof $341['__array'][$342=i]) != 'undefined'?$341['__array'][$342]:
							$341['__getitem__']($342)):
							$341['__getitem__'](i)))>>((typeof ($343=other_data)['__array'] != 'undefined'?
						((typeof $343['__array'][$344=i]) != 'undefined'?$343['__array'][$344]:
							$343['__getitem__']($344)):
							$343['__getitem__'](i))));
				}
			}
			return self;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__irshift__'] = $method;
		$method = $pyjs__bind_method2('__iand__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr371,$attr372,$len83,$len82,$350,$iter93_iter,other_data,$iter92_idx,data,$iter92_type,$iter92_nextval,$iter92_iter,$iter93_type,$349,$348,$347,$346,$345,$iter93_array,$bool141,$bool140,$iter93_nextval,$iter92_array,i,$iter93_idx;
			data = self['_data'];
			if ((($bool141=!(($bool140=$p['hasattr'](other, '__iter__')) === null || $bool140 === false || $bool140 === 0 || $bool140 === '' ?
				false :
				(typeof $bool140=='object'?
					(typeof $bool140['__nonzero__']=='function'?
						$bool140['__nonzero__']() :
						(typeof $bool140['__len__']=='function'?
							($bool140['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool141 === false || $bool141 === 0 || $bool141 === '' ?
					false :
					(typeof $bool141=='object'?
						(typeof $bool141['__nonzero__']=='function'?
							$bool141['__nonzero__']() :
							(typeof $bool141['__len__']=='function'?
								($bool141['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter92_iter = $p['range']((($len82=data) === null?0:
					(typeof $len82['__array'] != 'undefined' ? $len82['__array']['length']:
						(typeof $len82['__len__'] == 'function'?$len82['__len__']():
							(typeof $len82['length'] != 'undefined'?$len82['length']:
								$p['len']($len82))))));
				if (typeof ($iter92_array = $iter92_iter['__array']) != 'undefined') {
					$iter92_type = 0;
				} else {
					$iter92_iter = $iter92_iter['__iter__']();
					$iter92_type = typeof ($iter92_array = $iter92_iter['__array']) != 'undefined'? 0 : (typeof $iter92_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter92_idx = 0;
				while (typeof ($iter92_nextval=($iter92_type?($iter92_type > 0?$iter92_iter.next(true,false):$p['wrapped_next']($iter92_iter)):$iter92_array[$iter92_idx++])) != 'undefined') {
					i = $iter92_nextval;
					data['__setitem__'](i, ((typeof ($345=data)['__array'] != 'undefined'?
						((typeof $345['__array'][$346=i]) != 'undefined'?$345['__array'][$346]:
							$345['__getitem__']($346)):
							$345['__getitem__'](i)))&(other));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter93_iter = $p['range']((($len83=data) === null?0:
					(typeof $len83['__array'] != 'undefined' ? $len83['__array']['length']:
						(typeof $len83['__len__'] == 'function'?$len83['__len__']():
							(typeof $len83['length'] != 'undefined'?$len83['length']:
								$p['len']($len83))))));
				if (typeof ($iter93_array = $iter93_iter['__array']) != 'undefined') {
					$iter93_type = 0;
				} else {
					$iter93_iter = $iter93_iter['__iter__']();
					$iter93_type = typeof ($iter93_array = $iter93_iter['__array']) != 'undefined'? 0 : (typeof $iter93_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter93_idx = 0;
				while (typeof ($iter93_nextval=($iter93_type?($iter93_type > 0?$iter93_iter.next(true,false):$p['wrapped_next']($iter93_iter)):$iter93_array[$iter93_idx++])) != 'undefined') {
					i = $iter93_nextval;
					data['__setitem__'](i, ((typeof ($347=data)['__array'] != 'undefined'?
						((typeof $347['__array'][$348=i]) != 'undefined'?$347['__array'][$348]:
							$347['__getitem__']($348)):
							$347['__getitem__'](i)))&((typeof ($349=other_data)['__array'] != 'undefined'?
						((typeof $349['__array'][$350=i]) != 'undefined'?$349['__array'][$350]:
							$349['__getitem__']($350)):
							$349['__getitem__'](i))));
				}
			}
			return self;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__iand__'] = $method;
		$method = $pyjs__bind_method2('__ior__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr373,$iter95_array,$attr374,$iter94_idx,$354,$355,$356,$351,$352,$353,$len84,$iter94_nextval,$iter94_array,other_data,$iter95_idx,$iter94_iter,$iter94_type,$iter95_iter,$len85,$iter95_nextval,$bool143,$bool142,data,$iter95_type,i;
			data = self['_data'];
			if ((($bool143=!(($bool142=$p['hasattr'](other, '__iter__')) === null || $bool142 === false || $bool142 === 0 || $bool142 === '' ?
				false :
				(typeof $bool142=='object'?
					(typeof $bool142['__nonzero__']=='function'?
						$bool142['__nonzero__']() :
						(typeof $bool142['__len__']=='function'?
							($bool142['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool143 === false || $bool143 === 0 || $bool143 === '' ?
					false :
					(typeof $bool143=='object'?
						(typeof $bool143['__nonzero__']=='function'?
							$bool143['__nonzero__']() :
							(typeof $bool143['__len__']=='function'?
								($bool143['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter94_iter = $p['range']((($len84=data) === null?0:
					(typeof $len84['__array'] != 'undefined' ? $len84['__array']['length']:
						(typeof $len84['__len__'] == 'function'?$len84['__len__']():
							(typeof $len84['length'] != 'undefined'?$len84['length']:
								$p['len']($len84))))));
				if (typeof ($iter94_array = $iter94_iter['__array']) != 'undefined') {
					$iter94_type = 0;
				} else {
					$iter94_iter = $iter94_iter['__iter__']();
					$iter94_type = typeof ($iter94_array = $iter94_iter['__array']) != 'undefined'? 0 : (typeof $iter94_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter94_idx = 0;
				while (typeof ($iter94_nextval=($iter94_type?($iter94_type > 0?$iter94_iter.next(true,false):$p['wrapped_next']($iter94_iter)):$iter94_array[$iter94_idx++])) != 'undefined') {
					i = $iter94_nextval;
					data['__setitem__'](i, ((typeof ($351=data)['__array'] != 'undefined'?
						((typeof $351['__array'][$352=i]) != 'undefined'?$351['__array'][$352]:
							$351['__getitem__']($352)):
							$351['__getitem__'](i)))|(other));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter95_iter = $p['range']((($len85=data) === null?0:
					(typeof $len85['__array'] != 'undefined' ? $len85['__array']['length']:
						(typeof $len85['__len__'] == 'function'?$len85['__len__']():
							(typeof $len85['length'] != 'undefined'?$len85['length']:
								$p['len']($len85))))));
				if (typeof ($iter95_array = $iter95_iter['__array']) != 'undefined') {
					$iter95_type = 0;
				} else {
					$iter95_iter = $iter95_iter['__iter__']();
					$iter95_type = typeof ($iter95_array = $iter95_iter['__array']) != 'undefined'? 0 : (typeof $iter95_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter95_idx = 0;
				while (typeof ($iter95_nextval=($iter95_type?($iter95_type > 0?$iter95_iter.next(true,false):$p['wrapped_next']($iter95_iter)):$iter95_array[$iter95_idx++])) != 'undefined') {
					i = $iter95_nextval;
					data['__setitem__'](i, ((typeof ($353=data)['__array'] != 'undefined'?
						((typeof $353['__array'][$354=i]) != 'undefined'?$353['__array'][$354]:
							$353['__getitem__']($354)):
							$353['__getitem__'](i)))|((typeof ($355=other_data)['__array'] != 'undefined'?
						((typeof $355['__array'][$356=i]) != 'undefined'?$355['__array'][$356]:
							$355['__getitem__']($356)):
							$355['__getitem__'](i))));
				}
			}
			return self;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__ior__'] = $method;
		$method = $pyjs__bind_method2('__ixor__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $len87,$len86,$attr375,$359,$attr376,$iter96_iter,$357,$iter97_nextval,$358,data,other_data,$iter97_type,$iter97_array,$iter96_type,$361,$360,$362,$iter96_idx,$iter97_iter,$bool145,$bool144,$iter97_idx,i,$iter96_nextval,$iter96_array;
			data = self['_data'];
			if ((($bool145=!(($bool144=$p['hasattr'](other, '__iter__')) === null || $bool144 === false || $bool144 === 0 || $bool144 === '' ?
				false :
				(typeof $bool144=='object'?
					(typeof $bool144['__nonzero__']=='function'?
						$bool144['__nonzero__']() :
						(typeof $bool144['__len__']=='function'?
							($bool144['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool145 === false || $bool145 === 0 || $bool145 === '' ?
					false :
					(typeof $bool145=='object'?
						(typeof $bool145['__nonzero__']=='function'?
							$bool145['__nonzero__']() :
							(typeof $bool145['__len__']=='function'?
								($bool145['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter96_iter = $p['range']((($len86=data) === null?0:
					(typeof $len86['__array'] != 'undefined' ? $len86['__array']['length']:
						(typeof $len86['__len__'] == 'function'?$len86['__len__']():
							(typeof $len86['length'] != 'undefined'?$len86['length']:
								$p['len']($len86))))));
				if (typeof ($iter96_array = $iter96_iter['__array']) != 'undefined') {
					$iter96_type = 0;
				} else {
					$iter96_iter = $iter96_iter['__iter__']();
					$iter96_type = typeof ($iter96_array = $iter96_iter['__array']) != 'undefined'? 0 : (typeof $iter96_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter96_idx = 0;
				while (typeof ($iter96_nextval=($iter96_type?($iter96_type > 0?$iter96_iter.next(true,false):$p['wrapped_next']($iter96_iter)):$iter96_array[$iter96_idx++])) != 'undefined') {
					i = $iter96_nextval;
					data['__setitem__'](i, ((typeof ($357=data)['__array'] != 'undefined'?
						((typeof $357['__array'][$358=i]) != 'undefined'?$357['__array'][$358]:
							$357['__getitem__']($358)):
							$357['__getitem__'](i)))^(other));
				}
			}
			else {
				other_data = self['_get_data'](other);
				$iter97_iter = $p['range']((($len87=data) === null?0:
					(typeof $len87['__array'] != 'undefined' ? $len87['__array']['length']:
						(typeof $len87['__len__'] == 'function'?$len87['__len__']():
							(typeof $len87['length'] != 'undefined'?$len87['length']:
								$p['len']($len87))))));
				if (typeof ($iter97_array = $iter97_iter['__array']) != 'undefined') {
					$iter97_type = 0;
				} else {
					$iter97_iter = $iter97_iter['__iter__']();
					$iter97_type = typeof ($iter97_array = $iter97_iter['__array']) != 'undefined'? 0 : (typeof $iter97_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter97_idx = 0;
				while (typeof ($iter97_nextval=($iter97_type?($iter97_type > 0?$iter97_iter.next(true,false):$p['wrapped_next']($iter97_iter)):$iter97_array[$iter97_idx++])) != 'undefined') {
					i = $iter97_nextval;
					data['__setitem__'](i, ((typeof ($359=data)['__array'] != 'undefined'?
						((typeof $359['__array'][$360=i]) != 'undefined'?$359['__array'][$360]:
							$359['__getitem__']($360)):
							$359['__getitem__'](i)))^((typeof ($361=other_data)['__array'] != 'undefined'?
						((typeof $361['__array'][$362=i]) != 'undefined'?$361['__array'][$362]:
							$361['__getitem__']($362)):
							$361['__getitem__'](i))));
				}
			}
			return self;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__ixor__'] = $method;
		$method = $pyjs__bind_method2('__invert__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var ndarray_data,$iter98_nextval,$attr377,$364,$attr379,$attr378,$attr380,$iter98_array,$len88,i,$363,$iter98_type,$iter98_iter,data,$iter98_idx,ndarray;
			ndarray = self['empty']();
			ndarray_data = ndarray['_data'];
			data = self['_data'];
			$iter98_iter = $p['range']((($len88=data) === null?0:
				(typeof $len88['__array'] != 'undefined' ? $len88['__array']['length']:
					(typeof $len88['__len__'] == 'function'?$len88['__len__']():
						(typeof $len88['length'] != 'undefined'?$len88['length']:
							$p['len']($len88))))));
			if (typeof ($iter98_array = $iter98_iter['__array']) != 'undefined') {
				$iter98_type = 0;
			} else {
				$iter98_iter = $iter98_iter['__iter__']();
				$iter98_type = typeof ($iter98_array = $iter98_iter['__array']) != 'undefined'? 0 : (typeof $iter98_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter98_idx = 0;
			while (typeof ($iter98_nextval=($iter98_type?($iter98_type > 0?$iter98_iter.next(true,false):$p['wrapped_next']($iter98_iter)):$iter98_array[$iter98_idx++])) != 'undefined') {
				i = $iter98_nextval;
				ndarray_data['__setitem__'](i, ~((typeof ($363=data)['__array'] != 'undefined'?
					((typeof $363['__array'][$364=i]) != 'undefined'?$363['__array'][$364]:
						$363['__getitem__']($364)):
						$363['__getitem__'](i))));
			}
			return ndarray;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__invert__'] = $method;
		$method = $pyjs__bind_method2('_get_data', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr390,$attr388,$attr389,$attr384,$attr385,$attr387,$attr381,$attr382,$attr383,$bool149,$bool148,$eq43,$eq44,$attr386,$bool147,$bool146;
			if ((($bool147=!(($bool146=$p['isinstance'](other, $m['Ndarray'])) === null || $bool146 === false || $bool146 === 0 || $bool146 === '' ?
				false :
				(typeof $bool146=='object'?
					(typeof $bool146['__nonzero__']=='function'?
						$bool146['__nonzero__']() :
						(typeof $bool146['__len__']=='function'?
							($bool146['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool147 === false || $bool147 === 0 || $bool147 === '' ?
					false :
					(typeof $bool147=='object'?
						(typeof $bool147['__nonzero__']=='function'?
							$bool147['__nonzero__']() :
							(typeof $bool147['__len__']=='function'?
								($bool147['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool148=$p['isinstance'](other, $p['list'])) === null || $bool148 === false || $bool148 === 0 || $bool148 === '' ?
						false :
						(typeof $bool148=='object'?
							(typeof $bool148['__nonzero__']=='function'?
								$bool148['__nonzero__']() :
								(typeof $bool148['__len__']=='function'?
									($bool148['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					other = $m['Ndarray'](other, self['_dtype']);
				}
				else {
					other = $m['Ndarray']($p['list'](other), self['_dtype']);
				}
			}
			if ((($bool149=!(($eq43=self['_shape'])===($eq44=other['_shape'])&&$eq43===null?true:
				($eq43===null?false:($eq44===null?false:
					((typeof $eq43=='object'||typeof $eq43=='function')&&typeof $eq43['__cmp__']=='function'?$eq43['__cmp__']($eq44) === 0:
						((typeof $eq44=='object'||typeof $eq44=='function')&&typeof $eq44['__cmp__']=='function'?$eq44['__cmp__']($eq43) === 0:
							$eq43==$eq44)))))) === null || $bool149 === false || $bool149 === 0 || $bool149 === '' ?
					false :
					(typeof $bool149=='object'?
						(typeof $bool149['__nonzero__']=='function'?
							$bool149['__nonzero__']() :
							(typeof $bool149['__len__']=='function'?
								($bool149['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($p['TypeError']('array shapes are not compatible'));
			}
			return other['_data'];
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['_get_data'] = $method;
		$method = $pyjs__bind_method2('_get_array', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool152,$bool150,$bool151,$attr394,$attr393,$attr392,$attr391;
			if ((($bool151=!(($bool150=$p['isinstance'](other, $m['Ndarray'])) === null || $bool150 === false || $bool150 === 0 || $bool150 === '' ?
				false :
				(typeof $bool150=='object'?
					(typeof $bool150['__nonzero__']=='function'?
						$bool150['__nonzero__']() :
						(typeof $bool150['__len__']=='function'?
							($bool150['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool151 === false || $bool151 === 0 || $bool151 === '' ?
					false :
					(typeof $bool151=='object'?
						(typeof $bool151['__nonzero__']=='function'?
							$bool151['__nonzero__']() :
							(typeof $bool151['__len__']=='function'?
								($bool151['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool152=$p['isinstance'](other, $p['list'])) === null || $bool152 === false || $bool152 === 0 || $bool152 === '' ?
						false :
						(typeof $bool152=='object'?
							(typeof $bool152['__nonzero__']=='function'?
								$bool152['__nonzero__']() :
								(typeof $bool152['__len__']=='function'?
									($bool152['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					other = $m['Ndarray'](other, self['_dtype']);
				}
				else {
					other = $m['Ndarray']($p['list'](other), self['_dtype']);
				}
			}
			return other;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['_get_array'] = $method;
		$method = $pyjs__bind_method2('op', function(operator, other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				operator = arguments[1];
				other = arguments[2];
			}

			return $p['getattr'](self, (('__')+(operator))+('__'))(other);
		}
	, 1, [null,null,['self'],['operator'],['other']]);
		$cls_definition['op'] = $method;
		$method = $pyjs__bind_method2('cmp', function(operator, other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				operator = arguments[1];
				other = arguments[2];
			}

			return $p['getattr'](self, (('__')+(operator))+('__'))(other);
		}
	, 1, [null,null,['self'],['operator'],['other']]);
		$cls_definition['cmp'] = $method;
		$method = $pyjs__bind_method2('matmul', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			return self['__matmul__'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['matmul'] = $method;
		$method = $pyjs__bind_method2('reshape', function(dim) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				dim = arguments[1];
			}
			var $iter101_array,$iter101_iter,array,$iter99_idx,size,$iter100_iter,$bool153,$iter99_iter,$iter100_idx,$iter100_nextval,$iter99_array,subarray,$iter99_nextval,$iter100_type,$iter101_idx,$iter101_nextval,$iter99_type,$iter101_type,array_size,i,$eq46,$eq45,indices,$iter100_array;
			size = 1;
			$iter99_iter = dim;
			if (typeof ($iter99_array = $iter99_iter['__array']) != 'undefined') {
				$iter99_type = 0;
			} else {
				$iter99_iter = $iter99_iter['__iter__']();
				$iter99_type = typeof ($iter99_array = $iter99_iter['__array']) != 'undefined'? 0 : (typeof $iter99_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter99_idx = 0;
			while (typeof ($iter99_nextval=($iter99_type?($iter99_type > 0?$iter99_iter.next(true,false):$p['wrapped_next']($iter99_iter)):$iter99_array[$iter99_idx++])) != 'undefined') {
				i = $iter99_nextval;
				size *= i;
			}
			array_size = 1;
			$iter100_iter = self['_shape'];
			if (typeof ($iter100_array = $iter100_iter['__array']) != 'undefined') {
				$iter100_type = 0;
			} else {
				$iter100_iter = $iter100_iter['__iter__']();
				$iter100_type = typeof ($iter100_array = $iter100_iter['__array']) != 'undefined'? 0 : (typeof $iter100_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter100_idx = 0;
			while (typeof ($iter100_nextval=($iter100_type?($iter100_type > 0?$iter100_iter.next(true,false):$p['wrapped_next']($iter100_iter)):$iter100_array[$iter100_idx++])) != 'undefined') {
				i = $iter100_nextval;
				array_size *= i;
			}
			if ((($bool153=!(($eq45=size)===($eq46=array_size)&&$eq45===null?true:
				($eq45===null?false:($eq46===null?false:
					((typeof $eq45=='object'||typeof $eq45=='function')&&typeof $eq45['__cmp__']=='function'?$eq45['__cmp__']($eq46) === 0:
						((typeof $eq46=='object'||typeof $eq46=='function')&&typeof $eq46['__cmp__']=='function'?$eq46['__cmp__']($eq45) === 0:
							$eq45==$eq46)))))) === null || $bool153 === false || $bool153 === 0 || $bool153 === '' ?
					false :
					(typeof $bool153=='object'?
						(typeof $bool153['__nonzero__']=='function'?
							$bool153['__nonzero__']() :
							(typeof $bool153['__len__']=='function'?
								($bool153['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($p['TypeError']('array size cannot change'));
			}
			subarray = self['_data']['subarray'](0);
			array = $m['Ndarray'](subarray);
			array['_shape'] = dim;
			indices = $p['list']([]);
			$iter101_iter = array['_shape'];
			if (typeof ($iter101_array = $iter101_iter['__array']) != 'undefined') {
				$iter101_type = 0;
			} else {
				$iter101_iter = $iter101_iter['__iter__']();
				$iter101_type = typeof ($iter101_array = $iter101_iter['__array']) != 'undefined'? 0 : (typeof $iter101_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter101_idx = 0;
			while (typeof ($iter101_nextval=($iter101_type?($iter101_type > 0?$iter101_iter.next(true,false):$p['wrapped_next']($iter101_iter)):$iter101_array[$iter101_idx++])) != 'undefined') {
				i = $iter101_nextval;
				size /= i;
				indices['append'](size);
			}
			array['_indices'] = $p['tuple'](indices);
			return array;
		}
	, 1, [null,null,['self'],['dim']]);
		$cls_definition['reshape'] = $method;
		$method = $pyjs__bind_method2('set', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			var $iter110_array,$iter107_type,$attr410,$iter108_iter,$len89,$iter110_nextval,$iter107_idx,$iter109_iter,$bool156,$bool157,$bool154,$bool155,dataLn,$iter110_idx,$bool158,$bool159,$365,$367,$366,$iter108_array,$iter109_nextval,$368,$attr409,$attr408,index,$attr403,$attr402,$attr401,$attr400,$iter109_idx,$attr406,$attr405,$attr404,$iter110_iter,$iter108_type,$iter107_iter,$attr407,$iter108_nextval,$eq48,$bool161,$bool160,$iter109_array,$attr399,$attr398,$attr397,$attr396,$attr395,$eq47,$iter108_idx,$iter109_type,$iter107_array,$iter107_nextval,$iter110_type;
			if ((($bool154=$p['isinstance'](data, $p['tuple']([$p['list'], $p['tuple']]))) === null || $bool154 === false || $bool154 === 0 || $bool154 === '' ?
					false :
					(typeof $bool154=='object'?
						(typeof $bool154['__nonzero__']=='function'?
							$bool154['__nonzero__']() :
							(typeof $bool154['__len__']=='function'?
								($bool154['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool155=$m['pyjs_mode']['optimized']) === null || $bool155 === false || $bool155 === 0 || $bool155 === '' ?
						false :
						(typeof $bool155=='object'?
							(typeof $bool155['__nonzero__']=='function'?
								$bool155['__nonzero__']() :
								(typeof $bool155['__len__']=='function'?
									($bool155['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool156=$p['isinstance']((typeof ($365=data)['__array'] != 'undefined'?
						((typeof $365['__array'][$366=0]) != 'undefined'?$365['__array'][$366]:
							$365['__getitem__']($366)):
							$365['__getitem__'](0)), $p['tuple']([$p['list'], $p['tuple'], $m['TypedArray']]))) === null || $bool156 === false || $bool156 === 0 || $bool156 === '' ?
							false :
							(typeof $bool156=='object'?
								(typeof $bool156['__nonzero__']=='function'?
									$bool156['__nonzero__']() :
									(typeof $bool156['__len__']=='function'?
										($bool156['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						data = function(){
							var $iter103_array,$iter102_type,$iter102_iter,$iter102_nextval,value,$iter102_idx,dat,$iter103_idx,$collcomp14,$iter103_nextval,$iter103_iter,$iter103_type,$iter102_array;
	$collcomp14 = $p['list']();
						$iter102_iter = data;
						if (typeof ($iter102_array = $iter102_iter['__array']) != 'undefined') {
							$iter102_type = 0;
						} else {
							$iter102_iter = $iter102_iter['__iter__']();
							$iter102_type = typeof ($iter102_array = $iter102_iter['__array']) != 'undefined'? 0 : (typeof $iter102_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter102_idx = 0;
						while (typeof ($iter102_nextval=($iter102_type?($iter102_type > 0?$iter102_iter.next(true,false):$p['wrapped_next']($iter102_iter)):$iter102_array[$iter102_idx++])) != 'undefined') {
							dat = $iter102_nextval;
							$iter103_iter = dat;
							if (typeof ($iter103_array = $iter103_iter['__array']) != 'undefined') {
								$iter103_type = 0;
							} else {
								$iter103_iter = $iter103_iter['__iter__']();
								$iter103_type = typeof ($iter103_array = $iter103_iter['__array']) != 'undefined'? 0 : (typeof $iter103_iter['$genfunc'] == 'function'? 1 : -1);
							}
							$iter103_idx = 0;
							while (typeof ($iter103_nextval=($iter103_type?($iter103_type > 0?$iter103_iter.next(true,false):$p['wrapped_next']($iter103_iter)):$iter103_array[$iter103_idx++])) != 'undefined') {
								value = $iter103_nextval;
								$collcomp14['append'](value);
							}
						}

	return $collcomp14;}();
					}
				}
				else {
					if ((($bool158=!(($bool157=$p['isinstance']((typeof ($367=data)['__array'] != 'undefined'?
						((typeof $367['__array'][$368=0]) != 'undefined'?$367['__array'][$368]:
							$367['__getitem__']($368)):
							$367['__getitem__'](0)), $p['tuple']([$p['list'], $p['tuple'], $m['TypedArray']]))) === null || $bool157 === false || $bool157 === 0 || $bool157 === '' ?
						false :
						(typeof $bool157=='object'?
							(typeof $bool157['__nonzero__']=='function'?
								$bool157['__nonzero__']() :
								(typeof $bool157['__len__']=='function'?
									($bool157['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool158 === false || $bool158 === 0 || $bool158 === '' ?
							false :
							(typeof $bool158=='object'?
								(typeof $bool158['__nonzero__']=='function'?
									$bool158['__nonzero__']() :
									(typeof $bool158['__len__']=='function'?
										($bool158['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						data = function(){
							var $iter104_idx,$iter104_iter,dat,$collcomp15,$iter104_array,$iter104_nextval,$iter104_type;
	$collcomp15 = $p['list']();
						$iter104_iter = data;
						if (typeof ($iter104_array = $iter104_iter['__array']) != 'undefined') {
							$iter104_type = 0;
						} else {
							$iter104_iter = $iter104_iter['__iter__']();
							$iter104_type = typeof ($iter104_array = $iter104_iter['__array']) != 'undefined'? 0 : (typeof $iter104_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter104_idx = 0;
						while (typeof ($iter104_nextval=($iter104_type?($iter104_type > 0?$iter104_iter.next(true,false):$p['wrapped_next']($iter104_iter)):$iter104_array[$iter104_idx++])) != 'undefined') {
							dat = $iter104_nextval;
							$collcomp15['append'](dat['valueOf']());
						}

	return $collcomp15;}();
					}
					else {
						data = function(){
							var $iter106_nextval,$iter105_array,$iter106_iter,$iter105_type,$iter106_idx,value,$iter105_idx,$iter105_nextval,dat,$collcomp16,$iter105_iter,$iter106_type,$iter106_array;
	$collcomp16 = $p['list']();
						$iter105_iter = data;
						if (typeof ($iter105_array = $iter105_iter['__array']) != 'undefined') {
							$iter105_type = 0;
						} else {
							$iter105_iter = $iter105_iter['__iter__']();
							$iter105_type = typeof ($iter105_array = $iter105_iter['__array']) != 'undefined'? 0 : (typeof $iter105_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter105_idx = 0;
						while (typeof ($iter105_nextval=($iter105_type?($iter105_type > 0?$iter105_iter.next(true,false):$p['wrapped_next']($iter105_iter)):$iter105_array[$iter105_idx++])) != 'undefined') {
							dat = $iter105_nextval;
							$iter106_iter = dat;
							if (typeof ($iter106_array = $iter106_iter['__array']) != 'undefined') {
								$iter106_type = 0;
							} else {
								$iter106_iter = $iter106_iter['__iter__']();
								$iter106_type = typeof ($iter106_array = $iter106_iter['__array']) != 'undefined'? 0 : (typeof $iter106_iter['$genfunc'] == 'function'? 1 : -1);
							}
							$iter106_idx = 0;
							while (typeof ($iter106_nextval=($iter106_type?($iter106_type > 0?$iter106_iter.next(true,false):$p['wrapped_next']($iter106_iter)):$iter106_array[$iter106_idx++])) != 'undefined') {
								value = $iter106_nextval;
								$collcomp16['append'](value['valueOf']());
							}
						}

	return $collcomp16;}();
					}
				}
				dataLn = (($len89=data) === null?0:
					(typeof $len89['__array'] != 'undefined' ? $len89['__array']['length']:
						(typeof $len89['__len__'] == 'function'?$len89['__len__']():
							(typeof $len89['length'] != 'undefined'?$len89['length']:
								$p['len']($len89)))));
				data = data['getArray']();
			}
			else if ((($bool159=$p['isinstance'](data, $p['tuple']([$m['Ndarray'], $m['TypedArray']]))) === null || $bool159 === false || $bool159 === 0 || $bool159 === '' ?
					false :
					(typeof $bool159=='object'?
						(typeof $bool159['__nonzero__']=='function'?
							$bool159['__nonzero__']() :
							(typeof $bool159['__len__']=='function'?
								($bool159['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				data = data['getArray']();
				dataLn = data['length'];
			}
			else {
				if ((($bool160=$m['pyjs_mode']['optimized']) === null || $bool160 === false || $bool160 === 0 || $bool160 === '' ?
						false :
						(typeof $bool160=='object'?
							(typeof $bool160['__nonzero__']=='function'?
								$bool160['__nonzero__']() :
								(typeof $bool160['__len__']=='function'?
									($bool160['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter107_iter = $p['range'](self['_data']['_data']['length']);
					if (typeof ($iter107_array = $iter107_iter['__array']) != 'undefined') {
						$iter107_type = 0;
					} else {
						$iter107_iter = $iter107_iter['__iter__']();
						$iter107_type = typeof ($iter107_array = $iter107_iter['__array']) != 'undefined'? 0 : (typeof $iter107_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter107_idx = 0;
					while (typeof ($iter107_nextval=($iter107_type?($iter107_type > 0?$iter107_iter.next(true,false):$p['wrapped_next']($iter107_iter)):$iter107_array[$iter107_idx++])) != 'undefined') {
						index = $iter107_nextval;
self['_data']['_data'][index]=data;
					}
				}
				else {
					data = data['valueOf']();
					$iter108_iter = $p['range'](self['_data']['_data']['length']);
					if (typeof ($iter108_array = $iter108_iter['__array']) != 'undefined') {
						$iter108_type = 0;
					} else {
						$iter108_iter = $iter108_iter['__iter__']();
						$iter108_type = typeof ($iter108_array = $iter108_iter['__array']) != 'undefined'? 0 : (typeof $iter108_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter108_idx = 0;
					while (typeof ($iter108_nextval=($iter108_type?($iter108_type > 0?$iter108_iter.next(true,false):$p['wrapped_next']($iter108_iter)):$iter108_array[$iter108_idx++])) != 'undefined') {
						index = $iter108_nextval;
self['_data']['_data'][index]=data;
					}
				}
				return null;
			}
			if ((($bool161=(($eq47=dataLn)===($eq48=self['_data']['_data']['length'])&&$eq47===null?true:
				($eq47===null?false:($eq48===null?false:
					((typeof $eq47=='object'||typeof $eq47=='function')&&typeof $eq47['__cmp__']=='function'?$eq47['__cmp__']($eq48) === 0:
						((typeof $eq48=='object'||typeof $eq48=='function')&&typeof $eq48['__cmp__']=='function'?$eq48['__cmp__']($eq47) === 0:
							$eq47==$eq48)))))) === null || $bool161 === false || $bool161 === 0 || $bool161 === '' ?
					false :
					(typeof $bool161=='object'?
						(typeof $bool161['__nonzero__']=='function'?
							$bool161['__nonzero__']() :
							(typeof $bool161['__len__']=='function'?
								($bool161['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter109_iter = $p['range'](self['_data']['_data']['length']);
				if (typeof ($iter109_array = $iter109_iter['__array']) != 'undefined') {
					$iter109_type = 0;
				} else {
					$iter109_iter = $iter109_iter['__iter__']();
					$iter109_type = typeof ($iter109_array = $iter109_iter['__array']) != 'undefined'? 0 : (typeof $iter109_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter109_idx = 0;
				while (typeof ($iter109_nextval=($iter109_type?($iter109_type > 0?$iter109_iter.next(true,false):$p['wrapped_next']($iter109_iter)):$iter109_array[$iter109_idx++])) != 'undefined') {
					index = $iter109_nextval;
self['_data']['_data'][index]=data[index];
				}
			}
			else {
				$iter110_iter = $p['range'](self['_data']['_data']['length']);
				if (typeof ($iter110_array = $iter110_iter['__array']) != 'undefined') {
					$iter110_type = 0;
				} else {
					$iter110_iter = $iter110_iter['__iter__']();
					$iter110_type = typeof ($iter110_array = $iter110_iter['__array']) != 'undefined'? 0 : (typeof $iter110_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter110_idx = 0;
				while (typeof ($iter110_nextval=($iter110_type?($iter110_type > 0?$iter110_iter.next(true,false):$p['wrapped_next']($iter110_iter)):$iter110_array[$iter110_idx++])) != 'undefined') {
					index = $iter110_nextval;
self['_data']['_data'][index]=data[index%dataLn];
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['set'] = $method;
		$method = $pyjs__bind_method2('fill', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var $bool162,$iter112_idx,$attr413,$attr415,$attr416,$attr414,index,$attr411,$iter111_iter,$iter111_nextval,$iter112_nextval,$iter111_array,$iter112_type,$iter112_array,$iter112_iter,$iter111_type,$iter111_idx,$attr412;
			if ((($bool162=$m['pyjs_mode']['optimized']) === null || $bool162 === false || $bool162 === 0 || $bool162 === '' ?
					false :
					(typeof $bool162=='object'?
						(typeof $bool162['__nonzero__']=='function'?
							$bool162['__nonzero__']() :
							(typeof $bool162['__len__']=='function'?
								($bool162['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter111_iter = $p['range'](self['_data']['_data']['length']);
				if (typeof ($iter111_array = $iter111_iter['__array']) != 'undefined') {
					$iter111_type = 0;
				} else {
					$iter111_iter = $iter111_iter['__iter__']();
					$iter111_type = typeof ($iter111_array = $iter111_iter['__array']) != 'undefined'? 0 : (typeof $iter111_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter111_idx = 0;
				while (typeof ($iter111_nextval=($iter111_type?($iter111_type > 0?$iter111_iter.next(true,false):$p['wrapped_next']($iter111_iter)):$iter111_array[$iter111_idx++])) != 'undefined') {
					index = $iter111_nextval;
self['_data']['_data'][index]=value;
				}
			}
			else {
				value = value['valueOf']();
				$iter112_iter = $p['range'](self['_data']['_data']['length']);
				if (typeof ($iter112_array = $iter112_iter['__array']) != 'undefined') {
					$iter112_type = 0;
				} else {
					$iter112_iter = $iter112_iter['__iter__']();
					$iter112_type = typeof ($iter112_array = $iter112_iter['__array']) != 'undefined'? 0 : (typeof $iter112_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter112_idx = 0;
				while (typeof ($iter112_nextval=($iter112_type?($iter112_type > 0?$iter112_iter.next(true,false):$p['wrapped_next']($iter112_iter)):$iter112_array[$iter112_idx++])) != 'undefined') {
					index = $iter112_nextval;
self['_data']['_data'][index]=value;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['fill'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr418,$attr419,$attr423,$attr422,$attr424,$attr420,$attr417,$attr421,array,ndarray;
			array = self['_data']['__class__'](self['_data']);
			ndarray = $m['Ndarray'](array, self['_dtype']);
			ndarray['_shape'] = self['_shape'];
			ndarray['_indices'] = self['_indices'];
			return ndarray;
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('empty', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr425,$attr427,$attr426,$attr429,$attr428,$attr432,$attr430,$attr431,$len90,ndarray;
			ndarray = $m['Ndarray']((($len90=self['_data']) === null?0:
				(typeof $len90['__array'] != 'undefined' ? $len90['__array']['length']:
					(typeof $len90['__len__'] == 'function'?$len90['__len__']():
						(typeof $len90['length'] != 'undefined'?$len90['length']:
							$p['len']($len90))))), self['_dtype']);
			ndarray['_shape'] = self['_shape'];
			ndarray['_indices'] = self['_indices'];
			return ndarray;
		}
	, 1, [null,null,['self']]);
		$cls_definition['empty'] = $method;
		$method = $pyjs__bind_method2('astype', function(dtype) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				dtype = arguments[1];
			}
			var $attr440,$370,$371,$attr441,$attr438,$attr439,$attr436,$attr435,$attr433,$372,$attr437,typedarray,array,$369,$attr434,ndarray,$attr442;
			typedarray = (typeof ($371=self['__typedarray'])['__array'] != 'undefined'?
				((typeof $371['__array'][$372=(typeof ($369=self['__dtypes'])['__array'] != 'undefined'?
				((typeof $369['__array'][$370=dtype]) != 'undefined'?$369['__array'][$370]:
					$369['__getitem__']($370)):
					$369['__getitem__'](dtype))]) != 'undefined'?$371['__array'][$372]:
					$371['__getitem__']($372)):
					$371['__getitem__']((typeof ($369=self['__dtypes'])['__array'] != 'undefined'?
				((typeof $369['__array'][$370=dtype]) != 'undefined'?$369['__array'][$370]:
					$369['__getitem__']($370)):
					$369['__getitem__'](dtype))));
			array = typedarray(self['_data']);
			ndarray = $m['Ndarray'](array, dtype);
			ndarray['_shape'] = self['_shape'];
			ndarray['_indices'] = self['_indices'];
			return ndarray;
		}
	, 1, [null,null,['self'],['dtype']]);
		$cls_definition['astype'] = $method;
		$method = $pyjs__bind_method2('view', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr446,$attr445,$attr444,$attr443,subarray,array;
			subarray = self['_data']['subarray'](0);
			array = $m['Ndarray'](subarray);
			array['_shape'] = self['_shape'];
			array['_indices'] = self['_indices'];
			return array;
		}
	, 1, [null,null,['self']]);
		$cls_definition['view'] = $method;
		$method = $pyjs__bind_method2('swapaxes', function(axis1, axis2) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				axis1 = arguments[1];
				axis2 = arguments[2];
			}
			var $attr454,$378,$379,$attr450,$attr451,$attr452,$attr453,$373,$376,$377,$374,$375,shape,array,$attr447,$attr449,$attr448,$380,indices;
			array = $m['Ndarray'](self['_data'], self['_dtype']);
			shape = $p['list'](self['_shape']);
			var $tupleassign8 = $p['__ass_unpack']($p['tuple']([(typeof ($373=shape)['__array'] != 'undefined'?
				((typeof $373['__array'][$374=axis2]) != 'undefined'?$373['__array'][$374]:
					$373['__getitem__']($374)):
					$373['__getitem__'](axis2)), (typeof ($375=shape)['__array'] != 'undefined'?
				((typeof $375['__array'][$376=axis1]) != 'undefined'?$375['__array'][$376]:
					$375['__getitem__']($376)):
					$375['__getitem__'](axis1))]), 2, null);
			shape['__setitem__'](axis1, $tupleassign8[0]);
			shape['__setitem__'](axis2, $tupleassign8[1]);
			array['_shape'] = $p['tuple'](shape);
			indices = $p['list'](self['_indices']);
			var $tupleassign9 = $p['__ass_unpack']($p['tuple']([(typeof ($377=indices)['__array'] != 'undefined'?
				((typeof $377['__array'][$378=axis2]) != 'undefined'?$377['__array'][$378]:
					$377['__getitem__']($378)):
					$377['__getitem__'](axis2)), (typeof ($379=indices)['__array'] != 'undefined'?
				((typeof $379['__array'][$380=axis1]) != 'undefined'?$379['__array'][$380]:
					$379['__getitem__']($380)):
					$379['__getitem__'](axis1))]), 2, null);
			indices['__setitem__'](axis1, $tupleassign9[0]);
			indices['__setitem__'](axis2, $tupleassign9[1]);
			array['_indices'] = $p['tuple'](indices);
			return array;
		}
	, 1, [null,null,['self'],['axis1'],['axis2']]);
		$cls_definition['swapaxes'] = $method;
		$method = $pyjs__bind_method2('tolist', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var to_list;
			to_list = function(array, l) {
				var $bool163,$iter113_iter,$eq49,$bool164,i,$iter113_array,$iter113_idx,$386,$iter113_nextval,_l,$eq50,a,$len91,$383,$382,$381,$iter113_type,$385,$384;
				if ((($bool163=$p['hasattr']((typeof ($381=array)['__array'] != 'undefined'?
					((typeof $381['__array'][$382=0]) != 'undefined'?$381['__array'][$382]:
						$381['__getitem__']($382)):
						$381['__getitem__'](0)), '__iter__')) === null || $bool163 === false || $bool163 === 0 || $bool163 === '' ?
						false :
						(typeof $bool163=='object'?
							(typeof $bool163['__nonzero__']=='function'?
								$bool163['__nonzero__']() :
								(typeof $bool163['__len__']=='function'?
									($bool163['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool164=(($eq49=(($len91=l) === null?0:
						(typeof $len91['__array'] != 'undefined' ? $len91['__array']['length']:
							(typeof $len91['__len__'] == 'function'?$len91['__len__']():
								(typeof $len91['length'] != 'undefined'?$len91['length']:
									$p['len']($len91))))))===($eq50=0)&&$eq49===null?true:
						($eq49===null?false:($eq50===null?false:
							((typeof $eq49=='object'||typeof $eq49=='function')&&typeof $eq49['__cmp__']=='function'?$eq49['__cmp__']($eq50) === 0:
								((typeof $eq50=='object'||typeof $eq50=='function')&&typeof $eq50['__cmp__']=='function'?$eq50['__cmp__']($eq49) === 0:
									$eq49==$eq50)))))) === null || $bool164 === false || $bool164 === 0 || $bool164 === '' ?
							false :
							(typeof $bool164=='object'?
								(typeof $bool164['__nonzero__']=='function'?
									$bool164['__nonzero__']() :
									(typeof $bool164['__len__']=='function'?
										($bool164['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						_l = l;
					}
					else {
						l = $p['list']([l]);
						_l = (typeof ($383=l)['__array'] != 'undefined'?
							((typeof $383['__array'][$384=0]) != 'undefined'?$383['__array'][$384]:
								$383['__getitem__']($384)):
								$383['__getitem__'](0));
					}
					$iter113_iter = $p['enumerate'](array);
					if (typeof ($iter113_array = $iter113_iter['__array']) != 'undefined') {
						$iter113_type = 0;
					} else {
						$iter113_iter = $iter113_iter['__iter__']();
						$iter113_type = typeof ($iter113_array = $iter113_iter['__array']) != 'undefined'? 0 : (typeof $iter113_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter113_idx = 0;
					while (typeof ($iter113_nextval=($iter113_type?($iter113_type > 0?$iter113_iter.next(true,false):$p['wrapped_next']($iter113_iter)):$iter113_array[$iter113_idx++])) != 'undefined') {
						var $tupleassign10 = $p['__ass_unpack']($iter113_nextval, 2, null);
						i = $tupleassign10[0];
						a = $tupleassign10[1];
						_l['append']($p['list']([]));
						to_list(a, (typeof ($385=_l)['__array'] != 'undefined'?
							((typeof $385['__array'][$386=i]) != 'undefined'?$385['__array'][$386]:
								$385['__getitem__']($386)):
								$385['__getitem__'](i)));
					}
				}
				else {
					l['extend'](function(){
						var $iter114_type,$collcomp17,$iter114_array,$iter114_iter,v,$iter114_idx,$iter114_nextval;
	$collcomp17 = $p['list']();
					$iter114_iter = array;
					if (typeof ($iter114_array = $iter114_iter['__array']) != 'undefined') {
						$iter114_type = 0;
					} else {
						$iter114_iter = $iter114_iter['__iter__']();
						$iter114_type = typeof ($iter114_array = $iter114_iter['__array']) != 'undefined'? 0 : (typeof $iter114_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter114_idx = 0;
					while (typeof ($iter114_nextval=($iter114_type?($iter114_type > 0?$iter114_iter.next(true,false):$p['wrapped_next']($iter114_iter)):$iter114_array[$iter114_idx++])) != 'undefined') {
						v = $iter114_nextval;
						$collcomp17['append'](v);
					}

	return $collcomp17;}());
				}
				return l;
			};
			to_list['__name__'] = 'to_list';

			to_list['__bind_type__'] = 0;
			to_list['__args__'] = [null,null,['array'],['l']];
			return to_list(self, $p['list']([]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['tolist'] = $method;
		$method = $pyjs__bind_method2('getArray', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['_data']['getArray']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getArray'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Ndarray', $p['tuple']($bases), $data);
	})();
	$m['NP'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('zeros', function(size, dtype) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				size = arguments[1];
				dtype = arguments[2];
			}

			return $m['Ndarray'](size, dtype);
		}
	, 1, [null,null,['self'],['size'],['dtype']]);
		$cls_definition['zeros'] = $method;
		$method = $pyjs__bind_method2('swapaxes', function(array, axis1, axis2) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				array = arguments[1];
				axis1 = arguments[2];
				axis2 = arguments[3];
			}

			return array['swapaxes'](axis1, axis2);
		}
	, 1, [null,null,['self'],['array'],['axis1'],['axis2']]);
		$cls_definition['swapaxes'] = $method;
		$method = $pyjs__bind_method2('append', function(array, values) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				array = arguments[1];
				values = arguments[2];
			}
			var $attr455,$attr456,$attr457,$bool165,$len94,$attr458,$388,newarray,$len93,$387,$len92;
			if ((($bool165=$p['isinstance']((typeof ($387=values)['__array'] != 'undefined'?
				((typeof $387['__array'][$388=0]) != 'undefined'?$387['__array'][$388]:
					$387['__getitem__']($388)):
					$387['__getitem__'](0)), $p['tuple']([$p['list'], $p['tuple'], $m['TypedArray']]))) === null || $bool165 === false || $bool165 === 0 || $bool165 === '' ?
					false :
					(typeof $bool165=='object'?
						(typeof $bool165['__nonzero__']=='function'?
							$bool165['__nonzero__']() :
							(typeof $bool165['__len__']=='function'?
								($bool165['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				values = function(){
					var dat,$iter116_array,$iter115_iter,$iter116_type,$iter115_idx,$iter116_idx,$iter116_nextval,$iter115_nextval,$iter115_array,$iter116_iter,$iter115_type,value,$collcomp18;
	$collcomp18 = $p['list']();
				$iter115_iter = values;
				if (typeof ($iter115_array = $iter115_iter['__array']) != 'undefined') {
					$iter115_type = 0;
				} else {
					$iter115_iter = $iter115_iter['__iter__']();
					$iter115_type = typeof ($iter115_array = $iter115_iter['__array']) != 'undefined'? 0 : (typeof $iter115_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter115_idx = 0;
				while (typeof ($iter115_nextval=($iter115_type?($iter115_type > 0?$iter115_iter.next(true,false):$p['wrapped_next']($iter115_iter)):$iter115_array[$iter115_idx++])) != 'undefined') {
					dat = $iter115_nextval;
					$iter116_iter = dat;
					if (typeof ($iter116_array = $iter116_iter['__array']) != 'undefined') {
						$iter116_type = 0;
					} else {
						$iter116_iter = $iter116_iter['__iter__']();
						$iter116_type = typeof ($iter116_array = $iter116_iter['__array']) != 'undefined'? 0 : (typeof $iter116_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter116_idx = 0;
					while (typeof ($iter116_nextval=($iter116_type?($iter116_type > 0?$iter116_iter.next(true,false):$p['wrapped_next']($iter116_iter)):$iter116_array[$iter116_idx++])) != 'undefined') {
						value = $iter116_nextval;
						$collcomp18['append'](value);
					}
				}

	return $collcomp18;}();
			}
			newarray = $m['Ndarray'](((($len92=array) === null?0:
				(typeof $len92['__array'] != 'undefined' ? $len92['__array']['length']:
					(typeof $len92['__len__'] == 'function'?$len92['__len__']():
						(typeof $len92['length'] != 'undefined'?$len92['length']:
							$p['len']($len92))))))+((($len93=values) === null?0:
				(typeof $len93['__array'] != 'undefined' ? $len93['__array']['length']:
					(typeof $len93['__len__'] == 'function'?$len93['__len__']():
						(typeof $len93['length'] != 'undefined'?$len93['length']:
							$p['len']($len93)))))), array['_dtype']);
			newarray['_data']['set'](array['_data']);
			newarray['_data']['set'](values, (($len94=array) === null?0:
				(typeof $len94['__array'] != 'undefined' ? $len94['__array']['length']:
					(typeof $len94['__len__'] == 'function'?$len94['__len__']():
						(typeof $len94['length'] != 'undefined'?$len94['length']:
							$p['len']($len94))))));
			return newarray;
		}
	, 1, [null,null,['self'],['array'],['values']]);
		$cls_definition['append'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('NP', $p['tuple']($bases), $data);
	})();
	$m['np'] = $m['NP']();
	$m['ImageData'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(imagedata) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imagedata = arguments[1];
			}
			var $bool167,$bool166,$attr459,$attr465,$389,$390,$attr464,$attr466,$attr461,$attr460,$attr463,$attr462;
			self['_imagedata'] = imagedata;
			if ((($bool167=!(($bool166=$p['isUndefined']((typeof ($389=$m['TypedArray']['__obj'])['__array'] != 'undefined'?
				((typeof $389['__array'][$390='Uint8ClampedArray']) != 'undefined'?$389['__array'][$390]:
					$389['__getitem__']($390)):
					$389['__getitem__']('Uint8ClampedArray')))) === null || $bool166 === false || $bool166 === 0 || $bool166 === '' ?
				false :
				(typeof $bool166=='object'?
					(typeof $bool166['__nonzero__']=='function'?
						$bool166['__nonzero__']() :
						(typeof $bool166['__len__']=='function'?
							($bool166['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool167 === false || $bool167 === 0 || $bool167 === '' ?
					false :
					(typeof $bool167=='object'?
						(typeof $bool167['__nonzero__']=='function'?
							$bool167['__nonzero__']() :
							(typeof $bool167['__len__']=='function'?
								($bool167['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['data'] = $m['Uint8ClampedArray']();
			}
			else {
				self['data'] = $m['CanvasPixelArray']();
			}
			self['data']['_data'] = imagedata['data'];
			self['width'] = imagedata['width'];
			self['height'] = imagedata['height'];
			return null;
		}
	, 1, [null,null,['self'],['imagedata']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getImageData', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr467,$attr468;
			return self['_imagedata'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getImageData'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ImageData', $p['tuple']($bases), $data);
	})();
	$m['ImageMatrix'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function(imagedata) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imagedata = arguments[1];
			}
			var $bool168,$attr478,$attr469,$attr472,$attr473,$attr470,$attr471,$attr476,$attr477,$attr474,$attr475;
			self['_imagedata'] = $m['ImageData'](imagedata);
			if ((($bool168=$p['isinstance'](self['_imagedata']['data'], $m['Uint8ClampedArray'])) === null || $bool168 === false || $bool168 === 0 || $bool168 === '' ?
					false :
					(typeof $bool168=='object'?
						(typeof $bool168['__nonzero__']=='function'?
							$bool168['__nonzero__']() :
							(typeof $bool168['__len__']=='function'?
								($bool168['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['Ndarray']['__init__'](self, self['_imagedata']['data'], 'uint8c');
			}
			else {
				$m['Ndarray']['__init__'](self, self['_imagedata']['data'], 'uint8');
			}
			self['setshape'](self['_imagedata']['height'], self['_imagedata']['width'], 4);
			return null;
		}
	, 1, [null,null,['self'],['imagedata']]);
		$cls_definition['__init__'] = $method;
		$cls_definition['shape'] = $m['Ndarray']['shape'];
		$method = $pyjs__bind_method2('getWidth', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr482,$attr481;
			return self['_imagedata']['width'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getWidth'] = $method;
		$method = $pyjs__bind_method2('getHeight', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr483,$attr484;
			return self['_imagedata']['height'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHeight'] = $method;
		$method = $pyjs__bind_method2('getPixel', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $398,$399,$404,$391,$392,$393,$400,$401,$396,$397,$394,$395,$attr487,$attr486,$attr485,$attr489,$attr488,i,$403,$attr490,$attr491,$attr492,$attr493,$attr494,$402;
			i = (((typeof ($391=index)['__array'] != 'undefined'?
				((typeof $391['__array'][$392=0]) != 'undefined'?$391['__array'][$392]:
					$391['__getitem__']($392)):
					$391['__getitem__'](0)))*((typeof ($393=self['_indices'])['__array'] != 'undefined'?
				((typeof $393['__array'][$394=0]) != 'undefined'?$393['__array'][$394]:
					$393['__getitem__']($394)):
					$393['__getitem__'](0))))+(((typeof ($395=index)['__array'] != 'undefined'?
				((typeof $395['__array'][$396=1]) != 'undefined'?$395['__array'][$396]:
					$395['__getitem__']($396)):
					$395['__getitem__'](1)))*(4));
			return $p['tuple']([(typeof ($397=self['_imagedata']['data'])['__array'] != 'undefined'?
				((typeof $397['__array'][$398=i]) != 'undefined'?$397['__array'][$398]:
					$397['__getitem__']($398)):
					$397['__getitem__'](i)), (typeof ($399=self['_imagedata']['data'])['__array'] != 'undefined'?
				((typeof $399['__array'][$400=(i)+(1)]) != 'undefined'?$399['__array'][$400]:
					$399['__getitem__']($400)):
					$399['__getitem__']((i)+(1))), (typeof ($401=self['_imagedata']['data'])['__array'] != 'undefined'?
				((typeof $401['__array'][$402=(i)+(2)]) != 'undefined'?$401['__array'][$402]:
					$401['__getitem__']($402)):
					$401['__getitem__']((i)+(2))), (typeof ($403=self['_imagedata']['data'])['__array'] != 'undefined'?
				((typeof $403['__array'][$404=(i)+(3)]) != 'undefined'?$403['__array'][$404]:
					$403['__getitem__']($404)):
					$403['__getitem__']((i)+(3)))]);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getPixel'] = $method;
		$method = $pyjs__bind_method2('setPixel', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			var $408,$409,$405,$406,$407,$attr504,$418,$417,$416,$415,$414,$413,$412,$411,$410,i,$attr502,$attr503,$attr500,$attr501,$attr495,$attr496,$attr497,$attr498,$attr499;
			i = (((typeof ($405=index)['__array'] != 'undefined'?
				((typeof $405['__array'][$406=0]) != 'undefined'?$405['__array'][$406]:
					$405['__getitem__']($406)):
					$405['__getitem__'](0)))*((typeof ($407=self['_indices'])['__array'] != 'undefined'?
				((typeof $407['__array'][$408=0]) != 'undefined'?$407['__array'][$408]:
					$407['__getitem__']($408)):
					$407['__getitem__'](0))))+(((typeof ($409=index)['__array'] != 'undefined'?
				((typeof $409['__array'][$410=1]) != 'undefined'?$409['__array'][$410]:
					$409['__getitem__']($410)):
					$409['__getitem__'](1)))*(4));
			var $tupleassign11 = $p['__ass_unpack']($p['tuple']([(typeof ($411=value)['__array'] != 'undefined'?
				((typeof $411['__array'][$412=0]) != 'undefined'?$411['__array'][$412]:
					$411['__getitem__']($412)):
					$411['__getitem__'](0)), (typeof ($413=value)['__array'] != 'undefined'?
				((typeof $413['__array'][$414=1]) != 'undefined'?$413['__array'][$414]:
					$413['__getitem__']($414)):
					$413['__getitem__'](1)), (typeof ($415=value)['__array'] != 'undefined'?
				((typeof $415['__array'][$416=2]) != 'undefined'?$415['__array'][$416]:
					$415['__getitem__']($416)):
					$415['__getitem__'](2)), (typeof ($417=value)['__array'] != 'undefined'?
				((typeof $417['__array'][$418=3]) != 'undefined'?$417['__array'][$418]:
					$417['__getitem__']($418)):
					$417['__getitem__'](3))]), 4, null);
			self['_imagedata']['data']['__setitem__'](i, $tupleassign11[0]);
			self['_imagedata']['data']['__setitem__']((i)+(1), $tupleassign11[1]);
			self['_imagedata']['data']['__setitem__']((i)+(2), $tupleassign11[2]);
			self['_imagedata']['data']['__setitem__']((i)+(3), $tupleassign11[3]);
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['setPixel'] = $method;
		$method = $pyjs__bind_method2('getPixelRGB', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $428,$429,$422,$423,$420,$421,$426,$427,$424,$425,$attr511,$attr510,$attr512,$430,$419,i,$attr506,$attr507,$attr505,$attr508,$attr509;
			i = (((typeof ($419=index)['__array'] != 'undefined'?
				((typeof $419['__array'][$420=0]) != 'undefined'?$419['__array'][$420]:
					$419['__getitem__']($420)):
					$419['__getitem__'](0)))*((typeof ($421=self['_indices'])['__array'] != 'undefined'?
				((typeof $421['__array'][$422=0]) != 'undefined'?$421['__array'][$422]:
					$421['__getitem__']($422)):
					$421['__getitem__'](0))))+(((typeof ($423=index)['__array'] != 'undefined'?
				((typeof $423['__array'][$424=1]) != 'undefined'?$423['__array'][$424]:
					$423['__getitem__']($424)):
					$423['__getitem__'](1)))*(4));
			return $p['tuple']([(typeof ($425=self['_imagedata']['data'])['__array'] != 'undefined'?
				((typeof $425['__array'][$426=i]) != 'undefined'?$425['__array'][$426]:
					$425['__getitem__']($426)):
					$425['__getitem__'](i)), (typeof ($427=self['_imagedata']['data'])['__array'] != 'undefined'?
				((typeof $427['__array'][$428=(i)+(1)]) != 'undefined'?$427['__array'][$428]:
					$427['__getitem__']($428)):
					$427['__getitem__']((i)+(1))), (typeof ($429=self['_imagedata']['data'])['__array'] != 'undefined'?
				((typeof $429['__array'][$430=(i)+(2)]) != 'undefined'?$429['__array'][$430]:
					$429['__getitem__']($430)):
					$429['__getitem__']((i)+(2)))]);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getPixelRGB'] = $method;
		$method = $pyjs__bind_method2('setPixelRGB', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			var $440,$441,$442,$attr515,$attr514,$attr517,$attr516,$attr513,$attr519,$attr518,$435,$434,$437,$436,$431,$433,$432,$439,$438,i,$attr520;
			i = (((typeof ($431=index)['__array'] != 'undefined'?
				((typeof $431['__array'][$432=0]) != 'undefined'?$431['__array'][$432]:
					$431['__getitem__']($432)):
					$431['__getitem__'](0)))*((typeof ($433=self['_indices'])['__array'] != 'undefined'?
				((typeof $433['__array'][$434=0]) != 'undefined'?$433['__array'][$434]:
					$433['__getitem__']($434)):
					$433['__getitem__'](0))))+(((typeof ($435=index)['__array'] != 'undefined'?
				((typeof $435['__array'][$436=1]) != 'undefined'?$435['__array'][$436]:
					$435['__getitem__']($436)):
					$435['__getitem__'](1)))*(4));
			var $tupleassign12 = $p['__ass_unpack']($p['tuple']([(typeof ($437=value)['__array'] != 'undefined'?
				((typeof $437['__array'][$438=0]) != 'undefined'?$437['__array'][$438]:
					$437['__getitem__']($438)):
					$437['__getitem__'](0)), (typeof ($439=value)['__array'] != 'undefined'?
				((typeof $439['__array'][$440=1]) != 'undefined'?$439['__array'][$440]:
					$439['__getitem__']($440)):
					$439['__getitem__'](1)), (typeof ($441=value)['__array'] != 'undefined'?
				((typeof $441['__array'][$442=2]) != 'undefined'?$441['__array'][$442]:
					$441['__getitem__']($442)):
					$441['__getitem__'](2))]), 3, null);
			self['_imagedata']['data']['__setitem__'](i, $tupleassign12[0]);
			self['_imagedata']['data']['__setitem__']((i)+(1), $tupleassign12[1]);
			self['_imagedata']['data']['__setitem__']((i)+(2), $tupleassign12[2]);
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['setPixelRGB'] = $method;
		$method = $pyjs__bind_method2('getPixelAlpha', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $443,$444,$445,$446,$447,$448,$449,i,$450,$attr524,$attr521,$attr522,$attr523;
			i = (((typeof ($443=index)['__array'] != 'undefined'?
				((typeof $443['__array'][$444=0]) != 'undefined'?$443['__array'][$444]:
					$443['__getitem__']($444)):
					$443['__getitem__'](0)))*((typeof ($445=self['_indices'])['__array'] != 'undefined'?
				((typeof $445['__array'][$446=0]) != 'undefined'?$445['__array'][$446]:
					$445['__getitem__']($446)):
					$445['__getitem__'](0))))+(((typeof ($447=index)['__array'] != 'undefined'?
				((typeof $447['__array'][$448=1]) != 'undefined'?$447['__array'][$448]:
					$447['__getitem__']($448)):
					$447['__getitem__'](1)))*(4));
			return (typeof ($449=self['_imagedata']['data'])['__array'] != 'undefined'?
				((typeof $449['__array'][$450=(i)+(3)]) != 'undefined'?$449['__array'][$450]:
					$449['__getitem__']($450)):
					$449['__getitem__']((i)+(3)));
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getPixelAlpha'] = $method;
		$method = $pyjs__bind_method2('setPixelAlpha', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			var $453,$451,$456,$455,$452,i,$454,$attr528,$attr525,$attr526,$attr527;
			i = (((typeof ($451=index)['__array'] != 'undefined'?
				((typeof $451['__array'][$452=0]) != 'undefined'?$451['__array'][$452]:
					$451['__getitem__']($452)):
					$451['__getitem__'](0)))*((typeof ($453=self['_indices'])['__array'] != 'undefined'?
				((typeof $453['__array'][$454=0]) != 'undefined'?$453['__array'][$454]:
					$453['__getitem__']($454)):
					$453['__getitem__'](0))))+(((typeof ($455=index)['__array'] != 'undefined'?
				((typeof $455['__array'][$456=1]) != 'undefined'?$455['__array'][$456]:
					$455['__getitem__']($456)):
					$455['__getitem__'](1)))*(4));
			self['_imagedata']['data']['__setitem__']((i)+(3), value);
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['setPixelAlpha'] = $method;
		$method = $pyjs__bind_method2('getPixelInteger', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $468,$469,$466,$467,$464,$465,$462,$463,$460,$461,$attr538,$attr537,$attr536,$attr535,$attr534,$attr533,$attr532,$attr531,$attr530,$457,$470,$459,$458,i,$attr529;
			i = (((typeof ($457=index)['__array'] != 'undefined'?
				((typeof $457['__array'][$458=0]) != 'undefined'?$457['__array'][$458]:
					$457['__getitem__']($458)):
					$457['__getitem__'](0)))*((typeof ($459=self['_indices'])['__array'] != 'undefined'?
				((typeof $459['__array'][$460=0]) != 'undefined'?$459['__array'][$460]:
					$459['__getitem__']($460)):
					$459['__getitem__'](0))))+(((typeof ($461=index)['__array'] != 'undefined'?
				((typeof $461['__array'][$462=1]) != 'undefined'?$461['__array'][$462]:
					$461['__getitem__']($462)):
					$461['__getitem__'](1)))*(4));
			return (((typeof ($463=self['_imagedata']['data'])['__array'] != 'undefined'?
				((typeof $463['__array'][$464=i]) != 'undefined'?$463['__array'][$464]:
					$463['__getitem__']($464)):
					$463['__getitem__'](i)))<<(16))|(((typeof ($465=self['_imagedata']['data'])['__array'] != 'undefined'?
				((typeof $465['__array'][$466=(i)+(1)]) != 'undefined'?$465['__array'][$466]:
					$465['__getitem__']($466)):
					$465['__getitem__']((i)+(1))))<<(8))|((typeof ($467=self['_imagedata']['data'])['__array'] != 'undefined'?
				((typeof $467['__array'][$468=(i)+(2)]) != 'undefined'?$467['__array'][$468]:
					$467['__getitem__']($468)):
					$467['__getitem__']((i)+(2))))|(((typeof ($469=self['imagedata']['data'])['__array'] != 'undefined'?
				((typeof $469['__array'][$470=(i)+(3)]) != 'undefined'?$469['__array'][$470]:
					$469['__getitem__']($470)):
					$469['__getitem__']((i)+(3))))<<(24));
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getPixelInteger'] = $method;
		$method = $pyjs__bind_method2('setPixelInteger', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			var $attr546,$attr544,$attr545,$attr542,$attr543,$attr540,$attr541,$471,$472,$475,$474,$476,i,$attr548,$attr539,$attr547,$473;
			i = (((typeof ($471=index)['__array'] != 'undefined'?
				((typeof $471['__array'][$472=0]) != 'undefined'?$471['__array'][$472]:
					$471['__getitem__']($472)):
					$471['__getitem__'](0)))*((typeof ($473=self['_indices'])['__array'] != 'undefined'?
				((typeof $473['__array'][$474=0]) != 'undefined'?$473['__array'][$474]:
					$473['__getitem__']($474)):
					$473['__getitem__'](0))))+(((typeof ($475=index)['__array'] != 'undefined'?
				((typeof $475['__array'][$476=1]) != 'undefined'?$475['__array'][$476]:
					$475['__getitem__']($476)):
					$475['__getitem__'](1)))*(4));
			var $tupleassign13 = $p['__ass_unpack']($p['tuple']([((value)>>(16))&(255), ((value)>>(8))&(255), (value)&(255), ((value)>>(24))&(255)]), 4, null);
			self['_imagedata']['data']['__setitem__'](i, $tupleassign13[0]);
			self['_imagedata']['data']['__setitem__']((i)+(1), $tupleassign13[1]);
			self['_imagedata']['data']['__setitem__']((i)+(2), $tupleassign13[2]);
			self['_imagedata']['data']['__setitem__']((i)+(3), $tupleassign13[3]);
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['setPixelInteger'] = $method;
		$method = $pyjs__bind_method2('getImageData', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['_imagedata']['getImageData']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getImageData'] = $method;
		var $bases = new Array($m['Ndarray']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ImageMatrix', $p['tuple']($bases), $data);
	})();
	$m['BitSet'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$cls_definition['_bit'] = 8;
		$cls_definition['_bitmask'] = null;
		$cls_definition['__typedarray'] = $m['Uint8Array'];
		$method = $pyjs__bind_method2('__init__', function(width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];
			var $attr560,$attr561,$attr562,$attr563,$attr564,$attr565,$attr566,$attr567,$attr568,$attr549,$bool170,$bool171,$attr559,$attr558,$attr550,$attr555,$attr557,$attr556,$478,$477,$bool169;
			if ((($bool170=!(($bool169=self['_bitmask']) === null || $bool169 === false || $bool169 === 0 || $bool169 === '' ?
				false :
				(typeof $bool169=='object'?
					(typeof $bool169['__nonzero__']=='function'?
						$bool169['__nonzero__']() :
						(typeof $bool169['__len__']=='function'?
							($bool169['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool170 === false || $bool170 === 0 || $bool170 === '' ?
					false :
					(typeof $bool170=='object'?
						(typeof $bool170['__nonzero__']=='function'?
							$bool170['__nonzero__']() :
							(typeof $bool170['__len__']=='function'?
								($bool170['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['_bitmask'] = $p['dict'](function(){
					var $iter117_idx,i,$iter117_iter,$iter117_array,$iter117_nextval,$iter117_type,$attr551,$attr553,$attr552,$attr554,$collcomp19;
	$collcomp19 = $p['list']();
				$iter117_iter = $p['range']((self['_bit'])-(1), -(1), -(1));
				if (typeof ($iter117_array = $iter117_iter['__array']) != 'undefined') {
					$iter117_type = 0;
				} else {
					$iter117_iter = $iter117_iter['__iter__']();
					$iter117_type = typeof ($iter117_array = $iter117_iter['__array']) != 'undefined'? 0 : (typeof $iter117_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter117_idx = 0;
				while (typeof ($iter117_nextval=($iter117_type?($iter117_type > 0?$iter117_iter.next(true,false):$p['wrapped_next']($iter117_iter)):$iter117_array[$iter117_idx++])) != 'undefined') {
					i = $iter117_nextval;
					$collcomp19['append']($p['tuple']([((self['_bit'])-(i))-(1), (1)<<(i)]));
				}

	return $collcomp19;}());
				self['_bitmask']['__setitem__']((self['_bit'])-(1), $p['float_int']((typeof ($477=self['_bitmask'])['__array'] != 'undefined'?
					((typeof $477['__array'][$478=(self['_bit'])-(1)]) != 'undefined'?$477['__array'][$478]:
						$477['__getitem__']($478)):
						$477['__getitem__']((self['_bit'])-(1)))));
			}
			if ((($bool171=width) === null || $bool171 === false || $bool171 === 0 || $bool171 === '' ?
					false :
					(typeof $bool171=='object'?
						(typeof $bool171['__nonzero__']=='function'?
							$bool171['__nonzero__']() :
							(typeof $bool171['__len__']=='function'?
								($bool171['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['_width'] = $p['abs'](width);
			}
			else {
				self['_width'] = self['_bit'];
			}
			self['_data'] = self['__typedarray']($m['_ceil']((self['_width'])/((self['_bit'])*(1.0))));
			return null;
		}
	, 1, [null,null,['self'],['width', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter118_iter,$479,$iter118_type,$bool173,$480,$mod12,i,$bool172,s,$iter118_idx,v,$mod11,$iter118_array,$iter118_nextval;
			v = $p['dict']([[true, '1'], [false, '0']]);
			s = $p['list']([]);
			$iter118_iter = $p['range'](self['size']());
			if (typeof ($iter118_array = $iter118_iter['__array']) != 'undefined') {
				$iter118_type = 0;
			} else {
				$iter118_iter = $iter118_iter['__iter__']();
				$iter118_type = typeof ($iter118_array = $iter118_iter['__array']) != 'undefined'? 0 : (typeof $iter118_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter118_idx = 0;
			while (typeof ($iter118_nextval=($iter118_type?($iter118_type > 0?$iter118_iter.next(true,false):$p['wrapped_next']($iter118_iter)):$iter118_array[$iter118_idx++])) != 'undefined') {
				i = $iter118_nextval;
				s['append']((typeof ($479=v)['__array'] != 'undefined'?
					((typeof $479['__array'][$480=self['get'](i)]) != 'undefined'?$479['__array'][$480]:
						$479['__getitem__']($480)):
						$479['__getitem__'](self['get'](i))));
				if ((($bool173=!(($bool172=(($mod11=(i)+(1))!=null && ($mod12=64)!=null && typeof $mod11=='string'?
					$p['sprintf']($mod11,$mod12):
					(($mod11=$mod11%$mod12)<0&&$mod12>0?$mod11+$mod12:$mod11))) === null || $bool172 === false || $bool172 === 0 || $bool172 === '' ?
					false :
					(typeof $bool172=='object'?
						(typeof $bool172['__nonzero__']=='function'?
							$bool172['__nonzero__']() :
							(typeof $bool172['__len__']=='function'?
								($bool172['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool173 === false || $bool173 === 0 || $bool173 === '' ?
						false :
						(typeof $bool173=='object'?
							(typeof $bool173['__nonzero__']=='function'?
								$bool173['__nonzero__']() :
								(typeof $bool173['__len__']=='function'?
									($bool173['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					s['append']('\n');
				}
			}
			return ''['join'](s);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var index,$attr570,$bool174,$iter119_idx,$attr569,$iter119_type,$iter119_iter,$iter119_nextval,$iter119_array,setBit;
			setBit = $p['list']([]);
			$iter119_iter = $p['range'](self['_width']);
			if (typeof ($iter119_array = $iter119_iter['__array']) != 'undefined') {
				$iter119_type = 0;
			} else {
				$iter119_iter = $iter119_iter['__iter__']();
				$iter119_type = typeof ($iter119_array = $iter119_iter['__array']) != 'undefined'? 0 : (typeof $iter119_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter119_idx = 0;
			while (typeof ($iter119_nextval=($iter119_type?($iter119_type > 0?$iter119_iter.next(true,false):$p['wrapped_next']($iter119_iter)):$iter119_array[$iter119_idx++])) != 'undefined') {
				index = $iter119_nextval;
				if ((($bool174=self['get'](index)) === null || $bool174 === false || $bool174 === 0 || $bool174 === '' ?
						false :
						(typeof $bool174=='object'?
							(typeof $bool174['__nonzero__']=='function'?
								$bool174['__nonzero__']() :
								(typeof $bool174['__len__']=='function'?
									($bool174['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					setBit['append']($p['str'](index));
				}
			}
			return (('{')+(', '['join'](setBit)))+('}');
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return self['get'](index);
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

			self['set'](index, value);
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var index,$attr571,$iter120_idx,$attr572,$iter120_type,$iter120_iter,$iter120_nextval,$iter120_array,$bool175;
			$iter120_iter = $p['range']((self['_width'])-(1), -(1), -(1));
			if (typeof ($iter120_array = $iter120_iter['__array']) != 'undefined') {
				$iter120_type = 0;
			} else {
				$iter120_iter = $iter120_iter['__iter__']();
				$iter120_type = typeof ($iter120_array = $iter120_iter['__array']) != 'undefined'? 0 : (typeof $iter120_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter120_idx = 0;
			while (typeof ($iter120_nextval=($iter120_type?($iter120_type > 0?$iter120_iter.next(true,false):$p['wrapped_next']($iter120_iter)):$iter120_array[$iter120_idx++])) != 'undefined') {
				index = $iter120_nextval;
				if ((($bool175=self['get'](index)) === null || $bool175 === false || $bool175 === 0 || $bool175 === '' ?
						false :
						(typeof $bool175=='object'?
							(typeof $bool175['__nonzero__']=='function'?
								$bool175['__nonzero__']() :
								(typeof $bool175['__len__']=='function'?
									($bool175['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					break;
				}
			}
			return (index)+(1);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr573,index,$attr575,$bool176,$attr574,$bool177,$cmp48,$cmp49,$cmp50,$cmp47,$attr576;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					index = 0;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state['splice'](1, $generator_state['length']-1);
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0)||((($bool177=((($cmp49=index)===($cmp50=self['_width'])?0:
						(typeof $cmp49==typeof $cmp50 && ((typeof $cmp49 == 'number')||(typeof $cmp49 == 'string')||(typeof $cmp49 == 'boolean'))?
							($cmp49 == $cmp50 ? 0 : ($cmp49 < $cmp50 ? -1 : 1)):
							$p['cmp']($cmp49, $cmp50))) == -1)) === null || $bool177 === false || $bool177 === 0 || $bool177 === '' ?
							false :
							(typeof $bool177=='object'?
								(typeof $bool177['__nonzero__']=='function'?
									$bool177['__nonzero__']() :
									(typeof $bool177['__len__']=='function'?
										($bool177['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) ));$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							$yield_value = self['get'](index);
							$yielding = true;
							$generator_state[1] = 1;
							return $yield_value;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[1] = -1;
								throw $exc;
							}
							index += 1;
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

				return;
			};
			return $generator;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('get', function(index, toIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				toIndex = arguments[2];
			}
			if (typeof toIndex == 'undefined') toIndex=arguments['callee']['__args__'][4][1];
			var ix,$attr588,$attr589,$attr582,$attr583,$attr580,$attr581,$attr586,$attr587,$attr584,$attr585,$mod16,size,$484,$486,$487,$481,$482,$483,$bool178,$bool179,$488,$attr597,$mod15,$mod14,$iter121_type,$attr596,$attr577,$attr598,$mod13,$485,$attr595,$attr594,$attr579,$attr578,$attr591,$attr590,$attr593,$attr592,$cmp58,$iter121_idx,bitset,$cmp51,$cmp53,$cmp52,$cmp55,$cmp54,$cmp57,$cmp56,i,$bool184,$bool181,$bool180,$bool183,$bool182,$iter121_iter,$iter121_array,$iter121_nextval;
			if ((($bool178=((($cmp51=index)===($cmp52=(self['_width'])-(1))?0:
				(typeof $cmp51==typeof $cmp52 && ((typeof $cmp51 == 'number')||(typeof $cmp51 == 'string')||(typeof $cmp51 == 'boolean'))?
					($cmp51 == $cmp52 ? 0 : ($cmp51 < $cmp52 ? -1 : 1)):
					$p['cmp']($cmp51, $cmp52))) == 1)) === null || $bool178 === false || $bool178 === 0 || $bool178 === '' ?
					false :
					(typeof $bool178=='object'?
						(typeof $bool178['__nonzero__']=='function'?
							$bool178['__nonzero__']() :
							(typeof $bool178['__len__']=='function'?
								($bool178['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool180=!(($bool179=toIndex) === null || $bool179 === false || $bool179 === 0 || $bool179 === '' ?
					false :
					(typeof $bool179=='object'?
						(typeof $bool179['__nonzero__']=='function'?
							$bool179['__nonzero__']() :
							(typeof $bool179['__len__']=='function'?
								($bool179['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool180 === false || $bool180 === 0 || $bool180 === '' ?
						false :
						(typeof $bool180=='object'?
							(typeof $bool180['__nonzero__']=='function'?
								$bool180['__nonzero__']() :
								(typeof $bool180['__len__']=='function'?
									($bool180['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return false;
				}
				else {
					size = (toIndex)-(index);
					if ((($bool181=((($cmp53=size)===($cmp54=0)?0:
						(typeof $cmp53==typeof $cmp54 && ((typeof $cmp53 == 'number')||(typeof $cmp53 == 'string')||(typeof $cmp53 == 'boolean'))?
							($cmp53 == $cmp54 ? 0 : ($cmp53 < $cmp54 ? -1 : 1)):
							$p['cmp']($cmp53, $cmp54))) == 1)) === null || $bool181 === false || $bool181 === 0 || $bool181 === '' ?
							false :
							(typeof $bool181=='object'?
								(typeof $bool181['__nonzero__']=='function'?
									$bool181['__nonzero__']() :
									(typeof $bool181['__len__']=='function'?
										($bool181['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						return self['__class__'](size);
					}
					else {
						return null;
					}
				}
			}
			if ((($bool182=(toIndex === null)) === null || $bool182 === false || $bool182 === 0 || $bool182 === '' ?
					false :
					(typeof $bool182=='object'?
						(typeof $bool182['__nonzero__']=='function'?
							$bool182['__nonzero__']() :
							(typeof $bool182['__len__']=='function'?
								($bool182['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['bool'](((typeof ($481=self['_data'])['__array'] != 'undefined'?
					((typeof $481['__array'][$482=$p['float_int']((index)/(self['_bit']))]) != 'undefined'?$481['__array'][$482]:
						$481['__getitem__']($482)):
						$481['__getitem__']($p['float_int']((index)/(self['_bit'])))))&((typeof ($483=self['_bitmask'])['__array'] != 'undefined'?
					((typeof $483['__array'][$484=(($mod13=index)!=null && ($mod14=self['_bit'])!=null && typeof $mod13=='string'?
					$p['sprintf']($mod13,$mod14):
					(($mod13=$mod13%$mod14)<0&&$mod14>0?$mod13+$mod14:$mod13))]) != 'undefined'?$483['__array'][$484]:
						$483['__getitem__']($484)):
						$483['__getitem__']((($mod13=index)!=null && ($mod14=self['_bit'])!=null && typeof $mod13=='string'?
					$p['sprintf']($mod13,$mod14):
					(($mod13=$mod13%$mod14)<0&&$mod14>0?$mod13+$mod14:$mod13))))));
			}
			else {
				size = (toIndex)-(index);
				if ((($bool183=((($cmp55=size)===($cmp56=0)?0:
					(typeof $cmp55==typeof $cmp56 && ((typeof $cmp55 == 'number')||(typeof $cmp55 == 'string')||(typeof $cmp55 == 'boolean'))?
						($cmp55 == $cmp56 ? 0 : ($cmp55 < $cmp56 ? -1 : 1)):
						$p['cmp']($cmp55, $cmp56))) == 1)) === null || $bool183 === false || $bool183 === 0 || $bool183 === '' ?
						false :
						(typeof $bool183=='object'?
							(typeof $bool183['__nonzero__']=='function'?
								$bool183['__nonzero__']() :
								(typeof $bool183['__len__']=='function'?
									($bool183['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					bitset = self['__class__'](size);
					ix = 0;
					if ((($bool184=((($cmp57=toIndex)===($cmp58=self['_width'])?0:
						(typeof $cmp57==typeof $cmp58 && ((typeof $cmp57 == 'number')||(typeof $cmp57 == 'string')||(typeof $cmp57 == 'boolean'))?
							($cmp57 == $cmp58 ? 0 : ($cmp57 < $cmp58 ? -1 : 1)):
							$p['cmp']($cmp57, $cmp58))) == 1)) === null || $bool184 === false || $bool184 === 0 || $bool184 === '' ?
							false :
							(typeof $bool184=='object'?
								(typeof $bool184['__nonzero__']=='function'?
									$bool184['__nonzero__']() :
									(typeof $bool184['__len__']=='function'?
										($bool184['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						toIndex = self['_width'];
					}
					$iter121_iter = $p['range'](index, toIndex);
					if (typeof ($iter121_array = $iter121_iter['__array']) != 'undefined') {
						$iter121_type = 0;
					} else {
						$iter121_iter = $iter121_iter['__iter__']();
						$iter121_type = typeof ($iter121_array = $iter121_iter['__array']) != 'undefined'? 0 : (typeof $iter121_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter121_idx = 0;
					while (typeof ($iter121_nextval=($iter121_type?($iter121_type > 0?$iter121_iter.next(true,false):$p['wrapped_next']($iter121_iter)):$iter121_array[$iter121_idx++])) != 'undefined') {
						i = $iter121_nextval;
						bitset['set'](ix, $p['bool'](((typeof ($485=self['_data'])['__array'] != 'undefined'?
							((typeof $485['__array'][$486=$p['float_int']((i)/(self['_bit']))]) != 'undefined'?$485['__array'][$486]:
								$485['__getitem__']($486)):
								$485['__getitem__']($p['float_int']((i)/(self['_bit'])))))&((typeof ($487=self['_bitmask'])['__array'] != 'undefined'?
							((typeof $487['__array'][$488=(($mod15=i)!=null && ($mod16=self['_bit'])!=null && typeof $mod15=='string'?
							$p['sprintf']($mod15,$mod16):
							(($mod15=$mod15%$mod16)<0&&$mod16>0?$mod15+$mod16:$mod15))]) != 'undefined'?$487['__array'][$488]:
								$487['__getitem__']($488)):
								$487['__getitem__']((($mod15=i)!=null && ($mod16=self['_bit'])!=null && typeof $mod15=='string'?
							$p['sprintf']($mod15,$mod16):
							(($mod15=$mod15%$mod16)<0&&$mod16>0?$mod15+$mod16:$mod15)))))));
						ix += 1;
					}
					return bitset;
				}
				else {
					return null;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['index'],['toIndex', null]]);
		$cls_definition['get'] = $method;
		$method = $pyjs__bind_method2('set', function(index, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			if (typeof value == 'undefined') value=arguments['callee']['__args__'][4][1];
			var $mod20,$attr622,$attr621,$attr620,$cmp60,$attr624,$attr614,$attr612,$489,$attr623,$attr616,$attr617,$mod17,$attr615,$attr599,$attr613,$attr610,$attr611,$mod19,$mod18,$attr618,$attr619,$cmp59,$496,$495,$494,$493,$492,$491,$490,$bool185,$bool187,$bool186,$attr609,$attr608,$attr601,$attr600,$attr603,$attr602,$attr605,$attr604,$attr607,$attr606;
			if ((($bool185=((($cmp59=index)===($cmp60=(self['_width'])-(1))?0:
				(typeof $cmp59==typeof $cmp60 && ((typeof $cmp59 == 'number')||(typeof $cmp59 == 'string')||(typeof $cmp59 == 'boolean'))?
					($cmp59 == $cmp60 ? 0 : ($cmp59 < $cmp60 ? -1 : 1)):
					$p['cmp']($cmp59, $cmp60))) == 1)) === null || $bool185 === false || $bool185 === 0 || $bool185 === '' ?
					false :
					(typeof $bool185=='object'?
						(typeof $bool185['__nonzero__']=='function'?
							$bool185['__nonzero__']() :
							(typeof $bool185['__len__']=='function'?
								($bool185['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool186=value) === null || $bool186 === false || $bool186 === 0 || $bool186 === '' ?
						false :
						(typeof $bool186=='object'?
							(typeof $bool186['__nonzero__']=='function'?
								$bool186['__nonzero__']() :
								(typeof $bool186['__len__']=='function'?
									($bool186['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['resize']((index)+(1));
				}
				else {
					return null;
				}
			}
			if ((($bool187=value) === null || $bool187 === false || $bool187 === 0 || $bool187 === '' ?
					false :
					(typeof $bool187=='object'?
						(typeof $bool187['__nonzero__']=='function'?
							$bool187['__nonzero__']() :
							(typeof $bool187['__len__']=='function'?
								($bool187['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['_data']['__setitem__']($p['float_int']((index)/(self['_bit'])), ((typeof ($489=self['_data'])['__array'] != 'undefined'?
					((typeof $489['__array'][$490=$p['float_int']((index)/(self['_bit']))]) != 'undefined'?$489['__array'][$490]:
						$489['__getitem__']($490)):
						$489['__getitem__']($p['float_int']((index)/(self['_bit'])))))|((typeof ($491=self['_bitmask'])['__array'] != 'undefined'?
					((typeof $491['__array'][$492=(($mod17=index)!=null && ($mod18=self['_bit'])!=null && typeof $mod17=='string'?
					$p['sprintf']($mod17,$mod18):
					(($mod17=$mod17%$mod18)<0&&$mod18>0?$mod17+$mod18:$mod17))]) != 'undefined'?$491['__array'][$492]:
						$491['__getitem__']($492)):
						$491['__getitem__']((($mod17=index)!=null && ($mod18=self['_bit'])!=null && typeof $mod17=='string'?
					$p['sprintf']($mod17,$mod18):
					(($mod17=$mod17%$mod18)<0&&$mod18>0?$mod17+$mod18:$mod17))))));
			}
			else {
				self['_data']['__setitem__']($p['float_int']((index)/(self['_bit'])), ((typeof ($493=self['_data'])['__array'] != 'undefined'?
					((typeof $493['__array'][$494=$p['float_int']((index)/(self['_bit']))]) != 'undefined'?$493['__array'][$494]:
						$493['__getitem__']($494)):
						$493['__getitem__']($p['float_int']((index)/(self['_bit'])))))&(~((typeof ($495=self['_bitmask'])['__array'] != 'undefined'?
					((typeof $495['__array'][$496=(($mod19=index)!=null && ($mod20=self['_bit'])!=null && typeof $mod19=='string'?
					$p['sprintf']($mod19,$mod20):
					(($mod19=$mod19%$mod20)<0&&$mod20>0?$mod19+$mod20:$mod19))]) != 'undefined'?$495['__array'][$496]:
						$495['__getitem__']($496)):
						$495['__getitem__']((($mod19=index)!=null && ($mod20=self['_bit'])!=null && typeof $mod19=='string'?
					$p['sprintf']($mod19,$mod20):
					(($mod19=$mod19%$mod20)<0&&$mod20>0?$mod19+$mod20:$mod19)))))));
			}
			return null;
		}
	, 1, [null,null,['self'],['index'],['value', 1]]);
		$cls_definition['set'] = $method;
		$method = $pyjs__bind_method2('fill', function(index, toIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				toIndex = arguments[2];
			}
			if (typeof index == 'undefined') index=arguments['callee']['__args__'][3][1];
			if (typeof toIndex == 'undefined') toIndex=arguments['callee']['__args__'][4][1];
			var $iter122_type,$bool189,$bool188,$attr625,i,$iter122_iter,$and5,$and6,$iter123_idx,$iter122_idx,$iter123_type,$iter123_array,$iter122_array,$iter123_nextval,$iter122_nextval,$bool190,$iter123_iter,$attr626;
			if ((($bool189=((($bool188=$and5=(index === null)) === null || $bool188 === false || $bool188 === 0 || $bool188 === '' ?
				false :
				(typeof $bool188=='object'?
					(typeof $bool188['__nonzero__']=='function'?
						$bool188['__nonzero__']() :
						(typeof $bool188['__len__']=='function'?
							($bool188['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(toIndex === null):$and5)) === null || $bool189 === false || $bool189 === 0 || $bool189 === '' ?
					false :
					(typeof $bool189=='object'?
						(typeof $bool189['__nonzero__']=='function'?
							$bool189['__nonzero__']() :
							(typeof $bool189['__len__']=='function'?
								($bool189['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter122_iter = $p['range'](0, self['_width']);
				if (typeof ($iter122_array = $iter122_iter['__array']) != 'undefined') {
					$iter122_type = 0;
				} else {
					$iter122_iter = $iter122_iter['__iter__']();
					$iter122_type = typeof ($iter122_array = $iter122_iter['__array']) != 'undefined'? 0 : (typeof $iter122_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter122_idx = 0;
				while (typeof ($iter122_nextval=($iter122_type?($iter122_type > 0?$iter122_iter.next(true,false):$p['wrapped_next']($iter122_iter)):$iter122_array[$iter122_idx++])) != 'undefined') {
					i = $iter122_nextval;
					self['set'](i, 1);
				}
			}
			else {
				if ((($bool190=(toIndex === null)) === null || $bool190 === false || $bool190 === 0 || $bool190 === '' ?
						false :
						(typeof $bool190=='object'?
							(typeof $bool190['__nonzero__']=='function'?
								$bool190['__nonzero__']() :
								(typeof $bool190['__len__']=='function'?
									($bool190['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['set'](index, 1);
				}
				else {
					$iter123_iter = $p['range'](index, toIndex);
					if (typeof ($iter123_array = $iter123_iter['__array']) != 'undefined') {
						$iter123_type = 0;
					} else {
						$iter123_iter = $iter123_iter['__iter__']();
						$iter123_type = typeof ($iter123_array = $iter123_iter['__array']) != 'undefined'? 0 : (typeof $iter123_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter123_idx = 0;
					while (typeof ($iter123_nextval=($iter123_type?($iter123_type > 0?$iter123_iter.next(true,false):$p['wrapped_next']($iter123_iter)):$iter123_array[$iter123_idx++])) != 'undefined') {
						i = $iter123_nextval;
						self['set'](i, 1);
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['index', null],['toIndex', null]]);
		$cls_definition['fill'] = $method;
		$method = $pyjs__bind_method2('clear', function(index, toIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				toIndex = arguments[2];
			}
			if (typeof index == 'undefined') index=arguments['callee']['__args__'][3][1];
			if (typeof toIndex == 'undefined') toIndex=arguments['callee']['__args__'][4][1];
			var $and8,$attr627,$iter125_nextval,$attr629,$attr628,$iter125_type,$iter126_idx,$eq54,$eq51,$eq52,$eq53,$iter125_iter,$iter126_nextval,$iter126_type,$bool192,$bool193,$bool191,$bool194,$iter126_array,$iter124_type,$attr630,$attr631,$attr632,$attr633,$attr634,$attr635,$attr636,$iter124_iter,$iter125_array,$iter124_idx,$and7,$len95,$len96,dat,i,$iter124_array,$iter125_idx,$iter124_nextval,$iter126_iter;
			if ((($bool191=(index === null)) === null || $bool191 === false || $bool191 === 0 || $bool191 === '' ?
					false :
					(typeof $bool191=='object'?
						(typeof $bool191['__nonzero__']=='function'?
							$bool191['__nonzero__']() :
							(typeof $bool191['__len__']=='function'?
								($bool191['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter124_iter = $p['range']((($len95=self['_data']) === null?0:
					(typeof $len95['__array'] != 'undefined' ? $len95['__array']['length']:
						(typeof $len95['__len__'] == 'function'?$len95['__len__']():
							(typeof $len95['length'] != 'undefined'?$len95['length']:
								$p['len']($len95))))));
				if (typeof ($iter124_array = $iter124_iter['__array']) != 'undefined') {
					$iter124_type = 0;
				} else {
					$iter124_iter = $iter124_iter['__iter__']();
					$iter124_type = typeof ($iter124_array = $iter124_iter['__array']) != 'undefined'? 0 : (typeof $iter124_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter124_idx = 0;
				while (typeof ($iter124_nextval=($iter124_type?($iter124_type > 0?$iter124_iter.next(true,false):$p['wrapped_next']($iter124_iter)):$iter124_array[$iter124_idx++])) != 'undefined') {
					i = $iter124_nextval;
					self['_data']['__setitem__'](i, 0);
				}
			}
			else {
				if ((($bool192=(toIndex === null)) === null || $bool192 === false || $bool192 === 0 || $bool192 === '' ?
						false :
						(typeof $bool192=='object'?
							(typeof $bool192['__nonzero__']=='function'?
								$bool192['__nonzero__']() :
								(typeof $bool192['__len__']=='function'?
									($bool192['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['set'](index, 0);
				}
				else {
					if ((($bool194=((($bool193=$and7=(($eq51=index)===($eq52=0)&&$eq51===null?true:
						($eq51===null?false:($eq52===null?false:
							((typeof $eq51=='object'||typeof $eq51=='function')&&typeof $eq51['__cmp__']=='function'?$eq51['__cmp__']($eq52) === 0:
								((typeof $eq52=='object'||typeof $eq52=='function')&&typeof $eq52['__cmp__']=='function'?$eq52['__cmp__']($eq51) === 0:
									$eq51==$eq52)))))) === null || $bool193 === false || $bool193 === 0 || $bool193 === '' ?
						false :
						(typeof $bool193=='object'?
							(typeof $bool193['__nonzero__']=='function'?
								$bool193['__nonzero__']() :
								(typeof $bool193['__len__']=='function'?
									($bool193['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(($eq53=toIndex)===($eq54=self['_width'])&&$eq53===null?true:
						($eq53===null?false:($eq54===null?false:
							((typeof $eq53=='object'||typeof $eq53=='function')&&typeof $eq53['__cmp__']=='function'?$eq53['__cmp__']($eq54) === 0:
								((typeof $eq54=='object'||typeof $eq54=='function')&&typeof $eq54['__cmp__']=='function'?$eq54['__cmp__']($eq53) === 0:
									$eq53==$eq54))))):$and7)) === null || $bool194 === false || $bool194 === 0 || $bool194 === '' ?
							false :
							(typeof $bool194=='object'?
								(typeof $bool194['__nonzero__']=='function'?
									$bool194['__nonzero__']() :
									(typeof $bool194['__len__']=='function'?
										($bool194['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						$iter125_iter = $p['range']((($len96=self['_data']) === null?0:
							(typeof $len96['__array'] != 'undefined' ? $len96['__array']['length']:
								(typeof $len96['__len__'] == 'function'?$len96['__len__']():
									(typeof $len96['length'] != 'undefined'?$len96['length']:
										$p['len']($len96))))));
						if (typeof ($iter125_array = $iter125_iter['__array']) != 'undefined') {
							$iter125_type = 0;
						} else {
							$iter125_iter = $iter125_iter['__iter__']();
							$iter125_type = typeof ($iter125_array = $iter125_iter['__array']) != 'undefined'? 0 : (typeof $iter125_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter125_idx = 0;
						while (typeof ($iter125_nextval=($iter125_type?($iter125_type > 0?$iter125_iter.next(true,false):$p['wrapped_next']($iter125_iter)):$iter125_array[$iter125_idx++])) != 'undefined') {
							dat = $iter125_nextval;
							self['_data']['__setitem__'](dat, 0);
						}
					}
					else {
						$iter126_iter = $p['range'](index, toIndex);
						if (typeof ($iter126_array = $iter126_iter['__array']) != 'undefined') {
							$iter126_type = 0;
						} else {
							$iter126_iter = $iter126_iter['__iter__']();
							$iter126_type = typeof ($iter126_array = $iter126_iter['__array']) != 'undefined'? 0 : (typeof $iter126_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter126_idx = 0;
						while (typeof ($iter126_nextval=($iter126_type?($iter126_type > 0?$iter126_iter.next(true,false):$p['wrapped_next']($iter126_iter)):$iter126_array[$iter126_idx++])) != 'undefined') {
							i = $iter126_nextval;
							self['set'](i, 0);
						}
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['index', null],['toIndex', null]]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('flip', function(index, toIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				toIndex = arguments[2];
			}
			if (typeof toIndex == 'undefined') toIndex=arguments['callee']['__args__'][4][1];
			var $cmp61,$cmp62,$iter128_nextval,$iter127_type,$eq55,$eq56,$eq57,$iter127_iter,$eq58,$iter128_array,$bool198,$bool199,$bool196,$bool197,$bool200,$bool195,$iter128_type,$and9,$iter128_iter,$attr643,$attr637,$attr638,$attr639,$iter127_nextval,dat,$and10,$iter128_idx,$len97,$497,i,$498,$attr645,$attr644,$attr647,$attr646,$attr641,$attr640,$iter127_idx,$attr642,$iter127_array,$attr648;
			if ((($bool195=(toIndex === null)) === null || $bool195 === false || $bool195 === 0 || $bool195 === '' ?
					false :
					(typeof $bool195=='object'?
						(typeof $bool195['__nonzero__']=='function'?
							$bool195['__nonzero__']() :
							(typeof $bool195['__len__']=='function'?
								($bool195['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['set'](index, !(($bool196=self['get'](index)) === null || $bool196 === false || $bool196 === 0 || $bool196 === '' ?
					false :
					(typeof $bool196=='object'?
						(typeof $bool196['__nonzero__']=='function'?
							$bool196['__nonzero__']() :
							(typeof $bool196['__len__']=='function'?
								($bool196['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ));
			}
			else {
				if ((($bool197=((($cmp61=toIndex)===($cmp62=self['_width'])?0:
					(typeof $cmp61==typeof $cmp62 && ((typeof $cmp61 == 'number')||(typeof $cmp61 == 'string')||(typeof $cmp61 == 'boolean'))?
						($cmp61 == $cmp62 ? 0 : ($cmp61 < $cmp62 ? -1 : 1)):
						$p['cmp']($cmp61, $cmp62))) == 1)) === null || $bool197 === false || $bool197 === 0 || $bool197 === '' ?
						false :
						(typeof $bool197=='object'?
							(typeof $bool197['__nonzero__']=='function'?
								$bool197['__nonzero__']() :
								(typeof $bool197['__len__']=='function'?
									($bool197['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['resize'](toIndex);
					toIndex = self['_width'];
				}
				if ((($bool199=((($bool198=$and9=(($eq55=index)===($eq56=0)&&$eq55===null?true:
					($eq55===null?false:($eq56===null?false:
						((typeof $eq55=='object'||typeof $eq55=='function')&&typeof $eq55['__cmp__']=='function'?$eq55['__cmp__']($eq56) === 0:
							((typeof $eq56=='object'||typeof $eq56=='function')&&typeof $eq56['__cmp__']=='function'?$eq56['__cmp__']($eq55) === 0:
								$eq55==$eq56)))))) === null || $bool198 === false || $bool198 === 0 || $bool198 === '' ?
					false :
					(typeof $bool198=='object'?
						(typeof $bool198['__nonzero__']=='function'?
							$bool198['__nonzero__']() :
							(typeof $bool198['__len__']=='function'?
								($bool198['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(($eq57=toIndex)===($eq58=self['_width'])&&$eq57===null?true:
					($eq57===null?false:($eq58===null?false:
						((typeof $eq57=='object'||typeof $eq57=='function')&&typeof $eq57['__cmp__']=='function'?$eq57['__cmp__']($eq58) === 0:
							((typeof $eq58=='object'||typeof $eq58=='function')&&typeof $eq58['__cmp__']=='function'?$eq58['__cmp__']($eq57) === 0:
								$eq57==$eq58))))):$and9)) === null || $bool199 === false || $bool199 === 0 || $bool199 === '' ?
						false :
						(typeof $bool199=='object'?
							(typeof $bool199['__nonzero__']=='function'?
								$bool199['__nonzero__']() :
								(typeof $bool199['__len__']=='function'?
									($bool199['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter127_iter = $p['range']((($len97=self['_data']) === null?0:
						(typeof $len97['__array'] != 'undefined' ? $len97['__array']['length']:
							(typeof $len97['__len__'] == 'function'?$len97['__len__']():
								(typeof $len97['length'] != 'undefined'?$len97['length']:
									$p['len']($len97))))));
					if (typeof ($iter127_array = $iter127_iter['__array']) != 'undefined') {
						$iter127_type = 0;
					} else {
						$iter127_iter = $iter127_iter['__iter__']();
						$iter127_type = typeof ($iter127_array = $iter127_iter['__array']) != 'undefined'? 0 : (typeof $iter127_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter127_idx = 0;
					while (typeof ($iter127_nextval=($iter127_type?($iter127_type > 0?$iter127_iter.next(true,false):$p['wrapped_next']($iter127_iter)):$iter127_array[$iter127_idx++])) != 'undefined') {
						dat = $iter127_nextval;
						self['_data']['__setitem__'](dat, ~((typeof ($497=self['_data'])['__array'] != 'undefined'?
							((typeof $497['__array'][$498=dat]) != 'undefined'?$497['__array'][$498]:
								$497['__getitem__']($498)):
								$497['__getitem__'](dat))));
					}
				}
				else {
					$iter128_iter = $p['range'](index, toIndex);
					if (typeof ($iter128_array = $iter128_iter['__array']) != 'undefined') {
						$iter128_type = 0;
					} else {
						$iter128_iter = $iter128_iter['__iter__']();
						$iter128_type = typeof ($iter128_array = $iter128_iter['__array']) != 'undefined'? 0 : (typeof $iter128_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter128_idx = 0;
					while (typeof ($iter128_nextval=($iter128_type?($iter128_type > 0?$iter128_iter.next(true,false):$p['wrapped_next']($iter128_iter)):$iter128_array[$iter128_idx++])) != 'undefined') {
						i = $iter128_nextval;
						self['set'](i, !(($bool200=self['get'](i)) === null || $bool200 === false || $bool200 === 0 || $bool200 === '' ?
							false :
							(typeof $bool200=='object'?
								(typeof $bool200['__nonzero__']=='function'?
									$bool200['__nonzero__']() :
									(typeof $bool200['__len__']=='function'?
										($bool200['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) ));
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['index'],['toIndex', null]]);
		$cls_definition['flip'] = $method;
		$method = $pyjs__bind_method2('cardinality', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var count,$iter129_array,$iter129_idx,$bool201,$attr650,$iter129_nextval,$iter129_iter,$iter129_type,$attr649,bit;
			count = 0;
			$iter129_iter = $p['range'](self['_width']);
			if (typeof ($iter129_array = $iter129_iter['__array']) != 'undefined') {
				$iter129_type = 0;
			} else {
				$iter129_iter = $iter129_iter['__iter__']();
				$iter129_type = typeof ($iter129_array = $iter129_iter['__array']) != 'undefined'? 0 : (typeof $iter129_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter129_idx = 0;
			while (typeof ($iter129_nextval=($iter129_type?($iter129_type > 0?$iter129_iter.next(true,false):$p['wrapped_next']($iter129_iter)):$iter129_array[$iter129_idx++])) != 'undefined') {
				bit = $iter129_nextval;
				if ((($bool201=self['get'](bit)) === null || $bool201 === false || $bool201 === 0 || $bool201 === '' ?
						false :
						(typeof $bool201=='object'?
							(typeof $bool201['__nonzero__']=='function'?
								$bool201['__nonzero__']() :
								(typeof $bool201['__len__']=='function'?
									($bool201['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					count += 1;
				}
			}
			return count;
		}
	, 1, [null,null,['self']]);
		$cls_definition['cardinality'] = $method;
		$method = $pyjs__bind_method2('intersects', function(bitset) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				bitset = arguments[1];
			}
			var $attr652,$iter130_array,$501,$500,$502,$iter130_type,$bool202,$len98,$iter130_idx,$iter130_nextval,dat,$attr653,$iter130_iter,$attr651,$attr656,$attr654,$attr655,$499;
			$iter130_iter = $p['range']((($len98=bitset['_data']) === null?0:
				(typeof $len98['__array'] != 'undefined' ? $len98['__array']['length']:
					(typeof $len98['__len__'] == 'function'?$len98['__len__']():
						(typeof $len98['length'] != 'undefined'?$len98['length']:
							$p['len']($len98))))));
			if (typeof ($iter130_array = $iter130_iter['__array']) != 'undefined') {
				$iter130_type = 0;
			} else {
				$iter130_iter = $iter130_iter['__iter__']();
				$iter130_type = typeof ($iter130_array = $iter130_iter['__array']) != 'undefined'? 0 : (typeof $iter130_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter130_idx = 0;
			while (typeof ($iter130_nextval=($iter130_type?($iter130_type > 0?$iter130_iter.next(true,false):$p['wrapped_next']($iter130_iter)):$iter130_array[$iter130_idx++])) != 'undefined') {
				dat = $iter130_nextval;
				if ((($bool202=((typeof ($499=bitset['_data'])['__array'] != 'undefined'?
					((typeof $499['__array'][$500=dat]) != 'undefined'?$499['__array'][$500]:
						$499['__getitem__']($500)):
						$499['__getitem__'](dat)))&((typeof ($501=self['_data'])['__array'] != 'undefined'?
					((typeof $501['__array'][$502=dat]) != 'undefined'?$501['__array'][$502]:
						$501['__getitem__']($502)):
						$501['__getitem__'](dat)))) === null || $bool202 === false || $bool202 === 0 || $bool202 === '' ?
						false :
						(typeof $bool202=='object'?
							(typeof $bool202['__nonzero__']=='function'?
								$bool202['__nonzero__']() :
								(typeof $bool202['__len__']=='function'?
									($bool202['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return true;
				}
			}
			return false;
		}
	, 1, [null,null,['self'],['bitset']]);
		$cls_definition['intersects'] = $method;
		$method = $pyjs__bind_method2('andSet', function(bitset) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				bitset = arguments[1];
			}
			var $505,$504,$506,$len100,$503,$iter131_idx,$iter131_iter,$iter131_array,$attr657,$iter131_nextval,$attr658,$attr659,dat,$len99,data,$iter131_type,$attr666,$attr665,$attr664,$attr663,$attr662,$attr661,$attr660;
			data = $p['min']((($len99=self['_data']) === null?0:
				(typeof $len99['__array'] != 'undefined' ? $len99['__array']['length']:
					(typeof $len99['__len__'] == 'function'?$len99['__len__']():
						(typeof $len99['length'] != 'undefined'?$len99['length']:
							$p['len']($len99))))), (($len100=bitset['_data']) === null?0:
				(typeof $len100['__array'] != 'undefined' ? $len100['__array']['length']:
					(typeof $len100['__len__'] == 'function'?$len100['__len__']():
						(typeof $len100['length'] != 'undefined'?$len100['length']:
							$p['len']($len100))))));
			$iter131_iter = $p['range'](data);
			if (typeof ($iter131_array = $iter131_iter['__array']) != 'undefined') {
				$iter131_type = 0;
			} else {
				$iter131_iter = $iter131_iter['__iter__']();
				$iter131_type = typeof ($iter131_array = $iter131_iter['__array']) != 'undefined'? 0 : (typeof $iter131_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter131_idx = 0;
			while (typeof ($iter131_nextval=($iter131_type?($iter131_type > 0?$iter131_iter.next(true,false):$p['wrapped_next']($iter131_iter)):$iter131_array[$iter131_idx++])) != 'undefined') {
				dat = $iter131_nextval;
				self['_data']['__setitem__'](dat, ((typeof ($503=self['_data'])['__array'] != 'undefined'?
					((typeof $503['__array'][$504=dat]) != 'undefined'?$503['__array'][$504]:
						$503['__getitem__']($504)):
						$503['__getitem__'](dat)))&((typeof ($505=bitset['_data'])['__array'] != 'undefined'?
					((typeof $505['__array'][$506=dat]) != 'undefined'?$505['__array'][$506]:
						$505['__getitem__']($506)):
						$505['__getitem__'](dat))));
			}
			return null;
		}
	, 1, [null,null,['self'],['bitset']]);
		$cls_definition['andSet'] = $method;
		$method = $pyjs__bind_method2('orSet', function(bitset) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				bitset = arguments[1];
			}
			var $507,$len101,$len102,$509,$508,$iter132_iter,$iter132_array,$iter132_nextval,$attr676,$attr670,$attr671,$attr672,$attr673,$iter132_type,dat,$attr674,$attr675,$iter132_idx,$510,data,$attr669,$attr668,$attr667;
			data = $p['min']((($len101=self['_data']) === null?0:
				(typeof $len101['__array'] != 'undefined' ? $len101['__array']['length']:
					(typeof $len101['__len__'] == 'function'?$len101['__len__']():
						(typeof $len101['length'] != 'undefined'?$len101['length']:
							$p['len']($len101))))), (($len102=bitset['_data']) === null?0:
				(typeof $len102['__array'] != 'undefined' ? $len102['__array']['length']:
					(typeof $len102['__len__'] == 'function'?$len102['__len__']():
						(typeof $len102['length'] != 'undefined'?$len102['length']:
							$p['len']($len102))))));
			$iter132_iter = $p['range'](data);
			if (typeof ($iter132_array = $iter132_iter['__array']) != 'undefined') {
				$iter132_type = 0;
			} else {
				$iter132_iter = $iter132_iter['__iter__']();
				$iter132_type = typeof ($iter132_array = $iter132_iter['__array']) != 'undefined'? 0 : (typeof $iter132_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter132_idx = 0;
			while (typeof ($iter132_nextval=($iter132_type?($iter132_type > 0?$iter132_iter.next(true,false):$p['wrapped_next']($iter132_iter)):$iter132_array[$iter132_idx++])) != 'undefined') {
				dat = $iter132_nextval;
				self['_data']['__setitem__'](dat, ((typeof ($507=self['_data'])['__array'] != 'undefined'?
					((typeof $507['__array'][$508=dat]) != 'undefined'?$507['__array'][$508]:
						$507['__getitem__']($508)):
						$507['__getitem__'](dat)))|((typeof ($509=bitset['_data'])['__array'] != 'undefined'?
					((typeof $509['__array'][$510=dat]) != 'undefined'?$509['__array'][$510]:
						$509['__getitem__']($510)):
						$509['__getitem__'](dat))));
			}
			return null;
		}
	, 1, [null,null,['self'],['bitset']]);
		$cls_definition['orSet'] = $method;
		$method = $pyjs__bind_method2('xorSet', function(bitset) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				bitset = arguments[1];
			}
			var $len104,$len103,$iter133_iter,$iter133_idx,$iter133_nextval,$attr680,$attr683,$attr682,$attr685,$attr684,$attr686,$iter133_array,$attr678,$attr679,$attr677,dat,$512,$513,$511,data,$514,$attr681,$iter133_type;
			data = $p['min']((($len103=self['_data']) === null?0:
				(typeof $len103['__array'] != 'undefined' ? $len103['__array']['length']:
					(typeof $len103['__len__'] == 'function'?$len103['__len__']():
						(typeof $len103['length'] != 'undefined'?$len103['length']:
							$p['len']($len103))))), (($len104=bitset['_data']) === null?0:
				(typeof $len104['__array'] != 'undefined' ? $len104['__array']['length']:
					(typeof $len104['__len__'] == 'function'?$len104['__len__']():
						(typeof $len104['length'] != 'undefined'?$len104['length']:
							$p['len']($len104))))));
			$iter133_iter = $p['range'](data);
			if (typeof ($iter133_array = $iter133_iter['__array']) != 'undefined') {
				$iter133_type = 0;
			} else {
				$iter133_iter = $iter133_iter['__iter__']();
				$iter133_type = typeof ($iter133_array = $iter133_iter['__array']) != 'undefined'? 0 : (typeof $iter133_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter133_idx = 0;
			while (typeof ($iter133_nextval=($iter133_type?($iter133_type > 0?$iter133_iter.next(true,false):$p['wrapped_next']($iter133_iter)):$iter133_array[$iter133_idx++])) != 'undefined') {
				dat = $iter133_nextval;
				self['_data']['__setitem__'](dat, ((typeof ($511=self['_data'])['__array'] != 'undefined'?
					((typeof $511['__array'][$512=dat]) != 'undefined'?$511['__array'][$512]:
						$511['__getitem__']($512)):
						$511['__getitem__'](dat)))^((typeof ($513=bitset['_data'])['__array'] != 'undefined'?
					((typeof $513['__array'][$514=dat]) != 'undefined'?$513['__array'][$514]:
						$513['__getitem__']($514)):
						$513['__getitem__'](dat))));
			}
			return null;
		}
	, 1, [null,null,['self'],['bitset']]);
		$cls_definition['xorSet'] = $method;
		$method = $pyjs__bind_method2('resize', function(width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}
			var $cmp64,$len105,$cmp66,$cmp67,$attr704,$attr705,$attr706,$cmp63,$attr708,$attr709,$attr701,$attr702,$len106,$attr687,$attr689,$attr688,array,$len108,$attr712,$bool206,$bool207,$bool205,$bool203,$attr710,$attr711,$attr707,$cmp72,$cmp71,$cmp70,$attr717,$attr716,$attr715,$attr714,$attr703,$cmp68,$attr718,$cmp69,$len107,$attr698,$attr699,$attr696,$attr697,$attr694,$attr695,$attr692,$attr693,$attr690,$attr691,$attr713,$cmp65,$attr700,$bool204;
			if ((($bool203=((($cmp63=width)===($cmp64=self['_width'])?0:
				(typeof $cmp63==typeof $cmp64 && ((typeof $cmp63 == 'number')||(typeof $cmp63 == 'string')||(typeof $cmp63 == 'boolean'))?
					($cmp63 == $cmp64 ? 0 : ($cmp63 < $cmp64 ? -1 : 1)):
					$p['cmp']($cmp63, $cmp64))) == 1)) === null || $bool203 === false || $bool203 === 0 || $bool203 === '' ?
					false :
					(typeof $bool203=='object'?
						(typeof $bool203['__nonzero__']=='function'?
							$bool203['__nonzero__']() :
							(typeof $bool203['__len__']=='function'?
								($bool203['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['_width'] = width;
				if ((($bool204=((($cmp65=self['_width'])===($cmp66=((($len105=self['_data']) === null?0:
					(typeof $len105['__array'] != 'undefined' ? $len105['__array']['length']:
						(typeof $len105['__len__'] == 'function'?$len105['__len__']():
							(typeof $len105['length'] != 'undefined'?$len105['length']:
								$p['len']($len105))))))*(self['_bit']))?0:
					(typeof $cmp65==typeof $cmp66 && ((typeof $cmp65 == 'number')||(typeof $cmp65 == 'string')||(typeof $cmp65 == 'boolean'))?
						($cmp65 == $cmp66 ? 0 : ($cmp65 < $cmp66 ? -1 : 1)):
						$p['cmp']($cmp65, $cmp66))) == 1)) === null || $bool204 === false || $bool204 === 0 || $bool204 === '' ?
						false :
						(typeof $bool204=='object'?
							(typeof $bool204['__nonzero__']=='function'?
								$bool204['__nonzero__']() :
								(typeof $bool204['__len__']=='function'?
									($bool204['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					array = self['__typedarray']($m['_ceil']((self['_width'])/((self['_bit'])*(1.0))));
					array['set'](self['_data']);
					self['_data'] = array;
				}
			}
			else if ((($bool205=((($cmp67=width)===($cmp68=self['_width'])?0:
				(typeof $cmp67==typeof $cmp68 && ((typeof $cmp67 == 'number')||(typeof $cmp67 == 'string')||(typeof $cmp67 == 'boolean'))?
					($cmp67 == $cmp68 ? 0 : ($cmp67 < $cmp68 ? -1 : 1)):
					$p['cmp']($cmp67, $cmp68))) == -1)) === null || $bool205 === false || $bool205 === 0 || $bool205 === '' ?
					false :
					(typeof $bool205=='object'?
						(typeof $bool205['__nonzero__']=='function'?
							$bool205['__nonzero__']() :
							(typeof $bool205['__len__']=='function'?
								($bool205['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool206=((($cmp69=width)===($cmp70=(($len106=self) === null?0:
					(typeof $len106['__array'] != 'undefined' ? $len106['__array']['length']:
						(typeof $len106['__len__'] == 'function'?$len106['__len__']():
							(typeof $len106['length'] != 'undefined'?$len106['length']:
								$p['len']($len106))))))?0:
					(typeof $cmp69==typeof $cmp70 && ((typeof $cmp69 == 'number')||(typeof $cmp69 == 'string')||(typeof $cmp69 == 'boolean'))?
						($cmp69 == $cmp70 ? 0 : ($cmp69 < $cmp70 ? -1 : 1)):
						$p['cmp']($cmp69, $cmp70))) == -1)) === null || $bool206 === false || $bool206 === 0 || $bool206 === '' ?
						false :
						(typeof $bool206=='object'?
							(typeof $bool206['__nonzero__']=='function'?
								$bool206['__nonzero__']() :
								(typeof $bool206['__len__']=='function'?
									($bool206['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					width = (($len107=self) === null?0:
						(typeof $len107['__array'] != 'undefined' ? $len107['__array']['length']:
							(typeof $len107['__len__'] == 'function'?$len107['__len__']():
								(typeof $len107['length'] != 'undefined'?$len107['length']:
									$p['len']($len107)))));
				}
				self['_width'] = width;
				if ((($bool207=((($cmp71=self['_width'])===($cmp72=(((($len108=self['_data']) === null?0:
					(typeof $len108['__array'] != 'undefined' ? $len108['__array']['length']:
						(typeof $len108['__len__'] == 'function'?$len108['__len__']():
							(typeof $len108['length'] != 'undefined'?$len108['length']:
								$p['len']($len108))))))*(self['_bit']))-(self['_bit']))?0:
					(typeof $cmp71==typeof $cmp72 && ((typeof $cmp71 == 'number')||(typeof $cmp71 == 'string')||(typeof $cmp71 == 'boolean'))?
						($cmp71 == $cmp72 ? 0 : ($cmp71 < $cmp72 ? -1 : 1)):
						$p['cmp']($cmp71, $cmp72))) < 1)) === null || $bool207 === false || $bool207 === 0 || $bool207 === '' ?
						false :
						(typeof $bool207=='object'?
							(typeof $bool207['__nonzero__']=='function'?
								$bool207['__nonzero__']() :
								(typeof $bool207['__len__']=='function'?
									($bool207['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					array = self['__typedarray']($m['_ceil']((self['_width'])/((self['_bit'])*(1.0))));
					array['set'](self['_data']['subarray'](0, $m['_ceil']((self['_width'])/((self['_bit'])*(1.0)))));
					self['_data'] = array;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['width']]);
		$cls_definition['resize'] = $method;
		$method = $pyjs__bind_method2('size', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr722,$attr720,$attr721,$len109,$attr719;
			return ((($len109=self['_data']) === null?0:
				(typeof $len109['__array'] != 'undefined' ? $len109['__array']['length']:
					(typeof $len109['__len__'] == 'function'?$len109['__len__']():
						(typeof $len109['length'] != 'undefined'?$len109['length']:
							$p['len']($len109))))))*(self['_bit']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['size'] = $method;
		$method = $pyjs__bind_method2('isEmpty', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter134_idx,$bool208,$iter134_nextval,$iter134_type,$iter134_array,$iter134_iter,data;
			$iter134_iter = self['_data'];
			if (typeof ($iter134_array = $iter134_iter['__array']) != 'undefined') {
				$iter134_type = 0;
			} else {
				$iter134_iter = $iter134_iter['__iter__']();
				$iter134_type = typeof ($iter134_array = $iter134_iter['__array']) != 'undefined'? 0 : (typeof $iter134_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter134_idx = 0;
			while (typeof ($iter134_nextval=($iter134_type?($iter134_type > 0?$iter134_iter.next(true,false):$p['wrapped_next']($iter134_iter)):$iter134_array[$iter134_idx++])) != 'undefined') {
				data = $iter134_nextval;
				if ((($bool208=data) === null || $bool208 === false || $bool208 === 0 || $bool208 === '' ?
						false :
						(typeof $bool208=='object'?
							(typeof $bool208['__nonzero__']=='function'?
								$bool208['__nonzero__']() :
								(typeof $bool208['__len__']=='function'?
									($bool208['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return false;
				}
			}
			return true;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isEmpty'] = $method;
		$method = $pyjs__bind_method2('clone', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr726,$attr724,$attr725,$attr723,new_bitset,data;
			new_bitset = self['__class__'](1);
			data = self['__typedarray'](self['_data']);
			new_bitset['_data'] = data;
			new_bitset['_width'] = self['_width'];
			return new_bitset;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clone'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BitSet', $p['tuple']($bases), $data);
	})();
	$m['BitSet16'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$cls_definition['_bit'] = 16;
		$cls_definition['_bitmask'] = null;
		$cls_definition['__typedarray'] = $m['Uint16Array'];
		$method = $pyjs__bind_method2('__init__', function(width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];

			$m['BitSet']['__init__'](self, width);
			return null;
		}
	, 1, [null,null,['self'],['width', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['BitSet']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BitSet16', $p['tuple']($bases), $data);
	})();
	$m['BitSet32'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$cls_definition['_bit'] = 32;
		$cls_definition['_bitmask'] = null;
		$cls_definition['__typedarray'] = $m['Uint32Array'];
		$method = $pyjs__bind_method2('__init__', function(width) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];

			$m['BitSet']['__init__'](self, width);
			return null;
		}
	, 1, [null,null,['self'],['width', null]]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['BitSet']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BitSet32', $p['tuple']($bases), $data);
	})();
	$m['typeOf'] = function(obj) {
		var $attr727,$attr728,$bool209;
		if ((($bool209=$m['pyjs_mode']['optimized']) === null || $bool209 === false || $bool209 === 0 || $bool209 === '' ?
				false :
				(typeof $bool209=='object'?
					(typeof $bool209['__nonzero__']=='function'?
						$bool209['__nonzero__']() :
						(typeof $bool209['__len__']=='function'?
							($bool209['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			return typeof obj;;
		}
		else {
			return typeof obj['valueOf']();;
		}
		return null;
	};
	$m['typeOf']['__name__'] = 'typeOf';

	$m['typeOf']['__bind_type__'] = 0;
	$m['typeOf']['__args__'] = [null,null,['obj']];
	$m['PyjsMode'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.pyjsarray';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			var $tupleassign14 = $p['__ass_unpack'](self['_setmode'](), 2, null);
			self['strict'] = $tupleassign14[0];
			self['optimized'] = $tupleassign14[1];
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__getattr__', function(attr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				attr = arguments[1];
			}
			var $eq60,$bool210,$eq59;
			if ((($bool210=(($eq59=attr)===($eq60='__strict_mode')&&$eq59===null?true:
				($eq59===null?false:($eq60===null?false:
					((typeof $eq59=='object'||typeof $eq59=='function')&&typeof $eq59['__cmp__']=='function'?$eq59['__cmp__']($eq60) === 0:
						((typeof $eq60=='object'||typeof $eq60=='function')&&typeof $eq60['__cmp__']=='function'?$eq60['__cmp__']($eq59) === 0:
							$eq59==$eq60)))))) === null || $bool210 === false || $bool210 === 0 || $bool210 === '' ?
					false :
					(typeof $bool210=='object'?
						(typeof $bool210['__nonzero__']=='function'?
							$bool210['__nonzero__']() :
							(typeof $bool210['__len__']=='function'?
								($bool210['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return true;
			}
			return null;
		}
	, 1, [null,null,['self'],['attr']]);
		$cls_definition['__getattr__'] = $method;
		$method = $pyjs__bind_method2('_setmode', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool211,$eq61,$eq62,$attr730,$attr729;
			if ((($bool211=(($eq61=self['__strict_mode'])===($eq62=true)&&$eq61===null?true:
				($eq61===null?false:($eq62===null?false:
					((typeof $eq61=='object'||typeof $eq61=='function')&&typeof $eq61['__cmp__']=='function'?$eq61['__cmp__']($eq62) === 0:
						((typeof $eq62=='object'||typeof $eq62=='function')&&typeof $eq62['__cmp__']=='function'?$eq62['__cmp__']($eq61) === 0:
							$eq61==$eq62)))))) === null || $bool211 === false || $bool211 === 0 || $bool211 === '' ?
					false :
					(typeof $bool211=='object'?
						(typeof $bool211['__nonzero__']=='function'?
							$bool211['__nonzero__']() :
							(typeof $bool211['__len__']=='function'?
								($bool211['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['tuple']([true, false]);
			}
			else {
				return $p['tuple']([false, true]);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_setmode'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PyjsMode', $p['tuple']($bases), $data);
	})();
	$m['pyjs_mode'] = $m['PyjsMode']();
	$m['PyTypedArray'] = $m['TypedArray'];
	$m['PyUint8ClampedArray'] = $m['Uint8ClampedArray'];
	$m['PyUint8Array'] = $m['Uint8Array'];
	$m['PyUint16Array'] = $m['Uint16Array'];
	$m['PyUint32Array'] = $m['Uint32Array'];
	$m['PyInt8Array'] = $m['Int8Array'];
	$m['PyInt16Array'] = $m['Int16Array'];
	$m['PyInt32Array'] = $m['Int32Array'];
	$m['PyFloat32Array'] = $m['Float32Array'];
	$m['PyFloat64Array'] = $m['Float64Array'];
	$m['PyCanvasPixelArray'] = $m['CanvasPixelArray'];
	$m['PyImageData'] = $m['ImageData'];
	$m['PyImageMatrix'] = $m['ImageMatrix'];
	return this;
}; /* end pyjsdl.pyjsarray */


/* end module: pyjsdl.pyjsarray */


/*
PYJS_DEPS: ['math.ceil', 'math', 'sys']
*/
