/**
 * Array
 * - js배열은 타입지정이 없고, 크기 제한도 없다
 * - java의 ArrayList<object>와 비슷
 */
function test1() {
    const arr1 = [1, 2, 3]; // 리터럴로 생성
    const arr2 = new Array(1, 2, 3); // new 연산자로 생성

    console.log(arr1);
    console.log(arr2);
    console.log(arr1 == arr2); // false

    // 존재하지 않는 요소 참조시 undefined를 반환(오류X)
    console.log(arr1[0], arr1[1], arr1[2], arr1[3]); // 1 2 3 undefined
    // arr1[100].abcdef(); // 없는요소 부를때는 오류없지만 없는요소 참조하면 오류남 
              // Uncaught TypeError: Cannot read properties of undefined (reading 'abcdef') -> nullpoint exception
    arr1[0] *= 100;
    arr1[1] *= 100;
    arr1[2] *= 100;
    console.log(arr1);

    const student = ['홍길동', [100, 90, 50], [90, 80, 90]];
    console.log(student);
    
    console.log((student[1][0] + student[2][0]) / 2); // 2차원배열
}

/**
 * 반복문
 * - for
 * - for in문 : 각 속성명(배열에 있으면 index)을 매턴에 반환, 객체순회에 적합
 * - for of문 : 각 속성값을 매턴에 반환
 */
function test2() {
    const arr = ['a', 'b', 'c', 'd', 'e'];

    // for..in문(인덱스반환)
    for(let index in arr) {
        console.log(index, arr[index]);
    }

    // for..of문
    for(const value of arr) {
        console.log(value);
    }
}

/**
 * 전개연산자 Spread Operator (뿌리다)
 */
function test3() {
    const arr = [1, 2, 3];
    const arr2 = ['가', '나', '다'];
    const arr3 = [...arr, ...arr2];
    // const arr3 = [1, 2, 3, '가', '나', '다'];
    console.log(arr3);
}

/**
 * 유사배열(가짜배열)
 * - Array객체를 상속하지 않은 배열 모양만 흉내낸 객체 (index, length속서안 있음)
 * - Array객체가 제공하는 다른 메소드 사용불가
 * - getElementsByTagName, getElementsByClassName, getElementsByName, querySelectorAll
 */
function test4() {
    const arr = [1, 2, 3];
    console.log(arr);
    const buttons = document.getElementsByTagName("button");
    console.log(buttons);

    arr.map(function (n) {console.log(n); });
    // buttons.map(function (n) { console.log(n);}); // Uncaught TypeError: buttons.map is not a function

    // 진짜 배열로 변환하기(2가지방법)
    // 1. 전개연산자
    console.log([...buttons]);
    [...buttons].map(function(b) {console.log(b); });
    // 2. Array.from
    Array.from(buttons).map(function(b) {console.log(b); });
}

/**
 * - indexOf
 * - lastIndexOf
 * - find
 * - findIndex
 * - concat
 * - join
 * - reverse
 * - sort
 */
function test5() {
    // indexOf 해당 요소의 인덱스를 반환. 존재하지 않으면 -1 반환
    const arr = ['사과', '딸기', '귤', '멜론', '사과', '아보카도'];
    console.log(arr.indexOf('멜론')); // 3
    console.log(arr.indexOf('바나나')); // -1
    console.log(arr.indexOf('사과')); // 0
    console.log(arr.lastIndexOf('사과')); // 4


    // find : 조건에 만족하는 최초의 요소를 반환(함수를 전달 / boolean값)
    console.log(arr.find(function(fruit){
        // return fruit === '귤'; // 귤
        // return fruit.length === 4; // 글자가 4개짜리
        return fruit.startsWith('딸');  // 글씨가 '딸'로 시작
    }));


    // findIndex : 조건에 만족하는 최초의 요소의 인덱스를 반환
    console.log(arr.findIndex(function(fruit){
        // return fruit === '귤'; // 귤
        // return fruit.length === 4; // 글자가 4개짜리
        return fruit.startsWith('딸');  // 글씨가 '딸'로 시작
    }));


    // concat 두배열 연결 (immutable / 원본안바뀜) -> 2개만연결가능해서 전개연산자가 더 좋음
    const vegitables = ['고구마', '감자', '오이'];
    const vegifruits = arr.concat(vegitables);
    console.log(arr);
    console.log(vegitables);
    console.log(vegifruits); // arr + vegitables해서 새배열을 만듦


    // join
    console.log(vegitables.join('/')); // 구분자로 /


    // reverse (mutable / 원본바뀜)
    console.log(vegitables.reverse()); // 순서뒤집기
    console.log(vegitables);


    // sort (mutable / 원본바뀜) : 오름차순정렬 
    const nums = [3, 2, 1, 5, 4];
    console.log(nums.sort()); // 1, 2, 3, 4, 5
    console.log(nums);

    const names = ["홍길동", "고길동", '박길동'];
    console.log(names.sort());


    // 내림차순정렬(커스텀정렬) - 정렬기준함수 같이 전달해야함 / 양수, 0, 음수
    console.log(nums.sort(function(a, b){
        return b - a; // 5, 4, 3, 2, 1
    }));

    console.log('홍길동' - '고길동'); // NaN
    console.log('홍길동' > '고길동'); // true
    console.log(nums.sort(function(a, b){
        if(a > b) return -1; // 자리교환
        if(b < a) return 1;
        return 0;
    }));
}


