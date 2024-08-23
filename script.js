function randomColor(id) {  
  var r = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  var g = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  var b = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  
  // Combine r g b to form the hexcode
  var col = "#" + r + g + b;
  
  document.getElementById(id).style.backgroundColor = col;
  document.getElementById(id).innerText = col;

}

// call the randomColor function for each element
document.getElementById("btn1").onclick = function () {
  var i = 1;
  while (i < 11) {
    var id = "color" + i;
    randomColor(id);
    i++;
  }
};
