import React from 'react';
import Form from './Form';
import {BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Error from './Error';
import API from '../api/api'
import Loading from './Loading';
import Result from './Result';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {errorMessage: null , isSubmitted: false, isLoading: false, isResult: false, proxySession: {} }
  }

  resetPage = (event) => {
    this.setState({errorMessage: null, isSubmitted: false, isLoading: false, isResult: false });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({
      isLoading: true,
    });
    //create a voice proxy session
    try {
      // Send a POST request
      let items = await API({
        method: 'post',
        url: `proxySession`,
        data: {
          'App': 'ChimeProxyCallingDemo'
        }
      });
      if(items !== undefined || !items) {
        this.setState({
          proxySession: items.data.body,
          isLoading: false,
          isResult: true
        });
      }
      } catch(Error) {
        //render error component
        this.setState({errorMessage: Error.message})
        console.log("Error creating proxy session: ", Error.message)
      }
  }

  renderContent() {
    return(
      <div className="App">
      {/* FORM */}
        {!this.state.isLoading && !this.state.isResult && this.state.errorMessage === null && (
          <div>
          <Header companyName="Puppies Plumbing Inc."></Header>
          <Form onSubmit={this.handleSubmit}></Form>
          </div>
          )
        }
        {/* RESULTS */}
        {this.state.isResult && !this.state.isLoading && this.state.errorMessage === null && (
          <div>
            <Header companyName="Puppies Plumbing Inc."></Header>
            <Result proxySession = {this.state.proxySession} resetPage={this.resetPage}/>
          </div>
        )}
        {/* LOADING */}
        {this.state.isLoading && this.state.errorMessage === null && (
          <Loading/>
        )}
        {/* ERROR */}
        {this.state.errorMessage !== null && (
          <Error message={this.state.errorMessage} resetPage={this.resetPage}/>
        )}

      </div>
    );
    
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
           <Route path="/" exact>{this.renderContent()}</Route>
          </div>
        </BrowserRouter>
      </div>
        
  )};
}

export default App;