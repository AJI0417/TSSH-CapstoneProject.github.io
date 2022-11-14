/*時間顯示*/
function showTime() {
  let date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = " PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let time =
    year + "-" + month + "-" + day + " " + h + ":" + m + ":" + s + session;
  document.getElementById("MyClockDisplay").innerText = time;

  setInterval(showTime, 1000);
}
showTime();

/*替換AOS Animation*/
let MobileScreen = screen.width;
let itemDataset = document.querySelectorAll(".item");
itemDataset.forEach((index) => {
  if (MobileScreen <= 760) {
    index.dataset.aos = "fade-right";
  }
});
