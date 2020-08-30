# the product

    the end goal is to have an experice to convey the journey of the rover accross the survace of mars

## end user

    the ideal end user is a person who is interested in real mars photos
    it would also also more access to photos of mars with out the problems of trying to search

## MVP

    have a page that can show the path(pictures) that each Mars rover took
    the ablity to navagate the pictures with buttons


    1. rovers page x 3
        *one picture rendered of a certian date at a time

        *have two buttons

            *one to move forward one picture

            *one to move back one picture

        *have the date rendered with the related picture

## Post MVP

    1. have the previous and next picture have a thumbnail for a preview

    post MVP would be making a api call and not just copying and pasting the data

## routes

    landing page to choose which rover to go to
        see assest landing page for lay out

    have routes for the three different mars rovers
        curiosity
        opportunity
        spirit
             see assets for rovers page layout each rover will have the same layout

## wireframe

    img and pdf can be found in the assets folder

## project idea

    would be accsessing a nasa api to display a picture with
        info displayed
            -title
            -discription
            -when it was taken

    title and a discription of the picture displayed
    with two buttons to letf and right of the picture to move forward and back by the date


    strech goals
        have a filter buttons
        have the pictures on a slide show

## tech used

    created with angular 10

    subject to change

        styled with css
        layed out with html grid and flexbox

        objects will be hard coded in the app but moved to a api call after proof of concept

## project board

    see github

## schedule

| Item                  | date to be comlpeted | comlpeted |
| --------------------- | -------------------- | --------- |
| approval              | TBD                  |
| wireframe             | TBD + 1              |
| landing page roughed  | TBD + 1              |
| rover pages roughed   | TBD + 1              |
| angular routing       | TBD + 2              |
| functions for buttons | TBD + 2              |
| rending info          | TBD + 2              |

    pending approval have basic routes and rough styling done
    layout have data rendered on correct pages within
    functionality with buttons and slidshow

## Approach taken

I wanted to have it feel like you were landing on mars. So having the home page welcoming the visitor to the plant. If they wanted to "explore" mars they would have to land on the planent and then you have to chose what lander you wanted to see through. I had the idea of showing the paths of the lander but i couldnt find the info on the loctions of the landers.

## solved probems

conditional rendering
the main issue was not fulling understanding the ngIf statement and how it would render what ever the varable was equal to. when it made sence that var can be changed by reasigning it like any var it made perfect sence how the content would change on the page.

## Unsolved problems

making an api call correctly
how to use a interface but that will come with using a database

# Space

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
