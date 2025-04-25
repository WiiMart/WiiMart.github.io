document.querySelectorAll('.issue-button').forEach(button => {
    button.addEventListener('click', function() {
        const parentDiv = this.parentElement; // Get the parent div with class "issue"
        const hiddenElements = parentDiv.querySelectorAll('.issue-detail'); // Select hidden elements within this div
        
        // Hide the button
        this.style.display = 'none';
        
        // Show the hidden elements
        hiddenElements.forEach(element => {
            element.style.display = 'block';
        });
    });
});