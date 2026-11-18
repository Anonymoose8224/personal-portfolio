
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