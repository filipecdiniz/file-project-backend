import { createParamDecorator, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { authorizationToLoginPayload } from "src/utils/base-64-converter";



export const UserID = createParamDecorator((_, ctx: ExecutionContext) => {

    const { authorization } = ctx.switchToHttp().getRequest().headers;
    if (!authorization) {
        throw new UnauthorizedException(``)
    }

    const userId = authorizationToLoginPayload(authorization);

    if (!userId) {
        throw new UnauthorizedException(``)
    }
    return userId;
});
