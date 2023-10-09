import Dashboard from "./components/Dashboard"
import AppLayout from "./layout/layout"

function App() {

  return (
    /*
      border-radius: 24px;
      border: 1.5px solid #ffffff6b;
      background: #cecece1a;
      backdrop-filter: blur(60px);
    */
    <div className=' bg-[#cecece1a] backdrop-blur-[60px]'>
     <AppLayout>
      <Dashboard />
     </AppLayout>
    </div>
  )
}

export default App
