
export   function SIGNIN ({commit}) {
    // Initializes OAuth.io with API key
    // Sign-up an account to get one
    window.OAuth.initialize('x0enh4S2lFy5J4HfC0kD2pw6yio');

    // Popup facebook and ask for authorization
    window.OAuth.popup('github').then((github) => {
      console.log('github:', github);
      // this.start = false;
      // Prompts 'welcome' message with User's name on successful login
      // #me() is a convenient method to retrieve user data without requiring you
      // to know which OAuth provider url to call
      github.me().then((data) => {
        console.log("data: ", data);
        this.$router.push('profile')
        // alert("Your Github email: " + data.email + ".\nCheck console logs for more info.");
      });

      // You can also call Github's API using #.get()
      github.get('/user').then(data => {
        commit('DATA_MUTATION', data)
        console.log('self data:', data);

      });
    });


  }



