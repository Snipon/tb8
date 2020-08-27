import { LitElement, html, customElement } from 'lit-element';
import WeatherService from '../services/weather.service';

@customElement('weather-info')
export default class extends LitElement {
  weatherService = new WeatherService();

  render() {
    return html`<div class="container">Woot</div>`;
  }
}
