import { render } from '@testing-library/react';
import TestWrapper from './TestWrapper';
import StatsTabs from './StatsTabs';

test("renders StatsTabs", () => {
  render(
    <TestWrapper>
      <StatsTabs />
    </TestWrapper>
  );
});
