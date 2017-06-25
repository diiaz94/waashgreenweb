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
		    return user;
		}
		return user;
	});
});
