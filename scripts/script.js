var a = ["azure", "lavenderblush", "mintcream", "whitesmoke"];
var i = 0;
var b = document.getElementsByTagName('body');
b = b[0];

//console.log(b)
function init(){
  setTimeout(function(e){
    //alert(a[i]);
    if(i == 3)i = 0;
    b.style.background = a[i];
    i++;
    init();
  },10000);
};
init();