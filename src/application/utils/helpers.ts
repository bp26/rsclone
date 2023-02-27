export const getSafeElement = (element: HTMLElement | null | EventTarget): HTMLElement => {
  if (!(element instanceof HTMLElement)) {
    throw new Error(`${element} is not an instance of HTMLElement`);
  }
  return element;
};

export const getSafeInputElement = (element: HTMLElement | null | EventTarget): HTMLInputElement => {
  if (!(element instanceof HTMLInputElement)) {
    throw new Error(`${element} is not an instance of HTMLInputElement`);
  }
  return element;
};

export const queryHTMLElement = (query: string, parent: HTMLElement | Document = document): HTMLElement => {
  const element = parent.querySelector(query);
  if (!(element instanceof HTMLElement)) {
    throw new Error(`${query} is not an instance of HTMLElement`);
  }
  return element;
};

export const queryHTMLInputElement = (query: string, parent: HTMLElement | Document = document): HTMLInputElement => {
  const element = parent.querySelector(query);
  if (!(element instanceof HTMLInputElement)) {
    throw new Error(`${query} is not an instance of HTMLInputElement`);
  }
  return element;
};

export const queryHTMLTextAreaElement = (query: string, parent: HTMLElement | Document = document): HTMLTextAreaElement => {
  const element = parent.querySelector(query);
  if (!(element instanceof HTMLTextAreaElement)) {
    throw new Error(`${query} is not an instance of HTMLInputElement`);
  }
  return element;
};

export const queryHTMLImageElement = (query: string, parent: HTMLElement | Document = document): HTMLImageElement => {
  const element = parent.querySelector(query);
  if (!(element instanceof HTMLImageElement)) {
    throw new Error(`${query} is not an instance of HTMLImageElement`);
  }
  return element;
};

export const getFirstLetter = (word: string): string => word[0].toUpperCase();
