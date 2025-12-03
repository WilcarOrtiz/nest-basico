import "./style.css";

//import { name,age } from "./bases/01-types";
//import { pokemons } from "./bases/02-objects.ts";
//import { charmander } from "./bases/03-clases.ts";
//import { charmander } from "./bases/04-injections.ts";
//import { charmander } from "./bases/05-decoradores";
import { charmander } from "./bases/06-decorators2";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
<h1> ${charmander.name}</h1>
  </div>
`;
