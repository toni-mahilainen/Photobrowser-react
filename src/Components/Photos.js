import React from 'react'
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import './Photos.css'

const Photos = ({ photos }) => {
    console.log('photos', photos);
    return (
        <div>
            {
                photos.length !== 0 ?
                    <div className='photos-container'>
                        {photos.map(photo =>
                            <Link className='thumbnail-link' key={photo.id} to={`/photo/${photo.id}`}>
                                <img className='thumbnail-img' src={photo.thumbnailUrl} alt='Thumbnail' />
                            </Link>
                        )}
                    </div> : <div className='no-more-photos'><h2>No more photos :)</h2></div>
            }
=======
=======
import { Link } from 'react-router-dom';
import './Photos.css'
>>>>>>> c3f2200 (Sivun vaihto kesken)

const Photos = ({ photos }) => {
    console.log('photos', photos);
    return (
        <div>
<<<<<<< HEAD
            <h1>Hello</h1>
            {photos ? photos.map(photo => <p>{photo.title}</p>) : null}
>>>>>>> 56afb5c (Kaikki kuvat palvelimelta. Tilan päivitys reduxilla)
=======
            <div className='photos-container'>
                {photos.map(photo =>
                    <Link className='thumbnail' key={photo.id} to={`/photo/${photo.id}`}>
                        <img src={photo.thumbnailUrl} alt='Thumbnail' />
                    </Link>)}
            </div>
>>>>>>> c3f2200 (Sivun vaihto kesken)
        </div>
    );
}

export default Photos