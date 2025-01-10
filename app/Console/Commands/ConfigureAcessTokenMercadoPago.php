<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class ConfigureAcessTokenMercadoPago extends Command
{
    /**
     * The name and signature of the console command.
     */
    protected $signature = 'app:configure-access-token-mercado-pago {token}';

    /**
     * The console command description.
     */
    protected $description = 'Comando de configuração do token de acesso da conta do Mercado Pago';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $file = fopen('.env', 'a+');
        
        if (fwrite($file, "\n\nPAYMENT_ACCESS_TOKEN_MERCADO_PAGO={$this->argument('token')}"));
            $this->info('Token de acesso do Mercado Pago configurado com sucesso!');
    }
}
