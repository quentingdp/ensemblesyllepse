/**
 * Fonction de tri permettant de définir quel concert est le plus tôt. Sert à trier le tableau de tous les concerts
 * @param {*} concert1
 * @param {*} concert2
 */
const triConcert = (concert1, concert2) => {
    if (concert1.date < concert2.date) {
        return -1
    }
    if (concert1.date > concert2.date) {
        return 1
    }
    return 0
}

/**
 * Fonction qui parcours le tableau des concerts et renvoie un tableau des concerts trié par date croissante, en filtrant ceux qui sont plus dans le futur que la semaine dernière
 * @param {*} concerts
 * @returns
 */
export const concertsAVenir = (concerts) => {
    //On calcule la date de référence : celle de la semaine dernière
    let dateOneWeekAgo = new Date(Date.now())
    dateOneWeekAgo.setDate(dateOneWeekAgo.getDate() - 7)
    //On filtre tous les concerts qui sont ultérieurs à la date de référence
    let concertsAVenir = concerts.filter((c) => {
        const dateJs = new Date(c.date)
        return dateJs >= dateOneWeekAgo
    })
    //Puis, on trie les concerts en se basant sur leur date, à l'aide de la fonction triConcert
    concertsAVenir.sort(triConcert)
    return concertsAVenir
}
