import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import HomePage from './pages/home/home' 
import PracticePage from './pages/practice/content'
import './App.css'

const NAVIGATION_ARRAY=[
  {id:1,pageName:"Home",url:"/",page:<HomePage/>},
  {id:2,pageName:"Practice",url:"/practice",page:<PracticePage/>},
]



function NavFooter(){
  return(
     
<footer className="sticky bottom-0 bg-white border-t border-gray-200 pb-safe">
 
  <div className="flex justify-around items-center h-16">
    {NAVIGATION_ARRAY.map((eachLink)=>(<Link 
      className="flex flex-col items-center justify-center gap-1 text-[var(--primary-color)]"
      to={eachLink.url} 
      key={eachLink.id}
    >
      <span className="material-symbols-outlined">{eachLink.pageName}</span>
      <p className="text-xs font-medium">{eachLink.pageName}</p>
    </Link>))}
  
  </div>
   
</footer>
    

  )
}

function App() {
  
  return (
    <BrowserRouter>
     <div className="bg-gray-50 relative flex h-auto min-h-screen w-full flex-col justify-between group/design-root"
      // style="font-family: Inter, 'Noto Sans', sans-serif"
    >
    

      <div className="flex-grow"> 
  <Routes>
    {NAVIGATION_ARRAY.map((eachRoute)=>(
      <Route path={eachRoute.url} element={eachRoute.page}/>
     ))} 
   </Routes>
   </div>
<NavFooter></NavFooter>
</div>
</BrowserRouter>
    
  )
}

export default App
