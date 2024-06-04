# CoMo Solution GmbH

This is the repository for the [CoMo Solution Website](https://como-solution.de).

## Getting Started

1. Install all dependencies:

   ```bash
   npm install
   ```

1. Run the development server:

   ```bash
   npm run dev
   ```

1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Releasing

1. Export a production build locally to `/out/`:

   ```bash
   npm run build
   ```

   Alternatively, you can download the artifacts after updating `main` or trigger the workflow dispatch event manually for the [`Build and archive` workflow](https://github.com/ericschmidt14/como-new/actions/workflows/main.yml).

1. Upload the folder content to the CoMo FTP Server to its dedicated space:

   | Environment | Folder                             |
   | ----------- | ---------------------------------- |
   | Staging     | `/clickandbuilds/Joomla/stage2/`   |
   | Production  | `/clickandbuilds/Joomla/como2021/` |
