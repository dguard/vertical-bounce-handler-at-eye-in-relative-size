/*
* transaction model
* keep status per each sticked item (3 memory slots ROM)
* keep zIndex per each sticked item (another 3 memory slots RAM)
* keep bouncedStatus per each sticked item (rest 3 memory slots RAM)
*/
let sticked = document.createElement('div')
sticked.classList.add('sticked')
document.querySelector('.sticked-album').querySelector('.statement-area-at-front').appendChild(sticked)

let anotherSticked = document.createElement('div')
anotherSticked.classList.add('sticked')
// document.querySelector('.sticked-album').querySelector('.statement-area-at-front').appendChild(anotherSticked)

// keep prototype
let firstCardStatus = 'opened'
let secondCardStatus = undefined
let thirdCardStatus = undefined

let firstCardZIndex = 4
let secondCardZIndex = 2
let thirdCardZIndex = 1

// keep bounced
let firstCardBouncedStatus = 'opened'
let secondCardBouncedStatus = undefined
let thirdCardBouncedStatus = undefined

document.querySelector('.sticked-album').querySelector('.sticked:nth-child(2)').onclick = function () {
    document.querySelector('.sticked-album').querySelector('.sticked:nth-child(2)').style.animation = 'toggleCard 1s'

    if(thirdCardBouncedStatus === 'opened' && firstCardBouncedStatus !== "opened") {
        setTimeout(() => {
            secondCardZIndex = thirdCardZIndex * 2

            document.querySelector('.sticked-album').querySelector('.sticked:nth-child(2)').style.zIndex = secondCardZIndex
        }, 500)
    }
    if(thirdCardBouncedStatus === 'opened' && firstCardBouncedStatus === 'opened') {
        setTimeout(() => {
            secondCardZIndex = thirdCardZIndex * 2

            document.querySelector('.sticked-album').querySelector('.sticked:nth-child(2)').style.zIndex = secondCardZIndex
        }, 500)
    }
    if(thirdCardBouncedStatus !== 'opened' && firstCardBouncedStatus === 'opened') {
        setTimeout(() => {
            secondCardZIndex = firstCardZIndex * 2

            document.querySelector('.sticked-album').querySelector('.sticked:nth-child(2)').style.zIndex = secondCardZIndex
        }, 500)
    }
    secondCardBouncedStatus = 'opened'

    setTimeout(() => {
        document.querySelector('.sticked-album').querySelector('.sticked:nth-child(2)').style.zIndex = secondCardZIndex

        document.querySelector('.sticked-album').querySelector('.sticked:nth-child(2)').style.animation = ''

        // secondCardStatus = 'opened'
        // thirdCardStatus = undefined
        // firstCardStatus = undefined

        secondCardBouncedStatus = 'opened'
        thirdCardBouncedStatus = undefined
        firstCardBouncedStatus = undefined
    }, 1000)

}
document.querySelector('.sticked-album').querySelector('.sticked:nth-child(1)').onclick = function () {
    document.querySelector('.sticked-album').querySelector('.sticked:nth-child(1)').style.animation = 'toggleCard2ndCard 1s'

    setTimeout(() => {
        firstCardZIndex = secondCardZIndex * 2

        document.querySelector('.sticked-album').querySelector('.sticked:nth-child(1)').style.zIndex = firstCardZIndex
    }, 500)

    firstCardBouncedStatus = 'opened'

    setTimeout(() => {
        document.querySelector('.sticked-album').querySelector('.sticked:nth-child(1)').style.zIndex = firstCardZIndex

        document.querySelector('.sticked-album').querySelector('.sticked:nth-child(1)').style.animation = ''

        // secondCardStatus = undefined
        // firstCardStatus = 'opened'

        secondCardBouncedStatus = undefined
        firstCardBouncedStatus = 'opened'
    }, 1000)
}


document.querySelector('.sticked-album').querySelector('.sticked:nth-child(3)').onclick = function() {

    document.querySelector('.sticked-album').querySelector('.sticked:nth-child(3)').style.animation = 'toggleCard 1s'

    setTimeout(() => {
        thirdCardZIndex = secondCardZIndex * 2

        document.querySelector('.sticked-album').querySelector('.sticked:nth-child(3)').style.zIndex = thirdCardZIndex
    }, 500)

    thirdCardBouncedStatus = 'opened'

    setTimeout(() => {
        document.querySelector('.sticked-album').querySelector('.sticked:nth-child(3)').style.zIndex = thirdCardZIndex

        document.querySelector('.sticked-album').querySelector('.sticked:nth-child(3)').style.animation = ''

        // secondCardStatus = undefined
        // thirdCardStatus = 'opened'

        secondCardBouncedStatus = undefined
        thirdCardBouncedStatus = 'opened'
    }, 1000)
}