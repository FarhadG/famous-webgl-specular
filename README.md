#Famous WebGL Specular Lighting
> Implementation for showcasing WebGL Mesh specular & glossiness

[![Build Status](https://travis-ci.org/Famous/engine-seed.svg?branch=master)](https://travis-ci.org/Famous/engine-seed)  [![Dependency Status](https://david-dm.org/famous/engine-seed.svg)](https://david-dm.org/famous/engine-seed) [![devDependency Status](https://david-dm.org/famous/engine-seed/dev-status.svg)](https://david-dm.org/famous/engine-seed#info=devDependencies)

Here's a simple <a href="https://api-te.famo.us/codemanager/v1/containers/96b9e1c9-668a-4ed2-80a2-eb22bb0a3a36/share" target="_blank">DEMO</a> showcasing an implementation of having WebGL and DOM events working together, with the same API. If you're interested in seeing this particular lighting model, here's an example with <a href="https://github.com/FarhadG/webgl-lights" target="_blank">raw WebGL</a>.

---

###Demo

There are four lights, rotating around randomly, emmitting a random color. The glossiness/specular attributes have been applied to the `Backdrop.js` and `Cube.js` files, which you can find within the `src` directory.

Go ahead and give it a try: <a href="https://api-te.famo.us/codemanager/v1/containers/96b9e1c9-668a-4ed2-80a2-eb22bb0a3a36/share" target="_blank">DEMO</a>

---

###Installation

```bash
git clone https://github.com/FarhadG/famous-webgl-specular.git
cd famous-webgl-specular
# rm -rf .git && git init && git commit -m "Make it so" # optionally reset git history
npm i # install dependencies
```

---

###Development
Run the dev server with ```npm run dev```

Now the dev server should be running on localhost:1618

Run the linters with ```npm run lint```

Run All Tests with ```npm test```

---

###Need help?

Please join us on the "famous-community" slack.

Sign up --> http://slack.famous.org/signup

Join the discussion --> http://slack.famous.org/

There is a bunch of learning material at --> http://famous.org/learn

There are api docs at -->
http://famous.org/docs


Do you think this readme needs work? So do we! Feel free to send a PR!!!

---

###LICENSE

MIT
