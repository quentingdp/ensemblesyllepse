//Table listant les noms des mois en français
const moisFrancais = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
]

/**
 * Fonction permettant de renvoyer le nom complet d'un mois en français étant donné son numéro de mois
 * @param {Number} monthNumber
 * @returns {String} Nom du mois en français
 */
const nomMoisFrancais = (monthNumber) => {
    return moisFrancais[monthNumber]
}

/**
 * Fonction qui renvoie le jour au format numérique d'une date envoyée au format normalisé ISO8601
 * @param {String} date
 * @returns {Number} Jour de la date donné en argument
 */
export const jour = (date) => {
    const dateJs = new Date(date)
    return dateJs.getDate()
}

/**
 * Fonction qui renvoie l'heure en langage naturel d'une date envoyée au format normalisé ISO8601
 * @param {String} date
 * @returns {String} Heure de la date donnée en argument en langage naturel
 */
export const heure = (date) => {
    const dateJs = new Date(date)
    let heures = dateJs.getHours().toString()
    let minutes = dateJs.getMinutes().toString()
    if (minutes.length === 1) {
        minutes = "0" + minutes
    }
    return heures === "0" && minutes === "00" ? "" : heures + "h" + minutes
}

/**
 * Fonction qui renvoie le mois et l'année d'une date envoyée au format normalisé ISO8601
 * @param {String} date
 * @returns {String} Mois et année détaillée, en français, de la date donnée en argument
 */
export const moisDetaille = (date) => {
    const dateJs = new Date(date)
    return nomMoisFrancais(dateJs.getMonth()) + " " + dateJs.getFullYear()
}

/**
 * Fonction qui renvoie le mois et l'année en notation réduite d'une date envoyée au format normalisé ISO8601
 * @param {String} date
 * @returns {String} Mois et année réduite (3 premiers caractères du mois), en français, de la date donnée en argument
 */
export const moisCompact = (date) => {
    const dateJs = new Date(date)
    let nomMoisResume
    //Pour les mois de mars, juin et juillet, on affiche les 4 premiers caractères à la place pour éviter les confusions
    if (
        dateJs.getMonth() === 2 ||
        dateJs.getMonth() === 5 ||
        dateJs.getMonth() === 6
    ) {
        nomMoisResume = nomMoisFrancais(dateJs.getMonth()).substring(0, 4)
    } else {
        nomMoisResume = nomMoisFrancais(dateJs.getMonth()).substring(0, 3)
    }
    return nomMoisResume + " " + dateJs.getFullYear()
}
