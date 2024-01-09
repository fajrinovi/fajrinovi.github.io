document.addEventListener('DOMContentLoaded', (event) => {
  // Function to open a modal
  function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
  }

  // Function to close a modal
  function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
  }

  // Attach open modal click event to each "open-modal" link for the image zoom
  document.querySelectorAll('.open-modal').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor behavior
      var modalId = this.dataset.target;
      var imgSrc = this.parentElement.previousElementSibling.src;
      var modal = document.getElementById(modalId.replace('#', ''));
      if (modal) {
        var modalImg = modal.querySelector('img'); // Make sure to select the image tag
        if (modalImg) {
          modalImg.src = imgSrc;
        }
        openModal(modalId.replace('#', ''));
      }
    });
  });

  // Attach open modal click event to each "see-detail-btn" button for the Canva modal
  document.querySelectorAll('.see-detail-btn').forEach(button => {
    button.addEventListener('click', function() {
      var modalId = this.dataset.target;
      openModal(modalId.replace('#', ''));
    });
  });

  // Attach close modal click event to each "close-canva" button
  document.querySelectorAll('.close-canva').forEach(closeButton => {
    closeButton.addEventListener('click', function() {
      var modalId = this.closest('.modal').id;
      closeModal(modalId);
    });
  });

  // Also close the image modal if it's open
  document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', function() {
      var modalId = this.closest('.modal').id;
      closeModal(modalId);
    });
  });

  // Close the modal if the user clicks outside of it
  window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
      closeModal(event.target.id);
    }
  }
});
