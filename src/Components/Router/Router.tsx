import React, { FC } from "react";


import AdminContent from '../AdminContent/adminContent';
import { Routes, Route } from 'react-router-dom';




interface RouterI {}
 const Router: FC<RouterI> = ({}) => {
  return (
      <Routes>
        <Route path="/main" element={<AdminContent/>} />
        <Route path="/grantfilling" element={<AdminContent/>} />

        <Route
          path="/events"
          element={<AdminContent/>}
        />
      </Routes>
  );
};

export default Router
