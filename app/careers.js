// validate career form and input
const userFormInfo = document.getElementById("userFormInfo");
const fstName = document.getElementById("fstname");
const lstName = document.getElementById("lstname");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const submitBtn = document.getElementById("submit");
const uploadCV = document.getElementById("upCV");
let inputs = [fstName,lstName,phone,email];

phone.addEventListener("keydown", e =>{
    if (e.key.toLowerCase() === "e"){
        e.preventDefault();
    };
});

userFormInfo.addEventListener("submit", (e) => {
    let validationErrors = [];
    if(!fstName.value || fstName.value.length < 5){
        fstName.style.border = "2px solid red";
        validationErrors.push("fstName error");
    }
    if(!lstName.value || lstName.value.length < 5){
        lstName.style.border = "2px solid red";
        validationErrors.push("lstName error");
    }
    if(!phone.value || phone.value.length > 16){
        phone.style.border = "2px solid red";
        validationErrors.push("phone error");
    }
    if (!isEmail(email.value)) {
        email.style.border = "2px solid red"
        validationErrors.push("email error");
    }

    if (validationErrors.length > 0){
        e.preventDefault();
        validationErrors.length = 0;
        NormaliseInput(inputs);
    };
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