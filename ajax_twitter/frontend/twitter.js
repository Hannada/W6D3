const FollowToggle = require('./follow_toggle'); 
const UsersSearch = require('./users_search'); 

$( () => {
  $(".follow-toggle").each(function(index, el) {
    new FollowToggle($(el));
  });

  $(".users-search").each(function(index, el) {
    new UsersSearch($(el));
  });
})