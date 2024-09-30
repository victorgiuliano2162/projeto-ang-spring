package org.natuagro.api;

import org.natuagro.api.model.User;
import org.natuagro.api.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiApplication.class, args);
    }

    @Bean
    CommandLineRunner initDataBase(UserRepository userRepository) {
        return args -> {
            //courseRepository.deleteAll();

            User c = new User();
            c.setName("vito");
            c.setPassword("123");

            userRepository.save(c);
        };
    }
}
