import React from 'react';

const Footer = () => (
  <div className="footer">
    <div>
      <hr/>
      <p className="text-center footer-text">
        (c) Sela. { new Date().getFullYear() }
      </p>
    </div>
  </div>
);

export default Footer;
