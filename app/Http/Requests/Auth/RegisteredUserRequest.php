<?php

namespace App\Http\Requests\Auth;

use App\Models\User;
use Illuminate\Validation\Rules;
use Illuminate\Foundation\Http\FormRequest;

class RegisteredUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'name'             => 'required|string|max:255',
            'email'            => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password'         => ['required', Rules\Password::defaults()],
            'confirmationTerm' => 'accepted'
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     */
    public function messages(): array
    {
        return [
            'name.required' => 'O nome é necessário',
            'name.string'   => 'O nome deve conter apenas letras',
            'name.max'      => 'O nome deve conter no máximo 255 caracteres',

            'email.required'  => 'O email é necessário',
            'email.string'    => 'O email deve conter apenas caracteres',
            'email.lowercase' => 'O email deve estar em minúsculo',
            'email.email'     => 'O email deve ser um endereço de email valido',
            'email.max'       => 'O email deve conter no máximo 255 caracteres',
            'email.unique'    => 'O email já foi registrado, tente outro',

            'password.required' => 'A senha é necessária',
            'password.min'      => 'A senha deve conter no mínimo 8 caracteres',

            'confirmationTerm.accepted' => 'O termo de uso deve ser aceito'
        ];
    }
}
