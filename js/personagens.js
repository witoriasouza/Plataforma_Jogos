function selectCharacter(characterId) {
    const characterImg = document.getElementById("selected-character-img");
    const characterName = document.getElementById("selected-character-info").getElementsByTagName("h2")[0];

    if (characterId === 1) {
        characterImg.src = "imagens/criatividade.png";
        characterName.textContent = "Criativo e Honesto";

    }  else if (characterId === 2) {
        characterImg.src = "imagens/coragem.png";
        characterName.textContent = "Corajoso e leal";
    }

    const selectedCharacterContainer = document.getElementById("selected-character-container");
    selectedCharacterContainer.style.display = "block";
}
