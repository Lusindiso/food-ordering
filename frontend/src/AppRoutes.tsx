import { Navigate, Route, Routes } from 'react-router-dom';
import Layouts from './Layouts/Layouts';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Layouts>Home Page</Layouts>}
      />
      <Route
        path='/user-profile'
        element={<span>User Profile page</span>}
      />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default AppRoutes;
