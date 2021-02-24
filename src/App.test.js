import { render, screen } from '@testing-library/react';

import App from './App';
// import Donut from './components/navbar/DonutChart';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

// const Donut = require('./components/navbar/Donut');
// describe("render 2 times", ()=>{
//   const div = document.createElement("div");
//   ReactDOM.render(svg, div)
// })

// test('render donutItems 5 times', () => {
//   expect(6).toBe(6);
// });

// module.exports = Donut;