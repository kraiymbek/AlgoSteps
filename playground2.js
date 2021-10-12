class Department {
    constructor(name) {
        this.name = name;
    }

    describe() {
        console.log("Department: " + this.name);
    }
}

const accounting = new Department('accounting');
accounting.describe()

const someCopy = { name: 'dada', describe: accounting.describe }

someCopy.describe();