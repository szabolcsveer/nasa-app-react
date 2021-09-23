import React, { useEffect, useState } from "react";
import Masonry from 'react-masonry-css';
import ReactPaginate from 'react-paginate';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import "./App.scss";
import Apod from "./components/apod/Apod";
import Header from "./components/header/Header";
import Search from "./components/search/Search";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

function App() {
  const [isLoading, setLoading] = useState(true);
  const [media, setMedia] = useState<any>({});
  const [pageCount, setPageCount] = useState(1);
  const [searchString, setSearchString] = useState('nebula');

  const search = async (searchValue: string) => {
    setSearchString(searchValue)

    const res = await fetch(
      `https://images-api.nasa.gov/search?q=${searchValue}&page=${pageCount}`,
      {
        method: "GET",
      }
    );
    const media = await res.json();
    setMedia(media);
    setLoading(false);

  };

  useEffect(() => {
    search(searchString)
  }, [pageCount, searchString]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/apod">
          <Apod />
        </Route>
        <Route path="/media">
          <Search search={search} />
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="media-container"
            columnClassName="my-masonry-grid_column">
            {media.collection.items?.map((item: any, i: number) => (
              <div key={i}>
                {item.links ? (
                  <img className="image" src={item?.links[0].href} alt="nasa_image" />
                ) : (
                    ""
                  )}{" "}
              </div>
            ))}
          </Masonry>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={Math.ceil(media.collection.metadata.total_hits / 100)}
            pageRangeDisplayed={20}
            marginPagesDisplayed={5}
            onPageChange={(item) => setPageCount(item.selected + 1)}
            pageClassName={"pagename"}
            previousClassName={"previous-class"}
            nextClassName={"next-class"}
            activeClassName={"active-class-name"}
            containerClassName={"pagination-container"}></ReactPaginate>
        </Route>
      </div>
    </Router>
  );
}

export default App;
