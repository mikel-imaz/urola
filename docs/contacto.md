---
icon: material/face-man
---

# :material-face-man: Contacto

<form
  action="https://formspree.io/f/xzzjkapp"
  method="POST"
  class="md-typeset"
  style="max-width: 600px; margin-top: 1em;"
>
  <div style="margin-bottom: 1em;">
    <label for="name"><strong>Nombre</strong></label><br>
    <input
      type="text"
      name="name"
      id="name"
      required
      style="width:100%;padding:0.6em;border:1px solid var(--md-default-fg-color--light);border-radius:6px;"
    >
  </div>

  <div style="margin-bottom: 1em;">
    <label for="email"><strong>Email</strong></label><br>
    <input
      type="email"
      name="_replyto"
      id="email"
      required
      style="width:100%;padding:0.6em;border:1px solid var(--md-default-fg-color--light);border-radius:6px;"
    >
  </div>

  <div style="margin-bottom: 1em;">
    <label for="message"><strong>Mensaje</strong></label><br>
    <textarea
      name="message"
      id="message"
      rows="5"
      required
      style="width:100%;padding:0.6em;border:1px solid var(--md-default-fg-color--light);border-radius:6px;"
    ></textarea>
  </div>

  <button
    type="submit"
    style="background-color:var(--md-primary-fg-color);color:var(--md-primary-bg-color);padding:0.6em 1.2em;border:none;border-radius:6px;cursor:pointer;"
  >
    Enviar mensaje
  </button>
</form>

<p style="margin-top:1em;font-size:0.9em;color:var(--md-default-fg-color--light);">
  This form is powered by <a href="https://formspree.io/" target="_blank">Formspree</a>.
</p>


