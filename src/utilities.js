export const drawRect = (detections, ctx) => {
  detections.forEach((prediction) => {
    //1) prediction results
    const [x, y, width, height] = prediction["bbox"];
    const text = prediction["class"];

    //2) set styling

    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    ctx.strokeStyle = color;
    ctx.font = "40px Aharoni";
    ctx.fillStyle = color;

    //3) draw rectangles and text
    ctx.beginPath();
    ctx.fillText(text, x, y);
    ctx.rect(x, y, width, height);
    ctx.stroke();
  });
};
