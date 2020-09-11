const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIp');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () => container.classList.remove('right-panel-active'));

function Newperson(name,email,password){
    this.name = name;
    this.email = email;
    this.password = password;
}
$(document).ready(function () {
    $("button#signUp").click(function (event) {
         let name = $("input#name").val();
        let email = $("input#email").val();
        let password = $("input#password").val();
        if ($("input#name").val() && $("input#email").val() && $("input#password").val()!=""){

        $("#finallmessage").append("Hello " +person+ "! Thank you for signing up");
        $("#finallmessage").slideDown(1200);
      }
      else {
        alert("Please fill in you details in order to sign up");
      }
    });
    event.preventDefault()
});