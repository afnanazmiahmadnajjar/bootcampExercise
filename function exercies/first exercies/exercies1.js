const isEven =function (number){

    if(number%2==0){
        return 
       
    }
    else { return number;
   }
}
//const result =isEven(6);
//console.log(result);
 const numbers =[1,2,3,4,5,6,7,8,9,10]
 const oddNumber=function(numbers){
    let i
    
    let result=[]
    for(i=0;i<numbers.length;i++){
        const results = isEven(numbers[i]);

       result.push(results)
       
    }
 return result


 }
  const arr=oddNumber(numbers);

 console.log(arr)