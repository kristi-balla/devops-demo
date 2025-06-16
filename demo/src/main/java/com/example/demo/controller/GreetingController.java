/*
 * Copyright © Siemens 2025 - 2025
 *
 * Licensed under the Siemens Inner Source License 1.5
 *
 * Authors: Kristi Balla, Patrick Stöckle
 *
 * SPDX-FileCopyrightText: 2025 Siemens
 *
 * SPDX-License-Identifier: LicenseRef-Siemens-ISL-1.5
 */

package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {
    
    @GetMapping("/greet")
    public String greet(@RequestParam(value = "name", defaultValue = "World") String name) {
        return "Hello, " + name + "\n";
    }
}