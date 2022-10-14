import React, { useEffect, useState } from 'react';
import letters from './letters';
import styles from './Type.module.scss';

const word = ['B', 'R', 'Dot', 'S', 'T', 'O', 'R', 'M'];

/* console.log(letters); */

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function updateLetter(combination) {
  const logoChars = document.querySelectorAll('[data-letter]');
  combination.forEach((variant, index) => {
    logoChars[index].childNodes.forEach(child => child.classList.remove(styles.visible));
    logoChars[index].children[variant].classList.add(styles.visible);
  });
}

export default function Type() {
  let combination = Array(8).fill(0).map(() => getRandomInt(7));
  useEffect(() => { updateLetter(combination) }, []);

  /* useEffect(() => {
    let letterChangeTimeout;

    function changeLetter() {
      const randomIndex = getRandomInt(combination.length);
      const charToChange = word[randomIndex];
      const letterVariantArray = letters[charToChange];
      const nextCombination = combination.map((item, i) => {
        if (i === randomIndex) {
          return getRandomInt(letterVariantArray.length);
        } else {
          return item;
        }
      });
      combination = nextCombination;
      updateLetter(nextCombination);

      letterChangeTimeout = setTimeout(changeLetter, getRandomIntInRange(1000, 4000));
    }

    letterChangeTimeout = setTimeout(changeLetter, getRandomIntInRange(1000, 4000));

    return () => clearTimeout(letterChangeTimeout);
  }, []); */

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
                      <div key={`letter-${index}`}>
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
