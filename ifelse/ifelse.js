

function DataConstructor(Name, Age, Gender){
    this.Name = Name;
    this.Age = Age;
    this.Gender = Gender;
}

const Check = []
const Socrates = new DataConstructor("Socrates", 109, "Men")
const Mark = new DataConstructor("Mark Zuckerberg", 36, "Men")
const Eveguel = new DataConstructor("Eveguel Arocha", 23, "Men")

Check.push(Mark,Eveguel,Socrates)

for(var i in Check){

    let MortalCheck = "";
    if(Check[i].Gender === "Men" && Check[i].Name !== "Socrates"){
        
        MortalCheck = "All "+ Check[i].Gender + " are mortal"
        console.log(MortalCheck);

    }else if(Check[i].Gender === "Men" && Check[i].Name === "Socrates"){

        console.log(Check[i].Name + " is a " + Check[i].Gender + " \ntherefore he is mortal" );

    }
}


function CakeConstructor(Color, Flavor){
    this.Color = Color;
    this.Flavor = Flavor;
}

const Cake = new CakeConstructor("Brown","Vanilla");

    if(Cake.Flavor === "Vanilla" || Cake.Flavor === "Chocolate"){

        console.log("This cake is either vanilla or chocolate.");

    }
    if (Cake.Flavor !== "Chocolate"){
        console.log("This cake is not chocolate.");
        console.log("Therefore, This cake is "+ Cake.Flavor);

    }