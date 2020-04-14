let obj = {a:'K',b:'O', c:'T',
*[Symbol.iterator](){
	for (let key in this){
yield this [key];
	}
}
};
 for (let elem of obj){
 	console.log (elem);
 }