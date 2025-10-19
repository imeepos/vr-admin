# NestJS + GraphQL + TypeORM Setup

This project has been initialized with NestJS, GraphQL, and TypeORM with PostgreSQL support.

## 🚀 Quick Start

1. **Start PostgreSQL database** (required for full functionality):
   ```bash
   # Using Docker
   docker run --name postgres-vr-admin -e POSTGRES_PASSWORD=password -e POSTGRES_DB=vr_admin -p 5432:5432 -d postgres

   # Or install PostgreSQL locally and create a database named 'vr_admin'
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Configure environment variables** (edit `.env` file):
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=password
   DB_DATABASE=vr_admin
   ```

4. **Start the application**:
   ```bash
   pnpm run start:dev
   ```

5. **Access GraphQL Playground**:
   Open your browser and navigate to `http://localhost:3000/graphql`

## 📁 Project Structure

```
src/
├── entities/
│   └── user.entity.ts      # TypeORM entity with GraphQL decorators
├── resolvers/
│   └── user.resolver.ts    # GraphQL resolvers for User operations
├── dto/
│   ├── create-user.input.ts  # Input validation DTOs
│   └── update-user.input.ts
├── app.module.ts           # Main module with GraphQL and TypeORM configuration
└── main.ts                 # Application entry point
```

## 🔧 Available GraphQL Operations

### Queries
```graphql
# Get all users
query {
  users {
    id
    email
    name
    avatar
    isActive
    createdAt
    updatedAt
  }
}

# Get a specific user
query {
  user(id: "user-id") {
    id
    email
    name
  }
}
```

### Mutations
```graphql
# Create a new user
mutation {
  createUser(input: {
    email: "user@example.com"
    name: "John Doe"
    password: "password123"
  }) {
    id
    email
    name
  }
}

# Update a user
mutation {
  updateUser(id: "user-id", input: {
    name: "Jane Doe"
  }) {
    id
    name
  }
}

# Delete a user
mutation {
  deleteUser(id: "user-id")
}
```

## 🛠 Development Commands

```bash
# Development mode with hot reload
pnpm run start:dev

# Build for production
pnpm run build

# Start production build
pnpm run start:prod

# Run tests
pnpm run test

# Run e2e tests
pnpm run test:e2e
```

## 📦 Dependencies Installed

- **@nestjs/graphql**: GraphQL integration for NestJS
- **@nestjs/apollo**: Apollo Server integration
- **@nestjs/typeorm**: TypeORM integration
- **@nestjs/config**: Environment configuration
- **typeorm**: ORM for database operations
- **pg**: PostgreSQL driver
- **class-validator & class-transformer**: Input validation
- **graphql**: GraphQL implementation
- **apollo-server-express**: Apollo Server for Express

## 🎯 Next Steps

1. Set up authentication/authorization
2. Add more entities and relationships
3. Implement business logic services
4. Add custom validation
5. Set up database migrations
6. Configure testing environment
7. Add logging and monitoring
8. Deploy to production