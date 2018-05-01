package ru.kalmykov.boilerplate.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.kalmykov.boilerplate.entity.Button;
import ru.kalmykov.boilerplate.repository.ButtonRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/buttons")
public class ButtonController
{
    private ButtonRepository repository;
    @Autowired
    public ButtonController(ButtonRepository repository)
    {
        this.repository = repository;
    }


}