//	This must be a module

class Element {
	constructor (number, symbol, name, x, y, family, at_mass) {
		this.number	= number;
		this.symbol	= symbol;
		this.name	= name;
		this.x		= x;
		this.y		= y;
		this.family	= family;
		this.mass	= at_mass
	}
	
	get_information = ()=> `clicked ('${this.name} <Br> Símbolo: ${this.symbol} <Br> Número atômico: ${this.number} <Br> Família: ${this.family} <Br> Massa atômica: ${this.mass}')`;
	get_number	= ()=> `<spam class='number'>${this.number}</spam>`;
	get_symbol	= ()=> `<spam class='symbol'>${this.symbol}</spam>`;
	get_name	= ()=> `<spam class='number'>${this.number}</spam>`;
	get_cell	= ()=> {
		return `<td aria-label="${this.name}" class="${this.family}" onclick="${this.get_information ()}">${this.get_symbol()}</td>`;
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
	address = href+'data/elements.csv';
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
			at_mass	= prop[7];		
		let	element	= new Element (number, symbol, name, x_pos, y_pos, family, at_mass);
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