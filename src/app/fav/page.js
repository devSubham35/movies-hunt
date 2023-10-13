'use client'
import React, { useEffect, useState } from 'react';
import styles from './Fav.module.css';
import Link from 'next/link';

const Fav = (props) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const handelRemove = (index) => {
    // Create a copy of the current favorites array
    const updatedFavorites = [...favorites];

    // Remove the favorite at the specified index
    updatedFavorites.splice(index, 1);

    // Update localStorage with the modified favorites
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

    // Update the state to reflect the removal
    setFavorites(updatedFavorites);
  };

  const handelRemoveall = () => {
    localStorage.removeItem('favorites'); // Remove favorites from localStorage
    setFavorites([]); // Clear the favorites state
  };
console.log(favorites)
  return (
    <>
      <div className={styles.main_con}>
        <h1 className={styles.heading}>Your Favourite Content</h1>

        {/* Don't show the Remove All Button */}
        {favorites.length > 0 ? (
          <button className={styles.removebtn} onClick={handelRemoveall}>Remove all</button>
        ) : (
          <Link href="/"><p className={styles.p}>Oops!!! No content <br />Add movies to favorites</p></Link>
        )}

        {/* Don't show the container */}
        {favorites.length > 0 ? (

          <div className={styles.favoriteMovies}>
          {favorites.map((movie, index) => (
            <div key={index} className={styles.favoriteMovieCard}>
              <Link href={`/${movie.id}`}><img className={styles.img} src={movie.img} alt={movie.title} /></Link>
              {/* <h3 className={styles.title}>{movie.id}</h3> */}
              <Link href={`/${movie.id}`}><h3 className={styles.title}>{movie.title}</h3></Link>
              <button className={styles.removebtn} onClick={() => handelRemove(index)}>Remove</button>
            </div>
          ))}
        </div>) : ("")}
                
      </div>
    </>
  );
};

export default Fav;
