const menu = document.getElementById('menu');
menu.style.opacity = '0';

const menuButton = document.getElementById('hamburger-button');

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

const navBanner = document.getElementById('nav-banner');
const navHeading = document.getElementById('nav-heading');

const home = document.getElementById('home');
const afterHome = document.getElementById('after-home');
const doc = document.getElementsByTagName('html');
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

/*Navigation buttons functions*/

const homeButton = document.getElementById('home-btn');
const aboutButton = document.getElementById('about');
const projectsButton = document.getElementById('projects');
const contactButton = document.getElementById('contact');

const AboutMeButton = document.getElementById('more-about');


const AboutSection = document.getElementById('about-section');
const ProjectsSection = document.getElementById('projects-section');
const ContactSection = document.getElementById('contact-section');


AboutMeButton.addEventListener('click', function(){

    hideMenu();
    AboutSection.scrollIntoView({behavior: "smooth"});
    
});

contactButton.addEventListener('click', function(){
    if(menuOpen){
        hideMenu();
        ContactSection.scrollIntoView({behavior: "smooth"});
    }
});

aboutButton.addEventListener('click', function(){
    if(menuOpen){
        hideMenu();
        AboutSection.scrollIntoView({behavior: "smooth"});
        
    }
});



projectsButton.addEventListener('click', function(){
    if(menuOpen){
        hideMenu();
        ProjectsSection.scrollIntoView({behavior: "smooth"});
    }
});

homeButton.addEventListener('click', function(){
    if(menuOpen){
        hideMenu();
        home.scrollIntoView({behavior: "smooth"});
    }
});

const projectsHover = document.getElementById('project-hover');

projectsHover.addEventListener('click', function(){
    console.log("clicked the project the commit finished.");
})



document.querySelector('#contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents default form submission
    
    const formData = new FormData(this);

    fetch("https://formsubmit.co/ajax/zahierclaronino50@gmail.com", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Thank you for your message! We'll get back to you soon.");
            event.target.reset(); // Reset the form after submission
        } else {
            alert("Oops! Something went wrong. Please try again.");
        }
    })
    .catch(error => alert("Error: " + error));
});

window.addEventListener('load', function() {
    // Hide the loading screen after the page is loaded
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');
    
   // Hide loading screen and display the content
    loadingScreen.style.display = 'none';
    content.style.display = 'block';
  });



