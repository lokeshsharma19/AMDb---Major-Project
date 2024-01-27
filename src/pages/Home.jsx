import SearchForm from "../components/SearchForm";
import Trending from "../components/Trending";
import PageNum from "../components/PageNum";
// import Popular from "../components/Popular";
function Home() {
  return (
    <div>
      <SearchForm />
      <h2 className="container">Trending movies</h2>
      <Trending />
      <PageNum />
    </div>
  );
}

export default Home;
