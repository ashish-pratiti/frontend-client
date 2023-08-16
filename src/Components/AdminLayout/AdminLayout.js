import React, { useState } from 'react';
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const AdminLayout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const data = JSON.parse(localStorage.getItem('user'));
  
  return ( 
  <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%" >
      <Sidebar
      user={data || { }}
      isNonMobile={isNonMobile}
      drawerWidth="250px"
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar user={data || { }} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <Outlet />
      </Box>
  </Box>
  )
}

export default AdminLayout


// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import Navbar from '../Navbar'
// import Sidebar from '../Sidebar'

// const AdminLayout = () => {
//   return (
//     <div
//         style={{
//             width:'100%',
//             height:'100%',
//             border: '1px solid #ccc',
//             borderRadius: '10px',
//         }}
//     >
//       <Navbar/>
//       <div
//         style={{
//           display: 'flex',
//       }}
//       >
//       <Sidebar/>
//       <Outlet/>
//       </div>
//     </div>
//   )
// }

// export default AdminLayout