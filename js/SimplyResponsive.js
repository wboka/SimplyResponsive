var SimplyResponsive = {
	toggleClass: function (elements, className) {
		for (var i = 0; i < elements.length; i++) {
			elements[i].classList.toggle(className);
		}
	},
	setupMenuToggles: function() {
		var menuToggles = document.getElementsByClassName("menu-toggle");

		for (var i = 0; i < menuToggles.length; i++) {
			menuToggles[i].addEventListener("click", function() {
				menusToToggle = this.parentNode.getElementsByClassName("menu");

				SimplyResponsive.toggleClass(menusToToggle, "display");
				SimplyResponsive.toggleClass(menusToToggle, "display-sm");
				SimplyResponsive.toggleClass(menusToToggle.getElementsByTagName("ul"), "list-inline");
			});
		}
	}
},
SR = SimplyResponsive;
