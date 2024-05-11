document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide img");
  const modal = document.getElementById("modal");
  const modalVideo = document.getElementById("modal-video"); 
  const modalDescription = document.getElementById("modal-description");
  const modalTitle = document.getElementById("modal-title");
  const closeBtn = document.querySelector(".close");

  slides.forEach(slide => {
    slide.addEventListener('click', function () {
      const videoSrc = this.getAttribute('data-description');
      const projectTitle = this.getAttribute('alt');
      const projectDescription = this.getAttribute('data-project-description');
      modal.style.display = 'block';
      modalTitle.textContent = projectTitle;
      modalVideo.src = videoSrc;
      modalDescription.textContent = projectDescription;
    });
  });  

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    modalVideo.pause();
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
      modalVideo.pause(); 
    }
  });
});

