var Message = React.createClass({
    render: function () {
        var tim = this.props.user.substring(0, 1);
        return (
            <div className="message">
                <div className="use" title={this.props.time}>
                    <div className="logo">{tim}</div><strong><em>{this.props.user}</em></strong><div className="time">{this.props.time}</div>
                </div>
                <p>{this.props.text}</p>
            </div>
        );
    }
});
