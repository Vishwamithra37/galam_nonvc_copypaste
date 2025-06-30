# Understanding of Copy-Paste Functionality

## CloudStack Branch Analysis

### Key Differences Found

#### 1. Enhanced UI Clipboard Handling (`app/ui.js`)

**CloudStack Implementation:**
- **Line 326**: `clipboardSend()` uses `UI.rfb.sendText(text)` instead of `clipboardPasteFrom()`
- **Line 327**: Auto-closes clipboard panel after sending
- **Line 328**: Calls `UI.focusOnConsole()` for better focus management
- **Line 325**: Separate send button with dedicated event listener
- **Line 347**: Auto-focus on clipboard textarea when panel opens
- **Line 360**: Clear button maintains focus on textarea

**OpenStack Implementation:**
- Uses `clipboardPasteFrom()` method for clipboard operations
- Basic clipboard panel without auto-close functionality
- Less sophisticated focus management

#### 2. Core RFB Protocol Enhancements (`core/rfb.js`)

**CloudStack-Specific `sendText()` Method (Lines 448-472):**
```javascript
sendText(text) {
    const sleep = (time) => {
        return new Promise(resolve => setTimeout(resolve, time))
    }

    const keyboardTypeText = async () => {
        for (var i = 0; i < text.length; i++) {
            const character = text.charAt(i);
            var charCode = USKeyTable[character] || false;
            if (charCode) {
                this.sendKey(charCode, character, true);
                this.sendKey(charCode, character, false);
            } else {
                charCode = text.charCodeAt(i)
                this.sendKey(KeyTable.XK_Shift_L, "ShiftLeft", true);
                this.sendKey(charCode, character, true);
                this.sendKey(charCode, character, false);
                this.sendKey(KeyTable.XK_Shift_L, "ShiftLeft", false);
            }
            await sleep(25)
        }
    }

    keyboardTypeText()
}
```

**Key Features:**
- Simulates typing by sending individual key events
- Uses USKeyTable for character mapping
- 25ms delay between keystrokes
- Handles special characters with Shift key
- Asynchronous implementation

#### 3. US Keyboard Layout Support

**New File:** `core/input/uskeysym.js`
- Provides character-to-keycode mapping for US keyboard layout
- Includes basic ASCII characters and special keys
- Used by `sendText()` method for keyboard simulation

#### 4. UI Enhancements

**Better Mobile Support:**
- Enhanced browser detection (`isMac`, `isIOS`, `isAndroid`, `isChromeOS`)
- Improved focus management with `focusOnConsole()` helper
- Auto-focus behavior for clipboard panel

**User Experience Improvements:**
- Clipboard panel auto-closes after sending text
- Clear button maintains focus for continued use
- Better visual feedback with dedicated send/clear buttons

### Implementation Strategy for OpenStack

To bring CloudStack's copy-paste functionality to OpenStack branch:

1. **Add `sendText()` method to RFB class**
2. **Create USKeyTable mapping file**
3. **Update UI clipboard handling methods**
4. **Enhance focus management**
5. **Improve clipboard panel UX**

### Benefits of CloudStack Implementation

- **Reliability**: Keyboard simulation works when clipboard integration fails
- **Compatibility**: Better support for restricted environments
- **User Experience**: Smoother workflow with auto-close and focus management
- **Performance**: Reasonable typing speed with 25ms delays

### Files to Modify for OpenStack Integration

1. `core/rfb.js` - Add sendText method
2. `core/input/uskeysym.js` - Create keyboard mapping (new file)
3. `app/ui.js` - Update clipboard handling methods
4. `app/ui.js` - Add focusOnConsole helper method