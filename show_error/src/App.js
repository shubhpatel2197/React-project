import './App.css';
import Table from './Components/Table'



function App() {

  const dataarray = []

  





  return (

    // https://github.com/academind/react-complete-guide-code/tree/08-practice-project/code/project-2/08-finished

    // real implimantation of blur background --> https://github.com/academind/react-complete-guide-code/tree/09-fragments-portals-refs/code/04-finished





    <div className="App">
     
     <Table data={dataarray}/>
    
     {dataarray.length===0 && <p className="output">No Data</p>}
    </div>
  );
}

export default App;
