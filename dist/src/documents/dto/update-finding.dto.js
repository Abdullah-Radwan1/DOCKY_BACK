"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFindingDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_finding_dto_1 = require("./create-finding.dto");
class UpdateFindingDto extends (0, mapped_types_1.PartialType)(create_finding_dto_1.CreateFindingDto) {
}
exports.UpdateFindingDto = UpdateFindingDto;
//# sourceMappingURL=update-finding.dto.js.map