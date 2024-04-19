
document.addEventListener('DOMContentLoaded', () => {
    let keyValue = document.getElementById('keyValue')
    // sounds from html
    let boom = document.getElementById('boom')
    let clap = document.getElementById('clap')
    let hihat = document.getElementById('hihat')
    let kick = document.getElementById('kick')
    let openhat = document.getElementById('openhat')
    let ride = document.getElementById('ride')
    let snare = document.getElementById('snare')
    let tink = document.getElementById('tink')
    let tom = document.getElementById('tom')
    //animal sounds from html
    let giraffe = document.getElementById('giraffe')
    let lion = document.getElementById('lion')
    let elephant = document.getElementById('elephant')


    // add event listener to animal images
    gir.addEventListener('click', () => {
        giraffe.play()
        //swap to mouth open image
        gir.src = "./images/gm.jpg"
        //delay return to original image
        setTimeout(() => {
            gir.src = "./images/g.jpg"
        }, 1800)
    })
    ele.addEventListener('click', () => {
        elephant.play()
        ele.src = "./images/em.jpg"
        setTimeout(() => {
            ele.src = "./images/e.jpg"
        }, 1800)
    })
    lio.addEventListener('click', () => {
        lion.play()
        lio.src = "./images/lm.jpg"
        setTimeout(() => {
            lio.src = "./images/l.jpg"
        }, 1800)
    })

    //buttons from html
    // let boomB = document.getElementById('boomB')

    //button event listeners
    boomB.addEventListener('click', () => {
        boom.play()
        //change image to elephant lefthand down
        ele.src = "./images/eLdown.jpg"
        //delay to return to original image
        setTimeout(() => {
            ele.src = "./images/e.jpg"
        }, 400)
    })
    clapB.addEventListener('click', () => {
        clap.play()
        ele.src = "./images/eRdown.jpg"
        setTimeout(() => {
            ele.src = "./images/e.jpg"
        }, 400)
    })
    openhatB.addEventListener('click', () => {
        openhat.play()
        gir.src = "./images/gRdown.jpg"
        setTimeout(() => {
            gir.src = "./images/g.jpg"
        }, 400)
    })
    rideB.addEventListener('click', () => {
        ride.play()
        gir.src = "./images/gLdown.jpg"
        setTimeout(() => {
            gir.src = "./images/g.jpg"
        }, 400)
    })
    snareB.addEventListener('click', () => {
        snare.play()
        lio.src = "./images/lRdown.jpg"
        setTimeout(() => {
            lio.src = "./images/l.jpg"
        }, 400)
    })
    tomB.addEventListener('click', () => {
        tom.play()
        lio.src = "./images/lLdown.jpg"
        setTimeout(() => {
            lio.src = "./images/l.jpg"
        }, 400)
    })


    //key press event listener
    document.addEventListener('keypress', (event) => {
        keyValue.textContent = event.key

        if (event.key == '4') {
            boom.play()
            ele.src = "./images/eLdown.jpg"
            setTimeout(() => {
                ele.src = "./images/e.jpg"
            }, 400)
        }
        if (event.key == '3') {
            clap.play()
            ele.src = "./images/eRdown.jpg"
            setTimeout(() => {
                ele.src = "./images/e.jpg"
            }, 400)
        }
        if (event.key == '5') {
            openhat.play()
            gir.src = "./images/gRdown.jpg"
            setTimeout(() => {
                gir.src = "./images/g.jpg"
            }, 400)
        }
        if (event.key == '6') {
            ride.play()
            gir.src = "./images/gLdown.jpg"
            setTimeout(() => {
                gir.src = "./images/g.jpg"
            }, 400)
        }
        if (event.key == '1') {
            snare.play()
            lio.src = "./images/lRdown.jpg"
            setTimeout(() => {
                lio.src = "./images/l.jpg"
            }, 400)
        }
        if (event.key == '2') {
            tom.play()
            lio.src = "./images/lLdown.jpg"
            setTimeout(() => {
                lio.src = "./images/l.jpg"
            }, 400)
        }


        // animal mouths key listeners
        if (event.key == 'g') {
            giraffe.play()
            gir.src = "./images/gm.jpg"
            setTimeout(() => {
                gir.src = "./images/g.jpg"
            }, 1800)
        }
        if (event.key == 'l') {
            lion.play()
            lio.src = "./images/lm.jpg"
            setTimeout(() => {
                lio.src = "./images/l.jpg"
            }, 2000)
        }
        if (event.key == 'e') {
            elephant.play()
            ele.src = "./images/em.jpg"
            setTimeout(() => {
                ele.src = "./images/e.jpg"
            }, 1800)
        }
    })
})