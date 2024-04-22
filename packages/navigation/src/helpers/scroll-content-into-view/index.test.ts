import scrollContentIntoView from './index';

describe('scrollContentIntoView', () => {
  let element;

  beforeAll(() => {
    element = document.createElement('div');
    element.setAttribute('id', 'test');
    element.scrollIntoView = jest.fn();
    document.body.appendChild(element);
  });

  describe('when the element is found', () => {
    describe('when the window is scrolled past the element', () => {
      it('scrolls the element into view', () => {
        window.scrollY = 100;

        scrollContentIntoView('#test');

        expect(element.scrollIntoView).toBeCalledWith({
          behavior: 'smooth',
          block: 'start',
        });
      });
    });

    describe('when the window is not scrolled past the element', () => {
      it('does nothing', () => {
        window.scrollY = 0;

        scrollContentIntoView('#test');

        expect(element.scrollIntoView).not.toBeCalled();
      });
    });
  });

  describe('when the element is not found', () => {
    it('does nothing', () => {
      scrollContentIntoView('#does-not-exist');

      expect(element.scrollIntoView).not.toBeCalled();
    });
  });
});
