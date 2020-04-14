let obj = {a:'X', b:'A',c:'X',d: 'A'};
function *createIterator (obj){
for (let key in obj){
	yield obj[key]
}
}
let iterator = createIterator (obj);
for (let elem of iterator){
	console.log (elem);
}