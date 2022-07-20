import { readdirSync, readFileSync } from "fs";
import { read, utils } from "xlsx/xlsx.mjs";

import conventions from "./kali-data.mjs";

const dataFolder = "./data";

const parseEntreprise = (workbook) => {
  const data = utils.sheet_to_json(workbook.Sheets["Entreprises"]);

  const nodeEntreprise = data.find(
    (row) => row.Titre === "Nombre d'entreprises"
  );
  const nodeEtablissement = data.find(
    (row) => row.Titre === "Nombre d'établissements"
  );
  return {
    entreprises: {
      count: nodeEntreprise["Données sur les entreprises de l'IDCC"], // Ayant cet IDCC comme convention collective principale
      total: nodeEntreprise.__EMPTY, // Ayant au moins un salarié avec cet IDCC
      cris: nodeEntreprise.__EMPTY_1, // CRIS
      ensemble: nodeEntreprise.__EMPTY_2, // Ensemble des conventions collectives de branche
    },
    etablissements: {
      count: nodeEtablissement["Données sur les entreprises de l'IDCC"], //Ayant cet IDCC comme convention collective principale
      total: nodeEtablissement.__EMPTY, // Ayant au moins un salarié avec cet IDCC
      cris: nodeEtablissement.__EMPTY_1, // CRIS
      ensemble: nodeEtablissement.__EMPTY_2, // Ensemble des conventions collectives de branche
    },
    repartition: data
      .filter((row) => row.Titre && row.Titre.match(/^\d+ (à \d+ )?salariés/))
      .map((row) => ({
        title: row.Titre,
        idcc: row["Données sur les entreprises de l'IDCC"], // Entreprises ayant cet IDCC comme convention collective principale
        cris: row.__EMPTY_1, // CRIS
        ensemble: row.__EMPTY_2, // Ensemble des conventions collectives de branche
      })),
  };
};

const parseChiffres = (workbook) => {
  const data = utils.sheet_to_json(workbook.Sheets["Chiffres-clés"]);

  const nodeEffectifCount = data.find(
    (r) => r.Titre === "Nombre de salariés au 31/12/2020"
  );
  const nodeEffectifETP = data.find(
    (r) =>
      r.Titre === "Nombre de salariés en équivalent-temps plein (ETP) en 2020"
  );
  const nodeEffectifEntreprises = data.find(
    (r) => r.Titre === "Nombre d'entreprises (IDCC principal)"
  );
  return {
    effectifs: {
      count: {
        idcc: nodeEffectifCount["Chiffres clés de l'IDCC"],
        cris: nodeEffectifCount.__EMPTY,
        ensemble: nodeEffectifCount.__EMPTY_1,
      },
      etp: {
        idcc: nodeEffectifETP["Chiffres clés de l'IDCC"],
        cris: nodeEffectifETP.__EMPTY,
        ensemble: nodeEffectifETP.__EMPTY_1,
      },
      entreprises: {
        idcc: nodeEffectifEntreprises["Chiffres clés de l'IDCC"],
        cris: nodeEffectifEntreprises.__EMPTY,
        ensemble: nodeEffectifEntreprises.__EMPTY_1,
      },
    },
  };
};

const parseRattachement = (workbook) => {
  const data = utils.sheet_to_json(workbook.Sheets["Rattachement"]);
  const idcc = padIdcc(Object.values(data[0])[0]);
  const convention = conventions.find(
    (c) => parseInt(c.num) === parseInt(idcc)
  );
  return {
    idcc,
    title: Object.values(data[1])[0].trim(),
    url: convention && convention.url,
  };
};

const parseFile = (path) => {
  const buf = readFileSync(path);
  const workbook = read(buf);

  const result = {
    ...parseRattachement(workbook),
    entreprises: parseEntreprise(workbook),
    chiffres: parseChiffres(workbook),
    salaires: parseSalaires(workbook),
  };

  return result;
};

const padIdcc = (idcc) => {
  while (("" + idcc).length < 5) {
    idcc = "0" + idcc;
  }
  return idcc;
};

