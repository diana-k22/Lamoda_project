import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
    return(
        <div className='notFoundPage container'>
            <p className='notFoundPage-oops'>Oops!</p>
            <p className='notFoundPage-text'>404 - Page not found</p>
            <p className='notFoundPage-description'>The page you are looking for might have been removed had its name changed or is temporarily unavailable. </p>
            <button className='notFoundPage-btn'> <Link className='notFoundPage-link' to='/'>GO TO HOMEPAGE</Link></button>
           
        </div>
    )
}

