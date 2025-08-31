# 📌 LaMorada

Aplicación web que combina **backend (NestJS)** y **frontend (Angular)**.  
Incluye autenticación básica (**registro** e **inicio de sesión**) con JWT.

---

## 🚀 Tecnologías

- **Backend:** NestJS + TypeScript  
- **Frontend:** Angular  
- **Autenticación:** JWT (JSON Web Tokens)  

---

## 📂 Estructura del repo

LaMorada/
│── backend/ # API con NestJS (login y registro)
│ ├── src/
│ │ ├── users/
│ │ ├── auth/
│ │ └── main.ts
│ ├── package.json
│ └── tsconfig.json
│
│── frontend/web/ # Angular app (pantallas de login y registro)
│ ├── src/app/pages/auth/
│ │ ├── login.component.ts
│ │ └── register.component.ts
│ ├── angular.json
│ └── package.json
│
└── docker-compose.yml

yaml
Copiar código

---

## ⚙️ Configuración

### 1. Variables de entorno

Copia `.env.example` en `.env` y ajusta:

```bash
# backend/.env
PORT=3000
JWT_SECRET=tu-secreto-super-seguro
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=postgres
DB_NAME=lamorada
2. Instalar dependencias
Backend:

bash
Copiar código
cd backend
npm install
Frontend:

bash
Copiar código
cd frontend/web
npm install
3. Ejecutar en local
Backend (NestJS):

bash
Copiar código
cd backend
npm run start:dev
Frontend (Angular):

bash
Copiar código
cd frontend/web
ng serve --open
🧪 Endpoints principales
POST /auth/register → Crear usuario

POST /auth/login → Iniciar sesión y recibir token

Ejemplo:

bash
Copiar código
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"ana@example.com","password":"123456"}'
🖥️ Interfaz web
Login → /login

Registro → /register

📄 Licencia
MIT © 2025

📁 backend/.env.example
# Puerto en el que corre el backend NestJS
PORT=3000

# Clave secreta para firmar JWT
JWT_SECRET=tu-secreto-super-seguro

# Configuración de la base de datos (Postgres por defecto)
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=postgres
DB_NAME=lamorada

📁 frontend/web/.env.example
# URL de la API del backend
API_URL=http://localhost:3000


👉 Pasos:

Copia cada bloque en su carpeta correspondiente (backend y frontend/web).

Renómbralo a .env (ejemplo: cp .env.example .env).

Edita los valores según tu entorno (por ejemplo, JWT_SECRET con una cadena segura, o las credenciales reales de tu DB).






Preguntar a ChatGPT
