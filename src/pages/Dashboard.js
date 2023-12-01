import React from 'react'
import CoinList from '../CoinList'
import SearchableDropdown from '../SearchableDropdown'
import AccountList from '../AccountList'
import TradeForm from '../TradeForm'

const Dashboard = () => {



    return <div className='dark:text-white '>Dashboard
    
    <div>
<TradeForm />

        

        <AccountList/>
    </div>    
    </div>
}

export default Dashboard
