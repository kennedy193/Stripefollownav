const triggers = document.querySelectorAll('.cool > li');
const dropBackground = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top'); // Define nav here

function handleEnter() {
    console.log('enter');
    this.classList.add('trigger-enter'); // Remove dot (.) from class name
    setTimeout(() => this.classList.add('trigger-enter-active'), 150);
    dropBackground.classList.add('open');

    const dropDown = this.querySelector('.dropdown');
    const dropCoords = dropDown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect(); // Use nav for position reference
    console.log(dropCoords);

    const coords = {
        width: dropCoords.width,
        height: dropCoords.height,
        top: dropCoords.top - navCoords.top,
        left: dropCoords.left - navCoords.left
    };

    dropBackground.style.setProperty('width', `${coords.width}px`);
    dropBackground.style.setProperty('height', `${coords.height}px`);
    dropBackground.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
    console.log('leave');
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    dropBackground.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
