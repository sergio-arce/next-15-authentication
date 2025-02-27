
// Create a type for the roles
export type Roles = "admin" | "moderator"

declare global {
  interface CustomJwtSessionClaims {
    metada: {
      roles?: Roless
    }
  }
}