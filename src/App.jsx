import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BackgroundBlur } from './Components/Background Blur/BackgroundBlur';
import { User } from './Components/User/user';
import { MyContext } from './Components/Context/MyContext';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyContext>
        <BackgroundBlur />
        <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
          <User />
        </div>
      </MyContext>
    </>
  )
}

export default App
