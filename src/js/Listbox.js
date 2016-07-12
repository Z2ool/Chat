var ListBox = React.createClass({
    render: function() {
        //console.log(this.props);

        var messages = this.props.data.map(function(message) {
            return (
                <Message user={message.user} time={message.time} key={message.id} text={message.text} />
            );
        });
        return (
            <div className="listBox">
                {messages}
            </div>
        );
    }
});
