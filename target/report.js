$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FeatureFiles/AtactinScenario.feature");
formatter.feature({
  "name": "Validating Atactin Hotel application Task",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login with Correct Username and Password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@reg"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User login on the url of \"https://adactinhotelapp.com/\" on chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AtactinScenario.user_login_on_the_url_of_on_chrome_browser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters the username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "abc@gmail.com",
        "sahubar"
      ]
    },
    {
      "cells": [
        "123@gmail.com",
        "123456"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AtactinScenario.user_Enters_the_username_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "AtactinScenario.user_Click_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify that is him or not",
  "keyword": "Then "
});
formatter.match({
  "location": "AtactinScenario.user_Verify_that_is_him_or_not()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#username_show\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-GD2TQ7C\u0027, ip: \u0027192.168.43.244\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f3e20d36458894b6a7a3fda4bb233137, findElement {using\u003did, value\u003dusername_show}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\Sathik\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:63771}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:63771/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f3e20d36458894b6a7a3fda4bb233137\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.BaseClass.BaseClass.locators(BaseClass.java:74)\r\n\tat stepDefinitions.AtactinScenario.user_Verify_that_is_him_or_not(AtactinScenario.java:48)\r\n\tat ✽.User Verify that is him or not(src/test/resources/FeatureFiles/AtactinScenario.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});