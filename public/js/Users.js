var Users = React.createClass({
    displayName: "Users",

    render: function () {
        var users = this.props.data.map(function (user) {
            return React.createElement(User, { key: user.id, name: user.name, time: user.time });
        });
        return React.createElement(
            "div",
            { className: "user" },
            React.createElement(
                "h4",
                null,
                "Přihlášení uživatelé"
            ),
            users
        );
    }
});