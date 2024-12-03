const chordsData = {
  C: {
    main: ["C", "F", "G", "Am"],
    secondaryDominants: ["D", "E", "A", "B"],
    modalInterchange: ["Eb", "Ab", "Bb", "Fm"]
  },
  G: {
    main: ["G", "C", "D", "Em"],
    secondaryDominants: ["A", "B", "E", "F#"],
    modalInterchange: ["Bb", "Eb", "F", "Cm"]
  },
  // Añade más tonalidades según necesites
};

const keySelector = document.getElementById("key");
const mainChordsContainer = document.getElementById("main-chords");
const secondaryDominantsContainer = document.getElementById("secondary-dominants");
const modalInterchangeContainer = document.getElementById("modal-interchange");

function updateChords() {
  const selectedKey = keySelector.value;
  const chords = chordsData[selectedKey];

  mainChordsContainer.innerHTML = chords.main.map(chord => `<div class="chord">${chord}</div>`).join("");
  secondaryDominantsContainer.innerHTML = chords.secondaryDominants.map(chord => `<div class="chord">${chord}</div>`).join("");
  modalInterchangeContainer.innerHTML = chords.modalInterchange.map(chord => `<div class="chord">${chord}</div>`).join("");
}

// Actualiza los acordes al cargar la página y al cambiar la tonalidad
keySelector.addEventListener("change", updateChords);
updateChords();
