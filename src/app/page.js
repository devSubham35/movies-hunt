'use client'
import React, { useEffect, useState } from 'react';
import Card_item from "@/Components/Card_item/Card_item";
import Styles from "./content.module.css";

const Page = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const getStaticProps = async () => {
      const res = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=1a85467aa576e7e8ec1d09bc874e5c20");
      const data = await res.json();
      setData(data.results);
      setFilteredData(data.results); // Initially set filteredData to all data
    }
    getStaticProps();
  }, []);

  // Update the filteredData when searchText changes
  useEffect(() => {
    const filtered = data.filter(curElem => {
      const title = curElem.title ? curElem.title.toLowerCase() : '';
      return title.includes(searchText.toLowerCase());
    });
    setFilteredData(filtered);
  }, [searchText, data]);

  // console.log(localStorage.getItem('search'))
  // let valuep = localStorage.getItem('search')

  return (
    <div className={Styles.home}>

      <div className={Styles.content}>
        <div className={Styles.searchBar}>
          <input
            className={Styles.searchInput}
            type="text"
            placeholder="Search Here"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />

        </div>
        <div className={Styles.movie_content}>
          {filteredData.map((curElem) => (
            <div key={curElem.id}>
              <Card_item
              id={curElem.id}
                title={curElem.title ? curElem.title.slice(0, 20) : ""}
                des={curElem.overview ? curElem.overview.slice(0, 50)+"..." : ""}
                img={`https://image.tmdb.org/t/p/w220_and_h330_face${curElem.poster_path}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
