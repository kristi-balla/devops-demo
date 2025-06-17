/*
 * Copyright © Siemens 2025 - 2025
 *
 * Licensed under the Siemens Inner Source License 1.5
 *
 * Authors: janmalix
 *
 * SPDX-FileCopyrightText: 2025 Siemens
 *
 * SPDX-License-Identifier: LicenseRef-Siemens-ISL-1.5
 */

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
