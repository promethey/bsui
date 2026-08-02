import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Component System",
    description: (
      <>
        Build modern <code>React</code> interfaces with <code>Bootstrap 5</code>{" "}
        components designed for consistency, flexibility, and fast development.
      </>
    ),
  },
  {
    title: "Developer Experience",
    description: (
      <>
        Enjoy powerful editor support with <code>JSDoc</code> IntelliSense,
        predictable APIs, and type-like safety without requiring{" "}
        <code>TypeScript</code>.
      </>
    ),
  },
  {
    title: "Bootstrap Powered",
    description: (
      <>
        Use the <code>Bootstrap</code> ecosystem with reusable React components,
        utility props, and a familiar styling approach.
      </>
    ),
  },
];

function Feature({ icon, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
