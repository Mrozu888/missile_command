export interface Rocket {
    targetX: number,
    targetY: number,
    currentX: number,
    currentY: number,
    angle: number,
    alive: boolean,
    missilePath: Array<string>

}
export interface Trigger {
    x: number
    y: number
    alive: boolean
}
export interface Missile {
    targetX: number,
    targetY: number,
    currentX: number,
    currentY: number,
    startX: number
    startY: number
    angle: number,
    alive: boolean,
    missilePath: Array<string>,
    multi: boolean
}
export interface Plane {
    leftDir: boolean
    currentX: number
    y: number
    alive: boolean
    xMissiles: Array<number>
}
export interface UFO {
    leftDir: boolean
    currentX: number
    currentY: number
    alive: boolean
    xMissiles: Array<number>
}
export interface Triangle {
    startX: number
    startY: number
    currentX: number
    currentY: number
    targetX: number
    targetY: number
    alive: boolean
}
export interface boom {
    x: number
    y: number
    size: number
    actualSize: number
    alive: boolean
    rise: boolean
    enemy: boolean
}