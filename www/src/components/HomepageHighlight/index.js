import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function HomepageHighlight({
  Svg,
  title,
  description,
  background,
}) {
  return (
    <section
      className={styles.features}
      style={{
        background: background,
        padding: "4rem 0",
      }}>
      <div className="container">
        <div className="row">
          <div className="padding-horiz--md" style={{ margin: "0 auto" }}>
            <div style={{ textAlign: "center" }}>
              <img
                src={Svg}
                alt="Logo"
                width={80}
                style={{ marginBottom: "1.5rem" }}
              />
              <div>
                <h1
                  style={{
                    fontSize: "3rem",
                    lineHeight: 1.2,
                    fontWeight: 700,
                    marginBottom: "1.2rem",
                  }}>
                  {title}
                </h1>
                <p
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 300,
                    margin: 0,
                  }}>
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
