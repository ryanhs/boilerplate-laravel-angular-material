## Simple Boilerplate for Laravel & Angular Material

This package only for boilerplate.
currently:
- laravel 5.4
- angular 4.2

#### # Why it is almost separated
i believe truly separated frontend and backend is the best
but we cant really separated it, can we? \*in common hosting environment, only 1 port

for that reason, i make it all in one.

**/api/...** for laravel apps  
**/ng/...** for angular source

#### # Explaination
- /public/ng  
whole angular source, and its own node_modules to be accessed by public

- routes/web.php  
you can see in route "/", i change it to index.html from angular, yeah its the only needed to connect to the angular.
**mostly we only use /api/... url from laravel :-)**


#### # Why angular in public? someone can download it right?
right, because simple, angular held only views :-)
mostly html+js+css+images. doesn't it always downloaded by browser?

even whole angular package? src too?
yes, dedicated node_modules too :-p,  
its just like 2 package in 1 folder. yeah


### # Installation
- on /  
    - composer install
    - copy .env.example -> .env , then edit it
    - php artisan key:generate
- on /public/ng/
    - npm install
    - `npm run build` for production compilation

###### # Angular Development
use `npm run dev` to build and watch
