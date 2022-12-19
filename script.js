const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", (e) => {
    removeActiveClasses(faq.id);
    faq.classList.toggle("active");
  });
});

function removeActiveClasses(elementId) {
  faqs.forEach((faq) => {
    if (elementId === faq.id) return;
    faq.classList.remove("active");
  });
}
