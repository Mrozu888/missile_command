import { ctx, canvas, triangles, enemyObjectsColor, pixelSize, targetsX, destroySilo, triangleSpeed, targetsY } from './FrameRender';
import { angleFromStartToTarget, getRandomInt } from "./DefaultFunctions";
import { removeCity } from './World';
export function createTriangle() {
    if (triangles.length < 4) {
        let trinagleStartX: number = Math.floor(getRandomInt(3 * pixelSize, canvas.width - 3 * pixelSize) / pixelSize) * pixelSize
        triangles.push({
            startX: trinagleStartX,
            startY: 112,
            currentX: trinagleStartX,
            currentY: 112,
            targetX: targetsX[Math.floor(Math.random() * targetsX.length)] + 5 * pixelSize,
            targetY: Math.floor((targetsY - 3 * pixelSize) / pixelSize) * pixelSize + 1 / 2 * pixelSize,
            alive: true
        })
    }
}
export function drawTriangle() {
    triangles.forEach(element => {
        let angle: number = angleFromStartToTarget(element.currentX, element.currentY, element.targetX, element.targetY)
        element.currentX += triangleSpeed * Math.sin(angle)
        element.currentY += triangleSpeed * -Math.cos(angle)

        let x: number = Math.floor(element.currentX / pixelSize) * pixelSize
        let y: number = Math.floor(element.currentY / pixelSize) * pixelSize
        ctx.fillStyle = enemyObjectsColor
        ctx.fillRect(x - 2 * pixelSize, y - pixelSize, 5 * pixelSize, pixelSize);
        ctx.fillRect(x - 1 * pixelSize, y, 3 * pixelSize, pixelSize);
        ctx.fillRect(x, y + pixelSize, pixelSize, pixelSize);
        if (Math.abs((Math.floor(element.currentX / pixelSize) * pixelSize) - (Math.floor(element.targetX / pixelSize) * pixelSize)) < pixelSize &&
            Math.abs((Math.floor(element.currentY / pixelSize) * pixelSize) - (Math.floor(element.targetY / pixelSize) * pixelSize)) < pixelSize) {
            element.alive = false
            if (element.targetX - 5 * pixelSize == targetsX[0]) removeCity(0)
            if (element.targetX - 5 * pixelSize == targetsX[1]) removeCity(1)
            if (element.targetX - 5 * pixelSize == targetsX[2]) removeCity(2)
            if (element.targetX - 5 * pixelSize == targetsX[3]) destroySilo()
            if (element.targetX - 5 * pixelSize == targetsX[4]) removeCity(3)
            if (element.targetX - 5 * pixelSize == targetsX[5]) removeCity(4)
            if (element.targetX - 5 * pixelSize == targetsX[6]) removeCity(5)

        }
    });
}
