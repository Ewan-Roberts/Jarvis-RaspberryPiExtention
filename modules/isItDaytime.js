"use strict";

const moment = require('moment');

module.exports = () => {

    moment().isBetween(moment('08:30', 'HH:mm'), moment('23:00', 'HH:mm'))

}