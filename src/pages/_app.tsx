

import '../styles/global.scss';

import {PlayerContext} from '../contexts/PlayerContext';

import { Header } from '../components/Header';
import { Player } from '../components/Player';

import styles from '../styles/app.module.scss';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {

  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] =useState(0);
  const [isPlaying, setIsPlaying] =  useState(false);

  function handlePlayEpisode(episode) {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  };

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  return (
    <PlayerContext.Provider value={{ episodeList, currentEpisodeIndex: 0, handlePlayEpisode, togglePlay, isPlaying, setPlayingState}}>
    <div className={styles.wrapper}>
      <main>
      <Header />
      <Component {...pageProps} />
      </main>
      <Player />
    </div>
    </PlayerContext.Provider>
  )
}

export default MyApp
