# moneta

[Moneta](https://en.wikipedia.org/wiki/Moneta) is the Roman goddess of memory (and / or an epithet of Juno).

## Local Development

### Prerequisites

- [bun](https://bun.sh)
- [asdf](https://asdf-vm.com)

### Get Starting

- `bun install`: Install dependencies
- `bun run dev`: Run local dev server

## Lay of the Land

### Modules

We divide our app into several modules. As the app evolves, it is likely that these will expand into different, more complex areas.

General module belong in the directory of their type. For example, astro components belong in `./modules/astro`.

As pages and functionality grows and pages become unwiedly, components should move into their own directory, such as the `./modules/home` directory.

### Styling

We're using [vanilla extract](https://vanilla-extract.style) for styles. App wide style belong in `./modules/style`. Module and component specific styles should be colocated alongside their markup as is possible.
