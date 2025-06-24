export default class Project {
    #name;
    #description;
    #selected;
    #tasks = [];

    constructor(name, description, selected) {
        this.#name = name;
        this.#description = description;
        this.#selected = selected;
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

    get selected() {
        return this.#selected;
    }

    set selected(value) {
        this.#selected = value;
    }

    get tasks() {
        return this.#tasks;
    }

    set tasks(value) {
        this.#tasks.push;
    }
}