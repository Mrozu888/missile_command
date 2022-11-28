import { root } from './Main';
import { drawBooms, generateEnemyBoom } from './Boom';
import { createRocket, drawRocketOnSilos, drawRockets, drawRocketSil, resetRockets, usedRockets } from './Rocket';
import { drawTriggers } from './Trigger';
import { createMissile, drawMissiles } from './Missile';
import { drawPlane, createPlane, createUFO, drawUFO } from "./PlaneAndUFO";
import { createTriangle, drawTriangle } from "./Triangle";
import { createWorld, drawRemoved } from './World';
import { City } from './City';
import { getRandomInt } from './DefaultFunctions';
import { Missile, Rocket, Trigger, Triangle, Plane, UFO } from "./Interfaces";
import { addPoints, drawGameOver, drawMultipler, drawScore, drawStart, multiplier, score, setMultiplier } from './Scoreboard';

export const canvas: HTMLCanvasElement = document.createElement("canvas")
canvas.width = 1288
canvas.height = 800
export const ctx = canvas.getContext('2d');

export const init = () => root.appendChild(canvas)

const FPS = 50;
let fpsInterval: number
let time: number = 0
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
export let missileSpeed: number = 3
export let planes: Array<Plane> = []
export let UFOs: Array<UFO> = []
export let triangles: Array<Triangle> = []
export let triangleSpeed: number = 3

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
canvas.addEventListener('mousemove', function (event) {
    mouse = { x: event.clientX, y: event.clientY }

})
let startGame: boolean = false
canvas.addEventListener('click', function (event) {
    if (!end && startGame) createRocket()
    if (!startGame) levels()
    startGame = true

})


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
function drawLastRockets() {
    lastRockets.forEach(element => {
        drawRocketSil(element, 304)
    });
}
let drawMul: boolean = false
let finishTime: number
let cityN = 0
let rockety = 0
let rocketsX = 104
function draw() {
    createWorld(cityColor, worldColor, airColor)
    if (!startGame) {
        drawStart(160, canvas.height / 2 - 5 * pixelSize)
    }
    started = true
    drawRemoved()
    drawScore()
    if (checkCities() == 0) {
        end = true
        drawGameOver(320, canvas.height / 2 - 5 * pixelSize)
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


            if (rockety > 0 && time % 4 == 0) {
                lastRockets.push(rocketsX)
                rocketsX += 4 * pixelSize
                addPoints(5)
                rockety--
            }

            if (cities[cityN].alive && !cities[cityN].survived) {
                cities[cityN].survived = true
                addPoints(100)

            }
            if (time % 20 == 0 && cityN < cities.length - 1) {
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
    finishTime = time
    let x = () => setTimeout(() => {
        if (missiles.length == 0 && planes.length == 0 && UFOs.length == 0 && triangles.length == 0) {
            rockety = rocketsCount - usedRockets
            rocketsX = 104
            cityN = 0
            levelFinished = true
            setTimeout(() => {
                let colors = worldColors[Math.floor(Math.random() * worldColors.length)]
                cityColor = colors.cityColor
                worldColor = colors.worldColor
                airColor = colors.airColor
                enemyObjectsColor = colors.enemyObjectsColor
                numbersColor = colors.numbersColor
                drawMul = true
                lastRockets = []
                cities = []
                levelFinished = false
                resetRockets()

                started = false
                end = false
                setTimeout(() => {
                    drawMul = false
                    missileSpeed += 1 / 4
                    triangleSpeed += 1 / 4
                    actualLevel++
                    setMultiplier(Math.floor(Math.sqrt(actualLevel)))
                    time = 0


                    levels()
                }, 4000);
            }, 4000);
        }
        else x()
    }, 100);

    x()
}

function levels() {
    for (let i = 0; i < getRandomInt(0, 4); i++) createMissile()
    for (let i = 0; i < getRandomInt(0, 4); i++) createTriangle()
    if (getRandomInt(0, 2) < 1) {
        createPlane()
    } else {
        createUFO()
    }

    let x = () => setTimeout(() => {
        for (let i = 0; i < getRandomInt(0, 4); i++) createMissile()
        for (let i = 0; i < getRandomInt(0, 4); i++) createTriangle()
        if (getRandomInt(0, 2) < 1) {
            if (getRandomInt(0, 2) < 1) {
                createPlane()
            } else {
                createUFO()
            }
        }


        if (!end) {
            if (time < 1000) {
                x()
            }
            else {
                finishLevel()
            }
        }

    }, getRandomInt(5000, 7000));
    x()


}
function checkCities() {
    let alives = 0
    cities.forEach(element => {
        if (element.alive) alives++
    });
    return alives
}



window.requestAnimationFrame(refreshLoop)

