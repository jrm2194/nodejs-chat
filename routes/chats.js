
exports.sendChat = function(io) {
  return function(req, res) {
    io.sockets.emit("info-123", {message: req.body.message});
    res.end("sent");  
  }
};


