Feature: Validation Facebook Login Page 
Scenario: User enter with positive credentials 
	Given User load the url "https://www.facebook.com/" on chrome browser 
	When User Enters the UserName and Password as "sathikdme@gmail.com" and "123456" 
	And User click the Login Button 
	And Check the User is in Home Page or Not