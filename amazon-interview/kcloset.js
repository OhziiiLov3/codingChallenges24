const points = [[1,3],[-2,2]];
const k = 1;

const kCloset = (points, k) =>{
    const getSqaureDistance = (point)=>{
        let distance = point[0] * point[0] + point[1] * point[1]
        return distance
    }

  points.sort((a,b)=> getSqaureDistance(a) - getSqaureDistance(b))
  let reuslt = points.slice(0,k);
  return reuslt;

};
console.log(kCloset(points, k))

/* 
Time Complexity: O(N log N) due to the sorting step.
Space Complexity: O(N) due to space used by the sorting algorithm and storing the points.

1. In summary to get the closes point we need 
to find the sum of the square of the x and y coordinates in the arrays

2. next, we sort the points based on their square distance 

3. select top k points : extract the first k ponts from the sorted list 


*/