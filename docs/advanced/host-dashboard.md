---
sidebar_position: 1
---

# Host Dashboard

## Video introduction

<div className="videoWrapper">
    <iframe width="967" height="544" src="https://www.youtube.com/embed/jAG8JZbs9vY" title="Hotspotty - Host Dashboard Intro Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## What is the host dashboard?

The host dashboard basically is a simplified overview of everything relevant to the host, including if the hotspot is active or not, and what commission agreements they currently have. All of this is now possible without adding hosts to your workspace where they would access private information about other hosts. Also, it removes some of the complexity of Helium that they don't need to know about as a host. Here are some use cases. When dealing with multiple hosts, hotspot administrators have to provide info about payments, how their hotspots are doing, and this all manually by contacting hosts via WhatsApp, SMS, phone calls etc. The host dashboard is a centralized place for everything, keeping things in one place and organized.


## How to enable the host dashboard?

**There are 2 prerequisites before contacts can make use of the host dashboard:**
 - The workspace needs to have the business plan.
 - The host dashboard needs to be activated in the workspace settings.

1. Click on workspace.
2. Go over to your workspace settings.
3. Click on '[Host Dashboard](https://app.hotspotty.net/workspace/settings/host-dashboard)'
4. Activate the host dashboard by clicking the toggle button.

 ![host-dashboard](/img/advanced/host-dashboard.png)

## How to use the host dashboard?
1. Navigate to https://host.hotspotty.net/.
2. Login by using an email address that you as a host have access to. (This email address needs to be assigned to 1/+ contacts in 1/+ workspaces that have the host dashboard activated)
3. Enter the verification code that is sent to your email.

:::note
- An email verification code only gets sent if the entered email address is in fact associated to a contact in a workspace and the host dashboard is activated for that workspace.

- The login code expires after 60 seconds.
:::

On the top, you can switch between the workspaces you are in as a contact. If a workspace has multiple contacts with the same email address assigned, the workspace will show up multiple times in the top bar with an index number. (e.g. John's workspace | John's workspace [2]) Keep in mind that only workspaces that have the host dashboard option activated will be visible to you.

For each workspace, you'll find info about the contact, attached commissions, registered payments and internal messages. 
You can use the internal messages section to send messages back and forth to your hotspot administrator(s). They  will receive an email with your message every time you send a message and vice versa.

All this data is view-only and cannot be edited through the host dashboard. It can only be edited via https://app.hotspotty.net/ by [workspace members](../features/monitoring-and-managing/settings/#members).

Each hotspot that is linked to a commission of the contact is also shown on the map and indicated with a colored dot that represents the online/offline status of the hotspot.

![host-dashboard](/img/advanced/host-dashboard-2.png)
