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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#username_show\"}\n  (Session info: chrome\u003d103.0.5060.134)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-GD2TQ7C\u0027, ip: \u0027192.168.43.244\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_333\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [2e119661e5e82efc80d6fa8899ba5e3c, findElement {using\u003did, value\u003dusername_show}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.134, chrome: {chromedriverVersion: 102.0.5005.61 (0e59bcc00cc4..., userDataDir: C:\\Users\\Sathik\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:58128}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58128/devtoo..., se:cdpVersion: 103.0.5060.134, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 2e119661e5e82efc80d6fa8899ba5e3c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.BaseClass.BaseClass.locators(BaseClass.java:74)\r\n\tat com.stepDefinitions.AtactinScenario.user_Verify_that_is_him_or_not(AtactinScenario.java:49)\r\n\tat ✽.User Verify that is him or not(src/test/resources/FeatureFiles/AtactinScenario.feature:10)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Login with Incorrect Password and Get the Message",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@E2E"
    }
  ]
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
  "name": "User Enters the username as\"sahubarsathik\" and Incorrect password as \"BQ20XV\"",
  "keyword": "When "
});
formatter.match({
  "location": "AtactinScenario.user_Enters_the_username_as_and_Incorrect_password_as(String,String)"
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
  "name": "User Verify that is him or not and Get the Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "AtactinScenario.user_Verify_that_is_him_or_not_and_Get_the_Error_Message()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//b[contains(text(),\u0027Invalid\u0027)]\"}\n  (Session info: chrome\u003d103.0.5060.134)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-GD2TQ7C\u0027, ip: \u0027192.168.43.244\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_333\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [97f7bbda377fea369249da379c1d3563, findElement {using\u003dxpath, value\u003d//b[contains(text(),\u0027Invalid\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.134, chrome: {chromedriverVersion: 102.0.5005.61 (0e59bcc00cc4..., userDataDir: C:\\Users\\Sathik\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:58159}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58159/devtoo..., se:cdpVersion: 103.0.5060.134, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 97f7bbda377fea369249da379c1d3563\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.BaseClass.BaseClass.locators(BaseClass.java:89)\r\n\tat com.stepDefinitions.AtactinScenario.user_Verify_that_is_him_or_not_and_Get_the_Error_Message(AtactinScenario.java:68)\r\n\tat ✽.User Verify that is him or not and Get the Error Message(src/test/resources/FeatureFiles/AtactinScenario.feature:16)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Login with Positive and Enter Wrong CheckIn and CheckOut Date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reg1"
    }
  ]
});
formatter.step({
  "name": "User login on the url of \"https://adactinhotelapp.com/\" on chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User Enters the username as \"sahubarsathik\" and password as \"BQ20XV\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Click the Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User Enters the Following Credentials as \"\u003cLocation\u003e\"and\"\u003cHotels\u003e\" \"\u003cRoom Type\u003e\"and \"\u003cNumber of Rooms\u003e\"and \"\u003cCheck In Date\u003e\" and \"\u003cCheck Out Date\u003e\" and \"\u003cAdults per Room\u003e\" and \"\u003cChildren per Room\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User Click the Search Button",
  "keyword": "Then "
});
formatter.step({
  "name": "User get the Error Message of Regarding Incorrect Dates",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Location",
        "Hotels",
        "Room Type",
        "Number of Rooms",
        "Check In Date",
        "Check Out Date",
        "Adults per Room",
        "Children per Room"
      ]
    },
    {
      "cells": [
        "Sydney",
        "Hotel Creek",
        "Standard",
        "2 - Two",
        "14/05/2022",
        "13/05/2022",
        "2 - Two",
        "0 - None"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with Positive and Enter Wrong CheckIn and CheckOut Date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reg1"
    }
  ]
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
  "name": "User Enters the username as \"sahubarsathik\" and password as \"BQ20XV\"",
  "keyword": "When "
});
formatter.match({
  "location": "AtactinScenario.user_Enters_the_username_as_and_password(String,String)"
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
  "name": "User Enters the Following Credentials as \"Sydney\"and\"Hotel Creek\" \"Standard\"and \"2 - Two\"and \"14/05/2022\" and \"13/05/2022\" and \"2 - Two\" and \"0 - None\"",
  "keyword": "And "
});
formatter.match({
  "location": "AtactinScenario.user_Enters_the_Following_Credentials_as_and_and_and_and_and_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click the Search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "AtactinScenario.user_Click_the_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User get the Error Message of Regarding Incorrect Dates",
  "keyword": "Then "
});
formatter.match({
  "location": "AtactinScenario.user_get_the_Error_Message_of_Regarding_Incorrect_Dates()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Positive Login and Fillup Mandadatory Only",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User login on the url of \"https://adactinhotelapp.com/\" on chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User Enters the username as \"sahubarsathik\" and password as \"BQ20XV\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Click the Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User Enters the Following Credentials as \"\u003cLocation\u003e\" and \"\u003cRoom Type\u003e\"and \"\u003cNumber of Rooms\u003e\"and \"\u003cCheck In Date\u003e\" and \"\u003cCheck Out Date\u003e\" and \"\u003cAdults per Room\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User Click the Search Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Check for hotel is Available or Not",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Location",
        "Room Type",
        "Number of Rooms",
        "Check In Date",
        "Check Out Date",
        "Adults per Room",
        "Children per Room"
      ]
    },
    {
      "cells": [
        "Sydney",
        "Standard",
        "2 - Two",
        "12/05/2022",
        "13/05/2022",
        "2 - Two",
        "0 - None"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Positive Login and Fillup Mandadatory Only",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
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
  "name": "User Enters the username as \"sahubarsathik\" and password as \"BQ20XV\"",
  "keyword": "When "
});
formatter.match({
  "location": "AtactinScenario.user_Enters_the_username_as_and_password(String,String)"
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
  "name": "User Enters the Following Credentials as \"Sydney\" and \"Standard\"and \"2 - Two\"and \"12/05/2022\" and \"13/05/2022\" and \"2 - Two\"",
  "keyword": "And "
});
formatter.match({
  "location": "AtactinScenario.user_Enters_the_Following_Credentials_as_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#location\"}\n  (Session info: chrome\u003d103.0.5060.134)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-GD2TQ7C\u0027, ip: \u0027192.168.43.244\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_333\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [0a4281f737340df653a46ab18270e246, findElement {using\u003did, value\u003dlocation}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.134, chrome: {chromedriverVersion: 102.0.5005.61 (0e59bcc00cc4..., userDataDir: C:\\Users\\Sathik\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:58268}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58268/devtoo..., se:cdpVersion: 103.0.5060.134, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0a4281f737340df653a46ab18270e246\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.BaseClass.BaseClass.locators(BaseClass.java:74)\r\n\tat com.stepDefinitions.AtactinScenario.user_Enters_the_Following_Credentials_as_and_and_and_and_and(AtactinScenario.java:124)\r\n\tat ✽.User Enters the Following Credentials as \"Sydney\" and \"Standard\"and \"2 - Two\"and \"12/05/2022\" and \"13/05/2022\" and \"2 - Two\"(src/test/resources/FeatureFiles/AtactinScenario.feature:34)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User Click the Search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "AtactinScenario.user_Click_the_Search_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Check for hotel is Available or Not",
  "keyword": "Then "
});
formatter.match({
  "location": "AtactinScenario.check_for_hotel_is_Available_or_Not()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Login positive, Generate Id Delete by Searching",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User login on the url of \"https://adactinhotelapp.com/\" on chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User Enters the username as \"sahubarsathik\" and password as \"BQ20XV\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Click the Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User Enters the Following Credentials as \"\u003cLocation\u003e\"and\"\u003cHotels\u003e\" \"\u003cRoom Type\u003e\"and \"\u003cNumber of Rooms\u003e\"and \"\u003cCheck In Date\u003e\" and \"\u003cCheck Out Date\u003e\" and \"\u003cAdults per Room\u003e\" and \"\u003cChildren per Room\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User Click the Search Button",
  "keyword": "Then "
});
formatter.step({
  "name": "User Select the Hotel and Click the Coutinue Button",
  "keyword": "Then "
});
formatter.step({
  "name": "User Enter thier Personal and Payment Details as\"\u003cfirstName\u003e\" and\"\u003claseName\u003e\" and\"\u003caddress\u003e\" and\"\u003ccreditCardNo\u003e\" and \"\u003ccreditCardTYpe\u003e\" and \"\u003cexpMonth\u003e\" and \"\u003cexpYear\u003e\" and\"\u003ccvvNo\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User Get that Oder Number and Click on My Itinerary Button",
  "keyword": "Then "
});
formatter.step({
  "name": "User Search the Order id and Click Go Button",
  "keyword": "Then "
});
formatter.step({
  "name": "User Select that Particualar id Click Cancel Selected Button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Location",
        "Hotels",
        "Room Type",
        "Number of Rooms",
        "Check In Date",
        "Check Out Date",
        "Adults per Room",
        "Children per Room",
        "firstName",
        "lastName",
        "address",
        "creditCardNo",
        "creditCardTYpe",
        "expMonth",
        "expYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "Sydney",
        "Hotel Creek",
        "Standard",
        "2 - Two",
        "12/05/2022",
        "13/05/2022",
        "2 - Two",
        "0 - None",
        "sahubar",
        "sathik",
        "Ramnad",
        "1234567891234567",
        "American Express",
        "June",
        "2022",
        "123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login positive, Generate Id Delete by Searching",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
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
  "name": "User Enters the username as \"sahubarsathik\" and password as \"BQ20XV\"",
  "keyword": "When "
});
formatter.match({
  "location": "AtactinScenario.user_Enters_the_username_as_and_password(String,String)"
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
  "name": "User Enters the Following Credentials as \"Sydney\"and\"Hotel Creek\" \"Standard\"and \"2 - Two\"and \"12/05/2022\" and \"13/05/2022\" and \"2 - Two\" and \"0 - None\"",
  "keyword": "And "
});
formatter.match({
  "location": "AtactinScenario.user_Enters_the_Following_Credentials_as_and_and_and_and_and_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click the Search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "AtactinScenario.user_Click_the_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Select the Hotel and Click the Coutinue Button",
  "keyword": "Then "
});
formatter.match({
  "location": "AtactinScenario.user_Select_the_Hotel_and_Click_the_Coutinue_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter thier Personal and Payment Details as\"sahubar\" and\"\u003claseName\u003e\" and\"Ramnad\" and\"1234567891234567\" and \"American Express\" and \"June\" and \"2022\" and\"123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AtactinScenario.user_Enter_thier_Personal_and_Payment_Details_as_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Get that Oder Number and Click on My Itinerary Button",
  "keyword": "Then "
});
formatter.match({
  "location": "AtactinScenario.user_Get_that_Oder_Number_and_Click_on_My_Itinerary_Button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.id: order_no\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-GD2TQ7C\u0027, ip: \u0027192.168.43.244\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_333\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.BaseClass.BaseClass.locators(BaseClass.java:74)\r\n\tat com.stepDefinitions.AtactinScenario.user_Get_that_Oder_Number_and_Click_on_My_Itinerary_Button(AtactinScenario.java:178)\r\n\tat ✽.User Get that Oder Number and Click on My Itinerary Button(src/test/resources/FeatureFiles/AtactinScenario.feature:50)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User Search the Order id and Click Go Button",
  "keyword": "Then "
});
formatter.match({
  "location": "AtactinScenario.user_Search_the_Order_id_and_Click_Go_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Select that Particualar id Click Cancel Selected Button",
  "keyword": "Then "
});
formatter.match({
  "location": "AtactinScenario.user_Select_that_Particualar_id_Click_Cancel_Selected_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "User Get the all Booked history Order Number",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke1"
    }
  ]
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
  "name": "User Enters the username as \"sahubarsathik\" and password as \"BQ20XV\"",
  "keyword": "When "
});
formatter.match({
  "location": "AtactinScenario.user_Enters_the_username_as_and_password(String,String)"
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
  "name": "User Click the Booked Itinerary and get the All OderNumber",
  "keyword": "And "
});
formatter.match({
  "location": "AtactinScenario.user_Click_the_Booked_Itinerary_and_get_the_All_OderNumber()"
});
formatter.result({
  "status": "passed"
});
});