import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { pagesRoutes } from './constants/pageUrls';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            {pagesRoutes.map((page) => (
              <Route path={page.path} element={page.element} key={'/'} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
