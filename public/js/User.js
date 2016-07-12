var User = React.createClass({
    displayName: "User",

    render: function () {
        var tim = this.props.name.substring(0, 1);
        return React.createElement(
            "div",
            { className: "use", title: this.props.time },
            React.createElement(
                "div",
                { className: "logo" },
                tim
            ),
            this.props.name
        );
    }
});