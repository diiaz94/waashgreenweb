import { Meteor } from 'meteor/meteor';




Meteor.startup(() => {
  // code to run on server at startup
	Accounts.loginServiceConfiguration.remove({
		service: "facebook"
	});

	Accounts.loginServiceConfiguration.insert({
		service: "facebook",
		appId: "130746120838205",
		secret: "b075bc95dcc7e6c1af81ac9d16d34544"
	});

	Accounts.onCreateUser(function (options, user) {
		console.log("login server");


		if (!user.services.facebook) {
		    
	    if (options.profile) {
	    	console.log("profileeee");
		    user.profile = options.profile;
		  }

		} else {
			user.profile = {
				firstName : user.services.facebook.first_name,
				lastName : user.services.facebook.last_name,
				rol : "Cliente",
				rut : "",
				comuna : "",
				phone : ""
			};
			user.username = user.services.facebook.email;
		}

		return user;
	});
});
