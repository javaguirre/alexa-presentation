/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
'use strict';

const http = require('http');
const alexaSkillKit = require('alexa-skill-kit');
const rp = require('request-promise');

const URL = '<MY_URL>';
const options = {
    method: 'POST',
    uri: URL,
    headers: {
        'Content-type': 'application/json'
    },
    body: {
        "extra": {}
    },
    json: true
};

exports.handler = function(event, context) {
    alexaSkillKit(
        event,
        context,
        function(parsedMessage) {
            options.body.extra.type = event.request.type;
            options.body.extra.intent = event.request.intent.name;
            options.body.extra.slots = event.request.intent.slots;

            return rp(options)
                .then(
                    function(processedResult) {
                        var message = processedResult['message'];

                        return message;
                    }
                ).catch(function (err) {
                    console.error(err);

                    return 'Error on the external service';
                });
        }
    );
};
