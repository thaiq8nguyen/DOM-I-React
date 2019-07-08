import React from "react";

import cx from "classnames";
import "bulma/css/bulma.css";
import styles from "./Footer.less";

const Contact = ({ address, phone, email }) => {
  return (
    <div className="contact">
      <p>{address}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
};
const Footer = () => {
  return (
    <footer className="footer">
      <div className="columns">
        <div className="column is-one-third">
          <h2 className="is-size-2">Contact</h2>
          <Contact
            address="123 Way 456 Street Boston, USA"
            phone="1(888) 555-1234"
            email="sales@greatidea.io"
          />
        </div>
        <div className="column is-one-third">
          <h2 className="is-size-3">Subscribe to Our Newsletter</h2>
          <form action="">
            <div className="field">
              <label htmlFor="name" className="label">
                Name
              </label>
              <div className="control">
                <input className="input" type="text" name="name"></input>
              </div>
            </div>
            <div className="field">
              <label htmlFor="email" className="label">
                Email
              </label>
              <div className="control">
                <input className="input" type="text" name="email"></input>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-link">Subscribe</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="level">
        <div className="level-item has-text-centered">
          <h3 className="subtitle">Copyright Great Idea! 2019</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
