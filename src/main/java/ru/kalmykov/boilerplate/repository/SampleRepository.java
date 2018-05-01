package ru.kalmykov.boilerplate.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.kalmykov.boilerplate.entity.Sample;

@Repository
public interface SampleRepository extends JpaRepository<Sample, Long>
{
}