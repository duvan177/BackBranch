import express, { Application } from 'express';
import morgan from 'morgan'

// Routes
import IndexRoutes from "./routes/index.routes";
import ContactRoutes from "./routes/contact.routes";

export class App {
    private app: Application;
    constructor(private port?: Number | String) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 5000);
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes() {
        this.app.use(IndexRoutes);
        this.app.use('/api/contact', ContactRoutes)
    }

    async listen() {

        await this.app.listen(this.app.get('port'));
        console.log("Server on port", this.app.get('port'));
    }

}