# gl-jsprocamp-react

## MovieDB app

[Website](https://ktrygub.github.io/gl-jsprocamp-react/)

## Description:
 
 MovieDB is an application where you can store your own favorite movies.
 
 You can add, rate, edit and delete your favorite movies. 
 
 You can search through or sort your favorite movies by title, description, genre, actors, release year etc.
 
 All movies are stored in browser local storage.


## bugs / todos :
- [ ] group / reorganize movies order (drag'n'drop, groups structure etc.)
- [ ] add some notification when user trying to add already existing movie ( current behavior: nothing happens, no duplicate movie added with no notification)
- [x] use Reselect for 'sort' and 'search' features
- [x] broken 'stars rating' CSS representation when manually changing movie rating inside 'Add Movie' form or 'Movie Details' page (when we change rating and press 'discard' button). Rating logic is fine but CSS representation is broken.
- [x] add confirmation dialog after user pressed 'delete movie' button
- [x] change pagination process. Now this process controlled by internal state activePage, change it to be controlled by url params: f.e. /dashboard/page1 -> /dashboard/page2 etc. (also refactor search in same manner, f.e. /dashboard/comedy/page1, /dashboard/y2012/page3)