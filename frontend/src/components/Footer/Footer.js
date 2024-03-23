import React from 'react';

function Footer() {
  // Random data for demonstration
  const links = [
    { id: 1, text: 'Home', url: '#' },
    { id: 2, text: 'About', url: '#' },
    { id: 3, text: 'Contact', url: '#' },
    { id: 4, text: 'Services', url: '#' },
  ];

  const socialIcons = [
    { id: 1, iconClass: 'fab fa-facebook-f', url: '#' },
    { id: 2, iconClass: 'fab fa-twitter', url: '#' },
    { id: 3, iconClass: 'fab fa-instagram', url: '#' },
    { id: 4, iconClass: 'fab fa-linkedin-in', url: '#' },
  ];

  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              {links.map(link => (
                <li key={link.id}>
                  <a href={link.url} className="text-light text-decoration-none">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4">
            <h5>Social Media</h5>
            <ul className="list-unstyled d-flex">
              {socialIcons.map(icon => (
                <li key={icon.id} className="me-3">
                  <a href={icon.url} className="text-light text-decoration-none">
                    <i className={icon.iconClass}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4">
            <h5>Contact Us</h5>
            <p>123 Street Name, City, Country</p>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
