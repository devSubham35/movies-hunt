"use client"

import React, { useEffect, useState } from 'react'
import styles from "./des.module.css"
// import { useRouter } from 'next/router'

const page = ({ params }) => {

  const [movieData, setMovieData] = useState([]);


  // console.log(params.id)
  const id = params.id

  useEffect(() => {
    const getStaticProps = async () => {
      const res = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=1a85467aa576e7e8ec1d09bc874e5c20");
      const data = await res.json();
      const getData = data.results;
      console.log(getData)
      // Find the movie with the matching ID
      const selectedMovie = getData.find(movie => { return (String(movie.id) === String(id)) });
      console.log(selectedMovie)
      if (selectedMovie) {
        setMovieData(selectedMovie);
      } else {
        // Handle the case when the movie with the given ID is not found
        // console.log(`Movie with ID ${id} not found`);
      }
    }
    getStaticProps();
  }, [id]);

  return (


    <div className={styles.des_con_main}>

      <div className={styles.des_box}>

        {/* <div className={styles.img_box}>{movieData.title}</div> */}
        <div className={styles.img_box}>
          <img className={styles.img} src={`https://image.tmdb.org/t/p/w220_and_h330_face${movieData.poster_path}`} alt="No image" />

        </div>

        <div className={styles.text_box}>
          <div className={styles.title}>{movieData.title}</div>
          <div className={styles.des}>{movieData.overview}</div>
          <div className={styles.date}>Release Date : {movieData.release_date}</div>
          <div className={styles.lan}>Language : {movieData.original_language}</div>
          <div className={styles.lan}>Rating : {movieData.vote_average}</div>

        </div>

      </div>

    </div>

  )
}

export default page
