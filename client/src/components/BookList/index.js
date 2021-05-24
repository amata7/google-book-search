import BookCard from "../BookCard";
import Section from "../Section";
import { items as books } from "../../fakeBooks.json";
function BookList() {
  return (
    <Section title="Results">
      <BookCard book={books[0]} />
      <BookCard book={books[1]} />
      <BookCard book={books[2]} />
    </Section>
  );
}

export default BookList;
