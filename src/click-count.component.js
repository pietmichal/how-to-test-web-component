export class ClickCountComponent extends HTMLElement {
  static get tag() {
    return "click-count";
  }

  constructor() {
    super();
    this._root = this.attachShadow({ mode: "closed" });
    this.clickCount = 0;
    this.render();
  }

  onClick() {
    this.clickCount += 1;
  }

  render() {
    this._root.innerHTML = `
      <button>Increment</button> Clicks: ${this.clickCount}
    `;
    this._root.querySelector("button").addEventListener("click", () => {
      this.onClick();
      this.render();
    });
  }
}

customElements.define(ClickCountComponent.tag, ClickCountComponent);
