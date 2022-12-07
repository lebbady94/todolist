import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('should render same text passed to title prop', async () => {
  render(<Header title="My TODO list"/>)
  const headingElement =  screen.getByText(/my todo list/i);
  expect(headingElement).toBeInTheDocument();
});

it('should render same text passed to title prop', async () => {
  render(<Header title="My TODO list"/>)
  const headingElement =  screen.getByRole("heading", { name: "My TODO list"});
  expect(headingElement).toBeInTheDocument();
});

// FIND BY EXAMPLE

it('should render same text passed to title prop', async () => {
  render(<Header title="My TODO list"/>)
  const headingElement =  await screen.findByText(/my todo list/i);
  expect(headingElement).toBeInTheDocument();
});

// QUERY BY EXAMPLE

it('should render same text passed to title prop', async () => {
  render(<Header title="My TODO list"/>)
  const headingElement =  screen.queryByText(/fail/i);
  expect(headingElement).not.toBeInTheDocument();
});



