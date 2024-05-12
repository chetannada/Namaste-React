## Namaste React Course by Akshay Saini

# Chapter 09 - Optimizing our App

## Q: When and why do we need `lazy()`?

A: `React.lazy() or lazy loading` is used to dynamically import components or a part of code must get loaded when it is required.

Here are some of `the benefits of using lazy loading in React:`

`Improved initial load time:` Lazy loading can improve the initial load time of your application by reducing the amount of code that needs to be downloaded and parsed when the page first loads.

`Reduced memory usage:` Lazy loading can reduce the amount of memory that is used by your application by deferring the loading of resources until they are needed.

`Improved user experience:` Lazy loading can improve the user experience by making your application feel more responsive.

`When to use lazy loading:`
For example, if a web page has an image that the user has to scroll down to see, you can display a placeholder and lazy load the full image only when the user arrives to its location.

## Q: What is `suspense`?

A: `Suspense` is a new feature in React 16.6 that `allows developers to display a fallback UI` while waiting for data to load. This can be useful for improving the perceived performance of your application, as users will not see a blank screen while they wait for data to fetch.

`To use Suspense,` you can wrap any component that fetches data in a `<Suspense>` component. The `<Suspense> component` will `render the fallback UI` until the data is loaded, and then it will render the wrapped component.

`For example,` the following code would `display a loading spinner` while the data is being fetched:

```
<Suspense fallback={<div>Loading...</div>}>
  <MyComponent />
</Suspense>
```

You can also `use Suspense to lazy load components.` This means that the component will not be loaded until it is actually needed, which can improve the performance of your application.

`For example,` the following code would lazy load the MyComponent component:

```
const MyComponent = React.lazy(() => import('./MyComponent'));

<Suspense fallback={<div>Loading...</div>}>
  <MyComponent />
</Suspense>
```

## Q: Why we got this `error`: A component was suspended while responding to `synchronous input`. This will cause the `UI` to be replaced with a `loading indicator`. To `fix this`, `updates that suspend` should be wrapped with `start transition`? How does `suspense fix` this error?

A: This error is thrown as Exception by React when the promise to `dynamically import the lazy component` is not yet resolved and the Component is expected to render in the meantime. If only the dynamic import is done and there is `no <Suspense /> component` then this error is shown.

React expects a Suspense boundary to be in place for showing a fallback prop until the promise is getting resolved. If showing `the shimmer (loading indicator)` is not desirable in some situations, then `startTransistion API` can used to show the old UI while new UI is being prepared. React do this without having to delete or remove the `Suspense component` or its props from your code.

## Q: `Advantages and Disadvantages` of using this `code splitting pattern`?

A: `Code splitting is a technique` that splits an application's `JavaScript bundle into smaller chunks`, which are loaded dynamically as needed. This allows an application to load only the code it needs at a given time, and load other bundles on demand.

Code splitting can have `many benefits`, including:

`Faster initial load time:` By only loading the necessary code for the initial view, code splitting can significantly improve the time it takes for the page to load. This can be especially helpful on slower network connections or devices.

`Improved user experience:` Code splitting can allow users to interact with the application sooner, and non-essential code can be loaded asynchronously in the background to improve the overall responsiveness of the application.

`Improved performance:` Code splitting can reduce the amount of JavaScript that needs to be parsed and executed.

However, code splitting can also have `some drawbacks`, including:

Increased complexity in development and testing processes

More network requests that can affect performance

Additional code and dependencies that can increase the bundle size

## Q: `When` do we and `why do we need suspense`?

A: `Suspense is a React feature` that allows developers to display a temporary UI while waiting for data to load. It's best used when you want to display a fallback while waiting for something to load, such as when waiting for data to be `fetched from an API after the initial page load.`

Suspense is often used in conjunction with `React's dynamic import mechanism called lazy().` Lazy loading refers to the requirement that a component or portion of code will load only when it's needed. This functionality helps to minimize your application's loading speed and lower the initial bundle size.
