// Getting the class
const panels = document.querySelectorAll('.exp-panel');

// Applying Active Class on the clicked Pic
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    } )
})

// Function to remove active classes
function removeActiveClasses() {
    panels .forEach(panel => {
         panel.classList.remove('active')
    })
}

