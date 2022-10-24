import './style.scss'

import { Route,Routes } from 'react-router-dom'
import { Nav } from './Components/Nav'
import { MyBlog } from './Components/MyBlog'
import { AddBlog } from './Components/AddBlog'



const App = () =>{
  return(
    <div>
      <Nav/>
      
      <Routes >
        <Route path='/' element={<MyBlog/>}/>
        <Route index path='/myblog'  element={<MyBlog/>}/>
        <Route path='/addblog' element={<AddBlog/>}/> 
       
      </Routes>
      
    </div>
  )
}
export default App