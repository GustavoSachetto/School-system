import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { Form, Input } from '@/Components/Ui';
import Button from '@/Components/Ui/Button';
import If from '@/Components/If';

export type LoginProps = {
  status?: string;
  canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  })

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route('login'), {
      onFinish: () => reset('password'),
    });
  }

  return (
    <main className="flex justify-center mt-10">
      <Head title="Entrar na conta" />

      <If conditional={typeof status === "string"}>
        <div className="mb-4 text-sm font-medium text-green-600">
          {status}
        </div>
      </If>

      <Form.Root onSubmit={submit}>
        <Form.Title>Entrar</Form.Title>

        <p>
          Bem-vindo de volta! Que essa nova jornada seja feliz, tranquila e cheia de aprendizados! Conte conosco para o que precisar!
        </p>

        <Form.Fieldset>
          <Form.Container>
            
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

            <Input.Group>
              <Input.Label htmlFor="password" required>Senha</Input.Label>

              <Input.Password
                id="password"
                name="password"
                value={data.password}
                placeholder="********"
                autoComplete="current-password"
                error={errors.password}
                onChange={(e) => setData('password', e.target.value)}
              />

              <Input.Error message={errors.password} />
            </Input.Group>
            
          </Form.Container>

          <div className="flex justify-between">
            <Input.Checkbox 
              id="checkbox" 
              name="checkbox" 
              checked={data.remember}
              onChange={(e) =>
                setData('remember', e.target.checked)
              }
            >
              Lembrar-me
            </Input.Checkbox>

            <If conditional={canResetPassword}>
              <Link className="mt-0.5" href={route('password.request')}>
                Esqueceu a senha?
              </Link>
            </If>
          </div>
        </Form.Fieldset>

        <Button type="submit" className="mb-4" disabled={processing}>
          Entrar
        </Button>

        <span>Não possui conta? <Link href={route('register')}>Cadastre-se agora</Link></span>
      </Form.Root>
    </main>
  )
}
