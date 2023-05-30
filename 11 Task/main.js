///------1------///
function getPromise(message, delay) {
	return new Promise(function(solve) {
	  setTimeout(function() {
		solve(message);
	  }, delay);
	});
  }
  getPromise("test promise", 2000).then(function(data) {
	console.log(data);
  });