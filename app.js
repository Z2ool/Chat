/**
 * Created by Petr Klezla on 10. 7. 2016.
 */
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var id = 1;
var userId = 1;
var users = [];
//var is = require('./routes/is');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('trust proxy', 1);
app.use(session({
    secret: 'qwertyu',
    resave: true,
    proxy: true,
    saveUninitialized: false,
    cookie: {maxAge: 36000000}
}));




app.get('/', function (req, res) {
    res.sendFile(__dirname + '/template/index.html');
});

app.post('/login', function (req, res, next) {
    var us = req.body.user;
    var sess = req.session;
    if (users.find(function (use) {
            return use.name == us
        })) {
        res.send({user: false});
    }
    else {
        if (sess.user) {
            res.send({user: us});
        }
        else {
            sess.user = us;
            res.send({user: us});
        }
    }
});
//app.use('/is', is);
app.get('/is', function (req, res, next) {
    var sess = req.session;
    if (sess.user)
        res.send({user: sess.user});
    else
        res.send({user: false});
    io.emit('user', users);
});



io.on('connection', function (/*err,*/ socket/*, session*/) {

    socket.on('message', function (msg) {
        msg.id = id;
        id++;
        var date = new Date();
        var minut = String(date.getMinutes());
        var sec = String(date.getSeconds());
        console.log(sec);
        console.log(sec.length);
        msg.time = date.getHours()+":"+
            (minut.length > 1 ?minut:('0'+minut))+
            ":"+(sec.length > 1 ? sec:('0'+sec));
        io.emit('message', msg);
    });
    socket.on('user', function (msg) {
        var us = {
            id: userId,
            name: msg,
            time: new Date()
        };
        users = users.concat(us);
        userId++;
        io.emit('user', users);
        console.log('message: ' + msg);
    });
    console.log('user connected');
});

http.listen(port, function () {
    console.log('Chat listening on post %d', port);
});