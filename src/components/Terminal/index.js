import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

function flightpkgTerminal({ version }) {
  const printNewLine = () => <span> </span>;

  const printDivider = () => (
    <span style={{ color: "var(--flightpkg-color-regular)" }}>
      {"-".repeat(63)}
    </span>
  );

  return (
    <div className={styles.terminal}>
      <div className={styles.header}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.content}>
        <p>
          <span className={styles.dir}>~$</span>
          <span className={styles.command}>flight</span>
        </p>
        <span className={styles.commandResult}>
          {printDivider()}
          <span>{String.raw`
  Usage: flight [command] [flags]

  Displays help information.

  Options:
    -h, --help                          output usage information
    -js, --js                           install nodejs packages
    -luau --luau                        install luau packages

  Commands:
    - install
    - uninstall
    - init
    - build
    - run
    - publish

  Run flight --help COMMAND for more information on specific commands.
          `}</span>
          <p>
            <span className={styles.dir}>~$</span>
            <span className={styles.commandResultClear}>clear</span>
          </p>
        </span>
      </div>
    </div>
  );
}

flightpkgTerminal.propTypes = {
  version: PropTypes.string.isRequired
};

export default flightpkgTerminal;
