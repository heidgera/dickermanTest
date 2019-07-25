var obtains = [
  'µ/color.js',
  'µ/utilities.js',
];

obtain(obtains, ({ Color, fadeColors }, utils)=> {

  //console.log(fivetwelve);

  var load = (file)=> {
  };

  var makeDisplay = ()=> {
    var ret = {};
    ret.main = µ('+div', µ('#lightHolder'));
    ret.main.className = 'tower';
    ret.swatch = µ('+div', ret.main);
    ret.swatch.className = 'swatch';
    ret.spectrum = µ('+div', ret.main);
    ret.spectrum.className = 'spectrum';
    ret.swatch.className = 'swatch';
    ret.marker = µ('+div', ret.spectrum);
    ret.marker.className = 'marker';
    ret.knob = µ('+div', ret.marker);

    return ret;
  };

  var rocks = {
    start() {
      var _this = this;

      _this.current = 0;

      _this.sets = [];

      for (var i = 0; i < 3; i++) {
        _this.sets[i] ={};
        _this.sets[i].display = makeDisplay();
      }
    },

    setSpectrum(colorRay) {
      var _this = this;
      this.colors = colorRay;

      var gradString = `linear-gradient(to right`;
      this.colors.forEach(color=> {
        gradString += `, ${color.styleString()}`;
      });
      gradString += ')';
      //linear-gradient(direction, color-stop1, color-stop2, ...);

      console.log(gradString);

      _this.sets.forEach(set=> {
        //set.display.spectrum.style.removeProperty('--gradient-string');
        set.display.spectrum.style.setProperty('--gradient', gradString);
      });

    },

    forceColor(color) {
      clearInterval(this.runInterval);
    },

    stop() {
      if (this.runInterval) clearInterval(this.runInterval);
    },

    set(val) {
      console.log(val);
      this.current = val;
    },

    run() {
      var _this = this;
      console.log('run');

      var fps = 30;

      var pointCount = 0;

      this.index = 0;

      console.log(_this.colors);

      this.cdWheel = 0;
      this.intWheel = 0;

      if (this.runInterval) clearInterval(this.runInterval);
      _this.runInterval = setInterval(()=> {

        var intAmp = parseFloat(µ('#intAmp').value);
        var intFreq = parseFloat(µ('#intFreq').value);

        var driftAmp = µ('#driftAmp').value;
        var driftFreq = parseFloat(µ('#driftFreq').value);
        var ambTemp = parseFloat(µ('#temp').value);
        var groundTemp = parseFloat(µ('#gTemp').value);

        var relative = µ('#relative').checked;

        offset = [];
        offset[0] = 0;
        offset[1] = parseFloat(µ('#offset2').value);
        offset[2] = parseFloat(µ('#offset3').value);

        var temp = ambTemp;
        if(relative) temp = utils.clamp((ambTemp - groundTemp)*2+.5,0,1);

        _this.sets.forEach((set, ind)=> {

          let colVal = utils.clamp(temp + Math.cos(_this.cdWheel + offset[ind]) * driftAmp, 0, 1);
          let swell = (Math.cos(_this.intWheel + offset[ind]) * intAmp - intAmp);
          // var year = set.date[_this.index].getFullYear();
          // //set.device.zoom = (year - maxStartYear) / (minLastYear - maxStartYear);
          // if (!ind)console.log((year - maxStartYear) / (minLastYear - maxStartYear));
          // //Math.floor(_this.index * 7 / set.length) / 7;
          // var diff = set.scaled[_this.index + 1] - set.scaled[_this.index];
          // set.current = set.scaled[_this.index] + diff * (pointCount / framesPerPoint);
          set.display.marker.style.left = (colVal* 100) + '%';
          set.display.swatch.style.backgroundColor = fadeColors(_this.colors, colVal).scale(1+swell).styleString();
          //set.display.swatch.style.width = (5 + 20 * set.device.zoom) + 'vh';
          //set.display.swatch.style.height = (5 + 20 * set.device.zoom) + 'vh';
          //set.device.color = fadeColors(_this.colors, set.current).styleString();
        });

        _this.cdWheel = (_this.cdWheel + (2*Math.PI / (driftFreq * fps)))%(2*Math.PI);
        _this.intWheel = (_this.intWheel + (2*Math.PI / (intFreq * fps)))%(2*Math.PI);
      }, 1000 / fps); //_this.period
    },
  };

  exports.rocks = rocks;

  provide(exports);
});
