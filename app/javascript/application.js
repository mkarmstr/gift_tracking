document.addEventListener('DOMContentLoaded', () => {
  const addGiftLink = document.getElementById('add-gift-link');
  const giftsContainer = document.getElementById('gifts');

  if (addGiftLink && giftsContainer) {
    // click event handler for "Add Gift"
    const handleAddGiftLinkClick = (event) => {
      event.preventDefault();
      const template = document.getElementById('gift-fields-template').content.cloneNode(true);
      const time = new Date().getTime();
      const tmpl = template.firstElementChild.innerHTML.replace(/NEW_RECORD/g, time);
      const div = document.createElement('div');
      div.classList.add('nested-fields');
      div.innerHTML = tmpl;
      giftsContainer.appendChild(div);
    }

    // click event listener to "Add Gift" link
    addGiftLink.addEventListener('click', handleAddGiftLinkClick);

    // trigger click event to add new gift form on page load
    addGiftLink.click();

    // define click event handler for "Remove Gift" 
    const handleRemoveGiftButtonClick = (event) => {
      if (event.target.classList.contains('remove-gift-button')) {
        event.target.closest('.nested-fields').remove();
      }
    }

    // click event listener to "Remove Gift" button
    giftsContainer.addEventListener('click', handleRemoveGiftButtonClick);
  }
});