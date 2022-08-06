package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class FbLoginStepDef {
	WebDriver driver;
	
	@Given("User load the url {string} on chrome browser")
	public void user_load_the_url_on_chrome_browser(String string) {
	
		driver = new ChromeDriver();
		driver.get(string);
		driver.manage().window().maximize();
		
	}

	@When("User Enters the UserName and Password as {string} and {string}")
	public void user_Enters_the_UserName_and_Password_as_and(String string, String string2) {
	 driver.findElement(By.id("email")).sendKeys(string);
	 driver.findElement(By.id("pass")).sendKeys(string2);
		
		
		
	}

	@When("User click the Login Button")
	public void user_click_the_Login_Button() {
	   driver.findElement(By.name("login")).click();
	}

	@When("Check the User is in Home Page or Not")
	public void check_the_User_is_in_Home_Page_or_Not() {
	   System.out.println("i am done");
	}
}
