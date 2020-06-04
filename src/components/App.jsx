import React from 'react';
import Cards from './Cards';
import FilterTransfer from './FilterTransfer';

const App = () => (
  <>
    <FilterTransfer />
    <Cards />
  </>
);

// export default class App extends React.Component {
//     state = {
//     searchIdLink: 'https://front-test.beta.aviasales.ru/search',
//     getTicketsLink: 'https://front-test.beta.aviasales.ru/tickets?searchId=',
//     tickets: [],
//   };


// }


export default App;
