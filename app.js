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

// Setting up the year dynamically

const date = new Date();
const dateElement = document.querySelector('.date');

dateElement.textContent = date.getFullYear();

// Selecting the body to close navigation when clicked
const closeNav = document.querySelector('.click-to-close-nav');

closeNav.addEventListener('click', function(){
    const headerClassList = header.classList;
    const btnClassList = menuDiv.classList;

    headerClassList.add('hide-main');
    btnClassList.remove('show-btn')
})


const people = [
    {
        name: 'Lesley Miles',
        img: './files/FB_IMG_16211445734644707.jpg',
        text: '"Services on point, never regretted one bit for hirng him.He give you exactly what you as for"'
    },
    {
        name: 'Katty Ashton',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        text: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae corporis magni sint minima ipsum libero, similique voluptates numquam incidunt eaque provident distinctio molestiae reiciendis corrupti. Rem, quo! Accusamus, a doloribus."'
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
          '"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."'
      },
      {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
          '"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."' ,
      },
]

const avatar = document.querySelector('.avatar > img');
const avatarName = document.querySelector('.avatar-name');
const quote = document.querySelector('blockquote');

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
let index = 0


window.addEventListener('DOMContentLoaded', () => {
    let image = people[index].img;
    let person = people[index].name;
    let quoteBlock = people[index].text;
    
    avatar.src = image;
    avatarName.textContent = person;
    quote.textContent = quoteBlock;
    
})

nextBtn.addEventListener('click', () => {
    index = index + 1;
    if(index > people.length - 1){
        index = 0
    }

    let image = people[index].img;
    let person = people[index].name;
    let quoteBlock = people[index].text;

    avatar.src = image;
    avatarName.textContent = person;
    quote.textContent = quoteBlock;
})

prevBtn.addEventListener('click', () => {
    index = index - 1;
    if(index < 0){
        index = people.length - 1
    }

    let image = people[index].img;
    let person = people[index].name;
    let quoteBlock = people[index].text;

    avatar.src = image;
    avatarName.textContent = person;
    quote.textContent = quoteBlock;
})

// Selecting the navigation buttons
const navBtn = document.querySelectorAll('.navBtn');

// Making the navigation menu dissappear on each click
navBtn.forEach(btn => {
    btn.addEventListener('click', () => {
    const headerClassList = header.classList;
    const btnClassList = menuDiv.classList;

    headerClassList.add('hide-main');
    btnClassList.remove('show-btn')
    })
})