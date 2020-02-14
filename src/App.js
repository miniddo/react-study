import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject'
import Content from './components/Content'
import Event from './components/Event'

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
      mode: 'welcome', // or 'welcome'
      subject: {title: 'WEB', sub: 'world wide web'},
      welcome: {title: 'Welcome', desc: 'Hello, React!'},
      contents: [
        {id:1, title: 'HTML', desc: 'HTML is HyperText Markup Language'},
        {id:2, title: 'CSS', desc: 'CSS is for design'},
        {id:3, title: 'JavaScript', desc: 'JavaScript is for interactive'},
      ]
    }
  }
  render() {
    let _title = null;
    let _desc = null;

    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
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
        <Event title={_title} desc={_desc}></Event>
      </div>
    );
  }
}

export default App;
