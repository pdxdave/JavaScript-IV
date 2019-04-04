// CODE here for your Lambda Classes


class Person {
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    }

    speak(){
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
    }
}


class Instructors extends Person {
    constructor(obj){
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }

    demo(subject){
       console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject){
       console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

const fred = new Instructors({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
console.log(fred);
console.log(fred.demo('French'));



class Student extends Person {
    constructor(obj) {
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;

        this.grade = obj.grade;
    }

    listSubjects() {
        console.log(`${this.favSubjects}`);
    }
    PRAssignment(subject) {
       console.log(`${this.name} has submited a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

const sally = new Student({
    name: 'sally',
    age: 21,
    location: 'Seattle',
    gender: 'F',
    previousBackground: 'Teacher',
    className: 'Javascript',
    favSubjects: ['Web Dev', 'Biology'],
    grade: 65
})
console.log(sally);
console.log(sally.PRAssignment('basket weaving'));


class ProjectManager extends Instructors {
      constructor(obj){
           super(obj);
           this.gradClassName = obj.gradClassName;
           this.favInstructor = obj.favInstructor;
      }

      standUp(channel) {
          console.log(`${name} announces to ${channel}, @channel standy times!`);
      }
      debugsCode(){
          console.log(`${name} debugs ${student.name}'s code on ${subject}`);
      }
}

const kevin = new ProjectManager({
    name: 'kevin',
    age: 34,
    location: 'Portland',
    gender: 'M',
    gradClassName: 'huh?',
    favInstructor: 'Joe',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
})
console.log(kevin);
