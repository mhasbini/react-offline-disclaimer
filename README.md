# react-offline-disclaimer

Show Offline disclaimer. [Demo](src/demo/App.js).

![](screenshots/project.gif)

```jsx
import OfflineDisclaimer from 'react-offline-disclaimer';

const App = () => (
  <main>
    <Header>
      Hello 👋
    </Header>
    <OfflineDisclaimer />
    <Online>
      <Paragraph>This content will be shown only when you're online.</Paragraph>
      <Paragraph>Turn off your connection to see the offline disclaimer page.</Paragraph>
    </Online>
  </main>
);
```

### `yarn start`

Runs the library in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn run test`

Runs the test watcher in an interactive mode.

### `yarn build`

Builds the library for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm publish`

Publishes the library to NPM.
