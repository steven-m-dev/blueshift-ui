import Card from './card';
import { Link } from '@blueshift-ui/link';
import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

describe('<Card />', () => {
  const action = <Link>laborum</Link>;
  const actionDetails = 'Consectetur adipiscing elit.';
  const thumbnail = 'contemplative-reptile.jpg';
  const overline = 'Duis aute irure';
  const title = 'Excepteur sint occaecat cupidatat';

  describe('when loading', () => {
    it('renders loading variant', async () => {
      const { container } = render(<Card loading />);
      const skeleton = container.querySelector('.MuiSkeleton-root');

      expect(skeleton).toBeVisible();
    });
  });

  describe('when loaded', () => {
    describe('when action present', () => {
      it('renders action', async () => {
        render(<Card action={action} />);
        expect(await screen.findByText('laborum')).toBeVisible();
      });
    });

    describe('when action not present', () => {
      it('does not render action', async () => {
        render(<Card />);
        expect(await screen.queryByText('laborum')).not.toBeInTheDocument();
      });
    });

    describe('when action details present', () => {
      it('renders action details', async () => {
        render(<Card actionDetails={actionDetails} />);
        expect(await screen.findByText(actionDetails)).toBeVisible();
      });
    });

    describe('when description not present', () => {
      it('does not render description', async () => {
        render(<Card />);
        expect(await screen.queryByText(actionDetails)).not.toBeInTheDocument();
      });
    });

    describe('when thumbnail present', () => {
      it('renders thumbnail', async () => {
        render(<Card thumbnail={thumbnail} />);
        expect(await screen.findByRole('img')).toBeVisible();
      });
    });

    describe('when thumbnail not present', () => {
      it('does not render thumbnail', async () => {
        render(<Card />);
        expect(await screen.queryByRole('img')).not.toBeInTheDocument();
      });
    });

    describe('when overline present', () => {
      it('renders overline', async () => {
        render(<Card overline={overline} />);
        expect(await screen.findByText(overline)).toBeVisible();
      });
    });

    describe('when overline not present', () => {
      it('does not render overline', async () => {
        render(<Card />);
        expect(await screen.queryByText(overline)).not.toBeInTheDocument();
      });
    });

    describe('when title present', () => {
      it('renders title', async () => {
        render(<Card title={title} />);
        expect(await screen.findByText(title)).toBeVisible();
      });
    });

    describe('when title not present', () => {
      it('does not render title', async () => {
        render(<Card />);
        expect(await screen.queryByText(title)).not.toBeInTheDocument();
      });
    });
  });
});
