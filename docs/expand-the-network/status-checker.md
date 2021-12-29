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

When a hotspot comes online, it communicates with the helium network, but that doesn't mean the network can connect back to the miner. The communication from the world to the hotspot happens via **port 44158**, which will ensure that all data can easily flow to and from the miner without any issue. If the port-forwarding isn't correctly setup, the miner can still communicate to the network, but it will first establish a direct connection to another unrelayed hotspot in the network via the **p2plib** protocol. This means that most data transmitted from and to this hotspot will first pass by another hotspot. As you can imagine, doing this will add more friction and slowness to the hotspot performance.

#### The listen address

The **listen address** is the address the network uses to communicate with the hotspot. If your hotspot is **not relayed** and accessible, the listen address will look something similar to **"/ip4/108.53.113.177/tcp/44158"**, meaning that this hotspot's IP address is **108.53.113.177** and is configured on the port **44158**. All good there.

If the port-forwarding is not successfully done, the hotspot will be **relayed**, which means that all communication to the hotspot will be done via the p2p network using another hotspot as intermediator. In this case, the hotspot listen address will be something like **/p2p/11uwqFkaZZDiUBDCB9gdKdD9JxrKPsp7MRLkWUvkCYEwtS5YqYr/p2p-circuit/p2p/11127YbdxPgbyGBXiFegqv56mh76Yqv9XfD3cEvH9672sBcqLw7**. If this is the case, you need to fix the port-forwarding of the device for optimal performance.

### The status check tool

With the understanding of the two sections above, let's finally dig into the **status check** tool and how you can use it to debug a hotspot status. Because of how the helium network works with whispering (explained above), you can't be 100% sure that the information provided by the blockchain is correct. Before the release of this tool, the only thing you could do is to wait for the hotspot information to be updated in the blockchain and hope for the best (especially knowing that this can take up to a few days to update).

What the tool does is, it forces a **blockchain node** and a **hotspot** to perform a life ping to the hotspot and tries to figure out with as much certainty as possible, the actual status of the hotspot.

![hotspot-page](/img/expand-the-network/status-check-01.png)

When you go to any hotspot status page, you have two sections, **Blockchain data**, and **Real time status check** (displayed in the image above). The **Blockchain data** is the latest information pulled from the blockchain, which is usually correct, but can be outdated. If you want to double-check the data, you can run the **status check** by pressing the <button class="hotspotty-button">Run status check</button> button. 

![hotspot-page](/img/expand-the-network/status-check-05.png)

The result of the **status check** will be separated into the blocks:
* **1** - Shows if the hotspot is **online**, **offline**, or **likely online**. **Likely online** happens when all our tests fail (couldn't fetch a valid address for the hotspot to perform a PIN), but the hotspot has had activity recorded on the blockchain not too long ago.
* **2** - Based on the [**listen address**](#the-listen-address), we can know if the hotspot is relayed or not. This data is fetched from pinging the hotspot, and not from the blockchain data.
* **3** - This is the average time it took to get a ping response from our servers in North Europe to the miner. Keep in mind that the hotspot responding to the ping request is mich more important information than the actual value of the ping.
* **4** - When the system tries to ping the hotspot, it uses two data sources, the **miner** performs a ping using the miner's peer-book, so that would be the latest value available on the network. The **blockchain** tries reaching out to the device using the data stored in the blockchain. Let's list some available options:
    * **Miner 5/5 pings succeeded** & **Blockchain 5/5 pings succeeded**: Out system was able to ping the hotspot using the address from the **miner** and from the **blockchain**. This means that everything is good on the hotspot end and the blockchain contains the actual address of the device.
    * **Miner 5/5 pings succeeded** & **Blockchain 0/5 pings succeeded**: Everything is good on the helium miner, but the **listen address** on the blockchain is outdated and will be updated as soon as the gossiping is finished.
    * **No listen address** & **Blockchain 0/5 pings succeeded**: Something is wrong, the device can be offline or unresponsive. The **miner** couldn't reach it in its peer-book address as well as with the address from the blockchain.
    

Let's perform a few status checks that will represent different results to demonstrate the tool better.

#### Case 1:
![hotspot-page](/img/expand-the-network/status-check-02.png)

Everything good, we were able to verify that the hotspot is **not relayed**, and was able to ping it from the **miner** address as well with the address from the **blockchain**.

#### Case 2:
![hotspot-page](/img/expand-the-network/status-check-04.png)

This is a tricky one, the system could not reach the hotspot from the address presented on the **blockchain**, and the miner could not fetch the listen address for the hotspot. The address presented on the blockchain also reflects that the hotspot is (or at least, was) relayed. **Likely online** comes form the fact that, even not being able to ping the device, there was activity recorded on the network. In this case it was recorded six hours ago, which means that the hotspot can still be online but having some issue or it just went offline six hours ago.

One thing you can do here is run the **status check** another time or wait a few hours to test again.

#### Case 3:
![hotspot-page](/img/expand-the-network/status-check-03.png)

Looks like the device is actually **offline**, it didn't record any activity many hours ago, the listen address from the blockchain is reflecting of a **relayed** hotspot, but the miner couldn't ping it.

### Port Check

A relayed hotspot can be fixed by forwarding the **TCP port 44158** to the local IP address of the hotspot. This can be configured in the router settings. After opening and forwarding the port, it can take some time for the blockchain to update the information. Meanwhile, the information is being spread around the network, you can use the port tester to confirm that port **44158** is indeed open. If the result of this check is positive, and you forwarded the port **44158** to the local IP address of the hotspot, you can be confident that the hotspot will show as "not relayed" in a matter of time.

The port test must be performed using the public IP address of the network to which the hotspot is connected. If this information is available on the blockchain, that IP address will be filled in automatically. The network IP address might have changed and might not yet have been updated on the blockchain. If this info is unavailable, we use the IP address from which you are using Hotspotty currently. That might not be available or might be different from your hotspot network (VPN, mobile internet, ...). To be 100% certain, you can connect to the same network as the hotspot with your computer/phone and go to [whatismyip.com](https://whatismyip.com) to get the correct IP address.

To run the port test, click on the three dots, <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 26 26" class="los-icon" fill="currentColor" aria-hidden="true"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg> and select **"Test relay status (port test)"**, which will open a form which is pre-filled with your current external IP address, for convenience. You may need to change the IP address to the network where the hotspot is located.

![port-check](/img/expand-the-network/status-check-port-check-01.png)

![port-check](/img/expand-the-network/port-check.gif)

## Video Introduction

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/0ETAK0Osz2Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Resources

Here are some resources you can use to help you understand more about the miner and help you fixing your relaying status

* [The ultimate workflow for fixing your relayed helium miner, by ](https://gristleking.com/the-ultimate-workflow-for-fixing-your-relayed-helium-miner/)
* [How to Fix RELAYED Helium Miner Hotspot (Port Forwarding 44158) ](https://www.youtube.com/watch?v=5UgDMG_g3qI)
* [Basic miner operation](https://docs.helium.com/mine-hnt/full-hotspots/become-a-maker/basic-miner-operation/)