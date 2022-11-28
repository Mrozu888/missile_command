import { ctx, numbersColor, pixelSize } from "./FrameRender"

export let score: number = 0
export let multiplier: number = 1
export function addPoints(points: number) {
    score += points * multiplier
}
export function setMultiplier(c: number) {
    multiplier = c
}

function draw0(x: number, y: number) {
    ctx.fillStyle = numbersColor
    ctx.fillRect(x + pixelSize, y, 4 * pixelSize, pixelSize)
    ctx.fillRect(x + pixelSize, y + 5 * pixelSize, 4 * pixelSize, pixelSize)
    ctx.fillRect(x, y + pixelSize, 2 * pixelSize, 4 * pixelSize)
    ctx.fillRect(x + 4 * pixelSize, y + pixelSize, 2 * pixelSize, 4 * pixelSize)
    ctx.fillRect(x + 3 * pixelSize, y + 2 * pixelSize, pixelSize, pixelSize)
    ctx.fillRect(x + 2 * pixelSize, y + 3 * pixelSize, pixelSize, pixelSize)
}
function draw1(x: number, y: number) {
    ctx.fillStyle = numbersColor
    ctx.fillRect(x + 2 * pixelSize, y, 2 * pixelSize, 6 * pixelSize)
    ctx.fillRect(x, y + 5 * pixelSize, 6 * pixelSize, pixelSize)
    ctx.fillRect(x + pixelSize, y + pixelSize, pixelSize, pixelSize)
}

