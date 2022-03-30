const partecipanti = [`marco`, `gianluca`, `fabio`]
const richiestaPartecipante = prompt(`inserisci il nome del partecipante`)
let Partecipazione = false
for (let i = 0; i < partecipanti.length; i++) {
    let partecipe = partecipanti[i];
    if (partecipe = richiestaPartecipante) {
        Partecipazione = true
    }
}
if (Partecipazione = true) {
    console.log(`puoi entrare`);
}