/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
 import React, { useState, useEffect, Route } from "react";
 import Layout from "@theme/Layout";
 

 
 import versions from "../../../versions.json";
 import api from "../../services/api";
 
 function Get() {
   // const context = useDocusaurusContext();
   // const { siteConfig = {} } = context;
   const [latestVersion] = versions;
   const pastVersions = versions.filter(version => version !== latestVersion);
   // const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;
   const [version, setVersion] = useState("v0.0.5");

   useEffect(() => {
     api.get("/repos/flightpkg/flight/tags").then(response => {
       if (response.status === 200 && response.data.length > 0) {
         const [{ name }] = response.data;
         setVersion(name);
       }
     });
   }, []);

   useEffect(() => {
    window.location.href = `https://github.com/flightpkg/flight/releases/download/${version}/install.sh`;
  }, [])
   return (
    <Layout
    permalink="/versions"
    description="flightpkg - CLI Versions page listing all documented site versions"
  >
      <p>Loading data...</p>
  </Layout>
 );
}
 
 export default Get;