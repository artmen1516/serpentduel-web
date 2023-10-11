/* start module: pyjsdl.display */
$pyjs['loaded_modules']['pyjsdl.display'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.display']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.display'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.display'];
	$m['__repr__'] = function() { return '<module: pyjsdl.display>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.display';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['display'] = $pyjs['loaded_modules']['pyjsdl.display'];


	$m['base64'] = $p['___import___']('base64', 'pyjsdl');
	$m['Surface'] = $p['___import___']('pyjsdl.surface.Surface', 'pyjsdl', null, false);
	$m['Rect'] = $p['___import___']('pyjsdl.rect.Rect', 'pyjsdl', null, false);
	$m['Time'] = $p['___import___']('pyjsdl.time.Time', 'pyjsdl', null, false);
	$m['env'] = $p['___import___']('pyjsdl.env', 'pyjsdl', null, false);
	$m['DOM'] = $p['___import___']('pyjsdl.pyjsobj.DOM', 'pyjsdl', null, false);
	$m['Window'] = $p['___import___']('pyjsdl.pyjsobj.Window', 'pyjsdl', null, false);
	$m['RootPanel'] = $p['___import___']('pyjsdl.pyjsobj.RootPanel', 'pyjsdl', null, false);
	$m['SimplePanel'] = $p['___import___']('pyjsdl.pyjsobj.SimplePanel', 'pyjsdl', null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjsdl.pyjsobj.VerticalPanel', 'pyjsdl', null, false);
	$m['loadImages'] = $p['___import___']('pyjsdl.pyjsobj.loadImages', 'pyjsdl', null, false);
	$m['TextBox'] = $p['___import___']('pyjsdl.pyjsobj.TextBox', 'pyjsdl', null, false);
	$m['TextArea'] = $p['___import___']('pyjsdl.pyjsobj.TextArea', 'pyjsdl', null, false);
	$m['Event'] = $p['___import___']('pyjsdl.pyjsobj.Event', 'pyjsdl', null, false);
	$m['requestAnimationFrameInit'] = $p['___import___']('pyjsdl.pyjsobj.requestAnimationFrameInit', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['_canvas'] = null;
	$m['_ctx'] = null;
	$m['_img'] = null;
	$m['_wnd'] = null;
	$m['Canvas'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.display';
		$method = $pyjs__bind_method2('__init__', function(size, buffered) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				size = arguments[1];
				buffered = arguments[2];
			}
			var $attr20,$attr21,$attr22,$attr23,$attr24,$attr25,$attr26,$attr27,$attr28,$attr29,$attr38,$pyjs_try_err,$attr9,$attr8,$attr1,$attr3,$attr2,$attr5,$attr4,$attr7,$attr6,$bool2,$bool3,$attr31,$bool1,$attr19,$attr18,$attr35,$attr34,$attr15,$attr14,$attr17,$attr16,$attr11,$attr10,$attr13,$attr12,$attr33,$attr32,$attr30,$attr37,$attr36;
			$m['Surface']['__init__'](self, size);
			if ((($bool1=$p['isinstance'](buffered, $p['bool'])) === null || $bool1 === false || $bool1 === 0 || $bool1 === '' ?
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
				self['_bufferedimage'] = buffered;
			}
			else {
				self['_bufferedimage'] = true;
			}
			try {
				if ((($bool2=self['impl']['canvasContext']) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
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
					self['_isCanvas'] = true;
				}
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					self['_isCanvas'] = false;
					self['_bufferedimage'] = false;
				}
			}
			if ((($bool3=self['_bufferedimage']) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				self['surface'] = $m['Surface'](size);
			}
			else {
				self['surface'] = self;
			}
			self['images'] = $p['dict']([]);
			self['image_list'] = $p['list']([]);
			self['callback'] = null;
			self['time'] = $m['Time']();
			self['event'] = $m['env']['event'];
			self['addMouseListener'](self);
			self['addKeyEventListener'](self);
			self['sinkEvents'](($m['Event']['ONMOUSEDOWN'])|($m['Event']['ONMOUSEUP'])|($m['Event']['ONMOUSEMOVE'])|($m['Event']['ONMOUSEOUT'])|($m['Event']['ONMOUSEWHEEL'])|($m['Event']['ONKEYDOWN'])|($m['Event']['ONKEYPRESS'])|($m['Event']['ONKEYUP']));
			self['onContextMenu'] = null;
			self['preventContextMenu']();
			self['evt'] = self['event']['eventObj'];
			self['modKey'] = self['event']['modKey'];
			self['specialKey'] = self['event']['specialKey'];
			self['modKeyCode'] = self['event']['modKeyCode'];
			self['specialKeyCode'] = self['event']['specialKeyCode'];
			self['keyRepeat'] = self['event']['keyRepeat'];
			self['keyHeld'] = self['event']['keyHeld'];
			self['mouse_entered'] = true;
			self['event']['_initiate_touch_listener'](self);
			self['_touch_callback'] = self['event']['touchlistener']['callback'];
			self['_rect_list'] = $p['list']([]);
			self['_rect_len'] = 0;
			self['_rect_num'] = 0;
			self['_framerate'] = 0;
			self['_frametime'] = 0;
			self['_rendertime'] = self['time']['time']();
			self['_pause'] = false;
			self['_canvas_init']();
			self['initialized'] = false;
			return null;
		}
	, 1, [null,null,['self'],['size'],['buffered']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_canvas_init', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr40,$attr41,$attr42,$attr39;
			$m['_canvas'] = self;
			$m['_ctx'] = self['impl']['canvasContext'];
			$m['_img'] = self['surface']['canvas'];
			$m['_wnd'] = $m['requestAnimationFrameInit']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_canvas_init'] = $method;
		$method = $pyjs__bind_method2('onMouseMove', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $attr46,$attr47,$attr44,$attr45,$attr43,event,$attr48,$attr49,$attr68,$attr64,$attr65,$attr67,$attr60,$attr61,$attr62,$attr63,$bool6,$bool4,$bool5,$6,$4,$5,$2,$3,$1,$attr59,$attr58,$attr51,$attr50,$attr53,$attr52,$attr55,$attr54,$attr57,$attr56,$attr66;
			event = $m['DOM']['eventGetCurrentEvent']();
			if ((($bool4=self['event']['events']['__contains__'](event['type'])) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
				if ((($bool6=!(($bool5=self['mouse_entered']) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
					false :
					(typeof $bool5=='object'?
						(typeof $bool5['__nonzero__']=='function'?
							$bool5['__nonzero__']() :
							(typeof $bool5['__len__']=='function'?
								($bool5['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool6 === false || $bool6 === 0 || $bool6 === '' ?
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
					self['event']['mouseMovePre']['__setitem__']('x', (typeof ($1=self['event']['mouseMove'])['__array'] != 'undefined'?
						((typeof $1['__array'][$2='x']) != 'undefined'?$1['__array'][$2]:
							$1['__getitem__']($2)):
							$1['__getitem__']('x')));
					self['event']['mouseMovePre']['__setitem__']('y', (typeof ($3=self['event']['mouseMove'])['__array'] != 'undefined'?
						((typeof $3['__array'][$4='y']) != 'undefined'?$3['__array'][$4]:
							$3['__getitem__']($4)):
							$3['__getitem__']('y')));
				}
				else {
					self['event']['mouseMovePre']['__setitem__']('x', x);
					self['event']['mouseMovePre']['__setitem__']('y', y);
					self['mouse_entered'] = false;
				}
				self['event']['_updateQueue']((typeof ($5=self['evt'])['__array'] != 'undefined'?
					((typeof $5['__array'][$6=event['type']]) != 'undefined'?$5['__array'][$6]:
						$5['__getitem__']($6)):
						$5['__getitem__'](event['type']))(event, x, y));
			}
			self['event']['mouseMove']['__setitem__']('x', x);
			self['event']['mouseMove']['__setitem__']('y', y);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseMove'] = $method;
		$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $attr80,$attr69,$attr79,$attr78,$attr77,$attr76,$attr74,$attr73,$attr72,$attr71,$attr70,$attr75,$bool7,$8,$7,event;
			event = $m['DOM']['eventGetCurrentEvent']();
			if ((($bool7=self['event']['events']['__contains__'](event['type'])) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				self['event']['_updateQueue']((typeof ($7=self['evt'])['__array'] != 'undefined'?
					((typeof $7['__array'][$8=event['type']]) != 'undefined'?$7['__array'][$8]:
						$7['__getitem__']($8)):
						$7['__getitem__'](event['type']))(event, x, y));
			}
			self['event']['mousePress']['__setitem__'](event['button'], true);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseDown'] = $method;
		$method = $pyjs__bind_method2('onMouseUp', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}
			var $attr82,$attr83,$attr81,$attr86,$attr84,$attr85,$10,$attr89,$attr91,$attr90,$attr88,$9,$bool8,$attr92,event,$attr87;
			event = $m['DOM']['eventGetCurrentEvent']();
			if ((($bool8=self['event']['events']['__contains__'](event['type'])) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
				self['event']['_updateQueue']((typeof ($9=self['evt'])['__array'] != 'undefined'?
					((typeof $9['__array'][$10=event['type']]) != 'undefined'?$9['__array'][$10]:
						$9['__getitem__']($10)):
						$9['__getitem__'](event['type']))(event, x, y));
			}
			self['event']['mousePress']['__setitem__'](event['button'], false);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseUp'] = $method;
		$method = $pyjs__bind_method2('onMouseEnter', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['mouse_entered'] = true;
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseEnter'] = $method;
		$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $iter1_iter,$attr106,$attr107,$attr104,$attr105,$attr102,$attr103,$attr100,$attr101,$attr108,$iter1_array,$iter1_nextval,$12,$bool9,keycode,$iter1_type,$attr95,$attr94,$attr97,$attr96,$attr93,$11,$attr110,$attr99,$attr98,$iter1_idx,$attr109;
			self['event']['mousePress']['__setitem__'](0, false);
			self['event']['mousePress']['__setitem__'](1, false);
			self['event']['mousePress']['__setitem__'](2, false);
			self['event']['mouseMove']['__setitem__']('x', -(1));
			self['event']['mouseMove']['__setitem__']('y', -(1));
			self['event']['mouseMoveRel']['__setitem__']('x', null);
			self['event']['mouseMoveRel']['__setitem__']('y', null);
			$iter1_iter = self['modKeyCode'];
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				keycode = $iter1_nextval;
				if ((($bool9=(typeof ($11=self['event']['keyPress'])['__array'] != 'undefined'?
					((typeof $11['__array'][$12=keycode]) != 'undefined'?$11['__array'][$12]:
						$11['__getitem__']($12)):
						$11['__getitem__'](keycode))) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
					self['event']['keyPress']['__setitem__'](keycode, false);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseLeave'] = $method;
		$method = $pyjs__bind_method2('onMouseWheel', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $bool10,$attr120,$attr121,$attr122,$attr123,$attr124,$attr125,$attr126,$14,$attr119,$attr118,$13,$attr111,$attr113,$attr112,$attr115,$attr114,$attr117,$attr116,r,y,x;
			if ((($bool10=self['event']['events']['__contains__'](event['type'])) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
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
				r = self['canvas']['getBoundingClientRect']();
				x = (event['clientX'])-($p['round'](r['left']));
				y = (event['clientY'])-($p['round'](r['top']));
				self['event']['_updateQueue']((typeof ($13=self['evt'])['__array'] != 'undefined'?
					((typeof $13['__array'][$14=event['type']]) != 'undefined'?$13['__array'][$14]:
						$13['__getitem__']($14)):
						$13['__getitem__'](event['type']))(event, x, y));
			}
			$m['DOM']['eventPreventDefault'](event);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onMouseWheel'] = $method;
		$method = $pyjs__bind_method2('onKeyEvent', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $bool11,$bool12,$bool13,$bool14,$attr127,$attr128,$attr129,$or1,$or3,$or2,$and1,$and2,keycode,$attr133,$attr132,$attr131,$attr130,$attr137,$attr136,$attr135,$attr134,$attr138;
			self['removeKeyEventListener'](self);
			self['addKeyboardListener'](self);
			$m['DOM']['currentEvent'] = event;
			if ((($bool12=((($bool11=$and1=$p['hasattr'](event, 'key')) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
				false :
				(typeof $bool11=='object'?
					(typeof $bool11['__nonzero__']=='function'?
						$bool11['__nonzero__']() :
						(typeof $bool11['__len__']=='function'?
							($bool11['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$p['hasattr'](event, 'code'):$and1)) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
				self['onKeyDown'](self, event['key'], 0);
			}
			else {
				self['event']['_set_key_event']();
				self['onKeyDown'] = self['_onKeyDown'];
				self['onKeyUp'] = self['_onKeyUp'];
				self['onKeyPress'] = self['_onKeyPress'];
				keycode = ((($bool13=$or1=event['which']) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
					false :
					(typeof $bool13=='object'?
						(typeof $bool13['__nonzero__']=='function'?
							$bool13['__nonzero__']() :
							(typeof $bool13['__len__']=='function'?
								($bool13['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or1:((($bool14=$or2=event['keyCode']) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
					false :
					(typeof $bool14=='object'?
						(typeof $bool14['__nonzero__']=='function'?
							$bool14['__nonzero__']() :
							(typeof $bool14['__len__']=='function'?
								($bool14['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?$or2:0));
				self['_onKeyDown'](self, keycode, 0);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onKeyEvent'] = $method;
		$method = $pyjs__bind_method2('onKeyDown', function(sender, keycode, mods) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				mods = arguments[3];
			}
			var $bool18,$bool15,$bool16,$bool17,event,$attr142,$attr143,$attr140,$attr141,$attr146,$attr147,$attr144,$attr145,$attr149,$attr154,$attr157,$attr156,$attr150,$attr155,$15,$16,$attr151,$attr153,$attr152,$18,$attr158,$attr139,$17,$attr148;
			event = $m['DOM']['eventGetCurrentEvent']();
			if ((($bool15=self['modKey']['__contains__'](event['key'])) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
				self['event']['keyPress']['__setitem__']((typeof ($15=self['modKey'])['__array'] != 'undefined'?
					((typeof $15['__array'][$16=event['key']]) != 'undefined'?$15['__array'][$16]:
						$15['__getitem__']($16)):
						$15['__getitem__'](event['key'])), true);
			}
			if ((($bool16=self['event']['events']['__contains__'](event['type'])) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
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
				if ((($bool18=!(($bool17=self['_isPaused'](event['key'])) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
					self['event']['_updateQueue']((typeof ($17=self['evt'])['__array'] != 'undefined'?
						((typeof $17['__array'][$18=event['type']]) != 'undefined'?$17['__array'][$18]:
							$17['__getitem__']($18)):
							$17['__getitem__'](event['type']))(event));
				}
			}
			$m['DOM']['eventPreventDefault'](event);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['mods']]);
		$cls_definition['onKeyDown'] = $method;
		$method = $pyjs__bind_method2('onKeyUp', function(sender, keycode, mods) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				mods = arguments[3];
			}
			var $bool19,$22,$attr173,$19,event,$attr168,$attr169,$attr164,$20,$attr166,$attr167,$attr160,$attr161,$attr162,$attr163,$bool21,$bool20,$24,$attr184,$attr182,$attr183,$attr180,$attr181,$23,$attr179,$attr178,$attr177,$attr176,$attr175,$attr174,$attr159,$attr172,$attr171,$attr170,$21,$attr165;
			event = $m['DOM']['eventGetCurrentEvent']();
			if ((($bool19=self['modKey']['__contains__'](event['key'])) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				self['event']['keyPress']['__setitem__']((typeof ($19=self['modKey'])['__array'] != 'undefined'?
					((typeof $19['__array'][$20=event['key']]) != 'undefined'?$19['__array'][$20]:
						$19['__getitem__']($20)):
						$19['__getitem__'](event['key'])), false);
			}
			if ((($bool20=self['keyHeld']['__contains__'](event['key'])) === null || $bool20 === false || $bool20 === 0 || $bool20 === '' ?
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
				(typeof ($21=self['keyHeld'])['__array'] != 'undefined'?
					((typeof $21['__array'][$22=event['key']]) != 'undefined'?$21['__array'][$22]:
						$21['__getitem__']($22)):
						$21['__getitem__'](event['key']))['__setitem__']('pressed', false);
			}
			if ((($bool21=self['event']['events']['__contains__'](event['type'])) === null || $bool21 === false || $bool21 === 0 || $bool21 === '' ?
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
				self['event']['_updateQueue']((typeof ($23=self['evt'])['__array'] != 'undefined'?
					((typeof $23['__array'][$24=event['type']]) != 'undefined'?$23['__array'][$24]:
						$23['__getitem__']($24)):
						$23['__getitem__'](event['type']))(event));
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['mods']]);
		$cls_definition['onKeyUp'] = $method;
		$method = $pyjs__bind_method2('_onKeyDown', function(sender, keycode, mods) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				mods = arguments[3];
			}
			var $attr191,$attr190,$attr193,$attr192,$attr195,$attr194,$attr197,$attr196,$attr198,event,$25,$26,$bool25,$bool24,$bool26,$bool23,$bool22,$attr188,$attr189,$attr186,$attr187,$attr185;
			event = $m['DOM']['eventGetCurrentEvent']();
			if ((($bool22=self['modKeyCode']['__contains__'](keycode)) === null || $bool22 === false || $bool22 === 0 || $bool22 === '' ?
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
				self['event']['keyPress']['__setitem__'](keycode, true);
			}
			if ((($bool23=self['event']['events']['__contains__'](event['type'])) === null || $bool23 === false || $bool23 === 0 || $bool23 === '' ?
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
				if ((($bool25=!(($bool24=self['_isPaused'](keycode)) === null || $bool24 === false || $bool24 === 0 || $bool24 === '' ?
					false :
					(typeof $bool24=='object'?
						(typeof $bool24['__nonzero__']=='function'?
							$bool24['__nonzero__']() :
							(typeof $bool24['__len__']=='function'?
								($bool24['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool25 === false || $bool25 === 0 || $bool25 === '' ?
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
					self['event']['keyCode'] = keycode;
					if ((($bool26=self['specialKeyCode']['__contains__'](keycode)) === null || $bool26 === false || $bool26 === 0 || $bool26 === '' ?
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
						self['event']['_updateQueue']((typeof ($25=self['evt'])['__array'] != 'undefined'?
							((typeof $25['__array'][$26=event['type']]) != 'undefined'?$25['__array'][$26]:
								$25['__getitem__']($26)):
								$25['__getitem__'](event['type']))(event, keycode));
						$m['DOM']['eventPreventDefault'](event);
					}
				}
				else {
					$m['DOM']['eventPreventDefault'](event);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['mods']]);
		$cls_definition['_onKeyDown'] = $method;
		$method = $pyjs__bind_method2('_onKeyUp', function(sender, keycode, mods) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				mods = arguments[3];
			}
			var $attr199,event,$29,$28,$27,$bool27,$attr209,$attr208,$attr205,$attr204,$attr207,$attr206,$bool29,$bool28,$attr203,$attr202,$attr201,$30,$attr200,$attr212,$attr213,$attr210,$attr211,$attr214;
			event = $m['DOM']['eventGetCurrentEvent']();
			if ((($bool27=self['modKeyCode']['__contains__'](keycode)) === null || $bool27 === false || $bool27 === 0 || $bool27 === '' ?
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
				self['event']['keyPress']['__setitem__'](keycode, false);
			}
			if ((($bool28=self['keyHeld']['__contains__'](keycode)) === null || $bool28 === false || $bool28 === 0 || $bool28 === '' ?
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
				(typeof ($27=self['keyHeld'])['__array'] != 'undefined'?
					((typeof $27['__array'][$28=keycode]) != 'undefined'?$27['__array'][$28]:
						$27['__getitem__']($28)):
						$27['__getitem__'](keycode))['__setitem__']('pressed', false);
			}
			if ((($bool29=self['event']['events']['__contains__'](event['type'])) === null || $bool29 === false || $bool29 === 0 || $bool29 === '' ?
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
				self['event']['_updateQueue']((typeof ($29=self['evt'])['__array'] != 'undefined'?
					((typeof $29['__array'][$30=event['type']]) != 'undefined'?$29['__array'][$30]:
						$29['__getitem__']($30)):
						$29['__getitem__'](event['type']))(event, keycode));
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['mods']]);
		$cls_definition['_onKeyUp'] = $method;
		$method = $pyjs__bind_method2('_onKeyPress', function(sender, keycode, mods) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				mods = arguments[3];
			}
			var $attr226,$attr225,$attr223,$attr221,$attr220,$32,$bool30,$attr218,$attr219,$attr217,$attr222,$31,$attr216,event,$attr224,$attr215;
			event = $m['DOM']['eventGetCurrentEvent']();
			if ((($bool30=self['event']['events']['__contains__'](event['type'])) === null || $bool30 === false || $bool30 === 0 || $bool30 === '' ?
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
				self['event']['keyPressCode']['__setitem__'](self['event']['keyCode'], keycode);
				self['event']['_updateQueue']((typeof ($31=self['evt'])['__array'] != 'undefined'?
					((typeof $31['__array'][$32=event['type']]) != 'undefined'?$31['__array'][$32]:
						$31['__getitem__']($32)):
						$31['__getitem__'](event['type']))(event, keycode));
			}
			event['preventDefault']();
			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['mods']]);
		$cls_definition['_onKeyPress'] = $method;
		$method = $pyjs__bind_method2('_isPaused', function(keycode) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				keycode = arguments[1];
			}
			var $attr234,$attr235,$attr236,$attr237,$attr230,$attr231,$attr232,$attr233,$attr238,$attr239,paused,$cmp2,$49,$48,$43,$42,$41,$40,$47,$46,$45,$44,$attr227,$attr240,time,$attr229,$attr228,key,$cmp4,$cmp1,$cmp3,$38,$39,$36,$37,$34,$35,$33,$bool32,$bool33,$bool31,$bool36,$bool37,$bool34,$bool35,$50,$bool38;
			if ((($bool31=!self['keyHeld']['__contains__'](keycode)) === null || $bool31 === false || $bool31 === 0 || $bool31 === '' ?
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
				self['keyHeld']['__setitem__'](keycode, $p['dict']([['pressed', false], ['delay', false], ['time', 0]]));
			}
			key = (typeof ($33=self['keyHeld'])['__array'] != 'undefined'?
				((typeof $33['__array'][$34=keycode]) != 'undefined'?$33['__array'][$34]:
					$33['__getitem__']($34)):
					$33['__getitem__'](keycode));
			if ((($bool33=!(($bool32=(typeof ($35=key)['__array'] != 'undefined'?
				((typeof $35['__array'][$36='pressed']) != 'undefined'?$35['__array'][$36]:
					$35['__getitem__']($36)):
					$35['__getitem__']('pressed'))) === null || $bool32 === false || $bool32 === 0 || $bool32 === '' ?
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
				key['__setitem__']('pressed', true);
				paused = false;
				if ((($bool34=(typeof ($37=self['keyRepeat'])['__array'] != 'undefined'?
					((typeof $37['__array'][$38=0]) != 'undefined'?$37['__array'][$38]:
						$37['__getitem__']($38)):
						$37['__getitem__'](0))) === null || $bool34 === false || $bool34 === 0 || $bool34 === '' ?
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
					key['__setitem__']('delay', true);
					key['__setitem__']('time', self['time']['time']());
				}
			}
			else {
				paused = true;
				if ((($bool35=(typeof ($39=self['keyRepeat'])['__array'] != 'undefined'?
					((typeof $39['__array'][$40=0]) != 'undefined'?$39['__array'][$40]:
						$39['__getitem__']($40)):
						$39['__getitem__'](0))) === null || $bool35 === false || $bool35 === 0 || $bool35 === '' ?
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
					time = self['time']['time']();
					if ((($bool36=(typeof ($41=key)['__array'] != 'undefined'?
						((typeof $41['__array'][$42='delay']) != 'undefined'?$41['__array'][$42]:
							$41['__getitem__']($42)):
							$41['__getitem__']('delay'))) === null || $bool36 === false || $bool36 === 0 || $bool36 === '' ?
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
						if ((($bool37=((($cmp1=(time)-((typeof ($43=key)['__array'] != 'undefined'?
							((typeof $43['__array'][$44='time']) != 'undefined'?$43['__array'][$44]:
								$43['__getitem__']($44)):
								$43['__getitem__']('time'))))===($cmp2=(typeof ($45=self['keyRepeat'])['__array'] != 'undefined'?
							((typeof $45['__array'][$46=0]) != 'undefined'?$45['__array'][$46]:
								$45['__getitem__']($46)):
								$45['__getitem__'](0)))?0:
							(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
								($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
								$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool37 === false || $bool37 === 0 || $bool37 === '' ?
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
							key['__setitem__']('time', time);
							key['__setitem__']('delay', false);
							paused = false;
						}
					}
					else if ((($bool38=((($cmp3=(time)-((typeof ($47=key)['__array'] != 'undefined'?
						((typeof $47['__array'][$48='time']) != 'undefined'?$47['__array'][$48]:
							$47['__getitem__']($48)):
							$47['__getitem__']('time'))))===($cmp4=(typeof ($49=self['keyRepeat'])['__array'] != 'undefined'?
						((typeof $49['__array'][$50=1]) != 'undefined'?$49['__array'][$50]:
							$49['__getitem__']($50)):
							$49['__getitem__'](1)))?0:
						(typeof $cmp3==typeof $cmp4 && ((typeof $cmp3 == 'number')||(typeof $cmp3 == 'string')||(typeof $cmp3 == 'boolean'))?
							($cmp3 == $cmp4 ? 0 : ($cmp3 < $cmp4 ? -1 : 1)):
							$p['cmp']($cmp3, $cmp4))) == 1)) === null || $bool38 === false || $bool38 === 0 || $bool38 === '' ?
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
						key['__setitem__']('time', time);
						paused = false;
					}
				}
			}
			return paused;
		}
	, 1, [null,null,['self'],['keycode']]);
		$cls_definition['_isPaused'] = $method;
		$method = $pyjs__bind_method2('onTouchInitiate', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,callback,$iter2_idx,$bool39,$iter2_array;
			self['event']['touchlistener']['activate']();
			$iter2_iter = self['_touch_callback'];
			if (typeof ($iter2_array = $iter2_iter['__array']) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter['__iter__']();
				$iter2_type = typeof ($iter2_array = $iter2_iter['__array']) != 'undefined'? 0 : (typeof $iter2_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):$p['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				callback = $iter2_nextval;
				if ((($bool39=$p['hasattr'](callback, 'onTouchInitiate')) === null || $bool39 === false || $bool39 === 0 || $bool39 === '' ?
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
					callback['onTouchInitiate'](event);
				}
			}
			self['onTouchStart'](event);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onTouchInitiate'] = $method;
		$method = $pyjs__bind_method2('onTouchStart', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter3_idx,$iter3_type,callback,$iter3_iter,$iter3_array,$iter3_nextval;
			$iter3_iter = self['_touch_callback'];
			if (typeof ($iter3_array = $iter3_iter['__array']) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter['__iter__']();
				$iter3_type = typeof ($iter3_array = $iter3_iter['__array']) != 'undefined'? 0 : (typeof $iter3_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):$p['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				callback = $iter3_nextval;
				callback['onTouchStart'](event);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onTouchStart'] = $method;
		$method = $pyjs__bind_method2('onTouchEnd', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter4_nextval,$iter4_idx,callback,$iter4_type,$iter4_array,$iter4_iter;
			$iter4_iter = self['_touch_callback'];
			if (typeof ($iter4_array = $iter4_iter['__array']) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter['__iter__']();
				$iter4_type = typeof ($iter4_array = $iter4_iter['__array']) != 'undefined'? 0 : (typeof $iter4_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):$p['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				callback = $iter4_nextval;
				callback['onTouchEnd'](event);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onTouchEnd'] = $method;
		$method = $pyjs__bind_method2('onTouchMove', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter5_nextval,$iter5_array,callback,$iter5_iter,$iter5_idx,$iter5_type;
			$iter5_iter = self['_touch_callback'];
			if (typeof ($iter5_array = $iter5_iter['__array']) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter['__iter__']();
				$iter5_type = typeof ($iter5_array = $iter5_iter['__array']) != 'undefined'? 0 : (typeof $iter5_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):$p['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				callback = $iter5_nextval;
				callback['onTouchMove'](event);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onTouchMove'] = $method;
		$method = $pyjs__bind_method2('onTouchCancel', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter6_idx,$iter6_type,callback,$iter6_array,$iter6_iter,$iter6_nextval;
			$iter6_iter = self['_touch_callback'];
			if (typeof ($iter6_array = $iter6_iter['__array']) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter['__iter__']();
				$iter6_type = typeof ($iter6_array = $iter6_iter['__array']) != 'undefined'? 0 : (typeof $iter6_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):$p['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				callback = $iter6_nextval;
				callback['onTouchCancel'](event);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onTouchCancel'] = $method;
		$method = $pyjs__bind_method2('preventContextMenu', function(setting) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				setting = arguments[1];
			}
			if (typeof setting == 'undefined') setting=arguments['callee']['__args__'][3][1];
			var $attr241,$attr243,$attr242,$attr245,$lambda1,$bool41,$bool40,$attr248,$attr246,element,$attr247,$bool43,$bool42,$attr244;
			if ((($bool40=setting) === null || $bool40 === false || $bool40 === 0 || $bool40 === '' ?
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
				if ((($bool41=self['onContextMenu']) === null || $bool41 === false || $bool41 === 0 || $bool41 === '' ?
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
					return null;
				}
				element = self['getElement']();
				var 				$lambda1 = function(event) {

					return event['preventDefault']();
				};
				$lambda1['__name__'] = '$lambda1';

				$lambda1['__bind_type__'] = 0;
				$lambda1['__args__'] = [null,null,['event']];
				self['onContextMenu'] = $lambda1;
				element['addEventListener']('contextmenu', self['onContextMenu']);
			}
			else {
				if ((($bool43=!(($bool42=self['onContextMenu']) === null || $bool42 === false || $bool42 === 0 || $bool42 === '' ?
					false :
					(typeof $bool42=='object'?
						(typeof $bool42['__nonzero__']=='function'?
							$bool42['__nonzero__']() :
							(typeof $bool42['__len__']=='function'?
								($bool42['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool43 === false || $bool43 === 0 || $bool43 === '' ?
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
					return null;
				}
				element = self['getElement']();
				element['removeEventListener']('contextmenu', self['onContextMenu']);
				self['onContextMenu'] = null;
			}
			return null;
		}
	, 1, [null,null,['self'],['setting', true]]);
		$cls_definition['preventContextMenu'] = $method;
		$method = $pyjs__bind_method2('resize', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}
			var $bool44,$attr249,$attr250;
			$m['Surface']['resize'](self, width, height);
			if ((($bool44=self['_bufferedimage']) === null || $bool44 === false || $bool44 === 0 || $bool44 === '' ?
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
				self['surface']['resize'](width, height);
			}
			self['surface']['_display']['_surface_rect'] = self['surface']['get_rect']();
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['resize'] = $method;
		$method = $pyjs__bind_method2('set_callback', function(cb) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cb = arguments[1];
			}
			var $bool45,$bool46;
			if ((($bool46=!(($bool45=$p['hasattr'](cb, 'run')) === null || $bool45 === false || $bool45 === 0 || $bool45 === '' ?
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
				self['callback'] = (typeof Callback == "undefined"?$m['Callback']:Callback)(cb);
			}
			else {
				self['callback'] = cb;
			}
			return null;
		}
	, 1, [null,null,['self'],['cb']]);
		$cls_definition['set_callback'] = $method;
		$method = $pyjs__bind_method2('load_images', function(images) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				images = arguments[1];
			}
			var $bool50,$bool51,image,image_list,$iter7_type,$60,$bool47,$iter7_iter,$bool49,$bool48,$iter7_idx,data,name,$iter7_nextval,$iter7_array,$58,$59,ext,$51,$52,$53,$54,$55,$56,$57;
			if ((($bool47=images) === null || $bool47 === false || $bool47 === 0 || $bool47 === '' ?
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
				image_list = $p['list']([]);
				$iter7_iter = images;
				if (typeof ($iter7_array = $iter7_iter['__array']) != 'undefined') {
					$iter7_type = 0;
				} else {
					$iter7_iter = $iter7_iter['__iter__']();
					$iter7_type = typeof ($iter7_array = $iter7_iter['__array']) != 'undefined'? 0 : (typeof $iter7_iter['$genfunc'] == 'function'? 1 : -1);
				}
				$iter7_idx = 0;
				while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):$p['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
					image = $iter7_nextval;
					if ((($bool48=$p['isinstance'](image, $p['str'])) === null || $bool48 === false || $bool48 === 0 || $bool48 === '' ?
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
						image_list['append'](image);
						self['image_list']['append'](image);
					}
					else {
						name = (typeof ($51=image)['__array'] != 'undefined'?
							((typeof $51['__array'][$52=0]) != 'undefined'?$51['__array'][$52]:
								$51['__getitem__']($52)):
								$51['__getitem__'](0));
						if ((($bool49=$p['isinstance']((typeof ($53=image)['__array'] != 'undefined'?
							((typeof $53['__array'][$54=1]) != 'undefined'?$53['__array'][$54]:
								$53['__getitem__']($54)):
								$53['__getitem__'](1)), $p['str'])) === null || $bool49 === false || $bool49 === 0 || $bool49 === '' ?
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
							data = (typeof ($55=image)['__array'] != 'undefined'?
								((typeof $55['__array'][$56=1]) != 'undefined'?$55['__array'][$56]:
									$55['__getitem__']($56)):
									$55['__getitem__'](1));
						}
						else {
							data = $m['base64']['b64encode']((typeof ($57=image)['__array'] != 'undefined'?
								((typeof $57['__array'][$58=1]) != 'undefined'?$57['__array'][$58]:
									$57['__getitem__']($58)):
									$57['__getitem__'](1))['getvalue']());
						}
						if ((($bool51=!(($bool50=data['startswith']('data:')) === null || $bool50 === false || $bool50 === 0 || $bool50 === '' ?
							false :
							(typeof $bool50=='object'?
								(typeof $bool50['__nonzero__']=='function'?
									$bool50['__nonzero__']() :
									(typeof $bool50['__len__']=='function'?
										($bool50['__len__']()>0 ?
											true :
											false) :
										true ) ) :
								 true ) )) === null || $bool51 === false || $bool51 === 0 || $bool51 === '' ?
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
							ext = (typeof ($59=name['strip']()['$$split']('.'))['__array'] != 'undefined'?
								((typeof $59['__array'][$60=-(1)]) != 'undefined'?$59['__array'][$60]:
									$59['__getitem__']($60)):
									$59['__getitem__'](-(1)));
							data = $p['sprintf']('data:%s;base64,%s', $p['tuple']([ext, data]));
						}
						image_list['append'](data);
						self['image_list']['append'](name);
					}
				}
				$m['loadImages'](image_list, self);
			}
			else {
				self['start']();
			}
			return null;
		}
	, 1, [null,null,['self'],['images']]);
		$cls_definition['load_images'] = $method;
		$method = $pyjs__bind_method2('onImagesLoaded', function(images) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				images = arguments[1];
			}
			var $iter8_idx,i,$attr252,$iter8_array,$attr253,$attr251,$iter8_iter,$iter8_nextval,image,$attr254,$61,$iter8_type,$62;
			$iter8_iter = $p['enumerate'](self['image_list']);
			if (typeof ($iter8_array = $iter8_iter['__array']) != 'undefined') {
				$iter8_type = 0;
			} else {
				$iter8_iter = $iter8_iter['__iter__']();
				$iter8_type = typeof ($iter8_array = $iter8_iter['__array']) != 'undefined'? 0 : (typeof $iter8_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter8_idx = 0;
			while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):$p['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter8_nextval, 2, null);
				i = $tupleassign1[0];
				image = $tupleassign1[1];
				self['images']['__setitem__'](image, (typeof ($61=images)['__array'] != 'undefined'?
					((typeof $61['__array'][$62=i]) != 'undefined'?$61['__array'][$62]:
						$61['__getitem__']($62)):
						$61['__getitem__'](i))['getElement']());
			}
			self['start']();
			return null;
		}
	, 1, [null,null,['self'],['images']]);
		$cls_definition['onImagesLoaded'] = $method;
		$method = $pyjs__bind_method2('start', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr256,$attr255,$bool52,$bool53;
			if ((($bool53=!(($bool52=self['initialized']) === null || $bool52 === false || $bool52 === 0 || $bool52 === '' ?
				false :
				(typeof $bool52=='object'?
					(typeof $bool52['__nonzero__']=='function'?
						$bool52['__nonzero__']() :
						(typeof $bool52['__len__']=='function'?
							($bool52['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool53 === false || $bool53 === 0 || $bool53 === '' ?
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
				self['initialized'] = true;
				$m['_wnd']['requestAnimationFrame']((typeof run == "undefined"?$m['run']:run));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['start'] = $method;
		$method = $pyjs__bind_method2('stop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda3,$lambda2;
			var 			$lambda2 = function(ts) {

				return null;
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = [null,null,['ts']];
			$m['run'] = $lambda2;
			var 			$lambda3 = function() {

				return null;
			};
			$lambda3['__name__'] = '$lambda3';

			$lambda3['__bind_type__'] = 0;
			$lambda3['__args__'] = [null,null];
			self['run'] = $lambda3;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['stop'] = $method;
		$method = $pyjs__bind_method2('_get_rect', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $cmp5,$bool54,$cmp6,$attr258,$attr259,$attr263,$attr257,$attr260,$attr267,$attr266,$attr265,$attr264,$attr268,$attr262,$65,$64,$66,$attr261,$63;
			if ((($bool54=((($cmp5=self['_rect_num'])===($cmp6=self['_rect_len'])?0:
				(typeof $cmp5==typeof $cmp6 && ((typeof $cmp5 == 'number')||(typeof $cmp5 == 'string')||(typeof $cmp5 == 'boolean'))?
					($cmp5 == $cmp6 ? 0 : ($cmp5 < $cmp6 ? -1 : 1)):
					$p['cmp']($cmp5, $cmp6))) == -1)) === null || $bool54 === false || $bool54 === 0 || $bool54 === '' ?
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
				return (typeof ($63=self['_rect_list'])['__array'] != 'undefined'?
					((typeof $63['__array'][$64=self['_rect_num']]) != 'undefined'?$63['__array'][$64]:
						$63['__getitem__']($64)):
						$63['__getitem__'](self['_rect_num']));
			}
			else {
				self['_rect_list']['append']($m['Rect'](0, 0, 0, 0));
				self['_rect_len'] += 1;
				return (typeof ($65=self['_rect_list'])['__array'] != 'undefined'?
					((typeof $65['__array'][$66=self['_rect_num']]) != 'undefined'?$65['__array'][$66]:
						$65['__getitem__']($66)):
						$65['__getitem__'](self['_rect_num']));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_get_rect'] = $method;
		$method = $pyjs__bind_method2('update', function(timestamp) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				timestamp = arguments[1];
			}
			var $attr278,$bool55,$attr269,$cmp7,$attr270,$attr273,$attr274,$bool56,$attr276,$attr275,$bool57,$attr271,$cmp8,$attr277,$attr272;
			if ((($bool56=!(($bool55=self['_framerate']) === null || $bool55 === false || $bool55 === 0 || $bool55 === '' ?
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
				self['_frametime'] = (timestamp)-(self['_rendertime']);
				self['run']();
			}
			else {
				self['_frametime'] += (timestamp)-(self['_rendertime']);
				if ((($bool57=((($cmp7=self['_frametime'])===($cmp8=self['_framerate'])?0:
					(typeof $cmp7==typeof $cmp8 && ((typeof $cmp7 == 'number')||(typeof $cmp7 == 'string')||(typeof $cmp7 == 'boolean'))?
						($cmp7 == $cmp8 ? 0 : ($cmp7 < $cmp8 ? -1 : 1)):
						$p['cmp']($cmp7, $cmp8))) == 1)) === null || $bool57 === false || $bool57 === 0 || $bool57 === '' ?
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
					self['run']();
					self['_frametime'] = 0;
				}
			}
			self['_rendertime'] = timestamp;
			return null;
		}
	, 1, [null,null,['self'],['timestamp']]);
		$cls_definition['update'] = $method;
		$method = $pyjs__bind_method2('render', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr279,$bool58,height,$attr285,$attr284,$attr287,$attr286,$attr281,$attr280,$attr283,$attr282,$attr289,$attr288,width,$68,$67,rect,$attr292,$attr290,$attr291,y,x;
			while ((($bool58=self['_rect_num']) === null || $bool58 === false || $bool58 === 0 || $bool58 === '' ?
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
				rect = (typeof ($67=self['_rect_list'])['__array'] != 'undefined'?
					((typeof $67['__array'][$68=(self['_rect_num'])-(1)]) != 'undefined'?$67['__array'][$68]:
						$67['__getitem__']($68)):
						$67['__getitem__']((self['_rect_num'])-(1)));
				var $tupleassign2 = $p['__ass_unpack']($p['tuple']([rect['x'], rect['y'], rect['width'], rect['height']]), 4, null);
				x = $tupleassign2[0];
				y = $tupleassign2[1];
				width = $tupleassign2[2];
				height = $tupleassign2[3];
				$m['_ctx']['drawImage']($m['_img'], x, y, width, height, x, y, width, height);
				self['_rect_num'] -= 1;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['render'] = $method;
		$method = $pyjs__bind_method2('run', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['callback']['run']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['run'] = $method;
		var $bases = new Array($m['Surface']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Canvas', $p['tuple']($bases), $data);
	})();
	$m['run'] = function(timestamp) {

		$m['_wnd']['requestAnimationFrame']($m['run']);
		$m['_canvas']['update'](timestamp);
		$m['_canvas']['render']();
		return null;
	};
	$m['run']['__name__'] = 'run';

	$m['run']['__bind_type__'] = 0;
	$m['run']['__args__'] = [null,null,['timestamp']];
	$m['Callback'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.display';
		$cls_definition['__slots__'] = $p['list'](['run']);
		$method = $pyjs__bind_method2('__init__', function(cb) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cb = arguments[1];
			}

			self['run'] = cb;
			return null;
		}
	, 1, [null,null,['self'],['cb']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Callback', $p['tuple']($bases), $data);
	})();
	$m['Display'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.display';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['_initialized'] = false;
			self['init']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('init', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr293,$bool59,$attr294,$bool60;
			if ((($bool60=!(($bool59=self['_initialized']) === null || $bool59 === false || $bool59 === 0 || $bool59 === '' ?
				false :
				(typeof $bool59=='object'?
					(typeof $bool59['__nonzero__']=='function'?
						$bool59['__nonzero__']() :
						(typeof $bool59['__len__']=='function'?
							($bool59['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool60 === false || $bool60 === 0 || $bool60 === '' ?
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
				self['id'] = '';
				self['icon'] = null;
				self['_image_list'] = $p['list']([]);
				self['_nonimplemented_methods']();
				self['_initialized'] = true;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['init'] = $method;
		$method = $pyjs__bind_method2('set_mode', function(size, buffered) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				size = arguments[1];
				buffered = arguments[2];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

				var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof buffered != 'undefined') {
					if (buffered !== null && typeof buffered['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = buffered;
						buffered = arguments[3];
					}
				} else 				if (typeof size != 'undefined') {
					if (size !== null && typeof size['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = size;
						size = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof buffered == 'undefined') buffered=arguments['callee']['__args__'][4][1];
			var $lambda5,$lambda4,$bool61,$attr304,$attr305,$attr306,$bool62,$attr300,$attr301,$attr302,$attr303,panel,$attr296,$attr297,$attr295,$attr298,$attr299;
			self['canvas'] = $m['Canvas'](size, buffered);
			$m['env']['set_env']('canvas', self['canvas']);
			self['frame'] = $m['Window']['getDocumentRoot']();
			$m['env']['set_env']('frame', self['frame']);
			panel = $pyjs_kwargs_call(null, $m['SimplePanel'], null, null, [{'Widget':self['canvas']}]);
			$m['RootPanel']()['add'](panel);
			self['panel'] = panel;
			self['vpanel'] = null;
			self['textbox'] = null;
			self['textarea'] = null;
			self['Textbox'] = (typeof Textbox == "undefined"?$m['Textbox']:Textbox);
			self['Textarea'] = (typeof Textarea == "undefined"?$m['Textarea']:Textarea);
			self['surface'] = self['canvas']['surface'];
			self['surface']['_display'] = self;
			self['_surface_rect'] = self['surface']['get_rect']();
			if ((($bool62=!(($bool61=self['canvas']['_bufferedimage']) === null || $bool61 === false || $bool61 === 0 || $bool61 === '' ?
				false :
				(typeof $bool61=='object'?
					(typeof $bool61['__nonzero__']=='function'?
						$bool61['__nonzero__']() :
						(typeof $bool61['__len__']=='function'?
							($bool61['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool62 === false || $bool62 === 0 || $bool62 === '' ?
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
				var 				$lambda4 = function() {

					return null;
				};
				$lambda4['__name__'] = '$lambda4';

				$lambda4['__bind_type__'] = 0;
				$lambda4['__args__'] = [null,null];
				self['flip'] = $lambda4;
				var 				$lambda5 = function() {
					var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


					return null;
				};
				$lambda5['__name__'] = '$lambda5';

				$lambda5['__bind_type__'] = 0;
				$lambda5['__args__'] = ['arg',null];
				self['update'] = $lambda5;
			}
			return self['surface'];
		}
	, 1, ['args',['kwargs'],['self'],['size'],['buffered', true]]);
		$cls_definition['set_mode'] = $method;
		$method = $pyjs__bind_method2('setup', function(callback, images) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				callback = arguments[1];
				images = arguments[2];
			}
			if (typeof images == 'undefined') images=arguments['callee']['__args__'][4][1];
			var $bool63,$attr307,$attr312,$attr311,$attr310,$attr308,image_list,$attr309,$bool64;
			self['canvas']['set_callback'](callback);
			image_list = $p['list']([]);
			if ((($bool63=self['_image_list']) === null || $bool63 === false || $bool63 === 0 || $bool63 === '' ?
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
				image_list['extend'](self['_image_list']);
				$p['__setslice'](self['_image_list'], 0, null, $p['list']([]));
			}
			if ((($bool64=images) === null || $bool64 === false || $bool64 === 0 || $bool64 === '' ?
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
				image_list['extend'](images);
			}
			self['canvas']['load_images'](image_list);
			return null;
		}
	, 1, [null,null,['self'],['callback'],['images', null]]);
		$cls_definition['setup'] = $method;
		$method = $pyjs__bind_method2('set_callback', function(callback) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				callback = arguments[1];
			}
			var $bool65,$attr314,$attr313;
			if ((($bool65=self['canvas']['initialized']) === null || $bool65 === false || $bool65 === 0 || $bool65 === '' ?
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
				self['canvas']['set_callback'](callback);
			}
			else {
				self['setup'](callback);
			}
			return null;
		}
	, 1, [null,null,['self'],['callback']]);
		$cls_definition['set_callback'] = $method;
		$method = $pyjs__bind_method2('setup_images', function(images) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				images = arguments[1];
			}
			var $bool66;
			if ((($bool66=$p['isinstance'](images, $p['str'])) === null || $bool66 === false || $bool66 === 0 || $bool66 === '' ?
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
				images = $p['list']([images]);
			}
			self['_image_list']['extend'](images);
			return null;
		}
	, 1, [null,null,['self'],['images']]);
		$cls_definition['setup_images'] = $method;
		$method = $pyjs__bind_method2('textbox_init', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr316,$attr315,$bool67,$bool68;
			if ((($bool68=!(($bool67=self['textbox']) === null || $bool67 === false || $bool67 === 0 || $bool67 === '' ?
				false :
				(typeof $bool67=='object'?
					(typeof $bool67['__nonzero__']=='function'?
						$bool67['__nonzero__']() :
						(typeof $bool67['__len__']=='function'?
							($bool67['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool68 === false || $bool68 === 0 || $bool68 === '' ?
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
				self['textbox'] = (typeof Textbox == "undefined"?$m['Textbox']:Textbox)();
				self['textarea'] = (typeof Textarea == "undefined"?$m['Textarea']:Textarea)();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['textbox_init'] = $method;
		$method = $pyjs__bind_method2('is_canvas', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr317,$attr318;
			return self['canvas']['_isCanvas'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['is_canvas'] = $method;
		$method = $pyjs__bind_method2('get_surface', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr320,$attr319;
			return self['surface'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_surface'] = $method;
		$method = $pyjs__bind_method2('get_canvas', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr322,$attr321;
			return self['canvas'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_canvas'] = $method;
		$method = $pyjs__bind_method2('get_panel', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr323,$attr324;
			return self['panel'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_panel'] = $method;
		$method = $pyjs__bind_method2('get_vpanel', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool69,$bool70,$attr330,$attr328,$attr329,$attr326,$attr327,$attr325;
			if ((($bool70=!(($bool69=self['vpanel']) === null || $bool69 === false || $bool69 === 0 || $bool69 === '' ?
				false :
				(typeof $bool69=='object'?
					(typeof $bool69['__nonzero__']=='function'?
						$bool69['__nonzero__']() :
						(typeof $bool69['__len__']=='function'?
							($bool69['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool70 === false || $bool70 === 0 || $bool70 === '' ?
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
				self['vpanel'] = $m['VerticalPanel']();
				$m['RootPanel']()['add'](self['vpanel']);
			}
			return self['vpanel'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_vpanel'] = $method;
		$method = $pyjs__bind_method2('getAbsoluteLeft', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['canvas']['getAbsoluteLeft']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAbsoluteLeft'] = $method;
		$method = $pyjs__bind_method2('getAbsoluteTop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['canvas']['getAbsoluteTop']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAbsoluteTop'] = $method;
		$method = $pyjs__bind_method2('getScrollLeft', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr331,$attr332;
			return self['frame']['scrollLeft'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getScrollLeft'] = $method;
		$method = $pyjs__bind_method2('getScrollTop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr334,$attr333;
			return self['frame']['scrollTop'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getScrollTop'] = $method;
		$method = $pyjs__bind_method2('quit', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

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
			var $attr335,$attr336;
			return self['_initialized'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_init'] = $method;
		$method = $pyjs__bind_method2('get_active', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool71;
			if ((($bool71=$p['hasattr'](self, 'canvas')) === null || $bool71 === false || $bool71 === 0 || $bool71 === '' ?
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
				return true;
			}
			else {
				return false;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_active'] = $method;
		$method = $pyjs__bind_method2('set_caption', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var $pyjs_try_err,$attr337,$attr338;
			self['id'] = text;
			try {
				self['canvas']['setID'](self['id']);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['set_caption'] = $method;
		$method = $pyjs__bind_method2('get_caption', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr340,$pyjs_try_err,$attr339;
			try {
				return self['canvas']['getID']();
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
					return self['id'];
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_caption'] = $method;
		$method = $pyjs__bind_method2('_nonimplemented_methods', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda6;
			var 			$lambda6 = function() {
				var arg = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


				return null;
			};
			$lambda6['__name__'] = '$lambda6';

			$lambda6['__bind_type__'] = 0;
			$lambda6['__args__'] = ['arg',null];
			self['set_icon'] = $lambda6;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_nonimplemented_methods'] = $method;
		$method = $pyjs__bind_method2('flip', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr341,$attr342;
			self['canvas']['impl']['canvasContext']['drawImage'](self['surface']['canvas'], 0, 0);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['flip'] = $method;
		$method = $pyjs__bind_method2('update', function(rect_list) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rect_list = arguments[1];
			}
			if (typeof rect_list == 'undefined') rect_list=arguments['callee']['__args__'][3][1];
			var $bool72,$attr343,$attr344,$bool73,$attr346,$attr345;
			if ((($bool72=$p['hasattr'](rect_list, 'append')) === null || $bool72 === false || $bool72 === 0 || $bool72 === '' ?
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
				(typeof _update == "undefined"?$m['_update']:_update)(self['canvas'], rect_list);
			}
			else if ((($bool73=rect_list) === null || $bool73 === false || $bool73 === 0 || $bool73 === '' ?
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
				(typeof _update == "undefined"?$m['_update']:_update)(self['canvas'], $p['list']([rect_list]));
			}
			else {
				self['flip']();
			}
			return null;
		}
	, 1, [null,null,['self'],['rect_list', null]]);
		$cls_definition['update'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Display', $p['tuple']($bases), $data);
	})();
	$m['_update'] = function(canvas, rect_list) {
		var $attr358,$bool78,$bool79,$bool76,$attr352,$bool74,$bool75,$attr357,$attr356,$attr355,$attr354,$iter9_iter,$iter9_nextval,$iter9_idx,$attr353,$69,$bool77,$iter9_type,$attr348,$attr349,$attr350,repaint_rect,$and3,$and4,$and5,$and6,$attr347,$cmp15,$cmp14,$attr351,$cmp16,$cmp11,$cmp10,$cmp13,$cmp12,$80,rect,$72,$73,$70,$71,$76,$77,$74,$75,$78,$79,$cmp9,$iter9_array;
		$iter9_iter = rect_list;
		if (typeof ($iter9_array = $iter9_iter['__array']) != 'undefined') {
			$iter9_type = 0;
		} else {
			$iter9_iter = $iter9_iter['__iter__']();
			$iter9_type = typeof ($iter9_array = $iter9_iter['__array']) != 'undefined'? 0 : (typeof $iter9_iter['$genfunc'] == 'function'? 1 : -1);
		}
		$iter9_idx = 0;
		while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):$p['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
			rect = $iter9_nextval;
			if ((($bool74=$p['hasattr'](rect, 'width')) === null || $bool74 === false || $bool74 === 0 || $bool74 === '' ?
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
				if ((($bool76=((($bool75=$and3=((($cmp9=rect['width'])===($cmp10=0)?0:
					(typeof $cmp9==typeof $cmp10 && ((typeof $cmp9 == 'number')||(typeof $cmp9 == 'string')||(typeof $cmp9 == 'boolean'))?
						($cmp9 == $cmp10 ? 0 : ($cmp9 < $cmp10 ? -1 : 1)):
						$p['cmp']($cmp9, $cmp10))) == 1)) === null || $bool75 === false || $bool75 === 0 || $bool75 === '' ?
					false :
					(typeof $bool75=='object'?
						(typeof $bool75['__nonzero__']=='function'?
							$bool75['__nonzero__']() :
							(typeof $bool75['__len__']=='function'?
								($bool75['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp11=rect['height'])===($cmp12=0)?0:
					(typeof $cmp11==typeof $cmp12 && ((typeof $cmp11 == 'number')||(typeof $cmp11 == 'string')||(typeof $cmp11 == 'boolean'))?
						($cmp11 == $cmp12 ? 0 : ($cmp11 < $cmp12 ? -1 : 1)):
						$p['cmp']($cmp11, $cmp12))) == 1):$and3)) === null || $bool76 === false || $bool76 === 0 || $bool76 === '' ?
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
					repaint_rect = canvas['_get_rect']();
					repaint_rect['x'] = rect['x'];
					repaint_rect['y'] = rect['y'];
					repaint_rect['width'] = rect['width'];
					repaint_rect['height'] = rect['height'];
					canvas['_rect_num'] += 1;
				}
			}
			else if ((($bool77=rect) === null || $bool77 === false || $bool77 === 0 || $bool77 === '' ?
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
				if ((($bool79=((($bool78=$and5=((($cmp13=(typeof ($69=rect)['__array'] != 'undefined'?
					((typeof $69['__array'][$70=2]) != 'undefined'?$69['__array'][$70]:
						$69['__getitem__']($70)):
						$69['__getitem__'](2)))===($cmp14=0)?0:
					(typeof $cmp13==typeof $cmp14 && ((typeof $cmp13 == 'number')||(typeof $cmp13 == 'string')||(typeof $cmp13 == 'boolean'))?
						($cmp13 == $cmp14 ? 0 : ($cmp13 < $cmp14 ? -1 : 1)):
						$p['cmp']($cmp13, $cmp14))) == 1)) === null || $bool78 === false || $bool78 === 0 || $bool78 === '' ?
					false :
					(typeof $bool78=='object'?
						(typeof $bool78['__nonzero__']=='function'?
							$bool78['__nonzero__']() :
							(typeof $bool78['__len__']=='function'?
								($bool78['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )?((($cmp15=(typeof ($71=rect)['__array'] != 'undefined'?
					((typeof $71['__array'][$72=3]) != 'undefined'?$71['__array'][$72]:
						$71['__getitem__']($72)):
						$71['__getitem__'](3)))===($cmp16=0)?0:
					(typeof $cmp15==typeof $cmp16 && ((typeof $cmp15 == 'number')||(typeof $cmp15 == 'string')||(typeof $cmp15 == 'boolean'))?
						($cmp15 == $cmp16 ? 0 : ($cmp15 < $cmp16 ? -1 : 1)):
						$p['cmp']($cmp15, $cmp16))) == 1):$and5)) === null || $bool79 === false || $bool79 === 0 || $bool79 === '' ?
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
					repaint_rect = canvas['_get_rect']();
					repaint_rect['x'] = (typeof ($73=rect)['__array'] != 'undefined'?
						((typeof $73['__array'][$74=0]) != 'undefined'?$73['__array'][$74]:
							$73['__getitem__']($74)):
							$73['__getitem__'](0));
					repaint_rect['y'] = (typeof ($75=rect)['__array'] != 'undefined'?
						((typeof $75['__array'][$76=1]) != 'undefined'?$75['__array'][$76]:
							$75['__getitem__']($76)):
							$75['__getitem__'](1));
					repaint_rect['width'] = (typeof ($77=rect)['__array'] != 'undefined'?
						((typeof $77['__array'][$78=2]) != 'undefined'?$77['__array'][$78]:
							$77['__getitem__']($78)):
							$77['__getitem__'](2));
					repaint_rect['height'] = (typeof ($79=rect)['__array'] != 'undefined'?
						((typeof $79['__array'][$80=3]) != 'undefined'?$79['__array'][$80]:
							$79['__getitem__']($80)):
							$79['__getitem__'](3));
					canvas['_rect_num'] += 1;
				}
			}
		}
		return null;
	};
	$m['_update']['__name__'] = '_update';

	$m['_update']['__bind_type__'] = 0;
	$m['_update']['__args__'] = [null,null,['canvas'],['rect_list']];
	$m['Textbox'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.display';
		$method = $pyjs__bind_method2('__init__', function(size, panel) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				size = arguments[1];
				panel = arguments[2];
			}
			if (typeof size == 'undefined') size=arguments['callee']['__args__'][3][1];
			if (typeof panel == 'undefined') panel=arguments['callee']['__args__'][4][1];
			var $bool82,$attr359,$bool80,$attr366,$attr362,$84,$83,$bool81,$attr360,$82,$pyjs_try_err,$81,$attr361,$attr365,$attr364,$attr363;
			$m['TextBox']['__init__'](self);
			if ((($bool81=!(($bool80=size) === null || $bool80 === false || $bool80 === 0 || $bool80 === '' ?
				false :
				(typeof $bool80=='object'?
					(typeof $bool80['__nonzero__']=='function'?
						$bool80['__nonzero__']() :
						(typeof $bool80['__len__']=='function'?
							($bool80['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool81 === false || $bool81 === 0 || $bool81 === '' ?
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
				self['width'] = ($m['env']['canvas']['surface']['width'])-(5);
				self['height'] = 20;
			}
			else {
				self['width'] = $p['float_int']((typeof ($81=size)['__array'] != 'undefined'?
					((typeof $81['__array'][$82=0]) != 'undefined'?$81['__array'][$82]:
						$81['__getitem__']($82)):
						$81['__getitem__'](0)));
				self['height'] = $p['float_int']((typeof ($83=size)['__array'] != 'undefined'?
					((typeof $83['__array'][$84=1]) != 'undefined'?$83['__array'][$84]:
						$83['__getitem__']($84)):
						$83['__getitem__'](1)));
			}
			self['setSize'](($p['str'](self['width']))+('px'), ($p['str'](self['height']))+('px'));
			self['setVisible'](false);
			if ((($bool82=panel) === null || $bool82 === false || $bool82 === 0 || $bool82 === '' ?
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
				panel['add'](self);
			}
			else {
				try {
					$m['env']['canvas']['surface']['_display']['vpanel']['add'](self);
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$m['env']['canvas']['surface']['_display']['vpanel'] = $m['VerticalPanel']();
						$m['RootPanel']()['add']($m['env']['canvas']['surface']['_display']['vpanel']);
						$m['env']['canvas']['surface']['_display']['vpanel']['add'](self);
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['size', null],['panel', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('resize', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];
			if (typeof height == 'undefined') height=arguments['callee']['__args__'][4][1];
			var $bool83,$or4,$attr372,$or5,$attr368,$bool85,$bool84,$attr370,$attr367,$attr369,$attr371,$bool87,$bool86;
			if ((($bool85=!(($bool84=((($bool83=$or4=width) === null || $bool83 === false || $bool83 === 0 || $bool83 === '' ?
				false :
				(typeof $bool83=='object'?
					(typeof $bool83['__nonzero__']=='function'?
						$bool83['__nonzero__']() :
						(typeof $bool83['__len__']=='function'?
							($bool83['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or4:height)) === null || $bool84 === false || $bool84 === 0 || $bool84 === '' ?
				false :
				(typeof $bool84=='object'?
					(typeof $bool84['__nonzero__']=='function'?
						$bool84['__nonzero__']() :
						(typeof $bool84['__len__']=='function'?
							($bool84['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool85 === false || $bool85 === 0 || $bool85 === '' ?
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
				self['width'] = ($m['env']['canvas']['surface']['width'])-(5);
				self['height'] = 20;
			}
			else {
				if ((($bool86=width) === null || $bool86 === false || $bool86 === 0 || $bool86 === '' ?
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
					self['width'] = $p['float_int'](width);
				}
				if ((($bool87=height) === null || $bool87 === false || $bool87 === 0 || $bool87 === '' ?
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
					self['height'] = $p['float_int'](height);
				}
			}
			self['setSize'](($p['str'](self['width']))+('px'), ($p['str'](self['height']))+('px'));
			return null;
		}
	, 1, [null,null,['self'],['width', null],['height', null]]);
		$cls_definition['resize'] = $method;
		$method = $pyjs__bind_method2('toggle', function(visible) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				visible = arguments[1];
			}
			if (typeof visible == 'undefined') visible=arguments['callee']['__args__'][3][1];
			var $bool88,$bool89;
			if ((($bool88=visible) === null || $bool88 === false || $bool88 === 0 || $bool88 === '' ?
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
				self['setVisible'](visible);
			}
			else {
				self['setVisible'](!(($bool89=self['getVisible']()) === null || $bool89 === false || $bool89 === 0 || $bool89 === '' ?
					false :
					(typeof $bool89=='object'?
						(typeof $bool89['__nonzero__']=='function'?
							$bool89['__nonzero__']() :
							(typeof $bool89['__len__']=='function'?
								($bool89['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ));
			}
			return null;
		}
	, 1, [null,null,['self'],['visible', null]]);
		$cls_definition['toggle'] = $method;
		var $bases = new Array($m['TextBox']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Textbox', $p['tuple']($bases), $data);
	})();
	$m['Textarea'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.display';
		$method = $pyjs__bind_method2('__init__', function(size, panel) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				size = arguments[1];
				panel = arguments[2];
			}
			if (typeof size == 'undefined') size=arguments['callee']['__args__'][3][1];
			if (typeof panel == 'undefined') panel=arguments['callee']['__args__'][4][1];
			var $bool90,$bool91,$attr373,$attr375,$attr374,$attr377,$attr376,$87,$86,$88,$attr380,$bool92,$attr382,$attr381,$attr379,$pyjs_try_err,$attr378,$85;
			$m['TextArea']['__init__'](self);
			if ((($bool91=!(($bool90=size) === null || $bool90 === false || $bool90 === 0 || $bool90 === '' ?
				false :
				(typeof $bool90=='object'?
					(typeof $bool90['__nonzero__']=='function'?
						$bool90['__nonzero__']() :
						(typeof $bool90['__len__']=='function'?
							($bool90['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool91 === false || $bool91 === 0 || $bool91 === '' ?
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
				self['width'] = ($m['env']['canvas']['surface']['width'])-(5);
				self['height'] = ($p['float_int'](($m['env']['canvas']['surface']['height'])/(5)))-(5);
			}
			else {
				self['width'] = $p['float_int']((typeof ($85=size)['__array'] != 'undefined'?
					((typeof $85['__array'][$86=0]) != 'undefined'?$85['__array'][$86]:
						$85['__getitem__']($86)):
						$85['__getitem__'](0)));
				self['height'] = $p['float_int']((typeof ($87=size)['__array'] != 'undefined'?
					((typeof $87['__array'][$88=1]) != 'undefined'?$87['__array'][$88]:
						$87['__getitem__']($88)):
						$87['__getitem__'](1)));
			}
			self['setSize'](($p['str'](self['width']))+('px'), ($p['str'](self['height']))+('px'));
			self['setStyleAttribute']($p['dict']([['resize', 'vertical']]));
			self['setVisible'](false);
			if ((($bool92=panel) === null || $bool92 === false || $bool92 === 0 || $bool92 === '' ?
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
				panel['add'](self);
			}
			else {
				try {
					$m['env']['canvas']['surface']['_display']['vpanel']['add'](self);
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if ((($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError']))||(($pyjs_try_err_name == $p['AttributeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AttributeError']))) {
						$m['env']['canvas']['surface']['_display']['vpanel'] = $m['VerticalPanel']();
						$m['RootPanel']()['add']($m['env']['canvas']['surface']['_display']['vpanel']);
						$m['env']['canvas']['surface']['_display']['vpanel']['add'](self);
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['size', null],['panel', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('resize', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][3][1];
			if (typeof height == 'undefined') height=arguments['callee']['__args__'][4][1];
			var $or7,$or6,$bool94,$bool95,$bool96,$bool97,$attr384,$attr385,$attr387,$bool93,$attr390,$attr388,$attr383,$attr386,$attr389;
			if ((($bool95=!(($bool94=((($bool93=$or6=width) === null || $bool93 === false || $bool93 === 0 || $bool93 === '' ?
				false :
				(typeof $bool93=='object'?
					(typeof $bool93['__nonzero__']=='function'?
						$bool93['__nonzero__']() :
						(typeof $bool93['__len__']=='function'?
							($bool93['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )?$or6:height)) === null || $bool94 === false || $bool94 === 0 || $bool94 === '' ?
				false :
				(typeof $bool94=='object'?
					(typeof $bool94['__nonzero__']=='function'?
						$bool94['__nonzero__']() :
						(typeof $bool94['__len__']=='function'?
							($bool94['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) )) === null || $bool95 === false || $bool95 === 0 || $bool95 === '' ?
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
				self['width'] = ($m['env']['canvas']['surface']['width'])-(5);
				self['height'] = ($p['float_int'](($m['env']['canvas']['surface']['height'])/(5)))-(5);
			}
			else {
				if ((($bool96=width) === null || $bool96 === false || $bool96 === 0 || $bool96 === '' ?
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
					self['width'] = $p['float_int'](width);
				}
				if ((($bool97=height) === null || $bool97 === false || $bool97 === 0 || $bool97 === '' ?
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
					self['height'] = $p['float_int'](height);
				}
			}
			self['setSize'](($p['str'](self['width']))+('px'), ($p['str'](self['height']))+('px'));
			return null;
		}
	, 1, [null,null,['self'],['width', null],['height', null]]);
		$cls_definition['resize'] = $method;
		$method = $pyjs__bind_method2('toggle', function(visible) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				visible = arguments[1];
			}
			if (typeof visible == 'undefined') visible=arguments['callee']['__args__'][3][1];
			var $bool98,$bool99;
			if ((($bool98=visible) === null || $bool98 === false || $bool98 === 0 || $bool98 === '' ?
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
				self['setVisible'](visible);
			}
			else {
				self['setVisible'](!(($bool99=self['getVisible']()) === null || $bool99 === false || $bool99 === 0 || $bool99 === '' ?
					false :
					(typeof $bool99=='object'?
						(typeof $bool99['__nonzero__']=='function'?
							$bool99['__nonzero__']() :
							(typeof $bool99['__len__']=='function'?
								($bool99['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) ));
			}
			return null;
		}
	, 1, [null,null,['self'],['visible', null]]);
		$cls_definition['toggle'] = $method;
		var $bases = new Array($m['TextArea']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Textarea', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.display */


/* end module: pyjsdl.display */


/*
PYJS_DEPS: ['base64', 'pyjsdl.surface.Surface', 'pyjsdl', 'pyjsdl.surface', 'pyjsdl.rect.Rect', 'pyjsdl.rect', 'pyjsdl.time.Time', 'pyjsdl.time', 'pyjsdl.env', 'pyjsdl.pyjsobj.DOM', 'pyjsdl.pyjsobj', 'pyjsdl.pyjsobj.Window', 'pyjsdl.pyjsobj.RootPanel', 'pyjsdl.pyjsobj.SimplePanel', 'pyjsdl.pyjsobj.VerticalPanel', 'pyjsdl.pyjsobj.loadImages', 'pyjsdl.pyjsobj.TextBox', 'pyjsdl.pyjsobj.TextArea', 'pyjsdl.pyjsobj.Event', 'pyjsdl.pyjsobj.requestAnimationFrameInit']
*/