/**
 * - push | pop | unshift | shift
 * - slice
 * - splice
 */
function test6() {
    // push(mutable) : 마지막에 요소 추가
    // pop : 마지막 요소 제거(반환)
    // unshift : 0번지에 요소추가
    // shift : 0번지에 요소 제거(반환)
    const arr = ['강남' ,'역삼', '선릉'];
    arr.push('삼성');
    console.log(arr.pop());

    arr.unshift('교대');
    console.log(arr.shift());

    arr.push(arr.shift())

    console.log(arr);
    

    // slice(start, end) : (immutable)
    const langs = ['html', 'css', 'javascript', 'typescript', 'java'];
    console.log(langs.slice(2, 4));
    console.log(langs.slice(2, 4));
    console.log(langs.slice(3));
    console.log(langs.slice()); // 전체 복제(처음부터 끝까지) -> 한번에 추가나 삭제가능, 반환값은 string
    // Array<string>.slice(start?: number | undefined, end?: number | undefined): string[]
    
    // splice(strat, delCnt, newItem1, newItem2, ...) -> 중간에 끼워넣기
    // start부터 delCnt개를 삭제하고, 새요소를 추가. 삭제된요소가 배열로 반환
    // mutable
    const alpha = ['a','b', 'c', 'd', 'e']; // ['a', 'b', 'c', 'd', 'e'] -> ['b']
    console.log(alpha.splice(1, 1, 'x', 'y')); // [a, x, y, c, d, e] -> []
    console.log(alpha.splice(1, 0, 'k', 'l', 'm')); // ['a', 'k', 'l', 'm', 'x', 'y', 'c', 'd', 'e']

    console.log(alpha);

    // toString
    console.log(alpha.toString);
}

/**
 * forEach(callbackFunction)
 * - callbackFunction 함수를 함수에 전달하면, 내부적으로 호출해 사용
 * - 단순반복처리
 * - 요소별로 callbackFunction 호출
 */
function test7() {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    arr.forEach(function(ch, index, _arr) { // ⭐요소, 인덱스, 원본배열
        console.log(ch, index, _arr)
    });

    const brr = [1, 2, '가', 3, '홍길동', 'ABC', 500, 'ㅋㅋㅋ'];
    const nums = [];
    const strs = [];
    // 필요없으면 매개변수 생략가능
    brr.forEach(function(elem, index) {
        (typeof elem === 'number') && nums.push(elem); // 타입이 숫자면 nums에 넣고
        (typeof elem === 'string') && strs.push(elem); // 타입이 문자면 strs에 넣어주라
    });
    console.log(nums);
    console.log(strs);
}

/**
 * filter(cdFunc)
 * - boolean반환하는 콜백함수를 전달
 * - true를 반환한 요소만 새배열에 담아 반환
 * - immutable
 */
function test8() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const evens = arr.filter(function(n, i, _arr) {
        console.log(n, i, _arr);
        return n % 2 == 0; // 짝수고르기
    });
    console.log(evens); // (5) [2, 4, 6, 8, 10]
}   

/**
 * map(callbackFunc) / 자바의 key=value랑은 조금 다름
 * - 요소별 연산결과를 새배열에 담아 반환
 * - immutable
 */
function test9() {
    const arr = [1, 2, 3];
    const arr2 = arr.map(function(n) {
        return n * n;
    }); 
    console.log(arr2); // 제곱구하기

    // 페이지내의 버튼속 글자를 배열에 담기
    // 1. button배열생성 (진짜배열로 변환)
    // 2. map함수를 이용해서 button태그안의 innerHTML속성값을 배열에 담아 반환
    const buttons = [...document.querySelectorAll("button")]; // [...]으로 진짜배열로 만들어줌
    console.log(buttons);
    const contents = buttons.map(function(button) {
        // console.log(button);
        return button.innerText;
    });
    console.log(contents);
}

/**
 * reduce (callbackFunction[, initValue]) -> 초기값을 인자로 받음
 * - 모든 요소를 순회해서 하나의 값이나 배열을 반환
 * - 초기값을 지정하지 않으면, 첫번째 요소가 초기값으로 사용됨
 */
function test10() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const sum = arr.reduce(function(agg, n, i, _arr) {
        console.log(agg, n, i, _arr);
        return agg + n;
    }); // }, 0); -> 0이 초기값이면 안써도됨
    console.log(sum);

    // 홀수배열 생성
    const odds = arr.reduce(function(agg, n) {
        n % 2 == 0 || agg.push(n);
        return agg;
    }, []); // [] -> 배열이 초기값
    console.log(odds);

    // 페이지내의 버튼속 글자를 배열에 담기 - reduce
    const texts = Array.from(document.querySelectorAll("button"))
                .reduce(function(arr, button){
                arr.push(button.textContent);
                return arr;
        }, []);
    console.log(texts);
}
