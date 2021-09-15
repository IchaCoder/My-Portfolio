// Selecting elements and buttons
const nameDiv = document.querySelector('.name');

const menuBtn = document.querySelector('.fa-bars');
const menuDiv = document.querySelector('.menu-btn');
const header = document.querySelector('.main');
const closeBtn = document.querySelector('div > .fa-times');
const topBtn = document.querySelector('.to-top');


menuBtn.addEventListener('click', function(){
    // Selecting the class list
    const btnClassList = menuDiv.classList;
    const headerClassList = header.classList;
    const scrollPoint = window.pageYOffset;
    
    // Checking if the class list contains 'hide-main' class
        headerClassList.remove('hide-main')
    

    // Adding the close button
    btnClassList.add('show-btn');
    //nameDiv.style.display = 'none'

})

closeBtn.addEventListener('click', function(){
    // Selecting the class list
    const headerClassList = header.classList;
    const btnClassList = menuDiv.classList;

    headerClassList.add('hide-main');
    btnClassList.remove('show-btn')
})


// selecting the name

window.addEventListener('scroll', function(){
    // Getting the scroll point number
    const scrollPoint = window.pageYOffset;
    const nameClassList = nameDiv.classList;
    const toTop = topBtn.classList;

    //console.log(scrollPoint);
    if(scrollPoint > 405){
        nameClassList.add('useFocus')
    } else {
        nameClassList.remove('useFocus')

    };

    if(scrollPoint > 600){
        toTop.remove('hide-btn')
    } else {
        toTop.add('hide-btn')
    }
    
})
