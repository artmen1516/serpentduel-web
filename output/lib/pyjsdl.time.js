/* start module: pyjsdl.time */
$pyjs['loaded_modules']['pyjsdl.time'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjsdl.time']['__was_initialized__']) return $pyjs['loaded_modules']['pyjsdl.time'];
	if(typeof $pyjs['loaded_modules']['pyjsdl'] == 'undefined' || !$pyjs['loaded_modules']['pyjsdl']['__was_initialized__']) $p['___import___']('pyjsdl', null);
	var $m = $pyjs['loaded_modules']['pyjsdl.time'];
	$m['__repr__'] = function() { return '<module: pyjsdl.time>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjsdl.time';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjsdl']['time'] = $pyjs['loaded_modules']['pyjsdl.time'];


	$m['env'] = $p['___import___']('pyjsdl.env', 'pyjsdl', null, false);
	$m['performanceNowInit'] = $p['___import___']('pyjsdl.pyjsobj.performanceNowInit', 'pyjsdl', null, false);
	$m['__docformat__'] = 'restructuredtext';
	$m['Clock'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.time';
		$cls_definition['_wnd'] = null;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$attr2;
			self['_time'] = self['time']();
			self['_time_init'] = self['_time'];
			self['_time_diff'] = 0;
			self['_framerate'] = 0;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_time', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr3,$attr4;
			return self['_time_diff'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_time'] = $method;
		$method = $pyjs__bind_method2('tick', function(framerate) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				framerate = arguments[1];
			}
			if (typeof framerate == 'undefined') framerate=arguments['callee']['__args__'][3][1];
			var $attr9,$attr8,$eq2,$and1,$and2,$eq1,$attr5,$attr7,$attr6,$bool2,$bool3,$bool1,$bool4,$attr15,$attr14,$attr16,$attr11,$attr10,$attr13,$attr12;
			if ((($bool3=((($bool1=$and1=!(($eq1=self['_framerate'])===($eq2=framerate)&&$eq1===null?true:
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
					 true ) )?!(($bool2=$m['env']['canvas']['_pause']) === null || $bool2 === false || $bool2 === 0 || $bool2 === '' ?
				false :
				(typeof $bool2=='object'?
					(typeof $bool2['__nonzero__']=='function'?
						$bool2['__nonzero__']() :
						(typeof $bool2['__len__']=='function'?
							($bool2['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) ):$and1)) === null || $bool3 === false || $bool3 === 0 || $bool3 === '' ?
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
				self['_framerate'] = framerate;
				if ((($bool4=framerate) === null || $bool4 === false || $bool4 === 0 || $bool4 === '' ?
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
					$m['env']['canvas']['_framerate'] = (1000.0)/(framerate);
				}
				else {
					$m['env']['canvas']['_framerate'] = 0.0;
				}
			}
			self['_time'] = self['time']();
			self['_time_diff'] = (self['_time'])-(self['_time_init']);
			self['_time_init'] = self['_time'];
			return self['_time_diff'];
		}
	, 1, [null,null,['self'],['framerate', 0]]);
		$cls_definition['tick'] = $method;
		$method = $pyjs__bind_method2('tick_busy_loop', function(framerate) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				framerate = arguments[1];
			}
			if (typeof framerate == 'undefined') framerate=arguments['callee']['__args__'][3][1];

			return self['tick'](framerate);
		}
	, 1, [null,null,['self'],['framerate', 0]]);
		$cls_definition['tick_busy_loop'] = $method;
		$method = $pyjs__bind_method2('get_fps', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr20,$attr19,$attr18,$bool5,$bool6,$attr17;
			if ((($bool6=!(($bool5=$m['env']['canvas']['_pause']) === null || $bool5 === false || $bool5 === 0 || $bool5 === '' ?
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
				return (1000.0)/($m['env']['canvas']['_frametime']);
			}
			else {
				return 0.0;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_fps'] = $method;
		$method = $pyjs__bind_method2('time', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['_wnd']['performance']['now']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['time'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Clock', $p['tuple']($bases), $data);
	})();
	$m['Time'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.time';
		$cls_definition['_wnd'] = null;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr21,$attr22,$lambda1;
			self['Clock'] = $m['Clock'];
			$m['Time']['_wnd'] = $m['performanceNowInit']();
			$m['Clock']['_wnd'] = $m['Time']['_wnd'];
			self['_time_init'] = self['time']();
			self['_framerate'] = 0;
			self['_timers'] = $p['dict']([]);
			var 			$lambda1 = function() {

				return self['wait']();
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = [null,null];
			self['run'] = $lambda1;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('get_ticks', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr23,$attr24;
			return (self['time']())-(self['_time_init']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_ticks'] = $method;
		$method = $pyjs__bind_method2('delay', function(time) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				time = arguments[1];
			}
			var $cmp1,$cmp2,start,$bool7,$bool8;
			start = self['time']();
			while ((($bool7=true) === null || $bool7 === false || $bool7 === 0 || $bool7 === '' ?
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
				if ((($bool8=((($cmp1=(self['time']())-(start))===($cmp2=time)?0:
					(typeof $cmp1==typeof $cmp2 && ((typeof $cmp1 == 'number')||(typeof $cmp1 == 'string')||(typeof $cmp1 == 'boolean'))?
						($cmp1 == $cmp2 ? 0 : ($cmp1 < $cmp2 ? -1 : 1)):
						$p['cmp']($cmp1, $cmp2))) == 1)) === null || $bool8 === false || $bool8 === 0 || $bool8 === '' ?
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
					return (self['time']())-(start);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['time']]);
		$cls_definition['delay'] = $method;
		$method = $pyjs__bind_method2('wait', function(time) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				time = arguments[1];
			}
			if (typeof time == 'undefined') time=arguments['callee']['__args__'][3][1];
			var $bool10,$bool11,$attr27,$attr32,$attr31,$attr30,$attr25,$attr26,$attr28,$attr29,$bool9,$bool12;
			if ((($bool9=time) === null || $bool9 === false || $bool9 === 0 || $bool9 === '' ?
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
				if ((($bool11=!(($bool10=$m['env']['canvas']['_pause']) === null || $bool10 === false || $bool10 === 0 || $bool10 === '' ?
					false :
					(typeof $bool10=='object'?
						(typeof $bool10['__nonzero__']=='function'?
							$bool10['__nonzero__']() :
							(typeof $bool10['__len__']=='function'?
								($bool10['__len__']()>0 ?
									true :
									false) :
								true ) ) :
						 true ) )) === null || $bool11 === false || $bool11 === 0 || $bool11 === '' ?
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
					self['_framerate'] = $m['env']['canvas']['_framerate'];
					$m['env']['canvas']['_framerate'] = (time)*(10);
					$m['env']['canvas']['_pause'] = true;
					self['set_timeout'](self, time);
				}
			}
			else {
				if ((($bool12=$m['env']['canvas']['_pause']) === null || $bool12 === false || $bool12 === 0 || $bool12 === '' ?
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
					$m['env']['canvas']['_framerate'] = self['_framerate'];
					$m['env']['canvas']['_rendertime'] = self['time']();
					$m['env']['canvas']['_pause'] = false;
				}
			}
			return time;
		}
	, 1, [null,null,['self'],['time', 0]]);
		$cls_definition['wait'] = $method;
		$method = $pyjs__bind_method2('set_timer', function(event, time, once) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
				time = arguments[2];
				once = arguments[3];
			}
			if (typeof once == 'undefined') once=arguments['callee']['__args__'][5][1];
			var eventType,$bool13,$bool14,$bool15,$bool16,$attr44,$attr42,$attr43,$attr40,$attr41,repeat,$attr33,$attr37,$attr36,$attr35,$attr34,$attr39,$attr38,$2,$1,evt;
			if ((($bool13=$p['hasattr'](event, 'type')) === null || $bool13 === false || $bool13 === 0 || $bool13 === '' ?
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
				eventType = event['type'];
				if ((($bool14=!self['_timers']['__contains__'](eventType)) === null || $bool14 === false || $bool14 === 0 || $bool14 === '' ?
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
					self['_timers']['__setitem__'](eventType, (typeof _EventTimer == "undefined"?$m['_EventTimer']:_EventTimer)(event));
				}
			}
			else {
				eventType = event;
				if ((($bool15=!self['_timers']['__contains__'](eventType)) === null || $bool15 === false || $bool15 === 0 || $bool15 === '' ?
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
					evt = $m['env']['event']['Event'](eventType);
					self['_timers']['__setitem__'](eventType, (typeof _EventTimer == "undefined"?$m['_EventTimer']:_EventTimer)(evt));
				}
			}
			repeat = !(($bool16=once) === null || $bool16 === false || $bool16 === 0 || $bool16 === '' ?
				false :
				(typeof $bool16=='object'?
					(typeof $bool16['__nonzero__']=='function'?
						$bool16['__nonzero__']() :
						(typeof $bool16['__len__']=='function'?
							($bool16['__len__']()>0 ?
								true :
								false) :
							true ) ) :
					 true ) );
			(typeof ($1=self['_timers'])['__array'] != 'undefined'?
				((typeof $1['__array'][$2=eventType]) != 'undefined'?$1['__array'][$2]:
					$1['__getitem__']($2)):
					$1['__getitem__'](eventType))['set_timer'](time, repeat);
			return null;
		}
	, 1, [null,null,['self'],['event'],['time'],['once', false]]);
		$cls_definition['set_timer'] = $method;
		$method = $pyjs__bind_method2('_stop_timers', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_nextval,$iter1_type,eventType,$iter1_iter,$attr46,$attr45,$iter1_array,$4,$3,$iter1_idx;
			$iter1_iter = self['_timers'];
			if (typeof ($iter1_array = $iter1_iter['__array']) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter['__iter__']();
				$iter1_type = typeof ($iter1_array = $iter1_iter['__array']) != 'undefined'? 0 : (typeof $iter1_iter['$genfunc'] == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):$p['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				eventType = $iter1_nextval;
				(typeof ($3=self['_timers'])['__array'] != 'undefined'?
					((typeof $3['__array'][$4=eventType]) != 'undefined'?$3['__array'][$4]:
						$3['__getitem__']($4)):
						$3['__getitem__'](eventType))['set_timer'](0, false);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_stop_timers'] = $method;
		$method = $pyjs__bind_method2('time', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['_wnd']['performance']['now']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['time'] = $method;
		$method = $pyjs__bind_method2('set_timeout', function(obj, time) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
				time = arguments[2];
			}
			var run,$lambda2,id;
			var 			$lambda2 = function() {

				return obj['run']();
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = [null,null];
			run = $lambda2;
			id = $wnd['setTimeout'](run, time);;
			return id;
		}
	, 1, [null,null,['self'],['obj'],['time']]);
		$cls_definition['set_timeout'] = $method;
		$method = $pyjs__bind_method2('clear_timeout', function(id) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				id = arguments[1];
			}

$wnd['clearTimeout'](id);
			return null;
		}
	, 1, [null,null,['self'],['id']]);
		$cls_definition['clear_timeout'] = $method;
		$method = $pyjs__bind_method2('set_interval', function(obj, time) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
				time = arguments[2];
			}
			var $lambda3,run,id;
			var 			$lambda3 = function() {

				return obj['run']();
			};
			$lambda3['__name__'] = '$lambda3';

			$lambda3['__bind_type__'] = 0;
			$lambda3['__args__'] = [null,null];
			run = $lambda3;
			id = $wnd['setInterval'](run, time);;
			return id;
		}
	, 1, [null,null,['self'],['obj'],['time']]);
		$cls_definition['set_interval'] = $method;
		$method = $pyjs__bind_method2('clear_interval', function(id) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				id = arguments[1];
			}

$wnd['clearInterval'](id);
			return null;
		}
	, 1, [null,null,['self'],['id']]);
		$cls_definition['clear_interval'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Time', $p['tuple']($bases), $data);
	})();
	$m['_EventTimer'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjsdl.time';
		$method = $pyjs__bind_method2('__init__', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['event'] = event;
			self['timer'] = null;
			self['time'] = 0;
			self['repeat'] = true;
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('set_timer', function(time, repeat) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				time = arguments[1];
				repeat = arguments[2];
			}
			var $bool18,$bool17,$attr47,$attr48;
			if ((($bool17=self['timer']) === null || $bool17 === false || $bool17 === 0 || $bool17 === '' ?
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
				self['repeat'] = false;
				self['clear_timeout']();
			}
			if ((($bool18=time) === null || $bool18 === false || $bool18 === 0 || $bool18 === '' ?
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
				self['time'] = time;
				self['repeat'] = repeat;
				self['set_timeout']();
			}
			return null;
		}
	, 1, [null,null,['self'],['time'],['repeat']]);
		$cls_definition['set_timer'] = $method;
		$method = $pyjs__bind_method2('set_timeout', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda4,run,timer;
			var 			$lambda4 = function() {

				return self['run']();
			};
			$lambda4['__name__'] = '$lambda4';

			$lambda4['__bind_type__'] = 0;
			$lambda4['__args__'] = [null,null];
			run = $lambda4;
			timer = $wnd['setTimeout'](run, self['time']);;
			self['timer'] = timer;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['set_timeout'] = $method;
		$method = $pyjs__bind_method2('clear_timeout', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

$wnd['clearTimeout'](self['timer']);
			self['timer'] = null;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear_timeout'] = $method;
		$method = $pyjs__bind_method2('run', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $bool19,$attr51,$attr50,$attr52,$attr49;
			$m['env']['event']['post'](self['event']);
			if ((($bool19=self['repeat']) === null || $bool19 === false || $bool19 === 0 || $bool19 === '' ?
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
				self['set_timeout']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['run'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('_EventTimer', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjsdl.time */


/* end module: pyjsdl.time */


/*
PYJS_DEPS: ['pyjsdl.env', 'pyjsdl', 'pyjsdl.pyjsobj.performanceNowInit', 'pyjsdl.pyjsobj']
*/
