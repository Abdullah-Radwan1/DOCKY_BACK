import { CreateNotificationDto } from './create-notification.dto';
import { NotificationStatus } from "../../generated/prisma/index.js";
declare const UpdateNotificationDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateNotificationDto>>;
export declare class UpdateNotificationDto extends UpdateNotificationDto_base {
    status?: NotificationStatus;
}
export {};
