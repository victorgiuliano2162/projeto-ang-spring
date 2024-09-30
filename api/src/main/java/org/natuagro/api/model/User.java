package org.natuagro.api.model;


import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty("_id")
    Long _id;

    @Column(length = 200, nullable = false)
    String name;

    @Column(length = 200, nullable = false)
    String password;


}
