window.addEventListener('click', function () {
  console.log("== The window was clicked.");
});

var boxes = document.getElementsByClassName('box');
var firstBox = boxes[0];
firstBox.addEventListener('click', function (event) {
  console.log("== The first box was clicked.");
  console.log("  -- event.target:", event.target);
  console.log("  -- event.currentTarget:", event.currentTarget);
  event.stopPropagation();
});

function buttonClickListener(event) {
  console.log("== A button was clicked.");
  console.log("  -- event:", event);
  console.log("  -- event.target:", event.target);
  console.log("  -- event.currentTarget:", event.currentTarget);

  var buttonBox = event.currentTarget.parentNode;
  buttonBox.classList.toggle('highlighted');
}

var buttons = document.getElementsByClassName('in-box-button');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', buttonClickListener);
}

var link = document.getElementById('website-link');
link.addEventListener('click', function (event) {
  console.log("== The link was clicked.");
  event.preventDefault();
});
