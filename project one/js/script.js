
// Object Literal for the Salon
const salon={
    name:"Fauna Fashionista",
    phone: "555-555-5555",
    email: "faunafashion@gmail.com",
    address:{
        city: "Lake Havasu City",
        country: "USA", 
        number: "125-K"
    },
    pets: [],
    petId: 0
}
// console.log(salon);
let {name, phone, email, address:{city, country, number}}=salon;
// console.log(city);




// Object constructor for the pets

var c=1;
class Pet{
    constructor(id, name, age, type, breed, gender, service, owner, contact, good){
        this.id = c;
        this.name = name;
        this.age = age;
        this.type = type;
        this.breed = breed;
        this.gender = gender;
        this.service = service;
        this.owner = owner;
        this.contact = contact;
        this.good = good;
        c++
    }
}

const scooby = new Pet(c, "Scooby", 4, "Dog", "Dane", "Male", "Full", "Shaggy", "444-444-4444", "is a very good");
const sif = new Pet(c, "Sif", 78, "Wolf", "Wolf", "Female", "Full", "Artorius", "333-333-3333", "is a very good");
const henry = new Pet(c, "Henry", 1, "Dog", "Labrador", "Male", "Nails Cut", "Gabe", "222-222-2222", "is a very good");
const trevor = new Pet(c, "Trevor", 3, "Cat", "Calico", "Male", "Bath", "Leanna", "111-111-1111", "is a very good");

salon.pets.push(scooby);
salon.pets.push(sif);
salon.pets.push(henry);
salon.pets.push(trevor);

console.log(salon.pets.length);

for(i=0;i<salon.pets.length;i++){
    console.log(salon.pets[i].name);
};

// get info from the inputs

// register function

function register(){
    // get values from txt element
    var petName = document.getElementById("petName");
    var petAge = document.getElementById("petAge");
    var petType = document.getElementById("petType");
    var petBreed = document.getElementById("petBreed");
    var petGender = document.getElementById("petGender");
    var petService = document.getElementById("petService");
    var ownerName = document.getElementById("ownerName");
    var ownerContact = document.getElementById("ownerContact");
    var isGood = document.getElementById("isGood");

    //create the pet object with input info
    var thePet = new Pet(petName.value, petAge.value, petType.value, petBreed.value, petGender.value, petService.value, ownerName.value, ownerContact.value, isGood.value);

    // push pet into array
    salon.pets.push(thePet);
    for(i=0;i<salon.pets.length;i++){
        console.log(salon.pets[i].name);
    };
    display();
    clear();
    
}

function clear(){
    petName.value="";
    petAge.value="";
    petType.value="";
    petBreed.value="";
    petGender.value="";
    petService.value="";
    ownerName.value="";
    ownerContact.value="";
    isGood.value="";
}

function displayTable(aPet){
    if(aPet.gender=="Male"){
        var pro = "He";
        var noun = "boy"
    }else if(aPet.gender=="Female"){
        var pro = "She";
        var noun = "girl";
    }
    var tbody = document.getElementById('rowPet');
    var row = `<tr id="${aPet.id}">
                <td>${aPet.name}</td>
                <td>${aPet.age}</td>
                <td>${aPet.type}</td>
                <td>${aPet.gender}</td>
                <td>${aPet.breed}</td>
                <td>${aPet.service}</td>
                <td>${aPet.owner}</td>
                <td>${aPet.contact}</td>
                <td>${pro} ${aPet.good} ${noun}!</td>
                <td><button type="button" class="btn btn-danger" onclick="deletePet(${aPet.id})"><i class="fas fa-trash"></i></button></td>
            </tr>`;
    tbody.innerHTML+=row;
}

displayTable(scooby);
displayTable(sif);
displayTable(henry);
displayTable(trevor);

function deletePet(petId){
    var tr=$('#'+petId);
    var indexDelete;
    for(var i=0;i<salon.pets.length;i++){
        var selected=salon.pets[i];
        if(selected.id===petId){
            indexDelete=i;
        }
    }
    salon.pets.splice(indexDelete,1);
    tr.remove();
}

function searchPet(){
    var ss = $('#petSearch').val();
    var searchString = ss.toLowerCase();
    for(var i=0;i<salon.pets.length;i++){
        var selected = salon.pets[i];
        if(selected.name.toLowerCase()===searchString){
            $("#"+selected.id).addClass('active');
        }
    }

}

// function init(){
//     // displayTable(henry);
//     // displayTable(sif);

//     $('#btn-register').click(register());
//     $('#ownerContact').keypress(function(e){
//         console.log(e.key);
//         if(e.key==="Enter"){
//             console.log("Add the Pet");
//             register();
//         }
//     });
// }

// window.onload=init;


