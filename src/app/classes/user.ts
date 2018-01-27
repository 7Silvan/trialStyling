export class User {
    id: string;
    firstName: string;
    lastName: string;
    photoUrl: string;

    constructor({id, firstName, lastName, photoUrl}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.photoUrl = photoUrl;
    }
}
