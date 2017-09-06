var fs = require('fs')

fs.unlink('./stuff/writeMe.txt',function(){
  fs.rmdir('stuff');
});
