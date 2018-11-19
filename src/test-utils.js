export class TestUtils {
  static render(tag, attributes = {}) {
    TestUtils._renderToDocument(tag, attributes);
    return TestUtils._waitForComponentToRender(tag);
  }

  static _mapObjectToHTMLAttributes(object) {
    return Object.entries(object).reduce((previous, current) => {
      return previous + ` ${current[0]}="${current[1]}"`;
    }, "");
  }

  static _renderToDocument(tag, attributes) {
    const htmlAttributes = TestUtils._mapObjectToHTMLAttributes(attributes);
    document.body.innerHTML = `<${tag} ${htmlAttributes}></${tag}>`;
  }

  static _waitForComponentToRender(tag) {
    return new Promise(resolve => {
      function requestComponent() {
        const element = document.querySelector(tag);
        if (!element) {
          return window.requestAnimationFrame(requestComponent);
        }
        return resolve(element);
      }
      requestComponent();
    });
  }
}
