package com.example.springdatarestwebpostgresjpa;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// The @CrossOrigin is used to allow Cross-Origin Resource Sharing (CORS) so that our angular application running on different server can consume these APIs from a browser
// We can also configure the proxy in angular side using proxy.config.json
//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@CrossOrigin(origins = "http://localhost:4200")
@RestController
//@RequestMapping({"/api"})
public class CustomerController {
	@Autowired
	CustomerRepository repository;

	@GetMapping("/bulkcreate")
	public String bulkcreate() {
		// save a single Customer
//		repository.save(new Customer("Rajesh", "Bhojwani@yahoo.com", "jfdgfjg"));

		// save a list of Customers
		repository.saveAll(Arrays.asList(new Customer("Salim", "Khan@yahoo.com", "fdggfhghgh"),
				new Customer("Rajesh", "Parihar@yahoo.fr", "gfhhjhj"),
				new Customer("Rahul", "Dravid@yahoo.com", "gfgfhhj"),
				new Customer("Dharmendra", "Bhojwani@yahoo.com", "jkghggfhhgj")));
		return "Customers are created";
	}

	@PostMapping("/create")
	public String create(@RequestBody Customer customer) {
		// save a single Customer
		repository.save(new Customer(customer.getName(), customer.getEmail(), customer.getAddress()));
		return "Customer is created";
	}

	@RequestMapping("/search/id/{id}")
	public Optional<Customer> search(@PathVariable long id) {
		return repository.findById(id);
	}

	@RequestMapping("/search/name/{name}")
	public String search(@PathVariable String name) {
		String customer = "";
		customer = repository.findByName(name).toString();
		return customer;
	}

//	@GetMapping("/findall")
//	@GetMapping("/customers")
	@GetMapping("/all")
	public List<Customer> findAll() {
		List<Customer> customers = repository.findAll();
		return customers;
	}

	@GetMapping("/deleteall")
	public String deleteAll() {
		repository.deleteAll();
		return "Customers are deleted";
	}
}
