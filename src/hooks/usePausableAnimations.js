import { useState, useEffect } from 'react';

export default function usePausableAnimation(target = HTMLElement) {
  const [playState, setPlayState] = useState('paused');
  const [animatedElements, setAnimatedElements] = useState(null);

  // Cria um observer e seta os elementos animados no State
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      setPlayState(entries[0].isIntersecting ? 'running' : 'paused');
    }, { rootMargin: '120px 0px' });

    target ? observer.observe(target) : null;

    setAnimatedElements(target?.querySelectorAll('[data-animated]'));
    
    return () => {
      observer.disconnect();
    }
  }, []);

  useEffect(() => {
    animatedElements?.forEach(element => {
      element.style.animationPlayState = playState;
    })
  }, [playState]);

  console.log(playState);
}
