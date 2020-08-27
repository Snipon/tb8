import { LitElement, html, css, customElement, property } from 'lit-element';
import 'fa-icons';

interface ResidentType {
  name: string;
  type: string;
  email: string;
}

@customElement('family-member')
export class FamilyMember extends LitElement {
  @property({ type: Object })
  resident: ResidentType;

  constructor() {
    super();
    this.resident = {
      name: '-',
      type: '-',
      email: '-',
    };
  }

  static get styles() {
    return css`
      .link-wrapper {
        display: block;
        text-decoration: none;
        color: inherit;
      }

      .container {
        margin: 0.5rem;
        text-align: center;
        font-size: 2rem;
      }

      .fas {
        transition: transform 250ms ease;
      }

      .container:hover .fas {
        transform: scale(1.5);
      }

      .name {
        font-size: 0.5em;
        opacity: 0;
        transition: opacity 350ms ease;
        margin-top: 2em;
        font-weight: inherit;
      }

      .container:hover .name {
        opacity: 1;
      }
    `;
  }

  getIconSize(): string {
    let size = '3em';
    switch (this.resident.type) {
      case 'child':
        size = '2em';
        break;
      case 'baby':
        size = '1.5em';
    }
    return size;
  }

  render() {
    return html`
      <a
        class="link-wrapper"
        href="mailto:${this.resident.email}"
        title=${this.resident.name}
      >
        <article class="container type-${this.resident.type}">
          <fa-icon
            class="fas fa-${this.resident.type}"
            size=${this.getIconSize()}
          ></fa-icon>
          <h1 class="name">${this.resident.name}</h1>
        </article>
      </a>
    `;
  }
}

@customElement('family-members')
export default class extends LitElement {
  residents: ResidentType[] = [
    { name: 'Simon', type: 'male', email: 'simon@tb8.dk' },
    { name: 'Ditte-Marie', type: 'female', email: 'ditte@tb8.dk' },
    { name: 'Severin', type: 'child', email: 'severin@tb8.dk' },
    { name: 'Karla', type: 'baby', email: 'karla@tb8.dk' },
  ];

  getMembers() {
    const output = this.residents.map((resident) => {
      return html`
        <family-member resident=${JSON.stringify(resident)}></family-member>
      `;
    });
    return html`${output}`;
  }

  static get styles() {
    return css`
      .container {
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-end;
      }
    `;
  }

  render() {
    return html`<div class="container">${this.getMembers()}</div>`;
  }
}
