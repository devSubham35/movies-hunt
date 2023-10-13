'use client'
import styles from './Navbar.module.css'
import Link from 'next/link'

/**
 * @component Navbar
 * @props {}
 * @returns 
 */


function Navbar() {

    const handelSearch = (event) => {

        const search = event.target.value;
        // console.log(value)
        // localStorage.setItem('search', JSON.stringify(search_value));

    }



    return (

        <>
            <div className={styles.header}>
                <nav className={styles.nav} >

                    <Link href="/" className={styles.logo}>Movies Hunt</Link>

                    <div className={styles.menu_items}>
                        <Link href="/" className={styles.items}>Home</Link>
                        <Link href="/fav" className={styles.items}>Favourite</Link>
                        {/* <Link href="#" className={styles.items}>Anime</Link>
    <Link href="#" className={styles.items}>Webseries</Link> */}
                    </div>

                    {/* <div className={styles.search_con}>
    <input className={styles.search} type="text" placeholder="Search Here" onChange={(event) => { handelSearch(event) }} />
    <button className={styles.btn}>Search</button>
</div> */}

                </nav>
            </div>
        </>

    )
}

export default Navbar
