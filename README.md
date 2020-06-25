# example-adaptable-nocode-aggrid

Demo of AdapTable No-code plugin - using Version 7 of AdapTable

## Installation

NOTE: In order to be able to run `npm install`, you need to follow the [AdapTable installation instructions](https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/README.md) - so you need to be logged into our private NPM registry.

> If you do not have an Adpatable Login please contact support@adaptabletools.com

Run `npm install` (or `yarn`), depending on what tool you're using.

## Running in Development Mode

Execute the following command

```sh
$ npm run dev
```

NOTE: The first time you run this, it takes longer as parcel generates some cache, etc - subsequent runs will be a lot faster

Now navigate to [localhost:1234](http://localhost:1234) in order the see AdapTable in action.

Any change you make in your sources will trigger a browser reload, since parceljs comes with built-in hot-reloading in order to keep you productive.

## Building for Production

```sh
$ npm run build
```

This generates a `dist` folder, which you can deploy on a webserver.

On your local machine, you can run

```sh
$ npx serve dist
```

to launch a webserver that serves the generated `dist` folder - now go to [localhost:5000](http://localhost:5000) to see the production version.

## Code

"nocode" means that you don't have to pre-design adn configure your columns, or know the grid layout ahead-of-time.

You do have to write some code to get this up and running, but minimal - you can find it in [src/index.ts](./src/index.ts)

## Licences
A licence for AdapTable provides access to all product features as well as quarterly updates and enhancements through the lifetime of the licence, comprehensive support, and access to all 3rd party libraries.

Licences can be purchased individually, for a team (minimum 30 end-users), for an organisation or for integration into software for onward sale.

We can make a trial licence available for a short period of time to allow you to try out AdapTable for yourself.

Please contact [`sales@adaptabletools.com`](mailto:sales@adaptabletools.com) for more information.

 
## Demo

To see AdapTable in action visit our [Demo Site](https://demo.adaptabletools.com).  Here you can see a large number of AdapTable demos each showing a different feature, function or option in AdapTable (using dummy data sets).

## Help

Developers can learn how to access AdapTable programmatically at [AdapTable Developer Documentation](https://api.adaptabletools.com) 

The other source for Help is our collection of 'Read Me' Docs ([full list here](https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/readme-list.md)).

> Previously the main source of AdapTable Help was our [Zendesk Pages](https://adaptabletools.zendesk.com/hc/en-us/articles/360007083017-Help-) but these have been replaced by these 'Read Me' docs and the Developer Documentation that is automatically produced and therefore always up to date.

## More Information

General information about Adaptable Tools is available at our [Website](http://www.adaptabletools.com) 
 
## Support

For all support enquiries please email [`support@adaptabletools.com`](mailto:support@adaptabletools.com) or [raise a Support Ticket](https://adaptabletools.zendesk.com/hc/en-us/requests/new).
