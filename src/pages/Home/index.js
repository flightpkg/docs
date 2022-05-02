import React, { useState, useEffect } from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

import api from "../../services/api";
import FlightTerminal from "../../components/Terminal";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const [version, setVersion] = useState("v.X.Y.Z");

  useEffect(() => {
    api.get("/repos/flightpkg/flight/tags").then(response => {
      if (response.status === 200 && response.data.length > 0) {
        const [{ name }] = response.data;
        setVersion(name);
      }
    });
  }, []);

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Swift, reliable, multi-language package manager."
      keywords={["Swift", "reliable", "multi-language"]}
      image="img/flightpkg-banner.png"
    >
      <header className={classnames("hero", styles.heroBanner)}>
        <div className="container">
          <h1 className={classnames("hero__title", styles.title)}>
            {"Flight is a "}
            <strong>swift</strong>, <strong>reliable</strong> and{" "}
            <strong>multi-language</strong> package manager.
          </h1>
          <p className={classnames("hero__subtitle", styles.subTitle)}>
            {siteConfig.tagline}
          </p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/introduction/getting-started")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.content}>
          <div className="container">
            <div className="row">
              <div className={classnames("col col--4")}>
                <section className={styles.content}>
                  <div className="container">
                    <div className="row">
                      <div className={classnames("col col--12")}>
                        <div
                          className={classnames(
                            "text--center",
                            styles.flightpkgInfo
                          )}
                        >
                          <img
                            className={styles.flightpkgLogoWhite}
                            alt="flight"
                            src="/img/logo-white.svg"
                          />
                          <img
                            className={styles.flightpkgLogoBlack}
                            alt="flight"
                            src="/img/logo-black.svg"
                          />
                          <p className={styles.flightpkgInstallInformation}>
                            Install the flight CLI using the installer:
                          </p>
                          <code className={styles.flightpkgInstallCommand}>
                            {"$ "}
                            <b>curl</b>
                            {"  -qL https://flightpkg.js.org/get "}
                            <b> | bash</b>
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className={classnames("col col--8")}>
                <FlightTerminal version={version} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
