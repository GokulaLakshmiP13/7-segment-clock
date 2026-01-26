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
  const now = new Date();
  const h = String(now.getHours()).padStart(2,'0');
  const m = String(now.getMinutes()).padStart(2,'0');
  const s = String(now.getSeconds()).padStart(2,'0');

  const time = h + m + s;
  let html = '';

  [...time].forEach((d,i) => {
    html += digit(d);
    if (i === 1 || i === 3) {
      html += `
        <div class="colon">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>`;
    }
  });

  document.getElementById("clock").innerHTML = html;
}

setInterval(tick,1000);
tick();
