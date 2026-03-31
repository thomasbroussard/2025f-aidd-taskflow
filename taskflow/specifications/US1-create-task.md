# [Feature] US1: Create a Task

**Description:** As a user, I want to create a new task with details so that I can keep track of what I need to do.

**Acceptance Criteria:**
- [ ] Users can open a form with fields for task title, description, priority level, and due date.
- [ ] The task "title" is required, and form validation prevents submission if it is empty.
- [ ] Upon submission, a new task document is saved in Firestore under the authenticated user's "tasks" collection.
- [ ] The form resets and provides a success notification upon successful creation.
- [ ] The main task list automatically updates to show the newly created task in real-time.
