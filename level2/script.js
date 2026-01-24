const map = {
  0:[1,1,1,1,1,1,0],
  1:[0,1,1,0,0,0,0],
  2:[1,1,0,1,1,0,1],
  3:[1,1,1,1,0,0,1],
  4:[0,1,1,0,0,1,1],
  5:[1,0,1,1,0,1,1],
  6:[1,0,1,1,1,1,1],
  7:[1,1,1,0,0,0,0],
  8:[1,1,1,1,1,1,1],
  9:[1,1,1,1,0,1,1]
};

function digit(n) {
  const names = ['a','b','c','d','e','f','g'];
  return `
    <div class="digit">
      ${map[n].map((v,i)=>
        `<div class="seg ${names[i]} ${v?'on':''}"></div>`
      ).join("")}
    </div>`;
}

function tick() {
  const time = new Date().toLocaleTimeString('en-GB').replace(/:/g,'');
  document.getElementById("clock").innerHTML =
    [...time].map(digit).join("");
}

setInterval(tick,1000);
tick();
