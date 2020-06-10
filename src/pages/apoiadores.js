import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

const constributors = [
  {
    name: <>José Victor</>,
    subtitle: (
      <>
        Trabalhando na @descomplica. Buscando ser mais presente na Comunidade.
      </>
    ),
    github: "@josecatalani",
  },
];

function Contributor({ name, github, subtitle }) {
  return (
    <div class="avatar">
      <a
        class="avatar__photo-link avatar__photo avatar__photo--lg"
        href={github}
      >
        <img
          alt={`${name} Profile`}
          src="https://avatars1.githubusercontent.com/u/1593242?v=4"
        />
      </a>
      <div class="avatar__intro">
        <h4 class="avatar__name">{name}</h4>
        <small class="avatar__subtitle">{subtitle}</small>
      </div>
    </div>
  );
}

function Contributors() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Apoiadores</h1>
          <p className="hero__subtitle">
            Faça parte da nossa comunidade, contribua!
          </p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Começar
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {constributors &&
                constributors.length > 0 &&
                constributors.map((props, idx) => (
                  <Contributor key={idx} {...props} />
                ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Contributors;
