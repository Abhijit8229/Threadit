## Threadit

**Threadit** is a modern clone of X (formerly Twitter), built with performance and developer experience in mind. It includes a clean frontend powered by **Bun + Vite + TypeScript**, and a scalable backend using **Bun + Express + MongoDB**.

### Folder Structure

```
threadit/
├── frontend/   → Vite + Bun + TypeScript
└── backend/    → Express + MongoDB + Bun + TypeScript
```

---

## 🚀 Getting Started (Local Development)

### Prerequisites

* [Bun](https://bun.sh/docs/installation)
* [Node.js](https://nodejs.org/) (for tooling support if needed)
* [MongoDB](https://www.mongodb.com/try/download/community) running locally or via Atlas

---

## 🔧 Backend Setup (`/backend`)

1. **Navigate to the backend folder**:

   ```bash
   cd backend
   ```

2. **Install dependencies**:

   ```bash
   bun install
   ```

3. **Create an environment file**:

   Copy `.env.example` to `.env` and add your MongoDB URI and any other required environment variables.

   ```bash
   cp .env.example .env
   ```

4. **Run the backend server**:

   ```bash
   bun run dev
   ```

   The server should start on `http://localhost:5000` (or the port you define).

---

## 🎨 Frontend Setup (`/frontend`)

1. **Navigate to the frontend folder**:

   ```bash
   cd frontend
   ```

2. **Install dependencies**:

   ```bash
   bun install
   ```

3. **Run the development server**:

   ```bash
   bun run dev
   ```

   The app will start on `http://localhost:5173` (default Vite port).

---

## 🛠️ Contributing

We welcome contributions! If you'd like to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add your message'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

Let me know if you want me to include prettier/ESLint setup instructions or add Docker-based setup too.
