// Your code here

Array.prototype.myEach = function(callback){
    this.forEach(ele => callback(ele));
}
Array.prototype.myMap = function(callback){
    let newArr = [];
    this.forEach(ele => {
        newArr.push(callback(ele))
    });
    return newArr;
}

Array.prototype.myReduce(callback,[def = this[0]]){


}



let testArr = [1,2,3,4,5]
function mult(num){
   return num *= 2
}


console.log(testArr.myMap(mult))