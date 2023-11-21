/**
 * 객체배열 -> 구림
 */
const test1 = () => {
    const pets = [];
    pets.push({
        name : '초코',
        breed : '믹스',
        weight : 7,
        age : 4,
        color : ['white'],
        bark() {
            return this.weight < 10 ? '왈왈' : '멍멍';
        }
    });
    pets.push({
        name : '바둑이',
        breed : '시바',
        weight : 6,
        age : 2,
        color : ['brown'],
        bark() {
            return this.weight < 10 ? '왈왈' : '멍멍';
        }
    });
    pets.push({
        name : '밀크',
        breed : '진돗개',
        weight : 11,
        age : 3,
        color : ['white'],
        bark() {
            return this.weight < 10 ? '왈왈' : '멍멍';
        }
    });
    console.log(pets);
};

/**
 * 생성자함수
 * - new연산자와 함께 호출할 함수🟡
 * - 결과물로 해당타입의 객체가 반환됨
 * - 관례적으로 대문자로 시작하는 이름을 가진다🟡
 * - this용법3. 생성자함수(new연산자로 호출)안 this는 현재객체를 가리킨다
 */
const test2 = () => {
    const pets = [];
    pets.push(new Pet('초코', '믹스', 7, 4, ['white']));
    pets.push(new Pet('바둑이', '시바', 6, 2, ['brown']));
    pets.push(new Pet('밀크', '진돗개', 11, 3, ['white']));
    console.log(pets);

    pets.forEach((pet) => console.log(`${pet.name} ${pet.bark()} 짖는다🦮`));
}

function Pet(name, breed, weight, age, color) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.age = age;
    this.color = color;
    this.name = name;
    this.bark = function() {
        return this.weight < 10 ? "왈왈" : "멍멍";
    };
}

/**
 * this용법4. 일반함수 안에서 this는 window객체를 가리킨다
 * - window란 브라우져 최상위객체 (DOM(document), js object, BOM, ...)
 */
const test3 = function() {
    console.log(this); // window
    console.log(window, globalThis);
};