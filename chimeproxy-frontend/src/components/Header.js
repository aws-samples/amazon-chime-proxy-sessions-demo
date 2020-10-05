import React from 'react';
import './App.css';

const Header = props => {
    
return (
      <header className="App-header">
            <img
              draggable='false'
              src={'./dog-on-phone-vintage-photo.jpg'}
              alt='amazon-chime-proxy-phone-sessions'
            />
            <p className="h1">{props.companyName}</p>
        </header>
      )
};

Header.defaultProps = {
  companyName: "ABC Company"
}

export default Header;