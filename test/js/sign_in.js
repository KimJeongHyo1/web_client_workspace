document.querySelector("#id").onblur = (e) => {
    const id_sub = document.querySelector("#id_sub");
    const {target : {value}} = e;
    console.log(value);
    if(!value) {
        id_sub.style.display="block";
        
    }
    else {id_sub.style.display = "none";
    }
};
document.querySelector("#password").onblur = (e) => {
    const pw_sub = document.querySelector("#pw_sub");
    const {target : {value}} = e;
    console.log(value);
    if(!value) {
        pw_sub.style.display = "block";
    }
    else { pw_sub.style.display = "none";
    }
};
document.querySelector("#pwcheck").onblur = (e) => {
    const pwcheck_sub = document.querySelector("#pwcheck_sub")
    const {target : {value}} = e;
    console.log(value);
    if(!value) {
        pwcheck_sub.style.display = "block";
    }
    else { pwcheck_sub.style.display = "none";
    }
};

function showPasswordMessage() {
    const message = document.getElementById("passwordMessage");
    message.style.display = "block";
}