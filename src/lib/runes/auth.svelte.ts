import type { User } from "firebase/auth";

export const currentUser: { user: User | null } = $state({ user: null });

