function updateClocks() {
  document.getElementById("india").innerText =
    "India 🇮🇳 : " + new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" });

  document.getElementById("usa").innerText =
    "USA 🇺🇸 : " + new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" });

  document.getElementById("uk").innerText =
    "UK 🇬🇧 : " + new Date().toLocaleTimeString("en-GB", { timeZone: "Europe/London" });

  document.getElementById("japan").innerText =
    "Japan 🇯🇵 : " + new Date().toLocaleTimeString("ja-JP", { timeZone: "Asia/Tokyo" });
}

setInterval(updateClocks, 1000);
updateClocks();
