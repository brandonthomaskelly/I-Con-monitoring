var mysql = require('mysql');
var tunnel = require('tunnel-ssh');

var config = {
  keepAlive: 'true',
  host: '147.222.163.1',
  username: 'seasStudent',
  password: 'XXX',
  localPort: 27000,
  dstPort: 3306
};

var theTunnel = tunnel(config, function(error, server) {
  if(error){
    console.log("SSH connection error" + error);
  }
});

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  port     : '27000',
  user     : 'YYY',
  password : 'ZZZ',
  database : 'sd10_Icon_DB',
  timezone : 'utc'
});

module.exports = connection;
