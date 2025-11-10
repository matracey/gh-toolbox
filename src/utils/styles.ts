// Utility functions for consistent Tailwind classes

export const buttonStyles = {
  primary:
    "bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800",
  secondary:
    "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800",
};

export const linkStyles = {
  primary:
    "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium underline",
  nav: (isActive: boolean) =>
    `px-4 py-2 rounded transition-colors duration-200 font-medium ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/20"
    }`,
};

export const cardStyles = {
  base: "bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg",
  interactive:
    "bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200",
};

export const textStyles = {
  heading1: "text-5xl font-bold leading-tight",
  heading2: "text-3xl font-bold",
  heading3: "text-2xl font-bold",
  body: "text-lg",
  caption: "text-gray-600 dark:text-gray-400",
  code: "bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono",
};
