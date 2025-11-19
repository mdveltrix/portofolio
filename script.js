// Dark mode toggle
const toggleBtn = document.getElementById('dark-mode-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Scroll animations
const faders = document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Modal for projects
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalLink = document.getElementById('modal-link');
const closeBtn = document.querySelector('.modal .close');

document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        const projectTitle = project.querySelector('h3').innerText;
        const projectDesc = project.querySelector('p').innerText;
        const projectRepo = project.querySelector('a').href;

        modalTitle.textContent = projectTitle;
        modalDescription.textContent = projectDesc;
        modalLink.href = projectRepo;

        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.style.display = 'none';
    }
});
