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
	get_number	= ()=> `<spam class='number'>${this.number}</spam>`;
	get_symbol	= ()=> `<spam class='symbol'>${this.symbol}</spam>`;
	get_name	= ()=> `<spam class='number'>${this.number}</spam>`;
	get_cell	= ()=> {
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

class Table {
	constructor (lines) {
		this.lines	= lines;
	}
	render (canva) {
		let stack = '<table>'
		this.lines.forEach (line => {
			stack += '<tr>';
			line.forEach (element => {
				stack += '<td>';
				stack += element.symbol;
				stack += '</td>';
			})
			stack += '</tr>';
		});
		stack += '</table>';
	}
}

//	Defining
const	canva		= document.getElementById ('canva')
canva.innerHTML = 'ola mundo'

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
function format (raw) {
	lines	= raw.split ('\n');
	lines.forEach (line => {
		let	prop	= line.split(';');
		let	number	= prop[1],
			symbol	= prop[2],
			name	= prop[3],
			x_pos	= prop[4],
			y_pos	= prop[5],
			family	= prop[6];
		let	element	= new Element (number, symbol, name, x_pos, y_pos, family);
	})
}
let address = 'http://localhost:8000/data/elements.csv';
let csv	= get_csv (address);
console.info (csv)

