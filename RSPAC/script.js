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

btn.onclick = function() {
  var pr=document.getElementById("print");
  var br=document.getElementById("branch");
  pr.innerHTML=br.value;
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

function CloseModal(){
    modal.style.display = "none";
}
function UploadImage(){
  var imgbox = document.getElementsByClassName("imagesbox")[0];
  var imgbox = document.getElementsByClassName("imagesbox")[0];
  var pay = document.getElementById("payment");
  if(pay.value == "online")
      imgbox.style.display="block";
  else
      imgbox.style.display="none";
}
function MemberShip(){
  var mem = document.getElementById("ieee");
  var memid = document.getElementById("memberid");

  if(mem.value == "ieee")
    memid.style.display="block";
  else
    memid.style.display="none";
}
