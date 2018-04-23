package ru.kalmykov.boilerplate.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.kalmykov.boilerplate.entity.Player;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

}