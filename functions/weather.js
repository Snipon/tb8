const axios = require('axios');

const endpoint = 'https://api.met.no/weatherapi/locationforecast/2.0/compact.json';
const lat = '56.264373779296875';
const lon = '10.310287475585938';

exports.handler = async () => {
    const res = await axios.get(`${endpoint}?lat=${lat}&lon=${lon}`);
    const weather = res.data.properties.timeseries[0].data.instant;
    return {
        statusCode: 200,
        body: weather
    };
}
