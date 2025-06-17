# Copyright © Siemens 2025 - 2025
#
# Licensed under the Siemens Inner Source License 1.5
#
# Authors: Kristi Balla, Tesch, Jan (FT RPD CST SEA-DE)
#
# SPDX-FileCopyrightText: 2025 Siemens
#
# SPDX-License-Identifier: LicenseRef-Siemens-ISL-1.5

FROM node:22-alpine@sha256:41e4389f3d988d2ed55392df4db1420ad048ae53324a8e2b7c6d19508288107e AS builder

WORKDIR /app

COPY package.json package.json

RUN npm install

# we actually want everything in the current directory
COPY . .

RUN npm run build

FROM nginx:1.27-alpine@sha256:65645c7bb6a0661892a8b03b89d0743208a18dd2f3f17a54ef4b76fb8e2f2a10

COPY --from=builder /app/dist/ui/browser /usr/share/nginx/html
