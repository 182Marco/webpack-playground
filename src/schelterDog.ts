import { Dog } from "./dog";

export class SchelterDog extends Dog {
    constructor(name: string, breed: string, age: number, public schelter: string) {
        super(name, breed, age)
    }
}