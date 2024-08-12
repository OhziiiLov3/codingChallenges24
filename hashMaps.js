let user = {
    age: 33,
    name: "Keith",
    email: "Test@me.com",
    hasHobby: true,
    greeting: () => {
    console.log(`Hello! my name is ${user.name}`)
    }
}

// console.log(user.age);
// console.log(user.hasHobby);
// user.greeting()
// console.log(user)

// first recurring character 

const recurringChar = (arr) =>{

let arrMap = {};

for(let num of arr){
  if(arrMap[num]){
    return  num;
  }else{
    arrMap[num] = num
  }
 }
 return undefined
};

// console.log(recurringChar([2,5,1,7,3,5,1,2,5]))
// 2
// console.log(recurringChar([2,1,1,2,3,5,1,2,4]))
// 1

// nested loop soultion
const firstRecurringChar = (arr) =>{

  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] === arr[j]){
        return arr[i];
      }
    }
  }
  return undefined;

}


console.log(firstRecurringChar([2,5,1,7,3,5,1,2,5]))

