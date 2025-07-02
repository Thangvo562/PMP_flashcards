import { useNavigate } from 'react-router-dom';
import AppButton from '../components/AppButton';

// Routes for navigation between different pages
const ROUTES = {
  STUDY: '/study',    // Study flashcards page
  QUIZ: '/quiz',      // Quiz mode page
  STATS: '/stats',    // Statistics page
};

// Button labels for the main navigation options
const LABELS = {
  STUDY: 'Study Flashcards',
  QUIZ: 'Quiz Mode',
  STATS: 'Statistics Page',
};

/**
 * Home Component
 * 
 * The main landing page of the PMP Flashcards application.
 * Displays a welcome message and three main action buttons:
 * - Study Flashcards
 * - Quiz Mode
 * - Statistics Page
 */
const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    // Full viewport container with centered content
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f5f6fa',  // Light gray background
    }}>
      {/* Container for title, welcome message and navigation buttons */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>
        {/* Main title */}
        <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem', color: '#222' }}>PMP Flashcards</h1>
        
        {/* Welcome message */}
        <p style={{ marginBottom: '2rem', fontSize: '1.2rem', color: '#555' }}>Welcome, choose an activity to start</p>
        
        {/* Study Flashcards button */}
        <AppButton
          label={LABELS.STUDY}
          color="primary"
          onClick={() => navigate(ROUTES.STUDY)}
          ariaLabel="Start studying flashcards"
        />
        
        {/* Quiz Mode button */}
        <AppButton
          label={LABELS.QUIZ}
          color="success"
          onClick={() => navigate(ROUTES.QUIZ)}
          ariaLabel="Start quiz mode"
        />
        
        {/* Statistics Page button */}
        <AppButton
          label={LABELS.STATS}
          color="secondary"
          onClick={() => navigate(ROUTES.STATS)}
          ariaLabel="View statistics page"
        />
      </div>
    </div>
  );
};

export default Home; 