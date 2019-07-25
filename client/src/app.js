'use strict';

var obtains = [
  `${__dirname}/rocks.js`,
  'µ/color.js',
];

obtain(obtains, ({ rocks }, { Color })=> {

  exports.app = {};

  var sent = false;

  exports.app.start = ()=> {
    var blink = 0;
    var runTO = 0;

    rocks.start();
    //towers.setSpectrum([Color([255, 0, 50]), Color([50, 0, 255])]);
    rocks.setSpectrum([ Color('d475d7'), Color('bc5dc4'), Color('8b3cb7'),
                         Color('6227a7'), Color('372995'), Color('1f5dbb'),
                        Color('25b7db'), Color('23d2e2'), Color('22d688'),
                        Color('21be25'), Color('dddf31'),
                        Color('fff837'),  Color('fec62e'),  Color('f97822'),
                        Color('e83a1a'), Color('d12c1b') ]);
    // rocks.setSpectrum([Color('d475d7'), Color('d475d7'), Color('bc5dc4'), Color('bc5dc4'), Color('8b3cb7'), Color('8b3cb7'),
    //                     Color('6227a7'), Color('6227a7'), Color('372995'), Color('1f5dbb'),
    //                     Color('25b7db'), Color('23d2e2'), Color('22d688'),
    //                     Color('21be25'), Color('dddf31'),
    //                     Color('fff837'), Color('fff837'), Color('fec62e'), Color('fec62e'), Color('f97822'), Color('f97822'),
    //                     Color('e83a1a'), Color('e83a1a'), Color('d12c1b'), Color('d12c1b'), ]);
    // towers.setSpectrum([Color([212, 117, 215]), Color([139, 60, 183]), Color([51, 45, 149]),
    //                     Color([38, 186, 223]), Color('8b3cb7'), Color([33, 190, 37]),
    //                     Color([111, 205, 39]), Color([255, 255, 56]), Color([208, 41, 24]), ]);

    rocks.run();
    console.log('started');

    µ('#temp').oninput = (e)=>{
      µ('#tempText').textContent = Math.floor(-40 + 180*parseFloat(e.target.value));
    }
    µ('#gTemp').oninput = (e)=>{
      µ('#gTempText').textContent = Math.floor(-40 + 180*parseFloat(e.target.value));
    }
    µ('#driftAmp').oninput = (e)=>{
      µ('#driftAmpText').textContent = Math.floor(100*parseFloat(e.target.value));
    }
    µ('#driftFreq').oninput = (e)=>{
      µ('#driftFreqText').textContent = Math.floor(parseFloat(e.target.value));
    }
    µ('#intAmp').oninput = (e)=>{
      µ('#intAmpText').textContent = Math.floor(100*parseFloat(e.target.value));
    }
    µ('#intFreq').oninput = (e)=>{
      µ('#intFreqText').textContent = Math.floor(parseFloat(e.target.value));
    }

    µ('#offset2').oninput = (e)=>{
      µ('#offText2').textContent = Math.round(100 * parseFloat(e.target.value)/Math.PI);
    }
    µ('#offset3').oninput = (e)=>{
      µ('#offText3').textContent = Math.round(100 * parseFloat(e.target.value)/Math.PI);
    }

    document.onkeypress = (e)=> {
      if (e.key == ' ') rocks.run();
    };

    document.onkeyup = (e)=> {
    };
  };

  provide(exports);
});
