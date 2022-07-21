---
sidebar_position: 2
---

# Evaluate hotspot locations

## Transmit scale

Transmit scale is a multiplier that is applied to rewards of any Hotspot that witnesses you. The scale also affects how many rewards you receive as a Challengee. The number is a representation of how dense a hexagon is (how many Hotspots occupy that hex) at various resolutions (from resolution 12 down to resolution 4).

The only way to affect the scale is to move your hotspot somewhere less dense, or somehow remove the hotspots around you.

HIP17 rewards hotspots transmitting from a given location based on how many other hotspots can transmit from the same area. It assigns a transmit scale which gets lower the more saturated the area is so that a redundancy is met but oversaturation is disincentivized. PoC rewards are multiplied by the transmit scale of the transmitting hotspot.

## Hexes

<div className="videoWrapper">
    <iframe width="885" height="498" src="https://www.youtube.com/embed/MdSyjzE-s7Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>
