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

FROM nginx:1.28-alpine@sha256:aed99734248e851764f1f2146835ecad42b5f994081fa6631cc5d79240891ec9

COPY --from=builder /app/dist/ui/browser /usr/share/nginx/html
