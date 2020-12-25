$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/com/cropin/AppFeatures/OrangeHRM-Login.feature");
formatter.feature({
  "name": "OrangeHRM Login",
  "description": "  Description:.........OrangeHRM Login.................",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login to OrangeHRM with valid credentials",
  "description": "  Description:.........#Check valid Login..................",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "name": "enter username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "name": "user must successfully login to the Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ]
    }
  ]
});
formatter.background({
  "name": "background steps",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "OrangeHRMsteps.user_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user open OrangeHRM homepage",
  "keyword": "When "
});
formatter.match({
  "location": "OrangeHRMsteps.user_open_OrangeHRM_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify that the logo presence on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeHRMsteps.user_verify_that_the_logo_presence_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login to OrangeHRM with valid credentials",
  "description": "  Description:.........#Check valid Login..................",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "name": "enter username \"Admin\" and password \"admin123\"",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRMsteps.enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRMsteps.click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user must successfully login to the Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeHRMsteps.user_must_successfully_login_to_the_Dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRMsteps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});