package runnerClass;

import org.BaseClass.ReportingClass;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src\\test\\resources\\FeatureFiles\\AtactinScenario.feature" }, 
glue = {
		"com.stepDefinitions" }, monochrome = true, dryRun = false, strict = true, plugin = { "pretty",
				"html:C:\\Users\\Sathik\\eclipse-workspace\\NewCucumber\\target",
				"json:C:\\Users\\Sathik\\eclipse-workspace\\NewCucumber\\target\\atacin1.json",
				"junit:C:\\Users\\Sathik\\eclipse-workspace\\NewCucumber\\target\\atactin.xml" })
public class TestRunner {

	@AfterClass
	public static void afterClass() {
		ReportingClass.GenerateJVMReport("C:\\Users\\Sathik\\eclipse-workspace\\NewCucumber\\target\\atacin1.json");

	}
}
