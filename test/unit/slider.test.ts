import { Template } from "@scalable.software/component";

import { Slider, Tag, Attributes } from "@scalable.software/slider";

configuration("Tag", () => {
  and("Slider imported", () => {
    then("Slider is defined", () => {
      expect(Slider).toBeDefined();
    });

    and("Slider is defined", () => {
      then("Slider.Tag static getter is defined", () => {
        expect(Slider.Tag).toBeDefined();
      });

      and("Slider.Tag static getter is defined", () => {
        then("Slider.Tag is Tag", () => {
          expect(Slider.Tag).toBe(Tag);
        });
      });
    });
  });
});

configuration("ATTRIBUTE", () => {
  and("Slider imported", () => {
    then("Slider is defined", () => {
      expect(Slider).toBeDefined();
    });

    and("Slider is defined", () => {
      then("Slider.Attributes static getter is defined", () => {
        expect(Slider.Attributes).toBeDefined();
      });

      and("Slider.Attributes static getter is defined", () => {
        then("Slider.Attributes is Attribute", () => {
          expect(Slider.Attributes).toBe(Attributes);
        });
      });
    });
  });
});

utility("TEMPLATE", () => {
  then("Slider.Template static property is defined", () => {
    expect(Slider.Template).toBeDefined();
  });

  and("Slider.Template static property is defined", () => {
    then("Slider.Template is a Template", () => {
      expect(Slider.Template).toBeInstanceOf(Template);
    });
  });
});

composition("Template", () => {
  given("Slider is defined in custom element registry", () => {
    beforeEach(() => {
      define(Slider.Tag, Slider);
    });

    and("HTML Template is added to DOM", () => {
      let template: HTMLTemplateElement;
      beforeEach(async () => {
        template = (await Slider.Template.load(
          "slider.template.html"
        )) as HTMLTemplateElement;
      });
      afterEach(() => {
        remove(Slider.Tag);
      });

      then("template is defined", () => {
        expect(template).toBeDefined();
      });

      and("a new component is added to DOM", () => {
        let component: Slider;
        beforeEach(() => {
          component = add<Slider>(Slider.Tag);
        });
        afterEach(() => {
          component.remove();
        });

        then("component.root contents contains template contents", () => {
          expect(component.root.innerHTML).toContain(template.innerHTML);
        });
      });
    });
  });
});

composition("CSS", () => {
  given("Slider is defined in custom element registry", () => {
    beforeEach(() => {
      define(Slider.Tag, Slider);
    });
    and("HTML Template is added to DOM", () => {
      beforeEach(async () => {
        await Slider.Template.load("slider.template.html");
      });
      afterEach(() => {
        remove(Slider.Tag);
      });

      and("a new component is added to DOM", () => {
        let component: Slider;
        beforeEach(() => {
          component = add<Slider>(Slider.Tag);
        });
        afterEach(() => {
          component.remove();
        });

        then("component.root contents contains a link to stylesheet", () => {
          expect(component.root.innerHTML).toContain("stylesheet");
        });
      });
    });
  });
});
