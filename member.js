function skillsMember() {
    var skills = {
        name: "John",
        age: 30,
        skills: ["JavaScript", "HTML", "CSS"],
        salary: 4000,
        married: true,
        print: function () {
            console.log(this.name + " " + this.age + " " + this.skills + " " + this.salary + " " + this.married);
        }
    };
    skills.print();
}