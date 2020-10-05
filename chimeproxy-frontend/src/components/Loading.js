import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = props => {
  return(
    <div className="Loading">
      
      <Loader
          type="Oval"
          color="#00BFFF"
          height={50}
          width={100}
        ></Loader>
        <p className="h3">{props.message}</p>
      </div>
  )
};

Loading.defaultProps = {
  message: 'Loading...'
};

export default Loading;