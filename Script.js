var menu = document.getElementById("startmenu")

var start = document.getElementById("startbutton")

var game = document.getElementById("game")

var contanor = document.getElementById("btncontanor")

var farm = document.getElementById("farm")

var passSect = document.getElementById("passSec")

var passw = document.getElementById("passworrd")

var passlink = document.getElementById("pass")

var lives = 15

var livesPara = document.getElementById("livesPara")

var winning = document.getElementById("win")

var losing = document.getElementById("lose")

game.style.display = "none"

winning.style.display = "none"

losing.style.display = "none"

start.addEventListener("click",()=>{

    livesPara.innerText = `lives: ${lives}`
    
    menu.style.display = "none"

    game.style.display = "block"

    spawnbuttons(40)

})
function spawnbuttons(count){


    for (var i = 0 ; i < count ; i++){
    
        var btn = document.createElement("button")

        btn.innerText = "dont click me pls"

        contanor.appendChild(btn)

    }


    var allBtns = document.querySelectorAll("#game button")

    var randomIndex = Math.floor(Math.random()*count)

console.log(randomIndex)

    var randonBTN = allBtns[randomIndex]

    randonBTN.classList.add("winner")

    allBtns.forEach(button=>{

        button.addEventListener("click",()=>{

            if(button.disabled){

                return

            }

            if(button.classList.contains("winner")){

                console.log("winner")

                game.style.display = "none"

                winning.style.display = "block"

            }else{

                button.style.backgroundColor = 'red'

                button.disabled = true

                lifechange()

            }

        })

    })
}

function lifechange (){

lives-- 

livesPara.innerText = `lives: ${lives}`

if(lives <= 0){

    console.log("lose")

    game.style.display = "none"

    losing.style.display = "block"

}

}

farm.addEventListener("submit",(e)=>{

e.preventDefault()

var input = passw.value;

game.style.display = "none"

if(input == "watermelon"){

winning.style.display = "block"

}else{

 losing.style.display = "block"

}

})