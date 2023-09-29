import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: true,
  save: false,
  savedVideos: [],
  toggleTheme: () => {},
  toggleSave: () => {},
})

export default NxtWatchContext
