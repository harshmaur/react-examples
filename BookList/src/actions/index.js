export function selectBook(book) {
    // selectBook is actionCreator, needs to return an action which is an object with "type" property
    return {
        type: 'BOOK_SELECTED',
        payload: book 
    }
}
