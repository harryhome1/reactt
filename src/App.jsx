// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { RevenueCard } from './components/RevenueCard'
// import { RevenueCard1 } from './components/RevenueCard1'
// import { TopDiv } from './components/TopDiv'
// import { OverviewComponent } from './components/OverviewComponent'
// import { Transactions } from './components/Transactions'
// import { Sidebar } from './components/Sidebar'



// function App() {

//   return (
//     <>
//     <TopDiv/>
//     <OverviewComponent/>
//     <div className='grid grid-cols-1 md:grid-cols-3'>

//     <RevenueCard1  nextPaymentDate="Today: 4pm" title={"Next Payout"} orderCount={"13"} amount={"88000"}/>
//     <RevenueCard  title={"Amount Pending"} orderCount={"15"} amount={"55000"}/>
//     <RevenueCard  title={"Amount Pending"} orderCount={"18"} amount={"99000"}/>
//     </div>
//     <Transactions/>
    
//     </> 
//   )
// }

// export default App
import { RevenueCard } from './components/RevenueCard';
import { RevenueCard1 } from './components/RevenueCard1';
import { TopDiv } from './components/TopDiv';
import { OverviewComponent } from './components/OverviewComponent';
import { Transactions } from './components/Transactions';
import { Sidebar } from './components/Sidebar';  // Import Sidebar component
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar Component, hidden on small screens and fixed on larger screens */}
      <div className="hidden md:block fixed h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 ml-0 md:ml-64">
        <TopDiv />
        <OverviewComponent />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RevenueCard1
            nextPaymentDate="Today: 4pm"
            title="Next Payout"
            orderCount="13"
            amount="88000"

          />
          <RevenueCard title="Amount Pending" orderCount="15" amount="55000" />
          <RevenueCard title="Amount Processed"  amount="29,99,000.19" />
        </div>
        <Transactions />
        {/* Footer Component */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
