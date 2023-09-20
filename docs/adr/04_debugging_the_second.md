# New approach to debugging the WebXR application 🐛

Since compiling and building my own mobile browser to get the console in Xcode did not go as planned, I decidet to look for alternatives. As in some of the other projects students mentioned an npm package named eruda to get the console output directly into the app. Another alternative would be to render labels that are set directly in the program code into the application. But this second alternative would not be very practical, as textes would need to be manually set and the default debugging/log output would not be accessible that way.

I decided to utilize [Eruda](https://github.com/liriliri/eruda) for this job.
It is an npm package that offers a console for mobile browsers.

## Status

accepted ✅

## Context

The ability for efficient debugging is crucial for development. Since the XRViewer browser by mozilla doesnt come with a console or even a plug-in that offers such functionality, i decidet to take things into my own hand and deliver a console for debugging directly with the application code. This is done by utilizing eruda.

## Decision

Onscreen console output easily accessible for debugging and logging purposes for efficient development.
Furthermore, it enables us to pull up a console at any point in the app usage by navigating to this URL:
```js
javascript:(function () { var script = document.createElement('script'); script.src="https://cdn.jsdelivr.net/npm/eruda"; document.body.append(script); script.onload = function () { eruda.init(); } })();
```

## Consequences

Additional dependencies and eventually security vulnerabilities.