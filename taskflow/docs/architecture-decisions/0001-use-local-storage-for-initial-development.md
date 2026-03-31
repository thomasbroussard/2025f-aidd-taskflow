# Architecture Decision Record

## ADR 0001: Use Local Storage for Initial Development

**Date**: 2026-03-31

### Status
Accepted

### Context
We are implementing the initial features of the TaskFlow application (starting with US1: Create Task). The vision document specifies Firebase/Firestore for authentication and database persistence. However, we currently do not have the Firebase project configuration keys available.

### Decision
We will temporarily use a "local implementation" (e.g., using browser `localStorage` and React Context) to persist data during early development and prototyping. This allows us to build the UI components and core logic without being blocked by backend configuration.

### Consequences
- Development can proceed immediately for user stories like US1 (Create Task) and US2 (View Task List).
- State will only be persisted in the local browser, so it will not sync across devices.
- Before US4 (Authentication) or full launch, we must refactor the data access layer to connect to Firestore. We will design the local access layer using hooks or service functions so that the drop-in replacement with Firebase is as smooth as possible.
