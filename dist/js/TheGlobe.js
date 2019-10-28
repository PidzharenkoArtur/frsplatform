'use strict';

var TheGlobe = TheGlobe || {};
TheGlobe     = {
	dataManager  : null,
	// formManager: null,
	scrollManager: null,
	canvasManager: null,
	modelManager : null,

	fontsLoaded   : false,
	modelsLoaded  : false,
	windowLoaded  : false,
	windowResizing: false,
	ready         : false,

	ww: 0.0,
	wh: 0.0,
	bh: 0.0,
	ps: 0.0,

	init: function() {
		TheGlobe.canvas = document.getElementById('globekit-canvas');
		TheGlobe.sizeElements();

		TheGlobe.canvasManager = new TheGlobe.CanvasManager();
		TheGlobe.scrollManager = new TheGlobe.ScrollManager();
		TheGlobe.modelManager  = new TheGlobe.ModelManager();
		TheGlobe.dataManager   = new TheGlobe.DataManager();

		TheGlobe.canvasManager.init(TheGlobe.canvas);

		TheGlobe.canvasManager.globe.offsetPower   = (Math.random() >= 0.45) ? -1.5 : 1.5;
		TheGlobe.canvasManager.globe.waveEffectStr = 0.0;
		TheGlobe.canvasManager.globe.ringEffectStr = 0.0;
		TheGlobe.canvasManager.globe.pointSize     = TheGlobe.ps;
		TheGlobe.canvasManager.quakes.pointSize    = TheGlobe.ps / 1.1;

		TheGlobe.canvasManager.globe.alpha    = 0.0;
		TheGlobe.canvasManager.ring.alpha     = 0.0;
		TheGlobe.canvasManager.nebula.alpha   = 0.0;
		TheGlobe.canvasManager.bokeh.alpha    = 0.0;
		TheGlobe.canvasManager.quakes.alpha   = 0.0;
		TheGlobe.canvasManager.bigQuake.alpha = 0.0;

		// Add listeners, load data
		TheGlobe.addEventListeners();
		TheGlobe.modelManager.load();
		TheGlobe.dataManager.load();

		// Background model is preloaded
		var bgModel = TheGlobe.modelManager.models.background;
		TheGlobe.canvasManager.background.loadModel(bgModel);

		var bodyClass = (TheGlobe.isMobile) ? 'mobile' : 'desktop';
		document.body.classList.add(bodyClass);
	},

	getGlobePointSize: function() {
		if (TheGlobe.isMobile) {
			return Math.max(2.0, TheGlobe.wh * 0.0052);
		}

		return Math.max(3.0, TheGlobe.wh * 0.0062);
	},

	addEventListeners: function() {
		// TheGlobe.scrollManager.sectionChangeSignal.add(TheGlobe, TheGlobe.formManager.showForm);
		// TheGlobe.formManager.formSubmitSignal.add(TheGlobe, TheGlobe.formDidSubmit);
		TheGlobe.modelManager.loadSignal.add(TheGlobe, TheGlobe.modelsDidLoad);
		TheGlobe.dataManager.loadSignal.add(TheGlobe, TheGlobe.dataDidLoad);

		window.addEventListener('load', function() {
			TheGlobe.windowDidLoad();
		});

		if (TheGlobe.isMobile) {
			window.addEventListener('orientationchange', function() {
				TheGlobe.windowDidResize();
				TheGlobe.updateCanvas();
			});
		}

		if (TheGlobe.isDesktop) {
			window.addEventListener('resize', function() {
				if (!TheGlobe.windowResizing) {
					document.body.classList.add('resizing');
					TheGlobe.windowResizing = true;
				}
			});

			window.addEventListener('resize', TheGlobe.debounce(function() {
				document.body.classList.remove('resizing');
				TheGlobe.windowResizing = false;
				TheGlobe.windowDidResize();
				TheGlobe.updateCanvas();
			}, 200));
			//
			// TheGlobe.formManager.requestButton.addEventListener("click", function(ev) {
			//     ev.preventDefault();
			//     if (TheGlobe.formManager.requestButton.classList.contains("submit")) {
			//         TheGlobe.formManager.requestFormSubmit();
			//     } else {
			//         TheGlobe.scrollManager.didSelectSection(TheGlobe.scrollManager.sections[5]);
			//     }
			//     return false;
			// });

			window.addEventListener('scroll', TheGlobe.scrollManager.mouseWheelHide);
		}
	},

	windowDidLoad: function() {
		TheGlobe.windowLoaded = true;
		TheGlobe.launchTheGlobe();
	},

	launchTheGlobe: function() {
		TheGlobe.ready = (TheGlobe.windowLoaded && TheGlobe.modelsLoaded && TheGlobe.fontsLoaded);

		if (TheGlobe.ready) {
			TheGlobe.playIntroAnimation();
			TheGlobe.scrollManager.init();

			TheGlobe.scrollManager.windowDidScroll();
			TheGlobe.canvasManager.ring.progress = TheGlobe.scrollManager.getScrollPercent();

			document.body.classList.add('fonts-active');
			window.addEventListener('scroll', function() {
				TheGlobe.canvasManager.ring.progress = TheGlobe.scrollManager.getScrollPercent();
				TheGlobe.scrollManager.windowDidScroll();
			});

			if (document.body.scrollTop === 0) {
				// document.getElementById("mouse-wheel").classList.add("visible");
			}
		}
	},

	sizeElements: function() {
		TheGlobe.bh            = document.body.offsetHeight;
		TheGlobe.ww            = window.innerWidth;
		TheGlobe.wh            = window.innerHeight;
		TheGlobe.canvas.width  = TheGlobe.ww;
		TheGlobe.canvas.height = TheGlobe.wh;
		TheGlobe.ps            = TheGlobe.getGlobePointSize();
		if (TheGlobe.isMobile) {
			TheGlobe.canvas.height += 68;
		}
	},

	windowDidResize: function() {
		TheGlobe.sizeElements();

		if (TheGlobe.ready) {
			TheGlobe.scrollManager.updateItemRects();
			TheGlobe.scrollManager.windowDidScroll();
		}
	},

	fontsDidActivate: function() {
		TheGlobe.fontsLoaded = true;
		TheGlobe.launchTheGlobe();
	},

	updateCanvas: function() {
		var cm = TheGlobe.canvasManager;
		cm.updateViewport();
		cm.ring.progress    = TheGlobe.scrollManager.getScrollPercent();
		cm.globe.pointSize  = TheGlobe.ps;
		cm.quakes.pointSize = TheGlobe.ps / 1.1;
	},

	playIntroAnimation: function() {
		var cm = TheGlobe.canvasManager;

		var offsetStart = cm.globe.offsetPower;
		var offsetEnd   = 0.0;
		var offsetDelta = offsetEnd - offsetStart;

		var intro        = new Animation(0.9);
		intro.updateFn   = function(value) {
			var v                = BK.Ease.inOutSine(value);
			cm.globe.offsetPower = offsetStart + (v * offsetDelta);
		};
		intro.completeFn = function() {
			cm.globe.offsetPower = 0.0;
			TheGlobe.intro       = null;
		};
		intro.start();

		cm.pulse(0.15, 0.04, 0.0, 3.0);
		TheGlobe.pulseInterval = setTimeout(function() {
			TheGlobe.pulse();
		}, 6500 + (Math.random() * 2000));
	},

	pulse: function() {
		TheGlobe.canvasManager.quakePulse();
		TheGlobe.pulseInterval = setTimeout(TheGlobe.pulse, 6500 + (Math.random() * 2000));
	},

	formDidSubmit: function() {
	    var cm = TheGlobe.canvasManager;
	    cm.globe.waveWidth = 2.0;

	    clearInterval(TheGlobe.pulseInterval);
	    TheGlobe.canvasManager.dismissInfo();
	    TheGlobe.pulseInterval = setInterval(function(){
	       cm.pulse(0.1, 0.04, 0.0, 4.0);
	    }, 4250);

	    var a = new Animation(2.0);
	    a.updateFn = function(value) {
	        var v = BK.Ease.outExpo(value);
	        cm.bigQuake.alpha = 1.0 - v;
	        cm.globe.waveEffectStr = v * 0.25;
	        cm.globe.offsetPower = -4.0 * v;
	    };
	    a.start();
	},

	modelsDidLoad: function() {
		var mm = TheGlobe.modelManager;
		var cm = TheGlobe.canvasManager;

		cm.ring.loadGeometry(mm.models.ring);
		cm.nebula.loadGeometry(mm.models.nebula);
		cm.globe.loadGeometry(mm.models.globe);

		var a      = new Animation(0.3);
		a.updateFn = function(value) {
			cm.ring.alpha   = value;
			cm.globe.alpha  = value;
			cm.nebula.alpha = value;
			cm.bokeh.alpha  = value * 0.2;
		};
		a.start();

		TheGlobe.modelsLoaded = true;
		TheGlobe.launchTheGlobe();
	},

	dataDidLoad: function() {
		var a = new Animation(0.4);

		var cm     = TheGlobe.canvasManager;
		a.updateFn = function(value) {
			cm.quakes.alpha = value;
		};

		a.start();
		var earthquakes = TheGlobe.dataManager.earthquakes;
		TheGlobe.canvasManager.quakesDidLoad(earthquakes);
	}
};

// Utilities

TheGlobe.isMobile  = (window.orientation !== undefined) || (navigator.userAgent.indexOf('IEMobile') !== -1);
TheGlobe.isDesktop = !TheGlobe.isMobile;
TheGlobe.debounce  = function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this;
		var args    = arguments;
		var later   = function() {
			timeout = null;
			if (!immediate) {
				func.apply(context, args);
			}
		};

		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) {
			func.apply(context, args);
		}
	};
};
