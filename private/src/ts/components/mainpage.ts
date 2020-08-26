import { LitElement, html, customElement } from 'lit-element';

import './family';

@customElement('main-page')
export default class extends LitElement {
  title = 'Tjørnebakken 8';
  render() {
    return html`
      <div class="main-page">
        <h1>${this.title}</h1>
        <family-members></family-members>
      </div>
    `;
  }
}
