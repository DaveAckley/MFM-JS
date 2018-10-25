import { GridCoord } from "../interfaces/IGridCoord";
import { EventWindow } from "../classes/Eventwindow";
import { Tile } from "../classes/Tile";

export class MFMUtils {
  static CtoID(c: GridCoord): string {
    return `${c.row}:${c.col}`;
  }

  static IDtoC(id: string): GridCoord {
    let rca: string[] = id.split(":");
    return { row: parseInt(rca[0]), col: parseInt(rca[1]) };
  }

  static GenerateEventWindow(tile: Tile, w: number, h: number): EventWindow {
    let rc = Math.floor(Math.random() * w);
    let rr = Math.floor(Math.random() * h);

    return new EventWindow(tile, { row: rr, col: rc });
  }
}
