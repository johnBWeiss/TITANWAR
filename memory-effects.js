
// window.onload = () =>

//     new Audio("background.mp3").play()



let time = 1000
let timer = document.createElement("div")
timer.innerText = `${time}`
timer.classList.add("countDown")
document.querySelector(".grid").appendChild(timer)

let count = setInterval(() => {
    time = time - 1
    timer.innerText = `${time}`
}

    , 1000)

setTimeout(() => clearInterval(count), 1000000)

let cardsFlipped = []
let cardsID = []
let imgArray = [{ img: "0.jpg" }, { img: "1.jpg" }, { img: "2.png" }, { img: "3.jpg" }, { img: "4.png" },
{ img: "5.jpg" }, { img: "6.jpg" }, { img: "8.png" },
{ img: "0.jpg" }, { img: "1.jpg" }, { img: "2.png" }, { img: "3.jpg" }, { img: "4.png" },
{ img: "5.jpg" }, { img: "6.jpg" }, { img: "8.png" }]

let titanEffects = ["titanHits.wav", "titanVoice3.wav", "titanVoice1.wav", "titanVoice2.wav", "titanVoice4.wav"]

let score = 0
let heroLife = 4
let cardNumber = 16
let temp


// creating the grid of back cards-------------------------------------------------------------------------
for (let t = 0; t < cardNumber; t++) {
    let card = document.createElement("img")
    card.src = "arcaneRunes.jpg"
    card.classList.add(t)
    card.classList.add("card")

    card.setAttribute("id", t)
    // card.addEventListener("mouseover", () => new Audio("cardHover.wav").play()
    // )
    card.addEventListener("click", flipCard)
    document.querySelector(".grid").appendChild(card)

}

//creating the villain  ----------------------------------------------------------------------
let i = 0
let rightSide = document.createElement("div")
rightSide.classList.add("rightSide")
document.querySelector(".rightAnchor").appendChild(rightSide)
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
document.querySelector(".rightAnchor").appendChild(villain)


//creating the scoreboard

let leftSide = document.createElement("div")
leftSide.classList.add("leftSideText")
leftSide.innerText = `Titan Hits \n ${score}`
leftSide.addEventListener("mouseover", () =>

    new Audio("???.wav").play()

)

document.querySelector(".leftAnchor").appendChild(leftSide)


let hero = document.createElement("div")
hero.classList.add("leftSideHero")
hero.innerText = `Hero Life \n ${heroLife}`
document.querySelector(".leftAnchor").appendChild(hero)

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

            document.querySelector(".grid").classList.toggle("gridShakeWin");

            document.querySelector(".leftSideText").classList.toggle("titanShake")
        }
            , time)
    }
    setTimeout(() => {
        document.querySelector(".villain").src = "villain.png";

    }
        , 1200)
    if (score > 7) {
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
        new Audio("loseLife.wav").play()

    }

        , 250)
    for (let e = 0; e < 16; e++) {
        time += 60
        setTimeout(() => {
            document.querySelector(".grid").classList.toggle("gridShake")
                ;
            document.querySelector(".leftSideHero").classList.toggle("heroShake")
            // document.querySelector(".leftSideHero").classList.toggle("heroShake2")
            // setTimeout(() => {
            // document.querySelector(".grid").classList.toggle("gridShake")
            //     ;
            // document.querySelector(".leftSideHero").classList.toggle("heroShake")
            // document.querySelector(".leftSideHero").classList.toggle("heroShake2")


            // }
            //     , (200))

        }
            , time)
    }
    setTimeout(() => {
        document.querySelector(".villain").src = "villain.png";
    }
        , 1200)
}

function winGame() {
    new Audio("victory.wav").play()
    // getElementByName("h1").innerText = "victory!"
}

function loseGame() {

}


function flipCard() {
    new Audio("flipCard.wav").play()

    this.classList.remove("wrong")
    if (cardsFlipped.length < 2) {
        this.classList.add("cardPicked");
        // this.classList.remove("card")
        let temp = this.classList[0];


        setTimeout(() => {
            this.src = imgArray[temp].img

        }, 150);

        cardsFlipped.push(imgArray[temp].img)
        cardsID.push(this.id)

    }

    if (cardsFlipped.length === 2) { checkMatch() }
}

function checkMatch() {
    let temp
    let r

    if (cardsID[0] === cardsID[1]) {// redirect this to function, this is duplicate code
        // new Audio("flipCard.wav").play()
        new Audio("loseLife2.wav").play()

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




        if (cardsFlipped[0] === cardsFlipped[1] && cardsID[0] !== cardsID[1]) {
            cardsID = []
            cardsFlipped = []
            score += 1
            new Audio("success1.wav").play()
            new Audio("success2.wav").play()
            new Audio("success4.wav").play()

            document.querySelector(".leftSideText").innerHTML = `Titan Hits <br> ${score}`
            success()
        }
        if (cardsFlipped[0] !== cardsFlipped[1]) {
            new Audio("loseLife2.wav").play()




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

