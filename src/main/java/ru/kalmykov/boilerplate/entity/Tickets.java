package ru.kalmykov.boilerplate.entity;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@JacksonXmlRootElement
public class Tickets implements Serializable {

    @JacksonXmlProperty(localName = "Ticket")
    @JacksonXmlElementWrapper(localName = "Tickets", useWrapping = false)
    private List tickets = new ArrayList<Ticket>();

    public List getTickets() {
        return tickets;
    }

    public void setTickets(List tickets) {
        this.tickets = tickets;
    }
}
