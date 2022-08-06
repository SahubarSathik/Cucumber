Feature: Validating Atactin Hotel application Task 
@reg 
Scenario: Login with Correct Username and Password 
	Given User login on the url of "https://adactinhotelapp.com/" on chrome browser 
	When User Enters the username and password
	|username|password|
	|abc@gmail.com|sahubar|
	|123@gmail.com|123456|
	And User Click the Login Button 
	Then User Verify that is him or not 
@E2E 
Scenario: Login with Incorrect Password and Get the Message 
	Given User login on the url of "https://adactinhotelapp.com/" on chrome browser 
	When User Enters the username as"sahubarsathik" and Incorrect password as "BQ20XV" 
	And User Click the Login Button 
	Then User Verify that is him or not and Get the Error Message 
@reg1 
Scenario Outline: Login with Positive and Enter Wrong CheckIn and CheckOut Date 
	Given User login on the url of "https://adactinhotelapp.com/" on chrome browser 
	When User Enters the username as "sahubarsathik" and password as "BQ20XV" 
	And User Click the Login Button 
	And User Enters the Following Credentials as "<Location>"and"<Hotels>" "<Room Type>"and "<Number of Rooms>"and "<Check In Date>" and "<Check Out Date>" and "<Adults per Room>" and "<Children per Room>" 
	Then User Click the Search Button 
	Then User get the Error Message of Regarding Incorrect Dates 
	Examples: 
		|Location|Hotels     |Room Type|Number of Rooms   |Check In Date|Check Out Date|Adults per Room|Children per Room|
		|Sydney  |Hotel Creek|Standard |2 - Two           |14/05/2022   |13/05/2022    |2 - Two        |0 - None         |
		
		@sanity 
		Scenario Outline: Positive Login and Fillup Mandadatory Only 
			Given User login on the url of "https://adactinhotelapp.com/" on chrome browser 
			When User Enters the username as "sahubarsathik" and password as "BQ20XV" 
			And User Click the Login Button 
			And User Enters the Following Credentials as "<Location>" and "<Room Type>"and "<Number of Rooms>"and "<Check In Date>" and "<Check Out Date>" and "<Adults per Room>" 
			Then User Click the Search Button 
			Then Check for hotel is Available or Not 
			Examples: 
				|Location |Room Type|Number of Rooms   |Check In Date|Check Out Date|Adults per Room|Children per Room|
				|Sydney   |Standard |2 - Two           |12/05/2022   |13/05/2022    |2 - Two        |0 - None         |
				
				@smoke 
				Scenario Outline: Login positive, Generate Id Delete by Searching 
					Given User login on the url of "https://adactinhotelapp.com/" on chrome browser 
					When User Enters the username as "sahubarsathik" and password as "BQ20XV" 
					And User Click the Login Button 
					And User Enters the Following Credentials as "<Location>"and"<Hotels>" "<Room Type>"and "<Number of Rooms>"and "<Check In Date>" and "<Check Out Date>" and "<Adults per Room>" and "<Children per Room>" 
					Then User Click the Search Button 
					Then User Select the Hotel and Click the Coutinue Button 
					Then User Enter thier Personal and Payment Details as"<firstName>" and"<laseName>" and"<address>" and"<creditCardNo>" and "<creditCardTYpe>" and "<expMonth>" and "<expYear>" and"<cvvNo>" 
					Then User Get that Oder Number and Click on My Itinerary Button 
					Then User Search the Order id and Click Go Button 
					Then User Select that Particualar id Click Cancel Selected Button 
					
					
					Examples: 
						|Location|Hotels     |Room Type|Number of Rooms   |Check In Date|Check Out Date|Adults per Room|Children per Room|firstName|lastName|address|creditCardNo    |creditCardTYpe  |expMonth|expYear|cvvNo|
						|Sydney  |Hotel Creek|Standard |2 - Two           |12/05/2022   |13/05/2022    |2 - Two        |0 - None         |sahubar  |sathik  |Ramnad |1234567891234567|American Express|June    |2022   |123  |
						
						@smoke1
						Scenario: User Get the all Booked history Order Number 
							Given User login on the url of "https://adactinhotelapp.com/" on chrome browser 
							When User Enters the username as "sahubarsathik" and password as "BQ20XV" 
							And User Click the Login Button 
							And User Click the Booked Itinerary and get the All OderNumber
							
							
							
		