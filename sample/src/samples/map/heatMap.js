import '../scripts/USA.js';
export class BasicUse {
  constructor() {
    this.usMap =  window.usMap;
    this.USA_State_PopulationData =
    [
	   { name: 'California', population: '38332521' },
       { name: 'Texas', population: '26448193' },
       { name: 'New York', population: '19651127' },
       { name: 'Florida', population: '19552860' },
       { name: 'Illinois', population: '12882135' },
       { name: 'Pennsylvania', population: '12773801' },
       { name: 'Ohio', population: '11570808' },
       { name: 'Georgia', population: '9992167' },
       { name: 'Michigan', population: '9895622' },
       { name: 'North Carolina', population: '9848060' },
       { name: 'New Jersey', population: '8899339' },
       { name: 'Virginia', population: '8260405' },
       { name: 'Washington', population: '6971406' },
       { name: 'Massachusetts', population: '6692824' },
       { name: 'Arizona', population: '6626624' },
       { name: 'Indiana', population: '6570902' },
       { name: 'Tennessee', population: '6495978' },
       { name: 'Missouri', population: '6044171' },
       { name: 'Maryland', population: '5928814' },
       { name: 'Wisconsin', population: '5742713' },
       { name: 'Minnesota', population: '5420380' },
       { name: 'Colorado', population: '5268367' },
       { name: 'Alabama', population: '4833722' },
       { name: 'South Carolina', population: '4774839' },
       { name: 'Louisiana', population: '4625470' },
       { name: 'Kentucky', population: '4395295' },
       { name: 'Oregon', population: '3930065' },
       { name: 'Oklahoma', population: '3850568' },
       { name: 'Puerto Rico', population: '3615086' },
       { name: 'Connecticut', population: '3596080' },
       { name: 'Iowa', population: '3090416' },
       { name: 'Mississippi', population: '2991207' },
       { name: 'Arkansas', population: '2959373' },
       { name: 'Utah', population: '2900872' },
       { name: 'Kansas', population: '2893957' },
       { name: 'Nevada', population: '2790136' },
       { name: 'New Mexico', population: '2085287' },
       { name: 'Nebraska', population: '1868516' },
       { name: 'West Virginia', population: '1854304' },
       { name: 'Idaho', population: '1612136' },
       { name: 'Hawaii', population: '1404054' },
       { name: 'Maine', population: '1328302' },
       { name: 'New Hampshire', population: '1323459' },
       { name: 'Rhode Island', population: '1051511' },
       { name: 'Montana', population: '1015165' },
       { name: 'Delaware', population: '925749' },
       { name: 'South Dakota', population: '844877' },
       { name: 'Alaska', population: '735132' },
       { name: 'North Dakota', population: '723393' },
       { name: 'District of Columbia', population: '646449' },
       { name: 'Vermont', population: '626630' },
       { name: 'Wyoming', population: '582658' }
    ];
    this.legendsettings = { showLegend: true, position: 'bottomleft', positionX: 3, positionY: 80, height: 18, width: 190, type: 'layers', mode: 'interactive', title: 'Population', leftLabel: '0.5M', rightLabel: '40M'};
    this.shapesettings = { fill: '#9CBF4E', strokeThickness: '0.5', stroke: 'White', highlightStroke: 'White', autoFill: false, highlightColor: '#BC5353', selectionColor: '#BC5353', highlightBorderWidth: '1', valuePath: 'population', enableGradient: true, colorMappings: { rangeColorMapping: [ { from: 10000001, to: 40000000, gradientColors: ['#F1ECD8', '#DEE2B9']}, { from: 5000001, to: 10000000, gradientColors: ['#DEE2B9', '#CBD89A']}, { from: 1000001, to: 5000000, gradientColors: ['#CBD89A', '#B8CE7B']}, { from: 500000, to: 1000000, gradientColors: ['#B8CE7B', '#9CBF4E']}]}};
  }
}