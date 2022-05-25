//calculator logic
// "use strict"
var obj = [
	{
		id:1,
		btn: 1,
		value:'1',
		color:'#000',
		background:'none'
	},
	{
		id:2,
		btn: 2,
		value:'2',
		color:'#000',
		background:'none'
	},
	{
		
		id:3,
		btn: 3,
		value:'3',
		color:'#000',
		background:'none'
	},
	{
		id:'add',
		btn: '+',
		value:'+',
		color:'#3902FD',
		background:'none'
	},
	{
		id:4,
		btn: 4,
		value:'4',
		color:'#000',
		background:'none'
	},
	{
		id:5,
		btn: 5,
		value:'5',
		color:'#000',
		background:'none'
	},
	{
		id:6,
		btn: 6,
		value:'6',
		color:'#000',
		background:'none'
	},
	{
		id:'subtract',
		btn: '-',
		value:'-',
		color:'#3902FD',
		background:'none'
	},
	{
		id:7,
		btn: 7,
		value:'7',
		color:'#000',
		background:'none'
	},
	{
		id:8,
		btn: 8,
		value:'8',
		color:'#000',
		background:'none'
	},
	{
		id:9,
		btn: 9,
		value:'9',
		color:'#000',
		background:'none'
	},
	{
		id:'multiply',
		btn: '*',
		value:'*',
		color:'#3902FD',
		background:'none'
	},
	{
		id:0,
		btn: 0,
		value:'0',
		color:'#000',
		background:'none'
	},
	{
		id:00,
		btn: 00,
		value:'00',
		color:'#000',
		background:'none'
	},
	{
		id:'.',
		btn: '.',
		value:'.',
		color:'#000',
		background:'none'
	},
	{
		id:'divide',
		btn: '/',
		value:'/',
		color:'#3902FD',
		background:'none'
	},
	{
		id:'back',
		btn: 'back',
		value:'',
		color:'#000',
		background:'none'
	},
	{
		id:'clear',
		btn: 'C',
		value:'',
		color:'#000',
		background:'none'
	},
	{
		id:'modulus',
		btn: '%',
		value:'%',
		color:'#3902FD',
		background:'none'
	},
	{
		id:'equal',
		btn: '=',
		value:'',
		color:'#fff',
		background:'#3902FD'
	},
]


function createHtml(){
	document.getElementById('result').value = 0
	var div = document.getElementById('calc');
	let innerhtml = ''
	obj.forEach(val =>{
		innerhtml = `<div class='allbtn'>`
		if(val.btn == '='){
			innerhtml +=`<button onclick='solve()' id='equal' style='color:#fff;background:#3902FD'>${val.btn}</button>`
		}
		if(val.btn == 'C'){
			innerhtml +=`<button onclick="clearData()" id='clear' value='' style='color:#F94F44;'>${val.btn}</button>`
		}
		if(val.btn == 'back'){
			innerhtml +=`<button onclick="backData()" id='back' value=''>${val.btn}</button>`
		}
		else if(val.btn != '=' && val.btn != 'C' && val.btn != 'back'){
			innerhtml +=`<button onclick="display(event)" id='${val.id}' value="${val.value}" style='color:${val.color};background:${val.background}'>${val.btn}</button>`
		}
		innerhtml += `</div>`

		div.innerHTML += innerhtml;

	})
}
createHtml();

//displaying value in the field
function display(event){
	if(parseInt(document.getElementById('result').value) === 0){
		document.getElementById('result').value = event.target.value
	}
	else
	{
		document.getElementById('result').value += event.target.value
	}
	
	return event.target.value;
}

//all arithmetic operations
function solve(){
	 let x = document.getElementById('result').value
	if(x != '' && x != "undefined"){
		let y = eval(x);

    	document.getElementById('result').value = y

    	return y
	}
	else
	{
		document.getElementById('result').value = 0
		
	}
    
}

/*clear the field*/
function clearData(){
	var self = this;
	document.getElementById('result').value = 0
}

function backData(){
	if(parseInt(document.getElementById('result').value) === 0){
		document.getElementById('result').value = 0
	}
	else
	{
		let temp = document.getElementById('result').value;
		if(temp.length > 1){
			temp = temp.slice(0,-1)
		}
		document.getElementById('result').value = temp
	}
}