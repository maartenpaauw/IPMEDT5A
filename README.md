# IPMEDT5 

Het vak IPMEDT5 (Project Mediatechnologie 5) op Hogeschool Leiden.

### Installeren API (application folder)

```shell
composer install
cp .env.example .env # Het bestand invullen.
php artisan storage:link
php artisan key:generate
php artisan migrate --seed
```