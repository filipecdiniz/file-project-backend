import { randomBytes } from "crypto";

export function GenerateCrypto(bytes: number) {
    return randomBytes(bytes).toString('hex').toUpperCase();
}