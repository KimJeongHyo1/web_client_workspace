function printValue() {
    const inputs = document.getElementsByTagName("input"); // 복수개
    const userName = inputs[0].value;
    const productName = document.getElementById("pname").value;
    const prices = document.getElementsByName("price"); // 복수개
    const price = prices[0].value;

    const area = document.getElementById("area");
    area.innerHTML = "구입자 : " + userName + "님<br>";
    area.innerHTML += "구입상품 : " + productName + "<br>";
    area.innerHTML += "구매가격 : " + price + "만원"

    // 초기화
    // 1. input태그별 
    // for(let i = 0; i < inputs.length; i++)
    // 	inputs[i].value = '';

    // 2. 폼단위
    // document.querySelector("[name=purchaseFrm]");
    // document.forms[0]
    // document.forms.purchaseFrm
    document.purchaseFrm.reset(); // 폼하위의 input태그 value속성 초기화
    
}