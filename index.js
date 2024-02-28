// 1.Do the given program in anonymous function & IIFE:
// a. Print Odd Numbers in an array
// b. Convert all the strings to title caps in a string array
// c. Sum of all numbers in an array
// d. Return all the prime numbers in an array
// e. Return all the Palindromes in an array
// f. Return median of two sorted arrays of the same size
// g. Remove duplicates from an array
// h. Rotate an array by k times

// 2. Do the below programs in arrow function:
// a. Print Odd Numbers in an array
// b. Convert all the strings to title caps in a string array
// c. Sum of all numbers in an array
// d. Return all the prime numbers in an array
// e. Return all the Palindromes in an array


// 1.a. Print Odd Numbers in an array
//Anonymous Function
var arr1 = [4,6,18,25,13,4,78,59,37,999,111,222,333,444,555,666,777,888,999,1010];
var Odd = "";
var Result1=function(arr1){
   for(var i=0;i<arr1.length;i++){
      if(arr1[i]%2!=0){
         Odd = Odd+(arr1[i])+" ";
      }
   }
   return Odd;
   }
   console.log((Result1(arr1)).trim());
//IIFE Function
var arr1 = [4,6,18,25,13,4,78,59,37,999,111,222,333,444,555,666,777,888,999,1010];
var Odd = "";
(function Result1(arr1){
   for(var i=0;i<arr1.length;i++){
      if(arr1[i]%2!=0){
         Odd = Odd+(arr1[i])+" ";
      }
   }
   console.log(Odd.trim());
})(arr1);

// 2.a. Print Odd Numbers in an array
// Arrow Function
var arr1 = [4,6,18,25,13,4,78,59,37,999,111,222,333,444,555,666,777,888,999,1010];
var Odd = "";
var Result1=()=>{
   for(var i=0;i<arr1.length;i++){
            if(arr1[i]%2!=0){
               Odd = Odd+(arr1[i])+" ";
            }
         }
      return Odd;
   }
console.log((Result1(arr1)).trim());  

// 1.b. Convert all the strings to title caps in a string array
//Anonymous Function
var arr2 = ["karthi","MohanKrishna","VIKRAM","JayaRaJ"];
var titlecaps = [];
var Result2=function(arr2){
   for(var i=0;i<arr2.length;i++){
      arr2[i]=arr2[i].toLowerCase();
      arr2[i]=arr2[i].charAt(0).toUpperCase()+arr2[i].slice(1);
      titlecaps.push(arr2[i]);
   }
   return titlecaps;
}
console.log(Result2(arr2));

//IIFE Function
var arr2 = ["karthi","MohanKrishna","VIKRAM","JayaRaJ"];
var titlecaps = [];
(function Result2(arr2){
   for(var i=0;i<arr2.length;i++){
      arr2[i]=arr2[i].toLowerCase();
      arr2[i]=arr2[i].charAt(0).toUpperCase()+arr2[i].slice(1);
      titlecaps.push(arr2[i]);
   }
   console.log(titlecaps);
})(arr2);

// 2.b. Convert all the strings to title caps in a string array
// Arrow Function
var arr2 = ["karthi","MohanKrishna","VIKRAM","JayaRaJ"];
var titlecaps = [];
var Result2=()=>{
   for(var i=0;i<arr2.length;i++){
            arr2[i]=arr2[i].toLowerCase();
            arr2[i]=arr2[i].charAt(0).toUpperCase()+arr2[i].slice(1);
            titlecaps.push(arr2[i]);
         }
      return titlecaps;
   }
console.log(Result2(arr2));


// 1.c. Sum of all numbers in an array
//Anonymous Function
var arr3 = [5,7.423,68.7,-101,94.21,4.8];
var Sum = 0;
var Result3=function(arr3){
      for(var i=0;i<arr3.length;i++){
      Sum=Sum+arr3[i];
   }
   return Sum;
}
console.log(Result3(arr3));

//IIFE Function
var arr3 = [5,7.423,68.7,-101,94.21,4.8];
var Sum = 0;
(function Result3(arr3){
   for(var i=0;i<arr3.length;i++){
      Sum=Sum+arr3[i];
   }
   console.log(Sum);
})(arr3);

// 2.c. Sum of all numbers in an array
// Arrow Function
var arr3 = [5,7.423,68.7,-101,94.21,4.8];
var Sum = 0;
var Result3=()=>{
      for(var i=0;i<arr3.length;i++){
      Sum=Sum+arr3[i];
   }
   return Sum;
}
console.log(Result3(arr3));  

// 1.d. Return all the prime numbers in an array
//Anonymous Function
var arr4=[1,2,3,4,7,13,11,16,19];
var prime = [];
var Result4=function(arr4){
    for(var i=0;i<arr4.length;i++){
        var count=0;
      if(arr4[i]<1){
        break;//not a prime
      }
    for(var j=2;j<=arr4[i];j++){
      if(arr4[i]%j==0) {
          count++
      }
    }
      if(count<2){
            prime.push(arr4[i]);
      }
    }
   return prime;
}
console.log(Result4(arr4));

