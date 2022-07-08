import React, { Component } from 'react';

class PersonComponent extends Component {
    render() {
        return (<div>{this.props.lastName} {this.props.firstName}{this.props.age} {this.props.hairColor}
        </div>
        );
    }
}

export default PersonComponent;