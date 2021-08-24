export class App {
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

export function handleIntersection(targets, animations) {
  function callback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animations.forEach(animatable => {
          animatable.forEach(animation => {
            if (animation.playState !== 'finished') {
              animation.play()
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