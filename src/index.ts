import { Tile } from "./mfm/classes/Tile";
import { Site } from "./mfm/classes/Site";
import { ElementTypes } from "./mfm/classes/ElementTypes";
import { MFMUtils } from "./mfm/utils/utils";
import { DRegElement } from "./mfm/classes/elements/DRegElement";

declare var p5: any;

let g: Tile = new Tile(20, 20);

console.log(g);
console.log(g.getRandomSite());
g.getRandomSite().atom.elem = new DRegElement();
g.getRandomSite().atom.elem = new DRegElement();
g.getRandomSite().atom.elem = new DRegElement();
g.getRandomSite().atom.elem = new DRegElement();

var sketch = (p: any) => {
  let siteSize = 12;

  p.preload = () => {};

  p.setup = () => {
    p.createCanvas(p.windowWidth - 50, p.windowHeight - 50);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth - 50, p.windowHeight - 50);
  };

  let drawGrid = (p: any, t: Tile) => {
    p.push();
    p.translate(50, 50);
    t.sites.forEach((site: Site) => {
      switch (site.atom.elem.type) {
        case ElementTypes.EMPTY.type:
          p.fill(244);
          break;
        case ElementTypes.DREG.type:
          p.fill(255, 32, 32);
          break;
      }
      p.stroke(0);
      p.ellipse(site.tilePos.col * siteSize, site.tilePos.row * siteSize, siteSize, siteSize);
    });
    p.pop();
  };

  let run = () => {
    for (var i = 0; i < 100; i++) {
      let ew = MFMUtils.GenerateEventWindow(g, g.width, g.height);
      //console.log(ew);
      ew.origin.atom.exec(ew);
    }
  };

  p.draw = () => {
    p.background(100);
    drawGrid(p, g);

    run();
  };
};

let sketchP: any = new p5(sketch);
