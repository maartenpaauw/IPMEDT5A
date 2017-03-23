<?php

namespace IPMEDT5A\Providers;

use Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // https://laravel-news.com/laravel-5-4-key-too-long-error
        Schema::defaultStringLength(191);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if ($this->app->environment() !== 'production')
        {
            // IDE Helper
            $this->app->register(IdeHelperServiceProvider::class);

            // Dingo API
            config(['api.debug' => true]);
        }
    }
}
