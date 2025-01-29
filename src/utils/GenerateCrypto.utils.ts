import { randomBytes } from "crypto";

export function GenerateCrypto() {
    return randomBytes(3).toString('hex').toUpperCase();
}