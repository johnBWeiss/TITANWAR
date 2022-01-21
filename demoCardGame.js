// localStorage.clear()

s



//TODO remove event listetenr if clicked, then put it back at the end, so wont be able to click a few times and drive it crazy
// use a function that geta agrument of true or false t know if it adds or removes event listener to all the cards
console.log(localStorage);
function highScores(list, standing) {
    console.log(standing);
    setTimeout(() => {

        document.querySelector(".winTitleHidden").classList.add(".winTitle")
        document.querySelector(".titanWar").remove()

        let userPlace = document.createElement("div")
        // tempi.src = "winner.gif"
        userPlace.classList.add("endScoreTitle")
        userPlace.innerText = `your score is number ${standing} on the all time list. congrats!`
        document.querySelector(".winTitleHidden").appendChild(userPlace)


        let wempi
        wempi = document.createElement("div")
        // tempi.src = "winner.gif"
        wempi.classList.add("winTitle")
        wempi.innerHTML = `High Scores`
        document.querySelector(".winTitleHidden").appendChild(wempi)



        let tempi
        for (let d = 0; d < list.length; d++) {
            tempi = document.createElement("div")
            // tempi.src = "winner.gif"
            tempi.classList.add("endScoreList")
            tempi.innerHTML = `${list[d].name}  <br> ${list[d].score}`
            // let pos =
            document.querySelector(".winTitleHidden").appendChild(tempi)

        }




        let playAgain = document.createElement("a")
        playAgain.setAttribute("href", "file:///C:/Users/Yoni/Dropbox/full%20stack%20beta/memory%20with%20effects/demoHTML.html")

        playAgain.innerText = "PLAY AGAIN";
        playAgain.classList.add("playAgain")
        document.querySelector(".header").appendChild(playAgain);
        // document.querySelector(".left").appendChild(playAgain);

    }, 2000);
}


function winGame() {
    new Audio("victory.wav").play()
    // getElementByName("h1").innerText = "victory!"
    clearInterval(count)
    clearInterval(keeper)

    setTimeout(() => {

        let highScoreList = {
            name: "yoni",
            score: 986
        }

        highScoreList.name = prompt("please enter your name")
        highScoreList.score = `${time + heroLife * 20 + score * 30}`
        new Audio("highScore.wav").play()
        let firstTime = false
        if (localStorage.highScoreList == undefined) {
            localStorage.setItem("highScoreList", JSON.stringify(highScoreList))
            console.log(highScoreList);
            firstTime = true
        }

        if (localStorage.highScoreList != undefined && firstTime == false) {

            let tempest = []
            let myParser = (localStorage.getItem("highScoreList"))


            myParser = JSON.parse(myParser)
            console.log(myParser);
            console.log(myParser.length);
            console.log(myParser.length);
            for (let z = 0; z < myParser.length; z++) {
                tempest.push(myParser[z])
            }
            tempest.push(highScoreList)

            let descendingList = tempest.sort(function (a, b) { return b.score - a.score });
            let standing = descendingList.findIndex(v => v.score == highScoreList.score)
            standing++ //&& v.score == highScoreList.score })
            //TODO

            localStorage.setItem("highScoreList", JSON.stringify(descendingList))
            highScores(descendingList, standing)
            setTimeout(() => {

                document.querySelector(".gameOver").remove()

            }, 2000);

        }




        let array = [...document.getElementsByClassName("cardPicked")]
        // console.log(array);
        for (let f = 0; f < array.length; f++) {
            array[f].classList.add("endGame")
            array[f].classList.remove("cardPicked")

        }


        document.querySelector(".points").remove()
        document.querySelector(".center").remove()
        document.querySelector(".countDown").remove()


        let gameOver = document.createElement("img")
        gameOver.src = "winner.gif"
        gameOver.classList.add("gameOver")
        document.querySelector(".titanWar").appendChild(gameOver)




    }, 2000)



}


