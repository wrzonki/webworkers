# How to prep chrome to use webworkers locally?

Chrome does't allow to load other script files (such as web workers) cuz of CORS.

This is how you can test it:

- (VS CODE): Install Live Server extension
- go to [This Chrome Flag](chrome://flags/#unsafely-treat-insecure-origin-as-secure)
- VS code live server localserver origin: `http://127.0.0.1:5500`
- click `Enable`