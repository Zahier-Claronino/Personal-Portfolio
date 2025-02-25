const menu = document.getElementById('menu');
menu.style.opacity = '0';

const menuButton = document.getElementById('hamburger-button');

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

const navBanner = document.getElementById('nav-banner');
const navHeading = document.getElementById('nav-heading');
let menuOpen = false;
menuButton.addEventListener('mouseover', function(){
    if(!menuOpen){
        line1.style.width ='5px';
        line3.style.width = '5px';
        menuButton.style.cursor = 'pointer';
        line1.style.backgroundColor = 'gray';
        line2.style.backgroundColor = 'gray';
        line3.style.backgroundColor = 'gray';
        

    }else{
        line1.style.backgroundColor = 'gray';
        line2.style.backgroundColor = 'gray';
        line3.style.backgroundColor = 'gray';

        
    }
    
});

menuButton.addEventListener('mouseout', function(){
        line1.style.width = '27px';
        line3.style.width = '27px';
        line1.style.backgroundColor = 'lightblue';
        line2.style.backgroundColor = 'lightblue';
        line3.style.backgroundColor = 'lightblue';
    
    
});


function showMenu(){
    menuOpen = true;
    menu.style.opacity = '1';
    menu.style.animation = 'slideMenu 0.5s ease-in-out';
    menu.style.zIndex = "5";
    navBanner.style.backgroundColor = 'transparent';
    navHeading.style.animation = 'colors 6s infinite ease-in-out';

    line2.style.opacity = '0';

    menuButton.style.position = 'relative';

    line1.style.position = 'absolute';
    line2.style.position = 'absolute';
    line3.style.position = 'absolute';

    line1.style.transform = 'rotate(45deg)';
    line3.style.transform = 'rotate(-45deg)'; 
    line1.style.width = '27px';
    line3.style.width = '27px';
    
    
    
}

function hideMenu(){
    
    menu.style.animation = 'slideMenuBack 0.3s ease-in-out';
    line1.style.position = 'static';
    line2.style.position = 'static';
    line3.style.position = 'static';

    line2.style.opacity = '1';

    line1.style.transform = 'none';
    line3.style.transform = 'none';
    navBanner.style.backgroundColor = 'rgba(255, 0, 0, 0.541)';
    navHeading.style.animation = 'none';

    setTimeout(function(){
        menu.style.opacity = '0';
        menu.style.zIndex = "1";
        menuOpen = false;
    }, 250);
    
    
}


menuButton.addEventListener('click', function(){
    if(!menuOpen){
        showMenu();
    }else{
        hideMenu();
    }
});
