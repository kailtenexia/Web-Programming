var coworkers =["elizbeth","phantom","jikel","monte","사랑이"];


 function fetchPage(name){
    fetch(name).then(function(response){
      response.text().then(function(text){
        document.querySelector('article').innerHTML = text;
      })
    });
  }

function navHandler(){
    var i = 0;
while( i< coworkers.length){
    document.write('<li><a href ="#!'+coworkers[i]+'"  onclick="fetchPage('+coworkers[i]+')">'+ coworkers[i].toUpperCase()+ '</a></li>');
    i = i+1;}
    };

fetch('list').then(function(response){
    response.text().then(function(text){
      var items = text.split(',');
      var i = 0;
      var tags = '';
      while(i<items.length){
        var item = items[i];
        item = item.trim();
        var tag = '<li><a href="#!'+item+'" onclick="fetchPage(\''+item+'\')">'+item.toUpperCase()+'</a></li>';
        tags = tags + tag;
        i = i + 1;
      }
      document.querySelector('#nav').innerHTML = tags;
    })
  });