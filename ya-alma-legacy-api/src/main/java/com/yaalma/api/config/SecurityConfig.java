package com.yaalma.api.config;

import com.yaalma.api.security.JwtRequestFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(authz -> authz
                .requestMatchers(HttpMethod.GET, "/**").permitAll() // Allow all GET requests
                .requestMatchers("/api/auth/**").permitAll() // Allow auth endpoints
                .requestMatchers(HttpMethod.POST, "/api/users/**").authenticated() // Secure user endpoints
                .requestMatchers(HttpMethod.PUT, "/api/users/**").authenticated() // Secure user endpoints
                .requestMatchers(HttpMethod.DELETE, "/api/users/**").authenticated() // Secure user endpoints
                .requestMatchers(HttpMethod.POST, "/api/**").permitAll() // Bypass auth for others
                .requestMatchers(HttpMethod.PUT, "/api/**").permitAll()
                .requestMatchers(HttpMethod.DELETE, "/api/**").permitAll()
                .anyRequest().permitAll()
            )
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
