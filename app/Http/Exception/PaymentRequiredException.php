<?php

namespace App\Http\Exception;

use Exception;

class PaymentRequiredException extends Exception
{
    protected $code = 402;
    protected $message = 'Payment request failed, please try again later or contact your system administrator.';
}
