### ![logo](src/images/camera24.png) Screenshot

A browser extension that takes screenshots.

### Features

* Takes a screenshot of the visible area on the current tab in response to
  a key stroke  
  (`Ctrl + Shift + X` on PCs and  `Command + Shift + X` on Macs).

* Takes a screenshot of the video being played on the current tab in response to
  a key stroke  
  (`Ctrl + Shift + V` on PCs and  `Command + Shift + V` on Macs).

* Stores and previews the last 4 screenshots in temporary browser memory  
  (With the option to open them in a new tab, save them to disk, copy them to
   the clipboard and delete them from memory).

* Allows a user to select the number of screenshots stored in temporary browser memory.  
  (The default is 4).

* Allows a user to select between capturing videos at their natural size or at
  their visible size.   
  (The default is visible size)

### Screenshots

#### v0.8.0

* Shows the view that lets you preview screenshots, and perform actions on
  them.  
  (Such as open, save, copy, and delete).

  ![screenshot](./webstore-assets/v0.8.0/copy_screenshot_v0.8.0_1280x800.png)

* Shows the same view as the previous screenshot, but with the instructions on
  how to take screenshots visible.

  ![screenshot](./webstore-assets/v0.8.0/help_screenshot_v0.8.0_1280x800.png)

* Shows the settings view, with a drop down expanded.

  ![screenshot](./webstore-assets/v0.8.0/settings_screenshot_v0.8.0_1280x800-1.png)

#### Older screenshots

[Available in ./webstore-assets/](./webstore-assets/)

### Install

#### Web stores

* [Chrome Webstore](https://chrome.google.com/webstore/detail/screenshot/ehmcpclingghgidajkpodncclbginiak)

  __Version of Screenshot on the Chrome Webstore could be outdated__

  Screenshot gets flagged for manual review each time it's published on the
  Chrome Webstore. The manual review process is sometimes slow relative to the
  rate at which there are new versions of Screenshot.

  To get an idea, at the time of writing the current published version on
  the webstore is `v0.2.5` while the current version of Screenshot is `v0.7.0`,
  with `v0.8.0` almost complete.

  It's recommended to check how far behind the webstore version is before
  installing, and to consider installing from source if it's outdated.

* Firefox ...

  Coming soon.

#### From source

* Grab a copy of the extension:

      git clone https://github.com/rg-3/screenshot.js

* Convert the SCSS files to CSS  
  (This step requires the `scss` executable to be in `$PATH`):

      cd screenshot.js
      sh scripts/build.sh

* In your browser, open `chrome://extensions`.

* Enable the `Developer mode` checkbox.

* Click the `Load unpacked extension` button and point it at the `src/`
  directory in the cloned repository.

* Done!

### Dependencies

  * **Runtime dependencies**

    A runtime dependency is a dependency that's used while the extension is running.

    * Spectre.css  
      A minimalist CSS framework.

    * FeatherIcons  
      Provides icons

    * PopperJS, tippy.js  
      Provides popovers and tooltips

  * **Development dependencies**

    A development dependency is a dependency that's used to develop the extension.

      * SCSS  
        SCSS is a language that extends CSS with many useful features that make
        styling pages easier and more maintainable. It is trans-piled to CSS.

### Credit

  * Thanks and credit to
    [Double-J Design](http://www.iconarchive.com/artist/double-j-design.html)
    for authoring the green camera icons.

### License

MIT license. See [./LICENSE.txt](./LICENSE.txt) for details.

### ChangeLog

Available at [./CHANGELOG.md](./CHANGELOG.md)
