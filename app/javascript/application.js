// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener('DOMContentLoaded', () => {
  // Function to dynamically add new gift fields
  const addGiftFields = () => {
    // Generate a unique timestamp to replace 'NEW_RECORD' placeholders
    const time = new Date().getTime();
    const regexp = new RegExp('NEW_RECORD', 'g');
    // Get the HTML from the template and replace placeholders with the timestamp
    const newGiftFields = document.querySelector('#gift-fields-template').innerHTML.replace(regexp, time);
    // Insert the new fields into the DOM
    document.querySelector('#gifts').insertAdjacentHTML('beforeend', newGiftFields);
  };

  // Add event listener for the 'Add Gift' button/link
  document.getElementById('add-gift-link').addEventListener('click', (event) => {
    event.preventDefault();
    addGiftFields();
  });

  // Use event delegation to handle click events on dynamically added 'Remove' buttons/links
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-gift')) {
      event.preventDefault();
      const giftFieldWrapper = event.target.closest('.nested-fields');
      giftFieldWrapper.remove();
    }
  });
});
