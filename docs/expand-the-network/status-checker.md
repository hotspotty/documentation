---
sidebar_position: 6
---

# Status check

When setting up a new hotspot or analyzing the performance of an existing one, there are many things you need to check in order to ensure top performance. The **status check** tool enables you to perform a live test of the actual hotspot instead of relying on the information provided by the blockchain. Before we dig into the tool, lets check out a few concepts first.

### What is the isse with the blockchain information?

When trying to understand the actual status of a hotspot on the network, there are many times that you can ask yourself "***my hotspot is online, why the explorer or hotspotty is showing as offline?***". This happens because the helium network and blockchain are built on top of the  [libp2p](https://libp2p.io/) library in order to be a truly decentralized network. The downside of a decentralized network is that there isn't a single source of true status of the network, meaning that every network update needs to be transmitted from a hotspot into one random node of the blockchain, and this node will then transmit this information to other nodes and so on. This communication method is called **gossiping**, meaning that one blockchain node talks to other nodes that then talks to other nodes until the information is shared among the entire network.

This gossiping activity can take up to a few days to finish syncing on all nodes. **[Hotspotty](https://hotspotty.net)** runs its own instance of the blockchain, the helium explorer is based on a blockchain node run by [stakejoy](https://stakejoy.com/), and other tools also have their own nodes. Understanding the gossiping method will clarify the why some hotspot statuses are different on one platform than on another.

### What is a relayed hotspot?

#### Port 44158

When a hotspot comes online, it communicates with the helium network, but that doesn't mean the network can connect back to the miner. The communication from the world to the hotspot happens via **port 44158**, which will ensure that all data can easily flow to and from the miner without any issue. If the port-forwarding isn't correctly setup, the miner can still communicate to the network, but it will first establish a direct connection to another unrelayed hotspot in the network via the **p2plib* protocol. This means that most data transmitted from and to this hotspot will first pass by another hotspot. As you can imagine, doing this will add more friction and slowness to the hotspot performance.

#### The listen address

Ipsum dolor


### The status check tool

With the understanding of the two sections above, let's finally dig into the **status check** tool and how you can use it to debug a hotspot status. Because of how the helium network works with whispering (explained above), you can't be 100% sure that the information provided by the blockchain is correct. Before the release of this tool, the only thing you could do is to wait for the hotspot information to be updated in the blockchain and hope for the best (especially knowing that this can take up to a few days to update).

What the tool does is, it forces a **blockchain node** and a **hotspot** to perform a life ping to the hotspot and tries to figure out with as much certainty as possible, the actual status of the hotspot.

![hotspot-page](/img/expand-the-network/status-check-01.png)

When you go to any hotspot status page, you have two sections, **Blockchain data**, and **Real time status check** (displayed in the image above). The **Blockchain data** is the latest information pulled from the blockchain, which is usually correct, but can be outdated. If you want to double-check the data, you can run the **status check** by pressing the <button class="hotspotty-button">Run status check</button> button. 

![hotspot-page](/img/expand-the-network/status-check-05.png)

The result of the **status check** will be separated into the blocks:
* **1** - Shows if the hotspot is **online**, **offline**, or **likely online**. **Likely online** happens when all our tests fail (couldn't fetch a valid address for the hotspot to perform a PIN), but the hotspot has had an activity recorded on the blockchain not too long ago.
* **2** - Based on the [**listen address**](#the-listen-address), we can know if the hotspot is relayed or not. This data is fetched from pinging the hotspot, and not from the blockchain data.
* **3** - 
* **4** - 

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

A relayed hotspot can be fixed by forwarding the **TCP port 44158** to the local IP address of the hotspot. This can be configured in the router settings. After opening and forwarding the port, it can take some time for the blockchain to update the information. Meanwhile, the information is being spread around the network, you can use the port tester to confirm that port **44158** is indeed open. If the result of this check is positive, and you forwarded the port **44158** to the local IP address of the hotspot, you can be confident that the hotspot will show as "not relayed" in a matter of time.

The port test must be performed using the public IP address of the network to which the hotspot is connected. If this information is available on the blockchain, that IP address will be filled in automatically. The network IP address might have changed and might not yet have been updated on the blockchain. If this info is unavailable, we use the IP address from which you are using Hotspotty currently. That might not be available or might be different from your hotspot network (VPN, mobile internet, ...). To be 100% certain, you can connect to the same network as the hotspot with your computer/phone and go to [whatismyip.com](https://whatismyip.com) to get the correct IP address.

To run the port test, click on the three dots, <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 26 26" class="los-icon" fill="currentColor" aria-hidden="true"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg> and select **"Test relay status (port test)"**, which will open a form which is pre-filled with your current external IP address, for convenience. You may need to change the IP address to the network where the hotspot is located.

![port-check](/img/expand-the-network/status-check-port-check-01.png)

![port-check](/img/expand-the-network/port-check.gif)


### Frequently asked questions:
* More information coming soon...

## Video Introduction

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/0ETAK0Osz2Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Resources

Here are some resources you can use to help you understand more about the miner and help you fixing your relaying status

* [The ultimate workflow for fixing your relayed helium miner, by ](https://gristleking.com/the-ultimate-workflow-for-fixing-your-relayed-helium-miner/)
* [How to Fix RELAYED Helium Miner Hotspot (Port Forwarding 44158) ](https://www.youtube.com/watch?v=5UgDMG_g3qI)
* [Basic miner operation](https://docs.helium.com/mine-hnt/full-hotspots/become-a-maker/basic-miner-operation/)