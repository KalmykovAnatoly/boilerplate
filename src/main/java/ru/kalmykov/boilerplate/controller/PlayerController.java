package ru.kalmykov.boilerplate.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kalmykov.boilerplate.entity.Player;
import ru.kalmykov.boilerplate.repository.PlayerRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/players")
public class PlayerController {

    private PlayerRepository repository;

    @Autowired
    public PlayerController(PlayerRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/{id}")
    public Player byId(@PathVariable(value = "id") Long id){
        Optional<Player> player = repository.findById(id);
        if (player.isPresent()){
            return player.get();
        }
        else return new Player(7L,"CatWomen");
    }
    @GetMapping("")
    public List<Player> findAll(){
        return repository.findAll();
    }
}
