var socket = io();
var Chat = React.createClass({
    getInitialState: function () {
        return {
            messages: [],
            user: false,
            users: []
        };
    },
    loadMessagesFromServer: function () {
        var url = "/is";
        $.ajax({
            url: url,
            type: 'get',
            dataType: 'json',
            cache: false,
            success: function (data) {
                ///console.log(data);
                if (data.user) {
                    this.setState({user: data.user});
                }
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(url, status, err.toString());
            }.bind(this)
        });

        socket.on('message', function (msg) {
            var mess = this.state.messages;
            var newMessage = mess.concat([msg]);
            this.setState({messages: newMessage});
        }.bind(this));

        socket.on('user', function (msg) {
            //var users = this.state.users;
            //var newUser = users.concat([msg]);
            this.setState({users: msg});
        }.bind(this));
    },
    componentDidMount: function () {
        this.loadMessagesFromServer();
        //setInterval(this.loadMessagesFromServer, this.props.pollInterval);
    },
    handleMessageSubmit: function (comment) {
        comment.user = this.state.user;
        socket.emit('message', comment);
    },
    handleLoginSubmit: function (user) {
        var url = "/login";
        $.ajax({
            url: url,
            type: 'POST',
            data: user,
            dataType: 'json',
            cache: false,
            success: function (data) {
                if (data.user) {
                    socket.emit('user', data.user);
                    this.setState({user: data.user});
                }
                else {
                    alert('Toto jmeno je již použito, zvolte jiné.');
                }
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(url, status, err.toString());
            }.bind(this)
        });
    },
    render: function () {
        return (
            this.state.user ?
                <div className="chat row">
                    <div className="mess-chat col-md-9">
                        <ListBox data={this.state.messages}/>
                        <ChatForm onMessageSubmit={this.handleMessageSubmit}/>
                    </div>
                    <div className="user-box col-md-3">
                        <Users data={this.state.users} />
                    </div>
                </div> :
                <div className="login">
                    <LoginForm onLoginSubmit={this.handleLoginSubmit}/>
                </div>
        )
    }
});

ReactDOM.render(
    <Chat />,
    document.getElementsByClassName('container-fluid')[0]
);