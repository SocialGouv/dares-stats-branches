export interface ConventionCollective {
  idcc: string;
  url: string;
  title: string;
  entreprises: {
    entreprises: Entreprises;
    etablissements: Etablissements;
    repartition: Repartition[];
  };
  chiffres: {
    effectifs: Effectifs;
  };
  salaires: {
    moyen: Moyen;
    ecartHF: EcartHf;
    repartitionSMIC: RepartitionSmic;
    repartitionSMIC105: RepartitionSmic105;
  };
}

export interface Entreprises {
  count: number;
  total: number;
  cris: number;
  ensemble: number;
}

export interface Etablissements {
  count: number;
  total: number;
  cris: number;
  ensemble: number;
}

export interface Repartition {
  title: string;
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface Effectifs {
  count: Count;
  etp: Etp;
  entreprises: EntreprisesCount;
}

export interface Count {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface Etp {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface EntreprisesCount {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface Moyen {
  Ensemble: Ensemble;
  "29 ans ou moins": N29AnsOuMoins;
  "30-49 ans": N3049Ans;
  "50 ans ou plus": N50AnsOuPlus;
  Hommes: Hommes;
  Femmes: Femmes;
  Cadre: Cadre;
  "Profession intermédiaire": ProfessionIntermdiaire;
  Employé: Employ;
  Ouvrier: Ouvrier;
  "Entreprise de 1 à 9 salariés": EntrepriseDe19Salaris;
  "Entreprise de 10 à 19 salariés": EntrepriseDe1019Salaris;
  "Entreprise de 20 à 49 salariés": EntrepriseDe2049Salaris;
  "Entreprise de 50 à 99 salariés": EntrepriseDe5099Salaris;
  "Entreprise de 100 à 249 salariés": EntrepriseDe100249Salaris;
  "Entreprise de 250 à 499 salariés": EntrepriseDe250499Salaris;
  "Entreprise de 500 salariés ou plus": EntrepriseDe500SalarisOuPlus;
}

export interface Ensemble {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface N29AnsOuMoins {
  idcc: string;
  cris: number;
  ensemble: number;
}

export interface N3049Ans {
  idcc: string;
  cris: number;
  ensemble: number;
}

export interface N50AnsOuPlus {
  idcc: string;
  cris: number;
  ensemble: number;
}

export interface Hommes {
  idcc: string;
  cris: number;
  ensemble: number;
}

export interface Femmes {
  idcc: string;
  cris: number;
  ensemble: number;
}

export interface Cadre {
  idcc: string;
  cris: number;
  ensemble: number;
}

export interface ProfessionIntermdiaire {
  idcc: string;
  cris: number;
  ensemble: number;
}

export interface Employ {
  idcc: string;
  cris: number;
  ensemble: number;
}

export interface Ouvrier {
  idcc: string;
  cris: number;
  ensemble: number;
}

export interface EntrepriseDe19Salaris {
  idcc: string;
  cris: number;
  ensemble: number;
}

export interface EntrepriseDe1019Salaris {
  idcc: string;
  cris: number;
  ensemble: number;
}

export interface EntrepriseDe2049Salaris {
  idcc: string;
  cris: number;
  ensemble: number;
}

export interface EntrepriseDe5099Salaris {
  idcc: string;
  cris: number;
  ensemble: number;
}

export interface EntrepriseDe100249Salaris {
  idcc: string;
  cris: number;
  ensemble: number;
}

export interface EntrepriseDe250499Salaris {
  idcc: string;
  cris: number;
  ensemble: number;
}

export interface EntrepriseDe500SalarisOuPlus {
  idcc: string;
  cris: number;
  ensemble: number;
}

export interface EcartHf {
  Ensemble: Ensemble2;
  Cadre: Cadre2;
  "Profession intermédiaire": ProfessionIntermdiaire2;
  Employé: Employ2;
  Ouvrier: Ouvrier2;
  "29 ans ou moins": N29AnsOuMoins2;
  "30-49 ans": N3049Ans2;
  "50 ans ou plus": N50AnsOuPlus2;
  "Entreprise de 1 à 9 salariés": EntrepriseDe19Salaris2;
  "Entreprise de 10 à 19 salariés": EntrepriseDe1019Salaris2;
  "Entreprise de 20 à 49 salariés": EntrepriseDe2049Salaris2;
  "Entreprise de 50 à 99 salariés": EntrepriseDe5099Salaris2;
  "Entreprise de 100 à 249 salariés": EntrepriseDe100249Salaris2;
  "Entreprise de 250 à 499 salariés": EntrepriseDe250499Salaris2;
  "Entreprise de 500 salariés ou plus": EntrepriseDe500SalarisOuPlus2;
}

export interface Ensemble2 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface Cadre2 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface ProfessionIntermdiaire2 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface Employ2 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface Ouvrier2 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface N29AnsOuMoins2 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface N3049Ans2 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface N50AnsOuPlus2 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface EntrepriseDe19Salaris2 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface EntrepriseDe1019Salaris2 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface EntrepriseDe2049Salaris2 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface EntrepriseDe5099Salaris2 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface EntrepriseDe100249Salaris2 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface EntrepriseDe250499Salaris2 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface EntrepriseDe500SalarisOuPlus2 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface RepartitionSmic {
  "Moins de 1,05 Smic": MoinsDe105Smic;
  "Entre 1,05 et 1,1 Smic": Entre105Et11Smic;
  "Entre 1,1 et 1,2 Smic": Entre11Et12Smic;
  "Entre 1,2 et 1,3 Smic": Entre12Et13Smic;
  "Entre 1,3 et 1,4 Smic": Entre13Et14Smic;
  "Entre 1,4 et 1,5 Smic": Entre14Et15Smic;
  "Entre 1,5 et 1,6 Smic": Entre15Et16Smic;
  "Entre 1,6 et 2 Smic": Entre16Et2Smic;
  "Entre 2 et 3 Smic": Entre2Et3Smic;
  "Entre 3 et 4 Smic": Entre3Et4Smic;
  "Entre 4 et 5 Smic": Entre4Et5Smic;
  "Supérieur à 5 Smic": Suprieur5Smic;
  Ensemble: Ensemble3;
}

export interface MoinsDe105Smic {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface Entre105Et11Smic {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface Entre11Et12Smic {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface Entre12Et13Smic {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface Entre13Et14Smic {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface Entre14Et15Smic {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface Entre15Et16Smic {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface Entre16Et2Smic {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface Entre2Et3Smic {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface Entre3Et4Smic {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface Entre4Et5Smic {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface Suprieur5Smic {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface Ensemble3 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface RepartitionSmic105 {
  Ensemble: Ensemble4;
  "29 ans ou moins": N29AnsOuMoins3;
  "30-49 ans": N3049Ans3;
  "50 ans ou plus": N50AnsOuPlus3;
  Hommes: Hommes2;
  Femmes: Femmes2;
  Cadre: Cadre3;
  "Profession intermédiaire": ProfessionIntermdiaire3;
  Employé: Employ3;
  Ouvrier: Ouvrier3;
  "Entreprise de 1 à 9 salariés": EntrepriseDe19Salaris3;
  "Entreprise de 10 à 19 salariés": EntrepriseDe1019Salaris3;
  "Entreprise de 20 à 49 salariés": EntrepriseDe2049Salaris3;
  "Entreprise de 50 à 99 salariés": EntrepriseDe5099Salaris3;
  "Entreprise de 100 à 249 salariés": EntrepriseDe100249Salaris3;
  "Entreprise de 250 à 499 salariés": EntrepriseDe250499Salaris3;
  "Entreprise de 500 salariés ou plus": EntrepriseDe500SalarisOuPlus3;
}

export interface Ensemble4 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface N29AnsOuMoins3 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface N3049Ans3 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface N50AnsOuPlus3 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface Hommes2 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface Femmes2 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface Cadre3 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface ProfessionIntermdiaire3 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface Employ3 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface Ouvrier3 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface EntrepriseDe19Salaris3 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface EntrepriseDe1019Salaris3 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface EntrepriseDe2049Salaris3 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface EntrepriseDe5099Salaris3 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface EntrepriseDe100249Salaris3 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface EntrepriseDe250499Salaris3 {
  idcc: number;
  cris: number;
  ensemble: number;
}

export interface EntrepriseDe500SalarisOuPlus3 {
  idcc: number;
  cris: number;
  ensemble: number;
}
