"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContact = exports.getContacts = void 0;
const database_1 = require("../database");
function getContacts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const contacts = yield conn.query("SELECT * FROM contacts");
        return res.json(contacts[0]);
    });
}
exports.getContacts = getContacts;
function createContact(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newContact = req.body;
        const conn = yield database_1.connect();
        yield conn.query('INSERT INTO contacts SET ? ', [newContact]).catch((err) => {
            return res.json({
                message: "Error",
                error: err,
                success: 200
            });
        });
        return res.json({
            message: `El visitante ${newContact.name} se registro exitosamente`,
            success: 200
        });
    });
}
exports.createContact = createContact;
