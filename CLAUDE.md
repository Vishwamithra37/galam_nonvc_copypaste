# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

noVNC is an HTML5 VNC client library and application that enables VNC connections through web browsers. It consists of:

- **Core library** (`core/`) - The main VNC protocol implementation and utilities
- **Application UI** (`app/`) - The web-based VNC client interface  
- **Vendor libraries** (`vendor/`) - Third-party dependencies like Pako for compression
- **Tests** (`tests/`) - Comprehensive test suite using Karma and Mocha

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
- Main VNC protocol implementation
- Handles connection state, authentication, and frame buffer updates
- Uses EventTarget pattern for communication with UI layer
- Supports multiple VNC encodings: raw, copyrect, rre, hextile, tight, tightPNG

**Display System** (`core/display.js`)
- Canvas-based rendering of remote desktop
- Handles scaling, clipping, and cursor rendering
- Manages frame buffer and pixel data

**Input Handling** (`core/input/`)
- `keyboard.js` - Keyboard event processing and key mapping
- `gesturehandler.js` - Touch gesture support for mobile devices
- Maps browser events to RFB protocol messages

**WebSocket Communication** (`core/websock.js`)
- WebSocket wrapper with binary data handling
- Provides queue management and connection state tracking

### Application Layer

**UI Controller** (`app/ui.js`)  
- Main application interface controller
- Manages connection dialog, control bar, and settings
- Handles RFB events and updates UI state
- Integrates with localization system

**Web Utilities** (`app/webutil.js`)
- Browser compatibility helpers
- Settings management and URL parameter parsing

### Key Data Flow

1. UI initiates connection through RFB instance
2. RFB establishes WebSocket connection via websockify proxy
3. VNC handshake and authentication handled by RFB
4. Frame buffer updates decoded and rendered to Display
5. Input events captured by UI and sent via RFB to server

## File Organization

- `vnc.html` / `vnc_lite.html` - Main application entry points
- ES6 modules throughout with explicit imports
- Decoders in `core/decoders/` for different VNC encoding types
- Localization files in `app/locale/` and `po/` directories
- Documentation in `docs/` including API references and integration guides

## Development Notes

- Uses ES6 modules - check imports when adding new dependencies
- All encoding/decoding should go through appropriate decoder classes
- UI updates should be driven by RFB events, not direct polling
- Mobile support requires touch gesture handling in input layer
- WebSocket proxy (websockify) required for VNC server connectivity