


/**
 *  Hoisting is delaced after being used, it's like you use the varible on the top of your code and declare it at the bottom part, please check the sample below
 * 
 *  var 
 *  Is a global variable, where you can access, or override the data, 
 * 
 *  let 
 *  Is stricter than var, you can only access or used the variable inside the block of your code,
 * 
 *  const
 *  Cannot be override or change the data, but we can modify what's inside the data , 
 *  like the for example below, we can override the object name since it is inside of the const variable and it is not the const variable itself
 * 
 */


function VarSample(){
    //var example
    var Name = "Eveguel"
    Name = "Steve"
    console.log(Name)

    //hoisting example
    Age = 23;
    var Age
    console.log(Age);
}
//VarSample();


function LetSample(){
    let IsTrue = true   // this variable is inside the function block, which means we can still use this inside of the if else block
    if(IsTrue){
        IsTrue = false
        console.log(IsTrue); // we can access the variable or override since it is still inside of function block

        let Learner = "Are you?" // this is available only inside if else block
    }
}
//LetSample();


function ConstSample(){
    const CrucialData = {
        Name: "Eveguel",
        Age: 23,
        citizenship: "Filipino"
    }

    /**
    * CrucialData = [1,2,3,4,5] // vannot be override the variable or reassign
    */

    CrucialData.Name = "Mark" // we can modify the data insde of the variable since it is not declare as const but is an object
    

    console.log(CrucialData);
}

//ConstSample();

