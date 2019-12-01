$(document).ready(function() {
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.avatar').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    $(".file-upload").on('change', function(){
        readURL(this);
    });
});
function bacaGambar(input) {
    if (input.files && input.files[0]) {
       var reader = new FileReader();
  
       reader.onload = function (e) {
           $('#gambar_nodin').attr('src', e.target.result);
       }
  
       reader.readAsDataURL(input.files[0]);
    }
}

// tambah Berita
var modal = document.getElementById("tambahBerita");

// Get the button that opens the modal
var btn = document.getElementById("tambah");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Detail Berita
var modal1 = document.getElementById("detailBerita");


var btn1 = document.getElementById("detail");


var span1 = document.getElementsByClassName("close1")[0];


btn1.onclick = function() {
  modal1.style.display = "block";
}


span1.onclick = function() {
  modal1.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal1.style.display = "none";
  }
}

function validateForm() {
  var username = document.forms["myForm"]["username"].value;
  var password = document.forms["myForm"]["password"].value;
  var a =0;
  var b = 0;


  if (username == "" || password == "") {
    if(a == 0){
        document.getElementById("popup-peringatan").style.display="block";
        a = 1;
    }

    return false;

  }
}
