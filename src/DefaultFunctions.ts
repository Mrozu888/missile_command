import { pixelSize } from "./FrameRender";

export function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
export function angleFromStartToTarget(startX: number, startY: number, targetX: number, targetY: number) {
    return Math.atan2(targetY - startY, targetX - startX) + Math.PI / 2
}
export function distnceFromStartToTarget(startX: number, startY: number, targetX: number, targetY: number) {
    return Math.sqrt(Math.pow(startX - targetX, 2) + Math.pow(startY - targetY, 2))

}
export function filterPath(path: Array<string>) {
    for (let i = 1; i < path.length - 1; i++) {
        const element = path[i];
        let el: Array<string> = element.split(" ")
        let x: number = parseInt(el[0])
        let y: number = parseInt(el[1])

        const element1 = path[i - 1];
        let el1: Array<string> = element1.split(" ")
        let x1: number = parseInt(el1[0])
        let y1: number = parseInt(el1[1])

        const element2 = path[i + 1];
        let el2: Array<string> = element2.split(" ")
        let x2: number = parseInt(el2[0])
        let y2: number = parseInt(el2[1])

        if (y1 == y && x2 == x && Math.abs(x1 - x) == pixelSize)
            path = path.splice(i, 1)
        if (y1 == y && x2 == x && Math.abs(y2 - y) == pixelSize)
            path = path.splice(i, 1)
        if (y2 == y && x1 == x && Math.abs(x2 - x) == pixelSize)
            path = path.splice(i, 1)
        if (y2 == y && x1 == x && Math.abs(y1 - y) == pixelSize)
            path = path.splice(i, 1)
    }
    return path
}