function draw2(x: number, y: number) {
    ctx.fillStyle = numbersColor
    ctx.fillRect(x, y + 5 * pixelSize, 6 * pixelSize, pixelSize)
    ctx.fillRect(x + pixelSize, y + 4 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x + 2 * pixelSize, y + 3 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x + 3 * pixelSize, y + 2 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x + 4 * pixelSize, y + 1 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x, y + 1 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x + pixelSize, y, 4 * pixelSize, pixelSize)
}
function draw3(x: number, y: number) {
    ctx.fillStyle = numbersColor
    ctx.fillRect(x, y, 6 * pixelSize, pixelSize)
    ctx.fillRect(x + 3 * pixelSize, y + 1 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x + 2 * pixelSize, y + 2 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x + 3 * pixelSize, y + 3 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x + 4 * pixelSize, y + 4 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x, y + 4 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x + pixelSize, y + 5 * pixelSize, 4 * pixelSize, pixelSize)
}
function draw4(x: number, y: number) {
    ctx.fillStyle = numbersColor
    ctx.fillRect(x + 3 * pixelSize, y, 2 * pixelSize, 6 * pixelSize)
    ctx.fillRect(x + 2 * pixelSize, y + pixelSize, pixelSize, pixelSize)
    ctx.fillRect(x + 1 * pixelSize, y + 2 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x, y + 3 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x, y + 4 * pixelSize, 6 * pixelSize, pixelSize)
}
function draw5(x: number, y: number) {
    ctx.fillStyle = numbersColor
    ctx.fillRect(x, y, 6 * pixelSize, pixelSize)
    ctx.fillRect(x, y + pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x, y + 2 * pixelSize, 5 * pixelSize, pixelSize)
    ctx.fillRect(x + 4 * pixelSize, y + 3 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x, y + 4 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x + 4 * pixelSize, y + 4 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x + pixelSize, y + 5 * pixelSize, 4 * pixelSize, pixelSize)
}
function draw6(x: number, y: number) {
    ctx.fillStyle = numbersColor
    ctx.fillRect(x + pixelSize, y, 4 * pixelSize, pixelSize)
    ctx.fillRect(x, y + pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x, y + 2 * pixelSize, 5 * pixelSize, pixelSize)
    ctx.fillRect(x, y + 3 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x, y + 4 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x + pixelSize, y + 5 * pixelSize, 4 * pixelSize, pixelSize)
    ctx.fillRect(x + 4 * pixelSize, y + 3 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x + 4 * pixelSize, y + 4 * pixelSize, 2 * pixelSize, pixelSize)
}
function draw7(x: number, y: number) {
    ctx.fillStyle = numbersColor
    ctx.fillRect(x, y, 6 * pixelSize, pixelSize)
    ctx.fillRect(x + 4 * pixelSize, y + pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x + 3 * pixelSize, y + 2 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x + 2 * pixelSize, y + 3 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x + 1 * pixelSize, y + 4 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x + 1 * pixelSize, y + 5 * pixelSize, 2 * pixelSize, pixelSize)
}
function draw8(x: number, y: number) {
    ctx.fillStyle = numbersColor
    ctx.fillRect(x + pixelSize, y, 4 * pixelSize, pixelSize)
    ctx.fillRect(x, y + pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x + 4 * pixelSize, y + pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x + pixelSize, y + 2 * pixelSize, 4 * pixelSize, pixelSize)
    ctx.fillRect(x, y + 3 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x + 4 * pixelSize, y + 3 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x, y + 4 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x + 4 * pixelSize, y + 4 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x + pixelSize, y + 5 * pixelSize, 4 * pixelSize, pixelSize)
}
function draw9(x: number, y: number) {
    ctx.fillStyle = numbersColor
    ctx.fillRect(x + pixelSize, y, 4 * pixelSize, pixelSize)
    ctx.fillRect(x, y + pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x + 4 * pixelSize, y + pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x + pixelSize, y + 2 * pixelSize, 5 * pixelSize, pixelSize)
    ctx.fillRect(x + 4 * pixelSize, y + 3 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x + 3 * pixelSize, y + 4 * pixelSize, 2 * pixelSize, pixelSize)
    ctx.fillRect(x + 1 * pixelSize, y + 5 * pixelSize, 3 * pixelSize, pixelSize)
}
export function drawScore() {
    let sc: string = score.toString()
    if (sc.length == 1) {
        draw0(16 * pixelSize, 8 * pixelSize)
        draw0(24 * pixelSize, 8 * pixelSize)
        draw0(32 * pixelSize, 8 * pixelSize)
        draw0(40 * pixelSize, 8 * pixelSize)
        draw0(48 * pixelSize, 8 * pixelSize)
    }
    else if (sc.length == 2) {
        draw0(16 * pixelSize, 8 * pixelSize)
        draw0(24 * pixelSize, 8 * pixelSize)
        draw0(32 * pixelSize, 8 * pixelSize)
        drawNum(parseInt(sc[0]), 40 * pixelSize, 8 * pixelSize)
        drawNum(parseInt(sc[1]), 48 * pixelSize, 8 * pixelSize)
    }
    else if (sc.length == 3) {
        draw0(16 * pixelSize, 8 * pixelSize)
        draw0(24 * pixelSize, 8 * pixelSize)
        drawNum(parseInt(sc[0]), 32 * pixelSize, 8 * pixelSize)
        drawNum(parseInt(sc[1]), 40 * pixelSize, 8 * pixelSize)
        drawNum(parseInt(sc[2]), 48 * pixelSize, 8 * pixelSize)
    }
    else if (sc.length == 4) {
        draw0(16 * pixelSize, 8 * pixelSize)
        drawNum(parseInt(sc[0]), 24 * pixelSize, 8 * pixelSize)
        drawNum(parseInt(sc[1]), 32 * pixelSize, 8 * pixelSize)
        drawNum(parseInt(sc[2]), 40 * pixelSize, 8 * pixelSize)
        drawNum(parseInt(sc[3]), 48 * pixelSize, 8 * pixelSize)
    }
    else if (sc.length == 5) {
        drawNum(parseInt(sc[0]), 16 * pixelSize, 8 * pixelSize)
        drawNum(parseInt(sc[1]), 24 * pixelSize, 8 * pixelSize)
        drawNum(parseInt(sc[2]), 32 * pixelSize, 8 * pixelSize)
        drawNum(parseInt(sc[3]), 40 * pixelSize, 8 * pixelSize)
        drawNum(parseInt(sc[4]), 48 * pixelSize, 8 * pixelSize)
    }
}
function drawNum(num: number, x: number, y: number) {
    if (num == 0) draw0(x, y)
    if (num == 1) draw1(x, y)
    if (num == 2) draw2(x, y)
    if (num == 3) draw3(x, y)
    if (num == 4) draw4(x, y)
    if (num == 5) draw5(x, y)
    if (num == 6) draw6(x, y)
    if (num == 7) draw7(x, y)
    if (num == 8) draw8(x, y)
    if (num == 9) draw9(x, y)
}


