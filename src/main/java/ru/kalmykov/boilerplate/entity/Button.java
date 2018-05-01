package ru.kalmykov.boilerplate.entity;

import javax.persistence.*;

@Entity
@Table(name = "Button")
public class Button
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "Name")
    private String name;
    @Column(name="SampleId")
    private Long sampleId;
    @Column(name = "LanguageId")
    private Long languageId;
    @Column(name = "PageId")
    private Long pageId;
    @Column(name = "Position")
    private Long position;
    @Column(name = "Link")
    private Long link;

    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public Long getLanguageId()
    {
        return languageId;
    }

    public void setLanguageId(Long languageId)
    {
        this.languageId = languageId;
    }

    public Long getPageId()
    {
        return pageId;
    }

    public void setPageId(Long pageId)
    {
        this.pageId = pageId;
    }

    public Long getLink()
    {
        return link;
    }

    public void setLink(Long link)
    {
        this.link = link;
    }

    public Long getSampleId()
    {
        return sampleId;
    }

    public void setSampleId(Long sampleId)
    {
        this.sampleId = sampleId;
    }

    public Long getPosition()
    {
        return position;
    }

    public void setPosition(Long position)
    {
        this.position = position;
    }
}
