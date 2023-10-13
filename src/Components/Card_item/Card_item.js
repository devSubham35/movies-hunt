
import React, { useState, useEffect } from 'react';
import Styles from './Card_items.module.css';
import Link from 'next/link';

const Movies_items = (props) => {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    // Check if the movie is in localStorage when the component mounts
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorited(favorites.some((movie) => movie.title === props.title));
  }, [props.title]);

  const handleAddToFavorites = () => {
    // Get existing favorites from localStorage or initialize an empty array
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Check if the movie title is already in favorites
    if (!favorites.some((movie) => movie.title === props.title)) {
      // Add the movie to favorites with title, image, and description
      favorites.push({
        title: props.title,
        img: props.img,
        id: props.id,
      });

      // Update localStorage with the new favorites
      localStorage.setItem('favorites', JSON.stringify(favorites));
      // console.log('Added to favorites:', props.title);


      // Update the component's state
      setIsFavorited(true);
    }
  };

  return (
    <>
      <div className={Styles.card}>
        <Link href={`/${props.id}`}><img className={Styles.pic} src={props.img} alt="Card image cap" /></Link>
        <div className={Styles.card_body}>
          <div className={Styles.card_text}>
            <Link href={`/${props.id}`} className={Styles.card_title}>{props.title}</Link>
            <Link href={`/${props.id}`} className={Styles.card_des}>{props.des}</Link>
          </div>
          {isFavorited ? (
            <p className={Styles.addToFav}>Added to Favorites !!!</p>
          ) : (
            <button onClick={handleAddToFavorites} className={Styles.btn}>
              Add to Favourite
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Movies_items;
