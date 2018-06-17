const a = 12; 
const b = 5;

class Person {
	constructor(name,age) {
		this.name = name ;
		this.age = age; 
	}
	showName(){
		return `我的名字是${this.name}`;
	}
}

let show = ()=>{
	return 1;
}
let sum = () => {
	return a +b ;
}


export {
	a,
	b,
	show,
	sum,
}
export default {
	Person	
}