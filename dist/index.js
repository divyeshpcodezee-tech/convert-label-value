"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coverLabelValue = coverLabelValue;
/**
 * Convert array of strings or array of objects into { label, value } options.
 */
function coverLabelValue({ data, labelKey, valueKey, }) {
    if (!Array.isArray(data) || data.length === 0) {
        return [];
    }
    if (typeof data[0] === "string") {
        return data.map((item) => ({
            label: item.charAt(0).toUpperCase() + item.slice(1),
            value: item,
        }));
    }
    if (labelKey && valueKey) {
        return data.map((item) => ({
            ...item,
            label: String(item[labelKey]),
            value: item[valueKey],
        }));
    }
    return [];
}
exports.default = coverLabelValue;
