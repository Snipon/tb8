import { LitElement, html, css, customElement } from 'lit-element';

import './family';
import './weather';

@customElement('main-page')
export default class extends LitElement {
  title = 'Tjørnebakken 8';

  static get styles() {
    return css`
      .main-page {
        color: #666;
        background: radial-gradient(white, silver);
        font-family: sans-serif;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column nowrap;
      }
      .content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
      }
    `;
  }

  render() {
    return html`
      <div class="main-page">
        <h1>${this.title}</h1>
        <div class="content">
          <family-members></family-members>
          <weather-info></weather-info>
        </div>
      </div>
    `;
  }
}
