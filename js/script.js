
class People{
    constructor(name,role,photo) {
         this.name = name;
         this.role = role;
         this.photo = photo;
       }
   
   }

const people1 = new People("Wayne Barnett","Founder & CEO","wayne-barnett-founder-ceo.jpg");
const people2 = new People("Angela Caroll","Chief Editor","angela-caroll-chief-editor.jpg");
const people3 = new People("Walter Gordon","Office Manager","walter-gordon-office-manager.jpg");
const people4 = new People("Angela Lopez","Social Media Manager","angela-lopez-social-media-manager.jpg");
const people5 = new People("Scott Estrada","Developer","scott-estrada-developer.jpg");
const people6 = new People("Barbara Ramos","Graphic Designer","barbara-ramos-graphic-designer.jpg");

const peopleTeams  = [];

peopleTeams.push(people1);
peopleTeams.push(people2);
peopleTeams.push(people3);
peopleTeams.push(people4);
peopleTeams.push(people5);
peopleTeams.push(people6);



console.log(peopleTeams)
