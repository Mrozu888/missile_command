import { root } from './Main';
import { booms, clearBooms, drawBooms, generateEnemyBoom } from './Boom';
import { createRocket, drawRocketOnSilos, drawRockets, drawRocketSil, resetRockets, usedRockets } from './Rocket';
import { drawTriggers } from './Trigger';
import { createMissile, drawMissiles } from './Missile';
import { drawPlane, createPlane, createUFO, drawUFO } from "./PlaneAndUFO";
import { createTriangle, drawTriangle } from "./Triangle";
import { createWorld, drawRemoved } from './World';
import { City } from './City';
import { getRandomInt } from './DefaultFunctions';
import { Missile, Rocket, Trigger, Triangle, Plane, UFO } from "./Interfaces";
import { addPoints, drawGameOver, drawHighScore, drawMultipler, drawScore, drawStart, multiplier, resetScore, score, setHighScore, setMultiplier } from './Scoreboard';

export const canvas: HTMLCanvasElement = document.createElement("canvas")
canvas.width = 1288
canvas.height = 800
export const ctx = canvas.getContext('2d');

export const init = () => root.appendChild(canvas)

//audio
export let volume = true

const FPS = 40;
let fpsInterval: number
export let time: number = 0
let now: number
let then: number
let end: boolean = false
function startLoop(fps: number) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    refreshLoop();
}
function refreshLoop() {
    requestAnimationFrame(refreshLoop);
    now = Date.now();
    let elapsed: number = now - then;
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        draw()
        time++
    }
}
startLoop(FPS); // start game
export const pixelSize: number = 8
export let cities: Array<City> = []
export const rocketsCount: number = 30
export const targetsX: Array<number> = [13 * pixelSize, 32 * pixelSize, 51 * pixelSize, canvas.width / 2 - 5 * pixelSize, 98 * pixelSize, 117 * pixelSize, 136 * pixelSize]
export const targetsY: number = canvas.height - 3 * pixelSize
export let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
export let startMissileX: number = (canvas.width / 2 / pixelSize) * pixelSize
export let startMissileY: number = targetsY - 8 * pixelSize + 1 / 2 * pixelSize
export let started: boolean = false
export let rockets: Array<Rocket> = []
export const rocketSpeed: number = 24;
export let triggers: Array<Trigger> = []
export let missiles: Array<Missile> = []
export let missileSpeed: number = 1
export let planes: Array<Plane> = []
export let UFOs: Array<UFO> = []
export let triangles: Array<Triangle> = []
export let triangleSpeed: number = 1.5

let volumeIcon = document.getElementById("volume") as HTMLImageElement
volumeIcon.onclick = () => {
    if (volume) {
        volume = !volume
        volumeIcon.src = "./data/mute.png"
    }
    else {
        volume = !volume
        volumeIcon.src = "./data/volume.png"
    }
}


let showStart = true
function crossHair(x: number, y: number) {
    var rect = canvas.getBoundingClientRect();
    x = x - Math.floor(rect.x) - 10
    y = y - Math.floor(rect.y) - 10
    x = Math.floor(x / pixelSize) * pixelSize
    y = Math.floor(y / pixelSize) * pixelSize
    if (airColor != "white") ctx.fillStyle = '#FFFFFF';
    else ctx.fillStyle = '#000000';
    ctx.fillRect(x - pixelSize, y, pixelSize, pixelSize);
    ctx.fillRect(x + pixelSize, y, pixelSize, pixelSize);
    ctx.fillRect(x, y - pixelSize, pixelSize, pixelSize);
    ctx.fillRect(x, y + pixelSize, pixelSize, pixelSize);
}
let startGame: boolean = false
let triggerSpeed: number = 8
let map: Array<Object> = [{}]; // You could also use an array
document.onkeydown = document.onkeyup = function (e: any) {
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';
    if (e.keyCode == 17 && e.type == 'keydown') {
        if (!end && startGame) createRocket()
    }
    if (e.keyCode == 13 && e.type == 'keydown') {
        showStart = false
        if (!startGame) {
            reset()
            levels()
        }
        startGame = true
        end = false
    }
}

