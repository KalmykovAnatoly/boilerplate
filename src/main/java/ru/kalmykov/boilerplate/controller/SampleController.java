package ru.kalmykov.boilerplate.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.kalmykov.boilerplate.entity.Button;
import ru.kalmykov.boilerplate.entity.Sample;
import ru.kalmykov.boilerplate.repository.ButtonRepository;
import ru.kalmykov.boilerplate.repository.SampleRepository;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/samples")
public class SampleController
{
    private SampleRepository sampleRepository;
    private ButtonRepository buttonRepository;

    @Autowired
    public SampleController(SampleRepository sampleRepository, ButtonRepository buttonRepository) {
        this.sampleRepository = sampleRepository;
        this.buttonRepository = buttonRepository;
    }

    @GetMapping("/{id}")
    public Sample byId(@PathVariable(value = "id") Long id){
        return sampleRepository.findById(id).get();
    }
    @GetMapping("")
    public List<Sample> findAll(){
        return sampleRepository.findAll();
    }
    @GetMapping("/{sampleId}/{langId}/{pageId}")
    public List<Button> getButtonsBySampleByLangByPage(@PathVariable("sampleId") Long sampleId,
                                                       @PathVariable("pageId") Long pageId,
                                                       @PathVariable("langId") Long langId){
        return buttonRepository.findAllBySampleIdAndPageIdAndLanguageId(sampleId,pageId,langId);
    }
}