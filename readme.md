## Simple Boilerplate for Laravel & Angular Material

This package only for boilerplate.
currently:
- [laravel 5.4](laravel.com/docs/5.4)
- [angular 4.2](angular.io)
- [jadjoubran/laravel-angular 0.2.0](https://laravel-angular.io/)
- [tymon/jwt-auth ^1.0@dev](https://laravel-angular.io/docs/1/jwt-auth-install/)
- [irazasyed/jwt-auth-guard](https://laravel-angular.io/docs/1/jwt-auth-install/)


#### # Why it is almost separated
I believe truly separated frontend and backend is the best.  
But we cant really separated it, can we? \*in common hosting environment, only 1 port

For that reason, i make it all in one.

**/api/...** for laravel apps  
**/ng/...** for angular source

#### # Explanation
- /public/ng  
whole angular source, and its own node_modules to be accessed by public

- routes/web.php  
you can see in route "/", i change it to index.html from angular, yeah its the only needed to connect to the angular.
**mostly we only use /api/... url from laravel :-)**

- /public/ng/src/style.css -> /public/ng/src/main.scss  
added prebuilt-themes/indigo-pink, but get start to do more styling if needed


-

#### # Why angular in public? someone can download it right?
right, because simple, angular only views :-)
mostly html+js+css+images. doesn't it always downloaded by browser?

even whole angular package? src too?  
yes, dedicated node_modules too :-p,  
its just like 2 package in 1 folder. yeah


### # Installation
- on /  
    - composer install
    - copy .env.example -> .env , then edit it
    - php artisan key:generate
    - php artisan laravelangular:install
    - php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
    - php artisan jwt:secret
- on /public/ng/
    - npm install
    - `npm run build` for production compilation

###### # Angular Development
use `npm run dev` to build and watch



# material angular?
yes!!
- [material-angular](https://material.angular.io/)
- [material-angular/components](https://material.angular.io/components)
