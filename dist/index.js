"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const core_1 = __importDefault(require("./core"));
function tsIndexer(opts) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = core_1.default(opts);
        const { dest } = opts;
        if (dest) {
            yield fs_1.promises.writeFile(dest, body, { encoding: "utf8" });
        }
        return body;
    });
}
exports.default = tsIndexer;
//# sourceMappingURL=index.js.map