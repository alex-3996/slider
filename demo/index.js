import { Slider } from "@scalable.software/slider";

await Slider.Template.load("slider.template.html");

customElements.define(Slider.Tag, Slider);
