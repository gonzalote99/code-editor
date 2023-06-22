const htmlCodeEl = document.querySelector('#html');
const cssCodeEl = document.querySelector('#css');
const outputEl = document.querySelector('#output');


function run() {
  localStorage.setItem('htmlCodeEl', htmlCodeEl.value);
  localStorage.setItem('cssCodeEl', cssCodeEl.value);
  


outputEl.contentDocument.body.innerHTML = `<style>${localStorage.cssCodeEl}</style>`
+ localStorage.htmlCodeEl;


}

htmlCodeEl.addEventListener("keyup", () => {run()})
cssCodeEl.addEventListener("keyup", () => {run()})


htmlCodeEl.value = localStorage.htmlCodeEl;
cssCodeEl.value = localStorage.cssCodeEl;