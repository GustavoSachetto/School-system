import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { Form, Input } from '@/Components/Ui';
import Button from '@/Components/Ui/Button';
import If from '@/Components/If';

export type ForgotPasswordProps = {
  status?: string 
}

export default function ForgotPassword({ status }: ForgotPasswordProps) {
  const { data, setData, post, processing, errors } = useForm({
    email: ''
  })

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route('password.email'));
  }

  return (
    <main className="flex justify-center mt-10">
      <Head title="Recuperar conta" />

      <Form.Root onSubmit={submit}>
        <Form.Title>Recuperar conta</Form.Title>

        <p>
          Esqueceu sua senha? Sem problemas. Basta nos informar seu endereço de e-mail e nós lhe enviaremos um link de redefinição de senha que permitirá que você escolha uma nova.
        </p>

        <If conditional={typeof status === "string"}>
          <div className="mb-4 text-sm font-medium text-green-600">
            {status}
          </div>
        </If>

        <Form.Fieldset>
          <Input.Group>
            <Input.Label htmlFor="email" required>Email</Input.Label>

            <Input.Text
              id="email"
              type="email"
              name="email"
              value={data.email}
              placeholder="exemplo@site.com"
              autoComplete="username"
              error={errors.email}
              onChange={(e) => setData('email', e.target.value)}
            />

            <Input.Error message={errors.email} />
          </Input.Group>
        </Form.Fieldset>

        <Button type="submit" className="mb-2" disabled={processing}>
          Recuperar conta
        </Button>
      </Form.Root>
    </main>
  )
}
