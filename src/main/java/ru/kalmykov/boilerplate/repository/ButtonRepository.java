package ru.kalmykov.boilerplate.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.kalmykov.boilerplate.entity.Button;
import java.util.List;

@Repository
public interface ButtonRepository extends JpaRepository<Button, Long>
{
    List<Button> findAllBySampleIdAndPageIdAndLanguageId(Long sampleId,Long pageId,Long langId);
}