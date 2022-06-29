//	This must be a module
var data = ';number; symbol; name; x; y; family; atomic mass;\n' +
';1  ;H  ;Hidrogênio     ;1  ;1;None         ;1.01 u;\n' +
';2  ;He ;Hélio          ;18 ;1;Nobre        ;4.00 u;\n' +    
';3  ;Li ;Lítio          ;1  ;2;Metal        ;6.94 u;\n' +
';4  ;Be ;Berílio        ;2  ;2;Metal        ;9.01 u;\n' +
';5  ;B  ;Boro           ;13 ;2;Semimetal    ;10.81 u;\n' +
';6  ;C  ;Carbono        ;14 ;2;Ametal       ;12.01 u;\n' +
';7  ;N  ;Nitrogênio     ;15 ;2;Ametal       ;14.01 u;\n' +
';8  ;O  ;Oxigênio       ;16 ;2;Ametal       ;16.00 u;\n' +
';9  ;F  ;Fluor          ;17 ;2;Ametal       ;19.00 u;\n' +
';10 ;Ne ;Neônio         ;18 ;2;Nobre        ;20.18 u;\n' +
';11 ;Na ;Sódio          ;1  ;3;Metal        ;22.99 u;\n' +
';12 ;Mg ;Magnésio       ;2  ;3;Metal        ;24.31 u;\n' +
';13 ;Al ;Alumínio       ;13 ;3;Metal        ;26.98 u;\n' +
';14 ;Si ;Silício        ;14 ;3;Semimetal    ;28.09 u;\n' +
';15 ;P  ;Fósforo        ;15 ;3;Ametal       ;30.97 u;\n' +
';16 ;S  ;Enxofre        ;16 ;3;Ametal       ;32.07 u;\n' +
';17 ;Cl ;Cloro          ;17 ;3;Ametal       ;35.45 u;\n' +
';18 ;Ar ;Argônio        ;18 ;3;Nobre       ;39.45 u;\n' +
';19 ;K  ;Potássio       ;1  ;4;Metal        ;39.10 u;\n' +
';20 ;Ca ;Cálcio         ;2  ;4;Metal        ;40.08 u;\n' +
';21 ;Sc ;Escândio       ;3  ;4;Metal        ;44.96 u;\n' +
';22 ;Ti ;Titânio        ;4  ;4;Metal        ;47.87 u;\n' +
';23 ;V  ;Vanádio        ;5  ;4;Metal        ;50.94 u;\n' +
';24 ;Cr ;Cromo          ;6  ;4;Metal        ;52.00 u;\n' +
';25 ;Mn ;Manganês       ;7  ;4;Metal        ;54.94 u;\n' +
';26 ;Fe ;Ferro          ;8  ;4;Metal        ;55.85 u;\n' +
';27 ;Co ;Cobalto        ;9  ;4;Metal        ;58.93 u;\n' +
';28 ;Ni ;Níquel         ;10 ;4;Metal        ;58.69 u;\n' +
';26 ;Cu ;Cobre          ;11 ;4;Metal        ;65.55 u;\n' +
';30 ;Zn ;Zinco          ;12 ;4;Metal        ;65.38 u;\n' +  
';31 ;Ga ;Gálio          ;13 ;4;Metal        ;69.72 u;\n' +
';32 ;Ge ;Germânio       ;14 ;4;Semimetal    ;72.64 u;\n' +
';33 ;As ;Arsênio        ;15 ;4;Ametal       ;74.92 u;\n' +
';34 ;Se ;Selênio        ;16 ;4;Ametal       ;78.96 u;\n' +
';35 ;Br ;Bromo          ;17 ;4;Ametal       ;79.90 u;\n' +
';36 ;Kr ;Criptônio      ;18 ;4;Nobre        ;83.80 u;\n' +
';37 ;Rb ;Rubídio        ;1  ;5;Metal        ;85.47 u;\n' +
';38 ;Sr ;Estrôncio      ;2  ;5;Metal        ;87.62 u;\n' +
';39 ;Y  ;Ítrio          ;3  ;5;Metal        ;88.91 u;\n' +
';40 ;Zr ;Zircônio       ;4  ;5;Metal        ;91.22 u;\n' +
';41 ;Nb ;Nióbio         ;5  ;5;Metal        ;92.91 u;\n' +
';42 ;Mo ;Molibdênio     ;6  ;5;Metal        ;95.96 u;\n' +
';43 ;Tc ;Tecnécio       ;7  ;5;Metal        ;98.00 u;\n' +
';44 ;Ru ;Rutênio        ;8  ;5;Metal        ;101.07 u;\n' +      
';45 ;Rh ;Ródio          ;9  ;5;Metal        ;102.91 u;\n' +
';46 ;Pd ;Paládio        ;10 ;5;Metal        ;106.42 u;\n' +
';47 ;Ag ;Prata          ;11 ;5;Metal        ;107.87 u;\n' +
';48 ;Cd ;Cádmio         ;12 ;5;Metal        ;112.41 u;\n' +
';49 ;In ;Índio          ;13 ;5;Metal        ;114.82 u;\n' +
';50 ;Sn ;Estanho        ;14 ;5;Metal        ;118;71 u;\n' +
';51 ;Sb ;Antimônio      ;15 ;5;Semimetal    ;121.76 u;\n' +
';52 ;Te ;Telúrio        ;16 ;5;Semimetal    ;127.60 u;\n' +
';53 ;I  ;Iodo           ;17 ;5;Ametal       ;126.90 u;\n' +
';54 ;Xe ;Xenônio        ;18 ;5;Nobre        ;131.29 u;\n' +
';55 ;Cs ;Césio          ;1  ;6;Metal        ;132.91 u;\n' +
';56 ;Ba ;Bário          ;2  ;6;Metal        ;137.33 u;\n' +
';   ;La-Lu;             ;3  ;6;Especial;\n' +
';72 ;Hf ;Háfnio         ;4  ;6;Metal       ;178.49 u;\n' +
';73 ;Ta ;Tântalo        ;5  ;6;Metal       ;180.95 u;\n' +
';74 ;W  ;Tungstênio     ;6  ;6;Metal       ;183.84 u;\n' +
';75 ;Re ;Rênio          ;7  ;6;Metal       ;186.21 u;\n' +
';76 ;Os ;Ósmio          ;8  ;6;Metal       ;190.23 u;\n' +
';77 ;Ir ;Irídio         ;9  ;6;Metal       ;192.22 u;\n' +
';78 ;Pl ;Platina        ;10 ;6;Metal       ;195.08 u;\n' +
';79 ;Au ;Ouro           ;11 ;6;Metal       ;196.97 u;\n' +
';80 ;Hg ;Mercúrio       ;12 ;6;Metal       ;200.59 u;\n' +
';81 ;Tl ;Tálio          ;13 ;6;Metal       ;204.38 u;\n' +
';82 ;Pb ;Chumbo         ;14 ;6;Metal       ;207.20 u;\n' +
';83 ;Bi ;Bismuto        ;15 ;6;Metal       ;208.98 u;\n' +
';84 ;Po ;Polônio        ;16 ;6;Semimetal   ;209.00 u;\n' +
';85 ;At ;Ástato         ;17 ;6;Ametal      ;210.00 u;\n' +
';86 ;Rn ;Radônio        ;18 ;6;Nobre       ;222.00 u;\n' +
';87 ;Fr ;Frâncio        ;1  ;7;Metal       ;223.02 u;\n' +
';88 ;Ra ;Rádio          ;2  ;7;Metal       ;226.03 u;\n' +
';   ;Ac-Lr;             ;3  ;7;Especial;\n' +
';104 ;Rf ;Rutherfórdio  ;4  ;7 ;Especial2  ;267.00 u;\n' +
';105 ;Db ;Dúbnio        ;5  ;7 ;Especial2  ;268.00 u;\n' +
';106 ;Sg ;Seabórgio     ;6  ;7 ;Especial2  ;269.00 u;\n' +
';107 ;Bh ;Bóhrio        ;7  ;7 ;Especial2  ;270.00 u;\n' +
';108 ;Hs ;Hássio        ;8  ;7 ;Especial2  ;269.00 u;\n' +
';109 ;Mt ;Meitnério     ;9  ;7 ;Especial2  ;278.00 u;\n' +
';110 ;Ds ;Darmstádtio   ;10 ;7 ;Especial2  ;281.00 u;\n' +
';111 ;Rg ;Roentgênio    ;11 ;7 ;Especial2  ;281.00 u;\n' +
';112 ;Cn ;Copernício    ;12 ;7 ;Especial2  ;285.00 u;\n' +
';113 ;Nh ;Nihônio       ;13 ;7 ;Especial2  ;286.00 u;\n' +
';114 ;Fl ;Fleróvio      ;14 ;7 ;Especial2  ;289.00 u;\n' +
';115 ;Mc ;Moscóvio      ;15 ;7 ;Especial2  ;288.00 u;\n' +
';116 ;Lv ;Livermório    ;16 ;7 ;Especial2  ;293.00 u;\n' +
';117 ;Ts ;Tennesso      ;17 ;7 ;Especial2  ;294.00 u;\n' +
';118 ;Og ;Oganessônio   ;18 ;7 ;Especial2  ;293.00 u;\n' +
';57 ;La ;Lantânio       ;4  ;9 ;Metal      ;138.91 u;\n' +
';58 ;Ce ;Cério          ;5  ;9 ;Metal      ;140.12 u;\n' +
';59 ;Pr ;Praseodímio    ;6  ;9 ;Metal      ;140.94 u;\n' +
';60 ;Nd ;Neodímio       ;7  ;9 ;Metal      ;144.24 u;\n' +
';61 ;Pm ;Promécio       ;8  ;9 ;Metal      ;145.00 u;\n' +
';62 ;Pm ;Samário        ;9  ;9 ;Metal      ;150.36 u;\n' +
';63 ;Eu ;Európio        ;10 ;9 ;Metal      ;151.96 u;\n' +
';64 ;Gd ;Gadolínio      ;11 ;9 ;Metal      ;157.25 u;\n' +
';65 ;Tb ;Térbio         ;12 ;9 ;Metal      ;158.93 u;\n' +
';66 ;Dy ;Disprósio      ;13 ;9 ;Metal      ;162.50 u;\n' +
';67 ;Ho ;Hólmio         ;14 ;9 ;Metal      ;164.93 u;\n' +
';68 ;Er ;Érbio          ;15 ;9 ;Metal      ;167.26 u;\n' +
';69 ;Tm ;Túlio          ;16 ;9 ;Metal      ;168.93 u;\n' +
';70 ;Yb ;Itérbio        ;17 ;9 ;Metal      ;173.05 u;\n' +
';71 ;Lu ;Lutécio        ;18 ;9 ;Metal      ;174.97 u;\n' +
';89 ;Ac ;Actínio        ;4  ;10;Metal      ;227.03 u;\n' +
';90 ;Th ;Tório          ;5  ;10;Metal      ;232.04 u;\n' +
';91 ;Pa ;Protactínio    ;6  ;10;Metal      ;231.04 u;\n' +
';92 ;U ;Urânio          ;7  ;10;Metal      ;238.03 u;\n' +
';93 ;Np ;Neptúnio       ;8  ;10;Metal      ;237.05 u;\n' +
';94 ;Pu ;Plutônio       ;9  ;10;Metal      ;244.06 u;\n' +
';95 ;Am ;Amerício       ;10 ;10;Especial2  ;243.00 u;\n' +
';96 ;Cm ;Cúrio          ;11 ;10;Especial2  ;247.00 u;\n' +
';97 ;Bk ;Berkélio       ;12 ;10;Especial2  ;247.00 u;\n' +
';98 ;Cf ;Califórnio     ;13 ;10;Especial2  ;251.00 u;\n' +
';99 ;Es ;Einstênio      ;14 ;10;Especial2  ;252.00 u;\n' +
';100 ;Fm ;Férmio        ;15 ;10;Especial2  ;257.00 u;\n' +
';101 ;Md ;Mendelévio    ;16 ;10;Especial2  ;257.00 u;\n' +
';102 ;No ;Nobélio       ;17 ;10;Especial2  ;259.00 u;\n' +
';103 ;Lr ;Laurêncio     ;18 ;10;Especial2  ;262.00 u;\n';

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
		return `<td aria-label="${this.name}" class="${this.family}">${this.get_symbol()}</td>`;
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
const	canva		= document.getElementById ('canva'),
	protocol	= window.location.protocol,
	address 	= protocol+'/Periodic_Table_HTML'+'/data/elements.csv';
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
		let	element	= new Element (number, symbol, name, x_pos, y_pos, family);
		all_elements.push (element)
	})
	organize_lines (all_elements);
}

function get_csv() {
	return format(data);
}

//	Loading datasheet
// function get_csv (address) {
// 	let	request	= new XMLHttpRequest ();
// 	request.open ('GET', address, true);
// 	request.send(null);
// 	request.onreadystatechange	= () => {
// 		if (request.readyState === 4 && request.status	=== 200) {
// 			let content = request.responseText
// 			format (content);
// 		}
// 	}
// }

