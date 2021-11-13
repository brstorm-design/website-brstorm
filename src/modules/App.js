export class AnimationSequence {
  name = 'John';
  occupation = 'Developer';
  age = 35;

  constructor(name) {
    this.name = name;
  }
}

export function constructSequentialAnimation(targets, keyframes, options, interval) {
  let animations = [];
  let delay = options.delay;

  targets.forEach(target => {
    options.delay = delay;
    let ani = constructAnimation(target, keyframes, options);
    delay += interval;
    animations.push(ani);
    ani.play();
    ani.pause();
  });

  return animations;
}

export function constructAnimation(target, keyframes, options) {
  const effect = new KeyframeEffect(target, keyframes, options);
  return new Animation(effect, document.timeline);
}

// // // //

export function handleIntersection(targets, animations, onEnd) {
  function callback(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animations.forEach(animatable => {
          animatable.forEach(animation => {
            if (animation.playState !== 'finished' && animation.effect.target.parentElement.id === entry.target.id) {
              animation.play()
            }
            if (onEnd) {
              animation.finished.then(a => onEnd(a))
            }
          })
        })
      }
    })
  }
  const options = {
    rootMargin: '-200px 0px -200px 0px'
  }

  const observer = new IntersectionObserver(callback, options);
  targets.forEach(target => observer.observe(target));
}

/* let options = {
  duration: 600,
  easing: 'ease',
  fill: 'both'
}; */

export function getTranslateValue(e, offsets) {
  let relX = (e.clientX * 100) / window.innerWidth;
  let relY = (e.clientY * 100) / window.innerHeight;
  let rel = { x: relX, y: relY };

  return offsets.map(offset => {
    let obj = {};
    for (const axis in rel) {
      obj[axis] = calcTranslate(offset, rel[axis]);
    }
    return obj;
  })
}

function calcTranslate(amount, rel) {
  return (((amount * rel) / 100) - (amount / 2));
}

export function applyStyles(targets = [], translate = []) {
  targets.forEach((target, index) => {
    if (translate) {
      target.style.transform = `translate3d(${translate[index].x}px, ${translate[index].y}px, 0)`;
    }
  })
}