import './index.css';
require('./favicon.ico');

global.document.getElementById('heading').innerHTML = 'Hello World! (again)';
const img = require('./images/the_earth.jpg');
global.document.getElementById('pic').innerHTML = `<img src=${img} alt="world">`;
