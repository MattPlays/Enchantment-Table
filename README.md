# Enchantment- Table
This package allows text to be translated to and from the Minecraft [Enchantment Table Language](https://nl.wikipedia.org/wiki/Standard_Galactic_Alphabet)

# Installation
```bash
npm install enchantment-table --save
```

# Usage
```javascript
const Enchant = require("enchantment-table")

console.log(Enchant.translate("Hello World"));
// ⍑ᒷꖎꖎ𝙹 ∴𝙹∷ꖎ↸

console.log(Enchant.translate("ᒲ╎リᒷᓵ∷ᔑ⎓ℸ ╎ᓭ ᔑ∴ᒷᓭ𝙹ᒲᒷ", true));
// minecraft is awesome
```