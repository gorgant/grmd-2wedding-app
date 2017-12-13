export class RsvpForm {
  constructor (
    public firstName: string,
    public lastName: string,
    public email: string,
    public guestFirstName: string,
    public guestLastName: string,
    public guestEmail: string,
    public timestamp: number) {}
}
