# Jenkins TP Link HS100/110

This project is used to turn on/off a TP-Link HS100/110 smart wi-fi plug depending on the build status of a Jenkins server.
The script will turn the plug on if any of the jobs are 'red' in colour, and turn the plug off if otherwise. The script
will also turn off the plug outside of office hours to save energy.

The script was created to make it easy to set up extreme feedback build lights for Jenkins.

### Setup

- Run `npm install` to install Node dependencies.
- Update `jenkins-tp-link.js` with the IP address, URL of the Jenkins server, and office opening hours.
- Should you need to do IP routing to connect to your TP Link HS100/110 (for example if your computer uses both ethernet
and wifi connections simultaneously), update the `setup.sh` script with the IP address of your smart plug.

### Running the script

From Terminal: `node jenkins-tp-link.js`

### Credits

Thanks to Patrick Seal ([@plasticrake](https://github.com/plasticrake)) for creating the [Node HS100 API](https://github.com/plasticrake/hs100-api).
It made creating this script very straightforward.
