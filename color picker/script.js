const image = document.getElementById('image');
const colorDiv = document.getElementById('color');

image.addEventListener('mousemove', (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  canvas.width = image.width;
  canvas.height = image.height;
  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  const pixelData = context.getImageData(x, y, 1, 1).data;
  const color = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;

  colorDiv.style.backgroundColor = color;
  colorDiv.textContent = color;
});
