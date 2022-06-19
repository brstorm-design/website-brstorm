import { inOutCube } from "src/utils/easings";

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

export function getMaxHeight(elements = NodeList) {
  let height = 0;
  elements.forEach((element, index) => {
    if (index === 0 || index === elements.length - 1) {
      height += (element.clientHeight / 2);
    } else {
      height += element.clientHeight;
    }
  });
  height += 50 * (elements.length - 1);
  return height;
}

export function smoothScroll(href, offset = 150, duration = 1500, easing = inOutCube) {
  if (!href) return;
  let stop = false;

  let doc = document.documentElement;
  let startx = doc.scrollTop;
  let destx;
  let target;

  if (typeof href === 'string') {
    target = document.querySelector(href);
  } else if (typeof href === 'object') {
    target = href;
  } else {
    throw new TypeError('Parameter "href" must be of type `string` or `object`');
  }

  let offsetTop = target.getBoundingClientRect().top + window.scrollY;

  if (typeof offset === 'number') {
    destx = offsetTop - offset;
  } else if (offset === 'center') {
    destx = (offsetTop - (window.innerHeight / 2) + (target.clientHeight / 2));
  } else {
    throw new TypeError('Invalid `offset` value')
  }

  let start;
  let end;

  function trigger(timeStamp) {
    start = timeStamp;
    end = start + duration;
    draw(timeStamp);
  }

  function draw(now) {
    if (stop) return;
    if (now - start >= duration) stop = true;
    let p = (now - start) / duration;
    let val = easing(p);
    let x = startx + (destx - startx) * val;
    window.scrollTo(0, x);
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(trigger);
}

export function fillPlaceholders(string = '', replacement = {}, character = '|') {
  string = string.split(character).join('');
  for (const key in replacement) {
    string = string.replaceAll(key, replacement[key]);
  }
  return string;
}