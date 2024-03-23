// This script will control the timing of the animations
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title');
    const description = document.querySelector('.description');

    // Trigger the animation after a slight delay to create a visual flow
    setTimeout(() => {
        title.classList.add('fadeInUp');
    }, 500);

    setTimeout(() => {
        description.classList.add('fadeInUp');
    }, 1000);
});
