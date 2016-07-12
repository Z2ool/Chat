var ListBox = React.createClass({
    displayName: "ListBox",

    render: function () {
        //console.log(this.props);

        var messages = this.props.data.map(function (message) {
            return React.createElement(Message, { user: message.user, time: message.time, key: message.id, text: message.text });
        });
        return React.createElement(
            "div",
            { className: "listBox" },
            messages
        );
    }
});