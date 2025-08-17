/* STATE TREE FOR TASK MANAGEMENT APP */

const stateTree = {
  // ===== TODOS/TASKS STATE =====
  todos: {
    // All todos stored in normalized format for better performance
    byId: {
      // Example: "1692194400000": {
      //   id: 1692194400000,
      //   text: "Complete project setup",
      //   completed: false,
      //   createdAt: "2025-08-16T10:00:00.000Z",
      //   updatedAt: "2025-08-16T10:00:00.000Z"
      // }
    },
    // Array of all todo IDs for maintaining order
    allIds: [], // [1692194400000, 1692194401000, ...]

    // Loading and error states for async operations
    loading: false,
    error: null,

    // Statistics derived from todos
    stats: {
      total: 0,
      completed: 0,
      active: 0,
    },
  },

  // ===== UI STATE =====
  ui: {
    // Current filter for todo list
    todoFilter: 'all', // "all" | "active" | "completed"

    // Navigation state
    navigation: {
      currentPage: 'landing', // "landing" | "todo" | "contact"
      previousPage: null,
    },

    // Modal and overlay states
    modals: {
      isEditModalOpen: false,
      isDeleteConfirmOpen: false,
      activeModalTodoId: null,
    },

    // Toast notifications
    notifications: {
      message: null,
      type: null, // "success" | "error" | "warning" | "info"
      isVisible: false,
      autoHideTimeout: null,
    },

    // Theme and preferences
    theme: {
      mode: 'light', // "light" | "dark"
      primaryColor: '#007bff',
    },

    // Responsive design state
    viewport: {
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      width: 1200,
      height: 800,
    },
  },

  // ===== PERSISTENCE STATE =====
  persistence: {
    // Local storage sync status
    localStorage: {
      isSupported: true,
      lastSyncTime: null,
      syncError: null,
    },

    // Offline mode handling
    offline: {
      isOnline: true,
      pendingChanges: [], // Changes to sync when back online
      lastOnlineTime: null,
    },
  },

  // ===== APPLICATION METADATA =====
  app: {
    // App version and build info
    version: '1.0.0',
    buildDate: '2025-08-16',
    environment: 'development', // "development" | "staging" | "production"

    // Feature flags
    features: {
      darkMode: true,
      exportTodos: false,
      todoCategories: false, // Future feature
      todoPriority: false, // Future feature
      todoReminders: false, // Future feature
    },

    // App initialization status
    isInitialized: false,
    initializationError: null,
  },
};

const actionTypes = {
  // Todo actions
  ADD_TODO: 'todos/ADD_TODO',
  UPDATE_TODO: 'todos/UPDATE_TODO',
  DELETE_TODO: 'todos/DELETE_TODO',
  TOGGLE_TODO: 'todos/TOGGLE_TODO',
  CLEAR_COMPLETED_TODOS: 'todos/CLEAR_COMPLETED_TODOS',

  // Filter actions
  SET_TODO_FILTER: 'ui/SET_TODO_FILTER',

  // Navigation actions
  SET_CURRENT_PAGE: 'ui/SET_CURRENT_PAGE',

  // Modal actions
  OPEN_MODAL: 'ui/OPEN_MODAL',
  CLOSE_MODAL: 'ui/CLOSE_MODAL',

  // Notification actions
  SHOW_NOTIFICATION: 'ui/SHOW_NOTIFICATION',
  HIDE_NOTIFICATION: 'ui/HIDE_NOTIFICATION',

  // Persistence actions
  SYNC_TO_LOCAL_STORAGE: 'persistence/SYNC_TO_LOCAL_STORAGE',
  SET_ONLINE_STATUS: 'persistence/SET_ONLINE_STATUS',

  // App actions
  INITIALIZE_APP: 'app/INITIALIZE_APP',
  SET_FEATURE_FLAG: 'app/SET_FEATURE_FLAG',
};

// Export for use in the application
export { stateTree as default, actionTypes };
