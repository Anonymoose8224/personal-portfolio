const backToIndexButton = document.getElementById('back-to-index');
const toAboutButton = document.getElementById('index-about-button');
const toSkillsButton = document.getElementById('index-skills-button');
const toProjectsButton = document.getElementById('index-projects-button');
const toContactButton = document.getElementById('index-contact-button');

backToIndexButton.addEventListener('click', () => {
  window.location.href = 'index.html';
});
toAboutButton.addEventListener('click', () => {
    window.location.href = 'about.html'
});
toSkillsButton.addEventListener('click', () => {
    window.location.href = 'skills.html'
});
toProjectsButton.addEventListener('click', () => {
    window.location.href = 'projects.html'
});
toContactButton.addEventListener('click', () => {
    window.location.href = 'contact.html'
});