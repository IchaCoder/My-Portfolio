// Selecting elements and buttons

const menuBtn = document.querySelector('.fa-bars');
const menuDiv = document.querySelector('.menu-btn');
const header = document.querySelector('.main');
const closeBtn = document.querySelector('div > .fa-times');

menuBtn.addEventListener('click', function(){
    // Selecting the class list
    const btnClassList = menuDiv.classList;
    const headerClassList = header.classList;
    
    // Checking if the class list contains 'hide-main' class
        headerClassList.remove('hide-main')
    

    // Adding the close button
    btnClassList.add('show-btn');
})

closeBtn.addEventListener('click', function(){
    // Selecting the class list
    const headerClassList = header.classList;
    const btnClassList = menuDiv.classList;

    headerClassList.add('hide-main');
    btnClassList.remove('show-btn')
})