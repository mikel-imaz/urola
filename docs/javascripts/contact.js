/* global document$ */

const contacts = {
  whatsapp: "34626455709",                                // Your phone (no +, no dashes)
  instagram: "mikelimaz_",                  // Without the @
  email:    "da7uak@gmail.com",
  amazon:   "https://amzn.eu/d/i53m6sb"       // Your book / author page link
};

const whatsappText = "Hola!";

// This function will run on first load AND on every navigation (instant or normal)
document$.subscribe(function() {
  document.querySelectorAll(".contact-btn").forEach(btn => {
    // Clean any old handler first
    if (btn._contactHandler) {
      btn.removeEventListener("click", btn._contactHandler);
    }

    const platform = btn.dataset.platform;
    btn.style.cursor = "pointer";
    btn.title = getTitle(platform);

    const handler = function() {
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
    };

    btn.addEventListener("click", handler);
    btn._contactHandler = handler;  // store for cleanup
  });

  function getTitle(platform) {
    const titles = {
      whatsapp:  "Ponme un WhatsApp",
      instagram: "Sígueme en Instagram",
      email:     "Envíame un email",
      amazon:    "Compra mi libro en Amazon"
    };
    return titles[platform] || "Contact me";
  }
});