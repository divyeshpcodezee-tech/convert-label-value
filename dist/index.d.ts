export type Option<T = Record<string, any>> = {
    label: string;
    value: string | number;
} & Partial<T>;
export interface CoverLabelValueParams<T, K1 extends keyof T, K2 extends keyof T> {
    data: readonly (T | string)[];
    labelKey?: K1;
    valueKey?: K2;
}
/**
 * Convert array of strings or array of objects into { label, value } options.
 */
export declare function coverLabelValue<T, K1 extends keyof T, K2 extends keyof T>({ data, labelKey, valueKey, }: CoverLabelValueParams<T, K1, K2>): Option[];
export default coverLabelValue;
