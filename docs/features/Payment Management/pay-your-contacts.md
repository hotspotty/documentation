---
sidebar_position: 2
---

# Pay your contacts

If you have not yet created a commission report, please go ahead and take a look [here](../Payment%20Management/generate-commission-reports) before proceeding.

## Pay contacts individually

Instead of paying all contacts in a commission report at the same time you have tha ability to pay your contacts one by one. Start by opening up a commission report.

![Docs](/img/workspace/pay-seperately-1.png)

Select the contact(s) you want to pay. And click on <button class="hotspotty-button">Pay selected contacts</button>.
You can choose to pay your selected contact(s) using the Helium app to scan the provided QR code or pay using the [Helium CLI](https://docs.helium.com/wallets/cli-wallet/).

![Docs](/img/workspace/pay-seperately-2.png)

## Bulk payments

Hotspotty gives you the option to pay multiple people at once so that you do not have to worry about copy/pasting every single HNT wallet address. We have 2 options to quickly have your contacts paid:

### Pay using a QR code

You can make bulk payments by simply scanning a QR code provided when you [create a commission report](../Payment%20Management/generate-commission-reports). Open up the Helium app. Go to 'My Wallet', and click on the blue 'Send HNT' button. Instead of entering the recipient address you can easily click on the qr code symbol, and you are good to go.

### Pay using the CLI

By choosing the CLI payment option you will be prompted to download the generated JSON file. The file contains all the HNT wallet addresses associated with the HNT amount your hosts need to receive, so you can easily import the data using the [Helium CLI](https://docs.helium.com/wallets/cli-wallet/).

## Duplicate payment prevention

Not feeling confident in paying tons of people with some simple clicks? We made it easy for you by automatically marking a [commission report](../Payment%20Management/generate-commission-reports) as paid so that you are not able to accidentally pay your hosts multiple times at once.

Besides that, you will also get notified whenever there is payment information missing from one or more hosts.
