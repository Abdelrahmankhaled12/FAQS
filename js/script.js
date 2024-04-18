import translations from "./translations.js";


// Selecting the buttonScroll element and the header element from the DOM
let buttonScroll = document.querySelector(".buttonScroll");
let header = document.getElementById("header");

// Event handler for window scroll event
window.onscroll = function () {
    // If the vertical scroll position is greater than or equal to 400 pixels
    if (window.scrollY >= 400) {
        // Make the buttonScroll visible
        buttonScroll.style.opacity = "1";
    } else {
        // Otherwise, hide the buttonScroll
        buttonScroll.style.opacity = "0";
    }

    if (header) {
        // If the vertical scroll position is greater than or equal to 100 pixels
        if (window.scrollY >= 100) {
            // Add the 'show' class to the header element
            header.classList.add("show");
        } else {
            // Otherwise, remove the 'show' class from the header element
            header.classList.remove("show");
        }
    }
};

// Event handler for window click event
window.onclick = function () {
    // Event handler for buttonScroll click event
    buttonScroll.onclick = function () {
        // Scroll to the top of the page smoothly when buttonScroll is clicked
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
};

// Wait for the DOM content to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", function () {
    // Execute the following code after a delay of 5000 milliseconds (5 seconds)
    setTimeout(() => {
        // Initialize the WOW.js library for animating elements
        new WOW().init();
        // Hide the loader element after 5 seconds
        document.getElementById("loader").style.display = "none";
        // Hide the effect element after 5 seconds
        document.getElementById("effect").style.display = "none";
        // Show the sections element after 5 seconds
        document.getElementById("sections").style.display = "block";
        // Otherwise, hide the buttonScroll
        buttonScroll.style.opacity = "0";
    }, 4000); // 4000 milliseconds = 4 seconds
});

// Event listener for 'showMenu' button click event
document.getElementById("showMenu").addEventListener("click", function () {
    // Add the 'showMenuMobile' class to the 'menuMobile' element when 'showMenu' button is clicked
    document.getElementById("menuMobile").classList.add("showMenuMobile");
});

// Event listener for 'buttonClose' button click event
document.getElementById("buttonClose").addEventListener("click", function () {
    // Remove the 'showMenuMobile' class from the 'menuMobile' element when 'buttonClose' button is clicked
    document.getElementById("menuMobile").classList.remove("showMenuMobile");
});

// Event listener for 'outMenu' button click event
document.getElementById("outMenu").addEventListener("click", function () {
    // Remove the 'showMenuMobile' class from the 'menuMobile' element when 'outMenu' button is clicked
    document.getElementById("menuMobile").classList.remove("showMenuMobile");
});


// Initialize variable to keep track of whether language dropdown is open or closed
let openLanguages = false;

// Get references to language dropdown and language button elements
const languageDropdown = document.getElementById("ul_language");
const languageButton = document.getElementById("language");

// Add event listener to detect clicks anywhere on the document
document.addEventListener("click", function (event) {
    const targetElement = event.target;

    // Check if the click is outside language button and dropdown
    if (!languageButton.contains(targetElement) && !languageDropdown.contains(targetElement)) {
        // If click is outside, close the dropdown
        openLanguages = false;
        languageDropdown.style.opacity = "0";
    }
});

// Add event listener to toggle dropdown visibility when language button is clicked
languageButton.addEventListener("click", function () {
    if (openLanguages) {
        // If dropdown is open, close it
        openLanguages = false;
        languageDropdown.style.opacity = "0";
    } else {
        // If dropdown is closed, open it
        openLanguages = true;
        languageDropdown.style.opacity = "1";
    }
});


// Select all elements with class "languageSelector"
const languageSelector = document.querySelectorAll(".languageSelector");

// Loop through each language selector element
languageSelector.forEach(item => {
    // Add click event listener to each language selector
    item.addEventListener("click", (event) => {
        // Call setLanguage function with the value attribute of the clicked item
        setLanguage(item.getAttribute("value"));
        
        // Store selected language in local storage
        localStorage.setItem("lang", item.getAttribute("value"));
        
        // Update the text of an element with id "textButtonLanguage" to match the clicked language
        document.getElementById("textButtonLanguage").innerHTML = item.innerHTML;
    });
    
    // Check if the current item's value attribute matches the stored language in local storage
    if (item.getAttribute("value") === localStorage.getItem("lang")) {
        // Update the text of an element with id "textButtonLanguage" to match the stored language
        document.getElementById("textButtonLanguage").innerHTML = item.innerHTML;
    }
});

// When the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get the selected language from local storage or default to "en" (English)
    const language = localStorage.getItem("lang") || "en";
    
    // Call setLanguage function with the selected language
    setLanguage(language);
});

// Function to set the language of elements with data-i18n attribute
const setLanguage = (language) => {
    // Select all elements with data-i18n attribute
    const elements = document.querySelectorAll("[data-i18n]");
    
    // Loop through each element
    elements.forEach((element) => {
        // Check if the element is a form element (input, textarea) based on data-type attribute
        if (element.getAttribute("data-type") === "form") {
            // Get the translation key from data-i18n attribute
            const translationKey = element.getAttribute("data-i18n");
            
            // Set placeholder attribute of form elements to translated text
            element.placeholder = translations[language][translationKey];
        } else {
            // Get the translation key from data-i18n attribute
            const translationKey = element.getAttribute("data-i18n");
            
            // Set innerHTML of non-form elements to translated text
            element.innerHTML = translations[language][translationKey];
        }
    });
};
