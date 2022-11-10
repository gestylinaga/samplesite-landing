// Sample Site - Landing 
console.log("by: gesty 🏄 ");

// IntersectionObserver for animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
    entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }  
  });
});

const hiddenLeft = document.querySelectorAll('.hidden-left');
hiddenLeft.forEach((el) => observer.observe(el));

const hiddenRight = document.querySelectorAll('.hidden-right');
hiddenRight.forEach((el) => observer.observe(el));

const hiddenBelow = document.querySelectorAll('.hidden-below');
hiddenBelow.forEach((el) => observer.observe(el));

const hiddenAbove = document.querySelectorAll('.hidden-above');
hiddenAbove.forEach((el) => observer.observe(el));
