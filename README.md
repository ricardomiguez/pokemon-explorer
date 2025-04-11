# Pokemon Explorer

This is a **Pokemon Explorer** application built with **Next.js**. It allows you to explore Pokémon and manage your favorite ones.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm) - recommended for managing Node.js versions

### Installation

1. **Clone the repository**

```bash
git clone git@github.com:ricardomiguez/pokemon-explorer.git
cd pokemon-explorer
```

2. **Use the correct Node.js version**

```bash
nvm install
nvm use
```

If you don't have nvm installed, follow the [NVM Installation Guide](https://github.com/nvm-sh/nvm#installing-and-updating).

3. **Install dependencies**

```bash
npm install
```

4. **Configure environment variables**

```bash
echo "NEXT_PUBLIC_GRAPHQL_API_URL=https://beta.pokeapi.co/graphql/v1beta" >> .env.local
```

## Running the Application

### Development Mode

Start the development server with hot-reloading:

```bash
npm run dev
```

Access the application at [http://localhost:3000](http://localhost:3000)

### Production Mode

Build and run the application in production mode:

```bash
npm run build
npm run start
```

Access the production build at [http://localhost:3000](http://localhost:3000)

## Testing

### Unit Tests

Run unit tests using Jest:

```bash
npm run test
```

### End-to-End Tests

Run end-to-end tests using Playwright:

```bash
npm run test:e2e
```

Playwright will test the application running on port 3000.

## Storybook

Run Storybook to test components:

```bash
npm run storybook
```

Access Storybook at [http://localhost:6006](http://localhost:6006)

To build a static version of Storybook:

```bash
npm run build-storybook
```
