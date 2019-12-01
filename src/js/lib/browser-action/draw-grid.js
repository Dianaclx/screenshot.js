const removeWithFadeOut = (el, speed) => {
  const seconds = speed / 1000;
  el.style.cssText = `transition: opacity ${seconds}s ease; opacity: 0`;
  setTimeout(() => el.remove(), speed);
};

const createCanvas = (screenshot, width, height) => {
  const el = document.createElement('canvas');
  const ctx = el.getContext('2d');
  ctx.drawImage(screenshot.image, 0, 0, width, height);
  return el;
};

const onDeleteClick = (screenshotEl, screenshot) => {
  const el = screenshotEl.querySelector('.delete');
  el.addEventListener('click', (event) => {
    event.preventDefault();
    removeWithFadeOut(screenshotEl, 500);
    chrome.runtime.sendMessage({action: 'remove-screenshot', removedId: screenshot.id});
  });
};

const onCopyClick = (screenshotEl, screenshot) => {
  const el = screenshotEl.querySelector('.copy');
  el.addEventListener('click', (event) => {
    const clipItem = new ClipboardItem({"image/png": screenshot.blob});
    navigator.clipboard.write([clipItem]);
  });
};

const createFilename = (screenshot) => {
  return `screenshot_${screenshot.id}.png`
};

const drawGrid = function(page) {
  const count = page.SCREENSHOT_COUNT;
  const grid = document.getElementById('screenshot-grid');

  /* Draw screenshots grid */
  page.screenshots.forEach(function(screenshot) {
    const screenshotEl = document.querySelector('.screenshot-template').cloneNode(true);
    screenshot.createBlob().then(([_, urlToBlob]) => {
      onDeleteClick(screenshotEl, screenshot);
      onCopyClick(screenshotEl, screenshot);
      screenshotEl.querySelector('.image').prepend(createCanvas(screenshot, 200, 200));
      screenshotEl.querySelector('.image').setAttribute('href', urlToBlob);
      screenshotEl.querySelector('.save').setAttribute('href', urlToBlob);
      screenshotEl.querySelector('.save').setAttribute('download', createFilename(screenshot));
      screenshotEl.querySelector('.loading-text').remove();
      screenshotEl.querySelectorAll('.hidden').forEach((screenshot) => screenshot.classList.remove('hidden'));
    });
    screenshotEl.classList.remove('hidden');
    grid.appendChild(screenshotEl);
    feather.replace();
  });

  /* Redraw screenshots grid when screenshot is taken while browser_action.html
     is open.*/
  const id = setInterval(() => {
    if(count < page.SCREENSHOT_COUNT) {
      grid.innerHTML = '';
      clearInterval(id);
      drawGrid(page);
    }
  }, 100);

  /* Tooltips */
  tippy('.copy', {
    content: 'Copied screenshot',
    trigger: 'click',
    placement: 'bottom',
    multiple: true,
    ignoreAttributes: true,
    onShow(tip) {
      setTimeout(tip.hide, 500);
    }
  });

  tippy('a[data-tippy-content]', {
    placement: 'bottom',
    trigger: 'mouseenter',
    multiple: true
  });
};

export default drawGrid
