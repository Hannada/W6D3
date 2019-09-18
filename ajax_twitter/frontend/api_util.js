const APIUtil = {
  followUser: id => {
    // ...
  },

  unfollowUser: id => {
    // ...
  }

  searchUsers(queryVal) {
    $.ajax({
      url: `/user/${this.userId}`,
      type: "GET",
      dataType: "json", 
      data: { username = queryVal}
    })
  }
};

module.exports = APIUtil;