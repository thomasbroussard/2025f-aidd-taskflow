# [Feature] US2: View Task List (Sorting and Filters)

**Description:** As a user, I want to view my tasks and organize them via sorting and filters so I can prioritize my work effectively.

**Acceptance Criteria:**
- [ ] The main dashboard retrieves and displays all tasks belonging to the currently logged-in user from Firestore.
- [ ] Users can sort the displayed tasks by criteria such as due date (nearest/furthest) or priority level.
- [ ] Users have basic filtering options available (e.g., view all tasks vs. active tasks).
- [ ] A clean "empty state" is shown when the user has no tasks or when a filter yields no results.
- [ ] A loading state (skeleton or spinner) is visible while task data is being fetched.
