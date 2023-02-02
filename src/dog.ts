export class Dog {
    constructor(
        public name: string,
        public breed: string,
        public age: number,
    ) {}
    static bark() {
        return 'woof woof!!'
    }
}