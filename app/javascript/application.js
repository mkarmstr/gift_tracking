document.addEventListener('DOMContentLoaded', () => {
  const addGiftLink = document.getElementById('add-gift-link');
  const giftsContainer = document.getElementById('gifts');

  if (addGiftLink && giftsContainer) {
    addGiftLink.addEventListener('click', (event) => {
      event.preventDefault();
      const template = document.getElementById('gift-fields-template').content.cloneNode(true);
      const time = new Date().getTime();
      const tmpl = template.firstElementChild.innerHTML.replace(/NEW_RECORD/g, time);
      const div = document.createElement('div');
      div.classList.add('nested-fields');
      div.innerHTML = tmpl;
      giftsContainer.appendChild(div);
    });

    giftsContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('remove-gift')) {
        event.preventDefault();
        event.target.closest('.nested-fields').remove();
      }
    });
  }
});
