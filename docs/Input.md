[Checkbox](https://taystack.github.io/ui-components/docs/Checkbox#checkbox)

[Input](https://taystack.github.io/ui-components/docs/Input#input)

## Input

[Inputs Demo](https://taystack.github.io/ui-components/storybook-static/?selectedKind=Inputs) contains a form using an input.

## Use

```javascript
import { Input } from "@taystack/react-ui";


<Input />
```

## Props

| prop | type | required | default |
|label|String|[ ]|`""`|
|defaultValue|String|[ ]|`""`|
|style|Object|[ ]|`{}` see below|
|inputStyle|Object|[ ]|`{}` see below|
|error|Boolean|[ ]|`false`|
|errorText|String|[ ]|`""` see below|

## Notes

#### `label` String

If present, will display a label for the input. Keep it short.

#### `defaultValue` String

Sets the input value to the String assigned.

Note: Changing this value will modify the value of this input.

#### `style` Object

This will change the container styles. Useful for `margin`.

#### `inputStyle` Object

This will change the input styles. Use at your own risk.

#### `error` Boolean

Shows the input in an error state if true.

#### `errorText` String

Useful for displaying custom error messages for this input when `error === true`.
