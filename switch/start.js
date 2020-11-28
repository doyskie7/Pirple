
const timeAdder = (ValueOne, LabelOne, ValueTwo, LabelTwo) =>{
    
    const CheckIntegers = (ValueOne, LabelOne, ValueTwo, LabelTwo) =>{
        if(ValueOne >= 0 && ValueTwo >= 0){
            return CheckLabels(LabelOne, LabelTwo)
        }else{
            return "invalid format MUST BE (int,string,int,string)"
        }
    }

    const CheckLabels = (LabelOne, LabelTwo) =>{
        if(typeof LabelOne === "string" && typeof LabelTwo === "string"){
            return CheckPlural(ValueOne, LabelOne, ValueTwo, LabelTwo)
        }else{
            return "invalid format MUST BE (int,string,int,string)"
        }
    }

    const CheckPlural = (ValueOne, LabelOne, ValueTwo, LabelTwo) =>{

        let FirstNum;
        let SecondNum;

        switch(LabelOne){
            case 'second':
                if(ValueOne === 0 || ValueOne === 1){
                    FirstNum = ValueOne;
                }else{
                    return LabelOne + " is singular while " + ValueOne + " is not zero or more than 1, cannot be executed (Check First Value)"
                }
            break;

            case 'seconds':
                if(ValueOne > 1){
                    FirstNum = ValueOne;
                }else{
                    return LabelOne + " is plural while value lower than 1, cannot be executed (Check First Value)"
                }
            break;

            case 'minute':
                if(ValueOne === 0 || ValueOne === 1){
                    FirstNum = ValueOne  * 60;
                }else{
                    return LabelOne + " is singular while " + ValueOne + " is not zero or more than 1, cannot be executed (Check First Value)"
                }
            break;

            case 'minutes':
                if(ValueOne > 1){
                    FirstNum = ValueOne  * 60;
                }else{
                    return LabelOne + " is plural while value lower than 1, cannot be executed (Check First Value)"
                }
            break;

            case 'hour':
                if(ValueOne === 0 || ValueOne === 1){
                    FirstNum = ValueOne  * 3600;
                }else{
                    return LabelOne + " is singular while " + ValueOne + " is not zero or more than 1, cannot be executed (Check First Value)"
                }
            break;
            
            case 'hours':
                if(ValueOne > 1){
                    FirstNum = ValueOne * 3600;
                }else{
                    return LabelOne + " is plural while value lower than 1, cannot be executed (Check First Value)"
                }
            break;

            case 'day':
                if(ValueOne === 0 || ValueOne === 1){
                    FirstNum = ValueOne  * 86400;
                }else{
                    return LabelOne + " is singular while " + ValueOne + " is not zero or more than 1, cannot be executed (Check First Value)"
                }
            break;
            
            case 'days':
                if(ValueOne > 1){
                    FirstNum = ValueOne * 86400;
                }else{
                    return LabelOne + " is plural while value lower than 1, cannot be executed (Check First Value)"
                }
            break;

            default:
                return "Invalid Label for first value (Check First Value)"
        }
        
        switch(LabelTwo){
            case 'second':
                if(ValueTwo == 0 || ValueTwo === 1){
                    SecondNum = ValueTwo;
                }else{
                    return LabelTwo + " is singular while " + ValueTwo + " is not zero or more than 1, cannot be executed (Check Second Value)"
                }
            break;

            case 'seconds':
                if(ValueTwo > 1){
                    SecondNum = ValueTwo;
                }else{
                    return LabelTwo + " is plural while value lower than 1, cannot be executed (Check Second Value)"
                }
            break;

            case 'minute':
                if(ValueTwo == 0 || ValueTwo === 1){
                    SecondNum = ValueTwo * 60;
                }else{
                    return LabelTwo + " is singular while " + ValueTwo + " is not zero or more than 1, cannot be executed (Check Second Value)"
                }
            break;

            case 'minutes':
                if(ValueTwo > 1){
                    SecondNum = ValueTwo * 60;
                }else{
                    return LabelTwo + " is plural while value lower than 1, cannot be executed (Check Second Value)"
                }
            break;

            case 'hour':
                if(ValueTwo == 0 || ValueTwo === 1){
                    SecondNum = ValueTwo * 3600;
                }else{
                    return LabelTwo + " is singular while " + ValueTwo + " is not zero or more than 1, cannot be executed (Check Second Value)"
                }
            break;
            
            case 'hours':
                if(ValueTwo > 1){
                    SecondNum = ValueTwo * 3600;
                }else{
                    return LabelTwo + " is plural while value lower than 1, cannot be executed (Check Second Value)"
                }
            break;

            case 'day':
                if(ValueTwo === 0 || ValueTwo === 1){
                    SecondNum = ValueTwo  * 86400;
                }else{
                    return LabelTwo + " is singular while " + ValueTwo + " is not zero or more than 1, cannot be executed (Check Second Value)"
                }
            break;
            
            case 'days':
                if(ValueTwo > 1){
                    SecondNum = ValueTwo * 86400;
                }else{
                    return LabelTwo + " is plural while value lower than 1, cannot be executed (Check First Value)"
                }
            break;

            default:
                return "Invalid Label for Second value"
        }

        IsEqualLabel = false;
        let check1 = LabelOne.match(/\S/g);
        let check2 = LabelTwo.match(/\S/g);
        let countCheck = 0;
        for(var First3Letters in check1){
            if(check1[First3Letters] === check2[First3Letters]){
                countCheck += parseInt(First3Letters);
                if(countCheck === 3){
                    IsEqualLabel = true;
                    break;
                }
            }else{
                countCheck = 0;
            }
        }

        if(IsEqualLabel){
            return AddSameLabel(ValueOne, LabelOne, ValueTwo, LabelTwo)
        }else{

            var value3 = FirstNum + SecondNum ;
            var label3;

            if(value3 < 60){
                label3 = "second"
                return ([value3,label3])

            }else if(value3 > 60){

                label3 = "seconds"
                return ([value3,label3])

            }else if (value3 > 3600){

                label3 = "hours"
                return ([value3,label3])

            }else if (value3 > 86400){

                label3 = "days"
                return ([value3,label3])
            }
        }
    
    }
    
    const AddSameLabel = (ValueOne, LabelOne, ValueTwo, LabelTwo) =>{

        value3 = ValueOne + ValueTwo;
        isplural = LabelOne.endsWith("s");
        if(isplural){
            LabelOne
        }else{
            LabelOne = LabelOne + "s"
            
        }

        if(value3 % 24 === 0){
            LabelOne = "day"
            value3 = value3 / 24
            if(value3 > 1){
                LabelOne = "days"
            }
        }
        return ([value3,LabelOne])
    }
          
    return CheckIntegers(ValueOne, LabelOne, ValueTwo, LabelTwo);
}


console.log(timeAdder(1,"minute",240,"seconds"));