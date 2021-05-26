import BookCard from "../BookCard";
import Section from "../Section";

function BookList({ books }) {
  return (
    <Section title="Results">
      {books.length > 0 ? (
        books.map((book) => <BookCard {...book} />)
      ) : (
        <p> No results to display</p>
      )}
    </Section>
  );
}

export default BookList;
