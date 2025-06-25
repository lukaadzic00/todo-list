export default class Task {
    #name;
    #description;
    #date;
    #priority;
    
    constructor(name, description, date, priority) {
        this.#name = name;
        this.#description = description;
        this.#date = date;
        this.#priority = priority;
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

    get priority() {
        return this.#priority;
    }

    set priority(value) {
        this.#priority = value;
    }
}