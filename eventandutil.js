var events =require('events');
var util =require('util');


var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent',function(msg){
  console.log(msg);
});
myEmitter.emit('someEvent','the event was emitted');


var Person = function(name){
  this.name = name;
}
util.inherits(Person, events.EventEmitter);
var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james,mary,ryu];

people.forEach(function(person) {
  person.on('speak', function(msg){
    console.log(person.name + ' said: '+ msg);
  });

});

james.emit('speak','hey dude');
ryu.emit('speak', 'I want a curry');
