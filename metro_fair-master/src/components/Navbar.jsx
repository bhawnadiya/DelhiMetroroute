// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Delhi_Metro_logo.svg
//         <nav className="bg-white border-gray-200 w-full ">
//   <div className="max-w-screen-xl flex flex-wrap gap-10 mx-28 p-4">

//       <img
//         src="/640px-Delhi_Metro_logo.svg.png"
//         className="h-8"
//       />
      
//       <span className="self-center text-2xl font-semibold whitespace-nowrap ">
//         MetroRouteXpert
//       </span>
//   </div>
// </nav>

//     </div>
//   )
// }

// export default Navbar
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 w-full">
      <div className="max-w-screen-xl flex items-center gap-4 mx-auto px-4 py-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Delhi_Metro_logo.svg/640px-Delhi_Metro_logo.svg.png"
          alt="Delhi Metro Logo"
          className="h-8 w-auto"
        />
        <span className="text-2xl font-semibold text-gray-800">
          MetroRouteXpert
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
