import drawGrid        from './browser-action/draw-grid.js';
import drawCommandHelp from './browser-action/draw-command-help.js';
import includeHTML     from './browser-action/include-html.js';
import tippyHelp       from './browser-action/tippy-help.js';

chrome.runtime.getBackgroundPage((page) => {
  const app = page.app;
  app.getKeyboardCommands().then((commands) => {
    includeHTML().then((nodes) => {
      drawGrid(page);
      commands.forEach(drawCommandHelp);
      feather.replace();
      tippyHelp();
    });
  });
});
