import React from 'react';

const Footer = () => {
  return (
    <div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-4">
        <h5>Customer Services</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact Us</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Returns</a></li>
        </ul>
      </div>

      <div className="col-4">
        <h5>Stay With Us</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Click & Collect</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Delivery</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Find a Store</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">View Stores</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Trade  Account</a></li>
        </ul>
      </div>

      <div className="col-4">
        <h5>About</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About us</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Careers</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Media</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Business</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Safety</a></li>
        </ul>
      </div>

      {/* <div className="col-4 offset-1">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div className="d-flex w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div> */}
    </div>

    <div className="d-flex justify-content-between py-4 my-4 border-top">
      <p>&copy; 2022 Company, Inc. All rights reserved.</p>
      {/* <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
      </ul> */}
    </div>
  </footer>
</div>      
  );
};

export default Footer;