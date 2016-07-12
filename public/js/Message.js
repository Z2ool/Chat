var Message = React.createClass({
    displayName: "Message",

    render: function () {
        var tim = this.props.user.substring(0, 1);
        return React.createElement(
            "div",
            { className: "message" },
            React.createElement(
                "div",
                { className: "use", title: this.props.time },
                React.createElement(
                    "div",
                    { className: "logo" },
                    tim
                ),
                React.createElement(
                    "strong",
                    null,
                    React.createElement(
                        "em",
                        null,
                        this.props.user
                    )
                ),
                React.createElement(
                    "div",
                    { className: "time" },
                    this.props.time
                )
            ),
            React.createElement(
                "p",
                null,
                this.props.text
            )
        );
    }
});