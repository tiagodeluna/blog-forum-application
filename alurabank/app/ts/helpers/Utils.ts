import { Printable } from "../models/index";

export function print(...objects: Printable[]) {
    objects.forEach(obj => obj.toString());
}