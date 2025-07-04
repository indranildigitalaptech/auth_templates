import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Login from '@/app/(auth)/login/page';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} alt={props.alt || 'mocked'} />,
}));

// Mock toast
jest.mock('react-hot-toast', () => ({
  toast: {
    success: jest.fn(),
  },
}));

// Mock useRouter
const push = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push,
  }),
}));

describe('Login Component', () => {
  beforeEach(() => {
    render(<Login />);
  });

  test('renders login form inputs and button', () => {
    expect(screen.getByTestId('email')).toBeInTheDocument();
    expect(screen.getByTestId('password')).toBeInTheDocument();
    expect(screen.getByTestId('login-button')).toBeInTheDocument();
  });

  test('submit button is disabled when form is invalid', () => {
    expect(screen.getByTestId('login-button')).toBeDisabled();
  });

  test('shows validation errors when submitting empty form', async () => {
    fireEvent.click(screen.getByTestId('login-button'));

    await waitFor(() => {
      expect(screen.getByText(/email is a required field/i)).toBeInTheDocument();
      expect(screen.getByText(/password is a required field/i)).toBeInTheDocument();
    });
  });

  test('validates invalid email format', async () => {
    fireEvent.change(screen.getByTestId('email'), {
      target: { value: 'invalid' },
    });
    fireEvent.blur(screen.getByTestId('email'));

    fireEvent.change(screen.getByTestId('password'), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByTestId('login-button'));

    await waitFor(() => {
      expect(screen.getByText(/enter a valid email address/i)).toBeInTheDocument();
    });
  });

  test('submits valid login data and shows toast', async () => {
    fireEvent.change(screen.getByTestId('email'), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByTestId('password'), {
      target: { value: 'Password@123' },
    });

    fireEvent.click(screen.getByTestId('login-button'));

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('Login successful!');
    });
  });

  test('toggles password visibility', () => {
    const passwordInput = screen.getByTestId('password');
    const toggle = screen.getByTestId('toggle-password');

    // Initially: password
    expect(passwordInput).toHaveAttribute('type', 'password');

    // Click to show password
    fireEvent.click(toggle);
    expect(passwordInput).toHaveAttribute('type', 'text');

    // Click again to hide password
    fireEvent.click(toggle);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  test('navigates to forgot password page', () => {
    const forgotBtn = screen.getByText(/forgot password/i);
    fireEvent.click(forgotBtn);
    expect(push).toHaveBeenCalledWith('/forgot-password');
  });
});
