/* start module: pyjsdl.vector */
$pyjs['loaded_modules']['pyjsdl.vector'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.vector']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.vector'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.vector'];
	$m['__repr__'] = function() { return '<module: pyjsdl.vector>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.vector';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['vector'] = $pyjs['loaded_modules']['pyjsdl.vector'];
	var $bool89;

	$m['env'] = $p['___import___']('pyjsdl.env', 'pyjsdl', null, false);
	$m['sqrt'] = $p['___import___']('math.sqrt', 'pyjsdl', null, false);
	$m['sin'] = $p['___import___']('math.sin', 'pyjsdl', null, false);
	$m['cos'] = $p['___import___']('math.cos', 'pyjsdl', null, false);
	$m['atan2'] = $p['___import___']('math.atan2', 'pyjsdl', null, false);
	$m['pi'] = $p['___import___']('math.pi', 'pyjsdl', null, false);
	$m['floor'] = $p['___import___']('math.floor', 'pyjsdl', null, false);
	$m['Vector2'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.vector';
		$cls_definition['__slots__'] = $p['list'](['x', 'y']);
		$method = $pyjs__bind_method2('__init__', function() {
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
			var $bool4,$bool5,$19,$and1,$29,$28,$21,$20,$22,$25,$24,$27,$26,$eq2,$eq3,$and2,$eq1,$eq4,$bool2,$bool3,$bool1,$bool6,$bool7,$8,$9,$6,$7,$4,$5,$2,$3,$1,$14,$15,$16,$17,$10,$11,$12,$13,$18,l,$30,$len1,$23;
			l = (($len1=args) === null?0:
				(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
					(typeof $len1['__len__'] == 'function'?$len1['__len__']():
						(typeof $len1['length'] != 'undefined'?$len1['length']:
							$p['len']($len1)))));
			if ((($bool1=(($eq1=l)===($eq2=2)&&$eq1===null?true:
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
				self['x'] = $p['float']((typeof ($1=args)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=0]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__'](0)));
				self['y'] = $p['float']((typeof ($3=args)['__array'] != 'undefined'?
					((typeof $3['__array'][$4=1]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__'](1)));
			}
			else if ((($bool2=(($eq3=l)===($eq4=1)&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3['__cmp__']=='function'?$eq3['__cmp__']($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4['__cmp__']=='function'?$eq4['__cmp__']($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				if ((($bool3=$p['isinstance']((typeof ($5=args)['__array'] != 'undefined'?
					((typeof $5['__array'][$6=0]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__'](0)), $p['tuple']([$p['float_int'], $p['float']]))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					self['x'] = $p['float']((typeof ($7=args)['__array'] != 'undefined'?
						((typeof $7['__array'][$8=0]) != 'undefined'?$7['__array'][$8]:
							$7['__getitem__']($8)):
							$7['__getitem__'](0)));
					self['y'] = $p['float']((typeof ($9=args)['__array'] != 'undefined'?
						((typeof $9['__array'][$10=0]) != 'undefined'?$9['__array'][$10]:
							$9['__getitem__']($10)):
							$9['__getitem__'](0)));
				}
				else {
					self['x'] = $p['float']((typeof ($13=(typeof ($11=args)['__array'] != 'undefined'?
						((typeof $11['__array'][$12=0]) != 'undefined'?$11['__array'][$12]:
							$11['__getitem__']($12)):
							$11['__getitem__'](0)))['__array'] != 'undefined'?
						((typeof $13['__array'][$14=0]) != 'undefined'?$13['__array'][$14]:
							$13['__getitem__']($14)):
							$13['__getitem__'](0)));
					self['y'] = $p['float']((typeof ($17=(typeof ($15=args)['__array'] != 'undefined'?
						((typeof $15['__array'][$16=0]) != 'undefined'?$15['__array'][$16]:
							$15['__getitem__']($16)):
							$15['__getitem__'](0)))['__array'] != 'undefined'?
						((typeof $17['__array'][$18=1]) != 'undefined'?$17['__array'][$18]:
							$17['__getitem__']($18)):
							$17['__getitem__'](1)));
				}
			}
			else {
				if ((($bool4=kwargs) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					if ((($bool6=((($bool5=$and1=kwargs['__contains__']('x')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
						false :
						(typeof $bool5=='object'?
							(typeof $bool5['__nonzero__']=='function'?
								$bool5['__nonzero__']() :
								(typeof $bool5['__len__']=='function'?
									($bool5['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?kwargs['__contains__']('y'):$and1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
						self['x'] = $p['float']((typeof ($19=kwargs)['__array'] != 'undefined'?
							((typeof $19['__array'][$20='x']) != 'undefined'?$19['__array'][$20]:
								$19['__getitem__']($20)):
								$19['__getitem__']('x')));
						self['y'] = $p['float']((typeof ($21=kwargs)['__array'] != 'undefined'?
							((typeof $21['__array'][$22='y']) != 'undefined'?$21['__array'][$22]:
								$21['__getitem__']($22)):
								$21['__getitem__']('y')));
					}
					else if ((($bool7=kwargs['__contains__']('x')) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
						self['x'] = $p['float']((typeof ($23=kwargs)['__array'] != 'undefined'?
							((typeof $23['__array'][$24='x']) != 'undefined'?$23['__array'][$24]:
								$23['__getitem__']($24)):
								$23['__getitem__']('x')));
						self['y'] = $p['float']((typeof ($25=kwargs)['__array'] != 'undefined'?
							((typeof $25['__array'][$26='x']) != 'undefined'?$25['__array'][$26]:
								$25['__getitem__']($26)):
								$25['__getitem__']('x')));
					}
					else {
						self['x'] = $p['float']((typeof ($27=kwargs)['__array'] != 'undefined'?
							((typeof $27['__array'][$28='y']) != 'undefined'?$27['__array'][$28]:
								$27['__getitem__']($28)):
								$27['__getitem__']('y')));
						self['y'] = $p['float']((typeof ($29=kwargs)['__array'] != 'undefined'?
							((typeof $29['__array'][$30='y']) != 'undefined'?$29['__array'][$30]:
								$29['__getitem__']($30)):
								$29['__getitem__']('y')));
					}
				}
				else {
					self['x'] = 0.0;
					self['y'] = 0.0;
				}
			}
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$attr2,$attr3,$attr4;
			return $p['sprintf']('[%g, %g]', $p['tuple']([self['x'], self['y']]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr8,$attr5,$attr7,$attr6,$attr10;
			return $p['sprintf']('<%s(%g, %g)>', $p['tuple']([self['__class__']['__name__'], self['x'], self['y']]));
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
			var $attr16,$bool10,$32,$31,$attr18,$attr15,$attr14,$bool8,$bool9,$attr11,$attr17,$attr13,$attr12;
			if ((($bool8=$p['tuple']([0, -(2)])['__contains__'](index)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				return self['x'];
			}
			else if ((($bool9=$p['tuple']([1, -(1)])['__contains__'](index)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				return self['y'];
			}
			else if ((($bool10=$p['isinstance'](index, $p['slice'])) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				return (typeof ($31=$p['list']([self['x'], self['y']]))['__array'] != 'undefined'?
					((typeof $31['__array'][$32=index]) != 'undefined'?$31['__array'][$32]:
						$31['__getitem__']($32)):
						$31['__getitem__'](index));
			}
			else {
				throw ($p['IndexError']);
			}
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(index, val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				val = arguments[2];
			}
			var $bool11,$bool12,$bool13,$bool14,l,$attr20,$attr21,$attr22,$eq10,$pyjs_try_err,$eq8,$eq9,$eq6,$eq7,$eq5,$attr19,$36,$34,$35,$33,$len2;
			if ((($bool11=(($eq5=index)===($eq6=0)&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5['__cmp__']=='function'?$eq5['__cmp__']($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6['__cmp__']=='function'?$eq6['__cmp__']($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				try {
					self['x'] = $p['float'](val);
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						throw ($p['TypeError']);
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			else if ((($bool12=(($eq7=index)===($eq8=1)&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7['__cmp__']=='function'?$eq7['__cmp__']($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8['__cmp__']=='function'?$eq8['__cmp__']($eq7) === 0:
							$eq7==$eq8)))))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				try {
					self['y'] = $p['float'](val);
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
						throw ($p['TypeError']);
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			else if ((($bool13=$p['isinstance'](index, $p['slice'])) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				l = $p['list']([self['x'], self['y']]);
				l['__setitem__'](index, val);
				if ((($bool14=!(($eq9=(($len2=l) === null?0:
					(typeof $len2['__array'] != 'undefined' ? $len2['__array']['length']:
						(typeof $len2['__len__'] == 'function'?$len2['__len__']():
							(typeof $len2['length'] != 'undefined'?$len2['length']:
								$p['len']($len2))))))===($eq10=2)&&$eq9===null?true:
					($eq9===null?false:($eq10===null?false:
						((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9['__cmp__']=='function'?$eq9['__cmp__']($eq10) === 0:
							((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10['__cmp__']=='function'?$eq10['__cmp__']($eq9) === 0:
								$eq9==$eq10)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
					throw ($p['ValueError']);
				}
				self['x'] = $p['float']((typeof ($33=l)['__array'] != 'undefined'?
					((typeof $33['__array'][$34=0]) != 'undefined'?$33['__array'][$34]:
						$33['__getitem__']($34)):
						$33['__getitem__'](0)));
				self['y'] = $p['float']((typeof ($35=l)['__array'] != 'undefined'?
					((typeof $35['__array'][$36=1]) != 'undefined'?$35['__array'][$36]:
						$35['__getitem__']($36)):
						$35['__getitem__'](1)));
			}
			else {
				throw ($p['IndexError']);
			}
			return null;
		}
	, 1, [null,null,['self'],['index'],['val']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__delitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			throw ($p['TypeError']('Deletion of vector components is not supported'));
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__delitem__'] = $method;
		$method = $pyjs__bind_method2('__getslice__', function(start, stop) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				start = arguments[1];
				stop = arguments[2];
			}
			var $attr23,$attr24,$attr25,$attr26;
			return $p['__getslice']($p['list']([self['x'], self['y']]), start, stop);
		}
	, 1, [null,null,['self'],['start'],['stop']]);
		$cls_definition['__getslice__'] = $method;
		$method = $pyjs__bind_method2('__setslice__', function(lower, upper, val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
				val = arguments[3];
			}
			var $38,$39,$37,$eq11,l,$bool15,$attr30,$len3,$attr27,$attr28,$attr29,$eq12,$40;
			l = $p['list']([self['x'], self['y']]);
			$p['__setslice'](l, lower, upper, val);
			if ((($bool15=!(($eq11=(($len3=l) === null?0:
				(typeof $len3['__array'] != 'undefined' ? $len3['__array']['length']:
					(typeof $len3['__len__'] == 'function'?$len3['__len__']():
						(typeof $len3['length'] != 'undefined'?$len3['length']:
							$p['len']($len3))))))===($eq12=2)&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11['__cmp__']=='function'?$eq11['__cmp__']($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12['__cmp__']=='function'?$eq12['__cmp__']($eq11) === 0:
							$eq11==$eq12)))))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				throw ($p['ValueError']);
			}
			self['x'] = $p['float']((typeof ($37=l)['__array'] != 'undefined'?
				((typeof $37['__array'][$38=0]) != 'undefined'?$37['__array'][$38]:
					$37['__getitem__']($38)):
					$37['__getitem__'](0)));
			self['y'] = $p['float']((typeof ($39=l)['__array'] != 'undefined'?
				((typeof $39['__array'][$40=1]) != 'undefined'?$39['__array'][$40]:
					$39['__getitem__']($40)):
					$39['__getitem__'](1)));
			return null;
		}
	, 1, [null,null,['self'],['lower'],['upper'],['val']]);
		$cls_definition['__setslice__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_iter,$attr36,$iter2_nextval,$iter1_nextval,$iter1_type,val,$iter2_idx,$iter1_iter,$attr33,$attr32,$attr31,$attr37,$iter1_array,$attr35,$attr34,$iter2_type,$attr38,$iter2_array,$iter1_idx;
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
					$iter2_iter = $p['tuple']([self['x'], self['y']]);
					if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter['__iter__']();
						$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							val = $iter2_nextval;
							$yield_value = val;
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
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 2;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__bool__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $or1,$or2,$bool16,$attr42,$attr40,$attr41,$attr39;
			return $p['bool'](((($bool16=$or1=self['x']) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
				false :
				(typeof $bool16=='object'?
					(typeof $bool16['__nonzero__']=='function'?
						$bool16['__nonzero__']() :
						(typeof $bool16['__len__']=='function'?
							($bool16['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:self['y']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__bool__'] = $method;
		$method = $pyjs__bind_method2('__nonzero__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $or4,$or3,$bool17,$attr46,$attr44,$attr45,$attr43;
			return $p['bool'](((($bool17=$or3=self['x']) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
				false :
				(typeof $bool17=='object'?
					(typeof $bool17['__nonzero__']=='function'?
						$bool17['__nonzero__']() :
						(typeof $bool17['__len__']=='function'?
							($bool17['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or3:self['y']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__nonzero__'] = $method;
		$method = $pyjs__bind_method2('dot', function(vector) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				vector = arguments[1];
			}
			var $attr50,$attr47,$43,$42,$41,$44,$attr48,$attr49;
			return ((self['x'])*((typeof ($41=vector)['__array'] != 'undefined'?
				((typeof $41['__array'][$42=0]) != 'undefined'?$41['__array'][$42]:
					$41['__getitem__']($42)):
					$41['__getitem__'](0))))+((self['y'])*((typeof ($43=vector)['__array'] != 'undefined'?
				((typeof $43['__array'][$44=1]) != 'undefined'?$43['__array'][$44]:
					$43['__getitem__']($44)):
					$43['__getitem__'](1))));
		}
	, 1, [null,null,['self'],['vector']]);
		$cls_definition['dot'] = $method;
		$method = $pyjs__bind_method2('cross', function(vector) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				vector = arguments[1];
			}
			var $48,$attr51,$attr53,$attr52,$attr54,$47,$46,$45;
			return ((self['x'])*((typeof ($45=vector)['__array'] != 'undefined'?
				((typeof $45['__array'][$46=1]) != 'undefined'?$45['__array'][$46]:
					$45['__getitem__']($46)):
					$45['__getitem__'](1))))-((self['y'])*((typeof ($47=vector)['__array'] != 'undefined'?
				((typeof $47['__array'][$48=0]) != 'undefined'?$47['__array'][$48]:
					$47['__getitem__']($48)):
					$47['__getitem__'](0))));
		}
	, 1, [null,null,['self'],['vector']]);
		$cls_definition['cross'] = $method;
		$method = $pyjs__bind_method2('magnitude', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr58,$attr55,$attr57,$attr56;
			return $m['sqrt']((Math['pow'](self['x'],2))+(Math['pow'](self['y'],2)));
		}
	, 1, [null,null,['self']]);
		$cls_definition['magnitude'] = $method;
		$method = $pyjs__bind_method2('magnitude_squared', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr59,$attr60,$attr61,$attr62;
			return (Math['pow'](self['x'],2))+(Math['pow'](self['y'],2));
		}
	, 1, [null,null,['self']]);
		$cls_definition['magnitude_squared'] = $method;
		$method = $pyjs__bind_method2('length', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr64,$attr65,$attr66,$attr63;
			return $m['sqrt']((Math['pow'](self['x'],2))+(Math['pow'](self['y'],2)));
		}
	, 1, [null,null,['self']]);
		$cls_definition['length'] = $method;
		$method = $pyjs__bind_method2('length_squared', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr67,$attr68,$attr69,$attr70;
			return (Math['pow'](self['x'],2))+(Math['pow'](self['y'],2));
		}
	, 1, [null,null,['self']]);
		$cls_definition['length_squared'] = $method;
		$method = $pyjs__bind_method2('normalize', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool18,$attr74,$attr73,$attr72,$attr71,mag,$eq13,$eq14;
			mag = self['magnitude']();
			if ((($bool18=(($eq13=mag)===($eq14=0)&&$eq13===null?true:
				($eq13===null?false:($eq14===null?false:
					((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13['__cmp__']=='function'?$eq13['__cmp__']($eq14) === 0:
						((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14['__cmp__']=='function'?$eq14['__cmp__']($eq13) === 0:
							$eq13==$eq14)))))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
				throw ($p['ValueError']('Cannot normalize vector of zero length'));
			}
			return $m['Vector2']((self['x'])/(mag), (self['y'])/(mag));
		}
	, 1, [null,null,['self']]);
		$cls_definition['normalize'] = $method;
		$method = $pyjs__bind_method2('normalize_ip', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool19,$eq16,$eq15,mag;
			mag = self['magnitude']();
			if ((($bool19=(($eq15=mag)===($eq16=0)&&$eq15===null?true:
				($eq15===null?false:($eq16===null?false:
					((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15['__cmp__']=='function'?$eq15['__cmp__']($eq16) === 0:
						((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16['__cmp__']=='function'?$eq16['__cmp__']($eq15) === 0:
							$eq15==$eq16)))))) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				throw ($p['ValueError']('Cannot normalize vector of zero length'));
			}
			self['x'] /= mag;
			self['y'] /= mag;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['normalize_ip'] = $method;
		$method = $pyjs__bind_method2('is_normalized', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $eq18,$eq17;
			return (($eq17=self['magnitude']())===($eq18=1)&&$eq17===null?true:
				($eq17===null?false:($eq18===null?false:
					((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17['__cmp__']=='function'?$eq17['__cmp__']($eq18) === 0:
						((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18['__cmp__']=='function'?$eq18['__cmp__']($eq17) === 0:
							$eq17==$eq18)))));
		}
	, 1, [null,null,['self']]);
		$cls_definition['is_normalized'] = $method;
		$method = $pyjs__bind_method2('scale_to_length', function(length) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				length = arguments[1];
			}
			var $eq20,$attr77,$attr76,$attr78,$eq19,$bool20,mag,$attr75;
			mag = self['magnitude']();
			if ((($bool20=(($eq19=mag)===($eq20=0)&&$eq19===null?true:
				($eq19===null?false:($eq20===null?false:
					((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19['__cmp__']=='function'?$eq19['__cmp__']($eq20) === 0:
						((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20['__cmp__']=='function'?$eq20['__cmp__']($eq19) === 0:
							$eq19==$eq20)))))) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				throw ($p['ValueError']('Cannot scale vector of zero length'));
			}
			self['x'] = ((self['x'])/(mag))*(length);
			self['y'] = ((self['y'])/(mag))*(length);
			return null;
		}
	, 1, [null,null,['self'],['length']]);
		$cls_definition['scale_to_length'] = $method;
		$method = $pyjs__bind_method2('reflect', function(vector) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				vector = arguments[1];
			}
			var vn,$attr82,$attr83,$attr80,$attr81,$attr86,nn,$attr85,$49,$bool21,$64,$61,$60,$63,$62,$eq21,$eq22,c,$attr84,$attr79,$58,$59,$50,$51,$52,$53,$54,$55,$56,$57;
			vn = ((self['x'])*((typeof ($49=vector)['__array'] != 'undefined'?
				((typeof $49['__array'][$50=0]) != 'undefined'?$49['__array'][$50]:
					$49['__getitem__']($50)):
					$49['__getitem__'](0))))+((self['y'])*((typeof ($51=vector)['__array'] != 'undefined'?
				((typeof $51['__array'][$52=1]) != 'undefined'?$51['__array'][$52]:
					$51['__getitem__']($52)):
					$51['__getitem__'](1))));
			nn = (((typeof ($53=vector)['__array'] != 'undefined'?
				((typeof $53['__array'][$54=0]) != 'undefined'?$53['__array'][$54]:
					$53['__getitem__']($54)):
					$53['__getitem__'](0)))*((typeof ($55=vector)['__array'] != 'undefined'?
				((typeof $55['__array'][$56=0]) != 'undefined'?$55['__array'][$56]:
					$55['__getitem__']($56)):
					$55['__getitem__'](0))))+(((typeof ($57=vector)['__array'] != 'undefined'?
				((typeof $57['__array'][$58=1]) != 'undefined'?$57['__array'][$58]:
					$57['__getitem__']($58)):
					$57['__getitem__'](1)))*((typeof ($59=vector)['__array'] != 'undefined'?
				((typeof $59['__array'][$60=1]) != 'undefined'?$59['__array'][$60]:
					$59['__getitem__']($60)):
					$59['__getitem__'](1))));
			if ((($bool21=(($eq21=nn)===($eq22=0)&&$eq21===null?true:
				($eq21===null?false:($eq22===null?false:
					((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21['__cmp__']=='function'?$eq21['__cmp__']($eq22) === 0:
						((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22['__cmp__']=='function'?$eq22['__cmp__']($eq21) === 0:
							$eq21==$eq22)))))) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
				throw ($p['ValueError']('Cannot reflect from normal of zero length'));
			}
			c = ((2)*(vn))/(nn);
			return $m['Vector2']((self['x'])-(((typeof ($61=vector)['__array'] != 'undefined'?
				((typeof $61['__array'][$62=0]) != 'undefined'?$61['__array'][$62]:
					$61['__getitem__']($62)):
					$61['__getitem__'](0)))*(c)), (self['y'])-(((typeof ($63=vector)['__array'] != 'undefined'?
				((typeof $63['__array'][$64=1]) != 'undefined'?$63['__array'][$64]:
					$63['__getitem__']($64)):
					$63['__getitem__'](1)))*(c)));
		}
	, 1, [null,null,['self'],['vector']]);
		$cls_definition['reflect'] = $method;
		$method = $pyjs__bind_method2('reflect_ip', function(vector) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				vector = arguments[1];
			}
			var vn,$attr87,nn,$attr88,$attr89,$69,$68,$bool22,$65,$67,$66,c,$80,$eq23,$eq24,$77,$72,$73,$70,$71,$76,$attr90,$74,$75,$78,$79;
			vn = ((self['x'])*((typeof ($65=vector)['__array'] != 'undefined'?
				((typeof $65['__array'][$66=0]) != 'undefined'?$65['__array'][$66]:
					$65['__getitem__']($66)):
					$65['__getitem__'](0))))+((self['y'])*((typeof ($67=vector)['__array'] != 'undefined'?
				((typeof $67['__array'][$68=1]) != 'undefined'?$67['__array'][$68]:
					$67['__getitem__']($68)):
					$67['__getitem__'](1))));
			nn = (((typeof ($69=vector)['__array'] != 'undefined'?
				((typeof $69['__array'][$70=0]) != 'undefined'?$69['__array'][$70]:
					$69['__getitem__']($70)):
					$69['__getitem__'](0)))*((typeof ($71=vector)['__array'] != 'undefined'?
				((typeof $71['__array'][$72=0]) != 'undefined'?$71['__array'][$72]:
					$71['__getitem__']($72)):
					$71['__getitem__'](0))))+(((typeof ($73=vector)['__array'] != 'undefined'?
				((typeof $73['__array'][$74=1]) != 'undefined'?$73['__array'][$74]:
					$73['__getitem__']($74)):
					$73['__getitem__'](1)))*((typeof ($75=vector)['__array'] != 'undefined'?
				((typeof $75['__array'][$76=1]) != 'undefined'?$75['__array'][$76]:
					$75['__getitem__']($76)):
					$75['__getitem__'](1))));
			if ((($bool22=(($eq23=nn)===($eq24=0)&&$eq23===null?true:
				($eq23===null?false:($eq24===null?false:
					((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23['__cmp__']=='function'?$eq23['__cmp__']($eq24) === 0:
						((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24['__cmp__']=='function'?$eq24['__cmp__']($eq23) === 0:
							$eq23==$eq24)))))) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
				throw ($p['ValueError']('Cannot reflect from normal of zero length'));
			}
			c = ((2)*(vn))/(nn);
			self['x'] -= ((typeof ($77=vector)['__array'] != 'undefined'?
				((typeof $77['__array'][$78=0]) != 'undefined'?$77['__array'][$78]:
					$77['__getitem__']($78)):
					$77['__getitem__'](0)))*(c);
			self['y'] -= ((typeof ($79=vector)['__array'] != 'undefined'?
				((typeof $79['__array'][$80=1]) != 'undefined'?$79['__array'][$80]:
					$79['__getitem__']($80)):
					$79['__getitem__'](1)))*(c);
			return null;
		}
	, 1, [null,null,['self'],['vector']]);
		$cls_definition['reflect_ip'] = $method;
		$method = $pyjs__bind_method2('distance_to', function(vector) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				vector = arguments[1];
			}
			var $attr94,$attr91,$attr93,$attr92,$84,$83,$82,$81;
			return $m['sqrt']((Math['pow']((self['x'])-((typeof ($81=vector)['__array'] != 'undefined'?
				((typeof $81['__array'][$82=0]) != 'undefined'?$81['__array'][$82]:
					$81['__getitem__']($82)):
					$81['__getitem__'](0))),2))+(Math['pow']((self['y'])-((typeof ($83=vector)['__array'] != 'undefined'?
				((typeof $83['__array'][$84=1]) != 'undefined'?$83['__array'][$84]:
					$83['__getitem__']($84)):
					$83['__getitem__'](1))),2)));
		}
	, 1, [null,null,['self'],['vector']]);
		$cls_definition['distance_to'] = $method;
		$method = $pyjs__bind_method2('distance_squared_to', function(vector) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				vector = arguments[1];
			}
			var $attr95,$attr97,$attr96,$88,$87,$86,$attr98,$85;
			return (Math['pow']((self['x'])-((typeof ($85=vector)['__array'] != 'undefined'?
				((typeof $85['__array'][$86=0]) != 'undefined'?$85['__array'][$86]:
					$85['__getitem__']($86)):
					$85['__getitem__'](0))),2))+(Math['pow']((self['y'])-((typeof ($87=vector)['__array'] != 'undefined'?
				((typeof $87['__array'][$88=1]) != 'undefined'?$87['__array'][$88]:
					$87['__getitem__']($88)):
					$87['__getitem__'](1))),2));
		}
	, 1, [null,null,['self'],['vector']]);
		$cls_definition['distance_squared_to'] = $method;
		$method = $pyjs__bind_method2('lerp', function(vector, t) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				vector = arguments[1];
				t = arguments[2];
			}
			var $or5,$cmp4,$or6,$cmp1,$attr100,$cmp3,$cmp2,$90,$attr99,$91,$92,$89,$bool24,$attr102,$bool23,$attr101;
			if ((($bool24=((($bool23=$or5=((($cmp1=t)===($cmp2=0.0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
				false :
				(typeof $bool23=='object'?
					(typeof $bool23['__nonzero__']=='function'?
						$bool23['__nonzero__']() :
						(typeof $bool23['__len__']=='function'?
							($bool23['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or5:((($cmp3=t)===($cmp4=1.0)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == 1))) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
				throw ($p['ValueError']('Argument t must be in range 0 to 1'));
			}
			return $m['Vector2'](((self['x'])*((1)-(t)))+(((typeof ($89=vector)['__array'] != 'undefined'?
				((typeof $89['__array'][$90=0]) != 'undefined'?$89['__array'][$90]:
					$89['__getitem__']($90)):
					$89['__getitem__'](0)))*(t)), ((self['y'])*((1)-(t)))+(((typeof ($91=vector)['__array'] != 'undefined'?
				((typeof $91['__array'][$92=1]) != 'undefined'?$91['__array'][$92]:
					$91['__getitem__']($92)):
					$91['__getitem__'](1)))*(t)));
		}
	, 1, [null,null,['self'],['vector'],['t']]);
		$cls_definition['lerp'] = $method;
		$method = $pyjs__bind_method2('slerp', function(vector, t) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				vector = arguments[1];
				t = arguments[2];
			}
			var $cmp14,v,$98,$99,$94,$95,$96,$97,$93,$eq30,smag,a,vx,vy,$cmp13,$attr106,sin_theta,$cmp12,_theta,$bool27,$cmp16,$bool25,$attr107,$attr104,$attr105,$attr103,theta,b,$bool29,$bool28,$attr108,$or10,$100,$or7,vmag,$bool30,$bool35,$or9,$or8,$cmp15,sy,sx,$eq25,$bool26,$eq27,$eq26,$eq29,$eq28,$cmp5,$cmp7,$cmp6,$bool31,$attr110,$cmp9,$cmp8,$bool32,$bool33,$len4,$or11,$bool34,$or12,$cmp11,$attr109,$cmp10;
			if ((($bool26=((($bool25=$or7=((($cmp5=t)===($cmp6=-(1.0))?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
				false :
				(typeof $bool25=='object'?
					(typeof $bool25['__nonzero__']=='function'?
						$bool25['__nonzero__']() :
						(typeof $bool25['__len__']=='function'?
							($bool25['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or7:((($cmp7=t)===($cmp8=1.0)?0:
				(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
					($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
					$p['cmp']($cmp7, $cmp8))) == 1))) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
				throw ($p['ValueError']('Argument t must be in range -1 to 1'));
			}
			if ((($bool29=((($bool28=$or9=!(($bool27=$p['hasattr'](vector, '__len__')) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
				false :
				(typeof $bool27=='object'?
					(typeof $bool27['__nonzero__']=='function'?
						$bool27['__nonzero__']() :
						(typeof $bool27['__len__']=='function'?
							($bool27['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
				false :
				(typeof $bool28=='object'?
					(typeof $bool28['__nonzero__']=='function'?
						$bool28['__nonzero__']() :
						(typeof $bool28['__len__']=='function'?
							($bool28['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or9:!(($eq25=(($len4=vector) === null?0:
				(typeof $len4['__array'] != 'undefined' ? $len4['__array']['length']:
					(typeof $len4['__len__'] == 'function'?$len4['__len__']():
						(typeof $len4['length'] != 'undefined'?$len4['length']:
							$p['len']($len4))))))===($eq26=2)&&$eq25===null?true:
				($eq25===null?false:($eq26===null?false:
					((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25['__cmp__']=='function'?$eq25['__cmp__']($eq26) === 0:
						((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26['__cmp__']=='function'?$eq26['__cmp__']($eq25) === 0:
							$eq25==$eq26))))))) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
				throw ($p['TypeError']('The first argument must be a vector'));
			}
			smag = $m['sqrt']((Math['pow'](self['x'],2))+(Math['pow'](self['y'],2)));
			vmag = $m['sqrt']((Math['pow']((typeof ($93=vector)['__array'] != 'undefined'?
				((typeof $93['__array'][$94=0]) != 'undefined'?$93['__array'][$94]:
					$93['__getitem__']($94)):
					$93['__getitem__'](0)),2))+(Math['pow']((typeof ($95=vector)['__array'] != 'undefined'?
				((typeof $95['__array'][$96=1]) != 'undefined'?$95['__array'][$96]:
					$95['__getitem__']($96)):
					$95['__getitem__'](1)),2)));
			if ((($bool31=((($bool30=$or11=(($eq27=smag)===($eq28=0)&&$eq27===null?true:
				($eq27===null?false:($eq28===null?false:
					((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27['__cmp__']=='function'?$eq27['__cmp__']($eq28) === 0:
						((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28['__cmp__']=='function'?$eq28['__cmp__']($eq27) === 0:
							$eq27==$eq28)))))) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
				false :
				(typeof $bool30=='object'?
					(typeof $bool30['__nonzero__']=='function'?
						$bool30['__nonzero__']() :
						(typeof $bool30['__len__']=='function'?
							($bool30['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or11:(($eq29=vmag)===($eq30=0)&&$eq29===null?true:
				($eq29===null?false:($eq30===null?false:
					((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29['__cmp__']=='function'?$eq29['__cmp__']($eq30) === 0:
						((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30['__cmp__']=='function'?$eq30['__cmp__']($eq29) === 0:
							$eq29==$eq30))))))) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
				throw ($p['ValueError']('Cannot use slerp with zero-vector'));
			}
			sx = (self['x'])/(smag);
			sy = (self['y'])/(smag);
			vx = ((typeof ($97=vector)['__array'] != 'undefined'?
				((typeof $97['__array'][$98=0]) != 'undefined'?$97['__array'][$98]:
					$97['__getitem__']($98)):
					$97['__getitem__'](0)))/(vmag);
			vy = ((typeof ($99=vector)['__array'] != 'undefined'?
				((typeof $99['__array'][$100=1]) != 'undefined'?$99['__array'][$100]:
					$99['__getitem__']($100)):
					$99['__getitem__'](1)))/(vmag);
			theta = ($m['atan2'](vy, vx))-($m['atan2'](sy, sx));
			_theta = $p['abs'](theta);
			if ((($bool32=((($cmp9=(_theta)-($m['pi']))===($cmp10=1e-06)?0:
				(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
					($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
					$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
				theta -= ((2)*($m['pi']))*((theta)/(_theta));
			}
			else if ((($bool33=(((($cmp11=-(1e-06))===($cmp12=($compare1 = (_theta)-($m['pi'])))?0:
				(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
					($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
					$p['cmp']($cmp11, $cmp12))) == -1)&&((($cmp13=$compare1)===($cmp14=($compare2 = 1e-06))?0:
				(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
					($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
					$p['cmp']($cmp13, $cmp14))) == -1))) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
					false :
					(typeof $bool33=='object'?
						(typeof $bool33['__nonzero__']=='function'?
							$bool33['__nonzero__']() :
							(typeof $bool33['__len__']=='function'?
								($bool33['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				throw ($p['ValueError']('Cannot use slerp on 180 degrees'));
			}
			if ((($bool34=((($cmp15=t)===($cmp16=0.0)?0:
				(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
					($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
					$p['cmp']($cmp15, $cmp16))) == -1)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
				t = -(t);
				theta -= ((2)*($m['pi']))*((theta)/($p['abs'](theta)));
			}
			sin_theta = $m['sin'](theta);
			if ((($bool35=sin_theta) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
				a = ($m['sin'](((1.0)-(t))*(theta)))/(sin_theta);
				b = ($m['sin']((t)*(theta)))/(sin_theta);
			}
			else {
				a = 1.0;
				b = 0.0;
			}
			v = $m['Vector2'](((sx)*(a))+((vx)*(b)), ((sy)*(a))+((vy)*(b)));
			smag = (((1.0)-(t))*(smag))+((t)*(vmag));
			v['x'] *= smag;
			v['y'] *= smag;
			return v;
		}
	, 1, [null,null,['self'],['vector'],['t']]);
		$cls_definition['slerp'] = $method;
		$method = $pyjs__bind_method2('elementwise', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr111,$attr112,$attr113,$attr114;
			return (typeof VectorElementwiseProxy == "undefined"?$m['VectorElementwiseProxy']:VectorElementwiseProxy)(self['x'], self['y']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['elementwise'] = $method;
		$method = $pyjs__bind_method2('rotate', function(angle) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				angle = arguments[1];
			}
			var $attr119,$attr118,c,$attr122,$attr115,rad,$attr117,$attr116,$attr120,$attr121,s;
			rad = ((angle)/(180.0))*($m['pi']);
			c = $p['round']($m['cos'](rad), 6);
			s = $p['round']($m['sin'](rad), 6);
			return $m['Vector2'](((c)*(self['x']))-((s)*(self['y'])), ((s)*(self['x']))+((c)*(self['y'])));
		}
	, 1, [null,null,['self'],['angle']]);
		$cls_definition['rotate'] = $method;
		$method = $pyjs__bind_method2('rotate_rad', function(angle) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				angle = arguments[1];
			}
			var c,s,$attr123,$attr124,$attr125,$attr126,$attr127,$attr128,$attr129,$attr130;
			c = $m['cos'](angle);
			s = $m['sin'](angle);
			return $m['Vector2'](((c)*(self['x']))-((s)*(self['y'])), ((s)*(self['x']))+((c)*(self['y'])));
		}
	, 1, [null,null,['self'],['angle']]);
		$cls_definition['rotate_rad'] = $method;
		$method = $pyjs__bind_method2('rotate_ip', function(angle) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				angle = arguments[1];
			}
			var c,$attr131,$attr133,$attr132,s,r,$attr134,y,x;
			r = ((angle)/(180.0))*($m['pi']);
			c = $p['round']($m['cos'](r), 6);
			s = $p['round']($m['sin'](r), 6);
			x = self['x'];
			y = self['y'];
			self['x'] = ((c)*(x))-((s)*(y));
			self['y'] = ((s)*(x))+((c)*(y));
			return null;
		}
	, 1, [null,null,['self'],['angle']]);
		$cls_definition['rotate_ip'] = $method;
		$method = $pyjs__bind_method2('rotate_ip_rad', function(angle) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				angle = arguments[1];
			}
			var c,s,$attr137,$attr136,$attr135,y,x,$attr138;
			c = $m['cos'](angle);
			s = $m['sin'](angle);
			x = self['x'];
			y = self['y'];
			self['x'] = ((c)*(x))-((s)*(y));
			self['y'] = ((s)*(x))+((c)*(y));
			return null;
		}
	, 1, [null,null,['self'],['angle']]);
		$cls_definition['rotate_ip_rad'] = $method;
		$method = $pyjs__bind_method2('angle_to', function(vector) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				vector = arguments[1];
			}
			var $101,$attr142,$103,$102,$104,$attr140,$attr141,$attr139;
			return (($m['atan2']((typeof ($101=vector)['__array'] != 'undefined'?
				((typeof $101['__array'][$102=1]) != 'undefined'?$101['__array'][$102]:
					$101['__getitem__']($102)):
					$101['__getitem__'](1)), (typeof ($103=vector)['__array'] != 'undefined'?
				((typeof $103['__array'][$104=0]) != 'undefined'?$103['__array'][$104]:
					$103['__getitem__']($104)):
					$103['__getitem__'](0))))-($m['atan2'](self['y'], self['x'])))*((180.0)/($m['pi']));
		}
	, 1, [null,null,['self'],['vector']]);
		$cls_definition['angle_to'] = $method;
		$method = $pyjs__bind_method2('as_polar', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr143,phi,$attr146,$attr144,$attr145,r;
			r = self['magnitude']();
			phi = ($m['atan2'](self['y'], self['x']))*((180.0)/($m['pi']));
			return $p['tuple']([r, phi]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['as_polar'] = $method;
		$method = $pyjs__bind_method2('from_polar', function(coordinate) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				coordinate = arguments[1];
			}
			var phi,$105,$107,$106,$108,$eq32,$len5,$eq31,$bool36,r;
			if ((($bool36=!(($eq31=(($len5=coordinate) === null?0:
				(typeof $len5['__array'] != 'undefined' ? $len5['__array']['length']:
					(typeof $len5['__len__'] == 'function'?$len5['__len__']():
						(typeof $len5['length'] != 'undefined'?$len5['length']:
							$p['len']($len5))))))===($eq32=2)&&$eq31===null?true:
				($eq31===null?false:($eq32===null?false:
					((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31['__cmp__']=='function'?$eq31['__cmp__']($eq32) === 0:
						((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32['__cmp__']=='function'?$eq32['__cmp__']($eq31) === 0:
							$eq31==$eq32)))))) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
				throw ($p['TypeError']('coodinate must be of length 2'));
			}
			r = (typeof ($105=coordinate)['__array'] != 'undefined'?
				((typeof $105['__array'][$106=0]) != 'undefined'?$105['__array'][$106]:
					$105['__getitem__']($106)):
					$105['__getitem__'](0));
			phi = ((typeof ($107=coordinate)['__array'] != 'undefined'?
				((typeof $107['__array'][$108=1]) != 'undefined'?$107['__array'][$108]:
					$107['__getitem__']($108)):
					$107['__getitem__'](1)))*(($m['pi'])/(180.0));
			self['x'] = $p['round']((r)*($m['cos'](phi)), 6);
			self['y'] = $p['round']((r)*($m['sin'](phi)), 6);
			return null;
		}
	, 1, [null,null,['self'],['coordinate']]);
		$cls_definition['from_polar'] = $method;
		$method = $pyjs__bind_method2('update', function() {
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
			var $116,$117,$114,$115,$112,$113,$110,$111,$118,$119,$138,$eq33,$eq36,$eq34,$eq35,$130,$131,$132,$133,$134,$135,$136,$137,$and3,$bool43,$bool42,$bool41,$bool40,$109,$and4,$129,$128,$123,$122,$121,$120,$127,$126,$125,$124,l,$len6,$bool37,$bool38,$bool39;
			l = (($len6=args) === null?0:
				(typeof $len6['__array'] != 'undefined' ? $len6['__array']['length']:
					(typeof $len6['__len__'] == 'function'?$len6['__len__']():
						(typeof $len6['length'] != 'undefined'?$len6['length']:
							$p['len']($len6)))));
			if ((($bool37=(($eq33=l)===($eq34=2)&&$eq33===null?true:
				($eq33===null?false:($eq34===null?false:
					((typeof $eq33=='object'||typeof $eq33=='function')&&typeof $eq33['__cmp__']=='function'?$eq33['__cmp__']($eq34) === 0:
						((typeof $eq34=='object'||typeof $eq34=='function')&&typeof $eq34['__cmp__']=='function'?$eq34['__cmp__']($eq33) === 0:
							$eq33==$eq34)))))) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
				self['x'] = $p['float']((typeof ($109=args)['__array'] != 'undefined'?
					((typeof $109['__array'][$110=0]) != 'undefined'?$109['__array'][$110]:
						$109['__getitem__']($110)):
						$109['__getitem__'](0)));
				self['y'] = $p['float']((typeof ($111=args)['__array'] != 'undefined'?
					((typeof $111['__array'][$112=1]) != 'undefined'?$111['__array'][$112]:
						$111['__getitem__']($112)):
						$111['__getitem__'](1)));
			}
			else if ((($bool38=(($eq35=l)===($eq36=1)&&$eq35===null?true:
				($eq35===null?false:($eq36===null?false:
					((typeof $eq35=='object'||typeof $eq35=='function')&&typeof $eq35['__cmp__']=='function'?$eq35['__cmp__']($eq36) === 0:
						((typeof $eq36=='object'||typeof $eq36=='function')&&typeof $eq36['__cmp__']=='function'?$eq36['__cmp__']($eq35) === 0:
							$eq35==$eq36)))))) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
					false :
					(typeof $bool38=='object'?
						(typeof $bool38['__nonzero__']=='function'?
							$bool38['__nonzero__']() :
							(typeof $bool38['__len__']=='function'?
								($bool38['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				if ((($bool39=$p['isinstance']((typeof ($113=args)['__array'] != 'undefined'?
					((typeof $113['__array'][$114=0]) != 'undefined'?$113['__array'][$114]:
						$113['__getitem__']($114)):
						$113['__getitem__'](0)), $p['tuple']([$p['float_int'], $p['float']]))) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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
					self['x'] = $p['float']((typeof ($115=args)['__array'] != 'undefined'?
						((typeof $115['__array'][$116=0]) != 'undefined'?$115['__array'][$116]:
							$115['__getitem__']($116)):
							$115['__getitem__'](0)));
					self['y'] = $p['float']((typeof ($117=args)['__array'] != 'undefined'?
						((typeof $117['__array'][$118=0]) != 'undefined'?$117['__array'][$118]:
							$117['__getitem__']($118)):
							$117['__getitem__'](0)));
				}
				else {
					self['x'] = $p['float']((typeof ($121=(typeof ($119=args)['__array'] != 'undefined'?
						((typeof $119['__array'][$120=0]) != 'undefined'?$119['__array'][$120]:
							$119['__getitem__']($120)):
							$119['__getitem__'](0)))['__array'] != 'undefined'?
						((typeof $121['__array'][$122=0]) != 'undefined'?$121['__array'][$122]:
							$121['__getitem__']($122)):
							$121['__getitem__'](0)));
					self['y'] = $p['float']((typeof ($125=(typeof ($123=args)['__array'] != 'undefined'?
						((typeof $123['__array'][$124=0]) != 'undefined'?$123['__array'][$124]:
							$123['__getitem__']($124)):
							$123['__getitem__'](0)))['__array'] != 'undefined'?
						((typeof $125['__array'][$126=1]) != 'undefined'?$125['__array'][$126]:
							$125['__getitem__']($126)):
							$125['__getitem__'](1)));
				}
			}
			else {
				if ((($bool40=kwargs) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
					if ((($bool42=((($bool41=$and3=kwargs['__contains__']('x')) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
						false :
						(typeof $bool41=='object'?
							(typeof $bool41['__nonzero__']=='function'?
								$bool41['__nonzero__']() :
								(typeof $bool41['__len__']=='function'?
									($bool41['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?kwargs['__contains__']('y'):$and3)) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
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
						self['x'] = $p['float']((typeof ($127=kwargs)['__array'] != 'undefined'?
							((typeof $127['__array'][$128='x']) != 'undefined'?$127['__array'][$128]:
								$127['__getitem__']($128)):
								$127['__getitem__']('x')));
						self['y'] = $p['float']((typeof ($129=kwargs)['__array'] != 'undefined'?
							((typeof $129['__array'][$130='y']) != 'undefined'?$129['__array'][$130]:
								$129['__getitem__']($130)):
								$129['__getitem__']('y')));
					}
					else if ((($bool43=kwargs['__contains__']('x')) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
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
						self['x'] = $p['float']((typeof ($131=kwargs)['__array'] != 'undefined'?
							((typeof $131['__array'][$132='x']) != 'undefined'?$131['__array'][$132]:
								$131['__getitem__']($132)):
								$131['__getitem__']('x')));
						self['y'] = $p['float']((typeof ($133=kwargs)['__array'] != 'undefined'?
							((typeof $133['__array'][$134='x']) != 'undefined'?$133['__array'][$134]:
								$133['__getitem__']($134)):
								$133['__getitem__']('x')));
					}
					else {
						self['x'] = $p['float']((typeof ($135=kwargs)['__array'] != 'undefined'?
							((typeof $135['__array'][$136='y']) != 'undefined'?$135['__array'][$136]:
								$135['__getitem__']($136)):
								$135['__getitem__']('y')));
						self['y'] = $p['float']((typeof ($137=kwargs)['__array'] != 'undefined'?
							((typeof $137['__array'][$138='y']) != 'undefined'?$137['__array'][$138]:
								$137['__getitem__']($138)):
								$137['__getitem__']('y')));
					}
				}
				else {
					self['x'] = 0.0;
					self['y'] = 0.0;
				}
			}
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['update'] = $method;
		$method = $pyjs__bind_method2('__pos__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr149,$attr148,$attr147,$attr150;
			return $m['Vector2'](self['x'], self['y']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__pos__'] = $method;
		$method = $pyjs__bind_method2('__neg__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr154,$attr151,$attr153,$attr152;
			return $m['Vector2'](-(self['x']), -(self['y']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__neg__'] = $method;
		$method = $pyjs__bind_method2('__add__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr155,$attr157,$attr156,$bool44,$attr160,$attr159,$attr158,$attr162,$attr161,$139,$141,$140,$142;
			if ((($bool44=$p['hasattr'](other, '__iter__')) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
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
				return $m['Vector2']((self['x'])+((typeof ($139=other)['__array'] != 'undefined'?
					((typeof $139['__array'][$140=0]) != 'undefined'?$139['__array'][$140]:
						$139['__getitem__']($140)):
						$139['__getitem__'](0))), (self['y'])+((typeof ($141=other)['__array'] != 'undefined'?
					((typeof $141['__array'][$142=1]) != 'undefined'?$141['__array'][$142]:
						$141['__getitem__']($142)):
						$141['__getitem__'](1))));
			}
			else {
				return $m['Vector2']((self['x'])+(other), (self['y'])+(other));
			}
			return null;
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
			var $bool45,$attr168,$attr169,$attr164,$attr165,$attr167,$attr163,$145,$144,$146,$attr166,$143,$attr170;
			if ((($bool45=$p['hasattr'](other, '__iter__')) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
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
				return $m['Vector2']((self['x'])-((typeof ($143=other)['__array'] != 'undefined'?
					((typeof $143['__array'][$144=0]) != 'undefined'?$143['__array'][$144]:
						$143['__getitem__']($144)):
						$143['__getitem__'](0))), (self['y'])-((typeof ($145=other)['__array'] != 'undefined'?
					((typeof $145['__array'][$146=1]) != 'undefined'?$145['__array'][$146]:
						$145['__getitem__']($146)):
						$145['__getitem__'](1))));
			}
			else {
				return $m['Vector2']((self['x'])-(other), (self['y'])-(other));
			}
			return null;
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
			var $152,$153,$150,$151,$154,$bool47,$bool46,$attr182,$attr180,$bool48,$149,$148,$147,$attr181,$attr179,$attr178,$attr177,$attr176,$attr175,$attr174,$attr173,$attr172,$attr171;
			if ((($bool46=$p['hasattr'](other, '__iter__')) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
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
				if ((($bool48=!(($bool47=$p['isinstance'](other, (typeof VectorElementwiseProxy == "undefined"?$m['VectorElementwiseProxy']:VectorElementwiseProxy))) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
					false :
					(typeof $bool47=='object'?
						(typeof $bool47['__nonzero__']=='function'?
							$bool47['__nonzero__']() :
							(typeof $bool47['__len__']=='function'?
								($bool47['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
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
					return ((self['x'])*((typeof ($147=other)['__array'] != 'undefined'?
						((typeof $147['__array'][$148=0]) != 'undefined'?$147['__array'][$148]:
							$147['__getitem__']($148)):
							$147['__getitem__'](0))))+((self['y'])*((typeof ($149=other)['__array'] != 'undefined'?
						((typeof $149['__array'][$150=1]) != 'undefined'?$149['__array'][$150]:
							$149['__getitem__']($150)):
							$149['__getitem__'](1))));
				}
				else {
					return $m['Vector2']((self['x'])*((typeof ($151=other)['__array'] != 'undefined'?
						((typeof $151['__array'][$152=0]) != 'undefined'?$151['__array'][$152]:
							$151['__getitem__']($152)):
							$151['__getitem__'](0))), (self['y'])*((typeof ($153=other)['__array'] != 'undefined'?
						((typeof $153['__array'][$154=1]) != 'undefined'?$153['__array'][$154]:
							$153['__getitem__']($154)):
							$153['__getitem__'](1))));
				}
			}
			else {
				return $m['Vector2']((self['x'])*(other), (self['y'])*(other));
			}
			return null;
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
			var $attr190,$attr188,$attr189,$attr186,$attr187,$attr184,$attr185,$attr183,$bool49,$156,$157,$155,$158;
			if ((($bool49=$p['hasattr'](other, '__iter__')) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
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
				return $m['Vector2']((self['x'])/((typeof ($155=other)['__array'] != 'undefined'?
					((typeof $155['__array'][$156=0]) != 'undefined'?$155['__array'][$156]:
						$155['__getitem__']($156)):
						$155['__getitem__'](0))), (self['y'])/((typeof ($157=other)['__array'] != 'undefined'?
					((typeof $157['__array'][$158=1]) != 'undefined'?$157['__array'][$158]:
						$157['__getitem__']($158)):
						$157['__getitem__'](1))));
			}
			else {
				return $m['Vector2']((self['x'])/(other), (self['y'])/(other));
			}
			return null;
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
			var $attr191,$attr193,$attr192,$bool50,$attr194,$attr197,$attr196,$attr198,$162,$161,$160,$attr195,$159;
			if ((($bool50=$p['hasattr'](other, '__iter__')) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
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
				return $m['Vector2']((self['x'])/((typeof ($159=other)['__array'] != 'undefined'?
					((typeof $159['__array'][$160=0]) != 'undefined'?$159['__array'][$160]:
						$159['__getitem__']($160)):
						$159['__getitem__'](0))), (self['y'])/((typeof ($161=other)['__array'] != 'undefined'?
					((typeof $161['__array'][$162=1]) != 'undefined'?$161['__array'][$162]:
						$161['__getitem__']($162)):
						$161['__getitem__'](1))));
			}
			else {
				return $m['Vector2']((self['x'])/(other), (self['y'])/(other));
			}
			return null;
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
			var $164,$bool51,$attr199,$166,$165,$163,$attr205,$attr204,$attr206,$attr201,$attr200,$attr203,$attr202;
			if ((($bool51=$p['hasattr'](other, '__iter__')) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
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
				return $m['Vector2']($m['floor']((self['x'])/((typeof ($163=other)['__array'] != 'undefined'?
					((typeof $163['__array'][$164=0]) != 'undefined'?$163['__array'][$164]:
						$163['__getitem__']($164)):
						$163['__getitem__'](0)))), $m['floor']((self['y'])/((typeof ($165=other)['__array'] != 'undefined'?
					((typeof $165['__array'][$166=1]) != 'undefined'?$165['__array'][$166]:
						$165['__getitem__']($166)):
						$165['__getitem__'](1)))));
			}
			else {
				return $m['Vector2']($m['floor']((self['x'])/(other)), $m['floor']((self['y'])/(other)));
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__floordiv__'] = $method;
		$method = $pyjs__bind_method2('__eq__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool54,$bool55,$bool52,$bool53,$cmp20,$cmp21,$cmp22,$cmp23,$170,$eq37,$eq38,$attr209,$attr208,$attr207,$and8,$and5,$and6,$and7,$167,$cmp17,$cmp19,$cmp18,$169,$168,$cmp24,$len7,$attr212,$attr213,$attr210,$attr211,$attr214;
			if ((($bool52=$p['hasattr'](other, '__iter__')) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
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
				if ((($bool53=(($eq37=(($len7=other) === null?0:
					(typeof $len7['__array'] != 'undefined' ? $len7['__array']['length']:
						(typeof $len7['__len__'] == 'function'?$len7['__len__']():
							(typeof $len7['length'] != 'undefined'?$len7['length']:
								$p['len']($len7))))))===($eq38=2)&&$eq37===null?true:
					($eq37===null?false:($eq38===null?false:
						((typeof $eq37=='object'||typeof $eq37=='function')&&typeof $eq37['__cmp__']=='function'?$eq37['__cmp__']($eq38) === 0:
							((typeof $eq38=='object'||typeof $eq38=='function')&&typeof $eq38['__cmp__']=='function'?$eq38['__cmp__']($eq37) === 0:
								$eq37==$eq38)))))) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
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
					return ((($bool54=$and5=((($cmp17=$p['abs']((self['x'])-((typeof ($167=other)['__array'] != 'undefined'?
						((typeof $167['__array'][$168=0]) != 'undefined'?$167['__array'][$168]:
							$167['__getitem__']($168)):
							$167['__getitem__'](0)))))===($cmp18=1e-06)?0:
						(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
							($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
							$p['cmp']($cmp17, $cmp18))) == -1)) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
						false :
						(typeof $bool54=='object'?
							(typeof $bool54['__nonzero__']=='function'?
								$bool54['__nonzero__']() :
								(typeof $bool54['__len__']=='function'?
									($bool54['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($cmp19=$p['abs']((self['y'])-((typeof ($169=other)['__array'] != 'undefined'?
						((typeof $169['__array'][$170=1]) != 'undefined'?$169['__array'][$170]:
							$169['__getitem__']($170)):
							$169['__getitem__'](1)))))===($cmp20=1e-06)?0:
						(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
							($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
							$p['cmp']($cmp19, $cmp20))) == -1):$and5);
				}
				else {
					return false;
				}
			}
			else {
				return ((($bool55=$and7=((($cmp21=$p['abs']((self['x'])-(other)))===($cmp22=1e-06)?0:
					(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
						($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
						$p['cmp']($cmp21, $cmp22))) == -1)) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
					false :
					(typeof $bool55=='object'?
						(typeof $bool55['__nonzero__']=='function'?
							$bool55['__nonzero__']() :
							(typeof $bool55['__len__']=='function'?
								($bool55['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp23=$p['abs']((self['y'])-(other)))===($cmp24=1e-06)?0:
					(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
						($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
						$p['cmp']($cmp23, $cmp24))) == -1):$and7);
			}
			return null;
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
			var $bool56,$bool57,$cmp26,$cmp27,$bool58,$bool59,$174,$cmp25,$172,$173,$cmp28,$cmp29,$eq39,$attr222,$attr221,$attr220,$or16,$cmp32,$cmp31,$cmp30,$eq40,$or15,$or14,$attr218,$attr219,$or13,$attr215,$attr216,$attr217,$len8,$171;
			if ((($bool56=$p['hasattr'](other, '__iter__')) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
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
				if ((($bool57=(($eq39=(($len8=other) === null?0:
					(typeof $len8['__array'] != 'undefined' ? $len8['__array']['length']:
						(typeof $len8['__len__'] == 'function'?$len8['__len__']():
							(typeof $len8['length'] != 'undefined'?$len8['length']:
								$p['len']($len8))))))===($eq40=2)&&$eq39===null?true:
					($eq39===null?false:($eq40===null?false:
						((typeof $eq39=='object'||typeof $eq39=='function')&&typeof $eq39['__cmp__']=='function'?$eq39['__cmp__']($eq40) === 0:
							((typeof $eq40=='object'||typeof $eq40=='function')&&typeof $eq40['__cmp__']=='function'?$eq40['__cmp__']($eq39) === 0:
								$eq39==$eq40)))))) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
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
					return ((($bool58=$or13=((($cmp25=$p['abs']((self['x'])-((typeof ($171=other)['__array'] != 'undefined'?
						((typeof $171['__array'][$172=0]) != 'undefined'?$171['__array'][$172]:
							$171['__getitem__']($172)):
							$171['__getitem__'](0)))))===($cmp26=1e-06)?0:
						(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
							($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
							$p['cmp']($cmp25, $cmp26))) == 1)) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
						false :
						(typeof $bool58=='object'?
							(typeof $bool58['__nonzero__']=='function'?
								$bool58['__nonzero__']() :
								(typeof $bool58['__len__']=='function'?
									($bool58['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or13:((($cmp27=$p['abs']((self['y'])-((typeof ($173=other)['__array'] != 'undefined'?
						((typeof $173['__array'][$174=1]) != 'undefined'?$173['__array'][$174]:
							$173['__getitem__']($174)):
							$173['__getitem__'](1)))))===($cmp28=1e-06)?0:
						(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
							($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
							$p['cmp']($cmp27, $cmp28))) == 1));
				}
				else {
					return true;
				}
			}
			else {
				return ((($bool59=$or15=((($cmp29=$p['abs']((self['x'])-(other)))===($cmp30=1e-06)?0:
					(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
						($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
						$p['cmp']($cmp29, $cmp30))) == 1)) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
					false :
					(typeof $bool59=='object'?
						(typeof $bool59['__nonzero__']=='function'?
							$bool59['__nonzero__']() :
							(typeof $bool59['__len__']=='function'?
								($bool59['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or15:((($cmp31=$p['abs']((self['y'])-(other)))===($cmp32=1e-06)?0:
					(typeof $cmp31==typeof $cmp32 && ((typeof $cmp31 == 'number')||(typeof $cmp31 == 'string')||(typeof $cmp31 == 'boolean'))?
						($cmp31 == $cmp32 ? 0 : ($cmp31 < $cmp32 ? -1 : 1)):
						$p['cmp']($cmp31, $cmp32))) == 1));
			}
			return null;
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
			var $bool61,$bool60,msg;
			if ((($bool61=!(($bool60=$p['isinstance'](other, (typeof VectorElementwiseProxy == "undefined"?$m['VectorElementwiseProxy']:VectorElementwiseProxy))) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
				false :
				(typeof $bool60=='object'?
					(typeof $bool60['__nonzero__']=='function'?
						$bool60['__nonzero__']() :
						(typeof $bool60['__len__']=='function'?
							($bool60['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
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
				msg = 'This operation is not supported by vectors';
				throw ($p['TypeError'](msg));
			}
			return $p['NotImplemented'];
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
			var msg,$bool63,$bool62;
			if ((($bool63=!(($bool62=$p['isinstance'](other, (typeof VectorElementwiseProxy == "undefined"?$m['VectorElementwiseProxy']:VectorElementwiseProxy))) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
				false :
				(typeof $bool62=='object'?
					(typeof $bool62['__nonzero__']=='function'?
						$bool62['__nonzero__']() :
						(typeof $bool62['__len__']=='function'?
							($bool62['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
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
				msg = 'This operation is not supported by vectors';
				throw ($p['TypeError'](msg));
			}
			return $p['NotImplemented'];
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__ge__'] = $method;
		$method = $pyjs__bind_method2('__lt__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var msg,$bool65,$bool64;
			if ((($bool65=!(($bool64=$p['isinstance'](other, (typeof VectorElementwiseProxy == "undefined"?$m['VectorElementwiseProxy']:VectorElementwiseProxy))) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
				false :
				(typeof $bool64=='object'?
					(typeof $bool64['__nonzero__']=='function'?
						$bool64['__nonzero__']() :
						(typeof $bool64['__len__']=='function'?
							($bool64['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
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
				msg = 'This operation is not supported by vectors';
				throw ($p['TypeError'](msg));
			}
			return $p['NotImplemented'];
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
			var msg,$bool67,$bool66;
			if ((($bool67=!(($bool66=$p['isinstance'](other, (typeof VectorElementwiseProxy == "undefined"?$m['VectorElementwiseProxy']:VectorElementwiseProxy))) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
				false :
				(typeof $bool66=='object'?
					(typeof $bool66['__nonzero__']=='function'?
						$bool66['__nonzero__']() :
						(typeof $bool66['__len__']=='function'?
							($bool66['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
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
				msg = 'This operation is not supported by vectors';
				throw ($p['TypeError'](msg));
			}
			return $p['NotImplemented'];
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__le__'] = $method;
		$method = $pyjs__bind_method2('__radd__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr227,$attr226,$attr225,$attr224,$attr223,$bool68,$attr229,$attr228,$177,$175,$176,$attr230,$178;
			if ((($bool68=$p['hasattr'](other, '__iter__')) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
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
				return $m['Vector2']((self['x'])+((typeof ($175=other)['__array'] != 'undefined'?
					((typeof $175['__array'][$176=0]) != 'undefined'?$175['__array'][$176]:
						$175['__getitem__']($176)):
						$175['__getitem__'](0))), (self['y'])+((typeof ($177=other)['__array'] != 'undefined'?
					((typeof $177['__array'][$178=1]) != 'undefined'?$177['__array'][$178]:
						$177['__getitem__']($178)):
						$177['__getitem__'](1))));
			}
			else {
				return $m['Vector2']((self['x'])+(other), (self['y'])+(other));
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__radd__'] = $method;
		$method = $pyjs__bind_method2('__rsub__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr234,$attr235,$attr236,$attr237,$attr231,$attr232,$attr233,$bool69,$attr238,$181,$180,$182,$179;
			if ((($bool69=$p['hasattr'](other, '__iter__')) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
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
				return $m['Vector2'](((typeof ($179=other)['__array'] != 'undefined'?
					((typeof $179['__array'][$180=0]) != 'undefined'?$179['__array'][$180]:
						$179['__getitem__']($180)):
						$179['__getitem__'](0)))-(self['x']), ((typeof ($181=other)['__array'] != 'undefined'?
					((typeof $181['__array'][$182=1]) != 'undefined'?$181['__array'][$182]:
						$181['__getitem__']($182)):
						$181['__getitem__'](1)))-(self['y']));
			}
			else {
				return $m['Vector2']((other)-(self['x']), (other)-(self['y']));
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__rsub__'] = $method;
		$method = $pyjs__bind_method2('__rmul__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool72,$attr239,$bool70,$bool71,$189,$188,$183,$185,$184,$187,$186,$attr241,$attr240,$attr243,$attr242,$attr245,$attr244,$attr247,$attr246,$attr249,$attr248,$attr250,$190;
			if ((($bool70=$p['hasattr'](other, '__iter__')) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
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
				if ((($bool72=!(($bool71=$p['isinstance'](other, (typeof VectorElementwiseProxy == "undefined"?$m['VectorElementwiseProxy']:VectorElementwiseProxy))) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
					false :
					(typeof $bool71=='object'?
						(typeof $bool71['__nonzero__']=='function'?
							$bool71['__nonzero__']() :
							(typeof $bool71['__len__']=='function'?
								($bool71['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
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
					return ((self['x'])*((typeof ($183=other)['__array'] != 'undefined'?
						((typeof $183['__array'][$184=0]) != 'undefined'?$183['__array'][$184]:
							$183['__getitem__']($184)):
							$183['__getitem__'](0))))+((self['y'])*((typeof ($185=other)['__array'] != 'undefined'?
						((typeof $185['__array'][$186=1]) != 'undefined'?$185['__array'][$186]:
							$185['__getitem__']($186)):
							$185['__getitem__'](1))));
				}
				else {
					return $m['Vector2']((self['x'])*((typeof ($187=other)['__array'] != 'undefined'?
						((typeof $187['__array'][$188=0]) != 'undefined'?$187['__array'][$188]:
							$187['__getitem__']($188)):
							$187['__getitem__'](0))), (self['y'])*((typeof ($189=other)['__array'] != 'undefined'?
						((typeof $189['__array'][$190=1]) != 'undefined'?$189['__array'][$190]:
							$189['__getitem__']($190)):
							$189['__getitem__'](1))));
				}
			}
			else {
				return $m['Vector2']((self['x'])*(other), (self['y'])*(other));
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__rmul__'] = $method;
		$method = $pyjs__bind_method2('__rdiv__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr254,$attr258,$attr256,$attr257,$attr255,$attr252,$bool73,$attr251,$attr253,$194,$192,$193,$191;
			if ((($bool73=$p['hasattr'](other, '__iter__')) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
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
				return $m['Vector2'](((typeof ($191=other)['__array'] != 'undefined'?
					((typeof $191['__array'][$192=0]) != 'undefined'?$191['__array'][$192]:
						$191['__getitem__']($192)):
						$191['__getitem__'](0)))/(self['x']), ((typeof ($193=other)['__array'] != 'undefined'?
					((typeof $193['__array'][$194=1]) != 'undefined'?$193['__array'][$194]:
						$193['__getitem__']($194)):
						$193['__getitem__'](1)))/(self['y']));
			}
			else {
				return $m['Vector2']((other)/(self['x']), (other)/(self['y']));
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__rdiv__'] = $method;
		$method = $pyjs__bind_method2('__rtruediv__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr259,$attr261,$attr262,$attr260,$attr266,$attr265,$attr264,$attr263,$198,$196,$197,$195,$bool74;
			if ((($bool74=$p['hasattr'](other, '__iter__')) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
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
				return $m['Vector2'](((typeof ($195=other)['__array'] != 'undefined'?
					((typeof $195['__array'][$196=0]) != 'undefined'?$195['__array'][$196]:
						$195['__getitem__']($196)):
						$195['__getitem__'](0)))/(self['x']), ((typeof ($197=other)['__array'] != 'undefined'?
					((typeof $197['__array'][$198=1]) != 'undefined'?$197['__array'][$198]:
						$197['__getitem__']($198)):
						$197['__getitem__'](1)))/(self['y']));
			}
			else {
				return $m['Vector2']((other)/(self['x']), (other)/(self['y']));
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__rtruediv__'] = $method;
		$method = $pyjs__bind_method2('__rfloordiv__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr269,$attr268,$202,$attr271,$bool75,$attr267,$attr270,$attr274,$201,$attr272,$199,$attr273,$200;
			if ((($bool75=$p['hasattr'](other, '__iter__')) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
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
				return $m['Vector2']($m['floor'](((typeof ($199=other)['__array'] != 'undefined'?
					((typeof $199['__array'][$200=0]) != 'undefined'?$199['__array'][$200]:
						$199['__getitem__']($200)):
						$199['__getitem__'](0)))/(self['x'])), $m['floor'](((typeof ($201=other)['__array'] != 'undefined'?
					((typeof $201['__array'][$202=1]) != 'undefined'?$201['__array'][$202]:
						$201['__getitem__']($202)):
						$201['__getitem__'](1)))/(self['y'])));
			}
			else {
				return $m['Vector2']($m['floor']((other)/(self['x'])), $m['floor']((other)/(self['y'])));
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__rfloordiv__'] = $method;
		$method = $pyjs__bind_method2('__iadd__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool76,$203,$206,$204,$205;
			if ((($bool76=$p['hasattr'](other, '__iter__')) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
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
				self['x'] += (typeof ($203=other)['__array'] != 'undefined'?
					((typeof $203['__array'][$204=0]) != 'undefined'?$203['__array'][$204]:
						$203['__getitem__']($204)):
						$203['__getitem__'](0));
				self['y'] += (typeof ($205=other)['__array'] != 'undefined'?
					((typeof $205['__array'][$206=1]) != 'undefined'?$205['__array'][$206]:
						$205['__getitem__']($206)):
						$205['__getitem__'](1));
			}
			else {
				self['x'] += other;
				self['y'] += other;
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
			var $208,$209,$bool77,$207,$210;
			if ((($bool77=$p['hasattr'](other, '__iter__')) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
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
				self['x'] -= (typeof ($207=other)['__array'] != 'undefined'?
					((typeof $207['__array'][$208=0]) != 'undefined'?$207['__array'][$208]:
						$207['__getitem__']($208)):
						$207['__getitem__'](0));
				self['y'] -= (typeof ($209=other)['__array'] != 'undefined'?
					((typeof $209['__array'][$210=1]) != 'undefined'?$209['__array'][$210]:
						$209['__getitem__']($210)):
						$209['__getitem__'](1));
			}
			else {
				self['x'] -= other;
				self['y'] -= other;
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
			var $bool78,$214,$211,$213,$212;
			if ((($bool78=$p['hasattr'](other, '__iter__')) === null || $bool78 === false || $bool78 === 0 || $bool78 === '' ?
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
				self['x'] *= (typeof ($211=other)['__array'] != 'undefined'?
					((typeof $211['__array'][$212=0]) != 'undefined'?$211['__array'][$212]:
						$211['__getitem__']($212)):
						$211['__getitem__'](0));
				self['y'] *= (typeof ($213=other)['__array'] != 'undefined'?
					((typeof $213['__array'][$214=1]) != 'undefined'?$213['__array'][$214]:
						$213['__getitem__']($214)):
						$213['__getitem__'](1));
			}
			else {
				self['x'] *= other;
				self['y'] *= other;
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
			var $bool79,$216,$215,$217,$218;
			if ((($bool79=$p['hasattr'](other, '__iter__')) === null || $bool79 === false || $bool79 === 0 || $bool79 === '' ?
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
				self['x'] /= (typeof ($215=other)['__array'] != 'undefined'?
					((typeof $215['__array'][$216=0]) != 'undefined'?$215['__array'][$216]:
						$215['__getitem__']($216)):
						$215['__getitem__'](0));
				self['y'] /= (typeof ($217=other)['__array'] != 'undefined'?
					((typeof $217['__array'][$218=1]) != 'undefined'?$217['__array'][$218]:
						$217['__getitem__']($218)):
						$217['__getitem__'](1));
			}
			else {
				self['x'] /= other;
				self['y'] /= other;
			}
			return self;
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
			var $bool80,$220,$221,$222,$219;
			if ((($bool80=$p['hasattr'](other, '__iter__')) === null || $bool80 === false || $bool80 === 0 || $bool80 === '' ?
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
				self['x'] /= (typeof ($219=other)['__array'] != 'undefined'?
					((typeof $219['__array'][$220=0]) != 'undefined'?$219['__array'][$220]:
						$219['__getitem__']($220)):
						$219['__getitem__'](0));
				self['y'] /= (typeof ($221=other)['__array'] != 'undefined'?
					((typeof $221['__array'][$222=1]) != 'undefined'?$221['__array'][$222]:
						$221['__getitem__']($222)):
						$221['__getitem__'](1));
			}
			else {
				self['x'] /= other;
				self['y'] /= other;
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
			var $attr278,$attr279,$bool81,$attr281,$attr280,$attr282,$224,$225,$attr275,$attr276,$223,$attr277,$226;
			if ((($bool81=$p['hasattr'](other, '__iter__')) === null || $bool81 === false || $bool81 === 0 || $bool81 === '' ?
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
				self['x'] = $p['float']($m['floor']((self['x'])/((typeof ($223=other)['__array'] != 'undefined'?
					((typeof $223['__array'][$224=0]) != 'undefined'?$223['__array'][$224]:
						$223['__getitem__']($224)):
						$223['__getitem__'](0)))));
				self['y'] = $p['float']($m['floor']((self['y'])/((typeof ($225=other)['__array'] != 'undefined'?
					((typeof $225['__array'][$226=1]) != 'undefined'?$225['__array'][$226]:
						$225['__getitem__']($226)):
						$225['__getitem__'](1)))));
			}
			else {
				self['x'] = $p['float']($m['floor']((self['x'])/(other)));
				self['y'] = $p['float']($m['floor']((self['y'])/(other)));
			}
			return self;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__ifloordiv__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Vector2', $p['tuple']($bases), $data);
	})();
	$m['_Vector2'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.vector';
		$cls_definition['__slots__'] = $p['list'](['_x', '_y']);
		$method = $pyjs__bind_method2('__init__', function() {
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
			var $239,$238,$237,$236,$235,$234,$233,$232,$231,$230,$bool83,$bool82,$bool87,$bool86,$bool85,$bool84,$bool88,$248,$246,$247,$244,$245,$242,$243,$240,$241,$and9,$228,$229,$227,$256,$and10,$254,$eq43,$eq42,$eq41,l,$eq44,$251,$250,$253,$252,$255,$249,$len9;
			l = (($len9=args) === null?0:
				(typeof $len9['__array'] != 'undefined' ? $len9['__array']['length']:
					(typeof $len9['__len__'] == 'function'?$len9['__len__']():
						(typeof $len9['length'] != 'undefined'?$len9['length']:
							$p['len']($len9)))));
			if ((($bool82=(($eq41=l)===($eq42=2)&&$eq41===null?true:
				($eq41===null?false:($eq42===null?false:
					((typeof $eq41=='object'||typeof $eq41=='function')&&typeof $eq41['__cmp__']=='function'?$eq41['__cmp__']($eq42) === 0:
						((typeof $eq42=='object'||typeof $eq42=='function')&&typeof $eq42['__cmp__']=='function'?$eq42['__cmp__']($eq41) === 0:
							$eq41==$eq42)))))) === null || $bool82 === false || $bool82 === 0 || $bool82 === '' ?
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
				self['_x'] = $p['float']((typeof ($227=args)['__array'] != 'undefined'?
					((typeof $227['__array'][$228=0]) != 'undefined'?$227['__array'][$228]:
						$227['__getitem__']($228)):
						$227['__getitem__'](0)));
				self['_y'] = $p['float']((typeof ($229=args)['__array'] != 'undefined'?
					((typeof $229['__array'][$230=1]) != 'undefined'?$229['__array'][$230]:
						$229['__getitem__']($230)):
						$229['__getitem__'](1)));
			}
			else if ((($bool83=(($eq43=l)===($eq44=1)&&$eq43===null?true:
				($eq43===null?false:($eq44===null?false:
					((typeof $eq43=='object'||typeof $eq43=='function')&&typeof $eq43['__cmp__']=='function'?$eq43['__cmp__']($eq44) === 0:
						((typeof $eq44=='object'||typeof $eq44=='function')&&typeof $eq44['__cmp__']=='function'?$eq44['__cmp__']($eq43) === 0:
							$eq43==$eq44)))))) === null || $bool83 === false || $bool83 === 0 || $bool83 === '' ?
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
				if ((($bool84=$p['isinstance']((typeof ($231=args)['__array'] != 'undefined'?
					((typeof $231['__array'][$232=0]) != 'undefined'?$231['__array'][$232]:
						$231['__getitem__']($232)):
						$231['__getitem__'](0)), $p['tuple']([$p['float_int'], $p['float']]))) === null || $bool84 === false || $bool84 === 0 || $bool84 === '' ?
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
					self['_x'] = $p['float']((typeof ($233=args)['__array'] != 'undefined'?
						((typeof $233['__array'][$234=0]) != 'undefined'?$233['__array'][$234]:
							$233['__getitem__']($234)):
							$233['__getitem__'](0)));
					self['_y'] = $p['float']((typeof ($235=args)['__array'] != 'undefined'?
						((typeof $235['__array'][$236=0]) != 'undefined'?$235['__array'][$236]:
							$235['__getitem__']($236)):
							$235['__getitem__'](0)));
				}
				else {
					self['_x'] = $p['float']((typeof ($239=(typeof ($237=args)['__array'] != 'undefined'?
						((typeof $237['__array'][$238=0]) != 'undefined'?$237['__array'][$238]:
							$237['__getitem__']($238)):
							$237['__getitem__'](0)))['__array'] != 'undefined'?
						((typeof $239['__array'][$240=0]) != 'undefined'?$239['__array'][$240]:
							$239['__getitem__']($240)):
							$239['__getitem__'](0)));
					self['_y'] = $p['float']((typeof ($243=(typeof ($241=args)['__array'] != 'undefined'?
						((typeof $241['__array'][$242=0]) != 'undefined'?$241['__array'][$242]:
							$241['__getitem__']($242)):
							$241['__getitem__'](0)))['__array'] != 'undefined'?
						((typeof $243['__array'][$244=1]) != 'undefined'?$243['__array'][$244]:
							$243['__getitem__']($244)):
							$243['__getitem__'](1)));
				}
			}
			else {
				if ((($bool85=kwargs) === null || $bool85 === false || $bool85 === 0 || $bool85 === '' ?
						false :
						(typeof $bool85=='object'?
							(typeof $bool85['__nonzero__']=='function'?
								$bool85['__nonzero__']() :
								(typeof $bool85['__len__']=='function'?
									($bool85['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					if ((($bool87=((($bool86=$and9=kwargs['__contains__']('x')) === null || $bool86 === false || $bool86 === 0 || $bool86 === '' ?
						false :
						(typeof $bool86=='object'?
							(typeof $bool86['__nonzero__']=='function'?
								$bool86['__nonzero__']() :
								(typeof $bool86['__len__']=='function'?
									($bool86['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?kwargs['__contains__']('y'):$and9)) === null || $bool87 === false || $bool87 === 0 || $bool87 === '' ?
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
						self['_x'] = $p['float']((typeof ($245=kwargs)['__array'] != 'undefined'?
							((typeof $245['__array'][$246='x']) != 'undefined'?$245['__array'][$246]:
								$245['__getitem__']($246)):
								$245['__getitem__']('x')));
						self['_y'] = $p['float']((typeof ($247=kwargs)['__array'] != 'undefined'?
							((typeof $247['__array'][$248='y']) != 'undefined'?$247['__array'][$248]:
								$247['__getitem__']($248)):
								$247['__getitem__']('y')));
					}
					else if ((($bool88=kwargs['__contains__']('x')) === null || $bool88 === false || $bool88 === 0 || $bool88 === '' ?
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
						self['_x'] = $p['float']((typeof ($249=kwargs)['__array'] != 'undefined'?
							((typeof $249['__array'][$250='x']) != 'undefined'?$249['__array'][$250]:
								$249['__getitem__']($250)):
								$249['__getitem__']('x')));
						self['_y'] = $p['float']((typeof ($251=kwargs)['__array'] != 'undefined'?
							((typeof $251['__array'][$252='x']) != 'undefined'?$251['__array'][$252]:
								$251['__getitem__']($252)):
								$251['__getitem__']('x')));
					}
					else {
						self['_x'] = $p['float']((typeof ($253=kwargs)['__array'] != 'undefined'?
							((typeof $253['__array'][$254='y']) != 'undefined'?$253['__array'][$254]:
								$253['__getitem__']($254)):
								$253['__getitem__']('y')));
						self['_y'] = $p['float']((typeof ($255=kwargs)['__array'] != 'undefined'?
							((typeof $255['__array'][$256='y']) != 'undefined'?$255['__array'][$256]:
								$255['__getitem__']($256)):
								$255['__getitem__']('y')));
					}
				}
				else {
					self['_x'] = 0.0;
					self['_y'] = 0.0;
				}
			}
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('x', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr284,$attr283;
			return self['_x'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['x'] = $p['property']($p['staticmethod']($method));
		$method = $pyjs__bind_method2('x', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}
			var $pyjs_try_err;
			try {
				self['_x'] = $p['float'](val);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
					throw ($p['TypeError']('float is required'));
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['x'] = $cls_definition['x']['setter']($p['staticmethod']($method));
		$method = $pyjs__bind_method2('x', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($p['TypeError']('Cannot delete the x attribute'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['x'] = $cls_definition['x']['deleter']($p['staticmethod']($method));
		$method = $pyjs__bind_method2('y', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr285,$attr286;
			return self['_y'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['y'] = $p['property']($p['staticmethod']($method));
		$method = $pyjs__bind_method2('y', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}
			var $pyjs_try_err;
			try {
				self['_y'] = $p['float'](val);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
					throw ($p['TypeError']('float is required'));
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['y'] = $cls_definition['y']['setter']($p['staticmethod']($method));
		$method = $pyjs__bind_method2('y', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($p['TypeError']('Cannot delete the y attribute'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['y'] = $cls_definition['y']['deleter']($p['staticmethod']($method));
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr292,$attr290,$attr291,$attr289,$attr287,$attr288;
			return $p['sprintf']('<%s(%g, %g)>', $p['tuple']([$p['__getslice'](self['__class__']['__name__'], 1, null), self['x'], self['y']]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		var $bases = new Array($m['Vector2']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('_Vector2', $p['tuple']($bases), $data);
	})();
	if ((($bool89=$m['env']['pyjs_mode']['test_getattr']()) === null || $bool89 === false || $bool89 === 0 || $bool89 === '' ?
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
		$m['Vector2'] = $m['_Vector2'];
	}
	$m['VectorElementwiseProxy'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.vector';
		$method = $pyjs__bind_method2('__init__', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}

			self['_x'] = x;
			self['_y'] = y;
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $bool90,$attr296,$attr294,$bool91,$attr295,$attr293;
			if ((($bool90=$p['tuple']([0, -(2)])['__contains__'](index)) === null || $bool90 === false || $bool90 === 0 || $bool90 === '' ?
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
				return self['_x'];
			}
			else if ((($bool91=$p['tuple']([1, -(1)])['__contains__'](index)) === null || $bool91 === false || $bool91 === 0 || $bool91 === '' ?
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
				return self['_y'];
			}
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr304,$iter3_idx,$attr300,$attr297,val,$attr303,$iter4_nextval,$iter3_type,$attr302,$iter4_idx,$iter4_array,$attr299,$iter3_iter,$iter4_type,$iter3_array,$attr298,$iter4_iter,$iter3_nextval,$attr301;
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
					$iter4_iter = $p['tuple']([self['_x'], self['_y']]);
					if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
						$iter4_type = 0;
					} else {
						$iter4_iter = $iter4_iter['__iter__']();
						$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter4_idx = 0;
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							val = $iter4_nextval;
							$yield_value = val;
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
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 2;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__bool__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr305,$bool92,$attr307,$attr308,$attr306,$or17,$or18;
			return $p['bool'](((($bool92=$or17=self['_x']) === null || $bool92 === false || $bool92 === 0 || $bool92 === '' ?
				false :
				(typeof $bool92=='object'?
					(typeof $bool92['__nonzero__']=='function'?
						$bool92['__nonzero__']() :
						(typeof $bool92['__len__']=='function'?
							($bool92['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or17:self['_y']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__bool__'] = $method;
		$method = $pyjs__bind_method2('__nonzero__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool93,$attr312,$attr311,$attr310,$or19,$attr309,$or20;
			return $p['bool'](((($bool93=$or19=self['_x']) === null || $bool93 === false || $bool93 === 0 || $bool93 === '' ?
				false :
				(typeof $bool93=='object'?
					(typeof $bool93['__nonzero__']=='function'?
						$bool93['__nonzero__']() :
						(typeof $bool93['__len__']=='function'?
							($bool93['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or19:self['_y']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__nonzero__'] = $method;
		$method = $pyjs__bind_method2('__pos__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr316,$attr314,$attr313,$attr315;
			return $m['Vector2'](self['_x'], self['_y']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__pos__'] = $method;
		$method = $pyjs__bind_method2('__neg__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr317,$attr320,$attr319,$attr318;
			return $m['Vector2'](-(self['_x']), -(self['_y']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__neg__'] = $method;
		$method = $pyjs__bind_method2('__abs__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr322,$attr323,$attr321,$attr324;
			return $p['tuple']([$p['abs'](self['_x']), $p['abs'](self['_y'])]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__abs__'] = $method;
		$method = $pyjs__bind_method2('__add__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $260,$bool94,$attr329,$attr331,$attr330,$259,$258,$attr328,$attr332,$attr326,$attr327,$257,$attr325;
			if ((($bool94=$p['hasattr'](other, '__iter__')) === null || $bool94 === false || $bool94 === 0 || $bool94 === '' ?
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
				return $m['Vector2']((self['_x'])+((typeof ($257=other)['__array'] != 'undefined'?
					((typeof $257['__array'][$258=0]) != 'undefined'?$257['__array'][$258]:
						$257['__getitem__']($258)):
						$257['__getitem__'](0))), (self['_y'])+((typeof ($259=other)['__array'] != 'undefined'?
					((typeof $259['__array'][$260=1]) != 'undefined'?$259['__array'][$260]:
						$259['__getitem__']($260)):
						$259['__getitem__'](1))));
			}
			else {
				return $m['Vector2']((self['_x'])+(other), (self['_y'])+(other));
			}
			return null;
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
			var $263,$bool95,$attr340,$attr339,$261,$262,$264,$attr338,$attr335,$attr334,$attr337,$attr336,$attr333;
			if ((($bool95=$p['hasattr'](other, '__iter__')) === null || $bool95 === false || $bool95 === 0 || $bool95 === '' ?
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
				return $m['Vector2']((self['_x'])-((typeof ($261=other)['__array'] != 'undefined'?
					((typeof $261['__array'][$262=0]) != 'undefined'?$261['__array'][$262]:
						$261['__getitem__']($262)):
						$261['__getitem__'](0))), (self['_y'])-((typeof ($263=other)['__array'] != 'undefined'?
					((typeof $263['__array'][$264=1]) != 'undefined'?$263['__array'][$264]:
						$263['__getitem__']($264)):
						$263['__getitem__'](1))));
			}
			else {
				return $m['Vector2']((self['_x'])-(other), (self['_y'])-(other));
			}
			return null;
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
			var $attr348,$bool96,$attr341,$attr343,$attr344,$attr345,$attr346,$attr347,$265,$266,$267,$268,$attr342;
			if ((($bool96=$p['hasattr'](other, '__iter__')) === null || $bool96 === false || $bool96 === 0 || $bool96 === '' ?
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
				return $m['Vector2']((self['_x'])*((typeof ($265=other)['__array'] != 'undefined'?
					((typeof $265['__array'][$266=0]) != 'undefined'?$265['__array'][$266]:
						$265['__getitem__']($266)):
						$265['__getitem__'](0))), (self['_y'])*((typeof ($267=other)['__array'] != 'undefined'?
					((typeof $267['__array'][$268=1]) != 'undefined'?$267['__array'][$268]:
						$267['__getitem__']($268)):
						$267['__getitem__'](1))));
			}
			else {
				return $m['Vector2']((self['_x'])*(other), (self['_y'])*(other));
			}
			return null;
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
			var $attr349,$bool97,$attr353,$attr352,$attr350,$attr356,$attr355,$attr354,$272,$271,$269,$270,$attr351;
			if ((($bool97=$p['hasattr'](other, '__iter__')) === null || $bool97 === false || $bool97 === 0 || $bool97 === '' ?
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
				return $m['Vector2']((self['_x'])/((typeof ($269=other)['__array'] != 'undefined'?
					((typeof $269['__array'][$270=0]) != 'undefined'?$269['__array'][$270]:
						$269['__getitem__']($270)):
						$269['__getitem__'](0))), (self['_y'])/((typeof ($271=other)['__array'] != 'undefined'?
					((typeof $271['__array'][$272=1]) != 'undefined'?$271['__array'][$272]:
						$271['__getitem__']($272)):
						$271['__getitem__'](1))));
			}
			else {
				return $m['Vector2']((self['_x'])/(other), (self['_y'])/(other));
			}
			return null;
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
			var $attr359,$attr358,$bool98,$attr362,$attr357,$attr363,$attr360,$attr361,$273,$276,$275,$274,$attr364;
			if ((($bool98=$p['hasattr'](other, '__iter__')) === null || $bool98 === false || $bool98 === 0 || $bool98 === '' ?
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
				return $m['Vector2']((self['_x'])/((typeof ($273=other)['__array'] != 'undefined'?
					((typeof $273['__array'][$274=0]) != 'undefined'?$273['__array'][$274]:
						$273['__getitem__']($274)):
						$273['__getitem__'](0))), (self['_y'])/((typeof ($275=other)['__array'] != 'undefined'?
					((typeof $275['__array'][$276=1]) != 'undefined'?$275['__array'][$276]:
						$275['__getitem__']($276)):
						$275['__getitem__'](1))));
			}
			else {
				return $m['Vector2']((self['_x'])/(other), (self['_y'])/(other));
			}
			return null;
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
			var $attr371,$attr370,$attr372,$attr368,$attr369,$attr366,$bool99,$attr365,$280,$277,$attr367,$279,$278;
			if ((($bool99=$p['hasattr'](other, '__iter__')) === null || $bool99 === false || $bool99 === 0 || $bool99 === '' ?
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
				return $m['Vector2']($m['floor']((self['_x'])/((typeof ($277=other)['__array'] != 'undefined'?
					((typeof $277['__array'][$278=0]) != 'undefined'?$277['__array'][$278]:
						$277['__getitem__']($278)):
						$277['__getitem__'](0)))), $m['floor']((self['_y'])/((typeof ($279=other)['__array'] != 'undefined'?
					((typeof $279['__array'][$280=1]) != 'undefined'?$279['__array'][$280]:
						$279['__getitem__']($280)):
						$279['__getitem__'](1)))));
			}
			else {
				return $m['Vector2']($m['floor']((self['_x'])/(other)), $m['floor']((self['_y'])/(other)));
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__floordiv__'] = $method;
		$method = $pyjs__bind_method2('__pow__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr373,$attr375,$attr374,$attr377,$attr376,$attr379,$attr378,$285,$and15,$bool106,$mod5,$mod4,$mod6,$mod1,$mod3,$mod2,$cmp40,$288,$attr388,$attr384,$attr385,$attr387,$attr380,$attr381,$attr382,$attr383,$bool105,$or24,$and16,$or21,$or22,$or23,$cmp39,$cmp38,$and12,$and13,$bool104,$281,$bool101,$bool100,$284,$bool102,$cmp37,$cmp36,$cmp35,$cmp34,$cmp33,$282,$283,$bool103,$bool107,$and11,$and14,$286,$attr386,$287;
			if ((($bool100=$p['hasattr'](other, '__iter__')) === null || $bool100 === false || $bool100 === 0 || $bool100 === '' ?
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
				if ((($bool104=((($bool102=$or21=((($bool101=$and11=(($mod1=(typeof ($281=other)['__array'] != 'undefined'?
					((typeof $281['__array'][$282=0]) != 'undefined'?$281['__array'][$282]:
						$281['__getitem__']($282)):
						$281['__getitem__'](0)))!=null && ($mod2=1)!=null && typeof $mod1=='string'?
					$p['sprintf']($mod1,$mod2):
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1))) === null || $bool101 === false || $bool101 === 0 || $bool101 === '' ?
					false :
					(typeof $bool101=='object'?
						(typeof $bool101['__nonzero__']=='function'?
							$bool101['__nonzero__']() :
							(typeof $bool101['__len__']=='function'?
								($bool101['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp33=self['_x'])===($cmp34=0)?0:
					(typeof $cmp33==typeof $cmp34 && ((typeof $cmp33 == 'number')||(typeof $cmp33 == 'string')||(typeof $cmp33 == 'boolean'))?
						($cmp33 == $cmp34 ? 0 : ($cmp33 < $cmp34 ? -1 : 1)):
						$p['cmp']($cmp33, $cmp34))) == -1):$and11)) === null || $bool102 === false || $bool102 === 0 || $bool102 === '' ?
					false :
					(typeof $bool102=='object'?
						(typeof $bool102['__nonzero__']=='function'?
							$bool102['__nonzero__']() :
							(typeof $bool102['__len__']=='function'?
								($bool102['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or21:((($bool103=$and13=(($mod3=(typeof ($283=other)['__array'] != 'undefined'?
					((typeof $283['__array'][$284=1]) != 'undefined'?$283['__array'][$284]:
						$283['__getitem__']($284)):
						$283['__getitem__'](1)))!=null && ($mod4=1)!=null && typeof $mod3=='string'?
					$p['sprintf']($mod3,$mod4):
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3))) === null || $bool103 === false || $bool103 === 0 || $bool103 === '' ?
					false :
					(typeof $bool103=='object'?
						(typeof $bool103['__nonzero__']=='function'?
							$bool103['__nonzero__']() :
							(typeof $bool103['__len__']=='function'?
								($bool103['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp35=self['_y'])===($cmp36=0)?0:
					(typeof $cmp35==typeof $cmp36 && ((typeof $cmp35 == 'number')||(typeof $cmp35 == 'string')||(typeof $cmp35 == 'boolean'))?
						($cmp35 == $cmp36 ? 0 : ($cmp35 < $cmp36 ? -1 : 1)):
						$p['cmp']($cmp35, $cmp36))) == -1):$and13))) === null || $bool104 === false || $bool104 === 0 || $bool104 === '' ?
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
					throw ($p['ValueError']('negative number cannot be raised to a fractional power'));
				}
				return $m['Vector2'](Math['pow'](self['_x'],(typeof ($285=other)['__array'] != 'undefined'?
					((typeof $285['__array'][$286=0]) != 'undefined'?$285['__array'][$286]:
						$285['__getitem__']($286)):
						$285['__getitem__'](0))), Math['pow'](self['_y'],(typeof ($287=other)['__array'] != 'undefined'?
					((typeof $287['__array'][$288=1]) != 'undefined'?$287['__array'][$288]:
						$287['__getitem__']($288)):
						$287['__getitem__'](1))));
			}
			else {
				if ((($bool107=((($bool105=$and15=(($mod5=other)!=null && ($mod6=1)!=null && typeof $mod5=='string'?
					$p['sprintf']($mod5,$mod6):
					(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5))) === null || $bool105 === false || $bool105 === 0 || $bool105 === '' ?
					false :
					(typeof $bool105=='object'?
						(typeof $bool105['__nonzero__']=='function'?
							$bool105['__nonzero__']() :
							(typeof $bool105['__len__']=='function'?
								($bool105['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool106=$or23=((($cmp37=self['_x'])===($cmp38=0)?0:
					(typeof $cmp37==typeof $cmp38 && ((typeof $cmp37 == 'number')||(typeof $cmp37 == 'string')||(typeof $cmp37 == 'boolean'))?
						($cmp37 == $cmp38 ? 0 : ($cmp37 < $cmp38 ? -1 : 1)):
						$p['cmp']($cmp37, $cmp38))) == -1)) === null || $bool106 === false || $bool106 === 0 || $bool106 === '' ?
					false :
					(typeof $bool106=='object'?
						(typeof $bool106['__nonzero__']=='function'?
							$bool106['__nonzero__']() :
							(typeof $bool106['__len__']=='function'?
								($bool106['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or23:((($cmp39=self['_y'])===($cmp40=0)?0:
					(typeof $cmp39==typeof $cmp40 && ((typeof $cmp39 == 'number')||(typeof $cmp39 == 'string')||(typeof $cmp39 == 'boolean'))?
						($cmp39 == $cmp40 ? 0 : ($cmp39 < $cmp40 ? -1 : 1)):
						$p['cmp']($cmp39, $cmp40))) == -1)):$and15)) === null || $bool107 === false || $bool107 === 0 || $bool107 === '' ?
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
					throw ($p['ValueError']('negative number cannot be raised to a fractional power'));
				}
				return $m['Vector2'](Math['pow'](self['_x'],other), Math['pow'](self['_y'],other));
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__pow__'] = $method;
		$method = $pyjs__bind_method2('__mod__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $mod7,$mod9,$mod8,$292,$attr389,$291,$290,$mod14,$mod11,$mod10,$mod13,$mod12,$289,$bool108,$attr396,$attr395,$attr394,$attr393,$attr392,$attr391,$attr390;
			if ((($bool108=$p['hasattr'](other, '__iter__')) === null || $bool108 === false || $bool108 === 0 || $bool108 === '' ?
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
				return $m['Vector2']((($mod7=self['_x'])!=null && ($mod8=(typeof ($289=other)['__array'] != 'undefined'?
					((typeof $289['__array'][$290=0]) != 'undefined'?$289['__array'][$290]:
						$289['__getitem__']($290)):
						$289['__getitem__'](0)))!=null && typeof $mod7=='string'?
					$p['sprintf']($mod7,$mod8):
					(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7)), (($mod9=self['_y'])!=null && ($mod10=(typeof ($291=other)['__array'] != 'undefined'?
					((typeof $291['__array'][$292=1]) != 'undefined'?$291['__array'][$292]:
						$291['__getitem__']($292)):
						$291['__getitem__'](1)))!=null && typeof $mod9=='string'?
					$p['sprintf']($mod9,$mod10):
					(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9)));
			}
			else {
				return $m['Vector2']((($mod11=self['_x'])!=null && ($mod12=other)!=null && typeof $mod11=='string'?
					$p['sprintf']($mod11,$mod12):
					(($mod11=$mod11%$mod12)<0&&$mod12>0?$mod11+$mod12:$mod11)), (($mod13=self['_y'])!=null && ($mod14=other)!=null && typeof $mod13=='string'?
					$p['sprintf']($mod13,$mod14):
					(($mod13=$mod13%$mod14)<0&&$mod14>0?$mod13+$mod14:$mod13)));
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__mod__'] = $method;
		$method = $pyjs__bind_method2('__eq__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $bool112,$cmp42,$bool110,$bool111,$294,$295,$cmp43,$296,$cmp46,$cmp47,$cmp44,$cmp45,$cmp41,$293,$and20,$cmp48,$attr403,$attr402,$attr401,$attr400,$attr404,$and17,$and18,$and19,$bool109,$len10,$attr399,$attr398,$attr397,$eq46,$eq45;
			if ((($bool109=$p['hasattr'](other, '__iter__')) === null || $bool109 === false || $bool109 === 0 || $bool109 === '' ?
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
				if ((($bool110=(($eq45=(($len10=other) === null?0:
					(typeof $len10['__array'] != 'undefined' ? $len10['__array']['length']:
						(typeof $len10['__len__'] == 'function'?$len10['__len__']():
							(typeof $len10['length'] != 'undefined'?$len10['length']:
								$p['len']($len10))))))===($eq46=2)&&$eq45===null?true:
					($eq45===null?false:($eq46===null?false:
						((typeof $eq45=='object'||typeof $eq45=='function')&&typeof $eq45['__cmp__']=='function'?$eq45['__cmp__']($eq46) === 0:
							((typeof $eq46=='object'||typeof $eq46=='function')&&typeof $eq46['__cmp__']=='function'?$eq46['__cmp__']($eq45) === 0:
								$eq45==$eq46)))))) === null || $bool110 === false || $bool110 === 0 || $bool110 === '' ?
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
					return ((($bool111=$and17=((($cmp41=$p['abs']((self['_x'])-((typeof ($293=other)['__array'] != 'undefined'?
						((typeof $293['__array'][$294=0]) != 'undefined'?$293['__array'][$294]:
							$293['__getitem__']($294)):
							$293['__getitem__'](0)))))===($cmp42=1e-06)?0:
						(typeof $cmp41==typeof $cmp42 && ((typeof $cmp41 == 'number')||(typeof $cmp41 == 'string')||(typeof $cmp41 == 'boolean'))?
							($cmp41 == $cmp42 ? 0 : ($cmp41 < $cmp42 ? -1 : 1)):
							$p['cmp']($cmp41, $cmp42))) == -1)) === null || $bool111 === false || $bool111 === 0 || $bool111 === '' ?
						false :
						(typeof $bool111=='object'?
							(typeof $bool111['__nonzero__']=='function'?
								$bool111['__nonzero__']() :
								(typeof $bool111['__len__']=='function'?
									($bool111['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($cmp43=$p['abs']((self['_y'])-((typeof ($295=other)['__array'] != 'undefined'?
						((typeof $295['__array'][$296=1]) != 'undefined'?$295['__array'][$296]:
							$295['__getitem__']($296)):
							$295['__getitem__'](1)))))===($cmp44=1e-06)?0:
						(typeof $cmp43==typeof $cmp44 && ((typeof $cmp43 == 'number')||(typeof $cmp43 == 'string')||(typeof $cmp43 == 'boolean'))?
							($cmp43 == $cmp44 ? 0 : ($cmp43 < $cmp44 ? -1 : 1)):
							$p['cmp']($cmp43, $cmp44))) == -1):$and17);
				}
				else {
					return false;
				}
			}
			else {
				return ((($bool112=$and19=((($cmp45=$p['abs']((self['_x'])-(other)))===($cmp46=1e-06)?0:
					(typeof $cmp45==typeof $cmp46 && ((typeof $cmp45 == 'number')||(typeof $cmp45 == 'string')||(typeof $cmp45 == 'boolean'))?
						($cmp45 == $cmp46 ? 0 : ($cmp45 < $cmp46 ? -1 : 1)):
						$p['cmp']($cmp45, $cmp46))) == -1)) === null || $bool112 === false || $bool112 === 0 || $bool112 === '' ?
					false :
					(typeof $bool112=='object'?
						(typeof $bool112['__nonzero__']=='function'?
							$bool112['__nonzero__']() :
							(typeof $bool112['__len__']=='function'?
								($bool112['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp47=$p['abs']((self['_y'])-(other)))===($cmp48=1e-06)?0:
					(typeof $cmp47==typeof $cmp48 && ((typeof $cmp47 == 'number')||(typeof $cmp47 == 'string')||(typeof $cmp47 == 'boolean'))?
						($cmp47 == $cmp48 ? 0 : ($cmp47 < $cmp48 ? -1 : 1)):
						$p['cmp']($cmp47, $cmp48))) == -1):$and19);
			}
			return null;
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
			var $attr410,$attr411,$attr412,$bool113,$cmp49,$299,$298,$bool114,$bool115,$297,$300,$or28,$or25,$or26,$or27,$attr409,$attr408,$attr407,$attr406,$attr405,$cmp51,$cmp50,$cmp53,$cmp52,$cmp55,$cmp54,$cmp56,$len11,$eq48,$eq47,$bool116;
			if ((($bool113=$p['hasattr'](other, '__iter__')) === null || $bool113 === false || $bool113 === 0 || $bool113 === '' ?
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
				if ((($bool114=(($eq47=(($len11=other) === null?0:
					(typeof $len11['__array'] != 'undefined' ? $len11['__array']['length']:
						(typeof $len11['__len__'] == 'function'?$len11['__len__']():
							(typeof $len11['length'] != 'undefined'?$len11['length']:
								$p['len']($len11))))))===($eq48=2)&&$eq47===null?true:
					($eq47===null?false:($eq48===null?false:
						((typeof $eq47=='object'||typeof $eq47=='function')&&typeof $eq47['__cmp__']=='function'?$eq47['__cmp__']($eq48) === 0:
							((typeof $eq48=='object'||typeof $eq48=='function')&&typeof $eq48['__cmp__']=='function'?$eq48['__cmp__']($eq47) === 0:
								$eq47==$eq48)))))) === null || $bool114 === false || $bool114 === 0 || $bool114 === '' ?
						false :
						(typeof $bool114=='object'?
							(typeof $bool114['__nonzero__']=='function'?
								$bool114['__nonzero__']() :
								(typeof $bool114['__len__']=='function'?
									($bool114['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return ((($bool115=$or25=((($cmp49=$p['abs']((self['_x'])-((typeof ($297=other)['__array'] != 'undefined'?
						((typeof $297['__array'][$298=0]) != 'undefined'?$297['__array'][$298]:
							$297['__getitem__']($298)):
							$297['__getitem__'](0)))))===($cmp50=1e-06)?0:
						(typeof $cmp49==typeof $cmp50 && ((typeof $cmp49 == 'number')||(typeof $cmp49 == 'string')||(typeof $cmp49 == 'boolean'))?
							($cmp49 == $cmp50 ? 0 : ($cmp49 < $cmp50 ? -1 : 1)):
							$p['cmp']($cmp49, $cmp50))) == 1)) === null || $bool115 === false || $bool115 === 0 || $bool115 === '' ?
						false :
						(typeof $bool115=='object'?
							(typeof $bool115['__nonzero__']=='function'?
								$bool115['__nonzero__']() :
								(typeof $bool115['__len__']=='function'?
									($bool115['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or25:((($cmp51=$p['abs']((self['_y'])-((typeof ($299=other)['__array'] != 'undefined'?
						((typeof $299['__array'][$300=1]) != 'undefined'?$299['__array'][$300]:
							$299['__getitem__']($300)):
							$299['__getitem__'](1)))))===($cmp52=1e-06)?0:
						(typeof $cmp51==typeof $cmp52 && ((typeof $cmp51 == 'number')||(typeof $cmp51 == 'string')||(typeof $cmp51 == 'boolean'))?
							($cmp51 == $cmp52 ? 0 : ($cmp51 < $cmp52 ? -1 : 1)):
							$p['cmp']($cmp51, $cmp52))) == 1));
				}
				else {
					return true;
				}
			}
			else {
				return ((($bool116=$or27=((($cmp53=$p['abs']((self['_x'])-(other)))===($cmp54=1e-06)?0:
					(typeof $cmp53==typeof $cmp54 && ((typeof $cmp53 == 'number')||(typeof $cmp53 == 'string')||(typeof $cmp53 == 'boolean'))?
						($cmp53 == $cmp54 ? 0 : ($cmp53 < $cmp54 ? -1 : 1)):
						$p['cmp']($cmp53, $cmp54))) == 1)) === null || $bool116 === false || $bool116 === 0 || $bool116 === '' ?
					false :
					(typeof $bool116=='object'?
						(typeof $bool116['__nonzero__']=='function'?
							$bool116['__nonzero__']() :
							(typeof $bool116['__len__']=='function'?
								($bool116['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or27:((($cmp55=$p['abs']((self['_y'])-(other)))===($cmp56=1e-06)?0:
					(typeof $cmp55==typeof $cmp56 && ((typeof $cmp55 == 'number')||(typeof $cmp55 == 'string')||(typeof $cmp55 == 'boolean'))?
						($cmp55 == $cmp56 ? 0 : ($cmp55 < $cmp56 ? -1 : 1)):
						$p['cmp']($cmp55, $cmp56))) == 1));
			}
			return null;
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
			var $attr418,$attr419,$cmp60,$cmp61,$cmp62,$cmp63,$attr413,$attr414,$attr415,$attr416,$attr417,$bool117,$and23,$and22,$and21,$bool119,$bool118,$and24,$303,$302,$301,$304,$attr420,$cmp64,$cmp59,$cmp58,$cmp57;
			if ((($bool117=$p['hasattr'](other, '__iter__')) === null || $bool117 === false || $bool117 === 0 || $bool117 === '' ?
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
				return $p['bool'](((($bool118=$and21=((($cmp57=self['_x'])===($cmp58=(typeof ($301=other)['__array'] != 'undefined'?
					((typeof $301['__array'][$302=0]) != 'undefined'?$301['__array'][$302]:
						$301['__getitem__']($302)):
						$301['__getitem__'](0)))?0:
					(typeof $cmp57==typeof $cmp58 && ((typeof $cmp57 == 'number')||(typeof $cmp57 == 'string')||(typeof $cmp57 == 'boolean'))?
						($cmp57 == $cmp58 ? 0 : ($cmp57 < $cmp58 ? -1 : 1)):
						$p['cmp']($cmp57, $cmp58))) == 1)) === null || $bool118 === false || $bool118 === 0 || $bool118 === '' ?
					false :
					(typeof $bool118=='object'?
						(typeof $bool118['__nonzero__']=='function'?
							$bool118['__nonzero__']() :
							(typeof $bool118['__len__']=='function'?
								($bool118['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp59=self['_y'])===($cmp60=(typeof ($303=other)['__array'] != 'undefined'?
					((typeof $303['__array'][$304=1]) != 'undefined'?$303['__array'][$304]:
						$303['__getitem__']($304)):
						$303['__getitem__'](1)))?0:
					(typeof $cmp59==typeof $cmp60 && ((typeof $cmp59 == 'number')||(typeof $cmp59 == 'string')||(typeof $cmp59 == 'boolean'))?
						($cmp59 == $cmp60 ? 0 : ($cmp59 < $cmp60 ? -1 : 1)):
						$p['cmp']($cmp59, $cmp60))) == 1):$and21));
			}
			else {
				return $p['bool'](((($bool119=$and23=((($cmp61=self['_x'])===($cmp62=other)?0:
					(typeof $cmp61==typeof $cmp62 && ((typeof $cmp61 == 'number')||(typeof $cmp61 == 'string')||(typeof $cmp61 == 'boolean'))?
						($cmp61 == $cmp62 ? 0 : ($cmp61 < $cmp62 ? -1 : 1)):
						$p['cmp']($cmp61, $cmp62))) == 1)) === null || $bool119 === false || $bool119 === 0 || $bool119 === '' ?
					false :
					(typeof $bool119=='object'?
						(typeof $bool119['__nonzero__']=='function'?
							$bool119['__nonzero__']() :
							(typeof $bool119['__len__']=='function'?
								($bool119['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp63=self['_y'])===($cmp64=other)?0:
					(typeof $cmp63==typeof $cmp64 && ((typeof $cmp63 == 'number')||(typeof $cmp63 == 'string')||(typeof $cmp63 == 'boolean'))?
						($cmp63 == $cmp64 ? 0 : ($cmp63 < $cmp64 ? -1 : 1)):
						$p['cmp']($cmp63, $cmp64))) == 1):$and23));
			}
			return null;
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
			var $cmp65,$cmp66,$cmp67,$cmp68,$cmp69,$cmp70,$and27,$and26,$and25,$307,$306,$305,$cmp71,$308,$attr421,$cmp72,$attr423,$attr422,$attr425,$attr424,$attr427,$attr426,$attr428,$bool122,$bool121,$bool120,$and28;
			if ((($bool120=$p['hasattr'](other, '__iter__')) === null || $bool120 === false || $bool120 === 0 || $bool120 === '' ?
					false :
					(typeof $bool120=='object'?
						(typeof $bool120['__nonzero__']=='function'?
							$bool120['__nonzero__']() :
							(typeof $bool120['__len__']=='function'?
								($bool120['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['bool'](((($bool121=$and25=((((($cmp65=self['_x'])===($cmp66=(typeof ($305=other)['__array'] != 'undefined'?
					((typeof $305['__array'][$306=0]) != 'undefined'?$305['__array'][$306]:
						$305['__getitem__']($306)):
						$305['__getitem__'](0)))?0:
					(typeof $cmp65==typeof $cmp66 && ((typeof $cmp65 == 'number')||(typeof $cmp65 == 'string')||(typeof $cmp65 == 'boolean'))?
						($cmp65 == $cmp66 ? 0 : ($cmp65 < $cmp66 ? -1 : 1)):
						$p['cmp']($cmp65, $cmp66))))|1) == 1)) === null || $bool121 === false || $bool121 === 0 || $bool121 === '' ?
					false :
					(typeof $bool121=='object'?
						(typeof $bool121['__nonzero__']=='function'?
							$bool121['__nonzero__']() :
							(typeof $bool121['__len__']=='function'?
								($bool121['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((((($cmp67=self['_y'])===($cmp68=(typeof ($307=other)['__array'] != 'undefined'?
					((typeof $307['__array'][$308=1]) != 'undefined'?$307['__array'][$308]:
						$307['__getitem__']($308)):
						$307['__getitem__'](1)))?0:
					(typeof $cmp67==typeof $cmp68 && ((typeof $cmp67 == 'number')||(typeof $cmp67 == 'string')||(typeof $cmp67 == 'boolean'))?
						($cmp67 == $cmp68 ? 0 : ($cmp67 < $cmp68 ? -1 : 1)):
						$p['cmp']($cmp67, $cmp68))))|1) == 1):$and25));
			}
			else {
				return $p['bool'](((($bool122=$and27=((((($cmp69=self['_x'])===($cmp70=other)?0:
					(typeof $cmp69==typeof $cmp70 && ((typeof $cmp69 == 'number')||(typeof $cmp69 == 'string')||(typeof $cmp69 == 'boolean'))?
						($cmp69 == $cmp70 ? 0 : ($cmp69 < $cmp70 ? -1 : 1)):
						$p['cmp']($cmp69, $cmp70))))|1) == 1)) === null || $bool122 === false || $bool122 === 0 || $bool122 === '' ?
					false :
					(typeof $bool122=='object'?
						(typeof $bool122['__nonzero__']=='function'?
							$bool122['__nonzero__']() :
							(typeof $bool122['__len__']=='function'?
								($bool122['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((((($cmp71=self['_y'])===($cmp72=other)?0:
					(typeof $cmp71==typeof $cmp72 && ((typeof $cmp71 == 'number')||(typeof $cmp71 == 'string')||(typeof $cmp71 == 'boolean'))?
						($cmp71 == $cmp72 ? 0 : ($cmp71 < $cmp72 ? -1 : 1)):
						$p['cmp']($cmp71, $cmp72))))|1) == 1):$and27));
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__ge__'] = $method;
		$method = $pyjs__bind_method2('__lt__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr436,$attr434,$attr435,$attr432,$attr433,$attr430,$attr431,$and29,$bool123,$309,$cmp73,$cmp77,$cmp76,$cmp75,$cmp74,$attr429,$cmp79,$cmp78,$cmp80,$bool125,$bool124,$and30,$and31,$and32,$310,$311,$312;
			if ((($bool123=$p['hasattr'](other, '__iter__')) === null || $bool123 === false || $bool123 === 0 || $bool123 === '' ?
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
				return $p['bool'](((($bool124=$and29=((($cmp73=self['_x'])===($cmp74=(typeof ($309=other)['__array'] != 'undefined'?
					((typeof $309['__array'][$310=0]) != 'undefined'?$309['__array'][$310]:
						$309['__getitem__']($310)):
						$309['__getitem__'](0)))?0:
					(typeof $cmp73==typeof $cmp74 && ((typeof $cmp73 == 'number')||(typeof $cmp73 == 'string')||(typeof $cmp73 == 'boolean'))?
						($cmp73 == $cmp74 ? 0 : ($cmp73 < $cmp74 ? -1 : 1)):
						$p['cmp']($cmp73, $cmp74))) == -1)) === null || $bool124 === false || $bool124 === 0 || $bool124 === '' ?
					false :
					(typeof $bool124=='object'?
						(typeof $bool124['__nonzero__']=='function'?
							$bool124['__nonzero__']() :
							(typeof $bool124['__len__']=='function'?
								($bool124['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp75=self['_y'])===($cmp76=(typeof ($311=other)['__array'] != 'undefined'?
					((typeof $311['__array'][$312=1]) != 'undefined'?$311['__array'][$312]:
						$311['__getitem__']($312)):
						$311['__getitem__'](1)))?0:
					(typeof $cmp75==typeof $cmp76 && ((typeof $cmp75 == 'number')||(typeof $cmp75 == 'string')||(typeof $cmp75 == 'boolean'))?
						($cmp75 == $cmp76 ? 0 : ($cmp75 < $cmp76 ? -1 : 1)):
						$p['cmp']($cmp75, $cmp76))) == -1):$and29));
			}
			else {
				return $p['bool'](((($bool125=$and31=((($cmp77=self['_x'])===($cmp78=other)?0:
					(typeof $cmp77==typeof $cmp78 && ((typeof $cmp77 == 'number')||(typeof $cmp77 == 'string')||(typeof $cmp77 == 'boolean'))?
						($cmp77 == $cmp78 ? 0 : ($cmp77 < $cmp78 ? -1 : 1)):
						$p['cmp']($cmp77, $cmp78))) == -1)) === null || $bool125 === false || $bool125 === 0 || $bool125 === '' ?
					false :
					(typeof $bool125=='object'?
						(typeof $bool125['__nonzero__']=='function'?
							$bool125['__nonzero__']() :
							(typeof $bool125['__len__']=='function'?
								($bool125['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp79=self['_y'])===($cmp80=other)?0:
					(typeof $cmp79==typeof $cmp80 && ((typeof $cmp79 == 'number')||(typeof $cmp79 == 'string')||(typeof $cmp79 == 'boolean'))?
						($cmp79 == $cmp80 ? 0 : ($cmp79 < $cmp80 ? -1 : 1)):
						$p['cmp']($cmp79, $cmp80))) == -1):$and31));
			}
			return null;
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
			var $attr438,$attr439,$cmp86,$attr437,$cmp84,$cmp85,$cmp82,$cmp83,$cmp81,$bool127,$and35,$cmp88,$cmp87,$attr444,$attr443,$attr442,$attr441,$attr440,$bool128,$and34,$bool126,$and36,$and33,$313,$314,$315,$316;
			if ((($bool126=$p['hasattr'](other, '__iter__')) === null || $bool126 === false || $bool126 === 0 || $bool126 === '' ?
					false :
					(typeof $bool126=='object'?
						(typeof $bool126['__nonzero__']=='function'?
							$bool126['__nonzero__']() :
							(typeof $bool126['__len__']=='function'?
								($bool126['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $p['bool'](((($bool127=$and33=((($cmp81=self['_x'])===($cmp82=(typeof ($313=other)['__array'] != 'undefined'?
					((typeof $313['__array'][$314=0]) != 'undefined'?$313['__array'][$314]:
						$313['__getitem__']($314)):
						$313['__getitem__'](0)))?0:
					(typeof $cmp81==typeof $cmp82 && ((typeof $cmp81 == 'number')||(typeof $cmp81 == 'string')||(typeof $cmp81 == 'boolean'))?
						($cmp81 == $cmp82 ? 0 : ($cmp81 < $cmp82 ? -1 : 1)):
						$p['cmp']($cmp81, $cmp82))) < 1)) === null || $bool127 === false || $bool127 === 0 || $bool127 === '' ?
					false :
					(typeof $bool127=='object'?
						(typeof $bool127['__nonzero__']=='function'?
							$bool127['__nonzero__']() :
							(typeof $bool127['__len__']=='function'?
								($bool127['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp83=self['_y'])===($cmp84=(typeof ($315=other)['__array'] != 'undefined'?
					((typeof $315['__array'][$316=1]) != 'undefined'?$315['__array'][$316]:
						$315['__getitem__']($316)):
						$315['__getitem__'](1)))?0:
					(typeof $cmp83==typeof $cmp84 && ((typeof $cmp83 == 'number')||(typeof $cmp83 == 'string')||(typeof $cmp83 == 'boolean'))?
						($cmp83 == $cmp84 ? 0 : ($cmp83 < $cmp84 ? -1 : 1)):
						$p['cmp']($cmp83, $cmp84))) < 1):$and33));
			}
			else {
				return $p['bool'](((($bool128=$and35=((($cmp85=self['_x'])===($cmp86=other)?0:
					(typeof $cmp85==typeof $cmp86 && ((typeof $cmp85 == 'number')||(typeof $cmp85 == 'string')||(typeof $cmp85 == 'boolean'))?
						($cmp85 == $cmp86 ? 0 : ($cmp85 < $cmp86 ? -1 : 1)):
						$p['cmp']($cmp85, $cmp86))) < 1)) === null || $bool128 === false || $bool128 === 0 || $bool128 === '' ?
					false :
					(typeof $bool128=='object'?
						(typeof $bool128['__nonzero__']=='function'?
							$bool128['__nonzero__']() :
							(typeof $bool128['__len__']=='function'?
								($bool128['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp87=self['_y'])===($cmp88=other)?0:
					(typeof $cmp87==typeof $cmp88 && ((typeof $cmp87 == 'number')||(typeof $cmp87 == 'string')||(typeof $cmp87 == 'boolean'))?
						($cmp87 == $cmp88 ? 0 : ($cmp87 < $cmp88 ? -1 : 1)):
						$p['cmp']($cmp87, $cmp88))) < 1):$and35));
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__le__'] = $method;
		$method = $pyjs__bind_method2('__radd__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr447,$attr446,$attr445,$attr450,$attr451,$attr452,$attr449,$attr448,$320,$bool129,$317,$318,$319;
			if ((($bool129=$p['hasattr'](other, '__iter__')) === null || $bool129 === false || $bool129 === 0 || $bool129 === '' ?
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
				return $m['Vector2']((self['_x'])+((typeof ($317=other)['__array'] != 'undefined'?
					((typeof $317['__array'][$318=0]) != 'undefined'?$317['__array'][$318]:
						$317['__getitem__']($318)):
						$317['__getitem__'](0))), (self['_y'])+((typeof ($319=other)['__array'] != 'undefined'?
					((typeof $319['__array'][$320=1]) != 'undefined'?$319['__array'][$320]:
						$319['__getitem__']($320)):
						$319['__getitem__'](1))));
			}
			else {
				return $m['Vector2']((self['_x'])+(other), (self['_y'])+(other));
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__radd__'] = $method;
		$method = $pyjs__bind_method2('__rsub__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr454,$attr455,$attr456,$attr457,$attr453,$attr458,$attr459,$attr460,$321,$323,$322,$bool130,$324;
			if ((($bool130=$p['hasattr'](other, '__iter__')) === null || $bool130 === false || $bool130 === 0 || $bool130 === '' ?
					false :
					(typeof $bool130=='object'?
						(typeof $bool130['__nonzero__']=='function'?
							$bool130['__nonzero__']() :
							(typeof $bool130['__len__']=='function'?
								($bool130['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $m['Vector2'](((typeof ($321=other)['__array'] != 'undefined'?
					((typeof $321['__array'][$322=0]) != 'undefined'?$321['__array'][$322]:
						$321['__getitem__']($322)):
						$321['__getitem__'](0)))-(self['_x']), ((typeof ($323=other)['__array'] != 'undefined'?
					((typeof $323['__array'][$324=1]) != 'undefined'?$323['__array'][$324]:
						$323['__getitem__']($324)):
						$323['__getitem__'](1)))-(self['_y']));
			}
			else {
				return $m['Vector2']((other)-(self['_x']), (other)-(self['_y']));
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__rsub__'] = $method;
		$method = $pyjs__bind_method2('__rmul__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr466,$attr461,$328,$327,$attr468,$attr465,$attr464,$attr467,$326,$325,$bool131,$attr463,$attr462;
			if ((($bool131=$p['hasattr'](other, '__iter__')) === null || $bool131 === false || $bool131 === 0 || $bool131 === '' ?
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
				return $m['Vector2']((self['_x'])*((typeof ($325=other)['__array'] != 'undefined'?
					((typeof $325['__array'][$326=0]) != 'undefined'?$325['__array'][$326]:
						$325['__getitem__']($326)):
						$325['__getitem__'](0))), (self['_y'])*((typeof ($327=other)['__array'] != 'undefined'?
					((typeof $327['__array'][$328=1]) != 'undefined'?$327['__array'][$328]:
						$327['__getitem__']($328)):
						$327['__getitem__'](1))));
			}
			else {
				return $m['Vector2']((self['_x'])*(other), (self['_y'])*(other));
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__rmul__'] = $method;
		$method = $pyjs__bind_method2('__rdiv__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr476,$attr475,$329,$attr474,$attr469,$bool132,$attr472,$attr473,$attr470,$attr471,$332,$330,$331;
			if ((($bool132=$p['hasattr'](other, '__iter__')) === null || $bool132 === false || $bool132 === 0 || $bool132 === '' ?
					false :
					(typeof $bool132=='object'?
						(typeof $bool132['__nonzero__']=='function'?
							$bool132['__nonzero__']() :
							(typeof $bool132['__len__']=='function'?
								($bool132['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $m['Vector2'](((typeof ($329=other)['__array'] != 'undefined'?
					((typeof $329['__array'][$330=0]) != 'undefined'?$329['__array'][$330]:
						$329['__getitem__']($330)):
						$329['__getitem__'](0)))/(self['_x']), ((typeof ($331=other)['__array'] != 'undefined'?
					((typeof $331['__array'][$332=1]) != 'undefined'?$331['__array'][$332]:
						$331['__getitem__']($332)):
						$331['__getitem__'](1)))/(self['_y']));
			}
			else {
				return $m['Vector2']((other)/(self['_x']), (other)/(self['_y']));
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__rdiv__'] = $method;
		$method = $pyjs__bind_method2('__rtruediv__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr480,$attr479,$attr481,$attr477,$attr483,$attr482,$attr478,$attr484,$336,$334,$335,$333,$bool133;
			if ((($bool133=$p['hasattr'](other, '__iter__')) === null || $bool133 === false || $bool133 === 0 || $bool133 === '' ?
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
				return $m['Vector2'](((typeof ($333=other)['__array'] != 'undefined'?
					((typeof $333['__array'][$334=0]) != 'undefined'?$333['__array'][$334]:
						$333['__getitem__']($334)):
						$333['__getitem__'](0)))/(self['_x']), ((typeof ($335=other)['__array'] != 'undefined'?
					((typeof $335['__array'][$336=1]) != 'undefined'?$335['__array'][$336]:
						$335['__getitem__']($336)):
						$335['__getitem__'](1)))/(self['_y']));
			}
			else {
				return $m['Vector2']((other)/(self['_x']), (other)/(self['_y']));
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__rtruediv__'] = $method;
		$method = $pyjs__bind_method2('__rfloordiv__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $338,$340,$attr490,$attr491,$attr492,$attr487,$attr486,$attr485,$339,$bool134,$337,$attr489,$attr488;
			if ((($bool134=$p['hasattr'](other, '__iter__')) === null || $bool134 === false || $bool134 === 0 || $bool134 === '' ?
					false :
					(typeof $bool134=='object'?
						(typeof $bool134['__nonzero__']=='function'?
							$bool134['__nonzero__']() :
							(typeof $bool134['__len__']=='function'?
								($bool134['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				return $m['Vector2']($m['floor'](((typeof ($337=other)['__array'] != 'undefined'?
					((typeof $337['__array'][$338=0]) != 'undefined'?$337['__array'][$338]:
						$337['__getitem__']($338)):
						$337['__getitem__'](0)))/(self['_x'])), $m['floor'](((typeof ($339=other)['__array'] != 'undefined'?
					((typeof $339['__array'][$340=1]) != 'undefined'?$339['__array'][$340]:
						$339['__getitem__']($340)):
						$339['__getitem__'](1)))/(self['_y'])));
			}
			else {
				return $m['Vector2']($m['floor']((other)/(self['_x'])), $m['floor']((other)/(self['_y'])));
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__rfloordiv__'] = $method;
		$method = $pyjs__bind_method2('__rpow__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $mod20,$mod21,$mod22,$cmp89,$cmp90,$cmp94,$bool138,$bool139,$bool135,$bool136,$bool137,$bool142,$attr503,$cmp93,$and41,$and40,$and42,$or29,$346,$attr506,$attr505,$mod19,$attr507,$mod15,$mod17,$mod16,$attr504,$348,$347,$cmp91,$345,$344,$343,$342,$341,$cmp92,$and38,$and39,$bool141,$bool140,$mod18,$and37,$or31,$attr501,$attr502,$or32,$attr500,$attr493,$attr494,$attr495,$attr496,$attr497,$attr498,$attr499,$attr508,$or30;
			if ((($bool135=$p['hasattr'](other, '__iter__')) === null || $bool135 === false || $bool135 === 0 || $bool135 === '' ?
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
				if ((($bool139=((($bool137=$or29=((($bool136=$and37=((($cmp89=(typeof ($341=other)['__array'] != 'undefined'?
					((typeof $341['__array'][$342=0]) != 'undefined'?$341['__array'][$342]:
						$341['__getitem__']($342)):
						$341['__getitem__'](0)))===($cmp90=0)?0:
					(typeof $cmp89==typeof $cmp90 && ((typeof $cmp89 == 'number')||(typeof $cmp89 == 'string')||(typeof $cmp89 == 'boolean'))?
						($cmp89 == $cmp90 ? 0 : ($cmp89 < $cmp90 ? -1 : 1)):
						$p['cmp']($cmp89, $cmp90))) == -1)) === null || $bool136 === false || $bool136 === 0 || $bool136 === '' ?
					false :
					(typeof $bool136=='object'?
						(typeof $bool136['__nonzero__']=='function'?
							$bool136['__nonzero__']() :
							(typeof $bool136['__len__']=='function'?
								($bool136['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(($mod15=self['_x'])!=null && ($mod16=1)!=null && typeof $mod15=='string'?
					$p['sprintf']($mod15,$mod16):
					(($mod15=$mod15%$mod16)<0&&$mod16>0?$mod15+$mod16:$mod15)):$and37)) === null || $bool137 === false || $bool137 === 0 || $bool137 === '' ?
					false :
					(typeof $bool137=='object'?
						(typeof $bool137['__nonzero__']=='function'?
							$bool137['__nonzero__']() :
							(typeof $bool137['__len__']=='function'?
								($bool137['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or29:((($bool138=$and39=((($cmp91=(typeof ($343=other)['__array'] != 'undefined'?
					((typeof $343['__array'][$344=1]) != 'undefined'?$343['__array'][$344]:
						$343['__getitem__']($344)):
						$343['__getitem__'](1)))===($cmp92=0)?0:
					(typeof $cmp91==typeof $cmp92 && ((typeof $cmp91 == 'number')||(typeof $cmp91 == 'string')||(typeof $cmp91 == 'boolean'))?
						($cmp91 == $cmp92 ? 0 : ($cmp91 < $cmp92 ? -1 : 1)):
						$p['cmp']($cmp91, $cmp92))) == -1)) === null || $bool138 === false || $bool138 === 0 || $bool138 === '' ?
					false :
					(typeof $bool138=='object'?
						(typeof $bool138['__nonzero__']=='function'?
							$bool138['__nonzero__']() :
							(typeof $bool138['__len__']=='function'?
								($bool138['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(($mod17=self['_y'])!=null && ($mod18=1)!=null && typeof $mod17=='string'?
					$p['sprintf']($mod17,$mod18):
					(($mod17=$mod17%$mod18)<0&&$mod18>0?$mod17+$mod18:$mod17)):$and39))) === null || $bool139 === false || $bool139 === 0 || $bool139 === '' ?
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
					throw ($p['ValueError']('negative number cannot be raised to a fractional power'));
				}
				return $m['Vector2'](Math['pow']((typeof ($345=other)['__array'] != 'undefined'?
					((typeof $345['__array'][$346=0]) != 'undefined'?$345['__array'][$346]:
						$345['__getitem__']($346)):
						$345['__getitem__'](0)),self['_x']), Math['pow']((typeof ($347=other)['__array'] != 'undefined'?
					((typeof $347['__array'][$348=1]) != 'undefined'?$347['__array'][$348]:
						$347['__getitem__']($348)):
						$347['__getitem__'](1)),self['_y']));
			}
			else {
				if ((($bool142=((($bool140=$and41=((($cmp93=other)===($cmp94=0)?0:
					(typeof $cmp93==typeof $cmp94 && ((typeof $cmp93 == 'number')||(typeof $cmp93 == 'string')||(typeof $cmp93 == 'boolean'))?
						($cmp93 == $cmp94 ? 0 : ($cmp93 < $cmp94 ? -1 : 1)):
						$p['cmp']($cmp93, $cmp94))) == -1)) === null || $bool140 === false || $bool140 === 0 || $bool140 === '' ?
					false :
					(typeof $bool140=='object'?
						(typeof $bool140['__nonzero__']=='function'?
							$bool140['__nonzero__']() :
							(typeof $bool140['__len__']=='function'?
								($bool140['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($bool141=$or31=(($mod19=self['_x'])!=null && ($mod20=1)!=null && typeof $mod19=='string'?
					$p['sprintf']($mod19,$mod20):
					(($mod19=$mod19%$mod20)<0&&$mod20>0?$mod19+$mod20:$mod19))) === null || $bool141 === false || $bool141 === 0 || $bool141 === '' ?
					false :
					(typeof $bool141=='object'?
						(typeof $bool141['__nonzero__']=='function'?
							$bool141['__nonzero__']() :
							(typeof $bool141['__len__']=='function'?
								($bool141['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or31:(($mod21=self['_y'])!=null && ($mod22=1)!=null && typeof $mod21=='string'?
					$p['sprintf']($mod21,$mod22):
					(($mod21=$mod21%$mod22)<0&&$mod22>0?$mod21+$mod22:$mod21))):$and41)) === null || $bool142 === false || $bool142 === 0 || $bool142 === '' ?
						false :
						(typeof $bool142=='object'?
							(typeof $bool142['__nonzero__']=='function'?
								$bool142['__nonzero__']() :
								(typeof $bool142['__len__']=='function'?
									($bool142['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					throw ($p['ValueError']('negative number cannot be raised to a fractional power'));
				}
				return $m['Vector2'](Math['pow'](other,self['_x']), Math['pow'](other,self['_y']));
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__rpow__'] = $method;
		$method = $pyjs__bind_method2('__rmod__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $mod23,$mod24,$mod25,$mod26,$mod27,$mod28,$mod29,$350,$351,$352,$attr515,$attr514,$attr516,$attr511,$attr510,$attr513,$attr512,$349,$mod30,$bool143,$attr509;
			if ((($bool143=$p['hasattr'](other, '__iter__')) === null || $bool143 === false || $bool143 === 0 || $bool143 === '' ?
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
				return $m['Vector2']((($mod23=(typeof ($349=other)['__array'] != 'undefined'?
					((typeof $349['__array'][$350=0]) != 'undefined'?$349['__array'][$350]:
						$349['__getitem__']($350)):
						$349['__getitem__'](0)))!=null && ($mod24=self['_x'])!=null && typeof $mod23=='string'?
					$p['sprintf']($mod23,$mod24):
					(($mod23=$mod23%$mod24)<0&&$mod24>0?$mod23+$mod24:$mod23)), (($mod25=(typeof ($351=other)['__array'] != 'undefined'?
					((typeof $351['__array'][$352=1]) != 'undefined'?$351['__array'][$352]:
						$351['__getitem__']($352)):
						$351['__getitem__'](1)))!=null && ($mod26=self['_y'])!=null && typeof $mod25=='string'?
					$p['sprintf']($mod25,$mod26):
					(($mod25=$mod25%$mod26)<0&&$mod26>0?$mod25+$mod26:$mod25)));
			}
			else {
				return $m['Vector2']((($mod27=other)!=null && ($mod28=self['_x'])!=null && typeof $mod27=='string'?
					$p['sprintf']($mod27,$mod28):
					(($mod27=$mod27%$mod28)<0&&$mod28>0?$mod27+$mod28:$mod27)), (($mod29=other)!=null && ($mod30=self['_y'])!=null && typeof $mod29=='string'?
					$p['sprintf']($mod29,$mod30):
					(($mod29=$mod29%$mod30)<0&&$mod30>0?$mod29+$mod30:$mod29)));
			}
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__rmod__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('VectorElementwiseProxy', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.vector */


/* end module: pyjsdl.vector */


/*
PYJS_DEPS: ['pyjsdl.env', 'pyjsdl', 'math.sqrt', 'math', 'math.sin', 'math.cos', 'math.atan2', 'math.pi', 'math.floor']
*/
