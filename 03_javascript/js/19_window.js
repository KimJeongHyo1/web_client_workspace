/**
 * window
 * - 브라우져 최상위객체
 * - 탭별로 하나씩 존재함
 * 
 * - BOM Browser Object Model - navigator, history, screen ...
 * - DOM Document Object Model - document
 * - Javascript Object 
 * - ...
 */
const test1 = () => {
    console.log(window);
};

/**
 * open
 * - 새창(탭/팝업)을 여는 함수
 * - 새창의 window객체를 반환. 해당 창에 대한 제어가능 
 */
const test2 = () => {
    // window.
    // open(url, name, spec)
    // const newWindow = open('01_hellojs.html', 'hellojs', ''); // 전달받아야할 3가지

    // 팝업창처럼 띄우기(크키지정 안하면 팝업처럼 뜸) / 같은 이름의 window를 또 띄우지않음
    const newWindow = open('01_hellojs.html', 'hellojs', 'width=500, height=300, top=400, left=400');
    
    // 현재 탭을대체
    // const newWindow = open('01_hellojs.html', '_self');
    console.log(newWindow);
    console.log(newWindow.opener); // 현재창을 가르킴

    setTimeout(() => {
    //     newWindow.close();
        // newWindow.alert('🛩🛩🛩');
        newWindow.document.write('<h1>👒👒👒</h1>');
        newWindow.opener.alert('🛩🛩🛩');
    }, 3000); // 3초 지나면 창 꺼짐
};

/**
 * Time API - setTimeout
 * - milli초 후에 callback함수 실행
 * - js시간은 쓰레드스케쥴링에 의해 늘어질 수 있다
 */
const test3 = () =>{
    const timeoutId = setTimout(() => {
    // setTimeout(() => {
        alert('📍📍📍')
    }, 1000);
    console.log(timeoutId);
};

// IIFE
(() => {
    setTimeout(() => {
        console.log('회원가입 후 더 많은 혜택을 누리세요');
        ('회원가입 후 더 많은 혜택을 누리세요');
    }, 5000);
})();


/**
 * setInterval(callbackFunction, millis)
 * - millis초 후에 callbackFunction을 실행
 * - millis초 간격으로 callbackFunction을 실행
 * - clearIntervaal(id)로 취소하기전까지 실행
 * 
 * 브라우져 끌때까지 지속됨
 */
let ingervalId;
const test4 = () => {
    let i = 1;
    const intervalId = setInterval(() => {
    // setInterval(() => {
        console.log(i++);
    }, 1000);
    console.log(intervalId, '번 인터벌이 등록되었습니다');
};

/**
 * 사용자 타이머
 */
let timeoutId; // 전역변수
const test5 = () => {
    const message = document.querySelector("#message");
    const sec = document.querySelector("#sec");

    console.log(message.value, sec.value); // 사용자입력값보기
    const messageVal = message.value; // 초기화시 간섭안받으려고 변수씀

    // 유효성검사
    if(!message.value || !sec.value) {
        alert('🎃유효한 값을 입력하세요🎃');
         return;
    }

    // 
    timeoutId = setTimeout(() => {
        alert(messageVal);
        timeoutId = undefined; // id제거
    }, sec.value * 1000);
    console.log(timeoutId, '번 타이머가 설정되었습니다');

    // 초기화
    message.value = '';
    sec.value = '';
};

const test6 = () => {
    if(timeoutId) {
    clearTimeout(timeoutId);
    alert('타이머가 취소 되었습니다😋');
    }
};


/**
 * 초시계
 */
const f = (n) => n < 10 ? '0' + n : n;
const clock = () => {
    const d = new Date();
    const hh = f(d.getHours());
    const mm = f(d.getMinutes());
    const ss = f(d.getSeconds());
    console.log(`${hh}:${mm}:${ss}`);
    return `${hh}:${mm}:${ss}`;
};

const displqayClock = () => document.querySelector("#clock-display").innerHTML = clock();
displqayClock();
setInterval(() => {
    // document.querySelector("#clock-display").innerHTML = clock();
}, 1000);