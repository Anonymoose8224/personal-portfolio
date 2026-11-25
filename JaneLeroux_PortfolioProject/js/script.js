
//CHANGING PAGES BUTTONS
const backToIndexButton = document.getElementById('back-to-index');
const toAboutButton = document.getElementById('index-about-button');
const toSkillsButton = document.getElementById('index-skills-button');
const toProjectsButton = document.getElementById('index-projects-button');
const toContactButton = document.getElementById('index-contact-button');

backToIndexButton?.addEventListener('click', () => {
    window.location.href = 'index.html';
});
toAboutButton?.addEventListener('click', () => {
    window.location.href = 'about.html';
});
toSkillsButton?.addEventListener('click', () => {
    window.location.href = 'skills.html';
});
toProjectsButton?.addEventListener('click', () => {
    window.location.href = 'projects.html';
});
toContactButton?.addEventListener('click', () => {
    window.location.href = 'contact.html';
});


//MANAGING BRIGHTNESS BUTTON
const modeButton = document.getElementById('brightness-button');
const body = document.body;
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}
modeButton?.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
})


//MAKING NAV INVISIBLE AND VISIBLE
const navButton = document.getElementById('nav-button');
const mainNav = document.getElementById('main-nav');
navButton?.addEventListener('click', () => {
    mainNav.classList.toggle('hidden');
});


//PROGRESS BARS FILLING UP FOR SKILLS
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll("progress.progress-fill");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const bar = entry.target;
            if (entry.isIntersecting) {
                bar.value = bar.getAttribute("data-target");
            } else {
                bar.value = 0;
            }
        });
    }, {
        threshold: 0.2
    });
    progressBars.forEach(bar => observer.observe(bar));
});