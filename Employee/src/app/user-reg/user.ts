export class User {
    constructor(
        public uname: string,
        public email: string,
        public phone: number,
        public country: string,
        public gender: string,
        public agree: boolean,
    ) { }
}
