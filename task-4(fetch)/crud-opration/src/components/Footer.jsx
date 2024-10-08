import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>© 2023 My Website. All rights reserved.</p>
      <div className="social-links">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
      <button onClick={() => window.scrollTo(0, 0)}>Back to Top</button>
    </footer>
  );
};

export default Footer;