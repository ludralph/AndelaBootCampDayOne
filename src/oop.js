// Tree is a constructor function because we will use new keyword to invoke it.​
​function Tree (typeOfTree) {}
​
​// bananaTree is an instance of Tree.​
​var bananaTree = new Tree ("banana")

var myObj = {name: "Raphael", profession: "Developer"};

function Employee () {}

Employee.prototype.firstName = "Raphael";
Employee.prototype.lastName = "Etim";
Employee.prototype.startDate = new Date();
Employee.prototype.signedNDA = true;
Employee.prototype.fullName = function () {
console.log (this.firstName + " " + this.lastName);
};

var raphael =  new Employee () //​
console.log(raphael.fullName()); // Raphael Etim
console.log(raphael.signedNDA); // true

function Employee (name, profession) {
​this.name = name;
​this.profession = profession;
} // Employee () is the constructor function because we use the <em>new</em> keyword below to invoke it.​
​
​var raphael = new Employee (“Raphael”, “Developer”) // raphael is a new object we create from the Employee () constructor function.​
​
console.log(raphael.name); //raphael
console.log(raphael.profession); // Developer

function User (theName, theEmail) {
    this.name = theName;
    this.email = theEmail;
    this.quizScores = [];
    this.currentScore = 0;
}
​
User.prototype = {
    constructor: User,
    saveScore:function (theScoreToAdd)  {
        this.quizScores.push(theScoreToAdd)
    },
    showNameAndScores:function ()  {
        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    },
    changeEmail:function (newEmail)  {
        this.email = newEmail;
        return "New Email Saved: " + this.email;
    }
}

// A User ​
firstUser = new User("Raphael", "Raphael@examnple.com");
firstUser.changeEmail("Raphael@examnple.com");
firstUser.saveScore(15);
firstUser.saveScore(10);
​
firstUser.showNameAndScores(); //Raphael Scores: 15,10​
​
​// Another User​
secondUser = new User("Peter", "Peter@examnple.com");
secondUser.saveScore(18);
secondUser.showNameAndScores(); //Peter Scores: 18
