// 객체복사 메서드

const user = {
    name : "Mike",
    age : 30,
};

const user1 = user;
console.log(user1); // 복사가 아니라 하나의 객체를 보고있음

user1.name = "Tom"; // user1의 name의 값을 바꾸면
console.log(user.name);  // user의 name 도 변경됨

const user2 = Object.assign({}, user);

console.log(user2);

user2.name = "Mike";

console.log(user2.name);

const result = Object.keys(user);
console.log(result);    // 키를 배열로 반환