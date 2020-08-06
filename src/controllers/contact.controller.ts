import { Request, Response } from 'express'
import { connect } from '../database';
import { Contact } from '../interface/Contact.interface';
export async function getContacts(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const contacts = await conn.query("SELECT * FROM contacts");
    return res.json(contacts[0])
}

export async function createContact(req: Request, res: Response) {
    const newContact: Contact = req.body;
    const conn = await connect();

    await conn.query('INSERT INTO contacts SET ? ', [newContact]).catch((err) => {
        return res.json({
            message: "Error",
            error: err,
            success: 200
        })
    })
    return res.json({
        message: `El visitante ${newContact.name} se registro exitosamente`,
        success: 200
    })
}