"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateScheduledTaskDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_scheduled_task_dto_1 = require("./create-scheduled-task.dto");
class UpdateScheduledTaskDto extends (0, mapped_types_1.PartialType)(create_scheduled_task_dto_1.CreateScheduledTaskDto) {
}
exports.UpdateScheduledTaskDto = UpdateScheduledTaskDto;
//# sourceMappingURL=update-scheduled-task.dto.js.map