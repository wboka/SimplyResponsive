var SimplyResponsive = {
	breakpoints: {
		sm: 480,
		md: 768,
		lg: 992,
		xl: 1200
	},
	toggleClass: function (elements, className) {
		for (var i = 0; i < elements.length; i++) {
			elements[i].classList.toggle(className);
		}
	},
	setupMenuToggles: function() {
		var menuToggles = document.getElementsByClassName("menu-toggle");

		for (var i = 0; i < menuToggles.length; i++) {
			menuToggles[i].addEventListener("click", function() {
				menusToToggle = this.parentNode.parentNode.parentNode.getElementsByClassName("menu");

				SimplyResponsive.toggleClass(menusToToggle, "display");
				SimplyResponsive.toggleClass(menusToToggle, "display-sm");
				
				for (var j = 0; j < menusToToggle.length; j++) {
					SimplyResponsive.toggleClass(menusToToggle[j].getElementsByTagName("ul"), "list-inline");
				}
			});
		}
		
		window.addEventListener("resize", function() {
			menusToToggle = document.querySelectorAll(".menu ul");
			
			for (var i = 0; i < menusToToggle.length; i++) {
				if (window.innerWidth >= SimplyResponsive.breakpoints.sm) {
					menusToToggle[i].classList.add("list-inline");
				} else {
					menusToToggle[i].classList.remove("list-inline");
				}
			}
		});
	}
},
SR = SimplyResponsive;
