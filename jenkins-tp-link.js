const Hs100Api = require('hs100-api');
const request = require('request');
const client = new Hs100Api.Client();

// Add your settings here
var plugHostIp = 'xxx.xxx.xxx.xxx';
var jenkinsUrl = 'http://yourJenkinsUrl';
var officeOpeningDays = [1, 2, 3, 4, 5]; // MON-FRI
var officeOpeningHours = 9;
var officeClosingHours = 18;
var refreshInterval = 1000;

var plug = client.getPlug({host: plugHostIp, timeout: 5000});

setInterval(function() {
    // Turn plug on during office hours only
    var date = new Date();
    if (!(date.getDay() in officeOpeningDays) || date.getHours() < officeOpeningHours || date.getHours() >= officeClosingHours) {
        plug.setPowerState(false);
        return;
    }

    request(jenkinsUrl + '/api/json', {timeout: 5000}, function(error, response, body) {
        var jobs = JSON.parse(body).jobs;
        var brokenBuild = false;
        jobs.forEach(function(job) {
            if (job.color === 'red') {
                brokenBuild = true;
            }
        });

        plug.setPowerState(brokenBuild);
    });
}, refreshInterval);