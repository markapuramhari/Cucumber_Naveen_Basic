package com.cropin.testRunner;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/main/java/com/cropin/AppFeatures/OrangeHRM-Login.feature", 
        //features = "@target/rerun.txt",
        glue = "com.cropin.stepDefinitions",
        dryRun = false, //true==check all methods are ready for execution or not,
       // tags = "@Smoke",     // Smoke (any where in Scenarios all Run )    // tags==Run Specific Group of Scenarios
       // tags = "@Regression and @End2End",  //Regression and End2End
         //tags = "@Regression or @End2End",       //Regression or End2End
       // tags ="~@Regression and @End2End and ~@Smoke",        //only End2End
        monochrome = true,  //true==good format in console
        //strict = true,      //true==
        plugin = {"pretty",
                "json:target/json-output",
                "junit:target/junit_xml_output/junit.xml",
                "rerun:target/rerun.txt"},
       publish =true

)
public class MyRunner {

}
