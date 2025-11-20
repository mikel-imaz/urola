document.addEventListener("DOMContentLoaded", function () {
  // === EDIT ONLY THESE LINES ===
  const contacts = {
    whatsapp: "34626455709",                                // Your phone (international, no +, no dashes)
    instagram: "mikelimaz_",                                // Without the @
    email:    "da7uak@google.com",                          // Your email
    amazon:   "https://amzn.eu/d/i53m6sb"                   // Direct link to your book OR your author page
  };

  const whatsappText = "Hola! 📚";
  // =============================

  document.querySelectorAll(".contact-btn").forEach(btn => {
    const platform = btn.dataset.platform;

    // Make it look clickable
    btn.style.cursor = "pointer";
    btn.title = getTitle(platform);

    btn.addEventListener("click", function () {
      let url = "";

      switch (platform) {
        case "whatsapp":
          url = `https://wa.me/${contacts.whatsapp}?text=${encodeURIComponent(whatsappText)}`;
          window.open(url, "_blank", "noopener");
          break;

        case "instagram":
          url = `https://instagram.com/${contacts.instagram}`;
          window.open(url, "_blank", "noopener");
          break;

        case "email":
          window.location.href = `mailto:${contacts.email}?subject=Question%20about%20your%20book`;
          break;

        case "amazon":
          window.open(contacts.amazon, "_blank", "noopener");
          break;
      }
    });
  });

  function getTitle(platform) {
    const titles = {
      whatsapp:  "Contacta conmigo por WhatsApp",
      instagram: "Sígueme en Instagram",
      email:     "Envíame un email",
      amazon:    "Compra mi libro en Amazon"
    };
    return titles[platform] || "Contact me";
  }
});