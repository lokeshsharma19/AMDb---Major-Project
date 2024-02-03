import { useEffect } from "react";
import SearchForm from "../components/SearchForm";
import Trending from "../components/Trending";
import PageNum from "../components/PageNum";
import { useLocation } from "react-router-dom";
import { useFilter } from "../context/FilterProvider";
// import Popular from "../components/Popular";
function Home() {
  const { setMediaType, setResultPage, mediaType } = useFilter();
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    if (location.pathname !== "/detail") {
      console.log(console.log(mediaType));
      setResultPage(1);
      setMediaType("all");
    }
  }, [location]);
  return (
    <div>
      <SearchForm />
      <div className="container homeContent">x
        <Trending />
        <PageNum />
      </div>
    </div>
  );
}

export default Home;
