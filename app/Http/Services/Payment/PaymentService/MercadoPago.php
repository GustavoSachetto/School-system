<?php

namespace App\Http\Services\Payment\PaymentService;

use App\Models\User;
use MercadoPago\MercadoPagoConfig;
use MercadoPago\Resources\Payment;
use MercadoPago\Client\Common\RequestOptions;
use MercadoPago\Client\Payment\PaymentClient;

class MercadoPago implements PaymentInterface
{
    private PaymentClient $client;
    private RequestOptions $requestOptions;

    public function __construct(
        private User $user
    ) {
        $this->boot();
        $this->client = new PaymentClient();
        $this->requestOptions = new RequestOptions();
    }

    /**
     * Capture authorized payment.
     */
    public function capturePayment(int $paymentId): Payment
    {
        return $this->client->get($paymentId, $this->requestOptions);
    }

    /** 
     * Makes the payment request.
    */
    public function sendPayment(float $transactionAmount, string $paymentMethodId): Payment
    {
        return $this->client->create([
            "transaction_amount" => (float) $transactionAmount,
            "payment_method_id"  => $paymentMethodId,
            "payer" => [ "email" => $this->user->email ]
        ], $this->requestOptions);
    }

    /**
     * Initial service settings.
     */
    private function boot(): void
    {
        MercadoPagoConfig::setAccessToken(getenv('PAYMENT_ACCESS_TOKEN_MERCADO_PAGO')); 
    }
}