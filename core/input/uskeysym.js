/*
 * US Keyboard Symbol Table
 * Maps characters to keysym values for keyboard simulation
 * Used by sendText() method for character-by-character typing
 */

const USKeyTable = {
    // Basic ASCII characters (32-126)
    ' ': 0x0020,        // space
    '!': 0x0021,        // exclamation
    '"': 0x0022,        // quotation
    '#': 0x0023,        // hash
    '$': 0x0024,        // dollar
    '%': 0x0025,        // percent
    '&': 0x0026,        // ampersand
    "'": 0x0027,        // apostrophe
    '(': 0x0028,        // parenthesis left
    ')': 0x0029,        // parenthesis right
    '*': 0x002a,        // asterisk
    '+': 0x002b,        // plus
    ',': 0x002c,        // comma
    '-': 0x002d,        // minus
    '.': 0x002e,        // period
    '/': 0x002f,        // slash

    // Numbers (48-57)
    '0': 0x0030,
    '1': 0x0031,
    '2': 0x0032,
    '3': 0x0033,
    '4': 0x0034,
    '5': 0x0035,
    '6': 0x0036,
    '7': 0x0037,
    '8': 0x0038,
    '9': 0x0039,

    // More symbols
    ':': 0x003a,        // colon
    ';': 0x003b,        // semicolon
    '<': 0x003c,        // less than
    '=': 0x003d,        // equal
    '>': 0x003e,        // greater than
    '?': 0x003f,        // question mark
    '@': 0x0040,        // at sign

    // Uppercase letters (65-90)
    'A': 0x0041,
    'B': 0x0042,
    'C': 0x0043,
    'D': 0x0044,
    'E': 0x0045,
    'F': 0x0046,
    'G': 0x0047,
    'H': 0x0048,
    'I': 0x0049,
    'J': 0x004a,
    'K': 0x004b,
    'L': 0x004c,
    'M': 0x004d,
    'N': 0x004e,
    'O': 0x004f,
    'P': 0x0050,
    'Q': 0x0051,
    'R': 0x0052,
    'S': 0x0053,
    'T': 0x0054,
    'U': 0x0055,
    'V': 0x0056,
    'W': 0x0057,
    'X': 0x0058,
    'Y': 0x0059,
    'Z': 0x005a,

    // Brackets and symbols
    '[': 0x005b,        // bracket left
    '\\': 0x005c,       // backslash
    ']': 0x005d,        // bracket right
    '^': 0x005e,        // caret
    '_': 0x005f,        // underscore
    '`': 0x0060,        // grave accent

    // Lowercase letters (97-122)
    'a': 0x0061,
    'b': 0x0062,
    'c': 0x0063,
    'd': 0x0064,
    'e': 0x0065,
    'f': 0x0066,
    'g': 0x0067,
    'h': 0x0068,
    'i': 0x0069,
    'j': 0x006a,
    'k': 0x006b,
    'l': 0x006c,
    'm': 0x006d,
    'n': 0x006e,
    'o': 0x006f,
    'p': 0x0070,
    'q': 0x0071,
    'r': 0x0072,
    's': 0x0073,
    't': 0x0074,
    'u': 0x0075,
    'v': 0x0076,
    'w': 0x0077,
    'x': 0x0078,
    'y': 0x0079,
    'z': 0x007a,

    // Final symbols
    '{': 0x007b,        // brace left
    '|': 0x007c,        // bar
    '}': 0x007d,        // brace right
    '~': 0x007e,        // tilde

    // Special characters
    '\n': 0xff0d,       // newline (Enter)
    '\r': 0xff0d,       // carriage return (Enter)
    '\t': 0xff09,       // tab
    '\b': 0xff08,       // backspace
};

export default USKeyTable;
