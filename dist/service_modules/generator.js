"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generator = void 0;
class generator {
    getUserId(counter) {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        return (dd + mm + yyyy + today.getHours() + today.getMinutes() + today.getSeconds() + counter);
    }
}
exports.generator = generator;
//# sourceMappingURL=generator.js.map