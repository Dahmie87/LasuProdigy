import HomeMain from "./main"


function HomeHeader(){
 return(
    <header className="bg-white sticky top-0 z-10 shadow-sm">
          <div className="flex items-center p-4 justify-between">
            <h1 className="text-xl font-bold text-gray-900">Home</h1>
            <button
              className="flex items-center justify-center rounded-full h-10 w-10 bg-gray-100 text-gray-600 hover:bg-gray-200"
            >
              <span className="material-symbols-outlined text-2xl"> settings </span>
            </button>
          </div>
        </header>)
        
}


export default function HomePage(){
    return<><HomeHeader></HomeHeader>
    <HomeMain></HomeMain></>
}
