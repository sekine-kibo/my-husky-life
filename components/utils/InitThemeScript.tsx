import Script from 'next/script'
import React from 'react'

const InitThemeScript = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
        (function() {
          if (!('theme' in localStorage)) {
            console.log('No localStorage')
            const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
            localStorage.setItem('theme', theme)
            document.documentElement.classList.add(theme)
          }
        })();`
      }}
    />
  )
}

export default InitThemeScript
