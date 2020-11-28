
const FindTheAlien = (Name, Age, Gender) =>{

    const CheckNameIfValid  = (Name) =>{
        if(typeof Name === "string"){
            return true
        }else{
            return false
        }
    }

    const CheckIfHuman = (Name, Age, Gender)=>{
        if(CheckNameIfValid(Name) === true){
            switch(Gender){
                case 'Men':
                        return 'Mortal!'
                break;
                default:
                    return 'Alien!!!!!!'
                break;
            }
        }else{
            return "Name is not valid"
        }
    }

    return CheckIfHuman(Name, Age, Gender);
}

console.log(FindTheAlien("Socrates", 109, "Men"))