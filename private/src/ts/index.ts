import { LitElement, html, customElement, TemplateResult } from 'lit-element';

import './components/mainpage';

@customElement('app-root')
export default class extends LitElement {
  render(): TemplateResult {
    return html`<div>
      <main-page></main-page>
    </div>`;
  }
}
document.body.style.margin = '0';
document.body.innerHTML = '<app-root />';
