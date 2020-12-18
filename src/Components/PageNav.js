import React from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { nextPage, prevPage } from '../Reducers/limiterReducer';

const PageNav = ({ limiter }) => {
    const dispatch = useDispatch()
    const next = () => {
        const newLimiter = {
            ...limiter,
            start: limiter.start + 20
        }
        dispatch(nextPage(newLimiter))
    }

    const prev = () => {
        if (limiter.start !== 0) {
            const newLimiter = {
                ...limiter,
                start: limiter.start - 20
            }
            dispatch(prevPage(newLimiter))
        }
    }

    return (
        <div className='change-page'>
            <Button text='<<<<' onClick={prev} />
            <Button text='>>>>' onClick={next} />
        </div>
    );
}

export default PageNav;
