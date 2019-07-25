'use strict';

var remote = require('electron').remote;

var process = remote.process;

window.appDataDir = '/Users/aheidgerken';

var obtains = [
  'µ/server/express.js',
];

obtain(obtains, (server)=> {

  exports.app = {};

  exports.app.start = ()=> {
    console.log('started');


    document.onkeypress = (e)=> {
      //if (e.key == ' ') console.log('Space pressed'), hardware.digitalWrite(13, 1);
    };

    document.onkeyup = (e)=> {

    };

    process.on('SIGINT', ()=> {
      process.nextTick(function () { process.exit(0); });
    });
  };

  provide(exports);
});
