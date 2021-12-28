---
sidebar_position: 6
---

# Status check

When setting up a new hotspot or analyzing the performance of an existing one, there are many things you need to check in order to ensure top performance. The **status check** tool enables you to perform a live test of the actual hotspot instead of relying on the information provided by the blockchain. Before we dig into the tool, lets check out a few concepts first.

### What is the isse with the blockchain information?

When trying to understand the actual status of a hotspot on the network, there are many times that you can ask yourself "***my hotspot is online, why the explorer or hotspotty is showing as offline?***". This happens because the helium network and blockchain are built on top of the  [libp2p](https://libp2p.io/) library in order to be a truly decentralized network. The downside of a decentralized network is that there isn't a single source of true status of the network, meaning that every network update needs to be transmitted from a hotspot into one random node of the blockchain, and this node will then transmit this information to other nodes and so on. This communication method is called **gossiping**, meaning that one blockchain node talk to other nodes that then talks to other nodes until the information is shared among the entire network.

This gossiping activity can take up to a few days to finish syncing on all nodes. **[Hotspotty](https://hotspotty.net)** runs its own instance of the blockchain, the helium explorer is based on a blockchain node run by [stakejoy](https://stakejoy.com/), and other tools also have their own nodes. Understanding the gossiping method will clarify the why some hotspot statuses are different on one platform than in another.

### What is a relayed hotspot?

When a hotspot comes online, it communicates with the helium network, but that doesn't mean the network can connect back to the miner. The communication from the world to the hotspot happens via **port 44158**, which will ensure that all data can easily flow to and from the miner without any issue. If the port-forwarding isn't correctly setup, the miner can still communicate to the network, but it will first establish a direct connection to another unrelayed hotspot in the network via the **p2plib* protocol. This means that most data transmitted from and to this hotspot will first pass by another hotspot. As you can imagine, doing this will add more friction and slowness to the hotspot performance.


### The status check tool

With the understanding of the two sections above, let's finally dig into the **status check** tool and how you can use it to debug a hotspot status. Because of how the helium network works with whispering (explained above), you can't be 100% sure that the information provided by the blockchain is correct. Before the release of this tool, the only thing you could do is to wait for the hotspot information to be updated in the blockchain and hope for the best (especially knowing that this can take up to a few days to update).

What the tool does is, it forces a **blockchain node** and a **hotspot** to perform a life ping to the hotspot and tries to figure out with as much certainty as possible, the actual status of the hotspot.

![hotspot-page](/img/expand-the-network/status-check-01.png)

When you go to any hotspot status page, you have two sections, **Blockchain data** and **Real time status check** (displayed in the image above). The **Blockchain data** is the latest information pulled from the blockchain, which is usually correct, but can be outdated. If you want to double-check the data, you can run the **status check** by pressing the <button class="hotspotty-button">Run status check</button> button. 

Let's perform a few status checks that will represent different results to demonstrate the tool better.

#### Case 1:
![hotspot-page](/img/expand-the-network/status-check-02.png)

More information coming soon...

#### Case 2:
![hotspot-page](/img/expand-the-network/status-check-04.png)

More information coming soon...

#### Case 3:
![hotspot-page](/img/expand-the-network/status-check-03.png)

More information coming soon...

### Port Check

More information coming soon...

### Frequently asked questions:
* **Miner says 5/5 and blockchain 0/5, what does it mean?** - More information coming soon...

## Video Introduction

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/0ETAK0Osz2Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Resources

Here are some resources you can use to help you understand more about the miner and help you fixing your relaying status

* [basic miner operation](https://docs.helium.com/mine-hnt/full-hotspots/become-a-maker/basic-miner-operation/)
* [the ultimate workflow for fixing your relayed helium miner, by ](https://gristleking.com/the-ultimate-workflow-for-fixing-your-relayed-helium-miner/)
