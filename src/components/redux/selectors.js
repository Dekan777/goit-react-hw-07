export const selectContacts = state => state.contacts;
// export const selectContacts = state => state.contacts.contacts;

export const selectFilter = state => state.filters.filter;


export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;