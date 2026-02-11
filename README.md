# 📱 User List App – React Native (TypeScript)

A React Native application built using TypeScript that fetches users from a public API and displays them in a list with navigation to a detailed screen.

---

## 🚀 Features

- Fetch users from public API (JSONPlaceholder)
- Display users using FlatList
- Pull-to-refresh functionality
- Navigate to User Details screen
- Pass user data using navigation params
- Proper loading & error handling
- Toast messages for error feedback
- Custom Header with Safe Area support
- Clean and scalable folder structure
- Works on both Android and iOS

---

## 🛠 Tech Stack

- React Native CLI
- TypeScript
- React Navigation (Native Stack)
- react-native-safe-area-context
- react-native-toast-message

---

## 🌐 API Used

https://jsonplaceholder.typicode.com/users

---

## 📦 Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Hetull/UserListApp.git
cd UserListApp
```

2️⃣ Install Dependencies
npm install

or

yarn install

▶️ Run The App
Android
npx react-native run-android

iOS (Mac only)
cd ios
pod install
cd ..
npx react-native run-ios
