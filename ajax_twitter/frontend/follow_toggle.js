class FollowToggle {
  constructor($el) {
    this.$el = $el;
    this.userId = $el.data("user-id");
    this.followState = $el.data("initial-follow-state");
    this.render();
    this.handleClick = this.handleClick.bind(this);
    this.$el.on("click", (e) => this.handleClick(e) )
  }
  
  render() {
    if (this.followState === false) { 
      this.$el.text("Follow!");
    } else {
      this.$el.text("Unfollow!");
    }
  };

  handleClick(e) {
    e.preventDefault();
    if (this.followState === false) {
      $.ajax({
        url: `/users/${this.userId}/follow`,
        type: "POST",
        dataType: "json",
        success: () => {
          this.followState = true;
          this.render();
        } // function toggling follow state
      })
    } else {
      $.ajax({
        url: `/users/${this.userId}/follow`,
        type: "DELETE",
        dataType: "json",
        success: () => {
          this.followState = false;
          this.render();
        } // function toggling follow state
      })
    }
  }
}


module.exports = FollowToggle; // Make requirable 