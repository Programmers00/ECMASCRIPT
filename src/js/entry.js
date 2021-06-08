/* 함수를 통해 Person객체를 생성 -> person객체와 person's prototype객체가 생성
-> person객체의 prototype이 person's prototype객체를 가리킨다.
   person's prototype객체의 constructor는 Person을 가리킨다. */
function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}
/* person객체의 prototype이 참조하는 person's prototype객체에 sum을 생성하고 함수를 정의*/
Person.prototype.sum = function(name, first, second){
    return this.first*this.second
}
/* kim객체가 생성되면 person's prototype의 constructor가 실행되면서 kim객체에 
name, first, second 프로퍼티 값이 생성되는 동시에 __proto__ 가 생성되고
__ptoro__는 Person객체의 prototype인 person's prototype을 가리킨다. */
var kim = new Person('kim', 10, 20)
/* lee객체는 생성되면서 __proto__가 person's prototype을 가리킨다.*/
var lee = new Person("lee", 10, 10)

console.log(kim.name)