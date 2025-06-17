/*
 * Copyright © Siemens 2025 - 2025
 *
 * Licensed under the Siemens Inner Source License 1.5
 *
 * Authors: Tesch, Jan (FT RPD CST SEA-DE)
 *
 * SPDX-FileCopyrightText: 2025 Siemens
 *
 * SPDX-License-Identifier: LicenseRef-Siemens-ISL-1.5
 */

import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'ui' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ui');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, ui');
  });
});
