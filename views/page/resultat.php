<div>
	<!-- TODO à mettre avec du joli css please -->
	<?= $msgResultatScore; ?>
	<div class="container-fluid bg pt-5 ">
		<div class="row">
			<div class="col">
				<div id="animation_container">
					<canvas id="canvas" width="1024" height="768" style="position: absolute; display: block; "></canvas>
					<div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:1024px; height:768px; position: absolute; left: 0px; top: 0px; display: block;">
					</div>
				</div>
				<div class="namePlayer ">
					<p>Player <span id="player-id"></span></p>
				</div>
				<div class="score pt-5">
					<p class="btn-shine" class="scoreCss">Score : <span id="score">0</span></p>
				</div>
			</div>
		</div>
	</div>
	<script src="public/js/test.js"></script>
</div>

<script>
	var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

	function init() {
		canvas = document.getElementById("canvas");
		anim_container = document.getElementById("animation_container");
		dom_overlay_container = document.getElementById("dom_overlay_container");
		var comp = AdobeAn.getComposition("64F4433D4F484E87A926414D200B4B5D");
		var lib = comp.getLibrary();
		handleComplete({}, comp);
	}

	function handleComplete(evt, comp) {
		//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
		var lib = comp.getLibrary();
		var ss = comp.getSpriteSheet();
		exportRoot = new lib.animWinFinal();
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
<script src="public/js/animWinFinal.js?1642078059451"></script>