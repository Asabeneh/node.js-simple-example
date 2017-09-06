module.exports = function(app){
  var data = [{item:'get milk'},{item:'walk dog'},{item:kick some coding ass}]
  app.get('/todo',function(req,res){
    res.render('todo',{todo:data});
  });
  app.post('/todo',function(req,res){
    res.render('todo');
  });

  app.delete('/todo',function(){

  });

}
