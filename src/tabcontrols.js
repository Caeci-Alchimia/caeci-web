var currentTabIndex = 0;

function nextTabIndex() {
	currentTabIndex++;
	if (currentTabIndex > 118) {
		currentTabIndex = 1;
	}
	elem = document.querySelectorAll(`[tabindex="${currentTabIndex}"]`)[0];
	elem.focus();
}

function previousTabIndex() {
	currentTabIndex--;
	if (currentTabIndex < 1) {
		currentTabIndex = 118;
	}
	elem = document.querySelectorAll(`[tabindex="${currentTabIndex}"]`)[0];
	elem.focus()
}
const	sleep = (delay_time = 1) => new Promise (resolve => {setTimeout(() => { resolve ('')}, delay_time*1000)})

function loadPage () {
	// swiped-right
	document.addEventListener('swiped-right', function(e) {
		// console.log('Swiped right!');
		nextTabIndex();
	});

	document.addEventListener('swiped-left', function(e) {
		// alert('Swiped left!');
		previousTabIndex();
	});

	document.onkeydown = function(e) {
		if (e.key === 'Enter') {
			document.activeElement.onclick();
		}
	};

	screen.orientation.lock('portrait');
	document.getElementById("slogan").focus();

	loading_page = document.getElementById('loading-page');
	periodic_table = document.getElementById('periodic-table');
	
	sleep(4000);

	// hide loading page
	loading_page.style.display = 'none';
	periodic_table.style.display = 'block';
}

function OnFocusOut() {
    var currentElement = $get(currentElementId); // ID set by OnFOcusIn
    var curIndex = currentElement.tabIndex; //get current elements tab index
    if(curIndex == currentTabIndex) { //if we are on the last tabindex, go back to the beginning
        curIndex = 0;
    }
    var tabbables = document.querySelectorAll(".tabable"); //get all tabable elements
    for(var i=0; i<tabbables.length; i++) { //loop through each element
        if(tabbables[i].tabIndex == (curIndex+1)) { //check the tabindex to see if it's the element we want
            tabbables[i].focus(); //if it's the one we want, focus it and exit the loop
            break;
        }
    }
}

