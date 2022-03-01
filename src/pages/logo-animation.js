import React, { useEffect } from 'react';
import Logo from 'src/components/presentation/Logo';

export default function LogoAnimation() {

  useEffect(() => {
    document.body.classList.add('page');
  }, [])

  return (
    <Logo />
  )
}
