import BookForm from "./BookForm"

function BookAdd() {

  const emptyBook = {
    id:0, titulo:"", autor:"", categoria:""
  }
    return (
      <>
      <BookForm libro={emptyBook} />
      </>
    )
  }

  export default BookAdd