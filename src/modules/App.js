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
    ani.play(); ani.pause();
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

export function getTranslateValue(e, offset = 40) {
  let relX = (e.clientX * 100) / window.innerWidth;
  let relY = (e.clientY * 100) / window.innerHeight;
  let translateX = - (((offset * relX) / 100) - (offset / 2));
  let translateY = - (((offset * relY) / 100) - (offset / 2));
  return [translateX, translateY];
}