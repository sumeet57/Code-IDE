function htmlbt(){
    document.getElementById("csse").style.display="none";
    document.getElementById("htmle").style.display="block";
    document.getElementById("jse").style.display="none";
    document.getElementById("nav").style.background="black";
    document.getElementById("htmlb").style.background="orange";
    document.getElementById("cssb").style.background="none";
    document.getElementById("jsb").style.background="none";
    document.getElementById("bd").style.background="#b0a6a5";
    document.getElementById("htmlb").style.color="black";
    document.getElementById("cssb").style.color="white";
    document.getElementById("jsb").style.color="white";
};
function cssbt(){
    document.getElementById("csse").style.display="block";
    document.getElementById("htmle").style.display="none";
    document.getElementById("jse").style.display="none";
    document.getElementById("nav").style.background="black";
    document.getElementById("cssb").style.background="skyblue";
    document.getElementById("htmlb").style.background="none";
    document.getElementById("jsb").style.background="none";
    document.getElementById("bd").style.background="#b0a6a5";
    document.getElementById("htmlb").style.color="white";
    document.getElementById("cssb").style.color="black";
    document.getElementById("jsb").style.color="white";
};
function jsbt(){
    document.getElementById("csse").style.display="none";
    document.getElementById("htmle").style.display="none";
    document.getElementById("jse").style.display="block";
    document.getElementById("nav").style.background="black";
    document.getElementById("jsb").style.background="rgb(199, 171, 10)";
    document.getElementById("cssb").style.background="none";
    document.getElementById("htmlb").style.background="none";
    document.getElementById("bd").style.background="#b0a6a5";
    document.getElementById("htmlb").style.color="white";
    document.getElementById("cssb").style.color="white";
    document.getElementById("jsb").style.color="black";
};



document.body.onkeyup = function bt(){

  let he = document.getElementById("htmle");
  let ce = document.getElementById("csse");
  let je = document.getElementById("jse");
  let final = document.getElementById("output");
  let H = he.value;
  let C = ce.value;
  let J = je.value;
  final.contentDocument.body.innerHTML = H+ "<style>"+C+"</style>";
  final.contentWindow.eval(J);
  

}