# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous routes.  The provided `bug.js` file shows an example where an asynchronous operation (simulated database query) may fail without proper error handling. This can lead to silent failures, making debugging difficult.

The `bugSolution.js` file provides a corrected version with comprehensive error handling, ensuring that errors are caught and handled gracefully, preventing unexpected behavior and providing informative error messages.