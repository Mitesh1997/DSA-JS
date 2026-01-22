
function palindromeNumber(n){
    
    n=Math.abs(n);
    let reversed=0;
    let original=n;
    while(n>0){
        let digit=n%10;
        reversed=reversed*10+digit;

        n=Math.floor(n/10);
    }
    return original===reversed;

}

console.log(palindromeNumber(12155)); // true