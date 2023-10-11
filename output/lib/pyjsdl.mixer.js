/* start module: pyjsdl.mixer */
$pyjs['loaded_modules']['pyjsdl.mixer'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.mixer']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.mixer'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.mixer'];
	$m['__repr__'] = function() { return '<module: pyjsdl.mixer>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.mixer';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['mixer'] = $pyjs['loaded_modules']['pyjsdl.mixer'];


	$m['Audio'] = $p['___import___']('pyjsdl.pyjsobj.Audio', 'pyjsdl', null, false);
	$m['Time'] = $p['___import___']('pyjsdl.time.Time', 'pyjsdl', null, false);
	$m['env'] = $p['___import___']('pyjsdl.env', 'pyjsdl', null, false);
	$m['Const'] = $p['___import___']('pyjsdl.constants', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['Mixer'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.mixer';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,$attr1,$attr2,$attr5,$attr6,$iter2_idx,id,$iter2_array;
			$m['Sound']['_mixer'] = self;
			$m['Channel']['_mixer'] = self;
			self['Sound'] = (typeof Sound == "undefined"?$m['Sound']:Sound);
			self['Channel'] = self['_get_channel'];
			self['_channel_max'] = 8;
			self['_channels'] = $p['dict']([]);
			self['_channel_available'] = function(){
				var $iter1_nextval,$iter1_type,$attr3,$attr4,$collcomp1,$iter1_iter,$iter1_idx,id,$iter1_array;
	$collcomp1 = $p['list']();
			$iter1_iter = $p['range']((self['_channel_max'])-(1), -(1), -(1));
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				id = $iter1_nextval;
				$collcomp1['append'](id);
			}

	return $collcomp1;}();
			self['_channel_active'] = $p['list']([]);
			self['_channel_reserved'] = $p['list']([]);
			self['_channel_reserved_num'] = 0;
			self['_channel_process'] = $p['set']();
			self['_channel_process_end'] = $p['set']();
			$iter2_iter = $p['range'](self['_channel_max']);
			if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter['__iter__']();
				$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				id = $iter2_nextval;
				self['_get_channel'](id);
			}
			self['music'] = (typeof Music == "undefined"?$m['Music']:Music)();
			self['_time'] = $m['Time']();
			self['_timerid'] = 0;
			self['_processing'] = false;
			self['_active'] = false;
			self['_initialized'] = true;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('init', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var $attr8,$attr7,$bool2,$bool1;
			if ((($bool2=!(($bool1=self['_initialized']) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self['_initialized'] = true;
			}
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['init'] = $method;
		$method = $pyjs__bind_method2('pre_init', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}

			self['init']();
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['pre_init'] = $method;
		$method = $pyjs__bind_method2('quit', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['stop']();
			self['music']['_channel']['stop']();
			self['_initialized'] = false;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['quit'] = $method;
		$method = $pyjs__bind_method2('get_init', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$bool3,$attr11,$attr10,$attr12;
			if ((($bool3=self['_initialized']) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				return self['_initialized'];
			}
			else {
				return null;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_init'] = $method;
		$method = $pyjs__bind_method2('stop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter3_idx,$cmp1,$cmp2,$iter3_type,id,$iter3_iter,$bool4,$iter3_array,$attr14,$2,$iter3_nextval,$attr13,$1;
			$iter3_iter = self['_channel_active'];
			if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter['__iter__']();
				$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				id = $iter3_nextval;
				if ((($bool4=((($cmp1=id)===($cmp2=-(1))?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					(typeof ($1=self['_channels'])['__array'] != 'undefined'?
						((typeof $1['__array'][$2=id]) != 'undefined'?$1['__array'][$2]:
							$1['__getitem__']($2)):
							$1['__getitem__'](id))['stop']();
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['stop'] = $method;
		$method = $pyjs__bind_method2('fadeout', function(time) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				time = arguments[1];
			}
			var $cmp4,$cmp3,$iter4_nextval,$bool5,$3,$iter4_idx,$attr15,$iter4_type,$iter4_array,$4,$attr16,$iter4_iter,id;
			$iter4_iter = self['_channel_active'];
			if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter['__iter__']();
				$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				id = $iter4_nextval;
				if ((($bool5=((($cmp3=id)===($cmp4=-(1))?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					(typeof ($3=self['_channels'])['__array'] != 'undefined'?
						((typeof $3['__array'][$4=id]) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__'](id))['fadeout'](time);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['time']]);
		$cls_definition['fadeout'] = $method;
		$method = $pyjs__bind_method2('pause', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter5_nextval,$cmp5,$cmp6,$iter5_idx,$iter5_iter,$bool6,$attr18,$iter5_array,$6,$iter5_type,$attr17,$5,id;
			$iter5_iter = self['_channel_active'];
			if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter['__iter__']();
				$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				id = $iter5_nextval;
				if ((($bool6=((($cmp5=id)===($cmp6=-(1))?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == 1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					(typeof ($5=self['_channels'])['__array'] != 'undefined'?
						((typeof $5['__array'][$6=id]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__'](id))['pause']();
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pause'] = $method;
		$method = $pyjs__bind_method2('unpause', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $cmp7,$iter6_idx,$iter6_type,$cmp8,$attr20,$iter6_array,$attr19,$bool7,$8,$7,$iter6_iter,id,$iter6_nextval;
			$iter6_iter = self['_channel_active'];
			if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter['__iter__']();
				$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				id = $iter6_nextval;
				if ((($bool7=((($cmp7=id)===($cmp8=-(1))?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) == 1)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					(typeof ($7=self['_channels'])['__array'] != 'undefined'?
						((typeof $7['__array'][$8=id]) != 'undefined'?$7['__array'][$8]:
							$7['__getitem__']($8)):
							$7['__getitem__'](id))['unpause']();
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['unpause'] = $method;
		$method = $pyjs__bind_method2('set_num_channels', function(count) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				count = arguments[1];
			}
			var $attr35,$bool10,$cmp9,$bool12,$iter7_idx,$iter8_iter,$attr21,$attr22,$attr23,$attr24,$attr25,$attr26,$attr27,$attr28,$attr29,id,$attr34,$bool11,$iter7_type,$iter8_idx,$iter7_iter,$iter8_type,$attr33,$attr32,$9,$attr30,$cmp11,$cmp10,$12,$cmp12,$bool8,$bool9,$10,$11,$iter7_nextval,$iter7_array,$iter8_array,$attr31,$attr36,$iter8_nextval;
			if ((($bool8=((((($cmp9=count)===($cmp10=self['_channel_max'])?0:
				(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
					($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
					$p['cmp']($cmp9, $cmp10))))|1) == 1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				$iter7_iter = $p['range'](self['_channel_max'], count);
				if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter['__iter__']();
					$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					id = $iter7_nextval;
					self['_get_channel'](id);
					self['_channel_available']['insert'](0, id);
				}
				self['_channel_max'] = count;
			}
			else if ((($bool9=((((($cmp11=count)===($cmp12=0)?0:
				(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
					($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
					$p['cmp']($cmp11, $cmp12))))|1) == 1)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				$iter8_iter = $p['range'](count, self['_channel_max']);
				if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
					$iter8_type = 0;
				} else {
					$iter8_iter = $iter8_iter['__iter__']();
					$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter8_idx = 0;
				while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
					id = $iter8_nextval;
					if ((($bool10=self['_channels']['__contains__'](id)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
						if ((($bool11=((typeof ($9=self['_channels'])['__array'] != 'undefined'?
							((typeof $9['__array'][$10=id]) != 'undefined'?$9['__array'][$10]:
								$9['__getitem__']($10)):
								$9['__getitem__'](id)) !== null)) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
							(typeof ($11=self['_channels'])['__array'] != 'undefined'?
								((typeof $11['__array'][$12=id]) != 'undefined'?$11['__array'][$12]:
									$11['__getitem__']($12)):
									$11['__getitem__'](id))['stop']();
						}
						self['_channels']['__delitem__'](id);
					}
					if ((($bool12=self['_channel_available']['__contains__'](id)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
						self['_channel_available']['remove'](id);
					}
				}
				self['_channel_max'] = count;
			}
			return null;
		}
	, 1, [null,null,['self'],['count']]);
		$cls_definition['set_num_channels'] = $method;
		$method = $pyjs__bind_method2('get_num_channels', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr38,$attr37;
			return self['_channel_max'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_num_channels'] = $method;
		$method = $pyjs__bind_method2('set_reserved', function(count) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				count = arguments[1];
			}
			var $bool13,$bool14,$bool15,$attr46,$attr44,$attr45,$attr42,$attr43,$attr40,$attr41,id,$iter9_iter,$iter9_nextval,$iter9_idx,$iter9_type,$cmp15,$cmp14,$cmp16,$cmp13,$attr39,$iter9_array;
			if ((($bool13=((($cmp13=count)===($cmp14=self['_channel_max'])?0:
				(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
					($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
					$p['cmp']($cmp13, $cmp14))) == 1)) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
					false :
					(typeof $bool13=='object'?
						(typeof $bool13['__nonzero__']=='function'?
							$bool13['__nonzero__']() :
							(typeof $bool13['__len__']=='function'?
								($bool13['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				count = self['_channel_max'];
			}
			else if ((($bool14=((($cmp15=count)===($cmp16=0)?0:
				(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
					($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
					$p['cmp']($cmp15, $cmp16))) == -1)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				count = 0;
			}
			self['_channel_reserved_num'] = count;
			self['_channel_reserved'] = $p['list']([]);
			$iter9_iter = $p['range'](self['_channel_reserved_num']);
			if (typeof ($iter9_array = $iter9_iter['__array']) != 'undefined') {
				$iter9_type = 0;
			} else {
				$iter9_iter = $iter9_iter['__iter__']();
				$iter9_type = typeof ($iter9_array = $iter9_iter['__array']) != 'undefined'? 0 : (typeof $iter9_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter9_idx = 0;
			while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
				id = $iter9_nextval;
				self['_channel_reserved']['append'](id);
				if ((($bool15=self['_channel_available']['__contains__'](id)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					self['_channel_available']['remove'](id);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['count']]);
		$cls_definition['set_reserved'] = $method;
		$method = $pyjs__bind_method2('find_channel', function(force) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				force = arguments[1];
			}
			if (typeof force == 'undefined') force=arguments['callee']['__args__'][3][1];
			var $bool18,$bool19,$iter10_nextval,$18,$bool16,$bool17,$cmp20,$attr47,$attr57,$iter10_iter,id,$attr48,$attr49,$attr60,$bool25,$bool24,$bool21,$bool20,$bool23,$bool22,channel,$attr59,$attr58,$cmp17,longest,$cmp19,$cmp18,$14,$15,$16,$17,$13,$attr51,$attr50,$attr53,$attr52,$attr55,$attr54,$iter10_array,$attr56,$iter10_type,longest_reserved,$iter10_idx;
			if ((($bool16=self['_channel_available']) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				id = self['_channel_available']['pop']();
				self['_channel_available']['insert'](0, id);
				return (typeof ($13=self['_channels'])['__array'] != 'undefined'?
					((typeof $13['__array'][$14=id]) != 'undefined'?$13['__array'][$14]:
						$13['__getitem__']($14)):
						$13['__getitem__'](id));
			}
			if ((($bool17=self['_channel_reserved_num']) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				if ((($bool18=self['_channel_reserved']) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					id = self['_channel_reserved']['pop']();
					self['_channel_reserved']['insert'](0, id);
					return (typeof ($15=self['_channels'])['__array'] != 'undefined'?
						((typeof $15['__array'][$16=id]) != 'undefined'?$15['__array'][$16]:
							$15['__getitem__']($16)):
							$15['__getitem__'](id));
				}
			}
			if ((($bool20=!(($bool19=force) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
				false :
				(typeof $bool19=='object'?
					(typeof $bool19['__nonzero__']=='function'?
						$bool19['__nonzero__']() :
						(typeof $bool19['__len__']=='function'?
							($bool19['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				return null;
			}
			longest = null;
			longest_reserved = null;
			$iter10_iter = self['_channel_active'];
			if (typeof ($iter10_array = $iter10_iter['__array']) != 'undefined') {
				$iter10_type = 0;
			} else {
				$iter10_iter = $iter10_iter['__iter__']();
				$iter10_type = typeof ($iter10_array = $iter10_iter['__array']) != 'undefined'? 0 : (typeof $iter10_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter10_idx = 0;
			while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
				id = $iter10_nextval;
				if ((($bool21=((($cmp17=id)===($cmp18=(self['_channel_reserved_num'])-(1))?0:
					(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
						($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
						$p['cmp']($cmp17, $cmp18))) == 1)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
					longest = id;
					break;
				}
				else if ((($bool22=((($cmp19=id)===($cmp20=-(1))?0:
					(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
						($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
						$p['cmp']($cmp19, $cmp20))) == 1)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
					if ((($bool23=(longest_reserved === null)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
						longest_reserved = id;
					}
				}
			}
			if ((($bool24=(longest !== null)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
				channel = longest;
			}
			else {
				if ((($bool25=(longest_reserved !== null)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
					channel = longest_reserved;
				}
				else {
					channel = 0;
				}
			}
			return (typeof ($17=self['_channels'])['__array'] != 'undefined'?
				((typeof $17['__array'][$18=channel]) != 'undefined'?$17['__array'][$18]:
					$17['__getitem__']($18)):
					$17['__getitem__'](channel));
		}
	, 1, [null,null,['self'],['force', false]]);
		$cls_definition['find_channel'] = $method;
		$method = $pyjs__bind_method2('get_busy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $20,$attr64,$iter11_iter,$iter11_type,$attr63,$attr61,$attr62,$19,$cmp21,$cmp22,$bool26,$bool27,$iter11_array,$iter11_nextval,$iter11_idx,id;
			$iter11_iter = self['_channel_active'];
			if (typeof ($iter11_array = $iter11_iter['__array']) != 'undefined') {
				$iter11_type = 0;
			} else {
				$iter11_iter = $iter11_iter['__iter__']();
				$iter11_type = typeof ($iter11_array = $iter11_iter['__array']) != 'undefined'? 0 : (typeof $iter11_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter11_idx = 0;
			while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
				id = $iter11_nextval;
				if ((($bool26=((($cmp21=id)===($cmp22=-(1))?0:
					(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
						($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
						$p['cmp']($cmp21, $cmp22))) == 1)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
					if ((($bool27=(typeof ($19=self['_channels'])['__array'] != 'undefined'?
						((typeof $19['__array'][$20=id]) != 'undefined'?$19['__array'][$20]:
							$19['__getitem__']($20)):
							$19['__getitem__'](id))['_active']) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
						return true;
					}
				}
			}
			return false;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_busy'] = $method;
		$method = $pyjs__bind_method2('_process', function(id) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				id = arguments[1];
			}
			var $attr65,$attr66,$bool29,$bool28;
			self['_channel_process']['add'](id);
			if ((($bool29=!(($bool28=self['_processing']) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
				false :
				(typeof $bool28=='object'?
					(typeof $bool28['__nonzero__']=='function'?
						$bool28['__nonzero__']() :
						(typeof $bool28['__len__']=='function'?
							($bool28['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
					false :
					(typeof $bool29=='object'?
						(typeof $bool29['__nonzero__']=='function'?
							$bool29['__nonzero__']() :
							(typeof $bool29['__len__']=='function'?
								($bool29['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['_processing'] = true;
				self['_timerid'] = self['_time']['set_interval'](self, 10);
			}
			return null;
		}
	, 1, [null,null,['self'],['id']]);
		$cls_definition['_process'] = $method;
		$method = $pyjs__bind_method2('run', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr67,$attr83,$iter13_idx,$attr75,id,$attr82,$iter12_iter,$attr80,$attr81,$attr68,$attr69,$attr84,$21,$22,$iter14_nextval,$iter13_type,$iter14_array,$iter14_type,complete,$attr77,$attr78,$iter12_array,$iter13_array,$iter14_iter,$iter14_idx,$bool35,$iter13_nextval,$attr79,$iter13_iter,i,$attr76,$iter12_type,$attr74,$attr73,$attr72,$attr71,$attr70,$bool32,$bool33,$bool30,$bool31,$len2,$bool34,$len1,$iter12_idx,$iter12_nextval;
			if ((($bool30=self['_active']) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
					false :
					(typeof $bool30=='object'?
						(typeof $bool30['__nonzero__']=='function'?
							$bool30['__nonzero__']() :
							(typeof $bool30['__len__']=='function'?
								($bool30['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$iter12_iter = self['_channel_process'];
				if (typeof ($iter12_array = $iter12_iter['__array']) != 'undefined') {
					$iter12_type = 0;
				} else {
					$iter12_iter = $iter12_iter['__iter__']();
					$iter12_type = typeof ($iter12_array = $iter12_iter['__array']) != 'undefined'? 0 : (typeof $iter12_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter12_idx = 0;
				while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
					id = $iter12_nextval;
					complete = (typeof ($21=self['_channels'])['__array'] != 'undefined'?
						((typeof $21['__array'][$22=id]) != 'undefined'?$21['__array'][$22]:
							$21['__getitem__']($22)):
							$21['__getitem__'](id))['_process']();
					if ((($bool31=complete) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
							false :
							(typeof $bool31=='object'?
								(typeof $bool31['__nonzero__']=='function'?
									$bool31['__nonzero__']() :
									(typeof $bool31['__len__']=='function'?
										($bool31['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['_channel_process_end']['add'](id);
					}
				}
				if ((($bool32=self['_channel_process_end']) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
						false :
						(typeof $bool32=='object'?
							(typeof $bool32['__nonzero__']=='function'?
								$bool32['__nonzero__']() :
								(typeof $bool32['__len__']=='function'?
									($bool32['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$iter13_iter = $p['range']((($len1=self['_channel_process_end']) === null?0:
						(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
							(typeof $len1['__len__'] == 'function'?$len1['__len__']():
								(typeof $len1['length'] != 'undefined'?$len1['length']:
									$p['len']($len1))))));
					if (typeof ($iter13_array = $iter13_iter['__array']) != 'undefined') {
						$iter13_type = 0;
					} else {
						$iter13_iter = $iter13_iter['__iter__']();
						$iter13_type = typeof ($iter13_array = $iter13_iter['__array']) != 'undefined'? 0 : (typeof $iter13_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter13_idx = 0;
					while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
						i = $iter13_nextval;
						id = self['_channel_process_end']['pop']();
						self['_channel_process']['discard'](id);
					}
					if ((($bool34=!(($bool33=self['_channel_process']) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
						false :
						(typeof $bool33=='object'?
							(typeof $bool33['__nonzero__']=='function'?
								$bool33['__nonzero__']() :
								(typeof $bool33['__len__']=='function'?
									($bool33['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
							false :
							(typeof $bool34=='object'?
								(typeof $bool34['__nonzero__']=='function'?
									$bool34['__nonzero__']() :
									(typeof $bool34['__len__']=='function'?
										($bool34['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['_processing'] = false;
						self['_time']['clear_interval'](self['_timerid']);
					}
				}
			}
			else {
				if ((($bool35=self['_channel_process']) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
					$iter14_iter = $p['range']((($len2=self['_channel_process']) === null?0:
						(typeof $len2['__array'] != 'undefined' ? $len2['__array']['length']:
							(typeof $len2['__len__'] == 'function'?$len2['__len__']():
								(typeof $len2['length'] != 'undefined'?$len2['length']:
									$p['len']($len2))))));
					if (typeof ($iter14_array = $iter14_iter['__array']) != 'undefined') {
						$iter14_type = 0;
					} else {
						$iter14_iter = $iter14_iter['__iter__']();
						$iter14_type = typeof ($iter14_array = $iter14_iter['__array']) != 'undefined'? 0 : (typeof $iter14_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter14_idx = 0;
					while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
						i = $iter14_nextval;
						self['_channel_process']['pop']();
					}
				}
				self['_processing'] = false;
				self['_time']['clear_interval'](self['_timerid']);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['run'] = $method;
		$method = $pyjs__bind_method2('_activate_channel', function(id) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				id = arguments[1];
			}
			var $attr86,$attr85,$cmp23,$cmp24,$cmp25,$cmp26,$bool36,$bool37;
			if ((($bool36=((($cmp23=id)===($cmp24=(self['_channel_reserved_num'])-(1))?0:
				(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
					($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
					$p['cmp']($cmp23, $cmp24))) == 1)) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
					false :
					(typeof $bool36=='object'?
						(typeof $bool36['__nonzero__']=='function'?
							$bool36['__nonzero__']() :
							(typeof $bool36['__len__']=='function'?
								($bool36['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['_channel_available']['remove'](id);
			}
			else if ((($bool37=((($cmp25=id)===($cmp26=-(1))?0:
				(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
					($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
					$p['cmp']($cmp25, $cmp26))) == 1)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
				self['_channel_reserved']['remove'](id);
			}
			self['_channel_active']['append'](id);
			self['_active'] = true;
			return null;
		}
	, 1, [null,null,['self'],['id']]);
		$cls_definition['_activate_channel'] = $method;
		$method = $pyjs__bind_method2('_deactivate_channel', function(id) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				id = arguments[1];
			}
			var $attr87,$bool38,$bool39,$attr88;
			self['_channel_active']['remove'](id);
			if ((($bool39=!(($bool38=self['_channel_active']) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
				self['_active'] = false;
			}
			return null;
		}
	, 1, [null,null,['self'],['id']]);
		$cls_definition['_deactivate_channel'] = $method;
		$method = $pyjs__bind_method2('_restore_channel', function(id) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				id = arguments[1];
			}
			var $attr90,$bool41,$bool40,$attr89,$cmp27,$cmp28,$cmp29,$cmp30;
			if ((($bool40=((($cmp27=id)===($cmp28=(self['_channel_reserved_num'])-(1))?0:
				(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
					($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
					$p['cmp']($cmp27, $cmp28))) == 1)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
				self['_channel_available']['append'](id);
			}
			else if ((($bool41=((($cmp29=id)===($cmp30=-(1))?0:
				(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
					($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
					$p['cmp']($cmp29, $cmp30))) == 1)) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
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
				self['_channel_reserved']['append'](id);
			}
			return null;
		}
	, 1, [null,null,['self'],['id']]);
		$cls_definition['_restore_channel'] = $method;
		$method = $pyjs__bind_method2('_retrieve_channel', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr94,$attr91,$bool42,$attr93,$attr92,$24,id,$23;
			if ((($bool42=self['_channel_available']) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
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
				id = self['_channel_available']['pop']();
				self['_channel_active']['append'](id);
				self['_active'] = true;
				return (typeof ($23=self['_channels'])['__array'] != 'undefined'?
					((typeof $23['__array'][$24=id]) != 'undefined'?$23['__array'][$24]:
						$23['__getitem__']($24)):
						$23['__getitem__'](id));
			}
			else {
				return null;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_retrieve_channel'] = $method;
		$method = $pyjs__bind_method2('_get_channel', function(id) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				id = arguments[1];
			}
			var $attr95,$attr97,$attr96,$bool43,$25,$attr98,$26;
			if ((($bool43=self['_channels']['__contains__'](id)) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
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
				return (typeof ($25=self['_channels'])['__array'] != 'undefined'?
					((typeof $25['__array'][$26=id]) != 'undefined'?$25['__array'][$26]:
						$25['__getitem__']($26)):
						$25['__getitem__'](id));
			}
			else {
				return (typeof Channel == "undefined"?$m['Channel']:Channel)(id);
			}
			return null;
		}
	, 1, [null,null,['self'],['id']]);
		$cls_definition['_get_channel'] = $method;
		$method = $pyjs__bind_method2('_register_channel', function(channel) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				channel = arguments[1];
			}
			var $bool44,$attr99,$cmp32,$attr104,$attr102,$cmp31,$attr100,$attr101,id,$attr103;
			id = channel['_id'];
			if ((($bool44=((($cmp31=id)===($cmp32=self['_channel_max'])?0:
				(typeof $cmp31==typeof $cmp32 && ((typeof $cmp31 == 'number')||(typeof $cmp31 == 'string')||(typeof $cmp31 == 'boolean'))?
					($cmp31 == $cmp32 ? 0 : ($cmp31 < $cmp32 ? -1 : 1)):
					$p['cmp']($cmp31, $cmp32))) == -1)) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
					false :
					(typeof $bool44=='object'?
						(typeof $bool44['__nonzero__']=='function'?
							$bool44['__nonzero__']() :
							(typeof $bool44['__len__']=='function'?
								($bool44['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['_channels']['__setitem__'](id, channel);
			}
			else {
				throw ($p['AttributeError']('Channel not available.'));
			}
			return null;
		}
	, 1, [null,null,['self'],['channel']]);
		$cls_definition['_register_channel'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Mixer', $p['tuple']($bases), $data);
	})();
	$m['Sound'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.mixer';
		$cls_definition['_id'] = 0;
		$cls_definition['_mixer'] = null;
		$method = $pyjs__bind_method2('__init__', function(sound_file, id) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sound_file = arguments[1];
				id = arguments[2];
			}
			if (typeof id == 'undefined') id=arguments['callee']['__args__'][4][1];
			var $bool46,$bool45,$attr106,$attr107,$attr105,$attr108;
			if ((($bool45=(id === null)) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
					false :
					(typeof $bool45=='object'?
						(typeof $bool45['__nonzero__']=='function'?
							$bool45['__nonzero__']() :
							(typeof $bool45['__len__']=='function'?
								($bool45['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['_id'] = $m['Sound']['_id'];
				$m['Sound']['_id'] += 1;
			}
			else {
				self['_id'] = id;
			}
			if ((($bool46=$p['isinstance'](sound_file, $p['str'])) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
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
				self['_sound_object'] = $m['Audio'](sound_file['$$replace']('\\', '/'));
			}
			else {
				self['_sound_object'] = sound_file;
			}
			self['_sound_objects'] = $p['list']([]);
			self['_sound_objects']['append'](self['_sound_object']);
			self['_channel'] = null;
			self['_volume'] = 1.0;
			return null;
		}
	, 1, [null,null,['self'],['sound_file'],['id', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('play', function(loops, maxtime, fade_ms) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				loops = arguments[1];
				maxtime = arguments[2];
				fade_ms = arguments[3];
			}
			if (typeof loops == 'undefined') loops=arguments['callee']['__args__'][3][1];
			if (typeof maxtime == 'undefined') maxtime=arguments['callee']['__args__'][4][1];
			if (typeof fade_ms == 'undefined') fade_ms=arguments['callee']['__args__'][5][1];
			var $bool47,$attr111,$attr110,$attr112,$attr109;
			self['_channel'] = self['_mixer']['_retrieve_channel']();
			if ((($bool47=self['_channel']) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
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
				self['_channel']['_play'](self, loops, maxtime, fade_ms);
			}
			return self['_channel'];
		}
	, 1, [null,null,['self'],['loops', 0],['maxtime', 0],['fade_ms', 0]]);
		$cls_definition['play'] = $method;
		$method = $pyjs__bind_method2('stop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var channels,$30,$attr116,id,$29,$28,$iter15_iter,$27,$pyjs_try_err,$iter15_array,$eq2,$eq1,$bool49,$bool48,$cmp34,$cmp33,$attr118,$attr113,$attr115,$attr114,$attr117,$iter15_idx,$iter15_nextval,$iter15_type;
			channels = self['_mixer']['_channels'];
			$iter15_iter = self['_mixer']['_channel_active'];
			if (typeof ($iter15_array = $iter15_iter['__array']) != 'undefined') {
				$iter15_type = 0;
			} else {
				$iter15_iter = $iter15_iter['__iter__']();
				$iter15_type = typeof ($iter15_array = $iter15_iter['__array']) != 'undefined'? 0 : (typeof $iter15_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter15_idx = 0;
			while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
				id = $iter15_nextval;
				if ((($bool48=((($cmp33=id)===($cmp34=-(1))?0:
					(typeof $cmp33==typeof $cmp34 && ((typeof $cmp33 == 'number')||(typeof $cmp33 == 'string')||(typeof $cmp33 == 'boolean'))?
						($cmp33 == $cmp34 ? 0 : ($cmp33 < $cmp34 ? -1 : 1)):
						$p['cmp']($cmp33, $cmp34))) == 1)) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
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
					try {
						if ((($bool49=(($eq1=(typeof ($27=channels)['__array'] != 'undefined'?
							((typeof $27['__array'][$28=id]) != 'undefined'?$27['__array'][$28]:
								$27['__getitem__']($28)):
								$27['__getitem__'](id))['_sound']['_id'])===($eq2=self['_id'])&&$eq1===null?true:
							($eq1===null?false:($eq2===null?false:
								((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1['__cmp__']=='function'?$eq1['__cmp__']($eq2) === 0:
									((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2['__cmp__']=='function'?$eq2['__cmp__']($eq1) === 0:
										$eq1==$eq2)))))) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
								false :
								(typeof $bool49=='object'?
									(typeof $bool49['__nonzero__']=='function'?
										$bool49['__nonzero__']() :
										(typeof $bool49['__len__']=='function'?
											($bool49['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							(typeof ($29=channels)['__array'] != 'undefined'?
								((typeof $29['__array'][$30=id]) != 'undefined'?$29['__array'][$30]:
									$29['__getitem__']($30)):
									$29['__getitem__'](id))['stop']();
						}
					} catch($pyjs_try_err) {
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
							continue;
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['stop'] = $method;
		$method = $pyjs__bind_method2('fadeout', function(time) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				time = arguments[1];
			}
			var $bool50,$bool51,channels,$pyjs_try_err,$iter16_iter,id,$iter16_type,$attr120,$attr121,$attr122,$attr123,$attr124,$iter16_nextval,$iter16_array,$eq3,$eq4,$cmp36,$cmp35,$attr119,$iter16_idx,$34,$32,$33,$31;
			channels = self['_mixer']['_channels'];
			$iter16_iter = self['_mixer']['_channel_active'];
			if (typeof ($iter16_array = $iter16_iter['__array']) != 'undefined') {
				$iter16_type = 0;
			} else {
				$iter16_iter = $iter16_iter['__iter__']();
				$iter16_type = typeof ($iter16_array = $iter16_iter['__array']) != 'undefined'? 0 : (typeof $iter16_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter16_idx = 0;
			while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
				id = $iter16_nextval;
				if ((($bool50=((($cmp35=id)===($cmp36=-(1))?0:
					(typeof $cmp35==typeof $cmp36 && ((typeof $cmp35 == 'number')||(typeof $cmp35 == 'string')||(typeof $cmp35 == 'boolean'))?
						($cmp35 == $cmp36 ? 0 : ($cmp35 < $cmp36 ? -1 : 1)):
						$p['cmp']($cmp35, $cmp36))) == 1)) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
						false :
						(typeof $bool50=='object'?
							(typeof $bool50['__nonzero__']=='function'?
								$bool50['__nonzero__']() :
								(typeof $bool50['__len__']=='function'?
									($bool50['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					try {
						if ((($bool51=(($eq3=(typeof ($31=channels)['__array'] != 'undefined'?
							((typeof $31['__array'][$32=id]) != 'undefined'?$31['__array'][$32]:
								$31['__getitem__']($32)):
								$31['__getitem__'](id))['_sound']['_id'])===($eq4=self['_id'])&&$eq3===null?true:
							($eq3===null?false:($eq4===null?false:
								((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3['__cmp__']=='function'?$eq3['__cmp__']($eq4) === 0:
									((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4['__cmp__']=='function'?$eq4['__cmp__']($eq3) === 0:
										$eq3==$eq4)))))) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
								false :
								(typeof $bool51=='object'?
									(typeof $bool51['__nonzero__']=='function'?
										$bool51['__nonzero__']() :
										(typeof $bool51['__len__']=='function'?
											($bool51['__len__']()>0 ?
												true :
												false) :
											true ) ) :
									 true ) )) {
							(typeof ($33=channels)['__array'] != 'undefined'?
								((typeof $33['__array'][$34=id]) != 'undefined'?$33['__array'][$34]:
									$33['__getitem__']($34)):
									$33['__getitem__'](id))['fadeout'](time);
						}
					} catch($pyjs_try_err) {
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
							continue;
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['time']]);
		$cls_definition['fadeout'] = $method;
		$method = $pyjs__bind_method2('set_volume', function(volume) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				volume = arguments[1];
			}
			var $bool52,$bool53,$cmp39,$cmp38,$cmp37,$cmp40;
			if ((($bool52=((($cmp37=volume)===($cmp38=0.0)?0:
				(typeof $cmp37==typeof $cmp38 && ((typeof $cmp37 == 'number')||(typeof $cmp37 == 'string')||(typeof $cmp37 == 'boolean'))?
					($cmp37 == $cmp38 ? 0 : ($cmp37 < $cmp38 ? -1 : 1)):
					$p['cmp']($cmp37, $cmp38))) == -1)) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
					false :
					(typeof $bool52=='object'?
						(typeof $bool52['__nonzero__']=='function'?
							$bool52['__nonzero__']() :
							(typeof $bool52['__len__']=='function'?
								($bool52['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				volume = 0.0;
			}
			else if ((($bool53=((($cmp39=volume)===($cmp40=1.0)?0:
				(typeof $cmp39==typeof $cmp40 && ((typeof $cmp39 == 'number')||(typeof $cmp39 == 'string')||(typeof $cmp39 == 'boolean'))?
					($cmp39 == $cmp40 ? 0 : ($cmp39 < $cmp40 ? -1 : 1)):
					$p['cmp']($cmp39, $cmp40))) == 1)) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
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
				volume = 1.0;
			}
			self['_volume'] = volume;
			return null;
		}
	, 1, [null,null,['self'],['volume']]);
		$cls_definition['set_volume'] = $method;
		$method = $pyjs__bind_method2('get_volume', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr125,$attr126;
			return self['_volume'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_volume'] = $method;
		$method = $pyjs__bind_method2('get_num_channels', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool54,$bool55,channels,$cmp42,$iter17_type,$cmp41,id,$iter17_iter,$pyjs_try_err,$attr127,$attr128,$attr129,channel,$iter17_nextval,$eq6,$eq5,$iter17_array,$36,$35,$attr132,$attr131,$attr130,$iter17_idx;
			channels = self['_mixer']['_channels'];
			channel = 0;
			$iter17_iter = self['_mixer']['_channel_active'];
			if (typeof ($iter17_array = $iter17_iter['__array']) != 'undefined') {
				$iter17_type = 0;
			} else {
				$iter17_iter = $iter17_iter['__iter__']();
				$iter17_type = typeof ($iter17_array = $iter17_iter['__array']) != 'undefined'? 0 : (typeof $iter17_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter17_idx = 0;
			while (typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined') {
				id = $iter17_nextval;
				if ((($bool54=((($cmp41=id)===($cmp42=-(1))?0:
					(typeof $cmp41==typeof $cmp42 && ((typeof $cmp41 == 'number')||(typeof $cmp41 == 'string')||(typeof $cmp41 == 'boolean'))?
						($cmp41 == $cmp42 ? 0 : ($cmp41 < $cmp42 ? -1 : 1)):
						$p['cmp']($cmp41, $cmp42))) == 1)) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
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
					try {
						if ((($bool55=(($eq5=(typeof ($35=channels)['__array'] != 'undefined'?
							((typeof $35['__array'][$36=id]) != 'undefined'?$35['__array'][$36]:
								$35['__getitem__']($36)):
								$35['__getitem__'](id))['_sound']['_id'])===($eq6=self['_id'])&&$eq5===null?true:
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
							channel += 1;
						}
					} catch($pyjs_try_err) {
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
							continue;
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
			}
			return channel;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_num_channels'] = $method;
		$method = $pyjs__bind_method2('get_length', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['_sound_object']['getDuration']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_length'] = $method;
		$method = $pyjs__bind_method2('get_sound_object', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr133,sound_object,$bool56,$attr134;
			if ((($bool56=self['_sound_objects']) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
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
				sound_object = self['_sound_objects']['pop']();
			}
			else {
				sound_object = $m['Audio'](self['_sound_object']['getSrc']());
			}
			return sound_object;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_sound_object'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Sound', $p['tuple']($bases), $data);
	})();
	$m['Channel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.mixer';
		$cls_definition['_mixer'] = null;
		$method = $pyjs__bind_method2('__init__', function(id) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				id = arguments[1];
			}
			var $lambda1;
			self['_id'] = id;
			self['_sound'] = null;
			self['_sound_object'] = null;
			self['_active'] = false;
			self['_pause'] = false;
			self['_loops'] = 0;
			self['_volume'] = 1.0;
			self['_lvolume'] = 1.0;
			self['_rvolume'] = 1.0;
			self['_queue'] = null;
			self['_endevent'] = null;
			self['_time'] = 0;
			self['_maxtime'] = 0;
			self['_fadein'] = 0;
			self['_fadeout'] = 0;
			self['_dvol'] = 1.0;
			self['_timerid'] = 0;
			self['_mixer']['_register_channel'](self);
			var 			$lambda1 = function(event) {

				return self['_onended'](event);
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = [null,null,['event']];
			self['_ended_handler'] = $lambda1;
			return null;
		}
	, 1, [null,null,['self'],['id']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_set_sound', function(sound) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sound = arguments[1];
			}
			var $attr136,$attr135;
			self['_sound'] = sound;
			self['_sound_object'] = self['_sound']['get_sound_object']();
			self['_sound_object']['element']['onended'] = self['_ended_handler'];
			return null;
		}
	, 1, [null,null,['self'],['sound']]);
		$cls_definition['_set_sound'] = $method;
		$method = $pyjs__bind_method2('_reset_sound', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool60,$attr140,$bool57,$bool58,$bool59,$attr137,$attr139,$attr138,restart;
			self['_active'] = false;
			restart = !(($bool57=self['_pause']) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
				false :
				(typeof $bool57=='object'?
					(typeof $bool57['__nonzero__']=='function'?
						$bool57['__nonzero__']() :
						(typeof $bool57['__len__']=='function'?
							($bool57['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) );
			if ((($bool59=!(($bool58=self['_sound']) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
				false :
				(typeof $bool58=='object'?
					(typeof $bool58['__nonzero__']=='function'?
						$bool58['__nonzero__']() :
						(typeof $bool58['__len__']=='function'?
							($bool58['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
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
				return null;
			}
			self['_sound_object']['element']['pause']();
			self['_sound_object']['element']['currentTime'] = 0;
			if ((($bool60=restart) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
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
				self['_sound_object']['play']();
			}
			self['_active'] = true;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_reset_sound'] = $method;
		$method = $pyjs__bind_method2('play', function(sound, loops, maxtime, fade_ms) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sound = arguments[1];
				loops = arguments[2];
				maxtime = arguments[3];
				fade_ms = arguments[4];
			}
			if (typeof loops == 'undefined') loops=arguments['callee']['__args__'][4][1];
			if (typeof maxtime == 'undefined') maxtime=arguments['callee']['__args__'][5][1];
			if (typeof fade_ms == 'undefined') fade_ms=arguments['callee']['__args__'][6][1];
			var $attr142,$attr143,$attr141,$attr146,$attr147,$attr144,$attr145,$attr149,$bool61,$bool63,$bool62,$bool64,volume,$attr154,$attr151,$attr150,$attr153,$attr152,$attr148;
			if ((($bool61=self['_sound']) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
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
				volume = self['_volume'];
				self['stop']();
				self['_volume'] = volume;
			}
			self['_set_sound'](sound);
			self['_mixer']['_activate_channel'](self['_id']);
			self['_loops'] = loops;
			if ((($bool62=maxtime) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
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
				self['_maxtime'] = (maxtime)/(1000.0);
				self['_timerid'] = self['_mixer']['_time']['set_timeout'](self, maxtime);
			}
			if ((($bool63=fade_ms) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
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
				self['_fadein'] = (fade_ms)/(1000.0);
				self['_mixer']['_process'](self['_id']);
				self['_sound_object']['element']['volume'] = 0.01;
			}
			else {
				self['_sound_object']['element']['volume'] = (self['_volume'])*(self['_sound']['_volume']);
			}
			self['_sound_object']['element']['play']();
			if ((($bool64=self['_sound_object']['element']['paused']) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
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
				self['stop']();
			}
			else {
				self['_active'] = true;
			}
			return null;
		}
	, 1, [null,null,['self'],['sound'],['loops', 0],['maxtime', 0],['fade_ms', 0]]);
		$cls_definition['play'] = $method;
		$method = $pyjs__bind_method2('_play', function(sound, loops, maxtime, fade_ms) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sound = arguments[1];
				loops = arguments[2];
				maxtime = arguments[3];
				fade_ms = arguments[4];
			}
			var $attr155,$attr157,$attr156,$bool65,$bool67,$bool66,$attr160,$attr159,$attr158,$attr162,$attr161;
			self['_set_sound'](sound);
			self['_loops'] = loops;
			if ((($bool65=maxtime) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
					false :
					(typeof $bool65=='object'?
						(typeof $bool65['__nonzero__']=='function'?
							$bool65['__nonzero__']() :
							(typeof $bool65['__len__']=='function'?
								($bool65['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['_maxtime'] = (maxtime)/(1000.0);
				self['_timerid'] = self['_mixer']['_time']['set_timeout'](self, maxtime);
			}
			if ((($bool66=fade_ms) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
					false :
					(typeof $bool66=='object'?
						(typeof $bool66['__nonzero__']=='function'?
							$bool66['__nonzero__']() :
							(typeof $bool66['__len__']=='function'?
								($bool66['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['_fadein'] = (fade_ms)/(1000.0);
				self['_mixer']['_process'](self['_id']);
				self['_sound_object']['element']['volume'] = 0.01;
			}
			else {
				self['_sound_object']['element']['volume'] = (self['_volume'])*(self['_sound']['_volume']);
			}
			self['_sound_object']['element']['play']();
			if ((($bool67=self['_sound_object']['element']['paused']) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
					false :
					(typeof $bool67=='object'?
						(typeof $bool67['__nonzero__']=='function'?
							$bool67['__nonzero__']() :
							(typeof $bool67['__len__']=='function'?
								($bool67['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['stop']();
			}
			else {
				self['_active'] = true;
			}
			return null;
		}
	, 1, [null,null,['self'],['sound'],['loops'],['maxtime'],['fade_ms']]);
		$cls_definition['_play'] = $method;
		$method = $pyjs__bind_method2('_replay', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr168,$attr164,$attr165,$attr167,$attr163,$bool68,$attr166;
			self['_sound_object']['element']['volume'] = (self['_volume'])*(self['_sound']['_volume']);
			self['_sound_object']['element']['play']();
			if ((($bool68=self['_sound_object']['element']['paused']) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
					false :
					(typeof $bool68=='object'?
						(typeof $bool68['__nonzero__']=='function'?
							$bool68['__nonzero__']() :
							(typeof $bool68['__len__']=='function'?
								($bool68['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['stop']();
			}
			else {
				self['_active'] = true;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_replay'] = $method;
		$method = $pyjs__bind_method2('_process', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr191,$attr190,$attr193,$attr192,$attr195,$attr194,$attr197,$attr196,$attr199,$attr198,$bool72,$bool73,$bool70,$bool71,$cmp43,$cmp46,$cmp44,$cmp45,$attr169,$attr186,$attr209,$attr208,$attr205,$attr204,$attr207,$attr206,$attr201,$attr200,$attr203,$attr202,complete,$attr188,$attr189,$bool69,$attr187,$attr184,$attr185,$attr182,$attr183,$attr180,$attr181,$attr179,$attr178,$attr177,$attr176,$attr175,$attr174,$attr173,$attr172,$attr171,$attr170,$attr212,$attr213,$attr210,$attr211,$attr214;
			if ((($bool69=self['_active']) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
					false :
					(typeof $bool69=='object'?
						(typeof $bool69['__nonzero__']=='function'?
							$bool69['__nonzero__']() :
							(typeof $bool69['__len__']=='function'?
								($bool69['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				complete = false;
			}
			else {
				complete = true;
				return complete;
			}
			self['_time'] = self['_sound_object']['element']['currentTime'];
			complete = false;
			if ((($bool70=self['_fadein']) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
					false :
					(typeof $bool70=='object'?
						(typeof $bool70['__nonzero__']=='function'?
							$bool70['__nonzero__']() :
							(typeof $bool70['__len__']=='function'?
								($bool70['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool71=((($cmp43=self['_time'])===($cmp44=self['_fadein'])?0:
					(typeof $cmp43==typeof $cmp44 && ((typeof $cmp43 == 'number')||(typeof $cmp43 == 'string')||(typeof $cmp43 == 'boolean'))?
						($cmp43 == $cmp44 ? 0 : ($cmp43 < $cmp44 ? -1 : 1)):
						$p['cmp']($cmp43, $cmp44))) == -1)) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
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
					self['_dvol'] = (self['_time'])/(self['_fadein']);
					self['_sound_object']['element']['volume'] = ((self['_volume'])*(self['_sound']['_volume']))*(self['_dvol']);
				}
				else {
					self['_fadein'] = 0;
					complete = true;
					self['_sound_object']['element']['volume'] = (self['_volume'])*(self['_sound']['_volume']);
				}
			}
			else if ((($bool72=self['_fadeout']) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
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
				if ((($bool73=((($cmp45=self['_time'])===($cmp46=self['_fadeout'])?0:
					(typeof $cmp45==typeof $cmp46 && ((typeof $cmp45 == 'number')||(typeof $cmp45 == 'string')||(typeof $cmp45 == 'boolean'))?
						($cmp45 == $cmp46 ? 0 : ($cmp45 < $cmp46 ? -1 : 1)):
						$p['cmp']($cmp45, $cmp46))) == -1)) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
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
					self['_dvol'] = (1.0)-((self['_time'])/(self['_fadeout']));
					self['_sound_object']['element']['volume'] = ((self['_volume'])*(self['_sound']['_volume']))*(self['_dvol']);
				}
				else {
					self['_fadeout'] = 0;
					complete = true;
					self['_dvol'] = 0.01;
					self['_sound_object']['element']['volume'] = ((self['_volume'])*(self['_sound']['_volume']))*(self['_dvol']);
					self['_loops'] = 0;
					self['_onended']();
				}
			}
			return complete;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_process'] = $method;
		$method = $pyjs__bind_method2('run', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr220,$bool75,$cmp48,$bool74,$cmp47,$attr218,$attr219,time,$attr216,$attr217,$attr215;
			time = self['_sound_object']['element']['currentTime'];
			if ((($bool74=self['_maxtime']) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
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
				if ((($bool75=((($cmp47=time)===($cmp48=self['_maxtime'])?0:
					(typeof $cmp47==typeof $cmp48 && ((typeof $cmp47 == 'number')||(typeof $cmp47 == 'string')||(typeof $cmp47 == 'boolean'))?
						($cmp47 == $cmp48 ? 0 : ($cmp47 < $cmp48 ? -1 : 1)):
						$p['cmp']($cmp47, $cmp48))) == 1)) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
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
					self['_maxtime'] = 0;
					self['_loops'] = 0;
					self['stop']();
				}
				else {
					self['_timerid'] = self['_mixer']['_time']['set_timeout'](self, 10);
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['run'] = $method;
		$method = $pyjs__bind_method2('_onended', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $attr227,$attr226,$attr225,$attr224,$attr223,$attr222,$attr221,$bool79,$bool76,$bool77,$bool80,$attr228,$cmp49,$bool78,$cmp50;
			if ((($bool77=!(($bool76=self['_loops']) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
				false :
				(typeof $bool76=='object'?
					(typeof $bool76['__nonzero__']=='function'?
						$bool76['__nonzero__']() :
						(typeof $bool76['__len__']=='function'?
							($bool76['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
					false :
					(typeof $bool77=='object'?
						(typeof $bool77['__nonzero__']=='function'?
							$bool77['__nonzero__']() :
							(typeof $bool77['__len__']=='function'?
								($bool77['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool79=!(($bool78=self['_queue']) === null || $bool78 === false || $bool78 === 0 || $bool78 === '' ?
					false :
					(typeof $bool78=='object'?
						(typeof $bool78['__nonzero__']=='function'?
							$bool78['__nonzero__']() :
							(typeof $bool78['__len__']=='function'?
								($bool78['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool79 === false || $bool79 === 0 || $bool79 === '' ?
						false :
						(typeof $bool79=='object'?
							(typeof $bool79['__nonzero__']=='function'?
								$bool79['__nonzero__']() :
								(typeof $bool79['__len__']=='function'?
									($bool79['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['stop']();
				}
				else {
					self['play'](self['_queue']);
				}
			}
			else {
				if ((($bool80=((($cmp49=self['_loops'])===($cmp50=0)?0:
					(typeof $cmp49==typeof $cmp50 && ((typeof $cmp49 == 'number')||(typeof $cmp49 == 'string')||(typeof $cmp49 == 'boolean'))?
						($cmp49 == $cmp50 ? 0 : ($cmp49 < $cmp50 ? -1 : 1)):
						$p['cmp']($cmp49, $cmp50))) == 1)) === null || $bool80 === false || $bool80 === 0 || $bool80 === '' ?
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
					self['_loops'] -= 1;
				}
				self['_replay']();
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['_onended'] = $method;
		$method = $pyjs__bind_method2('stop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr234,$attr235,$bool81,$attr237,$attr230,$attr231,$attr232,$attr233,$attr238,$attr236,$attr229,$attr239,$attr242,$bool82,$attr241,$bool83,$attr243,$attr240,$attr244;
			if ((($bool81=self['_sound']) === null || $bool81 === false || $bool81 === 0 || $bool81 === '' ?
					false :
					(typeof $bool81=='object'?
						(typeof $bool81['__nonzero__']=='function'?
							$bool81['__nonzero__']() :
							(typeof $bool81['__len__']=='function'?
								($bool81['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['_active'] = false;
				self['_mixer']['_deactivate_channel'](self['_id']);
				self['_sound_object']['element']['onended'] = null;
				self['_sound_object']['element']['pause']();
				self['_sound_object']['element']['currentTime'] = 0;
				self['_sound']['_sound_objects']['append'](self['_sound_object']);
				self['_sound'] = null;
				self['_sound_object'] = null;
				self['_queue'] = null;
				self['_pause'] = false;
				self['_loops'] = 0;
				if ((($bool82=self['_maxtime']) === null || $bool82 === false || $bool82 === 0 || $bool82 === '' ?
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
					self['_mixer']['_time']['clear_timeout'](self['_timerid']);
					self['_maxtime'] = 0;
				}
				self['_fadein'] = 0;
				self['_fadeout'] = 0;
				self['_volume'] = 1.0;
				self['_lvolume'] = 1.0;
				self['_rvolume'] = 1.0;
				self['_mixer']['_restore_channel'](self['_id']);
				if ((($bool83=(self['_endevent'] !== null)) === null || $bool83 === false || $bool83 === 0 || $bool83 === '' ?
						false :
						(typeof $bool83=='object'?
							(typeof $bool83['__nonzero__']=='function'?
								$bool83['__nonzero__']() :
								(typeof $bool83['__len__']=='function'?
									($bool83['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					$m['env']['event']['post'](self['_endevent']);
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['stop'] = $method;
		$method = $pyjs__bind_method2('pause', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr245,$bool85,$attr247,$bool84,$attr248,$attr246,$bool86;
			if ((($bool84=self['_sound']) === null || $bool84 === false || $bool84 === 0 || $bool84 === '' ?
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
				if ((($bool86=!(($bool85=self['_pause']) === null || $bool85 === false || $bool85 === 0 || $bool85 === '' ?
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
					self['_sound_object']['pause']();
					self['_pause'] = true;
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pause'] = $method;
		$method = $pyjs__bind_method2('unpause', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool87,$attr249,$bool88,$attr252,$attr250,$attr251;
			if ((($bool87=self['_sound']) === null || $bool87 === false || $bool87 === 0 || $bool87 === '' ?
					false :
					(typeof $bool87=='object'?
						(typeof $bool87['__nonzero__']=='function'?
							$bool87['__nonzero__']() :
							(typeof $bool87['__len__']=='function'?
								($bool87['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool88=self['_pause']) === null || $bool88 === false || $bool88 === 0 || $bool88 === '' ?
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
					self['_sound_object']['play']();
					self['_pause'] = false;
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['unpause'] = $method;
		$method = $pyjs__bind_method2('fadeout', function(time) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				time = arguments[1];
			}
			var $attr258,$attr256,$attr257,$attr255,$attr253,$bool89,$attr254;
			if ((($bool89=self['_sound']) === null || $bool89 === false || $bool89 === 0 || $bool89 === '' ?
					false :
					(typeof $bool89=='object'?
						(typeof $bool89['__nonzero__']=='function'?
							$bool89['__nonzero__']() :
							(typeof $bool89['__len__']=='function'?
								($bool89['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['_fadeout'] = (self['_sound_object']['element']['currentTime'])+((time)/(1000.0));
				self['_mixer']['_process'](self['_id']);
			}
			return null;
		}
	, 1, [null,null,['self'],['time']]);
		$cls_definition['fadeout'] = $method;
		$method = $pyjs__bind_method2('set_volume', function(volume) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				volume = arguments[1];
			}
			var $bool90,$bool91,$bool92,$attr259,$attr261,$attr262,$attr260,$attr264,$attr263,$cmp51,$cmp53,$cmp52,$cmp54;
			if ((($bool90=((($cmp51=volume)===($cmp52=0.0)?0:
				(typeof $cmp51==typeof $cmp52 && ((typeof $cmp51 == 'number')||(typeof $cmp51 == 'string')||(typeof $cmp51 == 'boolean'))?
					($cmp51 == $cmp52 ? 0 : ($cmp51 < $cmp52 ? -1 : 1)):
					$p['cmp']($cmp51, $cmp52))) == -1)) === null || $bool90 === false || $bool90 === 0 || $bool90 === '' ?
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
				volume = 0.0;
			}
			else if ((($bool91=((($cmp53=volume)===($cmp54=1.0)?0:
				(typeof $cmp53==typeof $cmp54 && ((typeof $cmp53 == 'number')||(typeof $cmp53 == 'string')||(typeof $cmp53 == 'boolean'))?
					($cmp53 == $cmp54 ? 0 : ($cmp53 < $cmp54 ? -1 : 1)):
					$p['cmp']($cmp53, $cmp54))) == 1)) === null || $bool91 === false || $bool91 === 0 || $bool91 === '' ?
					false :
					(typeof $bool91=='object'?
						(typeof $bool91['__nonzero__']=='function'?
							$bool91['__nonzero__']() :
							(typeof $bool91['__len__']=='function'?
								($bool91['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				volume = 1.0;
			}
			self['_volume'] = volume;
			if ((($bool92=self['_active']) === null || $bool92 === false || $bool92 === 0 || $bool92 === '' ?
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
				self['_sound_object']['element']['volume'] = (self['_volume'])*(self['_sound']['_volume']);
			}
			return null;
		}
	, 1, [null,null,['self'],['volume']]);
		$cls_definition['set_volume'] = $method;
		$method = $pyjs__bind_method2('get_volume', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr266,$attr265;
			return self['_volume'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_volume'] = $method;
		$method = $pyjs__bind_method2('get_busy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr268,$attr267;
			return self['_active'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_busy'] = $method;
		$method = $pyjs__bind_method2('get_sound', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr270,$attr269;
			return self['_sound'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_sound'] = $method;
		$method = $pyjs__bind_method2('queue', function(sound) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sound = arguments[1];
			}
			var $bool93,$bool94,$attr271,$attr272;
			if ((($bool94=!(($bool93=self['_sound']) === null || $bool93 === false || $bool93 === 0 || $bool93 === '' ?
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
				self['play'](sound);
			}
			else {
				self['_queue'] = sound;
			}
			return null;
		}
	, 1, [null,null,['self'],['sound']]);
		$cls_definition['queue'] = $method;
		$method = $pyjs__bind_method2('get_queue', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr273,$attr274;
			return self['_queue'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_queue'] = $method;
		$method = $pyjs__bind_method2('set_endevent', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventType = arguments[1];
			}
			if (typeof eventType == 'undefined') eventType=arguments['callee']['__args__'][3][1];
			var $attr278,$eq8,$or1,$bool95,$bool96,$or2,$bool97,$attr275,$attr276,$attr277,$eq7;
			if ((($bool95=(eventType !== null)) === null || $bool95 === false || $bool95 === 0 || $bool95 === '' ?
					false :
					(typeof $bool95=='object'?
						(typeof $bool95['__nonzero__']=='function'?
							$bool95['__nonzero__']() :
							(typeof $bool95['__len__']=='function'?
								($bool95['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool97=((($bool96=$or1=(self['_endevent'] === null)) === null || $bool96 === false || $bool96 === 0 || $bool96 === '' ?
					false :
					(typeof $bool96=='object'?
						(typeof $bool96['__nonzero__']=='function'?
							$bool96['__nonzero__']() :
							(typeof $bool96['__len__']=='function'?
								($bool96['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:!(($eq7=self['_endevent']['type'])===($eq8=eventType)&&$eq7===null?true:
					($eq7===null?false:($eq8===null?false:
						((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7['__cmp__']=='function'?$eq7['__cmp__']($eq8) === 0:
							((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8['__cmp__']=='function'?$eq8['__cmp__']($eq7) === 0:
								$eq7==$eq8))))))) === null || $bool97 === false || $bool97 === 0 || $bool97 === '' ?
						false :
						(typeof $bool97=='object'?
							(typeof $bool97['__nonzero__']=='function'?
								$bool97['__nonzero__']() :
								(typeof $bool97['__len__']=='function'?
									($bool97['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['_endevent'] = $m['env']['event']['Event'](eventType);
				}
			}
			else {
				self['_endevent'] = null;
			}
			return null;
		}
	, 1, [null,null,['self'],['eventType', null]]);
		$cls_definition['set_endevent'] = $method;
		$method = $pyjs__bind_method2('get_endevent', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr279,$attr281,$attr280,$attr283,$attr282,$bool98,$attr284;
			if ((($bool98=(self['_endevent'] !== null)) === null || $bool98 === false || $bool98 === 0 || $bool98 === '' ?
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
				return self['_endevent']['type'];
			}
			else {
				return $m['Const']['NOEVENT'];
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_endevent'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Channel', $p['tuple']($bases), $data);
	})();
	$m['Music'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.mixer';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['_channel'] = $m['Channel'](-(1));
			self['_sound'] = null;
			self['_queue'] = null;
			self['_volume'] = 1.0;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('load', function(sound_file) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sound_file = arguments[1];
			}
			var $bool99;
			if ((($bool99=self['_channel']['get_busy']()) === null || $bool99 === false || $bool99 === 0 || $bool99 === '' ?
					false :
					(typeof $bool99=='object'?
						(typeof $bool99['__nonzero__']=='function'?
							$bool99['__nonzero__']() :
							(typeof $bool99['__len__']=='function'?
								($bool99['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['_channel']['stop']();
			}
			self['_sound'] = $m['Sound'](sound_file);
			return null;
		}
	, 1, [null,null,['self'],['sound_file']]);
		$cls_definition['load'] = $method;
		$method = $pyjs__bind_method2('unload', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['_channel']['stop']();
			self['_sound'] = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['unload'] = $method;
		$method = $pyjs__bind_method2('play', function(loops, maxtime, fade_ms) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				loops = arguments[1];
				maxtime = arguments[2];
				fade_ms = arguments[3];
			}
			if (typeof loops == 'undefined') loops=arguments['callee']['__args__'][3][1];
			if (typeof maxtime == 'undefined') maxtime=arguments['callee']['__args__'][4][1];
			if (typeof fade_ms == 'undefined') fade_ms=arguments['callee']['__args__'][5][1];
			var $attr285,$attr292,$attr287,$attr286,$attr290,$attr294,$attr293,$attr289,$attr288,$attr291,$bool100;
			self['_channel']['set_volume'](self['_volume']);
			self['_channel']['play'](self['_sound'], loops, maxtime, fade_ms);
			if ((($bool100=self['_queue']) === null || $bool100 === false || $bool100 === 0 || $bool100 === '' ?
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
				self['_channel']['queue'](self['_queue']);
				self['_sound'] = self['_queue'];
				self['_queue'] = null;
			}
			return null;
		}
	, 1, [null,null,['self'],['loops', 0],['maxtime', 0],['fade_ms', 0]]);
		$cls_definition['play'] = $method;
		$method = $pyjs__bind_method2('rewind', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool101;
			if ((($bool101=self['_channel']['get_busy']()) === null || $bool101 === false || $bool101 === 0 || $bool101 === '' ?
					false :
					(typeof $bool101=='object'?
						(typeof $bool101['__nonzero__']=='function'?
							$bool101['__nonzero__']() :
							(typeof $bool101['__len__']=='function'?
								($bool101['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				self['_channel']['_reset_sound']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['rewind'] = $method;
		$method = $pyjs__bind_method2('stop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['_channel']['stop']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['stop'] = $method;
		$method = $pyjs__bind_method2('pause', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['_channel']['pause']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pause'] = $method;
		$method = $pyjs__bind_method2('unpause', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['_channel']['unpause']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['unpause'] = $method;
		$method = $pyjs__bind_method2('fadeout', function(time) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				time = arguments[1];
			}

			self['_channel']['fadeout'](time);
			return null;
		}
	, 1, [null,null,['self'],['time']]);
		$cls_definition['fadeout'] = $method;
		$method = $pyjs__bind_method2('set_volume', function(volume) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				volume = arguments[1];
			}
			var $bool104,$cmp58,$bool103,$bool102,$cmp55,$cmp57,$cmp56;
			if ((($bool102=((($cmp55=volume)===($cmp56=0.0)?0:
				(typeof $cmp55==typeof $cmp56 && ((typeof $cmp55 == 'number')||(typeof $cmp55 == 'string')||(typeof $cmp55 == 'boolean'))?
					($cmp55 == $cmp56 ? 0 : ($cmp55 < $cmp56 ? -1 : 1)):
					$p['cmp']($cmp55, $cmp56))) == -1)) === null || $bool102 === false || $bool102 === 0 || $bool102 === '' ?
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
				volume = 0.0;
			}
			else if ((($bool103=((($cmp57=volume)===($cmp58=1.0)?0:
				(typeof $cmp57==typeof $cmp58 && ((typeof $cmp57 == 'number')||(typeof $cmp57 == 'string')||(typeof $cmp57 == 'boolean'))?
					($cmp57 == $cmp58 ? 0 : ($cmp57 < $cmp58 ? -1 : 1)):
					$p['cmp']($cmp57, $cmp58))) == 1)) === null || $bool103 === false || $bool103 === 0 || $bool103 === '' ?
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
				volume = 1.0;
			}
			self['_volume'] = volume;
			if ((($bool104=self['_channel']['get_busy']()) === null || $bool104 === false || $bool104 === 0 || $bool104 === '' ?
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
				self['_channel']['set_volume'](volume);
			}
			return null;
		}
	, 1, [null,null,['self'],['volume']]);
		$cls_definition['set_volume'] = $method;
		$method = $pyjs__bind_method2('get_volume', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr296,$attr295;
			return self['_volume'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_volume'] = $method;
		$method = $pyjs__bind_method2('get_busy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['_channel']['get_busy']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_busy'] = $method;
		$method = $pyjs__bind_method2('queue', function(sound_file) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sound_file = arguments[1];
			}
			var $attr300,$attr297,$attr299,$bool108,$bool105,$bool107,$bool106,$attr298;
			if ((($bool106=!(($bool105=self['_sound']) === null || $bool105 === false || $bool105 === 0 || $bool105 === '' ?
				false :
				(typeof $bool105=='object'?
					(typeof $bool105['__nonzero__']=='function'?
						$bool105['__nonzero__']() :
						(typeof $bool105['__len__']=='function'?
							($bool105['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool106 === false || $bool106 === 0 || $bool106 === '' ?
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
				return null;
			}
			if ((($bool108=!(($bool107=self['_channel']['get_busy']()) === null || $bool107 === false || $bool107 === 0 || $bool107 === '' ?
				false :
				(typeof $bool107=='object'?
					(typeof $bool107['__nonzero__']=='function'?
						$bool107['__nonzero__']() :
						(typeof $bool107['__len__']=='function'?
							($bool107['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool108 === false || $bool108 === 0 || $bool108 === '' ?
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
				self['_queue'] = $m['Sound'](sound_file);
			}
			else {
				self['_sound'] = $m['Sound'](sound_file);
				self['_channel']['queue'](self['_sound']);
			}
			return null;
		}
	, 1, [null,null,['self'],['sound_file']]);
		$cls_definition['queue'] = $method;
		$method = $pyjs__bind_method2('set_endevent', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventType = arguments[1];
			}
			if (typeof eventType == 'undefined') eventType=arguments['callee']['__args__'][3][1];

			self['_channel']['set_endevent'](eventType);
			return null;
		}
	, 1, [null,null,['self'],['eventType', null]]);
		$cls_definition['set_endevent'] = $method;
		$method = $pyjs__bind_method2('get_endevent', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['_channel']['get_endevent']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_endevent'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Music', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.mixer */


/* end module: pyjsdl.mixer */


/*
PYJS_DEPS: ['pyjsdl.pyjsobj.Audio', 'pyjsdl', 'pyjsdl.pyjsobj', 'pyjsdl.time.Time', 'pyjsdl.time', 'pyjsdl.env', 'pyjsdl.constants']
*/
