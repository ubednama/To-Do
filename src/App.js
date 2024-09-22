import { ToDos } from './Components/ToDos';
import { Footer } from './Components/Footer';
import ThemeToggleButton from './Components/ThemeToggleButton';
import { useTheme } from './ThemeContext';

function App() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`bg-stone-900 grid grid-rows-[auto_1fr_auto] h-screen ${isDarkMode ? 'dark' : ''}`}>
      <ThemeToggleButton />
      <ToDos />
      <Footer />
    </div>
  );
}

export default App;
