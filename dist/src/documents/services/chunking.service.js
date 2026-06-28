"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ChunkingService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChunkingService = void 0;
const common_1 = require("@nestjs/common");
const TARGET_TOKENS = 750;
const CHARS_PER_TOKEN = 4;
const TARGET_CHARS = TARGET_TOKENS * CHARS_PER_TOKEN;
const MIN_TOKENS = 500;
const MAX_TOKENS = 1000;
const MIN_CHARS = MIN_TOKENS * CHARS_PER_TOKEN;
const MAX_CHARS = MAX_TOKENS * CHARS_PER_TOKEN;
const PAGE_SEPARATOR = '\f';
let ChunkingService = ChunkingService_1 = class ChunkingService {
    logger = new common_1.Logger(ChunkingService_1.name);
    chunk(text, fileName) {
        this.logger.log(`Chunking text for "${fileName}" (${text.length} chars)…`);
        const pages = text
            .split(PAGE_SEPARATOR)
            .map((p) => p.trim())
            .filter((p) => p.length > 0);
        const chunks = [];
        let buffer = '';
        let bufferStartPage = 1;
        let chunkIndex = 0;
        const flushBuffer = (forcedPageNumber) => {
            if (buffer.trim().length === 0)
                return;
            const content = buffer.trim();
            const tokenCount = Math.ceil(content.length / CHARS_PER_TOKEN);
            chunks.push({
                chunkIndex,
                content,
                pageNumber: forcedPageNumber,
                tokenCount,
            });
            chunkIndex++;
            buffer = '';
        };
        for (let pageIdx = 0; pageIdx < pages.length; pageIdx++) {
            const pageNumber = pageIdx + 1;
            const pageText = pages[pageIdx];
            if (buffer.length > 0) {
                buffer += ' ';
            }
            else {
                bufferStartPage = pageNumber;
            }
            buffer += pageText;
            while (buffer.length >= MAX_CHARS) {
                const sliceEnd = this.findBreakPoint(buffer, TARGET_CHARS, MAX_CHARS);
                const slice = buffer.slice(0, sliceEnd).trim();
                const tokenCount = Math.ceil(slice.length / CHARS_PER_TOKEN);
                chunks.push({
                    chunkIndex,
                    content: slice,
                    pageNumber: bufferStartPage,
                    tokenCount,
                });
                chunkIndex++;
                buffer = buffer.slice(sliceEnd).trimStart();
                bufferStartPage = pageNumber;
            }
        }
        if (buffer.trim().length > 0) {
            if (chunks.length > 0 && buffer.trim().length < MIN_CHARS) {
                const last = chunks[chunks.length - 1];
                last.content = `${last.content} ${buffer.trim()}`;
                last.tokenCount = Math.ceil(last.content.length / CHARS_PER_TOKEN);
            }
            else {
                flushBuffer(bufferStartPage);
            }
        }
        this.logger.log(`Chunking complete for "${fileName}": ${chunks.length} chunk(s) produced.`);
        return chunks;
    }
    findBreakPoint(text, targetLen, maxLen) {
        const window = text.slice(0, maxLen);
        const sentenceEnd = window.lastIndexOf('. ', targetLen);
        if (sentenceEnd !== -1 && sentenceEnd >= MIN_CHARS) {
            return sentenceEnd + 2;
        }
        const lastSpace = window.lastIndexOf(' ');
        if (lastSpace !== -1 && lastSpace >= MIN_CHARS) {
            return lastSpace + 1;
        }
        return maxLen;
    }
};
exports.ChunkingService = ChunkingService;
exports.ChunkingService = ChunkingService = ChunkingService_1 = __decorate([
    (0, common_1.Injectable)()
], ChunkingService);
//# sourceMappingURL=chunking.service.js.map