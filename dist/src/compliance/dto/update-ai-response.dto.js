"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAIResponseDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ai_response_dto_1 = require("./create-ai-response.dto");
class UpdateAIResponseDto extends (0, mapped_types_1.PartialType)(create_ai_response_dto_1.CreateAIResponseDto) {
}
exports.UpdateAIResponseDto = UpdateAIResponseDto;
//# sourceMappingURL=update-ai-response.dto.js.map