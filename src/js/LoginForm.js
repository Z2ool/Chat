var LoginForm = React.createClass({
    getInitialState: function() {
        return {user: ''};
    },
    handleUserChange: function(e) {
        this.setState({user: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var user = this.state.user.trim();
        if (!user) {
            return;
        }
        this.props.onLoginSubmit({user: user});
    },
    render: function() {
        return (
            <form className="loginForm form-inline" onSubmit={this.handleSubmit}>
                <h3>Zvolte uživatelské jméno</h3>
                <input type="text"
                       placeholder="Zadejte Vaše jméno"
                       className="form-control"
                       value={this.state.user}
                       onChange={this.handleUserChange} />
                <input type="submit"
                       className="btn green"
                       value="Přihlásit se" />
            </form>
        );
    }
});
