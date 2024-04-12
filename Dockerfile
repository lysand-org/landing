FROM oven/bun:1.1 AS base
# Temporarily switch back to the non-alpine version of Bun because of Bun's issues with musl

# Install dependencies into temp directory
# This will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

FROM base AS builder
COPY . /app

COPY --from=install /temp/dev/node_modules /app/node_modules
RUN cd /app && bun run build

FROM base as final

COPY --from=builder /app/.output/ /app

LABEL org.opencontainers.image.authors "Gaspard Wierzbinski (https://cpluspatch.com)"
LABEL org.opencontainers.image.source "https://github.com/lysand-org/landing"
LABEL org.opencontainers.image.vendor "Lysand"
LABEL org.opencontainers.image.licenses "AGPL-3.0"
LABEL org.opencontainers.image.title "Lysand Landing"
LABEL org.opencontainers.image.description "Landing page for the Lysand project"

WORKDIR /app/server
CMD ["bun", "index.mjs"]