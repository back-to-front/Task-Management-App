// CONTAINER AND PRESENTATIONAL COMPONENTS

const componentArchitecture = {
  // =============================================================================
  // CONTAINER COMPONENTS
  // =============================================================================
  containerComponents: {
    // ===== PAGE LEVEL CONTAINERS =====
    pages: [
      {
        name: 'App',
        location: 'src/App.jsx',
        status: 'existing',
        responsibilities: [
          'Main app routing and navigation',
          'Global app state initialization',
          'Top-level error boundary',
          'Theme provider context',
        ],
        children: ['Navbar', 'ScrollToAnchor', 'Route components'],
      },
      {
        name: 'LandingPage',
        location: 'src/pages/Landing.jsx',
        status: 'existing',
        responsibilities: [
          'Landing page layout composition',
          'Scroll behavior management',
          'CTA tracking and analytics',
        ],
        children: ['Hero', 'Features', 'CallToAction'],
      },
      {
        name: 'HomePage',
        location: 'src/pages/Home/Home.jsx',
        status: 'existing',
        responsibilities: [
          'Home page layout and structure',
          'Page-level state management',
          'User authentication checks',
        ],
        children: ['TodoListContainer'],
      },
      {
        name: 'ContactPage',
        location: 'src/pages/Contact/Contact.jsx',
        status: 'existing',
        responsibilities: [
          'Form submission handling',
          'Form validation logic',
          'Success/error state management',
          'Formspree integration',
        ],
        children: ['ContactForm', 'SuccessMessage', 'FAQSection'],
      },
    ],

    // ===== FEATURE CONTAINERS =====
    features: [
      {
        name: 'TodoListContainer',
        location: 'src/components/TodoList/TodoList.jsx',
        status: 'existing',
        responsibilities: [
          'Todo CRUD operations (create, read, update, delete)',
          'Local storage persistence',
          'Filter state management',
          'Todo statistics calculation',
          'Error handling for storage operations',
        ],
        children: ['TodoForm', 'TodoFilter', 'TodoItem', 'TodoStats'],
        stateManaged: [
          'todos array',
          'filter state',
          'loading states',
          'error states',
        ],
      },
      {
        name: 'NavbarContainer',
        location: 'src/components/Navbar/Navbar.jsx',
        status: 'existing',
        responsibilities: [
          'Navigation state management',
          'Mobile menu toggle logic',
          'Active route tracking',
          'Responsive navigation behavior',
        ],
        children: ['NavbarPresentation'],
        stateManaged: ['expanded state for mobile menu', 'active route state'],
      },
      {
        name: 'NotificationContainer',
        location: 'src/containers/NotificationContainer.jsx',
        status: 'planned',
        responsibilities: [
          'Toast notification management',
          'Auto-hide timer logic',
          'Notification queue handling',
          'Global notification state',
        ],
        children: ['NotificationList', 'Toast'],
        stateManaged: [
          'notification queue',
          'auto-hide timers',
          'notification visibility',
        ],
      },
    ],

    // ===== UTILITY CONTAINERS =====
    utilities: [
      {
        name: 'ScrollManager',
        location: 'src/components/ScrollToAnchor.jsx',
        status: 'existing',
        responsibilities: [
          'URL hash-based scrolling',
          'Smooth scroll behavior',
          'Route change scroll management',
        ],
        children: ['ScrollToTop'],
      },
      {
        name: 'ErrorBoundaryContainer',
        location: 'src/containers/ErrorBoundary.jsx',
        status: 'planned',
        responsibilities: [
          'JavaScript error catching',
          'Error logging and reporting',
          'Fallback UI rendering',
          'Error recovery mechanisms',
        ],
        children: ['ErrorFallback'],
      },
      {
        name: 'ThemeContainer',
        location: 'src/containers/ThemeContainer.jsx',
        status: 'planned',
        responsibilities: [
          'Theme switching logic',
          'User preference persistence',
          'System theme detection',
          'CSS custom property management',
        ],
        children: ['ThemeToggle'],
        stateManaged: [
          'current theme',
          'theme preferences',
          'system preference detection',
        ],
      },
    ],
  },

  // =============================================================================
  // PRESENTATIONAL COMPONENTS
  // =============================================================================
  presentationalComponents: {
    // ===== FORM COMPONENTS =====
    forms: [
      {
        name: 'TodoForm',
        location: 'src/components/TodoList/TodoForm.jsx',
        status: 'existing',
        purpose: 'Input form for creating new todos',
        props: ['addTodo', 'loading', 'placeholder'],
        features: [
          'Input validation styling',
          'Loading state display',
          'Accessibility attributes',
          'Keyboard shortcuts (Enter to submit)',
        ],
      },
      {
        name: 'ContactForm',
        location: 'src/components/Contact/ContactForm.jsx',
        status: 'planned_refactor',
        purpose: 'Contact form with validation display',
        props: ['formData', 'onChange', 'onSubmit', 'errors', 'isSubmitting'],
        features: [
          'Field validation display',
          'Loading states',
          'Error message styling',
          'Form accessibility',
        ],
      },
      {
        name: 'SearchForm',
        location: 'src/components/Search/SearchForm.jsx',
        status: 'planned',
        purpose: 'Search input for filtering todos',
        props: ['searchTerm', 'onSearch', 'placeholder'],
        features: [
          'Real-time search feedback',
          'Clear search button',
          'Search suggestions',
        ],
      },
    ],

    // ===== TODO COMPONENTS =====
    todos: [
      {
        name: 'TodoItem',
        location: 'src/components/TodoList/TodoItem.jsx',
        status: 'existing',
        purpose: 'Individual todo item display and inline editing',
        props: [
          'todo',
          'onToggle',
          'onDelete',
          'onEdit',
          'isEditing',
          'className',
        ],
        features: [
          'Inline editing mode',
          'Completion toggle',
          'Delete confirmation',
          'Keyboard navigation',
          'Drag and drop handles',
        ],
      },
      {
        name: 'TodoFilter',
        location: 'src/components/TodoList/TodoFilter.jsx',
        status: 'existing',
        purpose: 'Filter buttons for todo list',
        props: ['currentFilter', 'onFilterChange'],
        features: [
          'Active filter highlighting',
          'Filter count badges',
          'Keyboard navigation',
        ],
      },
      {
        name: 'TodoStats',
        location: 'src/components/TodoList/TodoStats.jsx',
        status: 'planned',
        purpose: 'Display todo statistics and progress',
        props: ['totalCount', 'completedCount', 'activeCount'],
        features: [
          'Progress bar visualization',
          'Completion percentage',
          'Task counters',
          'Motivational messages',
        ],
      },
      {
        name: 'TodoList',
        location: 'src/components/TodoList/TodoListPresentation.jsx',
        status: 'planned_refactor',
        purpose: 'Pure list display of todos',
        props: [
          'todos',
          'onToggle',
          'onDelete',
          'onEdit',
          'loading',
          'emptyState',
        ],
        features: [
          'Empty state display',
          'Loading skeleton',
          'Virtualization for large lists',
          'Drag and drop reordering',
        ],
      },
    ],

    // ===== NAVIGATION COMPONENTS =====
    navigation: [
      {
        name: 'NavbarPresentation',
        location: 'src/components/Navbar/NavbarPresentation.jsx',
        status: 'planned_refactor',
        purpose: 'Pure UI for navigation bar',
        props: [
          'isExpanded',
          'onToggle',
          'onNavClick',
          'currentPath',
          'menuItems',
        ],
        features: [
          'Responsive design',
          'Active link styling',
          'Mobile hamburger menu',
          'Accessibility navigation',
        ],
      },
      {
        name: 'NavLink',
        location: 'src/components/Navigation/NavLink.jsx',
        status: 'planned',
        purpose: 'Reusable navigation link component',
        props: ['to', 'children', 'isActive', 'onClick'],
        features: [
          'Active state styling',
          'Hover effects',
          'External link handling',
        ],
      },
      {
        name: 'Breadcrumbs',
        location: 'src/components/Navigation/Breadcrumbs.jsx',
        status: 'planned',
        purpose: 'Breadcrumb navigation display',
        props: ['path', 'onNavigate'],
        features: [
          'Dynamic path building',
          'Custom separators',
          'Click navigation',
        ],
      },
    ],

    // ===== LAYOUT COMPONENTS =====
    layout: [
      {
        name: 'Header',
        location: 'src/components/Layout/Header.jsx',
        status: 'planned',
        purpose: 'Page header with title and actions',
        props: ['title', 'subtitle', 'actions', 'breadcrumbs'],
        features: [
          'Flexible action buttons',
          'Responsive typography',
          'Icon support',
        ],
      },
      {
        name: 'Main',
        location: 'src/components/Layout/Main.jsx',
        status: 'planned',
        purpose: 'Main content area wrapper',
        props: ['children', 'className', 'padding'],
        features: [
          'Consistent spacing',
          'Responsive padding',
          'Scroll management',
        ],
      },
      {
        name: 'Footer',
        location: 'src/components/Layout/Footer.jsx',
        status: 'planned',
        purpose: 'App footer with links and info',
        props: ['links', 'copyright', 'socialMedia'],
        features: ['Social media links', 'Legal links', 'Responsive layout'],
      },
      {
        name: 'Container',
        location: 'src/components/Layout/Container.jsx',
        status: 'planned',
        purpose: 'Responsive container wrapper',
        props: ['children', 'maxWidth', 'padding'],
        features: [
          'Responsive breakpoints',
          'Flexible max-width',
          'Consistent padding',
        ],
      },
    ],

    // ===== LANDING PAGE COMPONENTS =====
    landing: [
      {
        name: 'Hero',
        location: 'src/components/Landing/Hero.jsx',
        status: 'existing',
        purpose: 'Hero section with CTA',
        props: ['title', 'subtitle', 'primaryCTA', 'secondaryCTA'],
        features: [
          'Animated hero elements',
          'Demo todo preview',
          'Responsive images',
        ],
      },
      {
        name: 'Features',
        location: 'src/components/Landing/Features.jsx',
        status: 'existing',
        purpose: 'Feature showcase section',
        props: ['features', 'layout'],
        features: ['Icon integration', 'Responsive grid', 'Hover animations'],
      },
      {
        name: 'CallToAction',
        location: 'src/components/Landing/CallToAction.jsx',
        status: 'existing',
        purpose: 'Final CTA section',
        props: ['title', 'description', 'buttonText', 'buttonLink'],
        features: [
          'Prominent button styling',
          'Conversion tracking hooks',
          'A/B testing ready',
        ],
      },
    ],

    // ===== UI COMPONENTS =====
    ui: [
      {
        name: 'Button',
        location: 'src/components/UI/Button.jsx',
        status: 'planned',
        purpose: 'Reusable button component',
        props: [
          'variant',
          'size',
          'loading',
          'disabled',
          'onClick',
          'children',
        ],
        features: [
          'Multiple variants (primary, secondary, danger)',
          'Loading spinner integration',
          'Disabled state styling',
          'Icon support',
        ],
      },
      {
        name: 'Modal',
        location: 'src/components/UI/Modal.jsx',
        status: 'planned',
        purpose: 'Reusable modal dialog',
        props: ['isOpen', 'onClose', 'title', 'children', 'size', 'closable'],
        features: [
          'Focus trap management',
          'Escape key handling',
          'Backdrop click close',
          'Accessibility attributes',
        ],
      },
      {
        name: 'Toast',
        location: 'src/components/UI/Toast.jsx',
        status: 'planned',
        purpose: 'Notification toast message',
        props: ['message', 'type', 'duration', 'onClose', 'position'],
        features: [
          'Auto-hide functionality',
          'Multiple types (success, error, warning)',
          'Swipe to dismiss',
          'Animation transitions',
        ],
      },
      {
        name: 'LoadingSpinner',
        location: 'src/components/UI/LoadingSpinner.jsx',
        status: 'planned',
        purpose: 'Loading state indicator',
        props: ['size', 'color', 'label'],
        features: [
          'Multiple sizes',
          'Customizable colors',
          'Accessibility label',
          'CSS animations',
        ],
      },
      {
        name: 'EmptyState',
        location: 'src/components/UI/EmptyState.jsx',
        status: 'planned',
        purpose: 'Empty state placeholder',
        props: ['title', 'description', 'illustration', 'action', 'actionText'],
        features: [
          'Custom illustrations',
          'Action button integration',
          'Responsive design',
          'Motivational messaging',
        ],
      },
    ],

    // ===== FEEDBACK COMPONENTS =====
    feedback: [
      {
        name: 'SuccessMessage',
        location: 'src/components/SuccessMessage/SuccessMessage.jsx',
        status: 'existing',
        purpose: 'Success confirmation display',
        props: ['message', 'onClose', 'autoHide'],
        features: [
          'Auto-hide functionality',
          'Success animations',
          'Close button',
          'Accessibility announcements',
        ],
      },
      {
        name: 'ErrorMessage',
        location: 'src/components/Feedback/ErrorMessage.jsx',
        status: 'planned',
        purpose: 'Error state display',
        props: ['message', 'retry', 'onRetry'],
        features: [
          'Retry action button',
          'Error icon display',
          'User-friendly messaging',
          'Error boundary integration',
        ],
      },
      {
        name: 'FAQItem',
        location: 'src/components/FAQ/FAQItem.jsx',
        status: 'existing',
        purpose: 'Individual FAQ question/answer',
        props: ['question', 'answer', 'isOpen', 'onToggle'],
        features: [
          'Collapsible content',
          'Smooth animations',
          'Rich text support',
          'Keyboard navigation',
        ],
      },
      {
        name: 'FAQSection',
        location: 'src/components/FAQ/FAQSection.jsx',
        status: 'existing',
        purpose: 'FAQ section wrapper',
        props: ['faqs', 'title'],
        features: [
          'Accordion behavior',
          'Search functionality',
          'Category filtering',
          'Responsive layout',
        ],
      },
    ],
  },
};

// Export for reference and implementation planning
export default componentArchitecture;
