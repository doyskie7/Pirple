
const employee = [
    {name:"mark", age:23},
    {name:"dave", age:33},
    {name:"john", age:43}
]



const check = employee.map((user)=>{
    return user.name;
})

console.log(check);





var numbers = [1,2,3,4,5,6,7,8,9,10]


const hack = numbers.filter((numb)=>{
    return numb % 2 === 0
})

console.log(hack);