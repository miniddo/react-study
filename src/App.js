import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject'
import Content from './components/Content'

class Test extends Component {
  render() {
    return (
      <div>
        <h2>test문서 입니다.</h2>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: {title: 'WEB', sub: 'world wide web'},
      contents: [
        {id:1, title: 'HTML', desc: 'HTML is HyperText Markup Language'},
        {id:2, title: 'CSS', desc: 'CSS is for design'},
        {id:3, title: 'JavaScript', desc: 'JavaScript is for interactive'},
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content></Content>
        <Test></Test>
      </div>
    );
  }
}

export default App;
