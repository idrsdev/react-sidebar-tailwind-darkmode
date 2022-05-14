import React, { useContext } from 'react'
import {ThemeContext} from './ThemeContext'

import {FaSun, FaMoon} from 'react-icons/fa'

const Toggle = () => {
  const {theme,setTheme} = useContext(ThemeContext)

  return (
      <div className='transition ease-in-out duration-500 rounded-full p-2'>
          {theme === 'dark' ? (
              <FaSun
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className='text-gray-500 text-2xl dark:text-gray-400 cursor-pointer'
              />
          ) : (
              <FaMoon
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className='text-gray-500 text-2xl dark:text-gray-400 cursor-pointer'
              />
          )}
      </div>
  )
}

export default Toggle