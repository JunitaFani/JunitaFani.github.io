

$('#main-content').load('informasi_pribadi.html');

$('div#nav1 a').click(function(){
  var page = $(this).attr('href')
  $('#main-content').load(page + '.html');
  return false;
})

$('#main-content1').load('editMateri.html');

$('div#nav2 a').click(function(){
  var page1 = $(this).attr('href')
  $('#main-content1').load(page1 + '.html');
  return false;
})


