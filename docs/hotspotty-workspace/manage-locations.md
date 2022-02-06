---
sidebar_position: 2
---

# Add a location

## Add locations via your workspace

Go over to the [locations tab](https://app.hotspotty.net/workspace/locations) in your workspace and click the <button class="hotspotty-button">Add location</button> button. In case you have a **.kml** or **.csv** file ready with locations, you can click the <button class="hotspotty-button-2">Import locations</button> button.

The **.kml** or **.csv** file must comply with the following requirements:

- The \*.csv file needs to be delimited by semicolon (;) or comma (,)
- The first line needs to have exactly the following (case-sensitive) columns:name;lat;lng;address;height
- The name, lat and lng fields are required
- The height field represent the installation height above the ground in meters
- Locations for which the coordinates already exists are ignored when importing
- The file size cannot exceed 10MB

[Download example file](/hotspotty-locations-example.csv)

By choosing <button class="hotspotty-button">Add location</button>, you will be prompted to enter the address (or drop a pin on the map). Give your location a name so that you can easily see which location it is if you come back to it later. An example would be: _John's home address_. Next, you can specify the antenna height above the ground in case a hotspot is located on that location.

![Docs](/img/workspace/add-locations.png)

## Add locations via the Hotspotty map

1. Go to [locations on the map](https://app.hotspotty.net/locations).
2. Adding a location via the map is the same as in your workspace.

![Docs](/img/workspace/add-locations-2.png)

3. Added locations are ranked according to their transmit scale. A transmit scale of 1 is excellent, a transmit scale between 0 and 0.25 is terrible. More info about transmit scale can be found [here](../expand-the-network/evaluate-hotspot-locations#transmit-scale).

![Docs](/img/workspace/add-locations-3.png)
