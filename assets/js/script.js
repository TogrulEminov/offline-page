// JavaScript
const translations = {
  az: {
    heroText: "Tezliklə sizinlə",
    privacyText: "Məxfilik siyasəti",
  },
  en: {
    heroText: "Comming Soon",
    privacyText: "Privacy Policy",
  },
  ru: {
    heroText: "До скорой встречи",
    privacyText: "Политика конфиденциальности",
  },
};

function changeLanguage(lang) {
  document.getElementById("heroText").innerText = translations[lang].heroText;
  document.getElementById("privacyText").innerText =
    translations[lang].privacyText;

  // Bütün düymələrdən 'active' sinifini sil
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.remove("active");
  });

  // Seçilmiş dil düyməsinə 'active' sinifini əlavə et
  document
    .querySelector(`.lang-btn[onclick="changeLanguage('${lang}')"]`)
    .classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  // Ensure that elements exist in the DOM before setting the mousemove listener
  const cursor = document.querySelector(".cursor");
  const shapes = document.querySelectorAll(".shape"); // Select all shapes

  // Check if the elements exist
  if (cursor && shapes.length > 0) {
    document.body.addEventListener("mousemove", (evt) => {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      // Move the cursor element to the mouse position
      gsap.set(cursor, {
        x: mouseX,
        y: mouseY,
      });

      // Animate all shapes to the mouse position with a stagger effect
      gsap.to(shapes, {
        x: mouseX,
        y: mouseY,
        stagger: -0.1,
      });
    });
  } else {
    console.error("Cursor or shape elements not found.");
  }
});
