const fs = require("fs");
const glob = require("glob");
const path = require("path");
class Translator {
	constructor() {
		this.dictionary = {
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
		this.reverse_dictionary = {
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
	}
	/**
	 * 
	 * @param {string} text Text to be translated.
	 * @param {boolean} reverse Wether or not the inputted text is Enchantment table or english. 
	 * @returns {string} Output (Text or Enchantment Table)
	 */
	translate(text, reverse) {
		text = [...text.toLowerCase()];
		var translatedText = "";
		for (let i = 0; i < text.length; i++) {
			(reverse) ? ((text[i] == "|" && text[i + 1] == "|") ? (text[i] = "||", text.splice(i + 1, 1)) : text[i] = text[i]) : text[i] = text[i];
			(reverse) ? ((text[i] == "!" && text[i + 1] == "¡") ? (text[i] = "!¡", text.splice(i + 1, 1)) : text[i] = text[i]) : text[i] = text[i];
			var translatedLetter = (reverse) ? this.reverse_dictionary[text[i]] : this.dictionary[text[i]];
			(translatedLetter === undefined) ? translatedText += text[i]: translatedText += translatedLetter;
		}
		return translatedText;
	}
}
module.exports = {
	Translator: Translator,
};