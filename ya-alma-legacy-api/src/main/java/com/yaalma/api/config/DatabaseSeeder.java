package com.yaalma.api.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseSeeder implements CommandLineRunner {

    @Override
    public void run(String... args) throws Exception {
        // Database Seeder Disabled to support newly added Language Models without rewriting thousands of lines of constructors.
    }
}
