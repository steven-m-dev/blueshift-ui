# @blueshift-ui/progress-indicator

Progress indicators express an unspecified wait time or display the length of a process.

Example usage:

```jsx
import { CircularProgress, LinearProgress } from '@blueshift-ui/progress-indicator';

function Component() {
  return (
    <>
      {/* indeterminate circular progress */}
      <CircularProgress />

      {/* determinate circular progress, 25% complete */}
      <CircularProgress variant="determinate" value={25} />

      {/* indeterminate linear progress */}
      <LinearProgress />

      {/* determinate linear progress, 25% complete */}
      <LinearProgress value={25} variant="determinate" />

      {/* determinate linear progress, 25% complete with buffer */}
      <LinearProgress value={25} valueBuffer={10} variant="determinate" />

      {/* indeterminate query progress */}
      <LinearProgress variant="query" />
    </>
  );
}
```
