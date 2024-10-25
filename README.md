# Remix blog stack by Lukas Alvarez!

See it live: https://www.fsyud.com/
<img width="1548" alt="iShot_2024-10-25_21 52 33" src="https://github.com/user-attachments/assets/b679b662-8409-47f8-be08-d2a8a4361fba">


## What's in the stack

- [GitHub Actions](https://github.com/features/actions) for CI/CD
- Markdown support with [MDX](https://mdxjs.com/)
- MDX bundling with code-highlighting and frontmatter parsing with
  [MDX Bundler](https://github.com/kentcdodds/mdx-bundler)
- Styling with [Tailwind](https://tailwindcss.com/)
- Unit testing with [Vitest](https://vitest.dev) and
  [Testing Library](https://testing-library.com)
- Code Formatting with [Prettier](https://prettier.io/)
- Code Linting with [ESLint](https://eslint.org/)
- Static Types with [TypeScript](https://typescriptlang.org)

## Development

Make sure the dependencies are installed

```sh
npm run install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

Go to localhost:3000/books and you should see a list of posts. You can add more posts by
creating a new MDX file in the `app/content` directory.