function moveTrigger() {
    var rect = canvas.getBoundingClientRect();
    let width = canvas.width + Math.floor(rect.x) + 10 - 2 * pixelSize
    let height = canvas.height + Math.floor(rect.y) + 10 - 12 * pixelSize
    let minWidth = Math.floor(rect.x) + 24
    let minHeight = Math.floor(rect.y) + 24

    if (map[38] && map[37]) { // UP+LEFT
        if (mouse.x > minWidth) mouse = { x: mouse.x - triggerSpeed, y: mouse.y }
        if (mouse.y > minHeight) mouse = { x: mouse.x, y: mouse.y - triggerSpeed }
    } else if (map[38] && map[39]) { // UP+RIGHT
        if (mouse.x < width) mouse = { x: mouse.x + triggerSpeed, y: mouse.y }
        if (mouse.y > minHeight) mouse = { x: mouse.x, y: mouse.y - triggerSpeed }
    } else if (map[40] && map[37]) { // DOWN+LEFT
        if (mouse.x > minWidth) mouse = { x: mouse.x - triggerSpeed, y: mouse.y }
        if (mouse.y < height) mouse = { x: mouse.x, y: mouse.y + triggerSpeed }
    } else if (map[40] && map[39]) { // DOWN+RIGHT
        if (mouse.y < height) mouse = { x: mouse.x, y: mouse.y + triggerSpeed }
        if (mouse.x < width) mouse = { x: mouse.x + triggerSpeed, y: mouse.y }

    } else if (map[38]) { // UP
        if (mouse.y > minHeight) mouse = { x: mouse.x, y: mouse.y - triggerSpeed }
    } else if (map[40]) { // DOWN
        if (mouse.y < height) mouse = { x: mouse.x, y: mouse.y + triggerSpeed }
    } else if (map[37]) { // LEFT
        if (mouse.x > minWidth) mouse = { x: mouse.x - triggerSpeed, y: mouse.y }
    } else if (map[39]) { // RIGHT
        if (mouse.x < width) mouse = { x: mouse.x + triggerSpeed, y: mouse.y }
    }
}





let worldColors = [{
    cityColor: "blue",
    worldColor: "#d4be00",
    airColor: "black",
    enemyObjectsColor: "orange",
    numbersColor: "orange"
},
{
    cityColor: "#7570ff",
    worldColor: "#8a3200",
    airColor: "black",
    enemyObjectsColor: "green",
    numbersColor: "yellow"
},
{
    cityColor: "black",
    worldColor: "#d4be00",
    airColor: "blue",
    enemyObjectsColor: "orange",
    numbersColor: "pink"
},
{
    cityColor: "blue",
    worldColor: "#d4be00",
    airColor: "white",
    enemyObjectsColor: "#d4be00",
    numbersColor: "orange"
},
]

export let cityColor: string = "blue"
export let worldColor: string = "#d4be00"
export let airColor: string = "black"
export let enemyObjectsColor: string = "purple"
export let numbersColor: string = "orange"
let colors = worldColors[Math.floor(Math.random() * worldColors.length)]
cityColor = colors.cityColor
worldColor = colors.worldColor
airColor = colors.airColor
enemyObjectsColor = colors.enemyObjectsColor
numbersColor = colors.numbersColor
export let siloIsAlive: boolean = true
export function destroySilo() {
    generateEnemyBoom(targetsX[3] + 4 * pixelSize, Math.floor((targetsY - 3 * pixelSize) / pixelSize) * pixelSize + 1 / 2 * pixelSize)
    siloIsAlive = false
    setTimeout(() => {
        siloIsAlive = true
    }, 2500);
}
export let levelFinished: boolean = false
let lastRockets: Array<number> = []
let drawMul: boolean = false
let cityN = 0
let rockety = 0
let rocketsX = 104
function draw() {
    moveTrigger()
    createWorld()
    started = true
    drawRemoved()
    drawScore()
    drawHighScore()
    if (checkCities() == 0) {
        end = true
        drawGameOver(320, canvas.height / 2 - 5 * pixelSize)
        startGame = false
    }
    else {
        if (drawMul) drawMultipler(504, canvas.height / 2 - 5 * pixelSize)
        drawRocketOnSilos()
        drawRockets()
        drawTriggers()
        drawMissiles()
        drawPlane()
        drawUFO()
        drawTriangle()
        drawBooms()
        if (levelFinished) {
            if (rockety > 0 && time % 5 == 0) {
                lastRockets.push(rocketsX)
                rocketsX += 4 * pixelSize
                addPoints(5)
                rockety--
            }


            if (time % 20 == 0) {

                if (cities[cityN]?.alive) {
                    cities[cityN].survived = true
                    addPoints(100)
                }
                cityN++

            }
            let citiesX = 104
            cities.forEach(element => {
                if (element.survived) {
                    element.drawSurvivedCity(citiesX, 400)
                    citiesX += 14 * pixelSize
                }
            });
            lastRockets.forEach(element => {
                drawRocketSil(element, 304)
            });
        }


    }

    clearDeadObjects()
    crossHair(mouse.x, mouse.y)
    if (showStart) {
        drawStart()
    }
}

