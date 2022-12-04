import { ctx, canvas, mouse, triggers, startMissileX, startMissileY, missileSpeed, rockets, pixelSize, rocketSpeed, rocketsCount, siloIsAlive, cityColor, time, volume } from './FrameRender'
import { generateUserBoom } from './Boom';
import { angleFromStartToTarget, filterPath } from './DefaultFunctions';
import { Rocket } from './Interfaces';
export let usedRockets: number = 0
export function resetRockets() {
    usedRockets = 0
}
export function createRocket() {
    drawRocketOnSilos()
    if (siloIsAlive) {
        if (usedRockets < rocketsCount) {
            usedRockets++

            var rect = canvas.getBoundingClientRect();
            let x = mouse.x - Math.floor(rect.x) - 10
            let y = mouse.y - Math.floor(rect.y) - 10
            x = Math.floor(x / pixelSize) * pixelSize + 1 / 2 * pixelSize
            y = Math.floor(y / pixelSize) * pixelSize + 1 / 2 * pixelSize
            rockets.push({
                targetX: x,
                targetY: y,
                currentX: startMissileX,
                currentY: startMissileY,
                angle: angleFromStartToTarget(startMissileX, startMissileY, x, y),
                alive: true,
                missilePath: [
                    (Math.floor(startMissileX / pixelSize) * pixelSize).toString() + " " +
                    (Math.floor(startMissileY / pixelSize) * pixelSize).toString()
                ]
            })
            triggers.push({
                x: Math.floor(x / pixelSize) * pixelSize,
                y: Math.floor(y / pixelSize) * pixelSize,
                alive: true
            })
        }
    }

}

export function drawRocketOnSilos() {
    if (usedRockets != rocketsCount && siloIsAlive) {
        if (usedRockets % 6 == 0) {
            drawRocketSil(canvas.width / 2, canvas.height - 9 * pixelSize)
            drawRocketSil(canvas.width / 2 - 3 * pixelSize, canvas.height - 6 * pixelSize)
            drawRocketSil(canvas.width / 2 + 3 * pixelSize, canvas.height - 6 * pixelSize)
            drawRocketSil(canvas.width / 2 - 6 * pixelSize, canvas.height - 4 * pixelSize)
            drawRocketSil(canvas.width / 2, canvas.height - 4 * pixelSize)
            drawRocketSil(canvas.width / 2 + 6 * pixelSize, canvas.height - 4 * pixelSize)
        }
        if (usedRockets % 6 == 1) {
            drawRocketSil(canvas.width / 2, canvas.height - 9 * pixelSize)
            drawRocketSil(canvas.width / 2 - 3 * pixelSize, canvas.height - 6 * pixelSize)
            drawRocketSil(canvas.width / 2 + 3 * pixelSize, canvas.height - 6 * pixelSize)
            drawRocketSil(canvas.width / 2 - 6 * pixelSize, canvas.height - 4 * pixelSize)
            drawRocketSil(canvas.width / 2, canvas.height - 4 * pixelSize)
        }
        if (usedRockets % 6 == 2) {
            drawRocketSil(canvas.width / 2, canvas.height - 9 * pixelSize)
            drawRocketSil(canvas.width / 2 - 3 * pixelSize, canvas.height - 6 * pixelSize)
            drawRocketSil(canvas.width / 2 + 3 * pixelSize, canvas.height - 6 * pixelSize)
            drawRocketSil(canvas.width / 2 - 6 * pixelSize, canvas.height - 4 * pixelSize)
        }
        if (usedRockets % 6 == 3) {
            drawRocketSil(canvas.width / 2, canvas.height - 9 * pixelSize)
            drawRocketSil(canvas.width / 2 - 3 * pixelSize, canvas.height - 6 * pixelSize)
            drawRocketSil(canvas.width / 2 + 3 * pixelSize, canvas.height - 6 * pixelSize)
        }
        if (usedRockets % 6 == 4) {
            drawRocketSil(canvas.width / 2, canvas.height - 9 * pixelSize)
            drawRocketSil(canvas.width / 2 - 3 * pixelSize, canvas.height - 6 * pixelSize)

        }
        if (usedRockets % 6 == 5) {
            drawRocketSil(canvas.width / 2, canvas.height - 9 * pixelSize)
        }
    }
}

export function drawRocketSil(xV: number, yV: number) {
    let x: number = Math.floor(xV / pixelSize) * pixelSize
    let y: number = Math.floor(yV / pixelSize) * pixelSize
    ctx.fillStyle = cityColor;
    ctx.fillRect(x, y, pixelSize, 3 * pixelSize);
    ctx.fillRect(x - 1 * pixelSize, y + 3 * pixelSize, pixelSize, pixelSize);
    ctx.fillRect(x + 1 * pixelSize, y + 3 * pixelSize, pixelSize, pixelSize);
}

export function drawRockets() {
    rockets.forEach(element => {
        var song = new Audio();
        song.src = '../data/soundRocket.mp3';
        song.volume = volume ? 0.5 : 0
        if (time % 9 == 0) song.play();

        for (let index = 0; index < Math.ceil(rocketSpeed / pixelSize); index++) {
            element.currentX += rocketSpeed / Math.ceil(rocketSpeed / pixelSize) * Math.sin(element.angle)
            element.currentY += rocketSpeed / Math.ceil(rocketSpeed / pixelSize) * -Math.cos(element.angle)

            let x: number = Math.floor(element.currentX / pixelSize) * pixelSize
            let y: number = Math.floor(element.currentY / pixelSize) * pixelSize

            let pathStr: string = x.toString() + " " + y.toString()

            if (!element.missilePath.includes(pathStr)) {
                element.missilePath.push(pathStr)
            }
        }


        filterPath(element.missilePath)


        if (Math.abs(Math.floor(element.currentX / pixelSize) * pixelSize - Math.floor(element.targetX / pixelSize) * pixelSize) < 2 * pixelSize &&
            Math.abs(Math.floor(element.currentY / pixelSize) * pixelSize - Math.floor(element.targetY / pixelSize) * pixelSize) < 2 * pixelSize) {
            element.alive = false
            generateUserBoom(element.targetX, element.targetY)
            triggers.forEach(element1 => {
                if (Math.abs(element1.x - Math.floor(element.currentX / pixelSize) * pixelSize) < 2 * pixelSize &&
                    Math.abs(element1.y - Math.floor(element.currentY / pixelSize) * pixelSize) < 2 * pixelSize) {
                    element1.alive = false
                }
            });

        }
        drawRocketsPath(element)

    });

}
function drawRocketsPath(rocket: Rocket) {
    ctx.fillRect((Math.floor(canvas.width / 2 / pixelSize) * pixelSize), (canvas.height - 10 * pixelSize), pixelSize, pixelSize)
    ctx.fillRect((Math.floor(canvas.width / 2 / pixelSize) * pixelSize), (canvas.height - 9 * pixelSize), pixelSize, pixelSize)
    rocket.missilePath.forEach(element => {
        let el: Array<string> = element.split(" ")
        ctx.fillStyle = cityColor
        ctx.fillRect(parseInt(el[0]), parseInt(el[1]), pixelSize, pixelSize);
    });
}