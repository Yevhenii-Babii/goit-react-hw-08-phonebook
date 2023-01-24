export const selectContacts = state => state.contacts.contacts;

export const selectFilter = state => state.filter.filter;

export const selectLoader = state => state.contacts.isLoading;

export const selectLoaderLogin = state => state.auth.isLoading;

export const selectUser = state => state.auth.userData;

export const selectError = state => state.auth.error;
