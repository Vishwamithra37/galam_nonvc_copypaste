# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview (CloudStack Branch)

This is the CloudStack-specific version of noVNC with enhanced clipboard functionality and UI improvements. Key differences from standard noVNC include:

- **Enhanced clipboard integration** with bidirectional text copy/paste
- **CloudStack-specific UI elements** including token authentication
- **Modified connection handling** for CloudStack console integration
- **Improved mobile/touch support** with better gesture handling

## Common Commands

### Development
- `npm run lint` - Run ESLint on app, core, po, tests, and utils directories
- `npm test` - Run full test suite using Karma
- `./utils/launch.sh --vnc localhost:5901` - Quick start with websockify proxy

### Testing
- Tests use Karma with Mocha framework and Sinon-Chai for assertions
- Configuration in `karma.conf.js`
- Individual test files are in `tests/` directory with naming pattern `test.*.js`

## Architecture

### Core Components

**RFB Protocol Handler** (`core/rfb.js`)
- Main VNC protocol implementation with CloudStack-specific enhancements
- Enhanced clipboard support with `sendText()` method
- Token-based authentication support
- Server verification capabilities

**Enhanced Clipboard System**
- Bidirectional clipboard synchronization
- Auto-focus on clipboard panel opening
- Separate send/clear buttons for better UX
- `clipboardSend()` uses `rfb.sendText()` instead of `clipboardPasteFrom()`

**UI Controller** (`app/ui.js`)
- CloudStack-specific connection parameters (token, extra)
- Enhanced fullscreen toggle with viewport scaling
- Improved mobile/touch support
- Modified clipboard panel behavior with auto-focus

### Key CloudStack-Specific Features

**Authentication & Connection**
- Token-based authentication via URL parameters
- Support for 'extra' connection parameters
- Server verification dialog with RSA fingerprint
- Enhanced error messaging for token expiration

**Clipboard Enhancements**
- `clipboardSend()` method uses `UI.rfb.sendText(text)` 
- Auto-closes clipboard panel after sending
- Auto-focus on clipboard textarea when panel opens
- Separate clear button that maintains focus

**Mobile/Touch Improvements**
- Better browser detection (`isMac`, `isIOS`, `isAndroid`, `isChromeOS`)
- Enhanced scrollbar handling for different platforms
- Improved virtual keyboard management
- `focusOnConsole()` helper for better focus management

### Data Flow Differences

1. **Clipboard Send**: Text → `UI.rfb.sendText()` → Close panel → Focus console
2. **Connection**: Includes token and extra parameters in WebSocket URL
3. **Server Verification**: RSA fingerprint verification with user approval
4. **Fullscreen**: Custom viewport scaling instead of browser fullscreen API

## Development Notes

- Uses `sendText()` method for clipboard instead of `clipboardPasteFrom()`
- Enhanced browser detection for mobile platform optimizations
- Token authentication is mandatory for CloudStack console connections
- Server verification provides additional security layer
- Focus management is more sophisticated for better UX