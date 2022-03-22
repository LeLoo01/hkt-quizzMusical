(function (cjs, an) {

	var p; // shortcut to reference prototypes
	var lib = {}; var ss = {}; var img = {};
	lib.ssMetadata = [];


	(lib.AnMovieClip = function () {
		this.actionFrames = [];
		this.ignorePause = false;
		this.gotoAndPlay = function (positionOrLabel) {
			cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
		}
		this.play = function () {
			cjs.MovieClip.prototype.play.call(this);
		}
		this.gotoAndStop = function (positionOrLabel) {
			cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
		}
		this.stop = function () {
			cjs.MovieClip.prototype.stop.call(this);
		}
	}).prototype = p = new cjs.MovieClip();
	// symbols:
	// helper functions:

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


	(lib.txt = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#CFDDE7").s().p("AhAFsQgDgTAdgFIAJgOIAAgFIAcgHIAPgCIAOAGIAlgFIAHgJIAWAAIAogJIAQAUIAEAcIgJABIABAEIhxAHIhPATgAhKDSQAKhfAcgEQAdACABAHIADgFIAIgBQAhgEAWAnQARAFADAWIABAEQADAchIA1IgJACQhHgLgGgqgAhEgaQgsgtgNhaQAFgwAOgCQgEgcA4gVQAeAJAZAaIAAAEIgGAJIgUADQACAVglAFIAAAEQAYAOABAMIAEgBQgCgQAZgEIAKgFQgCgUAQgDIAFADIAGAqQAEAhggCCIABAQIAIAZQgGAhgNAHIgIABQgegEgThugAiXk1IgCgMQgCgTBTgNIARAGIBlgbIAKALIAEAdIgHALIgSgDIgPALIgcgBIgdAFIgUAHQghABgVAAQgnAAgBgGg");
		this.shape.setTransform(190.3214, -26);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#CFDDE7").s().p("AjiFdIAMgKIAEgBIAOALIADgEIA/AAQgBgNAtgKIAFALIAFAAIALgKIAQgCQAqgGABAIIBdgUIAFADIAAAEQACAMgVADIACARIAdgEIAqgjIAdgEIA4gQIAfAJIAlgKIAEAEIAEAcIgDAGIAAAEIgdgBIgwAPQhIACiEASIgcADIgQAHIgFgEIgEABIgEAEIgEABIgagFQgPALgdADIgaAAIgYAHIgEgDIgFAAIgPAGIgJACIgEAAQgZAAgGgqgAjUEMQgBgIARgCQAHgWAPgGIgFgEIgBgEQAAhCASgZIABgRIgmhcIgGgsIAVgDIAAgEQgRACgBgIIgCgNIAHgNIgBgEIgJgLIgCgJIALgOQAoAvAGAoIACA1IAUA0IgCBQQAPATAEAZIAMgBQAXgEAJAQIABANQADAUgMAGIhPAGIgLAGIgJAAQgiAAgCgLgAA6DSIgCgIIAJgBIgBgIIgJABIABAIIgTgSIAEgFIgBgEQgIACgMgYQgUgOgPgkQgYgIgwhYQAVgCgCgQQApgHgEggIgCgMIgNgDQgMACACAVIg5AQQgwgwgeg/QhDg7gZgBIgBgMQAhgHgCgOIAMgCIA0AKIAGgNQCJgTAGAuQACAOAtAeIA+B1QBaBKAFAnIgDAFIAHAUIAEAdQAOAOAEAZQACA/gXADIgIABQACANgJABQhKgFgWgZgAAoBTQgQACABAIIAAAEIAYAOIALgKIBXgMIgCgIIgEgEIgBgEIgpAKIgEAAIgJgGQgCgLARgEIgBgFIgeAAQgMACgSAYgAgchYIACAQIAEAAIgCgRgAA4DKIgBgIIAJgBIABAIIgJABgAB0gtIADgqIgVg0IAFgeIgdgaQgGgtgQACIgFgDIgBgNIAIgBIAfgNQASAGAdgEIAHgJIAIgBQAgAAAEAMIABANQgxAsADAVIAFAkIAIAZQABBxgKACQgYgOgCgVgAkukWIgEgdQgBgJAQgCQgCgMAJgBIAeAEIAEgEIADgBQAaADABAGIBRgUIAaABIAggIIAngBIAkgJIAQABIAUgKQAaAJAZgEIAXgLIAaAAIAHgNQAtgGACAQIgCANIAEgBIAYgHIAFADIACARIgHAKIgagGIgwAQIgWgGIgoASIhkABIhFASIgIABIgzgCIgoAOIgVgBIgUAHIgmABIgYAHg");
		this.shape_1.setTransform(104.5471, -14.2043);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#CFDDE7").s().p("AhkF5IgBgJQgEgdA5gQIA5gIQAIAAACALIAMgBIAPgOIAqgCIAcgIIAmgBIAlgJIAEAEIADAUQABAIgsAKIAEAEIAAAEIgDAFIgNACIgZgBIgLAKIgeAAIgdAEIgUAGIhoACIgTALgAhoD0IgBgEIAHgJIAVgEQAJg5gJhFIAQgCIgHgUQgBgMAdgEIgBgEQgyAHgEgeIgGgsIgKgtIADgrIgHgPIAAgnIgEgYIgqghIgBgDQgCgNB3gdIAHgJIAdgDIANAFIADgEIAEAAIAFADIAEgBIAcgLQAcARACAQQgpAFAGAyIgEAeIAEAiQAFAgARADIgCAVIAGApIAJAkIgKAwIAhBTIAAAmQAgARACANQgJAjgQACIgsgPIgoAOIgmgDIgnARIgMABQgaAAgPgTgAAeBgIAYgIIAJgBIgCgVIhOALQABAMgMABIAAAFQASgDANAAQARAAAKAEgAjBkmIgEgdQgBgKApgIIBLgGQgBgHAUgIIA8AJIA4gRIAVABIAYgKIAEADIAFAhQABAIgMACIgqABIgEAFIgEABIgagBIgfAJIgNgEIhBAOIgZADIgSgCIg4ARg");
		this.shape_2.setTransform(65.2485, -8.85);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#CFDDE7").s().p("AkhFwIAHgJIA6gIIAYgMIARACIAggJQAWATAfAAIAMgGIgBgEQglAFgBgIIAQgLIA6gEIAMgGQArgCAHAIQAkgRAtgHIAJgBQAMgBACAQIADgEIAFgBICDgaIAVABIBSgPIAIgJIAOAKIADAVQgDANgYALIguACIgtALIgFgEIgEABIgkAJIgFAAIgRgBIgMAFIg2AEIgDAEIgFABIgQgCIgRACIgHAKIgyACIghAEIgkAKIgOgHIgcAIIgRACIgBgMIgdAEIgXAUIhPACIg6AMgAihDkIgBgIIABgdQgngjgCgPIgHgYIgBgiIAAgDQAMgCgCgNIARggQgtAGgCgMIgqg4IAAgEIAKgSIgCgNQgdAEgHg2QgLgGgJguIgBgMQgegFgBgIIgBgEIAHgJIAFADIAUgHIANgBIAVABQgCgNBCgJQAjgEARAKIAMgBQAVgDgCgNIAIgBQAJgBAMAcQgTACgEAvQAdA9AyCXIAQAXQgEBdgPBKQADAYgNACQgNACgLAAQg0AAgRgkgAhpATIAVgDIABgUIgGgQIguAGIgHAKIACAHIAKgBQAXAAACARgAAsC8QgSgVgOg3IACgRQg2hCgEgeQBEgUgBgGQgBgGA8gXQgBgMAQgCIgDgRIgdAEQgFAWg6AIQADAUgkAFIgNACIgJgHIgKhPIAKhqQAcguAkgFQAPgCAwBeIATAPIgDAuQADATAmA8IANAgIgEAFIAAADIAUA0IAAAZIANBGQAEAhg7A/QhDgEgHg2gACGhLIAEgFIAYgEIgBgIIAAgdIgRgCIADgnIgFgMQAZgDgEgYQgFgmg8gJIgBgEQAAgGAfgPIAaABIAQgGIAaAEQAWgDAVgTIAOALIAAAEQgEAPgoAdQggCHAGAxIgRAcgAl5kYIgEgdIAHgKIAJgBIAOALIADgFIA7ABIBWgYIApgGQAIgBACAMQAOgCAhgZIAiAEIA6gIIAJAHQg4ASABAGQABALg9ATIABAEIgeAAIgYAHIgRgCIg6AMIghABIgQAGIgRgCIghAJQgdgDgCgKgAggk6IgBgIIBagRICIgSQAQgCBDgnIAMgCIAFAhQABAJgNACIhWAPIg2AEIgMAFIgmABIgIABIhiASg");
		this.shape_3.setTransform(19.075, -2.125);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#CFDDE7").s().p("AjKGAIgDgZIA0gPIAmgBIAlgFIAHgJIAmADQATgQAogFIAQgCIANAGIAYgHQAMAHA4gEIAngRIANACIADgFIAEAAIAaAFIAlgFIALgKIAEgBIAKAHIAEAdQABAIgNACIgwALIhTAHIgEAAIhaAQIg1AEIgPAGIgWgFIgUAGIghAFIgsAKIgFgEIgEABIgMAGIgFgEIgTAHIgEABIgHAAQgPAAgFgJgAiGDqQgpgVgJhEIgHhSQgKABgGgdIgIhyIgTg0QgEgdAhgEIBfgJQAagDAQgbIAIgCIABAEQgKAbABA+IAOAsIABAmIAHAYIgEAdIALA1Ig1AoQggAEgKAXQgcAFABAGQADALATADIACAMIAEAAQgCgQAcgEIAEgFIAGgRQAngGATgbIAIgBIAEAcQAKBOAuACIADAZQABAGhDATIgEABQgygagugDgAA8DlIgCgMIA9guIAPhNIgBgEIgXhRQgKhVAPgCIgShJQAUgDAJgWIgCgQIgEABIgLAJIgMACQgLgFgcgkQgWADgJgPQgBgJBjgmQAXAOAUgDIAFADIABAEQgtBKAHA1IgHANIAUAwIgCBOQAPATADAVQANBkgzBUIgMAGQgTABgNAAQgWAAgBgGgAjTi0QgBgIAMgCIgCgMIgYADQgfAEgEgMQAEgRAGgBIANgBIBngKIBEgWQAEAhgbAMQgJABgKASIgoAGIg+AMgAg6jaIALgOIAEAAIABAIIgOAPgAkkkZIgFglIAIgJQAcgEABAIIAUgHIAhgFIANAHQArgGANgOIAhgEIAJAHIAEgFIAUgDQAJgBABAMIBDgWIAaAGIAkgOIANAHIAIgBIAcgNIAZACIAHgKIAZABIAMgGIASAKIAEAdIgHAJIg1AIIhfAIIhNAPIgRgCIgUAHIgJgIIhpAbIgZAAIghAEIgQAGIgZgEIgMAFg");
		this.shape_4.setTransform(-87.8713, 11.6973);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#CFDDE7").s().p("AjTGEIgDgVIAfgVIARgDIAhAAIAigJIAEAFIABADIgLAPQAGAQARgDQAKgiBMgLIAEgFIADAAIAKAHIAdgEIAMgKIAVABIAsgOQAIAYARgCQAwgVgBgHIAygCIAQgHIAFAEIAEgBIAQgGIAKAMIAEAcIgEAGIABADIgagBIggAJIgagFIgVADIgYALIgRgBIgRAGIhYAEIgoANIgUgBIhYANQgUACABAIIg8AAIgZADgAi6ClIgEgFIgCgDIAMgPIgBgDQghAEgTgsIgOgLIgBgIQAKgTgDgUIgJglQAHgNAChIQBEgSARgTQAtgGgDgVQARgCgCgRIAIgBIAJA/QgIALABAgIAOAxIgEAZIAJAHIAMCXIA6A7QgBAfgLABQikgZgKhKgAANDwQAlgogCgNIAHgvIgEgdIgOgsIgBgJIAMgBIgBgFQgUABgCgKIgCgNQADg4ASgJIANACIAZgGIgFgFIgBgEQgDgYAdgEIgBgFIhCAJIABAIIAEAEIABAEIgEAFIgDABQgVgZgCgPIACgzQgIgHgNg+IgcgWIgCgHIA4gVQAXgDAgAdQApgFAUA0QAXgDAsCBQAIA3gdAEQgVACADAUIgpAKIgyAGIABAJQAZgDABAIQACAQgZADIAAAFIArgCQAvgGAUgcIAIgBQgBgNAIgBIAFAAIADAcQACALgRAiQAJBAh1BJQgXADgqAXIgEABgAjwiIQAVgkBRg2QAmgaASgCIAFACIAAAFQADAXhNBQQAAAFg2ALIgDAAQgfAAgBgIgAkukYIgBgMIAEgGQgBgFAYgGQgDgVAJgBIARgDQAYgDADARIAfgNIAGAEIBVgYIAaAJIAtgTIBGgBIARgHIA/gEIAQgGIAZAEIAZgDIAQgPIANALIAEAZQABAKgUAFIgZAAIh4AYIg7AAIgQACIglANIhCABIgFAFIgDAAIgOgCIgPAGIgRgCIgVAHIgWgBIgYAIIgeAAIgTAGg");
		this.shape_5.setTransform(-135.6, 18.25);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#CFDDE7").s().p("AjNF6IgDgVIAHgJIAeAEIBJgSIAOALIAMgKIAJAHIA1gPIA1gEIAtgKIAZABIAwgPIAWAFIAlgJIAygCIAcgIIAFAgIgEAFIABAEIg7AEIhFAOIgNgDIiYAdIgpACIgMAGIglAAIg6AIIgQAHQgvgBgBgOgAgsD8IglAFIgcAIIgFgEIgBgMQgCgIAQgDIATgTIACgNIgPgwQgFgqAdgEIgHgUIgBgEIAHgNQgZADgEgcQgUACgSgjQgGgCg+h/IAAgEQAOgCADgVQAigFgCgQQgCgVATgDIgBgEIggAEQgSALgVApIgJABQgIABglg2IgOgKIAHgKIAFAEIAEgBIADgFIAFAAIAhAAQAjgaAMgCIAqADQBFgMAEgLIAEgBQAJgBAJAqIgPAKQAHAzBZCKQANBAAZA8IgGAzIABAEQACAVAtATQgHAngJABIhTADIgnASIgIABQgRAAgCgOgAgFDEQgRACADARIgWAYIABAIIAMgCQAVgCAPgkQgBgRAPgCQgHgSgQgEQgHAMADASgAA3hEIgLgPQAbhWgEgbQgCgOgxgZIgBgEQgBgIBVgYIAVABIAYgMIAMgCQAIgBAIAZQgEAUgwAiIgmCTQgNACACARIgMABgAkrkYIgCgRQgCgOBvgWQABAKAVAAIAkgNIAVABIAcgMIAaAFIAMgCIgBgIIAVgDIAAAEIgEAFIABAEIAZgDIgBgFIgIABIgBgMIAUACIApgGIAcgMQATAGAEAHIBUgcIAXAKIgCARIAHAUIgEAFIgEAAIgqACIgQAGIgmABIgkAJIgFgEIgEABIgXAMIgmABIgsAKIhEAAIhNATIgZAAIgUAHQgYACgPAAQgZAAAAgGg");
		this.shape_6.setTransform(-184.8518, 24.875);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.txt, new cjs.Rectangle(-216.9, -67.4, 433.9, 134.9), null);


	(lib.barbe3_1 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#26170A").s().p("AiVBrQgMgCACg7QAChBAkglQAagbApgLQAJgDALAAIApgCQA7gDA1gFQASAhAXAHQgKASgBAQQAAAQAHAQQgwgng6gMQhmgSgtAqQgQAQgIAQQgEALgBANIgEAdQgEARgFAQQgGASgEAAIAAgBg");
		this.shape.setTransform(16.0107, 10.7507);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.barbe3_1, new cjs.Rectangle(0, 0, 32.1, 21.5), null);


	(lib.barbe3 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#26170A").s().p("AiVBrQgMgBACg8QAChBAkglQAbgbAogLQAJgDALAAIApgCQA7gCA1gFQASAgAXAHQgKASgBARQAAAPAHARQgwgog6gLQgfgHgeABQg5ABgdAcQgQAQgIARQgEAKgBAOIgEAcQgDARgGAQQgGARgEAAIAAAAg");
		this.shape.setTransform(16.0107, 10.7257);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.barbe3, new cjs.Rectangle(0, 0, 32.1, 21.5), null);


	(lib.barbe1_1 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#26170A").s().p("AB9CIQgCgBAFgeQAEgkgMgYQgGgMgXgWQgLgLgPgJIgygfQgrgbgMgGQgMgGgIABQgHABgPAHQgQAIgTADIgcAFIgYAHQgIADgCgCQgDgCADgMQAFgQAAgMQAAgOgDgKIANABQAXAAAXgJQANgEARgJQAQgGAYALQAMAFBGAoIB1BBQAcASACASQACANgHARQgEAMgPAfQgJARgIAOQgKAOgEAAIgBAAg");
		this.shape.setTransform(18.1822, 13.6257);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.barbe1_1, new cjs.Rectangle(0.1, 0.1, 36.3, 27.099999999999998), null);


	(lib.barbe1 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#26170A").s().p("AB9CIQgBgBAEgeQAFgkgNgYQgGgMgXgWQgLgLgPgJIgygfQgsgcgLgFQgLgGgJABQgHABgPAHQgQAIgTADIgcAFIgYAHQgIADgCgCQgDgCADgMQAFgQAAgMQAAgOgDgKIANABQAXAAAXgJQANgEARgJQAQgGAYALQAMAFBGAoIB1BBQAcASACASQACANgHARQgEAMgPAfQgJARgIAOQgKAOgEAAIgBAAg");
		this.shape.setTransform(18.1822, 13.6257);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.barbe1, new cjs.Rectangle(0.1, 0.1, 36.3, 27.099999999999998), null);


	(lib.Group_1 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#26170A").s().p("AjVFzQhfgmg+gyQhYhFgxhmQgfg/gniKQgVhHgKhJQgJg/gCg+QgDg4AEAAQACAAAFAXIANBNQALA4AXBpQAhCZBVB+QArA/AlAgQBcBSB7AkQCQAqCKgpQCDgnBhhqQA2g6AihDQAYgdATgcQAigxAcg7QAbg9AQg2QAHgNAHgUQAFgNACgPIADgKQADAAgBAnQgBAtgLAtIAAABQgsCFhQBxIgZAkQhZB0g1AwQhZBQhtAaQg6AOg7AAQhpAAhvgsg");
		this.shape.setTransform(62.138, 41.5374);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0, 0, 124.3, 83.1), null);


	(lib.Group = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#26170A").s().p("AjSFsQhbglhCgzQhYhFgyhmQgeg/gniKQgThCgMhOQgIg6gDg4QgCg0AEgBQAFAAAOBWQALA4AWBpQAhCZBWB9QArA/AlAhQBcBSB7AkQCQApCJgpQCDgmBihqQA2g6AihDQAWgbAVgeQAlg3AZg2QAag3ARg7QAOgSAAgPIgFgTQABAAACAFQACAHAAAHIAAAAIADAMQAGAngJAoIAAAAQguCIhOBvIgaAjQhYB0g1AwQhZBQhtAbQg6AOg7AAQhoAAhwgsg");
		this.shape.setTransform(61.7124, 40.8374);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0, 0, 123.5, 81.7), null);


	(lib.barbebas_1 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#26170A").s().p("AhlCUQhUgNg0g0QgxgxgQhRQgHggABgbQAAglAPgHQALgFAtAhQAYASAVAUQAVAVAJAHQAZATAhAJQATAFAjAEQAlAFAmgGQAYgEA7gOIBxgcQAwgLAQgCQAPgBAFAFQALANgTAnQgSAkgeAhQhUBaiWANQggADgbAAQggAAgZgEg");
		this.shape.setTransform(30.9249, 15.1747);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.barbebas_1, new cjs.Rectangle(0, 0, 61.9, 30.4), null);


	(lib.barbebas = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#26170A").s().p("AhZCDQhLgLgtguQgsgsgOhHQgGgcAAgYQABgiANgFQALgEAnAdQAUAPATASQASASAJAGQAWARAdAIQAPAEAhAFQAgAEAigFQAWgEA0gMIBjgZQArgKANgBQAOgCAEAFQALAMgRAiQgQAfgbAeQhJBOiGANQgcACgYAAQgcAAgWgDg");
		this.shape.setTransform(27.3505, 13.3894);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.barbebas, new cjs.Rectangle(0, 0, 54.7, 26.8), null);


	(lib.barbe3_1_1 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#26170A").s().p("AiVBrQgMgCACg7QAChBAkglQAagbApgLQAJgDALAAIApgCQA7gDA1gFQASAhAXAHQgKASgBAQQAAAQAHAQQgwgng6gMQhmgSgtAqQgQAQgIAQQgEALgBANIgEAdQgEARgFAQQgGASgEAAIAAgBg");
		this.shape_1.setTransform(16.0107, 10.7507);

		this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.barbe3_1_1, new cjs.Rectangle(0, 0, 32.1, 21.5), null);


	(lib.barbe3_2 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#26170A").s().p("AiVBrQgMgBACg8QAChBAkglQAbgbAogLQAJgDALAAIApgCQA7gCA1gFQASAgAXAHQgKASgBARQAAAPAHARQgwgog6gLQgfgHgeABQg5ABgdAcQgQAQgIARQgEAKgBAOIgEAcQgDARgGAQQgGARgEAAIAAAAg");
		this.shape_1.setTransform(16.0107, 10.7257);

		this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.barbe3_2, new cjs.Rectangle(0, 0, 32.1, 21.5), null);


	(lib.barbe1_1_1 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#26170A").s().p("AB9CIQgCgBAFgeQAEgkgMgYQgGgMgXgWQgLgLgPgJIgygfQgrgbgMgGQgMgGgIABQgHABgPAHQgQAIgTADIgcAFIgYAHQgIADgCgCQgDgCADgMQAFgQAAgMQAAgOgDgKIANABQAXAAAXgJQANgEARgJQAQgGAYALQAMAFBGAoIB1BBQAcASACASQACANgHARQgEAMgPAfQgJARgIAOQgKAOgEAAIgBAAg");
		this.shape_1.setTransform(18.1822, 13.6257);

		this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.barbe1_1_1, new cjs.Rectangle(0.1, 0.1, 36.3, 27.099999999999998), null);


	(lib.barbe1_2 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#26170A").s().p("AB9CIQgBgBAEgeQAFgkgNgYQgGgMgXgWQgLgLgPgJIgygfQgsgcgLgFQgLgGgJABQgHABgPAHQgQAIgTADIgcAFIgYAHQgIADgCgCQgDgCADgMQAFgQAAgMQAAgOgDgKIANABQAXAAAXgJQANgEARgJQAQgGAYALQAMAFBGAoIB1BBQAcASACASQACANgHARQgEAMgPAfQgJARgIAOQgKAOgEAAIgBAAg");
		this.shape_1.setTransform(18.1822, 13.6257);

		this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.barbe1_2, new cjs.Rectangle(0.1, 0.1, 36.3, 27.099999999999998), null);


	(lib.Group_1_1 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#26170A").s().p("AjVFzQhfgmg+gyQhYhFgxhmQgfg/gniKQgVhHgKhJQgJg/gCg+QgDg4AEAAQACAAAFAXIANBNQALA4AXBpQAhCZBVB+QArA/AlAgQBcBSB7AkQCQAqCKgpQCDgnBhhqQA2g6AihDQAYgdATgcQAigxAcg7QAbg9AQg2QAHgNAHgUQAFgNACgPIADgKQADAAgBAnQgBAtgLAtIAAABQgsCFhQBxIgZAkQhZB0g1AwQhZBQhtAaQg6AOg7AAQhpAAhvgsg");
		this.shape_1.setTransform(62.138, 41.5374);

		this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0, 0, 124.3, 83.1), null);


	(lib.Group_2 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#26170A").s().p("AjSFsQhbglhCgzQhYhFgyhmQgeg/gniKQgThCgMhOQgIg6gDg4QgCg0AEgBQAFAAAOBWQALA4AWBpQAhCZBWB9QArA/AlAhQBcBSB7AkQCQApCJgpQCDgmBihqQA2g6AihDQAWgbAVgeQAlg3AZg2QAag3ARg7QAOgSAAgPIgFgTQABAAACAFQACAHAAAHIAAAAIADAMQAGAngJAoIAAAAQguCIhOBvIgaAjQhYB0g1AwQhZBQhtAbQg6AOg7AAQhoAAhwgsg");
		this.shape_1.setTransform(61.7124, 40.8374);

		this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0, 0, 123.5, 81.7), null);


	(lib.barbebas_1_1 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#26170A").s().p("AhlCUQhUgNg0g0QgxgxgQhRQgHggABgbQAAglAPgHQALgFAtAhQAYASAVAUQAVAVAJAHQAZATAhAJQATAFAjAEQAlAFAmgGQAYgEA7gOIBxgcQAwgLAQgCQAPgBAFAFQALANgTAnQgSAkgeAhQhUBaiWANQggADgbAAQggAAgZgEg");
		this.shape_1.setTransform(30.9249, 15.1747);

		this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.barbebas_1_1, new cjs.Rectangle(0, 0, 61.9, 30.4), null);


	(lib.barbebas_2 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#26170A").s().p("AhZCDQhLgLgtguQgsgsgOhHQgGgcAAgYQABgiANgFQALgEAnAdQAUAPATASQASASAJAGQAWARAdAIQAPAEAhAFQAgAEAigFQAWgEA0gMIBjgZQArgKANgBQAOgCAEAFQALAMgRAiQgQAfgbAeQhJBOiGANQgcACgYAAQgcAAgWgDg");
		this.shape_1.setTransform(27.3505, 13.3894);

		this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.barbebas_2, new cjs.Rectangle(0, 0, 54.7, 26.8), null);


	(lib.Interpoler15 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#9AEB8A").s().p("AhZB/QgDgBAHgdQAFgYAKgfQAchXAOgcQAUgqAcgJQAegJApAXIgKA1QgegHgbALQgWALgFANQgDAGAAAHQAAAKgCAGQgCAHgEAHIgNASIghA0IgWAjQgFAIgBAAIgBAAg");
		this.shape.setTransform(151.127, 130.4153, 1.4408, 1.4408);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#182516").s().p("Ag9A4QAfgrAMgXQAKgTAGgYQAEgQAIgIQAZgVAzAHIgdB2QgNgCgPACQgoAFgoAhIghAdQgCgCAZgkg");
		this.shape_1.setTransform(150.5162, 135.2613, 1.4408, 1.4408);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#9AEB8A").s().p("AhhB1QgDgCAOgkQARgqAYgrQAig9AbgaQAVgUAWgCQAJgBAKABIAJAvQARCDgHABQgGgdgIgfQgPg8gXgCQgJgBgKAIQgLAIgRAXQgkAsghA1QgZAogBAAIAAAAg");
		this.shape_2.setTransform(150.2796, 84.6844, 1.4408, 1.4408);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#9AEB8A").s().p("ACiDvIhTgvQh4hAgjgVQg1gfgcgoQgUgbgHgPQgMgaAFgWQAGgVAegXQAngdAQgWQAfgrACg9QA7BFgMA2QgCAMgKATQgLAUgFAUQgNA2ANAkQAIAXAUASQALAKAWAPQBEAvA+A4QA2AxgEAFIAAAAQgEAAgbgPg");
		this.shape_3.setTransform(62.383, -126.9583, 1.4408, 1.4408);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#304E2A").s().p("AhAAMQgfhDgfg4ICYBxIBlA+QgTgJgUgCQglgGgeARQgbAQgPAgQgQgqgbg6g");
		this.shape_4.setTransform(68.0574, -100.9665, 1.4408, 1.4408);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#182516").s().p("AA0CGQgHgNgfgxQgrhIhsjVQBTgDBOAWQA2ARAWAVQAZAaAJAmQAFAVgBAUQAAASgGAWQgLAmgaAaQgHAHgKAGQgIAEgDAGQgTAdAZA5QAMAdAPAXIAAAAQgCAAguhQg");
		this.shape_5.setTransform(25.8712, -147.9345, 1.4408, 1.4408);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#0A0B2E").s().p("AjSF1QACghATgmIAmg+QBiifALj2IACiUQABg6ALgBQAQgBAYB1QApC9AhBsQAwCfBNCtg");
		this.shape_6.setTransform(180.6399, 158.6698, 1.4408, 1.4408);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#9AEB8A").s().p("AipFHQATjBAFirIAFhtQAFhuAFAAQADAAACBTQAIBVAdAIQAJADASgKIBIgoQAcgPAQgHIANgHQBKg2AHiIQACgsgLgwQgIgjADgBQAHgDAQAeQATAiAFAmQAFAhgKAmQgPA0gDAiQgEAqAHA7QAFAlgNAOQgQASgwgHQg6gJgeANQgiAOgYAqQgZAugeBqQggBtgWB3IgSBbIAOiVg");
		this.shape_7.setTransform(128.3809, -51.9563, 1.4408, 1.4408);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#16065A").s().p("AiOHMQhrg6gmgdQhAgwgTg3Qg6ikEUkIQCWiPEVjCQBdhAAMAMQAGAHgRAdQgIANgTAbQhOBthBC7Qg1CXgXCJQgjDVAsDgQiSgUiAhGg");
		this.shape_8.setTransform(-60.3596, 35.5137, 1.4408, 1.4408);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0A0B2E").s().p("AgwENIgkgpQgSgTgIgVIgBgGQgLgiALgnIABgHQAcgUAXgbQAlgrARg0QAVhBgLhHQgGgrgTgoIgEgIQA3AzAkA6QAwBQADBQQAAAjgHAoQgFAagRA9QgNAwgVA5g");
		this.shape_9.setTransform(-163.0129, 173.7631, 1.4408, 1.4408);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#5750C2").s().p("Ah9AtQgCgCADgJQADgIAGgJQAVgfAygQQA0gQA5ACQA5ABAEASQADALgQAOQgPAMgTAFQgKACgLgBIgfgGQgjgFgQgBQgZgBgTAHQgSAHgVAQQgNAKgEAAIgBAAg");
		this.shape_10.setTransform(-114.9956, -73.5802, 1.4408, 1.4408);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#141552").s().p("AA3AaQg2gegmgDQgbgBgjAIQgbAFgBgDQgCgDALgIQAJgGAKgGQAxgbBAAIQAoAFAiAPQAoARAAATQABAPgPAJQgEADgHAAQgRAAgfgRg");
		this.shape_11.setTransform(-113.9095, -67.3151, 1.4408, 1.4408);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#5750C2").s().p("Ag2gIQgdgqAKgPQAFgKBCAAQAwAAAIAFQAbARgGBCQgCAegIAcQADgLAAgPQACgkgQgbQgVgkgWADQgLACgIAMQgIALAAANQgBANAXAdQARATASAQIANAMQhDgXgpg9g");
		this.shape_12.setTransform(-103.2021, -102.6612, 1.4408, 1.4408);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#2C277F").s().p("AgFAfQgngrABgNQABgOAKgLQALgMAMgBQAQgCAQAZQAPAWAEAZQADATgCARQgDATgIACIAAAAQgHAAgeghg");
		this.shape_13.setTransform(-101.4366, -100.9651, 1.4408, 1.4408);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#695CCF").s().p("ACRAkQglgbglgLQgdgJgggCQgXgBgrADQgnADguAHQgiAEAAgBQAAgCArgLQBjgdBCgJQAlgGAQABQAQABAHAIIADADQAaAjAJAOQAfAtgCACIgBABQgDAAgbgTg");
		this.shape_14.setTransform(-111.155, -130.3937, 1.4408, 1.4408);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#141552").s().p("ACPApQgygug1gSQgZgIgcgEQgTgCgggBQgogBguAEQgiADgBgBQAAgEAugLQAvgOB6gMQATgCALAAQAQABAPAGQATAHAVAYQANAPAWAwQAXAxgEADIAAAAQgDAAgngkg");
		this.shape_15.setTransform(-110.4455, -124.0228, 1.4408, 1.4408);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#5750C2").s().p("AhlgGQALglANgeIA5APIA8ANQAZAGASAJQAYAMAOAMIghAAQg0AEg0AOQgpAMgZARQgTANgTAUQAHgqAMgmg");
		this.shape_16.setTransform(-190.9852, -129.0626, 1.4408, 1.4408);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#5750C2").s().p("AjSEJQgBhbgChSIgJkAQAfhGA2gnQBXg+CQANQAxAEArAMQAmAKgBAEQAAACgXABIg+ACIg6gBQgWgBgPACQgfADgSAEQgjAJgdARQg4AigjBHQgTAlgJA6QgHApACA1QAEBTgHBsQgHBegEAAQgBAAgBg8g");
		this.shape_17.setTransform(-177.6211, -39.2341, 1.4408, 1.4408);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#5750C2").s().p("AFAIVQg1hzgzhjQhdi1gvhPQhNiGhWhtQgTgYizjNQhVhiARgZQAEgHAUgDQA1gJAXgFQAtgKAogNQAdgKAJAAQBJgFBaDAQA1BvBEDOQBfEcAqCJQBPEBgQAFIAAAAQgGAAgcg9g");
		this.shape_18.setTransform(34.4221, -39.6641, 1.4408, 1.4408);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#1D1C67").s().p("ABHMtQhTh7hEiBQiMkLgVjLQgDgfABgiQADg9gBhvQgEkBgYiQQgTh3gshdIgWguIgCgHQAKgFFGIKIEHGoIBHDWQAMAnAOAiQAIAVAEAUQAEAVABAUQAAAVgFBCQgGBMgICYg");
		this.shape_19.setTransform(79.9592, 95.3059, 1.4408, 1.4408);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#2C277F").s().p("AorIjQA1iAAJgiQAahkgehaQgRgzgigwQgagkgqgpIhgheQgogwANgqQAIgbAogWQBAgiAogkQBJhAA3htQAYgvAKgNQATgZAXgDQAfgFAeAhQAOAPAvBFQAwBIAsAsQAaAaAZAUQA8AuBMAgQAeALAYAIIABAAQBFAVBpAQQCSAXAvAQQBbAhAkBGQASAlgBAjQgBAVgIAlIAAABQgHAbgDAaQgHA8AXBGQAMAjAZAmQAmA6BXBhg");
		this.shape_20.setTransform(-77.0862, 133.6332, 1.4408, 1.4408);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#2C277F").s().p("Ah9CIIgFiFQADgyAHgnQAFgdACgGQAPghBXggQBMgcBCAJQgfAFglAJQhJASgdAjQgRATgHAXQAAAdgEAcQgDAcgIAaIgOAtQgOAygHA4QgGAqgBAAQgDgBgChHg");
		this.shape_21.setTransform(-192.354, -100.4172, 1.4408, 1.4408);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#1D1C67").s().p("AjPE/QgEgBAEg+QAHhlAChTIABhvQABgjAIgdQAOg3ATgjQAihAA5ggQA3gfBDADICYAAQgwAFgtAQQhGAagyAwQgtArgfA+QgbA3gQBNQgUBpgdBmQgcBhgIAAIAAAAg");
		this.shape_22.setTransform(-177.0548, -34.8804, 1.4408, 1.4408);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#182516").s().p("AhmC/QgWiVgWkJQAYgPAcABQAfABAVASIBVBkIBoCEQgPgKgUgEQgkgKghAKQgmAMgSAZQgNARgDAaQgGAogCAIQgRA5goA1g");
		this.shape_23.setTransform(114.9022, -140.954, 1.4408, 1.4408);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#182516").s().p("ADCFSQgXiKgWhsQgujlgUhFQgehlgigEQgvgFhDB0Qg5BhgkBwQgOAsgKArIAri7QAOhDAZhLQAziVA6glIANgGQAbgMAqADQAzCjAhCiQAQBSAMBWQAIA1ANB3QAYDNgGAAQgBAAgRhig");
		this.shape_24.setTransform(130.9278, 5.1071, 1.4408, 1.4408);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#69B459").s().p("AijKYQgJgBAIiYQAGhdAZlZQADgtgDgsQgGhEgVhCIgOhYQgXiVgWkKQAVgJARgBQAygDA4BAQAlAqByCQQBSBfAUAeQAlAzAEApQACAbgIAlQgLAtAAAwQgBArALBKQAGArgOASQgRAVgzgGQg9gIgiAQQghAQgcA/QgnBVhFDuIgWBMQgJAbgEAAIAAAAg");
		this.shape_25.setTransform(125.3171, -78.9669, 1.4408, 1.4408);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#182516").s().p("AgMDQQgEgrgJiLQgFhKAAgwQABhUANhXQAMAjAGAfQAoCfgOCoQgEA8gLArQgJAngGAAQgFABgFg9g");
		this.shape_26.setTransform(102.975, -34.5084, 1.4408, 1.4408);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#4E39BF").s().p("AJMQpQgbg8hJiMQiRkajimXQhtjCiejFQhXhriti8QiMiYgpg/Qg+heAeg3QAHgMBbhqQBOhaAjgdQAggaAZABQAuADApA+QEvG2DLHBQBmDfAoCJQEZO2geAKIgBABQgLAAgfhIg");
		this.shape_27.setTransform(23.3326, -48.5479, 1.4408, 1.4408);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#182516").s().p("AEgKNQgRhEgRg9IgoiFQgih0hUjAQinmAj5mDQAhgCAiABQD2GACmF9QBTC/AiByQAeBAAJBFQAJA+gFA6QgFA3gLABIAAAAQgGAAgJglg");
		this.shape_28.setTransform(42.4132, -79.4497, 1.4408, 1.4408);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#141552").s().p("AJkNdQiGj0iAjPQiukZhSh4QiDjAiCiPQgSgUhziSQhRhmhCgyQgiglhyiQQhIhbgWglQgagqALgPQAEgHAPgBQANAAAsADQCIAKAVAEQCiAgFZIlQCuESCMEKQF9N3gYAMIAAAAQgIAAhXieg");
		this.shape_29.setTransform(10.3272, -29.5748, 1.4408, 1.4408);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#69B459").s().p("AEjJ5QgTgkgmhzQhjkqhjimQhLh/hph3Qg+hFhuhpQhdhYgagjQgog3ASgnQAihKDLAIQBpAFBbAtQBnA0ARBMQAIAlgWA2QgXA5AGAoQAIAvAzAmIByBTQB4BpA5CxQAfBhAPCRQAGBBgGAxQgGA5gZAxQgVAqgOATQgXAggXABIgCAAQgeAAgag2g");
		this.shape_30.setTransform(45.3349, -79.8285, 1.4408, 1.4408);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#695CCF").s().p("AJSVHQg2hsg0h9QifkUg8krQgojHADjiIADh+QABgvgFAAQgRgCg3FoQgfDGg4F8IgJA6IAAABIgKA1QgFAagCAAQgCgBgDhyIgChKQgBgMgCgEQgNgWgggFQgSgDg3ACQiCAEhYghQhWgggjgWQg4gjgNgxIgEgNQgFgjANglIAiisQAMhOADhPQACgrgFhIQgFhlgThkIgMg6QgThbAHhlQAJiEgHhVQgOixg5iYQgPgmgPgkIgLgWQgLgVgVgmQgthOg2g9QgmgqgXgPQgYgPgegPIhBgbIgcgIIgBAAIgcgGIAFgBQBmgOBmgEQChgHCgASIAmAFIABAAIAVADQAlB6BBBsQAyBUA9BJQArAzBIBIQA5A6A3AwIAAAAQBVBJBWA8QAYASAsAcIFdK1ICnH7IAAABIBvFRIAFAgQAYCxAICKg");
		this.shape_31.setTransform(-3.3536, 17.7632, 1.4408, 1.4408);

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#4E39BF").s().p("Au1VCIAAnXIjEupIAAgBIgDgMIAAgBIAAgCIgXrLQAAhFARhVIAAgBQAojRBthgQBShJBmgPQBCgKBAAPIAXAHIABAAIAFACIAEABQDfAjCOAyQCYA1A7BGIADAEIANASIAUAgQAUAfAWAeQA7BSBoBoQBCBDBGA7QBRBEBYA8IAuAgIBKCSIABABIEUIiIBkEQIAAAAIBIDCIAAAAICKF4IAAFWg");
		this.shape_32.setTransform(-42.2559, 18.5197, 1.4408, 1.4408);

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#182516").s().p("Ag0ADQBtjIAxAPQAUAGAMAlQAMAlgKAFQgDACgNgMQgQgPgLgDQg2gPhnCrQguBMglBNQAphbAyhag");
		this.shape_33.setTransform(143.3548, 102.5472, 1.4408, 1.4408);

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#69B459").s().p("AiZP0QAWirgIilQgLjUhDjiIgyiiQgahVgIg5IgDgfQgCgaABgiQACggAHghIAHgbQAGgUAIgUIABgDIAEgJQAKgXAKgQQANgUAKgNIADgEIAAgBIAogvQAZghAWgnIAFgIIAUglIASglQASgnANgiIABgBIAAgBIAUg3QAOgpAMgqIABgDIAShHIAPg8QALgtAIgRQAJgWAMAAQAOgBAMAZQAFAJAEALQAMAgANA0IAFAUQASBKArDYQBFFiAeDXIAAAAIAFAhQALBUAEA7IAAABQAHBcgKBBIgKA1IAAAAIgNBAIgBABIhHEwIgkCXQgPBDgEApg");
		this.shape_34.setTransform(120.7792, 66.7089, 1.4408, 1.4408);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#16065A").s().p("AiXRdIBDpjIABgCIAcj/IgPhFIAAgBIhem8IiXmoIAAAAIgLgdIEPmOIAFAGQBFBQAsBeQAiBKASBaQAOBGATC0QAbDwAHBmIAWEzQAIB9ADBpIAMF5QAMCfA0CLQASAvASAmg");
		this.shape_35.setTransform(164.1065, 51.4729, 1.4408, 1.4408);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#1D1C67").s().p("ABSB5QgSgIgigcQhLg9gdgdQgyg0AMgcQAIgSAggLQALgEAZgFQAPgCAbACQA2AEA3gEIgOBMQgEAaAJBLQAIA9gNAIQgDACgDAAQgFAAgIgEg");
		this.shape_36.setTransform(-20.8829, -194.4384, 1.4408, 1.4408);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_36 }, { t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.shape_31 }, { t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-211.2, -212.4, 422.4, 424.9);


	(lib.Interpoler14 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#9AEB8A").s().p("AhZB/QgDgBAHgdQAFgYAKgfQAchXAOgcQAUgqAcgJQAegJApAXIgKA1QgegHgbALQgWALgFANQgDAGAAAHQAAAKgCAGQgCAHgEAHIgNASIghA0IgWAjQgFAIgBAAIgBAAg");
		this.shape.setTransform(151.127, 130.4153, 1.4408, 1.4408);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#182516").s().p("Ag9A4QAfgrAMgXQAKgTAGgYQAEgQAIgIQAZgVAzAHIgdB2QgNgCgPACQgoAFgoAhIghAdQgCgCAZgkg");
		this.shape_1.setTransform(150.5162, 135.2613, 1.4408, 1.4408);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#9AEB8A").s().p("AhhB1QgDgCAOgkQARgqAYgrQAig9AbgaQAVgUAWgCQAJgBAKABIAJAvQARCDgHABQgGgdgIgfQgPg8gXgCQgJgBgKAIQgLAIgRAXQgkAsghA1QgZAogBAAIAAAAg");
		this.shape_2.setTransform(150.2796, 84.6844, 1.4408, 1.4408);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#9AEB8A").s().p("ACiDvIhTgvQh4hAgjgVQg1gfgcgoQgUgbgHgPQgMgaAFgWQAGgVAegXQAngdAQgWQAfgrACg9QA7BFgMA2QgCAMgKATQgLAUgFAUQgNA2ANAkQAIAXAUASQALAKAWAPQBEAvA+A4QA2AxgEAFIAAAAQgEAAgbgPg");
		this.shape_3.setTransform(62.383, -126.9583, 1.4408, 1.4408);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#304E2A").s().p("AhAAMQgfhDgfg4ICYBxIBlA+QgTgJgUgCQglgGgeARQgbAQgPAgQgQgqgbg6g");
		this.shape_4.setTransform(68.0574, -100.9665, 1.4408, 1.4408);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#182516").s().p("AA0CGQgHgNgfgxQgrhIhsjVQBTgDBOAWQA2ARAWAVQAZAaAJAmQAFAVgBAUQAAASgGAWQgLAmgaAaQgHAHgKAGQgIAEgDAGQgTAdAZA5QAMAdAPAXIAAAAQgCAAguhQg");
		this.shape_5.setTransform(25.8712, -147.9345, 1.4408, 1.4408);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#0A0B2E").s().p("AjSF1QACghATgmIAmg+QBiifALj2IACiUQABg6ALgBQAQgBAYB1QApC9AhBsQAwCfBNCtg");
		this.shape_6.setTransform(180.6399, 158.6698, 1.4408, 1.4408);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#9AEB8A").s().p("AipFHQATjBAFirIAFhtQAFhuAFAAQADAAACBTQAIBVAdAIQAJADASgKIBIgoQAcgPAQgHIANgHQBKg2AHiIQACgsgLgwQgIgjADgBQAHgDAQAeQATAiAFAmQAFAhgKAmQgPA0gDAiQgEAqAHA7QAFAlgNAOQgQASgwgHQg6gJgeANQgiAOgYAqQgZAugeBqQggBtgWB3IgSBbIAOiVg");
		this.shape_7.setTransform(128.3809, -51.9563, 1.4408, 1.4408);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#16065A").s().p("AiOHMQhrg6gmgdQhAgwgTg3Qg6ikEUkIQCWiPEVjCQBdhAAMAMQAGAHgRAdQgIANgTAbQhOBthBC7Qg1CXgXCJQgjDVAsDgQiSgUiAhGg");
		this.shape_8.setTransform(-60.3596, 35.5137, 1.4408, 1.4408);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#0A0B2E").s().p("AgwENIgkgpQgSgTgIgVIgBgGQgLgiALgnIABgHQAcgUAXgbQAlgrARg0QAVhBgLhHQgGgrgTgoIgEgIQA3AzAkA6QAwBQADBQQAAAjgHAoQgFAagRA9QgNAwgVA5g");
		this.shape_9.setTransform(-163.0129, 173.7631, 1.4408, 1.4408);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#5750C2").s().p("Ah9AtQgCgCADgJQADgIAGgJQAVgfAygQQA0gQA5ACQA5ABAEASQADALgQAOQgPAMgTAFQgKACgLgBIgfgGQgjgFgQgBQgZgBgTAHQgSAHgVAQQgNAKgEAAIgBAAg");
		this.shape_10.setTransform(-114.9956, -73.5802, 1.4408, 1.4408);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#141552").s().p("AA3AaQg2gegmgDQgbgBgjAIQgbAFgBgDQgCgDALgIQAJgGAKgGQAxgbBAAIQAoAFAiAPQAoARAAATQABAPgPAJQgEADgHAAQgRAAgfgRg");
		this.shape_11.setTransform(-113.9095, -67.3151, 1.4408, 1.4408);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#5750C2").s().p("Ag2gIQgdgqAKgPQAFgKBCAAQAwAAAIAFQAbARgGBCQgCAegIAcQADgLAAgPQACgkgQgbQgVgkgWADQgLACgIAMQgIALAAANQgBANAXAdQARATASAQIANAMQhDgXgpg9g");
		this.shape_12.setTransform(-103.2021, -102.6612, 1.4408, 1.4408);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#2C277F").s().p("AgFAfQgngrABgNQABgOAKgLQALgMAMgBQAQgCAQAZQAPAWAEAZQADATgCARQgDATgIACIAAAAQgHAAgeghg");
		this.shape_13.setTransform(-101.4366, -100.9651, 1.4408, 1.4408);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#695CCF").s().p("ACRAkQglgbglgLQgdgJgggCQgXgBgrADQgnADguAHQgiAEAAgBQAAgCArgLQBjgdBCgJQAlgGAQABQAQABAHAIIADADQAaAjAJAOQAfAtgCACIgBABQgDAAgbgTg");
		this.shape_14.setTransform(-111.155, -130.3937, 1.4408, 1.4408);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#141552").s().p("ACPApQgygug1gSQgZgIgcgEQgTgCgggBQgogBguAEQgiADgBgBQAAgEAugLQAvgOB6gMQATgCALAAQAQABAPAGQATAHAVAYQANAPAWAwQAXAxgEADIAAAAQgDAAgngkg");
		this.shape_15.setTransform(-110.4455, -124.0228, 1.4408, 1.4408);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#5750C2").s().p("AhlgGQALglANgeIA5APIA8ANQAZAGASAJQAYAMAOAMIghAAQg0AEg0AOQgpAMgZARQgTANgTAUQAHgqAMgmg");
		this.shape_16.setTransform(-190.9852, -129.0626, 1.4408, 1.4408);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#5750C2").s().p("AjSEJQgBhbgChSIgJkAQAfhGA2gnQBXg+CQANQAxAEArAMQAmAKgBAEQAAACgXABIg+ACIg6gBQgWgBgPACQgfADgSAEQgjAJgdARQg4AigjBHQgTAlgJA6QgHApACA1QAEBTgHBsQgHBegEAAQgBAAgBg8g");
		this.shape_17.setTransform(-177.6211, -39.2341, 1.4408, 1.4408);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#5750C2").s().p("AFAIVQg1hzgzhjQhdi1gvhPQhNiGhWhtQgTgYizjNQhVhiARgZQAEgHAUgDQA1gJAXgFQAtgKAogNQAdgKAJAAQBJgFBaDAQA1BvBEDOQBfEcAqCJQBPEBgQAFIAAAAQgGAAgcg9g");
		this.shape_18.setTransform(34.4221, -39.6641, 1.4408, 1.4408);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#1D1C67").s().p("ABHMtQhTh7hEiBQiMkLgVjLQgDgfABgiQADg9gBhvQgEkBgYiQQgTh3gshdIgWguIgCgHQAKgFFGIKIEHGoIBHDWQAMAnAOAiQAIAVAEAUQAEAVABAUQAAAVgFBCQgGBMgICYg");
		this.shape_19.setTransform(79.9592, 95.3059, 1.4408, 1.4408);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#2C277F").s().p("AorIjQA1iAAJgiQAahkgehaQgRgzgigwQgagkgqgpIhgheQgogwANgqQAIgbAogWQBAgiAogkQBJhAA3htQAYgvAKgNQATgZAXgDQAfgFAeAhQAOAPAvBFQAwBIAsAsQAaAaAZAUQA8AuBMAgQAeALAYAIIABAAQBFAVBpAQQCSAXAvAQQBbAhAkBGQASAlgBAjQgBAVgIAlIAAABQgHAbgDAaQgHA8AXBGQAMAjAZAmQAmA6BXBhg");
		this.shape_20.setTransform(-77.0862, 133.6332, 1.4408, 1.4408);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#2C277F").s().p("Ah9CIIgFiFQADgyAHgnQAFgdACgGQAPghBXggQBMgcBCAJQgfAFglAJQhJASgdAjQgRATgHAXQAAAdgEAcQgDAcgIAaIgOAtQgOAygHA4QgGAqgBAAQgDgBgChHg");
		this.shape_21.setTransform(-192.354, -100.4172, 1.4408, 1.4408);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#1D1C67").s().p("AjPE/QgEgBAEg+QAHhlAChTIABhvQABgjAIgdQAOg3ATgjQAihAA5ggQA3gfBDADICYAAQgwAFgtAQQhGAagyAwQgtArgfA+QgbA3gQBNQgUBpgdBmQgcBhgIAAIAAAAg");
		this.shape_22.setTransform(-177.0548, -34.8804, 1.4408, 1.4408);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#182516").s().p("AhmC/QgWiVgWkJQAYgPAcABQAfABAVASIBVBkIBoCEQgPgKgUgEQgkgKghAKQgmAMgSAZQgNARgDAaQgGAogCAIQgRA5goA1g");
		this.shape_23.setTransform(114.9022, -140.954, 1.4408, 1.4408);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#182516").s().p("ADCFSQgXiKgWhsQgujlgUhFQgehlgigEQgvgFhDB0Qg5BhgkBwQgOAsgKArIAri7QAOhDAZhLQAziVA6glIANgGQAbgMAqADQAzCjAhCiQAQBSAMBWQAIA1ANB3QAYDNgGAAQgBAAgRhig");
		this.shape_24.setTransform(130.9278, 5.1071, 1.4408, 1.4408);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#69B459").s().p("AijKYQgJgBAIiYQAGhdAZlZQADgtgDgsQgGhEgVhCIgOhYQgXiVgWkKQAVgJARgBQAygDA4BAQAlAqByCQQBSBfAUAeQAlAzAEApQACAbgIAlQgLAtAAAwQgBArALBKQAGArgOASQgRAVgzgGQg9gIgiAQQghAQgcA/QgnBVhFDuIgWBMQgJAbgEAAIAAAAg");
		this.shape_25.setTransform(125.3171, -78.9669, 1.4408, 1.4408);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#182516").s().p("AgMDQQgEgrgJiLQgFhKAAgwQABhUANhXQAMAjAGAfQAoCfgOCoQgEA8gLArQgJAngGAAQgFABgFg9g");
		this.shape_26.setTransform(102.975, -34.5084, 1.4408, 1.4408);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#4E39BF").s().p("AJMQpQgbg8hJiMQiRkajimXQhtjCiejFQhXhriti8QiMiYgpg/Qg+heAeg3QAHgMBbhqQBOhaAjgdQAggaAZABQAuADApA+QEvG2DLHBQBmDfAoCJQEZO2geAKIgBABQgLAAgfhIg");
		this.shape_27.setTransform(23.3326, -48.5479, 1.4408, 1.4408);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#182516").s().p("AEgKNQgRhEgRg9IgoiFQgih0hUjAQinmAj5mDQAhgCAiABQD2GACmF9QBTC/AiByQAeBAAJBFQAJA+gFA6QgFA3gLABIAAAAQgGAAgJglg");
		this.shape_28.setTransform(42.4132, -79.4497, 1.4408, 1.4408);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#141552").s().p("AJkNdQiGj0iAjPQiukZhSh4QiDjAiCiPQgSgUhziSQhRhmhCgyQgiglhyiQQhIhbgWglQgagqALgPQAEgHAPgBQANAAAsADQCIAKAVAEQCiAgFZIlQCuESCMEKQF9N3gYAMIAAAAQgIAAhXieg");
		this.shape_29.setTransform(10.3272, -29.5748, 1.4408, 1.4408);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#69B459").s().p("AEjJ5QgTgkgmhzQhjkqhjimQhLh/hph3Qg+hFhuhpQhdhYgagjQgog3ASgnQAihKDLAIQBpAFBbAtQBnA0ARBMQAIAlgWA2QgXA5AGAoQAIAvAzAmIByBTQB4BpA5CxQAfBhAPCRQAGBBgGAxQgGA5gZAxQgVAqgOATQgXAggXABIgCAAQgeAAgag2g");
		this.shape_30.setTransform(45.3349, -79.8285, 1.4408, 1.4408);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#695CCF").s().p("AJSVHQg2hsg0h9QifkUg8krQgojHADjiIADh+QABgvgFAAQgRgCg3FoQgfDGg4F8IgJA6IAAABIgKA1QgFAagCAAQgCgBgDhyIgChKQgBgMgCgEQgNgWgggFQgSgDg3ACQiCAEhYghQhWgggjgWQg4gjgNgxIgEgNQgFgjANglIAiisQAMhOADhPQACgrgFhIQgFhlgThkIgMg6QgThbAHhlQAJiEgHhVQgOixg5iYQgPgmgPgkIgLgWQgLgVgVgmQgthOg2g9QgmgqgXgPQgYgPgegPIhBgbIgcgIIgBAAIgcgGIAFgBQBmgOBmgEQChgHCgASIAmAFIABAAIARACIAEABQAlB6BBBsQAyBUA9BJQArAzBIBIQA5A6A3AwIAAAAQBVBJBWA8QAYASAsAcIFdK1ICnH7IAAABIBvFRIAFAgQAYCxAICKg");
		this.shape_31.setTransform(-3.3536, 17.7632, 1.4408, 1.4408);

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#4E39BF").s().p("Au1VCIAAnXIjEupIAAgBIgDgMIAAgBIAAgCIgXrLQAAhFARhVIAAgBQAojRBthgQBShJBmgPQBCgKBAAPIAXAHIABAAIAFACIAEABQDfAjCOAyQCYA1A7BGIADAEIANASIAUAgQAUAfAWAeQA7BSBoBoQBCBDBGA7QBRBEBYA8IAuAgIBKCSIABABIEUIiIBkEQIAAAAIBIDCIAAAAICKF4IAAFWg");
		this.shape_32.setTransform(-42.2559, 18.5197, 1.4408, 1.4408);

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#182516").s().p("Ag0ADQBtjIAxAPQAUAGAMAlQAMAlgKAFQgDACgNgMQgQgPgLgDQg2gPhnCrQguBMglBNQAphbAyhag");
		this.shape_33.setTransform(143.3548, 102.5472, 1.4408, 1.4408);

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#69B459").s().p("AiZP0QAWirgIilQgLjUhDjiIgyiiQgahVgIg5IgDgfQgCgaABgiQACggAHghIAHgbQAGgUAIgUIABgDIAEgJQAKgXAKgQQANgUAKgNIADgEIAAgBIAogvQAZghAWgnIAFgIIAUglIASglQASgnANgiIABgBIAAgBIAUg3QAOgpAMgqIABgDIAShHIAPg8QALgtAIgRQAJgWAMAAQAOgBAMAZQAFAJAEALQAMAgANA0IAFAUQASBKArDYQBFFiAeDXIAAAAIAFAhQALBUAEA7IAAABQAHBcgKBBIgKA1IAAAAIgNBAIgBABIhHEwIgkCXQgPBDgEApg");
		this.shape_34.setTransform(120.7792, 66.7089, 1.4408, 1.4408);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#16065A").s().p("AiXRdIBDpjIABgCIAcj/IgPhFIAAgBIhem8IiXmoIAAAAIgLgdIEPmOIAFAGQBFBQAsBeQAiBKASBaQAOBGATC0QAbDwAHBmIAWEzQAIB9ADBpIAMF5QAMCfA0CLQASAvASAmg");
		this.shape_35.setTransform(164.1065, 51.4729, 1.4408, 1.4408);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#1D1C67").s().p("ABSB5QgSgIgigcQhLg9gdgdQgyg0AMgcQAIgSAggLQALgEAZgFQAPgCAbACQA2AEA3gEIgOBMQgEAaAJBLQAIA9gNAIQgDACgDAAQgFAAgIgEg");
		this.shape_36.setTransform(-20.8829, -194.4384, 1.4408, 1.4408);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_36 }, { t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.shape_31 }, { t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-211.2, -212.4, 422.4, 424.9);


	(lib.Interpoler13 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("ABiA4QgSgHgsgVQhjgwgagNQgpgWABgEQACgGA9AVQBXAfAuALQAjAIAQAWQARAWgHAJQgCACgGAAQgIAAgOgFg");
		this.shape.setTransform(68.2605, -73.7047, 1.4407, 1.4407);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("AhpAxQgYgUAehSIBSAfIBrAnQAbALAAAFQgBAEgrgCQg7gCgzALQgfAIgLABIgJABQgLAAgGgFg");
		this.shape_1.setTransform(63.2724, -94.6476, 1.4407, 1.4407);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#FFFFFF").s().p("ABfA5QgDg0gcgZQgIgIgNgFIgjgNQg4gWg0giQA6AfAyAFQAZADAQAHQAhAQANAfQAEAJACApQAAAXgCAUQgCATgCAAQACgUgCgag");
		this.shape_2.setTransform(88.6182, -118.8265, 1.4407, 1.4407);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#6B3F2E").s().p("AAtBRQgXgBgzgLIgpgKQgsgNgngUQghgRACgCQABgBBSAlQBfAkA7gFQAjgCAggSQAdgRAMgZQANgYgDgVQgCgQgKgRIgIgOQACgBAIAGQAKAHAGAJQALATgFAbQgEAVgNAUQgQAZgjAQQgbAMghAAIgKAAg");
		this.shape_3.setTransform(75.4215, -87.1344, 1.4407, 1.4407);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#6B3F2E").s().p("AA+BuQgYgBgNgDQghgGg2gUQgqgPgngTQghgQABgCIAYAJQAiAMAjAKQARAGAtAKQA4AOAXAEQATADAOAAQAbgBALgDQAUgFAJgMIACgCQAOgWgFghQgDgggNgdQgOghgRgNQgPgNgTgFIgRgDIAUACQAYAFASAOQAVAQAKAcQAGARAEAaQADATgDAgQgDAhgHAIQgJAMgWAEQgZAFgbAAIgUgBg");
		this.shape_4.setTransform(81.6216, -114.0249, 1.4407, 1.4407);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#FFFFFF").s().p("AhkAfQgEgGAegZQAigcAmgCQA7gDAsA2IgfgQQglgQgjACQgjACgjAUQgZASgCAAIgBAAg");
		this.shape_5.setTransform(54.3603, -133.7054, 1.4407, 1.4407);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#0A0B2E").s().p("ABGA3QhAgPgzgjQgdgRgbgaQgXgWABgBIAIAGIAXAPIAfAQIA0AYQAKAGAJAIIAQAMQAdAVAlAKQATAEANABQgWAAgggHg");
		this.shape_6.setTransform(75.5662, -138.9602, 1.4407, 1.4407);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#2D1C16").s().p("AgNAgQgSgFgOgLQgOgLgCgIIAAgQQABgKgBgFQANAWASANQAXARARAEQAZAFAbgLQgOAMgRAEQgLADgLAAQgKAAgMgDg");
		this.shape_7.setTransform(115.732, -104.0955, 1.4407, 1.4407);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#FFFFFF").s().p("AgNBAQgXgEgEgLQgEgJARgVQAQgVgDgPQgEgNgMgSIgIgLIgCgFQACgCAiAcQAjAeAFALQAHAPgBAQQgBARgKAIQgGAFgPABIgGAAIgRgBg");
		this.shape_8.setTransform(125.4511, -125.1662, 1.4407, 1.4407);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#2D1C16").s().p("AgMAuIAFgUQAFgSABgMIAAgLQgDgIgKgGIgIgGQAAgBAHAAIAOABQAMgBAMgKQgDAUgHAWQgHASgIARQgIAQgCAAIAAgBg");
		this.shape_9.setTransform(128.0139, -109.926, 1.4407, 1.4407);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#FFFFFF").s().p("AgTAcQgTgYADgXQADgTANgLQgJALgCAOQgDAYATAXQARAXATgCQAHgBAHgGQgJALgKABIgDABQgQAAgRgWg");
		this.shape_10.setTransform(119.5106, -109.5586, 1.4407, 1.4407);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#26170A").s().p("AAkAGIgIgEQgJgCgKgGIgQgLQgGgDgDAAQgJAAgIAMQgIAJgBAMIgBAEIABgJQABgLAIgLQAIgLAJAAQADAAAGADIAQALIATAJQAGACACABQAJAIgBARQgBgNgHgHg");
		this.shape_11.setTransform(120.6016, -113.568, 1.4407, 1.4407);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#BC8568").s().p("AgbAfQgTgYADgXQACgNAHgKQAIgLAJgBQAEAAAFADIARALIASAJQAGADACACQAPANgKAdQgLAfgUACIgDAAQgQAAgRgVg");
		this.shape_12.setTransform(120.6505, -109.8872, 1.4407, 1.4407);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#FFFFFF").s().p("AAagGQgZgKgaAKQgaAHgUAXQARglAjgOQAXgKAWAFQAYAFAMAPQANAQgDAeQgQgfgegJg");
		this.shape_13.setTransform(74.1027, -173.5767, 1.4408, 1.4408);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#F6DCC8").s().p("AAWAyIgUgLQgUgLgcgCQgWgBgDgHQgFgKANgRQAJgMAJgGQAegdAeADQATABAQAMQASANAEAUQAFAXgPAXQgKANgMACIgEABQgGAAgIgFg");
		this.shape_14.setTransform(74.0919, -170.5159, 1.4408, 1.4408);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#BC8568").s().p("AAtCAIg2ghIgogXQgLgIgEgFIgCgFQgJgTAEgbQACgLAIgeQAKgiAFglQADgRAIgFQAUgMAhAPQAiAPAPAdQAIAOgCAXIgGBGQAAATACA3QABAZgIAFIgEAAQgFAAgIgEg");
		this.shape_15.setTransform(70.4039, -152.6517, 1.4408, 1.4408);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#85849E").s().p("AiDCKQAagaAVgaQAfgpAUgvIALAFIAAAAIACAAIABABIAEABIABAAIACAAIAGAAQA0AHAigdQAbgYAGgkQAHglgQgjIAAgBIgCgFIAOgBQAdAxAFA1QAGAkgJAkQgKAqgaAjQgOgcgZgSQgQgLgRgGQgggMgYAJQgPAFgMAPIgjAuQgiAqgmAVIAUgUg");
		this.shape_16.setTransform(57.3597, -34.078, 1.4407, 1.4407);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#141416").s().p("Ag6BQIgFgBQAIgkANggQANgdAHgLQALgTAOgMQAZgSAggCIAEAHQgZAKgKATQgHAOAFAZQAGAagEALQgKAhhCAQg");
		this.shape_17.setTransform(63.207, -44.9868, 1.4408, 1.4408);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#36363C").s().p("AhEBOQAHgkANgfQANgeAHgLQALgTAQgMQAXgSAhgCQATAkgGAoQgGAmgcAYQgbAYgmABIgIAAQgSAAgLgEg");
		this.shape_18.setTransform(64.0084, -44.9028, 1.4408, 1.4408);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#D5D3E3").s().p("Ah1CmQgegFgEgKQgCgGATgRQAegcAUgbQAggqAUgtIAKAFIAFgUQAIgcAGgPQAKgZARgUQAageAZgLQASgIAYgDQAkA/gBBFQgCBEgmA0Qg3BJhoAMQgQACgPAAQgVAAgSgEg");
		this.shape_19.setTransform(57.2898, -32.2767, 1.4408, 1.4408);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#85849E").s().p("AAQDDQAdg1gOhBQgvg+gdhNQgfhRgChZIgDAAIgWALIABgGIA+geIAEgBQAEBWAcBVQAkBsBIBXQhcCDg3AUQAngYAUgog");
		this.shape_20.setTransform(36.1194, -52.191, 1.4408, 1.4408);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#D5D3E3").s().p("AhBEDQgdgLgIhLQgGgwAAiLQAAhpALhtIA9gfIAFAAQADBWAcBUQAlBuBIBWQgtA/gmAnQgxAzgfAAQgGAAgFgBg");
		this.shape_21.setTransform(35.435, -51.9778, 1.4408, 1.4408);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#141416").s().p("Ah1CmQgegGgEgKQgCgEALgLQA1AKA7gRQBKgUAqg4QAigtAFg6QAGg8gYg5IAKgBQAlA+gCBGQgBBEgnA0Qg2BJhpAMQgPACgPAAQgVAAgTgEg");
		this.shape_22.setTransform(56.5244, -30.7875, 1.4408, 1.4408);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#141416").s().p("AgED4QgugQADkAQAChwAIhmIAfgLQgIBpgCBoQgCCZANBBQAJAvAWAIQAJADANgDQgZARgRAAQgGAAgEgCg");
		this.shape_23.setTransform(24.4354, -49.7506, 1.4408, 1.4408);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#985D42").s().p("Ah6ImIgQgcQgVgqACg4QAFhkgBgWQgDgsgRg1QgQg3gFg9QgFhKAFgvQACgTADgUIAFgrQADghAAgvQAAgZAIgRQAFgMANgMQAUgRAXgeIAyhHIAfgpIBMhqQAWgcAXgIQAYgJAUADQgfAUgeAeQgbAagVAfIgnA+QgmA8g3BIQgYAggCAbQgBAXAMAgQAOAkACAtQAAAPgBAnQgBAfACAhQADAuAIAhIANA3QAFAVAFAIQAVAeAvAOQAdAIBPAKQAdAEAXgEQANgCAQgFIAMgDQAAABgLAHIgPAHQgzAahJAFQhBBUggBZIgVA7QgMAcgNABIgBAAQgMAAgNgTg");
		this.shape_24.setTransform(58.3221, -96.2837, 1.4407, 1.4407);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#FFFFFF").s().p("AAhgZQgzgmgeAJIgpASQghAOgOAKQAAgHACgEQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBBIACAWQg2hDgygjg");
		this.shape_25.setTransform(111.9502, -132.712, 1.4407, 1.4407);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#BC8568").s().p("AAbBvQgIgDgCgzQgDg7gRgaQgNgSgNgIQgHgEgNgDQgLgDgFgFQgJgIgDgLQgEgLAFgGQAFgGAQABQATABATAIQAOAFAeARQAfARAIAFQAJAGADAIQADAGgCAJIgGAeQgFAbgDAdQgDATgKANQgOAVgJAAIgCAAg");
		this.shape_26.setTransform(103.747, -119.9289, 1.4407, 1.4407);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#ECC5AF").s().p("AAFCUQgbgKgNgVQgEgIgEgVIgHg7IgDgcIgCgHQgIgQgbgMQgcgNgKgQQgMgWAGgQQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBCQAEAYgEAbQgEAhgMAdQgVAygnALQgKADgLAAQgQAAgRgHg");
		this.shape_27.setTransform(111.9502, -121.525, 1.4407, 1.4407);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#ECC5AF").s().p("Ai4IqQgHgJgLgXQgWgqADg4QAFhmgBgUQgDgrgRg2QgRg3gEg9QgEg0AEhFQABgTAEgUQADgVACgWQADggAAgwQgBgZAIgRQAGgMANgMQAUgRAWgeIAzhHIAfgpIBNhqQAVgcAXgIQAmgNAXANQASAKAJAdQAGATAHA2QAFAhAAAiQAAAZAFAUQAIAbAQAYQAHAOAPAWQAHALgCADQgFALgsgLQgngKgsgUQgngSghgXIAOAMQBCAuBJANIAzAJQAZAGAQAQQAQAQAIAbQAEARADAfQACAigCARQgEAcgRANQgJAHgTACIgGABQATAMAFARQADAMgEAQIgJAXQgYAzhEAUQgTAGgbABQAsAPAMAdQAIARgDAVQgDAVgMANQgQARgmgBQgxgCgTAGQg/AVgqCIIgcBaQgPAogSAAQgLAAgMgPg");
		this.shape_28.setTransform(68.3514, -96.2617, 1.4407, 1.4407);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#0A0B2E").s().p("AqSM3IgPgPQCJh6BmiRQBChdA1hyQBJicAZgtQBAh0BchjQDJjdAOgRQDdkHC0k6QBtCHAKChQAGBqgpBpQgXA8g0BTQgqBCg4A1QheBagSATQhCBIgrBLQgcAxgkBZQgqBmgaA1QgxBhhIBkQiXDPhxArQg8AYhSAFIgdABQiDAAhUhLg");
		this.shape_29.setTransform(-20.205, 49.0768, 1.4407, 1.4407);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#16065A").s().p("Aq2JZQgJgFAohRQAqhUA4hTQAthBA1hAQA6hEBBg+ICIh6QCbiOAugtQBKhIAiguQBGhpAcgmQAsg9A7gcQAjgRAmgIQBGgOA9AVQBtAmA4CHQAWA1ADAuQADAtgRANQgNALgcgPIg/gmQhmg+hRAOQg5AKgzAuQgSAQhBBOQhSBhhZBAQgzAlhpA4QhpA4g8ArQhiBGhgBsQhIBQhPBwQg2BNgGAAIgBgBg");
		this.shape_30.setTransform(-25.9948, -1.2443, 1.4408, 1.4408);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#16065A").s().p("ApjNPQhahQgQiVQgJhRAQh7QASiRBNiIQAwhUBuiHQBchzBkhVQA1gsBrhLQBZg+AqgrQBBhAAuheQAeg8ATgdQAthBA8gnQAsgdAvgQQBZgdBJAcQBiAmAvCHQAaBKAFBTQAHBqgpBpQgYA8g0BTQgpBDg4A0QhhBcgPAQQhDBJgrBLQgbAxglBaQgpBlgbA1QgxBhhIBkQiXDQhxArQhBAYhMAEIgdABQiDAAhUhLg");
		this.shape_31.setTransform(-27.7899, 44.7583, 1.4408, 1.4408);

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#6B3F2E").s().p("ABiA4QgSgHgsgVQhjgwgagNQgpgWABgEQACgGA9AVQBXAfAuALQAjAIAQAWQARAWgHAJQgCACgGAAQgIAAgOgFg");
		this.shape_32.setTransform(68.2059, -73.7884, 1.4404, 1.4404);

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#6B3F2E").s().p("AhpAxQgYgUAehSIBSAfIBrAnQAbALAAAFQgBAEgrgCQg7gCgzALQgfAIgLABIgJABQgLAAgGgFg");
		this.shape_33.setTransform(63.2188, -94.7269, 1.4404, 1.4404);

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#6B3F2E").s().p("ABfA5QgDg0gcgZQgIgIgNgFIgjgNQg4gWg0giQA6AfAyAFQAZADAQAHQAhAQANAfQAEAJACApQAAAXgCAUQgCATgCAAQACgUgCgag");
		this.shape_34.setTransform(88.5593, -118.9007, 1.4404, 1.4404);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#6B3F2E").s().p("AAtBRQgXgBgzgLIgpgKQgsgNgngUQghgRACgCQABgBBSAlQBfAkA7gFQAjgCAggSQAdgRAMgZQANgYgDgVQgCgQgKgRIgIgOQACgBAIAGQAKAHAGAJQALATgFAbQgEAVgNAUQgQAZgjAQQgbAMghAAIgKAAg");
		this.shape_35.setTransform(75.3485, -87.2395, 1.4403, 1.4403);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#6B3F2E").s().p("AAtBRQgXgBgzgLIgpgKQgsgNgngUQghgRACgCQABgBBSAlQBfAkA7gFQAjgCAggSQAdgRAMgZQANgYgDgVQgCgQgKgRIgIgOQACgBAIAGQAKAHAGAJQALATgFAbQgEAVgNAUQgQAZgjAQQgbAMghAAIgKAAg");
		this.shape_36.setTransform(75.3485, -87.2395, 1.4403, 1.4403);

		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#6B3F2E").s().p("AA+BuQgYgBgNgDQghgGg2gUQgqgPgngTQghgQABgCIAYAJQAiAMAjAKQARAGAtAKQA4AOAXAEQATADAOAAQAbgBALgDQAUgFAJgMIACgCQAOgWgFghQgDgggNgdQgOghgRgNQgPgNgTgFIgRgDIAUACQAYAFASAOQAVAQAKAcQAGARAEAaQADATgDAgQgDAhgHAIQgJAMgWAEQgZAFgbAAIgUgBg");
		this.shape_37.setTransform(81.5642, -114.1, 1.4404, 1.4404);

		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#6B3F2E").s().p("AhkAfQgEgGAegZQAigcAmgCQA7gDAsA2IgfgQQglgQgjACQgjACgjAUQgZASgCAAIgBAAg");
		this.shape_38.setTransform(54.3086, -133.7764, 1.4404, 1.4404);

		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#6B3F2E").s().p("ABGA3QhAgPgzgjQgdgRgbgaQgXgWABgBIAIAGIAXAPIAfAQIA0AYQAKAGAJAIIAQAMQAdAVAlAKQATAEANABQgWAAgggHg");
		this.shape_39.setTransform(75.51, -139.0301, 1.4404, 1.4404);

		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#6B3F2E").s().p("AgNAgQgSgFgOgLQgOgLgCgIIAAgQQABgKgBgFQANAWASANQAXARARAEQAZAFAbgLQgOAMgRAEQgLADgLAAQgKAAgMgDg");
		this.shape_40.setTransform(115.648, -104.196, 1.4403, 1.4403);

		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#6B3F2E").s().p("AgNAgQgSgFgOgLQgOgLgCgIIAAgQQABgKgBgFQANAWASANQAXARARAEQAZAFAbgLQgOAMgRAEQgLADgLAAQgKAAgMgDg");
		this.shape_41.setTransform(115.648, -104.196, 1.4403, 1.4403);

		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f("#6B3F2E").s().p("AgNBAQgXgEgEgLQgEgJARgVQAQgVgDgPQgEgNgMgSIgIgLIgCgFQACgCAiAcQAjAeAFALQAHAPgBAQQgBARgKAIQgGAFgPABIgGAAIgRgBg");
		this.shape_42.setTransform(125.3644, -125.2608, 1.4403, 1.4403);

		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f("#6B3F2E").s().p("AgNBAQgXgEgEgLQgEgJARgVQAQgVgDgPQgEgNgMgSIgIgLIgCgFQACgCAiAcQAjAeAFALQAHAPgBAQQgBARgKAIQgGAFgPABIgGAAIgRgBg");
		this.shape_43.setTransform(125.3644, -125.2608, 1.4403, 1.4403);

		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.f("#6B3F2E").s().p("AgMAuIAFgUQAFgSABgMIAAgLQgDgIgKgGIgIgGQAAgBAHAAIAOABQAMgBAMgKQgDAUgHAWQgHASgIARQgIAQgCAAIAAgBg");
		this.shape_44.setTransform(127.9466, -110.0021, 1.4404, 1.4404);

		this.shape_45 = new cjs.Shape();
		this.shape_45.graphics.f("#6B3F2E").s().p("AgTAcQgTgYADgXQADgTANgLQgJALgCAOQgDAYATAXQARAXATgCQAHgBAHgGQgJALgKABIgDABQgQAAgRgWg");
		this.shape_45.setTransform(119.4452, -109.6347, 1.4404, 1.4404);

		this.shape_46 = new cjs.Shape();
		this.shape_46.graphics.f("#6B3F2E").s().p("AAkAGIgIgEQgJgCgKgGIgQgLQgGgDgDAAQgJAAgIAMQgIAJgBAMIgBAEIABgJQABgLAIgLQAIgLAJAAQADAAAGADIAQALIATAJQAGACACABQAJAIgBARQgBgNgHgHg");
		this.shape_46.setTransform(120.5161, -113.6659, 1.4403, 1.4403);

		this.shape_47 = new cjs.Shape();
		this.shape_47.graphics.f("#6B3F2E").s().p("AAkAGIgIgEQgJgCgKgGIgQgLQgGgDgDAAQgJAAgIAMQgIAJgBAMIgBAEIABgJQABgLAIgLQAIgLAJAAQADAAAGADIAQALIATAJQAGACACABQAJAIgBARQgBgNgHgHg");
		this.shape_47.setTransform(120.5161, -113.6659, 1.4403, 1.4403);

		this.shape_48 = new cjs.Shape();
		this.shape_48.graphics.f("#6B3F2E").s().p("AgbAfQgTgYADgXQACgNAHgKQAIgLAJgBQAEAAAFADIARALIASAJQAGADACACQAPANgKAdQgLAfgUACIgDAAQgQAAgRgVg");
		this.shape_48.setTransform(120.565, -109.9861, 1.4403, 1.4403);

		this.shape_49 = new cjs.Shape();
		this.shape_49.graphics.f("#6B3F2E").s().p("AgbAfQgTgYADgXQACgNAHgKQAIgLAJgBQAEAAAFADIARALIASAJQAGADACACQAPANgKAdQgLAfgUACIgDAAQgQAAgRgVg");
		this.shape_49.setTransform(120.565, -109.9861, 1.4403, 1.4403);

		this.shape_50 = new cjs.Shape();
		this.shape_50.graphics.f("#6B3F2E").s().p("AAagGQgZgKgaAKQgaAHgUAXQARglAjgOQAXgKAWAFQAYAFAMAPQANAQgDAeQgQgfgegJg");
		this.shape_50.setTransform(74.0496, -173.6362, 1.4405, 1.4405);

		this.shape_51 = new cjs.Shape();
		this.shape_51.graphics.f("#6B3F2E").s().p("AAWAyIgUgLQgUgLgcgCQgWgBgDgHQgFgKANgRQAJgMAJgGQAegdAeADQATABAQAMQASANAEAUQAFAXgPAXQgKANgMACIgEABQgGAAgIgFg");
		this.shape_51.setTransform(74.0389, -170.576, 1.4405, 1.4405);

		this.shape_52 = new cjs.Shape();
		this.shape_52.graphics.f("#6B3F2E").s().p("AAtCAIg2ghIgogXQgLgIgEgFIgCgFQgJgTAEgbQACgLAIgeQAKgiAFglQADgRAIgFQAUgMAhAPQAiAPAPAdQAIAOgCAXIgGBGQAAATACA3QABAZgIAFIgEAAQgFAAgIgEg");
		this.shape_52.setTransform(70.3241, -152.7488, 1.4404, 1.4404);

		this.shape_53 = new cjs.Shape();
		this.shape_53.graphics.f("#6B3F2E").s().p("AAtCAIg2ghIgogXQgLgIgEgFIgCgFQgJgTAEgbQACgLAIgeQAKgiAFglQADgRAIgFQAUgMAhAPQAiAPAPAdQAIAOgCAXIgGBGQAAATACA3QABAZgIAFIgEAAQgFAAgIgEg");
		this.shape_53.setTransform(70.3241, -152.7488, 1.4404, 1.4404);

		this.shape_54 = new cjs.Shape();
		this.shape_54.graphics.f("#6B3F2E").s().p("AiDCKQAagaAVgaQAfgpAUgvIALAFIAAAAIACAAIABABIAEABIABAAIACAAIAGAAQA0AHAigdQAbgYAGgkQAHglgQgjIAAgBIgCgFIAOgBQAdAxAFA1QAGAkgJAkQgKAqgaAjQgOgcgZgSQgQgLgRgGQgggMgYAJQgPAFgMAPIgjAuQgiAqgmAVIAUgUg");
		this.shape_54.setTransform(57.3074, -34.1701, 1.4404, 1.4404);

		this.shape_55 = new cjs.Shape();
		this.shape_55.graphics.f("#6B3F2E").s().p("Ag6BQIgFgBQAIgkANggQANgdAHgLQALgTAOgMQAZgSAggCIAEAHQgZAKgKATQgHAOAFAZQAGAagEALQgKAhhCAQg");
		this.shape_55.setTransform(63.1561, -45.0721, 1.4405, 1.4405);

		this.shape_56 = new cjs.Shape();
		this.shape_56.graphics.f("#6B3F2E").s().p("AhEBOQAHgkANgfQANgeAHgLQALgTAQgMQAXgSAhgCQATAkgGAoQgGAmgcAYQgbAYgmABIgIAAQgSAAgLgEg");
		this.shape_56.setTransform(63.9574, -44.9881, 1.4405, 1.4405);

		this.shape_57 = new cjs.Shape();
		this.shape_57.graphics.f("#6B3F2E").s().p("Ah1CmQgegFgEgKQgCgGATgRQAegcAUgbQAggqAUgtIAKAFIAFgUQAIgcAGgPQAKgZARgUQAageAZgLQASgIAYgDQAkA/gBBFQgCBEgmA0Qg3BJhoAMQgQACgPAAQgVAAgSgEg");
		this.shape_57.setTransform(57.2401, -32.3645, 1.4405, 1.4405);

		this.shape_58 = new cjs.Shape();
		this.shape_58.graphics.f("#6B3F2E").s().p("AAQDDQAdg1gOhBQgvg+gdhNQgfhRgChZIgDAAIgWALIABgGIA+geIAEgBQAEBWAcBVQAkBsBIBXQhcCDg3AUQAngYAUgog");
		this.shape_58.setTransform(36.074, -52.2748, 1.4405, 1.4405);

		this.shape_59 = new cjs.Shape();
		this.shape_59.graphics.f("#6B3F2E").s().p("AhBEDQgdgLgIhLQgGgwAAiLQAAhpALhtIA9gfIAFAAQADBWAcBUQAlBuBIBWQgtA/gmAnQgxAzgfAAQgGAAgFgBg");
		this.shape_59.setTransform(35.3898, -52.0617, 1.4405, 1.4405);

		this.shape_60 = new cjs.Shape();
		this.shape_60.graphics.f("#6B3F2E").s().p("Ah1CmQgegGgEgKQgCgEALgLQA1AKA7gRQBKgUAqg4QAigtAFg6QAGg8gYg5IAKgBQAlA+gCBGQgBBEgnA0Qg2BJhpAMQgPACgPAAQgVAAgTgEg");
		this.shape_60.setTransform(56.4749, -30.8756, 1.4405, 1.4405);

		this.shape_61 = new cjs.Shape();
		this.shape_61.graphics.f("#6B3F2E").s().p("AgED4QgugQADkAQAChwAIhmIAfgLQgIBpgCBoQgCCZANBBQAJAvAWAIQAJADANgDQgZARgRAAQgGAAgEgCg");
		this.shape_61.setTransform(24.3923, -49.8349, 1.4405, 1.4405);

		this.shape_62 = new cjs.Shape();
		this.shape_62.graphics.f("#6B3F2E").s().p("Ah6ImIgQgcQgVgqACg4QAFhkgBgWQgDgsgRg1QgQg3gFg9QgFhKAFgvQACgTADgUIAFgrQADghAAgvQAAgZAIgRQAFgMANgMQAUgRAXgeIAyhHIAfgpIBMhqQAWgcAXgIQAYgJAUADQgfAUgeAeQgbAagVAfIgnA+QgmA8g3BIQgYAggCAbQgBAXAMAgQAOAkACAtQAAAPgBAnQgBAfACAhQADAuAIAhIANA3QAFAVAFAIQAVAeAvAOQAdAIBPAKQAdAEAXgEQANgCAQgFIAMgDQAAABgLAHIgPAHQgzAahJAFQhBBUggBZIgVA7QgMAcgNABIgBAAQgMAAgNgTg");
		this.shape_62.setTransform(58.2197, -96.4377, 1.4401, 1.4401);

		this.shape_63 = new cjs.Shape();
		this.shape_63.graphics.f("#6B3F2E").s().p("Ah6ImIgQgcQgVgqACg4QAFhkgBgWQgDgsgRg1QgQg3gFg9QgFhKAFgvQACgTADgUIAFgrQADghAAgvQAAgZAIgRQAFgMANgMQAUgRAXgeIAyhHIAfgpIBMhqQAWgcAXgIQAYgJAUADQgfAUgeAeQgbAagVAfIgnA+QgmA8g3BIQgYAggCAbQgBAXAMAgQAOAkACAtQAAAPgBAnQgBAfACAhQADAuAIAhIANA3QAFAVAFAIQAVAeAvAOQAdAIBPAKQAdAEAXgEQANgCAQgFIAMgDQAAABgLAHIgPAHQgzAahJAFQhBBUggBZIgVA7QgMAcgNABIgBAAQgMAAgNgTg");
		this.shape_63.setTransform(58.2197, -96.4377, 1.4401, 1.4401);

		this.shape_64 = new cjs.Shape();
		this.shape_64.graphics.f("#6B3F2E").s().p("Ah6ImIgQgcQgVgqACg4QAFhkgBgWQgDgsgRg1QgQg3gFg9QgFhKAFgvQACgTADgUIAFgrQADghAAgvQAAgZAIgRQAFgMANgMQAUgRAXgeIAyhHIAfgpIBMhqQAWgcAXgIQAYgJAUADQgfAUgeAeQgbAagVAfIgnA+QgmA8g3BIQgYAggCAbQgBAXAMAgQAOAkACAtQAAAPgBAnQgBAfACAhQADAuAIAhIANA3QAFAVAFAIQAVAeAvAOQAdAIBPAKQAdAEAXgEQANgCAQgFIAMgDQAAABgLAHIgPAHQgzAahJAFQhBBUggBZIgVA7QgMAcgNABIgBAAQgMAAgNgTg");
		this.shape_64.setTransform(58.2197, -96.4377, 1.4401, 1.4401);

		this.shape_65 = new cjs.Shape();
		this.shape_65.graphics.f("#6B3F2E").s().p("Ah6ImIgQgcQgVgqACg4QAFhkgBgWQgDgsgRg1QgQg3gFg9QgFhKAFgvQACgTADgUIAFgrQADghAAgvQAAgZAIgRQAFgMANgMQAUgRAXgeIAyhHIAfgpIBMhqQAWgcAXgIQAYgJAUADQgfAUgeAeQgbAagVAfIgnA+QgmA8g3BIQgYAggCAbQgBAXAMAgQAOAkACAtQAAAPgBAnQgBAfACAhQADAuAIAhIANA3QAFAVAFAIQAVAeAvAOQAdAIBPAKQAdAEAXgEQANgCAQgFIAMgDQAAABgLAHIgPAHQgzAahJAFQhBBUggBZIgVA7QgMAcgNABIgBAAQgMAAgNgTg");
		this.shape_65.setTransform(58.2197, -96.4377, 1.4401, 1.4401);

		this.shape_66 = new cjs.Shape();
		this.shape_66.graphics.f("#6B3F2E").s().p("Ah6ImIgQgcQgVgqACg4QAFhkgBgWQgDgsgRg1QgQg3gFg9QgFhKAFgvQACgTADgUIAFgrQADghAAgvQAAgZAIgRQAFgMANgMQAUgRAXgeIAyhHIAfgpIBMhqQAWgcAXgIQAYgJAUADQgfAUgeAeQgbAagVAfIgnA+QgmA8g3BIQgYAggCAbQgBAXAMAgQAOAkACAtQAAAPgBAnQgBAfACAhQADAuAIAhIANA3QAFAVAFAIQAVAeAvAOQAdAIBPAKQAdAEAXgEQANgCAQgFIAMgDQAAABgLAHIgPAHQgzAahJAFQhBBUggBZIgVA7QgMAcgNABIgBAAQgMAAgNgTg");
		this.shape_66.setTransform(58.2197, -96.4377, 1.4401, 1.4401);

		this.shape_67 = new cjs.Shape();
		this.shape_67.graphics.f("#6B3F2E").s().p("Ah6ImIgQgcQgVgqACg4QAFhkgBgWQgDgsgRg1QgQg3gFg9QgFhKAFgvQACgTADgUIAFgrQADghAAgvQAAgZAIgRQAFgMANgMQAUgRAXgeIAyhHIAfgpIBMhqQAWgcAXgIQAYgJAUADQgfAUgeAeQgbAagVAfIgnA+QgmA8g3BIQgYAggCAbQgBAXAMAgQAOAkACAtQAAAPgBAnQgBAfACAhQADAuAIAhIANA3QAFAVAFAIQAVAeAvAOQAdAIBPAKQAdAEAXgEQANgCAQgFIAMgDQAAABgLAHIgPAHQgzAahJAFQhBBUggBZIgVA7QgMAcgNABIgBAAQgMAAgNgTg");
		this.shape_67.setTransform(58.2197, -96.4377, 1.4401, 1.4401);

		this.shape_68 = new cjs.Shape();
		this.shape_68.graphics.f("#6B3F2E").s().p("AAhgZQgzgmgeAJIgpASQghAOgOAKQAAgHACgEQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBBIACAWQg2hDgygjg");
		this.shape_68.setTransform(111.8257, -132.8508, 1.4401, 1.4401);

		this.shape_69 = new cjs.Shape();
		this.shape_69.graphics.f("#6B3F2E").s().p("AAhgZQgzgmgeAJIgpASQghAOgOAKQAAgHACgEQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBBIACAWQg2hDgygjg");
		this.shape_69.setTransform(111.8257, -132.8508, 1.4401, 1.4401);

		this.shape_70 = new cjs.Shape();
		this.shape_70.graphics.f("#6B3F2E").s().p("AAbBvQgIgDgCgzQgDg7gRgaQgNgSgNgIQgHgEgNgDQgLgDgFgFQgJgIgDgLQgEgLAFgGQAFgGAQABQATABATAIQAOAFAeARQAfARAIAFQAJAGADAIQADAGgCAJIgGAeQgFAbgDAdQgDATgKANQgOAVgJAAIgCAAg");
		this.shape_70.setTransform(103.6259, -120.0731, 1.4401, 1.4401);

		this.shape_71 = new cjs.Shape();
		this.shape_71.graphics.f("#6B3F2E").s().p("AAbBvQgIgDgCgzQgDg7gRgaQgNgSgNgIQgHgEgNgDQgLgDgFgFQgJgIgDgLQgEgLAFgGQAFgGAQABQATABATAIQAOAFAeARQAfARAIAFQAJAGADAIQADAGgCAJIgGAeQgFAbgDAdQgDATgKANQgOAVgJAAIgCAAg");
		this.shape_71.setTransform(103.6259, -120.0731, 1.4401, 1.4401);

		this.shape_72 = new cjs.Shape();
		this.shape_72.graphics.f("#6B3F2E").s().p("AAFCUQgbgKgNgVQgEgIgEgVIgHg7IgDgcIgCgHQgIgQgbgMQgcgNgKgQQgMgWAGgQQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBCQAEAYgEAbQgEAhgMAdQgVAygnALQgKADgLAAQgQAAgRgHg");
		this.shape_72.setTransform(111.8257, -121.6685, 1.4401, 1.4401);

		this.shape_73 = new cjs.Shape();
		this.shape_73.graphics.f("#6B3F2E").s().p("AAFCUQgbgKgNgVQgEgIgEgVIgHg7IgDgcIgCgHQgIgQgbgMQgcgNgKgQQgMgWAGgQQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBCQAEAYgEAbQgEAhgMAdQgVAygnALQgKADgLAAQgQAAgRgHg");
		this.shape_73.setTransform(111.8257, -121.6685, 1.4401, 1.4401);

		this.shape_74 = new cjs.Shape();
		this.shape_74.graphics.f("#6B3F2E").s().p("Ai4IqQgHgJgLgXQgWgqADg4QAFhmgBgUQgDgrgRg2QgRg3gEg9QgEg0AEhFQABgTAEgUQADgVACgWQADggAAgwQgBgZAIgRQAGgMANgMQAUgRAWgeIAzhHIAfgpIBNhqQAVgcAXgIQAmgNAXANQASAKAJAdQAGATAHA2QAFAhAAAiQAAAZAFAUQAIAbAQAYQAHAOAPAWQAHALgCADQgFALgsgLQgngKgsgUQgngSghgXIAOAMQBCAuBJANIAzAJQAZAGAQAQQAQAQAIAbQAEARADAfQACAigCARQgEAcgRANQgJAHgTACIgGABQATAMAFARQADAMgEAQIgJAXQgYAzhEAUQgTAGgbABQAsAPAMAdQAIARgDAVQgDAVgMANQgQARgmgBQgxgCgTAGQg/AVgqCIIgcBaQgPAogSAAQgLAAgMgPg");
		this.shape_74.setTransform(68.2448, -96.4157, 1.4401, 1.4401);

		this.shape_75 = new cjs.Shape();
		this.shape_75.graphics.f("#6B3F2E").s().p("Ai4IqQgHgJgLgXQgWgqADg4QAFhmgBgUQgDgrgRg2QgRg3gEg9QgEg0AEhFQABgTAEgUQADgVACgWQADggAAgwQgBgZAIgRQAGgMANgMQAUgRAWgeIAzhHIAfgpIBNhqQAVgcAXgIQAmgNAXANQASAKAJAdQAGATAHA2QAFAhAAAiQAAAZAFAUQAIAbAQAYQAHAOAPAWQAHALgCADQgFALgsgLQgngKgsgUQgngSghgXIAOAMQBCAuBJANIAzAJQAZAGAQAQQAQAQAIAbQAEARADAfQACAigCARQgEAcgRANQgJAHgTACIgGABQATAMAFARQADAMgEAQIgJAXQgYAzhEAUQgTAGgbABQAsAPAMAdQAIARgDAVQgDAVgMANQgQARgmgBQgxgCgTAGQg/AVgqCIIgcBaQgPAogSAAQgLAAgMgPg");
		this.shape_75.setTransform(68.2448, -96.4157, 1.4401, 1.4401);

		this.shape_76 = new cjs.Shape();
		this.shape_76.graphics.f("#6B3F2E").s().p("AAhgZQgzgmgeAJIgpASQghAOgOAKQAAgHACgEQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBBIACAWQg2hDgygjg");
		this.shape_76.setTransform(111.8257, -132.8508, 1.4401, 1.4401);

		this.shape_77 = new cjs.Shape();
		this.shape_77.graphics.f("#6B3F2E").s().p("AAhgZQgzgmgeAJIgpASQghAOgOAKQAAgHACgEQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBBIACAWQg2hDgygjg");
		this.shape_77.setTransform(111.8257, -132.8508, 1.4401, 1.4401);

		this.shape_78 = new cjs.Shape();
		this.shape_78.graphics.f("#6B3F2E").s().p("AAbBvQgIgDgCgzQgDg7gRgaQgNgSgNgIQgHgEgNgDQgLgDgFgFQgJgIgDgLQgEgLAFgGQAFgGAQABQATABATAIQAOAFAeARQAfARAIAFQAJAGADAIQADAGgCAJIgGAeQgFAbgDAdQgDATgKANQgOAVgJAAIgCAAg");
		this.shape_78.setTransform(103.6259, -120.0731, 1.4401, 1.4401);

		this.shape_79 = new cjs.Shape();
		this.shape_79.graphics.f("#6B3F2E").s().p("AAbBvQgIgDgCgzQgDg7gRgaQgNgSgNgIQgHgEgNgDQgLgDgFgFQgJgIgDgLQgEgLAFgGQAFgGAQABQATABATAIQAOAFAeARQAfARAIAFQAJAGADAIQADAGgCAJIgGAeQgFAbgDAdQgDATgKANQgOAVgJAAIgCAAg");
		this.shape_79.setTransform(103.6259, -120.0731, 1.4401, 1.4401);

		this.shape_80 = new cjs.Shape();
		this.shape_80.graphics.f("#6B3F2E").s().p("AAFCUQgbgKgNgVQgEgIgEgVIgHg7IgDgcIgCgHQgIgQgbgMQgcgNgKgQQgMgWAGgQQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBCQAEAYgEAbQgEAhgMAdQgVAygnALQgKADgLAAQgQAAgRgHg");
		this.shape_80.setTransform(111.8257, -121.6685, 1.4401, 1.4401);

		this.shape_81 = new cjs.Shape();
		this.shape_81.graphics.f("#6B3F2E").s().p("AAFCUQgbgKgNgVQgEgIgEgVIgHg7IgDgcIgCgHQgIgQgbgMQgcgNgKgQQgMgWAGgQQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBCQAEAYgEAbQgEAhgMAdQgVAygnALQgKADgLAAQgQAAgRgHg");
		this.shape_81.setTransform(111.8257, -121.6685, 1.4401, 1.4401);

		this.shape_82 = new cjs.Shape();
		this.shape_82.graphics.f("#6B3F2E").s().p("Ai4IqQgHgJgLgXQgWgqADg4QAFhmgBgUQgDgrgRg2QgRg3gEg9QgEg0AEhFQABgTAEgUQADgVACgWQADggAAgwQgBgZAIgRQAGgMANgMQAUgRAWgeIAzhHIAfgpIBNhqQAVgcAXgIQAmgNAXANQASAKAJAdQAGATAHA2QAFAhAAAiQAAAZAFAUQAIAbAQAYQAHAOAPAWQAHALgCADQgFALgsgLQgngKgsgUQgngSghgXIAOAMQBCAuBJANIAzAJQAZAGAQAQQAQAQAIAbQAEARADAfQACAigCARQgEAcgRANQgJAHgTACIgGABQATAMAFARQADAMgEAQIgJAXQgYAzhEAUQgTAGgbABQAsAPAMAdQAIARgDAVQgDAVgMANQgQARgmgBQgxgCgTAGQg/AVgqCIIgcBaQgPAogSAAQgLAAgMgPg");
		this.shape_82.setTransform(68.2448, -96.4157, 1.4401, 1.4401);

		this.shape_83 = new cjs.Shape();
		this.shape_83.graphics.f("#6B3F2E").s().p("Ai4IqQgHgJgLgXQgWgqADg4QAFhmgBgUQgDgrgRg2QgRg3gEg9QgEg0AEhFQABgTAEgUQADgVACgWQADggAAgwQgBgZAIgRQAGgMANgMQAUgRAWgeIAzhHIAfgpIBNhqQAVgcAXgIQAmgNAXANQASAKAJAdQAGATAHA2QAFAhAAAiQAAAZAFAUQAIAbAQAYQAHAOAPAWQAHALgCADQgFALgsgLQgngKgsgUQgngSghgXIAOAMQBCAuBJANIAzAJQAZAGAQAQQAQAQAIAbQAEARADAfQACAigCARQgEAcgRANQgJAHgTACIgGABQATAMAFARQADAMgEAQIgJAXQgYAzhEAUQgTAGgbABQAsAPAMAdQAIARgDAVQgDAVgMANQgQARgmgBQgxgCgTAGQg/AVgqCIIgcBaQgPAogSAAQgLAAgMgPg");
		this.shape_83.setTransform(68.2448, -96.4157, 1.4401, 1.4401);

		this.shape_84 = new cjs.Shape();
		this.shape_84.graphics.f("#6B3F2E").s().p("AAhgZQgzgmgeAJIgpASQghAOgOAKQAAgHACgEQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBBIACAWQg2hDgygjg");
		this.shape_84.setTransform(111.8257, -132.8508, 1.4401, 1.4401);

		this.shape_85 = new cjs.Shape();
		this.shape_85.graphics.f("#6B3F2E").s().p("AAhgZQgzgmgeAJIgpASQghAOgOAKQAAgHACgEQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBBIACAWQg2hDgygjg");
		this.shape_85.setTransform(111.8257, -132.8508, 1.4401, 1.4401);

		this.shape_86 = new cjs.Shape();
		this.shape_86.graphics.f("#6B3F2E").s().p("AAbBvQgIgDgCgzQgDg7gRgaQgNgSgNgIQgHgEgNgDQgLgDgFgFQgJgIgDgLQgEgLAFgGQAFgGAQABQATABATAIQAOAFAeARQAfARAIAFQAJAGADAIQADAGgCAJIgGAeQgFAbgDAdQgDATgKANQgOAVgJAAIgCAAg");
		this.shape_86.setTransform(103.6259, -120.0731, 1.4401, 1.4401);

		this.shape_87 = new cjs.Shape();
		this.shape_87.graphics.f("#6B3F2E").s().p("AAbBvQgIgDgCgzQgDg7gRgaQgNgSgNgIQgHgEgNgDQgLgDgFgFQgJgIgDgLQgEgLAFgGQAFgGAQABQATABATAIQAOAFAeARQAfARAIAFQAJAGADAIQADAGgCAJIgGAeQgFAbgDAdQgDATgKANQgOAVgJAAIgCAAg");
		this.shape_87.setTransform(103.6259, -120.0731, 1.4401, 1.4401);

		this.shape_88 = new cjs.Shape();
		this.shape_88.graphics.f("#6B3F2E").s().p("AAFCUQgbgKgNgVQgEgIgEgVIgHg7IgDgcIgCgHQgIgQgbgMQgcgNgKgQQgMgWAGgQQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBCQAEAYgEAbQgEAhgMAdQgVAygnALQgKADgLAAQgQAAgRgHg");
		this.shape_88.setTransform(111.8257, -121.6685, 1.4401, 1.4401);

		this.shape_89 = new cjs.Shape();
		this.shape_89.graphics.f("#6B3F2E").s().p("AAFCUQgbgKgNgVQgEgIgEgVIgHg7IgDgcIgCgHQgIgQgbgMQgcgNgKgQQgMgWAGgQQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBCQAEAYgEAbQgEAhgMAdQgVAygnALQgKADgLAAQgQAAgRgHg");
		this.shape_89.setTransform(111.8257, -121.6685, 1.4401, 1.4401);

		this.shape_90 = new cjs.Shape();
		this.shape_90.graphics.f("#6B3F2E").s().p("Ai4IqQgHgJgLgXQgWgqADg4QAFhmgBgUQgDgrgRg2QgRg3gEg9QgEg0AEhFQABgTAEgUQADgVACgWQADggAAgwQgBgZAIgRQAGgMANgMQAUgRAWgeIAzhHIAfgpIBNhqQAVgcAXgIQAmgNAXANQASAKAJAdQAGATAHA2QAFAhAAAiQAAAZAFAUQAIAbAQAYQAHAOAPAWQAHALgCADQgFALgsgLQgngKgsgUQgngSghgXIAOAMQBCAuBJANIAzAJQAZAGAQAQQAQAQAIAbQAEARADAfQACAigCARQgEAcgRANQgJAHgTACIgGABQATAMAFARQADAMgEAQIgJAXQgYAzhEAUQgTAGgbABQAsAPAMAdQAIARgDAVQgDAVgMANQgQARgmgBQgxgCgTAGQg/AVgqCIIgcBaQgPAogSAAQgLAAgMgPg");
		this.shape_90.setTransform(68.2448, -96.4157, 1.4401, 1.4401);

		this.shape_91 = new cjs.Shape();
		this.shape_91.graphics.f("#6B3F2E").s().p("Ai4IqQgHgJgLgXQgWgqADg4QAFhmgBgUQgDgrgRg2QgRg3gEg9QgEg0AEhFQABgTAEgUQADgVACgWQADggAAgwQgBgZAIgRQAGgMANgMQAUgRAWgeIAzhHIAfgpIBNhqQAVgcAXgIQAmgNAXANQASAKAJAdQAGATAHA2QAFAhAAAiQAAAZAFAUQAIAbAQAYQAHAOAPAWQAHALgCADQgFALgsgLQgngKgsgUQgngSghgXIAOAMQBCAuBJANIAzAJQAZAGAQAQQAQAQAIAbQAEARADAfQACAigCARQgEAcgRANQgJAHgTACIgGABQATAMAFARQADAMgEAQIgJAXQgYAzhEAUQgTAGgbABQAsAPAMAdQAIARgDAVQgDAVgMANQgQARgmgBQgxgCgTAGQg/AVgqCIIgcBaQgPAogSAAQgLAAgMgPg");
		this.shape_91.setTransform(68.2448, -96.4157, 1.4401, 1.4401);

		this.shape_92 = new cjs.Shape();
		this.shape_92.graphics.f("#6B3F2E").s().p("AqSM3IgPgPQCJh6BmiRQBChdA1hyQBJicAZgtQBAh0BchjQDJjdAOgRQDdkHC0k6QBtCHAKChQAGBqgpBpQgXA8g0BTQgqBCg4A1QheBagSATQhCBIgrBLQgcAxgkBZQgqBmgaA1QgxBhhIBkQiXDPhxArQg8AYhSAFIgdABQiDAAhUhLg");
		this.shape_92.setTransform(-20.2408, 48.9671, 1.4404, 1.4404);

		this.shape_93 = new cjs.Shape();
		this.shape_93.graphics.f("#6B3F2E").s().p("Aq2JZQgJgFAohRQAqhUA4hTQAthBA1hAQA6hEBBg+ICIh6QCbiOAugtQBKhIAiguQBGhpAcgmQAsg9A7gcQAjgRAmgIQBGgOA9AVQBtAmA4CHQAWA1ADAuQADAtgRANQgNALgcgPIg/gmQhmg+hRAOQg5AKgzAuQgSAQhBBOQhSBhhZBAQgzAlhpA4QhpA4g8ArQhiBGhgBsQhIBQhPBwQg2BNgGAAIgBgBg");
		this.shape_93.setTransform(-26.0277, -1.3384, 1.4405, 1.4405);

		this.shape_94 = new cjs.Shape();
		this.shape_94.graphics.f("#6B3F2E").s().p("ApjNPQhahQgQiVQgJhRAQh7QASiRBNiIQAwhUBuiHQBchzBkhVQA1gsBrhLQBZg+AqgrQBBhAAuheQAeg8ATgdQAthBA8gnQAsgdAvgQQBZgdBJAcQBiAmAvCHQAaBKAFBTQAHBqgpBpQgYA8g0BTQgpBDg4A0QhhBcgPAQQhDBJgrBLQgbAxglBaQgpBlgbA1QgxBhhIBkQiXDQhxArQhBAYhMAEIgdABQiDAAhUhLg");
		this.shape_94.setTransform(-27.8225, 44.655, 1.4405, 1.4405);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_94 }, { t: this.shape_93 }, { t: this.shape_92 }, { t: this.shape_91 }, { t: this.shape_90 }, { t: this.shape_89 }, { t: this.shape_88 }, { t: this.shape_87 }, { t: this.shape_86 }, { t: this.shape_85 }, { t: this.shape_84 }, { t: this.shape_83 }, { t: this.shape_82 }, { t: this.shape_81 }, { t: this.shape_80 }, { t: this.shape_79 }, { t: this.shape_78 }, { t: this.shape_77 }, { t: this.shape_76 }, { t: this.shape_75 }, { t: this.shape_74 }, { t: this.shape_73 }, { t: this.shape_72 }, { t: this.shape_71 }, { t: this.shape_70 }, { t: this.shape_69 }, { t: this.shape_68 }, { t: this.shape_67 }, { t: this.shape_66 }, { t: this.shape_65 }, { t: this.shape_64 }, { t: this.shape_63 }, { t: this.shape_62 }, { t: this.shape_61 }, { t: this.shape_60 }, { t: this.shape_59 }, { t: this.shape_58 }, { t: this.shape_57 }, { t: this.shape_56 }, { t: this.shape_55 }, { t: this.shape_54 }, { t: this.shape_53 }, { t: this.shape_52 }, { t: this.shape_51 }, { t: this.shape_50 }, { t: this.shape_49 }, { t: this.shape_48 }, { t: this.shape_47 }, { t: this.shape_46 }, { t: this.shape_45 }, { t: this.shape_44 }, { t: this.shape_43 }, { t: this.shape_42 }, { t: this.shape_41 }, { t: this.shape_40 }, { t: this.shape_39 }, { t: this.shape_38 }, { t: this.shape_37 }, { t: this.shape_36 }, { t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.shape_31 }, { t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-131.7, -178.6, 263.4, 357.1);


	(lib.Interpoler12 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("ABiA4QgSgHgsgVQhjgwgagNQgpgWABgEQACgGA9AVQBXAfAuALQAjAIAQAWQARAWgHAJQgCACgGAAQgIAAgOgFg");
		this.shape.setTransform(68.2605, -73.7047, 1.4407, 1.4407);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("AhpAxQgYgUAehSIBSAfIBrAnQAbALAAAFQgBAEgrgCQg7gCgzALQgfAIgLABIgJABQgLAAgGgFg");
		this.shape_1.setTransform(63.2724, -94.6476, 1.4407, 1.4407);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#FFFFFF").s().p("ABfA5QgDg0gcgZQgIgIgNgFIgjgNQg4gWg0giQA6AfAyAFQAZADAQAHQAhAQANAfQAEAJACApQAAAXgCAUQgCATgCAAQACgUgCgag");
		this.shape_2.setTransform(88.6182, -118.8265, 1.4407, 1.4407);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#6B3F2E").s().p("AAtBRQgXgBgzgLIgpgKQgsgNgngUQghgRACgCQABgBBSAlQBfAkA7gFQAjgCAggSQAdgRAMgZQANgYgDgVQgCgQgKgRIgIgOQACgBAIAGQAKAHAGAJQALATgFAbQgEAVgNAUQgQAZgjAQQgbAMghAAIgKAAg");
		this.shape_3.setTransform(75.4215, -87.1344, 1.4407, 1.4407);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#6B3F2E").s().p("AA+BuQgYgBgNgDQghgGg2gUQgqgPgngTQghgQABgCIAYAJQAiAMAjAKQARAGAtAKQA4AOAXAEQATADAOAAQAbgBALgDQAUgFAJgMIACgCQAOgWgFghQgDgggNgdQgOghgRgNQgPgNgTgFIgRgDIAUACQAYAFASAOQAVAQAKAcQAGARAEAaQADATgDAgQgDAhgHAIQgJAMgWAEQgZAFgbAAIgUgBg");
		this.shape_4.setTransform(81.6216, -114.0249, 1.4407, 1.4407);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#FFFFFF").s().p("AhkAfQgEgGAegZQAigcAmgCQA7gDAsA2IgfgQQglgQgjACQgjACgjAUQgZASgCAAIgBAAg");
		this.shape_5.setTransform(54.3603, -133.7054, 1.4407, 1.4407);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#0A0B2E").s().p("ABGA3QhAgPgzgjQgdgRgbgaQgXgWABgBIAIAGIAXAPIAfAQIA0AYQAKAGAJAIIAQAMQAdAVAlAKQATAEANABQgWAAgggHg");
		this.shape_6.setTransform(75.5662, -138.9602, 1.4407, 1.4407);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#2D1C16").s().p("AgNAgQgSgFgOgLQgOgLgCgIIAAgQQABgKgBgFQANAWASANQAXARARAEQAZAFAbgLQgOAMgRAEQgLADgLAAQgKAAgMgDg");
		this.shape_7.setTransform(115.732, -104.0955, 1.4407, 1.4407);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#FFFFFF").s().p("AgNBAQgXgEgEgLQgEgJARgVQAQgVgDgPQgEgNgMgSIgIgLIgCgFQACgCAiAcQAjAeAFALQAHAPgBAQQgBARgKAIQgGAFgPABIgGAAIgRgBg");
		this.shape_8.setTransform(125.4511, -125.1662, 1.4407, 1.4407);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#2D1C16").s().p("AgMAuIAFgUQAFgSABgMIAAgLQgDgIgKgGIgIgGQAAgBAHAAIAOABQAMgBAMgKQgDAUgHAWQgHASgIARQgIAQgCAAIAAgBg");
		this.shape_9.setTransform(128.0139, -109.926, 1.4407, 1.4407);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#FFFFFF").s().p("AgTAcQgTgYADgXQADgTANgLQgJALgCAOQgDAYATAXQARAXATgCQAHgBAHgGQgJALgKABIgDABQgQAAgRgWg");
		this.shape_10.setTransform(119.5106, -109.5586, 1.4407, 1.4407);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#26170A").s().p("AAkAGIgIgEQgJgCgKgGIgQgLQgGgDgDAAQgJAAgIAMQgIAJgBAMIgBAEIABgJQABgLAIgLQAIgLAJAAQADAAAGADIAQALIATAJQAGACACABQAJAIgBARQgBgNgHgHg");
		this.shape_11.setTransform(120.6016, -113.568, 1.4407, 1.4407);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#BC8568").s().p("AgbAfQgTgYADgXQACgNAHgKQAIgLAJgBQAEAAAFADIARALIASAJQAGADACACQAPANgKAdQgLAfgUACIgDAAQgQAAgRgVg");
		this.shape_12.setTransform(120.6505, -109.8872, 1.4407, 1.4407);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#FFFFFF").s().p("AAagGQgZgKgaAKQgaAHgUAXQARglAjgOQAXgKAWAFQAYAFAMAPQANAQgDAeQgQgfgegJg");
		this.shape_13.setTransform(74.1027, -173.5767, 1.4408, 1.4408);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#F6DCC8").s().p("AAWAyIgUgLQgUgLgcgCQgWgBgDgHQgFgKANgRQAJgMAJgGQAegdAeADQATABAQAMQASANAEAUQAFAXgPAXQgKANgMACIgEABQgGAAgIgFg");
		this.shape_14.setTransform(74.0919, -170.5159, 1.4408, 1.4408);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#BC8568").s().p("AAtCAIg2ghIgogXQgLgIgEgFIgCgFQgJgTAEgbQACgLAIgeQAKgiAFglQADgRAIgFQAUgMAhAPQAiAPAPAdQAIAOgCAXIgGBGQAAATACA3QABAZgIAFIgEAAQgFAAgIgEg");
		this.shape_15.setTransform(70.4039, -152.6517, 1.4408, 1.4408);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#85849E").s().p("AiDCKQAagaAVgaQAfgpAUgvIALAFIAAAAIACAAIABABIAEABIABAAIACAAIAGAAQA0AHAigdQAbgYAGgkQAHglgQgjIAAgBIgCgFIAOgBQAdAxAFA1QAGAkgJAkQgKAqgaAjQgOgcgZgSQgQgLgRgGQgggMgYAJQgPAFgMAPIgjAuQgiAqgmAVIAUgUg");
		this.shape_16.setTransform(57.3597, -34.078, 1.4407, 1.4407);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#141416").s().p("Ag6BQIgFgBQAIgkANggQANgdAHgLQALgTAOgMQAZgSAggCIAEAHQgZAKgKATQgHAOAFAZQAGAagEALQgKAhhCAQg");
		this.shape_17.setTransform(63.207, -44.9868, 1.4408, 1.4408);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#36363C").s().p("AhEBOQAHgkANgfQANgeAHgLQALgTAQgMQAXgSAhgCQATAkgGAoQgGAmgcAYQgbAYgmABIgIAAQgSAAgLgEg");
		this.shape_18.setTransform(64.0084, -44.9028, 1.4408, 1.4408);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#D5D3E3").s().p("Ah1CmQgegFgEgKQgCgGATgRQAegcAUgbQAggqAUgtIAKAFIAFgUQAIgcAGgPQAKgZARgUQAageAZgLQASgIAYgDQAkA/gBBFQgCBEgmA0Qg3BJhoAMQgQACgPAAQgVAAgSgEg");
		this.shape_19.setTransform(57.2898, -32.2767, 1.4408, 1.4408);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#85849E").s().p("AAQDDQAdg1gOhBQgvg+gdhNQgfhRgChZIgDAAIgWALIABgGIA+geIAEgBQAEBWAcBVQAkBsBIBXQhcCDg3AUQAngYAUgog");
		this.shape_20.setTransform(36.1194, -52.191, 1.4408, 1.4408);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#D5D3E3").s().p("AhBEDQgdgLgIhLQgGgwAAiLQAAhpALhtIA9gfIAFAAQADBWAcBUQAlBuBIBWQgtA/gmAnQgxAzgfAAQgGAAgFgBg");
		this.shape_21.setTransform(35.435, -51.9778, 1.4408, 1.4408);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#141416").s().p("Ah1CmQgegGgEgKQgCgEALgLQA1AKA7gRQBKgUAqg4QAigtAFg6QAGg8gYg5IAKgBQAlA+gCBGQgBBEgnA0Qg2BJhpAMQgPACgPAAQgVAAgTgEg");
		this.shape_22.setTransform(56.5244, -30.7875, 1.4408, 1.4408);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#141416").s().p("AgED4QgugQADkAQAChwAIhmIAfgLQgIBpgCBoQgCCZANBBQAJAvAWAIQAJADANgDQgZARgRAAQgGAAgEgCg");
		this.shape_23.setTransform(24.4354, -49.7506, 1.4408, 1.4408);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#985D42").s().p("Ah6ImIgQgcQgVgqACg4QAFhkgBgWQgDgsgRg1QgQg3gFg9QgFhKAFgvQACgTADgUIAFgrQADghAAgvQAAgZAIgRQAFgMANgMQAUgRAXgeIAyhHIAfgpIBMhqQAWgcAXgIQAYgJAUADQgfAUgeAeQgbAagVAfIgnA+QgmA8g3BIQgYAggCAbQgBAXAMAgQAOAkACAtQAAAPgBAnQgBAfACAhQADAuAIAhIANA3QAFAVAFAIQAVAeAvAOQAdAIBPAKQAdAEAXgEQANgCAQgFIAMgDQAAABgLAHIgPAHQgzAahJAFQhBBUggBZIgVA7QgMAcgNABIgBAAQgMAAgNgTg");
		this.shape_24.setTransform(58.3221, -96.2837, 1.4407, 1.4407);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#FFFFFF").s().p("AAhgZQgzgmgeAJIgpASQghAOgOAKQAAgHACgEQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBBIACAWQg2hDgygjg");
		this.shape_25.setTransform(111.9502, -132.712, 1.4407, 1.4407);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#BC8568").s().p("AAbBvQgIgDgCgzQgDg7gRgaQgNgSgNgIQgHgEgNgDQgLgDgFgFQgJgIgDgLQgEgLAFgGQAFgGAQABQATABATAIQAOAFAeARQAfARAIAFQAJAGADAIQADAGgCAJIgGAeQgFAbgDAdQgDATgKANQgOAVgJAAIgCAAg");
		this.shape_26.setTransform(103.747, -119.9289, 1.4407, 1.4407);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#ECC5AF").s().p("AAFCUQgbgKgNgVQgEgIgEgVIgHg7IgDgcIgCgHQgIgQgbgMQgcgNgKgQQgMgWAGgQQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBCQAEAYgEAbQgEAhgMAdQgVAygnALQgKADgLAAQgQAAgRgHg");
		this.shape_27.setTransform(111.9502, -121.525, 1.4407, 1.4407);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#ECC5AF").s().p("Ai4IqQgHgJgLgXQgWgqADg4QAFhmgBgUQgDgrgRg2QgRg3gEg9QgEg0AEhFQABgTAEgUQADgVACgWQADggAAgwQgBgZAIgRQAGgMANgMQAUgRAWgeIAzhHIAfgpIBNhqQAVgcAXgIQAmgNAXANQASAKAJAdQAGATAHA2QAFAhAAAiQAAAZAFAUQAIAbAQAYQAHAOAPAWQAHALgCADQgFALgsgLQgngKgsgUQgngSghgXIAOAMQBCAuBJANIAzAJQAZAGAQAQQAQAQAIAbQAEARADAfQACAigCARQgEAcgRANQgJAHgTACIgGABQATAMAFARQADAMgEAQIgJAXQgYAzhEAUQgTAGgbABQAsAPAMAdQAIARgDAVQgDAVgMANQgQARgmgBQgxgCgTAGQg/AVgqCIIgcBaQgPAogSAAQgLAAgMgPg");
		this.shape_28.setTransform(68.3514, -96.2617, 1.4407, 1.4407);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#0A0B2E").s().p("AqSM3IgPgPQCJh6BmiRQBChdA1hyQBJicAZgtQBAh0BchjQDJjdAOgRQDdkHC0k6QBtCHAKChQAGBqgpBpQgXA8g0BTQgqBCg4A1QheBagSATQhCBIgrBLQgcAxgkBZQgqBmgaA1QgxBhhIBkQiXDPhxArQg8AYhSAFIgdABQiDAAhUhLg");
		this.shape_29.setTransform(-20.205, 49.0768, 1.4407, 1.4407);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#16065A").s().p("Aq2JZQgJgFAohRQAqhUA4hTQAthBA1hAQA6hEBBg+ICIh6QCbiOAugtQBKhIAiguQBGhpAcgmQAsg9A7gcQAjgRAmgIQBGgOA9AVQBtAmA4CHQAWA1ADAuQADAtgRANQgNALgcgPIg/gmQhmg+hRAOQg5AKgzAuQgSAQhBBOQhSBhhZBAQgzAlhpA4QhpA4g8ArQhiBGhgBsQhIBQhPBwQg2BNgGAAIgBgBg");
		this.shape_30.setTransform(-25.9948, -1.2443, 1.4408, 1.4408);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#16065A").s().p("ApjNPQhahQgQiVQgJhRAQh7QASiRBNiIQAwhUBuiHQBchzBkhVQA1gsBrhLQBZg+AqgrQBBhAAuheQAeg8ATgdQAthBA8gnQAsgdAvgQQBZgdBJAcQBiAmAvCHQAaBKAFBTQAHBqgpBpQgYA8g0BTQgpBDg4A0QhhBcgPAQQhDBJgrBLQgbAxglBaQgpBlgbA1QgxBhhIBkQiXDQhxArQhBAYhMAEIgdABQiDAAhUhLg");
		this.shape_31.setTransform(-27.7899, 44.7583, 1.4408, 1.4408);

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#6B3F2E").s().p("ABiA4QgSgHgsgVQhjgwgagNQgpgWABgEQACgGA9AVQBXAfAuALQAjAIAQAWQARAWgHAJQgCACgGAAQgIAAgOgFg");
		this.shape_32.setTransform(68.2059, -73.7884, 1.4404, 1.4404);

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#6B3F2E").s().p("AhpAxQgYgUAehSIBSAfIBrAnQAbALAAAFQgBAEgrgCQg7gCgzALQgfAIgLABIgJABQgLAAgGgFg");
		this.shape_33.setTransform(63.2188, -94.7269, 1.4404, 1.4404);

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#6B3F2E").s().p("ABfA5QgDg0gcgZQgIgIgNgFIgjgNQg4gWg0giQA6AfAyAFQAZADAQAHQAhAQANAfQAEAJACApQAAAXgCAUQgCATgCAAQACgUgCgag");
		this.shape_34.setTransform(88.5593, -118.9007, 1.4404, 1.4404);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#6B3F2E").s().p("AAtBRQgXgBgzgLIgpgKQgsgNgngUQghgRACgCQABgBBSAlQBfAkA7gFQAjgCAggSQAdgRAMgZQANgYgDgVQgCgQgKgRIgIgOQACgBAIAGQAKAHAGAJQALATgFAbQgEAVgNAUQgQAZgjAQQgbAMghAAIgKAAg");
		this.shape_35.setTransform(75.3485, -87.2395, 1.4403, 1.4403);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#6B3F2E").s().p("AAtBRQgXgBgzgLIgpgKQgsgNgngUQghgRACgCQABgBBSAlQBfAkA7gFQAjgCAggSQAdgRAMgZQANgYgDgVQgCgQgKgRIgIgOQACgBAIAGQAKAHAGAJQALATgFAbQgEAVgNAUQgQAZgjAQQgbAMghAAIgKAAg");
		this.shape_36.setTransform(75.3485, -87.2395, 1.4403, 1.4403);

		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#6B3F2E").s().p("AA+BuQgYgBgNgDQghgGg2gUQgqgPgngTQghgQABgCIAYAJQAiAMAjAKQARAGAtAKQA4AOAXAEQATADAOAAQAbgBALgDQAUgFAJgMIACgCQAOgWgFghQgDgggNgdQgOghgRgNQgPgNgTgFIgRgDIAUACQAYAFASAOQAVAQAKAcQAGARAEAaQADATgDAgQgDAhgHAIQgJAMgWAEQgZAFgbAAIgUgBg");
		this.shape_37.setTransform(81.5642, -114.1, 1.4404, 1.4404);

		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#6B3F2E").s().p("AhkAfQgEgGAegZQAigcAmgCQA7gDAsA2IgfgQQglgQgjACQgjACgjAUQgZASgCAAIgBAAg");
		this.shape_38.setTransform(54.3086, -133.7764, 1.4404, 1.4404);

		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#6B3F2E").s().p("ABGA3QhAgPgzgjQgdgRgbgaQgXgWABgBIAIAGIAXAPIAfAQIA0AYQAKAGAJAIIAQAMQAdAVAlAKQATAEANABQgWAAgggHg");
		this.shape_39.setTransform(75.51, -139.0301, 1.4404, 1.4404);

		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#6B3F2E").s().p("AgNAgQgSgFgOgLQgOgLgCgIIAAgQQABgKgBgFQANAWASANQAXARARAEQAZAFAbgLQgOAMgRAEQgLADgLAAQgKAAgMgDg");
		this.shape_40.setTransform(115.648, -104.196, 1.4403, 1.4403);

		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#6B3F2E").s().p("AgNAgQgSgFgOgLQgOgLgCgIIAAgQQABgKgBgFQANAWASANQAXARARAEQAZAFAbgLQgOAMgRAEQgLADgLAAQgKAAgMgDg");
		this.shape_41.setTransform(115.648, -104.196, 1.4403, 1.4403);

		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f("#6B3F2E").s().p("AgNBAQgXgEgEgLQgEgJARgVQAQgVgDgPQgEgNgMgSIgIgLIgCgFQACgCAiAcQAjAeAFALQAHAPgBAQQgBARgKAIQgGAFgPABIgGAAIgRgBg");
		this.shape_42.setTransform(125.3644, -125.2608, 1.4403, 1.4403);

		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f("#6B3F2E").s().p("AgNBAQgXgEgEgLQgEgJARgVQAQgVgDgPQgEgNgMgSIgIgLIgCgFQACgCAiAcQAjAeAFALQAHAPgBAQQgBARgKAIQgGAFgPABIgGAAIgRgBg");
		this.shape_43.setTransform(125.3644, -125.2608, 1.4403, 1.4403);

		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.f("#6B3F2E").s().p("AgMAuIAFgUQAFgSABgMIAAgLQgDgIgKgGIgIgGQAAgBAHAAIAOABQAMgBAMgKQgDAUgHAWQgHASgIARQgIAQgCAAIAAgBg");
		this.shape_44.setTransform(127.9466, -110.0021, 1.4404, 1.4404);

		this.shape_45 = new cjs.Shape();
		this.shape_45.graphics.f("#6B3F2E").s().p("AgTAcQgTgYADgXQADgTANgLQgJALgCAOQgDAYATAXQARAXATgCQAHgBAHgGQgJALgKABIgDABQgQAAgRgWg");
		this.shape_45.setTransform(119.4452, -109.6347, 1.4404, 1.4404);

		this.shape_46 = new cjs.Shape();
		this.shape_46.graphics.f("#6B3F2E").s().p("AAkAGIgIgEQgJgCgKgGIgQgLQgGgDgDAAQgJAAgIAMQgIAJgBAMIgBAEIABgJQABgLAIgLQAIgLAJAAQADAAAGADIAQALIATAJQAGACACABQAJAIgBARQgBgNgHgHg");
		this.shape_46.setTransform(120.5161, -113.6659, 1.4403, 1.4403);

		this.shape_47 = new cjs.Shape();
		this.shape_47.graphics.f("#6B3F2E").s().p("AAkAGIgIgEQgJgCgKgGIgQgLQgGgDgDAAQgJAAgIAMQgIAJgBAMIgBAEIABgJQABgLAIgLQAIgLAJAAQADAAAGADIAQALIATAJQAGACACABQAJAIgBARQgBgNgHgHg");
		this.shape_47.setTransform(120.5161, -113.6659, 1.4403, 1.4403);

		this.shape_48 = new cjs.Shape();
		this.shape_48.graphics.f("#6B3F2E").s().p("AgbAfQgTgYADgXQACgNAHgKQAIgLAJgBQAEAAAFADIARALIASAJQAGADACACQAPANgKAdQgLAfgUACIgDAAQgQAAgRgVg");
		this.shape_48.setTransform(120.565, -109.9861, 1.4403, 1.4403);

		this.shape_49 = new cjs.Shape();
		this.shape_49.graphics.f("#6B3F2E").s().p("AgbAfQgTgYADgXQACgNAHgKQAIgLAJgBQAEAAAFADIARALIASAJQAGADACACQAPANgKAdQgLAfgUACIgDAAQgQAAgRgVg");
		this.shape_49.setTransform(120.565, -109.9861, 1.4403, 1.4403);

		this.shape_50 = new cjs.Shape();
		this.shape_50.graphics.f("#6B3F2E").s().p("AAagGQgZgKgaAKQgaAHgUAXQARglAjgOQAXgKAWAFQAYAFAMAPQANAQgDAeQgQgfgegJg");
		this.shape_50.setTransform(74.0496, -173.6362, 1.4405, 1.4405);

		this.shape_51 = new cjs.Shape();
		this.shape_51.graphics.f("#6B3F2E").s().p("AAWAyIgUgLQgUgLgcgCQgWgBgDgHQgFgKANgRQAJgMAJgGQAegdAeADQATABAQAMQASANAEAUQAFAXgPAXQgKANgMACIgEABQgGAAgIgFg");
		this.shape_51.setTransform(74.0389, -170.576, 1.4405, 1.4405);

		this.shape_52 = new cjs.Shape();
		this.shape_52.graphics.f("#6B3F2E").s().p("AAtCAIg2ghIgogXQgLgIgEgFIgCgFQgJgTAEgbQACgLAIgeQAKgiAFglQADgRAIgFQAUgMAhAPQAiAPAPAdQAIAOgCAXIgGBGQAAATACA3QABAZgIAFIgEAAQgFAAgIgEg");
		this.shape_52.setTransform(70.3241, -152.7488, 1.4404, 1.4404);

		this.shape_53 = new cjs.Shape();
		this.shape_53.graphics.f("#6B3F2E").s().p("AAtCAIg2ghIgogXQgLgIgEgFIgCgFQgJgTAEgbQACgLAIgeQAKgiAFglQADgRAIgFQAUgMAhAPQAiAPAPAdQAIAOgCAXIgGBGQAAATACA3QABAZgIAFIgEAAQgFAAgIgEg");
		this.shape_53.setTransform(70.3241, -152.7488, 1.4404, 1.4404);

		this.shape_54 = new cjs.Shape();
		this.shape_54.graphics.f("#6B3F2E").s().p("AiDCKQAagaAVgaQAfgpAUgvIALAFIAAAAIACAAIABABIAEABIABAAIACAAIAGAAQA0AHAigdQAbgYAGgkQAHglgQgjIAAgBIgCgFIAOgBQAdAxAFA1QAGAkgJAkQgKAqgaAjQgOgcgZgSQgQgLgRgGQgggMgYAJQgPAFgMAPIgjAuQgiAqgmAVIAUgUg");
		this.shape_54.setTransform(57.3074, -34.1701, 1.4404, 1.4404);

		this.shape_55 = new cjs.Shape();
		this.shape_55.graphics.f("#6B3F2E").s().p("Ag6BQIgFgBQAIgkANggQANgdAHgLQALgTAOgMQAZgSAggCIAEAHQgZAKgKATQgHAOAFAZQAGAagEALQgKAhhCAQg");
		this.shape_55.setTransform(63.1561, -45.0721, 1.4405, 1.4405);

		this.shape_56 = new cjs.Shape();
		this.shape_56.graphics.f("#6B3F2E").s().p("AhEBOQAHgkANgfQANgeAHgLQALgTAQgMQAXgSAhgCQATAkgGAoQgGAmgcAYQgbAYgmABIgIAAQgSAAgLgEg");
		this.shape_56.setTransform(63.9574, -44.9881, 1.4405, 1.4405);

		this.shape_57 = new cjs.Shape();
		this.shape_57.graphics.f("#6B3F2E").s().p("Ah1CmQgegFgEgKQgCgGATgRQAegcAUgbQAggqAUgtIAKAFIAFgUQAIgcAGgPQAKgZARgUQAageAZgLQASgIAYgDQAkA/gBBFQgCBEgmA0Qg3BJhoAMQgQACgPAAQgVAAgSgEg");
		this.shape_57.setTransform(57.2401, -32.3645, 1.4405, 1.4405);

		this.shape_58 = new cjs.Shape();
		this.shape_58.graphics.f("#6B3F2E").s().p("AAQDDQAdg1gOhBQgvg+gdhNQgfhRgChZIgDAAIgWALIABgGIA+geIAEgBQAEBWAcBVQAkBsBIBXQhcCDg3AUQAngYAUgog");
		this.shape_58.setTransform(36.074, -52.2748, 1.4405, 1.4405);

		this.shape_59 = new cjs.Shape();
		this.shape_59.graphics.f("#6B3F2E").s().p("AhBEDQgdgLgIhLQgGgwAAiLQAAhpALhtIA9gfIAFAAQADBWAcBUQAlBuBIBWQgtA/gmAnQgxAzgfAAQgGAAgFgBg");
		this.shape_59.setTransform(35.3898, -52.0617, 1.4405, 1.4405);

		this.shape_60 = new cjs.Shape();
		this.shape_60.graphics.f("#6B3F2E").s().p("Ah1CmQgegGgEgKQgCgEALgLQA1AKA7gRQBKgUAqg4QAigtAFg6QAGg8gYg5IAKgBQAlA+gCBGQgBBEgnA0Qg2BJhpAMQgPACgPAAQgVAAgTgEg");
		this.shape_60.setTransform(56.4749, -30.8756, 1.4405, 1.4405);

		this.shape_61 = new cjs.Shape();
		this.shape_61.graphics.f("#6B3F2E").s().p("AgED4QgugQADkAQAChwAIhmIAfgLQgIBpgCBoQgCCZANBBQAJAvAWAIQAJADANgDQgZARgRAAQgGAAgEgCg");
		this.shape_61.setTransform(24.3923, -49.8349, 1.4405, 1.4405);

		this.shape_62 = new cjs.Shape();
		this.shape_62.graphics.f("#6B3F2E").s().p("Ah6ImIgQgcQgVgqACg4QAFhkgBgWQgDgsgRg1QgQg3gFg9QgFhKAFgvQACgTADgUIAFgrQADghAAgvQAAgZAIgRQAFgMANgMQAUgRAXgeIAyhHIAfgpIBMhqQAWgcAXgIQAYgJAUADQgfAUgeAeQgbAagVAfIgnA+QgmA8g3BIQgYAggCAbQgBAXAMAgQAOAkACAtQAAAPgBAnQgBAfACAhQADAuAIAhIANA3QAFAVAFAIQAVAeAvAOQAdAIBPAKQAdAEAXgEQANgCAQgFIAMgDQAAABgLAHIgPAHQgzAahJAFQhBBUggBZIgVA7QgMAcgNABIgBAAQgMAAgNgTg");
		this.shape_62.setTransform(58.2197, -96.4377, 1.4401, 1.4401);

		this.shape_63 = new cjs.Shape();
		this.shape_63.graphics.f("#6B3F2E").s().p("Ah6ImIgQgcQgVgqACg4QAFhkgBgWQgDgsgRg1QgQg3gFg9QgFhKAFgvQACgTADgUIAFgrQADghAAgvQAAgZAIgRQAFgMANgMQAUgRAXgeIAyhHIAfgpIBMhqQAWgcAXgIQAYgJAUADQgfAUgeAeQgbAagVAfIgnA+QgmA8g3BIQgYAggCAbQgBAXAMAgQAOAkACAtQAAAPgBAnQgBAfACAhQADAuAIAhIANA3QAFAVAFAIQAVAeAvAOQAdAIBPAKQAdAEAXgEQANgCAQgFIAMgDQAAABgLAHIgPAHQgzAahJAFQhBBUggBZIgVA7QgMAcgNABIgBAAQgMAAgNgTg");
		this.shape_63.setTransform(58.2197, -96.4377, 1.4401, 1.4401);

		this.shape_64 = new cjs.Shape();
		this.shape_64.graphics.f("#6B3F2E").s().p("Ah6ImIgQgcQgVgqACg4QAFhkgBgWQgDgsgRg1QgQg3gFg9QgFhKAFgvQACgTADgUIAFgrQADghAAgvQAAgZAIgRQAFgMANgMQAUgRAXgeIAyhHIAfgpIBMhqQAWgcAXgIQAYgJAUADQgfAUgeAeQgbAagVAfIgnA+QgmA8g3BIQgYAggCAbQgBAXAMAgQAOAkACAtQAAAPgBAnQgBAfACAhQADAuAIAhIANA3QAFAVAFAIQAVAeAvAOQAdAIBPAKQAdAEAXgEQANgCAQgFIAMgDQAAABgLAHIgPAHQgzAahJAFQhBBUggBZIgVA7QgMAcgNABIgBAAQgMAAgNgTg");
		this.shape_64.setTransform(58.2197, -96.4377, 1.4401, 1.4401);

		this.shape_65 = new cjs.Shape();
		this.shape_65.graphics.f("#6B3F2E").s().p("Ah6ImIgQgcQgVgqACg4QAFhkgBgWQgDgsgRg1QgQg3gFg9QgFhKAFgvQACgTADgUIAFgrQADghAAgvQAAgZAIgRQAFgMANgMQAUgRAXgeIAyhHIAfgpIBMhqQAWgcAXgIQAYgJAUADQgfAUgeAeQgbAagVAfIgnA+QgmA8g3BIQgYAggCAbQgBAXAMAgQAOAkACAtQAAAPgBAnQgBAfACAhQADAuAIAhIANA3QAFAVAFAIQAVAeAvAOQAdAIBPAKQAdAEAXgEQANgCAQgFIAMgDQAAABgLAHIgPAHQgzAahJAFQhBBUggBZIgVA7QgMAcgNABIgBAAQgMAAgNgTg");
		this.shape_65.setTransform(58.2197, -96.4377, 1.4401, 1.4401);

		this.shape_66 = new cjs.Shape();
		this.shape_66.graphics.f("#6B3F2E").s().p("Ah6ImIgQgcQgVgqACg4QAFhkgBgWQgDgsgRg1QgQg3gFg9QgFhKAFgvQACgTADgUIAFgrQADghAAgvQAAgZAIgRQAFgMANgMQAUgRAXgeIAyhHIAfgpIBMhqQAWgcAXgIQAYgJAUADQgfAUgeAeQgbAagVAfIgnA+QgmA8g3BIQgYAggCAbQgBAXAMAgQAOAkACAtQAAAPgBAnQgBAfACAhQADAuAIAhIANA3QAFAVAFAIQAVAeAvAOQAdAIBPAKQAdAEAXgEQANgCAQgFIAMgDQAAABgLAHIgPAHQgzAahJAFQhBBUggBZIgVA7QgMAcgNABIgBAAQgMAAgNgTg");
		this.shape_66.setTransform(58.2197, -96.4377, 1.4401, 1.4401);

		this.shape_67 = new cjs.Shape();
		this.shape_67.graphics.f("#6B3F2E").s().p("Ah6ImIgQgcQgVgqACg4QAFhkgBgWQgDgsgRg1QgQg3gFg9QgFhKAFgvQACgTADgUIAFgrQADghAAgvQAAgZAIgRQAFgMANgMQAUgRAXgeIAyhHIAfgpIBMhqQAWgcAXgIQAYgJAUADQgfAUgeAeQgbAagVAfIgnA+QgmA8g3BIQgYAggCAbQgBAXAMAgQAOAkACAtQAAAPgBAnQgBAfACAhQADAuAIAhIANA3QAFAVAFAIQAVAeAvAOQAdAIBPAKQAdAEAXgEQANgCAQgFIAMgDQAAABgLAHIgPAHQgzAahJAFQhBBUggBZIgVA7QgMAcgNABIgBAAQgMAAgNgTg");
		this.shape_67.setTransform(58.2197, -96.4377, 1.4401, 1.4401);

		this.shape_68 = new cjs.Shape();
		this.shape_68.graphics.f("#6B3F2E").s().p("AAhgZQgzgmgeAJIgpASQghAOgOAKQAAgHACgEQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBBIACAWQg2hDgygjg");
		this.shape_68.setTransform(111.8257, -132.8508, 1.4401, 1.4401);

		this.shape_69 = new cjs.Shape();
		this.shape_69.graphics.f("#6B3F2E").s().p("AAhgZQgzgmgeAJIgpASQghAOgOAKQAAgHACgEQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBBIACAWQg2hDgygjg");
		this.shape_69.setTransform(111.8257, -132.8508, 1.4401, 1.4401);

		this.shape_70 = new cjs.Shape();
		this.shape_70.graphics.f("#6B3F2E").s().p("AAbBvQgIgDgCgzQgDg7gRgaQgNgSgNgIQgHgEgNgDQgLgDgFgFQgJgIgDgLQgEgLAFgGQAFgGAQABQATABATAIQAOAFAeARQAfARAIAFQAJAGADAIQADAGgCAJIgGAeQgFAbgDAdQgDATgKANQgOAVgJAAIgCAAg");
		this.shape_70.setTransform(103.6259, -120.0731, 1.4401, 1.4401);

		this.shape_71 = new cjs.Shape();
		this.shape_71.graphics.f("#6B3F2E").s().p("AAbBvQgIgDgCgzQgDg7gRgaQgNgSgNgIQgHgEgNgDQgLgDgFgFQgJgIgDgLQgEgLAFgGQAFgGAQABQATABATAIQAOAFAeARQAfARAIAFQAJAGADAIQADAGgCAJIgGAeQgFAbgDAdQgDATgKANQgOAVgJAAIgCAAg");
		this.shape_71.setTransform(103.6259, -120.0731, 1.4401, 1.4401);

		this.shape_72 = new cjs.Shape();
		this.shape_72.graphics.f("#6B3F2E").s().p("AAFCUQgbgKgNgVQgEgIgEgVIgHg7IgDgcIgCgHQgIgQgbgMQgcgNgKgQQgMgWAGgQQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBCQAEAYgEAbQgEAhgMAdQgVAygnALQgKADgLAAQgQAAgRgHg");
		this.shape_72.setTransform(111.8257, -121.6685, 1.4401, 1.4401);

		this.shape_73 = new cjs.Shape();
		this.shape_73.graphics.f("#6B3F2E").s().p("AAFCUQgbgKgNgVQgEgIgEgVIgHg7IgDgcIgCgHQgIgQgbgMQgcgNgKgQQgMgWAGgQQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBCQAEAYgEAbQgEAhgMAdQgVAygnALQgKADgLAAQgQAAgRgHg");
		this.shape_73.setTransform(111.8257, -121.6685, 1.4401, 1.4401);

		this.shape_74 = new cjs.Shape();
		this.shape_74.graphics.f("#6B3F2E").s().p("Ai4IqQgHgJgLgXQgWgqADg4QAFhmgBgUQgDgrgRg2QgRg3gEg9QgEg0AEhFQABgTAEgUQADgVACgWQADggAAgwQgBgZAIgRQAGgMANgMQAUgRAWgeIAzhHIAfgpIBNhqQAVgcAXgIQAmgNAXANQASAKAJAdQAGATAHA2QAFAhAAAiQAAAZAFAUQAIAbAQAYQAHAOAPAWQAHALgCADQgFALgsgLQgngKgsgUQgngSghgXIAOAMQBCAuBJANIAzAJQAZAGAQAQQAQAQAIAbQAEARADAfQACAigCARQgEAcgRANQgJAHgTACIgGABQATAMAFARQADAMgEAQIgJAXQgYAzhEAUQgTAGgbABQAsAPAMAdQAIARgDAVQgDAVgMANQgQARgmgBQgxgCgTAGQg/AVgqCIIgcBaQgPAogSAAQgLAAgMgPg");
		this.shape_74.setTransform(68.2448, -96.4157, 1.4401, 1.4401);

		this.shape_75 = new cjs.Shape();
		this.shape_75.graphics.f("#6B3F2E").s().p("Ai4IqQgHgJgLgXQgWgqADg4QAFhmgBgUQgDgrgRg2QgRg3gEg9QgEg0AEhFQABgTAEgUQADgVACgWQADggAAgwQgBgZAIgRQAGgMANgMQAUgRAWgeIAzhHIAfgpIBNhqQAVgcAXgIQAmgNAXANQASAKAJAdQAGATAHA2QAFAhAAAiQAAAZAFAUQAIAbAQAYQAHAOAPAWQAHALgCADQgFALgsgLQgngKgsgUQgngSghgXIAOAMQBCAuBJANIAzAJQAZAGAQAQQAQAQAIAbQAEARADAfQACAigCARQgEAcgRANQgJAHgTACIgGABQATAMAFARQADAMgEAQIgJAXQgYAzhEAUQgTAGgbABQAsAPAMAdQAIARgDAVQgDAVgMANQgQARgmgBQgxgCgTAGQg/AVgqCIIgcBaQgPAogSAAQgLAAgMgPg");
		this.shape_75.setTransform(68.2448, -96.4157, 1.4401, 1.4401);

		this.shape_76 = new cjs.Shape();
		this.shape_76.graphics.f("#6B3F2E").s().p("AAhgZQgzgmgeAJIgpASQghAOgOAKQAAgHACgEQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBBIACAWQg2hDgygjg");
		this.shape_76.setTransform(111.8257, -132.8508, 1.4401, 1.4401);

		this.shape_77 = new cjs.Shape();
		this.shape_77.graphics.f("#6B3F2E").s().p("AAhgZQgzgmgeAJIgpASQghAOgOAKQAAgHACgEQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBBIACAWQg2hDgygjg");
		this.shape_77.setTransform(111.8257, -132.8508, 1.4401, 1.4401);

		this.shape_78 = new cjs.Shape();
		this.shape_78.graphics.f("#6B3F2E").s().p("AAbBvQgIgDgCgzQgDg7gRgaQgNgSgNgIQgHgEgNgDQgLgDgFgFQgJgIgDgLQgEgLAFgGQAFgGAQABQATABATAIQAOAFAeARQAfARAIAFQAJAGADAIQADAGgCAJIgGAeQgFAbgDAdQgDATgKANQgOAVgJAAIgCAAg");
		this.shape_78.setTransform(103.6259, -120.0731, 1.4401, 1.4401);

		this.shape_79 = new cjs.Shape();
		this.shape_79.graphics.f("#6B3F2E").s().p("AAbBvQgIgDgCgzQgDg7gRgaQgNgSgNgIQgHgEgNgDQgLgDgFgFQgJgIgDgLQgEgLAFgGQAFgGAQABQATABATAIQAOAFAeARQAfARAIAFQAJAGADAIQADAGgCAJIgGAeQgFAbgDAdQgDATgKANQgOAVgJAAIgCAAg");
		this.shape_79.setTransform(103.6259, -120.0731, 1.4401, 1.4401);

		this.shape_80 = new cjs.Shape();
		this.shape_80.graphics.f("#6B3F2E").s().p("AAFCUQgbgKgNgVQgEgIgEgVIgHg7IgDgcIgCgHQgIgQgbgMQgcgNgKgQQgMgWAGgQQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBCQAEAYgEAbQgEAhgMAdQgVAygnALQgKADgLAAQgQAAgRgHg");
		this.shape_80.setTransform(111.8257, -121.6685, 1.4401, 1.4401);

		this.shape_81 = new cjs.Shape();
		this.shape_81.graphics.f("#6B3F2E").s().p("AAFCUQgbgKgNgVQgEgIgEgVIgHg7IgDgcIgCgHQgIgQgbgMQgcgNgKgQQgMgWAGgQQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBCQAEAYgEAbQgEAhgMAdQgVAygnALQgKADgLAAQgQAAgRgHg");
		this.shape_81.setTransform(111.8257, -121.6685, 1.4401, 1.4401);

		this.shape_82 = new cjs.Shape();
		this.shape_82.graphics.f("#6B3F2E").s().p("Ai4IqQgHgJgLgXQgWgqADg4QAFhmgBgUQgDgrgRg2QgRg3gEg9QgEg0AEhFQABgTAEgUQADgVACgWQADggAAgwQgBgZAIgRQAGgMANgMQAUgRAWgeIAzhHIAfgpIBNhqQAVgcAXgIQAmgNAXANQASAKAJAdQAGATAHA2QAFAhAAAiQAAAZAFAUQAIAbAQAYQAHAOAPAWQAHALgCADQgFALgsgLQgngKgsgUQgngSghgXIAOAMQBCAuBJANIAzAJQAZAGAQAQQAQAQAIAbQAEARADAfQACAigCARQgEAcgRANQgJAHgTACIgGABQATAMAFARQADAMgEAQIgJAXQgYAzhEAUQgTAGgbABQAsAPAMAdQAIARgDAVQgDAVgMANQgQARgmgBQgxgCgTAGQg/AVgqCIIgcBaQgPAogSAAQgLAAgMgPg");
		this.shape_82.setTransform(68.2448, -96.4157, 1.4401, 1.4401);

		this.shape_83 = new cjs.Shape();
		this.shape_83.graphics.f("#6B3F2E").s().p("Ai4IqQgHgJgLgXQgWgqADg4QAFhmgBgUQgDgrgRg2QgRg3gEg9QgEg0AEhFQABgTAEgUQADgVACgWQADggAAgwQgBgZAIgRQAGgMANgMQAUgRAWgeIAzhHIAfgpIBNhqQAVgcAXgIQAmgNAXANQASAKAJAdQAGATAHA2QAFAhAAAiQAAAZAFAUQAIAbAQAYQAHAOAPAWQAHALgCADQgFALgsgLQgngKgsgUQgngSghgXIAOAMQBCAuBJANIAzAJQAZAGAQAQQAQAQAIAbQAEARADAfQACAigCARQgEAcgRANQgJAHgTACIgGABQATAMAFARQADAMgEAQIgJAXQgYAzhEAUQgTAGgbABQAsAPAMAdQAIARgDAVQgDAVgMANQgQARgmgBQgxgCgTAGQg/AVgqCIIgcBaQgPAogSAAQgLAAgMgPg");
		this.shape_83.setTransform(68.2448, -96.4157, 1.4401, 1.4401);

		this.shape_84 = new cjs.Shape();
		this.shape_84.graphics.f("#6B3F2E").s().p("AAhgZQgzgmgeAJIgpASQghAOgOAKQAAgHACgEQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBBIACAWQg2hDgygjg");
		this.shape_84.setTransform(111.8257, -132.8508, 1.4401, 1.4401);

		this.shape_85 = new cjs.Shape();
		this.shape_85.graphics.f("#6B3F2E").s().p("AAhgZQgzgmgeAJIgpASQghAOgOAKQAAgHACgEQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBBIACAWQg2hDgygjg");
		this.shape_85.setTransform(111.8257, -132.8508, 1.4401, 1.4401);

		this.shape_86 = new cjs.Shape();
		this.shape_86.graphics.f("#6B3F2E").s().p("AAbBvQgIgDgCgzQgDg7gRgaQgNgSgNgIQgHgEgNgDQgLgDgFgFQgJgIgDgLQgEgLAFgGQAFgGAQABQATABATAIQAOAFAeARQAfARAIAFQAJAGADAIQADAGgCAJIgGAeQgFAbgDAdQgDATgKANQgOAVgJAAIgCAAg");
		this.shape_86.setTransform(103.6259, -120.0731, 1.4401, 1.4401);

		this.shape_87 = new cjs.Shape();
		this.shape_87.graphics.f("#6B3F2E").s().p("AAbBvQgIgDgCgzQgDg7gRgaQgNgSgNgIQgHgEgNgDQgLgDgFgFQgJgIgDgLQgEgLAFgGQAFgGAQABQATABATAIQAOAFAeARQAfARAIAFQAJAGADAIQADAGgCAJIgGAeQgFAbgDAdQgDATgKANQgOAVgJAAIgCAAg");
		this.shape_87.setTransform(103.6259, -120.0731, 1.4401, 1.4401);

		this.shape_88 = new cjs.Shape();
		this.shape_88.graphics.f("#6B3F2E").s().p("AAFCUQgbgKgNgVQgEgIgEgVIgHg7IgDgcIgCgHQgIgQgbgMQgcgNgKgQQgMgWAGgQQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBCQAEAYgEAbQgEAhgMAdQgVAygnALQgKADgLAAQgQAAgRgHg");
		this.shape_88.setTransform(111.8257, -121.6685, 1.4401, 1.4401);

		this.shape_89 = new cjs.Shape();
		this.shape_89.graphics.f("#6B3F2E").s().p("AAFCUQgbgKgNgVQgEgIgEgVIgHg7IgDgcIgCgHQgIgQgbgMQgcgNgKgQQgMgWAGgQQADgHAJgGQALgIAegOIAngQQAdgJAwAlQAxAkAzBCQAEAYgEAbQgEAhgMAdQgVAygnALQgKADgLAAQgQAAgRgHg");
		this.shape_89.setTransform(111.8257, -121.6685, 1.4401, 1.4401);

		this.shape_90 = new cjs.Shape();
		this.shape_90.graphics.f("#6B3F2E").s().p("Ai4IqQgHgJgLgXQgWgqADg4QAFhmgBgUQgDgrgRg2QgRg3gEg9QgEg0AEhFQABgTAEgUQADgVACgWQADggAAgwQgBgZAIgRQAGgMANgMQAUgRAWgeIAzhHIAfgpIBNhqQAVgcAXgIQAmgNAXANQASAKAJAdQAGATAHA2QAFAhAAAiQAAAZAFAUQAIAbAQAYQAHAOAPAWQAHALgCADQgFALgsgLQgngKgsgUQgngSghgXIAOAMQBCAuBJANIAzAJQAZAGAQAQQAQAQAIAbQAEARADAfQACAigCARQgEAcgRANQgJAHgTACIgGABQATAMAFARQADAMgEAQIgJAXQgYAzhEAUQgTAGgbABQAsAPAMAdQAIARgDAVQgDAVgMANQgQARgmgBQgxgCgTAGQg/AVgqCIIgcBaQgPAogSAAQgLAAgMgPg");
		this.shape_90.setTransform(68.2448, -96.4157, 1.4401, 1.4401);

		this.shape_91 = new cjs.Shape();
		this.shape_91.graphics.f("#6B3F2E").s().p("Ai4IqQgHgJgLgXQgWgqADg4QAFhmgBgUQgDgrgRg2QgRg3gEg9QgEg0AEhFQABgTAEgUQADgVACgWQADggAAgwQgBgZAIgRQAGgMANgMQAUgRAWgeIAzhHIAfgpIBNhqQAVgcAXgIQAmgNAXANQASAKAJAdQAGATAHA2QAFAhAAAiQAAAZAFAUQAIAbAQAYQAHAOAPAWQAHALgCADQgFALgsgLQgngKgsgUQgngSghgXIAOAMQBCAuBJANIAzAJQAZAGAQAQQAQAQAIAbQAEARADAfQACAigCARQgEAcgRANQgJAHgTACIgGABQATAMAFARQADAMgEAQIgJAXQgYAzhEAUQgTAGgbABQAsAPAMAdQAIARgDAVQgDAVgMANQgQARgmgBQgxgCgTAGQg/AVgqCIIgcBaQgPAogSAAQgLAAgMgPg");
		this.shape_91.setTransform(68.2448, -96.4157, 1.4401, 1.4401);

		this.shape_92 = new cjs.Shape();
		this.shape_92.graphics.f("#6B3F2E").s().p("AqSM3IgPgPQCJh6BmiRQBChdA1hyQBJicAZgtQBAh0BchjQDJjdAOgRQDdkHC0k6QBtCHAKChQAGBqgpBpQgXA8g0BTQgqBCg4A1QheBagSATQhCBIgrBLQgcAxgkBZQgqBmgaA1QgxBhhIBkQiXDPhxArQg8AYhSAFIgdABQiDAAhUhLg");
		this.shape_92.setTransform(-20.2408, 48.9671, 1.4404, 1.4404);

		this.shape_93 = new cjs.Shape();
		this.shape_93.graphics.f("#6B3F2E").s().p("Aq2JZQgJgFAohRQAqhUA4hTQAthBA1hAQA6hEBBg+ICIh6QCbiOAugtQBKhIAiguQBGhpAcgmQAsg9A7gcQAjgRAmgIQBGgOA9AVQBtAmA4CHQAWA1ADAuQADAtgRANQgNALgcgPIg/gmQhmg+hRAOQg5AKgzAuQgSAQhBBOQhSBhhZBAQgzAlhpA4QhpA4g8ArQhiBGhgBsQhIBQhPBwQg2BNgGAAIgBgBg");
		this.shape_93.setTransform(-26.0277, -1.3384, 1.4405, 1.4405);

		this.shape_94 = new cjs.Shape();
		this.shape_94.graphics.f("#6B3F2E").s().p("ApjNPQhahQgQiVQgJhRAQh7QASiRBNiIQAwhUBuiHQBchzBkhVQA1gsBrhLQBZg+AqgrQBBhAAuheQAeg8ATgdQAthBA8gnQAsgdAvgQQBZgdBJAcQBiAmAvCHQAaBKAFBTQAHBqgpBpQgYA8g0BTQgpBDg4A0QhhBcgPAQQhDBJgrBLQgbAxglBaQgpBlgbA1QgxBhhIBkQiXDQhxArQhBAYhMAEIgdABQiDAAhUhLg");
		this.shape_94.setTransform(-27.8225, 44.655, 1.4405, 1.4405);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_94 }, { t: this.shape_93 }, { t: this.shape_92 }, { t: this.shape_91 }, { t: this.shape_90 }, { t: this.shape_89 }, { t: this.shape_88 }, { t: this.shape_87 }, { t: this.shape_86 }, { t: this.shape_85 }, { t: this.shape_84 }, { t: this.shape_83 }, { t: this.shape_82 }, { t: this.shape_81 }, { t: this.shape_80 }, { t: this.shape_79 }, { t: this.shape_78 }, { t: this.shape_77 }, { t: this.shape_76 }, { t: this.shape_75 }, { t: this.shape_74 }, { t: this.shape_73 }, { t: this.shape_72 }, { t: this.shape_71 }, { t: this.shape_70 }, { t: this.shape_69 }, { t: this.shape_68 }, { t: this.shape_67 }, { t: this.shape_66 }, { t: this.shape_65 }, { t: this.shape_64 }, { t: this.shape_63 }, { t: this.shape_62 }, { t: this.shape_61 }, { t: this.shape_60 }, { t: this.shape_59 }, { t: this.shape_58 }, { t: this.shape_57 }, { t: this.shape_56 }, { t: this.shape_55 }, { t: this.shape_54 }, { t: this.shape_53 }, { t: this.shape_52 }, { t: this.shape_51 }, { t: this.shape_50 }, { t: this.shape_49 }, { t: this.shape_48 }, { t: this.shape_47 }, { t: this.shape_46 }, { t: this.shape_45 }, { t: this.shape_44 }, { t: this.shape_43 }, { t: this.shape_42 }, { t: this.shape_41 }, { t: this.shape_40 }, { t: this.shape_39 }, { t: this.shape_38 }, { t: this.shape_37 }, { t: this.shape_36 }, { t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.shape_31 }, { t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-131.7, -178.6, 263.4, 357.1);


	(lib.teteSmile = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F6DCC8").s().p("AAVAQQgMgDgKgGQgMgGgJgIQgJgIABgBIAYAPIAbANIAKAFIgBAAIgJgBg");
		this.shape.setTransform(-34.8047, -120.1273, 1.4408, 1.4408, 29.9995);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#F6DCC8").s().p("AgZAAQgIgEgJgHQgHgGAAgBIAYAOQAZANAbAGQAPADAIABIgMAAQghAAgegTg");
		this.shape_1.setTransform(-35.7788, -117.1327, 1.4408, 1.4408, 29.9995);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#F6DCC8").s().p("AgRACQgIgfAGgDQABgBAIAFQAKAHAOAGQAJAEAAACQAAADgJAEQgKAEgEAHQgEAHAAAJIgBAIIAAAAQgEAAgIgfg");
		this.shape_2.setTransform(-42.2239, -114.5482, 1.4408, 1.4408, 29.9995);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#ECC5AF").s().p("ABLAbQglgRgkgKQgZgIgvgKQgegHAAgDQAAgCAOgCQAfgEATABQAeAAAcAMQAgANAaAVQAYAUgDAFIgBAAQgEAAgVgJg");
		this.shape_3.setTransform(-10.9935, -101.0626, 1.4408, 1.4408, 29.9995);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#000000").s().p("ABdAWQgbgdgegNQgSgIgUgDQgMgCgagCQgbgBgbADIgWADQAAgCAYgGQAcgHAdABQAlAAAhAMQAeAKASAQQAOALAKAQQAMAWgDACIAAAAIgXgXg");
		this.shape_4.setTransform(-10.039, -102.6964, 1.4408, 1.4408, 29.9995);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#BC8568").s().p("AAFAMQgQgCgQgKQgOgJABgCIARAIQARAHAJACQAMADAOgDIAMgCQgOAIgQAAIgGAAg");
		this.shape_5.setTransform(-30.1047, -117.384, 1.4408, 1.4408, 29.9995);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#BC8568").s().p("AAGAOQgTgCgTgMQgQgLABgCIATAJQAXAKAIACQAPADAQgDIAOgDQgQAJgTAAIgHAAg");
		this.shape_6.setTransform(-33.0131, -117.1002, 1.4408, 1.4408, 29.9995);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#382918").s().p("AAOADIg1gFQAIgBATACIAoAEIAMAAg");
		this.shape_7.setTransform(-31.9346, -105.1274, 1.4408, 1.4408, 29.9995);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#BC8568").s().p("AhaAZQgFgCAEgQQAEgQALgIQAJgHARABIApAGQAkAGAnACIAcABQAAACgWACQgYADgZgCIgzgFQgVgCgNAHQgKAFgKANQgHAKgBAAIAAAAg");
		this.shape_8.setTransform(-32.3359, -104.2207, 1.4408, 1.4408, 29.9995);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#BC8568").s().p("AgSAHIg0gfIAcAPQAjAOAMAEQAUAEAZgGQAUgFABACQABACgDAFQgDAEgEADQgJAHgNAAQgXAAgjgSg");
		this.shape_9.setTransform(-34.7352, -114.0728, 1.4408, 1.4408, 29.9995);

		this.instance = new lib.barbe1();
		this.instance.setTransform(-3.35, 6.45, 1.4408, 1.4408, 29.9997, 0, 0, 18.3, 13.8);
		this.instance.alpha = 0.6016;

		this.instance_1 = new lib.barbe1_1();
		this.instance_1.setTransform(-5.9, 5.05, 1.4408, 1.4408, 29.9997, 0, 0, 18.2, 13.8);
		this.instance_1.alpha = 0.6016;

		this.instance_2 = new lib.barbe3();
		this.instance_2.setTransform(-49.2, -28.3, 1.4408, 1.4408, 29.9997, 0, 0, 16.1, 11);
		this.instance_2.alpha = 0.6016;

		this.instance_3 = new lib.barbe3_1();
		this.instance_3.setTransform(-48.35, -27.05, 1.4408, 1.4408, 29.9997, 0, 0, 16.1, 11);
		this.instance_3.alpha = 0.6016;

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#CA9781").s().p("ABrDrIAGgZQAHggABgbQAAg/gkg+QgUgfglgVQgugcgYgZQgsgsgbg7QgWgyAFgCQABgBASArQAaAzAmApQAfAiA6AlQAtAcAUAlQAOAcAGAgQAHAggEAZIgIAlQgMAtgDAAIAAAAg");
		this.shape_10.setTransform(12.0676, 6.886, 1.4408, 1.4408, 29.9997);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#CA9781").s().p("AimC9IgCggQgBgVABgRQAFh0AvgtQAYgYAzAAQA8gCAogWQAwgYAkgwQARgYAJgRQAGAEghAuQgmA4g2AbQgjARg2ACQgsACgXAVQgaAYgMAsQgIAagGA1QgEAaAAAhIgBAaQgBAAgCgPg");
		this.shape_11.setTransform(-46.6726, -41.9599, 1.4408, 1.4408, 29.9997);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#F9F9F9").s().p("AjJA1QgDgIAxgcIA7geQAygZAogIQAYgGALgBQAQgBAPADQAQADARAMQAVAPARAIQAXAKAcAEIAUAEQAAACgWAAIg+ABQg6AEgqAFIhaAQQhUAQgYAEIgPABQgFAAgBgBg");
		this.shape_12.setTransform(40.5175, -145.1302, 1.4408, 1.4408, 29.9995);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#F6DCC8").s().p("Aj8CIQgVgCgLgCQgWgGgHgOQgRghA/hDQBAhCBVgoQAxgYAjgJQA4gPAxAOQAUAGAdASQAeASAeAKQAsAPA2ADQAnACABAEQAAAFgeALIhiAjIhBAYQg4AUg5AAQg5gBgjANQgjAMg4ApQgnAcglAAIgFAAg");
		this.shape_13.setTransform(38.3762, -136.4368, 1.4408, 1.4408, 29.9995);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
		this.shape_14.setTransform(46.1313, -52.057, 1.4408, 1.4408, 29.9997);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#000000").s().p("ABDAvIAqgmIhIgkQgFAdgJAOQgNATgXACQgdAEgPgeIASgXIgRgLQgJgGgIgBQgKgBgPABIgaADQAgghBaAPQBbAOAkAsIg3Amg");
		this.shape_15.setTransform(52.0073, -47.8266, 1.4408, 1.4408, 29.9997);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#DFD8D4").s().p("AgFAkQgxgGgTgGQgWgGgNgOQgPgTADgKQAEgLAWgFQANgCAcgBQAugCArALQAiAJAaANQAcANgCAHQAAACgFACQgHAEgHAGIgYAYg");
		this.shape_16.setTransform(50.7289, -47.8468, 1.4408, 1.4408, 29.9997);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#6B3F2E").s().p("Ah4BVQgBgBABgHIAAgJQAIg7AHglQAEgYAPgOQAbgaAxALQASAFAUASQAkAhAdAUIAXAPQAHAFgBADQgCAJhGAEQhZAFgcAGQghAHgKARIgGANQgDAGgBAAIAAAAg");
		this.shape_17.setTransform(48.0127, -56.8345, 1.4408, 1.4408, 29.9997);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#000000").s().p("AA3AkIgzgRQgkgJgPgDQgigFggACIgMgvQBFALBDAZQA8AUA3Afg");
		this.shape_18.setTransform(-11.7367, -97.7778, 1.4408, 1.4408, 29.9997);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#221911").s().p("AA6AGQgNAAgXAEQgkAHguAFQgOABgSgBQgjgCgQgPQgGgEgFgGQgIgLACgHQADgIAnABQA9ACAegDQALgBBJgPQAigGATANQAbARAGAVIAFAXQAFARAJAMQg0gog0gEg");
		this.shape_19.setTransform(72.2908, -65.2834, 1.4408, 1.4408, 29.9995);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#221911").s().p("AB1A5QgcgSgWgMQhGgkhCgMQghgGgpAAQgcAAgBgDQgBgGAcgJQAcgLAggEQAvgHAuAKQAgAGBOAbQAZAJALAGQAOAJAEALQAEAOgHAQQgIAQgNAFQgEACgFAAQgKAAgMgHg");
		this.shape_20.setTransform(-2.338, -111.6639, 1.4408, 1.4408, 29.9995);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#F6DCC8").s().p("ACbAzQgFgNgEgHQgJgOgQgJQgMgHgZgHQhFgVgggFQg3gIgvAPIgkAOQgPAHgCgCQgCgDAPgNQAQgNATgJQAXgKArgEIASgBQARAAASABQA2AEAtAPQAkANANAHQAVALAGAQQAGAPgFATQgFASgGAAQgCAAgDgJg");
		this.shape_21.setTransform(-0.2266, -114.5125, 1.4408, 1.4408, 29.9995);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#985D42").s().p("ABBCJQgNgHgEgiQgFgkgTgNQgPgKgbgEQgUgCgMACQgGABgUAHQgVAHgaALQgVAJgJACQgPADgFADQgLAHgHAOIgGAMQgEgBAIguQAIg0ARgvIAOgmIASgsQAHgQAEgCQANgHAhARQAqAVAfACQAkADAngRQAigFAgAKQA5ATAFAcQACAOgCAQIgCAQQgCAOABALQABAPADASQACAKgBAGQgBARgnAaQgoAcgQAHQgPAIgLAAQgHAAgFgDg");
		this.shape_22.setTransform(59.3794, -54.3341, 1.4408, 1.4408, 29.9995);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#BC8568").s().p("AAbAVQgPgRgPgEQgNgCgQAFQgNAEgBgCQgEgFARgRQATgSATADQATACAPAWQAHALABAOQACAOgGADIAAAAQgEAAgMgNg");
		this.shape_23.setTransform(-18.5156, -42.3417, 1.4408, 1.4408, 29.9995);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#BC8568").s().p("AAeAUQgQgRgQgDQgOgCgQAEQgMAEgBgBQgEgGASgQQATgSASADQAWADAMAeQALAcgHAEIAAAAQgBAAgNgNg");
		this.shape_24.setTransform(-2.1843, -29.7309, 1.4408, 1.4408, 29.9995);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#BC8568").s().p("AgJBFIADgKQAEgNACgPQAEgggEgYQgDgPgHgPIgEgNQACgBAIAJQAIAJAFAMQANAegOAqQgMAkgFAAIAAAAg");
		this.shape_25.setTransform(6.9842, -27.1955, 1.4408, 1.4408, 29.9995);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#BC8568").s().p("AgEAdQgDgBgDgFIgIgNQgGgHgHgFQgGgEAAgCQAAgHAMgHQAMgGANABQAPABANAKQAMAKgCAGQgBADgGACQgKAEgHAFQgEADgHAIQgDAEgDAAIgBAAg");
		this.shape_26.setTransform(-16.572, -27.7366, 1.4408, 1.4408, 29.9995);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#FFFFFF").s().p("AgLByQgDgBgDgEQgEgGgFgDQgFgFgHgBQgGgCgBgCQgBgEANgLQASgQAIgMQAJgNAJgdQANgmAJgtIAHgjQACAAgBAZQgBAdgFAfQgCASgFAVQgDALABALQABAZAMAfQAJAXgDACQgCABgIgFQgKgGgJAAQgGABgKAGQgEADgEAAIgDAAg");
		this.shape_27.setTransform(4.5365, -56.6893, 1.4408, 1.4408, 29.9995);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#F6DCC8").s().p("AgCCwQgHgBgGgVQgIgXgMgHQgNgHgXAHQgUAGgBgBQgCgDATgTQAcgaAQgYQAQgVANgfQAEgLAThJQALgsANgXQARgeAGABQAJACABAnQAAAigFAoQgDAZgGASQgFAPAAAMQgCApAWAzQASAqgFAEQgDADgRgIQgTgJgNAEQgOAEgMATQgLAPgFAAIAAAAg");
		this.shape_28.setTransform(3.5086, -58.8992, 1.4408, 1.4408, 29.9995);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#26170A").s().p("AAAAXQgMgEgEgCQgKgFgBgIQgCgIAGgIQAGgJAJgCQANgEAOAOQAJAJAAAJQAAAOgKAFQgDABgEAAQgFAAgGgCg");
		this.shape_29.setTransform(-5.1298, -26.5312, 1.4408, 1.4408, 29.9995);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#26170A").s().p("AAAAYQgKgEgHgIQgEgEgDgGQgGgKAEgHQAHgNAVAEQAKACAIAIQAJAJAAAJQAAANgKAGQgEADgGAAQgFAAgEgCg");
		this.shape_30.setTransform(-21.7587, -38.2686, 1.4408, 1.4408, 29.9995);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#F6DCC8").s().p("AimDkQgOgBgMgaQgHgQgPgvQgJgggFgiQgCgWgDgpQgCg3ACgiQALiPAggEQAIgBALANQATAZAOAMQA5A3A+AKQAdAEAhgEQATgDAcgHQAdgHAogQQAfgKATAKQASAJAFAOQAIAUgQAdQgbA0g2AlIgwAcQgjAOgjgBQgfAAgWALQgzAYgnBLIgXAtQgLARgMAAIgCAAg");
		this.shape_31.setTransform(-41.2216, -65.7071, 1.4408, 1.4408, 29.9995);

		this.instance_4 = new lib.barbebas();
		this.instance_4.setTransform(-48.75, 18, 1.4408, 1.4408, 29.9995, 0, 0, 27.5, 13.6);
		this.instance_4.alpha = 0.6016;

		this.instance_5 = new lib.barbebas_1();
		this.instance_5.setTransform(-49.3, 19.35, 1.4408, 1.4408, 29.9995, 0, 0, 30.9, 15.3);
		this.instance_5.alpha = 0.6016;

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#F0F2F1").s().p("AgGgDIAGAAQADABADACQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAIgCABQgEAAgHgHg");
		this.shape_32.setTransform(-36.3675, -16.1996, 1.4408, 1.4408, 29.9997);

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#9C897F").s().p("AgDAQQgBAAAAgGIABgHQADgTADABQABAAABAGQAAAHgCAFIgDAJQAAABgBABQAAAAgBABQAAAAAAABQgBAAAAAAIAAAAg");
		this.shape_33.setTransform(-8.5921, 11.4146, 1.4407, 1.4407, 29.9995);

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#9C897F").s().p("AgDADIAAgMQABgEACgFQABgBAAAAQABgBAAgBQAAAAABAAQAAAAAAAAQABAAAAAJIgBAPIgDANQgCAGgBAAQABgGgBgNg");
		this.shape_34.setTransform(-15.3694, 8.5778, 1.4407, 1.4407, 29.9995);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#9C897F").s().p("AgBAKQgBgKACgMQABgKABABIAAATQAAAZgBAAg");
		this.shape_35.setTransform(-23.8096, 4.8305, 1.4407, 1.4407, 29.9995);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#9C897F").s().p("AAAAPQgDgJAAgIQABgHACgHQACgGACABIAAArQgCAAgCgHg");
		this.shape_36.setTransform(-30.2324, 1.0796, 1.4407, 1.4407, 29.9995);

		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#9C897F").s().p("AgCAOQgBgOADgNQACgMABAAQABAAgCAZIgCAaQgBAAgBgMg");
		this.shape_37.setTransform(-39.1132, -5.6681, 1.4407, 1.4407, 29.9995);

		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#9C897F").s().p("AgBAOQgDgPADgQQABgOACAAQACAAgBAQIgBAPQgCATACANQgCAAgBgSg");
		this.shape_38.setTransform(-45.461, -11.4524, 1.4407, 1.4407, 29.9995);

		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#9C897F").s().p("AAAANQgCgUABgLIABgFIABgFQABAAAAAZQAAAggBAAIgBgQg");
		this.shape_39.setTransform(-49.0824, -15.1235, 1.4407, 1.4407, 29.9995);

		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#9C897F").s().p("AgBAAQADgVABAAQADAAgDATQgBAIgCAIQgCAIgBAAQgBAAADgWg");
		this.shape_40.setTransform(-51.1481, -20.5584, 1.4407, 1.4407, 29.9995);

		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#F0F2F1").s().p("AgjANIAOgEQATgFANgFIAZgLIAAABQgCAFgKADQgMAEgXAHIgYAFIAAAAg");
		this.shape_41.setTransform(-29.81, 16.3854, 1.4407, 1.4407, 29.9995);

		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f("#F0F2F1").s().p("AAWAeQgogRgUgPQgSgOgEgSQgBgFABgCQADgBAMANIAcAbQAYATAeAOIAYAKIgBABQgHAAgfgMg");
		this.shape_42.setTransform(-52.76, -3.4383, 1.4407, 1.4407, 29.9995);

		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f("#3D1608").s().p("AgCBfQgigCgmgLIgrgNQgVgIgPgLQgTgNgQgZQgXgggOgQIgTgTIgCgCIgOgLQgMgZAEgCQADgBAGAEIABABIATAPQAcAaAUAgIASAdQALAPAQAMQAQALAVAIIAqANQAlAKAiACQAxAEAtgKQAfgHANgFQAXgHAQgMIAKgHIAOgPIAGgGIACgCIAEgEIAJgHIAKgEIACAAIADAAQAKgBAJABQAJACABAEIAAACIgBACQgCAEgKAGQgKgDgNACQgKABgJAGQgGAEgPARIgKAKQgOAMgWAHQgPAFgrAIQglAHgkAAIgTgBg");
		this.shape_43.setTransform(-31.3599, -3.2452, 1.4408, 1.4408, 29.9997);

		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.f("#834C35").s().p("Ag8BpIgkgKQgpgNgOgGQgWgKgQgQQgJgJgGgOIgcg7Igcg4QgMgYAEgCQADgCAGAEIABABIATAQQAcAZAUAhIASAeQALAOAQALQAQALAVAIIAqANQAlAKAiADQAxADAtgKQAfgHANgEQAXgIAQgLIAKgIIAOgOIAGgGIACgBIAHgHIAGgEIAKgEIACAAIADgBQAKgBAJABQAJACABAEIAAADIgBABQgCAEgKAGIgcAQIgCABIgQAKQgSAMgWARQgSAPgUAKQgwAagmAGQgPACgQAAQgjAAgpgLg");
		this.shape_44.setTransform(-32.7953, -0.7591, 1.4408, 1.4408, 29.9997);

		this.shape_45 = new cjs.Shape();
		this.shape_45.graphics.f("#3D1608").s().p("AEEAxIhFgHIgCAAIhIgKQgtgIgSgBQghgEgYABIgYABQgOgBgTgEIgFgBQgNgCgQgGIgSgGIAAgBQgdgJgbgGIgUgEIAAAAIhIgXIgBAAIgGgDIgCgBIABAAQAAgCAJAAIgCABIAAABIABABIAJAEIA7AOIABABIAgAHQAaAGAYAKQAYAIAVAEIACABIACAAIAPADQANACAMgBIAWAAQAOgBAdACICGAUIADAAIACAAIBFAHIABAAIAGACIADABIAFACIABAAIABABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgGAAg");
		this.shape_45.setTransform(-27.3761, -10.0317, 1.4408, 1.4408, 29.9997);

		this.shape_46 = new cjs.Shape();
		this.shape_46.graphics.f("#F0F2F1").s().p("AAuAJIgTgFIgBAAQgcgJgXgEQgZgFgZgBIgWgBIAIgBIAjABQAeACA1ANIABAAIAZAGQAqAKABACIAAABIgCAAQgIAAgqgJg");
		this.shape_46.setTransform(-46.5796, -26.189, 1.4408, 1.4408, 29.9997);

		this.shape_47 = new cjs.Shape();
		this.shape_47.graphics.f("#975D49").s().p("AEEAxIgHAAIgsgLIhpgWQg3gLgRgBQgSgCgagBQgXgBgSgCIgdgGIAAAAIgrgNIgTgFIAAAAIgdgGQglgGgdgDIgTAAIgCgBIgBAAIgGgDIgCgBIABAAQAAgCAKAAIARABQAwAEAzAMIACAAIAYAGIArANIAAAAIAUAEQASACAXABQAaABASACQAWACAyAKQB8AaAZAGIABAAIAGACIADABIAFACIABAAIABABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgGAAg");
		this.shape_47.setTransform(-27.3761, -10.0317, 1.4408, 1.4408, 29.9997);

		this.shape_48 = new cjs.Shape();
		this.shape_48.graphics.f("#834C35").s().p("AEEAxIhFgHIgCAAIhIgKQgtgIgSgBQghgEgYABIgYABQgOgBgTgEIgFgBQgNgCgQgGIgSgGIAAgBQgdgJgbgGIgUgEIAAAAIhIgXIgBAAIgGgDIgCgBIABAAQAAgCAKAAIARABQAwAEAzAMIACAAIAYAGIArANIAAAAIAUAEQASACAXABQAaABASACQAWACAyAKQB8AaAZAGIABAAIAGACIADABIAFACIABAAIABABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgGAAg");
		this.shape_48.setTransform(-27.3761, -10.0317, 1.4408, 1.4408, 29.9997);

		this.shape_49 = new cjs.Shape();
		this.shape_49.graphics.f("#592928").s().p("ACyAhIgCgBIgBgGQgCgFgEgCIgCAAIgCAAQgHAAgGAEIgIAFIgSgDIAAgGIgBAAQgCgDgGgBQgHgBgHACQgFAAgIADIgCABIgqgFQgBgBAAAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgFgBIgCABIgBAAIhvgSIgBgBIgxgIIAAgBIgLgBIgBgCQgEgCgFgBQgGgBgEACIgWgDIgCgBIgBAAIgBAAIgJgBQgBgCgIgIIgBAAIgBgBIAAgBQABgDAeAFIBbAQIBPAOIC6AaQARAEAEAFIABACQAAAEgFADQgFgDgRgDg");
		this.shape_49.setTransform(-26.7186, -6.9923, 1.4408, 1.4408, 29.9997);

		this.shape_50 = new cjs.Shape();
		this.shape_50.graphics.f("#7C3A36").s().p("ACpAtIADgHQAEgGAAgGIgBgGQgCgFgEgCIgCgBIgCAAQgHAAgGAFIgIAEIgMALQgFAHgBgBQgBAAAAgGIABgNIAAgGIgBAAQgCgDgGgBQgHgBgHABQgFABgIADIgCABQgKAFgLANQgEAHgCgBIAAgGIAAgGQAAgHgHgGIgIgFQgBAAAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgFgBIgCAAIgBAAIgCABQgGABgIALIgGAMIgBABIgCgBIgBgIQgCgGgDgEQgDgHgJgEQgJgDgKAAQgGAAgFABIgOANIgCACIgKAKIgBABIgBAAQgBgBABgFQABgHgBgEIAAgCQgDgIgKgFQgOgJgPABQgFAAgEACQgCADgBAEQgCAFgCAAQgCABgFgGIgBgCQgCgEgBgFIgCgHIgBgBQgEgDgFAAQgGgBgEACIgDACQgCACABAIIABAJIAAAAQgCAAgFgHIgEgFIgIgNIgCgBIgBAAIgBABQgDAGgDAAQgBAAgCgGIAAgBQgBgDgIgIIgBAAIgBgBIAAAAQABgDAeAFIBbAPIBPAOIC6AaQARAEAEAFIABADQAAAEgFADQgIAIgRAEIgEAAIgCAAg");
		this.shape_50.setTransform(-27.1688, -6.2124, 1.4408, 1.4408, 29.9997);

		this.shape_51 = new cjs.Shape();
		this.shape_51.graphics.f("#D8DDDA").s().p("AC6AvQgGgLgegCIg5AAIgIAAIgGAAIgxgBIgDAAQgigDgVgJIgVgKQgJgFgNgEQgSgEgPgBIgLgCQgIAAgNgFIgpgLQgOgDgDACIgBABIABgMIACgIIAEgGIACgBQAGgFAKABIAMACQAOAEAnAPQAnAOAtAHIAaAEQAdAEA+AEIANABIAyAEQATACAIAFIABABQAFADABADIABABIACAGQAAAJgEAKIgEAHQAAgDgCgEg");
		this.shape_51.setTransform(-29.2218, -7.6913, 1.4408, 1.4408, 29.9997);

		this.shape_52 = new cjs.Shape();
		this.shape_52.graphics.f("#F0F2F1").s().p("ABdBEIgIgEQgDgCgEAAQgGgCgHAEQgJAEgGAAQgHAAgHgDQgIgDgHAAQgGAAgEACIgLAEQgQADgbgJIgOgHQgOgFgdgBIgHAAQgSAAgVgMQgXgOgMgVIgFgJQgIgPgBgQIABgMIACgIIAEgGIACgBQAGgFAKABIAMACQAOAEAnAPQAnAOAtAHIAaAEQAdAEA+AFIANABIAyAEQATACAIAFIABABQAFACABADIABABIACAGQAAAJgEAKIgEAHIAAAAIgBADQgLAQgLAEIgHACIgHgEQgFgDgDAAIgEABIgHAFQgFAFgFACQgIACgHAAQgHAAgHgCg");
		this.shape_52.setTransform(-30.4374, -5.5857, 1.4408, 1.4408, 29.9997);

		this.shape_53 = new cjs.Shape();
		this.shape_53.graphics.f("#D8DDDA").s().p("AAqArQhLgNgygWQgOgGglggQgIgHABgFQABgFAGgCQAFgBADABQAPAFANAIQAJAFAOAMQAMAJAIgBIAIAAQADABALAGQAEACAHABIASACQAKADAKAEQAKACAJABIARADIAMAEQAEACAGAAQAMACAJgCQAHgBAKgDQAHgDAFABQALADADADQAHAIgHALQgFALgdAAQgXAAgngHg");
		this.shape_53.setTransform(-43.6668, -0.0375, 1.4408, 1.4408, 29.9997);

		this.shape_54 = new cjs.Shape();
		this.shape_54.graphics.f("#000000").s().p("ADCBLIk2gtIghgGQgUgFgPgHIgIgDIgagMIgkgYIgGgNQgKgWABgFIADgEIgCgBIgBgBIABAAQAAgCAKAAIAhACQAdABA2AOIACAAIAYAGQAqALABACIAAAAIAUAEQASACAXABQAaABASACQAWADAyAKQB8AZAZAGIABAAIAGACIADABIAFACIABAAIABABIAAANIgBACIAAACQgDAEgKAGIgcARIgCABIgPAKg");
		this.shape_54.setTransform(-29.3189, -6.6947, 1.4408, 1.4408, 29.9997);

		this.shape_55 = new cjs.Shape();
		this.shape_55.graphics.f("#3F3F3F").s().p("AgsBtIghgWQg2gmgsgxIgZgcQgPgRgJgQIgFgKQgHgSgGgSIgCgGIAAgFIABgBIAFAAIADABIAFABIAIAFIA6ApIBHAoQAaAMAbAKIAEABIAfAIQAuALAuABQAbAAAkgCIAygEIAVABIAKADQAJADAFAIIgCABIgQAKQgSALgXASQgRAOgUAKQgxAaglAGQgPADgRAAQgiAAgpgLg");
		this.shape_55.setTransform(-34.5002, -2.3748, 1.4408, 1.4408, 29.9997);

		this.shape_56 = new cjs.Shape();
		this.shape_56.graphics.f("#985D42").s().p("AgfBpQgOgbALgpQAFgWANgXQAFgKAGgJQAFgHACgHQAEgNADgdQACgUAKgKQANgNAGAEQADACgSAmQgYAxgDArQgEAogBAWIAAAlQgBAOgEABIgBAAQgHAAgLgTg");
		this.shape_56.setTransform(84.7756, -0.9288, 1.4408, 1.4408, 29.9997);

		this.shape_57 = new cjs.Shape();
		this.shape_57.graphics.f("#985D42").s().p("AAGgaIAHgYIgOA9QgGAbgFANIAShNg");
		this.shape_57.setTransform(83.331, 8.3913, 1.4408, 1.4408, 29.9997);

		this.shape_58 = new cjs.Shape();
		this.shape_58.graphics.f("#985D42").s().p("AghCGQgIgDABgcQAAgSAHg/QAHg9AMgyIAMgtIgDALQgLAygHA/QgHA+gBASQAAAcAIADQAJAEARgUQAQgRANgXIAJgUQgGAggNAVQgNAXgOARQgQARgIAAIgEgBg");
		this.shape_58.setTransform(74.7459, 7.7326, 1.4408, 1.4408, 29.9997);

		this.shape_59 = new cjs.Shape();
		this.shape_59.graphics.f("#BC8568").s().p("AAAB8QgCgCADgYQAHgoACgYQAEg2gJgfQgFgVgIgRIgOgXQgHgJACgBQACgCAOAIIAJAGQAHAGAFAFQAOARAEAmQADAbgGAZQgGAaACAXQACASgBAHQgBAPgHANQgIAOgFAAIgBAAg");
		this.shape_59.setTransform(-64.8508, -112.5992, 1.4408, 1.4408, 29.9995);

		this.shape_60 = new cjs.Shape();
		this.shape_60.graphics.f("#BC8568").s().p("Ag9DCQgIgDAAgcQABgTAHg+QAHg/ALgxQAFgUAOgtQAQg1AJgTQAJgRAMgFIAOgEQAPgCAIAGQAOAKgEAjQgDAXgQA/QgIAhgLAgIgTBSQgHAcgKAVQgNAXgQARQgPAQgJAAIgDAAg");
		this.shape_60.setTransform(82.6025, 2.3647, 1.4408, 1.4408, 29.9995);

		this.instance_6 = new lib.Group();
		this.instance_6.setTransform(-35.2, 10.35, 1.4408, 1.4408, 29.9997, 0, 0, 61.9, 41);
		this.instance_6.alpha = 0.6016;

		this.instance_7 = new lib.Group_1();
		this.instance_7.setTransform(-36.05, 10.75, 1.4408, 1.4408, 29.9997, 0, 0, 62.2, 41.6);
		this.instance_7.alpha = 0.6016;

		this.shape_61 = new cjs.Shape();
		this.shape_61.graphics.f("#48341F").s().p("AI7IsQgHgEAFgUIAPgwQAYgPAWgaQBGhQgGiSQgDhNgZhZIglhmQgRgyAAgzQAAgSAFg2QADgggIgYQgLgdgegZQgpghhagpQiIg9hFgVQhxgihzAFQhHAEhbAWQiLAiiMBVQhXA1geAWQgtAggcAmQhIBhgCCJQgBBPAeCKQATBVARAAIADAAQgMArgMAAQgTAAgThdQgeiYABhWQABiXBLhqQAdgqAvgkQAfgYBag6QCPhbCTgoQBegYBJgEQB4gFB1AlQBJAXCMBDQBdAtAqAlQAgAaALAgQAIAagDAjQgFA8AAAUQAAA4ASA3IAmBwQAaBiADBUQAGCghJBZQgWAbgZARQgUAOgLAAQgEAAgCgCg");
		this.shape_61.setTransform(55.284, -121.9913, 1.4408, 1.4408, 29.9995);

		this.shape_62 = new cjs.Shape();
		this.shape_62.graphics.f("#20170E").s().p("AJ6DZQgVg1hFiXQgvhkgVgiQgUgegZgNQgigSg0AHQhHAJgxgHQg/gJg9gnQg+gmg4gIQhWgMhYAcQgxAQgnAYQgyAegnAuQgXAbgmA4Qg2BSgsBwQgWA4gLAoIgSBAQgKAdgJAAQgTAAgThdQgPhMgGgqQgKhJACg7QABA4AKBDQAFAoANBHQATBnATAAQAJAAAKggIAShHQALgsAWg9QAsh7A2hbQAlg+AYgeQAngyAygiQAmgaAygSQBYgfBWANQA4AJA+AqQA9AqA/AKQAxAIBHgKQA0gHAiAUQAZAOAUAiQAVAkAvBwQBHCpAUA7QAfBYgBAxQAAgsgfhPg");
		this.shape_62.setTransform(46.8114, -123.7025, 1.4408, 1.4408, 29.9995);

		this.shape_63 = new cjs.Shape();
		this.shape_63.graphics.f("#48341F").s().p("AhNDAQgJg6gChBQgBgnABgWQACghAIghQAPhEAlg9QBBhNAKAGQACACgJAcQgKAfAIAZQAFARATAQQATAQAEANQAIAYgXAjQgiAsgRAYQgvBGgOBgIgGA4QgDAUgGAAQgMAAgKhDg");
		this.shape_63.setTransform(-16.2863, -165.6552, 1.4408, 1.4408, 29.9995);

		this.shape_64 = new cjs.Shape();
		this.shape_64.graphics.f("#382918").s().p("AI7IsQgJgGASg1QAZhKADg2QADgsgfhRQgVg3hIidQgvhkgVghQgUgfgZgNQgigSg0AHQhHAJgwgHQhAgJg9gmQg8gng6gIQhVgMhYAcQgvAQgqAYQgyAfgnAtQgYAcglA4Qg2BRgsBwQgWA4gLAoIgSBAQgKAdgJAAQgTAAgThdQgeiYABhWQABiXBLhqQAdgqAvgkQAfgYBag6QCPhbCTgoQBegYBJgEQB4gFB1AlQBJAXCMBDQBdAtAqAlQAgAaALAgQAIAagDAjQgFA8AAAUQAAA4ASA3IAmBwQAaBiADBUQAGCghJBZQgWAbgZARQgUAOgLAAQgEAAgCgCg");
		this.shape_64.setTransform(55.284, -121.9913, 1.4408, 1.4408, 29.9995);

		this.shape_65 = new cjs.Shape();
		this.shape_65.graphics.f("#985D42").s().p("ABoF5QAMgkAJgmQAKgnADguQADhJgShUQgHgjgTgmIhTiyQghhLgLgSQgRgcgYgIQgGgCgrgDQgfgDgTgPQgbgUADgOQADgPAkgHQAkgIAiAHQA+AMAzBNQAjAyBBCNQAgBDAKAcQAPAjAFAaQAVB6g3CGQgcBEghAqg");
		this.shape_65.setTransform(94.3014, -64.8542, 1.4408, 1.4408, 29.9995);

		this.shape_66 = new cjs.Shape();
		this.shape_66.graphics.f("#CA9781").s().p("ABAKhQgMgCgHgwQgKhDgSgoQgUgtgkgfQgVgSgvgcQgvgcgXgTQgkgggVguQgOgcgJg1IgPhfQgGgeABggQABgmAIglQALgyAXg3QAbg/AghDQAbg5AJgWQAihYAGh+IAEhHQADgbAKgCQAJgBARAQQAWAWAXALQAVAKAVABQAPAAAWgDIAfgFQARgCAPAEQBmAYAkEVIAJBPQABAJgEAxIgLCJQgKB8gEApQgHA8gPBDQgJApgeB0IAAABQgtCRhPB6g");
		this.shape_66.setTransform(64.1147, -39.3459, 1.4408, 1.4408, 29.9995);

		this.shape_67 = new cjs.Shape();
		this.shape_67.graphics.f("#BC8568").s().p("ACnB+IgMgSIgOgQIgEgEQgGgFgNAAQgJABgvgSQg8gYgogLQgdgIgXADQgJACgKAEQgIADgGABQgXACgYgPQgZgQgEgUQgHghAPghQAJgUAJgJQAJgIAIgEQAUgLAlABQAuAEAsAQQAcAQAcABQALABATgDQASgEAOADQAWAEAQAKQAYAPAOAcQAYAsgJBBQgJA7gQACIAAAAQgEAAgEgFg");
		this.shape_67.setTransform(-7.5648, -102.0674, 1.4408, 1.4408, 29.9995);

		this.shape_68 = new cjs.Shape();
		this.shape_68.graphics.f("#CA9781").s().p("AJRGvQgKgGATg2QAZhKADg1QADgtgfhQQgVg3hJicQgvhmgVghQgUgfgYgMQgigSg0AGQhIAJgwgHQhAgJg9gmQg9gmg4gIQhWgMhYAcQgvAPgpAZQgyAegoAuQgXAbglA4Qg3BTgsBvQgVA4gLAnQgOAmgKAuQgFAYgFAhQgEAigDAmQgBAcgBAAQgCAAgBgVIgCgpQABgmgBgYQgBgWgEgjQAVhoAhheQAXhKARgsQAfhQAhgnQBviDDJgpQC8gnC2A3QBVAaBPAvQCKBTBNB/QBGByAHCLQAGBsggC0QgPAJgIAAQgEAAgCgCg");
		this.shape_68.setTransform(42.6974, -103.6468, 1.4408, 1.4408, 29.9995);

		this.shape_69 = new cjs.Shape();
		this.shape_69.graphics.f("#BC8568").s().p("AgCgHQgKgbAAgNIAMApQAJAbAFAbQgFgUgLgjg");
		this.shape_69.setTransform(-64.4084, -128.344, 1.4408, 1.4408, 29.9995);

		this.shape_70 = new cjs.Shape();
		this.shape_70.graphics.f("#BC8568").s().p("AAkAPIgPgcQgHgLgIgCQgKgDgOAJQgOAIgIANQgGANAAANQgEgQAAgKQgBgMAHgLQAHgOAOgIQAOgJAKADQAIACAHALQAEAGALAXQAOAeADAMQADAJAAAJIgPglg");
		this.shape_70.setTransform(-56.035, -131.9741, 1.4408, 1.4408, 29.9995);

		this.shape_71 = new cjs.Shape();
		this.shape_71.graphics.f("#BC8568").s().p("AgIBNQALhHACgZQAEg3gEgmIgCgOQAEATADASQAEAkgEA5QgDAfgHAqQgGAogBAKQgIgJAHgpg");
		this.shape_71.setTransform(-76.7959, -102.3874, 1.4408, 1.4408, 29.9995);

		this.shape_72 = new cjs.Shape();
		this.shape_72.graphics.f("#BC8568").s().p("AgUBEQAOgMAEgOQAKgXAEgSQAGgRADgQQAEgSABgYQAMBFgaAsQgNAYgTAJIgJADIAJgHg");
		this.shape_72.setTransform(-74.6356, -92.26, 1.4408, 1.4408, 29.9995);

		this.shape_73 = new cjs.Shape();
		this.shape_73.graphics.f("#ECC5AF").s().p("AgaDWQgMgHAHgpQANhSABgTQAFg4gFglQgEgkgWg/QgNgoALgUQAIgOAOgIQAOgJAKADQAIACAGAKQAFAHALAXQAOAhADAJQAHAbgJAlQgFAVgNAmQgTA7ADBaQACBCgSAIQgHACgFAAQgGAAgEgDg");
		this.shape_73.setTransform(-67.8905, -111.2729, 1.4408, 1.4408, 29.9995);

		this.shape_74 = new cjs.Shape();
		this.shape_74.graphics.f("#ECC5AF").s().p("AkBNQQhfgpg/g2QhZhLgyhtQgfhEgniWQg+jpAfj3QARiNA9jIQAghoAQgmQAXg4AignQBviDDIgpQC8gnC3A3QCGAqBnBSQBYBGA2BZQAoBCATBJQAbBngMCJQgIBWgmDAQgZCEgYBKIAAAAQgtCRhPB6QgLASgPAUQhZB+g1AzQhZBXhuAdQg6APg7AAQhqAAhvgwg");
		this.shape_74.setTransform(7.991, -51.3575, 1.4408, 1.4408, 29.9997);

		this.shape_75 = new cjs.Shape();
		this.shape_75.graphics.f("#6B3F2E").s().p("AFiKLQASgmAFgsQAGg2gPgzQgShogihwQgjhvgihcQgRgsgCgfQgEgnAMhbQAJhEgPgQQgKgKgWAHQgLADgoAUQhZAshFgCQg5gBhKgpQhEgmg/AEQguADhEAaQgyATgHgKQgEgFAHgOIAVgmQAXgsAMg1QAIghAJhGQAHgwgCglQgBgXAGgKQAcgyB2gHQBqgHCKAeQCJAdBeAvQBnA1ACA0QABAGgEAIIgQAmQg0CGAFBxQABAkAJAqQANBDAgA+QAvBbAHAUQATAyAHA7QAFAnAEBoIgEBgQgKBmgjAZQgMAJgMABIgDAAQgHAAgJgDg");
		this.shape_75.setTransform(-101.4026, 95.2441, 1.4408, 1.4408, 29.9995);

		this.shape_76 = new cjs.Shape();
		this.shape_76.graphics.f("#D59562").s().p("AEwGfQilitgbgZQhrhjh7hZIi3h5QhXg7gigmQgsgxgBg6QgBgmAXgnQAnhFALgdQDNC7ChBmQCeBkAnggQAdgYAdgmIAXghIASggQAFgKAFAAQAZgEApBoQAfBQAbBoQANAyAWBdQARBDALgBIADgBQACBbgQA9QgRBAghANQgFACgGAAQggAAg4g5g");
		this.shape_76.setTransform(-116.613, 116.278, 1.4408, 1.4408, 29.9995);

		this.shape_77 = new cjs.Shape();
		this.shape_77.graphics.f("#BC8568").s().p("AEwJ8QimiugagYQhrhjh7hZIi3h6QhXg7gigmQgsgwgBg7QAAgnAig6QAthNAYhhQAUhRAEhcQACg+AVgbQArg5BrgSQBjgRB3AVQB5AWBZAzQBiA4AZBJQAMAkgJAoQgFAVgYA4QgyB0AKBpQAHBBAgBAQAuBbASA8QAzCigFCjQgECng8AXQgFACgHAAQggAAg3g5g");
		this.shape_77.setTransform(-100.3614, 88.1549, 1.4408, 1.4408, 29.9995);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_77 }, { t: this.shape_76 }, { t: this.shape_75 }, { t: this.shape_74 }, { t: this.shape_73 }, { t: this.shape_72 }, { t: this.shape_71 }, { t: this.shape_70 }, { t: this.shape_69 }, { t: this.shape_68 }, { t: this.shape_67 }, { t: this.shape_66 }, { t: this.shape_65 }, { t: this.shape_64 }, { t: this.shape_63 }, { t: this.shape_62 }, { t: this.shape_61 }, { t: this.instance_7 }, { t: this.instance_6 }, { t: this.shape_60 }, { t: this.shape_59 }, { t: this.shape_58 }, { t: this.shape_57 }, { t: this.shape_56 }, { t: this.shape_55 }, { t: this.shape_54 }, { t: this.shape_53 }, { t: this.shape_52 }, { t: this.shape_51 }, { t: this.shape_50 }, { t: this.shape_49 }, { t: this.shape_48 }, { t: this.shape_47 }, { t: this.shape_46 }, { t: this.shape_45 }, { t: this.shape_44 }, { t: this.shape_43 }, { t: this.shape_42 }, { t: this.shape_41 }, { t: this.shape_40 }, { t: this.shape_39 }, { t: this.shape_38 }, { t: this.shape_37 }, { t: this.shape_36 }, { t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.instance_5 }, { t: this.instance_4 }, { t: this.shape_31 }, { t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.instance_3 }, { t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = getMCSymbolPrototype(lib.teteSmile, new cjs.Rectangle(-156.3, -204.3, 312.6, 408.6), null);


	(lib.Interpoler18 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F6DCC8").s().p("AAVAQQgMgDgKgGQgMgGgJgIQgJgIABgBIAYAPIAbANIAKAFIgBAAIgJgBg");
		this.shape.setTransform(-73.3973, -87.554, 1.4183, 1.4183, -2.7034);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#F6DCC8").s().p("AgZAAQgIgEgJgHQgHgGAAgBIAYAOQAZANAbAGQAPADAIABIgMAAQghAAgegTg");
		this.shape_1.setTransform(-72.6116, -84.5555, 1.4183, 1.4183, -2.7034);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#F6DCC8").s().p("AgRACQgIgfAGgDQABgBAIAFQAKAHAOAGQAJAEAAACQAAADgJAEQgKAEgEAHQgEAHAAAJIgBAIIAAAAQgEAAgIgfg");
		this.shape_2.setTransform(-76.5756, -78.9871, 1.4183, 1.4183, -2.7034);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#ECC5AF").s().p("ABLAbQglgRgkgKQgZgIgvgKQgegHAAgDQAAgCAOgCQAfgEATABQAeAAAcAMQAgANAaAVQAYAUgDAFIgBAAQgEAAgVgJg");
		this.shape_3.setTransform(-43.5354, -84.4259, 1.4183, 1.4183, -2.7034);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#000000").s().p("ABdAWQgbgdgegNQgSgIgUgDQgMgCgagCQgbgBgbADIgWADQAAgCAYgGQAcgHAdABQAlAAAhAMQAeAKASAQQAOALAKAQQAMAWgDACIAAAAIgXgXg");
		this.shape_4.setTransform(-43.6137, -86.2868, 1.4183, 1.4183, -2.7034);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#BC8568").s().p("AAFAMQgQgCgQgKQgOgJABgCIARAIQARAHAJACQAMADAOgDIAMgCQgOAIgQAAIgGAAg");
		this.shape_5.setTransform(-68.0454, -87.7812, 1.4183, 1.4183, -2.7034);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#BC8568").s().p("AAGAOQgTgCgTgMQgQgLABgCIATAJQAXAKAIACQAPADAQgDIAOgDQgQAJgTAAIgHAAg");
		this.shape_6.setTransform(-70.3034, -85.9995, 1.4183, 1.4183, -2.7034);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#382918").s().p("AAOADIg1gFQAIgBATACIAoAEIAMAAg");
		this.shape_7.setTransform(-63.0427, -76.6559, 1.4183, 1.4183, -2.7034);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#BC8568").s().p("AhaAZQgFgCAEgQQAEgQALgIQAJgHARABIApAGQAkAGAnACIAcABQAAACgWACQgYADgZgCIgzgFQgVgCgNAHQgKAFgKANQgHAKgBAAIAAAAg");
		this.shape_8.setTransform(-62.8929, -75.6915, 1.4183, 1.4183, -2.7034);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#BC8568").s().p("AgSAHIg0gfIAcAPQAjAOAMAEQAUAEAZgGQAUgFABACQABACgDAFQgDAEgEADQgJAHgNAAQgXAAgjgSg");
		this.shape_9.setTransform(-70.1199, -82.5759, 1.4183, 1.4183, -2.7034);

		this.instance = new lib.barbe1_2();
		this.instance.setTransform(20.1, 0.3, 1.4182, 1.4182, -2.7036, 0, 0, 18.4, 13.6);
		this.instance.alpha = 0.6016;

		this.instance_1 = new lib.barbe1_1_1();
		this.instance_1.setTransform(17.2, 0.85, 1.4182, 1.4182, -2.7036, 0, 0, 18.2, 13.9);
		this.instance_1.alpha = 0.6016;

		this.instance_2 = new lib.barbe3_2();
		this.instance_2.setTransform(-36.55, -4.2, 1.4182, 1.4182, -2.7036, 0, 0, 16.1, 10.7);
		this.instance_2.alpha = 0.6016;

		this.instance_3 = new lib.barbe3_1_1();
		this.instance_3.setTransform(-35, -3, 1.4182, 1.4182, -2.7036, 0, 0, 16.1, 11.2);
		this.instance_3.alpha = 0.6016;

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#CA9781").s().p("ABrDrIAGgZQAHggABgbQAAg/gkg+QgUgfglgVQgugcgYgZQgsgsgbg7QgWgyAFgCQABgBASArQAaAzAmApQAfAiA6AlQAtAcAUAlQAOAcAGAgQAHAggEAZIgIAlQgMAtgDAAIAAAAg");
		this.shape_10.setTransform(32.9745, -7.2796, 1.4182, 1.4182, -2.7036);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#CA9781").s().p("AimC9IgCggQgBgVABgRQAFh0AvgtQAYgYAzAAQA8gCAogWQAwgYAkgwQARgYAJgRQAGAEghAuQgmA4g2AbQgjARg2ACQgsACgXAVQgaAYgMAsQgIAagGA1QgEAaAAAhIgBAaQgBAAgCgPg");
		this.shape_11.setTransform(-41.657, -16.4991, 1.4182, 1.4182, -2.7036);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#F9F9F9").s().p("AjJA1QgDgIAxgcIA7geQAygZAogIQAYgGALgBQAQgBAPADQAQADARAMQAVAPARAIQAXAKAcAEIAUAEQAAACgWAAIg+ABQg6AEgqAFIhaAQQhUAQgYAEIgPABQgFAAgBgBg");
		this.shape_12.setTransform(-24.3047, -148.3219, 1.4183, 1.4183, -2.7034);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#F6DCC8").s().p("Aj8CIQgVgCgLgCQgWgGgHgOQgRghA/hDQBAhCBVgoQAxgYAjgJQA4gPAxAOQAUAGAdASQAeASAeAKQAsAPA2ADQAnACABAEQAAAFgeALIhiAjIhBAYQg4AUg5AAQg5gBgjANQgjAMg4ApQgnAcglAAIgFAAg");
		this.shape_13.setTransform(-21.4551, -139.9823, 1.4183, 1.4183, -2.7034);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
		this.shape_14.setTransform(29.8421, -74.2176, 1.4182, 1.4182, -2.7036);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#000000").s().p("ABDAvIAqgmIhIgkQgFAdgJAOQgNATgXACQgdAEgPgeIASgXIgRgLQgJgGgIgBQgKgBgPABIgaADQAgghBaAPQBbAOAkAsIg3Amg");
		this.shape_15.setTransform(36.959, -73.8386, 1.4182, 1.4182, -2.7036);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#DFD8D4").s().p("AgFAkQgxgGgTgGQgWgGgNgOQgPgTADgKQAEgLAWgFQANgCAcgBQAugCArALQAiAJAaANQAcANgCAHQAAACgFACQgHAEgHAGIgYAYg");
		this.shape_16.setTransform(35.8893, -73.1754, 1.4182, 1.4182, -2.7036);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#6B3F2E").s().p("Ah4BVQgBgBABgHIAAgJQAIg7AHglQAEgYAPgOQAbgaAxALQASAFAUASQAkAhAdAUIAXAPQAHAFgBADQgCAJhGAEQhZAFgcAGQghAHgKARIgGANQgDAGgBAAIAAAAg");
		this.shape_17.setTransform(28.8597, -79.1754, 1.4182, 1.4182, -2.7036);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#000000").s().p("AA3AkIgzgRQgkgJgPgDQgigFggACIgMgvQBFALBDAZQA8AUA3Afg");
		this.shape_18.setTransform(-42.405, -81.3125, 1.4182, 1.4182, -2.7036);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#221911").s().p("AA6AGQgNAAgXAEQgkAHguAFQgOABgSgBQgjgCgQgPQgGgEgFgGQgIgLACgHQADgIAnABQA9ACAegDQALgBBJgPQAigGATANQAbARAGAVIAFAXQAFARAJAMQg0gog0gEg");
		this.shape_19.setTransform(44.4774, -99.0822, 1.4183, 1.4183, -2.7034);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#221911").s().p("AB1A5QgcgSgWgMQhGgkhCgMQghgGgpAAQgcAAgBgDQgBgGAcgJQAcgLAggEQAvgHAuAKQAgAGBOAbQAZAJALAGQAOAJAEALQAEAOgHAQQgIAQgNAFQgEACgFAAQgKAAgMgHg");
		this.shape_20.setTransform(-42.004, -97.8102, 1.4183, 1.4183, -2.7034);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#F6DCC8").s().p("ACbAzQgFgNgEgHQgJgOgQgJQgMgHgZgHQhFgVgggFQg3gIgvAPIgkAOQgPAHgCgCQgCgDAPgNQAQgNATgJQAXgKArgEIASgBQARAAASABQA2AEAtAPQAkANANAHQAVALAGAQQAGAPgFATQgFASgGAAQgCAAgDgJg");
		this.shape_21.setTransform(-41.7701, -101.2926, 1.4183, 1.4183, -2.7034);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#985D42").s().p("ABBCJQgNgHgEgiQgFgkgTgNQgPgKgbgEQgUgCgMACQgGABgUAHQgVAHgaALQgVAJgJACQgPADgFADQgLAHgHAOIgGAMQgEgBAIguQAIg0ARgvIAOgmIASgsQAHgQAEgCQANgHAhARQAqAVAfACQAkADAngRQAigFAgAKQA5ATAFAcQACAOgCAQIgCAQQgCAOABALQABAPADASQACAKgBAGQgBARgnAaQgoAcgQAHQgPAIgLAAQgHAAgFgDg");
		this.shape_22.setTransform(39.6059, -83.1463, 1.4183, 1.4183, -2.7034);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#BC8568").s().p("AAbAVQgPgRgPgEQgNgCgQAFQgNAEgBgCQgEgFARgRQATgSATADQATACAPAWQAHALABAOQACAOgGADIAAAAQgEAAgMgNg");
		this.shape_23.setTransform(-18.537, -31.7869, 1.4183, 1.4183, -2.7034);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#BC8568").s().p("AAeAUQgQgRgQgDQgOgCgQAEQgMAEgBgBQgEgGASgQQATgSASADQAWADAMAeQALAcgHAEIAAAAQgBAAgNgNg");
		this.shape_24.setTransform(1.6969, -30.0266, 1.4183, 1.4183, -2.7034);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#BC8568").s().p("AgJBFIADgKQAEgNACgPQAEgggEgYQgDgPgHgPIgEgNQACgBAIAJQAIAJAFAMQANAegOAqQgMAkgFAAIAAAAg");
		this.shape_25.setTransform(10.6396, -32.8024, 1.4183, 1.4183, -2.7034);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#BC8568").s().p("AgEAdQgDgBgDgFIgIgNQgGgHgHgFQgGgEAAgCQAAgHAMgHQAMgGANABQAPABANAKQAMAKgCAGQgBADgGACQgKAEgHAFQgEADgHAIQgDAEgDAAIgBAAg");
		this.shape_26.setTransform(-9.1599, -20.723, 1.4183, 1.4183, -2.7034);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#FFFFFF").s().p("AgLByQgDgBgDgEQgEgGgFgDQgFgFgHgBQgGgCgBgCQgBgEANgLQASgQAIgMQAJgNAJgdQANgmAJgtIAHgjQACAAgBAZQgBAdgFAfQgCASgFAVQgDALABALQABAZAMAfQAJAXgDACQgCABgIgFQgKgGgJAAQgGABgKAGQgEADgEAAIgDAAg");
		this.shape_27.setTransform(-7.0733, -55.9306, 1.4183, 1.4183, -2.7034);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#F6DCC8").s().p("AgCCwQgHgBgGgVQgIgXgMgHQgNgHgXAHQgUAGgBgBQgCgDATgTQAcgaAQgYQAQgVANgfQAEgLAThJQALgsANgXQARgeAGABQAJACABAnQAAAigFAoQgDAZgGASQgFAPAAAMQgCApAWAzQASAqgFAEQgDADgRgIQgTgJgNAEQgOAEgMATQgLAPgFAAIAAAAg");
		this.shape_28.setTransform(-9.1, -57.2144, 1.4183, 1.4183, -2.7034);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#26170A").s().p("AAAAXQgMgEgEgCQgKgFgBgIQgCgIAGgIQAGgJAJgCQANgEAOAOQAJAJAAAJQAAAOgKAFQgDABgEAAQgFAAgGgCg");
		this.shape_29.setTransform(0.9588, -25.8097, 1.4183, 1.4183, -2.7034);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#26170A").s().p("AAAAYQgKgEgHgIQgEgEgDgGQgGgKAEgHQAHgNAVAEQAKACAIAIQAJAJAAAJQAAANgKAGQgEADgGAAQgFAAgEgCg");
		this.shape_30.setTransform(-19.0571, -26.6883, 1.4183, 1.4183, -2.7034);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#F6DCC8").s().p("AimDkQgOgBgMgaQgHgQgPgvQgJgggFgiQgCgWgDgpQgCg3ACgiQALiPAggEQAIgBALANQATAZAOAMQA5A3A+AKQAdAEAhgEQATgDAcgHQAdgHAogQQAfgKATAKQASAJAFAOQAIAUgQAdQgbA0g2AlIgwAcQgjAOgjgBQgfAAgWALQgzAYgnBLIgXAtQgLARgMAAIgCAAg");
		this.shape_31.setTransform(-49.7707, -39.0649, 1.4183, 1.4183, -2.7034);

		this.instance_4 = new lib.barbebas_2();
		this.instance_4.setTransform(-11.65, 34.2, 1.4183, 1.4183, -2.7034, 0, 0, 27.2, 13.6);
		this.instance_4.alpha = 0.6016;

		this.instance_5 = new lib.barbebas_1_1();
		this.instance_5.setTransform(-11.1, 35.85, 1.4183, 1.4183, -2.7034, 0, 0, 30.9, 15.6);
		this.instance_5.alpha = 0.6016;

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#F0F2F1").s().p("AgGgDIAGAAQADABADACQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAIgCABQgEAAgHgHg");
		this.shape_32.setTransform(-19.4215, -0.6425, 1.4182, 1.4182, -2.7036);

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#9C897F").s().p("AgDAQQgBAAAAgGIABgHQADgTADABQABAAABAGQAAAHgCAFIgDAJQAAABgBABQAAAAgBABQAAAAAAABQgBAAAAAAIAAAAg");
		this.shape_33.setTransform(18.2652, 7.4545, 1.4181, 1.4181, -2.7037);

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#9C897F").s().p("AgDADIAAgMQABgEACgFQABgBAAAAQABgBAAgBQAAAAABAAQAAAAAAAAQABAAAAAJIgBAPIgDANQgCAGgBAAQABgGgBgNg");
		this.shape_34.setTransform(11.143, 8.7091, 1.4181, 1.4181, -2.7037);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#9C897F").s().p("AgBAKQgBgKACgMQABgKABABIAAATQAAAZgBAAg");
		this.shape_35.setTransform(2.1593, 10.0939, 1.4181, 1.4181, -2.7037);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#9C897F").s().p("AAAAPQgDgJAAgIQABgHACgHQACgGACABIAAArQgCAAgCgHg");
		this.shape_36.setTransform(-5.1554, 10.4028, 1.4181, 1.4181, -2.7037);

		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#9C897F").s().p("AgCAOQgBgOADgNQACgMABAAQABAAgCAZIgCAaQgBAAgBgMg");
		this.shape_37.setTransform(-16.0998, 9.5367, 1.4181, 1.4181, -2.7037);

		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#9C897F").s().p("AgBAOQgDgPADgQQABgOACAAQACAAgBAQIgBAPQgCATACANQgCAAgBgSg");
		this.shape_38.setTransform(-24.4336, 8.1216, 1.4181, 1.4181, -2.7037);

		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#9C897F").s().p("AAAANQgCgUABgLIABgFIABgFQABAAAAAZQAAAggBAAIgBgQg");
		this.shape_39.setTransform(-29.3855, 7.0067, 1.4181, 1.4181, -2.7037);

		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#9C897F").s().p("AgBAAQADgVABAAQADAAgDATQgBAIgCAIQgCAIgBAAQgBAAADgWg");
		this.shape_40.setTransform(-33.9869, 3.6037, 1.4181, 1.4181, -2.7037);

		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#F0F2F1").s().p("AgjANIAOgEQATgFANgFIAZgLIAAABQgCAFgKADQgMAEgXAHIgYAFIAAAAg");
		this.shape_41.setTransform(3.3343, 22.8557, 1.4181, 1.4181, -2.7037);

		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f("#F0F2F1").s().p("AAWAeQgogRgUgPQgSgOgEgSQgBgFABgCQADgBAMANIAcAbQAYATAeAOIAYAKIgBABQgHAAgfgMg");
		this.shape_42.setTransform(-26.2172, 18.6412, 1.4181, 1.4181, -2.7037);

		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f("#3D1608").s().p("AgCBfQgigCgmgLIgrgNQgVgIgPgLQgTgNgQgZQgXgggOgQIgTgTIgCgCIgOgLQgMgZAEgCQADgBAGAEIABABIATAPQAcAaAUAgIASAdQALAPAQAMQAQALAVAIIAqANQAlAKAiACQAxAEAtgKQAfgHANgFQAXgHAQgMIAKgHIAOgPIAGgGIACgCIAEgEIAJgHIAKgEIACAAIADAAQAKgBAJABQAJACABAEIAAACIgBACQgCAEgKAGQgKgDgNACQgKABgJAGQgGAEgPARIgKAKQgOAMgWAHQgPAFgrAIQglAHgkAAIgTgBg");
		this.shape_43.setTransform(-8.3844, 7.4244, 1.4182, 1.4182, -2.7036);

		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.f("#834C35").s().p("Ag8BpIgkgKQgpgNgOgGQgWgKgQgQQgJgJgGgOIgcg7Igcg4QgMgYAEgCQADgCAGAEIABABIATAQQAcAZAUAhIASAeQALAOAQALQAQALAVAIIAqANQAlAKAiADQAxADAtgKQAfgHANgEQAXgIAQgLIAKgIIAOgOIAGgGIAPgMIAKgEIACAAIADgBQAKgBAJABQAJACABAEIAAADIgBABQgCAEgKAGIgcAQIgCABIgQAKQgSAMgWARQgSAPgUAKQgwAagmAGQgPACgQAAQgjAAgpgLg");
		this.shape_44.setTransform(-8.2511, 10.247, 1.4182, 1.4182, -2.7036);

		this.shape_45 = new cjs.Shape();
		this.shape_45.graphics.f("#3D1608").s().p("AEEAxIhFgHIgCAAIhIgKQgtgIgSgBQghgEgYABIgYABQgOgBgTgEIgFgBQgNgCgQgGIgSgGIAAgBQgdgJgbgGIgUgEIAAAAIhIgXIgBAAIgGgDIgCgBIABAAQAAgCAJAAIgCABIAAABIABABIAJAEIA7AOIABABIAgAHQAaAGAYAKQAYAIAVAEIACABIACAAIAPADQANACAMgBIAWAAQAOgBAdACICGAUIADAAIACAAIBFAHIABAAIAGACIADABIAFACIABAAIABABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgGAAg");
		this.shape_45.setTransform(-8.6938, -0.3155, 1.4182, 1.4182, -2.7036);

		this.shape_46 = new cjs.Shape();
		this.shape_46.graphics.f("#F0F2F1").s().p("AAuAJIgTgFIgBAAQgcgJgXgEQgZgFgZgBIgWgBIAIgBIAjABQAeACA1ANIABAAIAZAGQAqAKABACIAAABIgCAAQgIAAgqgJg");
		this.shape_46.setTransform(-33.1928, -3.4856, 1.4182, 1.4182, -2.7036);

		this.shape_47 = new cjs.Shape();
		this.shape_47.graphics.f("#975D49").s().p("AEEAxIgHAAIgsgLIhpgWQg3gLgRgBQgSgCgagBQgXgBgSgCIgdgGIAAAAIgrgNIgTgFIAAAAIgdgGQglgGgdgDIgTAAIgCgBIgBAAIgGgDIgCgBIABAAQAAgCAKAAIARABQAwAEAzAMIACAAIAYAGIArANIAAAAIAUAEQASACAXABQAaABASACQAWACAyAKQB8AaAZAGIABAAIAGACIADABIAFACIABAAIABABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgGAAg");
		this.shape_47.setTransform(-8.6938, -0.3155, 1.4182, 1.4182, -2.7036);

		this.shape_48 = new cjs.Shape();
		this.shape_48.graphics.f("#834C35").s().p("AEEAxIhFgHIgCAAIhIgKQgtgIgSgBQghgEgYABIgYABQgOgBgTgEIgFgBQgNgCgQgGIgSgGIAAgBQgdgJgbgGIgUgEIAAAAIhIgXIgBAAIgGgDIgCgBIABAAQAAgCAKAAIARABQAwAEAzAMIACAAIAYAGIArANIAAAAIAUAEQASACAXABQAaABASACQAWACAyAKQB8AaAZAGIABAAIAGACIADABIAFACIABAAIABABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgGAAg");
		this.shape_48.setTransform(-8.6938, -0.3155, 1.4182, 1.4182, -2.7036);

		this.shape_49 = new cjs.Shape();
		this.shape_49.graphics.f("#592928").s().p("ACyAhIgCgBIgBgGQgCgFgEgCIgCAAIgCAAQgHAAgGAEIgIAFIgSgDIAAgGIgBAAQgCgDgGgBQgHgBgHACQgFAAgIADIgCABIgqgFQgBgBAAAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgFgBIgCABIgBAAIhvgSIgBgBIgxgIIAAgBIgLgBIgBgCQgEgCgFgBQgGgBgEACIgWgDIgCgBIgBAAIgBAAIgJgBQgBgCgIgIIgBAAIgBgBIAAgBQABgDAeAFIBbAQIBPAOIC6AaQARAEAEAFIABACQAAAEgFADQgFgDgRgDg");
		this.shape_49.setTransform(-6.5327, 1.8524, 1.4182, 1.4182, -2.7036);

		this.shape_50 = new cjs.Shape();
		this.shape_50.graphics.f("#7C3A36").s().p("ACpAtIADgHQAEgGAAgGIgBgGQgCgFgEgCIgCgBIgCAAQgHAAgGAFIgIAEIgMALQgFAHgBgBQgBAAAAgGIABgNIAAgGIgBAAQgCgDgGgBQgHgBgHABQgFABgIADIgCABQgKAFgLANQgEAHgCgBIAAgGIAAgGQAAgHgHgGIgIgFQgBAAAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgFgBIgCAAIgBAAIgCABQgGABgIALIgGAMIgBABIgCgBIgBgIQgCgGgDgEQgDgHgJgEQgJgDgKAAQgGAAgFABIgOANIgCACIgKAKIgBABIgBAAQgBgBABgFQABgHgBgEIAAgCQgDgIgKgFQgOgJgPABQgFAAgEACQgCADgBAEQgCAFgCAAQgCABgFgGIgBgCQgCgEgBgFIgCgHIgBgBQgEgDgFAAQgGgBgEACIgDACQgCACABAIIABAJIAAAAQgCAAgFgHIgEgFIgIgNIgCgBIgBAAIgBABQgDAGgDAAQgBAAgCgGIAAgBQgBgDgIgIIgBAAIgBgBIAAAAQABgDAeAFIBbAPIBPAOIC6AaQARAEAEAFIABADQAAAEgFADQgIAIgRAEIgEAAIgCAAg");
		this.shape_50.setTransform(-6.4909, 2.7378, 1.4182, 1.4182, -2.7036);

		this.shape_51 = new cjs.Shape();
		this.shape_51.graphics.f("#D8DDDA").s().p("AC6AvQgGgLgegCIg5AAIgIAAIgGAAIgxgBIgDAAQgigDgVgJIgVgKQgJgFgNgEQgSgEgPgBIgLgCQgIAAgNgFIgpgLQgOgDgDACIgBABIABgMIACgIIAEgGIACgBQAGgFAKABIAMACQAOAEAnAPQAnAOAtAHIAaAEQAdAEA+AEIANABIAyAEQATACAIAFIABABQAFADABADIABABIACAGQAAAJgEAKIgEAHQAAgDgCgEg");
		this.shape_51.setTransform(-8.9779, 2.6047, 1.4182, 1.4182, -2.7036);

		this.shape_52 = new cjs.Shape();
		this.shape_52.graphics.f("#F0F2F1").s().p("ABdBEIgIgEQgDgCgEAAQgGgCgHAEQgJAEgGAAQgHAAgHgDQgIgDgHAAQgGAAgEACIgLAEQgQADgbgJIgOgHQgOgFgdgBIgHAAQgSAAgVgMQgXgOgMgVIgFgJQgIgPgBgQIABgMIACgIIAEgGIACgBQAGgFAKABIAMACQAOAEAnAPQAnAOAtAHIAaAEQAdAEA+AFIANABIAyAEQATACAIAFIABABQAFACABADIABABIACAGQAAAJgEAKIgEAHIAAAAIgBADQgLAQgLAEIgHACIgHgEQgFgDgDAAIgEABIgHAFQgFAFgFACQgIACgHAAQgHAAgHgCg");
		this.shape_52.setTransform(-8.865, 4.9952, 1.4182, 1.4182, -2.7036);

		this.shape_53 = new cjs.Shape();
		this.shape_53.graphics.f("#D8DDDA").s().p("AAqArQhLgNgygWQgOgGglggQgIgHABgFQABgFAGgCQAFgBADABQAPAFANAIQAJAFAOAMQAMAJAIgBIAIAAQADABALAGQAEACAHABIASACQAKADAKAEQAKACAJABIARADIAMAEQAEACAGAAQAMACAJgCQAHgBAKgDQAHgDAFABQALADADADQAHAIgHALQgFALgdAAQgXAAgngHg");
		this.shape_53.setTransform(-16.8721, 16.6264, 1.4182, 1.4182, -2.7036);

		this.shape_54 = new cjs.Shape();
		this.shape_54.graphics.f("#000000").s().p("ADCBLIlXgzQgUgFgPgHIgIgDIgagMIgkgYIgGgNQgKgWABgFIADgEIgCgBIgBgBIABAAQAAgCAKAAIAhACQAdABA2AOIACAAIAYAGQAqALABACIAAAAIAUAEQASACAXABQAaABASACQAWADAyAKQB8AZAZAGIABAAIAGACIADABIAFACIABAAIABABIAAANIgBACIAAACQgDAEgKAGIgcARIgCABIgPAKg");
		this.shape_54.setTransform(-8.5283, 3.4817, 1.4182, 1.4182, -2.7036);

		this.shape_55 = new cjs.Shape();
		this.shape_55.graphics.f("#3F3F3F").s().p("AgsBtIghgWQg2gmgsgxIgZgcQgPgRgJgQIgFgKQgHgSgGgSIgCgGIAAgFIABgBIAFAAIADABIAFABIAIAFIA6ApIBHAoQAaAMAbAKIAEABIAfAIQAuALAuABQAbAAAkgCIAygEIAVABIAKADQAJADAFAIIgCABIgQAKQgSALgXASQgRAOgUAKQgxAaglAGQgPADgRAAQgiAAgpgLg");
		this.shape_55.setTransform(-10.5225, 9.8154, 1.4182, 1.4182, -2.7036);

		this.shape_56 = new cjs.Shape();
		this.shape_56.graphics.f("#3D1608").s().p("AC5AZQg7gIgqgFQgmgEgxgDQgwgEgqgDIhagLQgegFAAgEQAAgCAHgDQAMAEBlALQAqAFAwADQAxAEAmADQBKAHAxAIQAIAFgBADQAAACgHAAIgWgDg");
		this.shape_56.setTransform(-11.5531, 5.2313, 1.4182, 1.4182, -2.7036);

		this.shape_57 = new cjs.Shape();
		this.shape_57.graphics.f("#E8DDDB").s().p("AAAADQgJgDABgBQAAgCAGAAQAEgBAEADQAEACgBACQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgGgBg");
		this.shape_57.setTransform(-19.2616, 9.2945, 1.4181, 1.4181, -2.7037);

		this.shape_58 = new cjs.Shape();
		this.shape_58.graphics.f("#E8DDDB").s().p("AAMAJQgHAAgGgDQgHgBgGgEQgGgCABgDQAAgDAOAAQAMgBAGAEQAJAHgCADQgBADgFAAIgCAAg");
		this.shape_58.setTransform(-24.1545, 8.8459, 1.4181, 1.4181, -2.7037);

		this.shape_59 = new cjs.Shape();
		this.shape_59.graphics.f("#9F5742").s().p("AgBAXQgagCgRgHQgQgHgOgKQgPgLACgFQAEgKBEAPQAKACAJAEIASAEQAVADAbAAQASgBAAACQABADgMAGQgLAGgLADQgSAGgXAAIgPgBg");
		this.shape_59.setTransform(-16.8917, 9.3899, 1.4181, 1.4181, -2.7037);

		this.shape_60 = new cjs.Shape();
		this.shape_60.graphics.f("#834C35").s().p("AC5AiQg7gJgqgEQgmgEgxgEQgwgDgqgFIhagKQgegEAAgEQgBgJBJgHQAwgEArgCQAWAAAMAFQAHADAIAHQAGAFAGACQAJACAKgEQAPgFAJgBQAPgBAXAGQAkAJApAQQAvASgCAHQAAACgHAAIgWgCg");
		this.shape_60.setTransform(-11.6067, 4.027, 1.4182, 1.4182, -2.7036);

		this.shape_61 = new cjs.Shape();
		this.shape_61.graphics.f("#3D1608").s().p("Ag9AjIAJgBQARgDAKgKQAIgFACgEQAFgLgKgRQgFgIgGgFQgFgEgHgBIAhABQAWACATALQAhAQgCAMQgDANg3AKQgRAEgbAAIgVAAg");
		this.shape_61.setTransform(11.4871, 10.3655, 1.4182, 1.4182, -2.7036);

		this.shape_62 = new cjs.Shape();
		this.shape_62.graphics.f("#834C35").s().p("ABoAwQgpgBhYgMQhKgKgcgIQgigLgZgLQghgRABgKQABgHAVgGQARgFATADQAHAAAdAHIBHAJQA0AHAqADQAnACAxgCQAjABAYANQAhAQgCANQgCAIgTAGQgKADgbAGQgTAEgYAAIgOgBg");
		this.shape_62.setTransform(-10.8514, 9.449, 1.4182, 1.4182, -2.7036);

		this.shape_63 = new cjs.Shape();
		this.shape_63.graphics.f("#F6DCC8").s().p("Ag1ArQh1gVgkgxQgMgUADgEQADgEAZANQAoAXANAGQAqASAwAGQAdAEApgBQBTAABGgJQAkgFACAFQABAGgnASQg4AYhJAAQgwAAg3gKg");
		this.shape_63.setTransform(-11.3596, 12.4229, 1.4182, 1.4182, -2.7036);

		this.shape_64 = new cjs.Shape();
		this.shape_64.graphics.f("#985D42").s().p("AgfBpQgOgbALgpQAFgWANgXQAFgKAGgJQAFgHACgHQAEgNADgdQACgUAKgKQANgNAGAEQADACgSAmQgYAxgDArQgEAogBAWIAAAlQgBAOgEABIgBAAQgHAAgLgTg");
		this.shape_64.setTransform(89.0421, -52.4202, 1.4182, 1.4182, -2.7036);

		this.shape_65 = new cjs.Shape();
		this.shape_65.graphics.f("#985D42").s().p("AAGgaIAHgYIgOA9QgGAbgFANIAShNg");
		this.shape_65.setTransform(92.8022, -43.9322, 1.4182, 1.4182, -2.7036);

		this.shape_66 = new cjs.Shape();
		this.shape_66.graphics.f("#985D42").s().p("AghCGQgIgDABgcQAAgSAHg/QAHg9AMgyIAMgtIgDALQgLAygHA/QgHA+gBASQAAAcAIADQAJAEARgUQAQgRANgXIAJgUQgGAggNAVQgNAXgOARQgQARgIAAIgEgBg");
		this.shape_66.setTransform(85.3408, -39.9121, 1.4182, 1.4182, -2.7036);

		this.shape_67 = new cjs.Shape();
		this.shape_67.graphics.f("#BC8568").s().p("AAAB8QgCgCADgYQAHgoACgYQAEg2gJgfQgFgVgIgRIgOgXQgHgJACgBQACgCAOAIIAJAGQAHAGAFAFQAOARAEAmQADAbgGAZQgGAaACAXQACASgBAHQgBAPgHANQgIAOgFAAIgBAAg");
		this.shape_67.setTransform(-94.281, -65.3393, 1.4183, 1.4183, -2.7034);

		this.shape_68 = new cjs.Shape();
		this.shape_68.graphics.f("#BC8568").s().p("Ag9DCQgIgDAAgcQABgTAHg+QAHg/ALgxQAFgUAOgtQAQg1AJgTQAJgRAMgFIAOgEQAPgCAIAGQAOAKgEAjQgDAXgQA/QgIAhgLAgIgTBSQgHAcgKAVQgNAXgQARQgPAQgJAAIgDAAg");
		this.shape_68.setTransform(88.9952, -48.533, 1.4183, 1.4183, -2.7034);

		this.instance_6 = new lib.Group_2();
		this.instance_6.setTransform(-4.25, 20.65, 1.4182, 1.4182, -2.7036, 0, 0, 61.9, 41);
		this.instance_6.alpha = 0.6016;

		this.instance_7 = new lib.Group_1_1();
		this.instance_7.setTransform(-4.65, 21.6, 1.4182, 1.4182, -2.7036, 0, 0, 62.2, 41.6);
		this.instance_7.alpha = 0.6016;

		this.shape_69 = new cjs.Shape();
		this.shape_69.graphics.f("#48341F").s().p("AI7IsQgHgEAFgUIAPgwQAYgPAWgaQBGhQgGiSQgDhNgZhZIglhmQgRgyAAgzQAAgSAFg2QADgggIgYQgLgdgegZQgpghhagpQiIg9hFgVQhxgihzAFQhHAEhbAWQiLAiiMBVQhXA1geAWQgtAggcAmQhIBhgCCJQgBBPAeCKQATBVARAAIADAAQgMArgMAAQgTAAgThdQgeiYABhWQABiXBLhqQAdgqAvgkQAfgYBag6QCPhbCTgoQBegYBJgEQB4gFB1AlQBJAXCMBDQBdAtAqAlQAgAaALAgQAIAagDAjQgFA8AAAUQAAA4ASA3IAmBwQAaBiADBUQAGCghJBZQgWAbgZARQgUAOgLAAQgEAAgCgCg");
		this.shape_69.setTransform(0.2321, -137.009, 1.4183, 1.4183, -2.7034);

		this.shape_70 = new cjs.Shape();
		this.shape_70.graphics.f("#20170E").s().p("AJ6DZQgVg1hFiXQgvhkgVgiQgUgegZgNQgigSg0AHQhHAJgxgHQg/gJg9gnQg+gmg4gIQhWgMhYAcQgxAQgnAYQgyAegnAuQgXAbgmA4Qg2BSgsBwQgWA4gLAoIgSBAQgKAdgJAAQgTAAgThdQgPhMgGgqQgKhJACg7QABA4AKBDQAFAoANBHQATBnATAAQAJAAAKggIAShHQALgsAWg9QAsh7A2hbQAlg+AYgeQAngyAygiQAmgaAygSQBYgfBWANQA4AJA+AqQA9AqA/AKQAxAIBHgKQA0gHAiAUQAZAOAUAiQAVAkAvBwQBHCpAUA7QAfBYgBAxQAAgsgfhPg");
		this.shape_70.setTransform(-7.6958, -133.9204, 1.4183, 1.4183, -2.7034);

		this.shape_71 = new cjs.Shape();
		this.shape_71.graphics.f("#48341F").s().p("AhNDAQgJg6gChBQgBgnABgWQACghAIghQAPhEAlg9QBBhNAKAGQACACgJAcQgKAfAIAZQAFARATAQQATAQAEANQAIAYgXAjQgiAsgRAYQgvBGgOBgIgGA4QgDAUgGAAQgMAAgKhDg");
		this.shape_71.setTransform(-82.2711, -135.1134, 1.4183, 1.4183, -2.7034);

		this.shape_72 = new cjs.Shape();
		this.shape_72.graphics.f("#382918").s().p("AI7IsQgJgGASg1QAZhKADg2QADgsgfhRQgVg3hIidQgvhkgVghQgUgfgZgNQgigSg0AHQhHAJgwgHQhAgJg9gmQg8gng6gIQhVgMhYAcQgvAQgqAYQgyAfgnAtQgYAcglA4Qg2BRgsBwQgWA4gLAoIgSBAQgKAdgJAAQgTAAgThdQgeiYABhWQABiXBLhqQAdgqAvgkQAfgYBag6QCPhbCTgoQBegYBJgEQB4gFB1AlQBJAXCMBDQBdAtAqAlQAgAaALAgQAIAagDAjQgFA8AAAUQAAA4ASA3IAmBwQAaBiADBUQAGCghJBZQgWAbgZARQgUAOgLAAQgEAAgCgCg");
		this.shape_72.setTransform(0.2321, -137.009, 1.4183, 1.4183, -2.7034);

		this.shape_73 = new cjs.Shape();
		this.shape_73.graphics.f("#985D42").s().p("ABoF5QAMgkAJgmQAKgnADguQADhJgShUQgHgjgTgmIhTiyQghhLgLgSQgRgcgYgIQgGgCgrgDQgfgDgTgPQgbgUADgOQADgPAkgHQAkgIAiAHQA+AMAzBNQAjAyBBCNQAgBDAKAcQAPAjAFAaQAVB6g3CGQgcBEghAqg");
		this.shape_73.setTransform(62.9371, -110.4324, 1.4183, 1.4183, -2.7034);

		this.shape_74 = new cjs.Shape();
		this.shape_74.graphics.f("#CA9781").s().p("ABAKhQgMgCgHgwQgKhDgSgoQgUgtgkgfQgVgSgvgcQgvgcgXgTQgkgggVguQgOgcgJg1IgPhfQgGgeABggQABgmAIglQALgyAXg3QAbg/AghDQAbg5AJgWQAihYAGh+IAEhHQADgbAKgCQAJgBARAQQAWAWAXALQAVAKAVABQAPAAAWgDIAfgFQARgCAPAEQBmAYAkEVIAJBPQABAJgEAxIgLCJQgKB8gEApQgHA8gPBDQgJApgeB0IAAABQgtCRhPB6g");
		this.shape_74.setTransform(51.4991, -73.2498, 1.4183, 1.4183, -2.7034);

		this.shape_75 = new cjs.Shape();
		this.shape_75.graphics.f("#BC8568").s().p("ACnB+IgMgSIgOgQIgEgEQgGgFgNAAQgJABgvgSQg8gYgogLQgdgIgXADQgJACgKAEQgIADgGABQgXACgYgPQgZgQgEgUQgHghAPghQAJgUAJgJQAJgIAIgEQAUgLAlABQAuAEAsAQQAcAQAcABQALABATgDQASgEAOADQAWAEAQAKQAYAPAOAcQAYAsgJBBQgJA7gQACIAAAAQgEAAgEgFg");
		this.shape_75.setTransform(-41.2298, -87.0817, 1.4183, 1.4183, -2.7034);

		this.shape_76 = new cjs.Shape();
		this.shape_76.graphics.f("#CA9781").s().p("AJRGvQgKgGATg2QAZhKADg1QADgtgfhQQgVg3hJicQgvhmgVghQgUgfgYgMQgigSg0AGQhIAJgwgHQhAgJg9gmQg9gmg4gIQhWgMhYAcQgvAPgpAZQgyAegoAuQgXAbglA4Qg3BTgsBvQgVA4gLAnQgOAmgKAuQgFAYgFAhQgEAigDAmQgBAcgBAAQgCAAgBgVIgCgpQABgmgBgYQgBgWgEgjQAVhoAhheQAXhKARgsQAfhQAhgnQBviDDJgpQC8gnC2A3QBVAaBPAvQCKBTBNB/QBGByAHCLQAGBsggC0QgPAJgIAAQgEAAgCgCg");
		this.shape_76.setTransform(-0.4374, -115.1204, 1.4183, 1.4183, -2.7034);

		this.shape_77 = new cjs.Shape();
		this.shape_77.graphics.f("#BC8568").s().p("AgCgHQgKgbAAgNIAMApQAJAbAFAbQgFgUgLgjg");
		this.shape_77.setTransform(-102.288, -78.6161, 1.4183, 1.4183, -2.7034);

		this.shape_78 = new cjs.Shape();
		this.shape_78.graphics.f("#BC8568").s().p("AAkAPIgPgcQgHgLgIgCQgKgDgOAJQgOAIgIANQgGANAAANQgEgQAAgKQgBgMAHgLQAHgOAOgIQAOgJAKADQAIACAHALQAEAGALAXQAOAeADAMQADAJAAAJIgPglg");
		this.shape_78.setTransform(-97.2828, -86.076, 1.4183, 1.4183, -2.7034);

		this.shape_79 = new cjs.Shape();
		this.shape_79.graphics.f("#BC8568").s().p("AgIBNQALhHACgZQAEg3gEgmIgCgOQAEATADASQAEAkgEA5QgDAfgHAqQgGAogBAKQgIgJAHgpg");
		this.shape_79.setTransform(-98.7443, -50.5282, 1.4183, 1.4183, -2.7034);

		this.shape_80 = new cjs.Shape();
		this.shape_80.graphics.f("#BC8568").s().p("AgUBEQAOgMAEgOQAKgXAEgSQAGgRADgQQAEgSABgYQAMBFgaAsQgNAYgTAJIgJADIAJgHg");
		this.shape_80.setTransform(-91.5689, -43.2885, 1.4183, 1.4183, -2.7034);

		this.shape_81 = new cjs.Shape();
		this.shape_81.graphics.f("#ECC5AF").s().p("AgaDWQgMgHAHgpQANhSABgTQAFg4gFglQgEgkgWg/QgNgoALgUQAIgOAOgIQAOgJAKADQAIACAGAKQAFAHALAXQAOAhADAJQAHAbgJAlQgFAVgNAmQgTA7ADBaQACBCgSAIQgHACgFAAQgGAAgEgDg");
		this.shape_81.setTransform(-96.0934, -62.6242, 1.4183, 1.4183, -2.7034);

		this.shape_82 = new cjs.Shape();
		this.shape_82.graphics.f("#ECC5AF").s().p("AkBNQQhfgpg/g2QhZhLgyhtQgfhEgniWQg+jpAfj3QARiNA9jIQAghoAQgmQAXg4AignQBviDDIgpQC8gnC3A3QCGAqBnBSQBYBGA2BZQAoBCATBJQAbBngMCJQgIBWgmDAQgZCEgYBKIAAAAQgtCRhPB6QgLASgPAUQhZB+g1AzQhZBXhuAdQg6APg7AAQhqAAhvgwg");
		this.shape_82.setTransform(-1.3773, -53.3544, 1.4182, 1.4182, -2.7036);

		this.shape_83 = new cjs.Shape();
		this.shape_83.graphics.f("#6B3F2E").s().p("AFiKLQASgmAFgsQAGg2gPgzQgShogihwQgjhvgihcQgRgsgCgfQgEgnAMhbQAJhEgPgQQgKgKgWAHQgLADgoAUQhZAshFgCQg5gBhKgpQhEgmg/AEQguADhEAaQgyATgHgKQgEgFAHgOIAVgmQAXgsAMg1QAIghAJhGQAHgwgCglQgBgXAGgKQAcgyB2gHQBqgHCKAeQCJAdBeAvQBnA1ACA0QABAGgEAIIgQAmQg0CGAFBxQABAkAJAqQANBDAgA+QAvBbAHAUQATAyAHA7QAFAnAEBoIgEBgQgKBmgjAZQgMAJgMABIgDAAQgHAAgJgDg");
		this.shape_83.setTransform(-14.0216, 126.257, 1.4183, 1.4183, -2.7034);

		this.shape_84 = new cjs.Shape();
		this.shape_84.graphics.f("#D59562").s().p("AEwGfQilitgbgZQhrhjh7hZIi3h5QhXg7gigmQgsgxgBg6QgBgmAXgnQAnhFALgdQDNC7ChBmQCeBkAnggQAdgYAdgmIAXghIASggQAFgKAFAAQAZgEApBoQAfBQAbBoQANAyAWBdQARBDALgBIADgBQACBbgQA9QgRBAghANQgFACgGAAQggAAg4g5g");
		this.shape_84.setTransform(-15.4342, 151.7686, 1.4183, 1.4183, -2.7034);

		this.shape_85 = new cjs.Shape();
		this.shape_85.graphics.f("#BC8568").s().p("AEwJ8QimiugagYQhrhjh7hZIi3h6QhXg7gigmQgsgwgBg7QAAgnAig6QAthNAYhhQAUhRAEhcQACg+AVgbQArg5BrgSQBjgRB3AVQB5AWBZAzQBiA4AZBJQAMAkgJAoQgFAVgYA4QgyB0AKBpQAHBBAgBAQAuBbASA8QAzCigFCjQgECng8AXQgFACgHAAQggAAg3g5g");
		this.shape_85.setTransform(-16.9294, 119.8312, 1.4183, 1.4183, -2.7034);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_85 }, { t: this.shape_84 }, { t: this.shape_83 }, { t: this.shape_82 }, { t: this.shape_81 }, { t: this.shape_80 }, { t: this.shape_79 }, { t: this.shape_78 }, { t: this.shape_77 }, { t: this.shape_76 }, { t: this.shape_75 }, { t: this.shape_74 }, { t: this.shape_73 }, { t: this.shape_72 }, { t: this.shape_71 }, { t: this.shape_70 }, { t: this.shape_69 }, { t: this.instance_7 }, { t: this.instance_6 }, { t: this.shape_68 }, { t: this.shape_67 }, { t: this.shape_66 }, { t: this.shape_65 }, { t: this.shape_64 }, { t: this.shape_63 }, { t: this.shape_62 }, { t: this.shape_61 }, { t: this.shape_60 }, { t: this.shape_59 }, { t: this.shape_58 }, { t: this.shape_57 }, { t: this.shape_56 }, { t: this.shape_55 }, { t: this.shape_54 }, { t: this.shape_53 }, { t: this.shape_52 }, { t: this.shape_51 }, { t: this.shape_50 }, { t: this.shape_49 }, { t: this.shape_48 }, { t: this.shape_47 }, { t: this.shape_46 }, { t: this.shape_45 }, { t: this.shape_44 }, { t: this.shape_43 }, { t: this.shape_42 }, { t: this.shape_41 }, { t: this.shape_40 }, { t: this.shape_39 }, { t: this.shape_38 }, { t: this.shape_37 }, { t: this.shape_36 }, { t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.instance_5 }, { t: this.instance_4 }, { t: this.shape_31 }, { t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.instance_3 }, { t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-104.5, -216.4, 209, 432.9);


	(lib.Interpoler17 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F6DCC8").s().p("AAVAQQgMgDgKgGQgMgGgJgIQgJgIABgBIAYAPIAbANIAKAFIgBAAIgJgBg");
		this.shape.setTransform(-73.3973, -87.554, 1.4183, 1.4183, -2.7034);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#F6DCC8").s().p("AgZAAQgIgEgJgHQgHgGAAgBIAYAOQAZANAbAGQAPADAIABIgMAAQghAAgegTg");
		this.shape_1.setTransform(-72.6116, -84.5555, 1.4183, 1.4183, -2.7034);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#F6DCC8").s().p("AgRACQgIgfAGgDQABgBAIAFQAKAHAOAGQAJAEAAACQAAADgJAEQgKAEgEAHQgEAHAAAJIgBAIIAAAAQgEAAgIgfg");
		this.shape_2.setTransform(-76.5756, -78.9871, 1.4183, 1.4183, -2.7034);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#ECC5AF").s().p("ABLAbQglgRgkgKQgZgIgvgKQgegHAAgDQAAgCAOgCQAfgEATABQAeAAAcAMQAgANAaAVQAYAUgDAFIgBAAQgEAAgVgJg");
		this.shape_3.setTransform(-43.5354, -84.4259, 1.4183, 1.4183, -2.7034);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#000000").s().p("ABdAWQgbgdgegNQgSgIgUgDQgMgCgagCQgbgBgbADIgWADQAAgCAYgGQAcgHAdABQAlAAAhAMQAeAKASAQQAOALAKAQQAMAWgDACIAAAAIgXgXg");
		this.shape_4.setTransform(-43.6137, -86.2868, 1.4183, 1.4183, -2.7034);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#BC8568").s().p("AAFAMQgQgCgQgKQgOgJABgCIARAIQARAHAJACQAMADAOgDIAMgCQgOAIgQAAIgGAAg");
		this.shape_5.setTransform(-68.0454, -87.7812, 1.4183, 1.4183, -2.7034);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#BC8568").s().p("AAGAOQgTgCgTgMQgQgLABgCIATAJQAXAKAIACQAPADAQgDIAOgDQgQAJgTAAIgHAAg");
		this.shape_6.setTransform(-70.3034, -85.9995, 1.4183, 1.4183, -2.7034);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#382918").s().p("AAOADIg1gFQAIgBATACIAoAEIAMAAg");
		this.shape_7.setTransform(-63.0427, -76.6559, 1.4183, 1.4183, -2.7034);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#BC8568").s().p("AhaAZQgFgCAEgQQAEgQALgIQAJgHARABIApAGQAkAGAnACIAcABQAAACgWACQgYADgZgCIgzgFQgVgCgNAHQgKAFgKANQgHAKgBAAIAAAAg");
		this.shape_8.setTransform(-62.8929, -75.6915, 1.4183, 1.4183, -2.7034);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#BC8568").s().p("AgSAHIg0gfIAcAPQAjAOAMAEQAUAEAZgGQAUgFABACQABACgDAFQgDAEgEADQgJAHgNAAQgXAAgjgSg");
		this.shape_9.setTransform(-70.1199, -82.5759, 1.4183, 1.4183, -2.7034);

		this.instance = new lib.barbe1_2();
		this.instance.setTransform(20, 0.45, 1.4182, 1.4182, -2.7036, 0, 0, 18.2, 13.7);
		this.instance.alpha = 0.6016;

		this.instance_1 = new lib.barbe1_1_1();
		this.instance_1.setTransform(17.3, 0.55, 1.4182, 1.4182, -2.7036, 0, 0, 18.2, 13.7);
		this.instance_1.alpha = 0.6016;

		this.instance_2 = new lib.barbe3_2();
		this.instance_2.setTransform(-36.55, -4.05, 1.4182, 1.4182, -2.7036, 0, 0, 16.1, 10.8);
		this.instance_2.alpha = 0.6016;

		this.instance_3 = new lib.barbe3_1_1();
		this.instance_3.setTransform(-35.25, -3.2, 1.4182, 1.4182, -2.7036, 0, 0, 15.8, 11);
		this.instance_3.alpha = 0.6016;

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#CA9781").s().p("ABrDrIAGgZQAHggABgbQAAg/gkg+QgUgfglgVQgugcgYgZQgsgsgbg7QgWgyAFgCQABgBASArQAaAzAmApQAfAiA6AlQAtAcAUAlQAOAcAGAgQAHAggEAZIgIAlQgMAtgDAAIAAAAg");
		this.shape_10.setTransform(32.9745, -7.2796, 1.4182, 1.4182, -2.7036);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#CA9781").s().p("AimC9IgCggQgBgVABgRQAFh0AvgtQAYgYAzAAQA8gCAogWQAwgYAkgwQARgYAJgRQAGAEghAuQgmA4g2AbQgjARg2ACQgsACgXAVQgaAYgMAsQgIAagGA1QgEAaAAAhIgBAaQgBAAgCgPg");
		this.shape_11.setTransform(-41.657, -16.4991, 1.4182, 1.4182, -2.7036);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#F9F9F9").s().p("AjJA1QgDgIAxgcIA7geQAygZAogIQAYgGALgBQAQgBAPADQAQADARAMQAVAPARAIQAXAKAcAEIAUAEQAAACgWAAIg+ABQg6AEgqAFIhaAQQhUAQgYAEIgPABQgFAAgBgBg");
		this.shape_12.setTransform(-24.3047, -148.3219, 1.4183, 1.4183, -2.7034);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#F6DCC8").s().p("Aj8CIQgVgCgLgCQgWgGgHgOQgRghA/hDQBAhCBVgoQAxgYAjgJQA4gPAxAOQAUAGAdASQAeASAeAKQAsAPA2ADQAnACABAEQAAAFgeALIhiAjIhBAYQg4AUg5AAQg5gBgjANQgjAMg4ApQgnAcglAAIgFAAg");
		this.shape_13.setTransform(-21.4551, -139.9823, 1.4183, 1.4183, -2.7034);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
		this.shape_14.setTransform(29.8421, -74.2176, 1.4182, 1.4182, -2.7036);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#000000").s().p("ABDAvIAqgmIhIgkQgFAdgJAOQgNATgXACQgdAEgPgeIASgXIgRgLQgJgGgIgBQgKgBgPABIgaADQAgghBaAPQBbAOAkAsIg3Amg");
		this.shape_15.setTransform(36.959, -73.8386, 1.4182, 1.4182, -2.7036);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#DFD8D4").s().p("AgFAkQgxgGgTgGQgWgGgNgOQgPgTADgKQAEgLAWgFQANgCAcgBQAugCArALQAiAJAaANQAcANgCAHQAAACgFACQgHAEgHAGIgYAYg");
		this.shape_16.setTransform(35.8893, -73.1754, 1.4182, 1.4182, -2.7036);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#6B3F2E").s().p("Ah4BVQgBgBABgHIAAgJQAIg7AHglQAEgYAPgOQAbgaAxALQASAFAUASQAkAhAdAUIAXAPQAHAFgBADQgCAJhGAEQhZAFgcAGQghAHgKARIgGANQgDAGgBAAIAAAAg");
		this.shape_17.setTransform(28.8597, -79.1754, 1.4182, 1.4182, -2.7036);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#000000").s().p("AA3AkIgzgRQgkgJgPgDQgigFggACIgMgvQBFALBDAZQA8AUA3Afg");
		this.shape_18.setTransform(-42.405, -81.3125, 1.4182, 1.4182, -2.7036);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#221911").s().p("AA6AGQgNAAgXAEQgkAHguAFQgOABgSgBQgjgCgQgPQgGgEgFgGQgIgLACgHQADgIAnABQA9ACAegDQALgBBJgPQAigGATANQAbARAGAVIAFAXQAFARAJAMQg0gog0gEg");
		this.shape_19.setTransform(44.4774, -99.0822, 1.4183, 1.4183, -2.7034);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#221911").s().p("AB1A5QgcgSgWgMQhGgkhCgMQghgGgpAAQgcAAgBgDQgBgGAcgJQAcgLAggEQAvgHAuAKQAgAGBOAbQAZAJALAGQAOAJAEALQAEAOgHAQQgIAQgNAFQgEACgFAAQgKAAgMgHg");
		this.shape_20.setTransform(-42.004, -97.8102, 1.4183, 1.4183, -2.7034);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#F6DCC8").s().p("ACbAzQgFgNgEgHQgJgOgQgJQgMgHgZgHQhFgVgggFQg3gIgvAPIgkAOQgPAHgCgCQgCgDAPgNQAQgNATgJQAXgKArgEIASgBQARAAASABQA2AEAtAPQAkANANAHQAVALAGAQQAGAPgFATQgFASgGAAQgCAAgDgJg");
		this.shape_21.setTransform(-41.7701, -101.2926, 1.4183, 1.4183, -2.7034);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#985D42").s().p("ABBCJQgNgHgEgiQgFgkgTgNQgPgKgbgEQgUgCgMACQgGABgUAHQgVAHgaALQgVAJgJACQgPADgFADQgLAHgHAOIgGAMQgEgBAIguQAIg0ARgvIAOgmIASgsQAHgQAEgCQANgHAhARQAqAVAfACQAkADAngRQAigFAgAKQA5ATAFAcQACAOgCAQIgCAQQgCAOABALQABAPADASQACAKgBAGQgBARgnAaQgoAcgQAHQgPAIgLAAQgHAAgFgDg");
		this.shape_22.setTransform(39.6059, -83.1463, 1.4183, 1.4183, -2.7034);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#BC8568").s().p("AAbAVQgPgRgPgEQgNgCgQAFQgNAEgBgCQgEgFARgRQATgSATADQATACAPAWQAHALABAOQACAOgGADIAAAAQgEAAgMgNg");
		this.shape_23.setTransform(-18.537, -31.7869, 1.4183, 1.4183, -2.7034);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#BC8568").s().p("AAeAUQgQgRgQgDQgOgCgQAEQgMAEgBgBQgEgGASgQQATgSASADQAWADAMAeQALAcgHAEIAAAAQgBAAgNgNg");
		this.shape_24.setTransform(1.6969, -30.0266, 1.4183, 1.4183, -2.7034);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#BC8568").s().p("AgJBFIADgKQAEgNACgPQAEgggEgYQgDgPgHgPIgEgNQACgBAIAJQAIAJAFAMQANAegOAqQgMAkgFAAIAAAAg");
		this.shape_25.setTransform(10.6396, -32.8024, 1.4183, 1.4183, -2.7034);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#BC8568").s().p("AgEAdQgDgBgDgFIgIgNQgGgHgHgFQgGgEAAgCQAAgHAMgHQAMgGANABQAPABANAKQAMAKgCAGQgBADgGACQgKAEgHAFQgEADgHAIQgDAEgDAAIgBAAg");
		this.shape_26.setTransform(-9.1599, -20.723, 1.4183, 1.4183, -2.7034);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#FFFFFF").s().p("AgLByQgDgBgDgEQgEgGgFgDQgFgFgHgBQgGgCgBgCQgBgEANgLQASgQAIgMQAJgNAJgdQANgmAJgtIAHgjQACAAgBAZQgBAdgFAfQgCASgFAVQgDALABALQABAZAMAfQAJAXgDACQgCABgIgFQgKgGgJAAQgGABgKAGQgEADgEAAIgDAAg");
		this.shape_27.setTransform(-7.0733, -55.9306, 1.4183, 1.4183, -2.7034);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#F6DCC8").s().p("AgCCwQgHgBgGgVQgIgXgMgHQgNgHgXAHQgUAGgBgBQgCgDATgTQAcgaAQgYQAQgVANgfQAEgLAThJQALgsANgXQARgeAGABQAJACABAnQAAAigFAoQgDAZgGASQgFAPAAAMQgCApAWAzQASAqgFAEQgDADgRgIQgTgJgNAEQgOAEgMATQgLAPgFAAIAAAAg");
		this.shape_28.setTransform(-9.1, -57.2144, 1.4183, 1.4183, -2.7034);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#26170A").s().p("AAAAXQgMgEgEgCQgKgFgBgIQgCgIAGgIQAGgJAJgCQANgEAOAOQAJAJAAAJQAAAOgKAFQgDABgEAAQgFAAgGgCg");
		this.shape_29.setTransform(0.9588, -25.8097, 1.4183, 1.4183, -2.7034);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#26170A").s().p("AAAAYQgKgEgHgIQgEgEgDgGQgGgKAEgHQAHgNAVAEQAKACAIAIQAJAJAAAJQAAANgKAGQgEADgGAAQgFAAgEgCg");
		this.shape_30.setTransform(-19.0571, -26.6883, 1.4183, 1.4183, -2.7034);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#F6DCC8").s().p("AimDkQgOgBgMgaQgHgQgPgvQgJgggFgiQgCgWgDgpQgCg3ACgiQALiPAggEQAIgBALANQATAZAOAMQA5A3A+AKQAdAEAhgEQATgDAcgHQAdgHAogQQAfgKATAKQASAJAFAOQAIAUgQAdQgbA0g2AlIgwAcQgjAOgjgBQgfAAgWALQgzAYgnBLIgXAtQgLARgMAAIgCAAg");
		this.shape_31.setTransform(-49.7707, -39.0649, 1.4183, 1.4183, -2.7034);

		this.instance_4 = new lib.barbebas_2();
		this.instance_4.setTransform(-11.8, 34.35, 1.4183, 1.4183, -2.7034, 0, 0, 27.1, 13.8);
		this.instance_4.alpha = 0.6016;

		this.instance_5 = new lib.barbebas_1_1();
		this.instance_5.setTransform(-11.05, 35.7, 1.4183, 1.4183, -2.7034, 0, 0, 30.9, 15.5);
		this.instance_5.alpha = 0.6016;

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#F0F2F1").s().p("AgGgDIAGAAQADABADACQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAIgCABQgEAAgHgHg");
		this.shape_32.setTransform(-19.4215, -0.6425, 1.4182, 1.4182, -2.7036);

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#9C897F").s().p("AgDAQQgBAAAAgGIABgHQADgTADABQABAAABAGQAAAHgCAFIgDAJQAAABgBABQAAAAgBABQAAAAAAABQgBAAAAAAIAAAAg");
		this.shape_33.setTransform(18.2652, 7.4545, 1.4181, 1.4181, -2.7037);

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#9C897F").s().p("AgDADIAAgMQABgEACgFQABgBAAAAQABgBAAgBQAAAAABAAQAAAAAAAAQABAAAAAJIgBAPIgDANQgCAGgBAAQABgGgBgNg");
		this.shape_34.setTransform(11.143, 8.7091, 1.4181, 1.4181, -2.7037);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#9C897F").s().p("AgBAKQgBgKACgMQABgKABABIAAATQAAAZgBAAg");
		this.shape_35.setTransform(2.1593, 10.0939, 1.4181, 1.4181, -2.7037);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#9C897F").s().p("AAAAPQgDgJAAgIQABgHACgHQACgGACABIAAArQgCAAgCgHg");
		this.shape_36.setTransform(-5.1554, 10.4028, 1.4181, 1.4181, -2.7037);

		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#9C897F").s().p("AgCAOQgBgOADgNQACgMABAAQABAAgCAZIgCAaQgBAAgBgMg");
		this.shape_37.setTransform(-16.0998, 9.5367, 1.4181, 1.4181, -2.7037);

		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#9C897F").s().p("AgBAOQgDgPADgQQABgOACAAQACAAgBAQIgBAPQgCATACANQgCAAgBgSg");
		this.shape_38.setTransform(-24.4336, 8.1216, 1.4181, 1.4181, -2.7037);

		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#9C897F").s().p("AAAANQgCgUABgLIABgFIABgFQABAAAAAZQAAAggBAAIgBgQg");
		this.shape_39.setTransform(-29.3855, 7.0067, 1.4181, 1.4181, -2.7037);

		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#9C897F").s().p("AgBAAQADgVABAAQADAAgDATQgBAIgCAIQgCAIgBAAQgBAAADgWg");
		this.shape_40.setTransform(-33.9869, 3.6037, 1.4181, 1.4181, -2.7037);

		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#F0F2F1").s().p("AgjANIAOgEQATgFANgFIAZgLIAAABQgCAFgKADQgMAEgXAHIgYAFIAAAAg");
		this.shape_41.setTransform(3.3343, 22.8557, 1.4181, 1.4181, -2.7037);

		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f("#F0F2F1").s().p("AAWAeQgogRgUgPQgSgOgEgSQgBgFABgCQADgBAMANIAcAbQAYATAeAOIAYAKIgBABQgHAAgfgMg");
		this.shape_42.setTransform(-26.2172, 18.6412, 1.4181, 1.4181, -2.7037);

		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f("#3D1608").s().p("AgCBfQgigCgmgLIgrgNQgVgIgPgLQgTgNgQgZQgXgggOgQIgTgTIgCgCIgOgLQgMgZAEgCQADgBAGAEIABABIATAPQAcAaAUAgIASAdQALAPAQAMQAQALAVAIIAqANQAlAKAiACQAxAEAtgKQAfgHANgFQAXgHAQgMIAKgHIAOgPIAGgGIACgCIAEgEIAJgHIAKgEIACAAIADAAQAKgBAJABQAJACABAEIAAACIgBACQgCAEgKAGQgKgDgNACQgKABgJAGQgGAEgPARIgKAKQgOAMgWAHQgPAFgrAIQglAHgkAAIgTgBg");
		this.shape_43.setTransform(-8.3844, 7.4244, 1.4182, 1.4182, -2.7036);

		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.f("#834C35").s().p("Ag8BpIgkgKQgpgNgOgGQgWgKgQgQQgJgJgGgOIgcg7Igcg4QgMgYAEgCQADgCAGAEIABABIATAQQAcAZAUAhIASAeQALAOAQALQAQALAVAIIAqANQAlAKAiADQAxADAtgKQAfgHANgEQAXgIAQgLIAKgIIAOgOIAGgGIAPgMIAKgEIACAAIADgBQAKgBAJABQAJACABAEIAAADIgBABQgCAEgKAGIgcAQIgCABIgQAKQgSAMgWARQgSAPgUAKQgwAagmAGQgPACgQAAQgjAAgpgLg");
		this.shape_44.setTransform(-8.2511, 10.247, 1.4182, 1.4182, -2.7036);

		this.shape_45 = new cjs.Shape();
		this.shape_45.graphics.f("#3D1608").s().p("AEEAxIhFgHIgCAAIhIgKQgtgIgSgBQghgEgYABIgYABQgOgBgTgEIgFgBQgNgCgQgGIgSgGIAAgBQgdgJgbgGIgUgEIAAAAIhIgXIgBAAIgGgDIgCgBIABAAQAAgCAJAAIgCABIAAABIABABIAJAEIA7AOIABABIAgAHQAaAGAYAKQAYAIAVAEIACABIACAAIAPADQANACAMgBIAWAAQAOgBAdACICGAUIADAAIACAAIBFAHIABAAIAGACIADABIAFACIABAAIABABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgGAAg");
		this.shape_45.setTransform(-8.6938, -0.3155, 1.4182, 1.4182, -2.7036);

		this.shape_46 = new cjs.Shape();
		this.shape_46.graphics.f("#F0F2F1").s().p("AAuAJIgTgFIgBAAQgcgJgXgEQgZgFgZgBIgWgBIAIgBIAjABQAeACA1ANIABAAIAZAGQAqAKABACIAAABIgCAAQgIAAgqgJg");
		this.shape_46.setTransform(-33.1928, -3.4856, 1.4182, 1.4182, -2.7036);

		this.shape_47 = new cjs.Shape();
		this.shape_47.graphics.f("#975D49").s().p("AEEAxIgHAAIgsgLIhpgWQg3gLgRgBQgSgCgagBQgXgBgSgCIgdgGIAAAAIgrgNIgTgFIAAAAIgdgGQglgGgdgDIgTAAIgCgBIgBAAIgGgDIgCgBIABAAQAAgCAKAAIARABQAwAEAzAMIACAAIAYAGIArANIAAAAIAUAEQASACAXABQAaABASACQAWACAyAKQB8AaAZAGIABAAIAGACIADABIAFACIABAAIABABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgGAAg");
		this.shape_47.setTransform(-8.6938, -0.3155, 1.4182, 1.4182, -2.7036);

		this.shape_48 = new cjs.Shape();
		this.shape_48.graphics.f("#834C35").s().p("AEEAxIhFgHIgCAAIhIgKQgtgIgSgBQghgEgYABIgYABQgOgBgTgEIgFgBQgNgCgQgGIgSgGIAAgBQgdgJgbgGIgUgEIAAAAIhIgXIgBAAIgGgDIgCgBIABAAQAAgCAKAAIARABQAwAEAzAMIACAAIAYAGIArANIAAAAIAUAEQASACAXABQAaABASACQAWACAyAKQB8AaAZAGIABAAIAGACIADABIAFACIABAAIABABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgGAAg");
		this.shape_48.setTransform(-8.6938, -0.3155, 1.4182, 1.4182, -2.7036);

		this.shape_49 = new cjs.Shape();
		this.shape_49.graphics.f("#592928").s().p("ACyAhIgCgBIgBgGQgCgFgEgCIgCAAIgCAAQgHAAgGAEIgIAFIgSgDIAAgGIgBAAQgCgDgGgBQgHgBgHACQgFAAgIADIgCABIgqgFQgBgBAAAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgFgBIgCABIgBAAIhvgSIgBgBIgxgIIAAgBIgLgBIgBgCQgEgCgFgBQgGgBgEACIgWgDIgCgBIgBAAIgBAAIgJgBQgBgCgIgIIgBAAIgBgBIAAgBQABgDAeAFIBbAQIBPAOIC6AaQARAEAEAFIABACQAAAEgFADQgFgDgRgDg");
		this.shape_49.setTransform(-6.5327, 1.8524, 1.4182, 1.4182, -2.7036);

		this.shape_50 = new cjs.Shape();
		this.shape_50.graphics.f("#7C3A36").s().p("ACpAtIADgHQAEgGAAgGIgBgGQgCgFgEgCIgCgBIgCAAQgHAAgGAFIgIAEIgMALQgFAHgBgBQgBAAAAgGIABgNIAAgGIgBAAQgCgDgGgBQgHgBgHABQgFABgIADIgCABQgKAFgLANQgEAHgCgBIAAgGIAAgGQAAgHgHgGIgIgFQgBAAAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgFgBIgCAAIgBAAIgCABQgGABgIALIgGAMIgBABIgCgBIgBgIQgCgGgDgEQgDgHgJgEQgJgDgKAAQgGAAgFABIgOANIgCACIgKAKIgBABIgBAAQgBgBABgFQABgHgBgEIAAgCQgDgIgKgFQgOgJgPABQgFAAgEACQgCADgBAEQgCAFgCAAQgCABgFgGIgBgCQgCgEgBgFIgCgHIgBgBQgEgDgFAAQgGgBgEACIgDACQgCACABAIIABAJIAAAAQgCAAgFgHIgEgFIgIgNIgCgBIgBAAIgBABQgDAGgDAAQgBAAgCgGIAAgBQgBgDgIgIIgBAAIgBgBIAAAAQABgDAeAFIBbAPIBPAOIC6AaQARAEAEAFIABADQAAAEgFADQgIAIgRAEIgEAAIgCAAg");
		this.shape_50.setTransform(-6.4909, 2.7378, 1.4182, 1.4182, -2.7036);

		this.shape_51 = new cjs.Shape();
		this.shape_51.graphics.f("#D8DDDA").s().p("AC6AvQgGgLgegCIg5AAIgIAAIgGAAIgxgBIgDAAQgigDgVgJIgVgKQgJgFgNgEQgSgEgPgBIgLgCQgIAAgNgFIgpgLQgOgDgDACIgBABIABgMIACgIIAEgGIACgBQAGgFAKABIAMACQAOAEAnAPQAnAOAtAHIAaAEQAdAEA+AEIANABIAyAEQATACAIAFIABABQAFADABADIABABIACAGQAAAJgEAKIgEAHQAAgDgCgEg");
		this.shape_51.setTransform(-8.9779, 2.6047, 1.4182, 1.4182, -2.7036);

		this.shape_52 = new cjs.Shape();
		this.shape_52.graphics.f("#F0F2F1").s().p("ABdBEIgIgEQgDgCgEAAQgGgCgHAEQgJAEgGAAQgHAAgHgDQgIgDgHAAQgGAAgEACIgLAEQgQADgbgJIgOgHQgOgFgdgBIgHAAQgSAAgVgMQgXgOgMgVIgFgJQgIgPgBgQIABgMIACgIIAEgGIACgBQAGgFAKABIAMACQAOAEAnAPQAnAOAtAHIAaAEQAdAEA+AFIANABIAyAEQATACAIAFIABABQAFACABADIABABIACAGQAAAJgEAKIgEAHIAAAAIgBADQgLAQgLAEIgHACIgHgEQgFgDgDAAIgEABIgHAFQgFAFgFACQgIACgHAAQgHAAgHgCg");
		this.shape_52.setTransform(-8.865, 4.9952, 1.4182, 1.4182, -2.7036);

		this.shape_53 = new cjs.Shape();
		this.shape_53.graphics.f("#D8DDDA").s().p("AAqArQhLgNgygWQgOgGglggQgIgHABgFQABgFAGgCQAFgBADABQAPAFANAIQAJAFAOAMQAMAJAIgBIAIAAQADABALAGQAEACAHABIASACQAKADAKAEQAKACAJABIARADIAMAEQAEACAGAAQAMACAJgCQAHgBAKgDQAHgDAFABQALADADADQAHAIgHALQgFALgdAAQgXAAgngHg");
		this.shape_53.setTransform(-16.8721, 16.6264, 1.4182, 1.4182, -2.7036);

		this.shape_54 = new cjs.Shape();
		this.shape_54.graphics.f("#000000").s().p("ADCBLIlXgzQgUgFgPgHIgIgDIgagMIgkgYIgGgNQgKgWABgFIADgEIgCgBIgBgBIABAAQAAgCAKAAIAhACQAdABA2AOIACAAIAYAGQAqALABACIAAAAIAUAEQASACAXABQAaABASACQAWADAyAKQB8AZAZAGIABAAIAGACIADABIAFACIABAAIABABIAAANIgBACIAAACQgDAEgKAGIgcARIgCABIgPAKg");
		this.shape_54.setTransform(-8.5283, 3.4817, 1.4182, 1.4182, -2.7036);

		this.shape_55 = new cjs.Shape();
		this.shape_55.graphics.f("#3F3F3F").s().p("AgsBtIghgWQg2gmgsgxIgZgcQgPgRgJgQIgFgKQgHgSgGgSIgCgGIAAgFIABgBIAFAAIADABIAFABIAIAFIA6ApIBHAoQAaAMAbAKIAEABIAfAIQAuALAuABQAbAAAkgCIAygEIAVABIAKADQAJADAFAIIgCABIgQAKQgSALgXASQgRAOgUAKQgxAaglAGQgPADgRAAQgiAAgpgLg");
		this.shape_55.setTransform(-10.5225, 9.8154, 1.4182, 1.4182, -2.7036);

		this.shape_56 = new cjs.Shape();
		this.shape_56.graphics.f("#3D1608").s().p("AC5AZQg7gIgqgFQgmgEgxgDQgwgEgqgDIhagLQgegFAAgEQAAgCAHgDQAMAEBlALQAqAFAwADQAxAEAmADQBKAHAxAIQAIAFgBADQAAACgHAAIgWgDg");
		this.shape_56.setTransform(-11.5531, 5.2313, 1.4182, 1.4182, -2.7036);

		this.shape_57 = new cjs.Shape();
		this.shape_57.graphics.f("#E8DDDB").s().p("AAAADQgJgDABgBQAAgCAGAAQAEgBAEADQAEACgBACQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgGgBg");
		this.shape_57.setTransform(-19.2616, 9.2945, 1.4181, 1.4181, -2.7037);

		this.shape_58 = new cjs.Shape();
		this.shape_58.graphics.f("#E8DDDB").s().p("AAMAJQgHAAgGgDQgHgBgGgEQgGgCABgDQAAgDAOAAQAMgBAGAEQAJAHgCADQgBADgFAAIgCAAg");
		this.shape_58.setTransform(-24.1545, 8.8459, 1.4181, 1.4181, -2.7037);

		this.shape_59 = new cjs.Shape();
		this.shape_59.graphics.f("#9F5742").s().p("AgBAXQgagCgRgHQgQgHgOgKQgPgLACgFQAEgKBEAPQAKACAJAEIASAEQAVADAbAAQASgBAAACQABADgMAGQgLAGgLADQgSAGgXAAIgPgBg");
		this.shape_59.setTransform(-16.8917, 9.3899, 1.4181, 1.4181, -2.7037);

		this.shape_60 = new cjs.Shape();
		this.shape_60.graphics.f("#834C35").s().p("AC5AiQg7gJgqgEQgmgEgxgEQgwgDgqgFIhagKQgegEAAgEQgBgJBJgHQAwgEArgCQAWAAAMAFQAHADAIAHQAGAFAGACQAJACAKgEQAPgFAJgBQAPgBAXAGQAkAJApAQQAvASgCAHQAAACgHAAIgWgCg");
		this.shape_60.setTransform(-11.6067, 4.027, 1.4182, 1.4182, -2.7036);

		this.shape_61 = new cjs.Shape();
		this.shape_61.graphics.f("#3D1608").s().p("Ag9AjIAJgBQARgDAKgKQAIgFACgEQAFgLgKgRQgFgIgGgFQgFgEgHgBIAhABQAWACATALQAhAQgCAMQgDANg3AKQgRAEgbAAIgVAAg");
		this.shape_61.setTransform(11.4871, 10.3655, 1.4182, 1.4182, -2.7036);

		this.shape_62 = new cjs.Shape();
		this.shape_62.graphics.f("#834C35").s().p("ABoAwQgpgBhYgMQhKgKgcgIQgigLgZgLQghgRABgKQABgHAVgGQARgFATADQAHAAAdAHIBHAJQA0AHAqADQAnACAxgCQAjABAYANQAhAQgCANQgCAIgTAGQgKADgbAGQgTAEgYAAIgOgBg");
		this.shape_62.setTransform(-10.8514, 9.449, 1.4182, 1.4182, -2.7036);

		this.shape_63 = new cjs.Shape();
		this.shape_63.graphics.f("#F6DCC8").s().p("Ag1ArQh1gVgkgxQgMgUADgEQADgEAZANQAoAXANAGQAqASAwAGQAdAEApgBQBTAABGgJQAkgFACAFQABAGgnASQg4AYhJAAQgwAAg3gKg");
		this.shape_63.setTransform(-11.3596, 12.4229, 1.4182, 1.4182, -2.7036);

		this.shape_64 = new cjs.Shape();
		this.shape_64.graphics.f("#985D42").s().p("AgfBpQgOgbALgpQAFgWANgXQAFgKAGgJQAFgHACgHQAEgNADgdQACgUAKgKQANgNAGAEQADACgSAmQgYAxgDArQgEAogBAWIAAAlQgBAOgEABIgBAAQgHAAgLgTg");
		this.shape_64.setTransform(89.0421, -52.4202, 1.4182, 1.4182, -2.7036);

		this.shape_65 = new cjs.Shape();
		this.shape_65.graphics.f("#985D42").s().p("AAGgaIAHgYIgOA9QgGAbgFANIAShNg");
		this.shape_65.setTransform(92.8022, -43.9322, 1.4182, 1.4182, -2.7036);

		this.shape_66 = new cjs.Shape();
		this.shape_66.graphics.f("#985D42").s().p("AghCGQgIgDABgcQAAgSAHg/QAHg9AMgyIAMgtIgDALQgLAygHA/QgHA+gBASQAAAcAIADQAJAEARgUQAQgRANgXIAJgUQgGAggNAVQgNAXgOARQgQARgIAAIgEgBg");
		this.shape_66.setTransform(85.3408, -39.9121, 1.4182, 1.4182, -2.7036);

		this.shape_67 = new cjs.Shape();
		this.shape_67.graphics.f("#BC8568").s().p("AAAB8QgCgCADgYQAHgoACgYQAEg2gJgfQgFgVgIgRIgOgXQgHgJACgBQACgCAOAIIAJAGQAHAGAFAFQAOARAEAmQADAbgGAZQgGAaACAXQACASgBAHQgBAPgHANQgIAOgFAAIgBAAg");
		this.shape_67.setTransform(-94.281, -65.3393, 1.4183, 1.4183, -2.7034);

		this.shape_68 = new cjs.Shape();
		this.shape_68.graphics.f("#BC8568").s().p("Ag9DCQgIgDAAgcQABgTAHg+QAHg/ALgxQAFgUAOgtQAQg1AJgTQAJgRAMgFIAOgEQAPgCAIAGQAOAKgEAjQgDAXgQA/QgIAhgLAgIgTBSQgHAcgKAVQgNAXgQARQgPAQgJAAIgDAAg");
		this.shape_68.setTransform(88.9952, -48.533, 1.4183, 1.4183, -2.7034);

		this.instance_6 = new lib.Group_2();
		this.instance_6.setTransform(-4.4, 20.65, 1.4182, 1.4182, -2.7036, 0, 0, 61.8, 41);
		this.instance_6.alpha = 0.6016;

		this.instance_7 = new lib.Group_1_1();
		this.instance_7.setTransform(-4.75, 21.75, 1.4182, 1.4182, -2.7036, 0, 0, 62, 41.8);
		this.instance_7.alpha = 0.6016;

		this.shape_69 = new cjs.Shape();
		this.shape_69.graphics.f("#48341F").s().p("AI7IsQgHgEAFgUIAPgwQAYgPAWgaQBGhQgGiSQgDhNgZhZIglhmQgRgyAAgzQAAgSAFg2QADgggIgYQgLgdgegZQgpghhagpQiIg9hFgVQhxgihzAFQhHAEhbAWQiLAiiMBVQhXA1geAWQgtAggcAmQhIBhgCCJQgBBPAeCKQATBVARAAIADAAQgMArgMAAQgTAAgThdQgeiYABhWQABiXBLhqQAdgqAvgkQAfgYBag6QCPhbCTgoQBegYBJgEQB4gFB1AlQBJAXCMBDQBdAtAqAlQAgAaALAgQAIAagDAjQgFA8AAAUQAAA4ASA3IAmBwQAaBiADBUQAGCghJBZQgWAbgZARQgUAOgLAAQgEAAgCgCg");
		this.shape_69.setTransform(0.2321, -137.009, 1.4183, 1.4183, -2.7034);

		this.shape_70 = new cjs.Shape();
		this.shape_70.graphics.f("#20170E").s().p("AJ6DZQgVg1hFiXQgvhkgVgiQgUgegZgNQgigSg0AHQhHAJgxgHQg/gJg9gnQg+gmg4gIQhWgMhYAcQgxAQgnAYQgyAegnAuQgXAbgmA4Qg2BSgsBwQgWA4gLAoIgSBAQgKAdgJAAQgTAAgThdQgPhMgGgqQgKhJACg7QABA4AKBDQAFAoANBHQATBnATAAQAJAAAKggIAShHQALgsAWg9QAsh7A2hbQAlg+AYgeQAngyAygiQAmgaAygSQBYgfBWANQA4AJA+AqQA9AqA/AKQAxAIBHgKQA0gHAiAUQAZAOAUAiQAVAkAvBwQBHCpAUA7QAfBYgBAxQAAgsgfhPg");
		this.shape_70.setTransform(-7.6958, -133.9204, 1.4183, 1.4183, -2.7034);

		this.shape_71 = new cjs.Shape();
		this.shape_71.graphics.f("#48341F").s().p("AhNDAQgJg6gChBQgBgnABgWQACghAIghQAPhEAlg9QBBhNAKAGQACACgJAcQgKAfAIAZQAFARATAQQATAQAEANQAIAYgXAjQgiAsgRAYQgvBGgOBgIgGA4QgDAUgGAAQgMAAgKhDg");
		this.shape_71.setTransform(-82.2711, -135.1134, 1.4183, 1.4183, -2.7034);

		this.shape_72 = new cjs.Shape();
		this.shape_72.graphics.f("#382918").s().p("AI7IsQgJgGASg1QAZhKADg2QADgsgfhRQgVg3hIidQgvhkgVghQgUgfgZgNQgigSg0AHQhHAJgwgHQhAgJg9gmQg8gng6gIQhVgMhYAcQgvAQgqAYQgyAfgnAtQgYAcglA4Qg2BRgsBwQgWA4gLAoIgSBAQgKAdgJAAQgTAAgThdQgeiYABhWQABiXBLhqQAdgqAvgkQAfgYBag6QCPhbCTgoQBegYBJgEQB4gFB1AlQBJAXCMBDQBdAtAqAlQAgAaALAgQAIAagDAjQgFA8AAAUQAAA4ASA3IAmBwQAaBiADBUQAGCghJBZQgWAbgZARQgUAOgLAAQgEAAgCgCg");
		this.shape_72.setTransform(0.2321, -137.009, 1.4183, 1.4183, -2.7034);

		this.shape_73 = new cjs.Shape();
		this.shape_73.graphics.f("#985D42").s().p("ABoF5QAMgkAJgmQAKgnADguQADhJgShUQgHgjgTgmIhTiyQghhLgLgSQgRgcgYgIQgGgCgrgDQgfgDgTgPQgbgUADgOQADgPAkgHQAkgIAiAHQA+AMAzBNQAjAyBBCNQAgBDAKAcQAPAjAFAaQAVB6g3CGQgcBEghAqg");
		this.shape_73.setTransform(62.9371, -110.4324, 1.4183, 1.4183, -2.7034);

		this.shape_74 = new cjs.Shape();
		this.shape_74.graphics.f("#CA9781").s().p("ABAKhQgMgCgHgwQgKhDgSgoQgUgtgkgfQgVgSgvgcQgvgcgXgTQgkgggVguQgOgcgJg1IgPhfQgGgeABggQABgmAIglQALgyAXg3QAbg/AghDQAbg5AJgWQAihYAGh+IAEhHQADgbAKgCQAJgBARAQQAWAWAXALQAVAKAVABQAPAAAWgDIAfgFQARgCAPAEQBmAYAkEVIAJBPQABAJgEAxIgLCJQgKB8gEApQgHA8gPBDQgJApgeB0IAAABQgtCRhPB6g");
		this.shape_74.setTransform(51.4991, -73.2498, 1.4183, 1.4183, -2.7034);

		this.shape_75 = new cjs.Shape();
		this.shape_75.graphics.f("#BC8568").s().p("ACnB+IgMgSIgOgQIgEgEQgGgFgNAAQgJABgvgSQg8gYgogLQgdgIgXADQgJACgKAEQgIADgGABQgXACgYgPQgZgQgEgUQgHghAPghQAJgUAJgJQAJgIAIgEQAUgLAlABQAuAEAsAQQAcAQAcABQALABATgDQASgEAOADQAWAEAQAKQAYAPAOAcQAYAsgJBBQgJA7gQACIAAAAQgEAAgEgFg");
		this.shape_75.setTransform(-41.2298, -87.0817, 1.4183, 1.4183, -2.7034);

		this.shape_76 = new cjs.Shape();
		this.shape_76.graphics.f("#CA9781").s().p("AJRGvQgKgGATg2QAZhKADg1QADgtgfhQQgVg3hJicQgvhmgVghQgUgfgYgMQgigSg0AGQhIAJgwgHQhAgJg9gmQg9gmg4gIQhWgMhYAcQgvAPgpAZQgyAegoAuQgXAbglA4Qg3BTgsBvQgVA4gLAnQgOAmgKAuQgFAYgFAhQgEAigDAmQgBAcgBAAQgCAAgBgVIgCgpQABgmgBgYQgBgWgEgjQAVhoAhheQAXhKARgsQAfhQAhgnQBviDDJgpQC8gnC2A3QBVAaBPAvQCKBTBNB/QBGByAHCLQAGBsggC0QgPAJgIAAQgEAAgCgCg");
		this.shape_76.setTransform(-0.4374, -115.1204, 1.4183, 1.4183, -2.7034);

		this.shape_77 = new cjs.Shape();
		this.shape_77.graphics.f("#BC8568").s().p("AgCgHQgKgbAAgNIAMApQAJAbAFAbQgFgUgLgjg");
		this.shape_77.setTransform(-102.288, -78.6161, 1.4183, 1.4183, -2.7034);

		this.shape_78 = new cjs.Shape();
		this.shape_78.graphics.f("#BC8568").s().p("AAkAPIgPgcQgHgLgIgCQgKgDgOAJQgOAIgIANQgGANAAANQgEgQAAgKQgBgMAHgLQAHgOAOgIQAOgJAKADQAIACAHALQAEAGALAXQAOAeADAMQADAJAAAJIgPglg");
		this.shape_78.setTransform(-97.2828, -86.076, 1.4183, 1.4183, -2.7034);

		this.shape_79 = new cjs.Shape();
		this.shape_79.graphics.f("#BC8568").s().p("AgIBNQALhHACgZQAEg3gEgmIgCgOQAEATADASQAEAkgEA5QgDAfgHAqQgGAogBAKQgIgJAHgpg");
		this.shape_79.setTransform(-98.7443, -50.5282, 1.4183, 1.4183, -2.7034);

		this.shape_80 = new cjs.Shape();
		this.shape_80.graphics.f("#BC8568").s().p("AgUBEQAOgMAEgOQAKgXAEgSQAGgRADgQQAEgSABgYQAMBFgaAsQgNAYgTAJIgJADIAJgHg");
		this.shape_80.setTransform(-91.5689, -43.2885, 1.4183, 1.4183, -2.7034);

		this.shape_81 = new cjs.Shape();
		this.shape_81.graphics.f("#ECC5AF").s().p("AgaDWQgMgHAHgpQANhSABgTQAFg4gFglQgEgkgWg/QgNgoALgUQAIgOAOgIQAOgJAKADQAIACAGAKQAFAHALAXQAOAhADAJQAHAbgJAlQgFAVgNAmQgTA7ADBaQACBCgSAIQgHACgFAAQgGAAgEgDg");
		this.shape_81.setTransform(-96.0934, -62.6242, 1.4183, 1.4183, -2.7034);

		this.shape_82 = new cjs.Shape();
		this.shape_82.graphics.f("#ECC5AF").s().p("AkBNQQhfgpg/g2QhZhLgyhtQgfhEgniWQg+jpAfj3QARiNA9jIQAghoAQgmQAXg4AignQBviDDIgpQC8gnC3A3QCGAqBnBSQBYBGA2BZQAoBCATBJQAbBngMCJQgIBWgmDAQgZCEgYBKIAAAAQgtCRhPB6QgLASgPAUQhZB+g1AzQhZBXhuAdQg6APg7AAQhqAAhvgwg");
		this.shape_82.setTransform(-1.3773, -53.3544, 1.4182, 1.4182, -2.7036);

		this.shape_83 = new cjs.Shape();
		this.shape_83.graphics.f("#6B3F2E").s().p("AFiKLQASgmAFgsQAGg2gPgzQgShogihwQgjhvgihcQgRgsgCgfQgEgnAMhbQAJhEgPgQQgKgKgWAHQgLADgoAUQhZAshFgCQg5gBhKgpQhEgmg/AEQguADhEAaQgyATgHgKQgEgFAHgOIAVgmQAXgsAMg1QAIghAJhGQAHgwgCglQgBgXAGgKQAcgyB2gHQBqgHCKAeQCJAdBeAvQBnA1ACA0QABAGgEAIIgQAmQg0CGAFBxQABAkAJAqQANBDAgA+QAvBbAHAUQATAyAHA7QAFAnAEBoIgEBgQgKBmgjAZQgMAJgMABIgDAAQgHAAgJgDg");
		this.shape_83.setTransform(-14.0216, 126.257, 1.4183, 1.4183, -2.7034);

		this.shape_84 = new cjs.Shape();
		this.shape_84.graphics.f("#D59562").s().p("AEwGfQilitgbgZQhrhjh7hZIi3h5QhXg7gigmQgsgxgBg6QgBgmAXgnQAnhFALgdQDNC7ChBmQCeBkAnggQAdgYAdgmIAXghIASggQAFgKAFAAQAZgEApBoQAfBQAbBoQANAyAWBdQARBDALgBIADgBQACBbgQA9QgRBAghANQgFACgGAAQggAAg4g5g");
		this.shape_84.setTransform(-15.4342, 151.7686, 1.4183, 1.4183, -2.7034);

		this.shape_85 = new cjs.Shape();
		this.shape_85.graphics.f("#BC8568").s().p("AEwJ8QimiugagYQhrhjh7hZIi3h6QhXg7gigmQgsgwgBg7QAAgnAig6QAthNAYhhQAUhRAEhcQACg+AVgbQArg5BrgSQBjgRB3AVQB5AWBZAzQBiA4AZBJQAMAkgJAoQgFAVgYA4QgyB0AKBpQAHBBAgBAQAuBbASA8QAzCigFCjQgECng8AXQgFACgHAAQggAAg3g5g");
		this.shape_85.setTransform(-16.9294, 119.8312, 1.4183, 1.4183, -2.7034);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_85 }, { t: this.shape_84 }, { t: this.shape_83 }, { t: this.shape_82 }, { t: this.shape_81 }, { t: this.shape_80 }, { t: this.shape_79 }, { t: this.shape_78 }, { t: this.shape_77 }, { t: this.shape_76 }, { t: this.shape_75 }, { t: this.shape_74 }, { t: this.shape_73 }, { t: this.shape_72 }, { t: this.shape_71 }, { t: this.shape_70 }, { t: this.shape_69 }, { t: this.instance_7 }, { t: this.instance_6 }, { t: this.shape_68 }, { t: this.shape_67 }, { t: this.shape_66 }, { t: this.shape_65 }, { t: this.shape_64 }, { t: this.shape_63 }, { t: this.shape_62 }, { t: this.shape_61 }, { t: this.shape_60 }, { t: this.shape_59 }, { t: this.shape_58 }, { t: this.shape_57 }, { t: this.shape_56 }, { t: this.shape_55 }, { t: this.shape_54 }, { t: this.shape_53 }, { t: this.shape_52 }, { t: this.shape_51 }, { t: this.shape_50 }, { t: this.shape_49 }, { t: this.shape_48 }, { t: this.shape_47 }, { t: this.shape_46 }, { t: this.shape_45 }, { t: this.shape_44 }, { t: this.shape_43 }, { t: this.shape_42 }, { t: this.shape_41 }, { t: this.shape_40 }, { t: this.shape_39 }, { t: this.shape_38 }, { t: this.shape_37 }, { t: this.shape_36 }, { t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.instance_5 }, { t: this.instance_4 }, { t: this.shape_31 }, { t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.instance_3 }, { t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-104.5, -216.4, 209, 432.9);


	(lib.Interpoler11 = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = true; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F6DCC8").s().p("AAVAQQgMgDgKgGQgMgGgJgIQgJgIABgBIAYAPIAbANIAKAFIgBAAIgJgBg");
		this.shape.setTransform(-34.8047, -120.1273, 1.4408, 1.4408, 29.9995);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#F6DCC8").s().p("AgZAAQgIgEgJgHQgHgGAAgBIAYAOQAZANAbAGQAPADAIABIgMAAQghAAgegTg");
		this.shape_1.setTransform(-35.7788, -117.1327, 1.4408, 1.4408, 29.9995);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#F6DCC8").s().p("AgRACQgIgfAGgDQABgBAIAFQAKAHAOAGQAJAEAAACQAAADgJAEQgKAEgEAHQgEAHAAAJIgBAIIAAAAQgEAAgIgfg");
		this.shape_2.setTransform(-42.2239, -114.5482, 1.4408, 1.4408, 29.9995);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#ECC5AF").s().p("ABLAbQglgRgkgKQgZgIgvgKQgegHAAgDQAAgCAOgCQAfgEATABQAeAAAcAMQAgANAaAVQAYAUgDAFIgBAAQgEAAgVgJg");
		this.shape_3.setTransform(-10.9935, -101.0626, 1.4408, 1.4408, 29.9995);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#000000").s().p("ABdAWQgbgdgegNQgSgIgUgDQgMgCgagCQgbgBgbADIgWADQAAgCAYgGQAcgHAdABQAlAAAhAMQAeAKASAQQAOALAKAQQAMAWgDACIAAAAIgXgXg");
		this.shape_4.setTransform(-10.039, -102.6964, 1.4408, 1.4408, 29.9995);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#BC8568").s().p("AAFAMQgQgCgQgKQgOgJABgCIARAIQARAHAJACQAMADAOgDIAMgCQgOAIgQAAIgGAAg");
		this.shape_5.setTransform(-30.1047, -117.384, 1.4408, 1.4408, 29.9995);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#BC8568").s().p("AAGAOQgTgCgTgMQgQgLABgCIATAJQAXAKAIACQAPADAQgDIAOgDQgQAJgTAAIgHAAg");
		this.shape_6.setTransform(-33.0131, -117.1002, 1.4408, 1.4408, 29.9995);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#382918").s().p("AAOADIg1gFQAIgBATACIAoAEIAMAAg");
		this.shape_7.setTransform(-31.9346, -105.1274, 1.4408, 1.4408, 29.9995);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#BC8568").s().p("AhaAZQgFgCAEgQQAEgQALgIQAJgHARABIApAGQAkAGAnACIAcABQAAACgWACQgYADgZgCIgzgFQgVgCgNAHQgKAFgKANQgHAKgBAAIAAAAg");
		this.shape_8.setTransform(-32.3359, -104.2207, 1.4408, 1.4408, 29.9995);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#BC8568").s().p("AgSAHIg0gfIAcAPQAjAOAMAEQAUAEAZgGQAUgFABACQABACgDAFQgDAEgEADQgJAHgNAAQgXAAgjgSg");
		this.shape_9.setTransform(-34.7352, -114.0728, 1.4408, 1.4408, 29.9995);

		this.instance = new lib.barbe1();
		this.instance.setTransform(-3.35, 6.65, 1.4408, 1.4408, 29.9997, 0, 0, 18.4, 13.9);
		this.instance.alpha = 0.6016;

		this.instance_1 = new lib.barbe1_1();
		this.instance_1.setTransform(-5.65, 5.1, 1.4408, 1.4408, 29.9997, 0, 0, 18.4, 13.8);
		this.instance_1.alpha = 0.6016;

		this.instance_2 = new lib.barbe3();
		this.instance_2.setTransform(-48.95, -28.4, 1.4408, 1.4408, 29.9997, 0, 0, 16.3, 10.8);
		this.instance_2.alpha = 0.6016;

		this.instance_3 = new lib.barbe3_1();
		this.instance_3.setTransform(-48.5, -27, 1.4408, 1.4408, 29.9997, 0, 0, 16, 11.1);
		this.instance_3.alpha = 0.6016;

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#CA9781").s().p("ABrDrIAGgZQAHggABgbQAAg/gkg+QgUgfglgVQgugcgYgZQgsgsgbg7QgWgyAFgCQABgBASArQAaAzAmApQAfAiA6AlQAtAcAUAlQAOAcAGAgQAHAggEAZIgIAlQgMAtgDAAIAAAAg");
		this.shape_10.setTransform(12.0676, 6.886, 1.4408, 1.4408, 29.9997);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#CA9781").s().p("AimC9IgCggQgBgVABgRQAFh0AvgtQAYgYAzAAQA8gCAogWQAwgYAkgwQARgYAJgRQAGAEghAuQgmA4g2AbQgjARg2ACQgsACgXAVQgaAYgMAsQgIAagGA1QgEAaAAAhIgBAaQgBAAgCgPg");
		this.shape_11.setTransform(-46.6726, -41.9599, 1.4408, 1.4408, 29.9997);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#F9F9F9").s().p("AjJA1QgDgIAxgcIA7geQAygZAogIQAYgGALgBQAQgBAPADQAQADARAMQAVAPARAIQAXAKAcAEIAUAEQAAACgWAAIg+ABQg6AEgqAFIhaAQQhUAQgYAEIgPABQgFAAgBgBg");
		this.shape_12.setTransform(40.5175, -145.1302, 1.4408, 1.4408, 29.9995);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#F6DCC8").s().p("Aj8CIQgVgCgLgCQgWgGgHgOQgRghA/hDQBAhCBVgoQAxgYAjgJQA4gPAxAOQAUAGAdASQAeASAeAKQAsAPA2ADQAnACABAEQAAAFgeALIhiAjIhBAYQg4AUg5AAQg5gBgjANQgjAMg4ApQgnAcglAAIgFAAg");
		this.shape_13.setTransform(38.3762, -136.4368, 1.4408, 1.4408, 29.9995);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
		this.shape_14.setTransform(46.1313, -52.057, 1.4408, 1.4408, 29.9997);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#000000").s().p("ABDAvIAqgmIhIgkQgFAdgJAOQgNATgXACQgdAEgPgeIASgXIgRgLQgJgGgIgBQgKgBgPABIgaADQAgghBaAPQBbAOAkAsIg3Amg");
		this.shape_15.setTransform(52.0073, -47.8266, 1.4408, 1.4408, 29.9997);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#DFD8D4").s().p("AgFAkQgxgGgTgGQgWgGgNgOQgPgTADgKQAEgLAWgFQANgCAcgBQAugCArALQAiAJAaANQAcANgCAHQAAACgFACQgHAEgHAGIgYAYg");
		this.shape_16.setTransform(50.7289, -47.8468, 1.4408, 1.4408, 29.9997);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#6B3F2E").s().p("Ah4BVQgBgBABgHIAAgJQAIg7AHglQAEgYAPgOQAbgaAxALQASAFAUASQAkAhAdAUIAXAPQAHAFgBADQgCAJhGAEQhZAFgcAGQghAHgKARIgGANQgDAGgBAAIAAAAg");
		this.shape_17.setTransform(48.0127, -56.8345, 1.4408, 1.4408, 29.9997);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#000000").s().p("AA3AkIgzgRQgkgJgPgDQgigFggACIgMgvQBFALBDAZQA8AUA3Afg");
		this.shape_18.setTransform(-11.7367, -97.7778, 1.4408, 1.4408, 29.9997);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#221911").s().p("AA6AGQgNAAgXAEQgkAHguAFQgOABgSgBQgjgCgQgPQgGgEgFgGQgIgLACgHQADgIAnABQA9ACAegDQALgBBJgPQAigGATANQAbARAGAVIAFAXQAFARAJAMQg0gog0gEg");
		this.shape_19.setTransform(72.2908, -65.2834, 1.4408, 1.4408, 29.9995);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#221911").s().p("AB1A5QgcgSgWgMQhGgkhCgMQghgGgpAAQgcAAgBgDQgBgGAcgJQAcgLAggEQAvgHAuAKQAgAGBOAbQAZAJALAGQAOAJAEALQAEAOgHAQQgIAQgNAFQgEACgFAAQgKAAgMgHg");
		this.shape_20.setTransform(-2.338, -111.6639, 1.4408, 1.4408, 29.9995);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#F6DCC8").s().p("ACbAzQgFgNgEgHQgJgOgQgJQgMgHgZgHQhFgVgggFQg3gIgvAPIgkAOQgPAHgCgCQgCgDAPgNQAQgNATgJQAXgKArgEIASgBQARAAASABQA2AEAtAPQAkANANAHQAVALAGAQQAGAPgFATQgFASgGAAQgCAAgDgJg");
		this.shape_21.setTransform(-0.2266, -114.5125, 1.4408, 1.4408, 29.9995);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#985D42").s().p("ABBCJQgNgHgEgiQgFgkgTgNQgPgKgbgEQgUgCgMACQgGABgUAHQgVAHgaALQgVAJgJACQgPADgFADQgLAHgHAOIgGAMQgEgBAIguQAIg0ARgvIAOgmIASgsQAHgQAEgCQANgHAhARQAqAVAfACQAkADAngRQAigFAgAKQA5ATAFAcQACAOgCAQIgCAQQgCAOABALQABAPADASQACAKgBAGQgBARgnAaQgoAcgQAHQgPAIgLAAQgHAAgFgDg");
		this.shape_22.setTransform(59.3794, -54.3341, 1.4408, 1.4408, 29.9995);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#BC8568").s().p("AAbAVQgPgRgPgEQgNgCgQAFQgNAEgBgCQgEgFARgRQATgSATADQATACAPAWQAHALABAOQACAOgGADIAAAAQgEAAgMgNg");
		this.shape_23.setTransform(-18.5156, -42.3417, 1.4408, 1.4408, 29.9995);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#BC8568").s().p("AAeAUQgQgRgQgDQgOgCgQAEQgMAEgBgBQgEgGASgQQATgSASADQAWADAMAeQALAcgHAEIAAAAQgBAAgNgNg");
		this.shape_24.setTransform(-2.1843, -29.7309, 1.4408, 1.4408, 29.9995);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#BC8568").s().p("AgJBFIADgKQAEgNACgPQAEgggEgYQgDgPgHgPIgEgNQACgBAIAJQAIAJAFAMQANAegOAqQgMAkgFAAIAAAAg");
		this.shape_25.setTransform(6.9842, -27.1955, 1.4408, 1.4408, 29.9995);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#BC8568").s().p("AgEAdQgDgBgDgFIgIgNQgGgHgHgFQgGgEAAgCQAAgHAMgHQAMgGANABQAPABANAKQAMAKgCAGQgBADgGACQgKAEgHAFQgEADgHAIQgDAEgDAAIgBAAg");
		this.shape_26.setTransform(-16.572, -27.7366, 1.4408, 1.4408, 29.9995);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#FFFFFF").s().p("AgLByQgDgBgDgEQgEgGgFgDQgFgFgHgBQgGgCgBgCQgBgEANgLQASgQAIgMQAJgNAJgdQANgmAJgtIAHgjQACAAgBAZQgBAdgFAfQgCASgFAVQgDALABALQABAZAMAfQAJAXgDACQgCABgIgFQgKgGgJAAQgGABgKAGQgEADgEAAIgDAAg");
		this.shape_27.setTransform(4.5365, -56.6893, 1.4408, 1.4408, 29.9995);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#F6DCC8").s().p("AgCCwQgHgBgGgVQgIgXgMgHQgNgHgXAHQgUAGgBgBQgCgDATgTQAcgaAQgYQAQgVANgfQAEgLAThJQALgsANgXQARgeAGABQAJACABAnQAAAigFAoQgDAZgGASQgFAPAAAMQgCApAWAzQASAqgFAEQgDADgRgIQgTgJgNAEQgOAEgMATQgLAPgFAAIAAAAg");
		this.shape_28.setTransform(3.5086, -58.8992, 1.4408, 1.4408, 29.9995);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#26170A").s().p("AAAAXQgMgEgEgCQgKgFgBgIQgCgIAGgIQAGgJAJgCQANgEAOAOQAJAJAAAJQAAAOgKAFQgDABgEAAQgFAAgGgCg");
		this.shape_29.setTransform(-5.1298, -26.5312, 1.4408, 1.4408, 29.9995);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#26170A").s().p("AAAAYQgKgEgHgIQgEgEgDgGQgGgKAEgHQAHgNAVAEQAKACAIAIQAJAJAAAJQAAANgKAGQgEADgGAAQgFAAgEgCg");
		this.shape_30.setTransform(-21.7587, -38.2686, 1.4408, 1.4408, 29.9995);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#F6DCC8").s().p("AimDkQgOgBgMgaQgHgQgPgvQgJgggFgiQgCgWgDgpQgCg3ACgiQALiPAggEQAIgBALANQATAZAOAMQA5A3A+AKQAdAEAhgEQATgDAcgHQAdgHAogQQAfgKATAKQASAJAFAOQAIAUgQAdQgbA0g2AlIgwAcQgjAOgjgBQgfAAgWALQgzAYgnBLIgXAtQgLARgMAAIgCAAg");
		this.shape_31.setTransform(-41.2216, -65.7071, 1.4408, 1.4408, 29.9995);

		this.instance_4 = new lib.barbebas();
		this.instance_4.setTransform(-48.75, 18, 1.4408, 1.4408, 29.9995, 0, 0, 27.4, 13.6);
		this.instance_4.alpha = 0.6016;

		this.instance_5 = new lib.barbebas_1();
		this.instance_5.setTransform(-49.3, 19.35, 1.4408, 1.4408, 29.9995, 0, 0, 30.9, 15.3);
		this.instance_5.alpha = 0.6016;

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#F0F2F1").s().p("AgGgDIAGAAQADABADACQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAIgCABQgEAAgHgHg");
		this.shape_32.setTransform(-36.3675, -16.1996, 1.4408, 1.4408, 29.9997);

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#9C897F").s().p("AgDAQQgBAAAAgGIABgHQADgTADABQABAAABAGQAAAHgCAFIgDAJQAAABgBABQAAAAgBABQAAAAAAABQgBAAAAAAIAAAAg");
		this.shape_33.setTransform(-8.5921, 11.4146, 1.4407, 1.4407, 29.9995);

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#9C897F").s().p("AgDADIAAgMQABgEACgFQABgBAAAAQABgBAAgBQAAAAABAAQAAAAAAAAQABAAAAAJIgBAPIgDANQgCAGgBAAQABgGgBgNg");
		this.shape_34.setTransform(-15.3694, 8.5778, 1.4407, 1.4407, 29.9995);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#9C897F").s().p("AgBAKQgBgKACgMQABgKABABIAAATQAAAZgBAAg");
		this.shape_35.setTransform(-23.8096, 4.8305, 1.4407, 1.4407, 29.9995);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#9C897F").s().p("AAAAPQgDgJAAgIQABgHACgHQACgGACABIAAArQgCAAgCgHg");
		this.shape_36.setTransform(-30.2324, 1.0796, 1.4407, 1.4407, 29.9995);

		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#9C897F").s().p("AgCAOQgBgOADgNQACgMABAAQABAAgCAZIgCAaQgBAAgBgMg");
		this.shape_37.setTransform(-39.1132, -5.6681, 1.4407, 1.4407, 29.9995);

		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#9C897F").s().p("AgBAOQgDgPADgQQABgOACAAQACAAgBAQIgBAPQgCATACANQgCAAgBgSg");
		this.shape_38.setTransform(-45.461, -11.4524, 1.4407, 1.4407, 29.9995);

		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#9C897F").s().p("AAAANQgCgUABgLIABgFIABgFQABAAAAAZQAAAggBAAIgBgQg");
		this.shape_39.setTransform(-49.0824, -15.1235, 1.4407, 1.4407, 29.9995);

		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#9C897F").s().p("AgBAAQADgVABAAQADAAgDATQgBAIgCAIQgCAIgBAAQgBAAADgWg");
		this.shape_40.setTransform(-51.1481, -20.5584, 1.4407, 1.4407, 29.9995);

		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#F0F2F1").s().p("AgjANIAOgEQATgFANgFIAZgLIAAABQgCAFgKADQgMAEgXAHIgYAFIAAAAg");
		this.shape_41.setTransform(-29.81, 16.3854, 1.4407, 1.4407, 29.9995);

		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f("#F0F2F1").s().p("AAWAeQgogRgUgPQgSgOgEgSQgBgFABgCQADgBAMANIAcAbQAYATAeAOIAYAKIgBABQgHAAgfgMg");
		this.shape_42.setTransform(-52.76, -3.4383, 1.4407, 1.4407, 29.9995);

		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f("#3D1608").s().p("AgCBfQgigCgmgLIgrgNQgVgIgPgLQgTgNgQgZQgXgggOgQIgTgTIgCgCIgOgLQgMgZAEgCQADgBAGAEIABABIATAPQAcAaAUAgIASAdQALAPAQAMQAQALAVAIIAqANQAlAKAiACQAxAEAtgKQAfgHANgFQAXgHAQgMIAKgHIAOgPIAGgGIACgCIAEgEIAJgHIAKgEIACAAIADAAQAKgBAJABQAJACABAEIAAACIgBACQgCAEgKAGQgKgDgNACQgKABgJAGQgGAEgPARIgKAKQgOAMgWAHQgPAFgrAIQglAHgkAAIgTgBg");
		this.shape_43.setTransform(-31.3599, -3.2452, 1.4408, 1.4408, 29.9997);

		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.f("#834C35").s().p("Ag8BpIgkgKQgpgNgOgGQgWgKgQgQQgJgJgGgOIgcg7Igcg4QgMgYAEgCQADgCAGAEIABABIATAQQAcAZAUAhIASAeQALAOAQALQAQALAVAIIAqANQAlAKAiADQAxADAtgKQAfgHANgEQAXgIAQgLIAKgIIAOgOIAGgGIAPgMIAKgEIACAAIADgBQAKgBAJABQAJACABAEIAAADIgBABQgCAEgKAGIgcAQIgCABIgQAKQgSAMgWARQgSAPgUAKQgwAagmAGQgPACgQAAQgjAAgpgLg");
		this.shape_44.setTransform(-32.7953, -0.7591, 1.4408, 1.4408, 29.9997);

		this.shape_45 = new cjs.Shape();
		this.shape_45.graphics.f("#3D1608").s().p("AEEAxIhFgHIgCAAIhIgKQgtgIgSgBQghgEgYABIgYABQgOgBgTgEIgFgBQgNgCgQgGIgSgGIAAgBQgdgJgbgGIgUgEIAAAAIhIgXIgBAAIgGgDIgCgBIABAAQAAgCAJAAIgCABIAAABIABABIAJAEIA7AOIABABIAgAHQAaAGAYAKQAYAIAVAEIACABIACAAIAPADQANACAMgBIAWAAQAOgBAdACICGAUIADAAIACAAIBFAHIABAAIAGACIADABIAFACIABAAIABABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgGAAg");
		this.shape_45.setTransform(-27.3761, -10.0317, 1.4408, 1.4408, 29.9997);

		this.shape_46 = new cjs.Shape();
		this.shape_46.graphics.f("#F0F2F1").s().p("AAuAJIgTgFIgBAAQgcgJgXgEQgZgFgZgBIgWgBIAIgBIAjABQAeACA1ANIABAAIAZAGQAqAKABACIAAABIgCAAQgIAAgqgJg");
		this.shape_46.setTransform(-46.5796, -26.189, 1.4408, 1.4408, 29.9997);

		this.shape_47 = new cjs.Shape();
		this.shape_47.graphics.f("#975D49").s().p("AEEAxIgHAAIgsgLIhpgWQg3gLgRgBQgSgCgagBQgXgBgSgCIgdgGIAAAAIgrgNIgTgFIAAAAIgdgGQglgGgdgDIgTAAIgCgBIgBAAIgGgDIgCgBIABAAQAAgCAKAAIARABQAwAEAzAMIACAAIAYAGIArANIAAAAIAUAEQASACAXABQAaABASACQAWACAyAKQB8AaAZAGIABAAIAGACIADABIAFACIABAAIABABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgGAAg");
		this.shape_47.setTransform(-27.3761, -10.0317, 1.4408, 1.4408, 29.9997);

		this.shape_48 = new cjs.Shape();
		this.shape_48.graphics.f("#834C35").s().p("AEEAxIhFgHIgCAAIhIgKQgtgIgSgBQghgEgYABIgYABQgOgBgTgEIgFgBQgNgCgQgGIgSgGIAAgBQgdgJgbgGIgUgEIAAAAIhIgXIgBAAIgGgDIgCgBIABAAQAAgCAKAAIARABQAwAEAzAMIACAAIAYAGIArANIAAAAIAUAEQASACAXABQAaABASACQAWACAyAKQB8AaAZAGIABAAIAGACIADABIAFACIABAAIABABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgGAAg");
		this.shape_48.setTransform(-27.3761, -10.0317, 1.4408, 1.4408, 29.9997);

		this.shape_49 = new cjs.Shape();
		this.shape_49.graphics.f("#592928").s().p("ACyAhIgCgBIgBgGQgCgFgEgCIgCAAIgCAAQgHAAgGAEIgIAFIgSgDIAAgGIgBAAQgCgDgGgBQgHgBgHACQgFAAgIADIgCABIgqgFQgBgBAAAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgFgBIgCABIgBAAIhvgSIgBgBIgxgIIAAgBIgLgBIgBgCQgEgCgFgBQgGgBgEACIgWgDIgCgBIgBAAIgBAAIgJgBQgBgCgIgIIgBAAIgBgBIAAgBQABgDAeAFIBbAQIBPAOIC6AaQARAEAEAFIABACQAAAEgFADQgFgDgRgDg");
		this.shape_49.setTransform(-26.7186, -6.9923, 1.4408, 1.4408, 29.9997);

		this.shape_50 = new cjs.Shape();
		this.shape_50.graphics.f("#7C3A36").s().p("ACpAtIADgHQAEgGAAgGIgBgGQgCgFgEgCIgCgBIgCAAQgHAAgGAFIgIAEIgMALQgFAHgBgBQgBAAAAgGIABgNIAAgGIgBAAQgCgDgGgBQgHgBgHABQgFABgIADIgCABQgKAFgLANQgEAHgCgBIAAgGIAAgGQAAgHgHgGIgIgFQgBAAAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgFgBIgCAAIgBAAIgCABQgGABgIALIgGAMIgBABIgCgBIgBgIQgCgGgDgEQgDgHgJgEQgJgDgKAAQgGAAgFABIgOANIgCACIgKAKIgBABIgBAAQgBgBABgFQABgHgBgEIAAgCQgDgIgKgFQgOgJgPABQgFAAgEACQgCADgBAEQgCAFgCAAQgCABgFgGIgBgCQgCgEgBgFIgCgHIgBgBQgEgDgFAAQgGgBgEACIgDACQgCACABAIIABAJIAAAAQgCAAgFgHIgEgFIgIgNIgCgBIgBAAIgBABQgDAGgDAAQgBAAgCgGIAAgBQgBgDgIgIIgBAAIgBgBIAAAAQABgDAeAFIBbAPIBPAOIC6AaQARAEAEAFIABADQAAAEgFADQgIAIgRAEIgEAAIgCAAg");
		this.shape_50.setTransform(-27.1688, -6.2124, 1.4408, 1.4408, 29.9997);

		this.shape_51 = new cjs.Shape();
		this.shape_51.graphics.f("#D8DDDA").s().p("AC6AvQgGgLgegCIg5AAIgIAAIgGAAIgxgBIgDAAQgigDgVgJIgVgKQgJgFgNgEQgSgEgPgBIgLgCQgIAAgNgFIgpgLQgOgDgDACIgBABIABgMIACgIIAEgGIACgBQAGgFAKABIAMACQAOAEAnAPQAnAOAtAHIAaAEQAdAEA+AEIANABIAyAEQATACAIAFIABABQAFADABADIABABIACAGQAAAJgEAKIgEAHQAAgDgCgEg");
		this.shape_51.setTransform(-29.2218, -7.6913, 1.4408, 1.4408, 29.9997);

		this.shape_52 = new cjs.Shape();
		this.shape_52.graphics.f("#F0F2F1").s().p("ABdBEIgIgEQgDgCgEAAQgGgCgHAEQgJAEgGAAQgHAAgHgDQgIgDgHAAQgGAAgEACIgLAEQgQADgbgJIgOgHQgOgFgdgBIgHAAQgSAAgVgMQgXgOgMgVIgFgJQgIgPgBgQIABgMIACgIIAEgGIACgBQAGgFAKABIAMACQAOAEAnAPQAnAOAtAHIAaAEQAdAEA+AFIANABIAyAEQATACAIAFIABABQAFACABADIABABIACAGQAAAJgEAKIgEAHIAAAAIgBADQgLAQgLAEIgHACIgHgEQgFgDgDAAIgEABIgHAFQgFAFgFACQgIACgHAAQgHAAgHgCg");
		this.shape_52.setTransform(-30.4374, -5.5857, 1.4408, 1.4408, 29.9997);

		this.shape_53 = new cjs.Shape();
		this.shape_53.graphics.f("#D8DDDA").s().p("AAqArQhLgNgygWQgOgGglggQgIgHABgFQABgFAGgCQAFgBADABQAPAFANAIQAJAFAOAMQAMAJAIgBIAIAAQADABALAGQAEACAHABIASACQAKADAKAEQAKACAJABIARADIAMAEQAEACAGAAQAMACAJgCQAHgBAKgDQAHgDAFABQALADADADQAHAIgHALQgFALgdAAQgXAAgngHg");
		this.shape_53.setTransform(-43.6668, -0.0375, 1.4408, 1.4408, 29.9997);

		this.shape_54 = new cjs.Shape();
		this.shape_54.graphics.f("#000000").s().p("ADCBLIlXgzQgUgFgPgHIgIgDIgagMIgkgYIgGgNQgKgWABgFIADgEIgCgBIgBgBIABAAQAAgCAKAAIAhACQAdABA2AOIACAAIAYAGQAqALABACIAAAAIAUAEQASACAXABQAaABASACQAWADAyAKQB8AZAZAGIABAAIAGACIADABIAFACIABAAIABABIAAANIgBACIAAACQgDAEgKAGIgcARIgCABIgPAKg");
		this.shape_54.setTransform(-29.3189, -6.6947, 1.4408, 1.4408, 29.9997);

		this.shape_55 = new cjs.Shape();
		this.shape_55.graphics.f("#3F3F3F").s().p("AgsBtIghgWQg2gmgsgxIgZgcQgPgRgJgQIgFgKQgHgSgGgSIgCgGIAAgFIABgBIAFAAIADABIAFABIAIAFIA6ApIBHAoQAaAMAbAKIAEABIAfAIQAuALAuABQAbAAAkgCIAygEIAVABIAKADQAJADAFAIIgCABIgQAKQgSALgXASQgRAOgUAKQgxAaglAGQgPADgRAAQgiAAgpgLg");
		this.shape_55.setTransform(-34.5002, -2.3748, 1.4408, 1.4408, 29.9997);

		this.shape_56 = new cjs.Shape();
		this.shape_56.graphics.f("#985D42").s().p("AgfBpQgOgbALgpQAFgWANgXQAFgKAGgJQAFgHACgHQAEgNADgdQACgUAKgKQANgNAGAEQADACgSAmQgYAxgDArQgEAogBAWIAAAlQgBAOgEABIgBAAQgHAAgLgTg");
		this.shape_56.setTransform(84.7756, -0.9288, 1.4408, 1.4408, 29.9997);

		this.shape_57 = new cjs.Shape();
		this.shape_57.graphics.f("#985D42").s().p("AAGgaIAHgYIgOA9QgGAbgFANIAShNg");
		this.shape_57.setTransform(83.331, 8.3913, 1.4408, 1.4408, 29.9997);

		this.shape_58 = new cjs.Shape();
		this.shape_58.graphics.f("#985D42").s().p("AghCGQgIgDABgcQAAgSAHg/QAHg9AMgyIAMgtIgDALQgLAygHA/QgHA+gBASQAAAcAIADQAJAEARgUQAQgRANgXIAJgUQgGAggNAVQgNAXgOARQgQARgIAAIgEgBg");
		this.shape_58.setTransform(74.7459, 7.7326, 1.4408, 1.4408, 29.9997);

		this.shape_59 = new cjs.Shape();
		this.shape_59.graphics.f("#BC8568").s().p("AAAB8QgCgCADgYQAHgoACgYQAEg2gJgfQgFgVgIgRIgOgXQgHgJACgBQACgCAOAIIAJAGQAHAGAFAFQAOARAEAmQADAbgGAZQgGAaACAXQACASgBAHQgBAPgHANQgIAOgFAAIgBAAg");
		this.shape_59.setTransform(-64.8508, -112.5992, 1.4408, 1.4408, 29.9995);

		this.shape_60 = new cjs.Shape();
		this.shape_60.graphics.f("#BC8568").s().p("Ag9DCQgIgDAAgcQABgTAHg+QAHg/ALgxQAFgUAOgtQAQg1AJgTQAJgRAMgFIAOgEQAPgCAIAGQAOAKgEAjQgDAXgQA/QgIAhgLAgIgTBSQgHAcgKAVQgNAXgQARQgPAQgJAAIgDAAg");
		this.shape_60.setTransform(82.6025, 2.3647, 1.4408, 1.4408, 29.9995);

		this.instance_6 = new lib.Group();
		this.instance_6.setTransform(-35.25, 10.25, 1.4408, 1.4408, 29.9997, 0, 0, 61.8, 41);
		this.instance_6.alpha = 0.6016;

		this.instance_7 = new lib.Group_1();
		this.instance_7.setTransform(-36.15, 11.05, 1.4408, 1.4408, 29.9997, 0, 0, 62.2, 41.8);
		this.instance_7.alpha = 0.6016;

		this.shape_61 = new cjs.Shape();
		this.shape_61.graphics.f("#48341F").s().p("AI7IsQgHgEAFgUIAPgwQAYgPAWgaQBGhQgGiSQgDhNgZhZIglhmQgRgyAAgzQAAgSAFg2QADgggIgYQgLgdgegZQgpghhagpQiIg9hFgVQhxgihzAFQhHAEhbAWQiLAiiMBVQhXA1geAWQgtAggcAmQhIBhgCCJQgBBPAeCKQATBVARAAIADAAQgMArgMAAQgTAAgThdQgeiYABhWQABiXBLhqQAdgqAvgkQAfgYBag6QCPhbCTgoQBegYBJgEQB4gFB1AlQBJAXCMBDQBdAtAqAlQAgAaALAgQAIAagDAjQgFA8AAAUQAAA4ASA3IAmBwQAaBiADBUQAGCghJBZQgWAbgZARQgUAOgLAAQgEAAgCgCg");
		this.shape_61.setTransform(55.284, -121.9913, 1.4408, 1.4408, 29.9995);

		this.shape_62 = new cjs.Shape();
		this.shape_62.graphics.f("#20170E").s().p("AJ6DZQgVg1hFiXQgvhkgVgiQgUgegZgNQgigSg0AHQhHAJgxgHQg/gJg9gnQg+gmg4gIQhWgMhYAcQgxAQgnAYQgyAegnAuQgXAbgmA4Qg2BSgsBwQgWA4gLAoIgSBAQgKAdgJAAQgTAAgThdQgPhMgGgqQgKhJACg7QABA4AKBDQAFAoANBHQATBnATAAQAJAAAKggIAShHQALgsAWg9QAsh7A2hbQAlg+AYgeQAngyAygiQAmgaAygSQBYgfBWANQA4AJA+AqQA9AqA/AKQAxAIBHgKQA0gHAiAUQAZAOAUAiQAVAkAvBwQBHCpAUA7QAfBYgBAxQAAgsgfhPg");
		this.shape_62.setTransform(46.8114, -123.7025, 1.4408, 1.4408, 29.9995);

		this.shape_63 = new cjs.Shape();
		this.shape_63.graphics.f("#48341F").s().p("AhNDAQgJg6gChBQgBgnABgWQACghAIghQAPhEAlg9QBBhNAKAGQACACgJAcQgKAfAIAZQAFARATAQQATAQAEANQAIAYgXAjQgiAsgRAYQgvBGgOBgIgGA4QgDAUgGAAQgMAAgKhDg");
		this.shape_63.setTransform(-16.2863, -165.6552, 1.4408, 1.4408, 29.9995);

		this.shape_64 = new cjs.Shape();
		this.shape_64.graphics.f("#382918").s().p("AI7IsQgJgGASg1QAZhKADg2QADgsgfhRQgVg3hIidQgvhkgVghQgUgfgZgNQgigSg0AHQhHAJgwgHQhAgJg9gmQg8gng6gIQhVgMhYAcQgvAQgqAYQgyAfgnAtQgYAcglA4Qg2BRgsBwQgWA4gLAoIgSBAQgKAdgJAAQgTAAgThdQgeiYABhWQABiXBLhqQAdgqAvgkQAfgYBag6QCPhbCTgoQBegYBJgEQB4gFB1AlQBJAXCMBDQBdAtAqAlQAgAaALAgQAIAagDAjQgFA8AAAUQAAA4ASA3IAmBwQAaBiADBUQAGCghJBZQgWAbgZARQgUAOgLAAQgEAAgCgCg");
		this.shape_64.setTransform(55.284, -121.9913, 1.4408, 1.4408, 29.9995);

		this.shape_65 = new cjs.Shape();
		this.shape_65.graphics.f("#985D42").s().p("ABoF5QAMgkAJgmQAKgnADguQADhJgShUQgHgjgTgmIhTiyQghhLgLgSQgRgcgYgIQgGgCgrgDQgfgDgTgPQgbgUADgOQADgPAkgHQAkgIAiAHQA+AMAzBNQAjAyBBCNQAgBDAKAcQAPAjAFAaQAVB6g3CGQgcBEghAqg");
		this.shape_65.setTransform(94.3014, -64.8542, 1.4408, 1.4408, 29.9995);

		this.shape_66 = new cjs.Shape();
		this.shape_66.graphics.f("#CA9781").s().p("ABAKhQgMgCgHgwQgKhDgSgoQgUgtgkgfQgVgSgvgcQgvgcgXgTQgkgggVguQgOgcgJg1IgPhfQgGgeABggQABgmAIglQALgyAXg3QAbg/AghDQAbg5AJgWQAihYAGh+IAEhHQADgbAKgCQAJgBARAQQAWAWAXALQAVAKAVABQAPAAAWgDIAfgFQARgCAPAEQBmAYAkEVIAJBPQABAJgEAxIgLCJQgKB8gEApQgHA8gPBDQgJApgeB0IAAABQgtCRhPB6g");
		this.shape_66.setTransform(64.1147, -39.3459, 1.4408, 1.4408, 29.9995);

		this.shape_67 = new cjs.Shape();
		this.shape_67.graphics.f("#BC8568").s().p("ACnB+IgMgSIgOgQIgEgEQgGgFgNAAQgJABgvgSQg8gYgogLQgdgIgXADQgJACgKAEQgIADgGABQgXACgYgPQgZgQgEgUQgHghAPghQAJgUAJgJQAJgIAIgEQAUgLAlABQAuAEAsAQQAcAQAcABQALABATgDQASgEAOADQAWAEAQAKQAYAPAOAcQAYAsgJBBQgJA7gQACIAAAAQgEAAgEgFg");
		this.shape_67.setTransform(-7.5648, -102.0674, 1.4408, 1.4408, 29.9995);

		this.shape_68 = new cjs.Shape();
		this.shape_68.graphics.f("#CA9781").s().p("AJRGvQgKgGATg2QAZhKADg1QADgtgfhQQgVg3hJicQgvhmgVghQgUgfgYgMQgigSg0AGQhIAJgwgHQhAgJg9gmQg9gmg4gIQhWgMhYAcQgvAPgpAZQgyAegoAuQgXAbglA4Qg3BTgsBvQgVA4gLAnQgOAmgKAuQgFAYgFAhQgEAigDAmQgBAcgBAAQgCAAgBgVIgCgpQABgmgBgYQgBgWgEgjQAVhoAhheQAXhKARgsQAfhQAhgnQBviDDJgpQC8gnC2A3QBVAaBPAvQCKBTBNB/QBGByAHCLQAGBsggC0QgPAJgIAAQgEAAgCgCg");
		this.shape_68.setTransform(42.6974, -103.6468, 1.4408, 1.4408, 29.9995);

		this.shape_69 = new cjs.Shape();
		this.shape_69.graphics.f("#BC8568").s().p("AgCgHQgKgbAAgNIAMApQAJAbAFAbQgFgUgLgjg");
		this.shape_69.setTransform(-64.4084, -128.344, 1.4408, 1.4408, 29.9995);

		this.shape_70 = new cjs.Shape();
		this.shape_70.graphics.f("#BC8568").s().p("AAkAPIgPgcQgHgLgIgCQgKgDgOAJQgOAIgIANQgGANAAANQgEgQAAgKQgBgMAHgLQAHgOAOgIQAOgJAKADQAIACAHALQAEAGALAXQAOAeADAMQADAJAAAJIgPglg");
		this.shape_70.setTransform(-56.035, -131.9741, 1.4408, 1.4408, 29.9995);

		this.shape_71 = new cjs.Shape();
		this.shape_71.graphics.f("#BC8568").s().p("AgIBNQALhHACgZQAEg3gEgmIgCgOQAEATADASQAEAkgEA5QgDAfgHAqQgGAogBAKQgIgJAHgpg");
		this.shape_71.setTransform(-76.7959, -102.3874, 1.4408, 1.4408, 29.9995);

		this.shape_72 = new cjs.Shape();
		this.shape_72.graphics.f("#BC8568").s().p("AgUBEQAOgMAEgOQAKgXAEgSQAGgRADgQQAEgSABgYQAMBFgaAsQgNAYgTAJIgJADIAJgHg");
		this.shape_72.setTransform(-74.6356, -92.26, 1.4408, 1.4408, 29.9995);

		this.shape_73 = new cjs.Shape();
		this.shape_73.graphics.f("#ECC5AF").s().p("AgaDWQgMgHAHgpQANhSABgTQAFg4gFglQgEgkgWg/QgNgoALgUQAIgOAOgIQAOgJAKADQAIACAGAKQAFAHALAXQAOAhADAJQAHAbgJAlQgFAVgNAmQgTA7ADBaQACBCgSAIQgHACgFAAQgGAAgEgDg");
		this.shape_73.setTransform(-67.8905, -111.2729, 1.4408, 1.4408, 29.9995);

		this.shape_74 = new cjs.Shape();
		this.shape_74.graphics.f("#ECC5AF").s().p("AkBNQQhfgpg/g2QhZhLgyhtQgfhEgniWQg+jpAfj3QARiNA9jIQAghoAQgmQAXg4AignQBviDDIgpQC8gnC3A3QCGAqBnBSQBYBGA2BZQAoBCATBJQAbBngMCJQgIBWgmDAQgZCEgYBKIAAAAQgtCRhPB6QgLASgPAUQhZB+g1AzQhZBXhuAdQg6APg7AAQhqAAhvgwg");
		this.shape_74.setTransform(7.991, -51.3575, 1.4408, 1.4408, 29.9997);

		this.shape_75 = new cjs.Shape();
		this.shape_75.graphics.f("#6B3F2E").s().p("AFiKLQASgmAFgsQAGg2gPgzQgShogihwQgjhvgihcQgRgsgCgfQgEgnAMhbQAJhEgPgQQgKgKgWAHQgLADgoAUQhZAshFgCQg5gBhKgpQhEgmg/AEQguADhEAaQgyATgHgKQgEgFAHgOIAVgmQAXgsAMg1QAIghAJhGQAHgwgCglQgBgXAGgKQAcgyB2gHQBqgHCKAeQCJAdBeAvQBnA1ACA0QABAGgEAIIgQAmQg0CGAFBxQABAkAJAqQANBDAgA+QAvBbAHAUQATAyAHA7QAFAnAEBoIgEBgQgKBmgjAZQgMAJgMABIgDAAQgHAAgJgDg");
		this.shape_75.setTransform(-101.4026, 95.2441, 1.4408, 1.4408, 29.9995);

		this.shape_76 = new cjs.Shape();
		this.shape_76.graphics.f("#D59562").s().p("AEwGfQilitgbgZQhrhjh7hZIi3h5QhXg7gigmQgsgxgBg6QgBgmAXgnQAnhFALgdQDNC7ChBmQCeBkAnggQAdgYAdgmIAXghIASggQAFgKAFAAQAZgEApBoQAfBQAbBoQANAyAWBdQARBDALgBIADgBQACBbgQA9QgRBAghANQgFACgGAAQggAAg4g5g");
		this.shape_76.setTransform(-116.613, 116.278, 1.4408, 1.4408, 29.9995);

		this.shape_77 = new cjs.Shape();
		this.shape_77.graphics.f("#BC8568").s().p("AEwJ8QimiugagYQhrhjh7hZIi3h6QhXg7gigmQgsgwgBg7QAAgnAig6QAthNAYhhQAUhRAEhcQACg+AVgbQArg5BrgSQBjgRB3AVQB5AWBZAzQBiA4AZBJQAMAkgJAoQgFAVgYA4QgyB0AKBpQAHBBAgBAQAuBbASA8QAzCigFCjQgECng8AXQgFACgHAAQggAAg3g5g");
		this.shape_77.setTransform(-100.3614, 88.1549, 1.4408, 1.4408, 29.9995);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [{ t: this.shape_77 }, { t: this.shape_76 }, { t: this.shape_75 }, { t: this.shape_74 }, { t: this.shape_73 }, { t: this.shape_72 }, { t: this.shape_71 }, { t: this.shape_70 }, { t: this.shape_69 }, { t: this.shape_68 }, { t: this.shape_67 }, { t: this.shape_66 }, { t: this.shape_65 }, { t: this.shape_64 }, { t: this.shape_63 }, { t: this.shape_62 }, { t: this.shape_61 }, { t: this.instance_7 }, { t: this.instance_6 }, { t: this.shape_60 }, { t: this.shape_59 }, { t: this.shape_58 }, { t: this.shape_57 }, { t: this.shape_56 }, { t: this.shape_55 }, { t: this.shape_54 }, { t: this.shape_53 }, { t: this.shape_52 }, { t: this.shape_51 }, { t: this.shape_50 }, { t: this.shape_49 }, { t: this.shape_48 }, { t: this.shape_47 }, { t: this.shape_46 }, { t: this.shape_45 }, { t: this.shape_44 }, { t: this.shape_43 }, { t: this.shape_42 }, { t: this.shape_41 }, { t: this.shape_40 }, { t: this.shape_39 }, { t: this.shape_38 }, { t: this.shape_37 }, { t: this.shape_36 }, { t: this.shape_35 }, { t: this.shape_34 }, { t: this.shape_33 }, { t: this.shape_32 }, { t: this.instance_5 }, { t: this.instance_4 }, { t: this.shape_31 }, { t: this.shape_30 }, { t: this.shape_29 }, { t: this.shape_28 }, { t: this.shape_27 }, { t: this.shape_26 }, { t: this.shape_25 }, { t: this.shape_24 }, { t: this.shape_23 }, { t: this.shape_22 }, { t: this.shape_21 }, { t: this.shape_20 }, { t: this.shape_19 }, { t: this.shape_18 }, { t: this.shape_17 }, { t: this.shape_16 }, { t: this.shape_15 }, { t: this.shape_14 }, { t: this.shape_13 }, { t: this.shape_12 }, { t: this.shape_11 }, { t: this.shape_10 }, { t: this.instance_3 }, { t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }, { t: this.shape_9 }, { t: this.shape_8 }, { t: this.shape_7 }, { t: this.shape_6 }, { t: this.shape_5 }, { t: this.shape_4 }, { t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }] }).wait(1));

		this._renderFirstFrame();

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-156.3, -204.3, 312.6, 408.6);


	// stage content:
	(lib.animWinFinal = function (mode, startPosition, loop, reversed) {
		if (loop == null) { loop = false; }
		if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this, [props]);

		// youWin
		this.instance = new lib.txt();
		this.instance.setTransform(754.3, 284.7, 4.3417, 4.3417, 0, 0, 0, 0.2, 0);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(58).to({ _off: false }, 0).to({ scaleX: 1.1676, scaleY: 1.1676, x: 754.75 }, 24).wait(43));

		// bras
		this.instance_1 = new lib.Interpoler12("synched", 0);
		this.instance_1.setTransform(-337.5, 471.15);
		this.instance_1._off = true;

		this.instance_2 = new lib.Interpoler13("synched", 0);
		this.instance_2.setTransform(152.6, 471.15);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.instance_1 }] }, 41).to({ state: [{ t: this.instance_2 }] }, 16).wait(68));
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41).to({ _off: false }, 0).to({ _off: true, x: 152.6 }, 16).wait(68));

		// corps
		this.instance_3 = new lib.Interpoler14("synched", 0);
		this.instance_3.setTransform(-278.9, 555.55);
		this.instance_3._off = true;

		this.instance_4 = new lib.Interpoler15("synched", 0);
		this.instance_4.setTransform(211.2, 555.55);

		this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.instance_3 }] }, 41).to({ state: [{ t: this.instance_4 }] }, 16).wait(68));
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(41).to({ _off: false }, 0).to({ _off: true, x: 211.2 }, 16).wait(68));

		// tete2
		this.instance_5 = new lib.Interpoler17("synched", 0);
		this.instance_5.setTransform(-221.7, 291.9);
		this.instance_5._off = true;

		this.instance_6 = new lib.Interpoler18("synched", 0);
		this.instance_6.setTransform(284.25, 292.6);
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(41).to({ _off: false }, 0).to({ _off: true, x: 284.25, y: 292.6 }, 16).wait(68));
		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(41).to({ _off: false }, 16).wait(7).to({ regX: -11.2, regY: 126.2, rotation: 10.9629, x: 273, y: 418.8, mode: "independent" }, 0).to({ rotation: -2.2037, mode: "synched", startPosition: 0 }, 14, cjs.Ease.circInOut).wait(47));

		// tete
		this.instance_7 = new lib.teteSmile();
		this.instance_7.setTransform(-165.15, 283.6);

		this.instance_8 = new lib.Interpoler11("synched", 0);
		this.instance_8.setTransform(70.9, 283.6);
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({ _off: true, x: 70.9, mode: "synched", startPosition: 0 }, 17).wait(108));
		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({ _off: false }, 17).to({ x: -197.2 }, 19).to({ _off: true }, 77).wait(12));

		this._renderFirstFrame();

	}).prototype = p = new lib.AnMovieClip();
	p.nominalBounds = new cjs.Rectangle(21.9, 375.9, 1673.5, 392.1);
	// library properties:
	lib.properties = {
		id: '64F4433D4F484E87A926414D200B4B5D',
		width: 1024,
		height: 768,
		fps: 24,
		color: "#FFFFFF",
		opacity: 1.00,
		manifest: [],
		preloads: []
	};



	// bootstrap callback support:

	(lib.Stage = function (canvas) {
		createjs.Stage.call(this, canvas);
	}).prototype = p = new createjs.Stage();

	p.setAutoPlay = function (autoPlay) {
		this.tickEnabled = autoPlay;
	}
	p.play = function () { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
	p.stop = function (ms) { if (ms) this.seek(ms); this.tickEnabled = false; }
	p.seek = function (ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
	p.getDuration = function () { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

	p.getTimelinePosition = function () { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

	an.bootcompsLoaded = an.bootcompsLoaded || [];
	if (!an.bootstrapListeners) {
		an.bootstrapListeners = [];
	}

	an.bootstrapCallback = function (fnCallback) {
		an.bootstrapListeners.push(fnCallback);
		if (an.bootcompsLoaded.length > 0) {
			for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
				fnCallback(an.bootcompsLoaded[i]);
			}
		}
	};

	an.compositions = an.compositions || {};
	an.compositions['64F4433D4F484E87A926414D200B4B5D'] = {
		getStage: function () { return exportRoot.stage; },
		getLibrary: function () { return lib; },
		getSpriteSheet: function () { return ss; },
		getImages: function () { return img; }
	};

	an.compositionLoaded = function (id) {
		an.bootcompsLoaded.push(id);
		for (var j = 0; j < an.bootstrapListeners.length; j++) {
			an.bootstrapListeners[j](id);
		}
	}

	an.getComposition = function (id) {
		return an.compositions[id];
	}


	an.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers) {
		var lastW, lastH, lastS = 1;
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
		function resizeCanvas() {
			var w = lib.properties.width, h = lib.properties.height;
			var iw = window.innerWidth, ih = window.innerHeight;
			var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
			if (isResp) {
				if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
					sRatio = lastS;
				}
				else if (!isScale) {
					if (iw < w || ih < h)
						sRatio = Math.min(xRatio, yRatio);
				}
				else if (scaleType == 1) {
					sRatio = Math.min(xRatio, yRatio);
				}
				else if (scaleType == 2) {
					sRatio = Math.max(xRatio, yRatio);
				}
			}
			domContainers[0].width = w * pRatio * sRatio;
			domContainers[0].height = h * pRatio * sRatio;
			domContainers.forEach(function (container) {
				container.style.width = w * sRatio + 'px';
				container.style.height = h * sRatio + 'px';
			});
			stage.scaleX = pRatio * sRatio;
			stage.scaleY = pRatio * sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;
			stage.tickOnUpdate = false;
			stage.update();
			stage.tickOnUpdate = true;
		}
	}
	an.handleSoundStreamOnTick = function (event) {
		if (!event.paused) {
			var stageChild = stage.getChildAt(0);
			if (!stageChild.paused || stageChild.ignorePause) {
				stageChild.syncStreamSounds();
			}
		}
	}
	an.handleFilterCache = function (event) {
		if (!event.paused) {
			var target = event.target;
			if (target) {
				if (target.filterCacheList) {
					for (var index = 0; index < target.filterCacheList.length; index++) {
						var cacheInst = target.filterCacheList[index];
						if ((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)) {
							cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
						}
					}
				}
			}
		}
	}


})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;