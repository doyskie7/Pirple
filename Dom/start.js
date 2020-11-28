/**
 * Please copy and paste this code at
 * https://eveguel.herokuapp.com/
 * It's my online portfolio, it's not updated, will update soon if I have some time
 */

let OnloadWindow = () => {
    console.log("Here are the rectangle IDs")
    for(greetings in colors){
        console.log(colors[greetings])
    }
}
var titleH1 = "Keeping the skills fresh!"
var getTitle = document.querySelector("head > title");
getTitle.innerText = titleH1

var writehere = document.querySelector("#page-top > div.container-fluid.p-0");
writehere.innerHTML =  "<h1>"+titleH1+"</h1><br><h2>This is a simple assignment which helps me to improve everyday with javascript, Thank you pirple!</h2><div id='rectangleWrapper'></div>"
var createRectangle = document.getElementById("rectangleWrapper");

createRectangle.style.paddingTop = "50px"
createRectangle.style.paddingLeft = "50px"
createRectangle.style.paddingRight = "50px"
createRectangle.style.paddingBottom = "0px"

var Thetable = createRectangle.innerHTML = "<table><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>"

var giveClass = document.getElementsByTagName("td")
for(var i in giveClass){
    giveClass[i].classList = "rectangle uniqueID"+[i]
}

var colors = ["#0488FD","#0466FD","#043CFD","#0404FD","#7104FD","#B504FD","#FD04F6","#FD04B2","#FF0059","#FF0004"]

var DesignRectagle = document.querySelectorAll(".rectangle")
var indicator = 0;
for(var getRecByOne of DesignRectagle){
    getRecByOne.style.width = "200px"
    getRecByOne.style.height = "500px"
    getRecByOne.style.border = "1px solid black"
    getRecByOne.style.color = "white" 
    getRecByOne.style.paddingTop = "400px"
    getRecByOne.style.backgroundColor = colors[indicator]
    getRecByOne.innerText = colors[indicator]
    indicator += 1;
}


var getFooter = document.querySelector("#page-top > div:nth-child(9) > footer > center > h3 > i")

document.querySelector("#sideNav > a > span.d-none.d-lg-block > img").src = "https://external-preview.redd.it/TqZIETcrznYHd94X1gYci8nExqO7oqojt_L4ISeqDiE.jpg?auto=webp&s=a92f5a9dc059f6206ece03cf1b679a9c7ea562cd"

getFooter.innerText = "Transformed by javascript";


OnloadWindow();