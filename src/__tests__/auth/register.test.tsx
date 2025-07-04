import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Registration from '@/app/(auth)/registration/page';
import { toast } from 'react-hot-toast';

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

describe('Registration Component (with testId)', () => {
  beforeEach(() => {
    render(<Registration />);
  });

  test('renders all input fields and button', () => {
    expect(screen.getByTestId('fname')).toBeInTheDocument();
    expect(screen.getByTestId('lname')).toBeInTheDocument();
    expect(screen.getByTestId('email')).toBeInTheDocument();
    expect(screen.getByTestId('mobile')).toBeInTheDocument();
    expect(screen.getByTestId('password')).toBeInTheDocument();
    expect(screen.getByTestId('confirmPassword')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });


  test('shows error for invalid email and mobile number', async () => {
    fireEvent.change(screen.getByTestId('email'), {
      target: { value: 'invalidemail' },
    });
    fireEvent.blur(screen.getByTestId('email'));

    fireEvent.change(screen.getByTestId('mobile'), {
      target: { value: '123456' },
    });
    fireEvent.blur(screen.getByTestId('mobile'));

    fireEvent.click(screen.getByTestId('submit-button'));

    await waitFor(() => {
      expect(screen.getByText(/Enter a valid email address/i)).toBeInTheDocument();
      expect(
        screen.getByText(/Mobile number must start with 0 and contain only digits/i)
      ).toBeInTheDocument();
    });
  });

  test('submits form with valid data and shows success toast', async () => {
    fireEvent.change(screen.getByTestId('fname'), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByTestId('lname'), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByTestId('email'), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByTestId('mobile'), {
      target: { value: '0123456789' },
    });
    fireEvent.change(screen.getByTestId('password'), {
      target: { value: 'Test@1234' },
    });
    fireEvent.change(screen.getByTestId('confirmPassword'), {
      target: { value: 'Test@1234' },
    });

    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).not.toBeDisabled();

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('Registration successful!');
    });
  });

  test('disables submit button when form is invalid', () => {
    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).toBeDisabled();
  });
});
