//Продемонстрировать несколько способов создания объектов, несколько
//способов доступа к их свойствам (на чтение и запись). 

//Литералы, объект с ключами
let user = {
    name: "John",
    age: 30
};

function Person(name, age) {
  console.log(this)
  this.name = name;
  this.age = age;
}

//Person("Sema", 20)
  
// создаем объект с помощью конструктора
let person1 = new Person('John', 30);

// доступ к свойствам объекта для чтения
console.log(person1.name); 
console.log(person1.age);

// доступ к свойствам объекта для записи
person1.name = 'Mike';
person1.age = 40;
console.log(person1.name); 
console.log(person1.age); 

  // создаем фабричную функцию для объекта
function createPerson(name, age) {
    return {
      name: name,
      age: age
    };
  }
  
// создаем объект с помощью фабричной функции
let person3 = createPerson('Tom', 35);

// доступ к свойствам объекта для чтения
console.log(person3.name); 
console.log(person3.age); 

// доступ к свойствам объекта для записи
person3.name = 'Jack';
person3.age = 45;
console.log(person3.name);
console.log(person3.age); 

  

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  
    this.getAge = function() {
      return this.age;
    };
  
    this.setAge = function(age) {
      this.age = age;
    };
  
    this.getGender = function() {
      return this.gender;
    };
  
    this.setGender = function(gender) {
      this.gender = gender;
    };
  
    this.greet = function() {
      console.log(`Hello, my name is ${this.name}.`);
    };
}
  
// создаем объект с помощью конструктора
let persona = new Person('John', 30, 'male');

// вызываем методы объекта
persona.greet(); // 'Hello, my name is John.'
console.log(persona.getAge()); // 30
console.log(persona.getGender()); // 'male'

// изменяем свойства объекта с помощью методов
persona.setAge(40);
persona.setGender('non-binary');
console.log(persona.getAge()); // 40
console.log(persona.getGender()); // 'non-binary'
  


Array.prototype.average = function() {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
      sum += this[i];
    }
    return sum / this.length;
};
  
// пример использования
let arr = [1, 2, 3, 4, 5];
console.log(arr.average()); // 3

  

Date.prototype.secondsSinceBirthday = function() {
    let now = new Date();
    let diff = now.getTime() - this.getTime();
    let seconds = Math.floor(diff / 1000);
    return seconds;
};
  
// пример использования
let birthday = new Date('2003-06-04');
console.log(birthday.secondsSinceBirthday()); // количество секунд с дня рождения до текущей даты
  
