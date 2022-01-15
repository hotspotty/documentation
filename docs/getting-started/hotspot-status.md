---
sidebar_position: 5
---

# Hotspot status

![Docs](/img/getting-started/hotspot-status-ui.png)

## Status
[Full explanation](../expand-the-network/status-checker)
## Activity
See what your hotspot is doing. The activity tab gives info about following items: ![Docs](/img/getting-started/activity-status-ui.png)

**All**: Shows beacons, witness info, challenges, incoming rewards and possible data transfers with IOT sensors.

**Beacon**: A beacon is a single transmission witnessed by any Hotspot.  After a Transmitter receives the challenge, it will beacon the challenge packet. A hotspot that is the **beaconer** is called a **challengee**![Docs](/img/getting-started/understanding-witnesses.png)

**Witness**: Witnesses on the Helium network are Hotspots that have seen (or witnessed) a Proof-of-Coverage packet from a Hotspot. This single-stage Proof-of-Coverage challenge is also known as a "Beacon". Be aware that relayed hotspots do not only affect the hotspot owner but also the area around. A relayed hotspot will block incoming witnesses to the challenger what results in both the challenger and the beaconer not earning HNT. [How to get out of relayed?](../expand-the-network/status-checker#what-is-a-relayed-hotspot)

**Challenger**: Hotspots are chosen as a Challenger by the network to issue Challenges (encrypted messages over the internet) to a selected Hotspot, receiving 0.95% of token rewards for doing so. Hotspots can issue challenges to any location around the world 🌎, not just to local Hotspots.

**Reward**: Shows the history of all the hotspot mining rewards. Helium hotspots earn rewards by doing different tasks. ![Docs](/img/getting-started/reward-types.png)

**Data transfer**: A hotspot gets rewarded data credits once an IOT sensor exchanges data with a Helium hotspot. Data credits are used by IOT sensors in order to use the network.
## Rewards
This tab shows the earning history of a particular hotspot. Get info about how a bad transmit scale is reducing earnings.
## Reward scaling
## Witnesses
## Comments
[Contact a hotspot owner or get contacted](../expand-the-network/contact-hotspot-owner)
## Info
The hotspot id is unique for every single unit. Note that the name of multiple hotspots can be the same, those are distinguished by their hotspot address (=hotspot id).

## Resources
https://docs.helium.com/troubleshooting/understanding-witnesses/

https://docs.helium.com/blockchain/proof-of-coverage/

https://docs.helium.com/blockchain/mining/