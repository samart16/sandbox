import React, {Component} from 'react';
//class based component
class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {message: "Welcome to my Sandbox!"};
    }

    render() {
        return <h1>{this.state.message}</h1>
    }
}

export default MyComponent;