export function drawMultipler(x: number, y: number) {
    let text: Array<Array<number>> = [
        [1, 1, 1, 1, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
    ]
    drawPixels(x, y, text)
    text = [
        [0, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 0],
    ]
    drawPixels(x + 10 * pixelSize, y, text)
    text = [
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
    ]
    drawPixels(x + 20 * pixelSize, y, text)
    text = [
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 0, 0, 1, 1],
        [1, 1, 0, 1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 0, 1, 1],
        [1, 1, 0, 0, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
    ]
    drawPixels(x + 30 * pixelSize, y, text)
    text = [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
    ]
    drawPixels(x + 40 * pixelSize, y, text)
    text = [
        [0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0],
    ]
    drawPixels(x + 50 * pixelSize, y, text)
    text = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ]
    drawPixels(x - 10 * pixelSize, y, text)
    let n1 = [
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
    ]
    let n2 = [
        [0, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
    ]
    let n3 = [
        [0, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 0],
    ]
    let n4 = [
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 0],
    ]
    let n5 = [
        [1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0],
    ]
    let n6 = [
        [0, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 0],
    ]

    if (multiplier == 1) drawPixels(x - 20 * pixelSize, y, n1)
    if (multiplier == 2) drawPixels(x - 20 * pixelSize, y, n2)
    if (multiplier == 3) drawPixels(x - 20 * pixelSize, y, n3)
    if (multiplier == 4) drawPixels(x - 20 * pixelSize, y, n4)
    if (multiplier == 5) drawPixels(x - 20 * pixelSize, y, n5)
    if (multiplier == 6) drawPixels(x - 20 * pixelSize, y, n6)

}



export function drawGameOver(x: number, y: number) {
    let text: Array<Array<number>> = [
        [0, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1],
    ]
    drawPixels(x, y, text)
    text = [
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
    ]
    drawPixels(x + 10 * pixelSize, y, text)
    text = [
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
    ]
    drawPixels(x + 20 * pixelSize, y, text)
    text = [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
    ]
    drawPixels(x + 30 * pixelSize, y, text)
    text = [
        [0, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 0],
    ]
    drawPixels(x + 42 * pixelSize, y, text)
    text = [
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [0, 1, 1, 0, 0, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
    ]
    drawPixels(x + 52 * pixelSize, y, text)
    text = [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
    ]
    drawPixels(x + 62 * pixelSize, y, text)
    text = [
        [1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 0, 0, 0],
        [1, 1, 0, 1, 1, 1, 0, 0],
        [1, 1, 0, 0, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1, 1],
    ]
    drawPixels(x + 72 * pixelSize, y, text)
}

export function drawStart(x: number, y: number) {
    let text: Array<Array<number>> = [
        [0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1],
    ]
    drawPixels(x, y, text)
    text = [
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 0],
    ]
    drawPixels(x + 10 * pixelSize, y, text)
    text = [
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
    ]
    drawPixels(x + 20 * pixelSize, y, text)
    text = [
        [0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1],
    ]
    drawPixels(x + 30 * pixelSize, y, text)
    text = [
        [1, 1, 0, 0, 0, 0, 1, 0],
        [1, 1, 0, 0, 0, 1, 1, 0],
        [1, 1, 0, 0, 1, 1, 0, 0],
        [1, 1, 0, 1, 1, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 0, 1, 1, 0, 0, 0],
        [1, 1, 0, 0, 1, 1, 0, 0],
        [1, 1, 0, 0, 0, 1, 1, 0],
        [1, 1, 0, 0, 0, 0, 1, 0],
    ]
    drawPixels(x + 40 * pixelSize, y, text)
    text = [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
    ]
    drawPixels(x + 52 * pixelSize, y, text)
    text = [
        [0, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 0],
    ]
    drawPixels(x + 62 * pixelSize, y, text)
    text = [
        [0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0],
    ]
    drawPixels(x + 74 * pixelSize, y, text)
    text = [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
    ]
    drawPixels(x + 84 * pixelSize, y, text)
    text = [
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
    ]
    drawPixels(x + 94 * pixelSize, y, text)
    text = [
        [1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 0, 0, 0],
        [1, 1, 0, 1, 1, 1, 0, 0],
        [1, 1, 0, 0, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1, 1],
    ]
    drawPixels(x + 104 * pixelSize, y, text)
    text = [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
    ]
    drawPixels(x + 114 * pixelSize, y, text)
}





function drawPixels(x: number, y: number, arr: Array<Array<number>>) {
    for (let yVal = 0; yVal < arr.length; yVal++) {
        for (let xVal = 0; xVal < arr[yVal].length; xVal++) {
            if (arr[yVal][xVal] == 1) {
                ctx.fillStyle = numbersColor
                ctx.fillRect(x + xVal * pixelSize, y + yVal * pixelSize, pixelSize, pixelSize)
            }

        }

    }
}