import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import Form from '@/Components/Ui/Form';
import Fieldset from '@/Components/Ui/Form/Components/Fieldset';
import Input from '@/Components/Ui/Input';
import PasswordInput from '@/Components/Ui/PasswordInput';
import ContainerInput from '@/Components/Ui/Form/Components/ContainerInput';
import Label from '@/Components/Ui/Label';
import Title from '@/Components/Ui/Form/Components/Title';
import Button from '@/Components/Ui/Button';
import Checkbox from '@/Components/Ui/Checkbox';

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

      <Form onSubmit={submit}>
				<Title>Criar conta</Title>

				<p>
					Bem-vindo a bordo! Estamos muito felizes por você ter decidido se juntar a nós como nosso novo cliente. Estamos ansiosos para começar esta jornada emocionante juntos! 
				</p>

				<Fieldset>
					<ContainerInput>
						<div>
							<Label htmlFor="name" required>Nome</Label>

							<Input
								id="name"
								name="name"
								type="text"
								value={data.name}
								placeholder="Exemplo Seu Nome"
								autoComplete="name"
								onChange={(e) => setData('name', e.target.value)}
								error={errors.name}
							/>
						</div>

						<div>
							<Label htmlFor="email" required>Email</Label>

							<Input
								id="email"
								type="email"
								name="email"
								value={data.email}
								placeholder="exemplo@site.com"
								autoComplete="username"
								onChange={(e) => setData('email', e.target.value)}
								error={errors.email}
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

          <Checkbox 
            id="checkbox" 
            name="checkbox" 
            checked={data.confirmationTerm}
						error={errors.confirmationTerm}
            onChange={(e) =>
              setData('confirmationTerm', e.target.checked)
            }
          >
						Concordo com todos os <Link className="text-base" href="/">Termos.</Link>
					</Checkbox>
				</Fieldset>

				<Button type="submit" className="mb-4" disabled={processing}>
          Criar conta
        </Button>

        <span>Já possui conta? <Link href={route('login')}>Entre agora</Link></span>
      </Form>
  	</main>
  )
}
