/**
 *  class를 통한 제어
 *    - className (문자열)
 *    - classList객체
 *      -add(className: string)
 *      -remove(className: string)
 *      -toggle(className: string)
 */
function checkSubject(checkbox) {
    console.log('checkSubject', checkbox);
    // 부모 td찾기
    const td = checkbox.parentElement;
    console.log(td);

    // .on Toggle
    // td.className = checkbox.checked ? "on" : ""; // 삼항연산자
    //if문으로
    // if(checkbox.checked) {
    //     td.className = "on";
    // }
    // else {
    //     td.className = "";
    // }

    // class제어할때는 List로 쓰는게 좋음
//     if(checkbox.checked) {
//         td.classList.add("on");
//         }
//     else {
//         td.classList.remove("on");
//     }

    // 더 간단히
    td.classList.toggle("on");
}