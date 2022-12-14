function createAbout(){
    //about section
    const about = document.createElement('div');
    
    //title
    const title = document.createElement('h2');
    title.textContent = 'ABOUT';
    
    about.appendChild(title);

    //about para
    const para = document.createElement('p');
    para.innerHTML = `Eat Here!!!!!! `;

    about.appendChild(para);
    return about;
}

function setActBtn(id){
    const activeBtn = document.querySelector('.tab.active');
    if(activeBtn){
        activeBtn.classList.remove('active');
    }
    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
}

function loadHome(){
    const content = document.getElementById('tab-content');
    content.classList.add('flex');

    content.innerHTML = '';

    const aboutSec = createAbout();
    //setActBtn('home');

    content.appendChild(aboutSec);
}
export default loadHome;