import { useEffect, useState } from 'react';
import breakpoints from 'src/utils/breakpoints';

export default function useMediaQuery(breakpoint) {
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    const query = `(max-width: ${breakpoints[breakpoint]})`;
    setMatches(window.matchMedia(query).matches);
  }, []);

  return matches;
}
