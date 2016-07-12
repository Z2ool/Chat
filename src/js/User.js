var User = React.createClass({
    render: function () {
        var tim = this.props.name.substring(0, 1);
        return (
            <div className="use" title={this.props.time}>
                <div className="logo">{tim}</div>{this.props.name}
            </div>
        );
    }
});