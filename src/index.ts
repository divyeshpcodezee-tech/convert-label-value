// src/index.ts
export type Option<T = Record<string, any>> = {
  label: string;
  value: string | number;
} & Partial<T>;

export interface CoverLabelValueParams<
  T,
  K1 extends keyof T,
  K2 extends keyof T
> {
  data: readonly (T | string)[];
  labelKey?: K1;
  valueKey?: K2;
}

/**
 * Convert array of strings or array of objects into { label, value } options.
 */
export function coverLabelValue<T, K1 extends keyof T, K2 extends keyof T>({
  data,
  labelKey,
  valueKey,
}: CoverLabelValueParams<T, K1, K2>): Option[] {
  if (!Array.isArray(data) || data.length === 0) {
    return [];
  }

  if (typeof data[0] === "string") {
    return (data as readonly string[]).map((item) => ({
      label: item.charAt(0).toUpperCase() + item.slice(1),
      value: item,
    }));
  }

  if (labelKey && valueKey) {
    return (data as readonly T[]).map((item) => ({
      ...item,
      label: String(item[labelKey]),
      value: item[valueKey] as string | number,
    }));
  }

  return [];
}

export default coverLabelValue;
