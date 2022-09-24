//	This must be a module
var currentTabIndex = 0;

function nextTabIndex() {
	currentTabIndex++;
	if (currentTabIndex > 118 + 1) {
		currentTabIndex = 1;
	}
	elem = document.querySelectorAll(`[tabindex="${currentTabIndex}"]`)[0];
	elem.focus();
}

function previousTabIndex() {
	currentTabIndex--;
	if (currentTabIndex < 1) {
		currentTabIndex = 118 + 1;
	}
	elem = document.querySelectorAll(`[tabindex="${currentTabIndex}"]`)[0];
	elem.focus()
}

function sleep(milliseconds) {
	const date = Date.now();
	let currentDate = null;
	do {
		currentDate = Date.now();
	} while (currentDate - date < milliseconds);
}

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

class Element {
	constructor (number, symbol, name, x, y, family,family2,acronym, at_mass) {
		this.number	= number;
		this.symbol	= symbol;
		this.name	= name;
		this.x		= x;
		this.y		= y;
		this.family	= family;
		this.family2	= family2;
		this.acronym = acronym;
		this.mass	= at_mass;
	}

	get_information = ()=> `clicked ('${this.name}, ${this.family},<Br>${this.family2}, <Br> Símbolo: ${this.acronym}, <Br> Número atômico: ${this.number}, <Br> Massa atômica: ${this.mass}')`;

	get_number	= ()=> `<spam class='number'>${this.number}</spam>`;
	get_symbol	= ()=> `<spam class='symbol'>${this.symbol}</spam>`;
	get_name	= ()=> `<spam class='number'>${this.number}</spam>`;
	get_cell	= ()=> {
		if (this.number == null) {
			return `<td aria-label="${this.name}" class="${this.family}" onclick="${this.get_information ()}">${this.get_symbol()}</td>`;
		} else {
			return `<td tabindex="${this.number + 1}" aria-label="${this.name}" class="${this.family}" onclick="${this.get_information ()}">${this.get_symbol()}</td>`;
		}
	}
	
}

class EmptyCell extends Element {
	constructor (x, y) {
		super(null, 'empty', 'empty', x, y, 'empty')
	}
}

class Table {
	constructor (lines) {
		this.lines	= lines;
	}
	render (canva) {
		let stack = '<table>'
		this.lines.forEach (line => {
			stack += '<tr>';
			line.forEach (element => {
				stack += element.get_cell();
			})
			stack += '</tr>';
		});
		stack += '</table>';
		canva.innerHTML = stack;
	}
}

//	Defining
const	canva	= document.getElementById ('canva'),
	href	= window.location.href,
	// address = href+'data/elements.csv';
	address = 'data/elements.csv';
get_csv (address);


//	Prepare lines as tr's
function make_tr (matrix) {
	full_stack = '<table>';
	Object.entries(matrix).forEach (([line_number, element]) => {
		line_stack = '<tr>'
		range	= Array.apply (null, Array(18)).map (function (_, i) {return i;});
		range.forEach ( i => {
			column = ++i;
			line_stack += matrix[line_number][column];
		});
		line_stack += '</tr>'
		full_stack += line_stack;
	});
	full_stack += '</table>'
	canva.innerHTML = full_stack;
}
//	Putting an empty space where theres no element
function fullfill (matrix) {
	let empty	= new EmptyCell ();
	Object.entries(matrix).forEach (([line_number, element]) => {
		range	= Array.apply (null, Array(18)).map (function (_, i) {return i;});
		range.forEach ( i => {
			column = ++i;
			matrix[line_number][column] = matrix[line_number][column] ? matrix[line_number][column] : empty.get_cell()
		});
	});
	make_tr (matrix)
}
//	Organizing each element on its right line
function organize_lines (elements) {
	var organized	= {}
	elements.forEach (element => {
		let	linenumber	= element.y;
		let	column		= element.x;
		organized[linenumber] = organized[linenumber] ? organized[linenumber] : {};
		organized[linenumber][column] = element.get_cell();
	});
	fullfill (organized)
}
//	Formating csv into elements
function format (raw) {
	all_elements	= []
	rlines	= raw.split ('\n');
	rlines.forEach (rline => {
		let	prop	= rline.split(';');
		let	number	= parseInt (prop[1]),
			symbol	= prop[2],
			name	= prop[3],
			x_pos	= parseInt (prop[4]),
			y_pos	= parseInt (prop[5]),
			family	= prop[6];
			family2= prop[7];
			acronym= prop[8]
			at_mass	= prop[9];		
		let	element	= new Element (number, symbol, name, x_pos, y_pos, family, family2, acronym, at_mass);
		all_elements.push (element)
	})
	organize_lines (all_elements);
}

//	Loading datasheet
function get_csv (address) {
	let	request	= new XMLHttpRequest ();
	request.open ('GET', address, true);
	request.send(null);
 	request.onreadystatechange	= () => {
 		if (request.readyState === 4 && request.status	=== 200) {
 			let content = request.responseText
			format (content);
		}
	}
}

const dialog = document.getElementById("Dialog"); // Get element.
const content = document.getElementById("DialogContent");

function show_dialog(information){
	dialog.style.visibility = "visible";
	content.innerHTML= information;
}

function hide_dialog(){
	dialog.style.visibility = "hidden";
}

function clicked (conteudo){
	if (dialog.style.visibility=='visible'){
		hide_dialog();
	} else {
		show_dialog(conteudo);
	}
}