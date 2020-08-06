import { createPool, Pool } from "mysql2/promise"

export async function connect(): Promise<Pool>{

    const connection = await createPool({
        host: "178.128.146.252",
        user: "admin_sigmauser",
        database: "admin_sigmatest",
        password: "pfaDKIJyPF",
        connectionLimit: 10
    })
    return connection
}