export class TextComponent extends HTMLElement {
  static get tag() {
    return "text-component";
  }

  static get observedAttributes() {
    return ["text"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML =
      this.getAttribute("text") || this.getDefaultText();
  }

  getDefaultText() {
    return "Hello, World!";
  }
}

customElements.define(TextComponent.tag, TextComponent);
