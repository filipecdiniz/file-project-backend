import UserEntity from "src/user/entities/user.entity";

export class LoginPayloadDTO {
    id: number;

    constructor(user: UserEntity) {
        this.id = user.id
    }
}