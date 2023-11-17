function printValue() {
    const purchaseFrm = document.getElementsByName("purchaseFrm");
    console.log(purchaseFrm, typeof purchaseFrm);
    purchaseFrm.innerHTML = "구입자 : "+ purchaseFrm

}

// function pname(){
//     const pname = document.getElementsByTagName();
//     console.log(pname[0].value);
// }