// IIFE Function
var arr4=[1,2,3,4,7,13,11,16,19];
var prime = [];
// function keyword, function name, parameter, automatic function call(so no need of function call),console.log()
(function Result4(arr4){
for(var i=0;i<arr4.length;i++){
  var count=0;
  if(arr4[i]<1){
    break;//not a prime
  }
for(var j=2;j<=arr4[i];j++){
  if(arr4[i]%j==0){
    count++
  }
}
  if(count<2){
    prime.push(arr4[i]);
  }
}
console.log(prime);
})(arr4);

// 2.d. Return all the prime numbers in an array
// Arrow Function
var arr4=[1,2,3,4,7,13,11,16,19];
var prime = [];
var Result4=()=>{
  for(var i=0;i<arr4.length;i++){
    var count=0;
  if(arr4[i]<1){
    break;//not a prime
  }
for(var j=2;j<=arr4[i];j++){
  if(arr4[i]%j==0){
    count++
  }
}
  if(count<2){
    prime.push(arr4[i]);
  }
}
return prime;
}
console.log(Result4(arr4));    

// 1.e. Return all the Palindromes in an array
//Anonymous Function
var arr5 = ["mom","cat","dad","karthi","143","454","wow","racecar","surya"];
var palindrome = [];
var Result5=function(arr5){
   for(var i=0;i<arr5.length;i++){
      var OS = arr5[i]; //-->Original String(OS)
      var RS = arr5[i].split("").reverse().join(""); //-->Reverse String(RS)
      if(OS==RS){
         palindrome.push(arr5[i]);
      }
   }
   return palindrome;
   }
   console.log(Result5(arr5));
//IIFE Function
var arr5 = ["mom","cat","dad","karthi","143","454","wow","racecar","surya"];
var palindrome = [];
// function keyword, function name, parameter, automatic function call(so no need of function call),console.log()
(function Result5(arr5){
   for(var i=0;i<arr5.length;i++){
      var OS = arr5[i]; //-->Original String(OS)
      var RS = arr5[i].split("").reverse().join(""); //-->Reverse String(RS)
      if(OS==RS){
         palindrome.push(arr5[i]);
      }
   }
   console.log(palindrome);
})(arr5);

// 2.e. Return all the Palindromes in an array
// Arrow Function
var arr5 = ["mom","cat","dad","karthi","143","454","wow","racecar","surya"];
var palindrome = [];
var Result5=()=>{
   for(var i=0;i<arr5.length;i++){
      var OS = arr5[i]; //-->Original String(OS)
      var RS = arr5[i].split("").reverse().join(""); //-->Reverse String(RS)
      if(OS==RS){
         palindrome.push(arr5[i]);
      }
   }
    return palindrome;
}
console.log(Result5(arr5)); 

// 1.f. Return median of two sorted arrays of the same size
//Anonymous Function
var m1 = [1,111,24,38,93];
var m2 = [202,76,65,501,41];
var median = function(m1,m2){
  var arr = [...m1,...m2].sort(function(a,b){return a-b});
  if(arr.length%2==0){
    var mid1 = arr[arr.length/2];
    var mid2 = arr[arr.length/2-1];
    return((mid1+mid2)/2); 
  }
  else{
    return (arr[Math.floor(arr.length/2)]);
  }
};
console.log(median(m1,m2));

//IIFE Function
var m1 = [1,111,24,38,93];
var m2 = [202,76,65,501,41];
(function median(m1,m2){
  var arr = [...m1,...m2].sort(function(a,b){return a-b});
  if(arr.length%2==0){
    var mid1 = arr[arr.length/2];
    var mid2 = arr[arr.length/2-1];
    console.log((mid1+mid2)/2); 
  }
  else{
    console.log(arr[Math.floor(arr.length/2)]);
  } 
})(m1,m2);


// 1.g. Remove duplicates from an array
//Anonymous Function
var arr7=[1,6,4,2,2,8];
var temp=[];
var org=function(arr7){
  for(var i=0;i<arr7.length;i++){
    var count=0;
    for(var j=0;j<arr7.length;j++){
      if(arr7[i]==arr7[j]){
        count++;
      }
    }
    if(count<=1){
       temp.push(arr7[i]);
    }
  }
  return(temp);  
};
console.log(org(arr7));

//IIFE Function
var arr7=[1,6,4,2,2,8];
var temp=[];
(function(arr7){
  for(var i=0;i<arr7.length;i++){
    var count=0;
    for(var j=0;j<arr7.length;j++){
      if(arr7[i]==arr7[j]){
        count++;
      }
    }
    if(count<=1){
       temp.push(arr7[i]);
    }
  }
  console.log(temp);  
}
)(arr7);





// 1.h. Rotate an array by k times
//Anonymous Function
var arr6=[1,2,3,4,5];
var k;
var Result6=function(arr6,k){
   for(var i=0;i<k;i++){
      arr6.unshift(arr6.pop());
   }
   return arr6;
   }
   console.log(Result6(arr6,2));
   
//IIFE Function
var arr6=[1,2,3,4,5];
var k;
(function Result6(arr6,k){
   for(var i=0;i<k;i++){
      arr6.unshift(arr6.pop());
   }
   console.log(arr6);
})(arr6,2);