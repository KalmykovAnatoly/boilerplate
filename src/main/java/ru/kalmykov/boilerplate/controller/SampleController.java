package ru.kalmykov.boilerplate.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.kalmykov.boilerplate.entity.Sample;
import ru.kalmykov.boilerplate.repository.SampleRepository;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/samples")
public class SampleController
{
    private SampleRepository repository;

    @Autowired
    public SampleController(SampleRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/{id}")
    public Sample byId(@PathVariable(value = "id") Long id){
        return repository.findById(id).get();
    }
    @GetMapping("")
    public List<Sample> findAll(){
        return repository.findAll();
    }
}