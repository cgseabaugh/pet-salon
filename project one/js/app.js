$(function(){
    'use strict'

    
    $('#register-nav').on('click', loadRegister);
    $('#about-nav').on('click', loadAbout);
    $('#services-nav').on('click', loadServices);

    
    function loadRegister(){
        $('main').load("../register.html");
    }
    function loadAbout(){
        $('main').load("../about.html");
    }
    function loadServices(){
        $('main').load("../services.html");
    }
});