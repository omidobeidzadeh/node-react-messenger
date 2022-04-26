import { Routes,Route } from "react-router-dom";
import allRoutes from './Router/routes'

function App() {
  return (
    <>
      <Routes>
        {allRoutes.map((route, id) => {
          return <Route {...route} key={id} />;
        })}
      </Routes>
    </>
  );
}

export default App;