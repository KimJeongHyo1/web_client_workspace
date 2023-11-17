// DOM Document Object Model
// html문서(텍스트)를 계층구조를 그대로 반영해 javascript객체로 변환
// document
console.log(document);

/**
 * document.getElementById(id: string): HTMLElement | null
 */
function getById() {
    const li1 = document.getElementById("li1");// 한개만 찾을때(Element)
    console.log(li1, typeof li1);
    console.dir(li1); // 객체 계층구조로 열람

    console.log(li1.innerHTML); // getter
    li1.innerHTML = '안녕 자바스크립트 1'; // setter

    const notExist = document.getElementById("asdfqwerzxcv");
    // null = object타입의 값없음을 의미
    console.log(notExist, typeof notExist); // null 'object'
}

/**
 * document.getElementsByTagName(tagName : string): object[]
 */
function getByTag() {
    const list = document.getElementsByTagName("li");
    console.log(list, typeof list);

    // 반복문
    for(let i = 0; i < list.length; i++) {
        console.dir(list[i]);
        list[i].style.backgroundColor = 'lavender';
        list[i].style.color = '';
    }
}

/**
 * document.getElementsByClassName(class: string): object[]
 * 클래스는 여러개 찾을수도 있어서 s(Elements)가 붙음
 */
function getByClass() {
    const group1 = document.getElementsByClassName("group1");
    // const group1 = document.getElementsByClassName("group1 group2"); 복수로 찾을때
    console.log(group1, typeof group1);

    // Hello JS 1 [GROUP1]
    for(let i = 0; i < group1.length; i++) {
        console.dir(group1[i]);
        group1[i].innerHTML = group1[i].innerHTML + ' [GROUP1]';
        // group1[i].innerHTML += ' [GROUP1]'; = 강사님코드
    }
}

/**
 * geyElementsByName(name: string): object[]
 */
function getByName() {
    const hobbies = document.getElementsByName("hobby");
    console.log(hobbies, typeof hobbies);

    let hobbyChecked = '';
    for(let i = 0; i < hobbies.length; i++) {
        if(hobbies[i].checked) { // getter이면서 setter
            hobbyChecked += hobbies[i].value + " ";

        }
    }
    alert(hobbyChecked);
}


/**
 * [name=hobby] 체크박스를 모두 선택/해제
 */
function checkAll() {
    console.log('checkAll');
    const hobbies = document.getElementsByName("hobby");
    const all = document.getElementById("all"); // 명시해주는게 좋음 
    // id가 유일하기 때문에 해당 아이디를 변수처럼 바로 사용가능
    // const all = 123; // 덮어쓰기하면 오류남

    for(let i = 0; i < hobbies.length; i++) {
        // hobbies[i].checked = true; // 클릭하면 전부 선택
        // hobbies[i].checked = !hobbies[i].checked; // 선택되어있는것의 반전
        // hobbies[i].checked = document.getElementById("all").checked; // #all 체크박스의 checked속성
        hobbies[i].checked = all.checked; // #all 체크박스의 checked속성을 더 간단히
    }
}

function test1() {
    // name로 호출하기
    const name = document.getElementsByName("name");
    console.log(name[0].value);
    console.dir(name);
    alert(name.value);

    // id로 호출하기
    const inputs = document.getElementById("input");
    console.log(inputs);
    console.dir(name);

    // class로 호출하기
    const class1 = document.getElementsByClassName("user-input");
    console.log(class1[0].value);
}

// 점수출력하기
function test2() {
    const scoreInput = document.getElementById("score");
    console.log(scoreInput.value);
    const span = document.getElementById("display-score");
    span.innerHTML = scoreInput.value;
}

/**
 * document.querySelector(selector: string): HTMLElement | null
 *   - css선택자를 이용해서 하나의 DOM요소를 반환
 *   - 여러개의 요소를 반환하는 선택자를 사용한 경우 첫번째 요소만 반환
 */
function _querySelector() {
    const li1 = document.querySelector("#li1");
    console.log(li1);
    li1.innerHTML = '안녕';

    const li = document.querySelector("li.group2");
    console.log(li);
}

/**
 * css선택자를 이용해서 여러개 DOM요소를 배열로 반환
 */
function _querySelectorAll() {
    const list = document.querySelectorAll("li.group1");
    consol.log(list);
    // list.innerHTML = 'xxxxx'; // 배열객체에는 innerHTML 속성이 없다.
    for( let i = 0; i < list.length; i++){
        list[i].innerHTML = 'xxxxx';
    }
}