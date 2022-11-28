import { ctx, canvas, triggers, cityColor, planes, UFOs, triangles, enemyObjectsColor, pixelSize } from './FrameRender';
import { createPlaneMissile, drawMissiles } from './Missile';
import { getRandomInt } from "./DefaultFunctions";


function drawLeftPlane(xVal: number, yVal: number) {
    let x: number = Math.round(xVal / pixelSize) * pixelSize
    let y: number = Math.round(yVal / pixelSize) * pixelSize
    ctx.fillStyle = enemyObjectsColor
    ctx.fillRect(x, y, 8 * pixelSize, pixelSize);
    ctx.fillRect(x + 2 * pixelSize, y - pixelSize, 2 * pixelSize, 3 * pixelSize);
    ctx.fillRect(x + 3 * pixelSize, y - 2 * pixelSize, 2 * pixelSize, pixelSize);
    ctx.fillRect(x + 5 * pixelSize, y - 3 * pixelSize, pixelSize, pixelSize);
    ctx.fillRect(x + 3 * pixelSize, y + 2 * pixelSize, 2 * pixelSize, pixelSize);
    ctx.fillRect(x + 4 * pixelSize, y + 3 * pixelSize, 2 * pixelSize, pixelSize);
    ctx.fillRect(x + 6 * pixelSize, y + 4 * pixelSize, pixelSize, pixelSize);
    ctx.fillRect(x + 7 * pixelSize, y - pixelSize, pixelSize, pixelSize);
}
function drawRightPlane(xVal: number, yVal: number) {
    let x: number = Math.round(xVal / pixelSize) * pixelSize
    let y: number = Math.round(yVal / pixelSize) * pixelSize
    ctx.fillStyle = enemyObjectsColor
    ctx.fillRect(x, y, 8 * pixelSize, pixelSize);
    ctx.fillRect(x, y - pixelSize, pixelSize, pixelSize);
    ctx.fillRect(x + 4 * pixelSize, y - pixelSize, 2 * pixelSize, 3 * pixelSize);
    ctx.fillRect(x + 3 * pixelSize, y - 2 * pixelSize, 2 * pixelSize, pixelSize);
    ctx.fillRect(x + 2 * pixelSize, y - 3 * pixelSize, pixelSize, pixelSize);
    ctx.fillRect(x + 3 * pixelSize, y + 2 * pixelSize, 2 * pixelSize, pixelSize);
    ctx.fillRect(x + 2 * pixelSize, y + 3 * pixelSize, 2 * pixelSize, pixelSize);
    ctx.fillRect(x + pixelSize, y + 4 * pixelSize, pixelSize, pixelSize);

}

export function drawPlane() {
    planes.forEach(element => {
        if (element.leftDir) {
            drawLeftPlane(element.currentX, element.y)
            element.currentX += - 4
            if (element.currentX < 0) element.alive = false
        }
        else {
            drawRightPlane(element.currentX, element.y)
            element.currentX += + 4
            if (element.currentX > canvas.width) element.alive = false
        }
        if (element.xMissiles.includes(element.currentX)) createPlaneMissile(element.currentX, element.y)
    });

}

export function createPlane() {
    if (planes.length < 1) {
        let arr = []
        for (let i = 0; i < getRandomInt(1, 4); i++)
            arr.push(Math.floor(getRandomInt(4 * pixelSize, canvas.width - 4 * pixelSize + 1) / pixelSize) * pixelSize)


        if (getRandomInt(0, 2) < 1) planes.push({
            leftDir: true,
            currentX: canvas.width,
            y: Math.round(getRandomInt(100, 400) / pixelSize) * pixelSize,
            alive: true,
            xMissiles: arr
        })
        else planes.push({
            leftDir: false,
            currentX: 0,
            y: Math.round(getRandomInt(100, 400) / pixelSize) * pixelSize,
            alive: true,
            xMissiles: arr
        })
    }
}

export function createUFO() {
    if (UFOs.length < 1) {
        let arr = []
        for (let i = 0; i < getRandomInt(1, 4); i++)
            arr.push(Math.floor(getRandomInt(4 * pixelSize, canvas.width - 4 * pixelSize + 1) / pixelSize) * pixelSize)

        if (getRandomInt(0, 2) < 1) UFOs.push({
            leftDir: true,
            currentX: canvas.width,
            currentY: Math.round(getRandomInt(100, 200) / pixelSize) * pixelSize,
            alive: true,
            xMissiles: arr
        })
        else UFOs.push({
            leftDir: false,
            currentX: 0,
            currentY: Math.round(getRandomInt(100, 200) / pixelSize) * pixelSize,
            alive: true,
            xMissiles: arr
        })
    }
}
export function drawUFO() {
    UFOs.forEach(element => {
        let x: number = Math.round(element.currentX / pixelSize) * pixelSize
        let y: number = Math.round(element.currentY / pixelSize) * pixelSize
        ctx.fillStyle = enemyObjectsColor
        ctx.fillRect(x - 4 * pixelSize, y - 4 * pixelSize, pixelSize, pixelSize);
        ctx.fillRect(x + 3 * pixelSize, y - 4 * pixelSize, pixelSize, pixelSize);
        ctx.fillRect(x - 3 * pixelSize, y - 3 * pixelSize, pixelSize, pixelSize);
        ctx.fillRect(x - 1 * pixelSize, y - 3 * pixelSize, 2 * pixelSize, pixelSize);
        ctx.fillRect(x + 2 * pixelSize, y - 3 * pixelSize, pixelSize, pixelSize);
        ctx.fillRect(x - 2 * pixelSize, y - 2 * pixelSize, 4 * pixelSize, pixelSize);
        ctx.fillRect(x - 3 * pixelSize, y - 1 * pixelSize, 6 * pixelSize, pixelSize);
        ctx.fillRect(x - 3 * pixelSize, y, 6 * pixelSize, pixelSize);
        ctx.fillRect(x - 2 * pixelSize, y + pixelSize, 4 * pixelSize, pixelSize);
        ctx.fillRect(x - 1 * pixelSize, y + 2 * pixelSize, 2 * pixelSize, pixelSize);
        ctx.fillRect(x - 3 * pixelSize, y + 2 * pixelSize, pixelSize, pixelSize);
        ctx.fillRect(x + 2 * pixelSize, y + 2 * pixelSize, pixelSize, pixelSize);
        ctx.fillRect(x - 4 * pixelSize, y + 3 * pixelSize, pixelSize, pixelSize);
        ctx.fillRect(x + 3 * pixelSize, y + 3 * pixelSize, pixelSize, pixelSize);
        if (element.leftDir) {
            element.currentX += - 3
            if (element.currentX < 0) element.alive = false
        }
        else {
            element.currentX += 3
            if (element.currentX > canvas.width) element.alive = false
        }
        if (getRandomInt(0, 300) < 2) createPlaneMissile(element.currentX, element.currentY)
    });




}

