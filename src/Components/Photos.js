import React from 'react'
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
        </div>
    );
}

export default Photos