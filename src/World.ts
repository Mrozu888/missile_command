import { generateEnemyBoom } from "./Boom";
import { City } from "./City";
import { ctx, canvas, pixelSize, targetsX, cities, started, siloIsAlive, targetsY } from './FrameRender';
import { drawRocketOnSilos } from "./Rocket";


let citiesColor: string
let worldColor: string
let airColor: string

export function createWorld(cc: string, wc: string, ac: string) {
    citiesColor = cc
    worldColor = wc
    airColor = ac
    drawAir()
    drawGround()
    drawSilo()

    if (!started) {
        cities.push(new City(13 * pixelSize, targetsY, citiesColor))
        cities.push(new City(32 * pixelSize, targetsY, citiesColor))
        cities.push(new City(51 * pixelSize, targetsY, citiesColor))
        cities.push(new City(98 * pixelSize, targetsY, citiesColor))
        cities.push(new City(117 * pixelSize, targetsY, citiesColor))
        cities.push(new City(136 * pixelSize, targetsY, citiesColor))
    }
    cities.forEach(el => el.drawCity())
}
function drawSilo() {
    if (siloIsAlive) {
        ctx.fillStyle = worldColor
        ctx.fillRect(73 * pixelSize, targetsY - pixelSize, 15 * pixelSize, pixelSize)
        ctx.fillRect(74 * pixelSize, targetsY - 2 * pixelSize, 13 * pixelSize, pixelSize)
        ctx.fillRect(75 * pixelSize, targetsY - 3 * pixelSize, 11 * pixelSize, pixelSize)
        ctx.fillRect(76 * pixelSize, targetsY - 4 * pixelSize, 9 * pixelSize, pixelSize)
        ctx.fillRect(77 * pixelSize, targetsY - 5 * pixelSize, 7 * pixelSize, pixelSize)
    }
    else {
        ctx.fillStyle = worldColor
        ctx.fillRect(73 * pixelSize, targetsY - pixelSize, 2 * pixelSize, pixelSize)
        ctx.fillRect(85 * pixelSize, targetsY - pixelSize, 3 * pixelSize, pixelSize)
        ctx.fillRect(86 * pixelSize, targetsY - 2 * pixelSize, pixelSize, pixelSize)
        ctx.fillStyle = airColor
        ctx.fillRect(76 * pixelSize, targetsY, 8 * pixelSize, pixelSize)
        ctx.fillRect(78 * pixelSize, targetsY + pixelSize, 4 * pixelSize, pixelSize)
    }
}




function drawGround() {
    ctx.fillStyle = worldColor
    ctx.fillRect(0, targetsY, canvas.width, canvas.height - targetsY)
    ctx.fillStyle = airColor
    ctx.fillRect(13 * pixelSize, targetsY, 12 * pixelSize, pixelSize)
    ctx.fillRect(32 * pixelSize, targetsY, 12 * pixelSize, pixelSize)
    ctx.fillRect(51 * pixelSize, targetsY, 12 * pixelSize, pixelSize)
    ctx.fillRect(98 * pixelSize, targetsY, 12 * pixelSize, pixelSize)
    ctx.fillRect(117 * pixelSize, targetsY, 12 * pixelSize, pixelSize)
    ctx.fillRect(136 * pixelSize, targetsY, 12 * pixelSize, pixelSize)
}
function drawAir() {
    ctx.fillStyle = airColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}


export function removeCity(num: number) {
    if (num < 3) generateEnemyBoom(targetsX[num] + 6 * pixelSize, Math.floor((targetsY - 3 * pixelSize) / pixelSize) * pixelSize + 1 / 2 * pixelSize)
    else generateEnemyBoom(targetsX[num + 1] + 6 * pixelSize, Math.floor((targetsY - 3 * pixelSize) / pixelSize) * pixelSize + 1 / 2 * pixelSize)
    cities[num].alive = false

}

export function drawRemoved() {
    cities.forEach(element => {
        if (element.alive == false) element.destroyCity()
    });
}
