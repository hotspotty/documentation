---
sidebar_position: 1
---

# Manage locations

## Add locations via global search

![Add locations via global search](/img/workspace/add-locations-via-global-search.png)

In the upper right of any Hotspotty page, you’ll find a magnifying glass icon 🔍. This is where you can execute global searches for anything across the Hotspotty application. If you’d like a quick way to add **locations**, simply type the physical address of the location, and select it from the dropdown that appears. You can also search for hotspots by name, wallets, contacts, and more.

## Add locations via your workspace

Go over to the [locations tab](https://app.hotspotty.net/workspace/locations) in your workspace and click the <button className="hotspotty-button">Add location</button> button. In case you have a **.kml** or **.csv** file ready with locations, you can click the <button className="hotspotty-button-2">Import locations</button> button.

The **.kml** or **.csv** file must comply with the following requirements:

- The \*.csv file needs to be delimited by semicolon (;) or comma (,)
- The first line needs to have exactly the following (case-sensitive) columns:name;lat;lng;address;height
- The name, lat and lng fields are required
- The height field represent the installation height above the ground in meters
- Locations for which the coordinates already exists are ignored when importing
- The file size cannot exceed 10MB

[Download example file](/hotspotty-locations-example.csv)

By choosing <button className="hotspotty-button">Add location</button>, you will be prompted to enter the address (or drop a pin on the map). Give your location a name so that you can easily see which location it is if you come back to it later. An example would be: _John's home address_. Next, you can specify the antenna height above the ground in case a hotspot is located on that location.

![Docs](/img/workspace/add-locations.png)

## Add locations via the Hotspotty map

1. Go to [locations on the map](https://app.hotspotty.net/locations).
2. Adding a location via the map is the same as in your workspace.

![Docs](/img/workspace/add-locations-2.png)

## What can you do with locations?

- Locations can be used to run [super simulations](super-simulations).
- Locations can be linked to an [install](../monitoring-and-managing/manage-installation-data) (installs can represent future or past locations).
- You can assign labels to your locations to organize them properly.
  The easiest way is by adding them directly via the locations tab. But you can also [create labels via your workspace settings](https://app.hotspotty.net/workspace/settings/labels).
  ![Docs](/img/workspace/locations_labels.png)

:::tip
**Why should I add labels?**

Locations are very powerful when creating a network. You could, for example, create 2 labels: "Country side" and "City". This way you can add locations to a specific group and easily filter through them.
:::

- You can assign your contacts to locations. This way you have an address book of where your hosts are located. This can be done when adding a location (see the steps above). Or add a contact later by clicking on the 3 dots <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 26 26" className="los-icon" fill="currentColor" aria-hidden="true"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg> next to the desired location.
