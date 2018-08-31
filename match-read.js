var fs=require('fs');
var count={
  "2008":0,
  "2009":0,
  "2010":0,
  "2011":0,
  "2012":0,
  "2013":0,
  "2014":0,
  "2015":0,
  "2016":0,
  "2017":0
};

var returnObj= {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Number of matches played each year in IPL'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: []
    },
    yAxis: {
        title: {
            text: 'Number of matches'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Season',
        data: []
    }]
};

var readme=fs.readFileSync('matches.json','utf8');
var obj=JSON.parse(readme);
obj.forEach(function(ele){
    if(ele.hasOwnProperty("season")){
      if(ele['season']=='2008')
      count[2008]++;
      if(ele['season']=='2009')
      count[2009]++;
      if(ele['season']=='2010')
      count[2010]++;
      if(ele['season']=='2011')
      count[2011]++;
      if(ele['season']=='2012')
      count[2012]++;
      if(ele['season']=='2013')
      count[2013]++;
      if(ele['season']=='2014')
      count[2014]++;
      if(ele['season']=='2015')
      count[2015]++;
      if(ele['season']=='2016')
      count[2016]++;
      if(ele['season']=='2017')
      count[2017]++;
    }
});
returnObj.xAxis.categories=Object.keys(count);
returnObj.series[0].data=Object.values(count);
fs.writeFileSync('match-count.json',JSON.stringify(returnObj));
var readme=fs.readFileSync('match-count.json','utf8');
