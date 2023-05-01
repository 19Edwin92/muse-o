import { atom, selector } from "recoil";

export const searchWordState = atom({
  key: 'searchWordState',
  default: "",
});


export const searchDataState = atom({
  key: 'searchDataState',
  default: [],
});

export const searchDataExState = selector({
  key: 'searchDataExState',
  get: ({get}) => {
    const {exhibitions} = get(searchDataState);
    return exhibitions;
  }
});

export const searchDataArtState = selector({
  key: 'searchDataArtgramsState',
  get: ({get}) => {
    const {artgrams} = get(searchDataState);
    return artgrams;
  }
});

export const searchDataUserState = selector({
  key: 'searchDataUserState',
  get: ({get}) => {
    const {users} = get(searchDataState);
    return users;
  }
});
