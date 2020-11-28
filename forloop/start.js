




const looper = (howMany) =>{
    
    let prime = [];
    const checkPrime = (howMany) =>{
        for(let i = 2; i < howMany; i++){
            if(howMany % i == 0)
                return false
        }
        return true
    }

    for(let i = 2; i<=100; i++){
        const cehec = checkPrime(i)
        if(cehec === true){
            prime.push(i)
        }
    }

    
    let i = 1;
    while(i <= howMany){
        if(prime.includes(i) === false){
            if(i % 5 === 0 && i % 3 === 0) {
                console.log("Fizz Buzz")

            }else if(i % 5 === 0){

                console.log("Buzz");

            }else if(i % 3 === 0 ){

                console.log("Fizz");

            }else{
                console.log(i);
            }
        }else{
            console.log("prime")
        }

        i++
    }
    

    return checkPrime(howMany);

}

looper(100);