const parseSalaires = (workbook) => {
  const data = utils.sheet_to_json(workbook.Sheets["Salaires"]);

  const salaireMoyenKeys = [
    "Ensemble",
    "29 ans ou moins",
    "30-49 ans",
    "50 ans ou plus",
    "Hommes",
    "Femmes",
    "Cadre",
    "Profession intermédiaire",
    "Employé",
    "Ouvrier",
    "Entreprise de 1 à 9 salariés",
    "Entreprise de 10 à 19 salariés",
    "Entreprise de 20 à 49 salariés",
    "Entreprise de 50 à 99 salariés",
    "Entreprise de 100 à 249 salariés",
    "Entreprise de 250 à 499 salariés",
    "Entreprise de 500 salariés ou plus",
  ];

  const ecartHFKeys = [
    "Ensemble",
    "Cadre",
    "Profession intermédiaire",
    "Employé",
    "Ouvrier",
    "29 ans ou moins",
    "30-49 ans",
    "50 ans ou plus",
    "Entreprise de 1 à 9 salariés",
    "Entreprise de 10 à 19 salariés",
    "Entreprise de 20 à 49 salariés",
    "Entreprise de 50 à 99 salariés",
    "Entreprise de 100 à 249 salariés",
    "Entreprise de 250 à 499 salariés",
    "Entreprise de 500 salariés ou plus",
  ];

  const repartitionSMICKeys = [
    "Moins de 1,05 Smic",
    "Entre 1,05 et 1,1 Smic",
    "Entre 1,1 et 1,2 Smic",
    "Entre 1,2 et 1,3 Smic",
    "Entre 1,3 et 1,4 Smic",
    "Entre 1,4 et 1,5 Smic",
    "Entre 1,5 et 1,6 Smic",
    "Entre 1,6 et 2 Smic",
    "Entre 2 et 3 Smic",
    "Entre 3 et 4 Smic",
    "Entre 4 et 5 Smic",
    "Supérieur à 5 Smic",
    "Ensemble",
  ];

  const repartitionSMIC105Keys = [
    "Ensemble",
    "29 ans ou moins",
    "30-49 ans",
    "50 ans ou plus",
    "Hommes",
    "Femmes",
    "Cadre",
    "Profession intermédiaire",
    "Employé",
    "Ouvrier",
    "Entreprise de 1 à 9 salariés",
    "Entreprise de 10 à 19 salariés",
    "Entreprise de 20 à 49 salariés",
    "Entreprise de 50 à 99 salariés",
    "Entreprise de 100 à 249 salariés",
    "Entreprise de 250 à 499 salariés",
    "Entreprise de 500 salariés ou plus",
  ];

  const extractTable = (start, end, keys) =>
    keys
      .map((key) => {
        const row = data.slice(start, end).find((r) => r.Titre === key);
        return {
          key,
          idcc: row["Données sur les salaires de l'IDCC"],
          cris: row.__EMPTY,
          ensemble: row.__EMPTY_1,
        };
      })
      .reduce((a, c) => {
        a[c.key] = {
          idcc: c.idcc,
          cris: c.cris,
          ensemble: c.ensemble,
        };
        return a;
      }, {});

  const salairesMoyens = extractTable(0, 30, salaireMoyenKeys);
  const ecartsHF = extractTable(25, 44, ecartHFKeys);
  const repartitionsSMIC = extractTable(43, 57, repartitionSMICKeys);
  const repartitionSMIC105 = extractTable(57, 80, repartitionSMIC105Keys);

  return {
    moyen: salairesMoyens,
    ecartHF: ecartsHF,
    repartitionSMIC: repartitionsSMIC,
    repartitionSMIC105: repartitionSMIC105,
  };
};

const result = readdirSync(dataFolder)
  .filter((name) => name.match(/^fiche2020_.*\.xlsx/))
  //  .slice(0, 1)
  .map((name) => parseFile(`${dataFolder}/${name}`));

console.log(JSON.stringify(result, null, 2));
