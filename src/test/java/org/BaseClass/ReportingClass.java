package org.BaseClass;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class ReportingClass {

	public static void GenerateJVMReport(String json) {
		
		//File Location
		File file = new File("C:\\Users\\Sathik\\eclipse-workspace\\NewCucumber\\target");
		
		//Configuration-->class
		Configuration configuration = new Configuration(file,"atactin");
		configuration.addClassifications("Browserr Type", "chrome");
		configuration.addClassifications("Browser Version", "100.02.45");
		configuration.addClassifications("Platform", "Widows-11");
		configuration.addClassifications("Environment", "UAT");
		configuration.addClassifications("Sprint Number", "10");
		
		List<String> li = new ArrayList<String>();
		
		li.add(json);
		ReportBuilder bulider = new ReportBuilder(li, configuration);
		bulider.generateReports();
		
		
	}
	
	
}
