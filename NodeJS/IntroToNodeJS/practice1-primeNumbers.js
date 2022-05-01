/*
    Execute the script by writing the following command to the terminal:
        node practice1-primeNumbers.js [your_first_number] [your_last_number]
    Then code will return the prime numbers which are in the scope of the numbers that you have given.
*/
const arguments = process.argv.slice(2);

function showPrimeNumbers(lowNumber, highNumber){
    for(let i=lowNumber; i<=highNumber;i++){
        let isPrime = true;
        for(let j=2; j<=i;j++){
            if (i % j === 0 && j!== i) {
                isPrime = false;
            }
        }

        if(isPrime){
            console.log(i);
        }
    }
}


showPrimeNumbers(arguments[0] *1,arguments[1] *1);

// console.log(process.argv.slice(2));