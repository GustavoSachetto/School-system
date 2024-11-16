export interface User {
  id: number,
  name: string,
  image_url: string,
  email: string,
  email_verified_at?: string,
}

export interface Course {
  id: number,
  title: string,
  name: string,
  about: string,
  image_url: string,
  workload: number,
  requirement: string,
  price: number,
}

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  auth: {
    user: User,
  },
}
