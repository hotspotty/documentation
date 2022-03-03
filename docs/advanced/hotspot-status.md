---
sidebar_position: 3
---

import Admonition from '@theme/Admonition';

# Advanced hotspot overview

By clicking on a hotspot on the [Hotspotty map](https://app.hotspotty.net/hotspots), you'll find a row that contains lots of information.

![Docs](/img/getting-started/hotspot-status-ui.png)

## Status

[Full explanation](../features/Monitoring%20&%20Managing/status-checker)

## Activity

See what your hotspot is doing. The activity tab gives info about following items:

![Docs](/img/getting-started/activity-status-ui.png)

**All**: Shows beacons, witness info, challenges, incoming rewards and possible data transfers with IOT sensors.

**Beacon**: A beacon is a single transmission witnessed by any Hotspot. After a Transmitter receives the challenge, it will beacon the challenge packet. A hotspot that is the **beaconer** is called a **challengee**

![Docs](/img/getting-started/understanding-witnesses.png)

**Witness**: Witnesses on the Helium network are Hotspots that have seen (or witnessed) a Proof-of-Coverage packet from a Hotspot. This single-stage Proof-of-Coverage challenge is also known as a "Beacon". Be aware that relayed hotspots do not only affect the hotspot owner but also the area around. A relayed hotspot will block incoming witnesses to the challenger what results in both the challenger and the beaconer not earning HNT. [How to get out of relayed?](../features/Monitoring%20&%20Managing/status-checker#what-is-a-relayed-hotspot)

**Challenger**: Hotspots are chosen as a Challenger by the network to issue Challenges (encrypted messages over the internet) to a selected Hotspot, receiving 0.95% of token rewards for doing so. Hotspots can issue challenges to any location around the world 🌎, not just to local Hotspots.

**Reward**: Shows the history of all the hotspot mining rewards. Helium hotspots earn rewards by doing different tasks.

![Docs](/img/getting-started/reward-types.png)

**Data transfer**: A hotspot gets rewarded data credits once an IOT sensor exchanges data with a Helium hotspot. Data credits are used by IOT sensors in order to use the network.

## Rewards

This tab shows the earning history of a particular hotspot. Get info about how a bad transmit scale is reducing earnings.

![Docs](/img/getting-started/hotspot-status-rewards.png)

## Reward scaling

[Reward scaling](https://docs.helium.com/blockchain/proof-of-coverage/#poc-reward-scaling) promotes installation of hotspots in areas with insufficient coverage and penalizes unnecessary duplicate coverage. Rewards for witnessing and being witnessed are reduced using formulas described by [HIP15](https://github.com/helium/HIP/blob/main/0015-beaconing-rewards.md) and [HIP17](https://github.com/helium/HIP/blob/main/0017-hex-density-based-transmit-reward-scaling.md).

:::info

### PoC rewards explained

Proof of Coverage challenges are exercises for hotspots to prove their usefulness to the network, which is designed to pass data between sensors and servers using RF.<br/><br/>
In a PoC challenge a hotspot transmits a beacon and upon successful witnessing by other hotspots, two things were achieved:<br/>
1 - the transmitter proved that it can reach sensors and deliver data to them<br/>
2 - the witnessing hotspots proved that they can receive and publish data from sensors<br/><br/>
Rewards will be given to these hotspots but the question is: how much value did each hotspot actually provide?<br/><br/>
[HIP15](https://github.com/helium/HIP/blob/main/0015-beaconing-rewards.md) rewards up to 5 reward unitsfor a PoC challenge:<br/>
1 - the transmitting hotspot earns between 0 reward units (no witnesses) and 1.99 reward units (14+ witnesses).<br/>
2 - witnessing hotspots earn between 1 reward unit (up to 4 witnesses) and 0.12 reward units (14+ witnesses).<br/><br/>
Hotspotty displays the estimated Witness Reward Units (number 2 above) for each hotspot. This facilitates prioritization of hotspot installs in areas where there's still value to witnessing the hotspots around (Witness Reward Units ~ 1.00).<br/><br/>
HIP17 rewards hotspots transmitting from a given location based on how many other hotspots can transmit from the same area. It assigns a transmit scale which gets lower the more saturated the area is so that a redundancy is met but oversaturation is disincentivized. The abovementioned reward units are multiplied by the transmit scale of the transmitting hotspot.<br/><br/>
Most rewards are earnend by witnessing other hotspots, and these rewards are scaled down by the transmit scale of these other hotspots. This means that optimizing rewards (and thereby the network) comes down to collective network planning efforts in equally spreading out the network, as that will be more valuable as a whole and more profitable individually.
:::

You can run following simulations here (following metrics are examples):

![Docs](/img/getting-started/simulations.png)

### Transmit scale simulation

Simulate the transmit scales for this area by enabling or disabling hotspots and/or locations. By default this option is **enabled** and will show you metrics regarding the hotspot's transmit scale and witness reward units in that area. If you choose to **disable** this option, that hotspot will not be included in other transmit scale simulation you perform in that area. These calculations are done locally on your machine and the option will automatically be enabled again if you remove your browser cache or data. [Read more about transmit scale](../advanced/evaluate-hotspot-locations#transmit-scale).
:::tip
Most rewards come from witnessing activities, which are decreased based on the values below. The lower these values, the less attractive it is to install a hotspot nearby because there is no added value for witnessing it.
:::

:::tip
**Why do I have a terrible Witness Reward scale?**

This represents the number of reward units another hotspot gets for witnessing this hotspot. This value ranges from 0.12 to 1 and is calculated by the 'Reward Formula for each Receiver' in [HIP15](https://github.com/helium/HIP/tree/main/0015-beaconing-rewards). If this value is below 1, it means that this hotspot can be witnessed by more than 4 other hotspots, which is the redundancy targeted by Helium.
:::

The HIP17 transmit scale is based on calculations for h3 hexes at different resolutions. The excess or available number of interactive hotspots or planned locations is displayed per hex below the metrics. [Learn about hexes](../advanced/evaluate-hotspot-locations#hexes)

### Placement simulation

You can change the positioning of the hotspot on the map to see how it would perform in another location. All the metrics below will then update per your new location. Keep in mind that this is a simulation and you are not actually reasserting the hotspot on another location on the map.

:::caution
Placements over 150m away from the physical install are not recommended as [PoCv11](https://blog.helium.com/pocv11-explained-call-to-action-4add36c75a1d) will invalidate witnesses resulting in less rewards.
:::

## Witnesses

**All witnesses**: This is the sum of all the hotspots from which this hotspot was able to witness at least one beacon over the past 7 days.
Red dots represent hotspots with challenges that had at least one invalid witness over the past 7 days.
The green dots represent hotspots for which all witnessing activity was valid.

**Valid witnesses**: This is the sum of all the hotspots with at least one valid witness activity associated with beacons transmitted by this hotspot over the past 7 days.
Rewards for transmitted beacons are scaled down by the transmit scale. All dots have the color associated with the hotspot's transmit scale (1,00).

**Invalid witnesses**: This is the sum of all the hotspots with at least one invalid witness activity associated with beacons transmitted by this hotspot over the past 7 days.

## Comments

[Full explanation](../features/Monitoring%20&%20Managing/internal-workspace-comments)

## Info

- The **hotspot id** is unique for every single unit.

:::note
The name of multiple hotspots can be the same, those are distinguished by their hotspot address (=hotspot id).
:::

- The **blockchain data** is pulled from the [Helium Blockchain Explorer](https://explorer.helium.com/hotspots). A hotspot gets added to the blockchain when it gets asserted on a location for the first time. Hotspots can be re-asserted to another location.

- The **antenna gain** and **installation height** are crucial to earn the best amount of HNT. [How to find the best antenna for my hotspot?](https://gristleking.com/antennas-for-helium/)

- See if the hotspot is added to the [**denylist**](../features/Visualize%20&%20Understand/denylist.md).

- See the **HNT wallet address** associated to the hotspot.

- Get info about the [**Hotspot manufacturers metrics**](../features/Visualize%20&%20Understand/hotspot-manufacturers-metrics.md).

## Resources

https://docs.helium.com/troubleshooting/understanding-witnesses/

https://docs.helium.com/blockchain/proof-of-coverage/

https://docs.helium.com/blockchain/mining/