function clearDeadObjects() {
    rockets = rockets.filter(element => { return element.alive !== false });
    triggers = triggers.filter(element => { return element.alive !== false });
    missiles = missiles.filter(element => { return element.alive !== false });
    planes = planes.filter(element => { return element.alive !== false });
    UFOs = UFOs.filter(element => { return element.alive !== false });
    triangles = triangles.filter(element => { return element.alive !== false });
}
let actualLevel = 1
function finishLevel() {
    let x = () => setTimeout(() => {
        if (missiles.length == 0 && planes.length == 0 && UFOs.length == 0 && triangles.length == 0) {
            rockety = rocketsCount - usedRockets
            rocketsX = 104
            cityN = 0
            levelFinished = true
            setTimeout(() => {
                drawMul = true
                levelFinished = false
                resetRockets()
                end = false
                var song = new Audio();
                song.src = '../data/soundBefore.mp3';
                song.volume = volume ? 0.5 : 0
                song.play();
                setTimeout(() => {
                    let colors = worldColors[Math.floor(Math.random() * worldColors.length)]
                    cityColor = colors.cityColor
                    worldColor = colors.worldColor
                    airColor = colors.airColor
                    enemyObjectsColor = colors.enemyObjectsColor
                    numbersColor = colors.numbersColor

                    lastRockets = []
                    drawMul = false
                    if (missileSpeed < 4) missileSpeed += 1 / 8
                    if (triangleSpeed < 4) triangleSpeed += 1 / 8

                    actualLevel++
                    setMultiplier(Math.floor(Math.sqrt(actualLevel)))
                    time = 0

                    cities.forEach(element => {
                        if (element.survived) {
                            element.survived = false
                        }
                    });
                    levels()
                }, 2000);
            }, 4500);
        }
        else x()
    }, 100);
    x()
}



function reset() {
    rockets = []
    triggers = []
    missiles = []
    planes = []
    UFOs = []
    triangles = []
    cities = []
    clearBooms()
    started = false
    missileSpeed = 1
    triangleSpeed = 1.5
    actualLevel = 1
    levelFinished = false
    setMultiplier(Math.floor(Math.sqrt(actualLevel)))
    setHighScore(score)
    resetScore()
    time = 0
    clearTimeout(y)
}
let y: any
function levels() {
    y = setTimeout(() => {
        for (let i = 0; i < getRandomInt(0, 3); i++) createMissile()
        for (let i = 0; i < getRandomInt(0, 3); i++) createTriangle()
        if (getRandomInt(0, 2) < 1) {
            createPlane()
        } else {
            createUFO()
        }
        let x = () => setTimeout(() => {
            for (let i = 0; i < getRandomInt(0, 4); i++) createMissile()
            for (let i = 0; i < getRandomInt(0, 4); i++) createTriangle()
            if (getRandomInt(0, 3) < 1) {
                if (getRandomInt(0, 2) < 1) {
                    createPlane()
                } else {
                    createUFO()
                }
            }
            if (!end) {
                if (time < 750) {
                    x()
                }
                else {
                    finishLevel()
                }
            }

        }, getRandomInt(10000, 12000));
        x()

    }, 200);


}
function checkCities() {
    let alives = 0
    cities.forEach(element => {
        if (element.alive) alives++
    });
    return alives
}

window.requestAnimationFrame(refreshLoop)