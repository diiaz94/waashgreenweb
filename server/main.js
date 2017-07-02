import { Meteor } from 'meteor/meteor';




Meteor.startup(() => {

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

		if (user.services) {
	        console.log("login server 1");
	        var service = _.keys(user.services)[0];
	        var email = user.services[service].email;
	        if (!email) {
	            if (user.emails) {
	                email = user.emails.address;
	            }
	        }
	        if (!email) {
	            email = options.email;
	        }
	        if (!email) {

	            return user;
	        }

	        var existingUser = Meteor.users.findOne({'emails.address': email});
	        if (!existingUser) {

	            console.log("login server 2");
	            var existingFacebookUser = Meteor.users.findOne({'services.facebook.email': email});
	            var doesntExist = !existingFacebookUser;
	            if (doesntExist) {
	            	console.log("login server 3 -- No existe en facebook ni en password");

					if (!user.services.facebook) {
			            user.profile = options.profile;
					    user.profile.isComplete = true;
			        }
			        else {
						user.profile = {
							email: user.services.facebook.email,
							firstName : user.services.facebook.first_name,
							lastName : user.services.facebook.last_name,
							rol : "Cliente",
							rut : "",
							comuna : "",
							phone : "",
							isComplete: false
						};
					}
	                return user;
	            } else {
	            		 console.log("login server 2--");
	                existingUser = existingFacebookUser;
	                if (!user.services.facebook) {
	                	console.log("error porque el usuario existe con facebook y viene a registrarse con password");
	        			throw new Meteor.Error('404', "Usuario ya se encuentra registrado");
    					return;
	                }
	                else { //nunca deberia de caer en este caso
	                	console.log("login server 2-----Viene de facebook y esta registrado con facebook");
	                    return existingUser;
		                
		            }
	            }
	        }
	        else {//nunca deberia de caer en este caso
	        	if (!user.services.facebook) {
	        		console.log("error porque el usuario existe con password y viene con password");
	        		throw new Meteor.Error('404', "Usuario ya se encuentra registrado");
    				return;
	        	}
	        }
	        //existe con password y viene con facebook
	        //nuevo: facebook, viejo: email
	        // copy accross new service info
	        existingUser.services[service] = user.services[service];
	        /*existingUser.services.resume.loginTokens.push(
	            user.services.resume.loginTokens[0]
	        );*/
	        console.log("nuevoo usuario "+JSON.stringify(user));

	        console.log("existente usuario "+JSON.stringify(existingUser));

	        Meteor.users.remove({_id: existingUser._id}); 

	        return existingUser;                 
	    }


	});
});
