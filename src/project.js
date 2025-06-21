export default class Project {
    #name;
    #description;
    #tasks = [];

    constructor(name, description) {
        this.#name = name;
        this.#description = description;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get description() {
        return this.#description;
    }

    set description(value) {
        this.#description = value;
    }

    get tasks() {
        return this.#tasks;
    }

    set tasks(value) {
        this.#tasks.push;
    }
}