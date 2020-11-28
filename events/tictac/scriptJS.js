var CreateTable = document.getElementsByTagName("td");
for(var i in CreateTable){
    CreateTable[i].classList = "Box "+[i]
}
var getTable = document.querySelectorAll(".Box")

for(var x of getTable){
    x.style.border = "1px solid black"
    x.style.width = "200px"
    x.style.height = "200px"
}

document.getElementById("box1").addEventListener("click", Clicker);
document.getElementById("box2").addEventListener("click", Clicker);
document.getElementById("box3").addEventListener("click", Clicker);
document.getElementById("box4").addEventListener("click", Clicker);
document.getElementById("box5").addEventListener("click", Clicker);
document.getElementById("box6").addEventListener("click", Clicker);
document.getElementById("box7").addEventListener("click", Clicker);
document.getElementById("box8").addEventListener("click", Clicker);
document.getElementById("box9").addEventListener("click", Clicker);

var clicks = 0;
function Clicker(event){ 
    clicks += 1;
    if(clicks % 2 === 0){
        try {
            document.querySelector("body > h1").innerText = "X turn"
            let O = document.getElementById(event.srcElement.id).innerHTML='<p class="MarkO">O</p>';
            if(WinChceker(event.srcElement.id,O)){
                document.querySelector("body > h1").innerText = "Refreshing Game, Please wait......"
                alert("O has won!");
                setTimeout(()=>{
                    location.reload();
                },2000)
            }else{
                if(CatChecker()) {alert("Cats game!"); location.reload()};
            }
        } catch (error) {
            document.querySelector("body > h1").innerText = "O turn"
            console.log("already supplied");
            clicks -= 1
        }
    }else{
        try {
            document.querySelector("body > h1").innerText = "O turn"
            let X = document.getElementById(event.srcElement.id).innerHTML='<p class="MarkX">X</p>';
            if(WinChceker(event.srcElement.id,X)){
                alert("X has won!");
                document.querySelector("body > h1").innerText = "Refreshing Game, Please wait......"
                setTimeout(()=>{
                    location.reload();
                },2000)
            }else{
                if(CatChecker()) {alert("Cats game!"); location.reload()};
            }
        } catch (error) {
            document.querySelector("body > h1").innerText = "X turn"
            console.log("already supplied");
            clicks -= 1
        }
    }
   
}
function CatChecker(){
    var all = [
        document.getElementById("box1").innerHTML,
        document.getElementById("box2").innerHTML,
        document.getElementById("box3").innerHTML,
        document.getElementById("box4").innerHTML,
        document.getElementById("box5").innerHTML,
        document.getElementById("box6").innerHTML,
        document.getElementById("box7").innerHTML,
        document.getElementById("box8").innerHTML,
        document.getElementById("box9").innerHTML,
    ]
    var full = 0;
    for(var i in all){
        if(all[i].includes('<p class="MarkX">X</p>') || all[i].includes('<p class="MarkO">O</p>')){
            full += 1
        }
    }
    console.log(full)
    if(full === 9){
        return true
    }
}

function WinChceker(id,Mark){
        let Box1Check = document.getElementById("box1").innerHTML
        let Box2Check = document.getElementById("box2").innerHTML
        let Box3Check = document.getElementById("box3").innerHTML
        
        let Box4Check = document.getElementById("box4").innerHTML
        let Box5Check = document.getElementById("box5").innerHTML
        let Box6Check = document.getElementById("box6").innerHTML

        let Box7Check = document.getElementById("box7").innerHTML
        let Box8Check = document.getElementById("box8").innerHTML
        let Box9Check = document.getElementById("box9").innerHTML
    switch(id) {
        case 'box1':
            if(Box2Check.includes(Mark) === true){
                        if(Box3Check.includes(Mark) === true) return true;
                    return false
            } 
            if (Box5Check.includes(Mark) === true){
                        if(Box9Check.includes(Mark) === true) return true;
                    return false
            } 
            if (Box4Check.includes(Mark) === true){
                        if(Box7Check.includes(Mark) === true) return true;
                    return false
            }
        break;
        case 'box2':
            if(Box1Check.includes(Mark) === true){
                        if(Box3Check.includes(Mark) === true) return true;
                    return false
            } 
            if (Box5Check.includes(Mark) === true){
                        if(Box8Check.includes(Mark) === true) return true;
                    return false
            }
        break;
        case 'box3':
            if(Box2Check.includes(Mark) === true){
                        if(Box1Check.includes(Mark) === true) return true;
                    return false
            } 
            if(Box5Check.includes(Mark) === true){
                        if(Box7Check.includes(Mark) === true) return true;
                    return false
            } 
            if(Box6Check.includes(Mark) === true){
                        if(Box9Check.includes(Mark) === true) return true;
                    return false
            }
        break;
        case 'box4':
            if(Box1Check.includes(Mark) === true){
                        if(Box7Check.includes(Mark) === true) return true;
                    return false
            } 
            if(Box5Check.includes(Mark) === true){
                        if(Box6Check.includes(Mark) === true) return true;
                    return false
            } 
        break;
        case 'box5':
            if(Box1Check.includes(Mark) === true){
                        if(Box9Check.includes(Mark) === true) return true;
                    return false
            } 
            if(Box2Check.includes(Mark) === true){
                        if(Box8Check.includes(Mark) === true) return true;
                    return false
            } 
            if(Box3Check.includes(Mark) === true){
                        if(Box7Check.includes(Mark) === true) return true;
                    return false
            }
            if(Box6Check.includes(Mark) === true){
                        if(Box4Check.includes(Mark) === true) return true;
                    return false
            }
        break;
        case 'box6':
            if(Box3Check.includes(Mark) === true){
                        if(Box9Check.includes(Mark) === true) return true;
                    return false
            } 
            if(Box5Check.includes(Mark) === true){
                        if(Box4Check.includes(Mark) === true) return true;
                    return false
            } 
        break;
        case 'box7':
            if(Box4Check.includes(Mark) === true){
                        if(Box1Check.includes(Mark) === true) return true;
                    return false
            } 
            if(Box5Check.includes(Mark) === true){
                        if(Box3Check.includes(Mark) === true) return true;
                    return false
            }
            if(Box8Check.includes(Mark) === true){
                        if(Box9Check.includes(Mark) === true) return true;
                    return false
            } 
        break;
        case 'box8':
            if(Box7Check.includes(Mark) === true){
                        if(Box9Check.includes(Mark) === true) return true;
                    return false
            } 
            if(Box5Check.includes(Mark) === true){
                        if(Box2Check.includes(Mark) === true) return true;
                    return false
            } 
        break;
        case 'box9':
            if(Box8Check.includes(Mark) === true){
                        if(Box7Check.includes(Mark) === true) return true;
                    return false
            } 
            if(Box5Check.includes(Mark) === true){
                        if(Box1Check.includes(Mark) === true) return true;
                    return false
            } 
            if(Box6Check.includes(Mark) === true){
                        if(Box3Check.includes(Mark) === true) return true;
                    return false
            } 
        break;
    }
}