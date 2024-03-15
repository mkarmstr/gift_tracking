document.addEventListener("DOMContentLoaded", function() {
    const addGiftLink = document.getElementById('add-gift-link');
  
    if (addGiftLink) {
      addGiftLink.addEventListener('click', function(event) {
        event.preventDefault();
  
        // Find the first .nested-fields element to use as a template
        const originalFieldset = document.querySelector('.nested-fields');
        if (originalFieldset) {
          // Clone the template
          const newFieldset = originalFieldset.cloneNode(true);
  
          // Clear the values of the clone
          newFieldset.querySelectorAll('input').forEach(function(input) {
            input.value = '';
          });
  
          // Modify the clone's ID and Name to ensure uniqueness (optional, depending on your specific needs)
          // This might involve updating the name attribute to include a new index or timestamp
  
          // Append the clone to the parent container
          originalFieldset.parentNode.appendChild(newFieldset);
  
          // Add event listener to the new 'Remove Gift' link
          newFieldset.querySelector('.remove-gift').addEventListener('click', function(e) {
            e.preventDefault();
            newFieldset.remove();
          });
        }
      });
    }
  
    document.body.addEventListener('click', function(event) {
      if (event.target.classList.contains('remove-gift')) {
        event.preventDefault();
        event.target.closest(".nested-fields").remove();
      }
    });
  });
  