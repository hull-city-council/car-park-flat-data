// Helper library written for useful postprocessing tasks with Flat Data
// Has helper functions for manipulating csv, txt, json, excel, zip, and image files
import { readJSON, writeJSON, removeFile } from 'https://deno.land/x/flat@0.0.14/mod.ts' 

// Step 1: Read the downloaded_filename JSON
const filename = 'mi_permit_car_park_list.json'
const json = await readJSON(filename)
console.log(json)

// Step 2: Filter specific data we want to keep and write to a new JSON file
  const carParkArray = Object.values(json.GetLocationsReturn.Locations.Location);
  const filteredCarParkList = carParkArray.map(carpark => ({
    ID: carpark.ID,
    Code: carpark.Code,
    Name: carpark.Name
  }));

// Step 3. Write a new JSON file with our filtered data
const newFilename = `mi_permit_car_park_list-processed.json` // name of a new file to be saved
await writeJSON(newFilename, filteredPlatformStatus) // create a new JSON file
console.log("Wrote a post process file")

// Optionally delete the original file
await removeFile('./mi_permit_car_park_list.json')
