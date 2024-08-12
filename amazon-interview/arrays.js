// Arrays
// 4*4 = 16 bytes of storage , storage items in sequential order
const strings = ['a','b','c','d'];


strings.push('e'); //O(1)
strings.pop(); //O(1)
strings.unshift("z"); // O(n)
strings.splice(3,2,"Brock") // O(n)


// console.log(strings);

// build an array 

class MyArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
    }
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index){
      for(let i  = index; i < this.length - 1; i++){
        this.data[i] = this.data[i+1]
      }
      delete this.data[this.length - 1]
      this.length--;
    }
}

// const newArray = new MyArray();
// console.log(newArray);
// newArray.push("Keith");
// newArray.push("Zooty");
// newArray.push("Kobe");
// console.log(newArray);
// newArray.delete(1)
// console.log(newArray.get(0));
// console.log(newArray.get(1));
// console.log(newArray);

// Strings 

const reverseStr = (str) =>{
    return str.split('').reverse().join("").toLowerCase()
};

// console.log(reverseStr("Zooty"))

// MergeSort 

const mergeSortedArrays = (arr1, arr2) =>{
    let result = [];
    
    for(let el of arr1){
        result.push(el);
        console.log("Array 1:", el);
    }
    
    for( el of arr2){
        result.push(el)
        console.log("Array 2:", el);
    }
    return result.sort((a,b) => a - b)
}

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));


// firstRecurring Number 