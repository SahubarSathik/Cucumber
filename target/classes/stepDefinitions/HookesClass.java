package stepDefinitions;

import org.BaseClass.BaseClass;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HookesClass extends BaseClass {
	@Before
	public void beforeScenario() {

		getDriver("chrome");
		launch("https://adactinhotelapp.com/");

	}

	@After
	public void afterScenario(Scenario s) {
		if (s.isFailed()) {
			TakesScreenshot ts = (TakesScreenshot) driver;
			byte[] screenshotAs = ts.getScreenshotAs(OutputType.BYTES);
			s.embed(screenshotAs, "a.png");

		}
		quit();
	}
}
