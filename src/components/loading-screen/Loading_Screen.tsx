import React from 'react'
import './loading_screen.css'

const Loading_Screen = () => {
    return (
        <div className='bg-dark'>
            <div id="load" className=' fullscreen bg-dark h-100 overflow-hidden w-100'>
                <div>G</div>
                <div>N</div>
                <div>I</div>
                <div>D</div>
                <div>A</div>
                <div>O</div>
                <div>L</div>
            </div>
        </div>
    )
}

export default Loading_Screen