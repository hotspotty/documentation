# Payment Management

Hotspotty was originally built in-house to help track HNT commissions for hosts and referrals when deploying the Helium network in Lisbon, Portugal, back when the network only existed in the North America.

In December 2020 it was released to the public as a free tool and it rapidly got adopted by many community members to keep track of their host payments. In September 2021 a completely new version of the Payment Management feature set was released and well received. In March 2022 another major update was released that addresses many use cases and requests from the community.

You can find a high level overview of the different aspects of Hotspotty's Payment Management below:

## Glossary

- **Location**: _Locations_ represent physical addresses for planning and prioritizing future hotspot installs.
- **Contact**: _Contacts_ represent anyone facilitating your hotspot deployments and optionally gets paid for their added value.
- **Install**: _Installs_ track the _location_ at which a _hotspot_ was installed over what period of time.
- **Commission**: A _commission_ defines how a _contact_ should be paid for assisting with an _install_.
- **Commission template**: _Commission templates_ are configurations that can be used to speed up and standardize assigning _commissions_ to _contacts_.
- **Commission report**: _Commission reports_ can be generated to calculate how much each _contact_ is owed based on their _commissions_.
- **Contact payment**: _Contact payments_ are a way to track actual payments made to _contacts_ for their _commissions_.
- **Payment method**: _Payment methods_ allow keeping track of where to send the payouts for each relevant currency.

## The process

Payout management is a feature set that is most relevant to workspaces with more than one hotspot, where people get paid for assisting with the deployment of these hotspots. It models the reality of collaborative hotspot deployments with a set of concepts that are combined into a streamlined payment management process.

### Add installs

Commissions are essentially a way to reward contacts for assisting with the deployment of hotspots. In Hotspotty, these deployments are called installs, which track the location of each hotspot at any given point in time. Once this information is entered, commissions can be added to these installs.

- Add your wallet to track your hotspots automatically
- Add an install for each hotspot

### Add commissions

Commissions can now be added to your installs.

There are three types of commissions:

- **Percentage of rewards**: The percentage commissions will take a given percentage of the earned hotspot rewards, and convert it to the commission currency at the time of earnings.
- **Recurring fixed amount**: This type of commission will apply for example monthly a fixed amount of given currency every first day of the month.
- **One time fixed amount**: This commission will only be applied once, on the specified date.

All commission types are supported in the following currencies: hnt, usd, eur, gbp, cad, aud, brl, jpy, dkk, sek, chf, inr, cny, myr, sgd, nzd, btc and eth. Other currencies can be added upon request.

Each commission has a start date and optionally an end date. Please keep in mind that the start date should be on or after the installation date.

The commissions for a given contact are available in the commissions section of the contact details page.

#### Bonus: Commission templates and contact locations

The above process can be streamlined even further, especially with many hotspots in management.

In the workspace settings, you can define commission templates that will appear in the dropdown menu where commissions can be added to an install. This saves time of repeatedly entering the same commission details, and will also add a label to the commission named after the template to make it explicit what the commission is for.

When adding a contact, you can link it to locations and vice versa. When one of these contacts is then added to an install, the system will automatically generate a commission for each linked contact based on the default commmission template.

### Generate a commission report

Based on the information entered, commission reports can be generated to show how much each contact is owed. This information can then be used to pay the contacts.

The easiest way to generate a commission report is with the "Generate report" button in the "Commission Reports" section of the workspace settings. This will allow you to specify a title, the period, the currencies and the timezone for which the report should be generated. By default, the report will be generated for the past month. The currency selection only shows currencies for which there are commissions in this workspace. By default, it will generate a report for each currency.

It is also possible to generate a commission report for a specific list of contacts. To do this, simply select the contacts of interest in the contacts section of the workspace, and click the "Generate commission report" button.

### Open commission report

Once commission reports are generated, you can open its details page and get an overview of all the contacts that have commissions for the relevant time period and currency.

It will give you an overview of the total amount owed, how much was paid so far and which contacts lack a payment method for the report currency.

The data table shows each of these contacts along with their default payment method for the report currency, the amount owed, the payment status, number of commissions, ... A sidebar with more details can also be opened to show exactly where these commissions are coming from.

At the bottom of the commission report page, you can leave comments visible to other workspace members so you can coordinate with them or simply leave a note for future reference.

### Pay contacts

The commission report details page has a "Pay contacts" button, that will offers multiple ways to pay the contacts. The options that are available depend on the currency of the commission report, and the default payment methods for that currency for the relevant contacts. When selecting contacts in the table, you can also pay a subset of all contacts with the "Pay selected contacts" button.

These are some of the options available right now:

#### HNT:

- **QR code payments**: Generate batched QR codes that can be scanned by the [Helium Wallet App](https://docs.helium.com/wallets/app-wallet) to pay the contacts.
- **CLI payment**: Generate a `JSON` file compatible with the [Helium CLI (Command Line Interface)](https://docs.helium.com/wallets/cli-wallet/).

#### Other currencies:

- **CSV**: Download a CSV file for each contact with the amount owed and the default payment details for that currency.
- **Wise by email**: Download a CSV file compatible with Wise.com batch payments that sends out an email to your contacts to collect their payment. [Click here](https://wise.com/us/blog/everything-about-batch-payments) to read more. The CSV file will only be generated for contacts with their default payment method for GBP set to "Wise by email".
- **Paypal - Payouts Web**: Download a CSV file compatible with Payouts Web by PayPal. [Click here](https://developer.paypal.com/docs/regional/th/payouts/integrate/payouts-web/#link-uploadapaymentfile) to read more. The CSV file will only be generated for contacts with their default payment method for GBP set to "PayPal".

Instructions are provided in case some of your contacts do not have a payment method for the relevant currency.

### Mark as paid

Once you exectute the payments, you can click on the "Mark as paid" button next to the payment method you used to pay the contacts. This will mark the payment as paid and will also update the payment status in the commission report. These contacts will also be moved to a separate "Paid contacts" section in the "Pay contacts" functionality to prevent any duplicate payments from happening.

You can still export all contact commissions to a CSV file.

![Docs](/img/workspace/mark-as-paid.png)

These "Contact payments" can be consulted on a separate page in the "Payments" section of the contact details page. In this page, you can also [manually register a payment](../planning-and-optimizing/manage-contacts.md#register-payments) for a contact, and even leave additional notes or specify a date in the past for when this payment happened.

The contact payments tab displays the total amounts that were marked as paid to that contact.

#### Bonus: Automatically marked as paid for QR payments in HNT

When paying contacts in HNT by scanning the QR code feature, and these payments are done from a wallet that is linked to the workspace, the system will automatically mark these contacts as paid.

