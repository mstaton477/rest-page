const aboutCreate = (content) =>{
    let about = document.createElement('div');
    about.id = 'about';

    content.appendChild(about);

    let aboutContainer = document.createElement('div'); 
    aboutContainer.classList.add('aboutContainer');
    aboutContainer.innerHTML =  `
    <h2 id = 'aboutHead' >who are we?</h2>
    <h4><b>202-555-0106</b><h4>
        <p id = 'para'>
        ***Terrazzo's committment to hospitality begins long before you sit down at our table. 
        We reopen Terrazzo in the same way that has guided us since opening our doors 17 years ago: 
        with keen attention to detail, warmth and hospitality.
        <br><br>
        Terrazzo is now taking reservations for February and beyond, beginning on Valentine's Day. 
        <br><br>
        We will be offering a special menu from <b>Chef de Cuisine Corey Chow</b>, and a wine accompaniment 
        designed by <b>Beverage Director, Michel Couvreux</b>.
        <br><br>
        Join us for our Chef's Tasting menus Tuesday to Saturday.<br><br>
        Seatings begin at 5:00pm and 7:30pm.</p>
    `

    content.appendChild(aboutContainer); 
}
export{
    aboutCreate 
}