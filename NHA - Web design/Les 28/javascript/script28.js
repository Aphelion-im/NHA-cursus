var now = new Date();
var hours = now.getHours();
var psj = 0;
document.write('<style type="text/css">')
//18-19 night
if (hours > 17 && hours < 20) {
  document.write('body{background:orange; color:#FFFFFF;} a{color: yellow !important}')
}

//20-21 night
if (hours > 19 && hours < 22) {
  document.write('body{background:orangered; color:#FFFFFF;} a{color: yellow !important}')
}

//22-4 night
if (hours > 21 || hours < 5) {
  document.write('body{background:black; color:#FFFFFF;} a{color: yellow !important}')
}

//9-17 day
if (hours > 8 && hours < 18) {
  document.write('body{background:deepskyblue; color:#FFFFFF;} a{color: yellow !important}')
}

//7-8 day
if (hours > 6 && hours < 9) {
  document.write('body{background:skyblue; color:#FFFFFF;} a{color: yellow !important}')
}

//5-6 day
if (hours > 4 && hours < 7) {
  document.write('body{background:steelblue; color:#FFFFFF;} a{color: yellow !important}')
}
document.write('<\/style>')