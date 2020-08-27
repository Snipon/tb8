import axios from 'axios';

export default class {
  constructor() {
    this.getWeather();
  }

  weather: any = null;

  private async getWeather() {
    const res = await axios.get('/.netlify/functions/weather');
    this.weather = res.data;
    console.log(res.data);
  }
}
