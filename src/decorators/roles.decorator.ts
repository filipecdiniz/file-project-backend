import { SetMetadata } from '@nestjs/common';
import { accessTypeEnum } from 'src/upload/enums/accessType.enum';


export const ROLES_KEY = 'roles';
export const Roles = (...roles: accessTypeEnum[]) => SetMetadata(ROLES_KEY, roles);