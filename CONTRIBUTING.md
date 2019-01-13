# Contributing Rules
- Sound Packs go in /audio/\*, Themes go in /theme\* 

# Sound Packs
- You name the JSON file `/audio/snake-case-format.json`
- If you want to host the files here you place them in `/audio/json-file-name/*`
  - Make sure you use an absolute url with `https://elemental.netlify.com/*` and not just `./` or a `github.io` link.
- In the `index.html` file near the bottom make sure to add the following
  ```html
    <li><a class="soundpack-link" href="./audio/snake-case-format.json">Sound Pack Display Name</a></li>
  ```

# Themes
- You name the JSON file `/theme/snake-case-format.json`
