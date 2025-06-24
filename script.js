/**
 * Event handler for when the mouse cursor enters a figure element.
 * Adds a visual effect to indicate interaction.
 * @param {Event} event - The mouseover event object.
 */
function handleMouseOver(event) {
    console.log('Mouse over triggered for:', event.currentTarget.querySelector('figcaption').textContent);
    // Add a class for visual effect on mouse over
    event.currentTarget.style.borderColor = '#6366f1'; // Tailwind indigo-500
    event.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
    event.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
}

/**
 * Event handler for when the mouse cursor leaves a figure element.
 * Resets the visual effect.
 * @param {Event} event - The mouseleave event object.
 */
function handleMouseLeave(event) {
    console.log('Mouse leave triggered for:', event.currentTarget.querySelector('figcaption').textContent);
    // Remove the visual effect on mouse leave
    event.currentTarget.style.borderColor = 'transparent';
    event.currentTarget.style.transform = 'translateY(0) scale(1)';
    event.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
}

/**
 * Event handler for when a figure element gains focus.
 * Adds a visual cue for keyboard navigation.
 * @param {Event} event - The focus event object.
 */
function handleFocus(event) {
    console.log('Focus gained for:', event.currentTarget.querySelector('figcaption').textContent);
    // Add a class for visual effect on focus
    event.currentTarget.style.borderColor = '#a78bfa'; // Tailwind violet-400
    event.currentTarget.style.transform = 'translateY(-4px) scale(1.01)';
    event.currentTarget.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.15)';
}

/**
 * Event handler for when a figure element loses focus.
 * Resets the visual cue.
 * @param {Event} event - The blur event object.
 */
function handleBlur(event) {
    console.log('Focus lost for:', event.currentTarget.querySelector('figcaption').textContent);
    // Remove the visual effect on blur
    event.currentTarget.style.borderColor = 'transparent';
    event.currentTarget.style.transform = 'translateY(0) scale(1)';
    event.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
}

/**
 * Function to add the tabindex attribute to all figure elements on page load.
 * This makes them focusable via keyboard navigation.
 */
function addTabindexToFigures() {
    console.log('onload event triggered: addTabindexToFigures function called.');
    const figures = document.querySelectorAll('.photo-figure'); // Select all figure elements

    // Loop through each figure and add tabindex="0"
    for (let i = 0; i < figures.length; i++) {
        figures[i].setAttribute('tabindex', '0');
        console.log(`Added tabindex="0" to figure with caption: ${figures[i].querySelector('figcaption').textContent}`);
    }

    // Attach event listeners for mouse and focus/blur events to each figure
    figures.forEach(figure => {
        figure.addEventListener('mouseover', handleMouseOver);
        figure.addEventListener('mouseleave', handleMouseLeave);
        figure.addEventListener('focus', handleFocus); // New focus listener
        figure.addEventListener('blur', handleBlur);   // New blur listener
    });
}

// Add the onload listener to call the function for adding tabindex
window.addEventListener('load', addTabindexToFigures);
