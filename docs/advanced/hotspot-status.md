---
sidebar_position: 4
---

import Admonition from '@theme/Admonition';

# Advanced hotspot overview

By clicking on a hotspot on the [Hotspotty map](https://app.hotspotty.net/hotspots), you'll find a row that contains lots of information.

![Docs](/img/getting-started/hotspot-status-ui.png)

## Remote diagnostics

[Full explanation](../features/monitoring-and-managing/remote-diagnostics)

## Activity

See what your hotspot is doing. The activity tab gives info about following items:

![Docs](/img/getting-started/activity-status-ui.png)

**All**: Shows beacons, witness info, challenges, incoming rewards and possible data transfers with IOT sensors.

**Beacon**: A beacon is a single transmission witnessed by any Hotspot. After a Transmitter receives the challenge, it will beacon the challenge packet. A hotspot that is the **beaconer** is called a **challengee**

![Docs](/img/getting-started/understanding-witnesses.png)

**Witness**: Witnesses on the Helium network are Hotspots that have seen (or witnessed) a Proof-of-Coverage packet from a Hotspot. This single-stage Proof-of-Coverage challenge is also known as a "Beacon".

**Challenger**: Hotspots are chosen as a Challenger by the network to issue Challenges (encrypted messages over the internet) to a selected Hotspot, receiving 0.95% of token rewards for doing so. Hotspots can issue challenges to any location around the world 🌎, not just to local Hotspots.

**Reward**: Shows the history of all the hotspot mining rewards. Helium hotspots earn rewards by doing different tasks.

![Docs](/img/getting-started/reward-types.png)

**Data transfer**: A hotspot gets rewarded data credits once an IOT sensor exchanges data with a Helium hotspot. Data credits are used by IOT sensors in order to use the network.

## Rewards

This tab shows the earning history of a particular hotspot. Get info about how a bad transmit scale is reducing earnings.

![Docs](/img/getting-started/hotspot-status-rewards.png)

## Reward scaling

[Reward scaling](https://docs.helium.com/blockchain/proof-of-coverage/#poc-transmit-scale) promotes installation of hotspots in areas with insufficient coverage and penalizes unnecessary duplicate coverage. Rewards for witnessing and being witnessed are reduced using formulas described by [HIP15](https://github.com/helium/HIP/blob/main/0015-beaconing-rewards.md) and [HIP17](https://github.com/helium/HIP/blob/main/0017-hex-density-based-transmit-transmit-scale.md).

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

## Witnesses

**All witnesses**: This is the sum of all the hotspots from which this hotspot was able to witness at least one beacon over the past 7 days.
Red dots represent hotspots with challenges that had at least one invalid witness over the past 7 days.
The green dots represent hotspots for which all witnessing activity was valid.

**Valid witnesses**: This is the sum of all the hotspots with at least one valid witness activity associated with beacons transmitted by this hotspot over the past 7 days.
Rewards for transmitted beacons are scaled down by the transmit scale. All dots have the color associated with the hotspot's transmit scale (1,00).

**Invalid witnesses**: This is the sum of all the hotspots with at least one invalid witness activity associated with beacons transmitted by this hotspot over the past 7 days.

## Comments

[Full explanation](/features/monitoring-and-managing/internal-workspace-comments)

## Info

- The **hotspot id** is unique for every single unit.

:::note
The name of multiple hotspots can be the same, those are distinguished by their hotspot address (=hotspot id).
:::

- The **blockchain data** is pulled from the [Helium Blockchain Explorer](https://explorer.helium.com/hotspots). A hotspot gets added to the blockchain when it gets asserted on a location for the first time. Hotspots can be re-asserted to another location.

- The **antenna gain** and **installation height** are crucial to earn the best amount of HNT. [How to find the best antenna for my hotspot?](https://gristleking.com/antennas-for-helium/)

- See if the hotspot is added to the [**denylist**](../features/visualize-and-understand/denylist.md).

- See the **Solana wallet address** associated to the hotspot.

- Get info about the [**Hotspot manufacturers metrics**](../features/visualize-and-understand/hotspot-manufacturers-metrics.md).

## Resources

https://docs.helium.com/troubleshooting/understanding-witnesses/

https://docs.helium.com/blockchain/proof-of-coverage/

https://docs.helium.com/blockchain/mining/
