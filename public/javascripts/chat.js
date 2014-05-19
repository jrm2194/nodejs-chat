
var Chat = {};

Chat.send = function(e) {
    e.stop();
    new Request({url: '/chat', data: 'message=' + $('message').value, onComplete: function() {
      $('message').value = "";
    }}).send();
};


window.addEvent('domready', function() {
  $('chatForm').addEvent('submit', Chat.send);
});
