export const getSafeElement = (element: HTMLElement | null | EventTarget): HTMLElement => {
  if (!(element instanceof HTMLElement)) {
    throw new Error(`${element} is not an instance of HTMLElement`);
  }
  return element;
};
