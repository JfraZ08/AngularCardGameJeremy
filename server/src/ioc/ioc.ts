import { Container, injectable } from "inversify";

import { IocDals } from "./ioc.dals";
import { IocServices } from "./ioc.services";
import { JwtCheckerMiddleware } from "../implementations/middlewares/jwt-checker.middleware";

@injectable()
export class Ioc {
    static register(): Container {
        const container: Container = new Container();
        IocDals.register(container);
        IocServices.register(container);

        container.bind<JwtCheckerMiddleware>(JwtCheckerMiddleware).toSelf();
        return container;
    }
}