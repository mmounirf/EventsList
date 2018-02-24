import { Member } from "./member";

export class Event {
    id: number;
    title: string;
    description: string;
    status: string;
    dateTime: Date;
    image: string;
    members: Member[];
 } 