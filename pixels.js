var colors = ["#000000", "#2A001C", "#550039", "#800055", "#AA0071", "#BB256A", "#CC4C44", "#DD732D", "#EE9917", "#FFBF00"];
$(document).ready(function() {
  for (var i = 0; i < 220; i++) {
    document.getElementById("pixelol").innerHTML += '<li class="pixel" brightness="0"></li>';
  }
  var pixelList = document.getElementsByClassName("pixel");
  for (var i = 0; i < pixelList.length; i++) {
    pixelList.item(i).setAttribute("brightness", pixels[i]);
    pixelList.item(i).style.background = colors[pixels[i]];
  }
});
$("ol").mouseover(function(e) {
  var newBrightness = Number(e.target.getAttribute("brightness"));
  if (Number(e.target.getAttribute("brightness")) < 9) {
    newBrightness++;
  }
  e.target.setAttribute("brightness", newBrightness);
  e.target.style.background = colors[newBrightness];
  var index = $(e.target).index();
  if (pixels[index] < 9) {
    pixels[index]++;
  }
  localStorage.setItem("pixels", JSON.stringify(pixels));
});
