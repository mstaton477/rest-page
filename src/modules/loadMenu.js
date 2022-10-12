function createGallery(src,alt,text,price){

    //create flex container for image gallery
    const cont = document.createElement('div');
    cont.classList.add('container');

    //create images and set source and alt text
    const img = document.createElement('img');
    img.setAttribute('src',src);
    img.setAttribute('alt',alt);

    //set description for images
    const desc = document.createElement('div');
    desc.classList.add('description');

    const foodName = document.createElement('div');
    foodName.innerHTML = text;

    const cost = document.createElement('div');
    cost.innerHTML = price;

    //append item details to description
    desc.appendChild(foodName);
    desc.appendChild(cost);

    //append description and image to container
    cont.appendChild(img);
    cont.appendChild(desc);

    return cont;
}

function setActBtn(id){
    const actBtn = document.querySelector('.tab.active');
    if(actBtn){
        actBtn.classList.remove('active');
    }
    const menuBtn = document.getElementById(id);
    menuBtn.classList.add('active');
}

function loadMenu(){
    const content = document.getElementById('tab-content');
    content.classList.add('flex');
    //setActBtn('menu');
    content.textContent = '';
    const items = [
        createGallery(
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1537825868%2Fcoffee-rubbed-steak-1811-p15.jpg%3Fitok%3Du3vjMXtD&w=950&c=sc&poi=face&q=60',
            'Steak and brussel sprouts',
            'Steak and brussel sprouts',
            'Overpriced'
        ),
        createGallery(
            'https://www.thespruceeats.com/thmb/kcE38dQZAwpFrG08grcNYGYztbQ=/960x639/filters:fill(auto,1)/BakedStuffedLobster-TheSpruce_DianaChistruga-3fcb6301491a4be193ecf40d0735e8d1.jpg',
            'Stuffed Baked Lobster',
            'Stuffed Baked Lobster',
            'Wayyyyy too overpriced'
        )
    ]

    items.forEach((food)=>{
        content.append(food);
    });
}
export default loadMenu;