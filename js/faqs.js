// Get all elements with the class "accordion" and store them in the variable acc
var acc = document.getElementsByClassName("accordion");

// Loop through each element in the acc array
for (var i = 0; i < acc.length; i++) {
    // Add a click event listener to each accordion element
    acc[i].addEventListener("click", function() {
        // Toggle the "active" class on the clicked accordion element
        this.classList.toggle("active");

        // Get the panel that is directly after the clicked accordion element
        var panel = this.nextElementSibling;

        // Check if the panel's max-height style is set
        if (panel.style.maxHeight) {
            // If the max-height is set, reset it to null (collapsing the panel)
            panel.style.maxHeight = null;
        } else {
            // If the max-height is not set, set it to the scrollHeight of the panel (expanding the panel)
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
