# 🍕 Fast React Pizza Co.

A modern, responsive pizza ordering application built with React and Redux Toolkit, featuring real-time order tracking, geolocation services, and an intuitive user interface.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

Fast React Pizza Co. is a full-featured pizza ordering application that allows users to browse menu items, customize their cart, provide delivery information with geolocation support, and track their orders in real-time. The application emphasizes user experience with responsive design and smooth interactions.

## ✨ Features

### Core Functionality

- **📱 Responsive Design** - Optimized for mobile, tablet, and desktop
- **🍕 Interactive Menu** - Browse available pizzas with detailed information
- **🛒 Shopping Cart** - Add, remove, and modify quantities with real-time updates
- **📍 Geolocation Integration** - Automatic address detection with manual override
- **⭐ Priority Orders** - Express delivery option with dynamic pricing
- **📊 Order Tracking** - Real-time status updates and delivery estimates

### User Experience

- **🎨 Modern UI** - Clean, professional interface with smooth animations
- **⚡ Fast Performance** - Optimized with Redux Toolkit and React Router
- **♿ Accessibility** - Keyboard navigation and screen reader support
- **🔄 Real-time Updates** - Live cart totals and order status

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern React with hooks and concurrent features
- **Redux Toolkit** - Efficient state management with RTK Query
- **React Router v6** - Declarative routing with data loading
- **Tailwind CSS** - Utility-first styling framework

### Development Tools

- **Vite** - Fast development server and build tool
- **ESLint** - Code linting and quality enforcement
- **PropTypes** - Runtime type checking for React props

### APIs & Services

- **Restaurant API** - Menu data and order management
- **Geocoding API** - Location services for address detection

## 🚀 Getting Started

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/fast-react-pizza.git
   cd fast-react-pizza
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── features/           # Feature-based organization
│   ├── cart/          # Shopping cart functionality
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── CartOverview.jsx
│   │   ├── DeleteItem.jsx
│   │   └── cartSlice.js
│   ├── menu/          # Menu and pizza items
│   │   ├── Menu.jsx
│   │   ├── MenuItem.jsx
│   │   └── CartOverview.jsx
│   ├── order/         # Order management
│   │   ├── CreateOrder.jsx
│   │   ├── Order.jsx
│   │   └── OrderItem.jsx
│   └── user/          # User management
│       └── userSlice.js
├── services/          # API integrations
│   ├── apiGeocoding.js
│   └── apiRestaurant.js
├── ui/                # Reusable UI components
│   ├── AppLayout.jsx
│   ├── Button.jsx
│   ├── Error.jsx
│   ├── Header.jsx
│   ├── Home.jsx
│   └── Loader.jsx
├── utils/             # Helper functions
│   └── helpers.js
├── store.js           # Redux store configuration
└── App.jsx           # Main application component
```

## 🧩 Key Components

### Button Component

A versatile, reusable button component with multiple variants:

- **Primary** - Main action buttons
- **Secondary** - Alternative actions
- **Round** - Compact increment/decrement buttons
- **Position** - Eye-catching geolocation button with gradient effects

### Cart Management

- Real-time quantity updates
- Dynamic pricing calculations
- Persistent cart state across navigation
- Visual feedback for cart actions

### Order System

- Multi-step order creation process
- Form validation with user-friendly error messages
- Integration with payment and delivery systems
- Order status tracking with time estimates

## 🗄️ State Management

### Redux Store Structure

```javascript
{
  cart: {
    cart: []           // Array of cart items
  },
  user: {
    userName: "",      // Customer name
    status: "idle",    // loading state
    position: {},      // GPS coordinates
    address: "",       // Formatted address
    error: ""         // Error messages
  }
}
```

### Key Actions

- `addToCart` - Add items to shopping cart
- `updateQuantity` - Modify item quantities
- `fetchAddress` - Get user location
- `createOrder` - Submit order to API

## 🔌 API Integration

### Restaurant API

- **Base URL**: `https://react-fast-pizza-api.jonas.io/api`
- **Endpoints**:
  - `GET /menu` - Fetch available pizzas
  - `POST /order` - Create new order
  - `GET /order/:id` - Get order details
  - `PATCH /order/:id` - Update order priority

### Geocoding API

- Converts GPS coordinates to human-readable addresses
- Integrates with browser geolocation API
- Provides fallback for manual address entry

## 🎨 Styling

### Design System

- **Primary Colors**: Yellow (#FBBF24) and Stone (#1C1917)
- **Typography**: Responsive text sizing with Tailwind utilities
- **Components**: Consistent spacing, borders, and hover effects
- **Animations**: Smooth transitions and micro-interactions

### Responsive Breakpoints

- **Mobile**: Base styles (< 640px)
- **Tablet**: `sm:` prefix (≥ 640px)
- **Desktop**: `md:` prefix (≥ 768px)

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## 📈 Performance Optimizations

- **Code Splitting** - Route-based lazy loading
- **Redux Toolkit** - Efficient state updates with Immer
- **Memoization** - Optimized selectors and components
- **Image Optimization** - Responsive images with proper alt text

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code structure and naming conventions
- Ensure all components have proper PropTypes
- Add appropriate error handling for API calls
- Test responsive design across different screen sizes
- Maintain accessibility standards

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Jonas Schmedtmann** - Original project concept and API
- **React Team** - For the amazing React ecosystem
- **Redux Toolkit Team** - For simplified state management
- **Tailwind CSS** - For the utility-first CSS framework

---

**Built with ❤️ by Mohamed Tamer Nassr**

For questions or support, please open an issue or contact mohamed.tamer.nassr@gmail.com
