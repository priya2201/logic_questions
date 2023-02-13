// let n , i = 0


// while(i<=10){
//   n = 5*i;
//     console.log(n)
//     i++;

// }

// console.log(a);

// let n = 0
// for(i=0;i<=10;i++){
//     n=i*5;
//     console.log(n)
// }

// let n,i = 0;
// do {
//   n = 5*i;
//   console.log(n)
//   i++

// }

// while(i<=10)


let arr = [12, 35, 1, 10, 34, 1, 35]

let first = -1;
let second = -1;

for (let i = 0; i <= arr.length - 1; i++)
    if (arr[i] > first) {

        first = arr[i];
    }


    else if (arr[i] > second && arr[i] != first) {
        second = arr[i];
    }
console.log(second)

function fibonacci(n) {
        if (n < 3) return 1;
    
             return fibonacci(n-1) + fibonacci(n-2);
    
    }
    
    console.log(fibonacci(5));

    function fibonacci(n) {


            let prev = 0;
            let curr = 1;
            let next;
            //  i = 5
            for ( let i=0; i<n; i++ ){
                next = prev + curr;
                prev = curr;
                curr = next;
            }
            console.log(curr)
            return prev;
            
        }
        
        fibonacci(7)


        function getEvenNumbers(){
              var arr = [1,2,3,4,5,6,7,8,9]
              for(i=0;i<arr.length;i++){
                if(arr[i]%2==0){
                    console.log(arr[i])
                }
              }
            
            }
            getEvenNumbers();
            
            function getEvenNumbers(num){
            
                  if(num % 2 === 0)
                  {
                      console.log(num)
                  }
                }
            
              arr.forEach(getEvenNumbers);
            

              function isPrime(n){
                   if(n==1||n==0){
                   return false;
                   }
                   {
                   for(let i=2;i<=100;i++){
                    if(n%i==0) return false
                
                    return true;
                
                   }
                
                   }
                   console.log(i);
                }
                isPrime();

            // const arr = [1, 2, 1, 3, 4, 3, 5];

// const toFindDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
// const duplicateElements = toFindDuplicates(arr);
// console.log(duplicateElements);


// function toFindDuplicates() {
    //     let arry = [1, 2, 1, 3, 4, 3, 5];
    //     let resultToReturn = false;
    //     for (let i = 0; i < arry.length; i++) { // nested for loop
    //         for (let j = 0; j < arry.length; j++) {
    //             // prevents the element from comparing with itself
    //             if (i !== j) {
    //                 // check if elements' values are equal
    //                 if (arry[i] === arry[j]) {
    //                     // duplicate element present
    //                     resultToReturn = true;
    //                     // terminate inner loop
    //                     break;
    //                 }
    //             }
    //         }
    //         // terminate outer loop
    //         if (resultToReturn) {
    //             break;
    //         }
    //     }
    //     if(resultToReturn) {
    //             console.log('Duplicate elements exist');
    //             }
    //             else {
    //                 console.log('Duplicates dont exist ');
    //                 }
    //             }
    
    //             toFindDuplicates();

    function reverseNumber(number) {
            var revNumber = 0;
            while (number > 0) {
              revNumber = (revNumber * 10) + (number % 10);
              number = Math.floor(number / 10);
            }
            return revNumber;
          }
          console.log(reverseNumber(786));

          var a = [5];
          count = 5;
          var missing = new Array();
          for(i=0;i<=count;i++){
              if(a.indexOf(i)==-1){
                  missing.push(i);
                  missing.sort();
              }
          }
          console.log(missing)

          const arrY = ['a','b','c','d'];
          let obj = arrY.reduce((acc,cur,index)=>({...acc,[index]:cur}),{})
          console.log(obj);
    
        const arr1 = [4, 56, 5, 3, 34, 37, 89, 57, 98];
        const sortWithReduce = arr => {
           return arr1.reduce((acc, val) => {
              let ind = 0;
              while(ind < arr.length && val < arr[ind]){
                 ind++;
              }
              acc.splice(ind, 0, val);
              return acc;
           }, []);
        };
        console.log(sortWithReduce(arr));
        
        function add_dash_bet_two_evendidgits(num){
            let str=num.toString();
            let result ='';

            for(let i=0;i<str.length;i++){
                if(parseInt(str[i])% 2=== 0 && parseInt(str[i+1])%2 === 0){
result += str[i]+'-';
                }else{
result+=str[i]
                }
            }
       return result     
        }
    console.log(add_dash_bet_two_evendidgits(9977223467884))


//     let arry = [1, 2, 3, 4, 5];
// let firstElement = arry[0];
//  let lastElement = arry[arry.length-1];
// console.log(firstElement);
// console.log(lastElement);

// let firstElement1 = arry.shift();
// let lastElement1 = arry.pop();
// console.log(firstElement1);
// console.log(lastElement1);


const data = [['a', 1], ['b', 2]];
console.log(Object.fromEntries(data));
const result = [];

const object = (data)=>(data).reduce((acc,value)=>{
   if(Array.isArray(value)) {
      acc[value[0]= value[1]];
   }
   console.log(acc)
})

// const a=data.split['[',']']
// console.log(a)

const data1 = [0, 1, false, 2, undefined, '', 3, null]

const arr2= data1.filter(e=> e || e === 0)

console.log(arr2);

let a1 = [1,2,3,4];
let b1 = [5,6,7];

let sum = [];

for(let i = 0; i < Math.max(a1.length,b1.length); i++)
{

   sum.push((a1[i] || 0) + ( b1[i]) || 0);
}

console.log(sum);