(function (cjs, an) {

	var p; // shortcut to reference prototypes
	var lib={};var ss={};var img={};
	lib.ssMetadata = [];
	
	
	(lib.AnMovieClip = function(){
		this.actionFrames = [];
		this.ignorePause = false;
		this.gotoAndPlay = function(positionOrLabel){
			cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
		}
		this.play = function(){
			cjs.MovieClip.prototype.play.call(this);
		}
		this.gotoAndStop = function(positionOrLabel){
			cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		}
		this.stop = function(){
			cjs.MovieClip.prototype.stop.call(this);
		}
	}).prototype = p = new cjs.MovieClip();
	// symbols:
	
	
	
	(lib.les3 = function() {
		this.initialize(img.les3);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,209,139);
	
	
	(lib.microGris = function() {
		this.initialize(img.microGris);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,2141,10269);
	
	
	(lib.ona1 = function() {
		this.initialize(img.ona1);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,832,139);
	
	
	(lib.paroles2 = function() {
		this.initialize(img.paroles2);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,552,139);// helper functions:
	
	function mc_symbol_clone() {
		var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
		clone.gotoAndStop(this.currentFrame);
		clone.paused = this.paused;
		clone.framerate = this.framerate;
		return clone;
	}
	
	function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
		var prototype = cjs.extend(symbol, cjs.MovieClip);
		prototype.clone = mc_symbol_clone;
		prototype.nominalBounds = nominalBounds;
		prototype.frameBounds = frameBounds;
		return prototype;
		}
	
	
	(lib.mic = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Calque_1
		this.instance = new lib.microGris();
		this.instance.setTransform(78.6,-238.9,0.048,0.048,29.9914);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.mic, new cjs.Rectangle(-167.5,-238.9,335.1,477.8), null);
	
	
	(lib.Interpoler15 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Calque_1
		this.instance = new lib.ona1();
		this.instance.setTransform(-361.9,-60.45,0.8699,0.8699);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-361.9,-60.4,723.8,120.9);
	
	
	(lib.Interpoler14 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Calque_1
		this.instance = new lib.ona1();
		this.instance.setTransform(-361.85,-60.45,0.8699,0.8699);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-361.8,-60.4,723.7,120.9);
	
	
	(lib.Interpoler13 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Calque_1
		this.instance = new lib.paroles2();
		this.instance.setTransform(-294.75,-74.2,1.0679,1.0679);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-294.7,-74.2,589.5,148.5);
	
	
	(lib.Interpoler12 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Calque_1
		this.instance = new lib.paroles2();
		this.instance.setTransform(-294.75,-74.2,1.0679,1.0679);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-294.7,-74.2,589.5,148.5);
	
	
	(lib.Interpoler11 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Calque_1
		this.instance = new lib.les3();
		this.instance.setTransform(-51.6,77.6,0.7426,0.7426,-90);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-51.6,-77.6,103.2,155.2);
	
	
	(lib.Interpoler10 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Calque_1
		this.instance = new lib.les3();
		this.instance.setTransform(-51.6,77.6,0.7426,0.7426,-90);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-51.6,-77.6,103.2,155.2);
	
	
	(lib.Interpoler9 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Calque_1
		this.instance = new lib.ona1();
		this.instance.setTransform(-361.85,-60.45,0.8699,0.8699);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-361.8,-60.4,723.7,120.9);
	
	
	(lib.Interpoler8 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Calque_1
		this.instance = new lib.ona1();
		this.instance.setTransform(-361.9,-60.45,0.8699,0.8699);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-361.9,-60.4,723.8,120.9);
	
	
	(lib.Interpoler7 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Calque_1
		this.instance = new lib.paroles2();
		this.instance.setTransform(-294.75,-74.2,1.0679,1.0679);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-294.7,-74.2,589.5,148.5);
	
	
	(lib.Interpoler6 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Calque_1
		this.instance = new lib.paroles2();
		this.instance.setTransform(-294.75,-74.2,1.0679,1.0679);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-294.7,-74.2,589.5,148.5);
	
	
	// stage content:
	(lib.animAccueil = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = false; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Calque_6
		this.instance = new lib.mic();
		this.instance.setTransform(1271.85,208.5,1,1,-67.9827,0,0,-125.6,216.9);
		this.instance._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(121).to({_off:false},0).to({regX:-125.7,rotation:-43.9978,guide:{path:[1271.9,208.5,1237.6,229.9,1201.3,250,1045.5,336.4,888.2,383.3]}},11).to({regY:217,rotation:-58.997,guide:{path:[888.1,383.3,1045.4,336.4,1201.3,250,1224,237.3,1246,224.3]}},15).to({_off:true},14).wait(25));
	
		// Calque_5
		this.instance_1 = new lib.mic();
		this.instance_1.setTransform(-122.3,-34.85,1,1,7.9569,0,0,-125.7,216.8);
		this.instance_1._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({_off:false},0).to({regX:-125.5,rotation:-27.7913,guide:{path:[-122.1,-34.7,-85.9,40,-34,110.3,56.3,232.4,173.8,312.2,303.5,400.4,447.9,423.4,535.9,437.5,632.4,431.2]}},15).to({regX:-125.6,regY:216.9,rotation:-67.9827,guide:{path:[632.6,431.3,730.2,424.9,836.6,397.6,1019.9,350.6,1201.3,250,1237.6,229.9,1271.9,208.7]}},10).wait(8).to({_off:true},7).wait(57));
	
		// paroles
		this.instance_2 = new lib.Interpoler6("synched",0);
		this.instance_2.setTransform(1323.75,393.2);
		this.instance_2._off = true;
	
		this.instance_3 = new lib.Interpoler7("synched",0);
		this.instance_3.setTransform(526.75,393.2);
	
		this.instance_4 = new lib.paroles2();
		this.instance_4.setTransform(232,319,1.0679,1.0679);
	
		this.instance_5 = new lib.Interpoler12("synched",0);
		this.instance_5.setTransform(526.75,393.2);
		this.instance_5._off = true;
	
		this.instance_6 = new lib.Interpoler13("synched",0);
		this.instance_6.setTransform(-407.25,739.2);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},29).to({state:[{t:this.instance_3}]},30).to({state:[{t:this.instance_4}]},30).to({state:[{t:this.instance_5}]},43).to({state:[{t:this.instance_6}]},31).wait(23));
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({_off:true,x:526.75},30).wait(127));
		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(132).to({_off:false},0).to({_off:true,x:-407.25,y:739.2},31).wait(23));
	
		// les
		this.instance_7 = new lib.Interpoler10("synched",0);
		this.instance_7.setTransform(149.6,846.6);
		this.instance_7._off = true;
	
		this.instance_8 = new lib.Interpoler11("synched",0);
		this.instance_8.setTransform(149.6,389.6);
		this.instance_8._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(59).to({_off:false},0).to({_off:true,y:389.6},30).wait(97));
		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(59).to({_off:false},30).wait(43).to({startPosition:0},0).to({x:-462.3,y:363.95},31).wait(23));
	
		// ona
		this.instance_9 = new lib.Interpoler8("synched",0);
		this.instance_9.setTransform(-370.1,237.45);
	
		this.instance_10 = new lib.Interpoler9("synched",0);
		this.instance_10.setTransform(459.85,237.45);
	
		this.instance_11 = new lib.ona1();
		this.instance_11.setTransform(98,177,0.8699,0.8699);
	
		this.instance_12 = new lib.Interpoler14("synched",0);
		this.instance_12.setTransform(459.85,237.45);
		this.instance_12._off = true;
	
		this.instance_13 = new lib.Interpoler15("synched",0);
		this.instance_13.setTransform(-239.1,-173.55);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},29).to({state:[{t:this.instance_11}]},60).to({state:[{t:this.instance_12}]},43).to({state:[{t:this.instance_13}]},31).wait(23));
		this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true,x:459.85},29).wait(157));
		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(132).to({_off:false},0).to({_off:true,x:-239.1,y:-173.55},31).wait(23));
	
		this._renderFirstFrame();
	
	}).prototype = p = new lib.AnMovieClip();
	p.nominalBounds = new cjs.Rectangle(-220,-107.9,1838.5,1032.1000000000001);
	// library properties:
	lib.properties = {
		id: '673C74A311F347EDBD16A6EF61D1AE62',
		width: 1024,
		height: 768,
		fps: 24,
		color: "#FFFFFF",
		opacity: 1.00,
		manifest: [
			{src:"public/images/les3.png", id:"les3"},
			{src:"public/images/microGris.png", id:"microGris"},
			{src:"public/images/ona1.png", id:"ona1"},
			{src:"public/images/paroles2.png", id:"paroles2"}
		],
		preloads: []
	};
	
	
	
	// bootstrap callback support:
	
	(lib.Stage = function(canvas) {
		createjs.Stage.call(this, canvas);
	}).prototype = p = new createjs.Stage();
	
	p.setAutoPlay = function(autoPlay) {
		this.tickEnabled = autoPlay;
	}
	p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
	p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
	p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
	p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }
	
	p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }
	
	an.bootcompsLoaded = an.bootcompsLoaded || [];
	if(!an.bootstrapListeners) {
		an.bootstrapListeners=[];
	}
	
	an.bootstrapCallback=function(fnCallback) {
		an.bootstrapListeners.push(fnCallback);
		if(an.bootcompsLoaded.length > 0) {
			for(var i=0; i<an.bootcompsLoaded.length; ++i) {
				fnCallback(an.bootcompsLoaded[i]);
			}
		}
	};
	
	an.compositions = an.compositions || {};
	an.compositions['673C74A311F347EDBD16A6EF61D1AE62'] = {
		getStage: function() { return exportRoot.stage; },
		getLibrary: function() { return lib; },
		getSpriteSheet: function() { return ss; },
		getImages: function() { return img; }
	};
	
	an.compositionLoaded = function(id) {
		an.bootcompsLoaded.push(id);
		for(var j=0; j<an.bootstrapListeners.length; j++) {
			an.bootstrapListeners[j](id);
		}
	}
	
	an.getComposition = function(id) {
		return an.compositions[id];
	}
	
	
	an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}
			domContainers[0].width = w * pRatio * sRatio;			
			domContainers[0].height = h * pRatio * sRatio;
			domContainers.forEach(function(container) {				
				container.style.width = w * sRatio + 'px';				
				container.style.height = h * sRatio + 'px';			
			});
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;            
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;		
		}
	}
	an.handleSoundStreamOnTick = function(event) {
		if(!event.paused){
			var stageChild = stage.getChildAt(0);
			if(!stageChild.paused || stageChild.ignorePause){
				stageChild.syncStreamSounds();
			}
		}
	}
	an.handleFilterCache = function(event) {
		if(!event.paused){
			var target = event.target;
			if(target){
				if(target.filterCacheList){
					for(var index = 0; index < target.filterCacheList.length ; index++){
						var cacheInst = target.filterCacheList[index];
						if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
							cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
						}
					}
				}
			}
		}
	}
	
	
	})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
	var createjs, AdobeAn;