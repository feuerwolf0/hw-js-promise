import read from "./reader";
import json from "./parser";

export default class GameSavingLoader {
    static load() {
        return new Promise((resolve) => {
            read().then((data) => {
                json(data).then((stringData) => resolve(JSON.parse(stringData)));
            });
        });
    }
}