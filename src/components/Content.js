import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <article>
                <h2>{this.props.title}</h2>
                {this.props.desc}
                럴럴러럴러러러
            </article>
        );
    }
}

export default Content;