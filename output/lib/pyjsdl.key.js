/* start module: pyjsdl.key */
$pyjs['loaded_modules']['pyjsdl.key'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.key']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.key'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.key'];
	$m['__repr__'] = function() { return '<module: pyjsdl.key>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.key';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['key'] = $pyjs['loaded_modules']['pyjsdl.key'];
	var $attr289,$attr288,$attr119,$attr293,$attr290,$attr291,$attr296,$attr297,$attr294,$attr295,$attr111,$attr110,$attr113,$attr299,$attr115,$attr114,$attr117,$attr116,$attr278,$attr279,$attr373,$attr372,$attr375,$attr374,$attr377,$attr376,$attr379,$attr378,$attr272,$attr273,$attr274,$attr275,$attr276,$attr277,$attr268,$attr68,$attr69,$attr64,$attr65,$attr66,$attr67,$attr60,$attr61,$attr62,$attr63,$attr209,$attr208,$attr205,$attr204,$attr207,$attr206,$attr201,$attr200,$attr203,$attr202,$attr267,$attr266,$attr155,$attr154,$attr157,$attr156,$attr151,$attr150,$attr153,$attr152,$attr159,$attr158,$attr234,$attr235,$attr236,$attr237,$attr230,$attr231,$attr232,$attr233,$attr238,$attr239,$attr120,$attr121,$attr122,$attr123,$attr124,$attr125,$attr126,$attr127,$attr128,$attr129,$attr348,$attr349,$attr423,$attr422,$attr425,$attr424,$attr427,$attr426,$attr340,$attr341,$attr342,$attr343,$attr344,$attr345,$attr346,$attr347,$attr95,$attr94,$attr97,$attr96,$attr91,$attr90,$attr93,$attr92,$attr99,$attr98,$attr339,$attr338,$attr335,$attr334,$attr337,$attr336,$attr331,$attr330,$attr333,$attr332,$attr419,$attr292,$attr118,$attr298,$attr421,$attr112,$attr420,$attr285,$attr284,$attr287,$attr286,$attr281,$attr280,$attr283,$attr282,$attr164,$attr165,$attr166,$attr167,$attr160,$attr161,$attr162,$attr163,$attr429,$attr428,$attr304,$attr305,$attr269,$attr307,$attr300,$attr301,$attr302,$attr303,$attr263,$attr262,$attr261,$attr260,$attr308,$attr309,$attr265,$attr264,$attr59,$attr58,$attr55,$attr57,$attr56,$attr418,$attr371,$attr370,$attr410,$attr411,$attr412,$attr413,$attr414,$attr415,$attr416,$attr417,$attr270,$attr271,$attr227,$attr226,$attr225,$attr224,$attr223,$attr222,$attr221,$attr220,$attr186,$attr187,$attr184,$attr185,$attr182,$attr183,$attr229,$attr228,$attr133,$attr132,$attr131,$attr130,$attr137,$attr136,$attr135,$attr134,$attr139,$attr138,$attr359,$attr358,$attr353,$attr352,$attr351,$attr350,$attr357,$attr356,$attr355,$attr354,$attr82,$attr83,$attr80,$attr81,$attr86,$attr87,$attr84,$attr85,$attr88,$attr89,$attr179,$attr178,$attr177,$attr176,$attr175,$attr174,$attr173,$attr172,$attr171,$attr170,$attr317,$attr316,$attr315,$attr314,$attr313,$attr312,$attr311,$attr310,$attr256,$attr257,$attr254,$attr255,$attr252,$attr253,$attr319,$attr318,$attr306,$attr388,$attr389,$attr384,$attr385,$attr386,$attr387,$attr380,$attr381,$attr382,$attr383,$attr409,$attr408,$attr403,$attr402,$attr401,$attr400,$attr407,$attr406,$attr405,$attr404,$attr191,$attr190,$attr193,$attr192,$attr195,$attr194,$attr197,$attr196,$attr199,$attr198,$attr258,$attr259,$attr106,$attr107,$attr104,$attr105,$attr102,$attr103,$attr100,$attr101,$attr108,$attr109,$attr368,$attr369,$attr366,$attr367,$attr364,$attr365,$attr362,$attr363,$attr360,$attr361,$attr250,$attr251,$attr79,$attr78,$attr77,$attr76,$attr75,$attr74,$attr73,$attr72,$attr71,$attr70,$attr218,$attr219,$attr212,$attr213,$attr210,$attr211,$attr216,$attr217,$attr214,$attr215,$attr188,$attr189,$attr180,$attr181,$attr142,$attr143,$attr140,$attr141,$attr146,$attr147,$attr144,$attr145,$attr148,$attr149,$attr241,$attr240,$attr243,$attr242,$attr245,$attr244,$attr247,$attr246,$attr249,$attr248,$attr399,$attr398,$attr397,$attr396,$attr395,$attr394,$attr393,$attr392,$attr391,$attr390,$attr434,$attr432,$attr433,$attr430,$attr431,$attr328,$attr329,$attr322,$attr323,$attr320,$attr321,$attr326,$attr327,$attr324,$attr325,$attr168,$attr169;

	$m['env'] = $p['___import___']('pyjsdl.env', 'pyjsdl', null, false);
	$m['Const'] = $p['___import___']('pyjsdl.constants', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['Key'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.key';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr8,$attr1,$attr2,$attr5,$attr4,$attr7,$attr6,$attr10,$attr3;
			self['keyPress'] = $m['env']['event']['keyPress'];
			self['keyMod'] = $m['env']['event']['keyMod'];
			self['alt'] = $m['Const']['K_ALT'];
			self['ctrl'] = $m['Const']['K_CTRL'];
			self['shift'] = $m['Const']['K_SHIFT'];
			self['_keys'] = $p['dict']([]);
			self['_nonimplemented_methods']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('$$name', function(keycode) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				keycode = arguments[1];
			}
			var $iter1_iter,$4,$attr11,$3,$iter1_array,$1,$iter1_nextval,$attr12,$eq2,$eq1,$bool2,$bool3,$bool1,$attr18,$bool4,$bool5,$attr15,$attr14,$attr17,$attr16,$2,$attr13,name,$iter1_type,keyname,$iter1_idx,$len1;
			if ((($bool2=!(($bool1=self['_keys']) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				$iter1_iter = $p['dir']($m['Const']);
				if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter['__iter__']();
					$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					keyname = $iter1_nextval;
					if ((($bool3=keyname['startswith']('K_')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
						name = (typeof ($1=keyname['$$split']('_'))['__array'] != 'undefined'?
							((typeof $1['__array'][$2=1]) != 'undefined'?$1['__array'][$2]:
								$1['__getitem__']($2)):
								$1['__getitem__'](1))['lower']();
						if ((($bool4=!(($eq1=(($len1=name) === null?0:
							(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
								(typeof $len1['__len__'] == 'function'?$len1['__len__']():
									(typeof $len1['length'] != 'undefined'?$len1['length']:
										$p['len']($len1))))))===($eq2=1)&&$eq1===null?true:
							($eq1===null?false:($eq2===null?false:
								((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1['__cmp__']=='function'?$eq1['__cmp__']($eq2) === 0:
									((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2['__cmp__']=='function'?$eq2['__cmp__']($eq1) === 0:
										$eq1==$eq2)))))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
							self['_keys']['__setitem__']($p['getattr']($m['Const'], keyname), name);
						}
					}
				}
			}
			if ((($bool5=self['_keys']['__contains__'](keycode)) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				return (typeof ($3=self['_keys'])['__array'] != 'undefined'?
					((typeof $3['__array'][$4=keycode]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__'](keycode));
			}
			else {
				return $p['chr'](keycode);
			}
			return null;
		}
	, 1, [null,null,['self'],['keycode']]);
		$cls_definition['$$name'] = $method;
		$method = $pyjs__bind_method2('get_mods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr40,$attr35,$attr34,$attr20,$attr21,$attr22,$attr23,$attr24,$attr25,$attr26,$attr27,$attr28,$attr29,$attr41,$attr38,$21,$20,$22,$attr42,$attr33,$attr32,$attr31,$attr30,$attr19,$attr36,$8,$9,$6,$7,$attr39,$5,$14,$15,$16,$17,$10,$11,$12,$13,$18,$19,$attr37;
			return ((typeof ($9=(typeof ($5=self['keyMod'])['__array'] != 'undefined'?
				((typeof $5['__array'][$6=self['alt']]) != 'undefined'?$5['__array'][$6]:
					$5['__getitem__']($6)):
					$5['__getitem__'](self['alt'])))['__array'] != 'undefined'?
				((typeof $9['__array'][$10=(typeof ($7=self['keyPress'])['__array'] != 'undefined'?
				((typeof $7['__array'][$8=self['alt']]) != 'undefined'?$7['__array'][$8]:
					$7['__getitem__']($8)):
					$7['__getitem__'](self['alt']))]) != 'undefined'?$9['__array'][$10]:
					$9['__getitem__']($10)):
					$9['__getitem__']((typeof ($7=self['keyPress'])['__array'] != 'undefined'?
				((typeof $7['__array'][$8=self['alt']]) != 'undefined'?$7['__array'][$8]:
					$7['__getitem__']($8)):
					$7['__getitem__'](self['alt'])))))|((typeof ($15=(typeof ($11=self['keyMod'])['__array'] != 'undefined'?
				((typeof $11['__array'][$12=self['ctrl']]) != 'undefined'?$11['__array'][$12]:
					$11['__getitem__']($12)):
					$11['__getitem__'](self['ctrl'])))['__array'] != 'undefined'?
				((typeof $15['__array'][$16=(typeof ($13=self['keyPress'])['__array'] != 'undefined'?
				((typeof $13['__array'][$14=self['ctrl']]) != 'undefined'?$13['__array'][$14]:
					$13['__getitem__']($14)):
					$13['__getitem__'](self['ctrl']))]) != 'undefined'?$15['__array'][$16]:
					$15['__getitem__']($16)):
					$15['__getitem__']((typeof ($13=self['keyPress'])['__array'] != 'undefined'?
				((typeof $13['__array'][$14=self['ctrl']]) != 'undefined'?$13['__array'][$14]:
					$13['__getitem__']($14)):
					$13['__getitem__'](self['ctrl'])))))|((typeof ($21=(typeof ($17=self['keyMod'])['__array'] != 'undefined'?
				((typeof $17['__array'][$18=self['shift']]) != 'undefined'?$17['__array'][$18]:
					$17['__getitem__']($18)):
					$17['__getitem__'](self['shift'])))['__array'] != 'undefined'?
				((typeof $21['__array'][$22=(typeof ($19=self['keyPress'])['__array'] != 'undefined'?
				((typeof $19['__array'][$20=self['shift']]) != 'undefined'?$19['__array'][$20]:
					$19['__getitem__']($20)):
					$19['__getitem__'](self['shift']))]) != 'undefined'?$21['__array'][$22]:
					$21['__getitem__']($22)):
					$21['__getitem__']((typeof ($19=self['keyPress'])['__array'] != 'undefined'?
				((typeof $19['__array'][$20=self['shift']]) != 'undefined'?$19['__array'][$20]:
					$19['__getitem__']($20)):
					$19['__getitem__'](self['shift'])))));
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_mods'] = $method;
		$method = $pyjs__bind_method2('set_repeat', function(delay, interval) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				delay = arguments[1];
				interval = arguments[2];
			}
			if (typeof delay == 'undefined') delay=arguments['callee']['__args__'][3][1];
			if (typeof interval == 'undefined') interval=arguments['callee']['__args__'][4][1];
			var $attr52,$bool10,$attr46,$attr47,$attr44,$attr45,$attr43,$attr48,$attr49,$or1,$or2,$bool6,$bool7,$bool8,$bool9,$cmp4,$cmp1,$cmp3,$cmp2,$attr51,$attr50;
			if ((($bool7=((($bool6=$or1=((($cmp1=delay)===($cmp2=0)?0:
				(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
					($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
					$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
				false :
				(typeof $bool6=='object'?
					(typeof $bool6['__nonzero__']=='function'?
						$bool6['__nonzero__']() :
						(typeof $bool6['__len__']=='function'?
							($bool6['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or1:((($cmp3=interval)===($cmp4=0)?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))) == -1))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				throw ($p['ValueError']('repeat settings must be positive integers'));
			}
			if ((($bool9=!(($bool8=delay) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
				false :
				(typeof $bool8=='object'?
					(typeof $bool8['__nonzero__']=='function'?
						$bool8['__nonzero__']() :
						(typeof $bool8['__len__']=='function'?
							($bool8['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				$m['env']['event']['keyRepeat']['__setitem__'](0, 0);
				$m['env']['event']['keyRepeat']['__setitem__'](1, 0);
			}
			else {
				$m['env']['event']['keyRepeat']['__setitem__'](0, delay);
				if ((($bool10=interval) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
					$m['env']['event']['keyRepeat']['__setitem__'](1, interval);
				}
				else {
					$m['env']['event']['keyRepeat']['__setitem__'](1, delay);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['delay', 0],['interval', 0]]);
		$cls_definition['set_repeat'] = $method;
		$method = $pyjs__bind_method2('get_repeat', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr53,$attr54;
			return $m['env']['event']['keyRepeat'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_repeat'] = $method;
		$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda3,$lambda2,$lambda1;
			var 			$lambda1 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = ['arg',null];
			self['get_focused'] = $lambda1;
			var 			$lambda2 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = ['arg',null];
			self['get_pressed'] = $lambda2;
			var 			$lambda3 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda3['__name__'] = '$lambda3';

			$lambda3['__bind_type__'] = 0;
			$lambda3['__args__'] = ['arg',null];
			self['set_mods'] = $lambda3;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_nonimplemented_methods'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Key', $p['tuple']($bases), $data);
	})();
	$m['_code'] = $p['dict']([['Backquote', $m['Const']['K_BACKQUOTE']], ['Backslash', $m['Const']['K_BACKSLASH']], ['Backspace', $m['Const']['K_BACKSPACE']], ['BracketLeft', $m['Const']['K_LEFTBRACKET']], ['BracketRight', $m['Const']['K_RIGHTBRACKET']], ['Comma', $m['Const']['K_COMMA']], ['Digit0', $m['Const']['K_0']], ['Digit1', $m['Const']['K_1']], ['Digit2', $m['Const']['K_2']], ['Digit3', $m['Const']['K_3']], ['Digit4', $m['Const']['K_4']], ['Digit5', $m['Const']['K_5']], ['Digit6', $m['Const']['K_6']], ['Digit7', $m['Const']['K_7']], ['Digit8', $m['Const']['K_8']], ['Digit9', $m['Const']['K_8']], ['Equal', $m['Const']['K_EQUALS']], ['KeyA', $m['Const']['K_a']], ['KeyB', $m['Const']['K_b']], ['KeyC', $m['Const']['K_c']], ['KeyD', $m['Const']['K_d']], ['KeyE', $m['Const']['K_e']], ['KeyF', $m['Const']['K_f']], ['KeyG', $m['Const']['K_g']], ['KeyH', $m['Const']['K_h']], ['KeyI', $m['Const']['K_i']], ['KeyJ', $m['Const']['K_j']], ['KeyK', $m['Const']['K_k']], ['KeyL', $m['Const']['K_l']], ['KeyM', $m['Const']['K_m']], ['KeyN', $m['Const']['K_n']], ['KeyO', $m['Const']['K_o']], ['KeyP', $m['Const']['K_p']], ['KeyQ', $m['Const']['K_q']], ['KeyR', $m['Const']['K_r']], ['KeyS', $m['Const']['K_s']], ['KeyT', $m['Const']['K_t']], ['KeyU', $m['Const']['K_u']], ['KeyV', $m['Const']['K_v']], ['KeyW', $m['Const']['K_w']], ['KeyX', $m['Const']['K_x']], ['KeyY', $m['Const']['K_y']], ['KeyZ', $m['Const']['K_z']], ['Minus', $m['Const']['K_MINUS']], ['Period', $m['Const']['K_PERIOD']], ['Quote', $m['Const']['K_QUOTE']], ['Semicolon', $m['Const']['K_SEMICOLON']], ['Slash', $m['Const']['K_SLASH']], ['AltLeft', $m['Const']['K_LALT']], ['AltRight', $m['Const']['K_RALT']], ['CapsLock', $m['Const']['K_CAPSLOCK']], ['ContextMenu', $m['Const']['K_MENU']], ['ControlLeft', $m['Const']['K_LCTRL']], ['ControlRight', $m['Const']['K_RCTRL']], ['Enter', $m['Const']['K_RETURN']], ['MetaLeft', $m['Const']['K_LMETA']], ['MetaRight', $m['Const']['K_RMETA']], ['ShiftLeft', $m['Const']['K_LSHIFT']], ['ShiftRight', $m['Const']['K_RSHIFT']], ['Space', $m['Const']['K_SPACE']], ['Tab', $m['Const']['K_TAB']], ['Delete', $m['Const']['K_DELETE']], ['End', $m['Const']['K_END']], ['Help', $m['Const']['K_HELP']], ['Home', $m['Const']['K_HOME']], ['Insert', $m['Const']['K_INSERT']], ['PageDown', $m['Const']['K_PAGEDOWN']], ['PageUp', $m['Const']['K_PAGEUP']], ['ArrowDown', $m['Const']['K_DOWN']], ['ArrowLeft', $m['Const']['K_LEFT']], ['ArrowRight', $m['Const']['K_RIGHT']], ['ArrowUp', $m['Const']['K_UP']], ['NumLock', $m['Const']['K_NUMLOCK']], ['Numpad0', $m['Const']['K_KP0']], ['Numpad1', $m['Const']['K_KP1']], ['Numpad2', $m['Const']['K_KP2']], ['Numpad3', $m['Const']['K_KP3']], ['Numpad4', $m['Const']['K_KP4']], ['Numpad5', $m['Const']['K_KP5']], ['Numpad6', $m['Const']['K_KP6']], ['Numpad7', $m['Const']['K_KP7']], ['Numpad8', $m['Const']['K_KP8']], ['Numpad9', $m['Const']['K_KP9']], ['NumpadAdd', $m['Const']['K_KP_PLUS']], ['NumpadDecimal', $m['Const']['K_KP_PERIOD']], ['NumpadDivide', $m['Const']['K_KP_DIVIDE']], ['NumpadEnter', $m['Const']['K_KP_ENTER']], ['NumpadEqual', $m['Const']['K_KP_EQUALS']], ['NumpadMultiply', $m['Const']['K_KP_MULTIPLY']], ['NumpadSubtract', $m['Const']['K_KP_MINUS']], ['F1', $m['Const']['K_F1']], ['F2', $m['Const']['K_F2']], ['F3', $m['Const']['K_F3']], ['F4', $m['Const']['K_F4']], ['F5', $m['Const']['K_F5']], ['F6', $m['Const']['K_F6']], ['F7', $m['Const']['K_F7']], ['F8', $m['Const']['K_F8']], ['F9', $m['Const']['K_F9']], ['F10', $m['Const']['K_F10']], ['F11', $m['Const']['K_F11']], ['F12', $m['Const']['K_F12']], ['PrintScreen', $m['Const']['K_PRINT']], ['ScrollLock', $m['Const']['K_SCROLLOCK']], ['Pause', $m['Const']['K_PAUSE']], ['Escape', $m['Const']['K_ESCAPE']], ['Unidentified', $m['Const']['K_UNKNOWN']]]);
	$m['_modKey'] = $p['dict']([['Alt', $m['Const']['K_ALT']], ['Control', $m['Const']['K_CTRL']], ['Shift', $m['Const']['K_SHIFT']]]);
	$m['_modKeyCode'] = $p['set']([$m['Const']['K_ALT'], $m['Const']['K_CTRL'], $m['Const']['K_SHIFT']]);
	$m['_specialKey'] = $p['dict']([['ArrowUp', $m['Const']['K_UP']], ['ArrowDown', $m['Const']['K_DOWN']], ['ArrowLeft', $m['Const']['K_LEFT']], ['ArrowRight', $m['Const']['K_RIGHT']], ['Up', $m['Const']['K_UP']], ['Down', $m['Const']['K_DOWN']], ['Left', $m['Const']['K_LEFT']], ['Right', $m['Const']['K_RIGHT']], ['Home', $m['Const']['K_HOME']], ['End', $m['Const']['K_END']], ['PageUp', $m['Const']['K_PAGEUP']], ['PageDown', $m['Const']['K_PAGEDOWN']], ['Backspace', $m['Const']['K_BACKSPACE']], ['Delete', $m['Const']['K_DELETE']], ['Insert', $m['Const']['K_INSERT']], ['Clear', $m['Const']['K_CLEAR']], ['Escape', $m['Const']['K_ESCAPE']], ['Esc', $m['Const']['K_ESCAPE']], ['CapsLock', $m['Const']['K_CAPSLOCK']], ['Meta', $m['Const']['K_LMETA']], ['ContextMenu', $m['Const']['K_MENU']], ['PrintScreen', $m['Const']['K_PRINT']], ['ScrollLock', $m['Const']['K_SCROLLLOCK']], ['Pause', $m['Const']['K_PAUSE']], ['NumLock', $m['Const']['K_NUMLOCK']], ['F1', $m['Const']['K_F1']], ['F2', $m['Const']['K_F2']], ['F3', $m['Const']['K_F3']], ['F4', $m['Const']['K_F4']], ['F5', $m['Const']['K_F5']], ['F6', $m['Const']['K_F6']], ['F7', $m['Const']['K_F7']], ['F8', $m['Const']['K_F8']], ['F9', $m['Const']['K_F9']], ['F10', $m['Const']['K_F10']], ['F11', $m['Const']['K_F11']], ['F12', $m['Const']['K_F12']], ['Alt', $m['Const']['K_ALT']], ['Control', $m['Const']['K_CTRL']], ['Shift', $m['Const']['K_SHIFT']]]);
	$m['_specialKeyCode'] = $p['dict']([[38, $m['Const']['K_UP']], [40, $m['Const']['K_DOWN']], [37, $m['Const']['K_LEFT']], [39, $m['Const']['K_RIGHT']], [36, $m['Const']['K_HOME']], [35, $m['Const']['K_END']], [33, $m['Const']['K_PAGEUP']], [34, $m['Const']['K_PAGEDOWN']], [8, $m['Const']['K_BACKSPACE']], [46, $m['Const']['K_DELETE']], [45, $m['Const']['K_INSERT']], [12, $m['Const']['K_CLEAR']], [13, $m['Const']['K_RETURN']], [9, $m['Const']['K_TAB']], [27, $m['Const']['K_ESCAPE']], [20, $m['Const']['K_CAPSLOCK']], [92, $m['Const']['K_LMETA']], [93, $m['Const']['K_MENU']], [44, $m['Const']['K_PRINT']], [145, $m['Const']['K_SCROLLLOCK']], [19, $m['Const']['K_PAUSE']], [144, $m['Const']['K_NUMLOCK']], [112, $m['Const']['K_F1']], [113, $m['Const']['K_F2']], [114, $m['Const']['K_F3']], [115, $m['Const']['K_F4']], [116, $m['Const']['K_F5']], [117, $m['Const']['K_F6']], [118, $m['Const']['K_F7']], [119, $m['Const']['K_F8']], [120, $m['Const']['K_F9']], [121, $m['Const']['K_F10']], [122, $m['Const']['K_F11']], [123, $m['Const']['K_F12']], [18, $m['Const']['K_ALT']], [17, $m['Const']['K_CTRL']], [16, $m['Const']['K_SHIFT']]]);
	return this;
}; /* end pyjsdl.key */


/* end module: pyjsdl.key */


/*
PYJS_DEPS: ['pyjsdl.env', 'pyjsdl', 'pyjsdl.constants']
*/
