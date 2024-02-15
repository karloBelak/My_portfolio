//---------------------//
// PADAJUCI IZBORNIK

document.addEventListener("DOMContentLoaded", function () {
  const hamMenu = document.querySelector('.ham-btn');
  const navBar = document.querySelector('.ul');
  const section1 = document.querySelector('.card1');

  function setMargin() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth;

    if (screenWidth > 769) {
      // Širina prozora prelazi 769px, ukloni marginu
      section1.style.marginTop = '';
      navBar.classList.remove('show');
    } else {
      // Širina prozora manja ili jednaka 769px, postavi marginu
     

      if (navBar.classList.contains('show')) {
        section1.style.marginTop = '155px';
      } else {
        section1.style.marginTop = '';
      }
    }
  }

  hamMenu.addEventListener('click', function () {
    navBar.classList.toggle('show');
    setMargin();
  });

  const navLinks = document.querySelectorAll('.a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navBar.classList.remove('show');
      setMargin();
    });
  });

  // Pozovite funkciju inicijalno i dodajte event listenere za promjene veličine prozora
  setMargin();
  window.addEventListener('resize', setMargin);
});




//------------------//
// BUTTON CLICK ME koji na klik vodi na sekciju contact//

const btnContactMe = document.querySelector('.btn-contact');
const sectionContact = document.querySelector('#contact')

btnContactMe.addEventListener('click', function(){
  // s1coords = sectionContact.getBoundingClientRect();
  sectionContact.scrollIntoView({behavior: 'smooth' });
})

//----------------//
// ANIMACIJA

document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".slider");
  const initialDelays = Array.from(sliders, (slider) => {
    const delayString = getComputedStyle(slider).animationDelay;
    return parseFloat(delayString) * 1000; // Pretvaranje sekundi u milisekunde
  });

  function restartAnimations() {
    sliders.forEach(function (slider, index) {
      const initialDelay = initialDelays[index];
      slider.style.animation = "none";
      slider.style.animationDelay = `-${initialDelay / 1000}s`; // Postavljanje negativnog delay-a
      void slider.offsetWidth; // Ponovno pokreće reflow
      slider.style.animation = "slide 1.5s ease-in-out 1 both";
      slider.style.animationDelay = ""; // Resetiranje delay-a na zadano
    });
  }

  // Dodajte event listener za završetak animacije na posljednjem slideru (project)
  const projectSlider = document.querySelector(".project");
  projectSlider.addEventListener("animationend", function () {
    // Ovo će odgoditi poziv funkcije restartAnimations za 2 sekunde
    setTimeout(restartAnimations, 2000);
  });
});


//-----------------//
//-----------------//

// SEND MAIN - CONTACT FORM //
const clientName = document.querySelector('#name').value;
const clientEmail = document.querySelector('#email').value;
const clientMessage = document.querySelector("#message").value;


function sendMail(){
  Email.send({
    SecureToken : "fa3ba0c9-61a1-4c03-ada4-12c862b8a78e",
    To : 'belidvadva@gmail.com',
    From : 'belidvadva@gmail.com',
    Subject : "New Contact From Enquiry",
    Body : "Name" + clientName + "<br> Email: " + clientEmail + "<br> Message: " + clientMessage
}).then(
   message => alert('Message Sent Succesfully')
);

}