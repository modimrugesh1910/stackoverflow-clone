//Install express server
const server = require('express');
const path = require('path');

const app = server();
app.set('port', (process.env.PORT || 3000));
// Serve only the static files form the dist directory
app.use(server.static(__dirname + '/dist/'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(app.get('port'), function() {
    console.log("Node app is running at port" + app.get('port'));
});
