var Users = React.createClass({
    render: function () {
        var users = this.props.data.map(function(user) {
            return (
                <User key={user.id} name={user.name} time={user.time} />
            );
        });
        return (
            <div className="user">
                <h4>Přihlášení uživatelé</h4>
                {users}
            </div>
        );
    }
});