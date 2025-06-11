package org.example.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(GreetingController.class)
public class GreetingControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void greetShouldReturnMessageStartingWithHello() throws Exception {
        MvcResult result = mockMvc.perform(get("/greet"))
                .andExpect(status().isOk())
                .andReturn();
        
        String content = result.getResponse().getContentAsString();
        assertTrue(content.startsWith("Hello, "), 
                   "Response should start with 'Hello, ' but was: " + content);
    }

    @Test
    public void greetShouldReturnCustomNameWhenProvided() throws Exception {
        String testName = "Student";
        MvcResult result = mockMvc.perform(get("/greet").param("name", testName))
                .andExpect(status().isOk())
                .andReturn();
        
        String content = result.getResponse().getContentAsString();
        assertTrue(content.startsWith("Hello, "), 
                   "Response should start with 'Hello, ' but was: " + content);
        assertTrue(content.equals("Hello, " + testName), 
                   "Response should be 'Hello, " + testName + "' but was: " + content);
    }
}