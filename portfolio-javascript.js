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

const projects2Button = document.getElementById('projects2');
projects2Button.addEventListener('click', function(){
    ProjectsSection.scrollIntoView({behavior: "smooth"});;
})

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



document.querySelector("#contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents default form submission
    
    const form = this;
    const submitButton = form.querySelector("#submit-btn"); 
    const originalButtonText = submitButton.innerHTML;

    // Disable button & show loading text
    submitButton.disabled = true;
    submitButton.innerHTML = "Sending...";

    const formData = new FormData(form);

    fetch("https://formsubmit.co/ajax/zahierclaronino50@gmail.com", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Server Response:", data); // Log response for debugging

        if (data.success) {
            alert("Thank you for your message! We'll get back to you soon.");
            form.reset(); // Reset the form
        } else {
            throw new Error(data.message || "Unknown error occurred");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again later.");
    })
    .finally(() => {
        // Restore button state after sending
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
    });
});

window.addEventListener('load', function() {
    // Hide the loading screen after the page is loaded
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');
    
  /*// Hide loading screen and display the content
    loadingScreen.style.display = 'none';
    content.style.display = 'block';*/
    setTimeout(function() {
        loadingScreen.style.display = 'none';
      }, 500); // Hide after 3 seconds
  });


  document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.about-me');

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add class when section comes into view
            }else{
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.05// Trigger when 50% of the section is in view
    });

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.projects');

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add class when section comes into view
                
            }else{
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.15// Trigger when 50% of the section is in view
    });

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.contact-section');

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add class when section comes into view
                
            }else{
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.15// Trigger when 50% of the section is in view
    });

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});

const ReadMoreButton = document.getElementById('more-info');
const MoreInfo = document.getElementById('more-info-section');

const NotesDescription = document.getElementById('notes-description');
let flag = true;

ReadMoreButton.addEventListener('click', function(){
    if(flag === true){
        flag = false;
        MoreInfo.style.opacity = "1";
        MoreInfo.style.zIndex = '4';
        ReadMoreButton.innerText = "Read Less";
    }
    else if(flag === false){
        flag = true;
        MoreInfo.style.opacity = "0";
        MoreInfo.style.zIndex = '2';
        ReadMoreButton.innerText = "Read More";
    }
    
});


const waveText = document.querySelector('.text-wave');
const chars = waveText.textContent.split('');

waveText.innerHTML = chars.map((char, i) =>
  `<span style="animation-delay: ${i * 0.1}s">${char}</span>`
).join('');

const aboutButton2 = document.getElementById('about-me2');
const educationBtn = document.getElementById('education');
const experienceBtn = document.getElementById('experience');

const educationSection = document.getElementById('education-section');
const aboutMeSection = document.getElementById('about-me-section');
const experienceSection = document.getElementById('experience-section');


educationSection.style.display = 'none';
experienceSection.style.display = 'none'

let aboutFlag = false;
let experienceFlag = false;
aboutButton2.classList.add('active-gradient-border');

educationBtn.addEventListener('click', function(){
    aboutFlag = true;
    experienceFlag = false;
    if(aboutFlag===true  && experienceFlag===false){
        
        
        educationSection.style.animation = '1s cardFlip ease';
        aboutMeSection.style.display = 'none';
        experienceSection.style.display = 'none';
        educationSection.style.display = 'flex';
        aboutButton2.style.animation = 'none';

        experienceBtn.style.animation = 'none'

        educationBtn.style.animation = 'flicker 0.3s infinite alternate';

        educationBtn.classList.add('active-gradient-border');
        aboutButton2.classList.remove('active-gradient-border');
        experienceBtn.classList.remove('active-gradient-border');
    }
    
});

aboutButton2.addEventListener('click', function(){
    aboutFlag = false;
    experienceFlag = false;
    if(aboutFlag===false && experienceFlag===false){
        
        aboutMeSection.style.animation = '1s cardFlip ease';
        educationSection.style.display = 'none';
        experienceSection.style.display = 'none';
        aboutMeSection.style.display = 'block';
        
        educationBtn.style.animation = 'none';
        experienceBtn.style.animation = 'none';
        
        aboutButton2.style.animation = 'flicker 0.3s infinite alternate';

        aboutButton2.classList.add('active-gradient-border');
        educationBtn.classList.remove('active-gradient-border');
        experienceBtn.classList.remove('active-gradient-border');
    }
});

experienceBtn.addEventListener('click', function(){
    experienceFlag = true;
    if(experienceFlag===true){
        experienceSection.style.animation = '1s cardFlip ease';
        educationSection.style.display = 'none';
        aboutMeSection.style.display = 'none';
        experienceSection.style.display = 'flex';
        experienceBtn.style.animation = 'flicker 0.3s infinite alternate';
        aboutButton2.style.animation = 'none';
        educationBtn.style.animation = 'none';
        experienceBtn.classList.add('active-gradient-border');
        educationBtn.classList.remove('active-gradient-border');
        aboutButton2.classList.remove('active-gradient-border');
        console.log(experienceBtn);
    }
})
    

const certsAnimation = document.getElementById('certs-animation');
const certsImages = document.querySelectorAll('#certs-animation img');

let animationFlag = true;

certsAnimation.addEventListener('mouseover', function(){
    animationFlag = false;

    if(animationFlag===false){
        certsAnimation.style.animationPlayState = 'paused';
    }
});

certsAnimation.addEventListener('mouseout', function(){
    animationFlag = true;

    if(animationFlag===true){
        certsAnimation.style.animationPlayState = 'running';
    }
});
       

const imagePopup = document.getElementById('image-popup');
const popupImg = document.getElementById('popup-img');
const closePopup = document.getElementById('close-popup');

// Pause on hover of individual images
certsImages.forEach(img => {
  img.addEventListener('mouseover', () => {
    certsAnimation.style.animationPlayState = 'paused';
  });

  img.addEventListener('mouseout', () => {
    certsAnimation.style.animationPlayState = 'running';
  });

  img.addEventListener('click', () => {
    popupImg.src = img.src;
    imagePopup.style.display = 'flex';
  });
});

// Close popup on click of close icon
closePopup.addEventListener('click', () => {
  imagePopup.style.display = 'none';
});

// Optional: Close popup when clicking outside the image
imagePopup.addEventListener('click', (e) => {
  if (e.target === imagePopup) {
    imagePopup.style.display = 'none';
  }
});


const popupVisible = window.getComputedStyle(imagePopup).display === 'flex';

if (popupVisible) {
  certsAnimation.style.animationPlayState = 'paused';
} else {
  certsAnimation.style.animationPlayState = 'running';
}






