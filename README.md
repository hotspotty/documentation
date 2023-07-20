# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.
Deployed to **[Hotspotty Docs](https://docs.hotspotty.net/)**

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Run Algolia crawler

From the [docs](https://docsearch.algolia.com/docs/legacy/run-your-own/#run-the-crawl-from-the-docker-image)

The first time, install jq:

```
brew install jq
```

Insure you have the right .env variables:

```
ALGOLIA_APP_ID=
ALGOLIA_API_KEY=
ALGOLIA_INDEX_NAME=
```

Then you can run the crawler:

```
docker run -it --env-file=.env -e "CONFIG=$(cat /path/to/your/config.json | jq -r tostring)" algolia/docsearch-scraper
```
