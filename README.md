# Task Management App

Austen Cole

## Hosting Link

https://back-to-front.github.io/Task-Management-App

## State Tree

[State Tree](/WireFrame/state-tree.js)

## Container & Presentational Components

[Components](/WireFrame/component-architecture.js)

## Overview

Task Management App is a modern, responsive web application designed to help users organize and keep track of their daily tasks. Built with React and using modern web technologies, this application provides a clean and intuitive interface for managing to-do lists with ease.

The app features a landing page that showcases its features, a functional task management interface, and a contact page with FAQ section. It's designed to be simple yet effective for personal task organization without requiring any account setup or complicated workflows.

## Features & Functionality

- **Task Management**

  - Create new tasks with a simple input form
  - Mark tasks as completed with a visual strikethrough effect
  - Edit existing tasks by double-clicking or using the edit button
  - Delete tasks you no longer need
  - Filter tasks by status (All, Active, Completed)

- **Data Persistence**

  - All tasks are automatically saved to browser's localStorage
  - Data persists between browser sessions and page reloads
  - No account required - works immediately on any device

- **Responsive Design**

  - Optimized for mobile, tablet, and desktop devices
  - Collapsible navigation menu on smaller screens
  - Consistent and accessible UI across all device sizes

- **User Support**
  - Comprehensive FAQ section for quick answers
  - Contact form for reaching out with questions or feedback

## How to Use

1. **Adding Tasks**: Type your task in the input field at the top of the home page and click "Add Task" or press Enter.

2. **Managing Tasks**:

   - Click the checkbox to mark a task as complete
   - Double-click a task (or click the edit icon) to modify its text
   - Click the delete button (×) to remove a task

3. **Filtering**: Use the filter buttons above your task list to view all tasks, only active (incomplete) tasks, or only completed tasks.

4. **Navigation**: Use the navigation menu to move between the landing page, task management page, and contact/FAQ page.

## Technologies Used

- **Frontend Framework**: React (v19)
- **Routing**: React Router
- **UI Components**: React Bootstrap (Only for Navbar)
- **Styling**: CSS with responsive design principles
- **Form Handling**: Formspree for contact form submission
- **Build Tool**: Vite
- **Storage**: Browser's localStorage API
- **Deployment**: Static hosting on GitHub Pages (HTML, CSS, JavaScript)

## Ideas for Future Improvement

1. **Task Categories & Tags**: Implement the ability to categorize tasks and add tags for better organization and filtering options.

2. **Due Dates & Reminders**: Add functionality to set due dates for tasks and implement browser notifications for upcoming deadlines.

3. **Data Export/Import**: Allow users to export their tasks as JSON files and import them back, enabling data backup and transfer between devices.

4. **Dark Mode**: Implement a theme switcher with dark mode option for better accessibility and user preference.

5. **Task Prioritization**: Add the ability to set priority levels for tasks and sort by importance.

6. **User Accounts**: Implement optional user accounts with cloud synchronization for accessing tasks across multiple devices.
