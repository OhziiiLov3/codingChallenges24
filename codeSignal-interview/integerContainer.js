// a simple container of integer numbers with the given specifications, you can use a class-based approach in JavaScript. Here's how you can approach the task for each level:

class IntegerContainer {
    constructor(){
        this.numbers = [];
    }
  addNum(value){
    if(Number.isInteger(value)){
        this.numbers.push(value);
        console.log(`Added ${value}. Length of array: ${this.numbers.length}`);
        return this.numbers.length;
    }else{
        throw new Error("Only Integers are allowed")
    }
  }

  deleteNum(value){
    const index = this.numbers.indexOf(value);
    if(index !== -1){
     this.numbers.splice(index,1)
     console.log(`Deleted ${value}. Length of array: ${this.numbers.length}`);
     return true;
    }else{
        return false;
    }
  }
// get the median of the numbers 
getMedian(){
    const sorted = [...this.numbers].sort((a,b)=> a - b);
    const n = sorted.length;
    if(n === 0){
        return null;
    }
    const mid = Math.floor(n / 2);
    if( n % 2 === 0){
        return sorted[mid - 1];
    }else{
        return sorted[mid]
    }
}

search(value){
    const exists = this.numbers.includes(value);
    console.log(`Search for ${value}: ${exists}`);
    return true;
}




// get state of container
getState(){
    return this.numbers;
}

}

const numContainer = new IntegerContainer();
numContainer.addNum(5);
numContainer.addNum(10);
numContainer.addNum(15);
numContainer.addNum(20);
console.log(numContainer.numbers);
numContainer.deleteNum(15)
console.log('Current state of numbers', numContainer.getState());
console.log('Get Median:', numContainer.getMedian());
numContainer.search(5);
numContainer.search(25);
console.log('Current state of numbers', numContainer.getState());
numContainer.addNum(25);
numContainer.search(25);