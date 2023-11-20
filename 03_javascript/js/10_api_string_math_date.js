/**
 * String
 * - "", '', ``로 리터럴을 감싸서 표현
 * - String내장객체에서 제공하는 api 사용
 */
function test1() {
    const str = "Apple Samsung PineApple";
    console.log(str);
    console.log(str.length); // 23
    // for(let i = 0; i < str.length; i++)
    // console.log(str[i]);

    // for(let i = 0; i < str.length; i++){ // 한글자씩뽑기
    // console.log(str[i], str.charAt(i));
    // }

    console.log(str.toLowerCase()); // Immutable
    console.log(str.toUpperCase()); // Immutable
    console.log(str); // 그대로있음

    console.log(str.indexOf('Sam')); // 6
    console.log(str.indexOf('Apple')); // 0
    console.log(str.lastIndexOf('Apple')); // 18

    // substring(start, end)
    // substr(start, length)
    console.log(str.substring(6, 9)); // Sam
    console.log(str.substr(6, 3)); // Sam / substr -> 낮은버젼에서는 곧 사라짐
    console.log(str.substring(6)); // Samsung PineApple
    console.log(str.substr(6)); // Samsung PineApple

    // replace(search, newStr)
    // replaceAll(search, newStr) - ECMA2021에 추가 (javascript = Ecamscript = ES)
    console.log(str.replace('Apple', '사과')); // 사과 Samsung PineApple
    console.log(str.replaceAll('Apple', '사과')); // 사과 Samsung Pine사과

    console.log(str.split(' ')); // (3) ['Apple', 'Samsung', 'PineApple']

}

/**
 *  @실습문제 : 사용자입력값에서 알파뱃개수 세기
 * - prompt 통해 임의의 문자열을 받고, 알파벳개수를 세서 출력하기
 */
function test2() {
    const str = prompt("문자를 입력하세요");
    if (!str) {
        alert("유효한 문자를 입력해주세요")
        return;
    }
 let cnt = 0;
 for(let i = 0; i < str.length; i++){
    console.log(str[i]);
    if(str[i] > "A" && str[i] <= "Z") // 대문자일경우
     cnt++;
    if(str[i] > "a" && str[i] <= "z") // 소문자일경우
     cnt++;
}
    alert(`입력하신 문자 ${str}에서 알파벳의 개수는 ${cnt}개 입니다🤗`)


    // 정규식
    const str1 = prompt(`문자열을 입력해주세요`);
    const newStr = str1.replace(/[^a-zA-Z]/g,'');
    console.log('알파벳은 ',newStr.length,'개입니다.');
}

/**
 * Math
 * - random
 * - ceil
 * - round
 * - floor
 * - trunc
 */
function test3() {
    // 0.0이상 1.0미만의 실수를 반환
    // Math.trunc(Math.random() * 경우의수 + 최소값)
    console.log(Math.trunc(Math.random() * 10 + 1));

    console.log(Math.ceil(12.34)); // 13
    console.log(Math.round(12.5)); // 13
    console.log(Math.floor(12.34)); // 12 -> 소수점 이하 버림

    console.log(Math.floor(-3.4), Math.trunc(-3.4)); // -4, -3

    // 123.456 반올림해서 123.46출력하기
    console.log(Math.round(123.456 * 100) / 100);
}

/**
 * @실습문제 : 난수목록태그 만들고, 짝수만 컬러변경하기(1 ~ 100)
 * - ul#nums하위의 li태그에 난수대입
 * - 짝수인 경우 컬러변경
 * - 매번 버튼 클릭시 숫자/컬러가 새로 지정되어야 함
 */
function test4() {
    const num = document.querySelectorAll("ul#nums li");
    console.log(num);

    for(let i = 0; i < num.length; i++) {
        num[i].style.color = 'initial'; // 초기화) initial | inherit
        const n = Math.trunc(Math.random() * 100 + 1);
        num[i].innerText = n;
        n % 2 == 0 && (num[i].style.color = 'lavender');
    }
}

/**
 * Date
 * - 날짜/시각을 관리하는 객체
 * - 기본적으로 시스템시각을 읽어와서 사용함
 */
function test5() {
    const now = new Date(); // new + 생성자함수 호출
    console.log((now));

    // 년, 월, 일
    console.log(now.getFullYear());
    console.log(now.getMonth() + 1); // 인덱스 기반이라 0 ~ 11까지 나오니까 +1 해주기
    console.log(now.getDate()); 

    // 시, 분, 초
    console.log(now. getHours());
    console.log(now. getMinutes());
    console.log(now. getSeconds());


    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    console.log(Date.now()); // UTC Time/초 (Epoch Time) -> 누적 밀리초

    const date = new Date(Date.now()); // UTC Time을 Date객체 생성하기
    const date1 = new Date(1700460422234); // 과거시간찍어보기
    console.log(date1);

    // 특정 날짜/시각객체
    const someday = new Date(1999, 8, 9, 12, 30); // 월은 0-based 숫자/ 
    console.log(someday);
}

/**
 * start, end시각을 밀리초로 각각 구해서 차이를 계산
 */
function test6() {
    // const start = Date.now();
    // foo();
    // const end = Date.now();
    // console.log((end - start), 'ms');

    console.time('Test');

    console.timeEnd('Test');
}

function foo() {
    let sum = 0;
    for(let i = 0; i < 100000; i++)
        sum += i;
        console.log(sum);
}