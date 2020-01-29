
const ducks = [
    {
        isRubber: true,
        color: 'blue',
        gender: 'female',
        isMigrator: false,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 47,
        featherNum: 0,
        name: 'Regina',
        imageUrl: 'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/885/9633/Navy-Blue-Rubber-Duck-Adline-3__81336.1568313092.jpg?c=2&imbypass=on'
    },
    {
        isRubber: true,
        color: 'purple',
        gender: 'male',
        isMigrator: false,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 47,
        featherNum: 0,
        name: 'Midas',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41AorbIEwIL.jpg'
    },
    {
        isRubber: true,
        color: 'red',
        gender: 'male',
        isMigrator: false,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 47,
        featherNum: 0,
        name: 'Gustavo',
        imageUrl: 'https://www.amsterdamduckstore.com/wp-content/uploads/2019/12/Red-rubber-duck-slant-right-Amsterdam-Duck-Store.jpg'
    },
    {
        isRubber: true,
        color: 'red',
        gender: 'male',
        isMigrator: false,
        socialStatus: 'ready to mingle',
        diet: 'carnivor',
        age: 47,
        featherNum: 0,
        name: 'Jim',
        imageUrl: 'https://www.amsterdamduckstore.com/wp-content/uploads/2019/12/Red-rubber-duck-slant-right-Amsterdam-Duck-Store.jpg'
    },
    {
        isRubber: true,
        color: 'blue',
        gender: 'male',
        isMigrator: false,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 47,
        featherNum: 0,
        name: 'Ross',
        imageUrl: 'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/885/9633/Navy-Blue-Rubber-Duck-Adline-3__81336.1568313092.jpg?c=2&imbypass=on'
    },
    {
        isRubber: false,
        color: 'purple',
        gender: 'female',
        isMigrator: false,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 87,
        featherNum: 5000,
        name: 'Unis',
        imageUrl: 'https://i.pinimg.com/originals/1c/d0/bb/1cd0bbb62a4c73bd90459900d9b1769c.jpg'
    },
    {
        isRubber: false,
        color: 'blue',
        gender: 'male',
        isMigrator: true,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 5,
        featherNum: 0,
        name: 'Dingus',
        imageUrl: 'http://archive.pokedit.com/boards/ckfinder/userfiles/2/images/black-cayuga-drake.jpg'
    },
    {
        isRubber: false,
        color: 'red',
        gender: 'female',
        isMigrator: true,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 15,
        featherNum: 500,
        name: 'Ricardo',
        imageUrl: 'http://vignette4.wikia.nocookie.net/uncyclopedia/images/5/57/Coca-cola_duck.jpg'
    }
];
console.log(ducks);

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;

};

const duckPrinter = (quacks) => {
    let domString = '';
    for (let i = 0; i < quacks.length; i++) {
        domString += '<div class=" col-md-6 col-lg-4">'
        domString += '<div class="card">';
        domString +=  `<img src="${quacks[i].imageUrl}" class="card-img-top" alt="...">`;
        domString +=  '<div class="card-body">';
        domString +=    `<h5 class="card-title">${quacks[i].name}</h5>`;
        domString +=    `<p class="card-text">${quacks[i].socialStatus}</p>`;
        domString +=    `<p class="card-text">${quacks[i].diet}</p>`;
        domString +=  '</div>';
        domString += '</div>';
        domString += '</div>';
    }
    printToDom('duckCards', domString);
}



const choseColor = (e) => {
    const buttonId = e.target.id;
    const selectedDucks = [];
    for(let i = 0; i < ducks.length; i++) {
        if(ducks[i].color === buttonId) {
            selectedDucks.push(ducks[i]);
        
        }
    }
    duckPrinter(selectedDucks);
}



const choseGender = (e) => {
    const buttonId = e.target.id;
    const selectedDucks = [];
    for(let i = 0; i < ducks.length; i++) {
        if(ducks[i].gender === buttonId) {
            selectedDucks.push(ducks[i]);
        
        }
    }
    duckPrinter(selectedDucks);
}

const choseRubber = () => {
    const selectedDucks = [];
    for(let i = 0; i < ducks.length; i++) {
        if(ducks[i].isRubber) {
            selectedDucks.push(ducks[i]);
        
        }
    }
    duckPrinter(selectedDucks);

}
const events = () =>{
    document.getElementById('blue').addEventListener('click', choseColor)
    document.getElementById('purple').addEventListener('click', choseColor)
    document.getElementById('red').addEventListener('click', choseColor)
    document.getElementById('male').addEventListener('click', choseGender)
    document.getElementById('female').addEventListener('click', choseGender)
    document.getElementById('rubber').addEventListener('click', choseRubber)


}



const init = () => {
    duckPrinter(ducks);
    events();
};

init();