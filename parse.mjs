import { readdirSync, readFileSync } from "fs";
import { read, utils } from "xlsx/xlsx.mjs";

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
  return {
    idcc: padIdcc(Object.values(data[0])[0]),
    title: Object.values(data[1])[0].trim(),
  };
};

const parseFile = (path) => {
  const buf = readFileSync(path);
  const workbook = read(buf);

  const result = {
    ...parseRattachement(workbook),
    entreprises: parseEntreprise(workbook),
    chiffres: parseChiffres(workbook),
  };

  return result;
};

const padIdcc = (idcc) => {
  while (("" + idcc).length < 5) {
    idcc = "0" + idcc;
  }
  return idcc;
};
const result = readdirSync(dataFolder)
  .filter((name) => name.match(/^fiche2020_.*\.xlsx/))
  .map((name) => parseFile(`${dataFolder}/${name}`));

console.log(JSON.stringify(result, null, 2));
