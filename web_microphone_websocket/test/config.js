console.log('starting test server');
before(function(done) {
	const app = require('../server');
	app.on('listening', () => {
		console.log('listening');
		done();
	});
	this.timeout(5000);
});
