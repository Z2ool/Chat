var LoginForm = React.createClass({
    displayName: "LoginForm",

    getInitialState: function () {
        return { user: '' };
    },
    handleUserChange: function (e) {
        this.setState({ user: e.target.value });
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var user = this.state.user.trim();
        if (!user) {
            return;
        }
        this.props.onLoginSubmit({ user: user });
    },
    render: function () {
        return React.createElement(
            "form",
            { className: "loginForm form-inline", onSubmit: this.handleSubmit },
            React.createElement(
                "h3",
                null,
                "Zvolte uživatelské jméno"
            ),
            React.createElement("input", { type: "text",
                placeholder: "Zadejte Vaše jméno",
                className: "form-control",
                value: this.state.user,
                onChange: this.handleUserChange }),
            React.createElement("input", { type: "submit",
                className: "btn green",
                value: "Přihlásit se" })
        );
    }
});