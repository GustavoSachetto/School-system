import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import Checkbox from '@/Components/Ui/Checkbox';
import Input from '@/Components/Ui/Input';
import Label from '@/Components/Ui/Label';
import PasswordInput from '@/Components/Ui/PasswordInput';
import Button from '@/Components/Ui/Button';
import Form from '@/Components/Ui/Form';
import Title from '@/Components/Ui/Form/Components/Title';
import Fieldset from '@/Components/Ui/Form/Components/Fieldset';
import ContainerInput from '@/Components/Ui/Form/Components/ContainerInput';
import If from '@/Components/If';

type LoginProps = {
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

      <Form onSubmit={submit}>
        <Title>Entrar</Title>

        <p>
          Bem-vindo de volta! Que essa nova jornada seja feliz, tranquila e cheia de aprendizados! Conte conosco para o que precisar!
        </p>

        <Fieldset>
          <ContainerInput>
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

            <div>
              <Label htmlFor="password" required>Senha</Label>

              <PasswordInput
                id="password"
                name="password"
                value={data.password}
                placeholder="********"
                autoComplete="current-password"
                error={errors.password}
                onChange={(e) => setData('password', e.target.value)}
              />
            </div>
          </ContainerInput>

          <div className="flex justify-between">
            <Checkbox 
              id="checkbox" 
              name="checkbox" 
              checked={data.remember}
              onChange={(e) =>
                setData('remember', e.target.checked)
              }
            >
              Lembrar-me
            </Checkbox>

            <If conditional={canResetPassword}>
              <Link className="mt-0.5" href={route('password.request')}>
                Esqueceu a senha?
              </Link>
            </If>
          </div>
        </Fieldset>

        <Button type="submit" className="mb-4" disabled={processing}>
          Entrar
        </Button>

        <span>Não possui conta? <Link href={route('register')}>Cadastre-se agora</Link></span>
      </Form>
    </main>
  )
}