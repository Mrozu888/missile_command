import { angleFromStartToTarget, filterPath, getRandomInt } from './DefaultFunctions';
import { ctx, canvas, triggers, cityColor, pixelSize, missileSpeed, targetsX, missiles, destroySilo, targetsY, numbersColor } from './FrameRender';
import { Missile } from './Interfaces';
import { removeCity } from './World';

export function createMissile() {
    if (missiles.length < 5) {
        let missileStartX: number = Math.floor(getRandomInt(3 * pixelSize, canvas.width - 3 * pixelSize) / pixelSize) * pixelSize
        let missileStartY: number = 0

        let missileTargetX: number = targetsX[Math.floor(Math.random() * targetsX.length)] + 5 * pixelSize
        let missileTargetY: number = Math.floor((targetsY - 3 * pixelSize) / pixelSize) * pixelSize + 1 / 2 * pixelSize
        let angle: number = angleFromStartToTarget(missileStartX, missileStartY, missileTargetX, missileTargetY)
        missiles.push({
            targetX: missileTargetX,
            targetY: missileTargetY,
            currentX: missileStartX,
            currentY: missileStartY,
            startX: missileStartX,
            startY: missileStartY,
            angle: angle,
            alive: true,
            missilePath: [],
            multi: true
        })
    }

}
export function drawMissiles() {
    missiles.forEach(element => {
        element.currentX += missileSpeed * Math.sin(element.angle)
        element.currentY += missileSpeed * -Math.cos(element.angle)

        let x: number = Math.floor(element.currentX / pixelSize) * pixelSize
        let y: number = Math.floor(element.currentY / pixelSize) * pixelSize

        let pathStr: string = x.toString() + " " + y.toString()

        if (!element.missilePath.includes(pathStr)) {
            element.missilePath.push(pathStr)
        }
        filterPath(element.missilePath)


        if (Math.abs((Math.floor(element.currentX / pixelSize) * pixelSize) - (Math.floor(element.targetX / pixelSize) * pixelSize)) == 0 &&
            Math.abs((Math.floor(element.currentY / pixelSize) * pixelSize) - (Math.floor(element.targetY / pixelSize) * pixelSize)) == 0) {
            element.alive = false
            if (element.targetX - 5 * pixelSize == targetsX[0]) removeCity(0)
            if (element.targetX - 5 * pixelSize == targetsX[1]) removeCity(1)
            if (element.targetX - 5 * pixelSize == targetsX[2]) removeCity(2)
            if (element.targetX - 5 * pixelSize == targetsX[3]) destroySilo()
            if (element.targetX - 5 * pixelSize == targetsX[4]) removeCity(3)
            if (element.targetX - 5 * pixelSize == targetsX[5]) removeCity(4)
            if (element.targetX - 5 * pixelSize == targetsX[6]) removeCity(5)
            triggers.forEach(element1 => {
                if (element1.x == Math.floor(element.currentX / pixelSize) * pixelSize &&
                    element1.y == Math.floor(element.currentY / pixelSize) * pixelSize) {
                    element1.alive = false
                }
            });

        }
        drawMissilePath(element)

    });


}

export function drawMissilePath(missile: Missile) {
    missile.missilePath.forEach(element => {
        let el: Array<string> = element.split(" ")
        ctx.fillStyle = numbersColor
        ctx.fillRect(parseInt(el[0]), parseInt(el[1]), pixelSize, pixelSize);
    });
    ctx.fillStyle = "purple"
    ctx.fillRect((Math.floor(missile.currentX / pixelSize) * pixelSize), (Math.floor(missile.currentY / pixelSize) * pixelSize), pixelSize, pixelSize);
    if (missile.multi && missile.currentY < 500)
        if (getRandomInt(0, 1000) < 1) createRandomMissile(missile.currentX, missile.currentY)
}


function createRandomMissile(startX: number, startY: number) {
    for (let i = 0; i < getRandomInt(1, 4); i++) {
        let targetX: number = targetsX[Math.floor(Math.random() * targetsX.length)] + 5 * pixelSize
        let targetY: number = Math.floor((targetsY - 3 * pixelSize) / pixelSize) * pixelSize + 1 / 2 * pixelSize
        let angle: number = angleFromStartToTarget(startX, startY, targetX, targetY)
        missiles.push({
            targetX: targetX,
            targetY: targetY,
            currentX: startX,
            currentY: startY,
            startX: startX,
            startY: startY,
            angle: angle,
            alive: true,
            missilePath: [],
            multi: false
        })
    }
}
export function createPlaneMissile(startX: number, startY: number) {
    for (let i = 0; i < getRandomInt(1, 2); i++) {
        let targetX: number = targetsX[Math.floor(Math.random() * targetsX.length)] + 5 * pixelSize
        let targetY: number = Math.floor((targetsY - 3 * pixelSize) / pixelSize) * pixelSize + 1 / 2 * pixelSize
        let angle: number = angleFromStartToTarget(startX, startY, targetX, targetY)
        missiles.push({
            targetX: targetX,
            targetY: targetY,
            currentX: startX,
            currentY: startY,
            startX: startX,
            startY: startY,
            angle: angle,
            alive: true,
            missilePath: [],
            multi: false
        })
    }
}


