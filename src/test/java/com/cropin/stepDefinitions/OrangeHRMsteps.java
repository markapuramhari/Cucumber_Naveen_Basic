package com.cropin.stepDefinitions;

import io.cucumber.java.*;
import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class OrangeHRMsteps {
	
	
	WebDriver driver;

    @Before         //Hooks
    public void setUp()
    {
        System.out.println("....................Launching Browser..............");

    }

    @Given("user launch chrome browser")
    public void user_launch_chrome_browser()
    {
        System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"/Drivers/chromedriver.exe");
        driver=new ChromeDriver();
        driver.manage().window().maximize();
    }

    @When("user open OrangeHRM homepage")
    public void user_open_OrangeHRM_homepage()
    {
        driver.get("https://opensource-demo.orangehrmlive.com/");
    }

    @Then("user verify that the logo presence on homepage")
    public void user_verify_that_the_logo_presence_on_homepage()
    {
        boolean status= driver.findElement(By.id("divLogo")).isDisplayed();
        Assert.assertEquals(true,status);
    }

    @Then("enter username {string} and password {string}")
    public void enter_username_and_password(String uname, String pwd)
    {
        driver.findElement(By.id("txtUsername")).sendKeys(uname);
        driver.findElement(By.id("txtPassword")).sendKeys(pwd);
    }



    @Then("click login button")
    public void click_login_button()
    {
        driver.findElement(By.id("btnLogin")).click();
    }

    @Then("user must successfully login to the Dashboard page")
    public void user_must_successfully_login_to_the_Dashboard_page()
    {
        String text= driver.findElement(By.xpath("//h1[text()='Dashboard']")).getText();
        Assert.assertEquals("Dashboard",text);
    }


    @Then("user must Invalid login page")
    public void user_must_Invalid_login_page()
    {
        String text= driver.findElement(By.xpath("//span[@id='spanMessage']")).getText();
        Assert.assertTrue(text,true);
    }

    @Then("close browser")
    public void close_browser() throws InterruptedException
    {
        Thread.sleep(3000);
        driver.close();
    }

    @After          //Hooks
    public void tearDown()
    {
        System.out.println("-------------------close Browser-----------------------");
    }


}
