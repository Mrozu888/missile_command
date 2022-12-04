import { airColor, ctx, levelFinished, pixelSize, worldColor, cityColor } from './FrameRender';
export class City {
    alive: boolean
    cityX: number
    cityY: number
    color: string
    survived: boolean = false
    constructor(x: number, y: number) {
        this.alive = true
        this.cityX = x
        this.cityY = y
    }
    drawCity() {
        if (this.alive) {
            if (!this.survived) {
                ctx.fillStyle = cityColor;
                ctx.fillRect(this.cityX, this.cityY, 12 * pixelSize, pixelSize)
                ctx.fillRect(this.cityX, this.cityY - pixelSize, 11 * pixelSize, pixelSize)
                ctx.fillRect(this.cityX + pixelSize, this.cityY - 2 * pixelSize, pixelSize, pixelSize)
                ctx.fillRect(this.cityX + 2 * pixelSize, this.cityY - 4 * pixelSize, pixelSize, 3 * pixelSize)
                ctx.fillRect(this.cityX + 4 * pixelSize, this.cityY - 3 * pixelSize, pixelSize, 2 * pixelSize)
                ctx.fillRect(this.cityX + 6 * pixelSize, this.cityY - 3 * pixelSize, pixelSize, 2 * pixelSize)
                ctx.fillRect(this.cityX + 7 * pixelSize, this.cityY - 2 * pixelSize, pixelSize, pixelSize)
                ctx.fillRect(this.cityX + 9 * pixelSize, this.cityY - 2 * pixelSize, pixelSize, pixelSize)
            }

        }
    }
    destroyCity() {
        ctx.fillStyle = cityColor
        ctx.fillRect(this.cityX, this.cityY, 2 * pixelSize, pixelSize)
        ctx.fillRect(this.cityX, this.cityY - pixelSize, pixelSize, pixelSize)
        ctx.fillRect(this.cityX + 10 * pixelSize, this.cityY, 2 * pixelSize, pixelSize)
        ctx.fillStyle = airColor
        ctx.fillRect(this.cityX + 4 * pixelSize, this.cityY + pixelSize, 4 * pixelSize, pixelSize)

    }
    drawSurvivedCity(x: number, y: number) {
        ctx.fillStyle = cityColor
        ctx.fillRect(x, y, 12 * pixelSize, pixelSize)
        ctx.fillRect(x, y - pixelSize, 11 * pixelSize, pixelSize)
        ctx.fillRect(x + pixelSize, y - 2 * pixelSize, pixelSize, pixelSize)
        ctx.fillRect(x + 2 * pixelSize, y - 4 * pixelSize, pixelSize, 3 * pixelSize)
        ctx.fillRect(x + 4 * pixelSize, y - 3 * pixelSize, pixelSize, 2 * pixelSize)
        ctx.fillRect(x + 6 * pixelSize, y - 3 * pixelSize, pixelSize, 2 * pixelSize)
        ctx.fillRect(x + 7 * pixelSize, y - 2 * pixelSize, pixelSize, pixelSize)
        ctx.fillRect(x + 9 * pixelSize, y - 2 * pixelSize, pixelSize, pixelSize)
    }
}
