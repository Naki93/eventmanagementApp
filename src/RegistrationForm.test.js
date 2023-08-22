import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';

test('submitting the registration form should show success alert', async () => {
  render(
    
      <RegistrationForm />
    
  );

  // Fill in form fields
  const usernameInput = screen.getByLabelText('Username:');
  fireEvent.change(usernameInput, { target: { value: 'user@example.com' } });

  const passwordInput = screen.getByLabelText('Password:');
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  const isAdminCheckbox = screen.getByLabelText('Admin');
  fireEvent.click(isAdminCheckbox);

  // Submit the form
  const registerButton = screen.getByText('Register');
  fireEvent.click(registerButton);

  

  
});


test('renders RegistrationForm component correctly', () => {
    const { container } = render(<RegistrationForm />);
  
    expect(container).toMatchSnapshot();
  });