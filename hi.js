filenames = [
  "hi1.png",
  "hi2.png",
  "hi3.png",
  "hi4.png"
]

let imgs = document.getElementsByTagName('img');

for (imgElt of imgs){
  let r = Math.floor(Math.random() * filenames.length);
  let file = "img/" + filenames[r];
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
}
