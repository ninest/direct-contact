# [Direct Contact for WhatsApp](https://directcontact.now.sh/)

> Start chats on WhatsApp without saving phone numbers

## Build setup

Clone the repository and install all dependencies:

```bash
yarn
```

Start the development server with

```bash
yarn dev
```

Build the web app with

```bash
yarn build
```

### Icons

#### Splash screens

```bash
pwa-asset-generator ./ios.png ./ios-splash ---splash-only --background  "#34D399"
```

#### iOS, Android, and favicon

First generate all icons + favicons with transparent background, then override icons only. This is required because there is not `favicon-only` flag.

```bash
pwa-asset-generator ./android.png ./icons --icon-only --maskable --opaque false --favicon
pwa-asset-generator ./android.png ./icons --icon-only --maskable --opaque true
```

#### Icons

## License

MIT
