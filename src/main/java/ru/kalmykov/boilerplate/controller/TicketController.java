package ru.kalmykov.boilerplate.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kalmykov.boilerplate.entity.Ticket;
import ru.kalmykov.boilerplate.entity.Tickets;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/tickets")
public class TicketController {

    @GetMapping("")
    public Tickets findAll() {
        Tickets ticketsParent = new Tickets();
        List<Ticket> tickets = ticketsParent.getTickets();
        Ticket ticket1 = new Ticket(1, "First");
        Ticket ticket2 = new Ticket(2, "Second");
        Ticket ticket3 = new Ticket(3, "Third");
        tickets.add(ticket1);
        tickets.add(ticket2);
        tickets.add(ticket3);
        return ticketsParent;
    }

    @GetMapping("/1")
    public Ticket getTicket() {
        return new Ticket(1,"First");
    }
}