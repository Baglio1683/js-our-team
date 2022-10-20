const peopleTeamsconst = [{

    name: "Wayne Barnett",
    role: "Founder & CEO",
    photo: "img/wayne-barnett-founder-ceo.jpg"
}, 

{
    name: "Angela Caroll",
    role: "Chief Editor",
    photo: "img/angela-caroll-chief-editor.jpg"
},

{
    name:"Walter Gordon",
    role: "Office Manager",
    photo: "img/walter-gordon-office-manager.jpg"
},

{
    name : "Angela Lopez",
    role: "Social Media Manager",
    photo: "img/angela-lopez-social-media-manager.jpg"
},

{
    name: "Scott Estrada",
    role: "Developer",
    photo: "img/scott-estrada-developer.jpg"
},

{
    name: "Barbara Ramos",
    role: "Graphic Designer",
    photo: "img/barbara-ramos-graphic-designer.jpg"
}]; 

const list_team = document.getElementById("list_team");

CreateTeam(peopleTeams); 


// class People{
//     constructor(name,role,photo) {
//          this.name = name;
//          this.role = role;
//          this.photo = photo;
//        }
//    }

// const people1 = new People("Wayne Barnett","Founder & CEO","img/wayne-barnett-founder-ceo.jpg");
// const people2 = new People("Angela Caroll","Chief Editor","img/angela-caroll-chief-editor.jpg");
// const people3 = new People("Walter Gordon","Office Manager","img/walter-gordon-office-manager.jpg");
// const people4 = new People("Angela Lopez","Social Media Manager","img/angela-lopez-social-media-manager.jpg");
// const people5 = new People("Scott Estrada","Developer","img/scott-estrada-developer.jpg");
// const people6 = new People("Barbara Ramos","Graphic Designer","img/barbara-ramos-graphic-designer.jpg");

// const peopleTeams  = [];

// peopleTeams.push(people1);
// peopleTeams.push(people2);
// peopleTeams.push(people3);
// peopleTeams.push(people4);
// peopleTeams.push(people5);
// peopleTeams.push(people6);

// console.log(peopleTeams);




// DEFINITION OF FUNCTION 


function CreateTeam(arrayMembers){

    for(let j=0 ; j < arrayMembers.length ; j++){

        let member = document.createElement('div');
        member.classList.add("card"); 

        let description = document.createElement('p'); 
        description.innerHTML =  arrayMembers[j].name + ", " + arrayMembers[j].role; 
        
        let pic = document.createElement('img'); 
        pic.src = arrayMembers[j].photo;

        member.appendChild(pic)
        member.appendChild(description); 

        list_team.append(member); 
     
     }

}

