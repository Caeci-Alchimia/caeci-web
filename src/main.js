//	This must be a module

class Element {
	constructor (number, symbol, name, x, y, family) {
		this.number	= number;
		this.symbol	= symbol;
		this.name	= name;
		this.x		= x;
		this.y		= y;
		this.family	= family;
	}
	get_number	=> `<spam class='number'>${this.number}</spam>`;
	get_symbol	=> `<spam class='symbol'>${this.symbol}</spam>`;
	get_name	=> `<spam class='number'>${this.number}</spam>`;
	get_cell	=> {
		let	content	= get_number() + get_symbol;
		`<td class='${this.family}'>${content}</td>`;
	}
}

class EmptyCell extends Element {
	constructor (x, y) {
		this.number	= null;
		this.symbol	= this.name	= this.family	= 'empty';
		this.x		= x;
		this.y		= y;
	}
}


//	Defining
const	canva	= document.selectById ('canva'),
	data	= fetch('data/elements.csv');
var	elements	= [];


//	Loading datasheet

function get_from_csv () {
	lines	= data.split ('\n');
	lines.forEach (line => {
		let	prop	= line.split(',');
		let	number	= prop[0],
			symbol	= prop[1],
			name	= prop[2],
			x_pos	= prop[3],
			y_pos	= prop[4],
			family	= prop[5];
		let	element	= new Element (number, symbol, name, x_pos, y_pos, family);
		elements.push (element);
	});
}
get_from_csv ();


//	Preparing Lines

function makingEmpties () {

	//	for each y and x test if a cell exists, if it doesnt, make an empty one


}

class Line {
	constructor (tds) {
		this.cells	= tds;
	}
	get_content => {
		let line	= []
		for x in range 0 to 32 {
			line.push (this.cells[x]);
		}
		let	formated	= `<tr>${line}</tr>`;
	}
}

function prepare_lines () {
	






