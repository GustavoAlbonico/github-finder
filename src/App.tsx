import { Outlet } from "react-router-dom";

import css from './App.module.css';

function App() {

  return (
    <>
      <div className={css.app}>
        <h1>Github Finder</h1>
        <Outlet />
      </div>
    </>
  )
}

export default App;
