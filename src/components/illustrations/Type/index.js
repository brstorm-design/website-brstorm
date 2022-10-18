import React, { useEffect, useState } from 'react';
import letters from './letters';
import styles from './Type.module.scss';

const word = ['B', 'R', 'Dot', 'S', 'T', 'O', 'R', 'M'];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const keyframesIn = [
  {
    opacity: 0,
    transform: 'rotateX(180deg)',
  },
  {
    opacity: 1,
    transform: 'rotateX(360deg)',
  },
];
const keyframesOut = [
  {
    opacity: 1,
    transform: 'rotateX(0deg)',
  },
  {
    opacity: 0,
    transform: 'rotateX(180deg)',
  },
];
const options = { duration: 500, fill: 'both' };

function updateLetter(charToChange, nextVariantIndex, reflow) {
  const charElement = document.querySelectorAll('[data-letter]')[charToChange];
  const currentVariant = charElement.querySelector(`.${styles.visible}`);
  const nextVariant = charElement.children[nextVariantIndex];

  if (reflow) {
    charElement.style.width = nextVariant.querySelector('svg').width.baseVal.value + 'px';
  }

  charElement.animate(keyframesOut, { easing: 'ease-in', ...options }).finished.then(() => {
    currentVariant?.classList.remove(styles.visible);
    nextVariant?.classList.add(styles.visible);
    charElement.animate(keyframesIn, { easing: 'ease-out', ...options });
  });
}

export default function Type() {
  const [docVisibility, setDocVisibility] = useState('visible');
  let combination = Array(8).fill(0).map(() => getRandomInt(7));

  useEffect(() => {
    document.querySelectorAll('[data-letter]').forEach(letter => {
      letter.style.width = letter.querySelector('svg').width.baseVal.value + 'px';
    });
  }, []);

  useEffect(() => {
    let letterChangeTimeout;

    function changeLetter() {
      const randomIndex = getRandomInt(combination.length);
      const charToChange = word[randomIndex];
      const letterVariantArray = letters[charToChange];
      const nextCombination = combination.map((item, i) => getRandomInt(letters[word[i]].length));

      /* nextCombination.forEach((variant, index) => {
        updateLetter(index, variant, false);
      }); */

      updateLetter(randomIndex, getRandomInt(letterVariantArray.length), true);

      if (document.visibilityState === 'visible') letterChangeTimeout = setTimeout(changeLetter, 3000);
    }

    if (document.visibilityState === 'visible') letterChangeTimeout = setTimeout(changeLetter, 3000);

    return () => clearTimeout(letterChangeTimeout);
  }, [docVisibility]);

  useEffect(() => {
    const onVisibilityChange = () => setDocVisibility(document.visibilityState);
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => document.removeEventListener('visibilitychange', onVisibilityChange);
  }, []);

  return (
    <div>
      <h1>Type</h1>
      <div className={styles.logotype}>
        {
          word.map((char, charIndex) => {
            return (
              <div id={`${charIndex}_${char}`} key={`char-${charIndex}`} className={styles.char} data-letter>
                {
                  letters[char].map((letter, index) => {
                    const LetterVariant = letter;
                    return (
                      <div key={`letter-${index}`} className={index === 0 ? styles.visible : ''}>
                        <LetterVariant />
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
