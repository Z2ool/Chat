var ChatForm = React.createClass({
    displayName: 'ChatForm',

    getInitialState: function () {
        return { text: '' };
    },
    handleTextChange: function (e) {
        this.setState({ text: e.target.value });
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var text = this.state.text.trim();
        if (!text) {
            return;
        }
        this.props.onMessageSubmit({ text: text });
        this.setState({ text: '' });
    },
    render: function () {
        return React.createElement(
            'div',
            { className: 'sender' },
            React.createElement(
                'form',
                { className: 'chatForm', onSubmit: this.handleSubmit },
                React.createElement('input', { type: 'text',
                    placeholder: 'Zadejte zprávu',
                    value: this.state.text,
                    className: 'form-control',
                    onChange: this.handleTextChange })
            )
        );
    }
});