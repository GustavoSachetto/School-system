import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import Form from '@/Components/Ui/Form';
import Title from '@/Components/Ui/Form/Components/Title';
import Fieldset from '@/Components/Ui/Form/Components/Fieldset';
import Label from '@/Components/Ui/Label';
import Input from '@/Components/Ui/Input';
import If from '@/Components/If';
import Button from '@/Components/Ui/Button';

type ForgotPasswordProps = {
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

      <Form onSubmit={submit}>
        <Title>Recuperar conta</Title>

        <p>
          Esqueceu sua senha? Sem problemas. Basta nos informar seu endereço de e-mail e nós lhe enviaremos um link de redefinição de senha que permitirá que você escolha uma nova.
        </p>

        <If conditional={typeof status === "string"}>
          <div className="mb-4 text-sm font-medium text-green-600">
            {status}
          </div>
        </If>

        <Fieldset>
          <div>
            <Label htmlFor="email" required>Email</Label>

            <Input
              id="email"
              type="email"
              name="email"
              value={data.email}
              placeholder="exemplo@site.com"
              autoComplete="username"
              error={errors.email}
              onChange={(e) => setData('email', e.target.value)}
            />
          </div>
        </Fieldset>

        <Button type="submit" className="mb-2" disabled={processing}>
          Recuperar conta
        </Button>
      </Form>
    </main>
  )
}
