import icon from './index.js';

class IAIconEllipses extends LitElement {
  static get styles() {
    return css`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `;
  }

  render() {
    return icon;
  }
}

customElements.define('ia-icon-ellipses', IAIconEllipses);

export default IAIcon;