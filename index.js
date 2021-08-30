let dictionary = {
	"a": "ᔑ",
	"b": "ʖ",
	"c": "ᓵ",
	"d": "↸",
	"e": "ᒷ",
	"f": "⎓",
	"g": "⊣",
	"h": "⍑",
	"i": "╎",
	"j": "⋮",
	"k": "ꖌ",
	"l": "ꖎ",
	"m": "ᒲ",
	"n": "リ",
	"o": "𝙹",
	"p": "!¡",
	"q": "ᑑ",
	"r": "∷",
	"s": "ᓭ",
	"t": "ℸ",
	"u": "⚍",
	"v": "⍊",
	"w": "∴",
	"x": "/",
	"y": "||",
	"z": "⨅",
};
let reverse_dictionary = {
	"ᔑ": "a",
	"ʖ": "b",
	"ᓵ": "c",
	"↸": "d",
	"ᒷ": "e",
	"⎓": "f",
	"⊣": "g",
	"⍑": "h",
	"╎": "i",
	"⋮": "j",
	"ꖌ": "k",
	"ꖎ": "l",
	"ᒲ": "m",
	"リ": "n",
	"𝙹": "o",
	"!¡": "p",
	"ᑑ": "q",
	"∷": "r",
	"ᓭ": "s",
	"ℸ": "t",
	"⚍": "u",
	"⍊": "v",
	"∴": "w",
	"/": "x",
	"||": "y",
	"⨅": "z",
}
/**
 * 
 * @param {string} text Text to be translated.
 * @param {boolean} reverse Wether or not the inputted text is Enchantment table or english. 
 * @returns {string} Output (Text or Enchantment Table)
 */
function translate(text, reverse) {
	var translatedText = [...text.toLowerCase()].map((letter, i, arr) => {
		(reverse) ? ((letter == "|" && arr[i + 1] == "|") ? (letter = "||", arr.splice(i + 1, 1)) : letter = letter) : letter = letter;
		(reverse) ? ((letter == "!" && arr[i + 1] == "¡") ? (letter = "!¡", arr.splice(i + 1, 1)) : letter = letter) : letter = letter;
		var translatedLetter = (reverse) ? reverse_dictionary[letter] : dictionary[letter];
		(translatedLetter === undefined) ? translatedText += letter: translatedText += translatedLetter;
		return translatedLetter;
	}).join("");
	return translatedText;
}
module.exports = {
	translate: translate,
	dictionary: dictionary,
	reverse_dictionary: reverse_dictionary,
};