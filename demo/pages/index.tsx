import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import GitHubForkRibbon from "react-github-fork-ribbon";

import styles from "../styles/Home.module.css";

import conventionsCollectives from "../../data.json";

const Filters = () => {
  const [filters, setFilters] = useState({});
  return <div>Filters</div>;
};

const formatNum = (num: any) => {
  return new Intl.NumberFormat().format(parseInt(num * 100) / 100);
};

const views = [
  {
    title: "Conventions classées par effectif",
    description: "Nombre de salariés en équivalent ETP",
    getResults: () =>
      conventionsCollectives
        .sort(
          (a, b) =>
            b.chiffres.effectifs.count.idcc - a.chiffres.effectifs.count.idcc
        )
        .map((row) => ({
          idcc: row.idcc,
          url: row.url,

          title: row.title,
          effectif: formatNum(row.chiffres.effectifs.count.idcc),
        })),
  },
  {
    title: "Conventions classées par salaire NET moyen",
    description: "Salaire moyen mensuel NET moyen d'un équivalent ETP",
    getResults: () =>
      conventionsCollectives
        .sort(
          (a, b) =>
            b.salaires.moyen.Ensemble.idcc - a.salaires.moyen.Ensemble.idcc
        )
        .map((row) => ({
          idcc: row.idcc,
          url: row.url,

          title: row.title,
          salaireMoyen: formatNum(row.salaires.moyen.Ensemble.idcc),
        })),
  },
  {
    title: "Conventions classées par écart salarial Femmes/Hommes",
    description:
      "Ecart de salaire NET moyen en pourcentage en faveur des Femmes",
    getResults: () =>
      conventionsCollectives
        .sort(
          (a, b) =>
            b.salaires.ecartHF.Ensemble.idcc - a.salaires.ecartHF.Ensemble.idcc
        )
        .map((row) => ({
          idcc: row.idcc,
          url: row.url,
          title: row.title,
          ecartHF: formatNum(row.salaires.ecartHF.Ensemble.idcc) + "%",
        })),
  },
];

const Home: NextPage = () => {
  const [view, setView] = useState(views[0].title);
  //const [results, setResults] = useSate(conventionsCollectives);
  //console.log("conventionsCollectives", conventionsCollectives);
  const onViewChange = (e) => {
    setView(e.target.value);
  };
  const viewData = views.find((v) => v.title === view);
  const rows = viewData.getResults();
  return (
    <div className={styles.container}>
      <GitHubForkRibbon
        href="https://github.com/socialgouv/dares-stats-branches"
        target="_blank"
        position="right"
      >
        Fork me on GitHub
      </GitHubForkRibbon>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="DARES" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/purecss@2.1.0/build/pure-min.css"
          integrity="sha384-yHIFVG6ClnONEA5yB5DJXfW2/KC173DIQrYoZMEtBvGzmf0PKiGyNEqe9N6BNDBH"
          crossOrigin="anonymous"
        ></link>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Stats sur les branches professionnelles. source:{" "}
          <a href="https://dares.travail-emploi.gouv.fr/donnees/les-portraits-statistiques-de-branches-professionnelles">
            DARES
          </a>
        </h1>

        <br />

        <select className={styles.select} onChange={onViewChange}>
          {views.map((v) => (
            <option key={v.title}>{v.title}</option>
          ))}
        </select>

        <h3>{viewData.description}</h3>

        <Filters />

        {rows.length && (
          <table className="pure-table pure-table-striped">
            <thead>
              <tr>
                {" "}
                {Object.keys(rows[0])
                  .filter((k) => k !== "url")
                  .map((k) => (
                    <td key={k}>{k}</td>
                  ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((convention) => {
                return (
                  <tr key={convention.idcc}>
                    {Object.keys(convention)
                      .filter((k) => k !== "url")
                      .map((k) => (
                        <td key={k}>
                          {(k === "title" && convention.url && (
                            <a
                              href={convention.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {convention[k]}
                            </a>
                          )) || <>{convention[k]}</>}
                        </td>
                      ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/SocialGouv"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by SocialGouv
        </a>
      </footer>
    </div>
  );
};

export default Home;
