import React from 'react'
import Logo from './Logo'

const Sidebar = () => {
  return (
      <aside className='w-64' aria-label='Sidebar'>
          <div className='py-4 px-3 bg-gray-50 rounded dark:bg-gray-800'>
              <Logo/>
              <ul className='space-y-2'>
                  <li>
                      <a
                          href='#'
                          className='flex flex-items p-2 text-base font-normal rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                      >
                          <svg
                              className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                              fill='currentColor'
                              viewBox='0 0 20 20'
                              xmlns='http://www.w3.org/2000/svg'
                          >
                              <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path>
                              <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path>
                          </svg>
                          <span className='ml-3'>Dashboard</span>
                      </a>
                  </li>

                  <li>
                      <a
                          href='#'
                          className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                      >
                          <svg
                              className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                              fill='currentColor'
                              viewBox='0 0 20 20'
                              xmlns='http://www.w3.org/2000/svg'
                          >
                              <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'></path>
                          </svg>
                          <span className='flex-1 ml-3 whitespace-nowrap'>Analytics</span>
                          <span className='inline-flex font-medium text-sm rounded-full bg-gray-200 px-2 dark:bg-gray-600 dark:text-gray-100'>
                              Pro
                          </span>
                      </a>
                  </li>
                  
              </ul>
          </div>
      </aside>
  )
}

export default Sidebar