---
sidebar_position: 2
---

# Pay your contacts

If you have not yet created a commission report, please go ahead and take a look [here](../payment-management/generate-commission-reports) before proceeding.

## Pay contacts individually

Instead of paying all contacts in a commission report at the same time you have the ability to pay your contacts one by one. Start by opening up a commission report.

![Docs](/img/workspace/pay-seperately-1.png)

Select the contact(s) you want to pay. And click on <button className="hotspotty-button">Pay selected contacts</button>.
You can choose to pay your selected contact(s) using the Helium app to scan the provided QR code or pay using the [Helium CLI](https://docs.helium.com/wallets/cli-wallet/).

![Docs](/img/workspace/pay-seperately-2.png)

Since April 2022 you can also download a CSV file for all contacts that have an HNT address linked to them. This CSV file contains info about the contact name, email, phone, HNT amount and wallet address.

![Docs](/img/workspace/pay-seperately-3.png)

## Bulk payments

Hotspotty gives you the option to pay multiple people at once so that you do not have to worry about copy/pasting every single Solana wallet address. We have 4 options to quickly have your contacts paid:

### Pay using a QR code

You can make bulk payments by simply scanning a QR code provided when you [create a commission report](../payment-management/generate-commission-reports). Open up the Helium app. Go to 'My Wallet', and click on the blue 'Send HNT' button. Instead of entering the recipient address you can easily click on the qr code symbol, and you are good to go.

### Pay using Hotspotty on your phone

To use this option, you are required to have the Helium HNT Wallet app ([iOS](https://apps.apple.com/us/app/helium-hnt-wallet/id1609525848) or [Android](https://play.google.com/store/apps/details?id=com.helium.wallet.app)) installed. There is no limit to the number of contacts that can be paid per transaction, unlike the QR code payment option (max 25 per QR). Simply open up the desired commission report on your phone. There will be an additional option that's not visible on the laptop/desktop version. <button className="hotspotty-button">Pay with Helium wallet</button> This will open up the new Helium wallet app and ask you to sign the transactions. Additionally, you can pay individual contacts with this method as well by manually registering payments for them. [Click here to learn more](../planning-and-optimizing/manage-contacts#register-payments).

<div className="videoWrapper">
<iframe width="967" height="544" src="https://www.youtube.com/embed/olFHOrKshYM" title="Hotspotty - New payment method directly from the helium wallet" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Pay using the CLI

When using Hotspotty on a mobile device, you can load the bulk payment transaction directly into the [Helium Wallet App](https://docs.helium.com/wallets/app-wallet) to pay your contacts.

### Pay using a CSV file

Download a CSV file of an entire commission report with the amount owed for each contact, and the default payment details for that currency.

## Duplicate payment prevention

Not feeling confident in paying tons of people with some simple clicks? We made it easy for you by automatically marking a [commission report](../payment-management/generate-commission-reports) as paid so that you are not able to accidentally pay your hosts multiple times at once.

Besides that, you will also get notified whenever there is payment information missing from one or more hosts.
