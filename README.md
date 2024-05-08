# example-adaptable-nocode-aggrid

Demo of AdapTable No-code plugin - using Version 15 of AdapTable

## Installation

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

to launch a webserver that serves the generated `dist` folder - now go to [localhost:3000](http://localhost:3000) to see the production version.

## Code

"nocode" means that you don't have to pre-design and configure your columns, or know the grid layout ahead-of-time.

You do have to write some code to get this up and running, but minimal - you can find it in [src/index.ts](./src/index.ts)

## Documentation & Demos

Full details of how to install and use the No Code plugin, together with many demos, can be found at [AdapTable No Code Documentation](https://docs.adaptabletools.com/guide/handbook-no-code)

## Help

Developers can learn how to access AdapTable programmatically at [AdapTable Documentation](https://docs.adaptabletools.com).

## Other AdapTable Resources

General information about Adaptable Tools is available at our [Website](http://www.adaptabletools.com) 

## Support
For all support enquiries please email [`support@adaptabletools.com`](mailto:support@adaptabletools.com) or [raise a Support Ticket](https://adaptabletools.zendesk.com/hc/en-us/requests/new).

## Licences

Information on AdapTable Licences can be found at [Licensing AdapTable for AG Grid](https://docs.adaptabletools.com/guide/licensing).

