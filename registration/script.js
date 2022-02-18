function preview_image() 
{
 var total_file=document.getElementById("upload_file").files.length;
 for(var i=0;i<total_file;i++)
 {
  $('#image_preview').append("<img src='"+URL.createObjectURL(event.target.files[i])+"'><br>");
 }
 var preview = document.getElementById("image_preview");
 preview.style.visibility = "visible";
}

  $('.carousel').carousel({
  interval:2000
})
var modal = document.getElementById("myModal");
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];

function Registered(event) {
  event.preventDefault();
  var pr=document.getElementById("print");
  modal.style.display = "block";
}
function DisplayMessage(){
  var success = document.getElementById("success");
  var wait = document.getElementById('wait');
  wait.style.display = "none";
  success.style.display = "block";
  success.style.animation = "Successfully 1s 1";
}

span.onclick = function() {
  modal.style.display = "none";
}

function CloseModal(){
    modal.style.display = "none";
}


function DispRegistration(){
  var dispreg = document.getElementById("dispreg");
  var regblock = document.getElementById("registration");
  regblock.style.display = "block";
  dispreg.style.display = "none";
}
function UploadImage(){
  var imgbox = document.getElementsByClassName("imagebox")[0];
  var pay = document.getElementById("payment");
  if(pay.value == "Online Payment")
      imgbox.style.display="block";
  else
      imgbox.style.display="none";
}
function MemberShip(){
  var mem = document.getElementById("ieee");
  var memid = document.getElementById("memberid");
  var id = document.getElementById("memid");
  if(mem.value == "IEEE Member"){
    memid.style.display="block";
    id.value = "";
  }
  else{
    memid.style.display="none";
    id.value = "NULL";
  }
}
