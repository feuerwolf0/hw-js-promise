import GameSavingLoader from "./GameSavingLoader";


GameSavingLoader.load().then((out) => {
    console.log("Загружено сохранение: ", out);
}, error => console.error(error));
