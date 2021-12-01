// shhift + option + f
document.addEventListener("DOMContentLoaded", () => {

    const grid = document.querySelector(".grid")
    const scoreDisplay = document.getElementById("score")
    const width = 28
    let score = 0

    // layout of the layout
    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]

    /*
    explanation
    0 - pacdot
    1 - wall
    2 - gost lair
    3 - power pellet
    4 - empty
    */

    //create the grid view and render it
    const squares = []
    function createBoard() {
        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement("div")
            grid.appendChild(square)
            squares.push(square)

            // adding layout to the board
            if (layout[i] === 0) {
                squares[i].classList.add("pac-dot")
            } else if (layout[i] === 1) {
                squares[i].classList.add("wall")
            } else if (layout[i] === 2) {
                squares[i].classList.add("ghost-lair")
            } else if (layout[i] === 3) {
                squares[i].classList.add("power-pellet")
            }
        }
    }

    createBoard()

    // starting position of pac-man
    let pacManCurrentIndex = 490
    squares[pacManCurrentIndex].classList.add("pac-man")

    function movePacman(e) {
        squares[pacManCurrentIndex].classList.remove("pac-man")

        switch (e.keyCode) {
            case 37:
                if (pacManCurrentIndex % width !== 0 && !squares[pacManCurrentIndex - 1].classList.contains("wall") && !squares[pacManCurrentIndex - 1].classList.contains("ghost-lair")) {
                    pacManCurrentIndex -= 1

                    //check if the pac-man is in the left side exit
                    if ((pacManCurrentIndex - 1) === 363) {
                        pacManCurrentIndex = 391
                    }
                    break
                }
            case 38:
                if (pacManCurrentIndex - width >= 0 && !squares[pacManCurrentIndex - width].classList.contains("wall") && !squares[pacManCurrentIndex - width].classList.contains("ghost-lair")) {
                    pacManCurrentIndex -= width
                    break
                }
            case 39:
                if (pacManCurrentIndex % width < width - 1 && !squares[pacManCurrentIndex + 1].classList.contains("wall") && !squares[pacManCurrentIndex + 1].classList.contains("ghost-lair")) {
                    pacManCurrentIndex += 1

                    //check if the pac-man is in the right side exit
                    if ((pacManCurrentIndex + 1) === 392) {
                        pacManCurrentIndex = 364
                    }
                    break
                    break
                }
            case 40:
                if (pacManCurrentIndex % width < width * width && !squares[pacManCurrentIndex + width].classList.contains("wall") && !squares[pacManCurrentIndex + width].classList.contains("ghost-lair")) {
                    pacManCurrentIndex += width
                    break
                }

        }
        squares[pacManCurrentIndex].classList.add("pac-man")

        pacDotEaten()
        powerPelletEaten()
        checkForGameOver()
        checkForWin()

    }
    document.addEventListener("keyup", movePacman)

    // when pac-man eats a pac-dot
    function pacDotEaten() {
        if (squares[pacManCurrentIndex].classList.contains("pac-dot")) {
            score++
            scoreDisplay.innerHTML = score
            squares[pacManCurrentIndex].classList.remove("pac-dot")
        }
    }

    // what happens when pac-man eat a power-pallet
    function powerPelletEaten() {
        if (squares[pacManCurrentIndex].classList.contains("power-pellet")) {
            score += 10
            ghosts.forEach(ghost => ghost.isScared = true)
            setTimeout(unScareGosts, 10000)
            squares[pacManCurrentIndex].classList.remove("power-pellet")
        }
    }

    // this is to stop the gosts appearing as aquamarine
    function unScareGosts() {
        ghosts.forEach(ghost => ghost.isScared = false)
    }


    // createing the ghost template - with constructors
    class Ghost {
        constructor(className, startIndex, speed) {
            this.className = className
            this.startIndex = startIndex
            this.speed = speed
            this.currentIndex = startIndex
            this.timerID = NaN
            this.isScared = false
        }
    }

    // creating ghosts
    ghosts = [
        new Ghost("blinky", 348, 350),
        new Ghost("pinky", 376, 400),
        new Ghost("inky", 351, 300),
        new Ghost("clyde", 379, 500)
    ]

    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className)
        squares[ghost.currentIndex].classList.add("ghost")
    });

    // move all the ghosts randomly
    ghosts.forEach(ghost => moveGhost(ghost))

    function moveGhost(ghost) {
        const directions = [-1, +1, width, -width]
        let direction = directions[Math.floor(Math.random() * directions.length)]

        ghost.timerID = setInterval(function () {
            //if the next square the ghost is going to go in does not contain wall and 
            // a ghost, you(ghost) can go there
            if (!squares[ghost.currentIndex + direction].classList.contains("wall") &&
                !squares[ghost.currentIndex + direction].classList.contains("ghost")) {
                //ghost can go here
                //so, we are removing all ghost related classes
                squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
                //change the current index to a new safe index
                ghost.currentIndex += direction
                //redraw the ghost in the new safe space
                squares[ghost.currentIndex].classList.add(ghost.className, "ghost")

                // else find a new direction to go    
            } else {
                direction = directions[Math.floor(Math.random() * directions.length)]
            }

            // if the ghost is currently scared
            if (ghost.isScared) {
                squares[ghost.currentIndex].classList.add("scared-ghost")
            }

            //
            if (ghost.isScared && squares[ghost.currentIndex].classList.contains("pac-man")) {
                squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
                ghost.currentIndex = ghost.startIndex
                score += 100
                squares[ghost.currentIndex].classList.add(ghost.className, "ghost")
            }
            checkForGameOver()

        }, ghost.speed)
    }

    //check for game over
    function checkForGameOver() {
        if (squares[pacManCurrentIndex].classList.contains("ghost") &&
            !squares[pacManCurrentIndex].classList.contains("scared-ghost")) {

            ghosts.forEach(ghost => clearInterval(ghost.timerID))
            document.removeEventListener('keyup', movePacman)
            // setTimeout(function () {
            //     alert('Game over!!!')
            // }, 500)
            scoreDisplay.innerHTML = "Game Over!!!"
        }
    }

    //check for win
    function checkForWin(){
        if (score === 274){
            ghosts.forEach(ghost => clearInterval(ghost.timerID))
            document.removeEventListener("keyup", movePacman)
            scoreDisplay.innerHTML = "Congratulations, You Won the game"
        }
    }

})