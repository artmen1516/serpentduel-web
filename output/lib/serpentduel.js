/* start module: serpentduel */
$pyjs['loaded_modules']['serpentduel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['serpentduel']['__was_initialized__']) return $pyjs['loaded_modules']['serpentduel'];
	var $m = $pyjs['loaded_modules']['serpentduel'];
	$m['__repr__'] = function() { return '<module: serpentduel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'serpentduel';
	$m['__name__'] = __mod_name__;
	var $eq50,$bool142,$attr483,$eq2,$attr484,$attr8,$attr423,$attr2,$attr424,$attr1,$attr3,$eq1,$attr5,$attr4,$attr7,$bool2,$bool3,$bool1,$bool141,$attr6,$eq49,$cmp1,$cmp2;

	$m['os'] = $p['___import___']('os', null);
	$m['sys'] = $p['___import___']('sys', null);
	if ((($bool1=$p['tuple'](['posix', 'nt', 'os2', 'ce', 'riscos'])['__contains__']($m['os']['$$name'])) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
		$m['pygame'] = $p['___import___']('pygame', null);
		$m['java'] = false;
		$m['js'] = false;
	}
	else if ((($bool2=(($eq1=$m['os']['$$name'])===($eq2='java')&&$eq1===null?true:
		($eq1===null?false:($eq2===null?false:
			((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1['__cmp__']=='function'?$eq1['__cmp__']($eq2) === 0:
				((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2['__cmp__']=='function'?$eq2['__cmp__']($eq1) === 0:
					$eq1==$eq2)))))) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
		$m['pyj2d'] = $p['___import___']('pyj2d', null);
		$m['sys']['modules']['__setitem__']('pygame', $m['pyj2d']);
		$m['pygame'] = $m['pyj2d'];
		$m['java'] = true;
		$m['js'] = false;
	}
	else {
		$m['pygame'] = $p['___import___']('pyjsdl', null, null, false);
		$m['java'] = false;
		$m['js'] = true;
	}
	$m['random'] = $p['___import___']('random', null);
	if ((($bool3=((($cmp1=$m['sys']['version_info'])===($cmp2=$p['tuple']([3]))?0:
		(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
			($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
			$p['cmp']($cmp1, $cmp2))) == -1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
		$m['range'] = $p['xrange'];
	}
	$m['load_images'] = true;
	$m['Matrix'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'serpentduel';
		$method = $pyjs__bind_method2('__init__', function(x, y, screen, background) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				screen = arguments[3];
				background = arguments[4];
			}
			var $attr9,$attr10,$attr20,$attr15,$attr19,$attr18,$attr14,$attr17,$attr16,$attr11,$attr13,$attr12;
			var $tupleassign1 = $p['__ass_unpack']($p['tuple']([x, y]), 2, null);
			self['x'] = $tupleassign1[0];
			self['y'] = $tupleassign1[1];
			self['screen'] = screen;
			self['background'] = background;
			self['clock'] = $m['pygame']['time']['Clock']();
			self['level'] = 2;
			self['speed'] = 2;
			self['mode'] = $p['dict']([['Serpent1', 'AI'], ['Serpent2', 'AI']]);
			self['ctrl'] = $p['dict']([['Pad', 'Serpent1'], ['Key1', 'Serpent1'], ['Key2', null]]);
			self['points'] = $p['dict']([['Serpent1', 0], ['Serpent2', 0]]);
			self['match'] = 0;
			self['auto'] = true;
			self['controls'] = $p['dict']([]);
			self['dirn'] = $p['dict']([]);
			self['dirn']['__setitem__']('U', $p['dict']([['U', 'U'], ['D', 'D'], ['L', 'L'], ['R', 'R']]));
			self['dirn']['__setitem__']('D', $p['dict']([['U', 'D'], ['D', 'U'], ['L', 'R'], ['R', 'L']]));
			self['dirn']['__setitem__']('L', $p['dict']([['U', 'R'], ['D', 'L'], ['L', 'D'], ['R', 'U']]));
			self['dirn']['__setitem__']('R', $p['dict']([['U', 'L'], ['D', 'R'], ['L', 'U'], ['R', 'D']]));
			self['serpent_control'] = self['serpent_control_scr'];
			self['serpent'] = null;
			self['treat'] = null;
			self['treat_obj'] = null;
			self['treat_display'] = false;
			self['treat_event'] = $m['pygame']['USEREVENT'];
			self['update_rect'] = $p['list']([]);
			self['clear_screen']();
			self['active'] = false;
			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['screen'],['background']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('start', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_iter,$iter2_nextval,$iter1_nextval,$iter1_type,serpent,$iter2_idx,$iter1_iter,$attr21,$attr22,$attr23,$attr24,$iter1_array,$bool4,$bool5,$iter2_type,$1,$2,$iter2_array,$iter1_idx;
			self['treat'] = $m['pygame']['sprite']['RenderUpdates']();
			self['serpent'] = $p['dict']([['Serpent1', null], ['Serpent2', null]]);
			$iter1_iter = self['mode'];
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				serpent = $iter1_nextval;
				if ((($bool4=$p['tuple'](['USER', 'AI'])['__contains__']((typeof ($1=self['mode'])['__array'] != 'undefined'?
					((typeof $1['__array'][$2=serpent]) != 'undefined'?$1['__array'][$2]:
						$1['__getitem__']($2)):
						$1['__getitem__'](serpent)))) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					self['serpent_initiate'](serpent);
				}
				else {
					self['match'] = 0;
				}
			}
			self['auto'] = !(($bool5=self['mode']['values']()['__contains__']('USER')) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
				false :
				(typeof $bool5=='object'?
					(typeof $bool5['__nonzero__']=='function'?
						$bool5['__nonzero__']() :
						(typeof $bool5['__len__']=='function'?
							($bool5['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) );
			self['clear_screen']();
			$iter2_iter = self['points'];
			if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter['__iter__']();
				$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				serpent = $iter2_nextval;
				self['points']['__setitem__'](serpent, 0);
			}
			self['treat_add']();
			self['active'] = true;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['start'] = $method;
		$method = $pyjs__bind_method2('clear_screen', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr25,$attr26;
			self['screen']['blit'](self['background'], $p['tuple']([0, 0]));
			self['draw_edge']();
			$m['pygame']['display']['flip']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear_screen'] = $method;
		$method = $pyjs__bind_method2('draw_edge', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr34,$attr40,$attr27,$attr28,$attr29,$iter3_idx,$iter3_array,$iter3_iter,$attr33,$attr32,$attr31,$attr30,$attr37,$attr36,$attr35,$iter3_type,$attr39,$attr38,rect,edge_rect,$iter3_nextval;
			self['edges'] = $p['list']([]);
			$iter3_iter = $p['list']([$p['tuple']([0, 0, self['x'], 5]), $p['tuple']([0, (self['y'])-(5), self['x'], 5]), $p['tuple']([0, 0, 5, self['y']]), $p['tuple']([(self['x'])-(5), 0, 5, (self['y'])-(5)])]);
			if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter['__iter__']();
				$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				rect = $iter3_nextval;
				edge_rect = $m['pygame']['Rect'](rect);
				self['edges']['append']($m['pygame']['draw']['rect'](self['screen'], $p['tuple']([43, 50, 58]), edge_rect, 0));
				self['update_rect']['append'](edge_rect);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['draw_edge'] = $method;
		$method = $pyjs__bind_method2('update_screen', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var serpent,$attr46,$attr47,$attr44,$attr45,$attr42,$attr43,$iter4_type,$attr41,$iter4_iter,$4,$attr48,$attr49,$attr60,$attr61,$attr62,$bool6,$bool7,$8,$6,$7,$bool8,$5,$3,$attr59,$attr58,$attr51,$iter4_nextval,$attr53,$attr52,$attr55,$attr54,$attr57,$attr56,$iter4_idx,$attr50,$iter4_array;
			if ((($bool6=self['treat']) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				self['treat']['clear'](self['screen'], self['background']);
				self['update_rect']['extend'](self['treat']['draw'](self['screen']));
			}
			$iter4_iter = self['serpent'];
			if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter['__iter__']();
				$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				serpent = $iter4_nextval;
				if ((($bool8=!(($bool7=(typeof ($3=self['serpent'])['__array'] != 'undefined'?
					((typeof $3['__array'][$4=serpent]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__'](serpent))) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					continue;
				}
				(typeof ($5=self['serpent'])['__array'] != 'undefined'?
					((typeof $5['__array'][$6=serpent]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__'](serpent))['segments']['clear'](self['screen'], self['background']);
				self['update_rect']['extend']((typeof ($7=self['serpent'])['__array'] != 'undefined'?
					((typeof $7['__array'][$8=serpent]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__'](serpent))['segments']['draw'](self['screen']));
			}
			$m['pygame']['display']['update'](self['update_rect']);
			self['update_rect'] = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['update_screen'] = $method;
		$method = $pyjs__bind_method2('set_active', function(state, pause) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				state = arguments[1];
				pause = arguments[2];
			}
			if (typeof state == 'undefined') state=arguments['callee']['__args__'][3][1];
			if (typeof pause == 'undefined') pause=arguments['callee']['__args__'][4][1];
			var $bool12,$attr64,$attr65,$bool13,$attr63,$bool10,$bool11,$bool9,$attr66;
			if ((($bool9=(state === null)) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				self['active'] = !(($bool10=self['active']) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
					false :
					(typeof $bool10=='object'?
						(typeof $bool10['__nonzero__']=='function'?
							$bool10['__nonzero__']() :
							(typeof $bool10['__len__']=='function'?
								($bool10['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) );
			}
			else {
				self['active'] = state;
			}
			if ((($bool11=self['active']) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
				if ((($bool13=!(($bool12=pause) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
					false :
					(typeof $bool12=='object'?
						(typeof $bool12['__nonzero__']=='function'?
							$bool12['__nonzero__']() :
							(typeof $bool12['__len__']=='function'?
								($bool12['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
					self['start']();
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['state', null],['pause', false]]);
		$cls_definition['set_active'] = $method;
		$method = $pyjs__bind_method2('set_mode', function(serpent, mode) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				serpent = arguments[1];
				mode = arguments[2];
			}
			var $attr67,$attr68;
			self['mode']['__setitem__'](serpent, mode);
			return null;
		}
	, 1, [null,null,['self'],['serpent'],['mode']]);
		$cls_definition['set_mode'] = $method;
		$method = $pyjs__bind_method2('set_control_mode', function(mode) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mode = arguments[1];
			}
			var $attr69,$eq3,$bool14,$bool15,$eq4,$attr70,$eq5,$eq6,$attr71,$attr72;
			if ((($bool14=(($eq3=mode)===($eq4='SCR')&&$eq3===null?true:
				($eq3===null?false:($eq4===null?false:
					((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3['__cmp__']=='function'?$eq3['__cmp__']($eq4) === 0:
						((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4['__cmp__']=='function'?$eq4['__cmp__']($eq3) === 0:
							$eq3==$eq4)))))) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				self['serpent_control'] = self['serpent_control_scr'];
			}
			else if ((($bool15=(($eq5=mode)===($eq6='USR')&&$eq5===null?true:
				($eq5===null?false:($eq6===null?false:
					((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5['__cmp__']=='function'?$eq5['__cmp__']($eq6) === 0:
						((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6['__cmp__']=='function'?$eq6['__cmp__']($eq5) === 0:
							$eq5==$eq6)))))) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				self['serpent_control'] = self['serpent_control_usr'];
			}
			return null;
		}
	, 1, [null,null,['self'],['mode']]);
		$cls_definition['set_control_mode'] = $method;
		$method = $pyjs__bind_method2('set_difficulty', function(level) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				level = arguments[1];
			}
			var $9,$10;
			self['level'] = level;
			self['speed'] = (typeof ($9=$p['dict']([[1, 1], [2, 2], [3, 5], [4, 10]]))['__array'] != 'undefined'?
				((typeof $9['__array'][$10=level]) != 'undefined'?$9['__array'][$10]:
					$9['__getitem__']($10)):
					$9['__getitem__'](level));
			return null;
		}
	, 1, [null,null,['self'],['level']]);
		$cls_definition['set_difficulty'] = $method;
		$method = $pyjs__bind_method2('set_control', function(serpent, control) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				serpent = arguments[1];
				control = arguments[2];
			}
			var $iter5_nextval,$iter5_array,$bool16,$bool17,$iter5_iter,$eq11,$eq10,$iter5_type,$eq12,$attr82,$attr80,$attr81,$attr79,$iter5_idx,$eq8,$eq9,$bool18,$eq7,$11,$12,ctr,$attr78,$attr77,$attr76,$attr75,$attr74,$attr73;
			$iter5_iter = self['ctrl'];
			if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter['__iter__']();
				$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				ctr = $iter5_nextval;
				if ((($bool16=(($eq7=(typeof ($11=self['ctrl'])['__array'] != 'undefined'?
					((typeof $11['__array'][$12=ctr]) != 'undefined'?$11['__array'][$12]:
						$11['__getitem__']($12)):
						$11['__getitem__'](ctr)))===($eq8=serpent)&&$eq7===null?true:
					($eq7===null?false:($eq8===null?false:
						((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7['__cmp__']=='function'?$eq7['__cmp__']($eq8) === 0:
							((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8['__cmp__']=='function'?$eq8['__cmp__']($eq7) === 0:
								$eq7==$eq8)))))) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					self['ctrl']['__setitem__'](ctr, null);
				}
			}
			if ((($bool17=(($eq9=control)===($eq10='Pad/Key1')&&$eq9===null?true:
				($eq9===null?false:($eq10===null?false:
					((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9['__cmp__']=='function'?$eq9['__cmp__']($eq10) === 0:
						((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10['__cmp__']=='function'?$eq10['__cmp__']($eq9) === 0:
							$eq9==$eq10)))))) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				self['ctrl']['__setitem__']('Pad', serpent);
				self['ctrl']['__setitem__']('Key1', serpent);
			}
			else if ((($bool18=!(($eq11=control)===($eq12='-')&&$eq11===null?true:
				($eq11===null?false:($eq12===null?false:
					((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11['__cmp__']=='function'?$eq11['__cmp__']($eq12) === 0:
						((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12['__cmp__']=='function'?$eq12['__cmp__']($eq11) === 0:
							$eq11==$eq12)))))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
				self['ctrl']['__setitem__'](control, serpent);
			}
			return null;
		}
	, 1, [null,null,['self'],['serpent'],['control']]);
		$cls_definition['set_control'] = $method;
		$method = $pyjs__bind_method2('serpent_control_scr', function(direction, ctrl) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				direction = arguments[1];
				ctrl = arguments[2];
			}
			if (typeof ctrl == 'undefined') ctrl=arguments['callee']['__args__'][4][1];
			var $14,$attr83,$attr86,$attr84,$attr85,$16,$13,$pyjs_try_err,$15;
			try {
				(typeof ($15=self['serpent'])['__array'] != 'undefined'?
					((typeof $15['__array'][$16=(typeof ($13=self['ctrl'])['__array'] != 'undefined'?
					((typeof $13['__array'][$14=ctrl]) != 'undefined'?$13['__array'][$14]:
						$13['__getitem__']($14)):
						$13['__getitem__'](ctrl))]) != 'undefined'?$15['__array'][$16]:
						$15['__getitem__']($16)):
						$15['__getitem__']((typeof ($13=self['ctrl'])['__array'] != 'undefined'?
					((typeof $13['__array'][$14=ctrl]) != 'undefined'?$13['__array'][$14]:
						$13['__getitem__']($14)):
						$13['__getitem__'](ctrl))))['control'](direction);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['direction'],['ctrl', 'Pad']]);
		$cls_definition['serpent_control_scr'] = $method;
		$method = $pyjs__bind_method2('serpent_control_usr', function(direction, ctrl) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				direction = arguments[1];
				ctrl = arguments[2];
			}
			if (typeof ctrl == 'undefined') ctrl=arguments['callee']['__args__'][4][1];
			var $22,$28,$attr87,$21,$20,$attr88,$attr89,$25,$24,$27,$26,$pyjs_try_err,$attr96,$attr98,dirn,$attr95,$attr94,$attr97,$17,$attr91,$attr90,$attr93,$attr92,$18,$19,$23;
			try {
				dirn = (typeof ($19=self['serpent'])['__array'] != 'undefined'?
					((typeof $19['__array'][$20=(typeof ($17=self['ctrl'])['__array'] != 'undefined'?
					((typeof $17['__array'][$18=ctrl]) != 'undefined'?$17['__array'][$18]:
						$17['__getitem__']($18)):
						$17['__getitem__'](ctrl))]) != 'undefined'?$19['__array'][$20]:
						$19['__getitem__']($20)):
						$19['__getitem__']((typeof ($17=self['ctrl'])['__array'] != 'undefined'?
					((typeof $17['__array'][$18=ctrl]) != 'undefined'?$17['__array'][$18]:
						$17['__getitem__']($18)):
						$17['__getitem__'](ctrl))))['direction'];
				direction = (typeof ($23=(typeof ($21=self['dirn'])['__array'] != 'undefined'?
					((typeof $21['__array'][$22=dirn]) != 'undefined'?$21['__array'][$22]:
						$21['__getitem__']($22)):
						$21['__getitem__'](dirn)))['__array'] != 'undefined'?
					((typeof $23['__array'][$24=direction]) != 'undefined'?$23['__array'][$24]:
						$23['__getitem__']($24)):
						$23['__getitem__'](direction));
				(typeof ($27=self['serpent'])['__array'] != 'undefined'?
					((typeof $27['__array'][$28=(typeof ($25=self['ctrl'])['__array'] != 'undefined'?
					((typeof $25['__array'][$26=ctrl]) != 'undefined'?$25['__array'][$26]:
						$25['__getitem__']($26)):
						$25['__getitem__'](ctrl))]) != 'undefined'?$27['__array'][$28]:
						$27['__getitem__']($28)):
						$27['__getitem__']((typeof ($25=self['ctrl'])['__array'] != 'undefined'?
					((typeof $25['__array'][$26=ctrl]) != 'undefined'?$25['__array'][$26]:
						$25['__getitem__']($26)):
						$25['__getitem__'](ctrl))))['control'](direction);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['direction'],['ctrl', 'Pad']]);
		$cls_definition['serpent_control_usr'] = $method;
		$method = $pyjs__bind_method2('serpent_initiate', function(identity) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				identity = arguments[1];
			}
			var $bool19,$31,$attr115,$attr117,$eq13,$eq14,$29,$32,$attr106,$attr107,$attr104,$attr105,$attr102,$attr103,$attr100,$attr101,$attr108,$attr109,$attr118,$attr111,$attr110,$attr113,$attr112,$attr99,$attr114,$30,$attr116;
			if ((($bool19=(($eq13=identity)===($eq14='Serpent1')&&$eq13===null?true:
				($eq13===null?false:($eq14===null?false:
					((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13['__cmp__']=='function'?$eq13['__cmp__']($eq14) === 0:
						((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14['__cmp__']=='function'?$eq14['__cmp__']($eq13) === 0:
							$eq13==$eq14)))))) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				self['serpent']['__setitem__']('Serpent1', (typeof Serpent == "undefined"?$m['Serpent']:Serpent)(self, (Math['floor'](self['x']/2))+(50), (Math['floor'](self['y']/3))+(30), identity, self['speed'], (typeof ($29=self['mode'])['__array'] != 'undefined'?
					((typeof $29['__array'][$30='Serpent1']) != 'undefined'?$29['__array'][$30]:
						$29['__getitem__']($30)):
						$29['__getitem__']('Serpent1'))));
			}
			else {
				self['serpent']['__setitem__']('Serpent2', (typeof Serpent == "undefined"?$m['Serpent']:Serpent)(self, (Math['floor'](self['x']/2))-(50), (Math['floor'](self['y']/3))+(30), identity, self['speed'], (typeof ($31=self['mode'])['__array'] != 'undefined'?
					((typeof $31['__array'][$32='Serpent2']) != 'undefined'?$31['__array'][$32]:
						$31['__getitem__']($32)):
						$31['__getitem__']('Serpent2'))));
			}
			return null;
		}
	, 1, [null,null,['self'],['identity']]);
		$cls_definition['serpent_initiate'] = $method;
		$method = $pyjs__bind_method2('treat_add', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr119,$34,$attr120,$33;
			self['treat']['empty']();
			self['treat']['add']((typeof Treat == "undefined"?$m['Treat']:Treat)(self));
			self['treat_obj'] = (typeof ($33=self['treat']['sprites']())['__array'] != 'undefined'?
				((typeof $33['__array'][$34=0]) != 'undefined'?$33['__array'][$34]:
					$33['__getitem__']($34)):
					$33['__getitem__'](0));
			self['treat_display'] = true;
			$m['pygame']['time']['set_timer'](self['treat_event'], 0);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['treat_add'] = $method;
		$method = $pyjs__bind_method2('treat_reset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr121,$attr122,time;
			self['treat']['empty']();
			self['treat_obj'] = null;
			self['treat_display'] = true;
			time = $m['random']['randrange'](50, 1000);
			$m['pygame']['time']['set_timer'](self['treat_event'], time);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['treat_reset'] = $method;
		$method = $pyjs__bind_method2('stop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr123,$attr124;
			self['active'] = false;
			$m['pygame']['time']['set_timer'](self['treat_event'], 0);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['stop'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr153,serpent,$iter6_type,$attr152,$attr161,$iter6_iter,$iter6_nextval,$attr142,$attr143,$attr140,$attr141,$attr146,$attr147,$attr144,$attr145,$attr149,$attr160,$bool30,$attr162,$bool25,$bool24,$bool27,$bool26,$bool21,$attr125,$attr126,$bool22,$attr128,$attr129,$41,$40,$bool29,$bool28,$45,$bool20,$bool23,$iter6_idx,$and1,$and2,$attr127,$43,$iter6_array,$44,$42,$attr155,$attr154,$attr157,$attr156,$attr151,$attr150,$38,$39,$36,$37,$35,$attr159,$attr158,$46,$attr133,$attr132,$attr131,$attr130,$attr137,$attr136,$attr135,$attr134,$attr139,$attr138,$attr148;
			if ((($bool20=self['active']) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				if ((($bool21=self['treat_obj']) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
					self['treat_obj']['update']();
				}
				if ((($bool22=self['treat_display']) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
					self['treat']['clear'](self['screen'], self['background']);
					self['update_rect']['extend'](self['treat']['draw'](self['screen']));
					self['treat_display'] = false;
				}
				$iter6_iter = self['serpent'];
				if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter['__iter__']();
					$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					serpent = $iter6_nextval;
					if ((($bool24=!(($bool23=(typeof ($35=self['serpent'])['__array'] != 'undefined'?
						((typeof $35['__array'][$36=serpent]) != 'undefined'?$35['__array'][$36]:
							$35['__getitem__']($36)):
							$35['__getitem__'](serpent))) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
						false :
						(typeof $bool23=='object'?
							(typeof $bool23['__nonzero__']=='function'?
								$bool23['__nonzero__']() :
								(typeof $bool23['__len__']=='function'?
									($bool23['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
						continue;
					}
					if ((($bool26=!(($bool25=(typeof ($37=self['serpent'])['__array'] != 'undefined'?
						((typeof $37['__array'][$38=serpent]) != 'undefined'?$37['__array'][$38]:
							$37['__getitem__']($38)):
							$37['__getitem__'](serpent))['alive']) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
						false :
						(typeof $bool25=='object'?
							(typeof $bool25['__nonzero__']=='function'?
								$bool25['__nonzero__']() :
								(typeof $bool25['__len__']=='function'?
									($bool25['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
						if ((($bool30=((($bool28=$and1=!(($bool27=self['match']) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
								 true ) )?!(($bool29=self['auto']) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
							false :
							(typeof $bool29=='object'?
								(typeof $bool29['__nonzero__']=='function'?
									$bool29['__nonzero__']() :
									(typeof $bool29['__len__']=='function'?
										($bool29['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) ):$and1)) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
							self['active'] = false;
						}
						else {
							self['serpent_initiate']((typeof ($39=self['serpent'])['__array'] != 'undefined'?
								((typeof $39['__array'][$40=serpent]) != 'undefined'?$39['__array'][$40]:
									$39['__getitem__']($40)):
									$39['__getitem__'](serpent))['identity']);
							self['draw_edge']();
						}
					}
					(typeof ($41=self['serpent'])['__array'] != 'undefined'?
						((typeof $41['__array'][$42=serpent]) != 'undefined'?$41['__array'][$42]:
							$41['__getitem__']($42)):
							$41['__getitem__'](serpent))['update']();
					(typeof ($43=self['serpent'])['__array'] != 'undefined'?
						((typeof $43['__array'][$44=serpent]) != 'undefined'?$43['__array'][$44]:
							$43['__getitem__']($44)):
							$43['__getitem__'](serpent))['segments']['clear'](self['screen'], self['background']);
					self['update_rect']['extend']((typeof ($45=self['serpent'])['__array'] != 'undefined'?
						((typeof $45['__array'][$46=serpent]) != 'undefined'?$45['__array'][$46]:
							$45['__getitem__']($46)):
							$45['__getitem__'](serpent))['segments']['draw'](self['screen']));
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Matrix', $p['tuple']($bases), $data);
	})();
	$m['Serpent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'serpentduel';
		$cls_definition['_segment_spares'] = $p['dict']([['Serpent1', $p['list']([])], ['Serpent2', $p['list']([])]]);
		$method = $pyjs__bind_method2('__init__', function(matrix, x, y, identity, speed, mode) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				matrix = arguments[1];
				x = arguments[2];
				y = arguments[3];
				identity = arguments[4];
				speed = arguments[5];
				mode = arguments[6];
			}
			var $eq15,$eq16,$attr168,$attr164,$attr165,$attr166,$attr167,$attr163,$49,$48,$47,$55,$attr186,$attr184,$attr185,$attr182,$attr183,$attr180,$attr181,$50,$51,$attr169,$attr179,$attr178,$attr177,$attr176,$attr175,$attr174,$attr173,$attr172,$attr171,$attr170,$58,$bool31,$52,$53,$54,$56,$57;
			self['matrix'] = matrix;
			self['identity'] = identity;
			self['mode'] = mode;
			var $tupleassign2 = $p['__ass_unpack']($p['tuple']([x, y]), 2, null);
			self['x'] = $tupleassign2[0];
			self['y'] = $tupleassign2[1];
			self['speed'] = speed;
			self['DIR'] = $p['dict']([['U', $p['tuple']([0, -(1)])], ['D', $p['tuple']([0, 1])], ['L', $p['tuple']([-(1), 0])], ['R', $p['tuple']([1, 0])]]);
			self['DEG'] = $p['dict']([['U', 0], ['D', 180], ['L', 90], ['R', -(90)]]);
			if ((($bool31=(($eq15=self['identity'])===($eq16='Serpent1')&&$eq15===null?true:
				($eq15===null?false:($eq16===null?false:
					((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15['__cmp__']=='function'?$eq15['__cmp__']($eq16) === 0:
						((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16['__cmp__']=='function'?$eq16['__cmp__']($eq15) === 0:
							$eq15==$eq16)))))) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
				self['direction'] = 'R';
			}
			else {
				self['direction'] = 'L';
			}
			self['new_direction'] = null;
			var $tupleassign3 = $p['__ass_unpack']($p['tuple']([0, 0, 0]), 3, null);
			self['step'] = $tupleassign3[0];
			self['growing'] = $tupleassign3[1];
			self['rate'] = $tupleassign3[2];
			self['segments'] = $m['pygame']['sprite']['RenderUpdates']();
			self['segment_spares'] = (typeof ($47=self['_segment_spares'])['__array'] != 'undefined'?
				((typeof $47['__array'][$48=self['identity']]) != 'undefined'?$47['__array'][$48]:
					$47['__getitem__']($48)):
					$47['__getitem__'](self['identity']));
			self['serpent_body'] = $p['dict']([]);
			self['grow'](self['x'], self['y'], (typeof ($49=self['DIR'])['__array'] != 'undefined'?
				((typeof $49['__array'][$50=self['direction']]) != 'undefined'?$49['__array'][$50]:
					$49['__getitem__']($50)):
					$49['__getitem__'](self['direction'])));
			(typeof ($57=self['serpent_body'])['__array'] != 'undefined'?
				((typeof $57['__array'][$58=0]) != 'undefined'?$57['__array'][$58]:
					$57['__getitem__']($58)):
					$57['__getitem__'](0))['image'] = (typeof ($55=(typeof ($53=(typeof ($51=self['serpent_body'])['__array'] != 'undefined'?
				((typeof $51['__array'][$52=0]) != 'undefined'?$51['__array'][$52]:
					$51['__getitem__']($52)):
					$51['__getitem__'](0))['images'])['__array'] != 'undefined'?
				((typeof $53['__array'][$54=(self['identity'])+('_head')]) != 'undefined'?$53['__array'][$54]:
					$53['__getitem__']($54)):
					$53['__getitem__']((self['identity'])+('_head'))))['__array'] != 'undefined'?
				((typeof $55['__array'][$56=self['direction']]) != 'undefined'?$55['__array'][$56]:
					$55['__getitem__']($56)):
					$55['__getitem__'](self['direction']));
			self['scan_rect'] = $m['pygame']['sprite']['Sprite']();
			self['scan_rect']['rect'] = $m['pygame']['Rect'](0, 0, 10, 10);
			self['scan_detect'] = false;
			self['pause'] = 20;
			self['active'] = true;
			self['alive'] = true;
			return null;
		}
	, 1, [null,null,['self'],['matrix'],['x'],['y'],['identity'],['speed'],['mode']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('grow', function(x, y, direction, number) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				direction = arguments[3];
				number = arguments[4];
			}
			if (typeof number == 'undefined') number=arguments['callee']['__args__'][6][1];
			var $attr191,$attr190,$attr193,$attr192,$attr195,$attr194,$attr197,$attr196,$attr199,$attr198,num,$bool33,$attr187,$attr204,$iter7_type,$61,$60,$attr203,$62,$attr188,$attr189,$iter7_iter,$iter7_idx,segment,$iter7_nextval,$attr201,$iter7_array,$attr200,$bool32,$59,$len1,$attr202;
			$iter7_iter = $m['range'](0, (number)*(10), 10);
			if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter['__iter__']();
				$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				num = $iter7_nextval;
				if ((($bool33=!(($bool32=self['segment_spares']) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
					false :
					(typeof $bool32=='object'?
						(typeof $bool32['__nonzero__']=='function'?
							$bool32['__nonzero__']() :
							(typeof $bool32['__len__']=='function'?
								($bool32['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
					self['segment_spares']['append']((typeof Segment == "undefined"?$m['Segment']:Segment)(self['identity'], $p['tuple']([0, 0])));
				}
				segment = self['segment_spares']['pop']();
				var $tupleassign4 = $p['__ass_unpack']($p['tuple']([(x)-(((typeof ($59=direction)['__array'] != 'undefined'?
					((typeof $59['__array'][$60=0]) != 'undefined'?$59['__array'][$60]:
						$59['__getitem__']($60)):
						$59['__getitem__'](0)))*(num)), (y)-(((typeof ($61=direction)['__array'] != 'undefined'?
					((typeof $61['__array'][$62=1]) != 'undefined'?$61['__array'][$62]:
						$61['__getitem__']($62)):
						$61['__getitem__'](1)))*(num))]), 2, null);
				segment['x'] = $tupleassign4[0];
				segment['y'] = $tupleassign4[1];
				var $tupleassign5 = $p['__ass_unpack']($p['tuple']([segment['x'], segment['y']]), 2, null);
				segment['x_pre'] = $tupleassign5[0];
				segment['y_pre'] = $tupleassign5[1];
				segment['rect']['__setattr__']('center', $p['tuple']([segment['x'], segment['y']]));
				segment['direction'] = direction;
				segment['speed'] = self['speed'];
				self['segments']['add'](segment);
				self['serpent_body']['__setitem__']((($len1=self['serpent_body']) === null?0:
					(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'?$len1['length']:
								$p['len']($len1))))), segment);
			}
			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['direction'],['number', 5]]);
		$cls_definition['grow'] = $method;
		$method = $pyjs__bind_method2('control', function(direction) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				direction = arguments[1];
			}
			var $iter8_idx,$and4,$and3,$iter8_array,dirn,$iter8_iter,$iter8_nextval,$bool34,$bool35,$attr205,$attr206,$iter8_type;
			$iter8_iter = $p['tuple']([$p['tuple'](['L', 'R']), $p['tuple'](['U', 'D'])]);
			if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
				$iter8_type = 0;
			} else {
				$iter8_iter = $iter8_iter['__iter__']();
				$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter8_idx = 0;
			while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
				dirn = $iter8_nextval;
				if ((($bool35=((($bool34=$and3=dirn['__contains__'](direction)) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
					false :
					(typeof $bool34=='object'?
						(typeof $bool34['__nonzero__']=='function'?
							$bool34['__nonzero__']() :
							(typeof $bool34['__len__']=='function'?
								($bool34['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!dirn['__contains__'](self['direction']):$and3)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
					self['new_direction'] = direction;
					self['last_move'] = direction;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['direction']]);
		$cls_definition['control'] = $method;
		$method = $pyjs__bind_method2('move', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr234,$attr235,$attr236,$attr237,$attr230,$attr231,$attr232,$attr233,$69,$attr238,$attr239,$eq18,$73,$attr240,$eq17,$iter9_iter,$iter9_nextval,$iter9_idx,$attr209,$attr208,$65,$len2,$attr207,$66,$iter9_type,$63,$68,$attr227,$attr226,$attr225,$attr224,$attr223,$attr222,$attr221,$attr220,$attr229,$attr228,$64,$bool38,$77,$72,$cmp4,$70,$71,$76,$74,$cmp3,$75,i,$78,$attr217,$attr218,$attr219,$bool36,$bool37,$67,$attr212,$attr213,$attr210,$attr211,$attr216,$iter9_array,$attr214,$attr215;
			if ((($bool36=(($eq17=self['mode'])===($eq18='AI')&&$eq17===null?true:
				($eq17===null?false:($eq18===null?false:
					((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17['__cmp__']=='function'?$eq17['__cmp__']($eq18) === 0:
						((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18['__cmp__']=='function'?$eq18['__cmp__']($eq17) === 0:
							$eq17==$eq18)))))) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
				self['move_auto']();
			}
			self['step'] += 1;
			if ((($bool37=((((($cmp3=self['step'])===($cmp4=(10)/(self['speed']))?0:
				(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
					($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
					$p['cmp']($cmp3, $cmp4))))|1) == 1)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
				$iter9_iter = $m['range'](((($len2=self['serpent_body']) === null?0:
					(typeof $len2['__array'] != 'undefined' ? $len2['__array']['length']:
						(typeof $len2['__len__'] == 'function'?$len2['__len__']():
							(typeof $len2['length'] != 'undefined'?$len2['length']:
								$p['len']($len2))))))-(1), 0, -(1));
				if (typeof ($iter9_array = $iter9_iter['__array']) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter['__iter__']();
					$iter9_type = typeof ($iter9_array = $iter9_iter['__array']) != 'undefined'? 0 : (typeof $iter9_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					i = $iter9_nextval;
					(typeof ($65=self['serpent_body'])['__array'] != 'undefined'?
						((typeof $65['__array'][$66=i]) != 'undefined'?$65['__array'][$66]:
							$65['__getitem__']($66)):
							$65['__getitem__'](i))['direction'] = (typeof ($63=self['serpent_body'])['__array'] != 'undefined'?
						((typeof $63['__array'][$64=(i)-(1)]) != 'undefined'?$63['__array'][$64]:
							$63['__getitem__']($64)):
							$63['__getitem__']((i)-(1)))['direction'];
				}
				if ((($bool38=self['new_direction']) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
					self['direction'] = self['new_direction'];
					(typeof ($69=self['serpent_body'])['__array'] != 'undefined'?
						((typeof $69['__array'][$70=0]) != 'undefined'?$69['__array'][$70]:
							$69['__getitem__']($70)):
							$69['__getitem__'](0))['direction'] = (typeof ($67=self['DIR'])['__array'] != 'undefined'?
						((typeof $67['__array'][$68=self['direction']]) != 'undefined'?$67['__array'][$68]:
							$67['__getitem__']($68)):
							$67['__getitem__'](self['direction']));
					(typeof ($77=self['serpent_body'])['__array'] != 'undefined'?
						((typeof $77['__array'][$78=0]) != 'undefined'?$77['__array'][$78]:
							$77['__getitem__']($78)):
							$77['__getitem__'](0))['image'] = (typeof ($75=(typeof ($73=(typeof ($71=self['serpent_body'])['__array'] != 'undefined'?
						((typeof $71['__array'][$72=0]) != 'undefined'?$71['__array'][$72]:
							$71['__getitem__']($72)):
							$71['__getitem__'](0))['images'])['__array'] != 'undefined'?
						((typeof $73['__array'][$74=(self['identity'])+('_head')]) != 'undefined'?$73['__array'][$74]:
							$73['__getitem__']($74)):
							$73['__getitem__']((self['identity'])+('_head'))))['__array'] != 'undefined'?
						((typeof $75['__array'][$76=self['direction']]) != 'undefined'?$75['__array'][$76]:
							$75['__getitem__']($76)):
							$75['__getitem__'](self['direction']));
					self['new_direction'] = null;
				}
				self['step'] = 0;
			}
			self['segments']['update']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['move'] = $method;
		$method = $pyjs__bind_method2('move_auto', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $cmp20,$iter11_idx,$iter13_array,$and8,$and9,$iter12_array,collide,$and6,$and7,$iter11_array,$iter13_nextval,$attr292,$attr293,$attr290,$attr291,$attr296,$attr297,$attr294,$attr295,$attr298,$attr299,x,$attr278,$attr279,$attr270,$attr271,$attr272,$attr273,$attr274,direct,$attr276,$attr277,$attr268,$attr300,$attr285,$attr284,$attr287,$attr286,$attr281,$attr280,$attr283,$attr282,$attr289,$attr288,$bool47,$bool46,$attr269,$bool44,$bool43,$iter11_iter,$attr267,$attr266,$bool49,$bool48,$attr265,$cmp15,$and13,$iter11_type,$and10,$cmp16,$and14,$iter12_idx,$iter12_nextval,$bool54,$bool55,$bool56,$bool57,$bool50,$bool51,$bool52,$bool53,$94,$95,$96,$bool58,$bool59,$93,$iter13_idx,$bool45,treat,$iter13_type,$bool61,$bool60,direction,$bool62,$bool65,$bool64,new_direction,$attr275,$iter13_iter,$iter12_iter,$bool63,$and5,$and12,$cmp14,$cmp17,$and11,$cmp11,$cmp10,$cmp13,$cmp12,$iter11_nextval,$cmp19,$cmp18,$cmp5,$cmp7,$cmp6,$iter12_type,$cmp9,$cmp8,y;
			collide = function(direction) {
				var $iter10_nextval,serpent,$attr259,$attr256,$attr257,$attr254,$attr255,$attr252,$attr243,$attr250,$attr251,$eq19,$attr263,$iter10_iter,collide,$bool42,$bool41,$attr258,$89,$attr260,$iter10_idx,$88,$87,$90,$86,$attr261,$bool40,$attr241,$attr242,$attr245,$attr244,$attr247,$attr246,$attr249,$attr248,$85,$84,$83,$82,$81,$80,$eq20,$91,$92,$attr264,$attr262,$79,$iter10_array,$attr253,$iter10_type,$bool39;
				direction = (typeof ($79=self['DIR'])['__array'] != 'undefined'?
					((typeof $79['__array'][$80=direction]) != 'undefined'?$79['__array'][$80]:
						$79['__getitem__']($80)):
						$79['__getitem__'](direction));
				self['scan_rect']['rect']['x'] = (((typeof ($81=self['serpent_body'])['__array'] != 'undefined'?
					((typeof $81['__array'][$82=0]) != 'undefined'?$81['__array'][$82]:
						$81['__getitem__']($82)):
						$81['__getitem__'](0))['x'])+(((typeof ($83=direction)['__array'] != 'undefined'?
					((typeof $83['__array'][$84=0]) != 'undefined'?$83['__array'][$84]:
						$83['__getitem__']($84)):
						$83['__getitem__'](0)))*(10)))-(Math['floor'](self['scan_rect']['rect']['width']/2));
				self['scan_rect']['rect']['y'] = (((typeof ($85=self['serpent_body'])['__array'] != 'undefined'?
					((typeof $85['__array'][$86=0]) != 'undefined'?$85['__array'][$86]:
						$85['__getitem__']($86)):
						$85['__getitem__'](0))['y'])+(((typeof ($87=direction)['__array'] != 'undefined'?
					((typeof $87['__array'][$88=1]) != 'undefined'?$87['__array'][$88]:
						$87['__getitem__']($88)):
						$87['__getitem__'](1)))*(10)))-(Math['floor'](self['scan_rect']['rect']['height']/2));
				collide = false;
				$iter10_iter = self['matrix']['serpent'];
				if (typeof ($iter10_array = $iter10_iter['__array']) != 'undefined') {
					$iter10_type = 0;
				} else {
					$iter10_iter = $iter10_iter['__iter__']();
					$iter10_type = typeof ($iter10_array = $iter10_iter['__array']) != 'undefined'? 0 : (typeof $iter10_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter10_idx = 0;
				while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
					serpent = $iter10_nextval;
					if ((($bool40=!(($bool39=(typeof ($89=self['matrix']['serpent'])['__array'] != 'undefined'?
						((typeof $89['__array'][$90=serpent]) != 'undefined'?$89['__array'][$90]:
							$89['__getitem__']($90)):
							$89['__getitem__'](serpent))) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
						false :
						(typeof $bool39=='object'?
							(typeof $bool39['__nonzero__']=='function'?
								$bool39['__nonzero__']() :
								(typeof $bool39['__len__']=='function'?
									($bool39['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
						continue;
					}
					if ((($bool41=$m['pygame']['sprite']['spritecollideany'](self['scan_rect'], (typeof ($91=self['matrix']['serpent'])['__array'] != 'undefined'?
						((typeof $91['__array'][$92=serpent]) != 'undefined'?$91['__array'][$92]:
							$91['__getitem__']($92)):
							$91['__getitem__'](serpent))['segments'])) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
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
						collide = true;
						return collide;
					}
				}
				if ((($bool42=!(($eq19=self['scan_rect']['rect']['collidelist'](self['matrix']['edges']))===($eq20=-(1))&&$eq19===null?true:
					($eq19===null?false:($eq20===null?false:
						((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19['__cmp__']=='function'?$eq19['__cmp__']($eq20) === 0:
							((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20['__cmp__']=='function'?$eq20['__cmp__']($eq19) === 0:
								$eq19==$eq20)))))) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
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
					collide = true;
					return collide;
				}
				return collide;
			};
			collide['__name__'] = 'collide';

			collide['__bind_type__'] = 0;
			collide['__args__'] = [null,null,['direction']];
			treat = self['matrix']['treat_obj'];
			if ((($bool45=((($bool43=$and5=treat) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
				false :
				(typeof $bool43=='object'?
					(typeof $bool43['__nonzero__']=='function'?
						$bool43['__nonzero__']() :
						(typeof $bool43['__len__']=='function'?
							($bool43['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!(($bool44=self['new_direction']) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
				false :
				(typeof $bool44=='object'?
					(typeof $bool44['__nonzero__']=='function'?
						$bool44['__nonzero__']() :
						(typeof $bool44['__len__']=='function'?
							($bool44['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ):$and5)) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
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
				var $tupleassign6 = $p['__ass_unpack']($p['tuple']([(typeof ($93=self['serpent_body'])['__array'] != 'undefined'?
					((typeof $93['__array'][$94=0]) != 'undefined'?$93['__array'][$94]:
						$93['__getitem__']($94)):
						$93['__getitem__'](0))['x'], (typeof ($95=self['serpent_body'])['__array'] != 'undefined'?
					((typeof $95['__array'][$96=0]) != 'undefined'?$95['__array'][$96]:
						$95['__getitem__']($96)):
						$95['__getitem__'](0))['y']]), 2, null);
				x = $tupleassign6[0];
				y = $tupleassign6[1];
				if ((($bool47=((($bool46=$and7=((($cmp5=x)===($cmp6=treat['x'])?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) < 1)) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
					false :
					(typeof $bool46=='object'?
						(typeof $bool46['__nonzero__']=='function'?
							$bool46['__nonzero__']() :
							(typeof $bool46['__len__']=='function'?
								($bool46['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp7=y)===($cmp8=treat['y'])?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) < 1):$and7)) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
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
					direct = $p['tuple'](['R', 'D']);
				}
				else if ((($bool49=((($bool48=$and9=((($cmp9=x)===($cmp10=treat['x'])?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))) < 1)) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
					false :
					(typeof $bool48=='object'?
						(typeof $bool48['__nonzero__']=='function'?
							$bool48['__nonzero__']() :
							(typeof $bool48['__len__']=='function'?
								($bool48['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((((($cmp11=y)===($cmp12=treat['y'])?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))))|1) == 1):$and9)) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
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
					direct = $p['tuple'](['R', 'U']);
				}
				else if ((($bool51=((($bool50=$and11=((((($cmp13=x)===($cmp14=treat['x'])?0:
					(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
						($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
						$p['cmp']($cmp13, $cmp14))))|1) == 1)) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
					false :
					(typeof $bool50=='object'?
						(typeof $bool50['__nonzero__']=='function'?
							$bool50['__nonzero__']() :
							(typeof $bool50['__len__']=='function'?
								($bool50['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp15=y)===($cmp16=treat['y'])?0:
					(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
						($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
						$p['cmp']($cmp15, $cmp16))) < 1):$and11)) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
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
					direct = $p['tuple'](['L', 'D']);
				}
				else if ((($bool53=((($bool52=$and13=((((($cmp17=x)===($cmp18=treat['x'])?0:
					(typeof $cmp17==typeof $cmp18 && ((typeof $cmp17 == 'number')||(typeof $cmp17 == 'string')||(typeof $cmp17 == 'boolean'))?
						($cmp17 == $cmp18 ? 0 : ($cmp17 < $cmp18 ? -1 : 1)):
						$p['cmp']($cmp17, $cmp18))))|1) == 1)) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
					false :
					(typeof $bool52=='object'?
						(typeof $bool52['__nonzero__']=='function'?
							$bool52['__nonzero__']() :
							(typeof $bool52['__len__']=='function'?
								($bool52['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((((($cmp19=y)===($cmp20=treat['y'])?0:
					(typeof $cmp19==typeof $cmp20 && ((typeof $cmp19 == 'number')||(typeof $cmp19 == 'string')||(typeof $cmp19 == 'boolean'))?
						($cmp19 == $cmp20 ? 0 : ($cmp19 < $cmp20 ? -1 : 1)):
						$p['cmp']($cmp19, $cmp20))))|1) == 1):$and13)) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
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
					direct = $p['tuple'](['L', 'U']);
				}
				if ((($bool54=!direct['__contains__'](self['direction'])) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
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
					new_direction = $p['list']([]);
					$iter11_iter = direct;
					if (typeof ($iter11_array = $iter11_iter['__array']) != 'undefined') {
						$iter11_type = 0;
					} else {
						$iter11_iter = $iter11_iter['__iter__']();
						$iter11_type = typeof ($iter11_array = $iter11_iter['__array']) != 'undefined'? 0 : (typeof $iter11_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter11_idx = 0;
					while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
						direction = $iter11_nextval;
						if ((($bool56=!(($bool55=collide(direction)) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
							false :
							(typeof $bool55=='object'?
								(typeof $bool55['__nonzero__']=='function'?
									$bool55['__nonzero__']() :
									(typeof $bool55['__len__']=='function'?
										($bool55['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
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
							new_direction['append'](direction);
						}
					}
					if ((($bool57=new_direction) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
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
						self['control']($m['random']['choice'](new_direction));
					}
				}
			}
			if ((($bool58=collide(self['direction'])) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
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
				self['new_direction'] = null;
				new_direction = $p['list']([]);
				if ((($bool59=$p['tuple'](['U', 'D'])['__contains__'](self['direction'])) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
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
					$iter12_iter = $p['tuple'](['L', 'R']);
					if (typeof ($iter12_array = $iter12_iter['__array']) != 'undefined') {
						$iter12_type = 0;
					} else {
						$iter12_iter = $iter12_iter['__iter__']();
						$iter12_type = typeof ($iter12_array = $iter12_iter['__array']) != 'undefined'? 0 : (typeof $iter12_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter12_idx = 0;
					while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
						direction = $iter12_nextval;
						if ((($bool61=!(($bool60=collide(direction)) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
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
							new_direction['append'](direction);
						}
					}
				}
				else if ((($bool62=$p['tuple'](['L', 'R'])['__contains__'](self['direction'])) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
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
					$iter13_iter = $p['tuple'](['U', 'D']);
					if (typeof ($iter13_array = $iter13_iter['__array']) != 'undefined') {
						$iter13_type = 0;
					} else {
						$iter13_iter = $iter13_iter['__iter__']();
						$iter13_type = typeof ($iter13_array = $iter13_iter['__array']) != 'undefined'? 0 : (typeof $iter13_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter13_idx = 0;
					while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
						direction = $iter13_nextval;
						if ((($bool64=!(($bool63=collide(direction)) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
							false :
							(typeof $bool63=='object'?
								(typeof $bool63['__nonzero__']=='function'?
									$bool63['__nonzero__']() :
									(typeof $bool63['__len__']=='function'?
										($bool63['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
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
							new_direction['append'](direction);
						}
					}
				}
				if ((($bool65=new_direction) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
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
					self['control']($m['random']['choice'](new_direction));
				}
				self['scan_detect'] = true;
			}
			else {
				self['scan_detect'] = false;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['move_auto'] = $method;
		$method = $pyjs__bind_method2('growth', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $cmp21,$cmp22,$cmp23,$cmp24,$cmp25,$cmp26,$cmp27,$cmp28,$attr313,$attr312,tail,$eq21,$eq23,$eq22,$eq24,$cmp30,$attr348,$cmp29,$109,$108,$attr304,$attr305,$attr306,$attr307,$attr301,$attr302,$attr303,$attr308,$attr309,$attr317,$attr316,$attr315,$attr314,$98,$99,$attr311,$attr310,$97,$attr319,$attr318,treat,$bool67,$bool66,$bool69,$bool68,$len6,$len4,$len5,$len3,$110,$bool76,$bool74,$bool75,$bool72,$bool73,$bool70,$bool71,$attr328,$attr329,$attr322,$attr323,$attr320,$attr321,$attr326,$attr327,$attr324,$attr325,$101,$100,$103,$102,$105,$104,$107,$106,$attr340,$attr341,$attr342,$attr343,$attr344,$attr345,$attr346,$attr347,$and16,$and15,points,$attr339,$attr338,$attr335,$attr334,$attr337,$attr336,$attr331,$attr330,$attr333,$attr332;
			if ((($bool66=$m['pygame']['sprite']['spritecollide']((typeof ($97=self['serpent_body'])['__array'] != 'undefined'?
				((typeof $97['__array'][$98=0]) != 'undefined'?$97['__array'][$98]:
					$97['__getitem__']($98)):
					$97['__getitem__'](0)), self['matrix']['treat'], false, $m['pygame']['sprite']['collide_mask'])) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
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
				points = 0;
				treat = (typeof ($99=function(){
					var $iter14_array,$iter14_type,$collcomp1,treat,$iter14_iter,$iter14_idx,$iter14_nextval;
	$collcomp1 = $p['list']();
				$iter14_iter = self['matrix']['treat'];
				if (typeof ($iter14_array = $iter14_iter['__array']) != 'undefined') {
					$iter14_type = 0;
				} else {
					$iter14_iter = $iter14_iter['__iter__']();
					$iter14_type = typeof ($iter14_array = $iter14_iter['__array']) != 'undefined'? 0 : (typeof $iter14_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter14_idx = 0;
				while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
					treat = $iter14_nextval;
					$collcomp1['append'](treat);
				}

	return $collcomp1;}())['__array'] != 'undefined'?
					((typeof $99['__array'][$100=0]) != 'undefined'?$99['__array'][$100]:
						$99['__getitem__']($100)):
						$99['__getitem__'](0));
				if ((($bool67=(($eq21=treat['identity'])===($eq22='Food')&&$eq21===null?true:
					($eq21===null?false:($eq22===null?false:
						((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21['__cmp__']=='function'?$eq21['__cmp__']($eq22) === 0:
							((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22['__cmp__']=='function'?$eq22['__cmp__']($eq21) === 0:
								$eq21==$eq22)))))) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
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
					if ((($bool68=((((($cmp21=self['growing'])===($cmp22=0)?0:
						(typeof $cmp21==typeof $cmp22 && ((typeof $cmp21 == 'number')||(typeof $cmp21 == 'string')||(typeof $cmp21 == 'boolean'))?
							($cmp21 == $cmp22 ? 0 : ($cmp21 < $cmp22 ? -1 : 1)):
							$p['cmp']($cmp21, $cmp22))))|1) == 1)) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
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
						self['growing'] += 5;
					}
					else {
						points += 5;
					}
				}
				else if ((($bool69=(($eq23=treat['identity'])===($eq24='Bonus')&&$eq23===null?true:
					($eq23===null?false:($eq24===null?false:
						((typeof $eq23=='object'||typeof $eq23=='function')&&typeof $eq23['__cmp__']=='function'?$eq23['__cmp__']($eq24) === 0:
							((typeof $eq24=='object'||typeof $eq24=='function')&&typeof $eq24['__cmp__']=='function'?$eq24['__cmp__']($eq23) === 0:
								$eq23==$eq24)))))) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
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
					if ((($bool71=((($bool70=$and15=((($cmp23=(($len3=self['serpent_body']) === null?0:
						(typeof $len3['__array'] != 'undefined' ? $len3['__array']['length']:
							(typeof $len3['__len__'] == 'function'?$len3['__len__']():
								(typeof $len3['length'] != 'undefined'?$len3['length']:
									$p['len']($len3))))))===($cmp24=5)?0:
						(typeof $cmp23==typeof $cmp24 && ((typeof $cmp23 == 'number')||(typeof $cmp23 == 'string')||(typeof $cmp23 == 'boolean'))?
							($cmp23 == $cmp24 ? 0 : ($cmp23 < $cmp24 ? -1 : 1)):
							$p['cmp']($cmp23, $cmp24))) == 1)) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
						false :
						(typeof $bool70=='object'?
							(typeof $bool70['__nonzero__']=='function'?
								$bool70['__nonzero__']() :
								(typeof $bool70['__len__']=='function'?
									($bool70['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((((($cmp25=self['growing'])===($cmp26=0)?0:
						(typeof $cmp25==typeof $cmp26 && ((typeof $cmp25 == 'number')||(typeof $cmp25 == 'string')||(typeof $cmp25 == 'boolean'))?
							($cmp25 == $cmp26 ? 0 : ($cmp25 < $cmp26 ? -1 : 1)):
							$p['cmp']($cmp25, $cmp26))))|1) == 1):$and15)) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
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
						self['growing'] = -(((($len4=self['serpent_body']) === null?0:
							(typeof $len4['__array'] != 'undefined' ? $len4['__array']['length']:
								(typeof $len4['__len__'] == 'function'?$len4['__len__']():
									(typeof $len4['length'] != 'undefined'?$len4['length']:
										$p['len']($len4))))))-(5));
						self['rate'] = 0;
					}
					points += 10;
				}
				if ((($bool72=points) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
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
					self['set_points'](points);
				}
				self['matrix']['treat_reset']();
			}
			if ((($bool73=self['growing']) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
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
				self['rate'] += 1;
				if ((($bool74=((($cmp27=self['rate'])===($cmp28=(10)/(self['speed']))?0:
					(typeof $cmp27==typeof $cmp28 && ((typeof $cmp27 == 'number')||(typeof $cmp27 == 'string')||(typeof $cmp27 == 'boolean'))?
						($cmp27 == $cmp28 ? 0 : ($cmp27 < $cmp28 ? -1 : 1)):
						$p['cmp']($cmp27, $cmp28))) == 1)) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
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
					points = 0;
					if ((($bool75=((($cmp29=self['growing'])===($cmp30=0)?0:
						(typeof $cmp29==typeof $cmp30 && ((typeof $cmp29 == 'number')||(typeof $cmp29 == 'string')||(typeof $cmp29 == 'boolean'))?
							($cmp29 == $cmp30 ? 0 : ($cmp29 < $cmp30 ? -1 : 1)):
							$p['cmp']($cmp29, $cmp30))) == 1)) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
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
						tail = (typeof ($101=self['serpent_body'])['__array'] != 'undefined'?
							((typeof $101['__array'][$102=((($len5=self['serpent_body']) === null?0:
							(typeof $len5['__array'] != 'undefined' ? $len5['__array']['length']:
								(typeof $len5['__len__'] == 'function'?$len5['__len__']():
									(typeof $len5['length'] != 'undefined'?$len5['length']:
										$p['len']($len5))))))-(1)]) != 'undefined'?$101['__array'][$102]:
								$101['__getitem__']($102)):
								$101['__getitem__'](((($len5=self['serpent_body']) === null?0:
							(typeof $len5['__array'] != 'undefined' ? $len5['__array']['length']:
								(typeof $len5['__len__'] == 'function'?$len5['__len__']():
									(typeof $len5['length'] != 'undefined'?$len5['length']:
										$p['len']($len5))))))-(1)));
						$pyjs_kwargs_call(self, 'grow', null, null, [{'number':1}, (tail['x'])-(((typeof ($103=tail['direction'])['__array'] != 'undefined'?
							((typeof $103['__array'][$104=0]) != 'undefined'?$103['__array'][$104]:
								$103['__getitem__']($104)):
								$103['__getitem__'](0)))*(10)), (tail['y'])-(((typeof ($105=tail['direction'])['__array'] != 'undefined'?
							((typeof $105['__array'][$106=1]) != 'undefined'?$105['__array'][$106]:
								$105['__getitem__']($106)):
								$105['__getitem__'](1)))*(10)), tail['direction']]);
						self['growing'] -= 1;
						points += 1;
					}
					else {
						tail = ((($len6=self['serpent_body']) === null?0:
							(typeof $len6['__array'] != 'undefined' ? $len6['__array']['length']:
								(typeof $len6['__len__'] == 'function'?$len6['__len__']():
									(typeof $len6['length'] != 'undefined'?$len6['length']:
										$p['len']($len6))))))-(1);
						self['segment_spares']['append']((typeof ($107=self['serpent_body'])['__array'] != 'undefined'?
							((typeof $107['__array'][$108=tail]) != 'undefined'?$107['__array'][$108]:
								$107['__getitem__']($108)):
								$107['__getitem__'](tail)));
						self['segments']['remove']((typeof ($109=self['serpent_body'])['__array'] != 'undefined'?
							((typeof $109['__array'][$110=tail]) != 'undefined'?$109['__array'][$110]:
								$109['__getitem__']($110)):
								$109['__getitem__'](tail)));
						self['serpent_body']['__delitem__'](tail);
						self['growing'] += 1;
						points += 1;
					}
					self['rate'] = 0;
					if ((($bool76=points) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
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
						self['set_points'](points);
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['growth'] = $method;
		$method = $pyjs__bind_method2('set_points', function(points) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				points = arguments[1];
			}
			var $attr359,$attr358,$112,$113,$bool78,$111,$attr353,$attr352,$attr351,$attr350,$attr357,$attr356,$attr355,$attr354,$and20,$bool82,$bool81,$bool80,$bool79,$bool77,$augexpr1,$attr349,$attr364,$attr362,$attr363,$augsub1,$attr361,$and17,$and18,$and19,$attr360,$cmp32,$cmp31,$114;
			var $augsub1 = self['identity'];
			var $augexpr1 = self['matrix']['points'];
			$augexpr1['__setitem__']($augsub1, ((typeof ($111=$augexpr1)['__array'] != 'undefined'?
				((typeof $111['__array'][$112=$augsub1]) != 'undefined'?$111['__array'][$112]:
					$111['__getitem__']($112)):
					$111['__getitem__']($augsub1)))+(points));
			if ((($bool79=((($bool77=$and17=self['matrix']['match']) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
				false :
				(typeof $bool77=='object'?
					(typeof $bool77['__nonzero__']=='function'?
						$bool77['__nonzero__']() :
						(typeof $bool77['__len__']=='function'?
							($bool77['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!(($bool78=self['matrix']['auto']) === null || $bool78 === false || $bool78 === 0 || $bool78 === '' ?
				false :
				(typeof $bool78=='object'?
					(typeof $bool78['__nonzero__']=='function'?
						$bool78['__nonzero__']() :
						(typeof $bool78['__len__']=='function'?
							($bool78['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ):$and17)) === null || $bool79 === false || $bool79 === 0 || $bool79 === '' ?
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
				if ((($bool82=((($bool80=$and19=((((($cmp31=(typeof ($113=self['matrix']['points'])['__array'] != 'undefined'?
					((typeof $113['__array'][$114=self['identity']]) != 'undefined'?$113['__array'][$114]:
						$113['__getitem__']($114)):
						$113['__getitem__'](self['identity'])))===($cmp32=self['matrix']['match'])?0:
					(typeof $cmp31==typeof $cmp32 && ((typeof $cmp31 == 'number')||(typeof $cmp31 == 'string')||(typeof $cmp31 == 'boolean'))?
						($cmp31 == $cmp32 ? 0 : ($cmp31 < $cmp32 ? -1 : 1)):
						$p['cmp']($cmp31, $cmp32))))|1) == 1)) === null || $bool80 === false || $bool80 === 0 || $bool80 === '' ?
					false :
					(typeof $bool80=='object'?
						(typeof $bool80['__nonzero__']=='function'?
							$bool80['__nonzero__']() :
							(typeof $bool80['__len__']=='function'?
								($bool80['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!(($bool81=self['growing']) === null || $bool81 === false || $bool81 === 0 || $bool81 === '' ?
					false :
					(typeof $bool81=='object'?
						(typeof $bool81['__nonzero__']=='function'?
							$bool81['__nonzero__']() :
							(typeof $bool81['__len__']=='function'?
								($bool81['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ):$and19)) === null || $bool82 === false || $bool82 === 0 || $bool82 === '' ?
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
					self['matrix']['set_active'](false);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['points']]);
		$cls_definition['set_points'] = $method;
		$method = $pyjs__bind_method2('collision', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $116,$attr370,$attr373,$115,$attr375,$attr374,serpent,$117,$attr379,$attr378,$118,$119,$iter16_idx,$attr372,$eq28,$and22,$and21,$iter16_iter,$bool83,$bool87,$iter15_iter,$bool85,$bool84,$attr384,$attr376,$attr380,$attr381,$attr382,$attr383,$iter16_nextval,$124,$iter15_array,$attr368,$attr369,$attr366,$attr367,$attr371,$attr365,$bool88,$eq25,$eq27,$eq26,$123,$122,$121,$120,segment,$126,$125,$bool86,$iter16_array,$iter16_type,$iter15_idx,$iter15_nextval,$iter15_type,$bool89,$attr377;
			if ((($bool85=((($bool83=$and21=(($eq25=self['mode'])===($eq26='AI')&&$eq25===null?true:
				($eq25===null?false:($eq26===null?false:
					((typeof $eq25=='object'||typeof $eq25=='function')&&typeof $eq25['__cmp__']=='function'?$eq25['__cmp__']($eq26) === 0:
						((typeof $eq26=='object'||typeof $eq26=='function')&&typeof $eq26['__cmp__']=='function'?$eq26['__cmp__']($eq25) === 0:
							$eq25==$eq26)))))) === null || $bool83 === false || $bool83 === 0 || $bool83 === '' ?
				false :
				(typeof $bool83=='object'?
					(typeof $bool83['__nonzero__']=='function'?
						$bool83['__nonzero__']() :
						(typeof $bool83['__len__']=='function'?
							($bool83['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?!(($bool84=self['scan_detect']) === null || $bool84 === false || $bool84 === 0 || $bool84 === '' ?
				false :
				(typeof $bool84=='object'?
					(typeof $bool84['__nonzero__']=='function'?
						$bool84['__nonzero__']() :
						(typeof $bool84['__len__']=='function'?
							($bool84['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ):$and21)) === null || $bool85 === false || $bool85 === 0 || $bool85 === '' ?
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
				return false;
			}
			$iter15_iter = self['matrix']['serpent'];
			if (typeof ($iter15_array = $iter15_iter['__array']) != 'undefined') {
				$iter15_type = 0;
			} else {
				$iter15_iter = $iter15_iter['__iter__']();
				$iter15_type = typeof ($iter15_array = $iter15_iter['__array']) != 'undefined'? 0 : (typeof $iter15_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter15_idx = 0;
			while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
				serpent = $iter15_nextval;
				if ((($bool87=!(($bool86=(typeof ($115=self['matrix']['serpent'])['__array'] != 'undefined'?
					((typeof $115['__array'][$116=serpent]) != 'undefined'?$115['__array'][$116]:
						$115['__getitem__']($116)):
						$115['__getitem__'](serpent))) === null || $bool86 === false || $bool86 === 0 || $bool86 === '' ?
					false :
					(typeof $bool86=='object'?
						(typeof $bool86['__nonzero__']=='function'?
							$bool86['__nonzero__']() :
							(typeof $bool86['__len__']=='function'?
								($bool86['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool87 === false || $bool87 === 0 || $bool87 === '' ?
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
					continue;
				}
				$iter16_iter = $m['pygame']['sprite']['spritecollide']((typeof ($117=self['serpent_body'])['__array'] != 'undefined'?
					((typeof $117['__array'][$118=0]) != 'undefined'?$117['__array'][$118]:
						$117['__getitem__']($118)):
						$117['__getitem__'](0)), (typeof ($119=self['matrix']['serpent'])['__array'] != 'undefined'?
					((typeof $119['__array'][$120=serpent]) != 'undefined'?$119['__array'][$120]:
						$119['__getitem__']($120)):
						$119['__getitem__'](serpent))['segments'], false);
				if (typeof ($iter16_array = $iter16_iter['__array']) != 'undefined') {
					$iter16_type = 0;
				} else {
					$iter16_iter = $iter16_iter['__iter__']();
					$iter16_type = typeof ($iter16_array = $iter16_iter['__array']) != 'undefined'? 0 : (typeof $iter16_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter16_idx = 0;
				while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
					segment = $iter16_nextval;
					if ((($bool88=!$p['tuple']([(typeof ($121=self['serpent_body'])['__array'] != 'undefined'?
						((typeof $121['__array'][$122=0]) != 'undefined'?$121['__array'][$122]:
							$121['__getitem__']($122)):
							$121['__getitem__'](0)), (typeof ($123=self['serpent_body'])['__array'] != 'undefined'?
						((typeof $123['__array'][$124=1]) != 'undefined'?$123['__array'][$124]:
							$123['__getitem__']($124)):
							$123['__getitem__'](1))])['__contains__'](segment)) === null || $bool88 === false || $bool88 === 0 || $bool88 === '' ?
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
						return true;
					}
				}
			}
			if ((($bool89=!(($eq27=(typeof ($125=self['serpent_body'])['__array'] != 'undefined'?
				((typeof $125['__array'][$126=0]) != 'undefined'?$125['__array'][$126]:
					$125['__getitem__']($126)):
					$125['__getitem__'](0))['rect']['collidelist'](self['matrix']['edges']))===($eq28=-(1))&&$eq27===null?true:
				($eq27===null?false:($eq28===null?false:
					((typeof $eq27=='object'||typeof $eq27=='function')&&typeof $eq27['__cmp__']=='function'?$eq27['__cmp__']($eq28) === 0:
						((typeof $eq28=='object'||typeof $eq28=='function')&&typeof $eq28['__cmp__']=='function'?$eq28['__cmp__']($eq27) === 0:
							$eq27==$eq28)))))) === null || $bool89 === false || $bool89 === 0 || $bool89 === '' ?
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
				return true;
			}
			return false;
		}
	, 1, [null,null,['self']]);
		$cls_definition['collision'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter17_type,penalty,$iter17_nextval,$eq29,$cmp36,$cmp35,$cmp34,$cmp33,$bool90,$bool91,$bool92,$bool93,$bool94,$bool95,$bool96,$bool97,$bool98,$bool99,$eq30,$and23,$and24,$140,$bool104,$attr418,$attr419,$attr410,$attr411,$attr412,$attr413,$attr414,$attr415,$attr416,$attr417,$138,$139,$130,$131,$132,$133,$134,$135,$136,$137,$attr388,$attr389,$attr385,$attr386,$attr387,$attr409,$attr408,$attr403,$attr402,$attr401,$attr400,$attr407,$attr406,$attr405,$attr404,$129,$128,$127,$attr399,$attr398,$attr397,$attr396,$attr395,$attr394,$attr393,$attr392,$attr391,$attr390,$len7,$iter17_idx,$len8,$iter17_iter,$attr421,$attr420,$attr422,$or1,$or2,$iter17_array,$bool101,$bool100,$bool103,$bool102,segment;
			if ((($bool90=self['active']) === null || $bool90 === false || $bool90 === 0 || $bool90 === '' ?
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
				self['move']();
				self['growth']();
				self['active'] = !(($bool91=self['collision']()) === null || $bool91 === false || $bool91 === 0 || $bool91 === '' ?
					false :
					(typeof $bool91=='object'?
						(typeof $bool91['__nonzero__']=='function'?
							$bool91['__nonzero__']() :
							(typeof $bool91['__len__']=='function'?
								($bool91['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) );
				if ((($bool93=!(($bool92=self['active']) === null || $bool92 === false || $bool92 === 0 || $bool92 === '' ?
					false :
					(typeof $bool92=='object'?
						(typeof $bool92['__nonzero__']=='function'?
							$bool92['__nonzero__']() :
							(typeof $bool92['__len__']=='function'?
								($bool92['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool93 === false || $bool93 === 0 || $bool93 === '' ?
						false :
						(typeof $bool93=='object'?
							(typeof $bool93['__nonzero__']=='function'?
								$bool93['__nonzero__']() :
								(typeof $bool93['__len__']=='function'?
									($bool93['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					(typeof ($133=self['serpent_body'])['__array'] != 'undefined'?
						((typeof $133['__array'][$134=0]) != 'undefined'?$133['__array'][$134]:
							$133['__getitem__']($134)):
							$133['__getitem__'](0))['image'] = (typeof ($131=(typeof ($129=(typeof ($127=self['serpent_body'])['__array'] != 'undefined'?
						((typeof $127['__array'][$128=0]) != 'undefined'?$127['__array'][$128]:
							$127['__getitem__']($128)):
							$127['__getitem__'](0))['images'])['__array'] != 'undefined'?
						((typeof $129['__array'][$130=(self['identity'])+('_ko')]) != 'undefined'?$129['__array'][$130]:
							$129['__getitem__']($130)):
							$129['__getitem__']((self['identity'])+('_ko'))))['__array'] != 'undefined'?
						((typeof $131['__array'][$132=self['direction']]) != 'undefined'?$131['__array'][$132]:
							$131['__getitem__']($132)):
							$131['__getitem__'](self['direction']));
					if ((($bool95=((($bool94=$or1=self['matrix']['match']) === null || $bool94 === false || $bool94 === 0 || $bool94 === '' ?
						false :
						(typeof $bool94=='object'?
							(typeof $bool94['__nonzero__']=='function'?
								$bool94['__nonzero__']() :
								(typeof $bool94['__len__']=='function'?
									($bool94['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?$or1:self['matrix']['auto'])) === null || $bool95 === false || $bool95 === 0 || $bool95 === '' ?
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
						if ((($bool96=((($cmp33=(($len7=self['serpent_body']) === null?0:
							(typeof $len7['__array'] != 'undefined' ? $len7['__array']['length']:
								(typeof $len7['__len__'] == 'function'?$len7['__len__']():
									(typeof $len7['length'] != 'undefined'?$len7['length']:
										$p['len']($len7))))))===($cmp34=5)?0:
							(typeof $cmp33==typeof $cmp34 && ((typeof $cmp33 == 'number')||(typeof $cmp33 == 'string')||(typeof $cmp33 == 'boolean'))?
								($cmp33 == $cmp34 ? 0 : ($cmp33 < $cmp34 ? -1 : 1)):
								$p['cmp']($cmp33, $cmp34))) == 1)) === null || $bool96 === false || $bool96 === 0 || $bool96 === '' ?
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
							penalty = (5)+(Math['floor']((($len8=self['serpent_body']) === null?0:
								(typeof $len8['__array'] != 'undefined' ? $len8['__array']['length']:
									(typeof $len8['__len__'] == 'function'?$len8['__len__']():
										(typeof $len8['length'] != 'undefined'?$len8['length']:
											$p['len']($len8)))))/5));
							if ((($bool97=((($cmp35=((typeof ($135=self['matrix']['points'])['__array'] != 'undefined'?
								((typeof $135['__array'][$136=self['identity']]) != 'undefined'?$135['__array'][$136]:
									$135['__getitem__']($136)):
									$135['__getitem__'](self['identity'])))-(penalty))===($cmp36=0)?0:
								(typeof $cmp35==typeof $cmp36 && ((typeof $cmp35 == 'number')||(typeof $cmp35 == 'string')||(typeof $cmp35 == 'boolean'))?
									($cmp35 == $cmp36 ? 0 : ($cmp35 < $cmp36 ? -1 : 1)):
									$p['cmp']($cmp35, $cmp36))) == -1)) === null || $bool97 === false || $bool97 === 0 || $bool97 === '' ?
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
								penalty = (typeof ($137=self['matrix']['points'])['__array'] != 'undefined'?
									((typeof $137['__array'][$138=self['identity']]) != 'undefined'?$137['__array'][$138]:
										$137['__getitem__']($138)):
										$137['__getitem__'](self['identity']));
							}
							self['set_points'](-(penalty));
						}
					}
				}
			}
			else {
				if ((($bool101=((($bool99=$and23=!(($bool98=self['matrix']['match']) === null || $bool98 === false || $bool98 === 0 || $bool98 === '' ?
					false :
					(typeof $bool98=='object'?
						(typeof $bool98['__nonzero__']=='function'?
							$bool98['__nonzero__']() :
							(typeof $bool98['__len__']=='function'?
								($bool98['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool99 === false || $bool99 === 0 || $bool99 === '' ?
					false :
					(typeof $bool99=='object'?
						(typeof $bool99['__nonzero__']=='function'?
							$bool99['__nonzero__']() :
							(typeof $bool99['__len__']=='function'?
								($bool99['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?!(($bool100=self['matrix']['auto']) === null || $bool100 === false || $bool100 === 0 || $bool100 === '' ?
					false :
					(typeof $bool100=='object'?
						(typeof $bool100['__nonzero__']=='function'?
							$bool100['__nonzero__']() :
							(typeof $bool100['__len__']=='function'?
								($bool100['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ):$and23)) === null || $bool101 === false || $bool101 === 0 || $bool101 === '' ?
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
					self['alive'] = false;
				}
				else {
					self['pause'] -= 1;
					if ((($bool103=!(($bool102=self['pause']) === null || $bool102 === false || $bool102 === 0 || $bool102 === '' ?
						false :
						(typeof $bool102=='object'?
							(typeof $bool102['__nonzero__']=='function'?
								$bool102['__nonzero__']() :
								(typeof $bool102['__len__']=='function'?
									($bool102['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool103 === false || $bool103 === 0 || $bool103 === '' ?
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
						$iter17_iter = self['segments']['sprites']();
						if (typeof ($iter17_array = $iter17_iter['__array']) != 'undefined') {
							$iter17_type = 0;
						} else {
							$iter17_iter = $iter17_iter['__iter__']();
							$iter17_type = typeof ($iter17_array = $iter17_iter['__array']) != 'undefined'? 0 : (typeof $iter17_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter17_idx = 0;
						while (typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined') {
							segment = $iter17_nextval;
							if ((($bool104=!(($eq29=segment)===($eq30=(typeof ($139=self['serpent_body'])['__array'] != 'undefined'?
								((typeof $139['__array'][$140=0]) != 'undefined'?$139['__array'][$140]:
									$139['__getitem__']($140)):
									$139['__getitem__'](0)))&&$eq29===null?true:
								($eq29===null?false:($eq30===null?false:
									((typeof $eq29=='object'||typeof $eq29=='function')&&typeof $eq29['__cmp__']=='function'?$eq29['__cmp__']($eq30) === 0:
										((typeof $eq30=='object'||typeof $eq30=='function')&&typeof $eq30['__cmp__']=='function'?$eq30['__cmp__']($eq29) === 0:
											$eq29==$eq30)))))) === null || $bool104 === false || $bool104 === 0 || $bool104 === '' ?
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
								self['segment_spares']['append'](segment);
							}
						}
						self['segments']['empty']();
						self['alive'] = false;
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Serpent', $p['tuple']($bases), $data);
	})();
	$m['Segment'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'serpentduel';
		$cls_definition['images'] = null;
		$cls_definition['mask'] = null;
		$method = $pyjs__bind_method2('__init__', function(serpent, position, direction, speed) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				serpent = arguments[1];
				position = arguments[2];
				direction = arguments[3];
				speed = arguments[4];
			}
			if (typeof direction == 'undefined') direction=arguments['callee']['__args__'][5][1];
			if (typeof speed == 'undefined') speed=arguments['callee']['__args__'][6][1];
			var $attr454,$attr455,$attr456,$attr457,$attr450,$attr451,$attr452,$attr453,$attr458,$attr459,$attr447,$attr446,$attr445,$attr444,$attr443,$attr442,$attr441,$attr440,$attr449,$attr448,$164,$163,$162,$161,$160,$iter18_array,$152,$153,$150,$151,$156,$157,$154,$155,$158,$159,$iter19_nextval,image_path,$iter19_array,$149,$148,$145,$144,$147,$146,$141,dirn,$143,$142,$iter19_idx,$iter19_type,image,path,$attr438,segment_head,$iter19_iter,$attr461,$attr460,$attr462,$iter18_type,deg,$attr439,$attr436,$attr437,$attr434,$attr435,$attr432,$attr433,$attr430,$attr431,species,$iter18_idx,$iter18_nextval,$iter18_iter,$attr425,$attr427,$attr426,$attr429,$attr428,$bool105,$bool107,$bool106,segment_ko;
			$m['pygame']['sprite']['Sprite']['__init__'](self);
			self['type'] = $p['dict']([['Serpent1', $p['tuple']([0, 0, 255])], ['Serpent2', $p['tuple']([255, 0, 0])]]);
			if ((($bool106=!(($bool105=$m['Segment']['images']) === null || $bool105 === false || $bool105 === 0 || $bool105 === '' ?
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
				$m['Segment']['images'] = $p['dict']([]);
				$iter18_iter = $p['tuple'](['Serpent1', 'Serpent2']);
				if (typeof ($iter18_array = $iter18_iter['__array']) != 'undefined') {
					$iter18_type = 0;
				} else {
					$iter18_iter = $iter18_iter['__iter__']();
					$iter18_type = typeof ($iter18_array = $iter18_iter['__array']) != 'undefined'? 0 : (typeof $iter18_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter18_idx = 0;
				while (typeof ($iter18_nextval=($iter18_type?($iter18_type > 0?$iter18_iter.next(true,false):$p['wrapped_next']($iter18_iter)):$iter18_array[$iter18_idx++])) != 'undefined') {
					species = $iter18_nextval;
					if ((($bool107=$m['load_images']) === null || $bool107 === false || $bool107 === 0 || $bool107 === '' ?
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
						path = 'data';
						image = (typeof ($141=$p['dict']([['Serpent1', 'segment1.png'], ['Serpent2', 'segment2.png']]))['__array'] != 'undefined'?
							((typeof $141['__array'][$142=species]) != 'undefined'?$141['__array'][$142]:
								$141['__getitem__']($142)):
								$141['__getitem__'](species));
						image_path = $m['os']['path']['join'](path, image);
						$m['Segment']['images']['__setitem__'](species, $m['pygame']['image']['load'](image_path));
					}
					else {
						$m['Segment']['images']['__setitem__'](species, $m['pygame']['Surface']($p['tuple']([10, 10])));
						$m['pygame']['draw']['circle']((typeof ($143=$m['Segment']['images'])['__array'] != 'undefined'?
							((typeof $143['__array'][$144=species]) != 'undefined'?$143['__array'][$144]:
								$143['__getitem__']($144)):
								$143['__getitem__'](species)), (typeof ($145=self['type'])['__array'] != 'undefined'?
							((typeof $145['__array'][$146=species]) != 'undefined'?$145['__array'][$146]:
								$145['__getitem__']($146)):
								$145['__getitem__'](species)), $p['tuple']([5, 5]), 6, 0);
						(typeof ($147=$m['Segment']['images'])['__array'] != 'undefined'?
							((typeof $147['__array'][$148=species]) != 'undefined'?$147['__array'][$148]:
								$147['__getitem__']($148)):
								$147['__getitem__'](species))['set_colorkey']($p['tuple']([0, 0, 0]));
					}
					segment_head = (typeof ($149=$m['Segment']['images'])['__array'] != 'undefined'?
						((typeof $149['__array'][$150=species]) != 'undefined'?$149['__array'][$150]:
							$149['__getitem__']($150)):
							$149['__getitem__'](species))['copy']();
					$m['pygame']['draw']['line'](segment_head, $p['tuple']([0, 255, 0]), $p['tuple']([2, 2]), $p['tuple']([0, 5]), 3);
					$m['pygame']['draw']['line'](segment_head, $p['tuple']([0, 255, 0]), $p['tuple']([7, 2]), $p['tuple']([9, 5]), 3);
					segment_ko = (typeof ($151=$m['Segment']['images'])['__array'] != 'undefined'?
						((typeof $151['__array'][$152=species]) != 'undefined'?$151['__array'][$152]:
							$151['__getitem__']($152)):
							$151['__getitem__'](species))['copy']();
					$m['pygame']['draw']['circle'](segment_ko, $p['tuple']([0, 255, 0]), $p['tuple']([2, 3]), 2, 1);
					$m['pygame']['draw']['circle'](segment_ko, $p['tuple']([0, 255, 0]), $p['tuple']([8, 3]), 2, 1);
					$m['Segment']['images']['__setitem__']((species)+('_head'), $p['dict']([]));
					$m['Segment']['images']['__setitem__']((species)+('_ko'), $p['dict']([]));
					deg = $p['dict']([['U', 0], ['D', 180], ['L', 90], ['R', -(90)]]);
					$iter19_iter = $p['tuple'](['U', 'D', 'L', 'R']);
					if (typeof ($iter19_array = $iter19_iter['__array']) != 'undefined') {
						$iter19_type = 0;
					} else {
						$iter19_iter = $iter19_iter['__iter__']();
						$iter19_type = typeof ($iter19_array = $iter19_iter['__array']) != 'undefined'? 0 : (typeof $iter19_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter19_idx = 0;
					while (typeof ($iter19_nextval=($iter19_type?($iter19_type > 0?$iter19_iter.next(true,false):$p['wrapped_next']($iter19_iter)):$iter19_array[$iter19_idx++])) != 'undefined') {
						dirn = $iter19_nextval;
						(typeof ($155=$m['Segment']['images'])['__array'] != 'undefined'?
							((typeof $155['__array'][$156=(species)+('_head')]) != 'undefined'?$155['__array'][$156]:
								$155['__getitem__']($156)):
								$155['__getitem__']((species)+('_head')))['__setitem__'](dirn, $m['pygame']['transform']['rotate'](segment_head, (typeof ($153=deg)['__array'] != 'undefined'?
							((typeof $153['__array'][$154=dirn]) != 'undefined'?$153['__array'][$154]:
								$153['__getitem__']($154)):
								$153['__getitem__'](dirn))));
						(typeof ($159=$m['Segment']['images'])['__array'] != 'undefined'?
							((typeof $159['__array'][$160=(species)+('_ko')]) != 'undefined'?$159['__array'][$160]:
								$159['__getitem__']($160)):
								$159['__getitem__']((species)+('_ko')))['__setitem__'](dirn, $m['pygame']['transform']['rotate'](segment_ko, (typeof ($157=deg)['__array'] != 'undefined'?
							((typeof $157['__array'][$158=dirn]) != 'undefined'?$157['__array'][$158]:
								$157['__getitem__']($158)):
								$157['__getitem__'](dirn))));
					}
				}
				$m['Segment']['mask'] = $m['pygame']['mask']['from_surface']((typeof ($161=$m['Segment']['images'])['__array'] != 'undefined'?
					((typeof $161['__array'][$162='Serpent1']) != 'undefined'?$161['__array'][$162]:
						$161['__getitem__']($162)):
						$161['__getitem__']('Serpent1')));
			}
			var $tupleassign7 = $p['__ass_unpack'](position, 2, null);
			self['x'] = $tupleassign7[0];
			self['y'] = $tupleassign7[1];
			self['direction'] = direction;
			self['speed'] = speed;
			self['image'] = (typeof ($163=$m['Segment']['images'])['__array'] != 'undefined'?
				((typeof $163['__array'][$164=serpent]) != 'undefined'?$163['__array'][$164]:
					$163['__getitem__']($164)):
					$163['__getitem__'](serpent));
			self['rect'] = $pyjs_kwargs_call(self['image'], 'get_rect', null, null, [{'center':$p['tuple']([self['x'], self['y']])}]);
			var $tupleassign8 = $p['__ass_unpack']($p['tuple']([self['x'], self['y']]), 2, null);
			self['x_pre'] = $tupleassign8[0];
			self['y_pre'] = $tupleassign8[1];
			self['mask'] = $m['Segment']['mask'];
			return null;
		}
	, 1, [null,null,['self'],['serpent'],['position'],['direction', null],['speed', 0]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr482,$attr481,$attr480,$attr469,$attr468,$attr465,$attr464,$attr467,$attr466,$attr463,$167,$166,$165,$168,$attr478,$attr479,$attr472,$attr473,$attr470,$attr471,$attr476,$attr477,$attr474,$attr475;
			self['x'] += ((typeof ($165=self['direction'])['__array'] != 'undefined'?
				((typeof $165['__array'][$166=0]) != 'undefined'?$165['__array'][$166]:
					$165['__getitem__']($166)):
					$165['__getitem__'](0)))*(self['speed']);
			self['y'] += ((typeof ($167=self['direction'])['__array'] != 'undefined'?
				((typeof $167['__array'][$168=1]) != 'undefined'?$167['__array'][$168]:
					$167['__getitem__']($168)):
					$167['__getitem__'](1)))*(self['speed']);
			self['rect']['move_ip']((self['x'])-(self['x_pre']), (self['y'])-(self['y_pre']));
			self['x_pre'] = self['x'];
			self['y_pre'] = self['y'];
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($m['pygame']['sprite']['Sprite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Segment', $p['tuple']($bases), $data);
	})();
	$m['Treat'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'serpentduel';
		$cls_definition['images'] = null;
		$cls_definition['mask'] = null;
		$method = $pyjs__bind_method2('__init__', function(matrix) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				matrix = arguments[1];
			}
			var $174,$175,$176,$177,$170,$171,$172,$173,$178,$179,$iter20_array,$189,$188,$attr516,$181,$180,$183,$182,disrupt,$184,$187,$186,$iter20_iter,$cmp38,$cmp37,$169,$attr502,$attr503,$attr500,$iter20_idx,$attr506,$attr507,$attr504,$attr505,x,$attr508,$attr509,$attr491,$attr515,$attr514,$attr517,$attr501,$attr511,$attr510,$attr513,$attr512,$attr519,$attr518,$iter20_type,$185,$attr490,placed,$attr492,$attr493,$attr494,$attr495,$attr496,$attr497,$attr498,$attr499,$attr530,$iter20_nextval,serpent,$bool112,$bool113,$bool110,$bool111,$bool116,$bool117,$bool114,$bool115,$attr487,$attr486,$attr485,$attr489,$attr488,$attr529,$attr524,$bool109,$bool108,$attr528,$190,y,$attr525,$attr526,$attr527,$attr520,$attr521,$attr522,$attr523;
			$m['pygame']['sprite']['Sprite']['__init__'](self);
			self['matrix'] = matrix;
			if ((($bool109=!(($bool108=$m['Treat']['images']) === null || $bool108 === false || $bool108 === 0 || $bool108 === '' ?
				false :
				(typeof $bool108=='object'?
					(typeof $bool108['__nonzero__']=='function'?
						$bool108['__nonzero__']() :
						(typeof $bool108['__len__']=='function'?
							($bool108['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool109 === false || $bool109 === 0 || $bool109 === '' ?
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
				$m['Treat']['images'] = $p['dict']([]);
				$m['Treat']['mask'] = $p['dict']([]);
				$m['Treat']['images']['__setitem__']('Food', $m['pygame']['Surface']($p['tuple']([15, 15])));
				$m['pygame']['draw']['circle']((typeof ($169=$m['Treat']['images'])['__array'] != 'undefined'?
					((typeof $169['__array'][$170='Food']) != 'undefined'?$169['__array'][$170]:
						$169['__getitem__']($170)):
						$169['__getitem__']('Food')), $p['tuple']([0, 255, 0]), $p['tuple']([7, 7]), 5, 0);
				(typeof ($171=$m['Treat']['images'])['__array'] != 'undefined'?
					((typeof $171['__array'][$172='Food']) != 'undefined'?$171['__array'][$172]:
						$171['__getitem__']($172)):
						$171['__getitem__']('Food'))['set_colorkey']($p['tuple']([0, 0, 0]));
				$m['Treat']['images']['__setitem__']('Bonus', $m['pygame']['Surface']($p['tuple']([15, 15])));
				$m['pygame']['draw']['circle']((typeof ($173=$m['Treat']['images'])['__array'] != 'undefined'?
					((typeof $173['__array'][$174='Bonus']) != 'undefined'?$173['__array'][$174]:
						$173['__getitem__']($174)):
						$173['__getitem__']('Bonus')), $p['tuple']([255, 0, 0]), $p['tuple']([7, 10]), 5, 0);
				$m['pygame']['draw']['arc']((typeof ($175=$m['Treat']['images'])['__array'] != 'undefined'?
					((typeof $175['__array'][$176='Bonus']) != 'undefined'?$175['__array'][$176]:
						$175['__getitem__']($176)):
						$175['__getitem__']('Bonus')), $p['tuple']([0, 255, 0]), $p['tuple']([-(7), 0, 15, 15]), 0, 1, 1);
				(typeof ($177=$m['Treat']['images'])['__array'] != 'undefined'?
					((typeof $177['__array'][$178='Bonus']) != 'undefined'?$177['__array'][$178]:
						$177['__getitem__']($178)):
						$177['__getitem__']('Bonus'))['set_colorkey']($p['tuple']([0, 0, 0]));
				$m['Treat']['mask']['__setitem__']('Food', $m['pygame']['mask']['from_surface']((typeof ($179=$m['Treat']['images'])['__array'] != 'undefined'?
					((typeof $179['__array'][$180='Food']) != 'undefined'?$179['__array'][$180]:
						$179['__getitem__']($180)):
						$179['__getitem__']('Food'))));
				$m['Treat']['mask']['__setitem__']('Bonus', $m['pygame']['mask']['from_surface']((typeof ($181=$m['Treat']['images'])['__array'] != 'undefined'?
					((typeof $181['__array'][$182='Bonus']) != 'undefined'?$181['__array'][$182]:
						$181['__getitem__']($182)):
						$181['__getitem__']('Bonus'))));
			}
			placed = false;
			while ((($bool111=!(($bool110=placed) === null || $bool110 === false || $bool110 === 0 || $bool110 === '' ?
				false :
				(typeof $bool110=='object'?
					(typeof $bool110['__nonzero__']=='function'?
						$bool110['__nonzero__']() :
						(typeof $bool110['__len__']=='function'?
							($bool110['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool111 === false || $bool111 === 0 || $bool111 === '' ?
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
				var $tupleassign9 = $p['__ass_unpack']($p['tuple']([$m['random']['randrange'](20, (self['matrix']['x'])-(20)), $m['random']['randrange'](20, (self['matrix']['y'])-(20))]), 2, null);
				x = $tupleassign9[0];
				y = $tupleassign9[1];
				var $tupleassign10 = $p['__ass_unpack']($p['tuple']([x, y]), 2, null);
				self['x'] = $tupleassign10[0];
				self['y'] = $tupleassign10[1];
				if ((($bool112=((($cmp37=$m['random']['random']())===($cmp38=(0.1)+((self['matrix']['clock']['get_time']())/(300.0)))?0:
					(typeof $cmp37==typeof $cmp38 && ((typeof $cmp37 == 'number')||(typeof $cmp37 == 'string')||(typeof $cmp37 == 'boolean'))?
						($cmp37 == $cmp38 ? 0 : ($cmp37 < $cmp38 ? -1 : 1)):
						$p['cmp']($cmp37, $cmp38))) == 1)) === null || $bool112 === false || $bool112 === 0 || $bool112 === '' ?
						false :
						(typeof $bool112=='object'?
							(typeof $bool112['__nonzero__']=='function'?
								$bool112['__nonzero__']() :
								(typeof $bool112['__len__']=='function'?
									($bool112['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['identity'] = 'Food';
					self['duration'] = $m['random']['randrange'](800, 2000);
				}
				else {
					self['identity'] = 'Bonus';
					self['duration'] = $m['random']['randrange'](400, 800);
				}
				self['duration'] = $p['float_int']((self['duration'])/(self['matrix']['level']));
				self['image'] = (typeof ($183=$m['Treat']['images'])['__array'] != 'undefined'?
					((typeof $183['__array'][$184=self['identity']]) != 'undefined'?$183['__array'][$184]:
						$183['__getitem__']($184)):
						$183['__getitem__'](self['identity']));
				self['rect'] = $pyjs_kwargs_call(self['image'], 'get_rect', null, null, [{'center':$p['tuple']([x, y])}]);
				self['mask'] = (typeof ($185=$m['Treat']['mask'])['__array'] != 'undefined'?
					((typeof $185['__array'][$186=self['identity']]) != 'undefined'?$185['__array'][$186]:
						$185['__getitem__']($186)):
						$185['__getitem__'](self['identity']));
				disrupt = false;
				$iter20_iter = self['matrix']['serpent'];
				if (typeof ($iter20_array = $iter20_iter['__array']) != 'undefined') {
					$iter20_type = 0;
				} else {
					$iter20_iter = $iter20_iter['__iter__']();
					$iter20_type = typeof ($iter20_array = $iter20_iter['__array']) != 'undefined'? 0 : (typeof $iter20_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter20_idx = 0;
				while (typeof ($iter20_nextval=($iter20_type?($iter20_type > 0?$iter20_iter.next(true,false):$p['wrapped_next']($iter20_iter)):$iter20_array[$iter20_idx++])) != 'undefined') {
					serpent = $iter20_nextval;
					if ((($bool114=!(($bool113=(typeof ($187=self['matrix']['serpent'])['__array'] != 'undefined'?
						((typeof $187['__array'][$188=serpent]) != 'undefined'?$187['__array'][$188]:
							$187['__getitem__']($188)):
							$187['__getitem__'](serpent))) === null || $bool113 === false || $bool113 === 0 || $bool113 === '' ?
						false :
						(typeof $bool113=='object'?
							(typeof $bool113['__nonzero__']=='function'?
								$bool113['__nonzero__']() :
								(typeof $bool113['__len__']=='function'?
									($bool113['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool114 === false || $bool114 === 0 || $bool114 === '' ?
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
						continue;
					}
					if ((($bool115=$m['pygame']['sprite']['spritecollideany'](self, (typeof ($189=self['matrix']['serpent'])['__array'] != 'undefined'?
						((typeof $189['__array'][$190=serpent]) != 'undefined'?$189['__array'][$190]:
							$189['__getitem__']($190)):
							$189['__getitem__'](serpent))['segments'])) === null || $bool115 === false || $bool115 === 0 || $bool115 === '' ?
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
						disrupt = true;
						break;
					}
				}
				if ((($bool117=!(($bool116=disrupt) === null || $bool116 === false || $bool116 === 0 || $bool116 === '' ?
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
					placed = true;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['matrix']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool118,$bool119,$attr532,$attr531;
			self['duration'] -= 1;
			if ((($bool119=!(($bool118=self['duration']) === null || $bool118 === false || $bool118 === 0 || $bool118 === '' ?
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
				self['matrix']['treat_reset']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($m['pygame']['sprite']['Sprite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Treat', $p['tuple']($bases), $data);
	})();
	$m['Control'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'serpentduel';
		$method = $pyjs__bind_method2('__init__', function(matrix) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				matrix = arguments[1];
			}
			var $attr534,font,$attr533;
			self['matrix'] = matrix;
			$m['pygame']['font']['init']();
			font = $m['pygame']['font']['get_default_font']();
			self['font'] = $m['pygame']['font']['Font'](font, 24);
			self['font2'] = $m['pygame']['font']['Font'](font, 14);
			self['loc'] = $p['dict']([[1, $p['tuple']([0, 0, 0])], [2, $p['tuple']([-(24), 14, 0])], [3, $p['tuple']([-(38), 0, 28])]]);
			self['matrix_start'] = false;
			self['quit_request'] = false;
			$m['pygame']['event']['set_blocked']($m['pygame']['MOUSEMOTION']);
			self['quit'] = false;
			self['pause'] = true;
			self['pause_program']('Serpent Duel', 'Click to run/pause', '[r]estart [p]ause [q]uit');
			return null;
		}
	, 1, [null,null,['self'],['matrix']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('pause_program', function(text1, text2, text3) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text1 = arguments[1];
				text2 = arguments[2];
				text3 = arguments[3];
			}
			if (typeof text2 == 'undefined') text2=arguments['callee']['__args__'][4][1];
			if (typeof text3 == 'undefined') text3=arguments['callee']['__args__'][5][1];
			var $attr546,$attr547,$attr544,$attr545,$attr542,$attr543,$attr540,$attr541,text,$attr548,size,loc,$attr539,$attr538,$attr537,$attr536,$attr535,$208,$209,$202,$203,$200,$201,$206,$207,$204,$205,$bool121,$bool120,$210,$198,$199,$196,$197,$194,$195,$192,$193,$191;
			loc = (typeof ($191=self['loc'])['__array'] != 'undefined'?
				((typeof $191['__array'][$192=$p['sum'](function(){
				var $iter21_idx,text,$iter21_nextval,$collcomp2,$iter21_type,$iter21_iter,$iter21_array;
	$collcomp2 = $p['list']();
			$iter21_iter = $p['tuple']([text1, text2, text3]);
			if (typeof ($iter21_array = $iter21_iter['__array']) != 'undefined') {
				$iter21_type = 0;
			} else {
				$iter21_iter = $iter21_iter['__iter__']();
				$iter21_type = typeof ($iter21_array = $iter21_iter['__array']) != 'undefined'? 0 : (typeof $iter21_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter21_idx = 0;
			while (typeof ($iter21_nextval=($iter21_type?($iter21_type > 0?$iter21_iter.next(true,false):$p['wrapped_next']($iter21_iter)):$iter21_array[$iter21_idx++])) != 'undefined') {
				text = $iter21_nextval;
				$collcomp2['append']($p['bool'](text));
			}

	return $collcomp2;}())]) != 'undefined'?$191['__array'][$192]:
					$191['__getitem__']($192)):
					$191['__getitem__']($p['sum'](function(){
				var $iter21_idx,text,$iter21_nextval,$collcomp2,$iter21_type,$iter21_iter,$iter21_array;
	$collcomp2 = $p['list']();
			$iter21_iter = $p['tuple']([text1, text2, text3]);
			if (typeof ($iter21_array = $iter21_iter['__array']) != 'undefined') {
				$iter21_type = 0;
			} else {
				$iter21_iter = $iter21_iter['__iter__']();
				$iter21_type = typeof ($iter21_array = $iter21_iter['__array']) != 'undefined'? 0 : (typeof $iter21_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter21_idx = 0;
			while (typeof ($iter21_nextval=($iter21_type?($iter21_type > 0?$iter21_iter.next(true,false):$p['wrapped_next']($iter21_iter)):$iter21_array[$iter21_idx++])) != 'undefined') {
				text = $iter21_nextval;
				$collcomp2['append']($p['bool'](text));
			}

	return $collcomp2;}())));
			self['matrix']['screen']['fill']($p['tuple']([0, 0, 0]));
			text = self['font']['render'](text1, true, $p['tuple']([100, 100, 100]));
			size = self['font']['size'](text1);
			self['matrix']['screen']['blit'](text, $p['tuple']([(Math['floor'](self['matrix']['x']/2))-(Math['floor']((typeof ($193=size)['__array'] != 'undefined'?
				((typeof $193['__array'][$194=0]) != 'undefined'?$193['__array'][$194]:
					$193['__getitem__']($194)):
					$193['__getitem__'](0))/2)), ((Math['floor'](self['matrix']['y']/2))-(Math['floor']((typeof ($195=size)['__array'] != 'undefined'?
				((typeof $195['__array'][$196=1]) != 'undefined'?$195['__array'][$196]:
					$195['__getitem__']($196)):
					$195['__getitem__'](1))/2)))+((typeof ($197=loc)['__array'] != 'undefined'?
				((typeof $197['__array'][$198=0]) != 'undefined'?$197['__array'][$198]:
					$197['__getitem__']($198)):
					$197['__getitem__'](0)))]));
			if ((($bool120=text2) === null || $bool120 === false || $bool120 === 0 || $bool120 === '' ?
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
				text = self['font2']['render'](text2, true, $p['tuple']([100, 100, 100]));
				size = self['font2']['size'](text2);
				self['matrix']['screen']['blit'](text, $p['tuple']([(Math['floor'](self['matrix']['x']/2))-(Math['floor']((typeof ($199=size)['__array'] != 'undefined'?
					((typeof $199['__array'][$200=0]) != 'undefined'?$199['__array'][$200]:
						$199['__getitem__']($200)):
						$199['__getitem__'](0))/2)), ((Math['floor'](self['matrix']['y']/2))-(Math['floor']((typeof ($201=size)['__array'] != 'undefined'?
					((typeof $201['__array'][$202=1]) != 'undefined'?$201['__array'][$202]:
						$201['__getitem__']($202)):
						$201['__getitem__'](1))/2)))+((typeof ($203=loc)['__array'] != 'undefined'?
					((typeof $203['__array'][$204=1]) != 'undefined'?$203['__array'][$204]:
						$203['__getitem__']($204)):
						$203['__getitem__'](1)))]));
			}
			if ((($bool121=text3) === null || $bool121 === false || $bool121 === 0 || $bool121 === '' ?
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
				text = self['font2']['render'](text3, true, $p['tuple']([100, 100, 100]));
				size = self['font2']['size'](text3);
				self['matrix']['screen']['blit'](text, $p['tuple']([(Math['floor'](self['matrix']['x']/2))-(Math['floor']((typeof ($205=size)['__array'] != 'undefined'?
					((typeof $205['__array'][$206=0]) != 'undefined'?$205['__array'][$206]:
						$205['__getitem__']($206)):
						$205['__getitem__'](0))/2)), ((Math['floor'](self['matrix']['y']/2))-(Math['floor']((typeof ($207=size)['__array'] != 'undefined'?
					((typeof $207['__array'][$208=1]) != 'undefined'?$207['__array'][$208]:
						$207['__getitem__']($208)):
						$207['__getitem__'](1))/2)))+((typeof ($209=loc)['__array'] != 'undefined'?
					((typeof $209['__array'][$210=2]) != 'undefined'?$209['__array'][$210]:
						$209['__getitem__']($210)):
						$209['__getitem__'](2)))]));
			}
			$m['pygame']['display']['flip']();
			self['matrix']['active'] = false;
			return null;
		}
	, 1, [null,null,['self'],['text1'],['text2', null],['text3', null]]);
		$cls_definition['pause_program'] = $method;
		$method = $pyjs__bind_method2('matrix_control', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool124,$attr549,$attr551,$attr550,$attr552,$bool123,$bool122;
			if ((($bool123=!(($bool122=self['pause']) === null || $bool122 === false || $bool122 === 0 || $bool122 === '' ?
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
				self['pause_program']('Serpent Duel', 'Click to run/pause', '[r]estart [p]ause [q]uit');
				self['pause'] = true;
			}
			else {
				if ((($bool124=self['matrix_start']) === null || $bool124 === false || $bool124 === 0 || $bool124 === '' ?
						false :
						(typeof $bool124=='object'?
							(typeof $bool124['__nonzero__']=='function'?
								$bool124['__nonzero__']() :
								(typeof $bool124['__len__']=='function'?
									($bool124['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) {
					self['matrix']['clear_screen']();
					self['matrix']['update_screen']();
					self['matrix']['active'] = true;
				}
				else {
					self['matrix']['start']();
					self['matrix_start'] = true;
				}
				self['quit_request'] = false;
				self['pause'] = false;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['matrix_control'] = $method;
		$method = $pyjs__bind_method2('check_control', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr560,$attr561,$attr562,$attr563,$attr564,$iter22_array,$attr566,$attr567,$attr568,$attr569,$attr580,$attr581,$attr586,$attr587,$attr584,$attr585,$eq32,$eq33,$attr596,$eq31,$eq36,$iter22_type,$eq34,$eq35,$bool134,$bool135,$eq38,$eq39,$bool130,event,$bool132,$attr565,$attr582,$bool131,$attr559,$attr558,$attr594,$attr583,$eq46,$attr553,$bool133,$attr555,$attr554,$attr557,$attr556,$attr573,$attr572,$attr571,$attr570,$attr577,$attr576,$attr575,$attr574,$attr595,$attr591,$attr579,$attr578,$iter22_nextval,$attr590,$attr593,$attr592,$bool129,$bool128,$bool127,$bool126,$bool125,$attr589,$eq48,$eq43,$eq42,$eq41,$eq40,$eq47,$iter22_idx,$eq45,$eq44,$attr588,$iter22_iter,$eq37;
			$iter22_iter = $m['pygame']['event']['get']();
			if (typeof ($iter22_array = $iter22_iter['__array']) != 'undefined') {
				$iter22_type = 0;
			} else {
				$iter22_iter = $iter22_iter['__iter__']();
				$iter22_type = typeof ($iter22_array = $iter22_iter['__array']) != 'undefined'? 0 : (typeof $iter22_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter22_idx = 0;
			while (typeof ($iter22_nextval=($iter22_type?($iter22_type > 0?$iter22_iter.next(true,false):$p['wrapped_next']($iter22_iter)):$iter22_array[$iter22_idx++])) != 'undefined') {
				event = $iter22_nextval;
				if ((($bool125=(($eq31=event['type'])===($eq32=$m['pygame']['MOUSEBUTTONDOWN'])&&$eq31===null?true:
					($eq31===null?false:($eq32===null?false:
						((typeof $eq31=='object'||typeof $eq31=='function')&&typeof $eq31['__cmp__']=='function'?$eq31['__cmp__']($eq32) === 0:
							((typeof $eq32=='object'||typeof $eq32=='function')&&typeof $eq32['__cmp__']=='function'?$eq32['__cmp__']($eq31) === 0:
								$eq31==$eq32)))))) === null || $bool125 === false || $bool125 === 0 || $bool125 === '' ?
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
					if ((($bool126=(($eq33=event['button'])===($eq34=1)&&$eq33===null?true:
						($eq33===null?false:($eq34===null?false:
							((typeof $eq33=='object'||typeof $eq33=='function')&&typeof $eq33['__cmp__']=='function'?$eq33['__cmp__']($eq34) === 0:
								((typeof $eq34=='object'||typeof $eq34=='function')&&typeof $eq34['__cmp__']=='function'?$eq34['__cmp__']($eq33) === 0:
									$eq33==$eq34)))))) === null || $bool126 === false || $bool126 === 0 || $bool126 === '' ?
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
						self['matrix_control']();
					}
				}
				else if ((($bool127=(($eq35=event['type'])===($eq36=$m['pygame']['KEYDOWN'])&&$eq35===null?true:
					($eq35===null?false:($eq36===null?false:
						((typeof $eq35=='object'||typeof $eq35=='function')&&typeof $eq35['__cmp__']=='function'?$eq35['__cmp__']($eq36) === 0:
							((typeof $eq36=='object'||typeof $eq36=='function')&&typeof $eq36['__cmp__']=='function'?$eq36['__cmp__']($eq35) === 0:
								$eq35==$eq36)))))) === null || $bool127 === false || $bool127 === 0 || $bool127 === '' ?
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
					if ((($bool128=(($eq37=event['key'])===($eq38=$m['pygame']['K_p'])&&$eq37===null?true:
						($eq37===null?false:($eq38===null?false:
							((typeof $eq37=='object'||typeof $eq37=='function')&&typeof $eq37['__cmp__']=='function'?$eq37['__cmp__']($eq38) === 0:
								((typeof $eq38=='object'||typeof $eq38=='function')&&typeof $eq38['__cmp__']=='function'?$eq38['__cmp__']($eq37) === 0:
									$eq37==$eq38)))))) === null || $bool128 === false || $bool128 === 0 || $bool128 === '' ?
							false :
							(typeof $bool128=='object'?
								(typeof $bool128['__nonzero__']=='function'?
									$bool128['__nonzero__']() :
									(typeof $bool128['__len__']=='function'?
										($bool128['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) {
						self['matrix_control']();
					}
					else if ((($bool129=(($eq39=event['key'])===($eq40=$m['pygame']['K_r'])&&$eq39===null?true:
						($eq39===null?false:($eq40===null?false:
							((typeof $eq39=='object'||typeof $eq39=='function')&&typeof $eq39['__cmp__']=='function'?$eq39['__cmp__']($eq40) === 0:
								((typeof $eq40=='object'||typeof $eq40=='function')&&typeof $eq40['__cmp__']=='function'?$eq40['__cmp__']($eq39) === 0:
									$eq39==$eq40)))))) === null || $bool129 === false || $bool129 === 0 || $bool129 === '' ?
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
						self['pause'] = false;
						self['quit_request'] = false;
						self['matrix']['start']();
					}
					else if ((($bool130=(($eq41=event['key'])===($eq42=$m['pygame']['K_q'])&&$eq41===null?true:
						($eq41===null?false:($eq42===null?false:
							((typeof $eq41=='object'||typeof $eq41=='function')&&typeof $eq41['__cmp__']=='function'?$eq41['__cmp__']($eq42) === 0:
								((typeof $eq42=='object'||typeof $eq42=='function')&&typeof $eq42['__cmp__']=='function'?$eq42['__cmp__']($eq41) === 0:
									$eq41==$eq42)))))) === null || $bool130 === false || $bool130 === 0 || $bool130 === '' ?
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
						self['pause_program']('Serpent Duel', 'Quit (y/n)?');
						self['pause'] = true;
						self['quit_request'] = true;
					}
					else if ((($bool131=$p['tuple']([$m['pygame']['K_y'], $m['pygame']['K_n']])['__contains__'](event['key'])) === null || $bool131 === false || $bool131 === 0 || $bool131 === '' ?
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
						if ((($bool132=self['quit_request']) === null || $bool132 === false || $bool132 === 0 || $bool132 === '' ?
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
							if ((($bool133=(($eq43=event['key'])===($eq44=$m['pygame']['K_n'])&&$eq43===null?true:
								($eq43===null?false:($eq44===null?false:
									((typeof $eq43=='object'||typeof $eq43=='function')&&typeof $eq43['__cmp__']=='function'?$eq43['__cmp__']($eq44) === 0:
										((typeof $eq44=='object'||typeof $eq44=='function')&&typeof $eq44['__cmp__']=='function'?$eq44['__cmp__']($eq43) === 0:
											$eq43==$eq44)))))) === null || $bool133 === false || $bool133 === 0 || $bool133 === '' ?
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
								self['matrix_control']();
							}
							else {
								self['matrix']['screen']['fill']($p['tuple']([0, 0, 0]));
								$m['pygame']['display']['flip']();
								$m['pygame']['time']['delay'](10);
								$m['pygame']['quit']();
								self['quit'] = true;
							}
						}
					}
				}
				else if ((($bool134=(($eq45=event['type'])===($eq46=self['matrix']['treat_event'])&&$eq45===null?true:
					($eq45===null?false:($eq46===null?false:
						((typeof $eq45=='object'||typeof $eq45=='function')&&typeof $eq45['__cmp__']=='function'?$eq45['__cmp__']($eq46) === 0:
							((typeof $eq46=='object'||typeof $eq46=='function')&&typeof $eq46['__cmp__']=='function'?$eq46['__cmp__']($eq45) === 0:
								$eq45==$eq46)))))) === null || $bool134 === false || $bool134 === 0 || $bool134 === '' ?
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
					self['matrix']['treat_add']();
				}
				else if ((($bool135=(($eq47=event['type'])===($eq48=$m['pygame']['QUIT'])&&$eq47===null?true:
					($eq47===null?false:($eq48===null?false:
						((typeof $eq47=='object'||typeof $eq47=='function')&&typeof $eq47['__cmp__']=='function'?$eq47['__cmp__']($eq48) === 0:
							((typeof $eq48=='object'||typeof $eq48=='function')&&typeof $eq48['__cmp__']=='function'?$eq48['__cmp__']($eq47) === 0:
								$eq47==$eq48)))))) === null || $bool135 === false || $bool135 === 0 || $bool135 === '' ?
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
					self['quit'] = true;
				}
			}
			return self['quit'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['check_control'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var quit,$bool136,$attr597,$attr598;
			quit = self['check_control']();
			if ((($bool136=self['pause']) === null || $bool136 === false || $bool136 === 0 || $bool136 === '' ?
					false :
					(typeof $bool136=='object'?
						(typeof $bool136['__nonzero__']=='function'?
							$bool136['__nonzero__']() :
							(typeof $bool136['__len__']=='function'?
								($bool136['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) {
				$m['pygame']['time']['wait'](1000);
			}
			return quit;
		}
	, 1, [null,null,['self']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Control', $p['tuple']($bases), $data);
	})();
	$m['setup'] = function(x, y, screen) {
		if (typeof x == 'undefined') x=arguments['callee']['__args__'][2][1];
		if (typeof y == 'undefined') y=arguments['callee']['__args__'][3][1];
		if (typeof screen == 'undefined') screen=arguments['callee']['__args__'][4][1];
		var control,$iter23_type,$iter23_nextval,$iter24_idx,$iter23_iter,$iter23_array,$iter24_array,$bool138,$iter24_type,background,$iter23_idx,line,$bool137,$iter24_iter,$iter24_nextval,matrix;
		$m['pygame']['init']();
		$m['pygame']['display']['set_caption']('Serpent Duel');
		if ((($bool138=!(($bool137=screen) === null || $bool137 === false || $bool137 === 0 || $bool137 === '' ?
			false :
			(typeof $bool137=='object'?
				(typeof $bool137['__nonzero__']=='function'?
					$bool137['__nonzero__']() :
					(typeof $bool137['__len__']=='function'?
						($bool137['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool138 === false || $bool138 === 0 || $bool138 === '' ?
				false :
				(typeof $bool138=='object'?
					(typeof $bool138['__nonzero__']=='function'?
						$bool138['__nonzero__']() :
						(typeof $bool138['__len__']=='function'?
							($bool138['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			screen = $m['pygame']['display']['set_mode']($p['tuple']([x, y]));
		}
		background = $m['pygame']['Surface']($p['tuple']([x, y]));
		background['fill']($p['tuple']([50, 50, 50]));
		$iter23_iter = $m['range'](0, 300, 25);
		if (typeof ($iter23_array = $iter23_iter['__array']) != 'undefined') {
			$iter23_type = 0;
		} else {
			$iter23_iter = $iter23_iter['__iter__']();
			$iter23_type = typeof ($iter23_array = $iter23_iter['__array']) != 'undefined'? 0 : (typeof $iter23_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter23_idx = 0;
		while (typeof ($iter23_nextval=($iter23_type?($iter23_type > 0?$iter23_iter.next(true,false):$p['wrapped_next']($iter23_iter)):$iter23_array[$iter23_idx++])) != 'undefined') {
			line = $iter23_nextval;
			$m['pygame']['draw']['line'](background, $p['tuple']([43, 50, 58]), $p['tuple']([0, line]), $p['tuple']([400, line]), 1);
		}
		$iter24_iter = $m['range'](0, 400, 25);
		if (typeof ($iter24_array = $iter24_iter['__array']) != 'undefined') {
			$iter24_type = 0;
		} else {
			$iter24_iter = $iter24_iter['__iter__']();
			$iter24_type = typeof ($iter24_array = $iter24_iter['__array']) != 'undefined'? 0 : (typeof $iter24_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter24_idx = 0;
		while (typeof ($iter24_nextval=($iter24_type?($iter24_type > 0?$iter24_iter.next(true,false):$p['wrapped_next']($iter24_iter)):$iter24_array[$iter24_idx++])) != 'undefined') {
			line = $iter24_nextval;
			$m['pygame']['draw']['line'](background, $p['tuple']([43, 50, 58]), $p['tuple']([line, 0]), $p['tuple']([line, 300]), 1);
		}
		matrix = $m['Matrix'](x, y, screen, background);
		control = $m['Control'](matrix);
		return $p['tuple']([matrix, control]);
	};
	$m['setup']['__name__'] = 'setup';

	$m['setup']['__bind_type__'] = 0;
	$m['setup']['__args__'] = [null,null,['x', 500],['y', 500],['screen', null]];
	$m['program_exec'] = function(matrix, control) {
		var quit,$attr599,$attr601,$attr600,$attr602;
		$p['__setslice'](matrix['update_rect'], 0, null, $p['list']([]));
		matrix['update']();
		$m['pygame']['display']['update'](matrix['update_rect']);
		matrix['clock']['tick'](80);
		quit = control['update']();
		return quit;
	};
	$m['program_exec']['__name__'] = 'program_exec';

	$m['program_exec']['__bind_type__'] = 0;
	$m['program_exec']['__args__'] = [null,null,['matrix'],['control']];
	$m['run'] = function() {

		$m['program_exec']((typeof matrix == "undefined"?$m['matrix']:matrix), (typeof control == "undefined"?$m['control']:control));
		return null;
	};
	$m['run']['__name__'] = 'run';

	$m['run']['__bind_type__'] = 0;
	$m['run']['__args__'] = [null,null];
	var $tupleassign11 = $p['__ass_unpack']($p['tuple']([null, null]), 2, null);
	$m['matrix'] = $tupleassign11[0];
	$m['control'] = $tupleassign11[1];
	$m['main'] = function() {
		var images;
		var $tupleassign12 = $p['__ass_unpack']($m['setup'](800, 600), 2, null);
		$m['matrix'] = $tupleassign12[0];
		$m['control'] = $tupleassign12[1];
		images = $p['list'](['./data/segment1.png', './data/segment2.png']);
		$m['pygame']['display']['setup']($m['run'], images);
		return null;
	};
	$m['main']['__name__'] = 'main';

	$m['main']['__bind_type__'] = 0;
	$m['main']['__args__'] = [null,null];
	$m['main2'] = function() {
		var control,quit,$bool140,matrix,$bool139;
		var $tupleassign13 = $p['__ass_unpack']($m['setup'](400, 300), 2, null);
		matrix = $tupleassign13[0];
		control = $tupleassign13[1];
		quit = false;
		while ((($bool140=!(($bool139=quit) === null || $bool139 === false || $bool139 === 0 || $bool139 === '' ?
			false :
			(typeof $bool139=='object'?
				(typeof $bool139['__nonzero__']=='function'?
					$bool139['__nonzero__']() :
					(typeof $bool139['__len__']=='function'?
						($bool139['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )) === null || $bool140 === false || $bool140 === 0 || $bool140 === '' ?
				false :
				(typeof $bool140=='object'?
					(typeof $bool140['__nonzero__']=='function'?
						$bool140['__nonzero__']() :
						(typeof $bool140['__len__']=='function'?
							($bool140['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) {
			quit = $m['program_exec'](matrix, control);
		}
		return null;
	};
	$m['main2']['__name__'] = 'main2';

	$m['main2']['__bind_type__'] = 0;
	$m['main2']['__args__'] = [null,null];
	if ((($bool141=(($eq49=(typeof __name__ == "undefined"?$m['__name__']:__name__))===($eq50='__main__')&&$eq49===null?true:
		($eq49===null?false:($eq50===null?false:
			((typeof $eq49=='object'||typeof $eq49=='function')&&typeof $eq49['__cmp__']=='function'?$eq49['__cmp__']($eq50) === 0:
				((typeof $eq50=='object'||typeof $eq50=='function')&&typeof $eq50['__cmp__']=='function'?$eq50['__cmp__']($eq49) === 0:
					$eq49==$eq50)))))) === null || $bool141 === false || $bool141 === 0 || $bool141 === '' ?
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
		if ((($bool142=$m['js']) === null || $bool142 === false || $bool142 === 0 || $bool142 === '' ?
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
			$m['main']();
		}
		else {
			$m['main2']();
		}
	}
	return this;
}; /* end serpentduel */


/* end module: serpentduel */


/*
PYJS_DEPS: ['os', 'sys', 'pygame', 'pyj2d', 'pyjsdl', 'random']
*/
