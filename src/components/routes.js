import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

export const routes = [
  { path: '/', element: <AboutMe /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/contact', element: <Contact /> },
  { path: '/resume', element: <Resume /> },
];