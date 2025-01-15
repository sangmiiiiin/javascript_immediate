let n = "name";
let a = "age";

const user = {
    [n]: "Mike",
    [a]: 30,
    [1 + 4]: 5,
};

console.log(user);

function makeObj (key, val) {
    return {
        [key] : val
    }
}

const obj = makeObj('나이', 33);

console.log(obj);

// 어떤게 키가 될지 모르는 객체를 만들때 유용함