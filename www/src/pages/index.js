import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageFeatureBlock from "@site/src/components/HomepageFeatureBlock";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <div>
          <img src="img/bsui-logo.png" alt="BSUI Logo" width={220} />
        </div>
        <br />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
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
        <HomepageFeatures />
        <HomepageFeatureBlock
          Svg="img/storybook.svg"
          title="Storybook Integration"
          description="Explore components interactively with isolated examples, variants, and states."
          background="linear-gradient(45deg, #ff4785, #ff4785 30%, #ffae00 70%, #1ea7fd)"
          button="Getting Started"
        />
        <HomepageFeatureBlock
          Svg="img/js.svg"
          title="JSDoc IntelliSense"
          description="Get autocomplete, prop hints, and API documentation without TypeScript."
          background="linear-gradient(135deg, #facc15 0%, #f59e0b 50%, #ea580c 100%)"
        />
        <HomepageFeatureBlock
          Svg="img/codesandbox.svg"
          title="Sandpack Examples"
          description="Run and edit React examples directly inside the documentation."
          background="linear-gradient(135deg, #1e293b 0%, #475569 50%, #3b82f6 100%)"
        />
      </main>
    </Layout>
  );
}
