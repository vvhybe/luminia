// validation contact:
const userFormContact = document.getElementById("userFormContact");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("msg");
const submitBtn = document.getElementById("submit");
let inputs = [fullName,email,message];

userFormContact.addEventListener("submit", e => {
    let vlidateError = [];
    if (!fullName.value || fullName.value.length < 5) {
        vlidateError.push("Name error");
        fullName.style.border = "2px solid red";
    }
    if (!isEmail(email.value)) {
        vlidateError.push("email error");
        email.style.border = "2px solid red";
    }
    if (!message.value) {
        vlidateError.push("message error");
        message.style.border = "2px solid red";
    }
    if (vlidateError.length > 0){
        e.preventDefault();
        vlidateError.length = 0;
        NormaliseInput(inputs); 
    }
});

function isEmail(email) {
    var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(email);
};

function NormaliseInput(inputs){
    for (let input = 0; input < inputs.length; input++) {
        inputs[input].addEventListener("click" , () =>{
            inputs[input].style.border = "2px solid #8f8f8f";
            inputs[input].addEventListener("mouseover", () => {
                inputs[input].style.border = "2px solid white";
                inputs[input].addEventListener("mouseout", () => {
                    inputs[input].style.border = "2px solid #8f8f8f";
                });
            });
        }); 
    };
        
};

