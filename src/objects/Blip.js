import MechClasses from "./MechClasses";

export function Blip() {
  this.mechTier = MechClasses[1];
  this.blipPosition = 1;
  this.mechsInBlip = [];
  this.blipNumber = 0;
  this.hasObject = false;
  this.showAllObjectsFromStart = false;
}
