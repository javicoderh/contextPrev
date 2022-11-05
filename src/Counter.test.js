import { fireEvent, getByText, render, screen } from '@testing-library/react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import App from './App';
import { Counter, DoubleCounter } from './componentes/counter';

test ("first time counter renders", ()=> {

  render (<Counter />);
  const count = screen.getByText ("0");
  expect(count).toBeInTheDocument();
});

test ("first time DoubleCounter renders", ()=> {

  render (<DoubleCounter />);
  const count = screen.getByText ("2");
  expect(count).toBeInTheDocument();    
}); 

