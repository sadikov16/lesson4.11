class proffessions {
    constructor(category, gender, subject){
        this._category = category
        this._gender = gender
        this._subject = subject
    }
    
    sayName = function() {
        console.log("Teacher from: " + this._subject);
    }
}

let kimdur_kimdurov = new proffessions("scientist", "male", "math")

kimdur_kimdurov.salary = function()  {
    console.log(this._subject);
}
kimdur_kimdurov.salary()

let kimdur_kimdurovna = new proffessions("higher", "female", "mother tongue")

class Teacher extends proffessions {
    constructor(gender, subject){
        this._gender = gender
        this._subject = subject

        does  = function () {
            console.log("teaching");
        }
    }
}

console.log(kimdur_kimdurov);
console.log(kimdur_kimdurovna);  