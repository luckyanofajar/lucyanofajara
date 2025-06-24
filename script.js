function sapa() {
    alert("Salam budaya dari Cirebon!");
  }
  
  function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const visible = 120;
      if (elementTop < windowHeight - visible) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  }
  
  window.addEventListener("scroll", revealOnScroll);  