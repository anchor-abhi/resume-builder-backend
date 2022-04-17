
import ResponsiveAppBar from "./components/navbar";
import DownloadResume from "./components/downloadResume";

function App() {
  return (
    <div style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}} className="App">
      <ResponsiveAppBar />
      <DownloadResume />
    </div>
  );
}

export default App;
