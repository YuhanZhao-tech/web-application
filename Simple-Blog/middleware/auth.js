import fs from "node:fs";

export default function auth(name, password) {

    if (name != "aiden" || password != "abcd82661582") {
        return false;
    }
    return true;
}
