var mqtt = require('mqtt')
 
client = mqtt.connect('mqtt://localhost');
 
client.subscribe('presence');
 
console.log('Client publishing.. ');
client.publish('presence', 'Client 1 is alive.. Test Ping! ' + Date());
 
client.end();