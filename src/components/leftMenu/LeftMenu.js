import React from 'react'
import './LeftMenu.scss'

const LeftMenu = () => {
  return (
    <div className='leftMenu'>
        <div className='spotifyLink'>
            <img></img>
            <a>Spotify</a>
        </div>
        <div className='homePage'>
            <img></img>
            <a>Anasayfa</a>
        </div>
        <div className='search'>
            <img></img>
            <a>Ara</a>
        </div>
        <div className='bookcase'>
            <img></img>
            <a>Kitaplığım</a>
        </div>
        <div className='playlist'>
            <img></img>
            <a>Çalma Listesi</a>
        </div>
        <div className='favorites'>
            <img></img>
            <a>Beğend,klerim</a>
        </div>
        <div className='language'>
            <img></img>
            <a>Dil</a>
        </div>
    </div>
  )
}

export default LeftMenu