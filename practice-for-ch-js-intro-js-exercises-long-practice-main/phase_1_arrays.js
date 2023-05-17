// Your code here

Array.prototype.uniq = function () {
    newArr = [];
    this.forEach(ele => {
        if(!newArr.includes(ele)){
            newArr.push(ele);
        }
    });
    return newArr;
};

Array.prototype.twoSum = function(){
    let newArr = [];
    for(let i = 0; i < (this.length - 1); i++){
        for(let j = i + 1;j< this.length; j++){
            if((this[i] + this[j]) === 0){
                newArr.push(i);
                newArr.push(j);
            }
        }
        return newArr;
    }
}


Array.prototype.transpose = function(){
    let times = this.length;
    let newArr = [];
    for(let j = 0; j < times; j++){
        newArr.push([]);
    }
    this.forEach(sub => {
        for(let i =0; i <sub.length; i ++){
            newArr[i].push(sub[i])
        }
    })
    return newArr;
};

// testArr = [1,2,2,-1,4,-1,5]
// console.log(testArr.twoSum())
console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose())