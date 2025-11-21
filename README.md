# Notes for Development

## Increasing the Version
To update the version number for this project:

- To increase the minor version:
  ```powershell
  npm version minor
  ```
- To increase the major version:
  ```powershell
  npm version major
  ```

## Deploying to GitHub Pages
To deploy the site:

```powershell
npm run build
npm run deploy
```