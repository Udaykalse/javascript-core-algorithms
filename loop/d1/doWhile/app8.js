let battery = 82;
while (battery < 100) {
  battery += 6;
  if (battery > 100) battery = 100;
  console.log("Battery:- ", battery + "%");
}
