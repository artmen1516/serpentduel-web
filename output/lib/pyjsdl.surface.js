/* start module: pyjsdl.surface */
$pyjs['loaded_modules']['pyjsdl.surface'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.surface']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.surface'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.surface'];
	$m['__repr__'] = function() { return '<module: pyjsdl.surface>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.surface';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['surface'] = $pyjs['loaded_modules']['pyjsdl.surface'];
	var $attr1,$attr2,$bool1,$cmp1,$cmp2;

	$m['HTML5Canvas'] = $p['___import___']('pyjsdl.pyjsobj.HTML5Canvas', 'pyjsdl', null, false);
	$m['Rect'] = $p['___import___']('pyjsdl.rect.Rect', 'pyjsdl', null, false);
	$m['rectPool'] = $p['___import___']('pyjsdl.rect.rectPool', 'pyjsdl', null, false);
	$m['Color'] = $p['___import___']('pyjsdl.color.Color', 'pyjsdl', null, false);
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
	$m['_return_rect'] = true;
	$m['Surface'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.surface';
		$method = $pyjs__bind_method2('__init__', function(size) {
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
				size = arguments[1];
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
				if (typeof size != 'undefined') {
					if (size !== null && typeof size['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = size;
						size = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var $attr9,$attr8,$attr3,$attr5,$attr4,$attr7,$attr6,$attr10,$4,$2,$3,$1;
			self['width'] = $p['float_int']((typeof ($1=size)['__array'] != 'undefined'?
				((typeof $1['__array'][$2=0]) != 'undefined'?$1['__array'][$2]:
					$1['__getitem__']($2)):
					$1['__getitem__'](0)));
			self['height'] = $p['float_int']((typeof ($3=size)['__array'] != 'undefined'?
				((typeof $3['__array'][$4=1]) != 'undefined'?$3['__array'][$4]:
					$3['__getitem__']($4)):
					$3['__getitem__'](1)));
			$m['HTML5Canvas']['__init__'](self, self['width'], self['height']);
			$m['HTML5Canvas']['resize'](self, self['width'], self['height']);
			self['_display'] = null;
			self['_super_surface'] = null;
			self['_offset'] = $p['tuple']([0, 0]);
			self['_colorkey'] = null;
			self['_stroke_style'] = null;
			self['_fill_style'] = null;
			self['_alpha'] = 1.0;
			self['_has_alpha'] = false;
			self['_nonimplemented_methods']();
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['size']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var s,$mod1,$mod2,$attr15,$attr14,$attr16,$attr11,$attr13,$attr12;
			s = '<%s(%dx%d)>';
			return (($mod1=s)!=null && ($mod2=$p['tuple']([self['__class__']['__name__'], self['width'], self['height']]))!=null && typeof $mod1=='string'?
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
		$method = $pyjs__bind_method2('get_size', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr20,$attr19,$attr17,$attr18;
			return $p['tuple']([self['width'], self['height']]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_size'] = $method;
		$method = $pyjs__bind_method2('get_width', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr21,$attr22;
			return self['width'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_width'] = $method;
		$method = $pyjs__bind_method2('get_height', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr23,$attr24;
			return self['height'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_height'] = $method;
		$method = $pyjs__bind_method2('resize', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}
			var $attr25,$attr26,$attr27,$attr28;
			self['width'] = $p['float_int'](width);
			self['height'] = $p['float_int'](height);
			$m['HTML5Canvas']['resize'](self, self['width'], self['height']);
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['resize'] = $method;
		$method = $pyjs__bind_method2('get_rect', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var attr = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (attr === null || typeof attr != 'object' || attr['__name__'] != 'dict' || typeof attr['$pyjs_is_kwarg'] == 'undefined') {
					var attr = arguments[arguments['length']+1];
				} else {
					delete attr['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var attr = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (attr === null || typeof attr != 'object' || attr['__name__'] != 'dict' || typeof attr['$pyjs_is_kwarg'] == 'undefined') {
					attr = arguments[arguments['length']+1];
				} else {
					delete attr['$pyjs_is_kwarg'];
				}
			}
			if (typeof attr == 'undefined') {
				attr = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						attr = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var $iter1_nextval,$iter1_idx,$iter1_iter,$attr32,$attr31,$attr30,$iter1_array,key,$6,$attr29,$5,rect,$iter1_type;
			rect = $m['Rect'](0, 0, self['width'], self['height']);
			$iter1_iter = attr;
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				key = $iter1_nextval;
				$p['setattr'](rect, key, (typeof ($5=attr)['__array'] != 'undefined'?
					((typeof $5['__array'][$6=key]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__'](key)));
			}
			return rect;
		}
	, 1, [null,['attr'],['self']]);
		$cls_definition['get_rect'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr40,$attr41,surface,$attr33,$attr44,$attr37,$attr36,$attr35,$attr34,$attr42,$attr39,$attr38,$attr43;
			surface = $m['Surface']($p['tuple']([self['width'], self['height']]));
			surface['drawImage'](self['canvas'], 0, 0);
			surface['_colorkey'] = self['_colorkey'];
			surface['_alpha'] = self['_alpha'];
			surface['_has_alpha'] = self['_has_alpha'];
			return surface;
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('subsurface', function(rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect = arguments[1];
			}
			var $attr74,$bool4,$attr73,$bool5,surface,$attr72,$attr46,$attr47,$attr45,$attr71,$attr70,$attr79,$attr48,$attr49,$attr82,_rect,$attr80,$attr81,$attr68,$attr69,$attr84,$attr64,$attr65,$attr67,$attr60,$attr61,$attr62,$attr63,$attr78,$14,$attr83,$eq2,$eq1,$bool2,$bool3,$bool6,$bool7,$8,$9,$7,$bool8,$attr59,$attr58,$10,$11,$12,$13,$attr51,$attr50,$attr53,$attr52,$attr55,$attr54,$attr57,$attr56,surf_rect,$attr77,$attr75,$attr76,$attr66;
			if ((($bool2=$p['tuple'](['t', 'f'])['__contains__'](rect)) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
				if ((($bool4=!(($bool3=self['_super_surface']) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
					return null;
				}
				if ((($bool5=(($eq1=rect)===($eq2='t')&&$eq1===null?true:
					($eq1===null?false:($eq2===null?false:
						((typeof $eq1=='object'||typeof $eq1=='function')&&typeof $eq1['__cmp__']=='function'?$eq1['__cmp__']($eq2) === 0:
							((typeof $eq2=='object'||typeof $eq2=='function')&&typeof $eq2['__cmp__']=='function'?$eq2['__cmp__']($eq1) === 0:
								$eq1==$eq2)))))) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
					self['drawImage'](self['_super_surface']['canvas'], (typeof ($7=self['_offset'])['__array'] != 'undefined'?
						((typeof $7['__array'][$8=0]) != 'undefined'?$7['__array'][$8]:
							$7['__getitem__']($8)):
							$7['__getitem__'](0)), (typeof ($9=self['_offset'])['__array'] != 'undefined'?
						((typeof $9['__array'][$10=1]) != 'undefined'?$9['__array'][$10]:
							$9['__getitem__']($10)):
							$9['__getitem__'](1)), self['width'], self['height'], 0, 0, self['width'], self['height']);
				}
				else {
					self['_super_surface']['drawImage'](self['canvas'], (typeof ($11=self['_offset'])['__array'] != 'undefined'?
						((typeof $11['__array'][$12=0]) != 'undefined'?$11['__array'][$12]:
							$11['__getitem__']($12)):
							$11['__getitem__'](0)), (typeof ($13=self['_offset'])['__array'] != 'undefined'?
						((typeof $13['__array'][$14=1]) != 'undefined'?$13['__array'][$14]:
							$13['__getitem__']($14)):
							$13['__getitem__'](1)));
				}
				return null;
			}
			if ((($bool6=$p['hasattr'](rect, 'width')) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
				_rect = rect;
			}
			else {
				_rect = $m['Rect'](rect);
			}
			surf_rect = self['get_rect']();
			if ((($bool8=!(($bool7=surf_rect['contains'](_rect)) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				throw ($p['ValueError']('subsurface outside surface area'));
			}
			surface = self['getSubimage'](_rect['x'], _rect['y'], _rect['width'], _rect['height']);
			surface['_super_surface'] = self;
			surface['_offset'] = $p['tuple']([_rect['x'], _rect['y']]);
			surface['_colorkey'] = self['_colorkey'];
			surface['_alpha'] = self['_alpha'];
			surface['_has_alpha'] = self['_has_alpha'];
			return surface;
		}
	, 1, [null,null,['self'],['rect']]);
		$cls_definition['subsurface'] = $method;
		$method = $pyjs__bind_method2('getSubimage', function(x, y, width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				width = arguments[3];
				height = arguments[4];
			}
			var $attr86,$attr85,surface;
			surface = $m['Surface']($p['tuple']([width, height]));
			surface['drawImage'](self['canvas'], x, y, width, height, 0, 0, width, height);
			return surface;
		}
	, 1, [null,null,['self'],['x'],['y'],['width'],['height']]);
		$cls_definition['getSubimage'] = $method;
		$method = $pyjs__bind_method2('blit', function(surface, position, area) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				position = arguments[2];
				area = arguments[3];
			}
			if (typeof area == 'undefined') area=arguments['callee']['__args__'][5][1];
			var surface_rect,$22,$bool10,ctx,$bool12,$bool13,$attr98,$attr101,$39,changed_rect,$29,$28,$attr87,$21,$20,$attr89,$25,$24,$27,$26,$attr102,$attr100,$bool11,$43,$42,$41,$40,$38,$46,$45,$44,$attr94,$attr99,$33,$attr97,$32,$attr96,$bool9,rect,$23,$attr95,$15,$16,$17,$attr91,$attr90,$attr93,$attr92,$36,$37,$34,$35,$18,$19,$30,$31,$attr88;
			ctx = self['impl']['canvasContext'];
			ctx['globalAlpha'] = surface['_alpha'];
			if ((($bool10=!(($bool9=area) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				ctx['drawImage'](surface['canvas'], (typeof ($15=position)['__array'] != 'undefined'?
					((typeof $15['__array'][$16=0]) != 'undefined'?$15['__array'][$16]:
						$15['__getitem__']($16)):
						$15['__getitem__'](0)), (typeof ($17=position)['__array'] != 'undefined'?
					((typeof $17['__array'][$18=1]) != 'undefined'?$17['__array'][$18]:
						$17['__getitem__']($18)):
						$17['__getitem__'](1)));
				ctx['globalAlpha'] = 1.0;
				if ((($bool11=$m['_return_rect']) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					rect = $m['rectPool']['get']((typeof ($19=position)['__array'] != 'undefined'?
						((typeof $19['__array'][$20=0]) != 'undefined'?$19['__array'][$20]:
							$19['__getitem__']($20)):
							$19['__getitem__'](0)), (typeof ($21=position)['__array'] != 'undefined'?
						((typeof $21['__array'][$22=1]) != 'undefined'?$21['__array'][$22]:
							$21['__getitem__']($22)):
							$21['__getitem__'](1)), surface['width'], surface['height']);
				}
				else {
					return null;
				}
			}
			else {
				ctx['drawImage'](surface['canvas'], (typeof ($23=area)['__array'] != 'undefined'?
					((typeof $23['__array'][$24=0]) != 'undefined'?$23['__array'][$24]:
						$23['__getitem__']($24)):
						$23['__getitem__'](0)), (typeof ($25=area)['__array'] != 'undefined'?
					((typeof $25['__array'][$26=1]) != 'undefined'?$25['__array'][$26]:
						$25['__getitem__']($26)):
						$25['__getitem__'](1)), (typeof ($27=area)['__array'] != 'undefined'?
					((typeof $27['__array'][$28=2]) != 'undefined'?$27['__array'][$28]:
						$27['__getitem__']($28)):
						$27['__getitem__'](2)), (typeof ($29=area)['__array'] != 'undefined'?
					((typeof $29['__array'][$30=3]) != 'undefined'?$29['__array'][$30]:
						$29['__getitem__']($30)):
						$29['__getitem__'](3)), (typeof ($31=position)['__array'] != 'undefined'?
					((typeof $31['__array'][$32=0]) != 'undefined'?$31['__array'][$32]:
						$31['__getitem__']($32)):
						$31['__getitem__'](0)), (typeof ($33=position)['__array'] != 'undefined'?
					((typeof $33['__array'][$34=1]) != 'undefined'?$33['__array'][$34]:
						$33['__getitem__']($34)):
						$33['__getitem__'](1)), (typeof ($35=area)['__array'] != 'undefined'?
					((typeof $35['__array'][$36=2]) != 'undefined'?$35['__array'][$36]:
						$35['__getitem__']($36)):
						$35['__getitem__'](2)), (typeof ($37=area)['__array'] != 'undefined'?
					((typeof $37['__array'][$38=3]) != 'undefined'?$37['__array'][$38]:
						$37['__getitem__']($38)):
						$37['__getitem__'](3)));
				ctx['globalAlpha'] = 1.0;
				if ((($bool12=$m['_return_rect']) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					rect = $m['rectPool']['get']((typeof ($39=position)['__array'] != 'undefined'?
						((typeof $39['__array'][$40=0]) != 'undefined'?$39['__array'][$40]:
							$39['__getitem__']($40)):
							$39['__getitem__'](0)), (typeof ($41=position)['__array'] != 'undefined'?
						((typeof $41['__array'][$42=1]) != 'undefined'?$41['__array'][$42]:
							$41['__getitem__']($42)):
							$41['__getitem__'](1)), (typeof ($43=area)['__array'] != 'undefined'?
						((typeof $43['__array'][$44=2]) != 'undefined'?$43['__array'][$44]:
							$43['__getitem__']($44)):
							$43['__getitem__'](2)), (typeof ($45=area)['__array'] != 'undefined'?
						((typeof $45['__array'][$46=3]) != 'undefined'?$45['__array'][$46]:
							$45['__getitem__']($46)):
							$45['__getitem__'](3)));
				}
				else {
					return null;
				}
			}
			if ((($bool13=self['_display']) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				surface_rect = self['_display']['_surface_rect'];
			}
			else {
				surface_rect = self['get_rect']();
			}
			changed_rect = surface_rect['clip'](rect);
			$m['rectPool']['append'](rect);
			return changed_rect;
		}
	, 1, [null,null,['self'],['surface'],['position'],['area', null]]);
		$cls_definition['blit'] = $method;
		$method = $pyjs__bind_method2('blits', function(blit_sequence, doreturn) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				blit_sequence = arguments[1];
				doreturn = arguments[2];
			}
			if (typeof doreturn == 'undefined') doreturn=arguments['callee']['__args__'][4][1];
			var $bool18,$bool19,surface_rect,$79,$attr115,$bool14,$bool15,surface,$bool17,$bool20,blit,$attr105,$73,$68,$62,$iter2_iter,area,$78,$49,$attr106,$attr107,$attr104,$48,$69,$attr103,$attr118,$65,$61,$67,$66,$47,$60,$attr108,$attr109,$iter2_type,$51,$81,$84,$83,$82,$80,$50,$iter2_idx,$71,$74,$bool16,position,$64,rect,$77,$72,$cmp4,$70,$iter2_nextval,$76,$63,$cmp3,$75,$attr111,$attr110,$attr113,$attr112,ctx,$attr114,$attr117,$attr116,$58,$59,$56,$len1,rects,$52,$53,$54,$55,$iter2_array,$57;
			ctx = self['impl']['canvasContext'];
			if ((($bool14=doreturn) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
				rects = $p['list']([]);
				if ((($bool15=self['_display']) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					surface_rect = self['_display']['_surface_rect'];
				}
				else {
					surface_rect = self['get_rect']();
				}
			}
			else {
				rects = null;
			}
			$iter2_iter = blit_sequence;
			if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter['__iter__']();
				$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				blit = $iter2_nextval;
				surface = (typeof ($47=blit)['__array'] != 'undefined'?
					((typeof $47['__array'][$48=0]) != 'undefined'?$47['__array'][$48]:
						$47['__getitem__']($48)):
						$47['__getitem__'](0));
				position = (typeof ($49=blit)['__array'] != 'undefined'?
					((typeof $49['__array'][$50=1]) != 'undefined'?$49['__array'][$50]:
						$49['__getitem__']($50)):
						$49['__getitem__'](1));
				if ((($bool16=((($cmp3=(($len1=blit) === null?0:
					(typeof $len1['__array'] != 'undefined' ? $len1['__array']['length']:
						(typeof $len1['__len__'] == 'function'?$len1['__len__']():
							(typeof $len1['length'] != 'undefined'?$len1['length']:
								$p['len']($len1))))))===($cmp4=2)?0:
					(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
						($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
						$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
					area = (typeof ($51=blit)['__array'] != 'undefined'?
						((typeof $51['__array'][$52=2]) != 'undefined'?$51['__array'][$52]:
							$51['__getitem__']($52)):
							$51['__getitem__'](2));
				}
				else {
					area = null;
				}
				ctx['globalAlpha'] = surface['_alpha'];
				if ((($bool18=!(($bool17=area) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
					ctx['drawImage'](surface['canvas'], (typeof ($53=position)['__array'] != 'undefined'?
						((typeof $53['__array'][$54=0]) != 'undefined'?$53['__array'][$54]:
							$53['__getitem__']($54)):
							$53['__getitem__'](0)), (typeof ($55=position)['__array'] != 'undefined'?
						((typeof $55['__array'][$56=1]) != 'undefined'?$55['__array'][$56]:
							$55['__getitem__']($56)):
							$55['__getitem__'](1)));
					if ((($bool19=doreturn) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
						rect = $m['rectPool']['get']((typeof ($57=position)['__array'] != 'undefined'?
							((typeof $57['__array'][$58=0]) != 'undefined'?$57['__array'][$58]:
								$57['__getitem__']($58)):
								$57['__getitem__'](0)), (typeof ($59=position)['__array'] != 'undefined'?
							((typeof $59['__array'][$60=1]) != 'undefined'?$59['__array'][$60]:
								$59['__getitem__']($60)):
								$59['__getitem__'](1)), surface['width'], surface['height']);
						rects['append'](surface_rect['clip'](rect));
						$m['rectPool']['append'](rect);
					}
				}
				else {
					ctx['drawImage'](surface['canvas'], (typeof ($61=area)['__array'] != 'undefined'?
						((typeof $61['__array'][$62=0]) != 'undefined'?$61['__array'][$62]:
							$61['__getitem__']($62)):
							$61['__getitem__'](0)), (typeof ($63=area)['__array'] != 'undefined'?
						((typeof $63['__array'][$64=1]) != 'undefined'?$63['__array'][$64]:
							$63['__getitem__']($64)):
							$63['__getitem__'](1)), (typeof ($65=area)['__array'] != 'undefined'?
						((typeof $65['__array'][$66=2]) != 'undefined'?$65['__array'][$66]:
							$65['__getitem__']($66)):
							$65['__getitem__'](2)), (typeof ($67=area)['__array'] != 'undefined'?
						((typeof $67['__array'][$68=3]) != 'undefined'?$67['__array'][$68]:
							$67['__getitem__']($68)):
							$67['__getitem__'](3)), (typeof ($69=position)['__array'] != 'undefined'?
						((typeof $69['__array'][$70=0]) != 'undefined'?$69['__array'][$70]:
							$69['__getitem__']($70)):
							$69['__getitem__'](0)), (typeof ($71=position)['__array'] != 'undefined'?
						((typeof $71['__array'][$72=1]) != 'undefined'?$71['__array'][$72]:
							$71['__getitem__']($72)):
							$71['__getitem__'](1)), (typeof ($73=area)['__array'] != 'undefined'?
						((typeof $73['__array'][$74=2]) != 'undefined'?$73['__array'][$74]:
							$73['__getitem__']($74)):
							$73['__getitem__'](2)), (typeof ($75=area)['__array'] != 'undefined'?
						((typeof $75['__array'][$76=3]) != 'undefined'?$75['__array'][$76]:
							$75['__getitem__']($76)):
							$75['__getitem__'](3)));
					if ((($bool20=doreturn) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
						rect = $m['rectPool']['get']((typeof ($77=position)['__array'] != 'undefined'?
							((typeof $77['__array'][$78=0]) != 'undefined'?$77['__array'][$78]:
								$77['__getitem__']($78)):
								$77['__getitem__'](0)), (typeof ($79=position)['__array'] != 'undefined'?
							((typeof $79['__array'][$80=1]) != 'undefined'?$79['__array'][$80]:
								$79['__getitem__']($80)):
								$79['__getitem__'](1)), (typeof ($81=area)['__array'] != 'undefined'?
							((typeof $81['__array'][$82=2]) != 'undefined'?$81['__array'][$82]:
								$81['__getitem__']($82)):
								$81['__getitem__'](2)), (typeof ($83=area)['__array'] != 'undefined'?
							((typeof $83['__array'][$84=3]) != 'undefined'?$83['__array'][$84]:
								$83['__getitem__']($84)):
								$83['__getitem__'](3)));
						rects['append'](surface_rect['clip'](rect));
						$m['rectPool']['append'](rect);
					}
				}
			}
			ctx['globalAlpha'] = 1.0;
			return rects;
		}
	, 1, [null,null,['self'],['blit_sequence'],['doreturn', true]]);
		$cls_definition['blits'] = $method;
		$method = $pyjs__bind_method2('_blits', function(surfaces) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surfaces = arguments[1];
			}
			var $attr119,$iter3_idx,$attr127,$iter3_array,ctx,surface,$attr120,$attr121,$attr122,$attr123,$attr124,$iter3_iter,$attr126,$iter3_type,$attr128,$iter3_nextval,rect,$attr125;
			ctx = self['impl']['canvasContext'];
			$iter3_iter = surfaces;
			if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter['__iter__']();
				$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter3_nextval, 2, null);
				surface = $tupleassign1[0];
				rect = $tupleassign1[1];
				ctx['globalAlpha'] = surface['_alpha'];
				ctx['drawImage'](surface['canvas'], rect['x'], rect['y']);
			}
			ctx['globalAlpha'] = 1.0;
			return null;
		}
	, 1, [null,null,['self'],['surfaces']]);
		$cls_definition['_blits'] = $method;
		$method = $pyjs__bind_method2('_blit_clear', function(surface, rect_list) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				surface = arguments[1];
				rect_list = arguments[2];
			}
			var $iter4_type,$iter4_iter,$attr142,$attr133,$attr140,$attr141,$attr146,$attr147,$attr144,$attr145,$attr149,r,$attr129,$attr143,$attr150,$iter4_nextval,ctx,$iter4_idx,$attr132,$attr131,$attr130,$attr137,$attr136,$attr135,$attr134,$iter4_array,$attr139,$attr138,$attr148;
			ctx = self['impl']['canvasContext'];
			ctx['globalAlpha'] = surface['_alpha'];
			$iter4_iter = rect_list;
			if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter['__iter__']();
				$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				r = $iter4_nextval;
				ctx['drawImage'](surface['canvas'], r['x'], r['y'], r['width'], r['height'], r['x'], r['y'], r['width'], r['height']);
			}
			ctx['globalAlpha'] = 1.0;
			return null;
		}
	, 1, [null,null,['self'],['surface'],['rect_list']]);
		$cls_definition['_blit_clear'] = $method;
		$method = $pyjs__bind_method2('set_alpha', function(alpha) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				alpha = arguments[1];
			}
			var $cmp5,$cmp7,$cmp6,_alpha,$cmp8,$bool21,$bool23,$bool22;
			if ((($bool21=(alpha !== null)) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
				_alpha = (alpha)/(255.0);
				if ((($bool22=((($cmp5=_alpha)===($cmp6=0.0)?0:
					(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
						($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
						$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
					_alpha = 0.0;
				}
				else if ((($bool23=((($cmp7=_alpha)===($cmp8=255.0)?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) == 1)) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
					_alpha = 255.0;
				}
				self['_alpha'] = _alpha;
				self['_has_alpha'] = true;
			}
			else {
				self['_alpha'] = 1.0;
				self['_has_alpha'] = false;
			}
			return null;
		}
	, 1, [null,null,['self'],['alpha']]);
		$cls_definition['set_alpha'] = $method;
		$method = $pyjs__bind_method2('get_alpha', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr154,$attr151,$attr153,$attr152,$bool24;
			if ((($bool24=self['_has_alpha']) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
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
				return $p['float_int']((self['_alpha'])*(255));
			}
			else {
				return null;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_alpha'] = $method;
		$method = $pyjs__bind_method2('set_colorkey', function(color, flags) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				color = arguments[1];
				flags = arguments[2];
			}
			if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][4][1];
			var $attr155,$attr157,$attr156,$attr160,$attr159,$attr158,$bool25,$bool26;
			if ((($bool25=self['_colorkey']) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
				self['replace_color']($p['tuple']([0, 0, 0, 0]), self['_colorkey']);
				self['_colorkey'] = null;
			}
			if ((($bool26=color) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
				self['_colorkey'] = $m['Color'](color);
				self['replace_color'](self['_colorkey']);
			}
			return null;
		}
	, 1, [null,null,['self'],['color'],['flags', null]]);
		$cls_definition['set_colorkey'] = $method;
		$method = $pyjs__bind_method2('get_colorkey', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr168,$attr169,$attr164,$attr165,$attr167,$attr161,$attr162,$attr163,$bool27,$attr170,$attr166;
			if ((($bool27=self['_colorkey']) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
				return $p['tuple']([self['_colorkey']['r'], self['_colorkey']['g'], self['_colorkey']['b'], self['_colorkey']['a']]);
			}
			else {
				return null;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_colorkey'] = $method;
		$method = $pyjs__bind_method2('_getPixel', function(imagedata, index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imagedata = arguments[1];
				index = arguments[2];
			}

			return imagedata.data[index];;
		}
	, 1, [null,null,['self'],['imagedata'],['index']]);
		$cls_definition['_getPixel'] = $method;
		$method = $pyjs__bind_method2('_setPixel', function(imagedata, index, dat) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				imagedata = arguments[1];
				index = arguments[2];
				dat = arguments[3];
			}
			var data;
			data = $p['str'](dat);
imagedata.data[index]=data;
			return null;
		}
	, 1, [null,null,['self'],['imagedata'],['index'],['dat']]);
		$cls_definition['_setPixel'] = $method;
		$method = $pyjs__bind_method2('replace_color', function(color, new_color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				color = arguments[1];
				new_color = arguments[2];
			}
			if (typeof new_color == 'undefined') new_color=arguments['callee']['__args__'][4][1];
			var $attr191,$attr190,$attr193,$attr192,$attr195,$attr194,$attr197,$attr196,$attr199,$iter5_idx,$iter6_type,$attr198,$and8,g2,g1,$and1,$and2,$and3,$and4,$and5,$and6,$and7,color1,$iter6_array,color2,$attr201,$bool28,$iter5_nextval,$iter5_array,b1,b2,$iter5_type,$iter6_iter,$eq3,$attr205,$attr204,$attr206,$bool29,$attr200,$attr203,$attr202,$iter6_idx,$attr182,$attr183,$eq4,$eq5,pixels,r1,r2,$attr178,$attr177,$attr176,$attr175,$attr174,$attr173,$attr172,$attr171,$bool32,$bool33,$bool30,$bool31,$bool36,$bool37,$bool34,$bool35,$bool38,$bool39,$eq18,$eq10,$eq11,$eq12,$eq13,$eq14,$eq15,$eq16,$eq17,$attr179,$len2,$len3,$iter5_iter,$iter6_nextval,alpha_zero,$eq8,$eq9,$attr188,$attr189,$attr186,$attr187,$attr184,$attr185,$eq6,$eq7,$attr180,$attr181,a1,a2,i;
			pixels = self['impl']['getImageData'](0, 0, self['width'], self['height']);
			if ((($bool28=$p['hasattr'](color, 'a')) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
				color1 = color;
			}
			else {
				color1 = $m['Color'](color);
			}
			if ((($bool29=(new_color === null)) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
				alpha_zero = true;
			}
			else {
				if ((($bool30=$p['hasattr'](new_color, 'a')) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
					color2 = new_color;
				}
				else {
					color2 = $m['Color'](new_color);
				}
				alpha_zero = false;
			}
			if ((($bool31=alpha_zero) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
				var $tupleassign2 = $p['__ass_unpack']($p['tuple']([color1['r'], color1['g'], color1['b'], color1['a']]), 4, null);
				r1 = $tupleassign2[0];
				g1 = $tupleassign2[1];
				b1 = $tupleassign2[2];
				a1 = $tupleassign2[3];
				a2 = 0;
				$iter5_iter = $m['range'](0, (($len2=pixels['data']) === null?0:
					(typeof $len2['__array'] != 'undefined' ? $len2['__array']['length']:
						(typeof $len2['__len__'] == 'function'?$len2['__len__']():
							(typeof $len2['length'] != 'undefined'?$len2['length']:
								$p['len']($len2))))), 4);
				if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter['__iter__']();
					$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					i = $iter5_nextval;
					if ((($bool35=((($bool32=$and1=(($eq3=self['_getPixel'](pixels, i))===($eq4=r1)&&$eq3===null?true:
						($eq3===null?false:($eq4===null?false:
							((typeof $eq3=='object'||typeof $eq3=='function')&&typeof $eq3['__cmp__']=='function'?$eq3['__cmp__']($eq4) === 0:
								((typeof $eq4=='object'||typeof $eq4=='function')&&typeof $eq4['__cmp__']=='function'?$eq4['__cmp__']($eq3) === 0:
									$eq3==$eq4)))))) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
						false :
						(typeof $bool32=='object'?
							(typeof $bool32['__nonzero__']=='function'?
								$bool32['__nonzero__']() :
								(typeof $bool32['__len__']=='function'?
									($bool32['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool33=$and2=(($eq5=self['_getPixel'](pixels, (i)+(1)))===($eq6=g1)&&$eq5===null?true:
						($eq5===null?false:($eq6===null?false:
							((typeof $eq5=='object'||typeof $eq5=='function')&&typeof $eq5['__cmp__']=='function'?$eq5['__cmp__']($eq6) === 0:
								((typeof $eq6=='object'||typeof $eq6=='function')&&typeof $eq6['__cmp__']=='function'?$eq6['__cmp__']($eq5) === 0:
									$eq5==$eq6)))))) === null || $bool33 === false || $bool33 === 0 || $bool33 === '' ?
						false :
						(typeof $bool33=='object'?
							(typeof $bool33['__nonzero__']=='function'?
								$bool33['__nonzero__']() :
								(typeof $bool33['__len__']=='function'?
									($bool33['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool34=$and3=(($eq7=self['_getPixel'](pixels, (i)+(2)))===($eq8=b1)&&$eq7===null?true:
						($eq7===null?false:($eq8===null?false:
							((typeof $eq7=='object'||typeof $eq7=='function')&&typeof $eq7['__cmp__']=='function'?$eq7['__cmp__']($eq8) === 0:
								((typeof $eq8=='object'||typeof $eq8=='function')&&typeof $eq8['__cmp__']=='function'?$eq8['__cmp__']($eq7) === 0:
									$eq7==$eq8)))))) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
						false :
						(typeof $bool34=='object'?
							(typeof $bool34['__nonzero__']=='function'?
								$bool34['__nonzero__']() :
								(typeof $bool34['__len__']=='function'?
									($bool34['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(($eq9=self['_getPixel'](pixels, (i)+(3)))===($eq10=a1)&&$eq9===null?true:
						($eq9===null?false:($eq10===null?false:
							((typeof $eq9=='object'||typeof $eq9=='function')&&typeof $eq9['__cmp__']=='function'?$eq9['__cmp__']($eq10) === 0:
								((typeof $eq10=='object'||typeof $eq10=='function')&&typeof $eq10['__cmp__']=='function'?$eq10['__cmp__']($eq9) === 0:
									$eq9==$eq10))))):$and3):$and2):$and1)) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
						self['_setPixel'](pixels, (i)+(3), a2);
					}
				}
			}
			else {
				var $tupleassign3 = $p['__ass_unpack']($p['tuple']([color1['r'], color1['g'], color1['b'], color1['a']]), 4, null);
				r1 = $tupleassign3[0];
				g1 = $tupleassign3[1];
				b1 = $tupleassign3[2];
				a1 = $tupleassign3[3];
				var $tupleassign4 = $p['__ass_unpack']($p['tuple']([color2['r'], color2['g'], color2['b'], color2['a']]), 4, null);
				r2 = $tupleassign4[0];
				g2 = $tupleassign4[1];
				b2 = $tupleassign4[2];
				a2 = $tupleassign4[3];
				$iter6_iter = $m['range'](0, (($len3=pixels['data']) === null?0:
					(typeof $len3['__array'] != 'undefined' ? $len3['__array']['length']:
						(typeof $len3['__len__'] == 'function'?$len3['__len__']():
							(typeof $len3['length'] != 'undefined'?$len3['length']:
								$p['len']($len3))))), 4);
				if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter['__iter__']();
					$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					i = $iter6_nextval;
					if ((($bool39=((($bool36=$and5=(($eq11=self['_getPixel'](pixels, i))===($eq12=r1)&&$eq11===null?true:
						($eq11===null?false:($eq12===null?false:
							((typeof $eq11=='object'||typeof $eq11=='function')&&typeof $eq11['__cmp__']=='function'?$eq11['__cmp__']($eq12) === 0:
								((typeof $eq12=='object'||typeof $eq12=='function')&&typeof $eq12['__cmp__']=='function'?$eq12['__cmp__']($eq11) === 0:
									$eq11==$eq12)))))) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
						false :
						(typeof $bool36=='object'?
							(typeof $bool36['__nonzero__']=='function'?
								$bool36['__nonzero__']() :
								(typeof $bool36['__len__']=='function'?
									($bool36['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool37=$and6=(($eq13=self['_getPixel'](pixels, (i)+(1)))===($eq14=g1)&&$eq13===null?true:
						($eq13===null?false:($eq14===null?false:
							((typeof $eq13=='object'||typeof $eq13=='function')&&typeof $eq13['__cmp__']=='function'?$eq13['__cmp__']($eq14) === 0:
								((typeof $eq14=='object'||typeof $eq14=='function')&&typeof $eq14['__cmp__']=='function'?$eq14['__cmp__']($eq13) === 0:
									$eq13==$eq14)))))) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
						false :
						(typeof $bool37=='object'?
							(typeof $bool37['__nonzero__']=='function'?
								$bool37['__nonzero__']() :
								(typeof $bool37['__len__']=='function'?
									($bool37['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?((($bool38=$and7=(($eq15=self['_getPixel'](pixels, (i)+(2)))===($eq16=b1)&&$eq15===null?true:
						($eq15===null?false:($eq16===null?false:
							((typeof $eq15=='object'||typeof $eq15=='function')&&typeof $eq15['__cmp__']=='function'?$eq15['__cmp__']($eq16) === 0:
								((typeof $eq16=='object'||typeof $eq16=='function')&&typeof $eq16['__cmp__']=='function'?$eq16['__cmp__']($eq15) === 0:
									$eq15==$eq16)))))) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
						false :
						(typeof $bool38=='object'?
							(typeof $bool38['__nonzero__']=='function'?
								$bool38['__nonzero__']() :
								(typeof $bool38['__len__']=='function'?
									($bool38['__len__']()>0 ?
										true :
										false) :
									true ) ) :
							 true ) )?(($eq17=self['_getPixel'](pixels, (i)+(3)))===($eq18=a1)&&$eq17===null?true:
						($eq17===null?false:($eq18===null?false:
							((typeof $eq17=='object'||typeof $eq17=='function')&&typeof $eq17['__cmp__']=='function'?$eq17['__cmp__']($eq18) === 0:
								((typeof $eq18=='object'||typeof $eq18=='function')&&typeof $eq18['__cmp__']=='function'?$eq18['__cmp__']($eq17) === 0:
									$eq17==$eq18))))):$and7):$and6):$and5)) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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
						self['_setPixel'](pixels, i, r2);
						self['_setPixel'](pixels, (i)+(1), g2);
						self['_setPixel'](pixels, (i)+(2), b2);
						self['_setPixel'](pixels, (i)+(3), a2);
					}
				}
			}
			self['impl']['putImageData'](pixels, 0, 0, 0, 0, self['width'], self['height']);
			return null;
		}
	, 1, [null,null,['self'],['color'],['new_color', null]]);
		$cls_definition['replace_color'] = $method;
		$method = $pyjs__bind_method2('get_at', function(pos) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pos = arguments[1];
			}
			var $88,$87,$86,$85,pixel;
			pixel = self['impl']['getImageData']((typeof ($85=pos)['__array'] != 'undefined'?
				((typeof $85['__array'][$86=0]) != 'undefined'?$85['__array'][$86]:
					$85['__getitem__']($86)):
					$85['__getitem__'](0)), (typeof ($87=pos)['__array'] != 'undefined'?
				((typeof $87['__array'][$88=1]) != 'undefined'?$87['__array'][$88]:
					$87['__getitem__']($88)):
					$87['__getitem__'](1)), 1, 1);
			return $m['Color'](function(){
				var $iter7_nextval,i,$iter7_iter,$iter7_array,$collcomp1,$iter7_idx,$iter7_type;
	$collcomp1 = $p['list']();
			$iter7_iter = $p['tuple']([0, 1, 2, 3]);
			if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter['__iter__']();
				$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				i = $iter7_nextval;
				$collcomp1['append'](self['_getPixel'](pixel, i));
			}

	return $collcomp1;}());
		}
	, 1, [null,null,['self'],['pos']]);
		$cls_definition['get_at'] = $method;
		$method = $pyjs__bind_method2('set_at', function(pos, color) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pos = arguments[1];
				color = arguments[2];
			}
			var $89,$bool41,$eq20,$bool40,$90,$92,$91,$eq19,$attr208,_color,$attr207;
			if ((($bool40=!(($eq19=self['_fill_style'])===($eq20=color)&&$eq19===null?true:
				($eq19===null?false:($eq20===null?false:
					((typeof $eq19=='object'||typeof $eq19=='function')&&typeof $eq19['__cmp__']=='function'?$eq19['__cmp__']($eq20) === 0:
						((typeof $eq20=='object'||typeof $eq20=='function')&&typeof $eq20['__cmp__']=='function'?$eq20['__cmp__']($eq19) === 0:
							$eq19==$eq20)))))) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
				self['_fill_style'] = color;
				if ((($bool41=$p['hasattr'](color, 'a')) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
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
					_color = color;
				}
				else {
					_color = $m['Color'](color);
				}
				self['setFillStyle'](_color);
			}
			self['fillRect']((typeof ($89=pos)['__array'] != 'undefined'?
				((typeof $89['__array'][$90=0]) != 'undefined'?$89['__array'][$90]:
					$89['__getitem__']($90)):
					$89['__getitem__'](0)), (typeof ($91=pos)['__array'] != 'undefined'?
				((typeof $91['__array'][$92=1]) != 'undefined'?$91['__array'][$92]:
					$91['__getitem__']($92)):
					$91['__getitem__'](1)), 1, 1);
			return null;
		}
	, 1, [null,null,['self'],['pos'],['color']]);
		$cls_definition['set_at'] = $method;
		$method = $pyjs__bind_method2('fill', function(color, rect) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				color = arguments[1];
				rect = arguments[2];
			}
			if (typeof color == 'undefined') color=arguments['callee']['__args__'][3][1];
			if (typeof rect == 'undefined') rect=arguments['callee']['__args__'][4][1];
			var $116,$attr227,surface_rect,$115,$98,$99,$attr232,$100,$95,$96,$97,$attr238,$attr225,$bool53,$93,$103,$attr234,$attr224,$bool51,$attr244,$110,$attr223,$attr236,$attr240,$attr222,$attr226,$107,$and9,$attr231,$106,$102,$attr235,$94,$bool52,$attr209,_rect_,$attr241,$112,$attr230,$attr243,$attr239,$bool47,$bool46,$bool45,$bool44,$bool43,$bool42,$attr221,$attr220,$109,$108,$105,$bool49,$bool48,$eq21,$and10,$eq22,$101,$attr229,$113,$attr242,$attr228,_rect,$111,$attr233,$104,$114,$attr237,$attr218,$attr219,$bool50,$attr212,$attr213,$attr210,$attr211,$attr216,$attr217,$attr214,$attr215;
			if ((($bool42=(color === null)) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
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
				$m['HTML5Canvas']['fill'](self);
				return null;
			}
			if ((($bool43=!(($eq21=self['_fill_style'])===($eq22=color)&&$eq21===null?true:
				($eq21===null?false:($eq22===null?false:
					((typeof $eq21=='object'||typeof $eq21=='function')&&typeof $eq21['__cmp__']=='function'?$eq21['__cmp__']($eq22) === 0:
						((typeof $eq22=='object'||typeof $eq22=='function')&&typeof $eq22['__cmp__']=='function'?$eq22['__cmp__']($eq21) === 0:
							$eq21==$eq22)))))) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
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
				self['_fill_style'] = color;
				if ((($bool44=$p['hasattr'](color, 'a')) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
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
					self['setFillStyle'](color);
				}
				else {
					self['setFillStyle']($m['Color'](color));
				}
			}
			if ((($bool46=!(($bool45=$m['_return_rect']) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
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
				if ((($bool47=(rect === null)) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
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
					self['fillRect'](0, 0, self['width'], self['height']);
				}
				else {
					self['fillRect']((typeof ($93=rect)['__array'] != 'undefined'?
						((typeof $93['__array'][$94=0]) != 'undefined'?$93['__array'][$94]:
							$93['__getitem__']($94)):
							$93['__getitem__'](0)), (typeof ($95=rect)['__array'] != 'undefined'?
						((typeof $95['__array'][$96=1]) != 'undefined'?$95['__array'][$96]:
							$95['__getitem__']($96)):
							$95['__getitem__'](1)), (typeof ($97=rect)['__array'] != 'undefined'?
						((typeof $97['__array'][$98=2]) != 'undefined'?$97['__array'][$98]:
							$97['__getitem__']($98)):
							$97['__getitem__'](2)), (typeof ($99=rect)['__array'] != 'undefined'?
						((typeof $99['__array'][$100=3]) != 'undefined'?$99['__array'][$100]:
							$99['__getitem__']($100)):
							$99['__getitem__'](3)));
				}
				return null;
			}
			if ((($bool48=(rect === null)) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
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
				_rect = $m['Rect'](0, 0, self['width'], self['height']);
				self['fillRect'](_rect['x'], _rect['y'], _rect['width'], _rect['height']);
			}
			else {
				if ((($bool49=self['_display']) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
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
					if ((($bool50=$p['hasattr'](rect, 'width')) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
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
						_rect = self['_display']['_surface_rect']['clip'](rect);
					}
					else {
						_rect_ = $m['rectPool']['get']((typeof ($101=rect)['__array'] != 'undefined'?
							((typeof $101['__array'][$102=0]) != 'undefined'?$101['__array'][$102]:
								$101['__getitem__']($102)):
								$101['__getitem__'](0)), (typeof ($103=rect)['__array'] != 'undefined'?
							((typeof $103['__array'][$104=1]) != 'undefined'?$103['__array'][$104]:
								$103['__getitem__']($104)):
								$103['__getitem__'](1)), (typeof ($105=rect)['__array'] != 'undefined'?
							((typeof $105['__array'][$106=2]) != 'undefined'?$105['__array'][$106]:
								$105['__getitem__']($106)):
								$105['__getitem__'](2)), (typeof ($107=rect)['__array'] != 'undefined'?
							((typeof $107['__array'][$108=3]) != 'undefined'?$107['__array'][$108]:
								$107['__getitem__']($108)):
								$107['__getitem__'](3)));
						_rect = self['_display']['_surface_rect']['clip'](_rect_);
						$m['rectPool']['append'](_rect_);
					}
				}
				else {
					surface_rect = $m['rectPool']['get'](0, 0, self['width'], self['height']);
					if ((($bool51=$p['hasattr'](rect, 'width')) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
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
						_rect = surface_rect['clip'](rect);
					}
					else {
						_rect_ = $m['rectPool']['get']((typeof ($109=rect)['__array'] != 'undefined'?
							((typeof $109['__array'][$110=0]) != 'undefined'?$109['__array'][$110]:
								$109['__getitem__']($110)):
								$109['__getitem__'](0)), (typeof ($111=rect)['__array'] != 'undefined'?
							((typeof $111['__array'][$112=1]) != 'undefined'?$111['__array'][$112]:
								$111['__getitem__']($112)):
								$111['__getitem__'](1)), (typeof ($113=rect)['__array'] != 'undefined'?
							((typeof $113['__array'][$114=2]) != 'undefined'?$113['__array'][$114]:
								$113['__getitem__']($114)):
								$113['__getitem__'](2)), (typeof ($115=rect)['__array'] != 'undefined'?
							((typeof $115['__array'][$116=3]) != 'undefined'?$115['__array'][$116]:
								$115['__getitem__']($116)):
								$115['__getitem__'](3)));
						_rect = surface_rect['clip'](_rect_);
						$m['rectPool']['append'](_rect_);
					}
					$m['rectPool']['append'](surface_rect);
				}
				if ((($bool53=((($bool52=$and9=_rect['width']) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
					false :
					(typeof $bool52=='object'?
						(typeof $bool52['__nonzero__']=='function'?
							$bool52['__nonzero__']() :
							(typeof $bool52['__len__']=='function'?
								($bool52['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?_rect['height']:$and9)) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
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
					self['fillRect'](_rect['x'], _rect['y'], _rect['width'], _rect['height']);
				}
			}
			return _rect;
		}
	, 1, [null,null,['self'],['color', null],['rect', null]]);
		$cls_definition['fill'] = $method;
		$method = $pyjs__bind_method2('get_parent', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr245,$attr246;
			return self['_super_surface'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_parent'] = $method;
		$method = $pyjs__bind_method2('get_offset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr248,$attr247;
			return self['_offset'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_offset'] = $method;
		$method = $pyjs__bind_method2('toDataURL', function(datatype) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				datatype = arguments[1];
			}
			if (typeof datatype == 'undefined') datatype=arguments['callee']['__args__'][3][1];
			var $bool54,$bool55;
			if ((($bool55=!(($bool54=datatype) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
				false :
				(typeof $bool54=='object'?
					(typeof $bool54['__nonzero__']=='function'?
						$bool54['__nonzero__']() :
						(typeof $bool54['__len__']=='function'?
							($bool54['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
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
				return self['canvas']['toDataURL']();
			}
			else {
				return self['canvas']['toDataURL'](datatype);
			}
			return null;
		}
	, 1, [null,null,['self'],['datatype', null]]);
		$cls_definition['toDataURL'] = $method;
		$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda7,$lambda6,$lambda5,$lambda4,$lambda3,$lambda2,$lambda1;
			var 			$lambda1 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return self;
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = ['arg',null];
			self['convert'] = $lambda1;
			var 			$lambda2 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return self;
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = ['arg',null];
			self['convert_alpha'] = $lambda2;
			var 			$lambda3 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda3['__name__'] = '$lambda3';

			$lambda3['__bind_type__'] = 0;
			$lambda3['__args__'] = ['arg',null];
			self['lock'] = $lambda3;
			var 			$lambda4 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda4['__name__'] = '$lambda4';

			$lambda4['__bind_type__'] = 0;
			$lambda4['__args__'] = ['arg',null];
			self['unlock'] = $lambda4;
			var 			$lambda5 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return false;
			};
			$lambda5['__name__'] = '$lambda5';

			$lambda5['__bind_type__'] = 0;
			$lambda5['__args__'] = ['arg',null];
			self['mustlock'] = $lambda5;
			var 			$lambda6 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return false;
			};
			$lambda6['__name__'] = '$lambda6';

			$lambda6['__bind_type__'] = 0;
			$lambda6['__args__'] = ['arg',null];
			self['get_locked'] = $lambda6;
			var 			$lambda7 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return $p['tuple']([]);
			};
			$lambda7['__name__'] = '$lambda7';

			$lambda7['__bind_type__'] = 0;
			$lambda7['__args__'] = ['arg',null];
			self['get_locks'] = $lambda7;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_nonimplemented_methods'] = $method;
		var $bases = new Array($m['HTML5Canvas']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Surface', $p['tuple']($bases), $data);
	})();
	$m['Surf'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.surface';
		$method = $pyjs__bind_method2('__init__', function(image) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				image = arguments[1];
			}
			var $attr249,$attr252,$attr250,$attr251;
			self['canvas'] = image;
			self['width'] = self['canvas']['width'];
			self['height'] = self['canvas']['height'];
			self['_alpha'] = 1.0;
			self['_nonimplemented_methods']();
			return null;
		}
	, 1, [null,null,['self'],['image']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_size', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr255,$attr256,$attr254,$attr253;
			return $p['tuple']([self['width'], self['height']]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_size'] = $method;
		$method = $pyjs__bind_method2('get_width', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr257,$attr258;
			return self['width'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_width'] = $method;
		$method = $pyjs__bind_method2('get_height', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr260,$attr259;
			return self['height'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_height'] = $method;
		$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda9,$lambda8,$lambda13,$lambda12,$lambda11,$lambda10,$lambda14;
			var 			$lambda8 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return self;
			};
			$lambda8['__name__'] = '$lambda8';

			$lambda8['__bind_type__'] = 0;
			$lambda8['__args__'] = ['arg',null];
			self['convert'] = $lambda8;
			var 			$lambda9 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return self;
			};
			$lambda9['__name__'] = '$lambda9';

			$lambda9['__bind_type__'] = 0;
			$lambda9['__args__'] = ['arg',null];
			self['convert_alpha'] = $lambda9;
			var 			$lambda10 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda10['__name__'] = '$lambda10';

			$lambda10['__bind_type__'] = 0;
			$lambda10['__args__'] = ['arg',null];
			self['lock'] = $lambda10;
			var 			$lambda11 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda11['__name__'] = '$lambda11';

			$lambda11['__bind_type__'] = 0;
			$lambda11['__args__'] = ['arg',null];
			self['unlock'] = $lambda11;
			var 			$lambda12 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return false;
			};
			$lambda12['__name__'] = '$lambda12';

			$lambda12['__bind_type__'] = 0;
			$lambda12['__args__'] = ['arg',null];
			self['mustlock'] = $lambda12;
			var 			$lambda13 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return false;
			};
			$lambda13['__name__'] = '$lambda13';

			$lambda13['__bind_type__'] = 0;
			$lambda13['__args__'] = ['arg',null];
			self['get_locked'] = $lambda13;
			var 			$lambda14 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return $p['tuple']([]);
			};
			$lambda14['__name__'] = '$lambda14';

			$lambda14['__bind_type__'] = 0;
			$lambda14['__args__'] = ['arg',null];
			self['get_locks'] = $lambda14;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_nonimplemented_methods'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Surf', $p['tuple']($bases), $data);
	})();
	$m['IndexSizeError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.surface';
		var $bases = new Array($p['Exception']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('IndexSizeError', $p['tuple']($bases), $data);
	})();
	$m['bounding_rect_return'] = function(setting) {

		$m['_return_rect'] = setting;
		return null;
	};
	$m['bounding_rect_return']['__name__'] = 'bounding_rect_return';

	$m['bounding_rect_return']['__bind_type__'] = 0;
	$m['bounding_rect_return']['__args__'] = [null,null,['setting']];
	return this;
}; /* end pyjsdl.surface */


/* end module: pyjsdl.surface */


/*
PYJS_DEPS: ['pyjsdl.pyjsobj.HTML5Canvas', 'pyjsdl', 'pyjsdl.pyjsobj', 'pyjsdl.rect.Rect', 'pyjsdl.rect', 'pyjsdl.rect.rectPool', 'pyjsdl.color.Color', 'pyjsdl.color', 'sys', 'pyjsdl.util._range', 'pyjsdl.util']
*/
