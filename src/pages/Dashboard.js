import React from 'react'
import CoinList from '../CoinList'
import SearchableDropdown from '../SearchableDropdown'
import AccountList from '../AccountList'

const Dashboard = () => {



    return <div className='dark:text-white '>Dashboard
    
    <div>
        <SearchableDropdown/> 

        <AccountList/>
    </div>    
    </div>
}

export default Dashboard
