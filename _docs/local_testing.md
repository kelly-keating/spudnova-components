# Local Testing

This is how to create a symbolic link between the local module and the project where we want to use it.

## Register your module globally on your system

Navigate to your UI module folder (i.e., spudnova-ui) and run:

```sh
npm link
```

This should make it available to npm anywhere on the computer.

## Link the module in the target project

In the directory of the project where you want to use the module run:

```sh
npm link spudnova-ui
```

This creates a symbolic link to the local spudnova-ui directory inside the node_modules of the project.

## Use the module

You can now use the module just as if it were an installed dependency:

```jsx
import { Button } from 'spudnova-ui';

function App() {
  return (
    <Button>
    ...
}

export default App;
```

## Unlink the module

To tell the target project to forget it:

```sh
npm unlink spudnova-ui
```

In the module directory:

```sh
npm unlink
```

This removes the symbolic link and global registration of the module.
