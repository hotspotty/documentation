---
sidebar_position: 5
---

# Line of sight 

When planning a hotspot deployment, there are many tools that you can use to help you assess if the locations are good and promising or not. With helium's PoC ([Proof-Of-Coverage](https://docs.helium.com/blockchain/proof-of-coverage/)), being able to communicate with other hotspots is extremely important to guarantee a profitable mining operation, as it is the current way the network analyzes that your hotspot is actually providing coverage to the network.

In order to verify that you have a good location, you can use one tool built by our team called **Line of Sight** (LoS), which checks if two points in the map along with its altitudes can freely see each other. In our experience, proving line of sight is a more accurate tool than doing RF simulations to guarantee connectivity between two antennas.


To use our line of sight tool, there are two different ways you can use it. 


### First method
The first way to use the tool is by going to the [map within hotspotty](https://app.hotspotty.net/hotspots) and click on the <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-2 0 26 26" stroke="currentColor" class="los-icon"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg> icon at the bottom right of the screen. That will open a pin on the page where you will be prompted to select the **first point** where you want to analyze. Once you are happy with the first location, select **Confirm**.

![los-01](/img/expand-the-network/los-01.png)

You will then be prompted with the second location. There is one thing you can notice now, whereby simply moving the second point, you can already analyze if the two points can see each other by the color of the line. Below, you can check two examples, where the first one, line of sight was established, and the second one wasn't.

**Success**, the two points that are separated by 9,114 meters have clear line of sight
![line of sight succeeded](/img/expand-the-network/los-02.png)

**Fail**, the two points that are separated by 9,746 meters have clear line of sight.
![line of sight fail](/img/expand-the-network/los-03.png)

Now that you have the two points selected, you can click on **Confirm** to be able to check the elevation map between those two points. In the image below, you can see the example where LoS failed, as there is a mountain between the two points. In the image below, you can also click on **Point A** or **Point B** in order to relocate those unique points.

![line of sight map](/img/expand-the-network/los-04.png)

### Second method
The second method you can use to start a **LoS** verification is by going to the **[locations list](https://app.hotspotty.net/locations)**  on the map or the **[workspace locations](https://app.hotspotty.net/workspace/locations)** and click on the three dots, <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 26 26" class="los-icon" fill="currentColor" aria-hidden="true"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg> and select **Line of Sight**.  Hotspotty will pre-define the first spot, as this location is the starting point of your verification.

![los-05](/img/expand-the-network/los-05.png)


## Video Example

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/lBdkoYNK_kE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>