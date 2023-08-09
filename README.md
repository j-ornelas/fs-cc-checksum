# John Ornelas - CC card checker demo

## Usage

### Run web application

From the root project directory:

```

$ npm run init

$ npm start

```

This should install dependencies and start both the React client and server. If you run into any issues for whatever reason, you can optionally just cd into server and client directories and run `npm install && npm start` for each.

### Run test suite

The server directory has a test suite that can be run. With the server shut down and while in the `./server` directory, run:

```
$ npm test
```

## Notes

### If I had more time...

#### Testing

The node server portion of this repo has a test suite, but the front end does not. Ideally, we'd have some frontend tests that confirm non-number characters cannot be entered in the input field, and test that the correct message is displayed to the user when a CC is valid/invalid

#### Debouce / auto check input field

Right now the API call to the backend doesn't trigger until a user clicks a button, I think the ideal implementation would likely use a debounced useEffect hook to call the API as a user is typing in the card number itself.

#### Network request handler

In this demo I'm just calling fetch directly within the Card checker component. This might be fine for this demo since it's the only API call we're making, but in a real application I'd likely want to create a network request helper that handled errors for all our network calls in a predictable way.
