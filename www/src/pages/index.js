import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageExample from "@site/src/components/HomepageExample";
import CodeBlock from "@theme/CodeBlock";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <div>
          <img className="hero-logo" src="img/bsui.png" alt="BSUI Logo" />
        </div>
        <br />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p
          className="hero__subtitle"
          style={{
            fontSize: "1.5rem",
            fontWeight: 300,
            margin: "0 0 1.5rem 0",
          }}>
          {siteConfig.tagline}
        </p>
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
          <CodeBlock language="bash">{`npm i @promethey/bsui`}</CodeBlock>
        </div>
        <div className={styles.buttons} style={{ marginTop: "1.5rem" }}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/introduction">
            Getting Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="BSUI — Modern Bootstrap Component System"
      description="Build Bootstrap 5 applications with React components, utility props, Storybook, Sandpack examples, and JSDoc-powered IntelliSense.">
      <HomepageHeader />
      <main>
        <HomepageExample />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
