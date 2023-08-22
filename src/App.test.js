
// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';


// test('renders App component correctly', () => {
//   const { container } = render(<App />);
//   expect(container).toMatchSnapshot();
// });

// import React from 'react';
// import { render } from '@testing-library/react';
// import { MemoryRouter, Routes, Route , Router} from 'react-router-dom';
// import App from './App';

// test('renders App component correctly', () => {
//   const { container } = render(<App />);

//   expect(container).toMatchSnapshot();
// });
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';

test('renders App component correctly', () => {
  const { container } = render(
    
        <App />
  );

  expect(container).toMatchSnapshot();
});

