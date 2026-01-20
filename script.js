const text = "Open When Letters for Muntaha 💌";
let i = 0;
function typeTitle() {
  if (i < text.length) {
    document.getElementById("title").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeTitle, 80);
  }
}
typeTitle();
