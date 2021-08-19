# EnchantmentTable-Translator
 Enchantment-Table is a package designed to translated to and from the Minecraft Enchantment Table language or less commonly known as The Standard Galactic Alphabet.

# Installation
```bash
npm install enchantment-table --save
```

# Usage
```javascript
const {Translator} = require("enchantment-table")
const Enchant = new Translator();

console.log(Enchant.translate("Hello World"));
// ⍑ᒷꖎꖎ𝙹 ∴𝙹∷ꖎ↸

console.log(Enchant.translate("ᒲ╎リᒷᓵ∷ᔑ⎓ℸ ╎ᓭ ᔑ∴ᒷᓭ𝙹ᒲᒷ", true));
// minecraft is awesome
```