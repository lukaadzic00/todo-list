export default class Task {
    #name;
    #description;
    #date;
    
    constructor(name, description, date) {
        this.#name = name;
        this.#description = description;
        this.#date = date;
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

    get date() {
        return this.#date;
    }

    set date(value) {
        this.#date = value;
    }
}