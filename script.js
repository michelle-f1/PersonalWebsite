/*Show menu*/
const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
} 
showMenu('nav-toggle','nav-menu')

/*activate and remove menu */
const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/*scroll animation*/
const scrollrev = ScrollReveal({
    origin: 'top',
    distance: '90px',
    duration: 2000,
    reset: true
});

/*scroll to home */
scrollrev.reveal('.introcution_title',{});
scrollrev.reveal('.button',{delay:200});
scrollrev.reveal('.introduction_image',{delay: 400});
scrollrev.reveal('.introduction_social-icon',{interval: 200});

/*scroll to about*/
scrollrev.reveal('.about_img',{});
scrollrev.reveal('.about_subtitle',{delay: 400});
scrollrev.reveal('.about_information',{delay: 400});

/*scroll to expierence */
scrollrev.reveal('.work_img',{interval: 200});
scrollrev.reveal('.download-cv',{interval: 200});

/*Scroll to skills and interests */
scrollrev.reveal('.skills_sub',{});
scrollrev.reveal('.skills_info',{});
scrollrev.reveal('.skills_perc',{});
scrollrev.reveal('.skills_img',{});

scrollrev.reveal('.contact_input',{interval: 200});

