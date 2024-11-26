import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WalletScreen from "./pages/WalletPage/Wallet.page.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <WalletScreen />
    </>
  )
}

export default App
