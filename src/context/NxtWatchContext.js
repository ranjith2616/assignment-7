import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: false,
  savedVideos: [],
  toggleTheme: () => {},
  toggleSave: () => {},
})

export default NxtWatchContext
