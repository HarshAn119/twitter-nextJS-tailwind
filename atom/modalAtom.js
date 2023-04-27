import { atom } from 'recoil';

export const modalState = atom({
  key: 'modalState',
  default: false, // initial value
});

export const postIdState = atom({
  key: 'postIdState',
  default: 'temporaryString', // initial value
});
