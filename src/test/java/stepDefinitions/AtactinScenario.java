package stepDefinitions;

import java.util.List;
import java.util.Map;

import org.BaseClass.BaseClass;
import org.junit.Assert;
import org.junit.rules.ExpectedException;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AtactinScenario extends BaseClass {

	@Given("User login on the url of {string} on chrome browser")
	public void user_login_on_the_url_of_on_chrome_browser(String string) {
		// getDriver("chrome");
		// launch(string);
		implityWait(20);

	}

	@When("User Enters the username and password")
	public void user_Enters_the_username_and_password(io.cucumber.datatable.DataTable dataTable) {
		List<Map<String, String>> asMaps = dataTable.asMaps();
		Map<String, String> map = asMaps.get(1);
		String username = map.get("username");
		String password = map.get("password");

		System.out.println(username + "\n" + password);
		driver.findElement(By.id("username")).sendKeys(username);
		driver.findElement(By.id("password")).sendKeys(password);

	}

	@When("User Click the Login Button")
	public void user_Click_the_Login_Button() {

		WebElement loginButton = locators("id", "login");
		buttonClick(loginButton);
	}

	@Then("User Verify that is him or not")
	public void user_Verify_that_is_him_or_not() {
		WebElement visibleName = locators("id", "username_show");
		String name = visibleName.getAttribute("value");
		Assert.assertEquals(name, "Hello sahubarsathik!");
		System.out.println(name);
		quit();
	}

	@When("User Enters the username as{string} and Incorrect password as {string}")
	public void user_Enters_the_username_as_and_Incorrect_password_as(String string, String string2) {

		WebElement username = locators("id", "username");
		textSend(username, string);
		WebElement password = locators("id", "password");
		textSend(password, string2);
	}

	@Then("User Verify that is him or not and Get the Error Message")
	public void user_Verify_that_is_him_or_not_and_Get_the_Error_Message() {
		PageFactory.initElements(driver, this);
		WebElement errorMessage = locators("xpath", "//b[contains(text(),'Invalid')]");
		String message = errorMessage.getText();
		System.out.println(message);
		quit();

	}

	@When("User Enters the username as {string} and password as {string}")
	public void user_Enters_the_username_as_and_password(String string, String string2) {
		WebElement username = locators("id", "username");
		textSend(username, string);
		WebElement password = locators("id", "password");
		textSend(password, string2);
	}

	@When("User Enters the Following Credentials as {string}and{string} {string}and {string}and {string} and {string} and {string} and {string}")
	public void user_Enters_the_Following_Credentials_as_and_and_and_and_and_and(String string, String string2,
			String string3, String string4, String string5, String string6, String string7, String string8) {
		WebElement location = locators("id", "location");
		selectByVisibleTextMethod(location, string);
		WebElement hotels = locators("id", "hotels");
		selectByVisibleTextMethod(hotels, string2);
		WebElement roomType = locators("id", "room_type");
		selectByVisibleTextMethod(roomType, string3);
		WebElement roomNos = locators("id", "room_nos");
		selectByVisibleTextMethod(roomNos, string4);
		WebElement checkInDate = locators("id", "datepick_in");
		checkInDate.clear();
		textSend(checkInDate, string5);
		WebElement checkOutDate = locators("id", "datepick_out");
		checkOutDate.clear();
		textSend(checkOutDate, string6);
		WebElement adultCount = locators("id", "adult_room");
		selectByVisibleTextMethod(adultCount, string7);
		WebElement childCount = locators("id", "child_room");
		selectByVisibleTextMethod(childCount, string8);

	}

	@Then("User Click the Search Button")
	public void user_Click_the_Search_Button() {
		locators("id", "Submit").click();
	}

	@Then("User get the Error Message of Regarding Incorrect Dates")
	public void user_get_the_Error_Message_of_Regarding_Incorrect_Dates() {
		WebElement errorMessage = locators("id", "checkin_span");
		String text = errorMessage.getText();
		System.out.println(text);
		quit();

	}

	@When("User Enters the Following Credentials as {string} and {string}and {string}and {string} and {string} and {string}")
	public void user_Enters_the_Following_Credentials_as_and_and_and_and_and(String string, String string2,
			String string3, String string4, String string5, String string6) {
		WebElement location = locators("id", "location");
		selectByVisibleTextMethod(location, string);

		WebElement roomType = locators("id", "room_type");
		selectByVisibleTextMethod(roomType, string2);
		WebElement roomNos = locators("id", "room_nos");
		selectByVisibleTextMethod(roomNos, string3);
		WebElement checkInDate = locators("id", "datepick_in");
		checkInDate.clear();
		textSend(checkInDate, string4);
		WebElement checkOutDate = locators("id", "datepick_out");
		checkOutDate.clear();
		textSend(checkOutDate, string5);
		WebElement adultCount = locators("id", "adult_room");
		selectByVisibleTextMethod(adultCount, string6);

	}

	@Then("Check for hotel is Available or Not")
	public void check_for_hotel_is_Available_or_Not() {
		WebElement continueButton = locators("id", "continue");
		boolean displayed = continueButton.isDisplayed();
		Assert.assertTrue(displayed);
		quit();
	}

	@Then("User Select the Hotel and Click the Coutinue Button")
	public void user_Select_the_Hotel_and_Click_the_Coutinue_Button() {
		locators("id", "radiobutton_0").click();
		locators("id", "continue").click();
	}

	@Then("User Enter thier Personal and Payment Details as{string} and{string} and{string} and{string} and {string} and {string} and {string} and{string}")
	public void user_Enter_thier_Personal_and_Payment_Details_as_and_and_and_and_and_and_and(String string,
			String string2, String string3, String string4, String string5, String string6, String string7,
			String string8) {
		locators("id", "first_name").sendKeys(string);
		locators("id", "last_name").sendKeys(string2);
		locators("id", "address").sendKeys(string3);
		locators("id", "cc_num").sendKeys(string4);
		WebElement ccType = locators("id", "cc_type");
		selectByVisibleTextMethod(ccType, string5);
		WebElement expMonth = locators("id", "cc_exp_month");
		selectByVisibleTextMethod(expMonth, string6);
		WebElement expYear = locators("id", "cc_exp_year");
		selectByVisibleTextMethod(expYear, string7);
		WebElement ccvNo = locators("id", "cc_cvv");
		textSend(ccvNo, string8);
		locators("id", "book_now").click();

	}

	@Then("User Get that Oder Number and Click on My Itinerary Button")
	public void user_Get_that_Oder_Number_and_Click_on_My_Itinerary_Button() {
		orderNumber = locators("id", "order_no").getAttribute("value");
		locators("id", "my_itinerary").click();
		System.out.println(orderNumber);
	}

	String orderNumber;

	@Then("User Search the Order id and Click Go Button")
	public void user_Search_the_Order_id_and_Click_Go_Button() {
		locators("id", "order_id_text").sendKeys(orderNumber);
		locators("id", "search_hotel_id").click();
	}

	@Then("User Select that Particualar id Click Cancel Selected Button")
	public void user_Select_that_Particualar_id_Click_Cancel_Selected_Button() {
		locators("name", "ids[]").click();
		WebElement cancelButton = locators("name", "cancelall");
		cancelButton.click();
		acceptAlert();
		quit();
	}

	@When("User Click the Booked Itinerary and get the All OderNumber")
	public void user_Click_the_Booked_Itinerary_and_get_the_All_OderNumber() {
		locators("linkText", "Booked Itinerary").click();

		WebElement tableBody = locators("xpath", "(//tbody)[5]");
		List<WebElement> allRows = tableBody.findElements(By.xpath("(//tbody)[5]/tr//td[2]//input"));
		System.out.println(allRows.size());
		for (WebElement webElement : allRows) {
			String text = webElement.getAttribute("value");
			System.out.println(text);
		}

		quit();
	}

}
