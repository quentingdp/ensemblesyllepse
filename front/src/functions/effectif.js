/**
 * Fonction qui permet de calculer le nombre de choristes de l'ensemble vocal
 * @param {<pupitre: String, personnes: String[]>[]} choristes
 * @returns {Number} Nombre de choristes dans l'ensemble vocal
 */
export const effectif = (choristes) => {
    let effectif = 0
    for (let e of choristes) {
        effectif += e.personnes.length
    }
    return effectif
}
