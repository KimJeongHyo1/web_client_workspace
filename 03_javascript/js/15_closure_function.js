/**
 * 자유변수 Free Variable
 * - 함수 지역범위에서 선언되지 않은 변수(를 자유변수라고함)
 */
const test1 = () => {
    say('길동');
}
const hello = "안녕";
/**
 * 지역변수 : str1, str2, name(매개변수)
 * 자유변수(함수에서 선언X) : hello
 */
const say = (name) => {
    const str1 = `${hello} ${name}`;
    const str2 = "밥 먹었니?"
    console.log(str1, str2);
};

/**
 * closure 함수
 * - 닫힘함수, 참조하는 자유변수를 가지고 외부로부터 닫힌 함수
 * - 함수를 반환하는 과정에서 클로져함수 생성가능
 * 
 */
const test2 = () => {
    const n = 20; // 이미 값을 가지고 있어서 20이라는 값을 가지지않음
    const foo2 = foo();
    foo2(); // const foo2 = () => console.log(n);
}

const foo = () => {
    const n = 10;
    return () => console.log(n);
}

let cnt = 0;
/**
 * 전역카운터
 */
const test3 = ()=> {
    cnt++;
    document.querySelector("#global-counter").innerHTML = cnt;
} // 누를때마다 카운트올라감, 전역변수라서 window콘솔에서도 변경가능함(위험)


const counterMaker = () => {
    let cnt = 0; // 외부에서 접근불가
    return () => {
        cnt++;
        document.querySelector("#closure-counter").innerHTML = cnt;
    };
}
/**
 * 클로져카운터
 */
// const test4 = () => {
const test4 = counterMaker(); // cnt라는 자유변수를 가지고 반환


