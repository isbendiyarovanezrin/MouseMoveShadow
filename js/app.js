"use strict";

const hero = document.querySelector(".hero");
const text = hero.querySelector(".text");
let walk = 200; // 200px

hero.addEventListener("mousemove", shadow);

function shadow(e) {
  let { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk * 2 - walk);
  const yWalk = Math.round((y / height) * walk * 2 - walk);

  text.style.textShadow = `
  ${xWalk}rem ${yWalk}rem 0 var(--yellow),
  ${xWalk * -1}rem ${yWalk}rem var(--purple),
  ${xWalk}rem ${yWalk * -1}rem 0 var(--blue),
  ${xWalk * -1}rem ${yWalk * -1}rem var(--green)
  `;
}
