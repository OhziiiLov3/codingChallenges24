// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

const firstNotRepeatingCharacter = (s) =>{

    const result = {};

    for(let char of s){
        if(result[char]){
            result[char] = result[char] + 1;
        }else{
            result[char] = 1;
        }
    }


    for(let char in result){
        if(result[char] === 1){
            return char;
        }
    }
    return "_"
}

console.log(firstNotRepeatingCharacter("abacabaabacaba")); // '_'
console.log(firstNotRepeatingCharacter("abacabad")); // c


// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.


const firstDuplicate = (arr) =>{
    const result = {};

    for(let num of arr){
        if(result[num]){
            return num;
        }else{
            result[num] = num;
        }
        console.log(result)
    }
  return -1;
};

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5,4,1]));


// usig a set 
const firstDuplicate2 = (arr) => {
    const seen = new Set();

    for (let num of arr) {
        if (seen.has(num)) {
            return num;
        } else {
            seen.add(num);
        }
    }
    return -1;
};
