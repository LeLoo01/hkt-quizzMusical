<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="authoring-tool" content="Adobe_Animate_CC">
<link rel="stylesheet" href="public/css/style.css">
<link rel="stylesheet" href="public/css/bootstrap.css">
<script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>
<script src="public/js/animStart.js"></script>

<!-- <script src="public/js/animAccueil.js"></script> -->

<script src="public/js/animWinFinal.js"></script>


<!-- ////////////////////////////////anim 1////////////// -->
<script>
	var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

	function init() {
		canvas = document.getElementById("canvas");
		anim_container = document.getElementById("animation_container");
		dom_overlay_container = document.getElementById("dom_overlay_container");
		var comp = AdobeAn.getComposition("673C74A311F347EDBD16A6EF61D1AE62");
		var lib = comp.getLibrary();
		createjs.MotionGuidePlugin.install();
		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", function(evt) {
			handleFileLoad(evt, comp)
		});
		loader.addEventListener("complete", function(evt) {
			handleComplete(evt, comp)
		});
		var lib = comp.getLibrary();
		loader.loadManifest(lib.properties.manifest);
	}

	function handleFileLoad(evt, comp) {
		var images = comp.getImages();
		if (evt && (evt.item.type == "image")) {
			images[evt.item.id] = evt.result;
		}
	}

	function handleComplete(evt, comp) {
		//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
		var lib = comp.getLibrary();
		var ss = comp.getSpriteSheet();
		var queue = evt.target;
		var ssMetadata = lib.ssMetadata;
		for (i = 0; i < ssMetadata.length; i++) {
			ss[ssMetadata[i].name] = new createjs.SpriteSheet({
				"images": [queue.getResult(ssMetadata[i].name)],
				"frames": ssMetadata[i].frames
			})
		}
		exportRoot = new lib.animAccueil();
		stage = new lib.Stage(canvas);
		//Registers the "tick" event listener.
		fnStartAnimation = function() {
			stage.addChild(exportRoot);
			createjs.Ticker.framerate = lib.properties.fps;
			createjs.Ticker.addEventListener("tick", stage);
		}
		//Code to support hidpi screens and responsive scaling.
		AdobeAn.makeResponsive(true, 'both', true, 1, [canvas, anim_container, dom_overlay_container]);
		AdobeAn.compositionLoaded(lib.properties.id);
		fnStartAnimation();
	}
</script>


</head>

<body onload="init();" style="margin:0px;">