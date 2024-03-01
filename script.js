function togglemenu(){/*here we are trageting 2 elemrnts menulink and hamburgericon and whenever we open this elements we have some styling in ity.*/
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");/*toggle is the js function*/
    icon.classList.toggle("open");
}