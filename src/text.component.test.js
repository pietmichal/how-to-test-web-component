import { TextComponent } from "./text.component.js";
import { TestUtils } from "./test-utils.js";

describe("Text Component", () => {
  it("displays default text when text is not provided as an attribute", async () => {
    const { shadowRoot } = await TestUtils.render(TextComponent.tag);
    expect(shadowRoot.innerHTML.includes("Hello, World!")).toBeTruthy();
  });

  it("displays text provided through an attribute", async () => {
    const { shadowRoot } = await TestUtils.render(TextComponent.tag, {
      text: "Provided text"
    });
    expect(shadowRoot.innerHTML.includes("Provided text")).toBeTruthy();
  });

  describe("getDefaultText()", () => {
    it("returns default text", () => {
      const component = new TextComponent();
      expect(component.getDefaultText()).toEqual("Hello, World!");
    });
  });
});
