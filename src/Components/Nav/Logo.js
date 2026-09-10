import React from 'react';
import { Link } from 'react-router-dom';
import { PiShoppingBagOpenFill } from 'react-icons/pi';
import './Logo.css';

/**
 * Brand wordmark: an SVG-friendly icon mark plus "Shop" / "Wise" set in two
 * weights, so the brand doesn't depend on a shipped raster logo file.
 */
const Logo = () => {
  return (
    <Link to="/home" className="brand-logo" aria-label="ShopWise home">
      <span className="brand-logo-icon">
        <PiShoppingBagOpenFill size={22} />
      </span>
      <span className="brand-logo-text">
        Shop<em>Wise</em>
      </span>
    </Link>
  );
};

export default Logo;
