package com.kodedu.config;

import com.kodedu.config.AsciidoctorConfigBase.NoAttributes;
import com.kodedu.controller.ApplicationController;
import com.kodedu.service.ThreadService;
import org.asciidoctor.Asciidoctor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.nio.file.Path;

@Component
public class Epub3ConfigBean extends AsciidoctorConfigBase<NoAttributes> {

    private final ApplicationController controller;
    private final ThreadService threadService;
    private final Asciidoctor asciidoctor;

    @Override
    public String formName() {
        return "Epub3 Settings";
    }

    @Autowired
    public Epub3ConfigBean(ApplicationController controller, ThreadService threadService, Asciidoctor asciidoctor) {
        super(controller, threadService, asciidoctor);
        this.controller = controller;
        this.threadService = threadService;
        this.asciidoctor = asciidoctor;
    }

    @Override
    public Path getConfigPath() {
        return super.resolveConfigPath("asciidoctor_epub3.json");
    }
}