let cardsFlipped = []
let cardsID = []
let imgArray = [{ img: "0.jpg" }, { img: "1.jpg" }, { img: "2.png" }, { img: "3.jpg" }, { img: "4.png" },
{ img: "5.jpg" }, { img: "6.jpg" }, { img: "8.png" },
{ img: "0.jpg" }, { img: "1.jpg" }, { img: "2.png" }, { img: "3.jpg" }, { img: "4.png" },
{ img: "5.jpg" }, { img: "6.jpg" }, { img: "8.png" }]

let titanEffects = ["titanHits.wav", "titanVoice3.wav", "titanVoice1.wav", "titanVoice2.wav", "titanVoice4.wav"]
let titanLoseEffects = ["", "hurt1", "hurt2", "hurt3", "hurt4", "hurt5"]
let titanWinEffects = ["loseLife2.wav", "attack1.wav", "attack2.wav", "attack3.wav", "attack4.wav"]
let score = 0
let heroLife = 7
let cardNumber = 16
let temp
let time = 999


setInterval(() => {

    document.querySelector(".villain").classList.toggle("villainAnimation")

}
    , 450)
// setInterval(() => document.querySelector(".left"))
let highScore = time + heroLife + score

let timer = document.createElement("div")
timer.innerText = `${time}`
timer.classList.add("countDown")
document.querySelector(".left").appendChild(timer)//formerly class grid
let count = setInterval(() => {
    time = time - 1
    timer.innerText = `${time}`
    // document.querySelector(".points").innerText = `score \n ${time + heroLife * 20 + score * 30}`

}
    , 1000)

let keeper = setInterval(() => {

    document.querySelector(".points").innerText = `score \n ${time + heroLife * 20 + score * 30}`

}
    , 1)

setTimeout(() => clearInterval(count, keeper), 1000000)

// setTimeout(() => clearInterval(keeper), 1000000)


let hourGlass = document.createElement("img")
hourGlass.src = "hourGlass.gif"
hourGlass.classList.add("hourGlass")
hourGlass.addEventListener("mouseover", () =>
    new Audio("hourGlass.wav").play()

)
document.querySelector(".left").appendChild(hourGlass)

let titanHits = document.createElement("div")
titanHits.classList.add("titanHits")
titanHits.innerText = `Titan Hits \n ${score}`
// titanHits.addEventListener("mouseover", () =>
//     new Audio("???.wav").play()
// )
document.querySelector(".left").appendChild(titanHits)//formerly lefs anchor


let hero = document.createElement("div")
hero.classList.add("leftSideHero")
hero.innerText = `Hero Life \n ${heroLife}`
document.querySelector(".left").appendChild(hero)


let points = document.createElement("div")
points.classList.add("points")
points.innerText = `score \n ${highScore}`
document.querySelector(".left").appendChild(points)


let titanWar = document.createElement("div")
let header = document.querySelector(".header")
titanWar.classList.add("titanWar")
let tmp = "TITAN" + "    " + "WAR"
titanWar.innerText = tmp
header.insertBefore(titanWar, header.firstChild);


function shuffle() {
    let ran = randomNum(0, 15);
    let randomArray = []
    randomArray.push(ran);
    for (let i = 0; i < 15; i++) {
        num = randomNum(0, 15)
        if (randomArray.includes(num)) {
            i--
            continue
        }
        else { randomArray.push(num) }

    }
    console.log(randomArray);
    return randomArray

}

function randomNum(min, max) {
    let temp = Math.floor(Math.random() * (max - min + 1) + min)
    return temp

}

let randomize = shuffle()
console.log(randomize);

// creating the grid of back cards-------------------------------------------------------------------------
for (let t = 0; t < cardNumber; t++) {
    let card = document.createElement("img")
    card.src = "arcaneRunes.jpg"
    // card.classList.add(t)
    card.classList.add("card")
    card.setAttribute("id", randomize[t])

    card.addEventListener("click", flipCard, true)
    document.querySelector(".center").appendChild(card)//formerly grid

}

