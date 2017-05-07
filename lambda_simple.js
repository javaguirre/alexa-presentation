/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const handlers = {
    'LaunchRequest': function () {
        this.emit(':tell', 'Hola beta beers!');
    },
    'GetPresence': function () {
        this.emit(':tell', 'get presence');
    },
    'GetCoworkerPresent': function () {
        this.emit(':tell', 'get coworker present');
    },
    'GetBookingFree': function () {
        this.emit(':tell', 'get booking free');
    },
    'BookRoom': function () {
        this.emit(':tell', 'book room');
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', 'How can I help you?', 'How can I help you?');
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Bye');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Bye');
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', 'Bye');
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
