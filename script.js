const faqs = document.querySelectorAll(".faq");
const question = document.querySelector(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

faq.classList.remove("active");
