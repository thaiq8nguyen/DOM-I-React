import React from "react";
import cx from "classnames";
import "bulma/css/bulma.css";
import styles from "./Content.less";

import MidPageImageURL from "../../assets/images/mid-page-accent.jpg";
const Content = () => {
  return (
    <section className={cx("container", styles.content)}>
      <div className="columns">
        <div className={cx("column is-half", styles.textContent)}>
          <h2 className="is-size-2">Features</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            voluptatum. Necessitatibus dolore sunt ullam reprehenderit, cum
            alias eius, eveniet quibusdam molestias dignissimos numquam hic
            quasi minima natus? Id, temporibus est.
          </p>
        </div>
        <div className={cx("column is-half", styles.textContent)}>
          <h2 className="is-size-2">About</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            voluptatum. Necessitatibus dolore sunt ullam reprehenderit, cum
            alias eius, eveniet quibusdam molestias dignissimos numquam hic
            quasi minima natus? Id, temporibus est.
          </p>
        </div>
      </div>
      <div className="columns">
        <img src={MidPageImageURL} alt="" className="column is-full" />
      </div>
      <div className="columns">
        <div className={cx("column is-one-third", styles.textContent)}>
          <h2 className="is-size-2">Services</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            voluptatum. Necessitatibus dolore sunt ullam reprehenderit, cum
            alias eius, eveniet quibusdam molestias dignissimos numquam hic
            quasi minima natus? Id, temporibus est.
          </p>
        </div>
        <div className={cx("column is-one-third", styles.textContent)}>
          <h2 className="is-size-2">Product</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            voluptatum. Necessitatibus dolore sunt ullam reprehenderit, cum
            alias eius, eveniet quibusdam molestias dignissimos numquam hic
            quasi minima natus? Id, temporibus est.
          </p>
        </div>
        <div className={cx("column is-one-third", styles.textContent)}>
          <h2 className="is-size-2">Vision</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            voluptatum. Necessitatibus dolore sunt ullam reprehenderit, cum
            alias eius, eveniet quibusdam molestias dignissimos numquam hic
            quasi minima natus? Id, temporibus est.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
