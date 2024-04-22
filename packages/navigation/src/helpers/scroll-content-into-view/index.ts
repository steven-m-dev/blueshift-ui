function scrollContentIntoView(selector: string) {
  const element = document.querySelector(selector) as HTMLElement;

  if (!element) {
    return;
  }

  if (window.scrollY > element.offsetTop) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

export default scrollContentIntoView;
