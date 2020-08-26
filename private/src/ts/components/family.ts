import { LitElement, html, customElement, property } from 'lit-element';

import styles from '../../css/components/family.module.css';
console.log(styles);
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

  render() {
    return html`
      <a href="mailto:${this.resident.email}">
        <div class="family-member type-${this.resident.type}">
          ${this.resident.name}
        </div>
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

  render() {
    return html` <div class=${styles.container}>
      ${this.getMembers()}
    </div>`;
  }
}
