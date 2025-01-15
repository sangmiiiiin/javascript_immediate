// 생성자 함수
function User(name, age) {      // 첫 글자는 대문자로
    this.name = name;
    this.age = age;
}

let user1 = new User('Mike', 30);
let user2 = new User('Jane', 22);
let user3 = new User('Tom', 17);
            // new 연산자를 사용해서 호출

console.log(user1);

// 붕어빵 틀이나 와플 펜이라고 생각하면 됨 찍어내는것임
// new 함수명(); 빈 객체를 생성하고 this에 할당한다.
// 함수 본문을 실행하면서 this에 프로퍼티들을 추가한다.
// 마지막으로 this를 반환한다.

function User2(name, age){
    // this = {}

    this.name = name;
    this.age = age;

    // return this;
}

new User2();

function User3(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function() {
        console.log(this.name); // this는 user4
    }
}

let user4 = new User3('Yu', 30);

user4.sayName();

function Item (title, price) {
    // this = {};
    this.title = title;
    this.price = price;
    this.showPrice = function() {
        console.log(`가격은 ${price}원 입니다.`);
    }
}

let item1 = new Item("인형", 3000);

item1.showPrice();