export function selectBook(book){
    //Action creator, it returns an action, an object with a type Property
    return{
        type: 'BOOK_SELECTED',
        payload: book
    }

}