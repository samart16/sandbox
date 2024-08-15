import React, {Component} from 'react';
//class based component
class Constructor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.checkClick = this.checkClick.bind(this);
    }

  

    checkClick() {
        this.setState({greeting: "Hello, welcome to React"});
    }

    render() {
        return (
            <div>
                <p>{this.state.greeting}</p>
                <button onClick={this.checkClick}>Click Here</button>
            </div>
        )

    }
}

export default Constructor;