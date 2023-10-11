/* start module: pyjsdl.sprite */
$pyjs['loaded_modules']['pyjsdl.sprite'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.sprite']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.sprite'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.sprite'];
	$m['__repr__'] = function() { return '<module: pyjsdl.sprite>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.sprite';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['sprite'] = $pyjs['loaded_modules']['pyjsdl.sprite'];
	var $attr1,$attr2,$bool1,$cmp1,$cmp2;

	$m['rectPool'] = $p['___import___']('pyjsdl.rect.rectPool', 'pyjsdl', null, false);
	$m['mask'] = $p['___import___']('pyjsdl.mask', 'pyjsdl', null, false);
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
		$m['dict'] = $p['___import___']('pyjsdl.util._dict', 'pyjsdl', null, false);
		$m['next'] = $p['___import___']('pyjsdl.util._next', 'pyjsdl', null, false);
	}
	$m['__docformat__'] = 'restructuredtext';
	$m['id'] = function(obj) {
		var $attr3,$attr4;
		return obj['_identity'];
	};
	$m['id']['__name__'] = 'id';

	$m['id']['__bind_type__'] = 0;
	$m['id']['__args__'] = [null,null,['obj']];
	$m['Sprite'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$cls_definition['_identity'] = 0;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var groups = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var groups = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $bool2,$attr5,$attr6;
			self['_identity'] = $m['Sprite']['_identity'];
			$m['Sprite']['_identity'] += 1;
			self['_groups'] = $m['dict']();
			if ((($bool2=groups) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				$pyjs_kwargs_call(self, 'add', groups, null, [{}]);
			}
			return null;
		}
	, 1, ['groups',null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr8,$mod2,$attr7,s,$mod1,$len1,$attr10;
			s = '<%s(in %d groups)>';
			return (($mod1=s)!=null && ($mod2=$p['tuple']([self['__class__']['__name__'], (($len1=self['_groups']) === null?0:
				(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
					(typeof $len1['__len__'] == 'function'?$len1['__len__']():
						(typeof $len1['length'] != 'undefined'?$len1['length']:
							$p['len']($len1)))))]))!=null && typeof $mod1=='string'?
				$p['sprintf']($mod1,$mod2):
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
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
		$method = $pyjs__bind_method2('add', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var groups = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var groups = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $iter1_nextval,$iter1_type,$iter1_iter,$bool3,$iter1_array,group,$iter1_idx;
			$iter1_iter = groups;
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				group = $iter1_nextval;
				if ((($bool3=$p['hasattr'](group, '_sprites')) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					group['add'](self);
				}
				else {
					$pyjs_kwargs_call(self, 'add', group, null, [{}]);
				}
			}
			return null;
		}
	, 1, ['groups',null,['self']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('remove', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var groups = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var groups = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $iter2_nextval,$iter2_type,$bool4,$iter2_iter,$iter2_idx,group,$iter2_array;
			$iter2_iter = groups;
			if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter['__iter__']();
				$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				group = $iter2_nextval;
				if ((($bool4=$p['hasattr'](group, '_sprites')) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					group['remove'](self);
				}
				else {
					$pyjs_kwargs_call(self, 'remove', group, null, [{}]);
				}
			}
			return null;
		}
	, 1, ['groups',null,['self']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('kill', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter3_idx,group,$iter3_type,$iter3_iter,$iter3_array,$iter3_nextval;
			$iter3_iter = $p['list'](self['_groups']['values']());
			if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter['__iter__']();
				$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				group = $iter3_nextval;
				group['remove'](self);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['kill'] = $method;
		$method = $pyjs__bind_method2('alive', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool5,$attr11,$attr12;
			if ((($bool5=self['_groups']) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				return true;
			}
			else {
				return false;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['alive'] = $method;
		$method = $pyjs__bind_method2('groups', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['list'](self['_groups']['values']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['groups'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}

 			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Sprite', $p['tuple']($bases), $data);
	})();
	$m['DirtySprite'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var groups = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var groups = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}

			$pyjs_kwargs_call($m['Sprite'], '__init__', groups, null, [{}, self]);
			return null;
		}
	, 1, ['groups',null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['Sprite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DirtySprite', $p['tuple']($bases), $data);
	})();
	$m['Group'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$cls_definition['_identity'] = 0;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $attr14,$bool6,$attr13;
			self['_identity'] = $m['Group']['_identity'];
			$m['Group']['_identity'] += 1;
			self['_sprites'] = $m['dict']();
			if ((($bool6=sprites) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				$pyjs_kwargs_call(self, 'add', sprites, null, [{}]);
			}
			self['_clear_active'] = false;
			self['_sprites_drawn'] = $m['dict']();
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $mod4,s,$len2,$attr18,$mod3,$attr15,$attr17,$attr16;
			s = '<%s(%d sprites)>';
			return (($mod3=s)!=null && ($mod4=$p['tuple']([self['__class__']['__name__'], (($len2=self['_sprites']) === null?0:
				(typeof $len2['__array'] != 'undefined' ? $len2['__array']['length']:
					(typeof $len2['__len__'] == 'function'?$len2['__len__']():
						(typeof $len2['length'] != 'undefined'?$len2['length']:
							$p['len']($len2)))))]))!=null && typeof $mod3=='string'?
				$p['sprintf']($mod3,$mod4):
				(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
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
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['iter'](self['_sprites']['values']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(sprite) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sprite = arguments[1];
			}
			var $attr20,$attr19;
			return self['_sprites']['__contains__']($m['id'](sprite));
		}
	, 1, [null,null,['self'],['sprite']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr21,$attr22,$len3;
			return (($len3=self['_sprites']) === null?0:
				(typeof $len3['__array'] != 'undefined' ? $len3['__array']['length']:
					(typeof $len3['__len__'] == 'function'?$len3['__len__']():
						(typeof $len3['length'] != 'undefined'?$len3['length']:
							$p['len']($len3)))));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('sprites', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['list'](self['_sprites']['values']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['sprites'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var newgroup;
			newgroup = self['__class__']();
			newgroup['_sprites'] = self['_sprites']['copy']();
			return newgroup;
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('add', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var sprite,$attr26,$iter4_nextval,spriteID,$iter4_idx,$attr28,$attr23,$attr24,$bool7,$iter4_type,$attr27,$iter4_array,$bool8,$iter4_iter,$attr25;
			$iter4_iter = sprites;
			if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter['__iter__']();
				$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				sprite = $iter4_nextval;
				if ((($bool7=$p['hasattr'](sprite, '_groups')) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
					spriteID = $m['id'](sprite);
					if ((($bool8=!self['_sprites']['__contains__'](spriteID)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
						self['_sprites']['__setitem__'](spriteID, sprite);
						sprite['_groups']['__setitem__']($m['id'](self), self);
					}
				}
				else {
					$pyjs_kwargs_call(self, 'add', sprite, null, [{}]);
				}
			}
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('remove', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $iter5_nextval,sprite,$bool10,$iter5_array,$attr34,spriteID,$attr29,$attr33,$attr32,$attr31,$iter5_iter,$iter5_idx,$iter5_type,$attr30,$bool9;
			$iter5_iter = sprites;
			if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter['__iter__']();
				$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				sprite = $iter5_nextval;
				if ((($bool9=$p['hasattr'](sprite, '_groups')) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					spriteID = $m['id'](sprite);
					if ((($bool10=self['_sprites']['__contains__'](spriteID)) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
						self['_sprites']['__delitem__'](spriteID);
						sprite['_groups']['__delitem__']($m['id'](self));
					}
				}
				else {
					$pyjs_kwargs_call(self, 'remove', sprite, null, [{}]);
				}
			}
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('has', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $bool12,sprite,$iter6_idx,$iter6_type,$bool11,$bool13,$bool14,$iter6_array,$attr36,$attr35,$iter6_iter,$iter6_nextval;
			$iter6_iter = sprites;
			if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter['__iter__']();
				$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				sprite = $iter6_nextval;
				if ((($bool11=$p['hasattr'](sprite, '_groups')) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					if ((($bool12=!self['_sprites']['__contains__']($m['id'](sprite))) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
						return false;
					}
				}
				else {
					if ((($bool14=!(($bool13=$pyjs_kwargs_call(self, 'has', sprite, null, [{}])) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
						false :
						(typeof $bool13=='object'?
							(typeof $bool13['__nonzero__']=='function'?
								$bool13['__nonzero__']() :
								(typeof $bool13['__len__']=='function'?
									($bool13['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
						return false;
					}
				}
			}
			return true;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['has'] = $method;
		$method = $pyjs__bind_method2('draw', function(surface) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
			}
			var $attr46,$iter8_idx,sprite,$iter8_array,$bool15,$iter8_iter,$attr47,$attr44,$attr45,$attr42,$iter8_nextval,$attr41,$1,$2,$iter8_type,$attr48,$attr43;
			surface['_blits'](function(){
				var $attr38,sprite,$iter7_nextval,$iter7_iter,$iter7_array,$collcomp1,$attr37,$attr40,$iter7_idx,$attr39,$iter7_type;
	$collcomp1 = $p['list']();
			$iter7_iter = self;
			if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter['__iter__']();
				$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				sprite = $iter7_nextval;
				$collcomp1['append']($p['tuple']([sprite['image'], sprite['rect']]));
			}

	return $collcomp1;}());
			if ((($bool15=self['_clear_active']) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				$m['rectPool']['extend']($p['list'](self['_sprites_drawn']['values']()));
				self['_sprites_drawn']['clear']();
				$iter8_iter = self['_sprites'];
				if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
					$iter8_type = 0;
				} else {
					$iter8_iter = $iter8_iter['__iter__']();
					$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter8_idx = 0;
				while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
					sprite = $iter8_nextval;
					self['_sprites_drawn']['__setitem__'](sprite, $m['rectPool']['copy']((typeof ($1=self['_sprites'])['__array'] != 'undefined'?
						((typeof $1['__array'][$2=sprite]) != 'undefined'?$1['__array'][$2]:
							$1['__getitem__']($2)):
							$1['__getitem__'](sprite))['rect']));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['surface']]);
		$cls_definition['draw'] = $method;
		$method = $pyjs__bind_method2('clear', function(surface, background) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				background = arguments[2];
			}
			var sprite,$3,$iter9_iter,$attr50,$iter9_nextval,$iter9_idx,$bool16,$iter9_array,$4,$iter9_type,$attr49;
			self['_clear_active'] = true;
			if ((($bool16=$p['hasattr'](background, 'width')) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				surface['_blit_clear'](background, self['_sprites_drawn']['values']());
			}
			else {
				$iter9_iter = self['_sprites_drawn'];
				if (typeof ($iter9_array = $iter9_iter['__array']) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter['__iter__']();
					$iter9_type = typeof ($iter9_array = $iter9_iter['__array']) != 'undefined'? 0 : (typeof $iter9_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					sprite = $iter9_nextval;
					background(surface, (typeof ($3=self['_sprites_drawn'])['__array'] != 'undefined'?
						((typeof $3['__array'][$4=sprite]) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__'](sprite)));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['surface'],['background']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('empty', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter10_nextval,sprite,$attr51,$attr52,$iter10_array,$iter10_type,$iter10_iter,$iter10_idx;
			$iter10_iter = self['_sprites']['values']();
			if (typeof ($iter10_array = $iter10_iter['__array']) != 'undefined') {
				$iter10_type = 0;
			} else {
				$iter10_iter = $iter10_iter['__iter__']();
				$iter10_type = typeof ($iter10_array = $iter10_iter['__array']) != 'undefined'? 0 : (typeof $iter10_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter10_idx = 0;
			while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):$p['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
				sprite = $iter10_nextval;
				sprite['_groups']['__delitem__']($m['id'](self));
			}
			self['_sprites']['clear']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['empty'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $iter11_type,sprite,$iter11_iter,$iter11_array,$iter11_nextval,$iter11_idx;
			$iter11_iter = $p['list'](self['_sprites']['values']());
			if (typeof ($iter11_array = $iter11_iter['__array']) != 'undefined') {
				$iter11_type = 0;
			} else {
				$iter11_iter = $iter11_iter['__iter__']();
				$iter11_type = typeof ($iter11_array = $iter11_iter['__array']) != 'undefined'? 0 : (typeof $iter11_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter11_idx = 0;
			while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):$p['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
				sprite = $iter11_nextval;
				$pyjs_kwargs_call(sprite, 'update', args, null, [{}]);
			}
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Group', $p['tuple']($bases), $data);
	})();
	$m['RenderPlain'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		var $bases = new Array($m['Group']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('RenderPlain', $p['tuple']($bases), $data);
	})();
	$m['RenderClear'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		var $bases = new Array($m['Group']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('RenderClear', $p['tuple']($bases), $data);
	})();
	$m['GroupSingle'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$method = $pyjs__bind_method2('__init__', function(sprite) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sprite = arguments[1];
			}
			if (typeof sprite == 'undefined') sprite=arguments['callee']['__args__'][3][1];
			var $bool17;
			if ((($bool17=sprite) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				$m['Group']['__init__'](self, sprite);
			}
			else {
				$m['Group']['__init__'](self);
			}
			return null;
		}
	, 1, [null,null,['self'],['sprite', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__getattr__', function(attr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				attr = arguments[1];
			}
			var $bool18,$bool19,$eq2,$eq1,$attr54,$6,$5,$attr53;
			if ((($bool18=(($eq1=attr)===($eq2='sprite')&&$eq1===null?true:
				($eq1===null?false:($eq2===null?false:
					((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1['__cmp__']=='function'?$eq1['__cmp__']($eq2) === 0:
						((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2['__cmp__']=='function'?$eq2['__cmp__']($eq1) === 0:
							$eq1==$eq2)))))) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
				if ((($bool19=self['_sprites']) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
					return (typeof ($5=$p['list'](self['_sprites']['values']()))['__array'] != 'undefined'?
						((typeof $5['__array'][$6=0]) != 'undefined'?$5['__array'][$6]:
							$5['__getitem__']($6)):
							$5['__getitem__'](0));
				}
				else {
					return null;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['attr']]);
		$cls_definition['__getattr__'] = $method;
		$method = $pyjs__bind_method2('add', function(sprite) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sprite = arguments[1];
			}
			var $attr58,$attr55,$attr57,$attr56;
			self['empty']();
			self['_sprites']['__setitem__']($m['id'](sprite), sprite);
			sprite['_groups']['__setitem__']($m['id'](self), self);
			return null;
		}
	, 1, [null,null,['self'],['sprite']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $attr59,$attr60,$bool20,$8,$7;
			if ((($bool20=self['_sprites']) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				$pyjs_kwargs_call((typeof ($7=$p['list'](self['_sprites']['values']()))['__array'] != 'undefined'?
					((typeof $7['__array'][$8=0]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__'](0)), 'update', args, null, [{}]);
			}
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($m['Group']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('GroupSingle', $p['tuple']($bases), $data);
	})();
	$m['RenderUpdates'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}

			$pyjs_kwargs_call($m['Group'], '__init__', sprites, null, [{}, self]);
			self['changed_areas'] = $p['list']([]);
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('draw', function(surface) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
			}
			var $attr89,$18,$attr100,$19,$attr97,$attr88,$iter13_idx,$iter13_array,$attr82,$attr83,$attr80,$attr81,$attr68,$attr69,$attr84,$attr85,$21,$attr65,$attr67,$attr79,$attr90,$attr105,$bool21,$bool23,$bool22,$attr98,$iter14_nextval,$iter13_type,$attr95,$iter14_array,$iter14_type,sprite,$attr93,$attr94,$attr99,$attr78,$attr91,$attr102,$attr96,$attr106,$iter14_iter,$9,$iter13_nextval,$attr87,$attr92,$iter14_idx,$attr86,$14,$15,$16,$17,$10,$11,$12,$iter13_iter,$attr77,$attr76,$attr75,$attr74,$attr73,$attr72,$attr71,$attr70,$22,$13,$attr101,$20,$attr66;
			surface['_blits'](function(){
				var sprite,$attr64,$iter12_type,$iter12_array,$collcomp2,$attr62,$attr61,$iter12_iter,$attr63,$iter12_idx,$iter12_nextval;
	$collcomp2 = $p['list']();
			$iter12_iter = self;
			if (typeof ($iter12_array = $iter12_iter['__array']) != 'undefined') {
				$iter12_type = 0;
			} else {
				$iter12_iter = $iter12_iter['__iter__']();
				$iter12_type = typeof ($iter12_array = $iter12_iter['__array']) != 'undefined'? 0 : (typeof $iter12_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter12_idx = 0;
			while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):$p['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
				sprite = $iter12_nextval;
				$collcomp2['append']($p['tuple']([sprite['image'], sprite['rect']]));
			}

	return $collcomp2;}());
			if ((($bool21=self['_clear_active']) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
				$m['rectPool']['extend'](self['changed_areas']);
				$p['__setslice'](self['changed_areas'], 0, null, $p['list']([]));
				$iter13_iter = self['_sprites'];
				if (typeof ($iter13_array = $iter13_iter['__array']) != 'undefined') {
					$iter13_type = 0;
				} else {
					$iter13_iter = $iter13_iter['__iter__']();
					$iter13_type = typeof ($iter13_array = $iter13_iter['__array']) != 'undefined'? 0 : (typeof $iter13_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter13_idx = 0;
				while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):$p['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
					sprite = $iter13_nextval;
					if ((($bool22=self['_sprites_drawn']['__contains__'](sprite)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
						if ((($bool23=(typeof ($9=self['_sprites_drawn'])['__array'] != 'undefined'?
							((typeof $9['__array'][$10=sprite]) != 'undefined'?$9['__array'][$10]:
								$9['__getitem__']($10)):
								$9['__getitem__'](sprite))['intersects']((typeof ($11=self['_sprites'])['__array'] != 'undefined'?
							((typeof $11['__array'][$12=sprite]) != 'undefined'?$11['__array'][$12]:
								$11['__getitem__']($12)):
								$11['__getitem__'](sprite))['rect'])) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
							(typeof ($13=self['_sprites_drawn'])['__array'] != 'undefined'?
								((typeof $13['__array'][$14=sprite]) != 'undefined'?$13['__array'][$14]:
									$13['__getitem__']($14)):
									$13['__getitem__'](sprite))['union_ip']((typeof ($15=self['_sprites'])['__array'] != 'undefined'?
								((typeof $15['__array'][$16=sprite]) != 'undefined'?$15['__array'][$16]:
									$15['__getitem__']($16)):
									$15['__getitem__'](sprite))['rect']);
						}
						else {
							self['changed_areas']['append']($m['rectPool']['copy']((typeof ($17=self['_sprites'])['__array'] != 'undefined'?
								((typeof $17['__array'][$18=sprite]) != 'undefined'?$17['__array'][$18]:
									$17['__getitem__']($18)):
									$17['__getitem__'](sprite))['rect']));
						}
					}
					else {
						self['changed_areas']['append']($m['rectPool']['copy']((typeof ($19=self['_sprites'])['__array'] != 'undefined'?
							((typeof $19['__array'][$20=sprite]) != 'undefined'?$19['__array'][$20]:
								$19['__getitem__']($20)):
								$19['__getitem__'](sprite))['rect']));
					}
				}
				self['changed_areas']['extend']($p['list'](self['_sprites_drawn']['values']()));
				self['_sprites_drawn']['clear']();
				$iter14_iter = self['_sprites'];
				if (typeof ($iter14_array = $iter14_iter['__array']) != 'undefined') {
					$iter14_type = 0;
				} else {
					$iter14_iter = $iter14_iter['__iter__']();
					$iter14_type = typeof ($iter14_array = $iter14_iter['__array']) != 'undefined'? 0 : (typeof $iter14_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter14_idx = 0;
				while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):$p['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
					sprite = $iter14_nextval;
					self['_sprites_drawn']['__setitem__'](sprite, $m['rectPool']['copy']((typeof ($21=self['_sprites'])['__array'] != 'undefined'?
						((typeof $21['__array'][$22=sprite]) != 'undefined'?$21['__array'][$22]:
							$21['__getitem__']($22)):
							$21['__getitem__'](sprite))['rect']));
				}
			}
			else {
				$m['rectPool']['extend'](self['changed_areas']);
				$p['__setslice'](self['changed_areas'], 0, null, $p['list']([]));
				self['changed_areas']['extend'](function(){
					var $iter15_iter,$iter15_array,$collcomp3,$iter15_idx,$attr104,$attr103,$iter15_nextval,$iter15_type,sprite;
	$collcomp3 = $p['list']();
				$iter15_iter = self['_sprites']['values']();
				if (typeof ($iter15_array = $iter15_iter['__array']) != 'undefined') {
					$iter15_type = 0;
				} else {
					$iter15_iter = $iter15_iter['__iter__']();
					$iter15_type = typeof ($iter15_array = $iter15_iter['__array']) != 'undefined'? 0 : (typeof $iter15_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter15_idx = 0;
				while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):$p['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
					sprite = $iter15_nextval;
					$collcomp3['append']($m['rectPool']['copy'](sprite['rect']));
				}

	return $collcomp3;}());
			}
			return self['changed_areas'];
		}
	, 1, [null,null,['self'],['surface']]);
		$cls_definition['draw'] = $method;
		var $bases = new Array($m['Group']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('RenderUpdates', $p['tuple']($bases), $data);
	})();
	$m['OrderedUpdates'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}

			self['_orderedsprites'] = $p['list']([]);
			$pyjs_kwargs_call($m['RenderUpdates'], '__init__', sprites, null, [{}, self]);
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr107,$attr108;
			return $p['iter'](self['_orderedsprites']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('sprites', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr110,$attr109;
			return $p['__getslice'](self['_orderedsprites'], 0, null);
		}
	, 1, [null,null,['self']]);
		$cls_definition['sprites'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr111,newgroup,$attr112;
			newgroup = $m['RenderUpdates']['copy'](self);
			newgroup['_orderedsprites'] = $p['__getslice'](self['_orderedsprites'], 0, null);
			return newgroup;
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('add', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $iter16_array,$bool25,sprite,$iter16_type,$attr118,$attr115,spriteID,$attr114,$attr117,$attr116,$iter16_idx,$bool24,$attr113,$iter16_nextval,$iter16_iter;
			$iter16_iter = sprites;
			if (typeof ($iter16_array = $iter16_iter['__array']) != 'undefined') {
				$iter16_type = 0;
			} else {
				$iter16_iter = $iter16_iter['__iter__']();
				$iter16_type = typeof ($iter16_array = $iter16_iter['__array']) != 'undefined'? 0 : (typeof $iter16_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter16_idx = 0;
			while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):$p['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
				sprite = $iter16_nextval;
				if ((($bool24=$p['hasattr'](sprite, '_groups')) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
					spriteID = $m['id'](sprite);
					if ((($bool25=!self['_sprites']['__contains__'](spriteID)) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
						self['_sprites']['__setitem__'](spriteID, sprite);
						sprite['_groups']['__setitem__']($m['id'](self), self);
						self['_orderedsprites']['append'](sprite);
					}
				}
				else {
					$pyjs_kwargs_call(self, 'add', sprite, null, [{}]);
				}
			}
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('remove', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $iter17_nextval,$attr119,$attr123,$iter17_iter,sprite,$attr121,spriteID,$attr122,$attr120,$iter17_array,$bool27,$bool26,$attr124,$iter17_idx,$iter17_type;
			$iter17_iter = sprites;
			if (typeof ($iter17_array = $iter17_iter['__array']) != 'undefined') {
				$iter17_type = 0;
			} else {
				$iter17_iter = $iter17_iter['__iter__']();
				$iter17_type = typeof ($iter17_array = $iter17_iter['__array']) != 'undefined'? 0 : (typeof $iter17_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter17_idx = 0;
			while (typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):$p['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined') {
				sprite = $iter17_nextval;
				if ((($bool26=$p['hasattr'](sprite, '_groups')) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
					spriteID = $m['id'](sprite);
					if ((($bool27=self['_sprites']['__contains__'](spriteID)) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
						self['_sprites']['__delitem__'](spriteID);
						sprite['_groups']['__delitem__']($m['id'](self));
						self['_orderedsprites']['remove'](sprite);
					}
				}
				else {
					$pyjs_kwargs_call(self, 'remove', sprite, null, [{}]);
				}
			}
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('empty', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr125,$attr126;
			$p['__setslice'](self['_orderedsprites'], 0, null, $p['list']([]));
			$m['RenderUpdates']['empty'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['empty'] = $method;
		var $bases = new Array($m['RenderUpdates']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('OrderedUpdates', $p['tuple']($bases), $data);
	})();
	$m['LayeredUpdates'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') sprites['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') sprites['__array']['push'](kwargs);
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
			var $25,$24,$26,$bool29,$bool28,$23;
			self['_layer'] = $p['dict']([]);
			self['_layers'] = $p['list']([]);
			if ((($bool28=!kwargs['__contains__']('default_layer')) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
				self['_default_layer'] = 0;
			}
			else {
				self['_default_layer'] = (typeof ($23=kwargs)['__array'] != 'undefined'?
					((typeof $23['__array'][$24='default_layer']) != 'undefined'?$23['__array'][$24]:
						$23['__getitem__']($24)):
						$23['__getitem__']('default_layer'));
			}
			if ((($bool29=!kwargs['__contains__']('layer')) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
				self['_override_layer'] = null;
			}
			else {
				self['_override_layer'] = (typeof ($25=kwargs)['__array'] != 'undefined'?
					((typeof $25['__array'][$26='layer']) != 'undefined'?$25['__array'][$26]:
						$25['__getitem__']($26)):
						$25['__getitem__']('layer'));
			}
			$pyjs_kwargs_call($m['OrderedUpdates'], '__init__', sprites, null, [{}, self]);
			return null;
		}
	, 1, ['sprites',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var layer,spriteID,$29,$28,$iter19_nextval,$27,$iter19_iter,$iter18_idx,$attr130,$attr127,$attr128,$attr129,$iter18_nextval,$iter18_type,$iter18_iter,$iter19_array,$iter19_idx,layer_data,newgroup,$iter18_array,$36,$34,$35,$32,$33,$30,$31,$attr133,$attr132,$attr131,$iter19_type,$attr136,$attr135,$attr134;
			newgroup = $m['OrderedUpdates']['copy'](self);
			$iter18_iter = self['_layer'];
			if (typeof ($iter18_array = $iter18_iter['__array']) != 'undefined') {
				$iter18_type = 0;
			} else {
				$iter18_iter = $iter18_iter['__iter__']();
				$iter18_type = typeof ($iter18_array = $iter18_iter['__array']) != 'undefined'? 0 : (typeof $iter18_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter18_idx = 0;
			while (typeof ($iter18_nextval=($iter18_type?($iter18_type > 0?$iter18_iter.next(true,false):$p['wrapped_next']($iter18_iter)):$iter18_array[$iter18_idx++])) != 'undefined') {
				layer = $iter18_nextval;
				layer_data = $p['dict']([]);
				layer_data['__setitem__']('sprite', $p['set']());
				$iter19_iter = (typeof ($29=(typeof ($27=self['_layer'])['__array'] != 'undefined'?
					((typeof $27['__array'][$28=layer]) != 'undefined'?$27['__array'][$28]:
						$27['__getitem__']($28)):
						$27['__getitem__'](layer)))['__array'] != 'undefined'?
					((typeof $29['__array'][$30='sprite']) != 'undefined'?$29['__array'][$30]:
						$29['__getitem__']($30)):
						$29['__getitem__']('sprite'));
				if (typeof ($iter19_array = $iter19_iter['__array']) != 'undefined') {
					$iter19_type = 0;
				} else {
					$iter19_iter = $iter19_iter['__iter__']();
					$iter19_type = typeof ($iter19_array = $iter19_iter['__array']) != 'undefined'? 0 : (typeof $iter19_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter19_idx = 0;
				while (typeof ($iter19_nextval=($iter19_type?($iter19_type > 0?$iter19_iter.next(true,false):$p['wrapped_next']($iter19_iter)):$iter19_array[$iter19_idx++])) != 'undefined') {
					spriteID = $iter19_nextval;
					(typeof ($31=layer_data)['__array'] != 'undefined'?
						((typeof $31['__array'][$32='sprite']) != 'undefined'?$31['__array'][$32]:
							$31['__getitem__']($32)):
							$31['__getitem__']('sprite'))['add'](spriteID);
				}
				layer_data['__setitem__']('index', $p['__getslice']((typeof ($35=(typeof ($33=self['_layer'])['__array'] != 'undefined'?
					((typeof $33['__array'][$34=layer]) != 'undefined'?$33['__array'][$34]:
						$33['__getitem__']($34)):
						$33['__getitem__'](layer)))['__array'] != 'undefined'?
					((typeof $35['__array'][$36='index']) != 'undefined'?$35['__array'][$36]:
						$35['__getitem__']($36)):
						$35['__getitem__']('index')), 0, null));
				newgroup['_layer']['__setitem__'](layer, layer_data);
			}
			newgroup['_layers'] = $p['__getslice'](self['_layers'], 0, null);
			newgroup['_default_layer'] = self['_default_layer'];
			return newgroup;
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('add', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') sprites['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') sprites['__array']['push'](kwargs);
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
			var spriteID,$iter20_array,$49,$48,$43,$42,$41,$40,$47,$46,$45,$44,$augexpr1,$iter20_iter,$augexpr3,$augexpr2,$augsub3,$augsub2,$augsub1,$58,$59,$iter20_idx,$50,$51,$52,$53,$54,$55,$56,$57,$iter21_type,$attr168,$attr169,$attr164,$attr165,$attr166,$attr167,$attr160,$attr161,$attr162,$attr163,$65,$64,$66,$61,$60,$63,$62,_layer,$iter21_iter,$iter20_type,$attr170,$bool32,$bool33,$bool30,$bool31,$bool36,$bool37,$bool34,$bool35,layer,$attr142,$attr143,$attr140,$attr141,$attr146,$attr147,$attr144,$attr145,$attr148,$attr149,sprite,$iter21_nextval,$attr155,$attr154,$attr157,$attr156,$attr151,$attr150,$attr153,$attr152,$attr159,$attr158,$iter20_nextval,$iter21_idx,index,$38,$39,i,$37,$attr137,$iter21_array,$attr139,$attr138;
			if ((($bool30=kwargs['__contains__']('layer')) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
				self['_override_layer'] = (typeof ($37=kwargs)['__array'] != 'undefined'?
					((typeof $37['__array'][$38='layer']) != 'undefined'?$37['__array'][$38]:
						$37['__getitem__']($38)):
						$37['__getitem__']('layer'));
			}
			$iter20_iter = sprites;
			if (typeof ($iter20_array = $iter20_iter['__array']) != 'undefined') {
				$iter20_type = 0;
			} else {
				$iter20_iter = $iter20_iter['__iter__']();
				$iter20_type = typeof ($iter20_array = $iter20_iter['__array']) != 'undefined'? 0 : (typeof $iter20_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter20_idx = 0;
			while (typeof ($iter20_nextval=($iter20_type?($iter20_type > 0?$iter20_iter.next(true,false):$p['wrapped_next']($iter20_iter)):$iter20_array[$iter20_idx++])) != 'undefined') {
				sprite = $iter20_nextval;
				if ((($bool31=$p['hasattr'](sprite, '_groups')) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
					spriteID = $m['id'](sprite);
					if ((($bool32=!self['_sprites']['__contains__'](spriteID)) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
						self['_sprites']['__setitem__'](spriteID, sprite);
						sprite['_groups']['__setitem__']($m['id'](self), self);
						if ((($bool33=(self['_override_layer'] !== null)) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
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
							layer = self['_override_layer'];
						}
						else if ((($bool34=$p['hasattr'](sprite, '_layer')) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
							layer = sprite['_layer'];
						}
						else {
							layer = self['_default_layer'];
						}
						if ((($bool35=!self['_layer']['__contains__'](layer)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
							self['_add_layer'](layer);
						}
						(typeof ($41=(typeof ($39=self['_layer'])['__array'] != 'undefined'?
							((typeof $39['__array'][$40=layer]) != 'undefined'?$39['__array'][$40]:
								$39['__getitem__']($40)):
								$39['__getitem__'](layer)))['__array'] != 'undefined'?
							((typeof $41['__array'][$42='sprite']) != 'undefined'?$41['__array'][$42]:
								$41['__getitem__']($42)):
								$41['__getitem__']('sprite'))['add'](spriteID);
						i = (typeof ($47=(typeof ($45=(typeof ($43=self['_layer'])['__array'] != 'undefined'?
							((typeof $43['__array'][$44=layer]) != 'undefined'?$43['__array'][$44]:
								$43['__getitem__']($44)):
								$43['__getitem__'](layer)))['__array'] != 'undefined'?
							((typeof $45['__array'][$46='index']) != 'undefined'?$45['__array'][$46]:
								$45['__getitem__']($46)):
								$45['__getitem__']('index')))['__array'] != 'undefined'?
							((typeof $47['__array'][$48=1]) != 'undefined'?$47['__array'][$48]:
								$47['__getitem__']($48)):
								$47['__getitem__'](1));
						var $augsub1 = 1;
						var $augexpr1 = (typeof ($51=(typeof ($49=self['_layer'])['__array'] != 'undefined'?
							((typeof $49['__array'][$50=layer]) != 'undefined'?$49['__array'][$50]:
								$49['__getitem__']($50)):
								$49['__getitem__'](layer)))['__array'] != 'undefined'?
							((typeof $51['__array'][$52='index']) != 'undefined'?$51['__array'][$52]:
								$51['__getitem__']($52)):
								$51['__getitem__']('index'));
						$augexpr1['__setitem__']($augsub1, ((typeof ($53=$augexpr1)['__array'] != 'undefined'?
							((typeof $53['__array'][$54=$augsub1]) != 'undefined'?$53['__array'][$54]:
								$53['__getitem__']($54)):
								$53['__getitem__']($augsub1)))+(1));
						index = self['_layers']['index'](layer);
						if ((($bool36=$p['__getslice'](self['_layers'], index, null)) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
							$iter21_iter = $p['__getslice'](self['_layers'], (index)+(1), null);
							if (typeof ($iter21_array = $iter21_iter['__array']) != 'undefined') {
								$iter21_type = 0;
							} else {
								$iter21_iter = $iter21_iter['__iter__']();
								$iter21_type = typeof ($iter21_array = $iter21_iter['__array']) != 'undefined'? 0 : (typeof $iter21_iter['$genfunc'] == 'function'? 1 : -1);
							}
							$iter21_idx = 0;
							while (typeof ($iter21_nextval=($iter21_type?($iter21_type > 0?$iter21_iter.next(true,false):$p['wrapped_next']($iter21_iter)):$iter21_array[$iter21_idx++])) != 'undefined') {
								_layer = $iter21_nextval;
								var $augsub2 = 0;
								var $augexpr2 = (typeof ($57=(typeof ($55=self['_layer'])['__array'] != 'undefined'?
									((typeof $55['__array'][$56=_layer]) != 'undefined'?$55['__array'][$56]:
										$55['__getitem__']($56)):
										$55['__getitem__'](_layer)))['__array'] != 'undefined'?
									((typeof $57['__array'][$58='index']) != 'undefined'?$57['__array'][$58]:
										$57['__getitem__']($58)):
										$57['__getitem__']('index'));
								$augexpr2['__setitem__']($augsub2, ((typeof ($59=$augexpr2)['__array'] != 'undefined'?
									((typeof $59['__array'][$60=$augsub2]) != 'undefined'?$59['__array'][$60]:
										$59['__getitem__']($60)):
										$59['__getitem__']($augsub2)))+(1));
								var $augsub3 = 1;
								var $augexpr3 = (typeof ($63=(typeof ($61=self['_layer'])['__array'] != 'undefined'?
									((typeof $61['__array'][$62=_layer]) != 'undefined'?$61['__array'][$62]:
										$61['__getitem__']($62)):
										$61['__getitem__'](_layer)))['__array'] != 'undefined'?
									((typeof $63['__array'][$64='index']) != 'undefined'?$63['__array'][$64]:
										$63['__getitem__']($64)):
										$63['__getitem__']('index'));
								$augexpr3['__setitem__']($augsub3, ((typeof ($65=$augexpr3)['__array'] != 'undefined'?
									((typeof $65['__array'][$66=$augsub3]) != 'undefined'?$65['__array'][$66]:
										$65['__getitem__']($66)):
										$65['__getitem__']($augsub3)))+(1));
							}
						}
						self['_orderedsprites']['insert'](i, sprite);
					}
				}
				else {
					if ((($bool37=(self['_override_layer'] !== null)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
						kwargs['__setitem__']('layer', self['_override_layer']);
					}
					$pyjs_kwargs_call(self, 'add', sprite, kwargs, [{}]);
				}
			}
			self['_override_layer'] = null;
			return null;
		}
	, 1, ['sprites',['kwargs'],['self']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('_add_layer', function(layer) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				layer = arguments[1];
			}
			var index,prelayer,$69,$68,$67,$72,$73,$70,$71,$74,$attr178,$attr177,$attr176,$attr175,$attr174,$attr173,$attr172,$attr171,i,$bool38;
			self['_layers']['append'](layer);
			self['_layers']['sort']();
			index = self['_layers']['index'](layer);
			if ((($bool38=$p['__getslice'](self['_layers'], 0, index)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
				prelayer = (typeof ($67=self['_layers'])['__array'] != 'undefined'?
					((typeof $67['__array'][$68=(index)-(1)]) != 'undefined'?$67['__array'][$68]:
						$67['__getitem__']($68)):
						$67['__getitem__']((index)-(1)));
				i = (typeof ($73=(typeof ($71=(typeof ($69=self['_layer'])['__array'] != 'undefined'?
					((typeof $69['__array'][$70=prelayer]) != 'undefined'?$69['__array'][$70]:
						$69['__getitem__']($70)):
						$69['__getitem__'](prelayer)))['__array'] != 'undefined'?
					((typeof $71['__array'][$72='index']) != 'undefined'?$71['__array'][$72]:
						$71['__getitem__']($72)):
						$71['__getitem__']('index')))['__array'] != 'undefined'?
					((typeof $73['__array'][$74=1]) != 'undefined'?$73['__array'][$74]:
						$73['__getitem__']($74)):
						$73['__getitem__'](1));
			}
			else {
				i = 0;
			}
			self['_layer']['__setitem__'](layer, $p['dict']([['sprite', $p['set']()], ['index', $p['list']([i, i])]]));
			return null;
		}
	, 1, [null,null,['self'],['layer']]);
		$cls_definition['_add_layer'] = $method;
		$method = $pyjs__bind_method2('remove', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $attr191,$attr190,$attr193,$attr192,$attr195,$attr194,$attr197,$attr196,$attr199,$attr198,spriteID,$iter24_iter,$augexpr5,$augexpr4,$augexpr6,$augsub6,$augsub5,$augsub4,$iter22_nextval,$attr202,$114,$iter23_type,$iter22_array,$107,index,$83,$89,$106,$bool40,$109,$108,$attr205,$attr204,$attr206,$attr201,$attr200,$attr203,$iter22_iter,$eq3,$bool43,$bool42,$bool41,$88,$87,$86,$85,$84,_layer,$82,$81,$80,$eq4,$76,$77,$attr179,$iter24_idx,$78,$79,$iter22_idx,$bool39,$98,$99,$94,$95,$96,$97,$90,$91,$92,$93,sprite,$iter23_array,$iter23_nextval,$75,$iter24_array,$116,$117,layer,$115,$112,$113,$110,$111,$118,$iter23_idx,$iter22_type,$iter23_iter,$iter24_type,$iter24_nextval,$101,$100,$103,$102,$105,$104,$attr188,$attr189,$attr186,$attr187,$attr184,$attr185,$attr182,$attr183,$attr180,$attr181,i;
			$iter22_iter = sprites;
			if (typeof ($iter22_array = $iter22_iter['__array']) != 'undefined') {
				$iter22_type = 0;
			} else {
				$iter22_iter = $iter22_iter['__iter__']();
				$iter22_type = typeof ($iter22_array = $iter22_iter['__array']) != 'undefined'? 0 : (typeof $iter22_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter22_idx = 0;
			while (typeof ($iter22_nextval=($iter22_type?($iter22_type > 0?$iter22_iter.next(true,false):$p['wrapped_next']($iter22_iter)):$iter22_array[$iter22_idx++])) != 'undefined') {
				sprite = $iter22_nextval;
				if ((($bool39=$p['hasattr'](sprite, '_groups')) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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
					spriteID = $m['id'](sprite);
					if ((($bool40=self['_sprites']['__contains__'](spriteID)) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
						self['_sprites']['__delitem__'](spriteID);
						sprite['_groups']['__delitem__']($m['id'](self));
						$iter23_iter = self['_layers'];
						if (typeof ($iter23_array = $iter23_iter['__array']) != 'undefined') {
							$iter23_type = 0;
						} else {
							$iter23_iter = $iter23_iter['__iter__']();
							$iter23_type = typeof ($iter23_array = $iter23_iter['__array']) != 'undefined'? 0 : (typeof $iter23_iter['$genfunc'] == 'function'? 1 : -1);
						}
						$iter23_idx = 0;
						while (typeof ($iter23_nextval=($iter23_type?($iter23_type > 0?$iter23_iter.next(true,false):$p['wrapped_next']($iter23_iter)):$iter23_array[$iter23_idx++])) != 'undefined') {
							layer = $iter23_nextval;
							if ((($bool41=(typeof ($77=(typeof ($75=self['_layer'])['__array'] != 'undefined'?
								((typeof $75['__array'][$76=layer]) != 'undefined'?$75['__array'][$76]:
									$75['__getitem__']($76)):
									$75['__getitem__'](layer)))['__array'] != 'undefined'?
								((typeof $77['__array'][$78='sprite']) != 'undefined'?$77['__array'][$78]:
									$77['__getitem__']($78)):
									$77['__getitem__']('sprite'))['__contains__']($p['str'](spriteID))) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
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
								break;
							}
						}
						(typeof ($81=(typeof ($79=self['_layer'])['__array'] != 'undefined'?
							((typeof $79['__array'][$80=layer]) != 'undefined'?$79['__array'][$80]:
								$79['__getitem__']($80)):
								$79['__getitem__'](layer)))['__array'] != 'undefined'?
							((typeof $81['__array'][$82='sprite']) != 'undefined'?$81['__array'][$82]:
								$81['__getitem__']($82)):
								$81['__getitem__']('sprite'))['remove'](spriteID);
						i = (typeof ($87=(typeof ($85=(typeof ($83=self['_layer'])['__array'] != 'undefined'?
							((typeof $83['__array'][$84=layer]) != 'undefined'?$83['__array'][$84]:
								$83['__getitem__']($84)):
								$83['__getitem__'](layer)))['__array'] != 'undefined'?
							((typeof $85['__array'][$86='index']) != 'undefined'?$85['__array'][$86]:
								$85['__getitem__']($86)):
								$85['__getitem__']('index')))['__array'] != 'undefined'?
							((typeof $87['__array'][$88=1]) != 'undefined'?$87['__array'][$88]:
								$87['__getitem__']($88)):
								$87['__getitem__'](1));
						var $augsub4 = 1;
						var $augexpr4 = (typeof ($91=(typeof ($89=self['_layer'])['__array'] != 'undefined'?
							((typeof $89['__array'][$90=layer]) != 'undefined'?$89['__array'][$90]:
								$89['__getitem__']($90)):
								$89['__getitem__'](layer)))['__array'] != 'undefined'?
							((typeof $91['__array'][$92='index']) != 'undefined'?$91['__array'][$92]:
								$91['__getitem__']($92)):
								$91['__getitem__']('index'));
						$augexpr4['__setitem__']($augsub4, ((typeof ($93=$augexpr4)['__array'] != 'undefined'?
							((typeof $93['__array'][$94=$augsub4]) != 'undefined'?$93['__array'][$94]:
								$93['__getitem__']($94)):
								$93['__getitem__']($augsub4)))-(1));
						index = self['_layers']['index'](layer);
						if ((($bool42=$p['__getslice'](self['_layers'], index, null)) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
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
							$iter24_iter = $p['__getslice'](self['_layers'], (index)+(1), null);
							if (typeof ($iter24_array = $iter24_iter['__array']) != 'undefined') {
								$iter24_type = 0;
							} else {
								$iter24_iter = $iter24_iter['__iter__']();
								$iter24_type = typeof ($iter24_array = $iter24_iter['__array']) != 'undefined'? 0 : (typeof $iter24_iter['$genfunc'] == 'function'? 1 : -1);
							}
							$iter24_idx = 0;
							while (typeof ($iter24_nextval=($iter24_type?($iter24_type > 0?$iter24_iter.next(true,false):$p['wrapped_next']($iter24_iter)):$iter24_array[$iter24_idx++])) != 'undefined') {
								_layer = $iter24_nextval;
								var $augsub5 = 0;
								var $augexpr5 = (typeof ($97=(typeof ($95=self['_layer'])['__array'] != 'undefined'?
									((typeof $95['__array'][$96=_layer]) != 'undefined'?$95['__array'][$96]:
										$95['__getitem__']($96)):
										$95['__getitem__'](_layer)))['__array'] != 'undefined'?
									((typeof $97['__array'][$98='index']) != 'undefined'?$97['__array'][$98]:
										$97['__getitem__']($98)):
										$97['__getitem__']('index'));
								$augexpr5['__setitem__']($augsub5, ((typeof ($99=$augexpr5)['__array'] != 'undefined'?
									((typeof $99['__array'][$100=$augsub5]) != 'undefined'?$99['__array'][$100]:
										$99['__getitem__']($100)):
										$99['__getitem__']($augsub5)))-(1));
								var $augsub6 = 1;
								var $augexpr6 = (typeof ($103=(typeof ($101=self['_layer'])['__array'] != 'undefined'?
									((typeof $101['__array'][$102=_layer]) != 'undefined'?$101['__array'][$102]:
										$101['__getitem__']($102)):
										$101['__getitem__'](_layer)))['__array'] != 'undefined'?
									((typeof $103['__array'][$104='index']) != 'undefined'?$103['__array'][$104]:
										$103['__getitem__']($104)):
										$103['__getitem__']('index'));
								$augexpr6['__setitem__']($augsub6, ((typeof ($105=$augexpr6)['__array'] != 'undefined'?
									((typeof $105['__array'][$106=$augsub6]) != 'undefined'?$105['__array'][$106]:
										$105['__getitem__']($106)):
										$105['__getitem__']($augsub6)))-(1));
							}
						}
						if ((($bool43=(($eq3=(typeof ($111=(typeof ($109=(typeof ($107=self['_layer'])['__array'] != 'undefined'?
							((typeof $107['__array'][$108=layer]) != 'undefined'?$107['__array'][$108]:
								$107['__getitem__']($108)):
								$107['__getitem__'](layer)))['__array'] != 'undefined'?
							((typeof $109['__array'][$110='index']) != 'undefined'?$109['__array'][$110]:
								$109['__getitem__']($110)):
								$109['__getitem__']('index')))['__array'] != 'undefined'?
							((typeof $111['__array'][$112=0]) != 'undefined'?$111['__array'][$112]:
								$111['__getitem__']($112)):
								$111['__getitem__'](0)))===($eq4=(typeof ($117=(typeof ($115=(typeof ($113=self['_layer'])['__array'] != 'undefined'?
							((typeof $113['__array'][$114=layer]) != 'undefined'?$113['__array'][$114]:
								$113['__getitem__']($114)):
								$113['__getitem__'](layer)))['__array'] != 'undefined'?
							((typeof $115['__array'][$116='index']) != 'undefined'?$115['__array'][$116]:
								$115['__getitem__']($116)):
								$115['__getitem__']('index')))['__array'] != 'undefined'?
							((typeof $117['__array'][$118=1]) != 'undefined'?$117['__array'][$118]:
								$117['__getitem__']($118)):
								$117['__getitem__'](1)))&&$eq3===null?true:
							($eq3===null?false:($eq4===null?false:
								((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3['__cmp__']=='function'?$eq3['__cmp__']($eq4) === 0:
									((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4['__cmp__']=='function'?$eq4['__cmp__']($eq3) === 0:
										$eq3==$eq4)))))) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
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
							self['_layer']['__delitem__'](layer);
							self['_layers']['remove'](layer);
						}
						self['_orderedsprites']['remove'](sprite);
					}
				}
				else {
					$pyjs_kwargs_call(self, 'remove', sprite, null, [{}]);
				}
			}
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('empty', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr207,$attr208;
			$p['__setslice'](self['_layers'], 0, null, $p['list']([]));
			self['_layer']['clear']();
			$m['OrderedUpdates']['empty'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['empty'] = $method;
		$method = $pyjs__bind_method2('get_sprites_at', function(position) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				position = arguments[1];
			}
			var colliding_sprites,$bool44,sprite,$iter25_nextval,$iter25_iter,$iter25_idx,$iter25_type,$iter25_array;
			colliding_sprites = $p['list']([]);
			$iter25_iter = self['_orderedsprites'];
			if (typeof ($iter25_array = $iter25_iter['__array']) != 'undefined') {
				$iter25_type = 0;
			} else {
				$iter25_iter = $iter25_iter['__iter__']();
				$iter25_type = typeof ($iter25_array = $iter25_iter['__array']) != 'undefined'? 0 : (typeof $iter25_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter25_idx = 0;
			while (typeof ($iter25_nextval=($iter25_type?($iter25_type > 0?$iter25_iter.next(true,false):$p['wrapped_next']($iter25_iter)):$iter25_array[$iter25_idx++])) != 'undefined') {
				sprite = $iter25_nextval;
				if ((($bool44=sprite['rect']['collidepoint'](position)) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
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
					colliding_sprites['append'](sprite);
				}
			}
			return colliding_sprites;
		}
	, 1, [null,null,['self'],['position']]);
		$cls_definition['get_sprites_at'] = $method;
		$method = $pyjs__bind_method2('get_sprite', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $119,$attr209,$attr210,$120;
			return (typeof ($119=self['_orderedsprites'])['__array'] != 'undefined'?
				((typeof $119['__array'][$120=index]) != 'undefined'?$119['__array'][$120]:
					$119['__getitem__']($120)):
					$119['__getitem__'](index));
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['get_sprite'] = $method;
		$method = $pyjs__bind_method2('remove_sprites_of_layer', function(layer) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				layer = arguments[1];
			}
			var $iter26_iter,$iter26_nextval,sprite,$iter26_array,$iter26_type,i,j,$123,$iter26_idx,$attr213,$attr212,$122,$121,$attr211,sprites,$attr214,$124;
			var $tupleassign1 = $p['__ass_unpack']((typeof ($123=(typeof ($121=self['_layer'])['__array'] != 'undefined'?
				((typeof $121['__array'][$122=layer]) != 'undefined'?$121['__array'][$122]:
					$121['__getitem__']($122)):
					$121['__getitem__'](layer)))['__array'] != 'undefined'?
				((typeof $123['__array'][$124='index']) != 'undefined'?$123['__array'][$124]:
					$123['__getitem__']($124)):
					$123['__getitem__']('index')), 2, null);
			i = $tupleassign1[0];
			j = $tupleassign1[1];
			sprites = $p['__getslice'](self['_orderedsprites'], i, j);
			$iter26_iter = sprites;
			if (typeof ($iter26_array = $iter26_iter['__array']) != 'undefined') {
				$iter26_type = 0;
			} else {
				$iter26_iter = $iter26_iter['__iter__']();
				$iter26_type = typeof ($iter26_array = $iter26_iter['__array']) != 'undefined'? 0 : (typeof $iter26_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter26_idx = 0;
			while (typeof ($iter26_nextval=($iter26_type?($iter26_type > 0?$iter26_iter.next(true,false):$p['wrapped_next']($iter26_iter)):$iter26_array[$iter26_idx++])) != 'undefined') {
				sprite = $iter26_nextval;
				self['remove'](sprite);
			}
			return sprites;
		}
	, 1, [null,null,['self'],['layer']]);
		$cls_definition['remove_sprites_of_layer'] = $method;
		$method = $pyjs__bind_method2('layers', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr216,$attr215;
			return $p['__getslice'](self['_layers'], 0, null);
		}
	, 1, [null,null,['self']]);
		$cls_definition['layers'] = $method;
		$method = $pyjs__bind_method2('change_layer', function(sprite, new_layer) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sprite = arguments[1];
				new_layer = arguments[2];
			}

			self['remove'](sprite);
			$pyjs_kwargs_call(self, 'add', null, null, [{'layer':new_layer}, sprite]);
			return null;
		}
	, 1, [null,null,['self'],['sprite'],['new_layer']]);
		$cls_definition['change_layer'] = $method;
		$method = $pyjs__bind_method2('get_layer_of_sprite', function(sprite) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sprite = arguments[1];
			}
			var $iter27_nextval,layer,$iter27_array,$bool45,$126,$iter27_idx,$attr218,$128,$iter27_iter,$125,$127,$attr217,$iter27_type;
			$iter27_iter = self['_layers'];
			if (typeof ($iter27_array = $iter27_iter['__array']) != 'undefined') {
				$iter27_type = 0;
			} else {
				$iter27_iter = $iter27_iter['__iter__']();
				$iter27_type = typeof ($iter27_array = $iter27_iter['__array']) != 'undefined'? 0 : (typeof $iter27_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter27_idx = 0;
			while (typeof ($iter27_nextval=($iter27_type?($iter27_type > 0?$iter27_iter.next(true,false):$p['wrapped_next']($iter27_iter)):$iter27_array[$iter27_idx++])) != 'undefined') {
				layer = $iter27_nextval;
				if ((($bool45=(typeof ($127=(typeof ($125=self['_layer'])['__array'] != 'undefined'?
					((typeof $125['__array'][$126=layer]) != 'undefined'?$125['__array'][$126]:
						$125['__getitem__']($126)):
						$125['__getitem__'](layer)))['__array'] != 'undefined'?
					((typeof $127['__array'][$128='sprite']) != 'undefined'?$127['__array'][$128]:
						$127['__getitem__']($128)):
						$127['__getitem__']('sprite'))['__contains__']($p['str']($m['id'](sprite)))) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
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
					return layer;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['sprite']]);
		$cls_definition['get_layer_of_sprite'] = $method;
		$method = $pyjs__bind_method2('get_top_layer', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $130,$attr219,$129,$attr220;
			return (typeof ($129=self['_layers'])['__array'] != 'undefined'?
				((typeof $129['__array'][$130=-(1)]) != 'undefined'?$129['__array'][$130]:
					$129['__getitem__']($130)):
					$129['__getitem__'](-(1)));
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_top_layer'] = $method;
		$method = $pyjs__bind_method2('get_bottom_layer', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $131,$132,$attr222,$attr221;
			return (typeof ($131=self['_layers'])['__array'] != 'undefined'?
				((typeof $131['__array'][$132=0]) != 'undefined'?$131['__array'][$132]:
					$131['__getitem__']($132)):
					$131['__getitem__'](0));
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_bottom_layer'] = $method;
		$method = $pyjs__bind_method2('move_to_front', function(sprite) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sprite = arguments[1];
			}
			var $attr224,$attr223,$133,$134;
			self['remove'](sprite);
			$pyjs_kwargs_call(self, 'add', null, null, [{'layer':(typeof ($133=self['_layers'])['__array'] != 'undefined'?
				((typeof $133['__array'][$134=-(1)]) != 'undefined'?$133['__array'][$134]:
					$133['__getitem__']($134)):
					$133['__getitem__'](-(1)))}, sprite]);
			return null;
		}
	, 1, [null,null,['self'],['sprite']]);
		$cls_definition['move_to_front'] = $method;
		$method = $pyjs__bind_method2('move_to_back', function(sprite) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sprite = arguments[1];
			}
			var $attr226,$attr225,new_layer,$135,$136;
			new_layer = ((typeof ($135=self['_layers'])['__array'] != 'undefined'?
				((typeof $135['__array'][$136=0]) != 'undefined'?$135['__array'][$136]:
					$135['__getitem__']($136)):
					$135['__getitem__'](0)))-(1);
			self['remove'](sprite);
			$pyjs_kwargs_call(self, 'add', null, null, [{'layer':new_layer}, sprite]);
			return null;
		}
	, 1, [null,null,['self'],['sprite']]);
		$cls_definition['move_to_back'] = $method;
		$method = $pyjs__bind_method2('get_top_sprite', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr227,$138,$137,$attr228;
			return (typeof ($137=self['_orderedsprites'])['__array'] != 'undefined'?
				((typeof $137['__array'][$138=-(1)]) != 'undefined'?$137['__array'][$138]:
					$137['__getitem__']($138)):
					$137['__getitem__'](-(1)));
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_top_sprite'] = $method;
		$method = $pyjs__bind_method2('get_sprites_from_layer', function(layer) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				layer = arguments[1];
			}
			var $attr230,$attr231,$attr232,i,j,$attr229,$139,$141,$140,$142;
			var $tupleassign2 = $p['__ass_unpack']((typeof ($141=(typeof ($139=self['_layer'])['__array'] != 'undefined'?
				((typeof $139['__array'][$140=layer]) != 'undefined'?$139['__array'][$140]:
					$139['__getitem__']($140)):
					$139['__getitem__'](layer)))['__array'] != 'undefined'?
				((typeof $141['__array'][$142='index']) != 'undefined'?$141['__array'][$142]:
					$141['__getitem__']($142)):
					$141['__getitem__']('index')), 2, null);
			i = $tupleassign2[0];
			j = $tupleassign2[1];
			return $p['__getslice'](self['_orderedsprites'], i, j);
		}
	, 1, [null,null,['self'],['layer']]);
		$cls_definition['get_sprites_from_layer'] = $method;
		$method = $pyjs__bind_method2('switch_layer', function(layer1, layer2) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				layer1 = arguments[1];
				layer2 = arguments[2];
			}
			var sprites2,sprites1;
			sprites1 = self['remove_sprites_of_layer'](layer1);
			sprites2 = self['remove_sprites_of_layer'](layer2);
			$pyjs_kwargs_call(self, 'add', null, null, [{'layer':layer2}, sprites1]);
			$pyjs_kwargs_call(self, 'add', null, null, [{'layer':layer1}, sprites2]);
			return null;
		}
	, 1, [null,null,['self'],['layer1'],['layer2']]);
		$cls_definition['switch_layer'] = $method;
		var $bases = new Array($m['OrderedUpdates']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('LayeredUpdates', $p['tuple']($bases), $data);
	})();
	$m['LayeredDirty'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var sprites = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}

			$pyjs_kwargs_call(null, $m['LayeredUpdates'], sprites, null, [{}, self]);
			return null;
		}
	, 1, ['sprites',null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['LayeredUpdates']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('LayeredDirty', $p['tuple']($bases), $data);
	})();
	$m['spritecollide'] = function(sprite, group, dokill, collided) {
		if (typeof collided == 'undefined') collided=arguments['callee']['__args__'][5][1];
		var $attr234,$bool50,$bool51,$attr233,$iter28_idx,collision,$iter29_type,_sprite,$iter29_array,$bool47,$bool46,$and1,$and2,collide,$bool49,$bool48,$iter29_nextval,$iter28_iter,$iter28_type,$iter28_array,$iter28_nextval,$iter29_idx,$iter29_iter;
		collide = $p['list']([]);
		collision = false;
		$iter28_iter = group;
		if (typeof ($iter28_array = $iter28_iter['__array']) != 'undefined') {
			$iter28_type = 0;
		} else {
			$iter28_iter = $iter28_iter['__iter__']();
			$iter28_type = typeof ($iter28_array = $iter28_iter['__array']) != 'undefined'? 0 : (typeof $iter28_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter28_idx = 0;
		while (typeof ($iter28_nextval=($iter28_type?($iter28_type > 0?$iter28_iter.next(true,false):$p['wrapped_next']($iter28_iter)):$iter28_array[$iter28_idx++])) != 'undefined') {
			_sprite = $iter28_nextval;
			if ((($bool46=sprite['rect']['intersects'](_sprite['rect'])) === null || $bool46 === false || $bool46 === 0 || $bool46 === '' ?
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
				if ((($bool47=collided) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
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
					if ((($bool49=!(($bool48=collided(sprite, _sprite)) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
						false :
						(typeof $bool48=='object'?
							(typeof $bool48['__nonzero__']=='function'?
								$bool48['__nonzero__']() :
								(typeof $bool48['__len__']=='function'?
									($bool48['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
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
						continue;
					}
				}
				collide['append'](_sprite);
				collision = true;
			}
		}
		if ((($bool51=((($bool50=$and1=collision) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
			false :
			(typeof $bool50=='object'?
				(typeof $bool50['__nonzero__']=='function'?
					$bool50['__nonzero__']() :
					(typeof $bool50['__len__']=='function'?
						($bool50['__len__']()>0 ?
							true :
							false) :
						true ) ) :
				 true ) )?dokill:$and1)) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
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
			$iter29_iter = collide;
			if (typeof ($iter29_array = $iter29_iter['__array']) != 'undefined') {
				$iter29_type = 0;
			} else {
				$iter29_iter = $iter29_iter['__iter__']();
				$iter29_type = typeof ($iter29_array = $iter29_iter['__array']) != 'undefined'? 0 : (typeof $iter29_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter29_idx = 0;
			while (typeof ($iter29_nextval=($iter29_type?($iter29_type > 0?$iter29_iter.next(true,false):$p['wrapped_next']($iter29_iter)):$iter29_array[$iter29_idx++])) != 'undefined') {
				_sprite = $iter29_nextval;
				_sprite['kill']();
			}
		}
		return collide;
	};
	$m['spritecollide']['__name__'] = 'spritecollide';

	$m['spritecollide']['__bind_type__'] = 0;
	$m['spritecollide']['__args__'] = [null,null,['sprite'],['group'],['dokill'],['collided', null]];
	$m['collide_rect'] = function(sprite1, sprite2) {
		var $attr235,$attr236;
		return sprite1['rect']['intersects'](sprite2['rect']);
	};
	$m['collide_rect']['__name__'] = 'collide_rect';

	$m['collide_rect']['__bind_type__'] = 0;
	$m['collide_rect']['__args__'] = [null,null,['sprite1'],['sprite2']];
	$m['collide_rect_ratio'] = function(ratio) {
		var obj,$lambda1;
		obj = (typeof _collide_rect_ratio == "undefined"?$m['_collide_rect_ratio']:_collide_rect_ratio)(ratio);
		var 		$lambda1 = function(sprite1, sprite2) {

			return obj['__call__'](sprite1, sprite2);
		};
		$lambda1['__name__'] = '$lambda1';

		$lambda1['__bind_type__'] = 0;
		$lambda1['__args__'] = [null,null,['sprite1'],['sprite2']];
		return $lambda1;
	};
	$m['collide_rect_ratio']['__name__'] = 'collide_rect_ratio';

	$m['collide_rect_ratio']['__bind_type__'] = 0;
	$m['collide_rect_ratio']['__args__'] = [null,null,['ratio']];
	$m['_collide_rect_ratio'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$cls_definition['__slots__'] = $p['list'](['ratio']);
		$method = $pyjs__bind_method2('__init__', function(ratio) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ratio = arguments[1];
			}

			self['ratio'] = ratio;
			return null;
		}
	, 1, [null,null,['self'],['ratio']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__call__', function(sprite1, sprite2) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sprite1 = arguments[1];
				sprite2 = arguments[2];
			}
			var $attr278,$attr279,$attr237,$attr258,$attr259,$attr256,$attr257,$attr254,$attr255,$attr238,$attr239,$attr250,$attr251,$attr268,$attr273,$attr269,collide,$attr277,$attr280,$attr263,$attr274,$attr262,$attr270,$attr272,$attr241,$attr240,$attr243,$attr242,$attr245,$attr244,$attr247,$attr246,$attr249,$attr248,$attr261,$attr260,$attr267,$attr266,$attr265,$attr253,$attr275,$attr276,$attr252,$attr271,$attr264,r1,r2,r,y,x;
			r = sprite1['rect'];
			x = ((r['width'])*(self['ratio']))-(r['width']);
			y = ((r['height'])*(self['ratio']))-(r['height']);
			r1 = $m['rectPool']['get']((r['x'])-($p['float_int']((x)*(0.5))), (r['y'])-($p['float_int']((y)*(0.5))), (r['width'])+($p['float_int'](x)), (r['height'])+($p['float_int'](y)));
			r = sprite2['rect'];
			x = ((r['width'])*(self['ratio']))-(r['width']);
			y = ((r['height'])*(self['ratio']))-(r['height']);
			r2 = $m['rectPool']['get']((r['x'])-($p['float_int']((x)*(0.5))), (r['y'])-($p['float_int']((y)*(0.5))), (r['width'])+($p['float_int'](x)), (r['height'])+($p['float_int'](y)));
			collide = r1['intersects'](r2);
			$m['rectPool']['append'](r1);
			$m['rectPool']['append'](r2);
			return collide;
		}
	, 1, [null,null,['self'],['sprite1'],['sprite2']]);
		$cls_definition['__call__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('_collide_rect_ratio', $p['tuple']($bases), $data);
	})();
	$m['collide_circle'] = function(sprite1, sprite2) {
		var radius1,radius2,$bool52,$bool53,sy2,sy1,$attr285,$attr284,$attr287,$attr286,$attr281,$attr283,$attr282,$attr289,$attr288,$attr304,$attr305,$attr306,$attr307,$attr300,$attr301,$attr302,$attr303,$attr308,sx1,sx2,$cmp3,$attr292,$attr293,$attr290,$attr291,$attr296,$attr297,$attr294,$attr295,$attr298,$attr299,$cmp4;
		if ((($bool52=$p['hasattr'](sprite1, 'radius')) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
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
			radius1 = sprite1['radius'];
		}
		else {
			radius1 = (Math['pow']((Math['pow'](sprite1['rect']['width'],2))+(Math['pow'](sprite1['rect']['height'],2)),0.5))*(0.5);
		}
		if ((($bool53=$p['hasattr'](sprite2, 'radius')) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
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
			radius2 = sprite2['radius'];
		}
		else {
			radius2 = (Math['pow']((Math['pow'](sprite2['rect']['width'],2))+(Math['pow'](sprite2['rect']['height'],2)),0.5))*(0.5);
		}
		sx1 = (sprite1['rect']['x'])+($p['float_int']((sprite1['rect']['width'])*(0.5)));
		sy1 = (sprite1['rect']['y'])+($p['float_int']((sprite1['rect']['height'])*(0.5)));
		sx2 = (sprite2['rect']['x'])+($p['float_int']((sprite2['rect']['width'])*(0.5)));
		sy2 = (sprite2['rect']['y'])+($p['float_int']((sprite2['rect']['height'])*(0.5)));
		return ((($cmp3=(Math['pow']((sx1)-(sx2),2))+(Math['pow']((sy1)-(sy2),2)))===($cmp4=(Math['pow'](radius1,2))+(Math['pow'](radius2,2)))?0:
			(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
				($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
				$p['cmp']($cmp3, $cmp4))) == -1);
	};
	$m['collide_circle']['__name__'] = 'collide_circle';

	$m['collide_circle']['__bind_type__'] = 0;
	$m['collide_circle']['__args__'] = [null,null,['sprite1'],['sprite2']];
	$m['collide_circle_ratio'] = function(ratio) {
		var obj,$lambda2;
		obj = (typeof _collide_circle_ratio == "undefined"?$m['_collide_circle_ratio']:_collide_circle_ratio)(ratio);
		var 		$lambda2 = function(sprite1, sprite2) {

			return obj['__call__'](sprite1, sprite2);
		};
		$lambda2['__name__'] = '$lambda2';

		$lambda2['__bind_type__'] = 0;
		$lambda2['__args__'] = [null,null,['sprite1'],['sprite2']];
		return $lambda2;
	};
	$m['collide_circle_ratio']['__name__'] = 'collide_circle_ratio';

	$m['collide_circle_ratio']['__bind_type__'] = 0;
	$m['collide_circle_ratio']['__args__'] = [null,null,['ratio']];
	$m['_collide_circle_ratio'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.sprite';
		$cls_definition['__slots__'] = $p['list'](['ratio']);
		$method = $pyjs__bind_method2('__init__', function(ratio) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ratio = arguments[1];
			}

			self['ratio'] = ratio;
			return null;
		}
	, 1, [null,null,['self'],['ratio']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__call__', function(sprite1, sprite2) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sprite1 = arguments[1];
				sprite2 = arguments[2];
			}
			var $bool54,radius1,$attr315,$attr314,$attr313,$attr312,$attr311,$attr310,$attr316,$attr319,$attr318,sy2,sy1,radius2,$bool55,$attr328,$attr329,$attr322,$attr323,$attr320,$attr321,$attr327,$attr324,$attr340,$attr341,$attr342,$attr343,$attr344,$attr309,sx1,sx2,$cmp6,$cmp5,$attr336,$attr326,$attr317,$attr339,$attr338,$attr335,$attr334,$attr337,$attr325,$attr331,$attr330,$attr333,$attr332;
			if ((($bool54=$p['hasattr'](sprite1, 'radius')) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
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
				radius1 = (sprite1['radius'])*(self['ratio']);
			}
			else {
				radius1 = ((Math['pow']((Math['pow'](sprite1['rect']['width'],2))+(Math['pow'](sprite1['rect']['height'],2)),0.5))*(0.5))*(self['ratio']);
			}
			if ((($bool55=$p['hasattr'](sprite2, 'radius')) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
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
				radius2 = (sprite2['radius'])*(self['ratio']);
			}
			else {
				radius2 = ((Math['pow']((Math['pow'](sprite2['rect']['width'],2))+(Math['pow'](sprite2['rect']['height'],2)),0.5))*(0.5))*(self['ratio']);
			}
			sx1 = (sprite1['rect']['x'])+($p['float_int']((sprite1['rect']['width'])*(0.5)));
			sy1 = (sprite1['rect']['y'])+($p['float_int']((sprite1['rect']['height'])*(0.5)));
			sx2 = (sprite2['rect']['x'])+($p['float_int']((sprite2['rect']['width'])*(0.5)));
			sy2 = (sprite2['rect']['y'])+($p['float_int']((sprite2['rect']['height'])*(0.5)));
			return ((($cmp5=(Math['pow']((sx1)-(sx2),2))+(Math['pow']((sy1)-(sy2),2)))===($cmp6=(Math['pow'](radius1,2))+(Math['pow'](radius2,2)))?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == -1);
		}
	, 1, [null,null,['self'],['sprite1'],['sprite2']]);
		$cls_definition['__call__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('_collide_circle_ratio', $p['tuple']($bases), $data);
	})();
	$m['collide_mask'] = function(sprite1, sprite2) {
		var $bool56,$bool57,$attr353,$attr352,$attr351,$attr350,mask1,$attr356,$attr355,mask2,$attr358,$attr348,$attr349,$attr357,$attr345,$attr346,$attr347,$attr360,$attr354,$attr359,$bool58;
		if ((($bool56=$p['hasattr'](sprite1, 'mask')) === null || $bool56 === false || $bool56 === 0 || $bool56 === '' ?
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
			mask1 = sprite1['mask'];
		}
		else {
			mask1 = $m['mask']['from_surface'](sprite1['image']);
		}
		if ((($bool57=$p['hasattr'](sprite2, 'mask')) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
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
			mask2 = sprite2['mask'];
		}
		else {
			mask2 = $m['mask']['from_surface'](sprite2['image']);
		}
		if ((($bool58=mask1['overlap'](mask2, $p['tuple']([(sprite2['rect']['x'])-(sprite1['rect']['x']), (sprite2['rect']['y'])-(sprite1['rect']['y'])]))) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
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
			return true;
		}
		else {
			return false;
		}
		return null;
	};
	$m['collide_mask']['__name__'] = 'collide_mask';

	$m['collide_mask']['__bind_type__'] = 0;
	$m['collide_mask']['__args__'] = [null,null,['sprite1'],['sprite2']];
	$m['groupcollide'] = function(group1, group2, dokill1, dokill2) {
		var $iter33_iter,$iter32_idx,$iter33_nextval,$iter32_nextval,$iter31_nextval,$bool59,$iter34_idx,collision,$iter32_iter,$iter34_array,$iter33_type,$iter30_nextval,$iter31_idx,$iter32_type,$iter33_idx,$iter32_array,sprite2,sprite1,$bool61,$bool60,$iter30_type,$bool62,$iter31_array,$attr362,collide,$attr361,$iter30_idx,$iter31_type,$145,$144,$146,$143,$iter33_array,$iter34_nextval,$iter30_iter,$bool63,$iter34_iter,$iter30_array,$iter34_type,$iter31_iter;
		collide = $p['dict']([]);
		collision = false;
		$iter30_iter = group1;
		if (typeof ($iter30_array = $iter30_iter['__array']) != 'undefined') {
			$iter30_type = 0;
		} else {
			$iter30_iter = $iter30_iter['__iter__']();
			$iter30_type = typeof ($iter30_array = $iter30_iter['__array']) != 'undefined'? 0 : (typeof $iter30_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter30_idx = 0;
		while (typeof ($iter30_nextval=($iter30_type?($iter30_type > 0?$iter30_iter.next(true,false):$p['wrapped_next']($iter30_iter)):$iter30_array[$iter30_idx++])) != 'undefined') {
			sprite1 = $iter30_nextval;
			$iter31_iter = group2;
			if (typeof ($iter31_array = $iter31_iter['__array']) != 'undefined') {
				$iter31_type = 0;
			} else {
				$iter31_iter = $iter31_iter['__iter__']();
				$iter31_type = typeof ($iter31_array = $iter31_iter['__array']) != 'undefined'? 0 : (typeof $iter31_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter31_idx = 0;
			while (typeof ($iter31_nextval=($iter31_type?($iter31_type > 0?$iter31_iter.next(true,false):$p['wrapped_next']($iter31_iter)):$iter31_array[$iter31_idx++])) != 'undefined') {
				sprite2 = $iter31_nextval;
				if ((($bool59=sprite1['rect']['intersects'](sprite2['rect'])) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
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
					if ((($bool60=!collide['__contains__'](sprite1)) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
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
						collide['__setitem__'](sprite1, $p['list']([]));
					}
					(typeof ($143=collide)['__array'] != 'undefined'?
						((typeof $143['__array'][$144=sprite1]) != 'undefined'?$143['__array'][$144]:
							$143['__getitem__']($144)):
							$143['__getitem__'](sprite1))['append'](sprite2);
					collision = true;
				}
			}
		}
		if ((($bool61=collision) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
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
			if ((($bool62=dokill1) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
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
				$iter32_iter = collide;
				if (typeof ($iter32_array = $iter32_iter['__array']) != 'undefined') {
					$iter32_type = 0;
				} else {
					$iter32_iter = $iter32_iter['__iter__']();
					$iter32_type = typeof ($iter32_array = $iter32_iter['__array']) != 'undefined'? 0 : (typeof $iter32_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter32_idx = 0;
				while (typeof ($iter32_nextval=($iter32_type?($iter32_type > 0?$iter32_iter.next(true,false):$p['wrapped_next']($iter32_iter)):$iter32_array[$iter32_idx++])) != 'undefined') {
					sprite1 = $iter32_nextval;
					sprite1['kill']();
				}
			}
			if ((($bool63=dokill2) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
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
				$iter33_iter = collide;
				if (typeof ($iter33_array = $iter33_iter['__array']) != 'undefined') {
					$iter33_type = 0;
				} else {
					$iter33_iter = $iter33_iter['__iter__']();
					$iter33_type = typeof ($iter33_array = $iter33_iter['__array']) != 'undefined'? 0 : (typeof $iter33_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter33_idx = 0;
				while (typeof ($iter33_nextval=($iter33_type?($iter33_type > 0?$iter33_iter.next(true,false):$p['wrapped_next']($iter33_iter)):$iter33_array[$iter33_idx++])) != 'undefined') {
					sprite1 = $iter33_nextval;
					$iter34_iter = (typeof ($145=collide)['__array'] != 'undefined'?
						((typeof $145['__array'][$146=sprite1]) != 'undefined'?$145['__array'][$146]:
							$145['__getitem__']($146)):
							$145['__getitem__'](sprite1));
					if (typeof ($iter34_array = $iter34_iter['__array']) != 'undefined') {
						$iter34_type = 0;
					} else {
						$iter34_iter = $iter34_iter['__iter__']();
						$iter34_type = typeof ($iter34_array = $iter34_iter['__array']) != 'undefined'? 0 : (typeof $iter34_iter['$genfunc'] == 'function'? 1 : -1);
					}
					$iter34_idx = 0;
					while (typeof ($iter34_nextval=($iter34_type?($iter34_type > 0?$iter34_iter.next(true,false):$p['wrapped_next']($iter34_iter)):$iter34_array[$iter34_idx++])) != 'undefined') {
						sprite2 = $iter34_nextval;
						sprite2['kill']();
					}
				}
			}
		}
		return collide;
	};
	$m['groupcollide']['__name__'] = 'groupcollide';

	$m['groupcollide']['__bind_type__'] = 0;
	$m['groupcollide']['__args__'] = [null,null,['group1'],['group2'],['dokill1'],['dokill2']];
	$m['spritecollideany'] = function(sprite, group) {
		var $iter35_idx,$iter35_nextval,$attr364,_sprite,$attr363,$iter35_type,$iter35_array,$iter35_iter,$bool64;
		$iter35_iter = group;
		if (typeof ($iter35_array = $iter35_iter['__array']) != 'undefined') {
			$iter35_type = 0;
		} else {
			$iter35_iter = $iter35_iter['__iter__']();
			$iter35_type = typeof ($iter35_array = $iter35_iter['__array']) != 'undefined'? 0 : (typeof $iter35_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter35_idx = 0;
		while (typeof ($iter35_nextval=($iter35_type?($iter35_type > 0?$iter35_iter.next(true,false):$p['wrapped_next']($iter35_iter)):$iter35_array[$iter35_idx++])) != 'undefined') {
			_sprite = $iter35_nextval;
			if ((($bool64=sprite['rect']['intersects'](_sprite['rect'])) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
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
				return true;
			}
		}
		return false;
	};
	$m['spritecollideany']['__name__'] = 'spritecollideany';

	$m['spritecollideany']['__bind_type__'] = 0;
	$m['spritecollideany']['__args__'] = [null,null,['sprite'],['group']];
	return this;
}; /* end pyjsdl.sprite */


/* end module: pyjsdl.sprite */


/*
PYJS_DEPS: ['pyjsdl.rect.rectPool', 'pyjsdl', 'pyjsdl.rect', 'pyjsdl.mask', 'sys', 'pyjsdl.util._range', 'pyjsdl.util', 'pyjsdl.util._dict', 'pyjsdl.util._next']
*/
