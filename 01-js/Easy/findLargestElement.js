function findLargestElement(number){
    let max=number[0];
    for(let i=1;i<number.length ; i++){
        if (number[i]>max){
            max=number[i];
        }
    }
    return max;
}

console .log(findLargestElement ([1,2,3,-1])); //outputs 3
