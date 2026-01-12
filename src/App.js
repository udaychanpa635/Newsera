  import React, { Component } from 'react';
  import NavBar from './components/NavBar';
  import News from './components/News';
  import LoadingBar from 'react-top-loading-bar';
  import './App.css';

  class App extends Component {
    state = {
      category: "general",
      progress: 0
    };

    setCategory = (cat) => {
      this.setState({ category: cat });
    };

    setProgress = (progress) => {
      this.setState({ progress });
    };

    render() {
      return (
        <>
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={3}
          />

          <NavBar setCategory={this.setCategory} />
          <News
            category={this.state.category}
            setProgress={this.setProgress}
          />
        </>
      );
    }
  }

  export default App;