//creating the villain  ----------------------------------------------------------------------
let i = 0

let villain = document.createElement("img");
villain.src = "villain.png"
villain.addEventListener("mouseover", () => {
    let effect = titanEffects[i]
    new Audio(effect).play()
    i += 1
    if (i > titanEffects.length) {
        i = 0
    }
}

)
villain.classList.add("villain")
document.querySelector(".right").appendChild(villain)//formerly right anchor


//creating the scoreboard

//funcionality   ----------------------------------------------------------------------

function success() {


    let time = 60;

    setTimeout(() => {
        document.querySelector(".villain").src = "win1.png"
    }, 60)
    setTimeout(() => {
        document.querySelector(".villain").src = "win2.png"
    }, 180)
    setTimeout(() => {
        document.querySelector(".villain").src = "win3.png"
    }, 300)
    setTimeout(() => {
        document.querySelector(".villain").src = "win2.png"
    }, 420)
    setTimeout(() => {
        document.querySelector(".villain").src = "win3.png"
    }, 540)
    setTimeout(() => {
        document.querySelector(".villain").src = "win2.png"
    }, 660)
    setTimeout(() => {
        document.querySelector(".villain").src = "win1.png"
        new Audio("success3.wav").play()
    }, 800)
    setTimeout(() => {
        document.querySelector(".villain").src = "win2.png"
    }, 920)
    setTimeout(() => {
        document.querySelector(".villain").src = "win3.png"
    }, 1060)
    setTimeout(() => {
        document.querySelector(".villain").src = "win2.png"
    }, 1200)


    for (let e = 0; e < 16; e++) {
        time += 60
        setTimeout(() => {

            document.querySelector(".center").classList.toggle("gridShakeWin");

            document.querySelector(".titanHits").classList.toggle("titanHitsShake")
        }
            , time)
    }
    setTimeout(() => {
        document.querySelector(".villain").src = "villain.png";

    }
        , 1200)
    if (score > 0) {
        winGame()
    }
}

function villainBigger() {

    setTimeout(() =>

        document.querySelector(".villain").classList.toggle("villainBig1")
        , 40)
    setTimeout(() =>

        document.querySelector(".villain").classList.toggle("villainBig2")
        , 100)
    setTimeout(() =>

        document.querySelector(".villain").classList.toggle("villainBig3"), 150)

    setTimeout(() =>

        document.querySelector(".villain").classList.toggle("villainBig4"), 200)

    setTimeout(() =>

        document.querySelector(".villain").classList.toggle("villainBig1")
        , 1000)
    setTimeout(() =>

        document.querySelector(".villain").classList.toggle("villainBig2")
        , 1060)
    setTimeout(() =>

        document.querySelector(".villain").classList.toggle("villainBig3"), 1120)
    setTimeout(() =>

        document.querySelector(".villain").classList.toggle("villainBig4"), 1160)

}

function villainHurt() {

}

function loseLife() {
    let time = 0
    if (heroLife == 0) { loseGame() }
    villainBigger()
    setTimeout(() => {
        document.querySelector(".villain").src = "lose.png"
        if (heroLife > 6 || heroLife < 2 || heroLife == 4) { new Audio("loseLife.wav").play() }

    }

        , 250)
    for (let e = 0; e < 16; e++) {
        time += 60
        setTimeout(() => {
            document.querySelector(".center").classList.toggle("gridShake")
                ;
            document.querySelector(".leftSideHero").classList.toggle("heroShake")

        }
            , time)
    }
    setTimeout(() => {
        document.querySelector(".villain").src = "villain.png";
    }
        , 1200)
}


