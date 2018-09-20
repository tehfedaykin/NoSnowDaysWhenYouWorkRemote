
var basicChart = undefined;
var preChaosChart = undefined;
var chaosChart = undefined;
var beforeAutomatingChart = undefined;
var afterAutomatingChart = undefined;
var afterAutomatingBarChart = undefined;
var defData = [
  {
    "area": "work",
    "importance": 1,
    "urgency": 1,
    "effort": 2,
    "priority": "low",
    "item": "paycheck"
  },
  {
    "area": "work",
    "importance": 2,
    "urgency": 1,
    "effort": 1,
    "priority": "low",
    "item": "healthcare"
  },
  {
    "area": "work",
    "importance": 7,
    "urgency": 3,
    "effort": 8,
    "priority": "medium",
    "item": "Typescript learning"
  },
  {
    "area": "work",
    "importance": 6,
    "urgency": 3,
    "effort": 3,
    "priority": "medium",
    "item": "Angular get v. set research"
  },
  {
    "area": "work",
    "importance": 3,
    "urgency": 4,
    "effort": 7,
    "priority": "high",
    "item": "completing sprint work"
  },
  {
    "area": "work",
    "importance": 4,
    "urgency": 6,
    "effort": 8,
    "priority": "medium",
    "item": "refactor scary code"
  },
  {
    "area": "work",
    "importance": 6,
    "urgency": 4,
    "effort": 3,
    "priority": "high",
    "item": "review PRs"
  },
  {
    "area": "work",
    "importance": 8.5,
    "urgency": 3.25,
    "effort": 2,
    "priority": "low",
    "item": "meetings"
  },
  {
    "area": "work",
    "importance": 2,
    "urgency": 2,
    "effort": 1,
    "priority": "high",
    "item": "submit health insurance expense report"
  },
  {
    "area": "life",
    "importance": 2.5,
    "urgency": 1,
    "effort": 1,
    "priority": "high",
    "item": "paying mortgage"
  },
  {
    "area": "life",
    "importance": 1.75,
    "urgency": 1,
    "effort": 1,
    "priority": "high",
    "item": "home maintenance"
  },
  {
    "area": "life",
    "importance": 3.5,
    "urgency": 1,
    "effort": 1,
    "priority": "high",
    "item": "paying bills"
  },
  {
    "area": "life",
    "importance": 7,
    "urgency": 2,
    "effort": 5,
    "priority": "medium",
    "item": "keeping house clean"
  },
  {
    "area": "life",
    "importance": 6,
    "urgency": 8,
    "effort": 3,
    "priority": "medium",
    "item": "gardening"
  },
  {
    "area": "life",
    "importance": 1,
    "urgency": 5,
    "effort": 3,
    "priority": "high",
    "item": "furbaby care"
  },
  {
    "area": "life",
    "importance": 2,
    "urgency": 5.5,
    "effort": 3,
    "priority": "medium",
    "item": "cooking/mealprep"
  },
  {
    "area": "life",
    "importance": 7,
    "urgency": 1,
    "effort": 5,
    "priority": "medium",
    "item": "preparing for family"
  },
  {
    "area": "life",
    "importance": 9.25,
    "urgency": 1.5,
    "effort": 2,
    "priority": "medium",
    "item": "learning to brew kombucha"
  },
  {
    "area": "life",
    "importance": 9.5,
    "urgency": 1,
    "effort": 1,
    "priority": "low",
    "item": "gaming"
  },
  {
    "area": "life",
    "importance": 8.5,
    "urgency": 1,
    "effort": 1,
    "priority": "low",
    "item": "Watching The Bachelor"
  },
  {
    "area": "life",
    "importance": 3,
    "urgency": 1,
    "effort": 6,
    "priority": "medium",
    "item": "time with husband"
  },
  {
    "area": "life",
    "importance": 8,
    "urgency": 1,
    "effort": 2,
    "priority": "low",
    "item": "watch Expanse with husband"
  },
  {
    "area": "life",
    "importance": 4,
    "urgency": 1,
    "effort": 3,
    "priority": "medium",
    "item": "time with friends"
  },
  {
    "area": "life",
    "importance": 2,
    "urgency": 3,
    "effort": 7,
    "priority": "high",
    "item": "fitness"
  },
  {
    "area": "life",
    "importance": .5,
    "urgency": 3,
    "effort": 0,
    "priority": "high",
    "item": "sleep"
  },
  {
    "area": "blank",
    "importance": 8,
    "urgency": 4,
    "effort": 1,
    "priority": "low",
    "item": "updating current talk"
  },
  {
    "area": "blank",
    "importance": 7,
    "urgency": 5,
    "effort": 8,
    "priority": "low",
    "item": "working on a new talk"
  },
  {
    "area": "blank",
    "importance": 3,
    "urgency": 6,
    "effort": 8,
    "priority": "medium",
    "item": "managing non-profit team"
  },
  {
    "area": "blank",
    "importance": 5,
    "urgency": 8,
    "effort": 3,
    "priority": "high",
    "item": "responding to emails"
  },
  {
    "area": "blank",
    "importance": 2,
    "urgency": 8,
    "effort": 8,
    "priority": "high",
    "item": "solving non-profit crisis"
  },
  {
    "area": "blank",
    "importance": 5,
    "urgency": 1,
    "effort": 3,
    "priority": "medium",
    "item": "running non-profit meetings"
  },
  {
    "area": "blank",
    "importance": 7.5,
    "urgency": 1,
    "effort": 6,
    "priority": "medium",
    "item": "mentoring others"
  }
];

Reveal.addEventListener('slidechanged', function( event ) {
  var windowHeight =  parseInt(window.innerHeight, 10) - (90*2);
  if (event.currentSlide.getAttribute('id') === 'chart' && !basicChart) {
    document.getElementById('basicScatter').setAttribute("style","height:" + windowHeight + "px");

    basicChart = new Taucharts.Chart({
      guide: {
        showGridLines:'',
        x: {
          label: {text: 'Importance', padding: 20},
          padding: 10},
        y: {
          label: {text: 'Urgency', padding: 20},
          padding: 10
        },
        // color:{
        //   // brewer:['color-work', 'color-life', 'color-blank']
        //   brewer: {
        //     "work": "color-work",
        //     "life": "color-life",
        //     "blank": "color-blank"
        //   }
        // }
      },
      data: defData,
      type: 'scatterplot',
      x: 'importance',
      y: 'urgency',
      color: 'area',
      size: 'effort',
      plugins: [
        Taucharts.api.plugins.get('tooltip')({
          fields: ['item']
        }),
        Taucharts.api.plugins.get('legend')()
      ]
    });
    basicChart.renderTo('#basicScatter');
  }

  if (event.currentSlide.getAttribute('id') === 'remoteflowchart') {
    // var diagram = flowchart.parse('st=>start: Should you work remote\n' +
    //                                'e=>end: No\n' +
    //                                'cond=>condition: Is this your first job?\n' +
    //                                'c2=>end: Don\'t work remote. |rejected\n' +
    //                                'c3=>end: Maybe. |rejected\n' +
    //                                '\n' +
    //                                'st->cond(yes, right)->c2\n' +
    //                                'st->cond(no, left)->c3\n'
    //                                );
    //  diagram.drawSVG('diagram-flowchart');
  }
});
