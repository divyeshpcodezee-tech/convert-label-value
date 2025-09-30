# @divyesh/convert-label-value

A tiny utility to convert arrays of strings or objects into `{ label, value }` options — perfect for dropdowns, selects, or any UI component that expects options.

---

## Installation

```bash
npm install @divyesh/convert-label-value
# or
yarn add @divyesh/convert-label-value
```

## Usage Example

```ts
import coverLabelValue from "@divyesh/convert-label-value";

// Example 1: Array of strings
const fruits = ["apple", "banana", "orange"];
const optionsFromStrings = coverLabelValue({ data: fruits });
console.log(optionsFromStrings);
// [
//   { label: 'Apple', value: 'apple' },
//   { label: 'Banana', value: 'banana' },
//   { label: 'Orange', value: 'orange' }
// ]

// Example 2: Array of objects
const items = [
  { name: "apple", id: 1 },
  { name: "banana", id: 2 },
];
const optionsFromObjects = coverLabelValue({
  data: items,
  labelKey: "name",
  valueKey: "id",
});
console.log(optionsFromObjects);
// [
//   { name: 'apple', id: 1, label: 'apple', value: 1 },
//   { name: 'banana', id: 2, label: 'banana', value: 2 }
// ]
```
