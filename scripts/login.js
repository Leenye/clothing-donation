
$(document).ready(function(){

  $("#loginform").submit(function(){
    login();
    return false;
  });

});

function login(){
  var user=$("#username").val();
  var pass=$("#password").val();

  if(user == " "){
    $("#confirm").text("please input your username");
    $("#username").focus();
    return false;
  }

  if(pass == " "){
    $("#psconfirm").text("please input your password");
    $("#password").focus();
    return false;
  }

  $.ajax({
    type:"post",
    url:"../"
  });
}
