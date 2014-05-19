// connect to the socket server
var socket = io.connect("http://mysterious-sea-2318.herokuapp.com/"); 

// if we get an "info" emit from the socket server then console.log the data we recive
socket.on('info-123', function (response) {
  if((response != null) && (response.message != null)) {
    li = new Element('li', {'text':response.message});
    li.inject($('thread'),'bottom');
  }
});




