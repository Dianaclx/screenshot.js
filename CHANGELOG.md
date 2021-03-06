__Next__

* Delete __all__ properties belonging to a Screenshot object after the objects
  blob is revoked (using `revokeBlob()`). 

* Improve device recognition settings notification.  
  See [#6](https://github.com/rg-3/screenshot.js/issues/6) for more info.

* Resort `src/html`, `src/js`, `src/css`:  

  * The contents of `src/js/lib/` have been moved to `src/js/`.

  * `browser_action.html` renamed to `grid-page.html`.

  * `browser_action.css` renamed to `grid-page.css`.

  * `settings.html` renamed to `settings-page.html`.

  * `settings.css` renamed to `settings-page.css`.


* Change the max screenshots drop down options to:  
  4, 8, 12, 16, 20, 24, 28, 32.

* Move the remaining CSS files in `src/css` to `src/scss`.  
  Keep `src/css` for the CSS files that are generated from `src/scss`.

* Numerous improvements to the README and inline documentation in the
  source code.

__v0.8.0__

* Change the default number of screenshots stored in memory from 8 to 4.
  See https://github.com/rg-3/screenshot.js/issues/3 for more info.

* A loading spinner is shown until the screenshot grid begins to get drawn by
  the `grawGrid()` function. This change avoids a user seeing an empty white
  page for 1 or 2 seconds while the grid is waiting to be drawn, which occurs
  after HTML blobs are inserted by `includeHTML()`. Sometimes there's no wait,
  it seems to depend on the number of screenshots waiting to be processed.

* The settings and help icons are fixed in place, they follow scroll when
  there is more than 8 screenshots to browse, and they've been positioned to
  the center.

* Add a settings page that allows the user configure the extension.  
  (The two options that can be configured are described below).

* Add the option to select the number of screenshots to store in
  temporary browser memory (defaults to 4).

* Add the option to capture a video at its natural size or at its
  visible size (defaults to visible).

* Add includeHTML function (`src/js/browser-action/include-html.js`)

  includeHTML replaces one or more html elements with the contents of one or
  more `fetch()` requests. In the case of the extension, the HTML is served
  from the file system meaning there's no network latency  and is pretty much
  instantaneous. It supports template variables as well, and it allows
  `browser_action.html` and `settings.html` to share blobs of HTML between
  them. In the future it will become a separate project.

* Add SCSS

  * Add `src/scss`; contains the SCSS files that will be converted to CSS.

  * Add `scripts/build.sh` to convert SCSS to CSS.

  * This change introduces the need to "build" the extension,
    I tried to keep the complexity and dependencies at the
    bare minimum.

* Add `Spectre.css`, a minimalist CSS framework ~ 10kb

* Prevent clicking the help icon from jumping to the top of the browser action's
  window.

__v0.7.0__

* Add improved loading effect while waiting for a screenshot
  to become available.

* Change the tool tip on the `Delete` icon from "Delete screenshot" to
  "Delete screenshot from memory".

__v0.6.0__

* Store and preview up to 8 screenshots instead of 6.

__v0.5.2__

* Fix cross origin audio.

__v0.5.1__

* Update `background.js` to push onto `headers` instead of
 `details.responseHeaders` (typo fix).

__v0.5.0__

* Improve the display of notifications.  
  (By switching to generated notification IDs)

* On the Brave browser, when a screenshot of a video can't be captured because
  Brave is blocking all possible device recognition attempts or all possible
  cross-origin device recognition attempts, the extension will notify the user
  that's why a screenshot can't be captured.  

* Add support for taking a screenshot of a playing video loaded through an
  iframe.

*  Add support for taking a screenshot of a playing video on websites like `dailymail.co.uk`.
   The daily mail website loads video from another origin without setting the
   `Access-Control-Allow-Origin` header. It must be set to `*` or the video
   won't play because `crossorigin="anonymous"` has been set by
   `src/js/content-scripts/set-cross-origin.js`, which was introduced for Instagram support.

* Add support for taking a screenshot of a playing video on sites like Instagram.
  Instagram delivers video through another origin using CORS access controls,
  which require some extra work to support.
  (This change should see better support for other sites who work in a similar way
   as well.)

__v0.4.0__

* Remove horizontal scrollbar from screenshots of the visible tab.

* Restore the quality of visible tab screenshots.  
  (Bad quality screenshots were introduced in v0.3.0)

__v0.3.1__

* Fix silly typo in last release.

__v0.3.0__

* Remove vertical scroll bar from screenshots of the visible tab.

* Display a failure message when a video screenshot is attempted on a
  protected page that extensions can't inject code into (eg `chrome://*` pages).
  Prior to this a user wouldn't get a response.

__v0.2.5__

* Give preference to videos that visible and playing over videos that are just
  playing.

__v0.2.4__

* Don't take screenshots of videos that are visible and paused  
  (A video must be either visible and playing, or just playing to be captured).

__v0.2.3__

* Skip videos the browser considers "tainted", as it does not allow them to be
  exported.

* Improve the experience on websites like Twitter where there can be multiple
  videos on a page. When this happens we choose the first video that is visible
  and/or playing or the first that is visible and paused.  Otherwise we alert the
  user we couldn't find a video. This logic also applies to pages with a single
  video.

__v0.2.2__

* In `browser_action.html`, load JavaScript at the end of the document to let
 the browser parse the HTML first.

__v0.2.1__

* Reduce (visual) size of screenshot previews.

* Add light border around screenshot previews.

* Fix bug where screenshot previews had the bottom part cut off.

* Fix bug where icon tooltips for screenshots 4 to 6 would have `top` placement
  instead of `bottom` placement.

__v0.2.0__

* Add a help icon that opens a popover with information about how to take
  screenshots.

* Remove arrow from tooltips and popovers.

* Change default `capture-visible-tab` shortcut from `Ctrl + Shift + K` to
  `Ctrl + Shift + X`.

* Add ability to take a screenshot of the video on the current tab.  
  (Works on YouTube, etc).

* Insert `Press <shortcut> to take a screenshot` text after reading what
  shortcut the `capture-visible-tab` keyboard command is bound to (it can be changed
  to a custom shortcut by the user via the `chrome://extensions/shortcuts` page)
