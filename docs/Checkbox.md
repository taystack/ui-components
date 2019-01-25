[Checkbox](https://taystack.github.io/ui-components/docs/Checkbox#checkbox)

[Input](https://taystack.github.io/ui-components/docs/Input#input)

## Checkbox

[Inputs Demo](https://taystack.github.io/ui-components/storybook-static/?selectedKind=Inputs) contains a form using a checkbox.

## Use

```javascript
import { Checkbox } from "@taystack/react-ui";


<Checkbox />
```

## Props

| Prop | Type | Required | Default |
|id|String|true||
|label|String|false|`""`|
|onChange|Function|false|`x => x`|
|style|Object|false|`{}` see notes|

## Notes

#### `id` String

Required for use with htmlFor, checkbox is drawn with a `<label />`.

#### `label` String

If present, will display a text label for the checkbox. Keep it short.

#### `defaultChecked` String

Sets the input value to the String assigned.

Note: Changing this value will modify the value of input.

#### `style` Object

This will change the container styles. Useful for `margin`.

#### `inputStyle` Object

This will change the input styles. Use at your own risk.

#### `error` Boolean

Shows the input in an error state if true.

#### `errorText` String

Useful for displaying custom error messages for this input when `error === true`.
