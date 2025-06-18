import React from 'react';

/**
 * Props interface for the AppButton component
 * @property {string} label - The text to display on the button
 * @property {() => void} onClick - Function to call when button is clicked
 * @property {'primary' | 'success' | 'secondary'} [color='primary'] - Button color variant
 * @property {string} [ariaLabel] - Accessibility label for screen readers
 * @property {React.CSSProperties} [style] - Additional custom styles to apply
 */
interface AppButtonProps {
  label: string;        // Text to show on the button
  onClick: () => void;  // Function to run when clicked
  color?: 'primary' | 'success' | 'secondary';  // Button color style
  ariaLabel?: string;   // Text for screen readers
  style?: React.CSSProperties;  // Custom styles to add
}

/**
 * Color configuration for different button variants
 * Each variant has a base color and a hover state color
 */
const COLORS = {
  primary: {
    background: '#2563eb',  // Blue
    hover: '#1d4ed8',      // Darker blue on hover
  },
  success: {
    background: '#22c55e',  // Green
    hover: '#16a34a',      // Darker green on hover
  },
  secondary: {
    background: '#a21caf',  // Purple
    hover: '#701a75',      // Darker purple on hover
  },
};

/**
 * AppButton Component
 * 
 * A reusable button component with consistent styling and hover effects.
 * Supports different color variants and accessibility features.
 * 
 * @param {AppButtonProps} props - Component props
 * @returns {JSX.Element} A styled button element
 */
export const AppButton: React.FC<AppButtonProps> = ({ label, onClick, color = 'primary', ariaLabel, style }) => {
  // Track if button is being hovered over
  const [hover, setHover] = React.useState(false);
  const btnColor = COLORS[color];

  return (
    <button
      aria-label={ariaLabel || label}
      onClick={onClick}
      style={{
        padding: '1rem 2rem',
        fontSize: '1.2rem',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        margin: '0.5rem 0',
        width: '220px',
        transition: 'background 0.2s',
        background: hover ? btnColor.hover : btnColor.background,
        ...style,
      }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      data-testid={`button-${label.replace(/\s+/g, '-').toLowerCase()}`}
    >
      {label}
    </button>
  );
};

export default AppButton; 