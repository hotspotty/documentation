---
sidebar_position: 5
---

# Generate commission reports

Before you continue, it is recommended to check out [add contact](../hotspotty-workspace/manage-contacts), [add hotspot](../hotspotty-workspace/add-hotspot) and [add install](../hotspotty-workspace/manage-installation-data).

Calculate and track payouts for contacts that facilitate your hotspot deployments. Add installs and link commissions for your contacts to get monthly commission reports.

## Video introduction

<div class="videoWrapper">
    <iframe width="560" height="315" src="https://www.loom.com/embed/6812d5c255f14dddbc9f4878e68efc64" title="Loom video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Create commission report

### **1. Link your [contact](../hotspotty-workspace/manage-contacts) to a location that is attached to an install.**

![Docs](/img/workspace/commission-report.png)
In this example, John (a contact) hosts a hotspot at the given location address. This location is where the hotspot is currently installed, which is defined in the [installs tab](../hotspotty-workspace/manage-installation-data).

:::note
**In order to pay people easily in HNT using commission reports, a HNT wallet address must be added as a payment method to your contact otherwise you can only view the commission report.**
:::

### **2. Add commission to [install](../hotspotty-workspace/manage-installation-data)**

You can either add a new commission for your contact or attach a [commission template](../hotspotty-workspace/settings#commission-templates) that you can set up through your workspace settings. [Commission templates](../hotspotty-workspace/settings#commission-templates) are extremely useful if you want the same payout rules for multiple hosts.

![Docs](/img/workspace/commission-report-2.png)

#### Add new commission

By clicking on **+ Add new commission** you are able to specify what HNT percentage your host will receive. Setting an expiry date is optional. When the expiry date is met, the commission will no longer be active and the percentage will not be visible in any commission generated after that date.

![Docs](/img/workspace/commission-report-3.png)

### **3. Generate report**

It is time to generate a commission report now! Head over to the [**Commission reports**](https://app.hotspotty.net/workspace/commission-reports) tab in your workspace and click on <button class="hotspotty-button">Generate report</button>.

Next, specify the start and end date for the report and generate it.

Please note that Hotspotty will not be held liable for any indirect or accidental losses that will occur during the usage of the application. We do not claim that the entirety of the Hotspotty commissions module will be free of error although we will do our best efforts to maintain that the application will run as smoothly as possible. You will be responsible for all activity on your account.

![Docs](/img/workspace/commission-report-4.png)

Open your generated report by clicking on the <button class="hotspotty-button">Open #</button>.

![Docs](/img/workspace/commission-report-5.png)

### **4. Tips and tricks**

The report will show the total amount of commissions in your preferred currency. The counter next to the amount shows how many contacts have an HNT wallet attached to them. U can pay them very easily by either choosing <button class="hotspotty-button">Pay selected contacts</button> or <button class="hotspotty-button">Pay all contacts</button>. It is recommended to check out [pay your contacts](../hotspotty-workspace/pay-your-contacts).

Hotspotty helps you stay on top of paid HNT commissions by automatically monitoring the blockchain for paid wallet transactions making it easy to view across all your contacts - while still enabling you to manually mark commissions as paid, if needed.

Commission reports can also get exported to a raw JSON file.

![Docs](/img/workspace/commission-report-6.png)

**Open details**: Shows you all the info you need for a specific contact. In case you want to add HNT as a payment method to your contact, that is possible here as well.

![Docs](/img/workspace/commission-report-7.png)
