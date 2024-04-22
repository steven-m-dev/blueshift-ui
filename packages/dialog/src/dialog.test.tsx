import { Button } from '@blueshift-ui/button';
import Dialog from './dialog';
import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('<Dialog />', () => {
  describe('when title and content passed', () => {
    it('renders correctly when opened', async () => {
      render(
        <Dialog open={true} title="Title">
          Test Content
        </Dialog>
      );

      expect(await screen.findByText('Title')).toBeVisible();
      expect(await screen.findByText('Test Content')).toBeVisible();
    });

    it('should not render when open is false', async () => {
      render(
        <Dialog open={false} title="Title">
          Test Content
        </Dialog>
      );

      expect(await screen.queryAllByText('Title')).toHaveLength(0);
      expect(await screen.queryAllByText('Test Content')).toHaveLength(0);
    });
  });

  describe('with action buttons', () => {
    it('renders correctly', async () => {
      render(
        <Dialog
          actions={[<Button key="disagree">Disagree</Button>, <Button key="agree">Agree</Button>]}
          open={true}
          title="Title"
        >
          Test Content
        </Dialog>
      );

      expect(await screen.findByText('Disagree')).toBeVisible();
      expect(await screen.findByText('Agree')).toBeVisible();
    });
  });

  describe('when showing close button', () => {
    it('renders correctly', async () => {
      render(
        <Dialog open={true} title="Title" withCloseButton={true}>
          Test Content
        </Dialog>
      );

      expect(await screen.findByLabelText('close')).toBeVisible();
    });
  });

  describe('when hiding close button', () => {
    it('renders correctly', () => {
      render(
        <Dialog open={true} title="Title" withCloseButton={false}>
          Test Content
        </Dialog>
      );

      expect(screen.queryByLabelText('close')).not.toBeInTheDocument();
    });
  });
});
