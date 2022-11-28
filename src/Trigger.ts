import { ctx, canvas, triggers, cityColor, pixelSize } from './FrameRender';

export function drawTriggers() {
    triggers.forEach(element => {
        ctx.fillStyle = cityColor;
        ctx.fillRect(element.x, element.y, pixelSize, pixelSize);
        ctx.fillRect(element.x - pixelSize, element.y - pixelSize, pixelSize, pixelSize);
        ctx.fillRect(element.x + pixelSize, element.y - pixelSize, pixelSize, pixelSize);
        ctx.fillRect(element.x - pixelSize, element.y + pixelSize, pixelSize, pixelSize);
        ctx.fillRect(element.x + pixelSize, element.y + pixelSize, pixelSize, pixelSize);
    });

}
