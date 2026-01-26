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
  let s = map[n];
  return `
  <svg viewBox="0 0 100 200">
    <rect class="seg ${s[0]?'on':''}" x="20" y="0" width="60" height="10"/>
    <rect class="seg ${s[1]?'on':''}" x="80" y="15" width="10" height="70"/>
    <rect class="seg ${s[2]?'on':''}" x="80" y="105" width="10" height="70"/>
    <rect class="seg ${s[3]?'on':''}" x="20" y="180" width="60" height="10"/>
    <rect class="seg ${s[4]?'on':''}" x="10" y="105" width="10" height="70"/>
    <rect class="seg ${s[5]?'on':''}" x="10" y="15" width="10" height="70"/>
    <rect class="seg ${s[6]?'on':''}" x="20" y="90" width="60" height="10"/>
  </svg>`;
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
