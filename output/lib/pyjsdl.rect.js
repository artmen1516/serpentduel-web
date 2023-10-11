/* start module: pyjsdl.rect */
$pyjs['loaded_modules']['pyjsdl.rect'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.rect']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.rect'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.rect'];
	$m['__repr__'] = function() { return '<module: pyjsdl.rect>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.rect';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['rect'] = $pyjs['loaded_modules']['pyjsdl.rect'];


	$m['__docformat__'] = 'restructuredtext';
	$m['Rect'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.rect';
		$cls_definition['__slots__'] = $p['list'](['x', 'y', 'width', 'height']);
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $bool4,$attr2,$attr8,$attr10,height,arg,$attr5,ln,$20,$22,$25,$24,$26,width,$attr9,$attr1,$eq2,$eq3,$attr3,$eq1,$eq6,$attr4,$eq4,$eq5,$bool2,$bool3,$bool1,$attr7,$8,$9,$6,$7,$4,$5,$2,$3,$1,$14,$15,$16,$17,$10,$11,$12,$13,$18,$19,$21,$len2,$len1,y,x,$23,$attr6;
			if ((($bool1=(($eq1=(($len1=args) === null?0:
				(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
					(typeof $len1['__len__'] == 'function'?$len1['__len__']():
						(typeof $len1['length'] != 'undefined'?$len1['length']:
							$p['len']($len1))))))===($eq2=1)&&$eq1===null?true:
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
				arg = (typeof ($1=args)['__array'] != 'undefined'?
					((typeof $1['__array'][$2=0]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__'](0));
			}
			else {
				arg = args;
			}
			ln = (($len2=arg) === null?0:
				(typeof $len2['__array'] != 'undefined' ? $len2['__array']['length']:
					(typeof $len2['__len__'] == 'function'?$len2['__len__']():
						(typeof $len2['length'] != 'undefined'?$len2['length']:
							$p['len']($len2)))));
			if ((($bool2=(($eq3=ln)===($eq4=4)&&$eq3===null?true:
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
				x = (typeof ($3=arg)['__array'] != 'undefined'?
					((typeof $3['__array'][$4=0]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__'](0));
				y = (typeof ($5=arg)['__array'] != 'undefined'?
					((typeof $5['__array'][$6=1]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__'](1));
				width = (typeof ($7=arg)['__array'] != 'undefined'?
					((typeof $7['__array'][$8=2]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__'](2));
				height = (typeof ($9=arg)['__array'] != 'undefined'?
					((typeof $9['__array'][$10=3]) != 'undefined'?$9['__array'][$10]:
						$9['__getitem__']($10)):
						$9['__getitem__'](3));
			}
			else if ((($bool3=(($eq5=ln)===($eq6=2)&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5['__cmp__']=='function'?$eq5['__cmp__']($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6['__cmp__']=='function'?$eq6['__cmp__']($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				x = (typeof ($13=(typeof ($11=arg)['__array'] != 'undefined'?
					((typeof $11['__array'][$12=0]) != 'undefined'?$11['__array'][$12]:
						$11['__getitem__']($12)):
						$11['__getitem__'](0)))['__array'] != 'undefined'?
					((typeof $13['__array'][$14=0]) != 'undefined'?$13['__array'][$14]:
						$13['__getitem__']($14)):
						$13['__getitem__'](0));
				y = (typeof ($17=(typeof ($15=arg)['__array'] != 'undefined'?
					((typeof $15['__array'][$16=0]) != 'undefined'?$15['__array'][$16]:
						$15['__getitem__']($16)):
						$15['__getitem__'](0)))['__array'] != 'undefined'?
					((typeof $17['__array'][$18=1]) != 'undefined'?$17['__array'][$18]:
						$17['__getitem__']($18)):
						$17['__getitem__'](1));
				width = (typeof ($21=(typeof ($19=arg)['__array'] != 'undefined'?
					((typeof $19['__array'][$20=1]) != 'undefined'?$19['__array'][$20]:
						$19['__getitem__']($20)):
						$19['__getitem__'](1)))['__array'] != 'undefined'?
					((typeof $21['__array'][$22=0]) != 'undefined'?$21['__array'][$22]:
						$21['__getitem__']($22)):
						$21['__getitem__'](0));
				height = (typeof ($25=(typeof ($23=arg)['__array'] != 'undefined'?
					((typeof $23['__array'][$24=1]) != 'undefined'?$23['__array'][$24]:
						$23['__getitem__']($24)):
						$23['__getitem__'](1)))['__array'] != 'undefined'?
					((typeof $25['__array'][$26=1]) != 'undefined'?$25['__array'][$26]:
						$25['__getitem__']($26)):
						$25['__getitem__'](1));
			}
			else {
				if ((($bool4=$p['hasattr'](arg, 'rect')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					arg = arg['rect'];
				}
				x = arg['x'];
				y = arg['y'];
				width = arg['width'];
				height = arg['height'];
			}
			$p['object']['__setattr__'](self, 'x', $p['float_int'](x));
			$p['object']['__setattr__'](self, 'y', $p['float_int'](y));
			$p['object']['__setattr__'](self, 'width', $p['float_int'](width));
			$p['object']['__setattr__'](self, 'height', $p['float_int'](height));
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr18,$attr15,$attr14,$attr17,$attr16,$attr11,$attr13,$attr12;
			return $p['sprintf']('<rect(%s, %s, %s, %s)>', $p['tuple']([self['x'], self['y'], self['width'], self['height']]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr20,$attr21,$attr22,$attr23,$attr19,$attr25,$attr26,$attr27,$attr28,$attr24;
			return $p['sprintf']('%s(%s,%s,%s,%s)', $p['tuple']([self['__class__'], self['x'], self['y'], self['width'], self['height']]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__setattr__', function(attr, val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				attr = arguments[1];
				val = arguments[2];
			}
			var msg,$pyjs_try_err;
			try {
				$p['getattr'](self, ('_set_')+(attr))(val);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					msg = $p['sprintf']('Rect object has no attribute %s', attr);
					throw ($p['AttributeError'](msg));
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['attr'],['val']]);
		$cls_definition['__setattr__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(key) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}
			var $28,$27;
			return $p['getattr'](self, (typeof ($27=$p['tuple'](['x', 'y', 'width', 'height']))['__array'] != 'undefined'?
				((typeof $27['__array'][$28=key]) != 'undefined'?$27['__array'][$28]:
					$27['__getitem__']($28)):
					$27['__getitem__'](key)));
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(key, val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				val = arguments[2];
			}
			var $29,$30;
			$p['setattr'](self, (typeof ($29=$p['tuple'](['x', 'y', 'width', 'height']))['__array'] != 'undefined'?
				((typeof $29['__array'][$30=key]) != 'undefined'?$29['__array'][$30]:
					$29['__getitem__']($30)):
					$29['__getitem__'](key)), val);
			return null;
		}
	, 1, [null,null,['self'],['key'],['val']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr33,$attr32,$attr31,$attr30,$attr36,$attr35,$attr34,$attr29;
			return $p['iter']($p['list']([self['x'], self['y'], self['width'], self['height']]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 4;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__bool__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $and1,$attr37,$attr40,$bool5,$attr39,$attr38,$and2;
			return ((($bool5=$and1=self['width']) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
				false :
				(typeof $bool5=='object'?
					(typeof $bool5['__nonzero__']=='function'?
						$bool5['__nonzero__']() :
						(typeof $bool5['__len__']=='function'?
							($bool5['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?self['height']:$and1);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__bool__'] = $method;
		$method = $pyjs__bind_method2('__nonzero__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $and3,$and4,$attr44,$bool6,$attr43,$attr41,$attr42;
			return ((($bool6=$and3=self['width']) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
				false :
				(typeof $bool6=='object'?
					(typeof $bool6['__nonzero__']=='function'?
						$bool6['__nonzero__']() :
						(typeof $bool6['__len__']=='function'?
							($bool6['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?self['height']:$and3);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__nonzero__'] = $method;
		$method = $pyjs__bind_method2('__eq__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr46,$attr47,$attr45,$eq10,$eq11,$eq12,$eq13,$eq14,$attr48,$attr49,$bool9,$attr60,$and8,$eq8,$eq9,$eq7,$and6,$and5,$bool7,$bool8,$and7,$attr59,$attr58,$attr51,$attr50,$attr53,$attr52,$attr55,$attr54,$attr57,$attr56;
			return ((($bool7=$and5=(($eq7=self['x'])===($eq8=other['x'])&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7['__cmp__']=='function'?$eq7['__cmp__']($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8['__cmp__']=='function'?$eq8['__cmp__']($eq7) === 0:
							$eq7==$eq8)))))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
				false :
				(typeof $bool7=='object'?
					(typeof $bool7['__nonzero__']=='function'?
						$bool7['__nonzero__']() :
						(typeof $bool7['__len__']=='function'?
							($bool7['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool8=$and6=(($eq9=self['y'])===($eq10=other['y'])&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9['__cmp__']=='function'?$eq9['__cmp__']($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10['__cmp__']=='function'?$eq10['__cmp__']($eq9) === 0:
							$eq9==$eq10)))))) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
				false :
				(typeof $bool8=='object'?
					(typeof $bool8['__nonzero__']=='function'?
						$bool8['__nonzero__']() :
						(typeof $bool8['__len__']=='function'?
							($bool8['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool9=$and7=(($eq11=self['width'])===($eq12=other['width'])&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11['__cmp__']=='function'?$eq11['__cmp__']($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12['__cmp__']=='function'?$eq12['__cmp__']($eq11) === 0:
							$eq11==$eq12)))))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
				false :
				(typeof $bool9=='object'?
					(typeof $bool9['__nonzero__']=='function'?
						$bool9['__nonzero__']() :
						(typeof $bool9['__len__']=='function'?
							($bool9['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?(($eq13=self['height'])===($eq14=other['height'])&&$eq13===null?true:
				($eq13===null?false:($eq14===null?false:
					((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13['__cmp__']=='function'?$eq13['__cmp__']($eq14) === 0:
						((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14['__cmp__']=='function'?$eq14['__cmp__']($eq13) === 0:
							$eq13==$eq14))))):$and7):$and6):$and5);
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
			var $bool10,$bool11,$bool12,$eq18,$eq19,$eq15,$eq16,$eq17,$attr68,$attr69,$attr64,$attr65,$attr67,$attr61,$attr62,$attr63,$or4,$or1,$or3,$or2,$eq21,$eq20,$eq22,$attr76,$attr75,$attr74,$attr73,$attr72,$attr71,$attr70,$attr66;
			return ((($bool10=$or1=!(($eq15=self['x'])===($eq16=other['x'])&&$eq15===null?true:
				($eq15===null?false:($eq16===null?false:
					((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15['__cmp__']=='function'?$eq15['__cmp__']($eq16) === 0:
						((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16['__cmp__']=='function'?$eq16['__cmp__']($eq15) === 0:
							$eq15==$eq16)))))) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
				false :
				(typeof $bool10=='object'?
					(typeof $bool10['__nonzero__']=='function'?
						$bool10['__nonzero__']() :
						(typeof $bool10['__len__']=='function'?
							($bool10['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:((($bool11=$or2=!(($eq17=self['y'])===($eq18=other['y'])&&$eq17===null?true:
				($eq17===null?false:($eq18===null?false:
					((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17['__cmp__']=='function'?$eq17['__cmp__']($eq18) === 0:
						((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18['__cmp__']=='function'?$eq18['__cmp__']($eq17) === 0:
							$eq17==$eq18)))))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
				false :
				(typeof $bool11=='object'?
					(typeof $bool11['__nonzero__']=='function'?
						$bool11['__nonzero__']() :
						(typeof $bool11['__len__']=='function'?
							($bool11['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or2:((($bool12=$or3=!(($eq19=self['width'])===($eq20=other['width'])&&$eq19===null?true:
				($eq19===null?false:($eq20===null?false:
					((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19['__cmp__']=='function'?$eq19['__cmp__']($eq20) === 0:
						((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20['__cmp__']=='function'?$eq20['__cmp__']($eq19) === 0:
							$eq19==$eq20)))))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
				false :
				(typeof $bool12=='object'?
					(typeof $bool12['__nonzero__']=='function'?
						$bool12['__nonzero__']() :
						(typeof $bool12['__len__']=='function'?
							($bool12['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or3:!(($eq21=self['height'])===($eq22=other['height'])&&$eq21===null?true:
				($eq21===null?false:($eq22===null?false:
					((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21['__cmp__']=='function'?$eq21['__cmp__']($eq22) === 0:
						((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22['__cmp__']=='function'?$eq22['__cmp__']($eq21) === 0:
							$eq21==$eq22))))))));
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__ne__'] = $method;
		$method = $pyjs__bind_method2('setLocation', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}

			$p['object']['__setattr__'](self, 'x', $p['float_int'](x));
			$p['object']['__setattr__'](self, 'y', $p['float_int'](y));
			return null;
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['setLocation'] = $method;
		$method = $pyjs__bind_method2('setSize', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}

			$p['object']['__setattr__'](self, 'width', $p['float_int'](width));
			$p['object']['__setattr__'](self, 'height', $p['float_int'](height));
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['setSize'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr82,$attr83,$attr80,$attr81,$attr84,$attr79,$attr78,$attr77;
			return $m['Rect'](self['x'], self['y'], self['width'], self['height']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('move', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var offset = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var offset = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $attr89,$attr86,$attr87,$attr85,$bool13,$32,$attr91,$31,$attr90,$eq23,$len3,y,x,$attr92,$attr88,$eq24;
			if ((($bool13=(($eq23=(($len3=offset) === null?0:
				(typeof $len3['__array'] != 'undefined' ? $len3['__array']['length']:
					(typeof $len3['__len__'] == 'function'?$len3['__len__']():
						(typeof $len3['length'] != 'undefined'?$len3['length']:
							$p['len']($len3))))))===($eq24=2)&&$eq23===null?true:
				($eq23===null?false:($eq24===null?false:
					((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23['__cmp__']=='function'?$eq23['__cmp__']($eq24) === 0:
						((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24['__cmp__']=='function'?$eq24['__cmp__']($eq23) === 0:
							$eq23==$eq24)))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				var $tupleassign1 = $p['__ass_unpack'](offset, 2, null);
				x = $tupleassign1[0];
				y = $tupleassign1[1];
			}
			else {
				var $tupleassign2 = $p['__ass_unpack']((typeof ($31=offset)['__array'] != 'undefined'?
					((typeof $31['__array'][$32=0]) != 'undefined'?$31['__array'][$32]:
						$31['__getitem__']($32)):
						$31['__getitem__'](0)), 2, null);
				x = $tupleassign2[0];
				y = $tupleassign2[1];
			}
			return $m['Rect']((self['x'])+(x), (self['y'])+(y), self['width'], self['height']);
		}
	, 1, ['offset',null,['self']]);
		$cls_definition['move'] = $method;
		$method = $pyjs__bind_method2('move_ip', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var offset = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var offset = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $attr95,$attr94,$attr96,$attr93,$bool14,$33,$len4,$eq25,$eq26,y,x,$34;
			if ((($bool14=(($eq25=(($len4=offset) === null?0:
				(typeof $len4['__array'] != 'undefined' ? $len4['__array']['length']:
					(typeof $len4['__len__'] == 'function'?$len4['__len__']():
						(typeof $len4['length'] != 'undefined'?$len4['length']:
							$p['len']($len4))))))===($eq26=2)&&$eq25===null?true:
				($eq25===null?false:($eq26===null?false:
					((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25['__cmp__']=='function'?$eq25['__cmp__']($eq26) === 0:
						((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26['__cmp__']=='function'?$eq26['__cmp__']($eq25) === 0:
							$eq25==$eq26)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				var $tupleassign3 = $p['__ass_unpack'](offset, 2, null);
				x = $tupleassign3[0];
				y = $tupleassign3[1];
			}
			else {
				var $tupleassign4 = $p['__ass_unpack']((typeof ($33=offset)['__array'] != 'undefined'?
					((typeof $33['__array'][$34=0]) != 'undefined'?$33['__array'][$34]:
						$33['__getitem__']($34)):
						$33['__getitem__'](0)), 2, null);
				x = $tupleassign4[0];
				y = $tupleassign4[1];
			}
			self['setLocation']((self['x'])+(x), (self['y'])+(y));
			return null;
		}
	, 1, ['offset',null,['self']]);
		$cls_definition['move_ip'] = $method;
		$method = $pyjs__bind_method2('inflate', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var offset = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var offset = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var x,$attr97,$attr100,$36,$attr101,$35,$attr99,$bool15,$attr98,$attr104,$len5,$attr102,$attr103,$eq27,y,$eq28;
			if ((($bool15=(($eq27=(($len5=offset) === null?0:
				(typeof $len5['__array'] != 'undefined' ? $len5['__array']['length']:
					(typeof $len5['__len__'] == 'function'?$len5['__len__']():
						(typeof $len5['length'] != 'undefined'?$len5['length']:
							$p['len']($len5))))))===($eq28=2)&&$eq27===null?true:
				($eq27===null?false:($eq28===null?false:
					((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27['__cmp__']=='function'?$eq27['__cmp__']($eq28) === 0:
						((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28['__cmp__']=='function'?$eq28['__cmp__']($eq27) === 0:
							$eq27==$eq28)))))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				var $tupleassign5 = $p['__ass_unpack'](offset, 2, null);
				x = $tupleassign5[0];
				y = $tupleassign5[1];
			}
			else {
				var $tupleassign6 = $p['__ass_unpack']((typeof ($35=offset)['__array'] != 'undefined'?
					((typeof $35['__array'][$36=0]) != 'undefined'?$35['__array'][$36]:
						$35['__getitem__']($36)):
						$35['__getitem__'](0)), 2, null);
				x = $tupleassign6[0];
				y = $tupleassign6[1];
			}
			return $m['Rect']((self['x'])-(Math['floor'](x/2)), (self['y'])-(Math['floor'](y/2)), (self['width'])+(x), (self['height'])+(y));
		}
	, 1, ['offset',null,['self']]);
		$cls_definition['inflate'] = $method;
		$method = $pyjs__bind_method2('inflate_ip', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var offset = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var offset = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $attr106,$attr112,$38,$attr107,$attr111,$37,$attr110,$bool16,$len6,y,$eq30,$attr105,$eq29,x,$attr108,$attr109;
			if ((($bool16=(($eq29=(($len6=offset) === null?0:
				(typeof $len6['__array'] != 'undefined' ? $len6['__array']['length']:
					(typeof $len6['__len__'] == 'function'?$len6['__len__']():
						(typeof $len6['length'] != 'undefined'?$len6['length']:
							$p['len']($len6))))))===($eq30=2)&&$eq29===null?true:
				($eq29===null?false:($eq30===null?false:
					((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29['__cmp__']=='function'?$eq29['__cmp__']($eq30) === 0:
						((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30['__cmp__']=='function'?$eq30['__cmp__']($eq29) === 0:
							$eq29==$eq30)))))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				var $tupleassign7 = $p['__ass_unpack'](offset, 2, null);
				x = $tupleassign7[0];
				y = $tupleassign7[1];
			}
			else {
				var $tupleassign8 = $p['__ass_unpack']((typeof ($37=offset)['__array'] != 'undefined'?
					((typeof $37['__array'][$38=0]) != 'undefined'?$37['__array'][$38]:
						$37['__getitem__']($38)):
						$37['__getitem__'](0)), 2, null);
				x = $tupleassign8[0];
				y = $tupleassign8[1];
			}
			self['setSize']((self['width'])+(x), (self['height'])+(y));
			self['setLocation']((self['x'])-(Math['floor'](x/2)), (self['y'])-(Math['floor'](y/2)));
			return null;
		}
	, 1, ['offset',null,['self']]);
		$cls_definition['inflate_ip'] = $method;
		$method = $pyjs__bind_method2('clip', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}
			var $bool18,$bool19,$bool17,$bool21,$attr142,$attr143,$attr140,$attr141,$attr144,$cmp8,s,$attr120,$attr121,$attr122,$attr123,$attr124,$attr125,$attr126,$attr127,$attr128,$attr129,$bool20,$cmp5,w,$cmp4,$bool22,r,$attr119,$attr118,$cmp7,$cmp6,$cmp1,$cmp3,$cmp2,h,$attr113,$attr115,$attr114,$attr117,$attr116,$attr133,$attr132,$attr131,$attr130,$attr137,$attr136,$attr135,$attr134,y,x,$attr139,$attr138;
			if ((($bool18=!(($bool17=self['intersects'](rect)) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
				false :
				(typeof $bool17=='object'?
					(typeof $bool17['__nonzero__']=='function'?
						$bool17['__nonzero__']() :
						(typeof $bool17['__len__']=='function'?
							($bool17['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
				return $m['Rect'](0, 0, 0, 0);
			}
			else {
				x = ((($bool19=((($cmp1=self['x'])===($cmp2=rect['x'])?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
					false :
					(typeof $bool19=='object'?
						(typeof $bool19['__nonzero__']=='function'?
							$bool19['__nonzero__']() :
							(typeof $bool19['__len__']=='function'?
								($bool19['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? (self['x']) : (rect['x']));
				y = ((($bool20=((($cmp3=self['y'])===($cmp4=rect['y'])?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
					false :
					(typeof $bool20=='object'?
						(typeof $bool20['__nonzero__']=='function'?
							$bool20['__nonzero__']() :
							(typeof $bool20['__len__']=='function'?
								($bool20['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? (self['y']) : (rect['y']));
				s = (self['x'])+(self['width']);
				r = (rect['x'])+(rect['width']);
				w = (((($bool21=((($cmp5=s)===($cmp6=r)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
					false :
					(typeof $bool21=='object'?
						(typeof $bool21['__nonzero__']=='function'?
							$bool21['__nonzero__']() :
							(typeof $bool21['__len__']=='function'?
								($bool21['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? (s) : (r)))-(x);
				s = (self['y'])+(self['height']);
				r = (rect['y'])+(rect['height']);
				h = (((($bool22=((($cmp7=s)===($cmp8=r)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) == -1)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
					false :
					(typeof $bool22=='object'?
						(typeof $bool22['__nonzero__']=='function'?
							$bool22['__nonzero__']() :
							(typeof $bool22['__len__']=='function'?
								($bool22['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )? (s) : (r)))-(y);
				return $m['Rect'](x, y, w, h);
			}
			return null;
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['clip'] = $method;
		$method = $pyjs__bind_method2('intersection', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}

			return self['clip'](rect);
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['intersection'] = $method;
		$method = $pyjs__bind_method2('contains', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}
			var $attr167,$cmp15,$cmp9,$attr146,$attr147,$attr145,$attr164,$attr165,$attr149,$attr160,$attr161,$attr162,$attr163,$bool25,$bool24,$bool23,$and9,$attr166,$and12,$cmp14,$and10,$and11,$cmp11,$cmp10,$cmp13,$cmp12,$attr168,$attr155,$attr154,$attr157,$attr156,$attr151,$attr150,$attr153,$attr152,$attr159,$attr158,$cmp16,$attr148;
			return ((($bool23=$and9=((($cmp9=self['x'])===($cmp10=rect['x'])?0:
				(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
					($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
					$p['cmp']($cmp9, $cmp10))) < 1)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
				false :
				(typeof $bool23=='object'?
					(typeof $bool23['__nonzero__']=='function'?
						$bool23['__nonzero__']() :
						(typeof $bool23['__len__']=='function'?
							($bool23['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool24=$and10=((((($cmp11=(self['x'])+(self['width']))===($cmp12=(rect['x'])+(rect['width']))?0:
				(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
					($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
					$p['cmp']($cmp11, $cmp12))))|1) == 1)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
				false :
				(typeof $bool24=='object'?
					(typeof $bool24['__nonzero__']=='function'?
						$bool24['__nonzero__']() :
						(typeof $bool24['__len__']=='function'?
							($bool24['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool25=$and11=((($cmp13=self['y'])===($cmp14=rect['y'])?0:
				(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
					($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
					$p['cmp']($cmp13, $cmp14))) < 1)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
				false :
				(typeof $bool25=='object'?
					(typeof $bool25['__nonzero__']=='function'?
						$bool25['__nonzero__']() :
						(typeof $bool25['__len__']=='function'?
							($bool25['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((((($cmp15=(self['y'])+(self['height']))===($cmp16=(rect['y'])+(rect['height']))?0:
				(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
					($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
					$p['cmp']($cmp15, $cmp16))))|1) == 1):$and11):$and10):$and9);
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['contains'] = $method;
		$method = $pyjs__bind_method2('intersects', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}
			var $attr191,$attr190,$attr192,$cmp20,$cmp21,$cmp22,$cmp23,$cmp24,$attr169,$bool27,$bool26,$bool28,$attr188,$attr189,$attr186,$attr187,$attr184,$attr185,$attr182,$attr183,$attr180,$attr181,$and13,$cmp17,$and16,$and14,$and15,$cmp19,$cmp18,$attr179,$attr178,$attr177,$attr176,$attr175,$attr174,$attr173,$attr172,$attr171,$attr170;
			return ((($bool26=$and13=((($cmp17=self['x'])===($cmp18=(rect['x'])+(rect['width']))?0:
				(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
					($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
					$p['cmp']($cmp17, $cmp18))) == -1)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
				false :
				(typeof $bool26=='object'?
					(typeof $bool26['__nonzero__']=='function'?
						$bool26['__nonzero__']() :
						(typeof $bool26['__len__']=='function'?
							($bool26['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool27=$and14=((($cmp19=rect['x'])===($cmp20=(self['x'])+(self['width']))?0:
				(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
					($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
					$p['cmp']($cmp19, $cmp20))) == -1)) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
				false :
				(typeof $bool27=='object'?
					(typeof $bool27['__nonzero__']=='function'?
						$bool27['__nonzero__']() :
						(typeof $bool27['__len__']=='function'?
							($bool27['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($bool28=$and15=((($cmp21=self['y'])===($cmp22=(rect['y'])+(rect['height']))?0:
				(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
					($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
					$p['cmp']($cmp21, $cmp22))) == -1)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
				false :
				(typeof $bool28=='object'?
					(typeof $bool28['__nonzero__']=='function'?
						$bool28['__nonzero__']() :
						(typeof $bool28['__len__']=='function'?
							($bool28['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?((($cmp23=rect['y'])===($cmp24=(self['y'])+(self['height']))?0:
				(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
					($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
					$p['cmp']($cmp23, $cmp24))) == -1):$and15):$and14):$and13);
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['intersects'] = $method;
		$method = $pyjs__bind_method2('union', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}
			var $attr193,$attr195,$attr194,$attr197,$attr196,$attr199,$attr198,$attr218,$cmp25,$cmp26,$cmp27,$cmp28,$cmp29,$cmp31,$attr219,s,$bool31,$attr209,$attr208,$attr205,$attr204,$attr207,$attr206,$attr201,$attr200,$attr203,$attr202,$attr224,$attr223,$attr222,$attr221,$attr220,$attr212,$attr213,$cmp32,$cmp30,$bool29,$bool32,$bool30,r,w,h,y,x,$attr210,$attr211,$attr216,$attr217,$attr214,$attr215;
			x = ((($bool29=((($cmp25=self['x'])===($cmp26=rect['x'])?0:
				(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
					($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
					$p['cmp']($cmp25, $cmp26))) == -1)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
				false :
				(typeof $bool29=='object'?
					(typeof $bool29['__nonzero__']=='function'?
						$bool29['__nonzero__']() :
						(typeof $bool29['__len__']=='function'?
							($bool29['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? (self['x']) : (rect['x']));
			y = ((($bool30=((($cmp27=self['y'])===($cmp28=rect['y'])?0:
				(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
					($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
					$p['cmp']($cmp27, $cmp28))) == -1)) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
				false :
				(typeof $bool30=='object'?
					(typeof $bool30['__nonzero__']=='function'?
						$bool30['__nonzero__']() :
						(typeof $bool30['__len__']=='function'?
							($bool30['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? (self['y']) : (rect['y']));
			s = (self['x'])+(self['width']);
			r = (rect['x'])+(rect['width']);
			w = (((($bool31=((($cmp29=s)===($cmp30=r)?0:
				(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
					($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
					$p['cmp']($cmp29, $cmp30))) == 1)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
				false :
				(typeof $bool31=='object'?
					(typeof $bool31['__nonzero__']=='function'?
						$bool31['__nonzero__']() :
						(typeof $bool31['__len__']=='function'?
							($bool31['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? (s) : (r)))-(x);
			s = (self['y'])+(self['height']);
			r = (rect['y'])+(rect['height']);
			h = (((($bool32=((($cmp31=s)===($cmp32=r)?0:
				(typeof $cmp31==typeof $cmp32 && ((typeof $cmp31 == 'number')||(typeof $cmp31 == 'string')||(typeof $cmp31 == 'boolean'))?
					($cmp31 == $cmp32 ? 0 : ($cmp31 < $cmp32 ? -1 : 1)):
					$p['cmp']($cmp31, $cmp32))) == 1)) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
				false :
				(typeof $bool32=='object'?
					(typeof $bool32['__nonzero__']=='function'?
						$bool32['__nonzero__']() :
						(typeof $bool32['__len__']=='function'?
							($bool32['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? (s) : (r)))-(y);
			return $m['Rect'](x, y, w, h);
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['union'] = $method;
		$method = $pyjs__bind_method2('union_ip', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}
			var $attr234,$attr235,$attr236,$attr237,$attr230,$attr231,$attr232,$attr233,$attr256,$attr254,$attr255,$attr238,$attr239,$attr250,$attr251,w,$cmp40,$attr240,$cmp39,$attr241,$bool36,$attr243,$attr227,$attr226,$attr225,$attr242,$attr245,$attr244,$attr247,$attr246,$attr249,$attr248,$attr229,$attr228,$attr252,$cmp38,$cmp37,$cmp36,$cmp35,$cmp34,$cmp33,h,$bool33,s,r,$attr253,$bool34,$bool35,y,x;
			x = ((($bool33=((($cmp33=self['x'])===($cmp34=rect['x'])?0:
				(typeof $cmp33==typeof $cmp34 && ((typeof $cmp33 == 'number')||(typeof $cmp33 == 'string')||(typeof $cmp33 == 'boolean'))?
					($cmp33 == $cmp34 ? 0 : ($cmp33 < $cmp34 ? -1 : 1)):
					$p['cmp']($cmp33, $cmp34))) == -1)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
				false :
				(typeof $bool33=='object'?
					(typeof $bool33['__nonzero__']=='function'?
						$bool33['__nonzero__']() :
						(typeof $bool33['__len__']=='function'?
							($bool33['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? (self['x']) : (rect['x']));
			y = ((($bool34=((($cmp35=self['y'])===($cmp36=rect['y'])?0:
				(typeof $cmp35==typeof $cmp36 && ((typeof $cmp35 == 'number')||(typeof $cmp35 == 'string')||(typeof $cmp35 == 'boolean'))?
					($cmp35 == $cmp36 ? 0 : ($cmp35 < $cmp36 ? -1 : 1)):
					$p['cmp']($cmp35, $cmp36))) == -1)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
				false :
				(typeof $bool34=='object'?
					(typeof $bool34['__nonzero__']=='function'?
						$bool34['__nonzero__']() :
						(typeof $bool34['__len__']=='function'?
							($bool34['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? (self['y']) : (rect['y']));
			s = (self['x'])+(self['width']);
			r = (rect['x'])+(rect['width']);
			w = (((($bool35=((($cmp37=s)===($cmp38=r)?0:
				(typeof $cmp37==typeof $cmp38 && ((typeof $cmp37 == 'number')||(typeof $cmp37 == 'string')||(typeof $cmp37 == 'boolean'))?
					($cmp37 == $cmp38 ? 0 : ($cmp37 < $cmp38 ? -1 : 1)):
					$p['cmp']($cmp37, $cmp38))) == 1)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
				false :
				(typeof $bool35=='object'?
					(typeof $bool35['__nonzero__']=='function'?
						$bool35['__nonzero__']() :
						(typeof $bool35['__len__']=='function'?
							($bool35['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? (s) : (r)))-(x);
			s = (self['y'])+(self['height']);
			r = (rect['y'])+(rect['height']);
			h = (((($bool36=((($cmp39=s)===($cmp40=r)?0:
				(typeof $cmp39==typeof $cmp40 && ((typeof $cmp39 == 'number')||(typeof $cmp39 == 'string')||(typeof $cmp39 == 'boolean'))?
					($cmp39 == $cmp40 ? 0 : ($cmp39 < $cmp40 ? -1 : 1)):
					$p['cmp']($cmp39, $cmp40))) == 1)) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
				false :
				(typeof $bool36=='object'?
					(typeof $bool36['__nonzero__']=='function'?
						$bool36['__nonzero__']() :
						(typeof $bool36['__len__']=='function'?
							($bool36['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )? (s) : (r)))-(y);
			self['x'] = x;
			self['y'] = y;
			self['width'] = w;
			self['height'] = h;
			return null;
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['union_ip'] = $method;
		$method = $pyjs__bind_method2('unionall', function(rect_list) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect_list = arguments[1];
			}
			var $attr278,$attr279,$attr277,$attr258,$attr259,$attr270,$attr257,$attr272,$attr273,$attr274,$attr275,$attr276,$iter1_iter,$cmp42,$cmp48,y1,$cmp43,y2,$cmp46,$cmp47,$cmp44,$cmp45,$attr284,$cmp41,$attr281,$attr280,$attr283,$attr282,$iter1_array,$attr271,rx2,$bool37,$attr269,$attr268,$iter1_nextval,$bool40,$attr263,$attr262,$attr261,$attr260,$attr267,$attr266,$attr265,$attr264,x2,x1,$iter1_type,r,$iter1_idx,$bool38,$bool39,ry2;
			x1 = self['x'];
			y1 = self['y'];
			x2 = (self['x'])+(self['width']);
			y2 = (self['y'])+(self['height']);
			$iter1_iter = rect_list;
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				r = $iter1_nextval;
				if ((($bool37=((($cmp41=r['x'])===($cmp42=x1)?0:
					(typeof $cmp41==typeof $cmp42 && ((typeof $cmp41 == 'number')||(typeof $cmp41 == 'string')||(typeof $cmp41 == 'boolean'))?
						($cmp41 == $cmp42 ? 0 : ($cmp41 < $cmp42 ? -1 : 1)):
						$p['cmp']($cmp41, $cmp42))) == -1)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
					x1 = r['x'];
				}
				if ((($bool38=((($cmp43=r['y'])===($cmp44=y1)?0:
					(typeof $cmp43==typeof $cmp44 && ((typeof $cmp43 == 'number')||(typeof $cmp43 == 'string')||(typeof $cmp43 == 'boolean'))?
						($cmp43 == $cmp44 ? 0 : ($cmp43 < $cmp44 ? -1 : 1)):
						$p['cmp']($cmp43, $cmp44))) == -1)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
					y1 = r['y'];
				}
				rx2 = (r['x'])+(r['width']);
				if ((($bool39=((($cmp45=rx2)===($cmp46=x2)?0:
					(typeof $cmp45==typeof $cmp46 && ((typeof $cmp45 == 'number')||(typeof $cmp45 == 'string')||(typeof $cmp45 == 'boolean'))?
						($cmp45 == $cmp46 ? 0 : ($cmp45 < $cmp46 ? -1 : 1)):
						$p['cmp']($cmp45, $cmp46))) == 1)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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
					x2 = rx2;
				}
				ry2 = (r['y'])+(r['height']);
				if ((($bool40=((($cmp47=ry2)===($cmp48=y2)?0:
					(typeof $cmp47==typeof $cmp48 && ((typeof $cmp47 == 'number')||(typeof $cmp47 == 'string')||(typeof $cmp47 == 'boolean'))?
						($cmp47 == $cmp48 ? 0 : ($cmp47 < $cmp48 ? -1 : 1)):
						$p['cmp']($cmp47, $cmp48))) == 1)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
					y2 = ry2;
				}
			}
			return $m['Rect'](x1, y1, (x2)-(x1), (y2)-(y1));
		}
	, 1, [null,null,['self'],['rect_list']]);
		$cls_definition['unionall'] = $method;
		$method = $pyjs__bind_method2('unionall_ip', function(rect_list) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect_list = arguments[1];
			}
			var $attr312,$attr311,$attr310,$cmp52,$cmp51,$cmp49,y1,$attr300,y2,$bool42,$attr285,$attr287,$attr286,$attr302,$iter2_iter,$attr289,$attr288,$bool44,rx2,$attr304,$attr305,$attr306,$attr307,$iter2_type,$attr301,$bool41,$attr303,$bool43,$attr308,$attr309,$iter2_idx,$attr291,x2,$cmp50,$cmp53,x1,$cmp55,$cmp54,$cmp56,$attr292,$attr293,$attr290,$iter2_nextval,$attr296,$attr297,$attr294,$attr295,$attr298,$attr299,r,ry2,$iter2_array;
			x1 = self['x'];
			y1 = self['y'];
			x2 = (self['x'])+(self['width']);
			y2 = (self['y'])+(self['height']);
			$iter2_iter = rect_list;
			if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter['__iter__']();
				$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				r = $iter2_nextval;
				if ((($bool41=((($cmp49=r['x'])===($cmp50=x1)?0:
					(typeof $cmp49==typeof $cmp50 && ((typeof $cmp49 == 'number')||(typeof $cmp49 == 'string')||(typeof $cmp49 == 'boolean'))?
						($cmp49 == $cmp50 ? 0 : ($cmp49 < $cmp50 ? -1 : 1)):
						$p['cmp']($cmp49, $cmp50))) == -1)) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
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
					x1 = r['x'];
				}
				if ((($bool42=((($cmp51=r['y'])===($cmp52=y1)?0:
					(typeof $cmp51==typeof $cmp52 && ((typeof $cmp51 == 'number')||(typeof $cmp51 == 'string')||(typeof $cmp51 == 'boolean'))?
						($cmp51 == $cmp52 ? 0 : ($cmp51 < $cmp52 ? -1 : 1)):
						$p['cmp']($cmp51, $cmp52))) == -1)) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
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
					y1 = r['y'];
				}
				rx2 = (r['x'])+(r['width']);
				if ((($bool43=((($cmp53=rx2)===($cmp54=x2)?0:
					(typeof $cmp53==typeof $cmp54 && ((typeof $cmp53 == 'number')||(typeof $cmp53 == 'string')||(typeof $cmp53 == 'boolean'))?
						($cmp53 == $cmp54 ? 0 : ($cmp53 < $cmp54 ? -1 : 1)):
						$p['cmp']($cmp53, $cmp54))) == 1)) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
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
					x2 = rx2;
				}
				ry2 = (r['y'])+(r['height']);
				if ((($bool44=((($cmp55=ry2)===($cmp56=y2)?0:
					(typeof $cmp55==typeof $cmp56 && ((typeof $cmp55 == 'number')||(typeof $cmp55 == 'string')||(typeof $cmp55 == 'boolean'))?
						($cmp55 == $cmp56 ? 0 : ($cmp55 < $cmp56 ? -1 : 1)):
						$p['cmp']($cmp55, $cmp56))) == 1)) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
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
					y2 = ry2;
				}
			}
			self['x'] = x1;
			self['y'] = y1;
			self['width'] = (x2)-(x1);
			self['height'] = (y2)-(y1);
			return null;
		}
	, 1, [null,null,['self'],['rect_list']]);
		$cls_definition['unionall_ip'] = $method;
		$method = $pyjs__bind_method2('clamp', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}
			var $cmp64,$attr359,$attr358,$cmp65,$attr353,$attr352,$attr351,$attr350,$attr357,$cmp66,$attr355,$attr354,$cmp67,$cmp60,$attr368,$attr369,$attr366,$attr367,$attr364,$attr365,$attr362,$attr363,$attr360,$attr361,x,$attr371,$attr370,$attr373,$attr372,$attr375,$attr374,$attr377,$attr376,$attr379,$attr378,$bool47,$bool46,$bool45,$bool49,$bool48,$cmp59,$cmp58,$bool50,$attr317,$attr316,$attr315,$attr314,$attr313,$cmp61,$cmp62,$cmp63,$cmp68,$attr319,$attr318,$attr380,$cmp57,$attr356,$attr328,$attr329,$attr322,$attr323,$attr320,$attr321,$attr326,$attr327,$attr324,$attr325,$attr348,$attr349,$attr340,$attr341,$attr342,$attr343,$attr344,$attr345,$attr346,$attr347,$attr335,$attr339,$attr338,y,$attr334,$attr337,$attr336,$attr331,$attr330,$attr333,$attr332;
			if ((($bool45=((($cmp57=self['width'])===($cmp58=rect['width'])?0:
				(typeof $cmp57==typeof $cmp58 && ((typeof $cmp57 == 'number')||(typeof $cmp57 == 'string')||(typeof $cmp57 == 'boolean'))?
					($cmp57 == $cmp58 ? 0 : ($cmp57 < $cmp58 ? -1 : 1)):
					$p['cmp']($cmp57, $cmp58))) == -1)) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
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
				if ((($bool46=((($cmp59=self['x'])===($cmp60=rect['x'])?0:
					(typeof $cmp59==typeof $cmp60 && ((typeof $cmp59 == 'number')||(typeof $cmp59 == 'string')||(typeof $cmp59 == 'boolean'))?
						($cmp59 == $cmp60 ? 0 : ($cmp59 < $cmp60 ? -1 : 1)):
						$p['cmp']($cmp59, $cmp60))) == -1)) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
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
					x = rect['x'];
				}
				else if ((($bool47=((($cmp61=(self['x'])+(self['width']))===($cmp62=(rect['x'])+(rect['width']))?0:
					(typeof $cmp61==typeof $cmp62 && ((typeof $cmp61 == 'number')||(typeof $cmp61 == 'string')||(typeof $cmp61 == 'boolean'))?
						($cmp61 == $cmp62 ? 0 : ($cmp61 < $cmp62 ? -1 : 1)):
						$p['cmp']($cmp61, $cmp62))) == 1)) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
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
					x = ((rect['x'])+(rect['width']))-(self['width']);
				}
				else {
					x = self['x'];
				}
			}
			else {
				x = (rect['x'])-($p['float_int'](((self['width'])-(rect['width']))/(2)));
			}
			if ((($bool48=((($cmp63=self['height'])===($cmp64=rect['height'])?0:
				(typeof $cmp63==typeof $cmp64 && ((typeof $cmp63 == 'number')||(typeof $cmp63 == 'string')||(typeof $cmp63 == 'boolean'))?
					($cmp63 == $cmp64 ? 0 : ($cmp63 < $cmp64 ? -1 : 1)):
					$p['cmp']($cmp63, $cmp64))) == -1)) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
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
				if ((($bool49=((($cmp65=self['y'])===($cmp66=rect['y'])?0:
					(typeof $cmp65==typeof $cmp66 && ((typeof $cmp65 == 'number')||(typeof $cmp65 == 'string')||(typeof $cmp65 == 'boolean'))?
						($cmp65 == $cmp66 ? 0 : ($cmp65 < $cmp66 ? -1 : 1)):
						$p['cmp']($cmp65, $cmp66))) == -1)) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
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
					y = rect['y'];
				}
				else if ((($bool50=((($cmp67=(self['y'])+(self['height']))===($cmp68=(rect['y'])+(rect['height']))?0:
					(typeof $cmp67==typeof $cmp68 && ((typeof $cmp67 == 'number')||(typeof $cmp67 == 'string')||(typeof $cmp67 == 'boolean'))?
						($cmp67 == $cmp68 ? 0 : ($cmp67 < $cmp68 ? -1 : 1)):
						$p['cmp']($cmp67, $cmp68))) == 1)) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
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
					y = ((rect['y'])+(rect['height']))-(self['height']);
				}
				else {
					y = self['y'];
				}
			}
			else {
				y = (rect['y'])-($p['float_int'](((self['height'])-(rect['height']))/(2)));
			}
			return $m['Rect'](x, y, self['width'], self['height']);
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['clamp'] = $method;
		$method = $pyjs__bind_method2('clamp_ip', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}
			var $attr418,$attr419,$attr444,$attr443,$attr442,$attr441,$attr440,$attr415,x,$attr422,$bool54,$bool55,$bool56,$bool51,$bool52,$bool53,$attr410,$attr411,$attr412,$attr413,$attr414,$cmp69,$attr416,$attr417,$cmp71,$attr388,$attr389,$attr384,$attr385,$attr386,$attr387,$attr381,$attr382,$attr383,$cmp73,$cmp72,$attr409,$attr408,$cmp77,$cmp76,$cmp75,$cmp74,$attr403,$attr402,$cmp79,$cmp78,$attr407,$attr406,$attr405,$attr404,$attr430,$attr399,$attr398,$attr397,$attr396,$attr395,$attr394,$attr393,$attr392,$attr391,$attr390,$attr438,$attr439,$attr436,$attr437,$attr434,$attr435,$attr432,$attr433,$cmp80,$attr431,$cmp70,$attr401,$attr421,$attr420,$attr423,$attr400,$attr425,$attr424,$attr427,$attr426,$attr429,$attr428,y;
			if ((($bool51=((($cmp69=self['width'])===($cmp70=rect['width'])?0:
				(typeof $cmp69==typeof $cmp70 && ((typeof $cmp69 == 'number')||(typeof $cmp69 == 'string')||(typeof $cmp69 == 'boolean'))?
					($cmp69 == $cmp70 ? 0 : ($cmp69 < $cmp70 ? -1 : 1)):
					$p['cmp']($cmp69, $cmp70))) == -1)) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
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
				if ((($bool52=((($cmp71=self['x'])===($cmp72=rect['x'])?0:
					(typeof $cmp71==typeof $cmp72 && ((typeof $cmp71 == 'number')||(typeof $cmp71 == 'string')||(typeof $cmp71 == 'boolean'))?
						($cmp71 == $cmp72 ? 0 : ($cmp71 < $cmp72 ? -1 : 1)):
						$p['cmp']($cmp71, $cmp72))) == -1)) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
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
					x = rect['x'];
				}
				else if ((($bool53=((($cmp73=(self['x'])+(self['width']))===($cmp74=(rect['x'])+(rect['width']))?0:
					(typeof $cmp73==typeof $cmp74 && ((typeof $cmp73 == 'number')||(typeof $cmp73 == 'string')||(typeof $cmp73 == 'boolean'))?
						($cmp73 == $cmp74 ? 0 : ($cmp73 < $cmp74 ? -1 : 1)):
						$p['cmp']($cmp73, $cmp74))) == 1)) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
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
					x = ((rect['x'])+(rect['width']))-(self['width']);
				}
				else {
					x = self['x'];
				}
			}
			else {
				x = (rect['x'])-($p['float_int'](((self['width'])-(rect['width']))/(2)));
			}
			if ((($bool54=((($cmp75=self['height'])===($cmp76=rect['height'])?0:
				(typeof $cmp75==typeof $cmp76 && ((typeof $cmp75 == 'number')||(typeof $cmp75 == 'string')||(typeof $cmp75 == 'boolean'))?
					($cmp75 == $cmp76 ? 0 : ($cmp75 < $cmp76 ? -1 : 1)):
					$p['cmp']($cmp75, $cmp76))) == -1)) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
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
				if ((($bool55=((($cmp77=self['y'])===($cmp78=rect['y'])?0:
					(typeof $cmp77==typeof $cmp78 && ((typeof $cmp77 == 'number')||(typeof $cmp77 == 'string')||(typeof $cmp77 == 'boolean'))?
						($cmp77 == $cmp78 ? 0 : ($cmp77 < $cmp78 ? -1 : 1)):
						$p['cmp']($cmp77, $cmp78))) == -1)) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
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
					y = rect['y'];
				}
				else if ((($bool56=((($cmp79=(self['y'])+(self['height']))===($cmp80=(rect['y'])+(rect['height']))?0:
					(typeof $cmp79==typeof $cmp80 && ((typeof $cmp79 == 'number')||(typeof $cmp79 == 'string')||(typeof $cmp79 == 'boolean'))?
						($cmp79 == $cmp80 ? 0 : ($cmp79 < $cmp80 ? -1 : 1)):
						$p['cmp']($cmp79, $cmp80))) == 1)) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
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
					y = ((rect['y'])+(rect['height']))-(self['height']);
				}
				else {
					y = self['y'];
				}
			}
			else {
				y = (rect['y'])-($p['float_int'](((self['height'])-(rect['height']))/(2)));
			}
			self['setLocation'](x, y);
			return null;
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['clamp_ip'] = $method;
		$method = $pyjs__bind_method2('set', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $attr454,$bool57,$attr450,$attr451,$attr452,$attr446,$eq35,$bool58,$bool59,height,$eq32,$eq33,$eq31,$eq36,$eq34,arg,$62,$59,ln,$attr453,width,$49,$48,$43,$42,$41,$40,$47,$46,$45,$44,$attr447,$bool60,$attr445,$attr449,$attr448,$50,$51,$64,$63,$39,$61,$60,$58,$len7,$56,y,x,$52,$53,$54,$55,$len8,$57;
			if ((($bool57=(($eq31=(($len7=args) === null?0:
				(typeof $len7['__array'] != 'undefined' ? $len7['__array']['length']:
					(typeof $len7['__len__'] == 'function'?$len7['__len__']():
						(typeof $len7['length'] != 'undefined'?$len7['length']:
							$p['len']($len7))))))===($eq32=1)&&$eq31===null?true:
				($eq31===null?false:($eq32===null?false:
					((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31['__cmp__']=='function'?$eq31['__cmp__']($eq32) === 0:
						((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32['__cmp__']=='function'?$eq32['__cmp__']($eq31) === 0:
							$eq31==$eq32)))))) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
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
				arg = (typeof ($39=args)['__array'] != 'undefined'?
					((typeof $39['__array'][$40=0]) != 'undefined'?$39['__array'][$40]:
						$39['__getitem__']($40)):
						$39['__getitem__'](0));
			}
			else {
				arg = args;
			}
			ln = (($len8=arg) === null?0:
				(typeof $len8['__array'] != 'undefined' ? $len8['__array']['length']:
					(typeof $len8['__len__'] == 'function'?$len8['__len__']():
						(typeof $len8['length'] != 'undefined'?$len8['length']:
							$p['len']($len8)))));
			if ((($bool58=(($eq33=ln)===($eq34=4)&&$eq33===null?true:
				($eq33===null?false:($eq34===null?false:
					((typeof $eq33=='object'||typeof $eq33=='function')&&typeof $eq33['__cmp__']=='function'?$eq33['__cmp__']($eq34) === 0:
						((typeof $eq34=='object'||typeof $eq34=='function')&&typeof $eq34['__cmp__']=='function'?$eq34['__cmp__']($eq33) === 0:
							$eq33==$eq34)))))) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
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
				x = (typeof ($41=arg)['__array'] != 'undefined'?
					((typeof $41['__array'][$42=0]) != 'undefined'?$41['__array'][$42]:
						$41['__getitem__']($42)):
						$41['__getitem__'](0));
				y = (typeof ($43=arg)['__array'] != 'undefined'?
					((typeof $43['__array'][$44=1]) != 'undefined'?$43['__array'][$44]:
						$43['__getitem__']($44)):
						$43['__getitem__'](1));
				width = (typeof ($45=arg)['__array'] != 'undefined'?
					((typeof $45['__array'][$46=2]) != 'undefined'?$45['__array'][$46]:
						$45['__getitem__']($46)):
						$45['__getitem__'](2));
				height = (typeof ($47=arg)['__array'] != 'undefined'?
					((typeof $47['__array'][$48=3]) != 'undefined'?$47['__array'][$48]:
						$47['__getitem__']($48)):
						$47['__getitem__'](3));
			}
			else if ((($bool59=(($eq35=ln)===($eq36=2)&&$eq35===null?true:
				($eq35===null?false:($eq36===null?false:
					((typeof $eq35=='object'||typeof $eq35=='function')&&typeof $eq35['__cmp__']=='function'?$eq35['__cmp__']($eq36) === 0:
						((typeof $eq36=='object'||typeof $eq36=='function')&&typeof $eq36['__cmp__']=='function'?$eq36['__cmp__']($eq35) === 0:
							$eq35==$eq36)))))) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
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
				x = (typeof ($51=(typeof ($49=arg)['__array'] != 'undefined'?
					((typeof $49['__array'][$50=0]) != 'undefined'?$49['__array'][$50]:
						$49['__getitem__']($50)):
						$49['__getitem__'](0)))['__array'] != 'undefined'?
					((typeof $51['__array'][$52=0]) != 'undefined'?$51['__array'][$52]:
						$51['__getitem__']($52)):
						$51['__getitem__'](0));
				y = (typeof ($55=(typeof ($53=arg)['__array'] != 'undefined'?
					((typeof $53['__array'][$54=0]) != 'undefined'?$53['__array'][$54]:
						$53['__getitem__']($54)):
						$53['__getitem__'](0)))['__array'] != 'undefined'?
					((typeof $55['__array'][$56=1]) != 'undefined'?$55['__array'][$56]:
						$55['__getitem__']($56)):
						$55['__getitem__'](1));
				width = (typeof ($59=(typeof ($57=arg)['__array'] != 'undefined'?
					((typeof $57['__array'][$58=1]) != 'undefined'?$57['__array'][$58]:
						$57['__getitem__']($58)):
						$57['__getitem__'](1)))['__array'] != 'undefined'?
					((typeof $59['__array'][$60=0]) != 'undefined'?$59['__array'][$60]:
						$59['__getitem__']($60)):
						$59['__getitem__'](0));
				height = (typeof ($63=(typeof ($61=arg)['__array'] != 'undefined'?
					((typeof $61['__array'][$62=1]) != 'undefined'?$61['__array'][$62]:
						$61['__getitem__']($62)):
						$61['__getitem__'](1)))['__array'] != 'undefined'?
					((typeof $63['__array'][$64=1]) != 'undefined'?$63['__array'][$64]:
						$63['__getitem__']($64)):
						$63['__getitem__'](1));
			}
			else {
				if ((($bool60=$p['hasattr'](arg, 'rect')) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
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
					arg = arg['rect'];
				}
				x = arg['x'];
				y = arg['y'];
				width = arg['width'];
				height = arg['height'];
			}
			$p['object']['__setattr__'](self, 'x', $p['float_int'](x));
			$p['object']['__setattr__'](self, 'y', $p['float_int'](y));
			$p['object']['__setattr__'](self, 'width', $p['float_int'](width));
			$p['object']['__setattr__'](self, 'height', $p['float_int'](height));
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['set'] = $method;
		$method = $pyjs__bind_method2('collidepoint', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var point = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var point = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $attr455,$attr456,$attr457,$cmp88,$cmp86,$cmp87,$cmp84,$cmp85,$attr458,$attr459,$cmp81,$attr472,$eq37,$eq38,$and20,$and19,$cmp89,$attr475,$69,$68,$cmp94,$65,$attr464,$67,$66,$attr461,$attr460,$attr463,$attr462,$bool61,$bool63,$bool62,$cmp95,$cmp82,$cmp96,$cmp91,$cmp90,$cmp93,$cmp83,$attr465,$71,$and17,$and18,$cmp92,$attr467,$72,$73,$70,$attr466,$76,$74,$75,$attr478,$attr469,$attr468,$attr473,$attr470,$attr471,$attr476,$attr477,$attr474,$len9;
			if ((($bool61=(($eq37=(($len9=point) === null?0:
				(typeof $len9['__array'] != 'undefined' ? $len9['__array']['length']:
					(typeof $len9['__len__'] == 'function'?$len9['__len__']():
						(typeof $len9['length'] != 'undefined'?$len9['length']:
							$p['len']($len9))))))===($eq38=2)&&$eq37===null?true:
				($eq37===null?false:($eq38===null?false:
					((typeof $eq37=='object'||typeof $eq37=='function')&&typeof $eq37['__cmp__']=='function'?$eq37['__cmp__']($eq38) === 0:
						((typeof $eq38=='object'||typeof $eq38=='function')&&typeof $eq38['__cmp__']=='function'?$eq38['__cmp__']($eq37) === 0:
							$eq37==$eq38)))))) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
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
				return ((($bool62=$and17=(((($cmp81=self['x'])===($cmp82=($compare1 = (typeof ($65=point)['__array'] != 'undefined'?
					((typeof $65['__array'][$66=0]) != 'undefined'?$65['__array'][$66]:
						$65['__getitem__']($66)):
						$65['__getitem__'](0))))?0:
					(typeof $cmp81==typeof $cmp82 && ((typeof $cmp81 == 'number')||(typeof $cmp81 == 'string')||(typeof $cmp81 == 'boolean'))?
						($cmp81 == $cmp82 ? 0 : ($cmp81 < $cmp82 ? -1 : 1)):
						$p['cmp']($cmp81, $cmp82))) < 1)&&((($cmp83=$compare1)===($cmp84=($compare2 = (self['x'])+(self['width'])))?0:
					(typeof $cmp83==typeof $cmp84 && ((typeof $cmp83 == 'number')||(typeof $cmp83 == 'string')||(typeof $cmp83 == 'boolean'))?
						($cmp83 == $cmp84 ? 0 : ($cmp83 < $cmp84 ? -1 : 1)):
						$p['cmp']($cmp83, $cmp84))) == -1))) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
					false :
					(typeof $bool62=='object'?
						(typeof $bool62['__nonzero__']=='function'?
							$bool62['__nonzero__']() :
							(typeof $bool62['__len__']=='function'?
								($bool62['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(((($cmp85=self['y'])===($cmp86=($compare3 = (typeof ($67=point)['__array'] != 'undefined'?
					((typeof $67['__array'][$68=1]) != 'undefined'?$67['__array'][$68]:
						$67['__getitem__']($68)):
						$67['__getitem__'](1))))?0:
					(typeof $cmp85==typeof $cmp86 && ((typeof $cmp85 == 'number')||(typeof $cmp85 == 'string')||(typeof $cmp85 == 'boolean'))?
						($cmp85 == $cmp86 ? 0 : ($cmp85 < $cmp86 ? -1 : 1)):
						$p['cmp']($cmp85, $cmp86))) < 1)&&((($cmp87=$compare3)===($cmp88=($compare4 = (self['y'])+(self['height'])))?0:
					(typeof $cmp87==typeof $cmp88 && ((typeof $cmp87 == 'number')||(typeof $cmp87 == 'string')||(typeof $cmp87 == 'boolean'))?
						($cmp87 == $cmp88 ? 0 : ($cmp87 < $cmp88 ? -1 : 1)):
						$p['cmp']($cmp87, $cmp88))) == -1)):$and17);
			}
			else {
				return ((($bool63=$and19=(((($cmp89=self['x'])===($cmp90=($compare5 = (typeof ($71=(typeof ($69=point)['__array'] != 'undefined'?
					((typeof $69['__array'][$70=0]) != 'undefined'?$69['__array'][$70]:
						$69['__getitem__']($70)):
						$69['__getitem__'](0)))['__array'] != 'undefined'?
					((typeof $71['__array'][$72=0]) != 'undefined'?$71['__array'][$72]:
						$71['__getitem__']($72)):
						$71['__getitem__'](0))))?0:
					(typeof $cmp89==typeof $cmp90 && ((typeof $cmp89 == 'number')||(typeof $cmp89 == 'string')||(typeof $cmp89 == 'boolean'))?
						($cmp89 == $cmp90 ? 0 : ($cmp89 < $cmp90 ? -1 : 1)):
						$p['cmp']($cmp89, $cmp90))) < 1)&&((($cmp91=$compare5)===($cmp92=($compare6 = (self['x'])+(self['width'])))?0:
					(typeof $cmp91==typeof $cmp92 && ((typeof $cmp91 == 'number')||(typeof $cmp91 == 'string')||(typeof $cmp91 == 'boolean'))?
						($cmp91 == $cmp92 ? 0 : ($cmp91 < $cmp92 ? -1 : 1)):
						$p['cmp']($cmp91, $cmp92))) == -1))) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
					false :
					(typeof $bool63=='object'?
						(typeof $bool63['__nonzero__']=='function'?
							$bool63['__nonzero__']() :
							(typeof $bool63['__len__']=='function'?
								($bool63['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?(((($cmp93=self['y'])===($cmp94=($compare7 = (typeof ($75=(typeof ($73=point)['__array'] != 'undefined'?
					((typeof $73['__array'][$74=0]) != 'undefined'?$73['__array'][$74]:
						$73['__getitem__']($74)):
						$73['__getitem__'](0)))['__array'] != 'undefined'?
					((typeof $75['__array'][$76=1]) != 'undefined'?$75['__array'][$76]:
						$75['__getitem__']($76)):
						$75['__getitem__'](1))))?0:
					(typeof $cmp93==typeof $cmp94 && ((typeof $cmp93 == 'number')||(typeof $cmp93 == 'string')||(typeof $cmp93 == 'boolean'))?
						($cmp93 == $cmp94 ? 0 : ($cmp93 < $cmp94 ? -1 : 1)):
						$p['cmp']($cmp93, $cmp94))) < 1)&&((($cmp95=$compare7)===($cmp96=($compare8 = (self['y'])+(self['height'])))?0:
					(typeof $cmp95==typeof $cmp96 && ((typeof $cmp95 == 'number')||(typeof $cmp95 == 'string')||(typeof $cmp95 == 'boolean'))?
						($cmp95 == $cmp96 ? 0 : ($cmp95 < $cmp96 ? -1 : 1)):
						$p['cmp']($cmp95, $cmp96))) == -1)):$and19);
			}
			return null;
		}
	, 1, ['point',null,['self']]);
		$cls_definition['collidepoint'] = $method;
		$method = $pyjs__bind_method2('colliderect', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}

			return self['intersects'](rect);
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['colliderect'] = $method;
		$method = $pyjs__bind_method2('collidelist', function(rects) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rects = arguments[1];
			}
			var $iter3_idx,$bool64,i,$iter3_type,$iter3_iter,$iter3_array,$iter3_nextval,rect;
			$iter3_iter = $p['enumerate'](rects);
			if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter['__iter__']();
				$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				var $tupleassign9 = $p['__ass_unpack']($iter3_nextval, 2, null);
				i = $tupleassign9[0];
				rect = $tupleassign9[1];
				if ((($bool64=self['intersects'](rect)) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
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
					return i;
				}
			}
			return -(1);
		}
	, 1, [null,null,['self'],['rects']]);
		$cls_definition['collidelist'] = $method;
		$method = $pyjs__bind_method2('collidelistall', function(rects) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rects = arguments[1];
			}
			var $bool65,i,$iter4_nextval,$iter4_idx,$iter4_array,collided,$iter4_type,$iter4_iter,rect;
			collided = $p['list']([]);
			$iter4_iter = $p['enumerate'](rects);
			if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter['__iter__']();
				$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				var $tupleassign10 = $p['__ass_unpack']($iter4_nextval, 2, null);
				i = $tupleassign10[0];
				rect = $tupleassign10[1];
				if ((($bool65=self['colliderect'](rect)) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
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
					collided['append'](i);
				}
			}
			return collided;
		}
	, 1, [null,null,['self'],['rects']]);
		$cls_definition['collidelistall'] = $method;
		$method = $pyjs__bind_method2('collidedict', function(rects) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rects = arguments[1];
			}
			var $iter5_nextval,$77,$bool66,$iter5_array,$79,$80,$iter5_iter,$iter5_idx,$iter5_type,$78,rect;
			$iter5_iter = rects;
			if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter['__iter__']();
				$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				rect = $iter5_nextval;
				if ((($bool66=self['colliderect']((typeof ($77=rects)['__array'] != 'undefined'?
					((typeof $77['__array'][$78=rect]) != 'undefined'?$77['__array'][$78]:
						$77['__getitem__']($78)):
						$77['__getitem__'](rect)))) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
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
					return $p['tuple']([rect, (typeof ($79=rects)['__array'] != 'undefined'?
						((typeof $79['__array'][$80=rect]) != 'undefined'?$79['__array'][$80]:
							$79['__getitem__']($80)):
							$79['__getitem__'](rect))]);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['rects']]);
		$cls_definition['collidedict'] = $method;
		$method = $pyjs__bind_method2('collidedictall', function(rects) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rects = arguments[1];
			}
			var $bool67,$iter6_idx,$iter6_type,$84,$83,$iter6_array,$81,$82,collided,$iter6_iter,rect,$iter6_nextval;
			collided = $p['list']([]);
			$iter6_iter = rects;
			if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter['__iter__']();
				$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				rect = $iter6_nextval;
				if ((($bool67=self['colliderect']((typeof ($81=rects)['__array'] != 'undefined'?
					((typeof $81['__array'][$82=rect]) != 'undefined'?$81['__array'][$82]:
						$81['__getitem__']($82)):
						$81['__getitem__'](rect)))) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
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
					collided['append']($p['tuple']([rect, (typeof ($83=rects)['__array'] != 'undefined'?
						((typeof $83['__array'][$84=rect]) != 'undefined'?$83['__array'][$84]:
							$83['__getitem__']($84)):
							$83['__getitem__'](rect))]));
				}
			}
			return collided;
		}
	, 1, [null,null,['self'],['rects']]);
		$cls_definition['collidedictall'] = $method;
		$method = $pyjs__bind_method2('_get_center', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr483,$attr482,$attr481,$attr479,$attr486,$attr485,$attr484,$attr480;
			return $p['tuple']([(self['x'])+(Math['floor'](self['width']/2)), (self['y'])+(Math['floor'](self['height']/2))]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_center'] = $method;
		$method = $pyjs__bind_method2('_get_centerx', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr490,$attr488,$attr487,$attr489;
			return (self['x'])+(Math['floor'](self['width']/2));
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_centerx'] = $method;
		$method = $pyjs__bind_method2('_get_centery', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr491,$attr493,$attr494,$attr492;
			return (self['y'])+(Math['floor'](self['height']/2));
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_centery'] = $method;
		$method = $pyjs__bind_method2('_get_top', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr495,$attr496;
			return self['y'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_top'] = $method;
		$method = $pyjs__bind_method2('_get_left', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr498,$attr497;
			return self['x'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_left'] = $method;
		$method = $pyjs__bind_method2('_get_bottom', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr502,$attr499,$attr501,$attr500;
			return (self['y'])+(self['height']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_bottom'] = $method;
		$method = $pyjs__bind_method2('_get_right', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr503,$attr506,$attr504,$attr505;
			return (self['x'])+(self['width']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_right'] = $method;
		$method = $pyjs__bind_method2('_get_topleft', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr508,$attr509,$attr507,$attr510;
			return $p['tuple']([self['x'], self['y']]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_topleft'] = $method;
		$method = $pyjs__bind_method2('_get_bottomleft', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr515,$attr514,$attr516,$attr511,$attr513,$attr512;
			return $p['tuple']([self['x'], (self['y'])+(self['height'])]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_bottomleft'] = $method;
		$method = $pyjs__bind_method2('_get_topright', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr519,$attr518,$attr517,$attr520,$attr521,$attr522;
			return $p['tuple']([(self['x'])+(self['width']), self['y']]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_topright'] = $method;
		$method = $pyjs__bind_method2('_get_bottomright', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr530,$attr528,$attr529,$attr524,$attr525,$attr526,$attr527,$attr523;
			return $p['tuple']([(self['x'])+(self['width']), (self['y'])+(self['height'])]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_bottomright'] = $method;
		$method = $pyjs__bind_method2('_get_midtop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr536,$attr535,$attr534,$attr533,$attr532,$attr531;
			return $p['tuple']([(self['x'])+(Math['floor'](self['width']/2)), self['y']]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_midtop'] = $method;
		$method = $pyjs__bind_method2('_get_midleft', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr542,$attr540,$attr541,$attr539,$attr538,$attr537;
			return $p['tuple']([self['x'], (self['y'])+(Math['floor'](self['height']/2))]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_midleft'] = $method;
		$method = $pyjs__bind_method2('_get_midbottom', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr546,$attr547,$attr544,$attr545,$attr543,$attr548,$attr549,$attr550;
			return $p['tuple']([(self['x'])+(Math['floor'](self['width']/2)), (self['y'])+(self['height'])]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_midbottom'] = $method;
		$method = $pyjs__bind_method2('_get_midright', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr558,$attr551,$attr553,$attr552,$attr555,$attr554,$attr557,$attr556;
			return $p['tuple']([(self['x'])+(self['width']), (self['y'])+(Math['floor'](self['height']/2))]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_midright'] = $method;
		$method = $pyjs__bind_method2('_get_size', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr559,$attr560,$attr562,$attr561;
			return $p['tuple']([self['width'], self['height']]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_size'] = $method;
		$method = $pyjs__bind_method2('_get_w', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr563,$attr564;
			return self['width'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_w'] = $method;
		$method = $pyjs__bind_method2('_get_h', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr565,$attr566;
			return self['height'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_h'] = $method;
		$method = $pyjs__bind_method2('_set_x', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$p['object']['__setattr__'](self, 'x', $p['float_int'](val));
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_set_x'] = $method;
		$method = $pyjs__bind_method2('_set_y', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$p['object']['__setattr__'](self, 'y', $p['float_int'](val));
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_set_y'] = $method;
		$method = $pyjs__bind_method2('_set_width', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$p['object']['__setattr__'](self, 'width', $p['float_int'](val));
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_set_width'] = $method;
		$method = $pyjs__bind_method2('_set_height', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$p['object']['__setattr__'](self, 'height', $p['float_int'](val));
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_set_height'] = $method;
		$method = $pyjs__bind_method2('_set_center', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}
			var $attr570,$attr567,$attr568,$86,$88,$87,$attr569,$85;
			self['setLocation'](((typeof ($85=val)['__array'] != 'undefined'?
				((typeof $85['__array'][$86=0]) != 'undefined'?$85['__array'][$86]:
					$85['__getitem__']($86)):
					$85['__getitem__'](0)))-(Math['floor'](self['width']/2)), ((typeof ($87=val)['__array'] != 'undefined'?
				((typeof $87['__array'][$88=1]) != 'undefined'?$87['__array'][$88]:
					$87['__getitem__']($88)):
					$87['__getitem__'](1)))-(Math['floor'](self['height']/2)));
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_set_center'] = $method;
		$method = $pyjs__bind_method2('_set_centerx', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}
			var $attr573,$attr572,$attr571,$attr574;
			self['setLocation']((val)-(Math['floor'](self['width']/2)), self['y']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_set_centerx'] = $method;
		$method = $pyjs__bind_method2('_set_centery', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}
			var $attr577,$attr575,$attr578,$attr576;
			self['setLocation'](self['x'], (val)-(Math['floor'](self['height']/2)));
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_set_centery'] = $method;
		$method = $pyjs__bind_method2('_set_top', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}
			var $attr580,$attr579;
			self['setLocation'](self['x'], val);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_set_top'] = $method;
		$method = $pyjs__bind_method2('_set_left', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}
			var $attr582,$attr581;
			self['setLocation'](val, self['y']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_set_left'] = $method;
		$method = $pyjs__bind_method2('_set_bottom', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}
			var $attr583,$attr586,$attr584,$attr585;
			self['setLocation'](self['x'], (val)-(self['height']));
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_set_bottom'] = $method;
		$method = $pyjs__bind_method2('_set_right', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}
			var $attr588,$attr589,$attr587,$attr590;
			self['setLocation']((val)-(self['width']), self['y']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_set_right'] = $method;
		$method = $pyjs__bind_method2('_set_topleft', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}
			var $89,$90,$91,$92;
			self['setLocation']((typeof ($89=val)['__array'] != 'undefined'?
				((typeof $89['__array'][$90=0]) != 'undefined'?$89['__array'][$90]:
					$89['__getitem__']($90)):
					$89['__getitem__'](0)), (typeof ($91=val)['__array'] != 'undefined'?
				((typeof $91['__array'][$92=1]) != 'undefined'?$91['__array'][$92]:
					$91['__getitem__']($92)):
					$91['__getitem__'](1)));
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_set_topleft'] = $method;
		$method = $pyjs__bind_method2('_set_bottomleft', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}
			var $94,$95,$attr591,$93,$attr592,$96;
			self['setLocation']((typeof ($93=val)['__array'] != 'undefined'?
				((typeof $93['__array'][$94=0]) != 'undefined'?$93['__array'][$94]:
					$93['__getitem__']($94)):
					$93['__getitem__'](0)), ((typeof ($95=val)['__array'] != 'undefined'?
				((typeof $95['__array'][$96=1]) != 'undefined'?$95['__array'][$96]:
					$95['__getitem__']($96)):
					$95['__getitem__'](1)))-(self['height']));
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_set_bottomleft'] = $method;
		$method = $pyjs__bind_method2('_set_topright', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}
			var $100,$98,$99,$attr594,$97,$attr593;
			self['setLocation'](((typeof ($97=val)['__array'] != 'undefined'?
				((typeof $97['__array'][$98=0]) != 'undefined'?$97['__array'][$98]:
					$97['__getitem__']($98)):
					$97['__getitem__'](0)))-(self['width']), (typeof ($99=val)['__array'] != 'undefined'?
				((typeof $99['__array'][$100=1]) != 'undefined'?$99['__array'][$100]:
					$99['__getitem__']($100)):
					$99['__getitem__'](1)));
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_set_topright'] = $method;
		$method = $pyjs__bind_method2('_set_bottomright', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}
			var $101,$103,$102,$104,$attr595,$attr596,$attr597,$attr598;
			self['setLocation'](((typeof ($101=val)['__array'] != 'undefined'?
				((typeof $101['__array'][$102=0]) != 'undefined'?$101['__array'][$102]:
					$101['__getitem__']($102)):
					$101['__getitem__'](0)))-(self['width']), ((typeof ($103=val)['__array'] != 'undefined'?
				((typeof $103['__array'][$104=1]) != 'undefined'?$103['__array'][$104]:
					$103['__getitem__']($104)):
					$103['__getitem__'](1)))-(self['height']));
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_set_bottomright'] = $method;
		$method = $pyjs__bind_method2('_set_midtop', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}
			var $attr599,$107,$106,$108,$105,$attr600;
			self['setLocation'](((typeof ($105=val)['__array'] != 'undefined'?
				((typeof $105['__array'][$106=0]) != 'undefined'?$105['__array'][$106]:
					$105['__getitem__']($106)):
					$105['__getitem__'](0)))-(Math['floor'](self['width']/2)), (typeof ($107=val)['__array'] != 'undefined'?
				((typeof $107['__array'][$108=1]) != 'undefined'?$107['__array'][$108]:
					$107['__getitem__']($108)):
					$107['__getitem__'](1)));
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_set_midtop'] = $method;
		$method = $pyjs__bind_method2('_set_midleft', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}
			var $112,$110,$111,$109,$attr601,$attr602;
			self['setLocation']((typeof ($109=val)['__array'] != 'undefined'?
				((typeof $109['__array'][$110=0]) != 'undefined'?$109['__array'][$110]:
					$109['__getitem__']($110)):
					$109['__getitem__'](0)), ((typeof ($111=val)['__array'] != 'undefined'?
				((typeof $111['__array'][$112=1]) != 'undefined'?$111['__array'][$112]:
					$111['__getitem__']($112)):
					$111['__getitem__'](1)))-(Math['floor'](self['height']/2)));
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_set_midleft'] = $method;
		$method = $pyjs__bind_method2('_set_midbottom', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}
			var $116,$114,$115,$113,$attr603,$attr605,$attr604,$attr606;
			self['setLocation'](((typeof ($113=val)['__array'] != 'undefined'?
				((typeof $113['__array'][$114=0]) != 'undefined'?$113['__array'][$114]:
					$113['__getitem__']($114)):
					$113['__getitem__'](0)))-(Math['floor'](self['width']/2)), ((typeof ($115=val)['__array'] != 'undefined'?
				((typeof $115['__array'][$116=1]) != 'undefined'?$115['__array'][$116]:
					$115['__getitem__']($116)):
					$115['__getitem__'](1)))-(self['height']));
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_set_midbottom'] = $method;
		$method = $pyjs__bind_method2('_set_midright', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}
			var $117,$attr610,$118,$119,$attr609,$attr608,$120,$attr607;
			self['setLocation'](((typeof ($117=val)['__array'] != 'undefined'?
				((typeof $117['__array'][$118=0]) != 'undefined'?$117['__array'][$118]:
					$117['__getitem__']($118)):
					$117['__getitem__'](0)))-(self['width']), ((typeof ($119=val)['__array'] != 'undefined'?
				((typeof $119['__array'][$120=1]) != 'undefined'?$119['__array'][$120]:
					$119['__getitem__']($120)):
					$119['__getitem__'](1)))-(Math['floor'](self['height']/2)));
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_set_midright'] = $method;
		$method = $pyjs__bind_method2('_set_size', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}
			var $123,$122,$121,$124;
			self['setSize']((typeof ($121=val)['__array'] != 'undefined'?
				((typeof $121['__array'][$122=0]) != 'undefined'?$121['__array'][$122]:
					$121['__getitem__']($122)):
					$121['__getitem__'](0)), (typeof ($123=val)['__array'] != 'undefined'?
				((typeof $123['__array'][$124=1]) != 'undefined'?$123['__array'][$124]:
					$123['__getitem__']($124)):
					$123['__getitem__'](1)));
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_set_size'] = $method;
		$method = $pyjs__bind_method2('_set_w', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}
			var $attr612,$attr611;
			self['setSize'](val, self['height']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_set_w'] = $method;
		$method = $pyjs__bind_method2('_set_h', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}
			var $attr614,$attr613;
			self['setSize'](self['width'], val);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_set_h'] = $method;
		$cls_definition['size'] = $p['property']($p['staticmethod']($cls_definition['_get_size']), $p['staticmethod']($cls_definition['_set_size']));
		$cls_definition['center'] = $p['property']($p['staticmethod']($cls_definition['_get_center']), $p['staticmethod']($cls_definition['_set_center']));
		$cls_definition['centerx'] = $p['property']($p['staticmethod']($cls_definition['_get_centerx']), $p['staticmethod']($cls_definition['_set_centerx']));
		$cls_definition['centery'] = $p['property']($p['staticmethod']($cls_definition['_get_centery']), $p['staticmethod']($cls_definition['_set_centery']));
		$cls_definition['top'] = $p['property']($p['staticmethod']($cls_definition['_get_top']), $p['staticmethod']($cls_definition['_set_top']));
		$cls_definition['left'] = $p['property']($p['staticmethod']($cls_definition['_get_left']), $p['staticmethod']($cls_definition['_set_left']));
		$cls_definition['bottom'] = $p['property']($p['staticmethod']($cls_definition['_get_bottom']), $p['staticmethod']($cls_definition['_set_bottom']));
		$cls_definition['right'] = $p['property']($p['staticmethod']($cls_definition['_get_right']), $p['staticmethod']($cls_definition['_set_right']));
		$cls_definition['topleft'] = $p['property']($p['staticmethod']($cls_definition['_get_topleft']), $p['staticmethod']($cls_definition['_set_topleft']));
		$cls_definition['bottomleft'] = $p['property']($p['staticmethod']($cls_definition['_get_bottomleft']), $p['staticmethod']($cls_definition['_set_bottomleft']));
		$cls_definition['topright'] = $p['property']($p['staticmethod']($cls_definition['_get_topright']), $p['staticmethod']($cls_definition['_set_topright']));
		$cls_definition['bottomright'] = $p['property']($p['staticmethod']($cls_definition['_get_bottomright']), $p['staticmethod']($cls_definition['_set_bottomright']));
		$cls_definition['midtop'] = $p['property']($p['staticmethod']($cls_definition['_get_midtop']), $p['staticmethod']($cls_definition['_set_midtop']));
		$cls_definition['midleft'] = $p['property']($p['staticmethod']($cls_definition['_get_midleft']), $p['staticmethod']($cls_definition['_set_midleft']));
		$cls_definition['midbottom'] = $p['property']($p['staticmethod']($cls_definition['_get_midbottom']), $p['staticmethod']($cls_definition['_set_midbottom']));
		$cls_definition['midright'] = $p['property']($p['staticmethod']($cls_definition['_get_midright']), $p['staticmethod']($cls_definition['_set_midright']));
		$cls_definition['w'] = $p['property']($p['staticmethod']($cls_definition['_get_w']), $p['staticmethod']($cls_definition['_set_w']));
		$cls_definition['h'] = $p['property']($p['staticmethod']($cls_definition['_get_h']), $p['staticmethod']($cls_definition['_set_h']));
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Rect', $p['tuple']($bases), $data);
	})();
	$m['RectPool'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.rect';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr616,$attr617,$attr615,$attr618;
			$p['list']['__init__'](self);
			self['add'] = self['append'];
			self['addAll'] = self['extend'];
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get', function(x, y, width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				width = arguments[3];
				height = arguments[4];
			}
			var $bool68,rect;
			if ((($bool68=self) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
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
				rect = self['pop']();
				rect['x'] = x;
				rect['y'] = y;
				rect['width'] = width;
				rect['height'] = height;
				return rect;
			}
			else {
				return $m['Rect'](x, y, width, height);
			}
			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['width'],['height']]);
		$cls_definition['get'] = $method;
		$method = $pyjs__bind_method2('copy', function(r) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				r = arguments[1];
			}
			var $attr623,$attr622,$attr621,$attr620,$attr627,$attr626,$attr625,$attr624,$bool69,$attr628,$attr632,$attr619,$attr630,$attr633,$attr634,$attr631,$attr629,rect;
			if ((($bool69=self) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
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
				rect = self['pop']();
				rect['x'] = r['x'];
				rect['y'] = r['y'];
				rect['width'] = r['width'];
				rect['height'] = r['height'];
				return rect;
			}
			else {
				return $m['Rect'](r['x'], r['y'], r['width'], r['height']);
			}
			return null;
		}
	, 1, [null,null,['self'],['r']]);
		$cls_definition['copy'] = $method;
		var $bases = new Array($p['list']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('RectPool', $p['tuple']($bases), $data);
	})();
	$m['rectPool'] = $m['RectPool']();
	return this;
}; /* end pyjsdl.rect */


/* end module: pyjsdl.rect */


