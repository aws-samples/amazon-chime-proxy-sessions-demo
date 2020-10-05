import React from 'react';

const Form = props => {
    
  return (
      <div className="App-form-div">
        <form className="App-form" onSubmit={props.onSubmit}>
                <div className="form-group">
                    <label htmlFor="voiceConnectorId"><p className="h5">Set up an anonymous phone session with our specialists!</p></label>
                    {/* <input type="text" className="form-control" id="voiceConnectorIdText" placeholder="Enter voice connector ID" value={props.value} onChange={props.onChange} /> */}
                </div>
                <button type="submit" className="btn btn-primary">Set Up Proxy Phone Session <img
                    draggable='false'
                    src={'./phone.svg'}
                    alt='phone'
                    /> </button>
                <small id="voiceConnectorIdHelp" className="form-text text-muted h6">Note: Your number will not be shared with our specialists.</small>
            </form>
      </div>
      );
    }

  export default Form;