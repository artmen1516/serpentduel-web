/* start module: pyjsdl.event */
$pyjs['loaded_modules']['pyjsdl.event'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.event']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.event'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.event'];
	$m['__repr__'] = function() { return '<module: pyjsdl.event>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.event';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['event'] = $pyjs['loaded_modules']['pyjsdl.event'];


	$m['env'] = $p['___import___']('pyjsdl.env', 'pyjsdl', null, false);
	$m['key'] = $p['___import___']('pyjsdl.key', 'pyjsdl', null, false);
	$m['Const'] = $p['___import___']('pyjsdl.constants', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['Event'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.event';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr40,$attr41,$attr54,$attr20,$attr21,$attr22,$attr23,$attr24,$attr25,$attr26,$attr27,$attr28,$attr29,$attr39,$attr48,$attr49,$attr38,$attr68,$attr64,$attr65,$attr67,$attr60,$attr61,$attr62,$attr63,$attr9,$attr8,$attr42,$attr58,$attr1,$attr3,$attr2,$attr5,$attr4,$attr7,$attr6,$attr33,$attr32,$attr31,$attr30,$attr19,$attr18,$attr35,$attr34,$attr15,$attr14,$attr17,$attr16,$attr11,$attr10,$attr13,$attr12,$attr59,$attr46,$attr43,$attr47,$attr51,$attr50,$attr53,$attr52,$attr55,$attr44,$attr57,$attr56,$attr45,$attr37,$attr66,$attr36;
			self['eventQueue'] = function(){
				var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$iter1_idx,$iter1_array;
	$collcomp1 = $p['list']();
			$iter1_iter = $p['range'](256);
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				$collcomp1['append'](null);
			}

	return $collcomp1;}();
			self['eventNum'] = 0;
			self['eventQueueTmp'] = function(){
				var $iter2_nextval,$iter2_type,$iter2_iter,i,$collcomp2,$iter2_idx,$iter2_array;
	$collcomp2 = $p['list']();
			$iter2_iter = $p['range'](256);
			if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter['__iter__']();
				$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				i = $iter2_nextval;
				$collcomp2['append'](null);
			}

	return $collcomp2;}();
			self['eventNumTmp'] = 0;
			self['queueLock'] = false;
			self['queueAccess'] = false;
			self['queue'] = $p['list']([]);
			self['queueNil'] = $p['list']([]);
			self['queueTmp'] = $p['list']([]);
			self['mousePress'] = $p['dict']([[0, false], [1, false], [2, false]]);
			self['mouseMove'] = $p['dict']([['x', -(1)], ['y', -(1)]]);
			self['mouseMovePre'] = $p['dict']([['x', 0], ['y', 0]]);
			self['mouseMoveRel'] = $p['dict']([['x', null], ['y', null]]);
			self['keyPress'] = $p['dict']([[$m['Const']['K_ALT'], false], [$m['Const']['K_CTRL'], false], [$m['Const']['K_SHIFT'], false]]);
			self['keyMod'] = $p['dict']([[$m['Const']['K_ALT'], $p['dict']([[true, $m['Const']['KMOD_ALT']], [false, 0]])], [$m['Const']['K_CTRL'], $p['dict']([[true, $m['Const']['KMOD_CTRL']], [false, 0]])], [$m['Const']['K_SHIFT'], $p['dict']([[true, $m['Const']['KMOD_SHIFT']], [false, 0]])]]);
			self['eventName'] = $p['dict']([[$m['Const']['MOUSEMOTION'], 'MouseMotion'], [$m['Const']['MOUSEBUTTONDOWN'], 'MouseButtonDown'], [$m['Const']['MOUSEBUTTONUP'], 'MouseButtonUp'], [$m['Const']['KEYDOWN'], 'KeyDown'], [$m['Const']['KEYUP'], 'KeyUp'], ['mousemove', 'MouseMotion'], ['mousedown', 'MouseButtonDown'], ['mouseup', 'MouseButtonUp'], ['keydown', 'KeyDown'], ['keyup', 'KeyUp']]);
			self['eventType'] = $p['list']([$m['Const']['MOUSEMOTION'], $m['Const']['MOUSEBUTTONDOWN'], $m['Const']['MOUSEBUTTONUP'], $m['Const']['KEYDOWN'], $m['Const']['KEYUP'], 'mousemove', 'mousedown', 'mouseup', 'wheel', 'mousewheel', 'DOMMouseScroll', 'keydown', 'keypress', 'keyup']);
			self['events'] = $p['set'](self['eventType']);
			self['eventTypes'] = $p['dict']([[$m['Const']['MOUSEMOTION'], $p['set']($p['list']([$m['Const']['MOUSEMOTION'], 'mousemove']))], [$m['Const']['MOUSEBUTTONDOWN'], $p['set']($p['list']([$m['Const']['MOUSEBUTTONDOWN'], 'mousedown', 'wheel', 'mousewheel', 'DOMMouseScroll']))], [$m['Const']['MOUSEBUTTONUP'], $p['set']($p['list']([$m['Const']['MOUSEBUTTONUP'], 'mouseup']))], [$m['Const']['KEYDOWN'], $p['set']($p['list']([$m['Const']['KEYDOWN'], 'keydown', 'keypress']))], [$m['Const']['KEYUP'], $p['set']($p['list']([$m['Const']['KEYUP'], 'keyup']))]]);
			self['eventObj'] = $p['dict']([['mousedown', (typeof MouseDownEvent == "undefined"?$m['MouseDownEvent']:MouseDownEvent)], ['mouseup', (typeof MouseUpEvent == "undefined"?$m['MouseUpEvent']:MouseUpEvent)], ['wheel', (typeof MouseWheelEvent == "undefined"?$m['MouseWheelEvent']:MouseWheelEvent)], ['mousewheel', (typeof MouseWheelEvent == "undefined"?$m['MouseWheelEvent']:MouseWheelEvent)], ['DOMMouseScroll', (typeof _MouseWheelEvent == "undefined"?$m['_MouseWheelEvent']:_MouseWheelEvent)], ['mousemove', (typeof MouseMoveEvent == "undefined"?$m['MouseMoveEvent']:MouseMoveEvent)], ['keydown', (typeof KeyDownEvent == "undefined"?$m['KeyDownEvent']:KeyDownEvent)], ['keyup', (typeof KeyUpEvent == "undefined"?$m['KeyUpEvent']:KeyUpEvent)]]);
			self['modKey'] = $m['key']['_modKey'];
			self['specialKey'] = $m['key']['_specialKey'];
			self['modKeyCode'] = $m['key']['_modKeyCode'];
			self['specialKeyCode'] = $m['key']['_specialKeyCode'];
			self['touchlistener'] = null;
			self['keyRepeat'] = $p['list']([0, 0]);
			self['keyHeld'] = $p['dict']([]);
			self['keyCode'] = 0;
			self['keyPressCode'] = $p['dict']([]);
			self['Event'] = (typeof UserEvent == "undefined"?$m['UserEvent']:UserEvent);
			self['_nonimplemented_methods']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_lock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['queueLock'] = true;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_lock'] = $method;
		$method = $pyjs__bind_method2('_unlock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['queueLock'] = false;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_unlock'] = $method;
		$method = $pyjs__bind_method2('_updateQueue', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $attr69,$attr72,$attr71,$attr70,$bool2,$bool3,$bool1;
			self['queueAccess'] = true;
			if ((($bool2=!(($bool1=self['queueLock']) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				if ((($bool3=self['eventNumTmp']) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					self['_appendMerge']();
				}
				self['_append'](event);
			}
			else {
				self['_appendTmp'](event);
			}
			self['queueAccess'] = false;
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['_updateQueue'] = $method;
		$method = $pyjs__bind_method2('_append', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $cmp1,$attr75,$cmp2,$attr77,$attr76,$attr74,$attr73,$attr78,$bool4;
			if ((($bool4=((($cmp1=self['eventNum'])===($cmp2=255)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				self['eventQueue']['__setitem__'](self['eventNum'], event);
				self['eventNum'] += 1;
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['_append'] = $method;
		$method = $pyjs__bind_method2('_appendTmp', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $attr82,$cmp4,$attr80,$attr81,$attr79,$cmp3,$attr83,$bool5,$attr84;
			if ((($bool5=((($cmp3=self['eventNumTmp'])===($cmp4=255)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == -1)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				self['eventQueueTmp']['__setitem__'](self['eventNumTmp'], event);
				self['eventNumTmp'] += 1;
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['_appendTmp'] = $method;
		$method = $pyjs__bind_method2('_appendMerge', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter3_idx,$attr86,$attr87,$attr85,i,$iter3_type,$attr90,$attr89,$attr88,$iter3_iter,$iter3_array,$2,$iter3_nextval,$1;
			$iter3_iter = $p['range'](self['eventNumTmp']);
			if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter['__iter__']();
				$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				i = $iter3_nextval;
				self['_append']((typeof ($1=self['eventQueueTmp'])['__array'] != 'undefined'?
					((typeof $1['__array'][$2=i]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__'](i)));
				self['eventQueueTmp']['__setitem__'](i, null);
			}
			self['eventNumTmp'] = 0;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_appendMerge'] = $method;
		$method = $pyjs__bind_method2('pump', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $cmp5,$cmp6,$attr91,$attr92,$bool6;
			if ((($bool6=((($cmp5=self['eventNum'])===($cmp6=250)?0:
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
				self['_lock']();
				self['_pump']();
				self['_unlock']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pump'] = $method;
		$method = $pyjs__bind_method2('_pump', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr95,$attr94,$attr97,$attr96,$iter4_idx,$attr93,i,$iter4_nextval,$attr100,$attr99,$attr98,queue,$iter4_type,$iter4_array,$4,$iter4_iter,$3;
			queue = $p['__getslice'](self['eventQueue'], 50, self['eventNum']);
			self['eventNum'] -= 50;
			$iter4_iter = $p['range'](self['eventNum']);
			if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter['__iter__']();
				$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				i = $iter4_nextval;
				self['eventQueue']['__setitem__'](i, (typeof ($3=queue)['__array'] != 'undefined'?
					((typeof $3['__array'][$4=i]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__'](i)));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_pump'] = $method;
		$method = $pyjs__bind_method2('get', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventType = arguments[1];
			}
			if (typeof eventType == 'undefined') eventType=arguments['callee']['__args__'][3][1];
			var $bool10,$iter5_idx,$bool12,$bool13,$bool14,$bool15,$bool16,$attr106,$attr107,$attr104,$attr105,$attr102,$attr103,$iter7_type,$attr108,$attr109,$iter6_array,$bool7,$bool8,$bool9,$attr119,$attr118,$iter7_nextval,$attr111,$attr110,$attr113,$attr112,$attr115,$attr114,$attr117,$attr116,$iter5_nextval,$iter5_array,$iter6_iter,$iter6_idx,$iter6_type,$iter5_type,$attr142,$attr143,$attr140,$attr141,$attr144,$iter7_iter,$attr101,$8,$9,$6,$7,$5,$14,$15,$16,$17,$10,$11,$12,$13,$18,$len1,$iter5_iter,$iter6_nextval,$attr120,$attr121,$attr122,$attr123,$attr124,$attr125,$attr126,$attr127,$attr128,$attr129,$eq2,$eq1,$bool11,$iter7_idx,$cmp7,i,$iter7_array,$cmp8,$attr133,$attr132,$attr131,$attr130,$attr137,$attr136,$attr135,$attr134,$attr139,$attr138;
			if ((($bool8=!(($bool7=self['eventNum']) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				return self['queueNil'];
			}
			self['_lock']();
			if ((($bool10=!(($bool9=eventType) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
				false :
				(typeof $bool9=='object'?
					(typeof $bool9['__nonzero__']=='function'?
						$bool9['__nonzero__']() :
						(typeof $bool9['__len__']=='function'?
							($bool9['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				self['queue'] = $p['__getslice'](self['eventQueue'], 0, self['eventNum']);
				self['eventNum'] = 0;
			}
			else {
				self['queue'] = $p['list']([]);
				if ((($bool11=$p['isinstance'](eventType, $p['tuple']([$p['tuple'], $p['list']]))) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					$iter5_iter = $p['range'](self['eventNum']);
					if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
						$iter5_type = 0;
					} else {
						$iter5_iter = $iter5_iter['__iter__']();
						$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter5_idx = 0;
					while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
						i = $iter5_nextval;
						if ((($bool12=!eventType['__contains__']((typeof ($5=self['eventQueue'])['__array'] != 'undefined'?
							((typeof $5['__array'][$6=i]) != 'undefined'?$5['__array'][$6]:
								$5['__getitem__']($6)):
								$5['__getitem__'](i))['type'])) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
							self['queueTmp']['append']((typeof ($7=self['eventQueue'])['__array'] != 'undefined'?
								((typeof $7['__array'][$8=i]) != 'undefined'?$7['__array'][$8]:
									$7['__getitem__']($8)):
									$7['__getitem__'](i)));
						}
						else {
							self['queue']['append']((typeof ($9=self['eventQueue'])['__array'] != 'undefined'?
								((typeof $9['__array'][$10=i]) != 'undefined'?$9['__array'][$10]:
									$9['__getitem__']($10)):
									$9['__getitem__'](i)));
						}
					}
				}
				else {
					$iter6_iter = $p['range'](self['eventNum']);
					if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
						$iter6_type = 0;
					} else {
						$iter6_iter = $iter6_iter['__iter__']();
						$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter6_idx = 0;
					while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
						i = $iter6_nextval;
						if ((($bool13=!(($eq1=(typeof ($11=self['eventQueue'])['__array'] != 'undefined'?
							((typeof $11['__array'][$12=i]) != 'undefined'?$11['__array'][$12]:
								$11['__getitem__']($12)):
								$11['__getitem__'](i))['type'])===($eq2=eventType)&&$eq1===null?true:
							($eq1===null?false:($eq2===null?false:
								((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1['__cmp__']=='function'?$eq1['__cmp__']($eq2) === 0:
									((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2['__cmp__']=='function'?$eq2['__cmp__']($eq1) === 0:
										$eq1==$eq2)))))) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
							self['queueTmp']['append']((typeof ($13=self['eventQueue'])['__array'] != 'undefined'?
								((typeof $13['__array'][$14=i]) != 'undefined'?$13['__array'][$14]:
									$13['__getitem__']($14)):
									$13['__getitem__'](i)));
						}
						else {
							self['queue']['append']((typeof ($15=self['eventQueue'])['__array'] != 'undefined'?
								((typeof $15['__array'][$16=i]) != 'undefined'?$15['__array'][$16]:
									$15['__getitem__']($16)):
									$15['__getitem__'](i)));
						}
					}
				}
				if ((($bool15=!(($bool14=self['queueTmp']) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
					false :
					(typeof $bool14=='object'?
						(typeof $bool14['__nonzero__']=='function'?
							$bool14['__nonzero__']() :
							(typeof $bool14['__len__']=='function'?
								($bool14['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					self['eventNum'] = 0;
				}
				else {
					self['eventNum'] = (($len1=self['queueTmp']) === null?0:
						(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
							(typeof $len1['__len__'] == 'function'?$len1['__len__']():
								(typeof $len1['length'] != 'undefined'?$len1['length']:
									$p['len']($len1)))));
					$iter7_iter = $p['range'](self['eventNum']);
					if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
						$iter7_type = 0;
					} else {
						$iter7_iter = $iter7_iter['__iter__']();
						$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter7_idx = 0;
					while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
						i = $iter7_nextval;
						self['eventQueue']['__setitem__'](i, (typeof ($17=self['queueTmp'])['__array'] != 'undefined'?
							((typeof $17['__array'][$18=i]) != 'undefined'?$17['__array'][$18]:
								$17['__getitem__']($18)):
								$17['__getitem__'](i)));
					}
					$p['__setslice'](self['queueTmp'], 0, null, $p['list']([]));
				}
				if ((($bool16=((($cmp7=self['eventNum'])===($cmp8=250)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) == 1)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					self['_pump']();
				}
			}
			self['_unlock']();
			return self['queue'];
		}
	, 1, [null,null,['self'],['eventType', null]]);
		$cls_definition['get'] = $method;
		$method = $pyjs__bind_method2('poll', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool18,$attr146,$attr147,$attr145,$attr149,$cmp9,$bool17,$cmp10,evt,$attr148,$attr150;
			self['_lock']();
			if ((($bool17=self['eventNum']) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				evt = self['eventQueue']['pop'](0);
				self['eventNum'] -= 1;
				self['eventQueue']['append'](null);
				if ((($bool18=((($cmp9=self['eventNum'])===($cmp10=250)?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
					self['_pump']();
				}
			}
			else {
				evt = self['Event']($m['Const']['NOEVENT']);
			}
			self['_unlock']();
			return evt;
		}
	, 1, [null,null,['self']]);
		$cls_definition['poll'] = $method;
		$method = $pyjs__bind_method2('wait', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool19,$attr151,$attr153,$attr152,$attr154,$cmp11,$bool20,$cmp12,$bool21,evt;
			while ((($bool19=true) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				if ((($bool20=self['eventNum']) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
					self['_lock']();
					evt = self['eventQueue']['pop'](0);
					self['eventNum'] -= 1;
					self['eventQueue']['append'](null);
					if ((($bool21=((($cmp11=self['eventNum'])===($cmp12=250)?0:
						(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
							($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
							$p['cmp']($cmp11, $cmp12))) == 1)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
						self['_pump']();
					}
					self['_unlock']();
					return evt;
				}
				else {
					self['_unlock']();
					return null;
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['wait'] = $method;
		$method = $pyjs__bind_method2('peek', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventType = arguments[1];
			}
			if (typeof eventType == 'undefined') eventType=arguments['callee']['__args__'][3][1];
			var evtType,$iter9_iter,$attr164,$iter9_nextval,$iter9_idx,$attr163,$bool25,$bool24,$bool27,$bool26,$bool23,$bool22,$bool28,$cmp14,$cmp13,$attr155,$attr156,$iter9_type,evt,$iter9_array;
			if ((($bool23=!(($bool22=self['eventNum']) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
				false :
				(typeof $bool22=='object'?
					(typeof $bool22['__nonzero__']=='function'?
						$bool22['__nonzero__']() :
						(typeof $bool22['__len__']=='function'?
							($bool22['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
				return false;
			}
			else if ((($bool24=(eventType === null)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
				return true;
			}
			self['_lock']();
			evt = function(){
				var $attr157,$attr160,$iter8_idx,$collcomp3,$iter8_type,$iter8_array,$attr158,$attr162,$attr161,$iter8_iter,$iter8_nextval,$attr159,event;
	$collcomp3 = $p['list']();
			$iter8_iter = $p['__getslice'](self['eventQueue'], 0, self['eventNum']);
			if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
				$iter8_type = 0;
			} else {
				$iter8_iter = $iter8_iter['__iter__']();
				$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter8_idx = 0;
			while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
				event = $iter8_nextval;
				$collcomp3['append'](event['type']);
			}

	return $collcomp3;}();
			if ((($bool25=((($cmp13=self['eventNum'])===($cmp14=250)?0:
				(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
					($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
					$p['cmp']($cmp13, $cmp14))) == 1)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
				self['_pump']();
			}
			self['_unlock']();
			if ((($bool26=$p['isinstance'](eventType, $p['tuple']([$p['tuple'], $p['list']]))) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
				$iter9_iter = eventType;
				if (typeof ($iter9_array = $iter9_iter['__array']) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter['__iter__']();
					$iter9_type = typeof ($iter9_array = $iter9_iter['__array']) != 'undefined'? 0 : (typeof $iter9_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					evtType = $iter9_nextval;
					if ((($bool27=evt['__contains__'](evtType)) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
			else {
				if ((($bool28=evt['__contains__'](eventType)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
						false :
						(typeof $bool28=='object'?
							(typeof $bool28['__nonzero__']=='function'?
								$bool28['__nonzero__']() :
								(typeof $bool28['__len__']=='function'?
									($bool28['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					return true;
				}
			}
			return false;
		}
	, 1, [null,null,['self'],['eventType', null]]);
		$cls_definition['peek'] = $method;
		$method = $pyjs__bind_method2('clear', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventType = arguments[1];
			}
			if (typeof eventType == 'undefined') eventType=arguments['callee']['__args__'][3][1];
			var $attr191,$iter12_type,$attr193,$iter10_nextval,$attr195,$attr194,$attr190,$attr196,$attr189,$attr172,$iter12_array,$attr192,$attr171,$iter10_iter,$attr177,$iter12_iter,$attr168,$attr169,$21,$20,$attr167,$25,$24,$27,$26,$attr187,$iter12_nextval,$eq3,$len2,$iter11_idx,$bool29,$attr185,$attr188,$attr166,$attr186,$iter11_iter,$attr184,$bool35,$attr182,$attr183,$attr180,$attr181,$cmp15,$28,$cmp16,$eq4,$iter11_array,$iter11_nextval,$23,$iter12_idx,$attr179,$attr178,i,$attr176,$attr175,$attr174,$attr173,$19,$iter10_array,$attr170,$bool32,$bool33,$bool30,$bool31,$bool36,$bool37,$bool34,$attr165,$iter10_type,$iter11_type,$22,$iter10_idx;
			if ((($bool30=!(($bool29=self['eventNum']) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
				false :
				(typeof $bool29=='object'?
					(typeof $bool29['__nonzero__']=='function'?
						$bool29['__nonzero__']() :
						(typeof $bool29['__len__']=='function'?
							($bool29['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
				return null;
			}
			self['_lock']();
			if ((($bool31=(eventType === null)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
				self['eventNum'] = 0;
			}
			else {
				if ((($bool32=$p['isinstance'](eventType, $p['tuple']([$p['tuple'], $p['list']]))) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
					$iter10_iter = $p['range'](self['eventNum']);
					if (typeof ($iter10_array = $iter10_iter['__array']) != 'undefined') {
						$iter10_type = 0;
					} else {
						$iter10_iter = $iter10_iter['__iter__']();
						$iter10_type = typeof ($iter10_array = $iter10_iter['__array']) != 'undefined'? 0 : (typeof $iter10_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter10_idx = 0;
					while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
						i = $iter10_nextval;
						if ((($bool33=!eventType['__contains__']((typeof ($19=self['eventQueue'])['__array'] != 'undefined'?
							((typeof $19['__array'][$20=i]) != 'undefined'?$19['__array'][$20]:
								$19['__getitem__']($20)):
								$19['__getitem__'](i))['type'])) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
							self['queueTmp']['append']((typeof ($21=self['eventQueue'])['__array'] != 'undefined'?
								((typeof $21['__array'][$22=i]) != 'undefined'?$21['__array'][$22]:
									$21['__getitem__']($22)):
									$21['__getitem__'](i)));
						}
					}
				}
				else {
					$iter11_iter = $p['range'](self['eventNum']);
					if (typeof ($iter11_array = $iter11_iter['__array']) != 'undefined') {
						$iter11_type = 0;
					} else {
						$iter11_iter = $iter11_iter['__iter__']();
						$iter11_type = typeof ($iter11_array = $iter11_iter['__array']) != 'undefined'? 0 : (typeof $iter11_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter11_idx = 0;
					while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
						i = $iter11_nextval;
						if ((($bool34=!(($eq3=(typeof ($23=self['eventQueue'])['__array'] != 'undefined'?
							((typeof $23['__array'][$24=i]) != 'undefined'?$23['__array'][$24]:
								$23['__getitem__']($24)):
								$23['__getitem__'](i))['type'])===($eq4=eventType)&&$eq3===null?true:
							($eq3===null?false:($eq4===null?false:
								((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3['__cmp__']=='function'?$eq3['__cmp__']($eq4) === 0:
									((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4['__cmp__']=='function'?$eq4['__cmp__']($eq3) === 0:
										$eq3==$eq4)))))) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
							self['queueTmp']['append']((typeof ($25=self['eventQueue'])['__array'] != 'undefined'?
								((typeof $25['__array'][$26=i]) != 'undefined'?$25['__array'][$26]:
									$25['__getitem__']($26)):
									$25['__getitem__'](i)));
						}
					}
				}
				if ((($bool36=!(($bool35=self['queueTmp']) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
					false :
					(typeof $bool35=='object'?
						(typeof $bool35['__nonzero__']=='function'?
							$bool35['__nonzero__']() :
							(typeof $bool35['__len__']=='function'?
								($bool35['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
					self['eventNum'] = 0;
				}
				else {
					self['eventNum'] = (($len2=self['queueTmp']) === null?0:
						(typeof $len2['__array'] != 'undefined' ? $len2['__array']['length']:
							(typeof $len2['__len__'] == 'function'?$len2['__len__']():
								(typeof $len2['length'] != 'undefined'?$len2['length']:
									$p['len']($len2)))));
					$iter12_iter = $p['range'](self['eventNum']);
					if (typeof ($iter12_array = $iter12_iter['__array']) != 'undefined') {
						$iter12_type = 0;
					} else {
						$iter12_iter = $iter12_iter['__iter__']();
						$iter12_type = typeof ($iter12_array = $iter12_iter['__array']) != 'undefined'? 0 : (typeof $iter12_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter12_idx = 0;
					while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
						i = $iter12_nextval;
						self['eventQueue']['__setitem__'](i, (typeof ($27=self['queueTmp'])['__array'] != 'undefined'?
							((typeof $27['__array'][$28=i]) != 'undefined'?$27['__array'][$28]:
								$27['__getitem__']($28)):
								$27['__getitem__'](i)));
					}
					$p['__setslice'](self['queueTmp'], 0, null, $p['list']([]));
				}
				if ((($bool37=((($cmp15=self['eventNum'])===($cmp16=250)?0:
					(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
						($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
						$p['cmp']($cmp15, $cmp16))) == 1)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
					self['_pump']();
				}
			}
			self['_unlock']();
			return null;
		}
	, 1, [null,null,['self'],['eventType', null]]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('event_name', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventType = arguments[1];
			}
			var $29,$attr197,$attr199,$30,$attr198,$bool38,$attr200;
			if ((($bool38=self['eventName']['__contains__'](eventType)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
				return (typeof ($29=self['eventName'])['__array'] != 'undefined'?
					((typeof $29['__array'][$30=eventType]) != 'undefined'?$29['__array'][$30]:
						$29['__getitem__']($30)):
						$29['__getitem__'](eventType));
			}
			else {
				return null;
			}
			return null;
		}
	, 1, [null,null,['self'],['eventType']]);
		$cls_definition['event_name'] = $method;
		$method = $pyjs__bind_method2('set_blocked', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventType = arguments[1];
			}
			var evtType,$attr206,$iter13_nextval,$iter13_iter,$bool40,$32,$33,$iter13_array,$34,$iter13_idx,$attr205,$attr204,$31,$bool39,$attr201,$iter13_type,$attr203,$attr202;
			if ((($bool39=(eventType !== null)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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
				if ((($bool40=$p['isinstance'](eventType, $p['tuple']([$p['tuple'], $p['list']]))) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
					$iter13_iter = eventType;
					if (typeof ($iter13_array = $iter13_iter['__array']) != 'undefined') {
						$iter13_type = 0;
					} else {
						$iter13_iter = $iter13_iter['__iter__']();
						$iter13_type = typeof ($iter13_array = $iter13_iter['__array']) != 'undefined'? 0 : (typeof $iter13_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter13_idx = 0;
					while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
						evtType = $iter13_nextval;
						self['events'] = self['events']['difference']((typeof ($31=self['eventTypes'])['__array'] != 'undefined'?
							((typeof $31['__array'][$32=evtType]) != 'undefined'?$31['__array'][$32]:
								$31['__getitem__']($32)):
								$31['__getitem__'](evtType)));
					}
				}
				else {
					self['events'] = self['events']['difference']((typeof ($33=self['eventTypes'])['__array'] != 'undefined'?
						((typeof $33['__array'][$34=eventType]) != 'undefined'?$33['__array'][$34]:
							$33['__getitem__']($34)):
							$33['__getitem__'](eventType)));
				}
			}
			else {
				self['events'] = $p['set'](self['eventType']);
			}
			return null;
		}
	, 1, [null,null,['self'],['eventType']]);
		$cls_definition['set_blocked'] = $method;
		$method = $pyjs__bind_method2('set_allowed', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventType = arguments[1];
			}
			var evtType,$iter14_array,$iter14_type,$bool42,$bool41,$36,$35,$attr209,$attr208,$iter14_iter,$37,$38,$attr207,$attr210,$iter14_idx,$iter14_nextval;
			if ((($bool41=(eventType !== null)) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
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
				if ((($bool42=$p['isinstance'](eventType, $p['tuple']([$p['tuple'], $p['list']]))) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
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
					$iter14_iter = eventType;
					if (typeof ($iter14_array = $iter14_iter['__array']) != 'undefined') {
						$iter14_type = 0;
					} else {
						$iter14_iter = $iter14_iter['__iter__']();
						$iter14_type = typeof ($iter14_array = $iter14_iter['__array']) != 'undefined'? 0 : (typeof $iter14_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter14_idx = 0;
					while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
						evtType = $iter14_nextval;
						self['events'] = self['events']['union']((typeof ($35=self['eventTypes'])['__array'] != 'undefined'?
							((typeof $35['__array'][$36=evtType]) != 'undefined'?$35['__array'][$36]:
								$35['__getitem__']($36)):
								$35['__getitem__'](evtType)));
					}
				}
				else {
					self['events'] = self['events']['union']((typeof ($37=self['eventTypes'])['__array'] != 'undefined'?
						((typeof $37['__array'][$38=eventType]) != 'undefined'?$37['__array'][$38]:
							$37['__getitem__']($38)):
							$37['__getitem__'](eventType)));
				}
			}
			else {
				self['events']['clear']();
			}
			return null;
		}
	, 1, [null,null,['self'],['eventType']]);
		$cls_definition['set_allowed'] = $method;
		$method = $pyjs__bind_method2('get_blocked', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventType = arguments[1];
			}
			var $attr212,$attr211,$bool43;
			if ((($bool43=!self['events']['__contains__'](eventType)) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
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
				return true;
			}
			else {
				return false;
			}
			return null;
		}
	, 1, [null,null,['self'],['eventType']]);
		$cls_definition['get_blocked'] = $method;
		$method = $pyjs__bind_method2('post', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $bool44,$attr213,$attr216,$attr214,$attr215;
			self['_lock']();
			if ((($bool44=self['events']['__contains__'](event['type'])) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
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
				self['_append'](event);
			}
			self['_unlock']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['post'] = $method;
		$method = $pyjs__bind_method2('_set_key_event', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr222,$attr221,$attr220,$attr218,$attr219,$attr217;
			self['eventObj']['__setitem__']('keydown', (typeof _KeyDownEvent == "undefined"?$m['_KeyDownEvent']:_KeyDownEvent));
			self['eventObj']['__setitem__']('keyup', (typeof _KeyUpEvent == "undefined"?$m['_KeyUpEvent']:_KeyUpEvent));
			self['eventObj']['__setitem__']('keypress', (typeof _KeyPressEvent == "undefined"?$m['_KeyPressEvent']:_KeyPressEvent));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_set_key_event'] = $method;
		$method = $pyjs__bind_method2('_initiate_touch_listener', function(canvas) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				canvas = arguments[1];
			}

			self['touchlistener'] = (typeof TouchListener == "undefined"?$m['TouchListener']:TouchListener)(canvas);
			return null;
		}
	, 1, [null,null,['self'],['canvas']]);
		$cls_definition['_initiate_touch_listener'] = $method;
		$method = $pyjs__bind_method2('_register_event', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventType = arguments[1];
			}
			var $attr227,$attr226,$attr225,$attr224,$attr223,$bool45,$attr228;
			if ((($bool45=!self['eventTypes']['__contains__'](eventType)) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
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
				self['eventTypes']['__setitem__'](eventType, eventType);
				self['eventName']['__setitem__'](eventType, 'UserEvent');
				self['eventType']['append'](eventType);
				self['events'] = self['events']['union']($p['set']($p['list']([eventType])));
			}
			return null;
		}
	, 1, [null,null,['self'],['eventType']]);
		$cls_definition['_register_event'] = $method;
		$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda2,$lambda1;
			var 			$lambda1 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = ['arg',null];
			self['set_grab'] = $lambda1;
			var 			$lambda2 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return false;
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = ['arg',null];
			self['get_grab'] = $lambda2;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_nonimplemented_methods'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Event', $p['tuple']($bases), $data);
	})();
	$m['UserEvent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.event';
		$cls_definition['__slots__'] = $p['list'](['type', 'attr']);
		$method = $pyjs__bind_method2('__init__', function(eventType) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				eventType = arguments[1];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof eventType != 'undefined') {
					if (eventType !== null && typeof eventType['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = eventType;
						eventType = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var $bool47,$bool46,$iter15_type,$attr230,attr,$attr232,$39,$attr231,$attr229,$iter15_idx,$iter15_nextval,$42,$41,$40,$iter15_array,$iter15_iter;
			if ((($bool46=args) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
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
				attr = (typeof ($39=args)['__array'] != 'undefined'?
					((typeof $39['__array'][$40=0]) != 'undefined'?$39['__array'][$40]:
						$39['__getitem__']($40)):
						$39['__getitem__'](0));
			}
			else {
				attr = kwargs;
			}
			$p['object']['__setattr__'](self, 'type', eventType);
			$p['object']['__setattr__'](self, 'attr', attr);
			if ((($bool47=$m['env']['pyjs_mode']['optimized']) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
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
				$iter15_iter = self['attr'];
				if (typeof ($iter15_array = $iter15_iter['__array']) != 'undefined') {
					$iter15_type = 0;
				} else {
					$iter15_iter = $iter15_iter['__iter__']();
					$iter15_type = typeof ($iter15_array = $iter15_iter['__array']) != 'undefined'? 0 : (typeof $iter15_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter15_idx = 0;
				while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
					attr = $iter15_nextval;
					$p['object']['__setattr__'](self, attr, (typeof ($41=self['attr'])['__array'] != 'undefined'?
						((typeof $41['__array'][$42=attr]) != 'undefined'?$41['__array'][$42]:
							$41['__getitem__']($42)):
							$41['__getitem__'](attr)));
				}
			}
			$m['env']['event']['_register_event'](eventType);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['eventType']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['toString']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['toString']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__getattr__', function(attr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				attr = arguments[1];
			}
			var $attr234,$attr235,$attr236,$attr233,$bool48,$43,$44;
			if ((($bool48=self['attr']['__contains__'](attr)) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
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
				return (typeof ($43=self['attr'])['__array'] != 'undefined'?
					((typeof $43['__array'][$44=attr]) != 'undefined'?$43['__array'][$44]:
						$43['__getitem__']($44)):
						$43['__getitem__'](attr));
			}
			else {
				throw ($p['AttributeError']($p['sprintf']("'Event' object has no attribute '%s'", attr)));
			}
			return null;
		}
	, 1, [null,null,['self'],['attr']]);
		$cls_definition['__getattr__'] = $method;
		$method = $pyjs__bind_method2('__setattr__', function(attr, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				attr = arguments[1];
				value = arguments[2];
			}
			var $attr237,$attr238;
			self['attr']['__setitem__'](attr, value);
			return null;
		}
	, 1, [null,null,['self'],['attr'],['value']]);
		$cls_definition['__setattr__'] = $method;
		$method = $pyjs__bind_method2('toString', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr241,$attr240,$attr243,$attr242,$attr244,event_name,$attr239;
			event_name = $m['env']['event']['event_name'](self['type']);
			return $p['sprintf']('<Event(%s-%s %r)>', $p['tuple']([self['type'], event_name, self['attr']]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('UserEvent', $p['tuple']($bases), $data);
	})();
	$m['JEvent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.event';
		$cls_definition['__slots__'] = $p['list']([]);
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['toString']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['toString']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('toString', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter16_array,$attr245,attr,$attr247,$attr246,event_name,$attr248,$attr252,$attr250,$attr251,$iter16_idx,$attr249,$iter16_type,$iter16_nextval,$iter16_iter,$46,$45,name;
			event_name = (typeof ($45=self['_eventName'])['__array'] != 'undefined'?
				((typeof $45['__array'][$46=self['type']]) != 'undefined'?$45['__array'][$46]:
					$45['__getitem__']($46)):
					$45['__getitem__'](self['type']));
			attr = $p['dict']([]);
			$iter16_iter = $p['__getslice'](self['__slots__'], 1, -(1));
			if (typeof ($iter16_array = $iter16_iter['__array']) != 'undefined') {
				$iter16_type = 0;
			} else {
				$iter16_iter = $iter16_iter['__iter__']();
				$iter16_type = typeof ($iter16_array = $iter16_iter['__array']) != 'undefined'? 0 : (typeof $iter16_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter16_idx = 0;
			while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
				name = $iter16_nextval;
				attr['__setitem__'](name, $p['getattr'](self, name));
			}
			return $p['sprintf']('<Event(%s-%s %r)>', $p['tuple']([self['type'], event_name, $p['repr'](attr)]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		$method = $pyjs__bind_method2('getEvent', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr254,$attr253;
			return self['event'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getEvent'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('JEvent', $p['tuple']($bases), $data);
	})();
	$m['MouseEvent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.event';
		$cls_definition['_types'] = $p['dict']([['mousemove', $m['Const']['MOUSEMOTION']], ['mousedown', $m['Const']['MOUSEBUTTONDOWN']], ['mouseup', $m['Const']['MOUSEBUTTONUP']], ['wheel', $m['Const']['MOUSEBUTTONDOWN']], ['mousewheel', $m['Const']['MOUSEBUTTONDOWN']], ['DOMMouseScroll', $m['Const']['MOUSEBUTTONDOWN']]]);
		$cls_definition['_eventName'] = $p['dict']([[$m['Const']['MOUSEMOTION'], 'MouseMotion'], [$m['Const']['MOUSEBUTTONDOWN'], 'MouseButtonDown'], [$m['Const']['MOUSEBUTTONUP'], 'MouseButtonUp']]);
		$cls_definition['__slots__'] = $p['list']([]);
		var $bases = new Array($m['JEvent']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('MouseEvent', $p['tuple']($bases), $data);
	})();
	$m['MouseDownEvent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.event';
		$cls_definition['__slots__'] = $p['list'](['type', 'button', 'pos', 'event']);
		$method = $pyjs__bind_method2('__init__', function(event, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $attr278,$attr279,$attr281,$attr280,$attr282,$attr273,$attr274,$attr275,$attr276,$attr277,$48,$47;
			self['event'] = event;
			self['type'] = (typeof ($47=self['_types'])['__array'] != 'undefined'?
				((typeof $47['__array'][$48=event['type']]) != 'undefined'?$47['__array'][$48]:
					$47['__getitem__']($48)):
					$47['__getitem__'](event['type']));
			self['button'] = (event['button'])+(1);
			self['pos'] = $p['tuple']([(x)+($m['env']['frame']['scrollLeft']), (y)+($m['env']['frame']['scrollTop'])]);
			return null;
		}
	, 1, [null,null,['self'],['event'],['x'],['y']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['MouseEvent']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('MouseDownEvent', $p['tuple']($bases), $data);
	})();
	$m['MouseUpEvent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.event';
		$cls_definition['__slots__'] = $p['list'](['type', 'button', 'pos', 'event']);
		$method = $pyjs__bind_method2('__init__', function(event, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $attr285,$attr284,$attr287,$attr286,$attr290,$attr283,$attr292,$attr289,$attr288,$50,$49,$attr291;
			self['event'] = event;
			self['type'] = (typeof ($49=self['_types'])['__array'] != 'undefined'?
				((typeof $49['__array'][$50=event['type']]) != 'undefined'?$49['__array'][$50]:
					$49['__getitem__']($50)):
					$49['__getitem__'](event['type']));
			self['button'] = (event['button'])+(1);
			self['pos'] = $p['tuple']([(x)+($m['env']['frame']['scrollLeft']), (y)+($m['env']['frame']['scrollTop'])]);
			return null;
		}
	, 1, [null,null,['self'],['event'],['x'],['y']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['MouseEvent']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('MouseUpEvent', $p['tuple']($bases), $data);
	})();
	$m['MouseWheelEvent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.event';
		$cls_definition['__slots__'] = $p['list'](['type', 'button', 'pos', 'event']);
		$method = $pyjs__bind_method2('__init__', function(event, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $attr293,$attr296,$attr297,$attr294,$attr295,$attr299,$bool49,$cmp18,$attr302,$cmp17,$attr300,$attr298,$51,$52,$attr301;
			self['event'] = event;
			self['type'] = (typeof ($51=self['_types'])['__array'] != 'undefined'?
				((typeof $51['__array'][$52=event['type']]) != 'undefined'?$51['__array'][$52]:
					$51['__getitem__']($52)):
					$51['__getitem__'](event['type']));
			if ((($bool49=((($cmp17=event['deltaY'])===($cmp18=0)?0:
				(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
					($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
					$p['cmp']($cmp17, $cmp18))) == -1)) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
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
				self['button'] = 4;
			}
			else {
				self['button'] = 5;
			}
			self['pos'] = $p['tuple']([(x)+($m['env']['frame']['scrollLeft']), (y)+($m['env']['frame']['scrollTop'])]);
			return null;
		}
	, 1, [null,null,['self'],['event'],['x'],['y']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['MouseEvent']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('MouseWheelEvent', $p['tuple']($bases), $data);
	})();
	$m['_MouseWheelEvent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.event';
		$cls_definition['__slots__'] = $p['list'](['type', 'button', 'pos', 'event']);
		$method = $pyjs__bind_method2('__init__', function(event, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $attr304,$attr305,$attr306,$attr307,$bool50,$attr312,$attr311,$attr303,$cmp19,$attr310,$attr308,$attr309,$cmp20,$53,$54;
			self['event'] = event;
			self['type'] = (typeof ($53=self['_types'])['__array'] != 'undefined'?
				((typeof $53['__array'][$54=event['type']]) != 'undefined'?$53['__array'][$54]:
					$53['__getitem__']($54)):
					$53['__getitem__'](event['type']));
			if ((($bool50=((($cmp19=event['detail'])===($cmp20=0)?0:
				(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
					($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
					$p['cmp']($cmp19, $cmp20))) == -1)) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
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
				self['button'] = 4;
			}
			else {
				self['button'] = 5;
			}
			self['pos'] = $p['tuple']([(x)+($m['env']['frame']['scrollLeft']), (y)+($m['env']['frame']['scrollTop'])]);
			return null;
		}
	, 1, [null,null,['self'],['event'],['x'],['y']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['MouseEvent']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('_MouseWheelEvent', $p['tuple']($bases), $data);
	})();
	$m['MouseMoveEvent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.event';
		$cls_definition['__slots__'] = $p['list'](['type', 'buttons', 'pos', 'rel', 'event']);
		$method = $pyjs__bind_method2('__init__', function(event, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $attr317,$attr316,$attr315,$attr314,$attr313,$attr319,$attr318,$eq10,$attr328,$attr329,$attr322,$attr323,$attr320,$attr321,$attr326,$attr327,$attr324,$attr325,$eq8,$eq9,$eq6,$eq7,$eq5,$60,$attr330,$58,$59,$55,$56,$57;
			self['event'] = event;
			self['type'] = (typeof ($55=self['_types'])['__array'] != 'undefined'?
				((typeof $55['__array'][$56=event['type']]) != 'undefined'?$55['__array'][$56]:
					$55['__getitem__']($56)):
					$55['__getitem__'](event['type']));
			self['buttons'] = $p['tuple']([(($eq5=($p['float_int'](event['buttons']))&(1))===($eq6=1)&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5['__cmp__']=='function'?$eq5['__cmp__']($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6['__cmp__']=='function'?$eq6['__cmp__']($eq5) === 0:
							$eq5==$eq6))))), (($eq7=($p['float_int'](event['buttons']))&(4))===($eq8=4)&&$eq7===null?true:
				($eq7===null?false:($eq8===null?false:
					((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7['__cmp__']=='function'?$eq7['__cmp__']($eq8) === 0:
						((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8['__cmp__']=='function'?$eq8['__cmp__']($eq7) === 0:
							$eq7==$eq8))))), (($eq9=($p['float_int'](event['buttons']))&(2))===($eq10=2)&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9['__cmp__']=='function'?$eq9['__cmp__']($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10['__cmp__']=='function'?$eq10['__cmp__']($eq9) === 0:
							$eq9==$eq10)))))]);
			self['pos'] = $p['tuple']([(x)+($m['env']['frame']['scrollLeft']), (y)+($m['env']['frame']['scrollTop'])]);
			self['rel'] = $p['tuple']([(x)-((typeof ($57=$m['env']['event']['mouseMovePre'])['__array'] != 'undefined'?
				((typeof $57['__array'][$58='x']) != 'undefined'?$57['__array'][$58]:
					$57['__getitem__']($58)):
					$57['__getitem__']('x'))), (y)-((typeof ($59=$m['env']['event']['mouseMovePre'])['__array'] != 'undefined'?
				((typeof $59['__array'][$60='y']) != 'undefined'?$59['__array'][$60]:
					$59['__getitem__']($60)):
					$59['__getitem__']('y')))]);
			return null;
		}
	, 1, [null,null,['self'],['event'],['x'],['y']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['MouseEvent']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('MouseMoveEvent', $p['tuple']($bases), $data);
	})();
	$m['KeyEvent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.event';
		$cls_definition['_types'] = $p['dict']([['keydown', $m['Const']['KEYDOWN']], ['keyup', $m['Const']['KEYUP']], ['keypress', $m['Const']['KEYDOWN']]]);
		$cls_definition['_eventName'] = $p['dict']([[$m['Const']['KEYDOWN'], 'KeyDown'], [$m['Const']['KEYUP'], 'KeyUp']]);
		$cls_definition['_code'] = $m['key']['_code'];
		$cls_definition['_specialKey'] = $m['key']['_specialKey'];
		$cls_definition['_specialKeyCode'] = $m['key']['_specialKeyCode'];
		$cls_definition['__slots__'] = $p['list']([]);
		var $bases = new Array($m['JEvent']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('KeyEvent', $p['tuple']($bases), $data);
	})();
	$m['KeyDownEvent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.event';
		$cls_definition['__slots__'] = $p['list'](['type', 'key', 'mod', 'unicode', 'event']);
		$method = $pyjs__bind_method2('__init__', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $bool54,$attr370,$attr359,$attr358,$attr375,$bool51,$bool52,$bool53,$attr353,$attr352,$attr351,$attr350,$attr357,$attr356,$attr355,$attr354,$attr372,$bool55,$attr374,$attr373,$attr388,$or3,$attr384,$attr385,$attr376,$attr380,$attr381,$attr382,$attr383,$attr379,$attr378,$65,$64,$bool56,$66,$61,$63,$62,$attr348,$attr349,$or1,$attr368,$attr369,$attr366,$attr367,$attr364,$attr365,$attr362,$attr363,$attr360,$attr347,$attr361,$attr389,$attr390,$attr371,$or2,$attr387,$attr386,$attr377;
			self['event'] = event;
			self['type'] = (typeof ($61=self['_types'])['__array'] != 'undefined'?
				((typeof $61['__array'][$62=event['type']]) != 'undefined'?$61['__array'][$62]:
					$61['__getitem__']($62)):
					$61['__getitem__'](event['type']));
			if ((($bool51=self['_specialKey']['__contains__'](event['key'])) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
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
				self['key'] = (typeof ($63=self['_specialKey'])['__array'] != 'undefined'?
					((typeof $63['__array'][$64=event['key']]) != 'undefined'?$63['__array'][$64]:
						$63['__getitem__']($64)):
						$63['__getitem__'](event['key']));
				if ((($bool52=$p['tuple']([9, 13])['__contains__'](self['key'])) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
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
					self['unicode'] = $p['chr'](self['key']);
				}
				else {
					self['unicode'] = '';
				}
			}
			else {
				if ((($bool53=$p['hasattr'](event, 'code')) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
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
					if ((($bool54=self['_code']['__contains__'](event['code'])) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
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
						self['key'] = (typeof ($65=self['_code'])['__array'] != 'undefined'?
							((typeof $65['__array'][$66=event['code']]) != 'undefined'?$65['__array'][$66]:
								$65['__getitem__']($66)):
								$65['__getitem__'](event['code']));
					}
					else {
						self['key'] = event['code'];
					}
				}
				else {
					self['key'] = ((($bool55=$or1=event['which']) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
						false :
						(typeof $bool55=='object'?
							(typeof $bool55['__nonzero__']=='function'?
								$bool55['__nonzero__']() :
								(typeof $bool55['__len__']=='function'?
									($bool55['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or1:((($bool56=$or2=event['keyCode']) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
						false :
						(typeof $bool56=='object'?
							(typeof $bool56['__nonzero__']=='function'?
								$bool56['__nonzero__']() :
								(typeof $bool56['__len__']=='function'?
									($bool56['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or2:0));
				}
				self['unicode'] = event['key'];
			}
			self['mod'] = (($p['float_int'](event['altKey']))*($m['Const']['KMOD_ALT']))|(($p['float_int'](event['ctrlKey']))*($m['Const']['KMOD_CTRL']))|(($p['float_int'](event['shiftKey']))*($m['Const']['KMOD_SHIFT']));
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['KeyEvent']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('KeyDownEvent', $p['tuple']($bases), $data);
	})();
	$m['KeyUpEvent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.event';
		$cls_definition['__slots__'] = $p['list'](['type', 'key', 'mod', 'unicode', 'event']);
		$method = $pyjs__bind_method2('__init__', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $attr418,$attr419,$bool57,$attr420,$attr410,$attr411,$attr412,$attr413,$bool58,$bool59,$attr416,$attr417,$bool62,$attr421,$or4,$or5,$attr427,$attr429,$69,$68,$attr428,$attr433,$67,$attr432,$attr434,$bool61,$bool60,$attr409,$attr408,$attr425,$attr424,$attr414,$attr426,$attr403,$attr402,$attr401,$attr400,$attr407,$attr406,$attr405,$attr404,$attr423,$attr430,$attr431,$72,$70,$71,$attr415,$attr399,$attr398,$attr397,$attr396,$attr395,$attr394,$attr393,$attr392,$attr391,$attr422,$or6;
			self['event'] = event;
			self['type'] = (typeof ($67=self['_types'])['__array'] != 'undefined'?
				((typeof $67['__array'][$68=event['type']]) != 'undefined'?$67['__array'][$68]:
					$67['__getitem__']($68)):
					$67['__getitem__'](event['type']));
			if ((($bool57=self['_specialKey']['__contains__'](event['key'])) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
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
				self['key'] = (typeof ($69=self['_specialKey'])['__array'] != 'undefined'?
					((typeof $69['__array'][$70=event['key']]) != 'undefined'?$69['__array'][$70]:
						$69['__getitem__']($70)):
						$69['__getitem__'](event['key']));
				if ((($bool58=$p['tuple']([9, 13])['__contains__'](self['key'])) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
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
					self['unicode'] = $p['chr'](self['key']);
				}
				else {
					self['unicode'] = '';
				}
			}
			else {
				if ((($bool59=$p['hasattr'](event, 'code')) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
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
					if ((($bool60=self['_code']['__contains__'](event['code'])) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
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
						self['key'] = (typeof ($71=self['_code'])['__array'] != 'undefined'?
							((typeof $71['__array'][$72=event['code']]) != 'undefined'?$71['__array'][$72]:
								$71['__getitem__']($72)):
								$71['__getitem__'](event['code']));
					}
					else {
						self['key'] = event['code'];
					}
				}
				else {
					self['key'] = ((($bool61=$or4=event['which']) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
						false :
						(typeof $bool61=='object'?
							(typeof $bool61['__nonzero__']=='function'?
								$bool61['__nonzero__']() :
								(typeof $bool61['__len__']=='function'?
									($bool61['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or4:((($bool62=$or5=event['keyCode']) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
						false :
						(typeof $bool62=='object'?
							(typeof $bool62['__nonzero__']=='function'?
								$bool62['__nonzero__']() :
								(typeof $bool62['__len__']=='function'?
									($bool62['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or5:0));
				}
				self['unicode'] = event['key'];
			}
			self['mod'] = (($p['float_int'](event['altKey']))*($m['Const']['KMOD_ALT']))|(($p['float_int'](event['ctrlKey']))*($m['Const']['KMOD_CTRL']))|(($p['float_int'](event['shiftKey']))*($m['Const']['KMOD_SHIFT']));
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['KeyEvent']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('KeyUpEvent', $p['tuple']($bases), $data);
	})();
	$m['_KeyDownEvent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.event';
		$cls_definition['__slots__'] = $p['list'](['type', 'key', 'mod', 'unicode', 'event']);
		$method = $pyjs__bind_method2('__init__', function(event, keycode) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
				keycode = arguments[2];
			}
			var $attr454,$attr455,$attr456,$attr450,$attr451,$attr438,$attr439,$attr436,$attr437,$attr435,$attr445,$attr452,$attr453,$attr447,$attr446,$bool63,$attr444,$attr443,$attr442,$attr441,$attr440,$attr449,$attr448,$73,$76,$74,$75;
			self['event'] = event;
			self['type'] = (typeof ($73=self['_types'])['__array'] != 'undefined'?
				((typeof $73['__array'][$74=event['type']]) != 'undefined'?$73['__array'][$74]:
					$73['__getitem__']($74)):
					$73['__getitem__'](event['type']));
			self['key'] = (typeof ($75=self['_specialKeyCode'])['__array'] != 'undefined'?
				((typeof $75['__array'][$76=keycode]) != 'undefined'?$75['__array'][$76]:
					$75['__getitem__']($76)):
					$75['__getitem__'](keycode));
			if ((($bool63=$p['tuple']([9, 13])['__contains__'](self['key'])) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
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
				self['unicode'] = $p['chr'](self['key']);
			}
			else {
				self['unicode'] = '';
			}
			self['mod'] = (($p['float_int'](event['altKey']))*($m['Const']['KMOD_ALT']))|(($p['float_int'](event['ctrlKey']))*($m['Const']['KMOD_CTRL']))|(($p['float_int'](event['shiftKey']))*($m['Const']['KMOD_SHIFT']));
			return null;
		}
	, 1, [null,null,['self'],['event'],['keycode']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['KeyEvent']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('_KeyDownEvent', $p['tuple']($bases), $data);
	})();
	$m['_KeyUpEvent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.event';
		$cls_definition['__slots__'] = $p['list'](['type', 'key', 'mod', 'unicode', 'event']);
		$method = $pyjs__bind_method2('__init__', function(event, keycode) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
				keycode = arguments[2];
			}
			var $attr457,$attr458,$attr459,$cmp21,$cmp22,$cmp23,$cmp24,$cmp25,$cmp26,$cmp27,$cmp28,$attr480,$attr469,$attr468,$attr465,$attr464,$attr467,$attr466,$attr461,$attr460,$attr463,$attr462,$bool65,$bool64,$bool67,$bool66,$bool68,$82,$81,$80,_keycode,$77,$78,$79,$attr478,$attr479,$attr472,$attr473,$attr470,$attr471,$attr476,$attr477,$attr474,$attr475;
			self['event'] = event;
			self['type'] = (typeof ($77=self['_types'])['__array'] != 'undefined'?
				((typeof $77['__array'][$78=event['type']]) != 'undefined'?$77['__array'][$78]:
					$77['__getitem__']($78)):
					$77['__getitem__'](event['type']));
			if ((($bool64=self['_specialKeyCode']['__contains__'](keycode)) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
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
				self['key'] = (typeof ($79=self['_specialKeyCode'])['__array'] != 'undefined'?
					((typeof $79['__array'][$80=keycode]) != 'undefined'?$79['__array'][$80]:
						$79['__getitem__']($80)):
						$79['__getitem__'](keycode));
				if ((($bool65=$p['tuple']([9, 13])['__contains__'](keycode)) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
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
					self['unicode'] = $p['chr'](keycode);
				}
				else {
					self['unicode'] = '';
				}
			}
			else {
				if ((($bool66=$m['env']['event']['keyPressCode']['__contains__'](keycode)) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
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
					_keycode = (typeof ($81=$m['env']['event']['keyPressCode'])['__array'] != 'undefined'?
						((typeof $81['__array'][$82=keycode]) != 'undefined'?$81['__array'][$82]:
							$81['__getitem__']($82)):
							$81['__getitem__'](keycode));
					self['key'] = _keycode;
					if ((($bool67=(((($cmp21=65)===($cmp22=($compare1 = _keycode))?0:
						(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
							($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
							$p['cmp']($cmp21, $cmp22))) < 1)&&((($cmp23=$compare1)===($cmp24=($compare2 = 90))?0:
						(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
							($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
							$p['cmp']($cmp23, $cmp24))) < 1))) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
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
						self['unicode'] = $p['chr']((_keycode)+(32));
					}
					else {
						self['unicode'] = $p['chr'](_keycode);
					}
				}
				else {
					if ((($bool68=(((($cmp25=65)===($cmp26=($compare3 = keycode))?0:
						(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
							($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
							$p['cmp']($cmp25, $cmp26))) < 1)&&((($cmp27=$compare3)===($cmp28=($compare4 = 90))?0:
						(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
							($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
							$p['cmp']($cmp27, $cmp28))) < 1))) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
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
						self['key'] = (keycode)+(32);
						self['unicode'] = $p['chr']((keycode)+(32));
					}
					else {
						self['key'] = keycode;
						self['unicode'] = $p['chr'](keycode);
					}
				}
			}
			self['mod'] = (($p['float_int'](event['altKey']))*($m['Const']['KMOD_ALT']))|(($p['float_int'](event['ctrlKey']))*($m['Const']['KMOD_CTRL']))|(($p['float_int'](event['shiftKey']))*($m['Const']['KMOD_SHIFT']));
			return null;
		}
	, 1, [null,null,['self'],['event'],['keycode']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['KeyEvent']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('_KeyUpEvent', $p['tuple']($bases), $data);
	})();
	$m['_KeyPressEvent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.event';
		$cls_definition['__slots__'] = $p['list'](['type', 'key', 'mod', 'unicode', 'event']);
		$method = $pyjs__bind_method2('__init__', function(event, keycode) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
				keycode = arguments[2];
			}
			var $cmp29,$attr483,$attr482,$attr481,$attr487,$attr486,$attr485,$attr484,$attr489,$attr488,$bool69,$84,$83,$cmp32,$cmp31,$cmp30,$attr490,$attr491,$attr492,$attr493,$attr494,$attr495,$attr496;
			self['event'] = event;
			self['type'] = (typeof ($83=self['_types'])['__array'] != 'undefined'?
				((typeof $83['__array'][$84=event['type']]) != 'undefined'?$83['__array'][$84]:
					$83['__getitem__']($84)):
					$83['__getitem__'](event['type']));
			self['key'] = keycode;
			if ((($bool69=(((($cmp29=65)===($cmp30=($compare5 = keycode))?0:
				(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
					($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
					$p['cmp']($cmp29, $cmp30))) < 1)&&((($cmp31=$compare5)===($cmp32=($compare6 = 90))?0:
				(typeof $cmp31==typeof $cmp32 && ((typeof $cmp31 == 'number')||(typeof $cmp31 == 'string')||(typeof $cmp31 == 'boolean'))?
					($cmp31 == $cmp32 ? 0 : ($cmp31 < $cmp32 ? -1 : 1)):
					$p['cmp']($cmp31, $cmp32))) < 1))) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
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
				self['unicode'] = $p['chr']((keycode)+(32));
			}
			else {
				self['unicode'] = $p['chr'](keycode);
			}
			self['mod'] = (($p['float_int'](event['altKey']))*($m['Const']['KMOD_ALT']))|(($p['float_int'](event['ctrlKey']))*($m['Const']['KMOD_CTRL']))|(($p['float_int'](event['shiftKey']))*($m['Const']['KMOD_SHIFT']));
			return null;
		}
	, 1, [null,null,['self'],['event'],['keycode']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['KeyEvent']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('_KeyPressEvent', $p['tuple']($bases), $data);
	})();
	$m['TouchListener'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.event';
		$method = $pyjs__bind_method2('__init__', function(canvas) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				canvas = arguments[1];
			}

			$m['_canvas'] = canvas;
			self['element'] = canvas['getElement']();
			self['element']['addEventListener']('touchstart', (typeof _touch_detect == "undefined"?$m['_touch_detect']:_touch_detect));
			self['active'] = false;
			self['callback'] = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self'],['canvas']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('activate', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['element']['removeEventListener']('touchstart', (typeof _touch_detect == "undefined"?$m['_touch_detect']:_touch_detect));
			self['element']['addEventListener']('touchstart', (typeof _touch_start == "undefined"?$m['_touch_start']:_touch_start));
			self['element']['addEventListener']('touchend', (typeof _touch_end == "undefined"?$m['_touch_end']:_touch_end));
			self['element']['addEventListener']('touchmove', (typeof _touch_move == "undefined"?$m['_touch_move']:_touch_move));
			self['element']['addEventListener']('touchcancel', (typeof _touch_cancel == "undefined"?$m['_touch_cancel']:_touch_cancel));
			self['active'] = true;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['activate'] = $method;
		$method = $pyjs__bind_method2('add_callback', function(callback) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				callback = arguments[1];
			}

			self['callback']['append'](callback);
			return null;
		}
	, 1, [null,null,['self'],['callback']]);
		$cls_definition['add_callback'] = $method;
		$method = $pyjs__bind_method2('is_active', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr498,$attr497;
			return self['active'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['is_active'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TouchListener', $p['tuple']($bases), $data);
	})();
	$m['_canvas'] = null;
	$m['_touch_detect'] = function(event) {

		$m['_canvas']['onTouchInitiate'](event);
		return null;
	};
	$m['_touch_detect']['__name__'] = '_touch_detect';

	$m['_touch_detect']['__bind_type__'] = 0;
	$m['_touch_detect']['__args__'] = [null,null,['event']];
	$m['_touch_start'] = function(event) {

		$m['_canvas']['onTouchStart'](event);
		return null;
	};
	$m['_touch_start']['__name__'] = '_touch_start';

	$m['_touch_start']['__bind_type__'] = 0;
	$m['_touch_start']['__args__'] = [null,null,['event']];
	$m['_touch_end'] = function(event) {

		$m['_canvas']['onTouchEnd'](event);
		return null;
	};
	$m['_touch_end']['__name__'] = '_touch_end';

	$m['_touch_end']['__bind_type__'] = 0;
	$m['_touch_end']['__args__'] = [null,null,['event']];
	$m['_touch_move'] = function(event) {

		$m['_canvas']['onTouchMove'](event);
		return null;
	};
	$m['_touch_move']['__name__'] = '_touch_move';

	$m['_touch_move']['__bind_type__'] = 0;
	$m['_touch_move']['__args__'] = [null,null,['event']];
	$m['_touch_cancel'] = function(event) {

		$m['_canvas']['onTouchCancel'](event);
		return null;
	};
	$m['_touch_cancel']['__name__'] = '_touch_cancel';

	$m['_touch_cancel']['__bind_type__'] = 0;
	$m['_touch_cancel']['__args__'] = [null,null,['event']];
	return this;
}; /* end pyjsdl.event */


/* end module: pyjsdl.event */


/*
PYJS_DEPS: ['pyjsdl.env', 'pyjsdl', 'pyjsdl.key', 'pyjsdl.constants']
*/
