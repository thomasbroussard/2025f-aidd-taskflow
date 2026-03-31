# [Feature] US4: Email Authentication (Sign In / Sign Up)

**Description:** As a user, I want to be able to sign up and log in using my email so that my tasks are saved securely to my account.

**Acceptance Criteria:**
- [ ] A dedicated Authentication page exists with forms for both "Sign Up" and "Sign In".
- [ ] Users can create a new account via Firebase Authentication using an email and password.
- [ ] Client-side validation prevents submission if the email format is invalid or passwords do not meet minimum requirements.
- [ ] Meaningful error messages are displayed for failed attempts (e.g., "Email already in use" or "Incorrect password").
- [ ] Upon successful authentication, the user's session is stored in `AuthContext` and they are redirected to the task list view.
