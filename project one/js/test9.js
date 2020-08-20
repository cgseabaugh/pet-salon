
$(function(){
    'use strict'
    // $('img#logo').on('click', function(){
    //     $('main').load("../register.html");
    // });

    $('main').on('click',loadAjax);

    function loadAjax(){
        $.ajax("js/pets.txt",{
            success:addContent,
            type:"GET",
            dataType: 'text'
        });
    }
    function addContent(){
        
    }
    
});

// delete header, nav, and footer from register, services, and abotu
//add main tag to index
// create app.js, add click events and load functions
// load register, services, and about on the index when nav is clicked
// add #id's to all navs

