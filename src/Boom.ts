import { angleFromStartToTarget, distnceFromStartToTarget } from './DefaultFunctions';
import { ctx, canvas, pixelSize, missiles, planes, triangles, triangleSpeed, UFOs } from './FrameRender';
import { boom } from './Interfaces';
import { addPoints } from './Scoreboard';


export let booms: Array<boom> = []

export function generateUserBoom(x: number, y: number) {
    // radius = 9
    let boom: boom = {
        x: x,
        y: y,
        size: 7,
        actualSize: 1,
        alive: true,
        rise: true,
        enemy: false

    }
    booms.push(boom)
}
export function generateEnemyBoom(x: number, y: number) {
    // radius = 9
    let boom: boom = {
        x: x,
        y: y,
        size: 7,
        actualSize: 1,
        alive: true,
        rise: true,
        enemy: true

    }
    booms.push(boom)
}
export function drawBooms() {
    booms.forEach(element => {
        if (element.rise) element.actualSize += 1 / 8
        else element.actualSize -= 1 / 8
        if (element.actualSize == element.size) element.rise = false
        if (element.actualSize == 0) element.alive = false

        let colors: Array<string> = ["white", "#fff1c9", "#fec9ff", "#c9d2ff", "#c9d2ff"]
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]

        // !!! dziala jako tako !!!
        for (let i = -element.actualSize; i <= element.actualSize; i++) {
            let yValue: number = Math.sqrt(Math.pow(element.actualSize, 2) - Math.pow(i, 2)) * pixelSize
            for (let j = 0; j <= yValue; j++) {
                let x: number = Math.round((element.x - 1 / 2 * pixelSize + i * pixelSize) / pixelSize) * pixelSize
                let y1: number = Math.floor((element.y - 1 / 2 * pixelSize + j) / pixelSize) * pixelSize
                let y2: number = Math.ceil((element.y - 1 / 2 * pixelSize - j) / pixelSize) * pixelSize

                ctx.fillRect(x, y1, pixelSize, pixelSize);
                ctx.fillRect(x, y2, pixelSize, pixelSize);
            }
        }
        missiles.forEach(missile => {
            let dist: number = distnceFromStartToTarget(element.x, element.y, missile.currentX, missile.currentY)
            if (dist < element.actualSize * pixelSize) {
                missile.alive = false
                if (!element.enemy) addPoints(25)
            }

        });
        planes.forEach(plane => {
            let dist: number
            if (plane.leftDir) dist = distnceFromStartToTarget(element.x, element.y, plane.currentX + 4 * pixelSize, plane.y)
            else dist = distnceFromStartToTarget(element.x, element.y, plane.currentX - 4 * pixelSize, plane.y)
            if (dist < element.actualSize * pixelSize) {
                plane.alive = false
                if (!element.enemy) addPoints(100)
            }
        });
        UFOs.forEach(UFO => {
            let dist: number
            if (UFO.leftDir) dist = distnceFromStartToTarget(element.x, element.y, UFO.currentX + 4 * pixelSize, UFO.currentY)
            else dist = distnceFromStartToTarget(element.x, element.y, UFO.currentX - 4 * pixelSize, UFO.currentY)
            if (dist < element.actualSize * pixelSize) {
                UFO.alive = false
                if (!element.enemy) addPoints(100)
            }
        });
        triangles.forEach(triangle => {
            let dist: number = distnceFromStartToTarget(element.x, element.y, triangle.currentX, triangle.currentY)
            if (dist < 3 * pixelSize) {
                triangle.alive = false
                if (!element.enemy) addPoints(125)
            }
            else if (dist < (element.actualSize + 2) * pixelSize) {
                let angle: number = angleFromStartToTarget(element.x, element.y, triangle.currentX, triangle.currentY)
                triangle.currentX += (triangleSpeed * 3) * Math.sin(angle)
                triangle.currentY += (triangleSpeed * 3) * -Math.cos(angle)
            }
        });
    });
    booms = booms.filter(element => {
        return element.alive !== false
    });
}