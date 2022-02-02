import { registerImage } from './lazy.js';

const maximum = 122;
const minimum = 1;

const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

export const createImageNodes = () => {
  const container = document.createElement('div');
  container.className = "p-4";

  const imagen = document.createElement('img');
  imagen.className = "mx-auto";
  imagen.width = '300';
  imagen.src =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=";
  imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

  container.appendChild(imagen);

  return [container, imagen];
};
  

const todaImagen = document.querySelectorAll("img[data-src]");
todaImagen.forEach(registerImage);


const imageContainer = document.querySelector("#images");
const button = document.querySelector("button[type='submit']");
button.addEventListener("click", () => {
  const [node, imagen] = createImageNodes();
  registerImage(imagen);
  imageContainer.append(node);
});


const borrar = document.querySelector("button[type='reset']");
borrar.addEventListener("click", () => {
  imageContainer.innerHTML = "";
});