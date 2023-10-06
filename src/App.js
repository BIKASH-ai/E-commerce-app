// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Home';
// import ProductInfo from './ProductInfo';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" exact component={Home} />
//         <Route path="/product/:id" component={ProductInfo} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import Routes from './Routes';

const App = () => {
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;