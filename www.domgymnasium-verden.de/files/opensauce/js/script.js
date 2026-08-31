// must be loaded at the end of the body element
(function(){
	var addEvent = function(element, event, func){
			if(element.addEventListener){
				element.addEventListener(event, func, false);
			}
			else{
				element.attachEvent('on'+event, func);
			}
		},
		eventPreventDefault = function(event){
			event = event || window.event;
			if(event.preventDefault){
				event.preventDefault();
			}
			else{
				event.returnValue = false;
			}
		},
		navMainMobile = document.getElementById('main-navigation-mobile');
	if(navMainMobile){
		addEvent(navMainMobile, 'change', function(){
			// Bugfix for IE to follow the base tag correctly
			var link = document.createElement('a');
			link.href = navMainMobile.value;
			document.location.href = ''+link.href;
		});
		if (navMainMobile.querySelector && !navMainMobile.querySelector('option[selected]')) {
			var activeOptions = navMainMobile.querySelectorAll('option.active,option.trail');
			if (activeOptions.length) {
				activeOptions[activeOptions.length - 1].selected = true;
			}
		}
	}
})();
