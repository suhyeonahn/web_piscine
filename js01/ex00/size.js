//const time = document.body.lastElementChild.firstElementChild;

const currentTime = document.body.lastElementChild.firstElementChild;
const ul = document.body.lastElementChild.lastElementChild;

const screen = document.createElement('li');
const windowOuter = document.createElement('li');
const windowInner = document.createElement('li');
const doc = document.createElement('li');

const date = new Date();

currentTime.innerHTML = `${date.toLocaleTimeString()}`;
screen.innerHTML = `Screen: ${window.screen.width} * ${window.screen.height}`;
windowOuter.innerHTML = `Window Outer: ${window.innerWidth} * ${window.innerHeight}`;
windowInner.innerHTML = `Window Inner: ${window.outerWidth} * ${window.outerHeight}`;
doc.innerHTML = `Document: ${document.body.scrollWidth} * ${document.body.scrollHeight}`

ul.appendChild(screen);
ul.appendChild(windowOuter);
ul.appendChild(windowInner);
ul.appendChild(doc);