function loseGame() {

    document.querySelector(".points").remove()
    document.querySelector(".center").remove()
    document.querySelector(".countDown").remove()
    clearInterval(count)
    clearInterval(keeper)


    let gameOver = document.createElement("img")

    new Audio("lose1.wav.wav").play()
    setTimeout(() => {
        new Audio("lose2.wav").play()

    }, 50);
    console.log(gameOver);
    gameOver.src = "gameOver2.gif"
    gameOver.classList.add("gameOver")
    document.querySelector(".titanWar").appendChild(gameOver)

    let playAgain = document.createElement("a")
    playAgain.setAttribute("href", "file:///C:/Users/Yoni/Dropbox/full%20stack%20beta/memory%20with%20effects/demoHTML.html")

    playAgain.innerText = "PLAY AGAIN";
    playAgain.classList.add("losePlayAgain")
    document.querySelector(".titanWar").appendChild(playAgain);

}

function flipCard() {

    {
        new Audio("flipCard.wav").play()

        this.classList.remove("wrong")
        if (cardsFlipped.length < 2) {
            this.classList.add("cardPicked");
            // this.classList.remove("card")
            let temp = this.id;
            setTimeout(() => {
                this.src = imgArray[temp].img

            }, 150);

            cardsFlipped.push(imgArray[temp].img)
            cardsID.push(this.id)

        }

        if (cardsFlipped.length === 2) { checkMatch() }
    }
}

function checkMatch() {
    let temp
    let r
    let x = titanHits

    if (cardsID[0] === cardsID[1]) {// redirect this to function, this is duplicate code
        // new Audio("flipCard.wav").play()
        // new Audio("loseLife2.wav").play()
        let effect = titanWinEffects[i]
        new Audio(effect).play()
        i += 1
        if (i > titanEffects.length) {
            i = 0
        }

        loseLife()
        setTimeout(() => {
            document.getElementById(cardsID[0]).classList.toggle("cardPicked")
            document.getElementById(cardsID[0]).classList.toggle("wrong")

            heroLife -= 1

            document.querySelector(".leftSideHero").innerHTML = `Hero Life <br> ${heroLife}`

        }, 500);


        setTimeout(() => {

            document.getElementById(cardsID[0]).src = "arcaneRunes.jpg"

            cardsID = []
            cardsFlipped = []
            document.querySelector(".leftSideHero").innerHTML = `Hero Life <br> ${heroLife}`

        }, 700);
    }
    if (cardsID[0] !== cardsID[1]) {

        if (cardsFlipped[0] === cardsFlipped[1]) {

            setTimeout(() => {
                let temp = document.getElementById(cardsID[0])
                let lemp = document.getElementById(cardsID[1])
                temp.removeEventListener("click", flipCard, true)

                temp.src = "picked.png"
                temp.classList.remove("card")
                console.log(temp);
                lemp.src = "picked.png"
                lemp.classList.remove("card")
                lemp.removeEventListener("click", flipCard, true)
                cardsID = []
                cardsFlipped = []
            }
                , 1200)


            score += 1
            new Audio("success1.wav").play()
            new Audio("success2.wav").play()
            new Audio("success4.wav").play()
            document.querySelector(".titanHits").innerHTML = `Titan Hits <br> ${score}`
            success()
        }
        if (cardsFlipped[0] !== cardsFlipped[1]) {
            new Audio("loseLife2.wav").play()
            effect = titanWinEffects[i]
            new Audio(effect).play()
            i += 1
            if (i > titanEffects.length) {
                i = 0
            }



            loseLife()
            setTimeout(() => {
                document.getElementById(cardsID[0]).classList.toggle("cardPicked")
                document.getElementById(cardsID[0]).classList.toggle("wrong")
                document.getElementById(cardsID[1]).classList.toggle("cardPicked")
                document.getElementById(cardsID[1]).classList.toggle("wrong")
                heroLife -= 1

                document.querySelector(".leftSideHero").innerHTML = `Hero Life <br> ${heroLife}`


            }, 1000);

            setTimeout(() => {

                document.getElementById(cardsID[0]).src = "arcaneRunes.jpg"

                document.getElementById(cardsID[1]).src = "arcaneRunes.jpg"
                cardsID = []
                cardsFlipped = []

            }, 1200);

        }
    }


}

