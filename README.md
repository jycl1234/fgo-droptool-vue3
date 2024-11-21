# fgo-droptool-vue3

## Introduction

This project is a refactor of `fgo-lookup`, originally developed as a learning project for Vue 2 in 2020. `fgo-lookup` and `fgo-droptool-vue3` (referred to as `droptool`) are simple Web frontends that displays [crowdsourced data](https://docs.google.com/spreadsheets/d/1_SlTjrVRTgHgfS7sRqx4CeJMqlz687HdSlYqiW-JvQA/edit) from a Google Sheets via its API for the mobile game "Fate Grand/Order".

## Preliminary Work

Before any work began, I knew I had to make a few pivotal decisions first:

- What project do I want to be making?
- Which framework should I use?
- How thorough do I want to go in refactoring?
- What sorts of learnings should I demonstrate, and how?

The idea of refactoring the droptool was not new, but up until now I really hadn't found the time or reason to undertake the project. With this opportunity, that reason was now there, and the decision to use Vue 3 for a refactor came naturally afterwards. Using Vue 3 would also allow me to get a jumpstart on learning the framework for the future, as well as give me a chance to catch up on how things have changed.

With the decision to use Vue, I knew that I would be spending a good amount of my time reading documentation, trying things and failing, and rewriting as I picked up new patterns and ideas. This worked hand-in-hand with the decision to refactor instead of designing and coding an entirely new app, as the mental bandwidth required would be lower. However, I knew that I would not be able to get away with a simple lift and shift, or even a basic refactor. Many of the design choices I'd made on the original project -- keeping business logic in components, overloading component functionality, opting not to write tests, using local storage over state management -- would not be the correct choice now, so the project would need to demonstrate what I have learned in those areas.

## Project Hierarchy

## Component Architecture

- lookup.vue + matselectorvisual.vue vs current structure

## State Management

- learning pinia
- pinia vs vuex vs redux vs usecontext

## Testing

- vite vs jest vs cypress/vite in browser mode
- when to add vs when to defer
- why no TDD

## Future Improvements

- caching
  -- script to autogenerate sheet ranges
  -- redis or gql to cache queries
  -- cdn to cache imgs
- env vars
  -- api key, sheet id
- ui library
  -- css rewrite to use grids
  -- reusable components
- new features
  -- bookmarked/linkable searches
  -- efficiency comparison
  -- multi-mat efficiency calculator

## References

- [Drop Sheet](https://docs.google.com/spreadsheets/d/1_SlTjrVRTgHgfS7sRqx4CeJMqlz687HdSlYqiW-JvQA/edit)
- [Google Sheets API Documentation](https://developers.google.com/sheets/api/guides/concepts)
- [Obtaining API Key](https://console.developers.google.com/apis/credentials?pli=1)
