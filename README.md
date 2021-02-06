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
pwa-asset-generator ./ios.png ./ios-splash -h -b "#34D399"
```

#### iOS, Android, and favicon

```bash
pwa-asset-generator ./android.png ./icons -c -e -o false -f
```

#### Icons

## License

MIT
