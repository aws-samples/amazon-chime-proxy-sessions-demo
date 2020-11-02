import React from 'react';

const Result = props => {
  return(
    <div className="Result">
        Here are the details of your phone session with Nikki Wolf
        <h3>{props.proxySession.Participants[0].ProxyPhoneNumber}</h3>
        <button type="submit" className="btn btn-danger" onClick={props.resetPage}>Go Back</button>
    </div>
  )
};

Result.defaultProps = {
  message: 'Dummy Result'
};

export default Result;