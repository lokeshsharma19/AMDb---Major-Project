import SearchForm from "../components/SearchForm";
import Trending from "../components/Trending";
import PageNum from "../components/PageNum";

function Home() {
  return (
    <div>
      <SearchForm />
      <div className="container homeContent">
        <Trending />
        <PageNum />
      </div>
    </div>
  );
}

export default Home;
