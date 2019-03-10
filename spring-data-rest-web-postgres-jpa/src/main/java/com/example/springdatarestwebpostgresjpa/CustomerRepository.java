package com.example.springdatarestwebpostgresjpa;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
// @RepositoryRestResource
// @CrossOrigin(origins = "http://localhost:4200")
public interface CustomerRepository extends CrudRepository<Customer, Long> {

	List<Customer> findByName(String name);

	List<Customer> findAll();
}