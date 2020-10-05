import React from 'react';

const Error = props => {
  return(
    <div className="Error">
      <p className="h3">Oops, something broke.</p><br></br>
      <p className="h5">Error Message:</p>
      <p className="h5">{props.message}</p><br></br>
      <button type="submit" className="btn btn-danger" onClick={props.resetPage}>Try Again</button>
    </div>
  )
};

Error.defaultProps = {
  message: 'Unknown Error Occurred'
};

export default Error;