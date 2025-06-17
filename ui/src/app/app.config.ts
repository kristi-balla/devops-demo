/*
 * Copyright © Siemens 2025 - 2025
 *
 * Licensed under the Siemens Inner Source License 1.5
 *
 * Authors: Kristi Balla
 *
 * SPDX-FileCopyrightText: 2025 Siemens
 *
 * SPDX-License-Identifier: LicenseRef-Siemens-ISL-1.5
 */

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
