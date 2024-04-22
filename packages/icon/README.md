# @blueshift-ui/icon

This component supports both the [Google Material Icons](https://mui.com/material-ui/material-icons/) components and extends the native `<svg>` element.

Example usage:

```jsx
import { AccessAlarm, Icon } from '@blueshift-ui/icon';

function Component() {
  return (
    // Google Material Icon 
    <AccessAlarm />
    // extend native `<svg>` element
    <Icon><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></Icon>
  );
}
```
