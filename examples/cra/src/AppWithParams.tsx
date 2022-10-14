import { useSafeParams } from 'use-safe-params-test-123';

function AppWithParams() {
  const params = useSafeParams<'/:id'>();
  // eslint-disable-next-line no-console
  console.table(params);
  return <div className="App">hi</div>;
}

export default AppWithParams;
