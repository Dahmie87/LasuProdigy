import HomeMain from "./content"


function HomeHeader(){
 return(
    <header className="bg-white sticky top-0 z-10 shadow-sm">
          <div className="flex items-center p-4 ">
            <button
              className="flex items-center justify-center rounded-full h-10 w-10 bg-gray-100 text-gray-600 hover:bg-gray-200"
            >
              
<svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </button> 
            <h1 className="flex text-xl text-center font-bold text-gray-900">Home</h1>
             
          </div>
        </header>)
        
}


export default function HomePage(){
    return<><HomeHeader></HomeHeader>
    <HomeMain></HomeMain></>
}
