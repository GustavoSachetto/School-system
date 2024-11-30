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

export interface CoursePayment {
  model_type: string,
  payment_method_id: string,
  transaction_amount: number,
  payment_id: number,
  course_id: number,
  user_id: number,
  generated_at: string
}

export interface Payment {
  point_of_interaction: {
    transaction_data: {
      qr_code: string,
      qr_code_base64: string,
    }
  }
}

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  auth: {
    user: User,
  },
}
