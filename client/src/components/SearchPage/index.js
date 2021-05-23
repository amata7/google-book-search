import Hero from "../Hero";
import SearchForm from "../SearchForm";
import BookList from "../BookList";
import Wrapper from "../Wrapper.js";
function SearchPage() {
  return (
    <Wrapper>
      <Hero />
      <SearchForm />
      <BookList />
    </Wrapper>
  );
}

export default SearchPage;
