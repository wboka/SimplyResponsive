// Utility JS Code
if (!document.getElementsByClassName) {
	document.getElementsByClassName = function(classToSearchFor) {
		var nodes = [],
			elements = this.getElementsByTagName('*');

		for (var i = 0; i < elements.length; i++) {
			if((' ' + elements[i].className + ' ').indexOf(' ' + classToSearchFor + ' ') > -1) nodes.push(elements[i]);
		}
		return nodes;
	};
}

var SimpleJS = {
	breakpoints: {
		sm: 480,
		md: 768,
		lg: 992,
		xl: 1200
	},
	debug: false,
	displayPortChanged: function() {
		var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
			w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
			displayElements = hiddenElements = [];

		if (w >= SimpleJS.breakpoints.xl) {
			// Display any elements with classes: display-xl
			displayElements.concat(document.getElementsByClassName("display-xl"));

			// Hide any elements with classes: hidden-xl
			hiddenElements.concat(document.getElementsByClassName("hidden-xl"));
		}

		if (w >= SimpleJS.breakpoints.lg) {
			// Display any elements with classes: display-lg
			displayElements.concat(document.getElementsByClassName("display-lg"));

			// Hide any elements with classes: hidden-lg
			hiddenElements.concat(document.getElementsByClassName("hidden-lg"));
		}

		if (w >= SimpleJS.breakpoints.md) {
			// Display any elements with classes: display-md
			displayElements.concat(document.getElementsByClassName("display-md"));

			// Hide any elements with classes: hidden-md
			hiddenElements.concat(document.getElementsByClassName("hidden-md"));
		}

		if (w >= SimpleJS.breakpoints.sm) {
			// Display any elements with classes: display-sm
			displayElements.concat(document.getElementsByClassName("display-sm"));

			// Hide any elements with classes: hidden-sm
			hiddenElements.concat(document.getElementsByClassName("hidden-sm"));
		}

		if (w >= SimpleJS.breakpoints.xs) {
			// Display any elements with classes: display-xs
			displayElements.concat(document.getElementsByClassName("display-xs"));

			// Hide any elements with classes: hidden-xs
			hiddenElements.concat(document.getElementsByClassName("hidden-xs"));
		}

		if (w >= 0) {
			// Display all element with classes: display
			displayElements.concat(document.getElementsByClassName("display"));

			// Hide all element with classes: hidden
			hiddenElements.concat(document.getElementsByClassName("hidden"));
		}

		for (var i = 0; i < displayElements.length; i++) {
			displayElements[i].style.display = "inline-block";
		}

		for (var j = 0; j < hiddenElements.length; j++) {
			hiddenElements[j].style.display = "none";
		}

		if (SimpleJS.debug) {
			console.log("Height: " + h + "px\t" + "Width: " + w + "px");
			console.log("Display Elements: " + displayElements.length);
			console.log("Hidden Elements: " + hiddenElements.length);
			console.log("Small Screen? " + w + " >= " + SimpleJS.breakpoints.sm + " is " + (w >= SimpleJS.breakpoints.sm));
			console.log("Medium Screen? " + w + " >= " + SimpleJS.breakpoints.md + " is " + (w >= SimpleJS.breakpoints.md));
			console.log("Large Screen? " + w + " >= " + SimpleJS.breakpoints.lg + " is " + (w >= SimpleJS.breakpoints.lg));
			console.log("Extra Screen? " + w + " >= " + SimpleJS.breakpoints.xl + " is " + (w >= SimpleJS.breakpoints.xl));
		}
	}
};

SimpleJS.displayPortChanged();

if (window.removeEventListener) {
	window.removeEventListener("resize");
	window.addEventListener("resize", SimpleJS.displayPortChanged);
} else {
	window.onresize = SimpleJS.displayPortChanged;
}
