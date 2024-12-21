# Todo List App - Frontend

This is the frontend for the **Todo List App**, built using **Next.js**, **TypeScript**, and **Tailwind CSS**.

## **Features**
- View all tasks.
- Add new tasks.
- Edit existing tasks.
- Mark tasks as Completed/Not Completed.
- Delete tasks with a confirmation prompt.

## **Tech Stack**
- **Next.js** with App Router
- **TypeScript**
- **Tailwind CSS**

## **Setup Instructions**

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/bcExpt1123/next-todo-frontend.git
   cd next-todo-frontend
   ```  

2. Install dependencies:
   ```bash
   npm install
   ```  
   or
   ```bash
   yarn install
   ```  

3. Set up environment variables:  
   Create a `.env.local` file in the root directory and add the following:
   ```plaintext
   API_BASE_URL=<backend-api-url>
   ```  
   Replace `<backend-api-url>` with the URL of your backend server (e.g., `http://localhost:5000`).

4. Run the development server:
   ```bash
   npm run dev
   ```  
   or
   ```bash
   yarn dev
   ```  

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### **Build for Production**
To build the app for production, run:
```bash
npm run build
```  
Then, start the server:
```bash
npm start
```  

## **Folder Structure**
- `components/` - Reusable UI components (e.g., Task Cards, Forms).
- `app/` - Pages of the app.
- `assets/` - Assets.

## **Figma Design**
Followed the provided [Figma Design](https://www.figma.com/design/zHgJzVHfhuN720CjjSGRXQ/Todo-App-Test-Task?node-id=0-1&t=dcgTs4OsZGTxsIJj-1).  