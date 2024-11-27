# fgo-droptool-vue3

## Quick Start

To run the application:

1. Obtain a Google API key: [Link](https://console.developers.google.com/apis/credentials)
2. Create a file `apiKey.js` under src\static, and copy the contents:

```
const API_KEY = '{API_KEY_HERE}'

export { API_KEY }
```

3. Run `npm install` from the root folder.
4. Run `npm run dev` to start the project locally, and `npm run test:unit` to run the unit test suite.

## Introduction

This project is a refactor of `fgo-lookup`, originally developed as a learning project for Vue 2 in 2020. `fgo-lookup` and `fgo-droptool-vue3` (referred to as `droptool`) are simple Web frontends that displays [crowdsourced data](https://docs.google.com/spreadsheets/d/1_SlTjrVRTgHgfS7sRqx4CeJMqlz687HdSlYqiW-JvQA/edit) from a Google Sheets via its API for the mobile game "Fate Grand/Order".

## Preliminary Work

Before any work began, I knew I had to make a few pivotal decisions first:

- What project do I want to be making?
- Which framework should I use?
- How thorough do I want to go in refactoring?
- What sorts of learnings should I demonstrate, and how?

The idea of refactoring the droptool was not new, but up until now I really hadn't found the time or reason to undertake the project. With this opportunity, that reason was now there, and the decision to use Vue 3 for a refactor came naturally afterwards. Using Vue 3 would also allow me to get a jumpstart on learning the framework for the future, as well as give me a chance to catch up on how things have changed.

With the decision to use Vue, I knew that I would be spending a good amount of my time reading documentation, trying things and failing, and rewriting as I picked up new patterns and ideas. This worked hand-in-hand with the decision to refactor instead of designing and coding an entirely new app, as the mental bandwidth required would be lower. However, I knew that I would not be able to get away with a simple lift and shift, or even a basic refactor. Many of the design choices I'd made on the original project -- keeping business logic in components, overloading component functionality, opting not to write tests, using local storage over state management -- would not be the correct choices now, so the project would need to demonstrate what I have learned in those areas.

## Component Architecture

After spinning up a fresh project via `npm create vue@latest`, I removed most of the default code that I knew I wouldn't be using, and started by porting over the basic structure of the original droptool. While developing the original, I started with a text-based search and eventually pivoted to a visual-based search, leaving a lot of dead code behind. While porting over code, I decided to only go with the visual search, as it was where most of the code smell resided.

The original file that essentially ran the entire app was [MatSelectorVisual.vue](https://github.com/jycl1234/fgo-lookup/blob/master/src/components/MatSelectorVisual.vue). This file contained a messy blend of business logic, CSS, event handlers, and state management; I knew it had to be completely rewritten. Most of the other components were much simpler, and could be ported as-is, along with static assets such as the source of truth `mats.js`, and the background image.

Vue 3's default directory structure introduced the `views` folder in addition to `components`, which allowed me to build the app with much more granular approach compared to the previous attempt. This approach made reasoning through state management, business logic, and ultimately unit testing significantly easier.

## State Management

The original droptool was written 4 years ago, before Vue 3 and Pinia. At the time, I had some experience with Redux, so I looked into VueX while developing. Ultimately, I decided that the overhead of learning VueX and Vue at the same time was too much, so I opted to use `localStorage` in the browser to manage state. While this technically worked, this was clearly not ideal, so when the Vue installer asked if I wanted to use Pinia for state management I decided it was time to pick it up.

Pinia ended up much easier to learn than VueX, due to its simpler syntax, the changes brought by Vue 3's Composition API, and the ability to directly mutate values which greatly reduced boilerplate code compared to Redux/VueX. After spending some time with it and getting a couple of things wrong initially (setters), using Pinia to house business logic and the values I needed for the app was straightforward. Nearly all of the logic that resided in `MatSelectorVisual.vue` was completely rewritten inside `store.js` instead, allowing components to individually access and update the store instead of leaning on `localStorage`.

## Testing

With everything structured neatly, testing became not only a possibility, but an inevitability as there was no reason not to at this point. For a project of this scope, I ruled out E2E testing during installation. While I've used Cypress on other projects, I prefer to start small with unit testing before moving on to E2E. Since this project is small and I was working under a time constraint, I decided that picking up Vitest should be enough as a baseline, so as long as I captured enough use cases in my tests. Fortunately, the app is simple enough so there were not a large number of possibilities to test for. Vitest was also relatively easy to pick up, being similar enough to Jest and RTL.

If you go through commits, you may notice that there were times where tests did not accompany my commits: specifically at the beginning when the project was being scaffolded, and immediately after I implemented the most complex portion of the business logic in the store, fetching the results from Google's API. While I am aware of TDD and its dogma, I felt that during the very early phases of greenfielding, TDD would slow the process down especially given the added context of ramping up on Vue 3 and Pinia at the same time. As far as the delayed store test goes, that was a miss on my part; spending another day ramping up on mocking axios and observing function calls would've been fine over checking in an untested feature, given that business realities are not a factor here.

## The API Key Incident

I accidentally checked in an API key when implementing the result fetch, which I also did for the original project four years ago. Last time, I clicked the dismiss button and ignored the warning; this time, I revoked the key, created a new one, and added `apiKey.js` to `.gitignore`. This probably should've been done much earlier and was another clear miss on my end, but fortunately mitigating the issue was relatively straightforward. There's clearly room for improvement here by offloading this to an environment variable, along with other improvements below.

## Future Improvements

Lots of things can be done to iterate upon the MVP here, so here's a brief list:

- New Features
  -- Improved error handling: no real error notification at all on API failure currently
  -- Bookmarked/linkable searches, using hash URLs
  -- Region filter: the current app does not filter between JP/NA, in order to demontrate the No Results view
  -- Alphanumeric search: a textbox to type in the name of a mat, as an alternative to purely visual-based
  -- Efficiency comparison: select multiple nodes to compare efficiency between droprates and other desired mats
- UI Library
  -- CSS Framework: Tailwind, Bootstrap, etc to standardize and simplify CSS
  -- Component Library: MUI, etc depending on how complex the app gets, or to support other apps in the same platform
- Typescript: for clearer definitions on contracts (payload, response, props)
- Environment Variables: to store API key and the Google Sheet ID
- Caching
  -- CDN to cache images (already implemented by the group that took over the droptool)
  -- Redis or GQL to cache queries (refresh time depends on "business needs")
  -- Autogenerate `mats.js` via script to prevent need for manual updates

## References

- [Drop Sheet](https://docs.google.com/spreadsheets/d/1_SlTjrVRTgHgfS7sRqx4CeJMqlz687HdSlYqiW-JvQA/edit)
- [Google Sheets API Documentation](https://developers.google.com/sheets/api/guides/concepts)
- [Obtaining API Key](https://console.developers.google.com/apis/credentials?pli=1)
