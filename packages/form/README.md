# @blueshift-ui/form

Form provides context such as filled/focused/error/required for inputs.

Example usage:

```jsx
import { RadioButtonGroup } from '@blueshift-ui/form';

function Component() {
  return (
    <RadioButtonGroup
      label="Pets"
      inputOptions={[
        { label: 'Dogs', value: 'dogs' },
        { label: 'Cats', value: 'cats' },
        { label: 'Birds', value: 'birds' },
      ]}
    >
  );
}
```
