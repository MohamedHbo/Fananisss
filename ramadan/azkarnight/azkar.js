// Load counters from localStorage or initialize to 0
const counters = JSON.parse(localStorage.getItem('counters')) || {};

function incrementCounter(counterId, displayId) {
    // Increment the counter and update the display
    counters[counterId] = (counters[counterId] || 0) + 1;
    document.getElementById(counterId).innerText = counters[counterId];
    
    // Update the display next to the button
    document.getElementById(displayId).innerText = `+${counters[counterId]}`;

    // Save counters to localStorage
    localStorage.setItem('counters', JSON.stringify(counters));
}

// Load counters from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    // Update display for each counter
    for (const [counterId, count] of Object.entries(counters)) {
        document.getElementById(counterId).innerText = count;
        document.getElementById(`counterDisplay${counterId}`).innerText = `+${count}`;
    }
});
