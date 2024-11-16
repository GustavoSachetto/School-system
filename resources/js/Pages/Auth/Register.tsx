import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { Form, Input } from '@/Components/Ui';
import Button from '@/Components/Ui/Button';

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
		confirmationTerm: false
  })

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

		post(route('register'), {
			onFinish: () => reset('password'),
		});
  }

  return (
    <main className="flex justify-center mt-10">
      <Head title="Cadastrar conta" />

      <Form.Root onSubmit={submit}>
				<Form.Title>Criar conta</Form.Title>

				<p>
					Bem-vindo a bordo! Estamos muito felizes por você ter decidido se juntar a nós como nosso novo cliente. Estamos ansiosos para começar esta jornada emocionante juntos! 
				</p>

				<Form.Fieldset>
					<Form.Container>
						<Input.Group>
							<Input.Label htmlFor="name" required>Nome</Input.Label>

							<Input.Text
								id="name"
								name="name"
								type="text"
								value={data.name}
								placeholder="Exemplo Seu Nome"
								autoComplete="name"
								onChange={(e) => setData('name', e.target.value)}
								error={errors.name}
							/>

							<Input.Error message={errors.name} />
						</Input.Group>

						<Input.Group>
							<Input.Label htmlFor="email" required>Email</Input.Label>

							<Input.Text
								id="email"
								type="email"
								name="email"
								value={data.email}
								placeholder="exemplo@site.com"
								autoComplete="username"
								onChange={(e) => setData('email', e.target.value)}
								error={errors.email}
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

          <Input.Checkbox 
            id="checkbox" 
            name="checkbox" 
            checked={data.confirmationTerm}
						error={errors.confirmationTerm}
            onChange={(e) =>
              setData('confirmationTerm', e.target.checked)
            }
          >
						Concordo com todos os <Link className="text-base" href="/">Termos.</Link>
					</Input.Checkbox>
				</Form.Fieldset>

				<Button type="submit" className="mb-4" disabled={processing}>
          Criar conta
        </Button>

        <span>Já possui conta? <Link href={route('login')}>Entre agora</Link></span>
      </Form.Root>
  	</main>
  )
}
