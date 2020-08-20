
var students=[
    {name:"Michael",ch:"Cohort 11",photo:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"},
    {name:"Mesaye",ch:"Cohort 5",photo:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"},
    {name:"Colin",ch:"Cohort 11",photo:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"},
    {name:"Miguel",ch:"Cohort 6",photo:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"},
    {name:"Ingrid",ch:"Cohort 7",photo:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
]

console.log(students[2].ch);
const main=document.getElementById('main-students');
var text="";

for(i=0;i<students.length;i++){
    console.log("Name: " + students[i].name);
    console.log("Ch: " + students[i].ch);

    text +=
    `<div class="student">
        <img src="${students[i].photo}" alt="photo">
        <h2> ${students[i].name} </h2>
        <p> ${students[i].ch} </p>
    </div>`;
}

main.innerHTML=text;

$(function(){
    'use strict';

    $('main').on({
        click: function(){
            $(this).addClass('red-bg');
        },
        mouseenter: function(){
            $(this).addClass('active');
        },
        mouseleave: function(){
            $(this).removeClass('active red-bg')
        }
    });

    var text=$('main h2').text();
    console.log(text);
    $('main h2').text("<h1>Hello World</h1>");
    $('main h2').html("<h1>Hello World</h1>");

    $('footer').on('click', function(){
        $('main h2').html("<h1>Done!</h1>");
    })
});

